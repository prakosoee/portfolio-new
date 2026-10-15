import type { APIRoute } from 'astro';
import { projects } from '../data/projects';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site
    ? site.toString().replace(/\/$/, '')
    : 'https://www.elangprakoso.my.id';
  const currentDate = new Date().toISOString().split('T')[0];

  const urls = [
    { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'weekly' },
    ...projects.map((p) => ({
      loc: `${baseUrl}/projects/${p.slug}`,
      priority: '0.8',
      changefreq: 'monthly',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
