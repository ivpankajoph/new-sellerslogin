const fs = require('fs');
const path = require('path');

const srcDir = path.join('C:', 'oph work', 'new-sellerslogin', 'src');

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walkDir(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walkDir(srcDir);
let updatedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // 1. Fix invisible icons and text by replacing text-purple-200 with text-purple-600
  content = content.replace(/\btext-purple-200\b/g, 'text-purple-600');

  // 2. Fix missed font overrides that were on a new line
  content = content.replace(/style=\{\{\s*fontFamily:\s*['"`]Georgia['"`],\s*serif\s*\}\}/g, '');
  content = content.replace(/style=\{\{\s*fontFamily:\s*['"`]Georgia['"`],\s*serif\s*\}\}/g, '');
  content = content.replace(/style=\{\{[^}]*fontFamily:\s*['"`][^'"`]+['"`],\s*serif[^}]*\}\}/gi, '');

  // 3. Just in case, replace the specific literal string found in email-automation/page.tsx
  content = content.replace(/style=\{\{\s*fontFamily:\s*"'Georgia', serif"\s*\}\}/g, '');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log(`Updated: ${file}`);
  }
});

console.log(`Finished. Updated ${updatedCount} files.`);
