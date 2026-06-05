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

const hexMap = {
  '#fff9fb': '#faf5ff', // pink-50 to purple-50
  '#fce7f3': '#f3e8ff', // pink-100 to purple-100
  '#fbcfe8': '#e9d5ff', // pink-200 to purple-200
  '#f9a8d4': '#d8b4fe', // pink-300 to purple-300
  '#f472b6': '#c084fc', // pink-400 to purple-400
  '#ec4899': '#a855f7', // pink-500 to purple-500
  '#db2777': '#9333ea', // pink-600 to purple-600
  '#be185d': '#7e22ce', // pink-700 to purple-700
  '#9d174d': '#6b21a8', // pink-800 to purple-800
  '#831843': '#581c87', // pink-900 to purple-900
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  for (const [pinkHex, purpleHex] of Object.entries(hexMap)) {
    // case insensitive replace
    const regex = new RegExp(pinkHex, 'gi');
    content = content.replace(regex, purpleHex);
  }

  // Also replace color strings like "pink" inside style objects? No, hex is the main issue here.
  // We'll also fix text-white inside buttons that might have been missed if they were inline gradients.
  // Actually, purple-600 with white text is perfectly readable! So no need to change text-white for gradients that map to purple-600.

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log(`Updated: ${file}`);
  }
});

console.log(`Finished. Updated ${updatedCount} files.`);
