(function (global) {
  'use strict';
  var views = global.CST212W3Views = global.CST212W3Views || {};
  var instance = 0;

  function modelFor(data) {
    return global.CST212_W3.models[data.model || 'w3p_order'];
  }

  function flowchart(model, api, uid) {
    var esc = api.escape;
    var geometry = {
      start: '<rect x="241" y="10" width="118" height="34" rx="17"',
      receive: '<polygon points="214,66 400,66 386,106 200,106"',
      inventory: '<rect x="198" y="128" width="204" height="42" rx="2"',
      available: '<polygon points="300,192 370,228 300,264 230,228"',
      ship: '<rect x="36" y="291" width="218" height="46" rx="2"',
      unavailable: '<polygon points="363,291 568,291 547,337 342,337"',
      end: '<rect x="241" y="389" width="118" height="32" rx="16"'
    };
    var routes = {
      start_receive: 'M300 44 V62',
      receive_inventory: 'M300 106 V124',
      inventory_available: 'M300 170 V188',
      available_ship: 'M230 228 H145 V287',
      available_unavailable: 'M370 228 H455 V287',
      ship_end: 'M145 337 V367 H300 V385',
      unavailable_end: 'M455 337 V367 H300 V385'
    };
    var description = api.tr('Inicio, recibir pedido, consultar inventario y decidir disponibilidad. S\u00ed: crear orden de env\u00edo. No: enviar aviso de no disponibilidad. Ambos caminos llegan a Fin. Cada paso tiene un bot\u00f3n de detalle.', 'Start, receive order, check inventory, and decide availability. Yes: create shipping order. No: send unavailable message. Both paths reach End. Each step has a detail button.');
    return '<div class="w3p-flowchart">' +
      '<svg class="w3p-svg" viewBox="0 0 600 424" role="img" aria-labelledby="' + uid + '-title ' + uid + '-desc">' +
      '<title id="' + uid + '-title">' + esc(api.tr('Flujo de procesamiento del pedido', 'Order processing flow')) + '</title>' +
      '<desc id="' + uid + '-desc">' + esc(description) + '</desc>' +
      '<defs><marker id="' + uid + '-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="w3p-arrowhead" d="M0 0 L8 4 L0 8 Z"/></marker></defs>' +
      model.edges.map(function (edge) {
        return '<path class="w3p-edge" data-w3p-edge="' + edge.id + '" d="' + routes[edge.id] + '" marker-end="url(#' + uid + '-arrow)"/>';
      }).join('') +
      model.steps.map(function (step) {
        return geometry[step.id] + ' class="w3p-shape" data-w3p-step="' + step.id + '"/>';
      }).join('') + '</svg>' +
      model.steps.map(function (step) {
        return '<div class="w3p-hit w3p-hit--' + step.id + '" data-w3p-step="' + step.id + '">' + api.node(step.concept, 'w3p-step', api.text(step.label)) + '</div>';
      }).join('') +
      '<span class="w3p-branch w3p-branch--yes" data-w3p-branch="yes">' + esc(api.tr('S\u00ed', 'Yes')) + '</span>' +
      '<span class="w3p-branch w3p-branch--no" data-w3p-branch="no">' + esc(api.tr('No', 'No')) + '</span></div>';
  }

  views['06'] = {
    qa: {
      root: '[data-w3p-root]',
      model: 'w3p_order',
      viewControl: '[data-w3p-view]',
      viewValues: ['flowchart', 'pseudocode'],
      viewState: 'data-w3p-mode',
      availabilityControl: '[data-w3p-availability]',
      availabilityValues: ['yes', 'no'],
      availabilityState: 'data-w3p-selected',
      panel: '[data-w3p-panel]',
      step: '[data-w3p-step]',
      edge: '[data-w3p-edge]',
      line: '[data-w3p-line]',
      highlightState: 'data-active',
      result: '[data-w3p-result]',
      detail: '[data-w3-detail]',
      hostLensState: 'data-lens',
      hostLensEvent: 'w3:lenschange'
    },
    render: function (data, lang, api) {
      var model = modelFor(data);
      var esc = api.escape;
      var tr = api.tr;
      var uid = 'w3p-' + (++instance);
      return '<div class="w3p" data-w3p-root data-w3p-mode="flowchart" data-w3p-selected="yes">' +
        '<div class="w3p-toolbar">' +
        '<div class="w3p-segment" role="group" aria-label="' + esc(tr('Representaci\u00f3n de la misma l\u00f3gica', 'Representation of the same logic')) + '">' +
        '<button type="button" data-w3p-view="flowchart" aria-pressed="true" aria-controls="' + uid + '-flowchart" aria-label="' + esc(tr('Mostrar diagrama de flujo', 'Show flowchart')) + '">' + esc(tr('Diagrama de flujo', 'Flowchart')) + '</button>' +
        '<button type="button" data-w3p-view="pseudocode" aria-pressed="false" aria-controls="' + uid + '-pseudocode" aria-label="' + esc(tr('Mostrar pseudoc\u00f3digo', 'Show pseudocode')) + '">' + esc(tr('Pseudoc\u00f3digo', 'Pseudocode')) + '</button></div>' +
        '<div class="w3p-exercise"><span>' + esc(tr('\u00bfDisponible?', 'Available?')) + '</span>' +
        '<div class="w3p-segment" role="group" aria-label="' + esc(tr('Probar disponibilidad del pedido', 'Try order availability')) + '">' +
        '<button type="button" data-w3p-availability="yes" aria-pressed="true" aria-label="' + esc(tr('Probar la rama S\u00ed: hay disponibilidad', 'Try the Yes branch: inventory is available')) + '">' + esc(tr('S\u00ed', 'Yes')) + '</button>' +
        '<button type="button" data-w3p-availability="no" aria-pressed="false" aria-label="' + esc(tr('Probar la rama No: no hay disponibilidad', 'Try the No branch: inventory is unavailable')) + '">' + esc(tr('No', 'No')) + '</button></div></div></div>' +
        '<div class="w3p-stage">' +
        '<div id="' + uid + '-flowchart" class="w3p-panel" data-w3p-panel="flowchart" role="group" aria-label="' + esc(tr('Ejemplo de diagrama de flujo: procesar pedido', 'Flowchart example: process order')) + '">' +
        flowchart(model, api, uid) + '</div>' +
        '<div id="' + uid + '-pseudocode" class="w3p-panel w3p-pseudocode" data-w3p-panel="pseudocode" role="group" aria-label="' + esc(tr('Pseudoc\u00f3digo del mismo pedido', 'Pseudocode for the same order')) + '" hidden>' +
        '<ol class="w3p-lines" aria-label="' + esc(tr('L\u00edneas de l\u00f3gica estructurada, cada una abre su concepto', 'Structured logic lines, each opens its concept')) + '">' +
        model.lines.map(function (line, index) {
          return '<li class="w3p-line' + (line.indent ? ' w3p-line--indented' : '') + '" data-w3p-line="' + line.id + '"><span class="w3p-line-number" aria-hidden="true">' + (index + 1) + '</span>' + api.node(line.concept, 'w3p-line-button', api.text(line.text)) + '</li>';
        }).join('') + '</ol>' +
        '<p class="w3p-note">' + esc(tr('L\u00f3gica estructurada, independiente de un lenguaje de programaci\u00f3n.', 'Structured logic, independent of a programming language.')) + '</p></div></div>' +
        '<p class="w3p-result" data-w3p-result role="status" aria-live="polite" aria-atomic="true">' + esc(api.text(model.outcomes.yes)) + '</p>' +
        '<p class="w3p-hint">' + esc(tr('Cambia S\u00ed/No y alterna la vista: se conserva el recorrido. Pulsa un paso o una l\u00ednea para explorar su significado.', 'Change Yes/No and switch views: the path is preserved. Select a step or a line to explore its meaning.')) + '</p>' +
        '<div class="w3p-compare" role="group" aria-label="' + esc(tr('Comparaciones y conceptos del ejemplo', 'Example comparisons and concepts')) + '">' +
        api.node('w3p_dfd', 'w3p-link', tr('DFD \u2260 diagrama de flujo', 'DFD \u2260 flowchart')) +
        api.node('w3p_comparison', 'w3p-link', tr('Diagrama, pseudoc\u00f3digo y c\u00f3digo fuente', 'Flowchart, pseudocode, and source code')) +
        api.node('w3p_blackbox', 'w3p-link', tr('Abrir la caja negra', 'Open the black box')) +
        api.node('w3p_arrows', 'w3p-link', tr('Leer las flechas', 'Read the arrows')) + '</div>' +
        '<div class="w3p-support">' + api.support(data) + '</div></div>';
    },

    bind: function (figure, data, lang, api) {
      var root = figure.querySelector('[data-w3p-root]');
      if (!root) { return function () {}; }
      var model = modelFor(data);
      var disposed = false;

      function showView(mode) {
        root.dataset.w3pMode = mode;
        root.querySelectorAll('[data-w3p-view]').forEach(function (button) {
          button.setAttribute('aria-pressed', String(button.dataset.w3pView === mode));
        });
        root.querySelectorAll('[data-w3p-panel]').forEach(function (panel) {
          panel.hidden = panel.dataset.w3pPanel !== mode;
        });
      }
      function showBranch(branch) {
        var path = model.trace(branch);
        root.dataset.w3pSelected = branch;
        root.querySelectorAll('[data-w3p-availability]').forEach(function (button) {
          button.setAttribute('aria-pressed', String(button.dataset.w3pAvailability === branch));
        });
        [ ['step', path.steps], ['edge', path.edges], ['line', path.lines], ['branch', [branch]] ].forEach(function (entry) {
          root.querySelectorAll('[data-w3p-' + entry[0] + ']').forEach(function (element) {
            element.setAttribute('data-active', String(entry[1].indexOf(element.getAttribute('data-w3p-' + entry[0])) !== -1));
          });
        });
        root.querySelector('[data-w3p-result]').textContent = api.text(path.outcome);
      }
      function onClick(event) {
        if (disposed || !event.target || typeof event.target.closest !== 'function') { return; }
        var control = event.target.closest('[data-w3p-view], [data-w3p-availability]');
        if (!control || !root.contains(control)) { return; }
        if (control.dataset.w3pView) {
          showView(control.dataset.w3pView);
        } else {
          showBranch(control.dataset.w3pAvailability);
        }
      }

      showView(root.dataset.w3pMode === 'pseudocode' ? 'pseudocode' : 'flowchart');
      showBranch(root.dataset.w3pSelected === 'no' ? 'no' : 'yes');
      figure.addEventListener('click', onClick);
      return function () {
        if (disposed) { return; }
        disposed = true;
        figure.removeEventListener('click', onClick);
      };
    }
  };
}(window));
