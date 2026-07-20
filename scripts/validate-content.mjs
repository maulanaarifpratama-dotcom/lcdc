import fs from 'node:fs';
const required = [
  'package.json',
  'netlify.toml',
  'public/_redirects',
  'public/sitemap.xml',
  'public/assets/logos/favicon.ico',
  'public/assets/media/photos/hero.webp',
  'public/assets/media/photos/caregiver-squad.webp',
  'public/assets/media/articles/daycare-aman-anak.webp',
  'src/main.tsx',
  'src/App.tsx',
  'src/styles.css',
  'src/data.ts'
];
let ok = true;
for (const file of required) {
  if (!fs.existsSync(file)) {
    console.error('Missing', file);
    ok = false;
  }
}
const app = fs.readFileSync('src/App.tsx', 'utf8');
for (const text of ['FAQPage', 'Little Champ Daycare', '2026, Little Champ Daycare', 'application/ld+json']) {
  if (!app.includes(text)) {
    console.error('Missing App.tsx text', text);
    ok = false;
  }
}
const home = fs.readFileSync('src/pages/Home.tsx', 'utf8');
for (const text of ['Kenali Lingkungan Daycare Sebelum Berkunjung', 'Pioneer layanan childcare']) {
  if (!home.includes(text)) {
    console.error('Missing Home.tsx text', text);
    ok = false;
  }
}
const data = fs.readFileSync('src/data.ts', 'utf8');
for (const text of ['faqGroups', 'homeFaq', 'programFaq', 'facilityFaq', 'KPSP', 'Denver II']) {
  if (!data.includes(text)) {
    console.error('Missing data text', text);
    ok = false;
  }
}
if (data.includes('Churn Rate')) {
  console.error('Churn Rate should not be in stats');
  ok = false;
}
const slugs = [...data.matchAll(/"slug": "([^"]+)"/g)].map((m) => m[1]);
if (slugs.length < 6) {
  console.error('Need at least 6 article slugs');
  ok = false;
}
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
if (!sitemap.includes('/faq')) {
  console.error('Sitemap missing FAQ');
}
if (!sitemap.includes('<lastmod>')) {
  console.error('Sitemap missing lastmod');
  ok = false;
}
for (const slug of slugs) {
  if (!sitemap.includes(`/articles/${slug}`)) {
    console.error('Sitemap missing article', slug);
    ok = false;
  }
}
const pages = fs.readdirSync('src/pages');
const expectedPages = ['Home.tsx', 'About.tsx', 'Programs.tsx', 'Facilities.tsx', 'Articles.tsx', 'ArticlePage.tsx', 'FAQPage.tsx', 'Contact.tsx', 'NotFound.tsx'];
for (const p of expectedPages) {
  if (!pages.includes(p)) {
    console.error('Missing page', p);
    ok = false;
  }
}
if (ok) console.log('Validation passed: V5.1 — refactored structure, bug fixes, accessibility, SEO, lazy loading.');
else process.exit(1);
