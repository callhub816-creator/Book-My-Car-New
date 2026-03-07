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

const staticMeta = {
  '/': { title: 'BookMyCar.live | Honest Indian Road Trip & Rental Guide', description: 'Stop making expensive road trip mistakes. BookMyCar.live is a human-written guide for Indian driving rules, car rental scams, and highway safety tips.' },
  '/blog': { title: 'Highway Travel Guides & Rental Rules India | BookMyCar.live', description: 'Expert-verified guides for Indian highways, car rental rules, safety checklists, and road trip tips.' },
  '/rules': { title: 'Indian Road Rules & RTO Guide | BookMyCar.live', description: 'Complete handbook for Indian traffic rules, fines, and highway regulations for 2026.' },
  '/about': { title: 'About Rajesh Navsagar & Our Mission | BookMyCar.live', description: 'Meet the expert behind BookMyCar.live and learn why we are building the most honest road trip guide for India.' },
  '/contact': { title: 'Contact Rajesh Navsagar | BookMyCar.live', description: 'Got a road trip query or a rental dispute? Reach out to Rajesh for personal guidance.' },
  '/privacy': { title: 'Privacy Policy | BookMyCar.live', description: 'How we handle your data and our transparency regarding Google AdSense cookies.' },
  '/terms': { title: 'Terms of Use | BookMyCar.live', description: 'Legal terms and conditions for using the BookMyCar.live platform.' },
  '/disclaimer': { title: 'Full Disclaimer | BookMyCar.live', description: 'Transparency notice regarding our content and independent nature.' },
  '/cookies': { title: 'Cookie Policy | BookMyCar.live', description: 'Information about how we use cookies for a better user experience.' }
};

const blogData = fs.existsSync(blogsDir)
  ? fs.readdirSync(blogsDir)
    .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
    .map((f) => {
      const content = fs.readFileSync(path.join(blogsDir, f), 'utf8');
      const slugMatch = content.match(/slug:\s*['"]([^'"]+)['"]/);
      const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
      const excerptMatch = content.match(/excerpt:\s*['`]([\s\S]*?)['`]/) || content.match(/excerpt:\s*['"]([\s\S]*?)['"]/);

      if (slugMatch) {
        return {
          slug: slugMatch[1],
          title: titleMatch ? titleMatch[1] : 'Road Trip Guide',
          description: excerptMatch ? excerptMatch[1].replace(/\n/g, ' ').trim() : ''
        };
      }
      return null;
    })
    .filter(Boolean)
  : [];

// Process Static Routes
for (const [route, meta] of Object.entries(staticMeta)) {
  const targetDir = route === '/' ? distDir : path.join(distDir, route.replace(/^\//, ''));
  fs.mkdirSync(targetDir, { recursive: true });

  let html = indexHtml;
  html = html.replace('<head>', `<head>\n  <title>${meta.title}</title>\n  <meta name="description" content="${meta.description}">`);

  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
}

// Process Blog Routes
for (const post of blogData) {
  const route = `/blog/${post.slug}`;
  const targetDir = path.join(distDir, route.replace(/^\//, ''));
  fs.mkdirSync(targetDir, { recursive: true });

  let html = indexHtml;
  html = html.replace('<head>', `<head>\n  <title>${post.title} | BookMyCar.live</title>\n  <meta name="description" content="${post.description}">`);

  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
}

console.log(`✅ SEO fallback pages generated: ${Object.keys(staticMeta).length + blogData.length}`);
