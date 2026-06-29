# Vincent Onotu Bello — Resume & Portfolio

A modern single-page **resume + portfolio** site. Pure HTML, CSS, and vanilla JavaScript — no build step, no dependencies. Designed to deploy to **GitHub Pages** out of the box.

> Original design. All content is written from the source CV in fresh language. No asset reuse from any reference site.

---

## Files

| File         | Purpose                                                     |
|--------------|-------------------------------------------------------------|
| `index.html` | The single-page site (resume + portfolio).                  |
| `cv.html`    | A separate, print-optimised CV page (Print → Save as PDF).  |
| `styles.css` | Shared theme tokens, layout, components, print rules.       |
| `cv.css`     | CV-page-only tweaks (paper sizing, header bar).             |
| `main.js`    | Year stamp, theme toggle, scroll-spy nav, smooth scroll.    |
| `.nojekyll`  | Tells GitHub Pages not to run this through Jekyll.          |

## Quick start

```bash
# Local preview (any static server)
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` in a browser — there's no build step.

---

## Deploying to GitHub Pages

This repo is already wired up for the user-page pattern (`Oziadaovosi/my-updated-cv`).

1. Make sure all files are committed on the **default branch** (the one GitHub shows as `default` in the repo settings — usually `main`).
2. In the GitHub repo UI: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **default branch** / root
3. Wait ~60 seconds. Your site will appear at:
   - **https://oziadaovosi.github.io/my-updated-cv/**

> If the site appears blank or fonts don't load, double-check that `styles.css`, `cv.css`, and `main.js` are at the repo root (not inside a subfolder).

### Custom domain

Add a file named `CNAME` (no extension) at the repo root containing your domain:

```
vincentbello.dev
```

Then point your DNS provider to GitHub's pages servers (see GitHub docs for the four `A` records and one `CNAME`).

---

## Customising

### 1. Personal links
Open `main.js` and replace the placeholder URLs:

```js
const links = {
  linkedin: 'https://www.linkedin.com/in/YOUR-HANDLE/',
  github:   'https://github.com/YOUR-HANDLE',
};
```

The buttons on the page use `data-link="linkedin"` / `data-link="github"` and resolve to those URLs at load time.

### 2. Project cards
The four cards in `#work` are **placeholders** — clearly marked. Edit them directly in `index.html` (search for `id="work"`). Replace the title, description, tags, and the `placeholder` badge with your real project, or duplicate a `<article class="card">…</article>` block to add more.

### 3. Colours
Open `styles.css` and edit the CSS variables at the top of `:root`:

```css
--accent: #c4ff3d;   /* the lime highlight */
--bg:     #0a0a0a;   /* page background */
--ink:    #f5f1e8;   /* default text colour */
```

A light theme is already wired up (`[data-theme="light"]`); toggle it with the ◐ button in the side rail, or set `localStorage.vb-theme = 'light'`.

### 4. Photo / avatar
The hero currently has no image. To add one, drop a photo into the repo (e.g. `avatar.jpg`) and inside `index.html` insert just above the `<h1 class="hero__title">`:

```html
<img class="hero__avatar" src="avatar.jpg" alt="Vincent Onotu Bello" />
```

Then add to `styles.css`:

```css
.hero__avatar { width: 96px; height: 96px; border-radius: 50%; object-fit: cover; margin-bottom: 20px; border: 2px solid var(--accent); }
```

---

## Printing the CV

Open `cv.html` in any browser and press **⌘P** (macOS) or **Ctrl+P** (Windows/Linux). In the print dialog choose **Save as PDF** and:

- **Paper size:** A4 or Letter
- **Margins:** Default or "Minimum"
- **Background graphics:** **On** (so the green accents survive)

The page is tuned to fit ~2 pages.

---

## Licence

Content © Vincent Onotu Bello. Code released under the MIT licence — fork it, learn from it, ship your own version.
