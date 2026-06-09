const fs = require('fs');
const file = 'c:\\\\oph work\\\\new-sellerslogin\\\\src\\\\components\\\\landing\\\\PricingPageContent.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add imports
const targetImports = `import { PricingFaqSection } from "./PricingFaqSection";`;
const replacementImports = `import { PricingFaqSection } from "./PricingFaqSection";
import { PricingComparisonTable } from "./PricingComparisonTable";
import { TestimonialsSection } from "./TestimonialsSection";
import { BrandsLoveSection } from "./BrandsLoveSection";`;

content = content.replace(targetImports, replacementImports);

// 2. Add sections
const targetSections = `      </section>

      <PricingFaqSection />`;

const replacementSections = `      </section>

      <PricingComparisonTable />
      <TestimonialsSection />
      <BrandsLoveSection />
      
      <PricingFaqSection />`;

content = content.replace(targetSections, replacementSections);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated PricingPageContent.tsx');
