# Mihir Giri — Portfolio

React + Vite portfolio with dark/light mode, scroll animations, and full mobile responsiveness.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder — deploy that folder to Render, Netlify, Vercel, or GitHub Pages.

## Edit your content

All resume content (name, education, skills, projects, experience, certificates) lives in one file:

```
src/data.js
```

Change anything there and it updates everywhere automatically — no need to touch components.

## Add your photo

The hero section is currently text + stat cards only. To add a photo:
1. Drop your image into `src/assets/`
2. Import it in `src/components/Hero.jsx` and add an `<img>` inside `.hero__copy` or as a new column
3. Style it in `Hero.css`

## Theme

Dark/light mode toggle is in the navbar (top right). Colors are defined as CSS variables in `src/index.css` under `:root[data-theme="dark"]` and `:root[data-theme="light"]` — edit those to change the palette everywhere at once.
