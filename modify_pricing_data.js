const fs = require('fs');
const file = 'c:\\\\oph work\\\\new-sellerslogin\\\\src\\\\lib\\\\pricingData.ts';
let content = fs.readFileSync(file, 'utf8');

// Modify pricingData.ts to add USD fields
content = content.replace(
  /priceMonthly: "INR 999\/mo",\s*priceAnnually: "INR 1,999\/mo",\s*sourceNote: "Regular INR 1,999\/mo\. After 50% off: INR 999\/mo\.",/,
  `priceMonthly: "INR 999/mo",
    priceAnnually: "INR 1,999/mo",
    sourceNote: "Regular INR 1,999/mo. After 50% off: INR 999/mo.",
    priceMonthlyUSD: "USD 12/mo",
    priceAnnuallyUSD: "USD 24/mo",
    sourceNoteUSD: "Regular USD 24/mo. After 50% off: USD 12/mo.",`
);

content = content.replace(
  /priceMonthly: "INR 2,499\/mo",\s*priceAnnually: "INR 4,999\/mo",\s*sourceNote: "Regular INR 4,999\/mo\. After 50% off: INR 2,499\/mo\.",/,
  `priceMonthly: "INR 2,499/mo",
    priceAnnually: "INR 4,999/mo",
    sourceNote: "Regular INR 4,999/mo. After 50% off: INR 2,499/mo.",
    priceMonthlyUSD: "USD 30/mo",
    priceAnnuallyUSD: "USD 60/mo",
    sourceNoteUSD: "Regular USD 60/mo. After 50% off: USD 30/mo.",`
);

// We should also handle "Custom Quote" if it has fields
content = content.replace(
  /priceMonthly: "Custom Quote",\s*priceAnnually: "Custom Quote",\s*sourceNote: "Custom quote with enterprise rollout and commercial terms\.",/,
  `priceMonthly: "Custom Quote",
    priceAnnually: "Custom Quote",
    sourceNote: "Custom quote with enterprise rollout and commercial terms.",
    priceMonthlyUSD: "Custom Quote",
    priceAnnuallyUSD: "Custom Quote",
    sourceNoteUSD: "Custom quote with enterprise rollout and commercial terms.",`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated pricingData.ts');
