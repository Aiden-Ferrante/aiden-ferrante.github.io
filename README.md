# aiden-ferrante.github.io

Personal site: opinion writing on four beats, plus a project map. Astro, static, deployed to
GitHub Pages.

```bash
npm run dev      # local dev at :4321
npm run check    # astro check — also gates CI
npm run build    # static build to dist/
```

New post: copy [templates/post.md](templates/post.md) to `src/content/blog/<slug>.md`:

```yaml
---
title: 'Post title'
description: 'One sentence.'
pubDate: 'Aug 28 2026'
kind: 'essay'                   # or 'video'
video: 'https://youtu.be/...'   # only for kind: video
section: 'the-race'             # a slug from src/data/sections.ts
tags: []
draft: true                     # hidden from the build, visible on the dev server
---
```

Sections are `intelligence-economy`, `robotics-and-labor`, `capability-and-the-frontier`, and
`the-race`. An unknown slug fails the build and prints the valid ones.

Projects on `/projects` come from [src/data/projects.ts](src/data/projects.ts).

See [ARCHITECTURE.md](ARCHITECTURE.md) for boundaries.
