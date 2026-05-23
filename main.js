(function () {
  'use strict';

  // ── Language data ──────────────────────────────────────
  const T = {
    zh: {
      'sdg':      'SDG 8 — 体面工作与经济增长',
      'title':    '谁有权停留？',
      'titlesub': 'WHO HAS THE RIGHT TO STAY?',
      'sys':      '校园设施管理系统',
      'msg':      '请开始今日清洁任务',
      's1':'广播声','s2':'电流声','s3':'对讲机',
      'enter':    '进入系统 ›',
      'p1eye':'PAGE 02 — 身份选择','p1q':'选择你的身份','p1sub':'同一校园，不同身份拥有不同空间权限',
      'student':'STUDENT MODE','cleaner':'CLEANER MODE',
      'p1note':'本展览以 CLEANER MODE 运行','p1btn':'CONTINUE ›',
      'p2eye':'PAGE 03 — 空间地图','p2title':'CAMPUS SPACE ALLOCATION','p2sub':'同一校园，空间归属完全不同',
      'scol':'学生空间','ccol':'劳动者空间','same':'同一\n校园',
      's-i1':'教室','s-t1':'正式停留 · 无限时长',
      's-i2':'自习室','s-t2':'正式停留 · 无限时长',
      's-i3':'食堂','s-t3':'正式停留 · 有座椅',
      's-i4':'公共休息区','s-t4':'正式停留 · 有座椅',
      'stotal':'正式停留空间',
      'c-i1':'工具间','c-t1':'临时停留 · 唯一可休息处',
      'c-i2':'楼梯口','c-t2':'非正式 · 常被打断',
      'c-i3':'后勤通道','c-t3':'过道 · 不可久留',
      'c-i4':'清洁车旁','c-t4':'非正式 · 随时中断',
      'ctotal':'临时停留',
      'p2btn':'NEXT ›',
      'p3eye':'PAGE 04 — 劳动路径','p3title':'CLEANER MODE — 一天','p3sub':'保洁员一天的工作路线',
      'tl1n':'工具间','tl1d':'✓ 唯一可停留空间 — 领取工具，开始一天',
      'tl2n':'教学楼走廊','tl2d':'✗ 过道空间 — 扫地、拖地、换垃圾袋',
      'tl3n':'卫生间','tl3d':'✗ 功能空间 — 清洁、消毒、补充耗材',
      'tl4n':'垃圾收集点','tl4d':'✗ 后勤区域 — 分类处理，清运垃圾',
      'tl5n':'楼梯角落','tl5d':'⚡ 尝试休息 — 广播打断，任务继续',
      'tl6n':'返回工具间','tl6d':'— 今日任务完成，归还工具',
      'ps1':'工作时长','ps2':'正式休息空间','ps3':'休息被打断','ps4':'清洁区域',
      'p3btn':'NEXT ›',
      'p4eye':'PAGE 05 — 停留限制','p4zone':'ZONE 07 — 楼梯角落',
      'n1h':'新任务','n1b':'2楼女厕需要清洁',
      'n2h':'提醒','n2b':'请继续工作，保持区域整洁',
      'popupsub':'请立即继续巡查',
      'try1':'尝试在此休息','try2':'再次尝试停留','p4btn':'CONTINUE ›',
      'p5eye':'PAGE 06 — 数据可视化','p5title':'空间与劳动数据','p5sub':'校园空间分配与劳动数据',
      'd1label':'空间分配对比','b1':'学生专属空间','b2':'共用空间','b3':'保洁员专属',
      'd2label':'劳动强度','m1':'日均工作时长','m2':'日均步数','m3':'正式休息室','m4':'专属休息座椅',
      'd3label':'休息中断记录','leg1':'尝试休息','leg2':'被系统打断',
      'p5btn':'进入体验 ›',
      'complete':'今日清洁任务已完成',
      'fq1':'谁有权','fq2':'停留？',
      'fstmt':'劳动者虽然长期存在于公共空间中，\n却缺少真正属于自己的停留空间。',
      'fs1':'清洁区域','fs2':'休息空间','fs3':'被打断','fs4':'无座位',
      'vrlabel':'下一步','vrtitle':'进入VR体验','vrsub':'佩戴VR头显，以第一视角进入保洁员的一天',
      'restart':'↺ 重新开始',
    },
    en: {
      'sdg':      'SDG 8 — DECENT WORK & ECONOMIC GROWTH',
      'title':    'WHO HAS THE RIGHT TO STAY?',
      'titlesub': '谁有权停留？',
      'sys':      'CAMPUS FACILITY MANAGEMENT SYSTEM',
      'msg':      'PLEASE START TODAY\'S CLEANING TASK',
      's1':'PA System','s2':'Electric hum','s3':'Walkie-talkie',
      'enter':    'ENTER SYSTEM ›',
      'p1eye':'PAGE 02 — IDENTITY','p1q':'Choose Your Identity','p1sub':'Same campus, different spatial permissions',
      'student':'STUDENT MODE','cleaner':'CLEANER MODE',
      'p1note':'This exhibition runs in CLEANER MODE','p1btn':'CONTINUE ›',
      'p2eye':'PAGE 03 — SPACE MAP','p2title':'CAMPUS SPACE ALLOCATION','p2sub':'Same campus, completely different access',
      'scol':'STUDENT SPACE','ccol':'CLEANER SPACE','same':'SAME\nCAMPUS',
      's-i1':'Classroom','s-t1':'Formal stay · Unlimited',
      's-i2':'Study Room','s-t2':'Formal stay · Unlimited',
      's-i3':'Canteen','s-t3':'Formal stay · Seating',
      's-i4':'Lounge','s-t4':'Formal stay · Seating',
      'stotal':'FORMAL STAY SPACE',
      'c-i1':'Utility Room','c-t1':'Temp stay · Only rest spot',
      'c-i2':'Stairwell','c-t2':'Informal · Often interrupted',
      'c-i3':'Service Corridor','c-t3':'Transit only',
      'c-i4':'By Cleaning Cart','c-t4':'Informal · Can be cut short',
      'ctotal':'TEMPORARY STAY ONLY',
      'p2btn':'NEXT ›',
      'p3eye':'PAGE 04 — LABOR PATH','p3title':'A DAY IN CLEANER MODE','p3sub':'A cleaner\'s daily route',
      'tl1n':'Utility Room','tl1d':'✓ Only permitted rest space — collect tools, start shift',
      'tl2n':'Classroom Corridor','tl2d':'✗ Transit zone — sweep, mop, replace bin bags',
      'tl3n':'Restroom','tl3d':'✗ Functional zone — clean, disinfect, restock',
      'tl4n':'Waste Collection','tl4d':'✗ Service zone — sort and remove waste',
      'tl5n':'Stairwell Corner','tl5d':'⚡ Attempt to rest — PA interrupts, back to work',
      'tl6n':'Return to Utility Room','tl6d':'— Shift complete, return tools',
      'ps1':'Work hours','ps2':'Rest spaces','ps3':'Interrupted','ps4':'Zones cleaned',
      'p3btn':'NEXT ›',
      'p4eye':'PAGE 05 — STAY RESTRICTION','p4zone':'ZONE 07 — STAIRWELL CORNER',
      'n1h':'NEW TASK','n1b':'Restroom 2F needs cleaning',
      'n2h':'REMINDER','n2b':'Please resume work, keep area clean',
      'popupsub':'Please Continue Patrol Immediately',
      'try1':'Attempt to rest here','try2':'Try to stay again','p4btn':'CONTINUE ›',
      'p5eye':'PAGE 06 — DATA','p5title':'SPACE & LABOR DATA','p5sub':'Campus space allocation and labor data',
      'd1label':'Space Allocation','b1':'Student-only space','b2':'Shared space','b3':'Cleaner-only',
      'd2label':'Work Intensity','m1':'Daily work hours','m2':'Daily steps','m3':'Rest rooms','m4':'Designated seats',
      'd3label':'Rest Interruptions Today','leg1':'Attempted rest','leg2':'System interrupted',
      'p5btn':'ENTER EXPERIENCE ›',
      'complete':'TODAY\'S CLEANING TASK COMPLETED',
      'fq1':'WHO HAS THE','fq2':'RIGHT TO STAY?',
      'fstmt':'Workers exist in public spaces every day,\nyet have no space truly their own.',
      'fs1':'Zones cleaned','fs2':'Rest spaces','fs3':'Interrupted','fs4':'No seat',
      'vrlabel':'NEXT STEP','vrtitle':'ENTER VR EXPERIENCE','vrsub':'Put on VR headset to experience a cleaner\'s day in first person',
      'restart':'↺ RESTART',
    }
  };

  let lang = 'zh';

  window.setLang = function (l) {
    lang = l;
    const t = T[l];
    Object.keys(t).forEach(k => {
      const el = document.getElementById('t-' + k);
      if (el) el.textContent = t[k];
    });
    document.getElementById('lb-zh').classList.toggle('lang-active', l === 'zh');
    document.getElementById('lb-en').classList.toggle('lang-active', l === 'en');
    // data-zh/en attributes on li items
    document.querySelectorAll('[data-zh]').forEach(el => {
      el.textContent = el.getAttribute('data-' + l) || el.textContent;
    });
  };

  // ── Pages ──────────────────────────────────────────────
  const PAGES = ['p0','p1','p2','p3','p4','p5','p6'];
  const LOCS  = ['UTILITY_ROOM_B2','CAMPUS_MAIN','ZONE_MAP','LABOR_PATH','STAIRWELL_7','DATA_CENTER','EXIT_18:00'];
  const dots  = document.querySelectorAll('.dot');
  let cur = 0;

  const hudStatus = document.getElementById('hud-status');
  const hudLoc    = document.getElementById('hud-loc');

  window.goPage = function (n) {
    if (n < 0 || n >= PAGES.length) return;
    document.getElementById(PAGES[cur]).classList.remove('active');
    document.getElementById(PAGES[n]).classList.add('active');
    if (dots[cur]) dots[cur].classList.remove('active');
    if (dots[n])   dots[n].classList.add('active');
    cur = n;
    if (hudLoc) hudLoc.textContent = 'LOC: ' + LOCS[n];
    if (n === PAGES.length - 1 && document.getElementById('hud-br')) {
      document.getElementById('hud-br').innerHTML = 'STAY_PERMIT: <span class="red">STILL NONE</span>';
    }
  };

  // ── Alert mechanic ─────────────────────────────────────
  let alertCount = 0;
  const alertMsgs = {
    zh: ['当前区域不支持长时间停留', '检测到新清洁任务，请立即继续巡查', '停留请求已被拒绝，请立即恢复工作'],
    en: ['Current Area Does Not Support Long Stay', 'New Cleaning Task Detected — Please Continue Patrol', 'STAY REQUEST DENIED — Resume Duties Immediately'],
  };
  window.triggerAlert = function () {
    const popup = document.getElementById('sys-popup');
    const msgEl = document.getElementById('popup-msg');
    if (!popup || !msgEl) return;
    msgEl.textContent = alertMsgs[lang][alertCount % 3];
    alertCount++;
    popup.style.animation = 'none';
    popup.offsetHeight;
    popup.style.animation = '';
  };

  window.selectMode = function (mode) {
    document.querySelectorAll('.id-card').forEach(c => c.style.opacity = '0.35');
    const el = document.querySelector('.' + mode + '-card');
    if (el) el.style.opacity = '1';
    setTimeout(() => document.querySelectorAll('.id-card').forEach(c => c.style.opacity = '1'), 700);
  };

  // ── Loading sequence ───────────────────────────────────
  const loadMsgs = [
    'Connecting to campus network...',
    'Loading spatial data...',
    'Assigning identity: CLEANER_MODE',
    'STAY_PERMIT check... DENIED',
    'Loading today\'s task list...',
    'System ready.',
  ];

  function runLoader() {
    const bar    = document.getElementById('load-bar');
    const pct    = document.getElementById('load-pct');
    const log    = document.getElementById('load-log');
    if (!bar) return;
    log.innerHTML = '';
    let step = 0;
    const steps = loadMsgs.length;

    function tick() {
      if (step >= steps) {
        setTimeout(() => {
          document.getElementById('p-load').classList.remove('active');
          document.getElementById('p0').classList.add('active');
        }, 500);
        return;
      }
      const progress = Math.round(((step + 1) / steps) * 100);
      bar.style.width = progress + '%';
      pct.textContent = progress + '%';
      const line = document.createElement('div');
      line.className = 'load-line';
      line.textContent = '> ' + loadMsgs[step];
      log.appendChild(line);
      log.scrollTop = log.scrollHeight;
      step++;
      setTimeout(tick, 420 + Math.random() * 280);
    }
    setTimeout(tick, 300);
  }

  // ── HUD blink ──────────────────────────────────────────
  setInterval(() => {
    if (hudStatus) hudStatus.textContent = hudStatus.textContent === 'SYSTEM ACTIVE' ? 'MONITORING...' : 'SYSTEM ACTIVE';
  }, 2000);

  // ── Keyboard ───────────────────────────────────────────
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goPage(cur + 1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goPage(Math.max(0, cur - 1)); }
  });


  // ── Warning overlay on cleaner hover ──────────────────
  window.showWarning = function () {
    const el = document.getElementById('warn-overlay');
    if (el) el.classList.add('show');
  };
  window.hideWarning = function () {
    const el = document.getElementById('warn-overlay');
    if (el) el.classList.remove('show');
  };

  // ── Init ───────────────────────────────────────────────
  runLoader();
})();
