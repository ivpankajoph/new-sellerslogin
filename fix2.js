const fs = require('fs');

const pageFile = 'c:/oph work/new-sellerslogin/src/app/vendor/registration/page.tsx';
const businessFile = 'c:/oph work/new-sellerslogin/src/app/vendor/registration/business-details/page.tsx';

let pageContent = fs.readFileSync(pageFile, 'utf8');
pageContent = pageContent.replace(/<footer[\s\S]*?<\/footer>/g, '');
fs.writeFileSync(pageFile, pageContent);

let businessContent = fs.readFileSync(businessFile, 'utf8');
businessContent = businessContent.replace(/<footer[\s\S]*?<\/footer>/g, '');

const gstRegex = /({isIndianBusiness \? \([\s\S]*?)(?:<\/div>\s*<\/div>\s*\) : null} \*\/)/;
const match = businessContent.match(gstRegex);
if (match) {
  const fields = match[1];
  
  const insertRegex = /(<SearchableMultiSelectField\s*label="Category[\s\S]*?\/>\s*<\/div>\s*)(<\/div>\s*<\/div>\s*\) : null})/;
  businessContent = businessContent.replace(insertRegex, `$1\n\n                ${fields}\n\n              $2`);
  
  businessContent = businessContent.replace(/{\/\* {currentStep === "other" \? \([\s\S]*?\) : null} \*\//, '');
} else {
  console.log("Could not match GST regex.");
}

fs.writeFileSync(businessFile, businessContent);
console.log("Done fix2.");
