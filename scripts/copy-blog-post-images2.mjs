import fs from "node:fs";
import path from "node:path";

const cwd = process.cwd();

const srcRoot = path.join(cwd, "src", "content", "project_posts");
const destRoot = path.join(cwd, "public", "project_posts");

const exts = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyFileSync(src, dest) {
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    const ext = path.extname(entry.name).toLowerCase();
    if (!exts.has(ext)) continue;

    // src: src/content/project_posts/<slug>/<file>
    // dest: public/project_posts/<slug>/<file>
    const rel = path.relative(srcRoot, full); // <slug>/<file>
    const dest = path.join(destRoot, rel);
    copyFileSync(full, dest);
  }
}

if (!fs.existsSync(srcRoot)) {
  console.warn(`[copy-project_posts-post-images] Source folder not found: ${srcRoot}`);
  process.exit(0);
}

ensureDir(destRoot);
walk(srcRoot);

console.log(`[copy-project_posts-post-images] Copied blog post images from ${srcRoot} -> ${destRoot}`);
