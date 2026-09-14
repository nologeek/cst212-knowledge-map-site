(function () {
  'use strict';
  const registry = window.CST212_W3 = window.CST212_W3 || { diagrams: {}, concepts: {}, sources: {}, models: {} };
  const signatures = new WeakMap();
  const cleanups = new WeakMap();
  const escape = value => String(value == null ? '' : value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const text = (value, language) => value && typeof value === 'object' ? (value[language] || value.es || value.en || '') : String(value || '');
  const tr = (language, es, en) => language === 'en' ? en : es;
  const getConcept = id => registry.concepts[id] || (window.CST212_W2 && window.CST212_W2.concepts[id]);
  const label = (id, language) => text((getConcept(id) || {}).label, language) || id;
  const diagramData = figure => figure.hasAttribute('data-w3-consolidation') ? registry.consolidation : registry.diagrams[figure.dataset.w3Diagram];
  let dialog, dialogContext, focusBeforeDialog, previousOverflow, scheduled = false;
  let language = 'es';

  function conceptButton(id, lang, className, customLabel) {
    return '<button type="button" class="w3-node ' + (className || '') + '" data-w3-detail="' + escape(id) + '">' + escape(customLabel || label(id, lang)) + '</button>';
  }

  function sourceMarkup(concept, lang) {
    const layers = {
      foundation: tr(lang, 'Fundamento académico', 'Academic foundation'),
      deepening: tr(lang, 'Profundización académica', 'Academic deepening'),
      ai: tr(lang, 'Extensión AI-First', 'AI-First extension')
    };
    const citations = (concept.sources || []).map(id => {
      const source = registry.sources[id] || (window.CST212_W2 && window.CST212_W2.sources[id]);
      if (!source) return '<p>' + escape(tr(lang, 'Referencia pendiente: ', 'Reference pending: ') + id) + '</p>';
      const citation = [text(source.author, lang), '(' + text(source.year || 's. f.', lang) + ').', text(source.title, lang)].join(' ');
      const safeUrl = typeof source.url === 'string' && /^https:\/\//.test(source.url) ? source.url : '';
      return '<p>' + (safeUrl ? '<a href="' + escape(safeUrl) + '" target="_blank" rel="noopener noreferrer">' + escape(citation) + '</a>' : escape(citation)) + '</p>';
    }).join('');
    return '<strong class="w3-layer">' + escape(layers[concept.layer] || layers.foundation) + '</strong>' + citations;
  }

  function ensureDialog() {
    if (dialog) return dialog;
    dialog = document.createElement('dialog');
    dialog.className = 'w3-dialog';
    dialog.setAttribute('aria-labelledby', 'w3-dialog-title');
    document.body.appendChild(dialog);
    dialog.addEventListener('click', event => {
      if (event.target === dialog || event.target.closest('[data-w3-close]')) dialog.close();
      const related = event.target.closest('[data-w3-related]');
      if (related && dialogContext) openConcept(related.dataset.w3Related, dialogContext.figure, focusBeforeDialog);
    });
    dialog.addEventListener('close', () => {
      document.documentElement.style.overflow = previousOverflow == null ? '' : previousOverflow;
      if (focusBeforeDialog && focusBeforeDialog.isConnected) focusBeforeDialog.focus({ preventScroll: true });
      dialogContext = null;
    });
    return dialog;
  }

  function openConcept(id, figure, trigger) {
    const concept = getConcept(id);
    if (!concept) return;
    const lang = language;
    const panel = (number, title, html) => '<section class="w3-detail-panel"><h3><span>' + number + '</span>' + escape(title) + '</h3>' + html + '</section>';
    const paragraph = value => '<p>' + escape(text(value, lang)) + '</p>';
    const related = (concept.related || []).filter(getConcept).map(item => '<button type="button" data-w3-related="' + escape(item) + '">' + escape(label(item, lang)) + '</button>').join('');
    const aiActive = figure && figure.dataset.lens === 'ai';
    let content = panel('01', tr(lang, 'Qué es', 'What it is'), paragraph(concept.what)) +
      panel('02', tr(lang, 'Por qué importa', 'Why it matters'), paragraph(concept.why)) +
      panel('03', tr(lang, 'Pregunta guía', 'Guiding question'), paragraph(concept.question)) +
      panel('04', tr(lang, 'Ejemplo', 'Example'), paragraph(concept.example)) +
      panel('05', tr(lang, 'Metáfora / analogía', 'Metaphor / analogy'), paragraph(concept.analogy)) +
      panel('06', tr(lang, 'Conceptos relacionados', 'Related concepts'), '<div class="w3-related">' + related + '</div>') +
      panel('07', tr(lang, 'No confundir con', 'Do not confuse with'), paragraph(concept.notConfuse)) +
      panel('08', tr(lang, 'Fuente y procedencia', 'Source and epistemic layer'), sourceMarkup(concept, lang));
    if (aiActive) {
      const ai = concept.ai || {};
      const absent = tr(lang, 'No se ha definido una intervención directa de IA para este concepto. La explicación académica se conserva.', 'No direct AI intervention has been defined for this concept. The academic explanation remains unchanged.');
      content += panel('09', tr(lang, 'Conexión con IA', 'AI connection'), paragraph(ai.connection || absent)) +
        panel('10', tr(lang, 'Qué puede hacer la IA', 'What AI can do'), paragraph(ai.does || absent)) +
        panel('11', tr(lang, 'Qué cambia', 'What changes'), paragraph(ai.changes || tr(lang, 'La capa no modifica los datos ni las reglas del modelo base.', 'The lens does not modify the data or rules of the base model.'))) +
        panel('12', tr(lang, 'Qué requiere validación', 'What requires validation'), paragraph(ai.validate || tr(lang, 'Contrastar cualquier propuesta con requisitos, evidencia y revisión del analista.', 'Check any proposal against requirements, evidence and analyst review.')));
    }
    const currentDialog = ensureDialog();
    if (!currentDialog.open) {
      focusBeforeDialog = trigger || document.activeElement;
      previousOverflow = document.documentElement.style.overflow;
    }
    dialogContext = { figure };
    currentDialog.innerHTML = '<article class="w3-dialog-surface"><header><div><p class="w3-eyebrow">' + tr(lang, 'Semana 3 · Profundizar', 'Week 3 · Understand more') + '</p><h2 id="w3-dialog-title">' + escape(text(concept.label, lang)) + '</h2></div><button type="button" data-w3-close aria-label="' + tr(lang, 'Cerrar explicación', 'Close explanation') + '">×</button></header><div class="w3-detail-grid">' + content + '</div></article>';
    document.documentElement.style.overflow = 'hidden';
    if (!currentDialog.open) currentDialog.showModal();
  }

  function activeRelationships(data, figure) {
    return (data.aiRelationships || []).filter(item => !item.level || item.level === (figure.dataset.zoom || 'context'));
  }

  function controlMarkup(data, lang) {
    return '<div class="w3-lens-control" role="group" aria-label="' + tr(lang, 'Vista de este diagrama', 'View for this diagram') + '"><button type="button" data-w3-lens="base" aria-pressed="true">Base</button><button type="button" data-w3-lens="ai" aria-pressed="false">' + tr(lang, 'Aplicar capa IA', 'Apply AI lens') + '</button></div>';
  }

  function relationshipMarkup(relation, lang) {
    return '<button type="button" class="w3-ai-relationship" data-w3-detail="' + escape(relation.concept) + '"><span>' + escape(label(relation.from, lang)) + ' → ' + escape(label(relation.to, lang)) + '</span><strong>' + escape(text(relation.action, lang)) + '</strong><small>' + escape(text(relation.value, lang)) + '</small></button>';
  }

  function supportMarkup(data, lang) {
    const targets = Array.from(new Set((data.aiRelationships || []).map(relation => relation.to)));
    return '<div class="w3-support"><div class="w3-support-rows">' + targets.map(id => '<div class="w3-support-row">' + conceptButton(id, lang) + '<div class="w3-support-links">' + data.aiRelationships.filter(relation => relation.to === id).map(relation => relationshipMarkup(relation, lang)).join('') + '</div></div>').join('') + '</div><aside class="w3-support-hub">' + controlMarkup(data, lang) + conceptButton(data.aiNode, lang, 'w3-ai-node') + '</aside></div>';
  }

  function viewApi(lang) {
    return {
      text: value => text(value, lang),
      tr: (es, en) => tr(lang, es, en),
      escape,
      node: (id, className, customLabel) => conceptButton(id, lang, className, customLabel),
      support: data => supportMarkup(data, lang)
    };
  }

  function multilineSvg(value, x, y, limit, lineHeight, className) {
    const words = String(value || '').split(/\s+/);
    const lines = [];
    for (const word of words) {
      if (!lines.length || (lines[lines.length - 1] + ' ' + word).length > limit) lines.push(word);
      else lines[lines.length - 1] += ' ' + word;
    }
    return '<text class="' + (className || '') + '" x="' + x + '" y="' + y + '">' + lines.map((line, index) => '<tspan x="' + x + '" dy="' + (index ? lineHeight : 0) + '">' + escape(line) + '</tspan>').join('') + '</text>';
  }

  function flowMarkup(ids, lang, className) {
    return '<ol class="w3-flow ' + (className || '') + '">' + (ids || []).map(id => '<li>' + conceptButton(id, lang) + '</li>').join('') + '</ol>';
  }

  function sequenceMarkup(data, lang) {
    const nodes = data.nodes || [];
    const rows = nodes.map(id => '<div class="w3-sequence-row' + (id === data.root ? ' is-current' : '') + '">' + conceptButton(id, lang) + '<div class="w3-sequence-connections">' + (data.aiRelationships || []).filter(r => r.to === id || r.from === id).map(r => relationshipMarkup(r, lang)).join('') + '</div></div>').join('');
    const otherRelations = (data.aiRelationships || []).filter(r => !nodes.includes(r.to) && !nodes.includes(r.from));
    const comparison = (data.comparison || []).length ? '<section class="w3-comparison"><h3>' + tr(lang, 'Modelo lógico ≠ diseño físico', 'Logical model ≠ physical design') + '</h3><div class="w3-compare-head"><span>' + tr(lang, 'Lógico · qué ocurre', 'Logical · what happens') + '</span><span>' + tr(lang, 'Físico · cómo se implementa', 'Physical · how it is implemented') + '</span></div>' + data.comparison.map(row => '<button type="button" data-w3-detail="' + escape(row.id) + '"><span>' + escape(text(row.logical, lang)) + '</span><span>' + escape(text(row.physical, lang)) + '</span></button>').join('') + '</section>' : '';
    return '<div class="w3-sequence"><div class="w3-sequence-rows">' + rows + '</div><aside class="w3-sequence-ai">' + controlMarkup(data, lang) + conceptButton(data.aiNode, lang, 'w3-ai-node') + '<div class="w3-ai-only" hidden>' + otherRelations.map(r => '<div class="w3-support-connection">' + conceptButton(r.to, lang) + relationshipMarkup(r, lang) + '</div>').join('') + '</div></aside></div>' + comparison;
  }

  function svgNode(node, lang) {
    const x = Number(node.x), y = Number(node.y), w = Number(node.w), h = Number(node.h);
    const cx = x + w / 2, cy = y + h / 2;
    let shape;
    if (node.kind === 'store') {
      shape = '<path class="w3-store-shape" d="M ' + (x + w) + ' ' + y + ' H ' + x + ' V ' + (y + h) + ' H ' + (x + w) + ' M ' + (x + 48) + ' ' + y + ' V ' + (y + h) + '"/>';
    } else {
      shape = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (node.kind === 'process' ? 24 : 0) + '"/>';
    }
    const title = text(node.label, lang) || label(node.concept, lang);
    const lineLimit = Math.max(8, Math.floor((w - (node.kind === 'store' ? 66 : 26)) / 10.2));
    const lines = [];
    title.split(/\s+/).forEach(word => {
      if (!lines.length || (lines[lines.length - 1] + ' ' + word).length > lineLimit) lines.push(word);
      else lines[lines.length - 1] += ' ' + word;
    });
    const lineHeight = 24;
    const numbering = node.number ? '<text class="w3-svg-number" x="' + (x + 13) + '" y="' + (y + 22) + '">' + escape(node.number) + '</text>' : '';
    const labelX = node.kind === 'store' ? cx + 20 : cx;
    const content = '<g class="w3-svg-node w3-' + escape(node.kind) + '" role="button" tabindex="0" data-w3-detail="' + escape(node.concept) + '" aria-label="' + escape(title) + '">' + shape + numbering + '<text x="' + labelX + '" y="' + (cy - (lines.length - 1) * lineHeight / 2 + 6) + '">' + lines.map((line, i) => '<tspan x="' + labelX + '" dy="' + (i ? lineHeight : 0) + '">' + escape(line.trim()) + '</tspan>').join('') + '</text></g>';
    const zoom = node.zoomTarget ? '<g class="w3-svg-zoom" role="button" tabindex="0" data-w3-zoom="' + escape(node.zoomTarget) + '" aria-label="' + escape(tr(lang, 'Entrar en ', 'Zoom into ') + title) + '"><rect x="' + (x + w - 25) + '" y="' + (y - 15) + '" width="40" height="32" rx="10"/><text x="' + (x + w - 5) + '" y="' + (y + 7) + '">+</text></g>' : '';
    return content + zoom;
  }

  function modelMarkup(data, figure, lang) {
    const level = figure.dataset.zoom || 'context';
    const modelId = data.kind === 'zoom' ? (data.models || {})[level] : data.model;
    const model = registry.models[modelId];
    if (!model) return '<p>' + tr(lang, 'El modelo se está preparando.', 'The model is being prepared.') + '</p>';
    const aiActive = figure.dataset.lens === 'ai';
    const relationships = activeRelationships(data, figure);
    const markerId = 'w3-data-arrow-' + data.id + '-' + level;
    const width = Number(model.width) || 1200, height = Number(model.height) || 900;
    const displayWidth = width + (aiActive ? 380 : 0);
    const edgeMarkup = (model.edges || []).map(edge => {
      const name = text(edge.label, lang);
      const labelWidth = Math.min(330, Math.max(95, name.length * 8.5 + 22));
      return '<g class="w3-svg-edge" role="button" tabindex="0" data-w3-detail="' + escape(edge.concept) + '" aria-label="' + escape(name) + '"><path class="w3-data-line" d="' + escape(edge.path) + '" marker-end="url(#' + markerId + ')"/><path class="w3-edge-hit" d="' + escape(edge.path) + '"/><rect x="' + (Number(edge.labelX) - labelWidth / 2) + '" y="' + (Number(edge.labelY) - 17) + '" width="' + labelWidth + '" height="30" rx="8"/><text x="' + Number(edge.labelX) + '" y="' + (Number(edge.labelY) + 4) + '">' + escape(name) + '</text></g>';
    }).join('');
    let augmentation = '';
    if (aiActive) {
      const hubX = width + 185, hubY = 68;
      augmentation = '<g class="w3-svg-ai-hub" role="button" tabindex="0" data-w3-detail="' + escape(data.aiNode) + '"><rect x="' + (width + 28) + '" y="24" width="315" height="82" rx="24"/><text x="' + hubX + '" y="61">' + escape(tr(lang, 'Capacidad de IA', 'AI capability')) + '</text><text class="w3-svg-ai-caption" x="' + hubX + '" y="88">' + escape(tr(lang, 'Extensión · no cambia el modelo base', 'Extension · base model preserved')) + '</text></g>';
      relationships.forEach((relation, index) => {
        const targetNode = model.nodes.find(node => node.id === relation.targetNode || node.concept === relation.to || node.concept === relation.from);
        const targetEdge = model.edges.find(edge => edge.id === relation.targetEdge || edge.concept === relation.to);
        const target = targetNode ? (targetNode.aiTarget || { x: Number(targetNode.x) + Number(targetNode.w), y: Number(targetNode.y) + Number(targetNode.h) / 2 }) : targetEdge ? (targetEdge.aiTarget || { x: Number(targetEdge.labelX), y: Number(targetEdge.labelY) }) : null;
        const rowY = 170 + index * 160;
        const action = text(relation.action, lang);
        augmentation += '<path class="w3-ai-spine" d="M ' + hubX + ' ' + (hubY + 38) + ' V ' + (rowY - 27) + '"/>';
        if (target) {
          const channelX = width + 8 + index * 6;
          augmentation += '<path class="w3-ai-connector" data-w3-detail="' + escape(relation.concept) + '" d="M ' + (width + 35) + ' ' + rowY + ' H ' + channelX + ' V ' + target.y + ' H ' + target.x + '"/><circle class="w3-ai-anchor" cx="' + target.x + '" cy="' + target.y + '" r="6"/>';
        }
        augmentation += '<g class="w3-svg-ai-link" role="button" tabindex="0" data-w3-detail="' + escape(relation.concept) + '" aria-label="' + escape(action) + '"><rect x="' + (width + 35) + '" y="' + (rowY - 27) + '" width="305" height="100" rx="16"/>' + multilineSvg(action, hubX, rowY - 1, 28, 21, 'w3-svg-action') + multilineSvg(label(relation.to, lang), hubX, rowY + 44, 35, 18, 'w3-svg-ai-caption') + '</g>';
      });
    }
    const mobile = '<div class="w3-mobile-dfd">' + (model.edges || []).map(edge => {
      const from = model.nodes.find(node => node.id === edge.from), to = model.nodes.find(node => node.id === edge.to);
      return '<div class="w3-mobile-data-flow">' + (from ? conceptButton(from.concept, lang, 'w3-mobile-' + from.kind, text(from.label, lang)) : '') + '<button type="button" class="w3-mobile-flow-label" data-w3-detail="' + escape(edge.concept) + '"><span>' + escape(text(edge.label, lang)) + '</span><span aria-hidden="true">↓</span></button>' + (to ? conceptButton(to.concept, lang, 'w3-mobile-' + to.kind, text(to.label, lang)) : '') + '</div>';
    }).join('') + (aiActive ? '<div class="w3-mobile-ai">' + conceptButton(data.aiNode, lang, 'w3-ai-node') + relationships.map(r => relationshipMarkup(r, lang)).join('') + '</div>' : '') + '</div>';
    return '<p class="w3-model-note">' + escape(text(model.note, lang)) + '</p><svg class="w3-dfd" viewBox="0 0 ' + displayWidth + ' ' + Math.max(height, aiActive ? 200 + relationships.length * 160 : 0) + '" role="group" aria-label="' + escape(text(model.label, lang)) + '"><defs><marker id="' + markerId + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z"/></marker></defs>' + edgeMarkup + model.nodes.map(node => svgNode(node, lang)).join('') + augmentation + '</svg>' + mobile;
  }

  function zoomControls(lang, current) {
    const choices = [['context', tr(lang, 'Contexto', 'Context')], ['zero', tr(lang, 'Diagrama 0', 'Diagram 0')], ['child', tr(lang, 'Proceso 2.0', 'Process 2.0')]];
    return '<nav class="w3-zoom-controls" aria-label="' + tr(lang, 'Nivel del modelo', 'Model level') + '">' + choices.map(([id, title], index) => (index ? '<span aria-hidden="true">›</span>' : '') + '<button type="button" data-w3-zoom="' + id + '" aria-current="' + (id === current ? 'step' : 'false') + '">' + title + '</button>').join('') + '</nav>';
  }

  function drawingMarkup(data, lang) {
    const customView = window.CST212W3Views && window.CST212W3Views[data.id];
    if (customView) return customView.render(data, lang, viewApi(lang));
    if (data.kind === 'sequence') return sequenceMarkup(data, lang);
    return '<div class="w3-model-toolbar">' + (data.kind === 'zoom' ? zoomControls(lang, 'context') : '<div class="w3-dfd-legend">' + (data.nodes || []).map(id => conceptButton(id, lang)).join('') + '</div>') + controlMarkup(data, lang) + '</div>' + (data.kind === 'zoom' ? '<div class="w3-dfd-legend w3-level-concepts">' + (data.nodes || []).slice(0,5).map(id => conceptButton(id, lang)).join('') + '</div>' : '') + '<div class="w3-model-view"></div>' + (data.kind === 'zoom' ? '<p class="w3-zoom-hint">' + tr(lang, 'El signo + abre un nivel de detalle. Pulsa el concepto para leer su explicación.', 'The + opens a level of detail. Select the concept to read its explanation.') + '</p>' : '');
  }

  function diagramMarkup(data, lang) {
    return '<section class="w3-chapter" id="w3-diagram-' + escape(data.id) + '"><div class="w3-scene w3-reveal"><p class="w3-eyebrow">' + escape(text(data.title, lang)) + '</p><h2>' + escape(text(data.question, lang)) + '</h2><p class="w3-definition">' + escape(text(data.definition, lang)) + '</p><p class="w3-cue">' + escape(text(data.statement, lang)) + '</p></div><figure class="w3-figure" data-w3-diagram="' + escape(data.id) + '" data-lens="base" data-zoom="context"><figcaption><span>' + tr(lang, 'Diagrama ', 'Diagram ') + escape(data.id) + tr(lang, ' · Semana 3', ' · Week 3') + '</span><strong>' + escape(text(data.title, lang)) + '</strong></figcaption>' + drawingMarkup(data, lang) + '<div class="w3-ai-explanation" hidden><h3>' + escape(text(data.aiQuestion, lang)) + '</h3><p>' + escape(text(data.aiMessage, lang)) + '</p>' + flowMarkup(data.aiFlow, lang, 'w3-ai-flow') + '</div></figure>' + (data.transition ? '<div class="w3-transition w3-reveal"><p>' + escape(text(data.transition, lang)) + '</p></div>' : '') + '</section>';
  }

  function renderModel(figure) {
    const data = diagramData(figure);
    const container = figure.querySelector('.w3-model-view');
    if (container) container.innerHTML = modelMarkup(data, figure, language);
    figure.querySelectorAll('[data-w3-zoom]').forEach(control => {
      if (control.tagName === 'BUTTON') control.setAttribute('aria-current', control.dataset.w3Zoom === figure.dataset.zoom ? 'step' : 'false');
    });
  }

  function setLens(figure, value) {
    const ai = value === 'ai';
    figure.dataset.lens = ai ? 'ai' : 'base';
    figure.classList.toggle('is-ai', ai);
    figure.querySelectorAll('[data-w3-lens]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.w3Lens === value));
      if (button.dataset.w3Lens === 'ai') button.textContent = ai ? tr(language, 'Capa IA activa', 'AI lens active') : tr(language, 'Aplicar capa IA', 'Apply AI lens');
    });
    figure.querySelectorAll('.w3-ai-explanation,.w3-ai-only').forEach(item => { item.hidden = !ai; });
    renderModel(figure);
    figure.dispatchEvent(new CustomEvent('w3:lenschange', { detail: { lens: figure.dataset.lens } }));
  }

  function consolidationMarkup(lang) {
    const data = registry.consolidation;
    if (!data || Object.keys(registry.diagrams).length < 7) return '';
    const journey = data.journey.map(step => conceptButton(step.concept, lang, '', text(step.label, lang))).join('<span aria-hidden="true">→</span>');
    return '<section class="w3-consolidation" data-w3-consolidation data-lens="base"><header><p class="w3-eyebrow">' + tr(lang, 'Semana 3 · Modelo mental', 'Week 3 · Mental model') + '</p><h2>' + tr(lang, 'Del requisito a la lógica del sistema', 'From requirements to system logic') + '</h2></header><div class="w3-memory-journey">' + journey + '</div><p class="w3-memory-hook">' + tr(lang, 'Modelar → Descomponer → Equilibrar → Definir datos → Expresar lógica → Validar', 'Model → Decompose → Balance → Define data → Express logic → Validate') + '</p>' + supportMarkup(data, lang) + '<p class="w3-ai-only w3-memory-principle" hidden>' + tr(lang, 'IA → modelo candidato. Evidencia + reglas + analista → modelo validado.', 'AI → candidate model. Evidence + rules + analyst → validated model.') + '</p><div class="w3-sdlc"><p><strong>' + tr(lang, 'Planeación', 'Planning') + '</strong><span>' + tr(lang, 'Semanas 1–2 · bases trabajadas', 'Weeks 1–2 · foundations covered') + '</span></p><p><strong>' + tr(lang, 'Análisis', 'Analysis') + '</strong><span>' + tr(lang, 'Semanas 2–4 · continúa', 'Weeks 2–4 · ongoing') + '</span></p><p>' + tr(lang, 'Foco de Semana 3: modelado lógico de datos y procesos.', 'Week 3 focus: logical data and process modeling.') + '</p></div></section><section class="w3-scene w3-next-orientation"><h2>' + tr(lang, 'Otra forma de mirar el sistema.', 'Another way to look at the system.') + '</h2><p class="w3-definition">' + tr(lang, 'Ya podemos representar cómo fluyen los datos y cómo funcionan las decisiones. Pero existe otra forma de mirar el sistema: en lugar de preguntar solamente qué procesos ocurren, podemos preguntarnos qué objetos participan, qué responsabilidades tienen y cómo interactúan.', 'We can now represent how data flows and how decisions work. But there is another way to look at the system: instead of asking only which processes occur, we can ask which objects participate, what responsibilities they have and how they interact.') + '</p><p class="w3-cue">' + tr(lang, 'Próximo capítulo · Semana 4: Modelado orientado a objetos + estrategias de desarrollo', 'Next chapter · Week 4: Object-oriented modeling + development strategies') + '</p><p class="w3-model-note">' + tr(lang, 'Orientación del siguiente capítulo. Su contenido todavía no está implementado.', 'Orientation for the next chapter. Its content is not implemented yet.') + '</p></section>';
  }

  function mount(host) {
    const ids = ['01', '02', '03', '04', '05', '06', '07'].filter(id => registry.diagrams[id]);
    const signature = language + ':' + ids.join(',');
    if (signatures.get(host) === signature) return;
    (cleanups.get(host) || []).forEach(cleanup => cleanup());
    const cleanupList = [];
    cleanups.set(host, cleanupList);
    signatures.set(host, signature);
    host.className = 'w3-atlas';
    host.lang = language;
    const nav = ['01', '02', '03', '04', '05', '06', '07'].map(id => registry.diagrams[id] ? '<button type="button" data-w3-jump="' + id + '"><span>' + id + '</span>' + escape(text(registry.diagrams[id].title, language)) + '</button>' : '<span class="w3-pending"><span>' + id + '</span>' + tr(language, 'Pendiente de instrucciones completas', 'Awaiting complete instructions') + '</span>').join('');
    host.innerHTML = '<div class="w3-language" role="group" aria-label="' + tr(language, 'Idioma', 'Language') + '"><button type="button" data-w3-language="es" aria-pressed="' + (language === 'es') + '">ES</button><button type="button" data-w3-language="en" aria-pressed="' + (language === 'en') + '">EN</button></div><header class="w3-opening w3-scene"><p class="w3-eyebrow">03 / 07 · ' + tr(language, 'Semana 3', 'Week 3') + '</p><p class="w3-course-title">' + tr(language, 'Modelado de datos y procesos', 'Data and process modeling') + '</p><h1 tabindex="-1">' + tr(language, 'Ya sabemos qué necesita el sistema.<br>¿Cómo representamos lógicamente cómo se mueve la información y cómo se toman las decisiones?', 'We know what the system needs.<br>How do we represent logically how information moves and how decisions are made?') + '</h1><p class="w3-cue">' + tr(language, 'Continuamos en la fase de análisis del sistema.', 'We continue in the system analysis phase.') + '</p></header><section class="w3-bridge w3-scene w3-reveal"><p class="w3-eyebrow">' + tr(language, 'De las funciones al modelo', 'From functions to the model') + '</p><h2>' + tr(language, 'Primero, el funcionamiento lógico.', 'Logical behavior comes first.') + '</h2><p class="w3-definition">' + tr(language, 'En la Semana 2 descubrimos qué necesita el sistema y organizamos sus funciones. Ahora debemos ir un nivel más profundo. No vamos a decidir todavía qué servidor, framework o base de datos utilizar. Primero necesitamos representar cómo debe funcionar el sistema lógicamente.', 'In Week 2 we discovered what the system needs and organized its functions. Now we need to go one level deeper. We are not choosing a server, framework or database yet. First we need to represent how the system should work logically.') + '</p><p class="w3-bridge-chain">' + tr(language, 'Hechos → Requisitos → Funciones → FDD → Modelo lógico', 'Facts → Requirements → Functions → FDD → Logical model') + '</p></section><nav class="w3-navigation" aria-label="' + tr(language, 'Diagramas de Semana 3', 'Week 3 diagrams') + '">' + nav + '</nav>' + ids.map(id => diagramMarkup(registry.diagrams[id], language)).join('') + '<footer class="w3-ending"><h2>' + (ids.length === 7 ? tr(language, 'Semana 3 completada', 'Week 3 completed') : tr(language, 'Continuaremos con el siguiente nivel.', 'We will continue with the next level.')) + '</h2><p>' + (ids.length === 7 ? tr(language, 'De los requisitos al modelo lógico: datos, procesos y decisiones.', 'From requirements to the logical model: data, processes and decisions.') : tr(language, 'Los diagramas 04–07 esperan la continuación del material. No se han completado con contenido supuesto.', 'Diagrams 04–07 await the rest of the material. Missing content has not been filled with assumptions.')) + '</p><button type="button" class="w3-back" data-w3-back>' + tr(language, 'Volver a Semana 2', 'Return to Week 2') + '</button></footer>';
    const bridge = host.querySelector('.w3-bridge-chain');
    if (bridge) bridge.outerHTML = flowMarkup(['w3f_facts','w3f_requisites','w3f_functions','w3f_fdd','w3f_logical_models'], language, 'w3-bridge-flow');
    const footer = host.querySelector('.w3-ending');
    if (footer) footer.insertAdjacentHTML('beforebegin', consolidationMarkup(language));
    host.querySelectorAll('.w3-figure').forEach(figure => {
      renderModel(figure);
      const data = diagramData(figure);
      const view = window.CST212W3Views && window.CST212W3Views[data.id];
      if (view && view.bind) {
        const cleanup = view.bind(figure, data, language, viewApi(language));
        if (typeof cleanup === 'function') cleanupList.push(cleanup);
      }
    });
    if (!host.dataset.bound) {
      host.dataset.bound = 'true';
      host.addEventListener('click', onClick);
      host.addEventListener('keydown', event => {
        if ((event.key === 'Enter' || event.key === ' ') && event.target instanceof SVGElement && event.target.getAttribute('role') === 'button') {
          event.preventDefault();
          event.target.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        }
      });
    }
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('w3-arrived'); observer.unobserve(entry.target); }
      }), { threshold: 0.12 });
      host.querySelectorAll('.w3-reveal').forEach(element => observer.observe(element));
      cleanupList.push(() => observer.disconnect());
    }
  }

  function scrollToElement(element) {
    if (element) element.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  }

  function onClick(event) {
    const target = event.target;
    const languageButton = target.closest('[data-w3-language]');
    if (languageButton) {
      language = languageButton.dataset.w3Language;
      mount(document.getElementById('week-3-journey'));
      return;
    }
    const jump = target.closest('[data-w3-jump]');
    if (jump) { scrollToElement(document.getElementById('w3-diagram-' + jump.dataset.w3Jump)); return; }
    if (target.closest('[data-w3-back]')) {
      document.getElementById('week-3-journey').hidden = true;
      const week2 = document.getElementById('week-2');
      if (week2) week2.hidden = false;
      history.replaceState(null, '', '#week-2');
      scrollToElement(week2);
      return;
    }
    const figure = target.closest('.w3-figure,.w3-consolidation');
    const zoom = target.closest('[data-w3-zoom]');
    if (zoom && figure) {
      figure.dataset.zoom = zoom.dataset.w3Zoom;
      renderModel(figure);
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) figure.querySelector('.w3-model-view').animate([{ opacity: 0.35, transform: 'scale(.985)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 320, easing: 'ease-out' });
      return;
    }
    const lens = target.closest('[data-w3-lens]');
    if (lens && figure) { setLens(figure, lens.dataset.w3Lens); return; }
    const detail = target.closest('[data-w3-detail]');
    if (detail) openConcept(detail.dataset.w3Detail, figure, detail);
  }

  function showWeek3(shouldScroll) {
    const host = ensure();
    if (!host) return;
    host.hidden = false;
    if (shouldScroll) scrollToElement(host);
  }

  function ensure() {
    const week2Root = document.querySelector('.w2-atlas');
    const week2Section = document.getElementById('week-2');
    if (!week2Root || !week2Section || !week2Section.parentElement) return null;
    let host = document.getElementById('week-3-journey');
    if (!host) {
      host = document.createElement('section');
      host.id = 'week-3-journey';
      host.hidden = true;
      week2Section.parentElement.appendChild(host);
    }
    mount(host);
    if (!week2Root.querySelector('[data-open-week3]')) {
      const entry = document.createElement('div');
      entry.className = 'w3-entry-cta';
      const lang = week2Root.lang || week2Root.dataset.w2LanguageOverride || week2Root.dataset.language || 'es';
      entry.innerHTML = '<button type="button" data-open-week3>' + tr(lang, 'Continuar a Semana 3', 'Continue to Week 3') + '<span>' + tr(lang, 'Modelado de datos y procesos', 'Data and process modeling') + '</span><span aria-hidden="true">→</span></button>';
      entry.querySelector('button').addEventListener('click', () => {
        language = (week2Root.lang || week2Root.dataset.w2LanguageOverride || week2Root.dataset.language) === 'en' ? 'en' : 'es';
        history.replaceState(null, '', '#week-3');
        showWeek3(true);
      });
      week2Root.appendChild(entry);
    }
    return host;
  }

  function route() {
    if (location.hash === '#week-3' || location.hash.indexOf('#w3-diagram-') === 0) {
      showWeek3(false);
      requestAnimationFrame(() => scrollToElement(location.hash.indexOf('#w3-diagram-') === 0 ? document.getElementById(location.hash.slice(1)) : document.getElementById('week-3-journey')));
    }
  }
  function start() {
    ensure();
    route();
    new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        const host = ensure();
        if (host && location.hash === '#week-3' && host.hidden) { host.hidden = false; scrollToElement(host); }
      });
    }).observe(document.body, { childList: true, subtree: true });
    window.addEventListener('hashchange', route);
  }
  window.CST212Week3 = { mount, show: () => showWeek3(true) };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
