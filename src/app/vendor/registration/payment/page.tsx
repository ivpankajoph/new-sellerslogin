"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Image from "next/image";
import { CreditCard, ArrowRight } from "lucide-react";
import type { RootState } from "@/store";

export default function PaymentPendingPage() {
  const router = useRouter();
  const token = useSelector(
    (state: RootState) => (state as any).auth?.token ?? "",
  );
  const authUser = useSelector(
    (state: RootState) => (state as any).auth?.data ?? null,
  );

  const [selectedPlanName, setSelectedPlanName] = useState("");
  const [numericPrice, setNumericPrice] = useState(0);
  const [currency, setCurrency] = useState("INR");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [displayedPrice, setDisplayedPrice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [adminRedirectUrl, setAdminRedirectUrl] = useState("");
  const [originalPrice, setOriginalPrice] = useState(0);
  const [referralCodeInput, setReferralCodeInput] = useState("");
  const [appliedReferral, setAppliedReferral] = useState("");
  const [isApplyingReferral, setIsApplyingReferral] = useState(false);
  const [referralError, setReferralError] = useState("");
  const [vendorPhone, setVendorPhone] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const planName = localStorage.getItem("selectedPlanName") || "Startup";
      const planPrice = localStorage.getItem("selectedPlanPrice") || "1199";
      const planCurrency =
        localStorage.getItem("selectedPlanCurrency") || "INR";
      const planBillingCycle = localStorage.getItem("selectedPlanBillingCycle") || "monthly";
      const planDisplayedPrice = localStorage.getItem("selectedPlanDisplayedPrice") || "INR 1,199/mo";
      const redirectUrl =
        sessionStorage.getItem("vendor_post_payment_redirect") || "";
      const savedPhone = localStorage.getItem("vendor_phone") || sessionStorage.getItem("vendor_phone") || "";

      setSelectedPlanName(planName);
      const parsedPrice = parseInt(planPrice.replace(/\D/g, ""), 10) || 1199;
      setNumericPrice(parsedPrice);
      setOriginalPrice(parsedPrice);
      setCurrency(planCurrency);
      setBillingCycle(planBillingCycle);
      setDisplayedPrice(planDisplayedPrice);
      setAdminRedirectUrl(redirectUrl);
      setVendorPhone(savedPhone);
    }
  }, []);

  const handleApplyReferral = async () => {
    if (!referralCodeInput.trim()) {
      setReferralError("Please enter a referral code.");
      return;
    }
    setReferralError("");
    setIsApplyingReferral(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1"}/vendor/billing/apply-referral`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ referral_code: referralCodeInput.trim() }),
        },
      );
      const data = await res.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Congratulations!",
          text: data.message || "Referral code applied successfully.",
          showConfirmButton: false,
          timer: 2000,
          backdrop: `
            rgba(0,0,123,0.4)
            url("https://sweetalert2.github.io/images/nyan-cat.gif")
            left top
            no-repeat
          `, // Animated way
        });
        setAppliedReferral(referralCodeInput.trim());
        setNumericPrice(data.amount || 1);
        setReferralCodeInput("");
      } else {
        setReferralError(data.message || "Invalid referral code.");
      }
    } catch (err) {
      setReferralError("Something went wrong. Please try again.");
    } finally {
      setIsApplyingReferral(false);
    }
  };

  const handleRemoveReferral = () => {
    setAppliedReferral("");
    setNumericPrice(originalPrice);
    setReferralCodeInput("");
    setReferralError("");
  };

  const handlePayNow = async () => {
    if (!token) {
      Swal.fire(
        "Error",
        "Authentication required. Please log in again.",
        "error",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const orderRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1"}/vendor/billing/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            plan: selectedPlanName,
            amount: Math.round(numericPrice * 1.18),
            currency: currency,
            billing_cycle: billingCycle,
            ...(appliedReferral ? { referral_code: appliedReferral } : {}),
          }),
        },
      );
      const orderData = await orderRes.json();

      if (orderData.success && orderData.data) {
        const loadRazorpay = () =>
          new Promise((resolve) => {
            if (
              document.querySelector(
                'script[src="https://checkout.razorpay.com/v1/checkout.js"]',
              )
            ) {
              resolve(true);
              return;
            }
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
          });

        await loadRazorpay();

        const options = {
          key: orderData.data.key_id,
          amount: orderData.data.amount,
          currency: orderData.data.currency,
          name: "Sellers Login",
          description: `Subscription for ${selectedPlanName} Plan`,
          order_id: orderData.data.order_id,
          handler: async function (response: any) {
            try {
              const verifyRes = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1"}/vendor/billing/verify`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify({
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                  }),
                },
              );
              const verifyData = await verifyRes.json();
              if (verifyData.success) {
                if (typeof window !== "undefined") {
                  localStorage.removeItem("vendor_phone");
                  localStorage.removeItem("vendor_country_code");
                  localStorage.removeItem("vendor_email");
                  localStorage.removeItem("vendor_registration_step");
                  sessionStorage.removeItem("vendor_phone");
                  sessionStorage.removeItem("vendor_country_code");
                  sessionStorage.removeItem("vendor_email");
                  sessionStorage.removeItem("vendor_registration_step");
                }
                Swal.fire("Success", "Payment successful!", "success").then(
                  () => {
                    if (adminRedirectUrl) {
                      window.location.replace(adminRedirectUrl);
                    } else {
                      router.push("/sign-in");
                    }
                  },
                );
              } else {
                console.error("Verification failed:", JSON.stringify(verifyData));
                Swal.fire(
                  "Error",
                  verifyData.message || "Payment verification failed. Please contact support.",
                  "error",
                );
                setIsSubmitting(false);
              }
            } catch (err: any) {
              console.error("Error calling verify endpoint:", err);
              Swal.fire("Error", err.message || "Failed to verify payment.", "error");
              setIsSubmitting(false);
            }
          },
          prefill: {
            name: authUser?.name || authUser?.business_name || "",
            email: authUser?.email || "",
            contact: vendorPhone || authUser?.phone_no || authUser?.phone || "",
          },
          theme: {
            color: "#7c3aed",
          },
          modal: {
            ondismiss: function () {
              Swal.fire(
                "Pending",
                "Payment is pending. Please click 'Pay Now' to retry payment.",
                "info",
              );
              setIsSubmitting(false);
            },
          },
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.on("payment.failed", function (response: any) {
          Swal.fire(
            "Error",
            response.error.description || "Payment failed",
            "error",
          );
          setIsSubmitting(false);
        });
        rzp.open();
      } else {
        Swal.fire("Error", "Failed to initialize payment gateway.", "error");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Payment system error. Please try again.", "error");
      setIsSubmitting(false);
    }
  };

  const showPlanDetails = () => {
    let featuresHtml = "";
    if (selectedPlanName.toLowerCase().includes("startup")) {
      featuresHtml = `<ul style="text-align: left; margin-left: 20px; line-height: 1.6;">
        <li>Up to 5 websites on the free plan</li>
        <li>1 connected app at a time</li>
        <li>Basic storefront management</li>
        <li>Standard support</li>
      </ul>`;
    } else {
      featuresHtml = `<ul style="text-align: left; margin-left: 20px; line-height: 1.6;">
        <li>Create unlimited websites for your business</li>
        <li>Connect multiple apps without free-plan limits</li>
        <li>Advanced growth and storefront scaling tools</li>
        <li>Priority support and faster setup help</li>
      </ul>`;
    }

    Swal.fire({
      title: `${selectedPlanName} Plan`,
      html: `
        <div style="font-size: 14px; color: #475569; text-align: left; padding: 10px;">
          <div style="background: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 16px;">
            <p style="margin-bottom: 4px; font-size: 16px;"><strong>Price:</strong> <span style="color: #e11d48;">${displayedPrice}</span> <span style="font-size: 12px;">(Inc. 18% GST)</span></p>
            <p style="margin: 0;"><strong>Billing Cycle:</strong> ${billingCycle.charAt(0).toUpperCase() + billingCycle.slice(1)}</p>
          </div>
          <p style="margin-bottom: 8px; font-weight: bold; color: #0f172a;">Key Features:</p>
          ${featuresHtml}
        </div>
      `,
      icon: "info",
      confirmButtonText: "Close",
      confirmButtonColor: "#7c3aed"
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 py-12">
      <main className="w-full">
        <div className="vendor-shell">
          <div className="vendor-surface-card mx-auto max-w-2xl p-8 text-center shadow-xl shadow-slate-200/50 sm:p-12">
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-violet-100 text-violet-700 ring-1 ring-violet-200">
              <CreditCard className="h-10 w-10" />
            </span>
            <p className="vendor-step-pill mt-8">Payment Pending</p>

            <div className="mt-6 flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-3">
                {appliedReferral ? (
                  <>
                    <span className="text-3xl font-bold text-slate-400 line-through">
                      {currency} {Math.round(originalPrice * 1.18)}
                    </span>
                    <span className="text-5xl font-extrabold text-red-600">
                      {currency} {Math.round(numericPrice * 1.18)}
                    </span>
                  </>
                ) : (
                  <span className="text-5xl font-extrabold text-red-600">
                    {currency} {Math.round(numericPrice * 1.18)}
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                {displayedPrice} {billingCycle === "quarterly" ? "× 3 Months" : ""} (Inc. 18% GST)
              </p>
            </div>

            <h1 className="vendor-display mt-4 text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Complete Your Subscription
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600">
              Your registration has been successfully verified! Please complete
              your payment for the <strong onClick={showPlanDetails} className="text-red-600 underline cursor-pointer hover:text-red-700 underline-offset-4 decoration-dashed decoration-red-600/50 transition-colors" title="View Plan Details">{selectedPlanName}</strong> plan ({billingCycle}) to activate your
              dashboard.
            </p>


            {!appliedReferral && (
              <div className="mx-auto max-w-md">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Have a referral code?"
                    value={referralCodeInput}
                    onChange={(e) =>
                      setReferralCodeInput(e.target.value.toUpperCase())
                    }
                    className="flex-1 rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                  />
                  <button
                    type="button"
                    onClick={handleApplyReferral}
                    disabled={isApplyingReferral}
                    className="inline-flex h-[46px] items-center justify-center rounded-md bg-slate-900 px-6 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-70"
                  >
                    {isApplyingReferral ? "Applying..." : "Apply"}
                  </button>
                </div>
                {referralError && (
                  <p className="mt-2 text-sm text-red-500 text-left">
                    {referralError}
                  </p>
                )}
              </div>
            )}

            {appliedReferral && (
              <div className="mx-auto mt-6 max-w-md rounded-md bg-emerald-50 border border-emerald-200 p-3 text-sm text-emerald-700 font-semibold flex items-center justify-between gap-2">
                <span className="flex items-center gap-2">🎉 Referral Code Applied: <strong>{appliedReferral}</strong></span>
                <button
                  type="button"
                  onClick={handleRemoveReferral}
                  className="text-emerald-700 hover:text-emerald-900 hover:underline font-bold text-xs"
                >
                  Remove
                </button>
              </div>
            )}

            <div className="mt-8 flex flex-col items-center justify-center gap-4">
              <button
                type="button"
                onClick={handlePayNow}
                disabled={isSubmitting}
                className="inline-flex min-h-14 w-full sm:w-auto items-center justify-center gap-2 border border-violet-700 bg-violet-700 px-10 text-base font-semibold text-white transition hover:bg-violet-800 disabled:opacity-70"
              >
                {isSubmitting ? "Processing..." : "Pay Now"}
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="text-sm font-medium text-slate-500">Cancel at any time. No hidden fees.</p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
              <Image
                src="/sellerslogin-logo.svg"
                alt="SellersLogin"
                width={20}
                height={20}
              />
              <span>Secured by Razorpay</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
