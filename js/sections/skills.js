// ============================================================
//  js/sections/skills.js  —  Skills bars + tools grid
// ============================================================

import { PORTFOLIO } from "../../data/data.js";
import { I18N }      from "../i18n.js";
import { State }     from "../state.js";

export function renderSkills() {
  const t    = I18N[State.lang];
  const sk   = PORTFOLIO.skills;
  const isAr = State.lang === "ar";

  document.querySelector("#skills .sec-tag").textContent  = t.secTags.skills;
  document.querySelector("#skills .sec-title").innerHTML  = t.secTitles.skills;

  const bar = (s) => `
    <div class="sk-item">
      <div class="sk-top">
        <span class="sk-name">${isAr ? s.nameAr : s.nameEn}</span>
        <span class="sk-pct">${s.pct}%</span>
      </div>
      <div class="sk-bar"><div class="sk-fill" data-p="${s.pct}"></div></div>
    </div>`;

  document.getElementById("skills-wrap").innerHTML = `
    <div class="sk-col">
      <h3>${t.skillCats.frontend}</h3>
      ${sk.frontend.map(bar).join("")}
      <h3 style="margin-top:1.8rem">${t.skillCats.backend}</h3>
      ${sk.backend.map(bar).join("")}
      <h3 style="margin-top:1.8rem">${t.skillCats.soft}</h3>
      ${sk.soft.map(bar).join("")}
    </div>
    <div class="sk-col">
      <h3>${t.skillCats.tools}</h3>
      <div class="tools-grid">
        ${sk.tools.map(tl => `<span class="tool">${tl}</span>`).join("")}
      </div>
    </div>`;

  // Reset bars — will animate via scroll observer
  State.skillsFired = false;
}

export function animateSkillBars() {
  document.querySelectorAll(".sk-fill").forEach(bar => {
    bar.style.width = bar.dataset.p + "%";
  });
}
