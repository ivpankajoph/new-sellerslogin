const fs = require('fs');
let lines = fs.readFileSync('src/components/landing/IntegrationsSection.tsx', 'utf8').split('\n');
lines[68] = '                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${color}`} strokeWidth={2.5} />';
fs.writeFileSync('src/components/landing/IntegrationsSection.tsx', lines.join('\n'), 'utf8');
