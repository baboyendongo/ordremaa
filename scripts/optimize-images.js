const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const SRC_DIR = path.join(__dirname, '..', 'public', 'assets', 'La_liste_des_archis');
const SIZES = [320, 640, 1024];

async function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file, ext);
  const input = path.join(SRC_DIR, file);
  for (const w of SIZES) {
    const outWebp = path.join(SRC_DIR, `${name}-${w}.webp`);
    try {
      await sharp(input).resize({ width: w }).webp({ quality: 75 }).toFile(outWebp);
      console.log('created', outWebp);
    } catch (err) {
      console.error('error processing', input, err.message);
    }
  }
}

fs.readdir(SRC_DIR, (err, files) => {
  if (err) return console.error('read dir error', err.message);
  const images = files.filter(f => /\.(jpe?g|png)$/i.test(f));
  Promise.all(images.map(processFile)).then(() => console.log('done')).catch(e => console.error(e));
});
