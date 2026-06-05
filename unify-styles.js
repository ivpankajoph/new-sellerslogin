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

const colorsToReplace = ['pink', 'red', 'emerald', 'amber', 'indigo', 'sky', 'rose', 'fuchsia', 'orange', 'teal', 'cyan', 'blue'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // 1. Color replacement
  colorsToReplace.forEach(color => {
    const regex = new RegExp(`\\b(bg|text|border|from|to|via)-${color}-\\d{2,3}(/\\d+)?\\b`, 'g');
    content = content.replace(regex, `$1-purple-200$2`);
    
    const regex2 = new RegExp(`\\b(shadow|ring)-${color}-\\d{2,3}(/\\d+)?\\b`, 'g');
    content = content.replace(regex2, `$1-purple-200$2`);
  });

  // Adjust text-white on purple-200 backgrounds
  content = content.replace(/bg-purple-200([^>]*?)text-white/g, 'bg-purple-200$1text-gray-900');
  content = content.replace(/text-white([^>]*?)bg-purple-200/g, 'text-gray-900$1bg-purple-200');

  // 2. Font Override Removal
  content = content.replace(/style=\{\{\s*fontFamily:\s*['"`][^'"`]+['"`],?\s*\}\}/g, '');
  content = content.replace(/\bfont-serif\b/g, 'font-sans');
  content = content.replace(/fontFamily:\s*['"`][^'"`]+['"`],?/g, ''); // inside existing style={{}}
  content = content.replace(/style=\{\{\s*\}\}/g, ''); // clean up empty styles

  // 3. Button Standardization
  // We only want to replace rounded-* with rounded-full if it's within a button, a, or Link tag
  // We can do this by finding <button ...> <a ...> <Link ...> tags and replacing inside them.
  // This is tricky with regex, but we can do a function replacement.
  content = content.replace(/<(button|a|Link)([^>]+)>/g, (match, tag, attrs) => {
    // Check if it's likely a button (has px- py- or bg-)
    if (attrs.includes('px-') || attrs.includes('py-') || attrs.includes('bg-') || attrs.includes('inline-flex') || attrs.includes('flex')) {
      attrs = attrs.replace(/\brounded-(none|sm|md|lg|xl|2xl|3xl)\b/g, 'rounded-full');
      // Some buttons might just have 'rounded'
      attrs = attrs.replace(/\brounded\b(?!\-)/g, 'rounded-full');
    }
    return `<${tag}${attrs}>`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log(`Updated: ${file}`);
  }
});

console.log(`Finished. Updated ${updatedCount} files.`);
