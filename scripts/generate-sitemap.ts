import { getAllRoutes } from '../config/routes';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = 'https://www.royalcleanlavanderia.top';

function generateSitemap(): string {
  const routes = getAllRoutes();
  const today = new Date().toISOString().split('T')[0];
  
  const urls = routes.map(route => {
    const priority = route.path === '/' ? '1.0' : route.path.startsWith('/bairros') ? '0.8' : '0.9';
    const changefreq = route.path === '/' ? 'daily' : 'weekly';
    
    return `
  <url>
    <loc>${route.canonical}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>`;
}

function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;
}

const sitemap = generateSitemap();
const robotsTxt = generateRobotsTxt();

fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robotsTxt);

console.log('Generated sitemap.xml and robots.txt');
