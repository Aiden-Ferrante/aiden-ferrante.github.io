import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

// Drafts are visible while running `npm run dev` and never in a build.
export async function publishedPosts(): Promise<Post[]> {
	const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function postsByTopic(): Promise<Map<string, Post[]>> {
	const byTopic = new Map<string, Post[]>();
	for (const post of await publishedPosts()) {
		const topic = post.data.topic;
		if (!topic) continue;
		byTopic.set(topic, [...(byTopic.get(topic) ?? []), post]);
	}
	return byTopic;
}
