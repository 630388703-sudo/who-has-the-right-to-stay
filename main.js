(function () {
  'use strict';

  const TOTAL = 7;
  const LOCS  = ['—','UTILITY_ROOM_B2','CAMPUS_MAIN','LABOR_PATH','STAIRWELL_7','DATA_CENTER','EXIT_18:00'];
  let cur = 0;

  const hudStatus = document.getElementById('hud-status');
  const hudLoc    = document.getElementById('hud-loc');
  const dots      = document.querySelectorAll('.dot');

  window.goPage = function (n) {
    if (n < 0 || n >= TOTAL) return;
    document.getElementById('p' + cur).classList.remove('active');
    document.getElementById('p' + n).classList.add('active');
    dots[cur].classList.remove('active');
    dots[n].classList.add('active');
    cur = n;
    if (hudLoc) hudLoc.textContent = 'LOC: ' + LOCS[n];
  };

  // Page 5 alert logic
  let alertCount = 0;
  const msgs = [
    'Current Area Does Not Support Long Stay',
    'New Cleaning Task Detected — Please Continue Patrol',
    'STAY REQUEST DENIED — Resume Duties Immediately',
  ];
  window.triggerAlert = function (type) {
    const popup = document.getElementById('sys-popup');
    const msgEl = document.getElementById('popup-msg');
    if (!popup || !msgEl) return;
    msgEl.textContent = msgs[alertCount % msgs.length];
    alertCount++;
    popup.style.animation = 'none';
    popup.offsetHeight; // reflow
    popup.style.animation = 'popIn 0.4s ease';
  };

  // Identity card selection feedback
  window.selectMode = function (mode) {
    document.querySelectorAll('.id-card').forEach(c => c.style.opacity = '0.4');
    const chosen = document.querySelector('.' + mode + '-card');
    if (chosen) chosen.style.opacity = '1';
    setTimeout(() => {
      document.querySelectorAll('.id-card').forEach(c => c.style.opacity = '1');
    }, 600);
  };

  // HUD blink
  setInterval(() => {
    if (hudStatus) hudStatus.textContent = hudStatus.textContent === 'SYSTEM ACTIVE' ? 'MONITORING...' : 'SYSTEM ACTIVE';
  }, 2000);

  // Keyboard nav
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goPage(cur + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); goPage(Math.max(0, cur - 1)); }
  });

  goPage(0);
})();
