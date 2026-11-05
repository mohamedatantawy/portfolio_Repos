// ============================================================
//  js/nav.js  —  Navbar, scroll-spy dots, progress bar, mobile
// ============================================================

import { I18N }  from "./i18n.js";
import { State } from "./state.js";

const SECTION_IDS = ["home","projects","skills","certificates","training","contact"];

export function initNav() {
  _buildNavLinks();
  _buildSpyDots();
  _bindMobile();
  window.addEventListener("scroll", _onScroll, { passive: true });
  _onScroll(); // run once on load
}

export function refreshNav() {
  _buildNavLinks();
  _buildSpyDots();
}

// ── Build nav links ──────────────────────────────────────────
function _buildNavLinks() {
  const t = I18N[State.lang];
  const list = document.getElementById("nav-list");
  list.innerHTML = SECTION_IDS.map((id, i) => `
    <li>
      <a href="#${id}" data-sec="${i}" class="${i === 0 ? "active" : ""}">
        ${t.nav[i]}
      </a>
    </li>`).join("");

  list.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      _smoothTo("#" + SECTION_IDS[+a.dataset.sec]);
      closeMobile();
    });
  });

  // lang btn
  document.getElementById("lang-btn").textContent = t.langBtn;
}

// ── Spy dots ─────────────────────────────────────────────────
function _buildSpyDots() {
  const t = I18N[State.lang];
  const dots = document.getElementById("spy-dots");
  dots.innerHTML = SECTION_IDS.map((id, i) => `
    <div class="spy-dot${i === 0 ? " active" : ""}" data-spy="${i}">
      <span class="spy-tip">${t.nav[i]}</span>
    </div>`).join("");

  dots.querySelectorAll(".spy-dot").forEach(d => {
    d.addEventListener("click", () => _smoothTo("#" + SECTION_IDS[+d.dataset.spy]));
  });
}

// ── Scroll handler ───────────────────────────────────────────
function _onScroll() {
  const scrollY = window.scrollY;
  const docH    = document.documentElement.scrollHeight - window.innerHeight;

  // Progress bar
  document.getElementById("progress-fill").style.width = (scrollY / docH * 100) + "%";

  // Nav shadow
  document.getElementById("nav").classList.toggle("scrolled", scrollY > 20);

  // Active section
  let active = 0;
  SECTION_IDS.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 90) active = i;
  });

  document.querySelectorAll("#nav-list a").forEach(a =>
    a.classList.toggle("active", +a.dataset.sec === active));

  document.querySelectorAll(".spy-dot").forEach(d =>
    d.classList.toggle("active", +d.dataset.spy === active));

  // Scroll reveals
  document.querySelectorAll(".reveal:not(.vis)").forEach((el, i) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.88)
      setTimeout(() => el.classList.add("vis"), i * 55);
  });
}

// ── Mobile menu ──────────────────────────────────────────────
function _bindMobile() {
  const t = I18N[State.lang];
  const mob = document.getElementById("mob-menu");

  // rebuild mobile links
  mob.querySelectorAll("a").forEach(a => a.remove());
  SECTION_IDS.forEach((id, i) => {
    const a = document.createElement("a");
    a.textContent = t.nav[i];
    a.href = "#" + id;
    a.addEventListener("click", e => { e.preventDefault(); _smoothTo("#" + id); closeMobile(); });
    mob.appendChild(a);
  });

  document.getElementById("mob-toggle").onclick = () =>
    mob.classList.toggle("open");
  document.getElementById("mob-close").onclick = closeMobile;
}

export function closeMobile() {
  document.getElementById("mob-menu").classList.remove("open");
}

// ── Smooth scroll helper ─────────────────────────────────────
function _smoothTo(sel) {
  document.querySelector(sel)?.scrollIntoView({ behavior: "smooth" });
}

// expose for buttons in HTML
window._scrollTo = _smoothTo;
