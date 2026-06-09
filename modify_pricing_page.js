const fs = require('fs');
const file = 'c:\\\\oph work\\\\new-sellerslogin\\\\src\\\\components\\\\landing\\\\PricingPageContent.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetModalText = `              <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                You have selected the <strong className="text-violet-700">{selectedPlan.name}</strong> plan at <strong>{showRegularPrice ? selectedPlan.priceAnnually : selectedPlan.priceMonthly}</strong>.
              </p>`;

const replacementModalText = `              <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                You have selected the <strong className="text-violet-700">{selectedPlan.name}</strong> plan at <strong>{showRegularPrice ? (selectedPlan.currency === "USD" ? (selectedPlan as any).priceAnnuallyUSD : selectedPlan.priceAnnually) : (selectedPlan.currency === "USD" ? (selectedPlan as any).priceMonthlyUSD : selectedPlan.priceMonthly)}</strong>.
              </p>`;

content = content.replace(targetModalText, replacementModalText);

const targetHandleSelect = `  const handleSelectPlan = (plan: any) => {
    setSelectedPlan(plan);
  };

  const handleConfirmPlan = () => {
    if (selectedPlan) {
      const price = showRegularPrice ? selectedPlan.priceAnnually : selectedPlan.priceMonthly;
      localStorage.setItem("selectedPlanName", selectedPlan.name);
      localStorage.setItem("selectedPlanPrice", price);
      router.push("/vendor/registration");
    }
  };`;

const replacementHandleSelect = `  const handleSelectPlan = (plan: any) => {
    setSelectedPlan(plan);
  };

  const handleConfirmPlan = () => {
    if (selectedPlan) {
      const price = showRegularPrice 
        ? (selectedPlan.currency === "USD" ? (selectedPlan as any).priceAnnuallyUSD : selectedPlan.priceAnnually)
        : (selectedPlan.currency === "USD" ? (selectedPlan as any).priceMonthlyUSD : selectedPlan.priceMonthly);
      localStorage.setItem("selectedPlanName", selectedPlan.name);
      localStorage.setItem("selectedPlanPrice", price);
      localStorage.setItem("selectedPlanCurrency", selectedPlan.currency || "INR");
      router.push("/vendor/registration");
    }
  };`;

content = content.replace(targetHandleSelect, replacementHandleSelect);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated PricingPageContent.tsx');
