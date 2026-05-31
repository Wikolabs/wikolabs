import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "screenshots");
mkdirSync(outDir, { recursive: true });

// All 47 redesigned LPs deployed on the Wikolabs VM
const VM = "http://187.124.167.18";
const APPS = [
  // Offers 3001-3031
  { slug: "pulsescope",       url: `${VM}:3001/` },
  { slug: "leadforge",        url: `${VM}:3002/` },
  { slug: "reachwave",        url: `${VM}:3003/` },
  { slug: "scoreflow",        url: `${VM}:3004/` },
  { slug: "booklync",         url: `${VM}:3005/` },
  { slug: "propgenai",        url: `${VM}:3006/` },
  { slug: "retainiq",         url: `${VM}:3007/` },
  { slug: "helpiqai",         url: `${VM}:3008/` },
  { slug: "triageiq",         url: `${VM}:3009/` },
  { slug: "onboardai",        url: `${VM}:3010/` },
  { slug: "callnotes",        url: `${VM}:3011/` },
  { slug: "datavoice",        url: `${VM}:3012/` },
  { slug: "reportly",         url: `${VM}:3013/` },
  { slug: "forecastiq",       url: `${VM}:3014/` },
  { slug: "nexuscrm",         url: `${VM}:3015/` },
  { slug: "semantiq",         url: `${VM}:3016/` },
  { slug: "personaai",        url: `${VM}:3017/` },
  { slug: "datastream",       url: `${VM}:3018/` },
  { slug: "modelops",         url: `${VM}:3019/` },
  { slug: "docextract",       url: `${VM}:3020/` },
  { slug: "detectvision",     url: `${VM}:3021/` },
  { slug: "bimflow",          url: `${VM}:3022/` },
  { slug: "geomapai",         url: `${VM}:3023/` },
  { slug: "uxforge",          url: `${VM}:3024/` },
  { slug: "appcraft",         url: `${VM}:3025/` },
  { slug: "perfoptiq",        url: `${VM}:3026/` },
  { slug: "seowave",          url: `${VM}:3027/` },
  { slug: "edgeai",           url: `${VM}:3028/` },
  { slug: "iotwatch",         url: `${VM}:3029/` },
  { slug: "visioncam",        url: `${VM}:3030/` },
  { slug: "maintainiq",       url: `${VM}:3031/` },

  // Autres apps 3034-3044
  { slug: "fraudguard",       url: `${VM}:3034/` },
  { slug: "churnpredict",     url: `${VM}:3035/` },
  { slug: "ragai",            url: `${VM}:3036/` },
  { slug: "recsys",           url: `${VM}:3037/` },
  { slug: "sentimentlive",    url: `${VM}:3038/` },
  { slug: "agentflow",        url: `${VM}:3039/` },
  { slug: "causalai",         url: `${VM}:3040/` },
  { slug: "entityresolution", url: `${VM}:3041/` },
  { slug: "imagegen",         url: `${VM}:3042/` },
  { slug: "medicaliqa",       url: `${VM}:3043/` },
  { slug: "graphfraud",       url: `${VM}:3044/` },

  // Flagship LPs
  { slug: "bi-wikolabs",      url: `${VM}:3051/` },
  { slug: "okaiz",            url: `${VM}:3052/` },
  { slug: "piskid",           url: `${VM}:3053/` },
  { slug: "wefreep",          url: `${VM}:3054/` },
  { slug: "patrimai",         url: `${VM}:3058/` },

  // Existing flagships (kept as-is)
  { slug: "botsika",          url: `${VM}:3049/` },
  { slug: "karohy",           url: `${VM}:3050/` },
  { slug: "mediwyz",          url: "https://mediwyz.com/" },
];

const browser = await chromium.launch();
let ok = 0, fail = 0;

for (const app of APPS) {
  console.log(`→ ${app.url}`);
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  try {
    await page.goto(app.url, { waitUntil: "networkidle", timeout: 25000 });
    await page.waitForTimeout(1500);
    await page.screenshot({
      path: join(outDir, `${app.slug}.png`),
      clip: { x: 0, y: 0, width: 1280, height: 800 },
    });
    console.log(`  ✓ ${app.slug}.png`);
    ok++;
  } catch (e) {
    console.error(`  ✗ ${app.slug}: ${e.message.slice(0, 100)}`);
    fail++;
  }
  await page.close();
}

await browser.close();
console.log(`\nDone. ${ok} ok, ${fail} fail.`);
