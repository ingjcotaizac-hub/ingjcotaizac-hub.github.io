import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number(),
    client: z.string(),
    role: z.string(),
    tools: z.array(z.string()),
    tags: z.array(z.string()),
    thumbnail: z.string(),
    demoType: z.enum(['iframe', 'video', 'gallery', 'gif', 'h5p', 'pdf']),
    demoUrl: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    description: z.string(),
  }),
});

export const collections = {
  'work': workCollection,
};
