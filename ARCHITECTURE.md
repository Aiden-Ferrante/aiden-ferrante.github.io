# Architecture

Static personal site (blog + YouTube companion posts) for aiden-ferrante.github.io.

## Boundaries

- **Content is data, code is presentation.** All posts are markdown in `src/content/blog/`;
  nothing else in the repo knows about individual posts. The frontmatter schema in
  `src/content.config.ts` is the one contract between them.
- **Two post kinds, one collection.** `kind: essay | video`. A `video` post carries a `video:`
  YouTube URL; the layout embeds it. No separate collection — a video companion IS a post.
- **Site-wide identity lives in `src/consts.ts`** (title, description, GitHub/YouTube URLs).
  Components import from there, never hardcode.
- **The learning map is data, in `src/data/learning-map.ts`.** It mirrors the node *names* of the
  shipyard chart's "AI Technical Skills" branch and nothing else — no waypoints, no falsifiers, no
  soundings, and none of the personal branches. The chart stays the private planning artifact; this
  is the public index of topics.
- **`topic:` is a mechanical contract, not a convention.** The post schema validates `topic`
  against the map's slugs, so a typo or a renamed node fails the build instead of silently
  dropping a post off the map. Duplicate slugs in the map fail the build too.
- **Coverage is computed, never hand-maintained.** `/learning` derives "N of M written" from the
  posts that exist. A node with no post renders as plain text — writing the post is the only way to
  mark it off.
- **`draft: true` hides a post from the build** but shows it on the dev server.
- **No server, no keys.** Pure static build (`astro build`), deployed by GitHub Actions
  (`.github/workflows/deploy.yml`) to GitHub Pages on push to main. Nothing depends on the Spark
  being up.

## Publishing flow

1. Write `src/content/blog/<slug>.md` with frontmatter.
2. Commit, push to main → Actions builds and deploys.

## Later

- Custom domain: add a `CNAME` file + update `site` in `astro.config.mjs`.
- Channel launch: set `YOUTUBE_URL` in `src/consts.ts` (header link appears automatically).
