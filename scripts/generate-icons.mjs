import sharp from "sharp";
import { resolve } from "path";

const baseDir = resolve("public/icons");
const anySvg = resolve(baseDir, "icon.svg");
const maskSvg = resolve(baseDir, "icon-maskable.svg");

const anySizes = [192, 512];
const maskSizes = [192, 512];
const appleSizes = [120, 152, 167, 180];

const pngOptions = { compressionLevel: 9, quality: 90 };

for (const size of anySizes) {
  await sharp(anySvg)
    .resize(size, size)
    .png(pngOptions)
    .toFile(resolve(baseDir, `icon-${size}.png`));
}

for (const size of maskSizes) {
  await sharp(maskSvg)
    .resize(size, size)
    .png(pngOptions)
    .toFile(resolve(baseDir, `icon-maskable-${size}.png`));
}

for (const size of appleSizes) {
  await sharp(anySvg)
    .resize(size, size)
    .png(pngOptions)
    .toFile(resolve(baseDir, `apple-touch-icon-${size}x${size}.png`));
}

await sharp(anySvg)
  .resize(180, 180)
  .png(pngOptions)
  .toFile(resolve(baseDir, "apple-touch-icon.png"));
