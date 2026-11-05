// ============================================================
//  js/sections/projects.js  —  Projects grid renderer
// ============================================================

import { PORTFOLIO } from "../../data/data.js";
import { I18N }      from "../i18n.js";
import { State }     from "../state.js";

const TAG_CLASS = { cyan:"tc", purple:"tp", green:"tg", amber:"ta" };

export function renderProjects() {
  const t    = I18N[State.lang];
  const isAr = State.lang === "ar";

  document.querySelector("#projects .sec-tag").textContent   = t.secTags.projects;
  document.querySelector("#projects .sec-title").innerHTML   = t.secTitles.projects;

  const grid = document.getElementById("proj-grid");
  grid.innerHTML = PORTFOLIO.projects.map(p => `
    <div class="proj-card${p.featured ? " feat" : ""} reveal">
      <div class="proj-img" style="background:linear-gradient(135deg,${p.bgFrom},${p.bgTo})">
        <span>${p.icon}</span>
        ${p.featured ? `<span class="feat-badge">${t.featured}</span>` : ""}
      </div>
      <div class="proj-body">
        <div class="tags">
          ${p.tags.map(tg => `<span class="tag ${TAG_CLASS[tg.type]}">${tg.label}</span>`).join("")}
        </div>
        <div class="proj-name">${isAr ? p.titleAr : p.titleEn}</div>
        <div class="proj-desc">${isAr ? p.descAr  : p.descEn}</div>
        <div class="proj-links">
          <a href="${p.liveUrl}" class="proj-lnk" target="_blank">${t.live}</a>
          <a href="${p.codeUrl}" class="proj-lnk" target="_blank">${t.code}</a>
        </div>
      </div>
    </div>`).join("");
}
