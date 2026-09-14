(function () {
  'use strict';

  var db = window.CST212_W2 = window.CST212_W2 || { diagrams: {}, concepts: {}, sources: {} };
  var roots = new WeakMap();
  var dialog;
  var dialogContext;
  var dialogHistory = [];
  var opener;
  var weekTitles = {
    '01': ['Gestión del proyecto', 'Project management'],
    '02': ['Enfoques de desarrollo', 'Development approaches'],
    '03': ['EDT / WBS', 'Work breakdown structure'],
    '04': ['Dependencias y ruta crítica', 'Dependencies and critical path'],
    '05': ['Modelado de requisitos', 'Requirements modeling'],
    '06': ['Recopilación de hechos', 'Fact-finding'],
    '07': ['Descomposición funcional', 'Functional decomposition']
  };

  function escape(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function text(value, language) {
    if (value == null) return '';
    if (Array.isArray(value)) return value.map(function (v) { return text(v, language); }).join(' · ');
    return typeof value === 'object' ? (value[language] || value.es || value.en || '') : String(value);
  }
  function tr(es, en, language) { return language === 'en' ? en : es; }
  function concept(id) { return db.concepts[id]; }
  function label(id, language) { return concept(id) ? text(concept(id).label, language) : ''; }
  function detailButton(id, language, className, extra) {
    if (!concept(id)) return '';
    return '<button type="button" class="w2-node ' + (className || '') + '" data-w2-detail="' + escape(id) + '"><strong>' + escape(label(id, language)) + '</strong>' + (extra ? '<span>' + escape(text(extra, language)) + '</span>' : '') + '</button>';
  }
  function layerName(layer, language) {
    if (layer === 'ai') return tr('Extensión AI-first', 'AI-first extension', language);
    if (layer === 'deepening') return tr('Profundización académica', 'Academic deepening', language);
    return tr('CST212 · Fundamento académico', 'CST212 · Academic foundation', language);
  }
  function sourcesMarkup(ids, language) {
    var items = (ids || []).map(function (id) { return db.sources[id]; }).filter(Boolean);
    return items.map(function (source) {
      var url = String(source.url || '');
      var citation = [source.author, '(' + (source.year || tr('s. f.', 'n.d.', language)) + ').', text(source.title, language)].filter(Boolean).join(' ');
      return /^https:\/\//i.test(url) ? '<p class="w2-reference"><a href="' + escape(url) + '" target="_blank" rel="noopener noreferrer">' + escape(citation) + '</a></p>' : '<p class="w2-reference">' + escape(citation) + '</p>';
    }).join('');
  }

  function ensureDialog() {
    if (dialog) return dialog;
    dialog = document.createElement('dialog');
    dialog.className = 'w2-dialog';
    dialog.setAttribute('aria-labelledby', 'w2-dialog-title');
    document.body.appendChild(dialog);
    dialog.addEventListener('click', function (event) {
      var close = event.target.closest('[data-w2-close]');
      if (close) { dialog.close(); return; }
      var back = event.target.closest('[data-w2-back]');
      if (back && dialogHistory.length) { renderDetail(dialogHistory.pop(), dialogContext); return; }
      var link = event.target.closest('[data-w2-related]');
      if (link) {
        dialogHistory.push(dialog.dataset.concept);
        renderDetail(link.dataset.w2Related, dialogContext);
        return;
      }
      if (event.target === dialog) {
        var rect = dialog.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
      }
    });
    dialog.addEventListener('close', function () {
      dialogHistory = [];
      if (opener && opener.isConnected) opener.focus({ preventScroll: true });
    });
    dialog.addEventListener('change', function (event) {
      if (event.target.matches('[data-w2-compare-select]')) updateComparison();
    });
    return dialog;
  }
  function panel(number, title, content, className) {
    return '<section class="w2-detail-panel ' + (className || '') + '"><h3><span>' + number + '</span>' + escape(title) + '</h3>' + content + '</section>';
  }
  function renderDetail(id, context) {
    var data = concept(id);
    if (!data) return;
    var language = context.language;
    var related = (data.related || []).filter(function (key) { return !!concept(key); });
    var fields = [
      ['01', '¿Qué es?', 'What is it?', data.what],
      ['02', '¿Por qué importa?', 'Why does it matter?', data.why],
      ['03', 'Pregunta guía', 'Guiding question', data.question],
      ['04', 'Ejemplo', 'Example', data.example],
      ['05', 'Metáfora / analogía', 'Metaphor / analogy', data.analogy]
    ];
    var html = fields.map(function (field) {
      var body = '<p>' + escape(text(field[3], language)) + '</p>';
      if (field[0] === '04' && data.requiredInformation) body += '<p class="w2-function-evidence"><b>' + tr('Información necesaria: ', 'Information needed: ', language) + '</b>' + escape(text(data.requiredInformation, language)) + '</p>';
      if (field[0] === '04' && data.evidence) body += '<p class="w2-function-evidence"><b>' + tr('Sustento: ', 'Supporting basis: ', language) + '</b>' + escape(text(data.evidence, language)) + '</p>';
      if (field[0] === '05' && id === 'w2f_triangulation' && db.diagrams['06'].triangulationRelationships) {
        var triangulation = db.diagrams['06'].triangulationRelationships;
        body += '<div class="w2-drawer-convergence"><div>' + triangulation.map(function (relation) { return '<button type="button" data-w2-related="' + escape(relation.from) + '">' + escape(label(relation.from, language)) + '</button>'; }).join('') + '</div><span aria-hidden="true">→</span><button type="button" data-w2-related="' + escape(triangulation[0].to) + '">' + escape(label(triangulation[0].to, language)) + '</button></div>';
      }
      return panel(field[0], tr(field[1], field[2], language), body);
    }).join('');
    html += panel('06', tr('Conceptos relacionados', 'Related concepts', language), '<div class="w2-related">' + related.map(function (key) { return '<button type="button" data-w2-related="' + escape(key) + '">' + escape(label(key, language)) + '</button>'; }).join('') + '</div>');
    html += panel('07', tr('No confundir con', 'Do not confuse with', language), '<p>' + escape(text(data.notConfuse, language)) + '</p>');
    html += panel('08', tr('Capa / fuente académica', 'Layer / academic source', language), '<p class="w2-provenance">' + escape(layerName(data.layer, language)) + '</p>' + sourcesMarkup(data.sources, language));
    if (context.ai || data.layer === 'ai') {
      var aiDetail = data.ai || {
        connection: tr('La capa de este diagrama no define una intervención directa de IA sobre «' + label(id, language) + '».', 'This diagram’s lens defines no direct AI intervention on “' + label(id, language) + '”.', language),
        does: tr('Aquí no se asigna una tarea a la IA. Su apoyo se limita a las conexiones azules declaradas en el diagrama.', 'No task is assigned to AI here. Its support is limited to the blue relationships declared in the diagram.', language),
        changes: tr('Activar la capa no modifica este concepto ni convierte sus datos en estimaciones generadas por IA.', 'Activating the lens does not change this concept or turn its data into AI-generated estimates.', language),
        validate: tr('Cualquier cambio debe contrastarse con las fuentes y confirmarse con la persona responsable; activar IA no constituye aprobación.', 'Any change must be checked against sources and confirmed with the responsible person; activating AI is not approval.', language)
      };
      [['09', 'Conexión con IA', 'AI connection', 'connection'], ['10', '¿Qué puede hacer aquí?', 'What can AI do here?', 'does'], ['11', '¿Qué cambia?', 'What changes?', 'changes'], ['12', '¿Qué requiere validación?', 'What needs validation?', 'validate']].forEach(function (field) {
        html += panel(field[0], tr(field[1], field[2], language), '<p>' + escape(text(aiDetail[field[3]], language)) + '</p>', 'w2-detail-ai');
      });
    }
    dialog.dataset.concept = id;
    dialog.innerHTML = '<header class="w2-dialog-heading"><div><small>' + escape(layerName(data.layer, language)) + (data.candidate ? ' · ' + tr('Función candidata', 'Candidate function', language) : '') + '</small><h2 id="w2-dialog-title" tabindex="-1">' + escape(label(id, language)) + '</h2></div><div class="w2-dialog-tools">' + (dialogHistory.length ? '<button type="button" data-w2-back>' + tr('Volver', 'Back', language) + '</button>' : '') + '<button type="button" data-w2-close aria-label="' + tr('Cerrar explicación', 'Close explanation', language) + '">×</button></div></header><div class="w2-detail-grid">' + html + '</div>';
    dialog.scrollTop = 0;
    if (dialog.open) dialog.querySelector('h2').focus({ preventScroll: true });
  }
  function openDetail(id, context, trigger) {
    ensureDialog();
    opener = trigger;
    dialogContext = context;
    dialogHistory = [];
    renderDetail(id, context);
    if (!dialog.open) dialog.showModal();
    dialog.querySelector('h2').focus({ preventScroll: true });
  }

  function openComparison(data, language, trigger) {
    if (!data.comparison || !data.comparison.rows.length) return;
    ensureDialog();
    opener = trigger;
    dialogContext = { language: language, comparison: data.comparison };
    dialogHistory = [];
    var options = data.comparison.rows.map(function (row) { return '<option value="' + escape(row.concept) + '">' + escape(label(row.concept, language)) + '</option>'; }).join('');
    dialog.innerHTML = '<header class="w2-dialog-heading"><div><small>' + tr('Comparación cualitativa', 'Qualitative comparison', language) + '</small><h2 id="w2-dialog-title" tabindex="-1">' + tr('Elegir según el contexto', 'Choose for the context', language) + '</h2></div><button type="button" data-w2-close aria-label="' + tr('Cerrar', 'Close', language) + '">×</button></header><p class="w2-comparison-note">' + tr('No son categorías equivalentes ni una clasificación de mejor a peor. Compara su función, sus condiciones de uso y sus límites.', 'These are not equivalent categories or a best-to-worst ranking. Compare their role, conditions of use and limitations.', language) + '</p><div class="w2-compare-selects"><label>' + tr('Primera perspectiva', 'First perspective', language) + '<select data-w2-compare-select="left">' + options + '</select></label><label>' + tr('Segunda perspectiva', 'Second perspective', language) + '<select data-w2-compare-select="right">' + options + '</select></label></div><div class="w2-comparison-table"></div>';
    dialog.querySelector('[data-w2-compare-select="right"]').selectedIndex = Math.min(1, data.comparison.rows.length - 1);
    updateComparison();
    if (!dialog.open) dialog.showModal();
    dialog.querySelector('h2').focus({ preventScroll: true });
  }
  function updateComparison() {
    var comparison = dialogContext.comparison;
    var language = dialogContext.language;
    var ids = ['left', 'right'].map(function (side) { return dialog.querySelector('[data-w2-compare-select="' + side + '"]').value; });
    var rows = ids.map(function (id) { return comparison.rows.find(function (row) { return row.concept === id; }); });
    dialog.querySelector('.w2-comparison-table').innerHTML = '<table><caption class="w2-sr-only">' + tr('Comparación de enfoques', 'Approach comparison', language) + '</caption><thead><tr><th scope="col">' + tr('Criterio', 'Criterion', language) + '</th>' + ids.map(function (id) { return '<th scope="col">' + escape(label(id, language)) + '</th>'; }).join('') + '</tr></thead><tbody>' + comparison.criteria.map(function (criterion) { return '<tr><th scope="row">' + escape(text(criterion.label, language)) + '</th>' + rows.map(function (row) { return '<td>' + escape(text(row.values[criterion.id], language)) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  }

  function aiId(data) {
    if (data.aiNode && concept(data.aiNode)) return data.aiNode;
    var relationships = data.aiRelationships || [];
    for (var i = 0; i < relationships.length; i++) {
      if (concept(relationships[i].from) && concept(relationships[i].from).layer === 'ai') return relationships[i].from;
      if (concept(relationships[i].to) && concept(relationships[i].to).layer === 'ai') return relationships[i].to;
    }
    return null;
  }
  function lensMarkup(data, language) {
    var id = aiId(data);
    var pending = !id || data.aiPending;
    return '<aside class="w2-lens-host"><div class="w2-lens-control" role="group" aria-label="' + tr('Vista de este diagrama', 'View of this diagram', language) + '"><button type="button" data-w2-lens="base" aria-pressed="true">Base</button><button type="button" class="w2-lens-activate" data-w2-lens="ai" aria-pressed="false"' + (pending ? ' disabled' : '') + '>' + tr('Aplicar capa IA', 'Apply AI lens', language) + '</button></div><div class="w2-ai-capability">' + (id ? detailButton(id, language, 'w2-ai-node', data.aiTitle) : '<p class="w2-pending-copy">' + tr('La especificación de esta capa continúa en la siguiente parte del documento.', 'This lens specification continues in the next part of the document.', language) + '</p>') + '</div>' + (pending ? '' : '<p class="w2-lens-hint">' + tr('Activa la capa para ver dónde interviene, qué cambia y qué debe validarse.', 'Activate the lens to see where it connects, what changes and what must be validated.', language) + '</p>') + '</aside>';
  }
  function relationshipMarkup(relationship, language) {
    if (!concept(relationship.concept)) return '';
    return '<button type="button" class="w2-ai-relationship" data-w2-detail="' + escape(relationship.concept) + '"><small>' + escape(label(relationship.from, language)) + ' → ' + escape(label(relationship.to, language)) + '</small><strong>' + escape(text(relationship.action, language)) + '</strong><span>' + escape(text(relationship.value, language)) + '</span></button>';
  }
  function mapMarkup(data, language) {
    var hub = aiId(data);
    var rootConnected = (data.aiRelationships || []).some(function (r) { return r.from === data.root || r.to === data.root; });
    var seen = new Set();
    var groups = (data.groups || []).map(function (group) {
      return { label: group.label, nodes: group.nodes.filter(function (id) { if (seen.has(id) || (id === data.root && !rootConnected) || id === hub || !concept(id)) return false; seen.add(id); return true; }) };
    });
    if (rootConnected && !seen.has(data.root)) {
      seen.add(data.root);
      groups.unshift({ label: data.title, nodes: [data.root] });
    }
    var missing = [];
    (data.aiRelationships || []).forEach(function (r) {
      [r.from, r.to].forEach(function (id) { if (id !== hub && id !== data.root && concept(id) && !seen.has(id)) { seen.add(id); missing.push(id); } });
    });
    if (missing.length) groups.push({ label: { es: 'Puntos de apoyo al trabajo', en: 'Work support touchpoints' }, nodes: missing });
    var rows = groups.filter(function (group) { return group.nodes.length; }).map(function (group) {
      return '<section class="w2-node-group"><h4>' + escape(text(group.label, language)) + '</h4>' + group.nodes.map(function (id) {
        var relationships = (data.aiRelationships || []).filter(function (r) { return r.from === id || r.to === id; });
        return '<div class="w2-node-row' + (relationships.length ? ' has-ai' : '') + '">' + detailButton(id, language) + '<div class="w2-relationship-route" hidden>' + relationships.map(function (r) { return relationshipMarkup(r, language); }).join('') + '</div></div>';
      }).join('') + '</section>';
    }).join('');
    return '<div class="w2-map' + (rootConnected ? ' w2-root-integrated' : '') + '">' + (rootConnected ? '' : '<div class="w2-map-root">' + detailButton(data.root, language, 'w2-root-node') + '</div>') + '<div class="w2-map-rows">' + rows + '</div>' + lensMarkup(data, language) + '</div>';
  }
  function treeBranch(node, language, depth) {
    if (!node || !concept(node.concept)) return '';
    var activity = node.type === 'activity';
    var duration = concept(node.concept).duration;
    var durationLabel = typeof duration === 'number' ? duration + ' ' + tr(duration === 1 ? 'día' : 'días', duration === 1 ? 'day' : 'days', language) : '';
    return '<li class="w2-tree-item' + (activity ? ' is-activity' : '') + '" style="--w2-depth:' + depth + '"><div class="w2-tree-label">' + (activity ? '<small>' + tr('Actividad derivada', 'Derived activity', language) + '</small>' : '') + detailButton(node.concept, language, '', durationLabel) + '</div>' + (node.children && node.children.length ? '<ul class="w2-tree-children">' + node.children.map(function (child) { return treeBranch(child, language, depth + 1); }).join('') + '</ul>' : '') + '</li>';
  }
  function treeMarkup(data, language) {
    var root = data.tree;
    var allTreeIds = new Set();
    function collect(node) { if (!node) return; allTreeIds.add(node.concept); (node.children || []).forEach(collect); }
    collect(root);
    var secondary = (data.groups || []).flatMap(function (group) { return group.nodes; }).filter(function (id, index, arr) { return concept(id) && !allTreeIds.has(id) && arr.indexOf(id) === index; });
    var support = data.aiRelationships && data.aiRelationships.length ? '<div class="w2-tree-support">' + mapMarkup(data, language) + '</div>' : (secondary.length ? '<div class="w2-task-attributes">' + secondary.map(function (id) { return detailButton(id, language); }).join('') + '</div>' : '') + '<div class="w2-tree-lens">' + lensMarkup(data, language) + '</div>';
    return '<div class="w2-hierarchy"><div class="w2-tree-root">' + detailButton(root.concept, language, 'w2-root-node') + '</div><ul class="w2-tree-branches">' + (root.children || []).map(function (node) { return treeBranch(node, language, 1); }).join('') + '</ul>' + (data.treeBoundary ? '<p class="w2-tree-note">' + escape(text(data.treeBoundary, language)) + '</p>' : '') + '</div>' + support;
  }
  function flowMarkup(ids, language, aiOnly) {
    if (!ids || !ids.length) return '';
    return '<ol class="w2-evidence-flow' + (aiOnly ? ' w2-ai-flow' : '') + '"' + (aiOnly ? ' hidden' : '') + '>' + ids.map(function (id) { return '<li>' + detailButton(id, language) + '</li>'; }).join('') + '</ol>';
  }
  function viewApi() {
    return { node: detailButton, map: mapMarkup, relationships: relationshipMarkup, text: text, escape: escape, tr: tr, setLens: setLens };
  }
  function timelineMarkup(data, language) {
    if (!data.timeline) return '';
    return '<div class="w2-project-timeline">' + data.timeline.map(function (id) { return detailButton(id, language); }).join('<span class="w2-timeline-line" aria-hidden="true"></span>') + '</div>';
  }
  function figureMarkup(data, language) {
    var custom = window.CST212W2Views && window.CST212W2Views[data.id];
    var visual = custom ? custom.render(data, language, viewApi()) : (data.tree ? treeMarkup(data, language) : mapMarkup(data, language));
    var questions = data.questions ? '<div class="w2-investigation-questions">' + data.questions.map(function (question) { return '<span>' + escape(text(question, language)) + '</span>'; }).join('') + '</div>' : '';
    var caseNote = data.caseNote ? '<p class="w2-case-note">' + escape(text(data.caseNote, language)) + '</p>' : (data.candidateModel ? '<p class="w2-case-note">' + tr('Modelo ilustrativo / candidato · No representa requisitos confirmados.', 'Illustrative / candidate model · Not confirmed requirements.', language) + '</p>' : '');
    var aiQuestion = data.aiMasterQuestion ? '<p class="w2-ai-question" hidden>' + escape(text(data.aiMasterQuestion, language)) + '</p>' : '';
    return '<figure class="w2-figure" id="w2-diagram-' + data.id + '" data-w2-diagram="' + data.id + '" data-lens="base" tabindex="-1" aria-label="' + escape(text(data.title, language)) + '"><header class="w2-figure-meta"><small>' + tr('Diagrama ', 'Diagram ', language) + data.id + ' · ' + tr('Semana 2', 'Week 2', language) + '</small><p>' + escape(text(data.subtitle, language)) + '</p></header>' + questions + caseNote + aiQuestion + timelineMarkup(data, language) + visual + flowMarkup(data.evidenceFlow, language, false) + flowMarkup(data.aiFlow, language, true) + (data.distinction ? '<div class="w2-distinction">' + detailButton(data.distinction[0], language) + '<span aria-label="' + tr('no es lo mismo que', 'is not the same as', language) + '">≠</span>' + detailButton(data.distinction[1], language) + '</div>' : '') + (data.comparison ? '<button type="button" class="w2-compare-button" data-w2-compare="' + data.id + '">' + tr('Comparar enfoques según el contexto', 'Compare approaches for the context', language) + ' <span aria-hidden="true">↗</span></button>' : '') + '<p class="w2-ai-memory" hidden>' + escape(text(data.aiMessage, language)) + '</p><div class="w2-layer-legend"><span>' + tr('Fundamento académico', 'Academic foundation', language) + '</span><span>' + tr('Extensión AI-first', 'AI-first extension', language) + '</span></div></figure>';
  }
  function phaseTransition(language) {
    return '<section class="w2-scene w2-phase-transition"><small>SDLC · ' + tr('Cambio de fase', 'Phase transition', language) + '</small><p>' + tr('Hasta aquí hemos organizado el proyecto. Ahora cambia nuestra pregunta.', 'So far, we have organized the project. Now our question changes.', language) + '</p><h2>' + tr('¿Qué necesita realmente<br>el nuevo sistema?', 'What does the new system<br>actually need?', language) + '</h2><div class="w2-phase-track"><span>' + tr('Planeación', 'Planning', language) + '</span><span aria-hidden="true">→</span><strong>' + tr('Análisis', 'Analysis', language) + '</strong></div><p>' + tr('Ya no preguntamos solamente: «¿Cómo ejecutaremos el proyecto?»', 'We no longer ask only: “How will we execute the project?”', language) + '</p><span class="w2-transition-cue">' + tr('Acto II · Análisis del sistema', 'Act II · Systems analysis', language) + '</span></section>';
  }
  function setLens(figure, active, language) {
    figure.classList.toggle('is-ai', active);
    figure.dataset.lens = active ? 'ai' : 'base';
    figure.querySelectorAll('[data-w2-lens]').forEach(function (button) {
      var selected = button.dataset.w2Lens === (active ? 'ai' : 'base');
      button.setAttribute('aria-pressed', String(selected));
      if (button.dataset.w2Lens === 'ai') button.textContent = active ? tr('Capa IA activa', 'AI lens active', language) : tr('Aplicar capa IA', 'Apply AI lens', language);
    });
    figure.querySelectorAll('.w2-relationship-route, .w2-ai-memory, .w2-ai-flow, .w2-ai-question').forEach(function (node) { node.hidden = !active; });
    var status = figure.closest('.w2-atlas').querySelector('.w2-live-status');
    status.textContent = tr('Diagrama ', 'Diagram ', language) + figure.dataset.w2Diagram + ': ' + (active ? tr('capa IA activa', 'AI lens active', language) : tr('vista base', 'base view', language));
  }

  function mount(root, language) {
    if (!root) return;
    var ids = Object.keys(db.diagrams).sort();
    var signature = language + ':' + ids.join(',') + ':' + (db.version || '1');
    if (root.dataset.w2Signature === signature) return;
    var registration = roots.get(root);
    if (registration && registration.cleanups) registration.cleanups.forEach(function (cleanup) { cleanup(); });
    root.dataset.language = language;
    root.dataset.w2Signature = signature;
    root.classList.add('w2-atlas');
    var complete = ids.length === 7;
    var opening = '<section class="w2-opening w2-scene"><div class="w2-arrival"><span>GO</span><i aria-hidden="true">→</i><span>' + tr('Candidato de proyecto', 'Project candidate', language) + '</span><i aria-hidden="true">→</i><strong>' + tr('Proyecto', 'Project', language) + '</strong></div><small>02 / 07 · ' + tr('Semana 2', 'Week 2', language) + '</small><h1>' + tr('Desarrollo de sistemas<br>con gestión de proyectos', 'Systems development<br>with project management', language) + '</h1><p>' + tr('Decidir que un proyecto vale la pena no significa que ya sepamos cómo ejecutarlo. Ahora debemos organizar el trabajo y descubrir con precisión qué necesita el nuevo sistema.', 'Deciding that a project is worth pursuing does not mean we already know how to execute it. We now need to organize the work and discover what the new system actually needs.', language) + '</p><div class="w2-two-acts"><span>' + tr('Acto I', 'Act I', language) + '<strong>' + tr('¿Cómo organizamos el proyecto?', 'How do we organize the project?', language) + '</strong></span><span>' + tr('Acto II', 'Act II', language) + '<strong>' + tr('¿Qué necesita realmente el sistema?', 'What does the system actually need?', language) + '</strong></span></div><a class="w1f-next-week-back w2-back-week1" href="#week-1">' + tr('Volver a la semana 1', 'Back to Week 1', language) + '</a></section>';
    var navigation = '<nav class="w2-route-nav" aria-label="' + tr('Los siete diagramas de la semana 2', 'The seven Week 2 diagrams', language) + '">' + Object.keys(weekTitles).map(function (id) {
      return db.diagrams[id] ? '<a href="#w2-diagram-' + id + '"><small>' + id + '</small>' + weekTitles[id][language === 'en' ? 1 : 0] + '</a>' : '<span aria-disabled="true"><small>' + id + '</small>' + weekTitles[id][language === 'en' ? 1 : 0] + '<em>' + tr('Pendiente del documento', 'Awaiting specification', language) + '</em></span>';
    }).join('') + '</nav>';
    var lessons = ids.map(function (id) {
      var data = db.diagrams[id];
      return (id === '05' ? phaseTransition(language) : '') + '<article class="w2-lesson"><section class="w2-scene"><small>' + (Number(id) <= 4 ? tr('Acto I · Organizar el proyecto', 'Act I · Organize the project', language) : tr('Acto II · Comprender las necesidades', 'Act II · Understand the needs', language)) + '</small><p class="w2-scene-question">' + escape(text(data.transition, language)) + '</p><h2>' + escape(text(data.title, language)) + '</h2><p>' + escape(text(data.definition, language)) + '</p><span class="w2-transition-cue">' + tr('Veamos cómo se conecta.', 'See how it connects.', language) + '</span></section>' + figureMarkup(data, language) + '</article>';
    }).join('');
    var end = complete ? '<section class="w2-scene w2-ending"><small>' + tr('Semana 2 completada', 'Week 2 complete', language) + '</small><h2>' + tr('Del proyecto organizado<br>a las necesidades comprendidas.', 'From an organized project<br>to understood needs.', language) + '</h2><p>' + tr('El siguiente paso será representar cómo funciona lógicamente el sistema: modelos lógicos, DFD, diccionario de datos y modelado de procesos.', 'The next step is to represent how the system works logically: logical models, DFDs, the data dictionary and process modeling.', language) + '</p><span class="w2-transition-cue">' + tr('Próxima etapa: Semana 3 · Modelado lógico', 'Next stage: Week 3 · Logical modeling', language) + '</span><a href="#week-2" class="w2-next-week" data-w2-return-start>' + tr('Volver al recorrido de la semana 2', 'Return to the Week 2 journey', language) + '</a></section>' : '<section class="w2-pending"><small>' + tr('Implementación en curso', 'Implementation in progress', language) + '</small><h2>' + tr('La historia continúa.', 'The story continues.', language) + '</h2><p>' + tr('Se están integrando los diagramas de esta semana a partir de las instrucciones recibidas.', 'This week’s diagrams are being integrated from the supplied instructions.', language) + '</p></section>';
    var languageControl = '<div class="w2-language" role="group" aria-label="' + tr('Idioma', 'Language', language) + '"><button type="button" data-w2-language="es" aria-pressed="' + (language === 'es') + '">ES</button><button type="button" data-w2-language="en" aria-pressed="' + (language === 'en') + '">EN</button></div>';
    root.innerHTML = languageControl + opening + navigation + lessons + end + '<p class="w2-sr-only w2-live-status" role="status" aria-live="polite"></p>';
    if (!roots.has(root)) {
      root.addEventListener('click', function (event) {
        var languageButton = event.target.closest('[data-w2-language]');
        if (languageButton) {
          event.preventDefault();
          var nextLanguage = languageButton.dataset.w2Language;
          root.dataset.w2LanguageOverride = nextLanguage;
          mount(root, nextLanguage);
          root.querySelector('[data-w2-language="' + nextLanguage + '"]').focus({ preventScroll: true });
          return;
        }
        var returnStart = event.target.closest('[data-w2-return-start]');
        if (returnStart) {
          event.preventDefault();
          root.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
          root.querySelector('h1').setAttribute('tabindex', '-1');
          root.querySelector('h1').focus({ preventScroll: true });
          return;
        }
        var jump = event.target.closest('.w2-route-nav a');
        if (jump) {
          event.preventDefault();
          var target = root.querySelector(jump.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
            target.focus({ preventScroll: true });
          }
          return;
        }
        var button = event.target.closest('button[data-w2-detail], button[data-w2-lens], button[data-w2-compare]');
        if (!button || !root.contains(button)) return;
        event.preventDefault();
        event.stopPropagation();
        var lang = root.dataset.language;
        var figure = button.closest('.w2-figure');
        if (button.dataset.w2Lens) { setLens(figure, button.dataset.w2Lens === 'ai' && figure.dataset.lens !== 'ai', lang); return; }
        if (button.dataset.w2Compare) { openComparison(db.diagrams[button.dataset.w2Compare], lang, button); return; }
        openDetail(button.dataset.w2Detail, { language: lang, ai: figure && figure.dataset.lens === 'ai' }, button);
      });
      roots.set(root, { cleanups: [] });
    }
    var cleanups = [];
    root.querySelectorAll('[data-w2-diagram]').forEach(function (figure) {
      var id = figure.dataset.w2Diagram;
      var custom = window.CST212W2Views && window.CST212W2Views[id];
      if (custom && custom.bind) {
        var cleanup = custom.bind(figure, db.diagrams[id], language, viewApi());
        if (typeof cleanup === 'function') cleanups.push(cleanup);
      }
    });
    roots.get(root).cleanups = cleanups;
    if ('IntersectionObserver' in window) {
      var reveal = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add('w2-is-revealed'); reveal.unobserve(entry.target); }
        });
      }, { threshold: 0.06 });
      root.querySelectorAll('.w2-hierarchy, .w2-arrival, .w2-phase-track').forEach(function (node) { reveal.observe(node); });
      roots.get(root).cleanups.push(function () { reveal.disconnect(); });
    }
  }

  window.CST212Week2 = { mount: mount, diagrams: db.diagrams, concepts: db.concepts };
  function attach() {
    var root = document.querySelector('#week-2 .w1f-next-week-start');
    if (root) mount(root, root.dataset.language || 'es');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attach, { once: true });
  else attach();
  var observer = new MutationObserver(function () {
    var root = document.querySelector('#week-2 .w1f-next-week-start');
    if (root && !root.classList.contains('w2-atlas')) attach();
  });
  var learn = document.getElementById('learnView');
  if (learn) observer.observe(learn, { childList: true, subtree: true });
})();
