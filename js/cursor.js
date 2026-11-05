// ============================================================
//  js/cursor.js  —  Custom cursor with lag ring
// ============================================================

export function initCursor() {
  const cur  = document.getElementById("cur");
  const ring = document.getElementById("cur-ring");
  if (!cur || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    cur.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
  });

  (function loop() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();

  // Hover expansion
  const HOVER_SEL = "a,button,.proj-card,.cert-card,.tool,.soc,.spy-dot,.btn-prim,.btn-out";
  document.addEventListener("mouseover", e => {
    if (e.target.closest(HOVER_SEL)) document.body.classList.add("hov");
  });
  document.addEventListener("mouseout", e => {
    if (e.target.closest(HOVER_SEL)) document.body.classList.remove("hov");
  });
}
