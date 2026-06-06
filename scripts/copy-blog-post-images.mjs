import fs from "node:fs";
import path from "node:path";

const cwd = process.cwd();

const srcRoot = path.join(cwd, "src", "content", "blog_posts");
const destRoot = path.join(cwd, "public", "blog_posts");

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

    // src: src/content/blog_posts/<slug>/<file>
    // dest: public/blog_posts/<slug>/<file>
    const rel = path.relative(srcRoot, full); // <slug>/<file>
    const dest = path.join(destRoot, rel);
    copyFileSync(full, dest);
  }
}

if (!fs.existsSync(srcRoot)) {
  console.warn(`[copy-blog-post-images] Source folder not found: ${srcRoot}`);
  process.exit(0);
}

ensureDir(destRoot);
walk(srcRoot);

console.log(`[copy-blog-post-images] Copied blog post images from ${srcRoot} -> ${destRoot}`);
