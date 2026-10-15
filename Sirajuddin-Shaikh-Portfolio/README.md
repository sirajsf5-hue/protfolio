# Sirajuddin Shaikh — Professional Portfolio

A complete, responsive professional portfolio for retail and store management. The supplied resume is the only source of personal and professional information. The supplied photograph and original resume PDF are included unchanged.

## Open on Windows

1. Right-click the ZIP and choose **Extract All**.
2. Open the `Sirajuddin-Shaikh-Portfolio` folder.
3. Double-click `index.html` to view the portfolio in a modern browser.

No Node.js, npm installation, build step, API key, or internet connection is required for the site assets. Email and phone links use the visitor’s configured apps.

For reliable theme persistence **between different pages**, use a local HTTP server. Browser storage for `file://` pages varies by browser. If Python is installed:

1. Open the extracted folder, click its address bar, type `cmd`, and press Enter.
2. Run `py -m http.server 8000 --bind 127.0.0.1` (or `python -m http.server 8000 --bind 127.0.0.1` if your Python installation uses that command).
3. Visit `http://127.0.0.1:8000`.
4. Keep the command window open; press Ctrl+C to stop the server.

Upload the folder contents to any static web host when ready. All internal links use relative paths, including the career page and resume. No domain-specific URLs have been invented.

## Four appearances

The default is **Dark**. The compact appearance selector sits in the navbar on every page, including the career and 404 pages.

| Theme | Appearance |
| --- | --- |
| Neon Dark | Midnight surfaces, restrained cyan accents, and soft violet secondary details. |
| Neon Light | Cool light neutrals, accessible teal accents, and violet details. |
| Dark | Charcoal surfaces, muted blue accents, and no neon glow. |
| Light | Clean light neutrals, blue accents, and subtle neutral shadows. |

The palette is independent of the photo and resume design. Each theme defines the same shared design tokens for backgrounds, surfaces, text, borders, buttons, inputs, focus, feedback, and shadows. Photo pixels are never recolored or filtered.

Theme selection updates immediately without navigation, preserves entered form values and scroll position, and saves in localStorage when the browser allows it. A small synchronous script restores the saved theme before the stylesheet loads. Storage failure falls back gracefully and selection still works during the visit. Preferences also synchronize between tabs on the same origin.

Use Tab and Enter/Space to open the appearance selector. Arrow keys, Home, and End move among choices; Enter/Space selects a focused button; Escape closes the selector. The selected theme uses a visible check and an accessible pressed state as well as its swatch. Reduced-motion preferences disable animation and smooth scrolling.

## Content and functionality

- Main page: introduction, about, recent experience, retail expertise, education, languages, and contact.
- Dedicated career page: all six roles in the supplied resume, with expandable responsibility lists.
- Original professional photograph, presented with responsive CSS cropping only.
- Unmodified supplied resume available as a local PDF download.
- Real email and telephone links from the resume.
- Contact form that prepares an email draft for the visitor to review and send in their own mail app. It does not send email automatically or claim a message was delivered.
- Mobile navigation, native section links, scroll indicators, accessible form labels, and optional email copying on supported secure origins.
- No external fonts, icon CDNs, analytics, chat accounts, form service accounts, or runtime JavaScript dependencies.

## What changed

The original HTML/CSS/JavaScript architecture and useful multi-section structure were retained. Shared navigation, appearance handling, footer, and design styles now work across the main page, career page, and 404 page. The template’s dependency-heavy effects were replaced with small native JavaScript interactions, and the experience page was retained and rewritten.

The previous identity, biography, developer skills, education, projects, project images, profile pictures, branding, social links, resume link, inactive content, metadata, and account-linked services were removed. The unsupported projects section and its entire directory were removed rather than filled with fictional projects. Right-click and developer-tool blocking were removed.

The new content includes Store Manager roles at Snehanjali Electronics Retail and BigImpex, Mobile & IT Manager and Department Manager roles at Snehanjali, Duty Manager at The Mobile Store (Essar Telecom), and Sales Floor Assistant at Media Magic Hungama Mobile. No unsupported projects, certifications, awards, degrees, grades, or social profiles were added.

## Source structure

```text
Sirajuddin-Shaikh-Portfolio/
  index.html
  404.html
  experience/index.html
  assets/css/style.css
  assets/js/theme.js
  assets/js/script.js
  assets/images/sirajuddin-shaikh.jpeg
  assets/images/favicon.svg
  assets/documents/Sirajuddin_Shaikh_Resume.pdf
  README.md
  CONTENT_AUDIT.md
  TESTING.md
```

`style.css` owns all four palettes and responsive rules. `theme.js` owns preference restoration, selection, accessibility, and persistence. `script.js` owns navigation, the email draft, copy feedback, scroll state, and the current year. All personal content is readable HTML and works without fetching JSON files. JavaScript is needed only for enhancements such as theme persistence and composing a structured email draft.

See **CONTENT_AUDIT.md** for source decisions and **TESTING.md** for actual results and remaining manual checks.
