import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

// Drafts are visible while running `npm run dev` and never in a build.
export async function publishedPosts(): Promise<Post[]> {
	const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function postsInSection(slug: string): Promise<Post[]> {
	return (await publishedPosts()).filter((post) => post.data.section === slug);
}

export async function postCountsBySection(): Promise<Map<string, number>> {
	const counts = new Map<string, number>();
	for (const post of await publishedPosts()) {
		const slug = post.data.section;
		if (!slug) continue;
		counts.set(slug, (counts.get(slug) ?? 0) + 1);
	}
	return counts;
}
