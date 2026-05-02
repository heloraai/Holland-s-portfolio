# Holland Sun — Personal Portfolio

A single-page personal site for **Haoran (Holland) Sun**, tailored to the
**Anthropic Product Support Specialist (Singapore)** role.

Designed in [Claude Design](https://claude.ai/design) and implemented as a
static site (HTML + CSS + React via Babel standalone — no build step).

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

- `index.html` — entry point, loads fonts, React, Babel, and `app.jsx`
- `app.jsx` — all React components (Nav, Hero, Projects, Approach, Resume, Contact, Footer)
- `styles.css` — full design system (Anthropic-red on warm paper)
- `public/freecropper-analytics.jpg` — real Google Analytics screenshot

## Sections

1. **Hero** — name, three-line manifesto (`I ship, I support, I teach`), at-a-glance card
2. **Freecropper** — solo full-stack project, 2.1K MAU
3. **Numbers** — key metrics strip
4. **Holland's Vibe Coding course** — community + curriculum
5. **AI, in public** — Douyin / Rednote content
6. **The four muscles** — direct mapping to the role
7. **Background** — three AI PM roles + NUS
8. **Contact** — LinkedIn, GitHub, 小红书, Email

## Design tokens

| Token | Value |
|-------|-------|
| Primary | `#D2392B` (Anthropic red) |
| Paper | `#FAFAF6` |
| Ink | `#0E0E0D` |
| Serif | Source Serif 4 |
| Sans | Inter |
| Mono | JetBrains Mono |
