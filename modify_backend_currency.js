const fs = require('fs');
const file = 'c:\\\\oph work\\\\ophmate-backend\\\\controllers\\\\vendor\\\\billing.controller.js';
let content = fs.readFileSync(file, 'utf8');

const regex = /const \{ amount, plan \} = req\.body \|\| \{\};\n    const finalAmount = amount \? parseInt\(amount, 10\) : PREMIUM_MONTHLY_PRICE;\n    const finalPlan = plan \? String\(plan\) : "premium";\n\n    if \(\!vendor\) \{/;

const replacement = `const { amount, plan, currency } = req.body || {};
    const finalAmount = amount ? parseInt(amount, 10) : PREMIUM_MONTHLY_PRICE;
    const finalPlan = plan ? String(plan) : "premium";
    const finalCurrency = currency ? String(currency) : "INR";

    if (!vendor) {`;

content = content.replace(regex, replacement);

const orderRegex = /const order = await createRazorpayOrder\(\{\n      amount: finalAmount \* 100,\n      currency: "INR",\n      receipt: buildReceipt\(vendor\._id\),/;

const orderReplacement = `const order = await createRazorpayOrder({
      amount: finalAmount * 100,
      currency: finalCurrency,
      receipt: buildReceipt(vendor._id),`;

content = content.replace(orderRegex, orderReplacement);

const subRegex = /vendor\.subscription = \{\n      \.\.\.vendor\.subscription,\n      monthly_price: finalAmount,\n      original_price: finalAmount,\n      currency: "INR",/;

const subReplacement = `vendor.subscription = {
      ...vendor.subscription,
      monthly_price: finalAmount,
      original_price: finalAmount,
      currency: finalCurrency,`;

content = content.replace(subRegex, subReplacement);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated backend billing.controller.js');
