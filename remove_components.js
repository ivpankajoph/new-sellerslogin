const fs = require('fs');
const file = 'c:\\\\oph work\\\\new-sellerslogin\\\\src\\\\components\\\\landing\\\\PricingPageContent.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/\r\n/g, '\n');

const targetImports = `import { PricingComparisonTable } from "./PricingComparisonTable";
import { TestimonialsSection } from "./TestimonialsSection";
import { BrandsLoveSection } from "./BrandsLoveSection";`;

content = content.replace(targetImports, '');

const targetSections = `      <PricingComparisonTable />
      <TestimonialsSection />
      <BrandsLoveSection />
      
`;

content = content.replace(targetSections, '');

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully removed components');
