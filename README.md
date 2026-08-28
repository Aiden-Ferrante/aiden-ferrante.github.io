# aiden-ferrante.github.io

Personal blog + YouTube companion site. Astro, static, deployed to GitHub Pages.

```bash
npm run dev      # local dev at :4321
npm run build    # static build to dist/
```

New post: copy [templates/post.md](templates/post.md) to `src/content/blog/<slug>.md`:

```yaml
---
title: 'Post title'
description: 'One sentence.'
pubDate: 'Aug 28 2026'
kind: 'essay'          # or 'video'
video: 'https://youtu.be/...'   # only for kind: video
topic: 'scalar-autograd'        # a slug from src/data/learning-map.ts
tags: []
draft: true            # hidden from the build, visible on the dev server
---
```

Setting `topic` attaches the post to that node on the [learning map](src/pages/learning.astro) and
bumps the coverage count. An unknown slug fails the build and prints the valid ones.

See [ARCHITECTURE.md](ARCHITECTURE.md) for boundaries.
