# Architecture

Static personal site for aiden-ferrante.github.io: opinion commentary on four standing beats,
plus a map of the work behind it.

## Boundaries

- **Content is data, code is presentation.** All posts are markdown in `src/content/blog/`;
  nothing else in the repo knows about individual posts. The frontmatter schema in
  `src/content.config.ts` is the one contract between them.
- **Four sections, in `src/data/sections.ts`.** These are standing editorial beats, not tags —
  each carries a thesis naming the instrument or first-hand position behind it. Adding a fifth
  means adding to that file and nothing else; the nav, homepage, section pages and post metadata
  all derive from it.
- **`section:` is a mechanical contract.** The post schema validates it against the section
  slugs, so a typo or a renamed beat fails the build instead of quietly orphaning a post.
  Duplicate slugs fail the build too.
- **Projects are data, in `src/data/projects.ts`,** with honest `status` and a `repo` link only
  where something is actually public. This is the page a reader can most easily fact-check, so
  it must never overstate.
- **Two post kinds, one collection.** `kind: essay | video`. A `video` post carries a `video:`
  YouTube URL; the layout embeds it. No separate collection — a video companion IS a post.
- **Site-wide identity lives in `src/consts.ts`** (title, description, GitHub/YouTube URLs).
  Components import from there, never hardcode.
- **`draft: true` hides a post from the build** but shows it on the dev server.
- **No server, no keys.** Pure static build, deployed by GitHub Actions to GitHub Pages on push
  to main. Nothing depends on the workstation being up.

## Routing

`src/pages/[section].astro` generates one page per section at the root (`/the-race`). Static
routes (`/about`, `/projects`, `/blog`) take precedence over it, which is why the section slugs
must never collide with a page name.

## Checks

`npm run check` (astro check) runs in CI before the build, so a type error blocks the deploy
rather than shipping. The section-slug and duplicate-slug guards fail the build itself.

## Publishing flow

1. Copy `templates/post.md` to `src/content/blog/<slug>.md`, set `section:`, write.
2. Commit, push to main → Actions builds and deploys.

## Later

- Custom domain: add a `CNAME` file + update `site` in `astro.config.mjs`.
- Channel launch: set `YOUTUBE_URL` in `src/consts.ts` (header link appears automatically).
