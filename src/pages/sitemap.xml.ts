import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import airportsData from '../content/airports.json';

interface RouteEntry {
  path: string;
  priority: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;
}

const STATIC_ROUTES: RouteEntry[] = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/airports', priority: '1.0', changefreq: 'daily' },
  { path: '/clients', priority: '0.9', changefreq: 'weekly' },
  { path: '/workflows', priority: '0.8', changefreq: 'weekly' },
  { path: '/workflow-1', priority: '0.8', changefreq: 'weekly' },
  { path: '/workflow-2', priority: '0.8', changefreq: 'weekly' },
  { path: '/workflow-3', priority: '0.8', changefreq: 'weekly' },
  { path: '/scam-warning', priority: '0.9', changefreq: 'weekly' },
  { path: '/faq', priority: '0.9', changefreq: 'weekly' },
  { path: '/free-resources', priority: '0.9', changefreq: 'weekly' },
  { path: '/pricing', priority: '0.8', changefreq: 'weekly' },
  { path: '/blog', priority: '0.9', changefreq: 'daily' },
  { path: '/contact', priority: '0.6', changefreq: 'monthly' },
  { path: '/terms-conditions', priority: '0.3', changefreq: 'yearly' },
];

export const GET: APIRoute = async ({ site }) => {
  const baseSite = site ?? new URL('https://missavaivpn.blog');
  const now = new Date().toISOString().split('T')[0];

  const posts = await getCollection('blog');
  const postEntries: RouteEntry[] = posts.map((post) => {
    let postDate = now;
    if (post.data.date) {
      try {
        const d = new Date(post.data.date);
        if (!isNaN(d.getTime())) {
          postDate = d.toISOString().split('T')[0];
        }
      } catch {
        postDate = now;
      }
    }
    return {
      path: `/blog/${post.id}`,
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: postDate,
    };
  });

  const airportEntries: RouteEntry[] = airportsData.map((ap) => ({
    path: `/airports/${ap.slug}`,
    priority: ap.rank === 1 ? '0.9' : ap.rank <= 10 ? '0.85' : '0.75',
    changefreq: 'weekly',
    lastmod: now,
  }));

  const allEntries = [...STATIC_ROUTES, ...airportEntries, ...postEntries];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    (e) => `  <url>
    <loc>${new URL(e.path, baseSite).href}</loc>
    <lastmod>${e.lastmod ?? now}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
