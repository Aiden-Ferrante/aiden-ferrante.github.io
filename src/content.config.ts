import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { TOPIC_SLUGS } from './data/learning-map';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// 'essay' = standalone opinion/notes; 'video' = companion post to a YouTube video
			kind: z.enum(['essay', 'video']).default('essay'),
			// YouTube URL, required in practice when kind is 'video'
			video: z.url().optional(),
			// Node in the learning map (src/data/learning-map.ts). Must be a known slug —
			// a typo fails the build rather than quietly dropping the post off the map.
			topic: z
				.string()
				.refine((slug) => TOPIC_SLUGS.includes(slug), {
					message: `Unknown topic. Known slugs: ${TOPIC_SLUGS.join(', ')}`,
				})
				.optional(),
			tags: z.array(z.string()).default([]),
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog };
