import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

/**
 * Collections:
 * - blog: Markdown posts
 * - content: UI content groups
 * - airports: 42 Airport Brand datasets with speedtest & unlock verification
 * - clients: Multi-platform proxy software recommendations & guides
 */
const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    authorRole: z.string(),
    authorOrg: z.string(),
    avatar: z.string(),
    cover: z.string(),
    ogImage: z.string().optional(),
  }),
});

const content = defineCollection({
  loader: file('src/content/content.json', {
    parser: (text) =>
      Object.entries(JSON.parse(text)).map(([id, items]) => ({ id, items })),
  }),
  schema: z.object({ items: z.array(z.any()) }),
});

const airports = defineCollection({
  loader: file('src/content/airports.json'),
});

const clients = defineCollection({
  loader: file('src/content/clients.json', {
    parser: (text) =>
      JSON.parse(text).map((item: any) => ({
        id: item.platform.toLowerCase(),
        ...item,
      })),
  }),
});

export const collections = { blog, content, airports, clients };
