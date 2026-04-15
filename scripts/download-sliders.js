const https = require('https');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../public/images');

const downloads = [
  { url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80', dest: 'slider-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?auto=format&fit=crop&w=1920&q=80', dest: 'slider-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1920&q=80', dest: 'slider-3.jpg' }
];

downloads.forEach(d => {
  const destPath = path.join(outDir, d.dest);
  const file = fs.createWriteStream(destPath);
  https.get(d.url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close();
      console.log('Downloaded ' + d.dest);
    });
  }).on('error', function(err) {
    fs.unlink(destPath);
    console.error('Error downloading ' + d.dest + ': ' + err.message);
  });
});
