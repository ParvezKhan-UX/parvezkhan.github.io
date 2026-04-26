const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(componentsDir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content.replace(/max-w-6xl mx-auto/g, 'w-full max-w-6xl mx-auto');
    // Ensure no duplicates
    newContent = newContent.replace(/w-full w-full/g, 'w-full');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Added w-full to ${file}`);
    }
  }
});
