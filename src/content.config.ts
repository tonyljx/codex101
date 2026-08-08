import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const docs = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string().min(1),
    navTitle: z.string().min(1).optional(),
    description: z.string().min(1),
    locale: z.enum(['zh', 'en', 'zh-TW', 'ja', 'ko', 'ru', 'es', 'fr', 'de', 'pt', 'id', 'vi', 'tr']),
    translationKey: z.string().regex(/^[a-z0-9]+(?:[/-][a-z0-9]+)*$/, 'Use a lowercase, URL-safe translation key.'),
    section: z.enum(['top', 'start', 'foundations', 'explore', 'available', 'releases']),
    order: z.number().int().positive(),
    draft: z.boolean().default(false),
    translationStatus: z.enum(['complete', 'needs-review', 'outdated']).default('needs-review'),
    lastUpdated: z.coerce.date(),
    pageKind: z.enum(['article', 'hub', 'product', 'special']).default('article'),
    referenceHub: z.enum(['features', 'configuration', 'developers', 'security-administration', 'administration', 'skills']).optional(),
    sourceUrl: z.url().optional(),
    outline: z.array(z.object({ id: z.string().min(1), label: z.string().min(1) })).optional(),
  }),
});

export const collections = { docs };
