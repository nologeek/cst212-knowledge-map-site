(function () {
  'use strict';

  const db = window.CST212_W4;
  if (!db || db.diagrams.length !== 8) return;
  const t = (value, lang) => value && typeof value === 'object' ? (value[lang] || value.es || value.en || '') : String(value == null ? '' : value);
  const tr = (lang, es, en) => lang === 'en' ? en : es;
  const esc = value => String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[ch]);
  const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lang = 'es', dialog, focusBefore, savedOverflow, scheduled = false;

  function node(id, custom, className) {
    const concept = db.concepts[id];
    return '<button type="button" class="w4-node ' + (className || '') + '" data-w4-detail="' + id + '" data-w4-node="' + id + '"><span>' + esc(custom || t(concept.label, lang)) + '</span></button>';
  }
  function link(item) {
    return '<button type="button" class="w4-link" data-w4-detail="' + item.id + '"><span aria-hidden="true">⟶</span><strong>' + esc(t(item.label, lang)) + '</strong></button>';
  }
  function annotated(id, caption) {
    return '<div class="w4-annotated">' + node(id) + '<small>' + esc(caption) + '</small></div>';
  }
  function layout(diagram, view) {
    const relations = diagram.baseLinks;
    if (diagram.kind === 'objects') return '<div class="w4-object-map"><div class="w4-chain">' + annotated('instance', tr(lang,'concreto','concrete')) + link(relations[0]) + annotated('class',tr(lang,'tipo compartido','shared type')) + '</div><div class="w4-branch">' + link(relations[1]) + annotated('attribute',tr(lang,'estado','state')) + link(relations[2]) + annotated('method',tr(lang,'comportamiento','behavior')) + '</div><div class="w4-minor">' + node('object') + '</div></div>';
    if (diagram.kind === 'collaboration') return '<div class="w4-collab-map"><div class="w4-chain">' + node('responsibility') + link(relations[0]) + node('message') + link(relations[1]) + node('encapsulation') + '</div><div class="w4-minor">' + node('polymorphism') + '<p>' + esc(tr(lang,'La misma solicitud puede admitir respuestas especializadas cuando el dominio lo justifica.','The same request may allow specialized responses when the domain supports them.')) + '</p></div></div>';
    if (diagram.kind === 'usecase') return '<div class="w4-usecase-map"><div class="w4-usecase-actor">' + node('actor',tr(lang,'Cliente · actor candidato','Customer · candidate actor')) + link(relations[0]) + '</div><div class="w4-system-boundary"><header>' + node('boundary',tr(lang,'Límite del sistema Campus Bikes','Campus Bikes system boundary')) + '</header><div class="w4-usecase-oval">' + node('usecase',tr(lang,'Consultar disponibilidad · ilustrativo','Check availability · illustrative')) + '</div>' + node('goal') + link(relations[1]) + '</div><div class="w4-minor">' + node('uml') + '</div></div>';
    if (diagram.kind === 'classes') return '<div class="w4-classes-map"><div class="w4-minor">' + node('classdiagram') + '</div><div class="w4-class-grid">' + classBox('Cliente','Customer') + '<div class="w4-class-links">' + link(relations[1]) + node('association') + '</div>' + classBox('Consulta','Query') + '<div class="w4-class-links">' + link(relations[2]) + '</div>' + classBox('Bicicleta','Bicycle') + '</div><div class="w4-minor">' + link(relations[0]) + node('class') + node('attribute') + node('operation') + '</div></div>';
    if (diagram.kind === 'perspectives') return perspective(diagram, view || 'sequence');
    if (diagram.kind === 'need') return '<div class="w4-need-map"><div class="w4-need-head">' + node('need') + link(relations[0]) + node('alternative') + '</div><div class="w4-alternatives">' + node('processchange') + node('build') + node('buy') + node('web') + node('outsourcing') + node('offshoring') + '</div><div class="w4-minor">' + link(relations[1]) + node('evidence') + '</div><p class="w4-model-hint">' + esc(tr(lang,'Posibilidades para investigar; todavía no hay una alternativa ganadora.','Possibilities to investigate; no winning option yet.')) + '</p></div>';
    if (diagram.kind === 'strategies') return '<div class="w4-strategy-map"><div class="w4-strategy-root">' + node('strategy') + link(relations[0]) + node('ownership') + '</div><div class="w4-strategy-axes"><div><small>' + esc(tr(lang,'CÓMO OBTENER','HOW TO OBTAIN')) + '</small>' + node('build') + node('buy') + '</div><div><small>' + esc(tr(lang,'CÓMO ACCEDER','HOW TO ACCESS')) + '</small>' + node('web') + '</div><div><small>' + esc(tr(lang,'QUIÉN TRABAJA','WHO DOES THE WORK')) + '</small>' + node('outsourcing') + '</div><div><small>' + esc(tr(lang,'DÓNDE SE TRABAJA','WHERE WORK HAPPENS')) + '</small>' + node('offshoring') + node('location') + '</div></div><div class="w4-minor">' + link(relations[1]) + link(relations[2]) + node('control') + node('risk') + '</div></div>';
    if (diagram.kind === 'decision') return '<div class="w4-decision-map"><div class="w4-chain w4-decision-chain">' + node('evidence') + link(relations[0]) + node('criteria') + node('alternative') + link(relations[1]) + node('comparison') + link(relations[2]) + node('decision') + '</div><div class="w4-measures">' + node('cost') + node('benefit') + node('roi') + node('npv') + node('performance') + '</div><p class="w4-model-hint">' + esc(tr(lang,'Sin datos verificados del caso, estas medidas sirven para formular preguntas; no se calculan cifras de Campus Bikes.','Without verified case data, these measures guide questions; no Campus Bikes figures are calculated.')) + '</p></div>';
    return '';
  }
  function classBox(es, en) {
    return '<div class="w4-class-box"><strong>' + esc(tr(lang,es,en)) + '</strong><span>' + esc(tr(lang,'atributos candidatos','candidate attributes')) + '</span><span>' + esc(tr(lang,'operaciones candidatas','candidate operations')) + '</span></div>';
  }
  function perspective(diagram, view) {
    const tabs = [['sequence','Secuencia','Sequence'],['state','Estados','States'],['activity','Actividad','Activity']];
    let canvas;
    if (view === 'state') canvas = '<div class="w4-state-model">' + node('scenario',tr(lang,'Consulta · mismo escenario','Query · same scenario')) + '<div class="w4-chain">' + stateItem('Recibida','Received') + node('transition',tr(lang,'registrar consulta','record query')) + stateItem('En revisión','Under review') + node('transition',tr(lang,'informar respuesta','report response')) + stateItem('Respondida','Answered') + '</div>' + node('state') + '</div>';
    else if (view === 'activity') canvas = '<div class="w4-activity-model">' + node('scenario',tr(lang,'Consulta · mismo escenario','Query · same scenario')) + '<div class="w4-chain">' + activityItem('Registrar consulta','Record query') + '<span class="w4-arrow" aria-hidden="true">⟶</span>' + activityItem('Revisar información','Review information') + '<span class="w4-arrow" aria-hidden="true">⟶</span>' + activityItem('Informar respuesta','Report response') + '</div><div class="w4-minor">' + node('decisionpoint') + node('activity') + '</div></div>';
    else canvas = '<div class="w4-sequence-model">' + node('scenario',tr(lang,'Consulta · mismo escenario','Query · same scenario')) + '<div class="w4-lifelines"><span>' + esc(tr(lang,'Cliente','Customer')) + '</span><span>' + esc(tr(lang,'Sistema','System')) + '</span><span>' + esc(tr(lang,'Información disponible','Available information')) + '</span></div><div class="w4-seq-messages"><div>' + esc(tr(lang,'1. Solicitar consulta →','1. Request query →')) + '</div><div>' + esc(tr(lang,'2. Revisar información →','2. Review information →')) + '</div><div>' + esc(tr(lang,'3. ← Informar respuesta','3. ← Report response')) + '</div></div>' + node('sequence') + node('message') + '</div>';
    return '<div class="w4-perspectives"><div class="w4-view-tabs" role="group" aria-label="' + esc(tr(lang,'Ver el mismo escenario como','View the same scenario as')) + '"><span>' + esc(tr(lang,'VER COMO','VIEW AS')) + '</span>' + tabs.map(tab => '<button type="button" data-w4-view="' + tab[0] + '" data-w4-node="' + tab[0] + '" aria-pressed="' + (tab[0] === view) + '">' + esc(tr(lang,tab[1],tab[2])) + '</button>').join('') + '</div><div class="w4-perspective-canvas" data-w4-perspective-canvas>' + canvas + '</div><div class="w4-minor">' + diagram.baseLinks.map(link).join('') + node('transition') + '</div></div>';
  }
  function stateItem(es,en) { return '<div class="w4-state-pill">' + esc(tr(lang,es,en)) + '</div>'; }
  function activityItem(es,en) { return '<div class="w4-activity-pill">' + esc(tr(lang,es,en)) + '</div>'; }

  function figure(diagram) {
    const title = t(diagram.title,lang);
    return '<section id="w4-diagram-' + diagram.id + '" class="w4-section" data-w4-diagram="' + diagram.id + '"><div class="w4-preface"><p class="w4-eyebrow">' + esc(tr(lang,'Diagrama ','Diagram ') + diagram.id + ' · ' + tr(lang,'Semana 4','Week 4')) + '</p><h2>' + esc(t(diagram.question,lang)) + '</h2><p>' + esc(t(diagram.intro,lang)) + '</p></div><figure class="w4-figure" data-lens="base" data-focus="overview" data-view="sequence"><figcaption><span>' + esc(title) + '</span><div class="w4-toolbar"><div class="w4-zoom" role="group" aria-label="' + esc(tr(lang,'Nivel de exploración','Exploration level')) + '"><button type="button" data-w4-focus="overview" aria-pressed="true">' + esc(tr(lang,'Panorama','Overview')) + '</button><button type="button" data-w4-focus="relations" aria-pressed="false">' + esc(tr(lang,'Relaciones','Relationships')) + '</button></div><div class="w4-lens" role="group" aria-label="' + esc(tr(lang,'Capa de este diagrama','Lens for this diagram')) + '"><button type="button" data-w4-lens="base" aria-pressed="true">Base</button><button type="button" data-w4-lens="ai" aria-pressed="false">' + esc(tr(lang,'Aplicar capa IA','Apply AI lens')) + '</button></div></div></figcaption><div class="w4-stage" data-w4-stage><svg class="w4-connector-svg" aria-hidden="true" data-w4-connector-svg></svg><div class="w4-model" data-w4-model>' + layout(diagram, 'sequence') + '</div><aside class="w4-ai-sidecar" aria-label="' + esc(tr(lang,'Conexiones de inteligencia artificial','Artificial intelligence connections')) + '"><div class="w4-ai-hub">' + esc(tr(lang,'IA · capacidad adicional','AI · additional capability')) + '</div>' + diagram.aiLinks.map(ai => '<button type="button" class="w4-ai-relationship" data-w4-detail="' + ai.id + '" data-w4-ai-to="' + ai.to + '"><small>' + esc(t(db.concepts[ai.to].label,lang)) + '</small><strong>' + esc(t(ai.action,lang)) + '</strong></button>').join('') + '</aside></div><div class="w4-relations-view">' + diagram.baseLinks.map(item => '<div>' + link(item) + '</div>').join('') + '<p>' + esc(tr(lang,'Cada línea comunica una relación. Selecciónala para comprender su significado.','Every line conveys a relationship. Select it to understand its meaning.')) + '</p></div><p class="w4-case"><strong>Campus Bikes</strong> · ' + esc(t(diagram.case,lang)) + '</p><p class="w4-metaphor">' + esc(t(diagram.metaphor,lang)) + '</p></figure><div class="w4-discovery"><h3>' + esc(tr(lang,'Lo que acabamos de descubrir','What we have just discovered')) + '</h3><ul>' + diagram.discover.map(line => '<li>' + esc(t(line,lang)) + '</li>').join('') + '</ul><p class="w4-bridge">' + esc(t(diagram.bridge,lang)) + '</p></div></section>';
  }

  function opening() {
    return '<div class="w4-language" role="group" aria-label="' + esc(tr(lang,'Idioma de la Semana 4','Week 4 language')) + '"><button type="button" data-w4-language="es" aria-pressed="' + (lang === 'es') + '">ES</button><button type="button" data-w4-language="en" aria-pressed="' + (lang === 'en') + '">EN</button></div><section class="w4-scene w4-opening"><p class="w4-eyebrow">' + esc(tr(lang,'04 / 07 · Semana 4','04 / 07 · Week 4')) + '</p><h1>' + esc(tr(lang,'Modelado orientado a objetos y estrategias de desarrollo','Object-oriented modeling and development strategies')) + '</h1><p class="w4-master">' + esc(tr(lang,'¿Cómo representamos un sistema mediante objetos y cómo decidimos la mejor estrategia para obtener la solución?','How do we represent a system through objects and choose a suitable strategy for obtaining the solution?')) + '</p><p>' + esc(tr(lang,'Ya comprendimos cómo funciona lógicamente. Ahora observemos el mismo sistema desde sus objetos.','We already understand how it works logically. Now let us see the same system through its objects.')) + '</p><button type="button" class="w4-back" data-w4-back>← ' + esc(tr(lang,'Volver a Semana 3','Back to Week 3')) + '</button></section><nav class="w4-nav" aria-label="' + esc(tr(lang,'Diagramas de la semana','Week diagrams')) + '">' + db.diagrams.map(d => '<button type="button" data-w4-jump="' + d.id + '"><span>' + d.id + '</span>' + esc(t(d.title,lang)) + '</button>').join('') + '</nav>';
  }
  function ending() {
    const moments = [
      ['01', '¿Vale la pena?', 'Should we do it?'],['02','¿Cómo organizamos?','How do we organize it?'],
      ['03','¿Cómo modelamos lógicamente?','How do we model it logically?'],['04','¿Cómo representamos mediante objetos?','How do we represent it using objects?'],
      ['05','¿Cómo diseñamos?','How do we design it?']
    ];
    return '<section class="w4-ending"><p class="w4-eyebrow">' + esc(tr(lang,'Semana 4 · Modelo mental','Week 4 · Mental model')) + '</p><h2>' + esc(tr(lang,'Una forma de pensar como analista de sistemas','A way to think like a systems analyst')) + '</h2><div class="w4-memory">' + ['object','responsibility','uml','usecase','class','scenario','strategy','decision'].map(id => node(id)).join('<span aria-hidden="true">⟶</span>') + '</div><p>' + esc(tr(lang,'Cada semana responde una pregunta diferente. Juntas construyen una forma de pensar como analista de sistemas.','Every week answers a different question. Together they form a way of thinking like a systems analyst.')) + '</p><ol class="w4-progress">' + moments.map(m => '<li class="' + (m[0] === '04' ? 'w4-current' : '') + '"><small>' + esc(tr(lang,'Semana ','Week ')+Number(m[0])) + '</small><strong>' + esc(tr(lang,m[1],m[2])) + '</strong></li>').join('') + '</ol><p class="w4-next-question">' + esc(tr(lang,'¿Cómo transformamos el modelo y la estrategia aceptados en un diseño concreto para las personas?','How do we turn the accepted model and strategy into a concrete design for people?')) + '</p><p class="w4-future">' + esc(tr(lang,'Semana 5 · siguiente pregunta','Week 5 · the next question')) + '</p></section>';
  }
  function render(host) {
    host.className = 'w4-atlas';
    host.lang = lang;
    host.innerHTML = opening() + db.diagrams.map(figure).join('') + ending();
    host.querySelectorAll('.w4-figure').forEach(fig => drawSoon(fig));
  }

  function conceptDialog(id, figure, trigger) {
    const c = db.concepts[id];
    if (!c) return;
    const diagram = figure && db.diagrams.find(item => item.id === figure.closest('.w4-section').dataset.w4Diagram);
    const panel = (head, body) => '<section class="w4-dialog-panel"><h3>' + esc(head) + '</h3>' + body + '</section>';
    const paragraph = value => '<p>' + esc(t(value,lang)) + '</p>';
    const related = c.related.filter(ref => db.concepts[ref]).map(ref => '<button type="button" data-w4-related="' + esc(ref) + '">' + esc(t(db.concepts[ref].label,lang)) + '</button>').join('');
    const parts = [
      panel(tr(lang,'¿Qué es?','What is it?'),paragraph(c.what)),
      panel(tr(lang,'¿Por qué existe?','Why does it exist?'),paragraph(c.why)),
      panel(tr(lang,'¿Cómo funciona?','How does it work?'),paragraph(c.how)),
      panel(tr(lang,'¿Cómo se relaciona?','How does it relate?'),'<div class="w4-related">' + related + '</div>'),
      panel(tr(lang,'Pregunta guía','Guiding question'),paragraph(diagram ? diagram.question : tr(lang,'¿Cómo se conecta con el recorrido?','How does it connect with the journey?'))),
      panel(tr(lang,'Ejemplo','Example'),paragraph(c.example)),
      panel(tr(lang,'Metáfora / analogía','Metaphor / analogy'),paragraph(diagram ? diagram.metaphor : tr(lang,'Una vista más de un mismo sistema.','Another view of the same system.'))),
      panel(tr(lang,'No confundir con','Do not confuse with'),paragraph(c.notConfuse)),
      panel(tr(lang,'Fuente y capa de conocimiento','Source and knowledge layer'),'<p><strong>' + esc({foundation:'CST212 FOUNDATION',deepening:'ACADEMIC DEEPENING',ai:'AI-FIRST EXTENSION'}[c.layer]) + '</strong></p>' + paragraph(db.sources[c.source]))
    ];
    if (figure && figure.dataset.lens === 'ai') {
      const assigned = diagram.aiLinks.find(item => item.to === id);
      const ai = c.ai || (assigned && db.concepts[assigned.id].ai);
      const unchanged = tr(lang,'No se ha definido un cambio directo de IA para este concepto. Su fundamento académico permanece.','No direct AI change is defined for this concept. Its academic foundation remains.');
      parts.push(panel(tr(lang,'¿Dónde entra IA?','Where does AI enter?'),paragraph(ai ? ai.connection : unchanged)));
      parts.push(panel(tr(lang,'¿Qué hace IA?','What does AI do?'),paragraph(ai ? ai.does : unchanged)));
      parts.push(panel(tr(lang,'¿Qué cambia?','What changes?'),paragraph(ai ? ai.changes : unchanged)));
      parts.push(panel(tr(lang,'¿Qué sigue dependiendo del humano?','What remains human?'),paragraph(ai ? ai.validate : tr(lang,'Revisar significado, evidencia y responsabilidad antes de aceptar propuestas.','Review meaning, evidence, and accountability before accepting proposals.'))));
    }
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.className = 'w4-dialog';
      dialog.addEventListener('click', event => {
        if (event.target === dialog || event.target.closest('[data-w4-close]')) { dialog.close(); return; }
        const relatedButton = event.target.closest('[data-w4-related]');
        if (relatedButton) conceptDialog(relatedButton.dataset.w4Related, document.querySelector('#week-4-journey .w4-figure[data-w4-current-dialog]'), focusBefore);
      });
      dialog.addEventListener('close', () => {
        document.documentElement.style.overflow = savedOverflow == null ? '' : savedOverflow;
        document.querySelector('#week-4-journey [data-w4-current-dialog]')?.removeAttribute('data-w4-current-dialog');
        if (focusBefore?.isConnected) focusBefore.focus({ preventScroll:true });
      });
      document.body.appendChild(dialog);
    }
    if (!dialog.open) { focusBefore = trigger || document.activeElement; savedOverflow = document.documentElement.style.overflow; }
    document.querySelector('#week-4-journey [data-w4-current-dialog]')?.removeAttribute('data-w4-current-dialog');
    if (figure) figure.setAttribute('data-w4-current-dialog','');
    dialog.innerHTML = '<article class="w4-dialog-surface"><header><div><p class="w4-eyebrow">' + esc(tr(lang,'Semana 4 · Profundizar','Week 4 · Learn more')) + '</p><h2>' + esc(t(c.label,lang)) + '</h2></div><button type="button" data-w4-close aria-label="' + esc(tr(lang,'Cerrar explicación','Close explanation')) + '">×</button></header><div class="w4-dialog-grid">' + parts.join('') + '</div></article>';
    document.documentElement.style.overflow = 'hidden';
    if (!dialog.open) dialog.showModal();
  }

  function drawSoon(fig) {
    if (fig.dataset.lens !== 'ai') return;
    requestAnimationFrame(() => drawLines(fig));
  }
  function drawLines(fig) {
    const stage = fig.querySelector('[data-w4-stage]');
    const svg = stage.querySelector('[data-w4-connector-svg]');
    if (fig.dataset.lens !== 'ai') { svg.replaceChildren(); return; }
    const rect = stage.getBoundingClientRect();
    svg.setAttribute('viewBox', '0 0 ' + Math.max(1,rect.width) + ' ' + Math.max(1,rect.height));
    svg.replaceChildren();
    fig.querySelectorAll('[data-w4-ai-to]').forEach((control,index) => {
      const target = Array.from(stage.querySelectorAll('[data-w4-node="' + control.dataset.w4AiTo + '"]')).find(item => item.getClientRects().length && item.getBoundingClientRect().width > 0);
      if (!target) return;
      const a = target.getBoundingClientRect(); const b = control.getBoundingClientRect();
      const horizontal = b.left > a.right + 12;
      const x1 = horizontal ? a.right-rect.left : a.left-rect.left+a.width/2;
      const y1 = horizontal ? a.top-rect.top+a.height/2 : a.bottom-rect.top;
      const x2 = horizontal ? b.left-rect.left : b.left-rect.left+b.width/2;
      const y2 = horizontal ? b.top-rect.top+b.height/2 : b.top-rect.top;
      const path = document.createElementNS('http://www.w3.org/2000/svg','path');
      path.setAttribute('d',horizontal ? `M ${x1} ${y1} C ${x1+(x2-x1)/2} ${y1}, ${x1+(x2-x1)/2} ${y2}, ${x2} ${y2}` : `M ${x1} ${y1} C ${x1} ${y1+(y2-y1)/2}, ${x2} ${y1+(y2-y1)/2}, ${x2} ${y2}`);
      path.setAttribute('data-w4-path',String(index));
      svg.appendChild(path);
    });
  }
  function setLens(fig, value) {
    fig.dataset.lens = value;
    fig.querySelectorAll('[data-w4-lens]').forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.w4Lens === value)));
    if (value === 'ai') drawSoon(fig); else fig.querySelector('[data-w4-connector-svg]').replaceChildren();
  }
  function focus(fig, value) {
    fig.dataset.focus = value;
    fig.querySelectorAll('[data-w4-focus]').forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.w4Focus === value)));
    drawSoon(fig);
  }
  function scroll(element) { element?.scrollIntoView({ behavior:reduced()?'auto':'smooth',block:'start' }); }
  function showWeek4(shouldScroll) {
    const host = ensure(); if (!host) return;
    document.getElementById('week-2')?.setAttribute('hidden','');
    document.getElementById('week-3-journey')?.setAttribute('hidden','');
    host.hidden = false;
    if (shouldScroll) scroll(host);
  }
  function inferWeek3Language() {
    return document.querySelector('#week-3-journey [data-w3-language][aria-pressed="true"]')?.dataset.w3Language === 'en' ? 'en' : 'es';
  }
  function ensure() {
    const previous = document.getElementById('week-3-journey');
    if (!previous || !previous.parentElement || (!previous.classList.contains('w3-atlas') && !previous.querySelector('.w3-atlas,.w3-figure'))) return null;
    let host = document.getElementById('week-4-journey');
    if (!host) {
      host = document.createElement('section'); host.id = 'week-4-journey'; host.hidden = true;
      previous.insertAdjacentElement('afterend',host);
      render(host);
      host.addEventListener('click', event => {
        const target = event.target;
        const locale = target.closest('[data-w4-language]');
        if (locale) { lang = locale.dataset.w4Language; render(host); return; }
        const jump = target.closest('[data-w4-jump]');
        if (jump) { scroll(document.getElementById('w4-diagram-' + jump.dataset.w4Jump)); return; }
        if (target.closest('[data-w4-back]')) {
          host.hidden = true; history.replaceState(null,'','#week-3');
          window.CST212Week3?.show(); return;
        }
        const fig = target.closest('.w4-figure');
        const lens = target.closest('[data-w4-lens]');
        if (lens && fig) { setLens(fig,lens.dataset.w4Lens); return; }
        const zoom = target.closest('[data-w4-focus]');
        if (zoom && fig) { focus(fig,zoom.dataset.w4Focus); return; }
        const view = target.closest('[data-w4-view]');
        if (view && fig) { fig.dataset.view = view.dataset.w4View; fig.querySelector('[data-w4-model]').innerHTML = layout(db.diagrams.find(d => d.id === fig.closest('.w4-section').dataset.w4Diagram),view.dataset.w4View); drawSoon(fig); return; }
        const detail = target.closest('[data-w4-detail]');
        if (detail) conceptDialog(detail.dataset.w4Detail,fig,detail);
      });
    }
    previous.querySelectorAll('.w3-pending').forEach(node => { if (/\b(?:Week|Semana)\s*4\b/i.test(node.textContent)) node.hidden = true; });
    if (!previous.querySelector('[data-open-week4]')) {
      const entry = document.createElement('div'); entry.className = 'w4-entry';
      const text = inferWeek3Language() === 'en' ? 'Continue to Week 4 · Object modeling and development strategies' : 'Continuar a Semana 4 · Objetos y estrategias de desarrollo';
      entry.innerHTML = '<button type="button" data-open-week4>' + esc(text) + '<span aria-hidden="true">→</span></button>';
      entry.querySelector('button').addEventListener('click', () => {
        lang = inferWeek3Language(); render(host); history.replaceState(null,'','#week-4'); showWeek4(true);
      });
      previous.appendChild(entry);
    }
    return host;
  }
  function route() {
    const hash = location.hash;
    if (hash === '#week-4' || hash.startsWith('#w4-diagram-')) {
      const host = ensure(); if (!host) return;
      showWeek4(false);
      requestAnimationFrame(() => scroll(hash.startsWith('#w4-diagram-') ? document.getElementById(hash.slice(1)) : host));
    } else document.getElementById('week-4-journey')?.setAttribute('hidden','');
  }
  function start() {
    ensure(); route();
    new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => { scheduled = false; const host = ensure(); if (host && location.hash === '#week-4') showWeek4(false); });
    }).observe(document.body,{childList:true,subtree:true});
    window.addEventListener('hashchange',route);
    window.addEventListener('resize', () => document.querySelectorAll('#week-4-journey .w4-figure[data-lens="ai"]').forEach(drawSoon), { passive:true });
  }
  window.CST212Week4 = { show: () => showWeek4(true), data:db };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',start,{once:true}); else start();
})();
