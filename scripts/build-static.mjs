import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

const entries = [
  "index.html",
  "onmam-church.html",
  "onmam-digital-mission-bookmarklet.js",
  "thum.png",
  "logo.png",
  "logo-white.png",
  "bi.png",
  "ONMAM_BI copy.png",
  "무덤돌.jpg",
  "admin",
  "_data"
];

rmSync(dist, { force: true, recursive: true });
mkdirSync(dist, { recursive: true });

for (const entry of entries) {
  const source = join(root, entry);
  if (!existsSync(source)) continue;
  cpSync(source, join(dist, entry), { recursive: true });
}
