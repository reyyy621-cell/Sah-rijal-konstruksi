const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src');

function walkSync(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    let filepath = path.join(dir, file);
    let stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walkSync(filepath, callback);
    } else if (stats.isFile() && filepath.endsWith('.tsx')) {
      callback(filepath);
    }
  });
}

walkSync(srcDir, filepath => {
  let content = fs.readFileSync(filepath, 'utf8');
  let original = content;

  // 1. Teks abu-abu
  content = content.replace(/text-gray-400/g, 'text-gray-600');
  content = content.replace(/text-gray-500/g, 'text-gray-700');

  // 2. Warna teks emas
  content = content.replace(/text-\[\#C89A2B\]/g, 'text-[#9A721D]');

  // 3. Tombol emas (bg-[#C89A2B]) -> ganti text-white jadi text-[#16233A] 
  // Let's use a regex to find elements with bg-[#C89A2B] and text-white, and replace text-white with text-[#16233A]
  // But wait, there are buttons with `bg-[#C89A2B] text-white`
  content = content.replace(/bg-\[\#C89A2B\]\s*([^>]*?)\s*text-white/g, 'bg-[#C89A2B] $1 text-[#16233A]');
  content = content.replace(/bg-\[\#C89A2B\]\s*([^>]*?)hover:text-white/g, 'bg-[#C89A2B] $1 hover:text-[#16233A]'); // just in case
  content = content.replace(/text-white\s*([^>]*?)\s*bg-\[\#C89A2B\]/g, 'text-[#16233A] $1 bg-[#C89A2B]');

  // In InteriorMepCalculator.tsx and ContactSurvey.tsx there are some specific buttons.
  // Wait, let's just make sure we replace `text-white` with `text-[#16233A]` on any line that has `bg-[#C89A2B]` and is not a div without text.
  // The simplest regex:
  // Let's do it manually for the buttons or just run the regex.

  if (content !== original) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Updated ${filepath}`);
  }
});
