(function (global) {
  'use strict';

  const views = global.CST212W3Views = global.CST212W3Views || {};
  const modelFor = data => global.CST212_W3.models[data.model || 'w3b_model'];
  const raw = (api, value) => api.text(value);
  const safe = (api, value) => api.escape(value);
  const tr = (api, es, en) => safe(api, api.tr(es, en));
  const node = (api, id, className, label) => api.node(id, className, label);

  function port(incoming) {
    return '<span class="w3b-port' + (incoming ? ' w3b-port-input' : '') + '" aria-hidden="true"><span class="w3b-arrow"></span></span>';
  }

  function flow(api, concept, label, external) {
    return '<div class="w3b-flow' + (external ? ' w3b-flow-external' : '') + '">' +
      '<span class="w3b-arrow" aria-hidden="true"></span>' +
      node(api, concept, 'w3b-flow-label', label) + '</div>';
  }

  function interfaceSummary(api, inputs, outputs) {
    const empty = api.tr('ninguna', 'none');
    const label = api.tr('Interfaz externa', 'External interface') + ': ' +
      api.tr('entradas', 'inputs') + ' ' + (inputs.join(', ') || empty) + ' · ' +
      api.tr('salidas', 'outputs') + ' ' + (outputs.join(', ') || empty);
    return node(api, 'w3b_interface', 'w3b-interface-summary', label);
  }

  function parentDiagram(api, model) {
    return '<div class="w3b-level w3b-parent">' +
      '<h4 class="w3b-level-title">' + tr(api, 'Nivel padre', 'Parent level') + '</h4>' +
      '<div class="w3b-dfd">' +
        '<div class="w3b-edge w3b-input">' + flow(api, 'w3b_input_a', api.tr('Entrada A', 'Input A'), true) + '</div>' +
        '<div class="w3b-boundary w3b-boundary-parent">' +
          node(api, 'w3b_interface', 'w3b-boundary-label', api.tr('Límite de 2.0', 'Boundary of 2.0')) +
          '<div class="w3b-parent-chain">' + port(true) + node(api, 'w3b_parent', 'w3b-process', api.tr('Proceso 2.0', 'Process 2.0')) + port(false) + '</div>' +
        '</div>' +
        '<div class="w3b-edge">' + flow(api, 'w3b_output_b', api.tr('Salida B', 'Output B'), true) + '</div>' +
      '</div>' + interfaceSummary(api, model.parent.inputs, model.parent.outputs) + '</div>';
  }

  function candidateDiagram(api, model, candidate) {
    const incoming = candidate.inputs.length
      ? flow(api, 'w3b_input_a', api.tr('Entrada A', 'Input A'), true)
      : node(api, 'w3b_missing_input', 'w3b-no-input', api.tr('Sin entrada externa', 'No external input'));
    const outgoing = candidate.outputs.map(function (value) {
      return flow(api, value === 'B' ? 'w3b_output_b' : 'w3b_new_output',
        api.tr('Salida ', 'Output ') + value, true);
    }).join('');
    const chain = model.processes.map(function (processId, index) {
      const process = node(api, processId, 'w3b-process', api.tr('Proceso ', 'Process ') + '2.' + (index + 1));
      const next = candidate.internalFlows[index];
      return process + (index < model.processes.length - 1
        ? flow(api, next.concept, raw(api, next.label), false) : '');
    }).join('');
    const extra = candidate.internalFlows[2];
    const bypass = extra ? '<div class="w3b-bypass">' +
      '<span class="w3b-bypass-line" aria-hidden="true"></span>' +
      '<span class="w3b-bypass-arrow" aria-hidden="true"></span>' +
      node(api, extra.concept, 'w3b-flow-label', raw(api, extra.label)) + '</div>' : '';
    return '<h4 class="w3b-level-title">' + safe(api, raw(api, candidate.label)) + '</h4>' +
      '<div class="w3b-dfd">' +
        '<div class="w3b-edge w3b-input">' + incoming + '</div>' +
        '<div class="w3b-boundary w3b-boundary-child">' +
          node(api, 'w3b_child', 'w3b-boundary-label', api.tr('Diagrama hijo de 2.0', 'Child diagram of 2.0')) +
          '<div class="w3b-chain">' + (candidate.inputs.length ? port(true) : '<span aria-hidden="true"></span>') + chain + port(false) + bypass + '</div>' +
        '</div>' +
        '<div class="w3b-edge w3b-outputs">' + outgoing + '</div>' +
      '</div>' + interfaceSummary(api, candidate.inputs, candidate.outputs);
  }

  views['04'] = {
    // Public selectors and expected states for direct integration QA.
    qa: {
      root: '.w3b',
      controls: {
        candidate: { selector: '[data-w3b-candidate]', event: 'change', values: ['missing-a', 'new-x', 'internal-detail'] },
        answer: { selector: '[data-w3b-answer]', event: 'click', values: ['yes', 'no'], selectedAttribute: 'aria-pressed' },
        detail: { selector: '[data-w3-detail]', owner: 'main' },
        lens: { selector: '[data-w3-lens]', owner: 'main', values: ['base', 'ai'], event: 'w3:lenschange' }
      },
      candidateRegion: '[data-w3b-candidate-diagram]',
      feedback: { selector: '[data-w3b-feedback]', stateAttribute: 'data-result', states: ['correct', 'reconsider'], initiallyEmpty: true, resetOnCandidateChange: true },
      lensState: { attribute: 'data-lens', aiClass: 'is-ai', preserveCandidate: true, preserveFeedback: true, recreatesExample: false },
      cases: [
        { candidate: 'missing-a', answer: 'no', balanced: false },
        { candidate: 'new-x', answer: 'no', balanced: false },
        { candidate: 'internal-detail', answer: 'yes', balanced: true }
      ],
      keyboard: { candidate: 'native select', answer: 'native button', detail: 'main delegated button handling' },
      cleanup: 'Removes figure-scoped change and click listeners.'
    },
    render: function (data, lang, api) {
      const model = modelFor(data);
      const candidate = model.candidates[0];
      const options = model.candidates.map(function (item) {
        return '<option value="' + safe(api, item.id) + '">' + safe(api, raw(api, item.label)) + '</option>';
      }).join('');
      return '<div class="w3b" lang="' + (lang === 'en' ? 'en' : 'es') + '">' +
        '<div class="w3b-exercise">' +
          '<div class="w3b-toolbar">' +
            '<div><p class="w3b-kicker">' + tr(api, 'Ejercicio didáctico · Interfaz A/B', 'Teaching exercise · A/B interface') + '</p>' +
            '<p class="w3b-intro">' + tr(api, 'Compara lo que cruza el límite en ambos niveles.', 'Compare what crosses the boundary at both levels.') + '</p></div>' +
            '<label class="w3b-select-label">' + tr(api, 'Explorar', 'Explore') +
              '<select class="w3b-select" data-w3b-candidate aria-label="' + tr(api, 'Seleccionar candidato de diagrama hijo', 'Select a child diagram candidate') + '">' + options + '</select>' +
            '</label>' +
          '</div>' +
          '<div class="w3b-comparison">' + parentDiagram(api, model) +
            '<div class="w3b-level w3b-child" data-w3b-candidate-diagram>' + candidateDiagram(api, model, candidate) + '</div>' +
          '</div>' +
          '<div class="w3b-legend">' +
            node(api, 'w3b_interface', 'w3b-key w3b-key-external', api.tr('Cruza el límite', 'Crosses the boundary')) +
            node(api, 'w3b_internal', 'w3b-key w3b-key-internal', api.tr('Permanece dentro', 'Stays inside')) +
            '<span>' + tr(api, 'Flechas = datos, no orden de ejecución.', 'Arrows = data, not execution order.') + '</span>' +
          '</div>' +
          '<p class="w3b-note">' + tr(api, 'Los procesos 2.1–2.3 y Datos I–III son ilustrativos. Esta interfaz A/B no representa el inventario completo de Kitchen Gadgets.', 'Processes 2.1–2.3 and Data I–III are illustrative. This A/B interface does not represent the complete Kitchen Gadgets inventory.') + '</p>' +
          '<div class="w3b-answer-row">' +
            '<span class="w3b-question">' + tr(api, '¿Está equilibrado?', 'Is it balanced?') + '</span>' +
            '<div class="w3b-answers" role="group" aria-label="' + tr(api, 'Responder si el candidato está equilibrado', 'Answer whether the candidate is balanced') + '">' +
              '<button type="button" class="w3b-answer" data-w3b-answer="yes" aria-pressed="false" aria-label="' + tr(api, 'Sí, el candidato está equilibrado', 'Yes, the candidate is balanced') + '">' + tr(api, 'Sí', 'Yes') + '</button>' +
              '<button type="button" class="w3b-answer" data-w3b-answer="no" aria-pressed="false" aria-label="' + tr(api, 'No, el candidato no está equilibrado', 'No, the candidate is not balanced') + '">' + tr(api, 'No', 'No') + '</button>' +
            '</div>' +
          '</div>' +
          '<div class="w3b-feedback" data-w3b-feedback role="status" aria-live="polite" aria-atomic="true"></div>' +
        '</div>' +
        '<div class="w3b-support">' + api.support(data) + '</div>' +
      '</div>';
    },
    bind: function (figure, data, lang, api) {
      const root = figure.querySelector('.w3b');
      if (!root) return function () {};
      const model = modelFor(data);
      const select = root.querySelector('[data-w3b-candidate]');
      const diagram = root.querySelector('[data-w3b-candidate-diagram]');
      const feedback = root.querySelector('[data-w3b-feedback]');
      const answers = root.querySelectorAll('[data-w3b-answer]');
      const selected = () => model.candidates.find(item => item.id === select.value);
      function resetFeedback() {
        feedback.textContent = '';
        delete feedback.dataset.result;
        answers.forEach(button => button.setAttribute('aria-pressed', 'false'));
      }
      function onChange(event) {
        if (event.target !== select) return;
        const candidate = selected();
        if (!candidate) return;
        diagram.innerHTML = candidateDiagram(api, model, candidate);
        resetFeedback();
      }
      function onAnswer(event) {
        const button = event.target.closest && event.target.closest('[data-w3b-answer]');
        if (!button || !root.contains(button)) return;
        const candidate = selected();
        if (!candidate) return;
        const result = model.evaluateCandidate(model.parent, candidate);
        const correct = (button.dataset.w3bAnswer === 'yes') === result.balanced;
        answers.forEach(answer => answer.setAttribute('aria-pressed', String(answer === button)));
        feedback.dataset.result = correct ? 'correct' : 'reconsider';
        feedback.textContent = (correct ? api.tr('Correcto. ', 'Correct. ') : api.tr('Revisemos. ', 'Let’s review. ')) + raw(api, candidate.feedback);
      }
      figure.addEventListener('change', onChange);
      figure.addEventListener('click', onAnswer);
      return function cleanup() {
        figure.removeEventListener('change', onChange);
        figure.removeEventListener('click', onAnswer);
      };
    }
  };
}(window));
