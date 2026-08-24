const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/components/Navbar.tsx',
  'src/components/Portfolio.tsx',
  'src/components/Footer.tsx',
  'src/data.ts'
];

const regex = /https:\/\/res\.cloudinary\.com\/([^\/]+)\/image\/upload\/(v[0-9]+\/[^"'`\s]+)/g;
const replacement = 'https://res.cloudinary.com/$1/image/upload/w_1200,q_auto,f_auto/$2';

filesToUpdate.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(regex, replacement);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
