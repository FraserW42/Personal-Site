# How to update this site

Everything you'd normally change lives in **content.js**. Open it in any text
editor, change the words between the quote marks, save, refresh the browser.

To view the site: double-click **index.html**.

---

## The pages

- **index.html** — the Work page. This is what opens first.
- **profile.html** — headshot, bio, and contact details.

Two items in the nav: Work and Profile. The current one is highlighted in blue.

---

## Two formatting tricks

These work in the bio and in any description:

| You type | You get |
|---|---|
| `*like this*` | *italic text* |
| `[click here](profile.html)` | a link |

---

## The home blurb, headshot and contact

Open `content.js`, top section (`SITE`).

| Field | What it does |
|---|---|
| `name` | Typed out letter by letter at the top of every page |
| `role` | Small line under the headshot, e.g. `Writer / Director` |
| `email` | Written out as plain text on the Profile page — **not** a clickable link |
| `instagram` | Same — written out, not linked |
| `headshot` | Path to your photo, e.g. `images/headshot.jpg`. Leave as `""` for none. |
| `bio` | Profile text. Blank line between paragraphs. |

Email and Instagram are deliberately plain text. Visitors select and copy them.

---

## Adding a piece of work

1. Put the still in the **images** folder. Landscape (16:9) works best.
2. In `content.js`, scroll to `WORKS`.
3. Copy a whole block — from a `{` to its matching `},` — and paste it above `];`.
4. Change the text.

| Field | What it does |
|---|---|
| `title` | Shown when the piece is opened — becomes the link to `video`, if one is set |
| `still` | Path to the image, e.g. `images/work-5.jpg` |
| `video` | Paste the normal Vimeo or YouTube link. Leave as `""` for no video. |
| `meta` | Small line under the title, e.g. `Short Film · 2025 · 12 min · Director` |
| `description` | Longer text. Blank line between paragraphs. |
| `awards` | Optional. One line per award. Delete the whole line if none. |
| `credits` | Optional. Delete the whole line if none. |

Pieces appear in the order listed. To reorder, move a block up or down.

**How the video works:** click a still and its details slide open underneath —
title, description, awards, credits. If a piece has a `video` link, the title
itself becomes underlined and gains a small "Watch trailer" badge; clicking it
opens the trailer in a new tab, on Vimeo or YouTube's own player. Pieces with
`video: ""` just show a plain, non-clickable title.

Trailers open in a new tab rather than playing inline on the page. Embedding a
player directly in the page is possible, but it's the kind of thing that breaks
in ways outside your control — YouTube and Vimeo both refuse to embed a video
under certain privacy or account settings, and this shows up to a visitor as a
blank box or an error message with no clear fix. Opening in a new tab always
works, on every video, every time.

All of these link formats work — paste them exactly as they appear in your
browser's address bar:

- `https://vimeo.com/207871306`
- `https://vimeo.com/207871306/a1b2c3d4e5` (unlisted videos)
- `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- `https://youtu.be/dQw4w9WgXcQ`

---

## Colours and type

Colours are the first block of `styles.css` — a grayscale screenplay palette:
paper `#F4F3F0`, ink `#161614`, hairlines `#C9C8C2`. Type is Courier Prime, the
screenplay standard, loaded free from Google Fonts. The text column is set to
`66ch`, roughly the line length of a real screenplay page.

Stills and the headshot show in their original colour — no filter is applied.

**The images currently in the `images` folder are grey placeholders** named to match
your real files. Replace each one with your actual image, keeping the same filename,
or update the `still:` / `headshot:` paths in `content.js` to match your filenames.

---

## Two rules that prevent 99% of breakages

1. Only change text **between the quote marks**. Leave the quote marks, colons,
   commas, and curly brackets alone.
2. Every block ends with a comma after its closing bracket: `},`

If a page goes blank after an edit, you've almost certainly deleted a quote mark
or a comma. Undo (Ctrl+Z / Cmd+Z) and try again.

---

## Putting it online with a custom domain (free)

You don't need to download or install anything — just a browser and two free
accounts.

**Part 1 — get the files online**

1. Sign up at **github.com** with an email address.
2. Click the **+** top right → **New repository**. Name it anything, leave it
   Public, click **Create repository**.
3. On the new page, click **uploading an existing file**. Drag in every file and
   folder from this folder (`content.js`, `site.js`, `styles.css`, `index.html`,
   `profile.html`, the `images` folder, this README). Click **Commit changes**.
4. Sign up at **vercel.com** using **Continue with GitHub**.
5. In Vercel: **Add New** → **Project** → pick the repository. Set Framework
   Preset to **Other**; leave Build Command and Output Directory blank.
6. Click **Deploy**. About a minute later you get a live `.vercel.app` link.

**Part 2 — point your own domain at it**

1. In the Vercel project: **Settings** → **Domains**.
2. Type your domain (e.g. `yourname.com`) and click **Add**. Vercel shows one or
   two DNS records.
3. Log in wherever you bought the domain, find its DNS settings, and add exactly
   those records.
4. Wait — usually minutes, occasionally up to 48 hours. Vercel adds the HTTPS
   padlock automatically.

**Updating it later:** open `content.js` in the GitHub repo, click the pencil
icon, edit the text in your browser, click **Commit changes**. The live site
updates itself in about 30 seconds. You never touch Vercel again.
