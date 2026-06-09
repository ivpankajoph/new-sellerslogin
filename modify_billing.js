const fs = require('fs');
const file = 'c:\\\\oph work\\\\ophmate-backend\\\\controllers\\\\vendor\\\\billing.controller.js';
let content = fs.readFileSync(file, 'utf8');

// Normalize line endings
content = content.replace(/\r\n/g, '\n');

const targetFunction = `export const createVendorSubscriptionOrder = async (req, res) => {
  try {
    const vendorId = getVendorIdFromReq(req);
    const vendor = await Vendor.findById(vendorId);

    if (!vendor) {
      return res.status(404).json({ success: false, message: "Vendor not found" });
    }

    await ensureSubscriptionState(vendor);

    const order = await createRazorpayOrder({
      amount: PREMIUM_MONTHLY_PRICE * 100,
      currency: "INR",
      receipt: buildReceipt(vendor._id),
      notes: {
        vendor_id: String(vendor._id),
        vendor_email: String(vendor.email || ""),
        plan: "premium",
        billing_cycle: "monthly",
      },
    });

    vendor.subscription = {
      ...vendor.subscription,
      monthly_price: PREMIUM_MONTHLY_PRICE,
      original_price: PREMIUM_ORIGINAL_PRICE,
      currency: "INR",
      discount_label: PREMIUM_DISCOUNT_LABEL,
      last_order_id: String(order.id || ""),
    };
    await vendor.save();`;

const replacementFunction = `export const createVendorSubscriptionOrder = async (req, res) => {
  try {
    const vendorId = getVendorIdFromReq(req);
    const vendor = await Vendor.findById(vendorId);

    // Accept dynamic amount and plan from frontend. Fallback to PREMIUM_MONTHLY_PRICE if not provided
    const { amount, plan } = req.body || {};
    const finalAmount = amount ? parseInt(amount, 10) : PREMIUM_MONTHLY_PRICE;
    const finalPlan = plan ? String(plan) : "premium";

    if (!vendor) {
      return res.status(404).json({ success: false, message: "Vendor not found" });
    }

    await ensureSubscriptionState(vendor);

    const order = await createRazorpayOrder({
      amount: finalAmount * 100,
      currency: "INR",
      receipt: buildReceipt(vendor._id),
      notes: {
        vendor_id: String(vendor._id),
        vendor_email: String(vendor.email || ""),
        plan: finalPlan,
        billing_cycle: "monthly",
      },
    });

    vendor.subscription = {
      ...vendor.subscription,
      monthly_price: finalAmount,
      original_price: finalAmount, // Assuming no discount if dynamic
      currency: "INR",
      discount_label: "",
      last_order_id: String(order.id || ""),
      plan_name: finalPlan, // Store plan name if needed
    };
    await vendor.save();`;

if (content.includes(targetFunction)) {
    content = content.replace(targetFunction, replacementFunction);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully updated billing.controller.js');
} else {
    console.log('Could not find target function after normalizing line endings');
}
