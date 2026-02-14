import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const blogsDir = path.join(root, 'data', 'blogs');

if (!fs.existsSync(distDir)) {
  console.error('dist folder nahi mila. Pehle "npm run build" chalao.');
  process.exit(1);
}

const indexHtmlPath = path.join(distDir, 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const staticRoutes = [
  '/',
  '/blog',
  '/rules',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/disclaimer',
  '/cookies'
];

const slugs = fs.existsSync(blogsDir)
  ? fs.readdirSync(blogsDir)
    .filter((f) => f.endsWith('.ts'))
    .map((f) => {
      const content = fs.readFileSync(path.join(blogsDir, f), 'utf8');
      const match = content.match(/slug:\s*['"]([^'"]+)['"]/);
      return match ? match[1] : null;
    })
    .filter(Boolean)
  : [];

const routes = staticRoutes.concat(slugs.map((s) => `/blog/${s}`));

for (const route of routes) {
  const targetDir = route === '/' ? distDir : path.join(distDir, route.replace(/^\//, ''));
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), indexHtml, 'utf8');
}

console.log(`SPA fallback pages written: ${routes.length}`);
