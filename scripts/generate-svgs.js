const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function generateSVG({ title, icon, color1, color2 }) {
  return `<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color1}" />
      <stop offset="100%" stop-color="${color2}" />
    </linearGradient>
    <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="#ffffff" fill-opacity="0.05"/>
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#grad)" />
  <rect width="800" height="600" fill="url(#pattern)" />
  <circle cx="400" cy="270" r="120" fill="#ffffff" fill-opacity="0.1" />
  <text x="400" y="300" font-family="-apple-system, system-ui, sans-serif" font-size="120" text-anchor="middle" fill="#ffffff">${icon}</text>
  <text x="400" y="450" font-family="-apple-system, system-ui, sans-serif" font-weight="bold" font-size="36" text-anchor="middle" fill="#ffffff">${title}</text>
</svg>`;
}

const images = [
  { name: 'hero-1.svg', title: 'İnsani Yardım ve Umut', icon: '🌍', color1: '#0d3b6e', color2: '#2471a3' },
  { name: 'hero-2.svg', title: 'Kış Yardımı', icon: '❄️', color1: '#1a5276', color2: '#2980b9' },
  { name: 'hero-3.svg', title: 'Eğitim Desteği', icon: '📚', color1: '#e67e22', color2: '#d35400' },
  { name: 'hero-4.svg', title: 'Gönüllülük Hareketi', icon: '🤝', color1: '#2c3e50', color2: '#0d3b6e' },
  { name: 'about.svg', title: 'Biz Kimiz?', icon: '🏢', color1: '#0d3b6e', color2: '#e67e22' },
  { name: 'project-shelter.svg', title: 'Barınma Projesi', icon: '🏠', color1: '#2e4053', color2: '#34495e' },
  { name: 'project-education.svg', title: 'Eğitim ve Gelecek', icon: '🎒', color1: '#d35400', color2: '#e67e22' },
  { name: 'project-food.svg', title: 'Gıda Yardımı', icon: '🍱', color1: '#1b4f72', color2: '#2874a6' },
  { name: 'news-winter.svg', title: 'Kış Kampanyası Sonuçları', icon: '🧣', color1: '#21618c', color2: '#3498db' },
  { name: 'news-volunteer.svg', title: 'Gönüllü Eğitimleri', icon: '👥', color1: '#a04000', color2: '#e67e22' },
  { name: 'news-global.svg', title: 'Uluslararası İşbirliği', icon: '🤝', color1: '#1a5276', color2: '#2471a3' },
];

images.forEach(img => {
  fs.writeFileSync(path.join(outDir, img.name), generateSVG(img));
  console.log('Created ' + img.name);
});
