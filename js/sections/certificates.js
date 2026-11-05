// ============================================================
//  js/sections/certificates.js  —  Cert cards renderer
// ============================================================

import { PORTFOLIO } from "../../data/data.js";
import { I18N }      from "../i18n.js";
import { State }     from "../state.js";

export function renderCertificates() {
  const t    = I18N[State.lang];
  const isAr = State.lang === "ar";

  document.querySelector("#certificates .sec-tag").textContent  = t.secTags.certificates;
  document.querySelector("#certificates .sec-title").innerHTML  = t.secTitles.certificates;

  document.getElementById("cert-grid").innerHTML = PORTFOLIO.certificates.map(c => `
    <div class="cert-card reveal">
      <div class="cert-ic">${c.icon}</div>
      <span class="cert-badge">${t.certified}</span>
      <div class="cert-name">${c.nameEn}</div>
      <div class="cert-iss">${c.issuer}</div>
      <div class="cert-dt">${isAr ? c.dateAr : c.dateEn}</div>
    </div>`).join("");
}
