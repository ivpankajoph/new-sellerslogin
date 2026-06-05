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

  // We want to replace text-purple-600 with text-purple-100 inside <p> tags, ONLY within CTA and StatsBand components.
  // Since we don't have a full AST parser, we can use a regex to capture the component body roughly.
  // A component starts with `function ComponentName() {` and ends loosely where the next component starts, or we can just replace specific known strings.
  
  const componentsToFix = ['CTA', 'StatsBand', 'StatsBand2', 'Hero']; 

  componentsToFix.forEach(comp => {
    // Find the function definition
    const regex = new RegExp(`(function ${comp}\\b[\\s\\S]*?\\{)([\\s\\S]*?)(^function |^export default|\\n})`, 'gm');
    
    content = content.replace(regex, (match, start, body, end) => {
      // Inside this component's body, we want to replace text-purple-600 with text-purple-100 inside <p> tags.
      // Wait, what if the CTA has a button with text-purple-600? We don't want to change the button text!
      // The button text is inside <button> or <span>. The text we want to change is in <p> tags.
      let newBody = body.replace(/<p className="([^"]*)text-purple-600([^"]*)">/g, '<p className="$1text-purple-100$2">');
      
      return start + newBody + end;
    });
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log(`Updated: ${file}`);
  }
});

console.log(`Finished. Updated ${updatedCount} files.`);
