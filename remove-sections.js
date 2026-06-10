const fs = require('fs');
const file = 'c:/oph work/new-sellerslogin/src/app/vendor/registration/business-details/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/<Link\s+href=\{vendorOverviewUrl\}[\s\S]*?Vendor Access\s*<\/Link>/, '');

const photoRegex = /<div className="md:col-span-2">\s*<FieldLabel label="Company Profile Photo" \/>[\s\S]*?{errors\.avatar \? <p className="mt-2 text-sm text-red-600">{errors\.avatar}<\/p> : null}\s*<\/div>/;
content = content.replace(photoRegex, '');

fs.writeFileSync(file, content);
console.log("Removed sections.");
