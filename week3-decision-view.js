(function (global) {
  'use strict';
  const views = global.CST212W3Views = global.CST212W3Views || {};
  const states = new WeakMap();
  const prefix = 'w3r_';
  function helpers(api) {
    return {
      tr: (es, en) => api.escape(api.tr(es, en)),
      label: value => api.escape(api.text(value)),
      node: (id, label) => api.node(id, 'w3r-detail', label)
    };
  }
  function completeTable(model, api) {
    const h = helpers(api);
    return '<div class="w3r-table-desktop"><table class="w3r-table"><caption>' + h.tr('College Driver: ocho reglas completas. 1 = sí, 0 = no; orden C1, C2, C3.', 'College Driver: eight complete rules. 1 = yes, 0 = no; order C1, C2, C3.') + '</caption><thead><tr><th scope="col">' + h.node(prefix + 'rule', api.tr('Regla', 'Rule')) + '</th>' + model.rules.map(rule => '<th scope="col" data-w3r-key="' + rule.key + '">' + h.node(rule.id, 'R' + rule.number + ' · ' + rule.key) + '</th>').join('') + '</tr></thead><tbody>' + model.conditions.map(condition => '<tr><th scope="row">' + h.node(condition.concept, api.text(condition.label)) + '</th>' + model.rules.map(rule => '<td data-w3r-key="' + rule.key + '">' + h.tr(rule.criteria[condition.key] ? 'Sí' : 'No', rule.criteria[condition.key] ? 'Yes' : 'No') + '</td>').join('') + '</tr>').join('') + '<tr class="w3r-table-actions"><th scope="row">' + h.node(prefix + 'action', api.tr('Descuento', 'Discount')) + '</th>' + model.rules.map(rule => '<td data-w3r-key="' + rule.key + '">' + h.node(rule.actionId, rule.discount + ' %') + '</td>').join('') + '</tr></tbody></table></div>' + branchList(model.rules, model, api, 'table');
  }
  function branchList(rules, model, api, kind) {
    const h = helpers(api);
    return '<div class="w3r-mobile-paths"><p class="w3r-path-heading">' + h.tr(kind === 'tree' ? 'Ocho caminos: curso → historial → edad ≥ 23 → resultado.' : 'Ocho reglas: C1 curso, C2 historial, C3 edad ≥ 23.', kind === 'tree' ? 'Eight paths: course → record → age ≥ 23 → result.' : 'Eight rules: C1 course, C2 record, C3 age ≥ 23.') + '</p><ol class="w3r-paths" aria-label="' + h.tr(kind === 'tree' ? 'Todos los caminos del árbol' : 'Todas las reglas de la tabla', kind === 'tree' ? 'All tree paths' : 'All table rules') + '">' + rules.map(rule => '<li class="w3r-path" data-w3r-key="' + rule.key + '">' + h.node(rule.id, 'R' + rule.number) + model.conditions.map((condition, index) => h.node(condition.concept, 'C' + (index + 1) + ': ' + api.tr(rule.criteria[condition.key] ? 'Sí' : 'No', rule.criteria[condition.key] ? 'Yes' : 'No'))).join('') + h.node(rule.actionId, rule.discount + ' %') + '</li>').join('') + '</ol></div>';
  }
  function completeTree(model, api) {
    const h = helpers(api);
    const levels = [34, 118, 208, 316];
    const lines = [];
    const buttons = [];
    const leaves = [];
    function visit(branch, left, right, depth, path) {
      const x = (left + right) / 2;
      const y = levels[depth];
      if (branch.leaf) {
        const rule = model.rules.find(item => item.id === branch.ruleId);
        leaves.push(rule);
        buttons.push('<div class="w3r-tree-node w3r-leaf" style="left:' + x / 9.6 + '%;top:' + y / 3.6 + '%" data-w3r-key="' + rule.key + '">' + h.node(rule.id, 'R' + rule.number) + h.node(rule.actionId, rule.discount + ' %') + '</div>');
        return;
      }
      buttons.push('<div class="w3r-tree-node w3r-branch" style="left:' + x / 9.6 + '%;top:' + y / 3.6 + '%" data-w3r-prefix="' + path + '">' + h.node(branch.conditionId, api.tr(['¿Curso seguro?', '¿Historial limpio de 3 años?', '¿Edad ≥ 23?'][depth], ['Safe-driving course?', 'Three-year clean record?', 'Age ≥ 23?'][depth])) + '</div>');
      [['1', branch.yes, left, x], ['0', branch.no, x, right]].forEach(([bit, child, a, b]) => {
        const childX = (a + b) / 2;
        const childY = levels[depth + 1];
        const middle = y + (childY - y) / 2;
        const childPath = path + bit;
        lines.push('<g class="w3r-tree-edge" data-w3r-prefix="' + childPath + '"><path d="M ' + x + ' ' + (y + 18) + ' V ' + middle + ' H ' + childX + ' V ' + (childY - 19) + '"/><text x="' + ((x + childX) / 2) + '" y="' + (middle - 6) + '" text-anchor="middle">' + h.tr(bit === '1' ? 'Sí' : 'No', bit === '1' ? 'Yes' : 'No') + '</text></g>');
        visit(child, a, b, depth + 1, childPath);
      });
    }
    visit(model.tree, 0, 960, 0, '');
    return '<div class="w3r-tree-desktop"><div class="w3r-tree-canvas"><svg class="w3r-tree-lines" viewBox="0 0 960 360" role="img" aria-label="' + h.tr('Árbol completo con tres condiciones y ocho hojas', 'Complete tree with three conditions and eight leaves') + '"><title>' + h.tr('Árbol College Driver', 'College Driver tree') + '</title><desc>' + h.tr('Se evalúa curso, después historial de tres años y después edad de al menos 23. Sí sale a la izquierda, no a la derecha. Los botones de cada condición, regla y resultado abren su explicación.', 'Evaluate the course, then the three-year record, then age of at least 23. Yes branches left; no branches right. Each condition, rule and result button opens its explanation.') + '</desc>' + lines.join('') + '</svg>' + buttons.join('') + '</div></div>' + branchList(leaves, model, api, 'tree');
  }
  views['07'] = {
    render(data, lang, api) {
      const h = helpers(api);
      const model = global.CST212W3Decision.model;
      const yesNo = '<option value="yes">' + h.tr('Sí', 'Yes') + '</option><option value="no">' + h.tr('No', 'No') + '</option>';
      return '<div class="w3r" lang="' + (lang === 'en' ? 'en' : 'es') + '"><div class="w3r-native"><div class="w3r-intro"><div>' + h.node(prefix + 'decision', 'College Driver Insurance') + '<p>' + h.tr('5 % por criterio cumplido + 5 % adicional si se cumplen los tres.', '5% for each criterion met + an extra 5% when all three are met.') + '</p></div>' + h.node(prefix + 'bonus', api.tr('¿Por qué 20 % y no 15 %?', 'Why 20% rather than 15%?')) + '</div><fieldset class="w3r-profile"><legend>' + h.tr('Perfil de ejemplo', 'Example profile') + '</legend><label class="w3r-field"><span>' + h.tr('C1 · Curso de manejo seguro', 'C1 · Safe-driving course') + '</span><select class="w3r-control" data-w3r-input="course" aria-label="' + h.tr('Perfil: tomó el curso de manejo seguro', 'Profile: took the safe-driving course') + '">' + yesNo + '</select></label><label class="w3r-field"><span>' + h.tr('C2 · Sin multas ni accidentes en 3 años', 'C2 · No tickets or accidents in 3 years') + '</span><select class="w3r-control" data-w3r-input="clean" aria-label="' + h.tr('Perfil: sin multas ni accidentes en los últimos tres años', 'Profile: no tickets or accidents during the last three years') + '">' + yesNo + '</select></label><label class="w3r-field w3r-age"><span>' + h.tr('C3 · Edad en años (umbral: 23)', 'C3 · Age in years (threshold: 23)') + '</span><input class="w3r-control" data-w3r-input="age" type="number" inputmode="numeric" min="0" max="120" step="1" value="22" required aria-label="' + h.tr('Perfil: edad en años enteros, de 0 a 120', 'Profile: age in whole years, from 0 to 120') + '" aria-invalid="false"></label><div class="w3r-presets" role="group" aria-label="' + h.tr('Cambiar solo la edad para explorar el umbral', 'Change only the age to explore the threshold') + '"><button type="button" class="w3r-control" data-w3r-age="22" aria-label="' + h.tr('Establecer edad en 22 años y conservar los otros criterios', 'Set age to 22 and retain the other criteria') + '">22</button><button type="button" class="w3r-control" data-w3r-age="23" aria-label="' + h.tr('Establecer edad en 23 años y conservar los otros criterios', 'Set age to 23 and retain the other criteria') + '">23</button></div></fieldset><p class="w3r-input-note">' + h.tr('El campo admite enteros de 0 a 120 para este ejercicio; ese rango no define elegibilidad del seguro.', 'The field accepts integers from 0 to 120 for this exercise; this range does not define insurance eligibility.') + '</p><div class="w3r-output" role="status" aria-live="polite" aria-atomic="true"></div><div class="w3r-representation-bar"><div class="w3r-switch" role="group" aria-label="' + h.tr('Representación de las mismas reglas', 'Representation of the same rules') + '"><button type="button" class="w3r-control" data-w3r-representation="table" aria-pressed="true" aria-label="' + h.tr('Mostrar tabla de decisión y conservar el perfil', 'Show decision table and retain the profile') + '">' + h.tr('Tabla', 'Table') + '</button><button type="button" class="w3r-control" data-w3r-representation="tree" aria-pressed="false" aria-label="' + h.tr('Mostrar árbol de decisión y conservar el perfil', 'Show decision tree and retain the profile') + '">' + h.tr('Árbol', 'Tree') + '</button></div><span class="w3r-hint">' + h.tr('Selecciona un concepto para abrir su explicación.', 'Select a concept to open its explanation.') + '</span></div><div class="w3r-representations"><div class="w3r-representation" data-w3r-panel="table">' + completeTable(model, api) + '</div><div class="w3r-representation" data-w3r-panel="tree" hidden>' + completeTree(model, api) + '</div></div><div class="w3r-comparison">' + h.node(prefix + 'comparison', api.tr('Tabla y árbol: fortalezas y límites', 'Table and tree: strengths and limits')) + '<p>' + h.tr('Tabla: compara combinaciones y cobertura. Árbol: sigue una secuencia y explica un camino.', 'Table: compare combinations and coverage. Tree: follow a sequence and explain one path.') + '</p></div><p class="w3r-coverage-note">' + h.tr('Aquí conservamos las ocho combinaciones: compartir un descuento no las vuelve idénticas. Otras tablas pueden admitir reducciones justificadas.', 'Here we retain all eight combinations: sharing a discount does not make them identical. Other tables may allow justified reductions.') + '</p></div><div class="w3r-support">' + api.support(data) + '</div></div>';
    },
    bind(figure, data, lang, api) {
      const root = figure.querySelector('.w3r');
      if (!root) return function () {};
      const previous = states.get(figure);
      if (previous && previous.cleanup) previous.cleanup();
      const state = previous || { profile: { ...global.CST212W3Decision.model.defaultProfile }, representation: 'table' };
      states.set(figure, state);
      const h = helpers(api);
      const ageInput = root.querySelector('[data-w3r-input="age"]');
      const output = root.querySelector('.w3r-output');
      function update() {
        const result = global.CST212W3Decision.evaluate(state.profile);
        root.querySelector('[data-w3r-input="course"]').value = state.profile.course ? 'yes' : 'no';
        root.querySelector('[data-w3r-input="clean"]').value = state.profile.clean ? 'yes' : 'no';
        if (ageInput.value !== String(state.profile.age)) ageInput.value = String(state.profile.age);
        ageInput.setAttribute('aria-invalid', result.valid ? 'false' : 'true');
        ageInput.setCustomValidity(result.valid ? '' : api.tr('Introduce una edad entera entre 0 y 120.', 'Enter a whole-number age between 0 and 120.'));
        root.querySelectorAll('[data-w3r-age]').forEach(button => button.setAttribute('aria-pressed', String(result.valid && Number(button.dataset.w3rAge) === result.age)));
        output.innerHTML = result.valid
          ? '<strong class="w3r-result">' + h.tr('Descuento', 'Discount') + ': ' + h.node(result.actionId, result.discount + ' %') + '</strong><span>' + h.node(result.ruleId, api.tr('Regla coincidente', 'Matching rule') + ' · ' + result.key) + ' <span class="w3r-breakdown">' + result.count + ' × 5 % + ' + result.bonusDiscount + ' % = ' + result.discount + ' %</span></span>'
          : '<strong class="w3r-invalid">' + h.tr('Edad inválida: introduce un entero entre 0 y 120.', 'Invalid age: enter an integer between 0 and 120.') + '</strong><span>' + h.tr('Resultado sin calcular; ningún camino está seleccionado.', 'Result not calculated; no path is selected.') + '</span>';
        root.querySelectorAll('[data-w3r-key]').forEach(element => {
          const active = result.valid && element.dataset.w3rKey === result.key;
          element.classList.toggle('w3r-match', active);
          if (active) element.setAttribute('aria-current', 'true');
          else element.removeAttribute('aria-current');
        });
        root.querySelectorAll('[data-w3r-prefix]').forEach(element => element.classList.toggle('w3r-match', result.valid && result.key.startsWith(element.dataset.w3rPrefix)));
        root.querySelectorAll('[data-w3r-panel]').forEach(panel => { panel.hidden = panel.dataset.w3rPanel !== state.representation; });
        root.querySelectorAll('[data-w3r-representation]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.w3rRepresentation === state.representation)));
      }
      function onInput(event) {
        const control = event.target.closest('[data-w3r-input]');
        if (!control || !root.contains(control)) return;
        const field = control.dataset.w3rInput;
        state.profile[field] = field === 'age' ? control.value : control.value === 'yes';
        update();
      }
      function onClick(event) {
        const control = event.target.closest('[data-w3r-representation], [data-w3r-age]');
        if (!control || !root.contains(control)) return;
        if (control.hasAttribute('data-w3r-representation')) state.representation = control.dataset.w3rRepresentation;
        else state.profile.age = Number(control.dataset.w3rAge);
        update();
      }
      figure.addEventListener('input', onInput);
      figure.addEventListener('change', onInput);
      figure.addEventListener('click', onClick);
      state.cleanup = function () {
        figure.removeEventListener('input', onInput);
        figure.removeEventListener('change', onInput);
        figure.removeEventListener('click', onClick);
      };
      update();
      return state.cleanup;
    }
  };
})(window);
