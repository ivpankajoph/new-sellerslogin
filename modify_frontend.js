const fs = require('fs');
const file = 'c:\\\\oph work\\\\new-sellerslogin\\\\src\\\\app\\\\vendor\\\\registration\\\\business-details\\\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /const result = await dispatch\(updateVendorBusiness\(\{ formData \}\)\);[\s\S]*?if \(updateVendorBusiness\.fulfilled\.match\(result\)\) \{[\s\S]*?const adminRedirectUrl = buildAdminAutoLoginUrl\(\{[\s\S]*?token,[\s\S]*?vendor: vendorData,[\s\S]*?\}\);/;

const replacementStr = `const result = await dispatch(updateVendorBusiness({ formData }));

      if (updateVendorBusiness.fulfilled.match(result)) {
        const successMessage =
          (result.payload as { message?: string })?.message ??
          "Your business details have been saved successfully.";
        const vendorData =
          (result.payload as { vendor?: Record<string, unknown> })?.vendor ?? null;
        const adminRedirectUrl = buildAdminAutoLoginUrl({
          token,
          vendor: vendorData,
        });

        // RAZORPAY INTEGRATION START
        const selectedPlanName = localStorage.getItem("selectedPlanName");
        let selectedPlanPrice = localStorage.getItem("selectedPlanPrice");

        if (selectedPlanName && selectedPlanName !== "null" && selectedPlanPrice && selectedPlanPrice !== "null") {
           // Parse price to integer, stripping non-numeric characters
           const numericPrice = parseInt(selectedPlanPrice.replace(/\\D/g, ''), 10);
           
           try {
             const orderRes = await fetch(\`\${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1'}/vendor/billing/create-order\`, {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
                 "Authorization": \`Bearer \${token}\`
               },
               body: JSON.stringify({
                 plan: selectedPlanName,
                 amount: numericPrice
               })
             });
             const orderData = await orderRes.json();
             
             if (orderData.success && orderData.data) {
                const loadRazorpay = () => new Promise((resolve) => {
                  if (document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]')) {
                      resolve(true);
                      return;
                  }
                  const script = document.createElement('script');
                  script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                  script.onload = () => resolve(true);
                  script.onerror = () => resolve(false);
                  document.body.appendChild(script);
                });
                
                await loadRazorpay();
                
                const options = {
                  key: orderData.data.key_id,
                  amount: orderData.data.amount,
                  currency: orderData.data.currency,
                  name: "Ophmate Sellers",
                  description: \`Subscription for \${selectedPlanName} Plan\`,
                  order_id: orderData.data.id,
                  handler: async function (response: any) {
                     try {
                        const verifyRes = await fetch(\`\${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1'}/vendor/billing/verify\`, {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            "Authorization": \`Bearer \${token}\`
                          },
                          body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature
                          })
                        });
                        const verifyData = await verifyRes.json();
                        if (verifyData.success) {
                           Swal.fire("Success", "Payment successful!", "success").then(() => {
                              if (adminRedirectUrl) {
                                window.location.replace(adminRedirectUrl);
                              } else {
                                router.push("/sign-in");
                              }
                           });
                        } else {
                           Swal.fire("Error", "Payment verification failed. Please contact support.", "error");
                           setIsSubmitting(false); // Let them retry
                        }
                     } catch (err) {
                        Swal.fire("Error", "Failed to verify payment.", "error");
                        setIsSubmitting(false);
                     }
                  },
                  prefill: {
                    name: form.name,
                    email: form.email,
                    contact: form.phone_no
                  },
                  theme: {
                    color: "#7c3aed"
                  },
                  modal: {
                    ondismiss: function() {
                       Swal.fire("Pending", "Payment is pending. Please click 'Submit' again to retry payment.", "info");
                       setIsSubmitting(false);
                    }
                  }
                };
                
                const rzp = new (window as any).Razorpay(options);
                rzp.on('payment.failed', function (response: any){
                   Swal.fire("Error", response.error.description || "Payment failed", "error");
                   setIsSubmitting(false);
                });
                rzp.open();
                return; // Return early, don't redirect yet
             } else {
                Swal.fire("Error", "Failed to initialize payment gateway.", "error");
                setIsSubmitting(false);
                return;
             }
           } catch(err) {
             console.error(err);
             Swal.fire("Error", "Payment system error. Please try again.", "error");
             setIsSubmitting(false);
             return;
           }
        }
        // RAZORPAY INTEGRATION END`;

if (regex.test(content)) {
    content = content.replace(regex, replacementStr);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully updated page.tsx with regex');
} else {
    console.log('Could not find target regex in page.tsx');
}
