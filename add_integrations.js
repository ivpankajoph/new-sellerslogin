const fs = require('fs');
const file = 'c:\\\\oph work\\\\new-sellerslogin\\\\src\\\\components\\\\landing\\\\PricingPageContent.tsx';
let content = fs.readFileSync(file, 'utf8');

const importRegex = /import \{ PricingFaqSection \} from "\.\/PricingFaqSection";/;
const importReplacement = `import { PricingFaqSection } from "./PricingFaqSection";\nimport { IntegrationsSection } from "./IntegrationsSection";`;
content = content.replace(importRegex, importReplacement);

const sectionRegex = /      <\/section>\n\n      <PricingFaqSection \/>/;
const sectionReplacement = `      </section>\n\n      <IntegrationsSection />\n\n      <PricingFaqSection />`;
content = content.replace(sectionRegex, sectionReplacement);

fs.writeFileSync(file, content, 'utf8');
