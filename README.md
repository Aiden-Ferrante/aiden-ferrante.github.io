# aiden-ferrante.github.io

Personal blog + YouTube companion site. Astro, static, deployed to GitHub Pages.

```bash
npm run dev      # local dev at :4321
npm run build    # static build to dist/
```

New post: add `src/content/blog/<slug>.md`:

```yaml
---
title: 'Post title'
description: 'One sentence.'
pubDate: 'Aug 28 2026'
kind: 'essay'          # or 'video'
video: 'https://youtu.be/...'   # only for kind: video
tags: []
---
```

See [ARCHITECTURE.md](ARCHITECTURE.md) for boundaries.
