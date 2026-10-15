# Testing report

Date: 15 October 2026

## Completed checks

These are source-level checks and production-script interaction simulations. They are **not** a claim of browser-rendered or device testing.

| Check | Result |
| --- | --- |
| JavaScript syntax (`node --check`) | Both production scripts passed. |
| Static source checks | 153 passed, 0 failed. |
| Local file references | 61 stylesheet, script, favicon, image, resume, and page references resolve to files in the project. |
| Section anchors | 41 internal anchor references resolve to actual IDs. |
| HTML structure | All 3 pages have unique IDs, one main region, one H1, viewport metadata, language, and updated author/title content. |
| Theme controls | Exactly Neon Dark, Neon Light, Dark, and Light appear in the navbar of all 3 pages, with accessible selected states. |
| Theme tokens | All four themes define the same 25 tokens; every CSS variable reference is defined. |
| Color calculations | 100 foreground/background comparisons passed the selected thresholds: 4.5:1 for text and 3:1 for focus/input boundaries. Lowest tested text contrast: 4.82:1. These are token calculations, not a rendered accessibility audit. |
| JavaScript interaction simulations | 30 passed, 0 failed, using the production scripts and an event-capable test DOM generated from the actual HTML. |
| Supplied photo | Decodes correctly and has the same SHA-256 hash as the original upload. |
| Supplied resume | Same SHA-256 hash as the original upload; linked PDF is present. |
| Career content | All 6 resume positions are present; date ranges and the source’s overlapping dates are retained. |
| Previous-owner content audit | 20 identity/account/content patterns searched across all final text sources; zero matches. Obsolete project folders and personal assets are absent. |
| Active placeholders | No unfinished numerical placeholders or template filler in the active HTML/CSS/JS/SVG source. The unmodified supplied PDF retains its own original text. |
| Runtime dependencies | No remote script, stylesheet, font, icon, or image dependencies; no data-fetch request or inherited third-party service account. |

The 30 interaction checks cover:

- Applying Dark before the page’s DOM-ready event when there is no saved preference.
- Selecting each of the four themes; updating the root appearance, color scheme, visible label, pressed state, theme-color metadata, and saved preference.
- Preserving scroll position, entered form content, and a prepared draft when switching themes.
- Restoring each theme in simulated reloads and on the career page using shared same-origin storage.
- Falling back safely for invalid preferences and blocked storage.
- Arrow/Home/End selection movement, Escape, focus restoration, outside clicks, and focus changes.
- Cross-tab preference events and storage clearing.
- Navigation open/close state, ARIA updates, Escape focus restoration, link selection, outside clicks, focus changes, and breakpoint-change events.
- Scroll indicator visibility and scroll-spy link state.
- Email draft encoding, including Unicode and special characters; no field reset or automatic send.
- Invalid/empty field handling, and invalidating a stale draft after an edit.
- Initialization on the main, career, and 404 pages without uncaught errors in the simulation.
- Clipboard success/failure feedback and hiding that enhancement on unsupported/insecure origins.

## Browser checks still required

The supported browser preview capability is not installed in this environment. No preview server or browser was launched. There is no build command in this static project. Actual startup, rendering, layout, browser-native behavior, and console/network QA remain unverified.

Before publishing, open the project through a local HTTP server and check:

1. Desktop at approximately 1440 and 1024 pixels, tablet at 768 pixels, and phones at 390 and 320 pixels.
2. All four themes on the home, career, and 404 pages: typography, photo crop, contrast in the rendered context, navigation, footer, inputs, responsibilities, and popovers.
3. Navbar/menu layout at each breakpoint, keyboard Tab/Enter/Space behavior, touch targets, native details/summary behavior, and screen-reader announcements.
4. Theme persistence after an actual reload and navigation between pages; also test with browser storage disabled. File-URL storage behavior is browser-dependent, so HTTP is recommended.
5. Click the resume download and confirm the browser downloads/opens the correct original PDF.
6. Click the email/phone links and the prepared draft using configured apps. No email or phone call was sent during testing.
7. Confirm no broken images, missing network resources, horizontal overflow, or console errors in a real browser.
8. Confirm reduced-motion settings and any high-zoom accessibility behavior you require.

No delivery claim is made for the contact form. It only builds a mailto draft for the visitor’s own app. The source does not use a mail server.

## Archive verification

The completed ZIP is checked for CRC integrity and file completeness after packaging. It includes the entire updated project, all supplied assets required by the site, and these documentation files. No original template backup, test fixture, temporary helper, credential, or development server is bundled.
