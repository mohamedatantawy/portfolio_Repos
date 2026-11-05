// ============================================================
//  js/sections/training.js  —  Timeline renderer
// ============================================================

import { PORTFOLIO } from "../../data/data.js";
import { I18N }      from "../i18n.js";
import { State }     from "../state.js";

export function renderTraining() {
  const t    = I18N[State.lang];
  const isAr = State.lang === "ar";

  document.querySelector("#training .sec-tag").textContent  = t.secTags.training;
  document.querySelector("#training .sec-title").innerHTML  = t.secTitles.training;

  document.getElementById("timeline").innerHTML = PORTFOLIO.experience.map((e, i) => `
    <div class="tl-item reveal" style="animation-delay:${i * 80}ms">
      <div class="tl-dot"></div>
      <div class="tl-date">${isAr ? e.dateAr : e.dateEn}</div>
      <div class="tl-title">${isAr ? e.titleAr : e.titleEn}</div>
      <div class="tl-org">${isAr ? e.orgAr : e.orgEn}</div>
      <div class="tl-desc">${isAr ? e.descAr : e.descEn}</div>
    </div>`).join("");
}
