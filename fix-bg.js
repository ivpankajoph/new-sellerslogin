const fs = require('fs');
const path = require('path');

const directories = [
  'C:\\oph work\\new-sellerslogin\\src\\app\\features',
  'C:\\oph work\\new-sellerslogin\\src\\app\\solutions',
  'C:\\oph work\\new-sellerslogin\\src\\app\\automation'
];

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walkDir(file));
    } else { 
      if (file.endsWith('page.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

let files = [];
directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    files = files.concat(walkDir(dir));
  }
});

let updatedCount = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Replace bg-white with bg-transparent in <main> tags
  content = content.replace(/(<main[^>]*?)\bbg-white\b/g, '$1bg-transparent');
  // Replace bg-white with bg-transparent in <section> tags
  content = content.replace(/(<section[^>]*?)\bbg-white\b/g, '$1bg-transparent');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
    updatedCount++;
  }
});

console.log(`Finished. Updated ${updatedCount} files.`);
