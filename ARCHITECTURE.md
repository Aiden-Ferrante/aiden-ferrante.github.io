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
- **No server, no keys.** Pure static build (`astro build`), deployed by GitHub Actions
  (`.github/workflows/deploy.yml`) to GitHub Pages on push to main. Nothing depends on the Spark
  being up.

## Publishing flow

1. Write `src/content/blog/<slug>.md` with frontmatter.
2. Commit, push to main → Actions builds and deploys.

## Later

- Custom domain: add a `CNAME` file + update `site` in `astro.config.mjs`.
- Channel launch: set `YOUTUBE_URL` in `src/consts.ts` (header link appears automatically).
