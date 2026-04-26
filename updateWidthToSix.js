const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(componentsDir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content.replace(/max-w-\[1152px\]/g, 'max-w-6xl');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Updated width to max-w-6xl in ${file}`);
    }
  }
});
