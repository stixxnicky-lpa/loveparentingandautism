# LPA Blog — Setup Guide for GitHub Pages (Jekyll)

## What's in this folder

| File | Purpose |
|------|---------|
| `blog/index.html` | Your blog listing page (loveparentingandautism.com/blog/) |
| `_layouts/post.html` | Template applied to every blog post automatically |
| `_posts/2026-06-03-26-years-in-...md` | Sample post — ready to publish or edit |

---

## How to add this to your GitHub repo

1. **Add the files** to your existing `stixxnicky-lpa/loveparentingandautism` repo:
   - Drop `blog/index.html` → `blog/index.html`
   - Drop `_layouts/post.html` → `_layouts/post.html`
   - Drop the `_posts/` folder and the `.md` file inside it

2. **Check your `_config.yml`** (or create one if you don't have it):
   ```yaml
   title: Love, Parenting & Autism
   url: "https://loveparentingandautism.com"
   baseurl: ""
   permalink: /blog/:year/:month/:day/:title/
   ```

3. **Push to GitHub** — GitHub Pages automatically builds Jekyll. No extra steps needed.

---

## How to write a new blog post

Create a new file in `_posts/` named: `YYYY-MM-DD-your-post-title.md`

Copy this front matter to the top of every post:

```yaml
---
layout: post
title: "Your Post Title Here"
description: "One sentence that describes the post — used for SEO and social sharing."
category: NT Wife Life        # or: NT Parent Truths / Autism Explained / Tools & Strategies / NT Self-Care
date: 2026-06-10
emoji: 💜                     # Shows on the blog index card
read_time: 5 min read
tags: [autism, NT wife, marriage, communication]
---

Your post content goes here in normal Markdown...
```

## Categories (for the filter bar)
- `NT Wife Life`
- `NT Parent Truths`
- `Autism Explained`
- `Tools & Strategies`
- `NT Self-Care`

## Markdown quick reference

```markdown
## Big heading
### Smaller heading

**bold text**
*italic text*

> This becomes a styled blockquote pullout

---  ← horizontal divider line

<div class="callout">
💡 This creates an orange-bordered tip box
</div>
```

---

## Newsletter form
The newsletter strip in `blog/index.html` already uses your existing Formspree endpoint (`mvzllbvq`). No changes needed.
