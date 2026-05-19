import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "screenshots");
mkdirSync(outDir, { recursive: true });

const APPS = [
  { slug: "productsearch", url: "https://productsearch.wikolabs.com/" },
  { slug: "prestasearch",  url: "https://prestasearch.wikolabs.com/" },
  { slug: "bi-wikolabs",   url: "https://bi.wikolabs.com/" },
  { slug: "mediwyz",       url: "https://mediwyz.com/" },
];

const browser = await chromium.launch();

for (const app of APPS) {
  console.log(`→ ${app.url}`);
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  try {
    await page.goto(app.url, { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(1500);
    await page.screenshot({
      path: join(outDir, `${app.slug}.png`),
      clip: { x: 0, y: 0, width: 1280, height: 800 },
    });
    console.log(`  ✓ ${app.slug}.png`);
  } catch (e) {
    console.error(`  ✗ ${app.slug}: ${e.message.slice(0, 80)}`);
  }
  await page.close();
}

await browser.close();
console.log("Done.");
