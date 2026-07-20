import fs from 'node:fs';

const SITE_URL = 'https://www.littlechamp.id';
const today = new Date().toISOString().split('T')[0];

const routes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/programs', changefreq: 'monthly', priority: '0.9' },
  { path: '/facilities', changefreq: 'monthly', priority: '0.8' },
  { path: '/articles', changefreq: 'weekly', priority: '0.9' },
  { path: '/faq', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.9' }
];

const dataFile = fs.readFileSync('src/data/articles.ts', 'utf8');
const slugs = [...dataFile.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
const dates = [...dataFile.matchAll(/publishedDate:\s*'([^']+)'/g)].map((m) => m[1]);

const articleUrls = slugs.map((slug, i) => {
  const date = dates[i] || today;
  return `  <url>
    <loc>${SITE_URL}/articles/${slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
});

const routeUrls = routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routeUrls}
${articleUrls.join('\n')}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log(`Sitemap generated: ${routes.length} routes + ${slugs.length} articles`);
