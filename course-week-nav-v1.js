(function () {
  'use strict';

  const weeks = [
    ['01', 'Planeación', 'Planning'],
    ['02', 'Proyecto', 'Project'],
    ['03', 'Modelo lógico', 'Logical model'],
    ['04', 'Objetos', 'Objects'],
    ['05', 'Diseño', 'Design'],
    ['06', 'Implementación', 'Implementation'],
    ['07', 'Siguiente', 'Next']
  ];
  const roots = ['week-1', 'week-2', 'week-3-journey', 'week-4-journey', 'week-5-journey', 'week-6-journey', 'week-7-journey'];
  let dock;
  let scheduled = false;

  function language() {
    const selected = document.querySelector('#week-4-journey [data-w4-language][aria-pressed="true"], #week-3-journey [data-w3-language][aria-pressed="true"], #week-2 [data-w2-language][aria-pressed="true"]');
    return selected && (selected.dataset.w4Language || selected.dataset.w3Language || selected.dataset.w2Language) === 'en' ? 'en' : 'es';
  }

  function activeWeek() {
    const match = location.hash.match(/^#(?:week-|w)([1-7])(?:-diagram-\d+)?$/);
    return match ? Number(match[1]) : 1;
  }

  function available(week) {
    const root = document.getElementById(roots[week - 1]);
    return !!root && (week <= 4 || root.hasChildNodes());
  }

  function update() {
    if (!dock) return;
    const en = language() === 'en';
    const current = activeWeek();
    dock.querySelector('.course-week-nav-title').textContent = en ? 'Explore weeks' : 'Explorar semanas';
    dock.querySelectorAll('[data-course-week]').forEach(button => {
      const week = Number(button.dataset.courseWeek);
      const ready = available(week);
      button.disabled = !ready;
      button.setAttribute('aria-current', week === current ? 'page' : 'false');
      button.setAttribute('aria-label', (en ? 'Week ' : 'Semana ') + week + ': ' + weeks[week - 1][en ? 2 : 1] + (ready ? '' : en ? ', not available yet' : ', aún no disponible'));
      button.querySelector('.course-week-nav-name').textContent = weeks[week - 1][en ? 2 : 1];
    });
  }

  function go(week) {
    if (!available(week)) return;
    const hash = '#week-' + week;
    if (location.hash !== hash) location.hash = hash;
    const w2 = document.getElementById('week-2');
    const w3 = document.getElementById('week-3-journey');
    const w4 = document.getElementById('week-4-journey');
    const w5 = document.getElementById('week-5-journey');
    const w6 = document.getElementById('week-6-journey');
    if (w2) w2.hidden = week === 1 || week >= 4;
    if (w3) w3.hidden = week !== 3;
    if (w4) w4.hidden = week !== 4;
    if (w5) w5.hidden = week !== 5;
    if (w6) w6.hidden = week !== 6;
    if (week === 3) window.CST212Week3?.show();
    if (week === 4) window.CST212Week4?.show();
    if (week === 5 || week === 6) window.CST212Week56?.show(week);
    const target = document.getElementById(roots[week - 1]);
    if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: 'auto', block: 'start' }));
    update();
  }

  function start() {
    if (dock) return;
    dock = document.createElement('nav');
    dock.className = 'course-week-nav';
    dock.setAttribute('aria-label', 'Navegación por semanas del Atlas');
    dock.innerHTML = '<span class="course-week-nav-title">Explorar semanas</span><div class="course-week-nav-list">' + weeks.map((week, index) => '<button type="button" data-course-week="' + (index + 1) + '"><span class="course-week-nav-number">' + week[0] + '</span><span class="course-week-nav-name">' + week[1] + '</span></button>').join('') + '</div>';
    dock.addEventListener('click', event => {
      const button = event.target.closest('[data-course-week]');
      if (button && !button.disabled) go(Number(button.dataset.courseWeek));
    });
    document.body.appendChild(dock);
    update();
    window.addEventListener('hashchange', update);
    new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => { scheduled = false; update(); });
    }).observe(document.getElementById('learnView') || document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
