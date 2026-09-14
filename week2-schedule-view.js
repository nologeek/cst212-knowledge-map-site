(function () {
  'use strict';
  const bindings = new WeakMap();

  // Forward/backward passes operate on copies. No scenario writes to the source model.
  function calculate(model, eDuration) {
    const byCode = Object.create(null);
    model.tasks.forEach(function (source) {
      if (byCode[source.code]) throw new Error('D04: duplicate task identifier.');
      const duration = source.code === model.scenario.task ? eDuration : source.duration;
      if (!Number.isFinite(duration) || duration < 0) throw new Error('D04: invalid duration.');
      byCode[source.code] = Object.assign({}, source, {
        duration: duration, predecessors: source.predecessors.slice(), successors: [],
        remaining: source.predecessors.length, es: 0, ef: 0, ls: 0, lf: 0, float: 0
      });
    });
    const tasks = model.tasks.map(function (task) { return byCode[task.code]; });
    const edges = [];
    tasks.forEach(function (task) {
      task.predecessors.forEach(function (code) {
        if (!byCode[code]) throw new Error('D04: unknown predecessor.');
        byCode[code].successors.push(task.code);
        edges.push({ from: code, to: task.code });
      });
    });
    const queue = tasks.filter(function (task) { return task.remaining === 0; });
    const order = [];
    for (let index = 0; index < queue.length; index += 1) {
      const task = queue[index];
      task.es = Math.max(0, ...task.predecessors.map(function (code) { return byCode[code].ef; }));
      task.ef = task.es + task.duration;
      order.push(task);
      task.successors.forEach(function (code) {
        byCode[code].remaining -= 1;
        if (byCode[code].remaining === 0) queue.push(byCode[code]);
      });
    }
    if (order.length !== tasks.length) throw new Error('D04: cyclic dependencies.');
    const leaves = tasks.filter(function (task) { return !task.successors.length; });
    const finish = Math.max(0, ...leaves.map(function (task) { return task.ef; }));
    order.slice().reverse().forEach(function (task) {
      task.lf = task.successors.length ? Math.min(...task.successors.map(function (code) { return byCode[code].ls; })) : finish;
      task.ls = task.lf - task.duration;
      task.float = task.ls - task.es;
      task.critical = task.float === 0;
    });
    const paths = [];
    function walk(code, codes, duration) {
      const task = byCode[code];
      const nextCodes = codes.concat(code);
      const total = duration + task.duration;
      if (!task.successors.length) paths.push({ codes: nextCodes, duration: total });
      else task.successors.forEach(function (next) { walk(next, nextCodes, total); });
    }
    tasks.filter(function (task) { return !task.predecessors.length; }).forEach(function (task) { walk(task.code, [], 0); });
    return { tasks: tasks, byCode: byCode, edges: edges, leaves: leaves, finish: finish, paths: paths };
  }

  function helpers(language, api) {
    return {
      tr: (es, en) => api.escape(api.tr(es, en, language)),
      text: value => api.escape(api.text(value, language)),
      escape: value => api.escape(String(value)),
      node: (id, className) => api.node(id, language, className || 'w2s-concept-button')
    };
  }
  function dependency(from, to, h, className) {
    const label = h.tr('Dependencia: ', 'Dependency: ') + h.escape(from) + ' → ' + h.escape(to) + '. ' + h.tr('Fin a inicio; abrir explicación.', 'Finish to start; open explanation.');
    return '<button type="button" class="w2s-dependency-button ' + (className || '') + '" data-w2-detail="w2s_dependency" aria-label="' + label + '">' + h.escape(from) + ' → ' + h.escape(to) + '</button>';
  }
  function predecessors(task, h) {
    return task.predecessors.length ? task.predecessors.map(function (code) { return dependency(code, task.code, h); }).join(' ') : h.tr('Ninguna', 'None');
  }
  function taskButton(task, h, className) {
    return h.node(task.concept, 'w2s-task-button' + (className ? ' ' + className : ''));
  }
  function badge(task, h) {
    return '<span class="w2s-task-status">' + (task.critical ? h.tr('Crítica · holgura 0', 'Critical · float 0') : h.tr('Holgura ', 'Float ') + task.float + h.tr(' días', ' days')) + '</span>';
  }

  function sourceMarkup(data, h) {
    return '<section class="w2s-source" aria-label="' + h.tr('Datos originales de Eden Bay', 'Original Eden Bay data') + '">' +
      '<header class="w2s-section-heading"><div><p class="w2s-eyebrow">' + h.tr('Fuente: Eden Bay, proporcionada por el usuario', 'Source: Eden Bay, supplied by the user') + '</p><h3>' + h.tr('Datos originales: siempre a la vista', 'Original data: always visible') + '</h3></div>' + h.node('w2s_taskdata') + '</header>' +
      '<p class="w2s-note">' + h.tr('Estas duraciones y dependencias se conservan en todas las vistas. No se proporcionó una URL del caso.', 'These durations and dependencies are preserved in every view. No case URL was supplied.') + '</p>' +
      '<div class="w2s-table-scroll" role="region" tabindex="0" aria-label="' + h.tr('Tabla de datos originales; desplazamiento horizontal disponible', 'Original data table; horizontal scrolling available') + '"><table class="w2s-source-table"><caption class="w2s-sr-only">' + h.tr('Eden Bay: tareas, duraciones originales y predecesoras', 'Eden Bay: tasks, original durations, and predecessors') + '</caption><thead><tr><th scope="col">' + h.tr('Tarea', 'Task') + '</th><th scope="col">' + h.tr('Trabajo indicado en la fuente', 'Work specified in the source') + '</th><th scope="col">' + h.tr('Días base', 'Base days') + '</th><th scope="col">' + h.tr('Predecesoras', 'Predecessors') + '</th></tr></thead><tbody>' +
      data.schedule.tasks.map(function (task) {
        return '<tr><th scope="row"><button type="button" class="w2s-code w2s-source-task" data-w2-detail="' + h.escape(task.concept) + '" aria-label="' + h.escape(task.code) + ': ' + h.text(task.label) + '">' + h.escape(task.code) + '</button></th><td>' + h.text(task.label) + '</td><td>' + task.duration + '</td><td>' + predecessors(task, h) + '</td></tr>';
      }).join('') + '</tbody></table></div><p class="w2s-source-rule">' + h.tr('B termina independientemente. G depende de D y F. No hay conexión B → G.', 'B finishes independently. G depends on D and F. There is no B → G connection.') + '</p></section>';
  }

  function summaryMarkup(result, base, activeScenario, h) {
    const g = result.byCode.G;
    return '<div class="w2s-summary"><div><span>' + h.tr('Cierre proyectado', 'Projected completion') + '</span><strong>' + result.finish + '<small>' + h.tr(' días', ' days') + '</small></strong><p>' + (activeScenario ? h.tr('Escenario E7 · base conservada: ', 'E7 scenario · preserved base: ') + base.finish : h.tr('Caso base · E = 5 días', 'Base case · E = 5 days')) + '</p></div><div><span>' + h.tr('Inicio temprano de G', 'G early start') + '</span><strong>' + h.tr('Día ', 'Day ') + g.es + '</strong><p>max(D:' + result.byCode.D.ef + ', F:' + result.byCode.F.ef + ')</p></div><div><span>' + h.tr('Cierre de todo el trabajo', 'Completion of all work') + '</span><strong class="w2s-formula">max(B, G)</strong><p>max(' + result.byCode.B.ef + ', ' + g.ef + ') = ' + result.finish + '</p></div></div>';
  }

  // Orthogonal HTML routes occupy only the gutters between task cards.
  const routes = {
    'A-B': 'w2s-edge-ab w2s-edge-up', 'A-C': 'w2s-edge-ac w2s-edge-right',
    'C-D': 'w2s-edge-cd w2s-edge-elbow-right', 'C-E': 'w2s-edge-ce w2s-edge-right',
    'E-F': 'w2s-edge-ef w2s-edge-right', 'D-G': 'w2s-edge-dg w2s-edge-elbow-up',
    'F-G': 'w2s-edge-fg w2s-edge-right'
  };
  function networkMarkup(result, h, highlight) {
    const canvas = '<div class="w2s-network-canvas' + (highlight ? ' w2s-highlight-critical' : '') + '" role="group" aria-label="' + h.tr('Red dirigida de actividades. Las flechas se pueden abrir.', 'Directed activity network. Arrows can be opened.') + '">' +
      result.edges.map(function (edge) {
        const critical = result.byCode[edge.from].critical && result.byCode[edge.to].critical && result.byCode[edge.from].ef === result.byCode[edge.to].es;
        return '<button type="button" class="w2s-edge ' + routes[edge.from + '-' + edge.to] + (critical ? ' w2s-is-critical' : '') + '" data-w2-detail="w2s_dependency" aria-label="' + h.tr('Abrir dependencia fin a inicio: ', 'Open finish-to-start dependency: ') + edge.from + ' → ' + edge.to + '"><span class="w2s-sr-only">' + edge.from + ' → ' + edge.to + '</span></button>';
      }).join('') + result.tasks.map(function (task) {
        return '<article class="w2s-network-task w2s-position-' + task.code.toLowerCase() + (task.critical ? ' w2s-is-critical' : '') + '"><div class="w2s-card-top"><span class="w2s-code">' + task.code + '</span><span>' + task.duration + h.tr(' días', ' days') + '</span></div>' + taskButton(task, h) + '<p class="w2s-task-time">' + h.tr('Inicio ', 'Start ') + task.es + ' · ' + h.tr('fin ', 'finish ') + task.ef + '</p>' + badge(task, h) + '</article>';
      }).join('') + '<aside class="w2s-network-note"><strong>' + h.tr('La rama B termina aquí.', 'Branch B ends here.') + '</strong><p>' + h.tr('B finaliza en el día ', 'B finishes on day ') + result.byCode.B.ef + h.tr('. Su holgura de ', '. Its float of ') + result.byCode.B.float + h.tr(' días se mide contra el cierre común en ', ' days is measured against common completion at ') + result.finish + h.tr('; no supone una fecha real de agenda.', '; it does not assume an actual agenda date.') + '</p><p>' + h.tr('Las flechas indican dependencia; la posición no representa tiempo.', 'Arrows indicate dependency; position does not represent time.') + '</p></aside></div>';
    return '<div class="w2s-network"><p class="w2s-view-intro">' + h.tr('Cada flecha significa: terminar la predecesora antes de iniciar la sucesora. Abre cualquier tarea o conexión para explorar su explicación.', 'Each arrow means: finish the predecessor before starting the successor. Open any task or connection to explore its explanation.') + '</p>' + canvas +
      '<div class="w2s-compact-network"><p class="w2s-note">' + h.tr('Red en tabla: cada fila conserva la tarea, sus entradas y sus tiempos para leerla sin reducir el tamaño del texto.', 'Network as a table: each row preserves the task, its inputs, and its times so it can be read without shrinking text.') + '</p>' + timingTable(result, h, false) + '</div>' +
      '<div class="w2s-edge-list" role="group" aria-label="' + h.tr('Todas las conexiones de la red', 'All network connections') + '"><span>' + h.tr('Conexiones:', 'Connections:') + '</span>' + result.edges.map(function (edge) { return dependency(edge.from, edge.to, h); }).join('') + '</div></div>';
  }

  function timingTable(result, h, late) {
    const headings = late ? ['ES', 'EF', 'LS', 'LF'] : [h.tr('Inicio', 'Start'), h.tr('Fin', 'Finish')];
    return '<div class="w2s-table-scroll" role="region" tabindex="0" aria-label="' + h.tr('Tiempos proyectados de la red; desplazamiento horizontal disponible', 'Projected network times; horizontal scrolling available') + '"><table class="w2s-timing-table"><caption>' + (late ? h.tr('Días transcurridos: ES/EF = inicio/fin tempranos; LS/LF = inicio/fin tardíos.', 'Elapsed days: ES/EF = early start/finish; LS/LF = late start/finish.') : h.tr('Red de dependencias y tiempos proyectados', 'Dependency network and projected times')) + '</caption><thead><tr><th scope="col">' + h.tr('Tarea', 'Task') + '</th><th scope="col">' + h.tr('Espera a', 'Waits for') + '</th><th scope="col">' + h.tr('Duración', 'Duration') + '</th>' + headings.map(function (heading) { return '<th scope="col">' + heading + '</th>'; }).join('') + '<th scope="col">' + h.tr('Holgura', 'Float') + '</th></tr></thead><tbody>' +
      result.tasks.map(function (task) {
        const times = late ? [task.es, task.ef, task.ls, task.lf] : [task.es, task.ef];
        return '<tr class="' + (task.critical ? 'w2s-is-critical' : 'w2s-has-float') + '"><th scope="row"><span class="w2s-code">' + task.code + '</span>' + taskButton(task, h) + '<small class="w2s-row-status">' + (task.critical ? h.tr('Crítica', 'Critical') : h.tr('Con margen', 'With float')) + '</small></th><td>' + predecessors(task, h) + '</td><td>' + task.duration + '</td>' + times.map(function (value) { return '<td>' + value + '</td>'; }).join('') + '<td>' + task.float + '</td></tr>';
      }).join('') + '</tbody></table></div>';
  }

  function ganttMarkup(result, h) {
    const width = result.finish;
    const ticks = Array.from({ length: width + 1 }, function (_, index) {
      return '<span class="w2s-tick' + (index === 0 ? ' w2s-tick-first' : index === width ? ' w2s-tick-last' : '') + '" style="left:' + (100 * index / width) + '%">' + index + '</span>';
    }).join('');
    return '<div class="w2s-gantt"><p class="w2s-view-intro">' + h.tr('Días transcurridos desde 0. La barra ocupa [inicio, fin): su longitud es la duración. Las zonas rayadas muestran margen, no trabajo realizado.', 'Elapsed days from 0. A bar occupies [start, finish): its length is the duration. Hatched areas show float, not work performed.') + '</p><div class="w2s-gantt-scroll" role="region" tabindex="0" aria-label="' + h.tr('Gantt con escala temporal; desplazamiento horizontal disponible', 'Gantt with time scale; horizontal scrolling available') + '"><div class="w2s-gantt-grid" style="--w2s-day-width:' + (100 / width) + '%"><div class="w2s-gantt-heading"><strong>' + h.tr('Tarea · intervalo · duración', 'Task · interval · duration') + '</strong><div class="w2s-axis" aria-hidden="true">' + ticks + '</div></div>' + result.tasks.map(function (task) {
      const bar = 'left:' + (100 * task.es / width) + '%;width:' + (100 * task.duration / width) + '%';
      const float = 'left:' + (100 * task.ef / width) + '%;width:' + (100 * task.float / width) + '%';
      return '<div class="w2s-gantt-row' + (task.critical ? ' w2s-is-critical' : '') + '"><div class="w2s-gantt-label"><span class="w2s-code">' + task.code + '</span>' + taskButton(task, h) + '<small>' + task.es + '–' + task.ef + ' · ' + task.duration + h.tr(' días', ' days') + ' · ' + (task.critical ? h.tr('crítica', 'critical') : h.tr('holgura ', 'float ') + task.float) + '</small></div><div class="w2s-track">' + (task.float > 0 ? '<span class="w2s-float-bar" style="' + float + '" aria-hidden="true"></span>' : '') + '<button type="button" class="w2s-gantt-bar" data-w2-detail="' + h.escape(task.concept) + '" style="' + bar + '" aria-label="' + h.escape(task.code) + ': ' + h.text(task.label) + '. ' + h.tr('Inicio ', 'Start ') + task.es + ', ' + h.tr('fin ', 'finish ') + task.ef + ', ' + task.duration + h.tr(' días. Abrir tarea.', ' days. Open task.') + '"><span aria-hidden="true">' + task.code + '</span></button></div></div>';
    }).join('') + '<div class="w2s-gantt-row w2s-milestone-row"><div class="w2s-gantt-label">' + h.node('w2s_milestone') + '<small>' + h.tr('Cierre: día ', 'Completion: day ') + result.finish + ' · 0 ' + h.tr('días', 'days') + '</small></div><div class="w2s-track"><button type="button" class="w2s-milestone-marker" data-w2-detail="w2s_milestone" aria-label="' + h.tr('Hito de cierre en el día ', 'Completion milestone on day ') + result.finish + h.tr(', duración cero', ', zero duration') + '"><span aria-hidden="true">◆</span></button></div></div></div></div><div class="w2s-legend"><span><i class="w2s-key-work" aria-hidden="true"></i>' + h.tr('Duración proyectada', 'Projected duration') + '</span><span><i class="w2s-key-critical" aria-hidden="true"></i>' + h.tr('Tarea crítica', 'Critical task') + '</span><span><i class="w2s-key-float" aria-hidden="true"></i>' + h.tr('Holgura disponible', 'Available float') + '</span></div><p class="w2s-note">' + h.tr('B y C comienzan en 3; D y E comienzan en 8. Estas superposiciones suponen recursos suficientes. El hito se coloca cuando B y G han terminado; no representa una nueva dependencia entre ellas.', 'B and C start at 3; D and E start at 8. These overlaps assume sufficient resources. The milestone is placed when B and G have finished; it does not represent a new dependency between them.') + '</p></div>';
  }

  function pathMarkup(result, h) {
    return '<section class="w2s-paths"><header class="w2s-section-heading"><h4>' + h.tr('Sumar caminos y respetar las uniones', 'Sum paths and respect merges') + '</h4>' + h.node('w2s_critical_path') + '</header><div class="w2s-path-list">' + result.paths.map(function (path) {
      const critical = path.duration === result.finish;
      return '<article class="w2s-path' + (critical ? ' w2s-is-critical' : '') + '"><strong>' + path.codes.join(' → ') + '</strong><p>' + path.codes.map(function (code) { return result.byCode[code].duration; }).join(' + ') + ' = <b>' + path.duration + h.tr(' días', ' days') + '</b></p><small>' + (critical ? h.tr('Ruta crítica · holgura 0', 'Critical path · float 0') : path.codes[path.codes.length - 1] === 'B' ? h.tr('Rama independiente: termina en 4.', 'Independent branch: finishes at 4.') : h.tr('Suma de duraciones; G también debe esperar a F.', 'Sum of durations; G must also wait for F.')) + '</small></article>';
    }).join('') + '</div></section>';
  }
  function explanationMarkup(result, h) {
    const d = result.byCode.D;
    const f = result.byCode.F;
    const g = result.byCode.G;
    const b = result.byCode.B;
    const shortPath = result.paths.find(function (path) { return path.codes.join('') === 'ACDG'; });
    return '<div class="w2s-explanations"><article><h4>' + h.tr('G espera a las dos ramas', 'G waits for both branches') + '</h4><p>' + h.tr('A–C–D suma ', 'A–C–D sums to ') + d.ef + h.tr(' días, pero inicio G = max(', ' days, but G start = max(') + d.ef + ', ' + f.ef + ') = ' + g.es + '. ' + h.tr('G se ejecuta de ', 'G runs from ') + g.es + h.tr(' a ', ' to ') + g.ef + '.</p><p>' + h.tr('El camino corto suma ', 'The shorter path sums to ') + shortPath.duration + h.tr(' días de tareas y espera ', ' days of tasks and waits ') + (g.es - d.ef) + h.tr(' días por F: ', ' days for F: ') + shortPath.duration + ' + ' + (g.es - d.ef) + ' = ' + result.finish + '.</p>' + h.node('w2s_dependency') + '</article><article><h4>' + h.tr('Holgura y cierre común', 'Float and common completion') + '</h4><p>D: LS ' + d.ls + ' − ES ' + d.es + ' = ' + d.float + h.tr(' días. B: LS ', ' days. B: LS ') + b.ls + ' − ES ' + b.es + ' = ' + b.float + h.tr(' días.', ' days.') + '</p><p>' + h.tr('La holgura de B se calcula contra el cierre de todo el trabajo en ', 'B float is calculated against completion of all work at ') + result.finish + h.tr('. No fija una fecha real de agenda y no añade B → G.', '. It sets no real agenda date and adds no B → G.') + '</p>' + h.node('w2s_slack') + '</article></div>';
  }
  function outputMarkup(data, mode, result, base, activeScenario, h) {
    const visual = mode === 'gantt' ? ganttMarkup(result, h) : networkMarkup(result, h, mode === 'critical');
    return summaryMarkup(result, base, activeScenario, h) + '<div class="w2s-representation">' + visual + '</div>' + (mode === 'critical' ? pathMarkup(result, h) + timingTable(result, h, true) : '') + explanationMarkup(result, h);
  }

  function render(data, language, api) {
    const h = helpers(language, api);
    const base = calculate(data.schedule, data.schedule.scenario.baseDuration);
    return '<div class="w2s-schedule" data-w2s-schedule><p class="w2s-model-note">' + h.text(data.schedule.assumptions) + '</p>' + sourceMarkup(data, h) +
      '<section class="w2s-workbench" aria-label="' + h.tr('Explorar el cronograma de Eden Bay', 'Explore the Eden Bay schedule') + '"><div class="w2s-controls" role="group" aria-label="' + h.tr('Representación del mismo cronograma', 'Representation of the same schedule') + '"><button type="button" data-w2s-view="network" aria-pressed="true">' + h.tr('Red de tareas', 'Task network') + '</button><button type="button" data-w2s-view="gantt" aria-pressed="false">Gantt</button><button type="button" data-w2s-view="critical" aria-pressed="false">' + h.tr('Ruta crítica', 'Critical path') + '</button></div>' +
      '<fieldset class="w2s-scenario" data-w2s-scenario-box hidden disabled><legend>' + h.tr('Lente IA · explorar una hipótesis', 'AI lens · explore a hypothesis') + '</legend><label><input type="checkbox" data-w2s-scenario> <span>' + h.tr('Suponer E = 7 días (fuente: E = 5)', 'Assume E = 7 days (source: E = 5)') + '</span></label><p>' + h.tr('Solo cambia la duración de E en la simulación. Se recalculan tiempos y holguras; no se alteran dependencias ni datos originales.', 'Only E duration changes in the simulation. Times and float are recalculated; dependencies and original data are preserved.') + '</p>' + h.node('w2s_ai_scenarios') + '</fieldset>' +
      '<p class="w2s-sr-only" data-w2s-status role="status" aria-live="polite" aria-atomic="true"></p><div class="w2s-output" data-w2s-output>' + outputMarkup(data, 'network', base, base, false, h) + '</div></section>' +
      '<section class="w2s-reading"><h3>' + h.tr('Tres formas de leer el mismo modelo', 'Three ways to read the same model') + '</h3><p>' + h.tr('La red muestra dependencias; Gantt sitúa barras en el tiempo; la ruta crítica identifica la cadena que determina el cierre. PERT incorpora incertidumbre, pero este caso solo aporta duraciones únicas: el cálculo mostrado es CPM determinista.', 'The network shows dependencies; Gantt places bars in time; the critical path identifies the chain determining completion. PERT incorporates uncertainty, but this case supplies only single durations: the calculation shown is deterministic CPM.') + '</p><div class="w2s-reading-links">' + ['w2s_network', 'w2s_gantt', 'w2s_pert', 'w2s_milestone'].map(function (id) { return h.node(id); }).join('') + '</div><p class="w2s-citations">' + h.tr('Métodos: ', 'Methods: ') + '<a href="https://www.pmi.org/learning/library/critical-path-method-calculations-scheduling-8040" target="_blank" rel="noopener noreferrer">PMI: CPM</a> · <a href="https://www.pmi.org/learning/library/planning-scheduling-managing-project-8510" target="_blank" rel="noopener noreferrer">PMI: ' + h.tr('planificación y PERT', 'planning and PERT') + '</a> · <a href="https://www.pmi.org/learning/library/time-management-9094" target="_blank" rel="noopener noreferrer">PMI: Gantt / ' + h.tr('tiempo', 'time') + '</a>. ' + h.tr('Los valores del ejemplo proceden exclusivamente del caso suministrado.', 'Example values come exclusively from the supplied case.') + '</p></section></div>' +
      '<section class="w2s-touchpoints"><h3>' + h.tr('Conceptos y puntos de apoyo', 'Concepts and support touchpoints') + '</h3><p>' + h.tr('Los fundamentos permanecen disponibles en Base. Activa la lente IA para explorar las intervenciones y el supuesto E7; vuelve a los controles del cronograma para compararlo.', 'Foundations remain available in Base. Activate the AI lens to explore interventions and the E7 assumption; return to the schedule controls to compare it.') + '</p>' + api.map(data, language) +
      '<div class="w2s-ai-details"><h4>' + h.tr('Cada intervención tiene un límite de validación', 'Each intervention has a validation boundary') + '</h4><p>' + h.text(data.aiMessage) + '</p></div></section>';
  }

  function bind(figure, data, language, api) {
    const previous = bindings.get(figure);
    if (previous) previous();
    const root = figure.querySelector('[data-w2s-schedule]');
    if (!root) return;
    const output = root.querySelector('[data-w2s-output]');
    const controls = root.querySelectorAll('[data-w2s-view]');
    const scenario = root.querySelector('[data-w2s-scenario]');
    const scenarioBox = root.querySelector('[data-w2s-scenario-box]');
    const status = root.querySelector('[data-w2s-status]');
    const h = helpers(language, api);
    const base = calculate(data.schedule, data.schedule.scenario.baseDuration);
    let mode = 'network';
    let aiActive = false;
    let scenarioActive = false;

    function update(announce) {
      const active = aiActive && scenarioActive;
      const result = active ? calculate(data.schedule, data.schedule.scenario.duration) : base;
      controls.forEach(function (button) { button.setAttribute('aria-pressed', String(button.dataset.w2sView === mode)); });
      output.innerHTML = outputMarkup(data, mode, result, base, active, h);
      if (announce) {
        const name = mode === 'network' ? api.tr('Red de tareas', 'Task network', language) : mode === 'gantt' ? 'Gantt' : api.tr('Ruta crítica', 'Critical path', language);
        status.textContent = name + '. ' + api.tr('Duración proyectada: ', 'Projected duration: ', language) + result.finish + api.tr(' días. Inicio de G: ', ' days. G start: ', language) + result.byCode.G.es + '. E = ' + result.byCode.E.duration + '.';
      }
    }
    function onView(event) {
      const target = event.target.closest('[data-w2s-view]');
      if (!target || !root.contains(target) || !['network', 'gantt', 'critical'].includes(target.dataset.w2sView)) return;
      if (mode === target.dataset.w2sView) return;
      mode = target.dataset.w2sView;
      update(true);
    }
    function onScenario() {
      scenarioActive = aiActive && scenario.checked;
      scenario.checked = scenarioActive;
      update(true);
    }
    function syncLens() {
      // Main sets both attributes; the observer sees their final state in one delivery.
      const next = figure.classList.contains('is-ai') || figure.dataset.lens === 'ai';
      if (next === aiActive) return;
      aiActive = next;
      scenarioBox.hidden = !next;
      scenarioBox.disabled = !next;
      scenario.disabled = !next;
      if (!next) {
        const wasScenario = scenarioActive;
        scenarioActive = false;
        scenario.checked = false;
        if (wasScenario) update(true);
      }
    }
    root.addEventListener('click', onView);
    scenario.addEventListener('change', onScenario);
    const observer = new MutationObserver(syncLens);
    observer.observe(figure, { attributes: true, attributeFilter: ['class', 'data-lens'] });
    syncLens();
    // Main owns all data-w2-detail events. Observing only this figure prevents app-wide loops.
    const dispose = function () {
      observer.disconnect();
      root.removeEventListener('click', onView);
      scenario.removeEventListener('change', onScenario);
      bindings.delete(figure);
    };
    bindings.set(figure, dispose);
    return dispose;
  }

  window.CST212W2Views = window.CST212W2Views || {};
  window.CST212W2Views['04'] = { render: render, bind: bind };
})();
