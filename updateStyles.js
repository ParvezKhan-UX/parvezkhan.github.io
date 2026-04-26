const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(componentsDir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace 920 with 1152 (max-w-6xl)
    const newContent = content.replace(/maxWidth: 920/g, 'maxWidth: 1152');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Updated width in ${file}`);
    }
  }
});
