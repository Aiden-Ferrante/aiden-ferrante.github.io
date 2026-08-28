import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { SECTION_SLUGS } from './data/sections';

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
			// 'essay' = written piece; 'video' = companion to a YouTube video
			kind: z.enum(['essay', 'video']).default('essay'),
			// YouTube URL, required in practice when kind is 'video'
			video: z.url().optional(),
			// Which commentary vertical this belongs to (src/data/sections.ts). Must be a
			// known slug — a typo fails the build rather than quietly orphaning the post.
			section: z
				.string()
				.refine((slug) => SECTION_SLUGS.includes(slug), {
					message: `Unknown section. Known slugs: ${SECTION_SLUGS.join(', ')}`,
				})
				.optional(),
			tags: z.array(z.string()).default([]),
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog };
