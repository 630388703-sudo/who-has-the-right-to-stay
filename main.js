(function () {
  'use strict';

  const STAGES    = ['s0','s1','s2','s3','s4','s5'];
  const PROGRESS  = [0, 20, 44, 64, 84, 100];
  const LOCATIONS = ['CAMPUS_GATE','UTILITY_ROOM_B2','CORRIDOR_3F','ZONE_COMPARE','STAIRWELL_7','UTILITY_ROOM_B2'];

  const hudTL   = document.getElementById('hud-tl');
  const hudBL   = document.getElementById('hud-bl');
  const progEl  = document.getElementById('progress');

  let stage = 0;

  window.go = function (n) {
    if (n < 0 || n >= STAGES.length) return;
    STAGES.forEach((id, i) => {
      const el = document.getElementById(id);
      if (el) el.classList.toggle('active', i === n);
    });
    stage = n;
    if (progEl) progEl.style.width = PROGRESS[n] + '%';
    if (hudBL)  hudBL.textContent  = 'LOC: ' + LOCATIONS[n];
    if (n === STAGES.length - 1 && document.getElementById('hud-br')) {
      document.getElementById('hud-br').innerHTML = 'STAY_PERMIT: <span class="red">STILL NONE</span>';
    }
  };

  window.alert_show = function (id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 3200);
  };

  window.try_rest = function () {
    const el = document.getElementById('a2b');
    if (!el) return;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 3500);
  };

  // HUD pulse
  setInterval(() => {
    if (hudTL) hudTL.textContent = hudTL.textContent === 'MONITORING...' ? 'SYSTEM ACTIVE' : 'MONITORING...';
  }, 2000);

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); go(stage + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(Math.max(0, stage - 1)); }
  });

  go(0);
})();
