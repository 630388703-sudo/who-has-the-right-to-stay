(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────
  let stage = 0;

  const STAGES    = ['s0', 's1', 's2', 's3', 's4', 's5'];
  const TIMES     = ['06:30', '07:15', '09:40', '12:30', '12:40', '18:00'];
  const LOCATIONS = [
    'UTILITY_ROOM_B2',
    'CORRIDOR_3F',
    'ZONE_COMPARE',
    'STAIRWELL_7',
    'STAIRWELL_7',
    'UTILITY_ROOM_B2',
  ];

  // ── DOM refs ───────────────────────────────────────────
  const hudTL  = document.getElementById('hud-tl');
  const hudTR  = document.getElementById('hud-tr');
  const hudBL  = document.getElementById('hud-bl');
  const hudBR  = document.getElementById('hud-br');
  const clock  = document.getElementById('clock');

  // ── Core: show stage ──────────────────────────────────
  function showStage(n) {
    STAGES.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.toggle('active', i === n);
    });

    if (clock) clock.textContent = TIMES[n] || '—';
    if (hudBL) hudBL.textContent = 'LOC: ' + (LOCATIONS[n] || 'CAMPUS_MAIN');

    if (n === STAGES.length - 1) {
      if (hudTR) hudTR.textContent = 'ID: CL-0047 [SHIFT END]';
      if (hudBR) hudBR.textContent = 'STAY_PERMIT: STILL NONE';
    }
  }

  // ── Exposed globals (called from HTML onclick) ─────────
  window.nextStage = function () {
    if (stage < STAGES.length - 1) {
      stage++;
      showStage(stage);
    }
  };

  window.showAlert = function (id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 3000);
  };

  window.tryRest = function () {
    const el = document.getElementById('alert2');
    if (!el) return;
    el.innerHTML =
      '<div style="color:#8a5a2a; margin-bottom:4px; font-size:8px; letter-spacing:0.15em;">✕ STAY REQUEST DENIED</div>' +
      'Current area does not support long-term stay.<br>' +
      '<span style="color:#5a3a14">Please continue patrol immediately.</span>';
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 3500);
  };

  // ── HUD blink ─────────────────────────────────────────
  setInterval(() => {
    if (!hudTL) return;
    hudTL.textContent =
      hudTL.textContent === 'SYSTEM ACTIVE' ? 'MONITORING...' : 'SYSTEM ACTIVE';
  }, 2000);

  // ── Keyboard shortcut: → / Space to advance ───────────
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      window.nextStage();
    }
  });

  // ── Init ──────────────────────────────────────────────
  showStage(0);
})();
