const fs = require('fs');
const file = 'c:\\\\oph work\\\\new-sellerslogin\\\\src\\\\app\\\\vendor\\\\registration\\\\business-details\\\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = `        const selectedPlanName = localStorage.getItem("selectedPlanName");
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
             });`;

const replacementStr = `        const selectedPlanName = localStorage.getItem("selectedPlanName");
        let selectedPlanPrice = localStorage.getItem("selectedPlanPrice");
        const selectedPlanCurrency = localStorage.getItem("selectedPlanCurrency") || "INR";

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
                 amount: numericPrice,
                 currency: selectedPlanCurrency
               })
             });`;

content = content.replace(targetStr, replacementStr);
fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated business-details/page.tsx');
