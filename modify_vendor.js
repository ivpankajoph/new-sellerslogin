const fs = require('fs');
const file = 'c:\\\\oph work\\\\ophmate-backend\\\\controllers\\\\vendors\\\\vendor.controller.js';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/\r\n/g, '\n');

const targetStr = `    if (existingVendor && hasCompletedVendorLoginSetup(existingVendor)) {
      return res.status(400).json({
        message:
          "This phone number is already registered. Please sign in with your existing account.",
      });
    }

    if (existingVendor && existingVendor.is_profile_completed) {
      return res.status(400).json({
        message: "You already filled the form, kindly wait for approval",
      });
    }`;

// Modification: Allow if subscription isn't active
const replacementStr = `    // Allow if payment is pending. We check if subscription is active or not.
    const isSubscriptionActive = existingVendor && existingVendor.subscription && existingVendor.subscription.status === 'active';

    if (existingVendor && hasCompletedVendorLoginSetup(existingVendor) && isSubscriptionActive) {
      return res.status(400).json({
        message:
          "This phone number is already registered. Please sign in with your existing account.",
      });
    }

    if (existingVendor && existingVendor.is_profile_completed && isSubscriptionActive) {
      return res.status(400).json({
        message: "You already filled the form, kindly wait for approval",
      });
    }`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully updated vendor.controller.js');
} else {
    console.log('Could not find target string in vendor.controller.js');
}
