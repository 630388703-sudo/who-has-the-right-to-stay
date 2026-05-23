
// ── Language switch ────────────────────────────────────
const LANG = {
  zh: {
    'sdg':   'SDG 8 — 体面工作与经济增长',
    'title': '谁有权停留？',
    'label': '校园设施管理系统',
    'msg':   '请开始今日清洁任务',
    's1': '广播声', 's2': '电流声', 's3': '对讲机',
    'enter': '进入系统 ›',
  },
  en: {
    'sdg':   'SDG 8 — DECENT WORK & ECONOMIC GROWTH',
    'title': 'WHO HAS THE RIGHT TO STAY?',
    'label': 'CAMPUS FACILITY MANAGEMENT SYSTEM',
    'msg':   'PLEASE START TODAY'S CLEANING TASK',
    's1': 'PA System', 's2': 'Electric hum', 's3': 'Walkie-talkie',
    'enter': 'ENTER SYSTEM ›',
  }
};
let currentLang = 'zh';

window.setLang = function(lang) {
  currentLang = lang;
  const t = LANG[lang];
  const ids = ['sdg','title','label','msg','s1','s2','s3','enter'];
  ids.forEach(id => {
    const el = document.getElementById('t-' + id);
    if (el) el.textContent = t[id];
  });
  // title-en visibility
  const en = document.getElementById('t-title-en');
  if (en) en.style.display = lang === 'zh' ? 'block' : 'none';
  // button states
  document.getElementById('lang-zh').classList.toggle('active', lang === 'zh');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  // hud locale
  if (hudStatus) hudStatus.textContent = lang === 'zh' ? '系统运行中' : 'SYSTEM ACTIVE';
};

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
