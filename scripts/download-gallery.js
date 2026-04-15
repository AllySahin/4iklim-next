const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  { url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80', file: 'galeri-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1524995997946-a1ce25e64123?auto=format&fit=crop&w=600&q=80', file: 'galeri-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=600&q=80', file: 'galeri-3.jpg' },
  { url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600&q=80', file: 'galeri-4.jpg' },
  { url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80', file: 'galeri-5.jpg' },
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', file: 'galeri-6.jpg' },
  { url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80', file: 'galeri-7.jpg' },
  { url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80', file: 'galeri-8.jpg' },
  { url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80', file: 'galeri-9.jpg' },
  { url: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=600&q=80', file: 'galeri-10.jpg' },
  { url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80', file: 'galeri-11.jpg' },
  { url: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1920&q=80', file: 'galeri-hero.jpg' },
];

const dest = path.join(__dirname, '..', 'public', 'images');

function download(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(dest, filename);
    const file = fs.createWriteStream(filePath);
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(filePath);
        download(res.headers.location, filename).then(resolve).catch(reject);
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); console.log('✓', filename); resolve(); });
    }).on('error', (err) => {
      fs.unlinkSync(filePath);
      reject(err);
    });
  });
}

(async () => {
  for (const img of images) {
    try { await download(img.url, img.file); }
    catch (e) { console.error('✗', img.file, e.message); }
  }
  console.log('Done.');
})();
