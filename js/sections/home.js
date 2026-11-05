// ============================================================
//  js/sections/home.js  —  Home section renderer + typing FX
// ============================================================

import { PORTFOLIO } from "../../data/data.js";
import { I18N }      from "../i18n.js";
import { State }     from "../state.js";

let typTimer = null, typIdx = 0, chIdx = 0, del = false;

export function renderHome() {
  const t   = I18N[State.lang];
  const d   = PORTFOLIO;
  const isAr = State.lang === "ar";

  // Static text
  _q("#badge-txt").textContent  = t.available;
  _q("#dev-title").textContent  = t.devTitle;
  _q("#pro-title").textContent  = t.proTitle;
  _q("#home-sub").textContent   = t.subtitle;
  _q("#cta-work").textContent   = t.ctaWork;
  _q("#cta-contact").textContent = t.ctaContact;

  // Stats
  d.stats.forEach((s, i) => {
    _q(`#stat-num-${i}`).textContent   = s.num;
    _q(`#stat-label-${i}`).textContent = isAr ? s.labelAr : s.labelEn;
  });

  // Restart typing effect
  clearTimeout(typTimer);
  chIdx = 0; del = false;
  _q("#typing-word").textContent = "";
  _startTyping(t.typingWords);
}

function _startTyping(words) {
  function tick() {
    const el = _q("#typing-word");
    if (!el) return;
    const word = words[typIdx % words.length];
    if (!del) {
      el.textContent = word.slice(0, ++chIdx);
      if (chIdx === word.length) { del = true; typTimer = setTimeout(tick, 1900); return; }
    } else {
      el.textContent = word.slice(0, --chIdx);
      if (chIdx === 0) { del = false; typIdx++; }
    }
    typTimer = setTimeout(tick, del ? 55 : 95);
  }
  typTimer = setTimeout(tick, 500);
}

function _q(sel) { return document.querySelector(sel); }
