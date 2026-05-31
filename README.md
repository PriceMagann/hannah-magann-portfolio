# Hannah Magann — Modeling Portfolio

A fast, mobile-friendly, SEO-friendly static portfolio. No frameworks, no build step — just HTML, CSS, and a little vanilla JavaScript.

```
index.html          ← the page
css/style.css        ← all styling
js/main.js           ← nav, lightbox, scroll reveals
images/              ← optimized photos (≤500 KB each)
```

## Make it yours (search for `EDIT` in index.html)

1. **Your name** — `<h1 class="hero__name">` and the `<title>`, brand link, footer, and the JSON-LD block.
2. **Bio** — the `About` section paragraphs.
3. **Measurements** — the `stats` list in `About`.
4. **Contact** — email (`mailto:`), Instagram handle, agency, location in the `Booking` section.
5. **SEO** — `<title>`, `<meta name="description">`, and the `og:`/`twitter:` tags in `<head>`. Replace `https://example.com/` with your real URL.

To add or reorder photos: drop a `.jpg` in `images/` (keep them ~1400px wide, under ~500 KB) and copy one `<figure class="shot">` block in the portfolio section.

## Deploy to GitHub Pages (free)

```bash
git init
git add .
git commit -m "Launch portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `root` → Save.**
Your site goes live at `https://YOUR-USERNAME.github.io/YOUR-REPO/` within a minute or two.

### Custom domain (optional)
Add your domain under **Settings → Pages → Custom domain**, then create a file named `CNAME` in this folder containing just your domain (e.g. `hannahmagann.com`).

---
Built as plain files so it loads instantly and ranks well. Every image has descriptive `alt` text, the page uses semantic landmarks, and there is Open Graph + Person structured data for clean link previews and search results.
