// ============================================================
//  js/app.js  —  Main entry point — wires all modules together
//
//  Dependency graph:
//
//   data/data.js ──────────────────────────────────────────┐
//   js/i18n.js  ──────────────────────────────────────────┐│
//   js/state.js ──────────────────────────────────────────┐││
//                                                          │││
//   js/sections/home.js         imports ←  data, i18n, state
//   js/sections/projects.js     imports ←  data, i18n, state
//   js/sections/skills.js       imports ←  data, i18n, state
//   js/sections/certificates.js imports ←  data, i18n, state
//   js/sections/training.js     imports ←  data, i18n, state
//   js/sections/contact.js      imports ←  data, i18n, state
//   js/nav.js                   imports ←        i18n, state
//   js/cursor.js                (no imports)
//   js/app.js  ← imports ALL of the above
// ============================================================

import { State }               from "./state.js";
import { I18N }                from "./i18n.js";
import { initCursor }          from "./cursor.js";
import { initNav, refreshNav } from "./nav.js";
import { renderHome }          from "./sections/home.js";
import { renderProjects }      from "./sections/projects.js";
import { renderSkills, animateSkillBars } from "./sections/skills.js";
import { renderCertificates }  from "./sections/certificates.js";
import { renderTraining }      from "./sections/training.js";
import { renderContact }       from "./sections/contact.js";

// ── Render all sections ──────────────────────────────────────
function renderAll() {
  const lang = State.lang;
  const t    = I18N[lang];

  // Update document direction
  document.documentElement.lang = lang;
  document.documentElement.dir  = t.dir;

  // Render each section
  renderHome();
  renderProjects();
  renderSkills();
  renderCertificates();
  renderTraining();
  renderContact();

  // Rebuild nav with new language
  refreshNav();

  // Footer year
  document.getElementById("footer-year").textContent = new Date().getFullYear();

  // Trigger reveals already on screen
  setTimeout(() => {
    document.querySelectorAll(".reveal").forEach(el => el.classList.remove("vis"));
    document.querySelectorAll(".reveal").forEach((el, i) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.88)
        setTimeout(() => el.classList.add("vis"), i * 55);
    });
  }, 80);
}

// ── Skill bar scroll observer ────────────────────────────────
function initSkillObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !State.skillsFired) {
        State.skillsFired = true;
        setTimeout(animateSkillBars, 200);
      }
    });
  }, { threshold: 0.25 });

  const skillsSec = document.getElementById("skills");
  if (skillsSec) observer.observe(skillsSec);
}

// ── Language toggle ──────────────────────────────────────────
document.getElementById("lang-btn").addEventListener("click", () => {
  State.set("lang", State.lang === "ar" ? "en" : "ar");
  State.skillsFired = false;
  renderAll();
  // Re-init skill observer after re-render
  initSkillObserver();
});

// ── Boot ─────────────────────────────────────────────────────
initCursor();
initNav();
renderAll();
initSkillObserver();
