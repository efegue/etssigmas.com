// resize-images.js
// Usage: node resize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const sizes = [400, 800, 1200];

fs.readdirSync(publicDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg)$/i)) {
    const filePath = path.join(publicDir, file);
    const ext = path.extname(file);
    const base = path.basename(file, ext);
    sizes.forEach(size => {
      const outPath = path.join(publicDir, `${base}-${size}${ext}`);
      sharp(filePath)
        .resize({ width: size })
        .toFile(outPath)
        .then(() => console.log(`Created ${outPath}`))
        .catch(err => console.error(`Error processing ${file} at ${size}px:`, err));
    });
  }
}); 