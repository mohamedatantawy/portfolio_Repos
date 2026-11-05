// ============================================================
//  js/sections/contact.js  —  Contact card renderer
// ============================================================

import { PORTFOLIO } from "../../data/data.js";
import { I18N }      from "../i18n.js";
import { State }     from "../state.js";

export function renderContact() {
  const t = I18N[State.lang];
  const o = PORTFOLIO.owner;

  document.querySelector("#contact .sec-tag").textContent = t.secTags.contact;
  document.getElementById("ct-title").textContent = t.contactTitle;
  document.getElementById("ct-desc").textContent  = t.contactDesc;
  document.getElementById("ct-btn").textContent   = t.contactBtn;
  document.getElementById("ct-btn").href          = `mailto:${o.email}`;
  document.getElementById("footer-name").textContent = (State.lang === "ar") ? o.nameAr : o.nameEn;
  document.getElementById("footer-txt").textContent  = t.footerTxt;

  // Social links
  document.getElementById("soc-github").href   = o.github;
  document.getElementById("soc-linkedin").href = o.linkedin;
  document.getElementById("soc-twitter").href  = o.twitter;
  document.getElementById("soc-email").href    = `mailto:${o.email}`;
}
