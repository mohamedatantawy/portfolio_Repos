# Portfolio — Modular Vanilla JS

One-page scrollable portfolio with **AR / EN** support, built with **zero dependencies**.  
Every section has its own JS file. All content lives in one data file.

---

## 📁 Project Structure

```
portfolio/
│
├── index.html              ← HTML shell (section skeletons only)
│
├── css/
│   └── style.css           ← All styles (CSS variables, responsive)
│
├── data/
│   └── data.js             ← ✏️  EDIT THIS to update all content
│
└── js/
    ├── app.js              ← Main entry — wires everything together
    ├── state.js            ← Tiny reactive state manager (pub/sub)
    ├── i18n.js             ← AR / EN UI label translations
    ├── nav.js              ← Navbar, scroll-spy dots, progress bar
    ├── cursor.js           ← Custom cursor with lag ring
    │
    └── sections/
        ├── home.js         ← Home section + typing animation
        ├── projects.js     ← Projects grid
        ├── skills.js       ← Skill bars + tools grid
        ├── certificates.js ← Certificate cards
        ├── training.js     ← Experience timeline
        └── contact.js      ← Contact card + social links
```

---

## ✏️ How to edit content

**All** portfolio data lives in `data/data.js`.  
You never need to touch any other file to update content.

```js
// data/data.js
export const PORTFOLIO = {
  owner: {
    nameEn: "Ahmed",        // ← change your name
    email:  "you@example.com",
    github: "https://github.com/yourname",
    ...
  },
  projects: [
    {
      titleAr: "...",
      titleEn: "...",
      tags: [{ label: "React", type: "cyan" }],
      liveUrl: "https://...",
      codeUrl: "https://...",
    },
    // add more projects here
  ],
  skills: { ... },
  certificates: [ ... ],
  experience: [ ... ],
};
```

---

## 🌐 How to add a language

1. Add a new key to `js/i18n.js`:
```js
export const I18N = {
  ar: { ... },
  en: { ... },
  fr: { ... },   // ← add French, etc.
};
```
2. Update the `langBtn` in each language block to cycle through languages.
3. Update `State.set("lang", ...)` in `js/app.js`.

---

## 🚀 How to run

Because the project uses **ES modules** (`import/export`), you need a local server:

```bash
# Option 1 — VS Code Live Server extension (recommended)
# Right-click index.html → "Open with Live Server"

# Option 2 — Python
python -m http.server 8080

# Option 3 — Node.js
npx serve .

# Option 4 — npx http-server
npx http-server .
```

Then open `http://localhost:8080` in your browser.

> ⚠️ Opening `index.html` directly as a file:// URL will NOT work  
> because browsers block ES module imports over the file:// protocol.

---

## 🔧 Dependency Graph

```
data/data.js ──────────────────────────────────────────► sections/*
js/i18n.js  ──────────────────────────────────────────► sections/*, nav.js
js/state.js ──────────────────────────────────────────► sections/*, nav.js, app.js
js/cursor.js  (standalone, no imports)
js/nav.js     imports ← i18n, state
js/sections/* imports ← data, i18n, state
js/app.js     imports ← ALL of the above
```

`data.js` and `i18n.js` are the **only** files you should edit regularly.
# portfolio_Repos
