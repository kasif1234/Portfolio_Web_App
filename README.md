# Mohammad Kasif — Portfolio

A static HTML/CSS/JS site matching your reference layout: maroon sticky header, numbered
sections (01–06), a profile card, and cream/editorial styling throughout.
No framework, no build step — open `index.html` in a browser and it works.

## File structure — what goes where

```
portfolio/
├── index.html   ← page structure + static text (bio, headings, prose)
├── style.css    ← all visual styling (colors, fonts, spacing, layout)
├── script.js    ← editable content (News/Research/Projects/YouTube) + rendering logic
└── README.md    ← this file
```

**Rule of thumb for future edits:**
- Changing a *fact* in News, Research, Projects, or YouTube → edit `script.js`
- Changing *wording* in the Summary or Outside bio, or a section heading → edit `index.html`
- Changing a *color, font, or spacing* → edit `style.css`

## How to add content (the important part)

Open `script.js`. At the top there's a `DATA` object with arrays. Each array item is one
entry on the page. To add something, copy an existing object in the array (with its comma)
and edit the fields. Example — adding a news item:

```js
NEWS: [
  { date: "Sep 2026", text: "Paper accepted at XYZ conference.", isNew: true },
  { date: "Jun 2026", text: "Working on materials informatics...", isNew: true },
  // ...
],
```

Same pattern for `RESEARCH`, `PROJECTS`, and `YOUTUBE`. For YouTube, just paste the video ID
(the part after `v=` in a YouTube URL) into `videoId` — the thumbnail is fetched automatically
from YouTube once you do. `LINKS` at the top holds your LinkedIn/GitHub/Scholar/CV URLs —
fill those in and they'll appear in the contact row under Summary; leave any blank and it's
hidden automatically.

You never need to touch the HTML or CSS for routine updates.

## Adding real photos

There's an `assets/img/` folder in this project, wired to work with zero code changes.
Drop a file in with the exact name below and it appears next reload — no HTML editing:

| File in `assets/img/` | Where it shows up | Status |
|---|---|---|
| `profile.jpg` | Hero photo in the Summary profile card | ✅ already in place (cropped from your reference screenshot — swap for a higher-res original any time) |
| `qu-cricket.jpg` | First tile in the Outside section | Placeholder — add when ready |
| `speaking.jpg` | Second tile in the Outside section | Placeholder — add when ready |

Until a file exists, that spot shows a plain placeholder tile instead of a broken image —
so it's safe to deploy before you've added the remaining two photos.

If you'd rather use `.png` or `.webp`, open `index.html`, search for `assets/img/`, and
change the file extension in the matching `src="..."` attribute.

## Running it locally in VS Code

No install needed — just open the folder and use the **Live Server** extension
(Extensions panel → search "Live Server" → Install → right-click `index.html` → "Open with Live Server").
Or, from a terminal in the project folder:

```bash
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Deploying to Vercel

This is a plain static site, so Vercel needs no configuration.

1. **Push to GitHub**
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. **Import into Vercel**
   - Go to vercel.com → **Add New… → Project** → pick your GitHub repo.
   - Framework preset: choose **"Other"** (Vercel usually auto-detects "no framework" correctly).
   - Leave Build Command and Output Directory blank — there's nothing to build.
   - Click **Deploy**.
3. Every future `git push` to `main` auto-redeploys. That's the whole loop:
   edit `script.js` locally → commit → push → live on your Vercel URL within ~30 seconds.

## Notes

- Fonts (`Archivo` for headings, `Inter` for body) load from Google Fonts via a `<link>`
  in `index.html` — no local font files needed.
- Smooth-scrolling respects `prefers-reduced-motion`, so it's skipped for users who have
  that OS setting on.
- The top nav highlights the section currently in view automatically, and wraps/scrolls
  on narrow screens — no separate mobile markup to maintain.
- Colors and type are all defined once as CSS variables at the top of `style.css`
  (`--maroon`, `--accent`, `--font-head`, etc.), sampled from your reference design —
  change them there to retheme the whole site.
