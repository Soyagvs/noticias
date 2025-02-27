import { defineCollection, z } from 'astro:content';

// Definir la colección "news"
const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    image: z.string().optional(),
    description: z.string(),
    date: z.string(), // Usar z.date() para la fecha
    slug: z.string(),
  }),
});


export const collections = {
  news: newsCollection,
};
