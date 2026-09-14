(function () {
  'use strict';
  const t = (es, en) => ({ es, en });
  const db = window.CST212_W2 = window.CST212_W2 || { diagrams: {}, concepts: {}, sources: {} };

  Object.assign(db.sources, {
    w2s_src_edenbay: {
      author: 'Usuario / User', year: 's.f. / n.d.',
      title: 'Eden Bay: caso y datos proporcionados por el usuario / User-supplied case and data',
      url: '',
      note: t('Fuente de las siete tareas, duraciones y dependencias. No se proporcionó una URL.', 'Source of the seven tasks, durations, and dependencies. No URL was supplied.')
    },
    w2s_src_brief: {
      author: 'Usuario / User', year: 's.f. / n.d.',
      title: 'D04: especificación de la extensión IA y del escenario E = 7 / AI extension and E = 7 scenario specification',
      url: '',
      note: t('Diseño didáctico solicitado; no es una afirmación del caso ni una atribución académica de capacidades de IA.', 'Requested teaching design; not a case fact or an academic attribution of AI capabilities.')
    },
    w2s_src_pmi_cpm: {
      author: 'Kramer, S. W., & Jenkins, J. L.', year: '2006',
      title: 'Understanding the basics of CPM calculations: what is scheduling software really telling you?',
      url: 'https://www.pmi.org/learning/library/critical-path-method-calculations-scheduling-8040'
    },
    w2s_src_pmi_planning: {
      author: 'Moylan, W. A.', year: '2002',
      title: 'Planning and scheduling: the yin and yang of managing a project',
      url: 'https://www.pmi.org/learning/library/planning-scheduling-managing-project-8510'
    },
    w2s_src_pmi_time: {
      author: 'Project Management Institute', year: '1987',
      title: 'Time Management',
      url: 'https://www.pmi.org/learning/library/time-management-9094'
    },
    w2s_src_pmi_risk: {
      author: 'Project Management Institute', year: '1996',
      title: 'Schedule Risk Analysis Simplified',
      url: 'https://www.pmi.org/learning/library/schedule-risk-analysis-simplified-10573'
    }
  });

  const assistance = {
    taskdata: {
      connection: t('IA → datos de tareas: COMPROBAR / ESTRUCTURAR.', 'AI → task data: CHECK / STRUCTURE.'),
      does: t('Puede organizar el texto suministrado en filas A–G y señalar duraciones o identificadores ausentes.', 'Can organize supplied text into A–G rows and flag missing durations or identifiers.'),
      changes: t('Facilita preparar datos revisables; este diagrama calcula con las siete filas explícitas del caso.', 'Helps prepare reviewable data; this diagram calculates from the seven explicit case rows.'),
      validate: t('Comparar cada fila con Eden Bay. Mantener A3, B1, C5, D2, E5, F2, G1; E7 pertenece solo al escenario.', 'Compare each row with Eden Bay. Keep A3, B1, C5, D2, E5, F2, G1; E7 belongs only to the scenario.')
    },
    dependencies: {
      connection: t('IA → dependencias: SUGERIR / COMPROBAR.', 'AI → dependencies: SUGGEST / CHECK.'),
      does: t('Puede señalar relaciones ambiguas, ciclos o predecesoras ausentes y proponer preguntas para el equipo.', 'Can flag ambiguous relationships, cycles, or missing predecessors and propose questions for the team.'),
      changes: t('Hace más rápida la revisión de la secuencia; una sugerencia sigue siendo una hipótesis.', 'Speeds up sequence review; a suggestion remains a hypothesis.'),
      validate: t('Confirmar cada conexión con evidencia y responsables. El caso contiene A→B, A→C, C→D, C→E, E→F, D→G y F→G. No contiene B→G.', 'Confirm each connection against evidence and task owners. The case contains A→B, A→C, C→D, C→E, E→F, D→G, and F→G. It does not contain B→G.')
    },
    schedule: {
      connection: t('IA → cronograma: SIMULAR.', 'AI → schedule: SIMULATE.'),
      does: t('Puede ayudar a explicar una simulación basada en duraciones y dependencias confirmadas.', 'Can help explain a simulation based on confirmed durations and dependencies.'),
      changes: t('Permite comparar consecuencias. Aquí un cálculo determinista, sin servicio de IA, produce las tres vistas.', 'Allows consequences to be compared. Here a deterministic calculation, with no AI service, produces all three views.'),
      validate: t('Revisar máximos al unir ramas, mínimos al recorrer hacia atrás, recursos y restricciones reales. Un resultado proyectado no es una fecha futura garantizada.', 'Check maxima at branch joins, minima during the backward pass, resources, and real constraints. A projection is not a guaranteed future date.')
    },
    risks: {
      connection: t('IA → riesgos: DETECTAR CANDIDATOS.', 'AI → risks: DETECT CANDIDATES.'),
      does: t('Puede proponer revisar tareas sin holgura, la unión D/F y la disponibilidad del Consejo.', 'Can propose reviewing zero-float tasks, the D/F merge, and Council availability.'),
      changes: t('Prepara una lista de asuntos por investigar, no incidentes confirmados ni probabilidades calculadas.', 'Prepares a list of issues to investigate, not confirmed incidents or calculated probabilities.'),
      validate: t('Confirmar evidencia, impacto y responsable de cada riesgo. No inventar una fecha de agenda ni transformar B en predecesora de G.', 'Confirm evidence, impact, and an owner for each risk. Do not invent an agenda date or turn B into a predecessor of G.')
    },
    scenarios: {
      connection: t('IA → escenarios: ¿QUÉ PASARÍA SI…?', 'AI → scenarios: WHAT IF?'),
      does: t('Puede ayudar a formular la hipótesis explícita de que preparar PowerPoint dure 7 días en vez de 5.', 'Can help formulate the explicit hypothesis that preparing PowerPoint takes 7 days instead of 5.'),
      changes: t('E terminaría en 15, F en 17 y G en 18. La holgura de D sería 7 y la de B 14. El caso base continúa siendo 16 días.', 'E would finish at 15, F at 17, and G at 18. D float would be 7 and B float 14. The base case remains 16 days.'),
      validate: t('Registrar E7 como supuesto, conservar E5 en la fuente y recalcular toda la red. La lente Base restablece siempre el cálculo E5.', 'Record E7 as an assumption, retain E5 in the source, and recalculate the whole network. The Base lens always restores the E5 calculation.')
    }
  };

  function add(key, fields) {
    const id = 'w2s_' + key;
    db.concepts[id] = Object.assign({ id: id }, fields);
  }

  add('schedule', {
    label: t('CRONOGRAMA DEL PROYECTO', 'PROJECT SCHEDULE'), layer: 'foundation',
    what: t('Organiza tareas, duraciones y dependencias para proyectar cuándo puede ocurrir el trabajo.', 'Organizes tasks, durations, and dependencies to project when work can occur.'),
    why: t('La lista de trabajo necesita una secuencia temporal para estimar su terminación.', 'The work list needs a time sequence to estimate completion.'),
    question: t('¿Qué tiene que ocurrir primero y cuándo puede terminar todo?', 'What must happen first, and when can everything finish?'),
    example: t('Eden Bay: el cierre calculado es max(fin B = 4, fin G = 16) = 16 días transcurridos.', 'Eden Bay: calculated completion is max(B finish = 4, G finish = 16) = 16 elapsed days.'),
    analogy: t('Un itinerario en el que algunos recorridos se hacen en paralelo y otros deben esperar.', 'An itinerary in which some routes run in parallel and others must wait.'),
    related: ['w2s_taskdata', 'w2s_dependency', 'w2s_network', 'w2s_gantt', 'w2s_critical_path'],
    notConfuse: t('Un cronograma proyectado no informa progreso real ni confirma una fecha del Consejo.', 'A projected schedule does not report actual progress or confirm a Council date.'),
    sources: ['w2s_src_edenbay', 'w2s_src_pmi_planning'], ai: assistance.schedule
  });
  add('taskdata', {
    label: t('DATOS DE LAS TAREAS', 'TASK DATA'), layer: 'foundation',
    what: t('Registro de identificación, trabajo, duración y predecesoras de cada tarea A–G.', 'A record of the identifier, work, duration, and predecessors of each A–G task.'),
    why: t('Las tres representaciones deben partir de los mismos datos para poder compararse.', 'All three representations must start from the same data so they can be compared.'),
    question: t('¿Qué valores vienen de la fuente y cuáles son supuestos?', 'Which values come from the source, and which are assumptions?'),
    example: t('E dura 5 días y depende de C. Solo la simulación permite sustituir su duración por 7.', 'E takes 5 days and depends on C. Only the simulation may replace its duration with 7.'),
    analogy: t('Los ingredientes medidos antes de seguir una receta.', 'Ingredients measured before following a recipe.'),
    related: ['w2w_task_a', 'w2w_task_b', 'w2w_task_c', 'w2w_task_d', 'w2w_task_e', 'w2w_task_f', 'w2w_task_g', 'w2s_duration'],
    notConfuse: t('Estructurar un texto no autoriza completar datos faltantes con invenciones.', 'Structuring text does not authorize filling missing data with inventions.'),
    sources: ['w2s_src_edenbay'], ai: assistance.taskdata
  });
  add('duration', {
    label: t('DURACIÓN', 'DURATION'), layer: 'foundation',
    what: t('Tiempo asignado a una tarea entre su inicio y su fin en este modelo.', 'Time assigned to a task between its start and finish in this model.'),
    why: t('Determina la longitud de las barras y contribuye a la duración de cada camino.', 'Determines bar length and contributes to each path duration.'),
    question: t('¿Cuántos días ocupa esta tarea una vez que puede comenzar?', 'How many days does this task take once it can start?'),
    example: t('C ocupa 5 días: comienza en 3 y termina en 8. D y E pueden comenzar entonces.', 'C takes 5 days: it starts at 3 and finishes at 8. D and E can then start.'),
    analogy: t('El tiempo de cocción comienza cuando están listos los ingredientes.', 'Cooking time starts when the ingredients are ready.'),
    related: ['w2s_taskdata', 'w2s_gantt', 'w2s_pert', 'w2s_milestone'],
    notConfuse: t('Días transcurridos no equivalen a fechas de calendario, esfuerzo en horas-persona ni avance real.', 'Elapsed days are not calendar dates, person-hour effort, or actual progress.'),
    sources: ['w2s_src_edenbay'], ai: assistance.taskdata
  });
  add('dependency', {
    label: t('DEPENDENCIA ENTRE TAREAS', 'TASK DEPENDENCY'), layer: 'foundation',
    what: t('En este caso, una relación fin a inicio: la sucesora espera a que termine su predecesora.', 'In this case, a finish-to-start relationship: the successor waits for its predecessor to finish.'),
    why: t('Hace explícita la condición que permite comenzar una tarea.', 'Makes the condition for starting a task explicit.'),
    question: t('¿Qué tareas deben haber terminado antes de comenzar esta?', 'Which tasks must have finished before this one starts?'),
    example: t('G espera a D y F: inicio G = max(10, 15) = 15. B depende de A, termina en 4 y no es predecesora de G.', 'G waits for D and F: G start = max(10, 15) = 15. B depends on A, finishes at 4, and is not a predecessor of G.'),
    analogy: t('Una puerta con dos llaves: G se abre solo cuando D y F están listas.', 'A door with two keys: G opens only when D and F are ready.'),
    related: ['w2s_network', 'w2s_early_late', 'w2w_task_b', 'w2w_task_d', 'w2w_task_f', 'w2w_task_g'],
    notConfuse: t('El orden de las letras no crea dependencias. No existe B→G en los datos proporcionados.', 'Alphabetical order does not create dependencies. B→G is absent from the supplied data.'),
    sources: ['w2s_src_edenbay', 'w2s_src_pmi_cpm'], ai: assistance.dependencies
  });
  add('network', {
    label: t('RED DE ACTIVIDADES', 'ACTIVITY NETWORK'), layer: 'foundation',
    what: t('Representación de tareas como nodos y de dependencias como conexiones dirigidas.', 'A representation of tasks as nodes and dependencies as directed connections.'),
    why: t('Muestra bifurcaciones, uniones y la lógica que limita el inicio del trabajo.', 'Shows branches, merges, and the logic that constrains work start.'),
    question: t('¿Dónde se separa el trabajo y dónde debe reunirse?', 'Where does work branch, and where must it merge?'),
    example: t('A habilita B y C; C habilita D y E; E habilita F; D y F habilitan G.', 'A enables B and C; C enables D and E; E enables F; D and F enable G.'),
    analogy: t('Cruces de caminos: se puede avanzar por varias ramas, pero una unión exige esperar.', 'Road junctions: several branches can advance, but a merge requires waiting.'),
    related: ['w2s_dependency', 'w2s_gantt', 'w2s_pert', 'w2s_critical_path'],
    notConfuse: t('La posición espacial de un nodo no es una escala de días. Para comparar tiempos, usa Gantt.', 'A node position is not a day scale. Use Gantt to compare times.'),
    sources: ['w2s_src_edenbay', 'w2s_src_pmi_planning'], ai: assistance.dependencies
  });
  add('gantt', {
    label: t('DIAGRAMA DE GANTT', 'GANTT CHART'), layer: 'foundation',
    what: t('Barras de tareas sobre un eje temporal común.', 'Task bars on a shared time axis.'),
    why: t('Permite comparar duración, inicio, fin y trabajo simultáneo.', 'Allows duration, start, finish, and concurrent work to be compared.'),
    question: t('¿Cuándo ocurre cada tarea y cuáles se superponen?', 'When does each task occur, and which tasks overlap?'),
    example: t('D ocupa los días 8–10 y E los días 8–13. G ocupa 15–16, aunque D ya terminó en 10.', 'D occupies days 8–10 and E days 8–13. G occupies 15–16, although D finished at 10.'),
    analogy: t('Una agenda con renglones paralelos y una misma regla de tiempo.', 'A planner with parallel rows and one shared time ruler.'),
    related: ['w2s_network', 'w2s_duration', 'w2s_slack', 'w2s_early_late'],
    notConfuse: t('La red explica la secuencia; Gantt muestra su colocación temporal. Una barra proyectada no indica trabajo completado.', 'The network explains sequence; Gantt shows time placement. A projected bar does not indicate completed work.'),
    sources: ['w2s_src_edenbay', 'w2s_src_pmi_time'], ai: assistance.schedule
  });
  add('pert', {
    label: t('PERT Y ESTIMACIÓN', 'PERT AND ESTIMATION'), layer: 'deepening',
    what: t('PERT aborda la incertidumbre de las duraciones mediante estimaciones probabilísticas.', 'PERT addresses duration uncertainty through probabilistic estimates.'),
    why: t('Invita a revisar cuánta incertidumbre se esconde detrás de una duración única.', 'Prompts examination of the uncertainty behind a single duration.'),
    question: t('¿Contamos con estimaciones optimista, más probable y pesimista justificadas?', 'Do we have justified optimistic, most likely, and pessimistic estimates?'),
    example: t('Eden Bay aporta una duración por tarea. Por eso calculamos CPM determinista; E7 es un escenario, no tres estimaciones PERT.', 'Eden Bay supplies one duration per task. We therefore calculate deterministic CPM; E7 is a scenario, not three PERT estimates.'),
    analogy: t('Distinguir una estimación puntual de varios tiempos posibles respaldados por evidencia.', 'Distinguishing a point estimate from several possible times backed by evidence.'),
    related: ['w2s_duration', 'w2s_network', 'w2s_critical_path', 'w2s_scenarios'],
    notConfuse: t('Dibujar una red no produce por sí solo un análisis probabilístico PERT. No se inventan estimaciones ni probabilidades.', 'Drawing a network does not by itself produce a probabilistic PERT analysis. Estimates and probabilities are not invented.'),
    sources: ['w2s_src_edenbay', 'w2s_src_pmi_planning', 'w2s_src_pmi_risk'], ai: assistance.scenarios
  });
  add('critical_path', {
    label: t('RUTA CRÍTICA', 'CRITICAL PATH'), layer: 'foundation',
    what: t('El camino dependiente más largo que determina la duración total en este modelo.', 'The longest dependent path that determines total duration in this model.'),
    why: t('Identifica las tareas cuyo retraso desplaza el cierre si los demás supuestos permanecen iguales.', 'Identifies tasks whose delay moves completion if the other assumptions remain unchanged.'),
    question: t('¿Qué secuencia fija el final del proyecto?', 'Which sequence determines project finish?'),
    example: t('A–C–E–F–G = 3 + 5 + 5 + 2 + 1 = 16 días. A–C–D–G suma 11, pero G espera a F y no comienza en 10.', 'A–C–E–F–G = 3 + 5 + 5 + 2 + 1 = 16 days. A–C–D–G sums to 11, but G waits for F and does not start at 10.'),
    analogy: t('La fila de relevos que llega última fija cuándo pueden terminar todos.', 'The relay chain arriving last determines when everyone can finish.'),
    related: ['w2s_dependency', 'w2s_slack', 'w2s_early_late', 'w2s_scenarios'],
    notConfuse: t('Crítica no significa la tarea más importante ni sumar todas las tareas; B y C se superponen, al igual que D y E.', 'Critical does not mean the most important task or adding all tasks; B and C overlap, as do D and E.'),
    sources: ['w2s_src_edenbay', 'w2s_src_pmi_cpm'], ai: assistance.schedule
  });
  add('slack', {
    label: t('HOLGURA TOTAL', 'TOTAL FLOAT'), layer: 'deepening',
    what: t('Margen para desplazar una tarea sin retrasar el cierre del modelo; se calcula como LS − ES.', 'Room to shift a task without delaying model completion; calculated as LS − ES.'),
    why: t('Distingue flexibilidad temporal de tareas que no tienen margen.', 'Distinguishes scheduling flexibility from tasks with no margin.'),
    question: t('¿Cuánto puede desplazarse esta tarea sin mover el cierre calculado?', 'How far can this task shift without moving calculated completion?'),
    example: t('D: ES8, LS13, holgura5. B: ES3, LS15, holgura12 porque el cierre común es 16. No se ha fijado una fecha real de agenda.', 'D: ES8, LS13, float5. B: ES3, LS15, float12 because the common finish is 16. No real agenda date has been set.'),
    analogy: t('Un margen de salida antes de perder la misma conexión final.', 'Departure flexibility before missing the same final connection.'),
    related: ['w2s_critical_path', 'w2s_early_late', 'w2w_task_b', 'w2w_task_d'],
    notConfuse: t('Holgura no es trabajo adicional ni permiso del Consejo. Las holguras de distintas tareas no se suman como reservas independientes.', 'Float is not extra work or Council permission. Float values of different tasks are not added as independent reserves.'),
    sources: ['w2s_src_edenbay', 'w2s_src_pmi_cpm'], ai: assistance.risks
  });
  add('early_late', {
    label: t('TIEMPOS TEMPRANOS Y TARDÍOS', 'EARLY AND LATE TIMES'), layer: 'deepening',
    what: t('ES/EF son inicio/fin tempranos; LS/LF son inicio/fin tardíos compatibles con el cierre calculado.', 'ES/EF are early start/finish; LS/LF are late start/finish compatible with calculated completion.'),
    why: t('Permiten calcular esperas y holguras de manera reproducible.', 'Allow waits and float to be calculated reproducibly.'),
    question: t('¿Qué máximo limita el inicio y qué mínimo limita el fin tardío?', 'Which maximum constrains start, and which minimum constrains late finish?'),
    example: t('Hacia delante: ES = max(EF de predecesoras), EF = ES + duración. Hacia atrás: LF = min(LS de sucesoras), LS = LF − duración. Las hojas B y G comparten LF16.', 'Forward: ES = max(predecessor EF), EF = ES + duration. Backward: LF = min(successor LS), LS = LF − duration. Leaves B and G share LF16.'),
    analogy: t('Recorrer un itinerario primero desde la salida y después desde la llegada límite.', 'Tracing an itinerary first from departure and then from its finish limit.'),
    related: ['w2s_dependency', 'w2s_slack', 'w2s_critical_path'],
    notConfuse: t('Temprano y tardío son límites del plan; no describen lo que ocurrió en la realidad.', 'Early and late are planning bounds; they do not describe what happened in reality.'),
    sources: ['w2s_src_edenbay', 'w2s_src_pmi_planning'], ai: assistance.schedule
  });
  add('milestone', {
    label: t('HITO', 'MILESTONE'), layer: 'foundation',
    what: t('Evento o punto de control con duración cero.', 'An event or checkpoint with zero duration.'),
    why: t('Marca un estado alcanzado sin añadir trabajo al cronograma.', 'Marks a reached state without adding work to the schedule.'),
    question: t('¿Qué evento indica que todo el trabajo del modelo ha terminado?', 'Which event indicates that all modeled work is finished?'),
    example: t('El marcador didáctico de cierre se ubica en max(fin B, fin G) = 16 y dura 0. No añade una tarea ni una dependencia B→G.', 'The teaching completion marker is placed at max(B finish, G finish) = 16 and takes 0. It adds neither a task nor a B→G dependency.'),
    analogy: t('La línea de llegada señala un instante; no es otro tramo de carrera.', 'The finish line marks an instant; it is not another race segment.'),
    related: ['w2s_schedule', 'w2s_duration', 'w2s_gantt'],
    notConfuse: t('G dura 1 día y es una tarea. El hito marca el cierre; no prueba aceptación ni confirma una reunión real.', 'G takes 1 day and is a task. The milestone marks completion; it does not prove acceptance or confirm a real meeting.'),
    sources: ['w2s_src_edenbay', 'w2s_src_pmi_time'], ai: assistance.schedule
  });
  add('risks', {
    label: t('RIESGOS DEL CRONOGRAMA', 'SCHEDULE RISKS'), layer: 'deepening',
    what: t('Condiciones inciertas que podrían cambiar las duraciones o la viabilidad del plan.', 'Uncertain conditions that could change durations or plan feasibility.'),
    why: t('Una red coherente todavía necesita contrastarse con el contexto real.', 'A consistent network still needs to be checked against real context.'),
    question: t('¿Qué supuestos conviene investigar antes de comprometer una fecha?', 'Which assumptions should be investigated before committing to a date?'),
    example: t('Revisar disponibilidad para preparar E y ensayar F, y confirmar con el Consejo las condiciones de agenda. Son preguntas, no riesgos confirmados del caso.', 'Review availability for preparing E and rehearsing F, and confirm agenda conditions with the Council. These are questions, not confirmed case risks.'),
    analogy: t('Consultar si una carretera estará disponible antes de prometer una hora de llegada.', 'Checking whether a road will be available before promising an arrival time.'),
    related: ['w2s_critical_path', 'w2s_slack', 'w2s_pert', 'w2s_scenarios'],
    notConfuse: t('Una posibilidad detectada no es un incidente ni una nueva restricción confirmada.', 'A detected possibility is neither an incident nor a newly confirmed constraint.'),
    sources: ['w2s_src_edenbay', 'w2s_src_pmi_risk'], ai: assistance.risks
  });
  add('scenarios', {
    label: t('ESCENARIOS DE DURACIÓN', 'DURATION SCENARIOS'), layer: 'deepening',
    what: t('Comparación explícita de un supuesto alternativo con los datos base conservados.', 'An explicit comparison of an alternative assumption against preserved base data.'),
    why: t('Hace visible qué consecuencias provienen exactamente de cambiar E.', 'Makes it clear which consequences come specifically from changing E.'),
    question: t('¿Qué cambia si E dura 7 días en vez de 5?', 'What changes if E takes 7 days instead of 5?'),
    example: t('A–C–E–F–G pasa de 16 a 18. E: 8–15; F: 15–17; G: 17–18. D conserva 8–10, pero su holgura crece a 7; B conserva 3–4 y su holgura crece a 14.', 'A–C–E–F–G changes from 16 to 18. E: 8–15; F: 15–17; G: 17–18. D keeps 8–10, but its float grows to 7; B keeps 3–4 and its float grows to 14.'),
    analogy: t('Probar una variación de una receta conservando la versión original.', 'Trying a recipe variation while keeping the original version.'),
    related: ['w2s_taskdata', 'w2s_schedule', 'w2s_critical_path', 'w2s_pert'],
    notConfuse: t('El escenario E7 no reemplaza la duración E5 de Eden Bay ni demuestra qué sucederá.', 'The E7 scenario does not replace the Eden Bay E5 duration or establish what will happen.'),
    sources: ['w2s_src_edenbay', 'w2s_src_brief'], ai: assistance.scenarios
  });
  add('ai', {
    label: t('APOYO DE IA AL CRONOGRAMA', 'AI SUPPORT FOR SCHEDULING'), layer: 'ai',
    what: t('Capa didáctica de apoyo para estructurar, cuestionar y explicar el plan.', 'A teaching support lens for structuring, questioning, and explaining the plan.'),
    why: t('Conecta cada posible intervención con datos, revisión humana y límites concretos.', 'Connects each possible intervention to data, human review, and concrete limits.'),
    question: t('¿Dónde aporta apoyo y qué debe validar una persona?', 'Where can it help, and what must a person validate?'),
    example: t('Una sugerencia sobre dependencias se revisa antes de aceptarse; la simulación E7 se mantiene separada de la fuente E5.', 'A dependency suggestion is reviewed before acceptance; the E7 simulation remains separate from the E5 source.'),
    analogy: t('Un asistente de planificación prepara opciones; el equipo confirma los compromisos.', 'A planning assistant prepares options; the team confirms commitments.'),
    related: ['w2s_ai_taskdata', 'w2s_ai_dependencies', 'w2s_ai_schedule', 'w2s_ai_risks', 'w2s_ai_scenarios'],
    notConfuse: t('Esta extensión no ejecuta un modelo de IA ni atribuye estas capacidades a Eden Bay o Tiffin. No genera dependencias como hechos.', 'This extension does not run an AI model or attribute these capabilities to Eden Bay or Tiffin. It does not generate dependencies as facts.'),
    sources: ['w2s_src_brief'], ai: assistance.schedule
  });

  const touchpoints = [
    {
      key: 'taskdata', target: 'taskdata', action: t('COMPROBAR / ESTRUCTURAR', 'CHECK / STRUCTURE'),
      label: t('IA → DATOS DE TAREAS', 'AI → TASK DATA'),
      question: t('¿Coincide cada fila con la fuente?', 'Does each row match the source?'),
      example: t('Revisar que A tenga duración 3 y ninguna predecesora, y que E conserve duración base 5 y predecesora C.', 'Check that A has duration 3 and no predecessor, and that E retains base duration 5 and predecessor C.'),
      analogy: t('Una transcripción que se coteja con el original.', 'A transcription checked against the original.'),
      caution: t('Los campos vacíos requieren revisión; no son permiso para inventar datos.', 'Empty fields need review; they are not permission to invent data.'),
      value: t('Tabla trazable al caso; valores faltantes señalados.', 'Case-traceable table; missing values flagged.')
    },
    {
      key: 'dependencies', target: 'dependency', action: t('SUGERIR / COMPROBAR', 'SUGGEST / CHECK'),
      label: t('IA → DEPENDENCIAS', 'AI → DEPENDENCIES'),
      question: t('¿La relación propuesta está documentada?', 'Is the proposed relationship documented?'),
      example: t('Si alguien propone B→G por intuición, pedir evidencia: esa conexión no figura en el caso y no se añade al cálculo.', 'If someone proposes B→G by intuition, request evidence: that connection is absent from the case and is not added to the calculation.'),
      analogy: t('Anotar una pregunta al margen sin reescribir el documento original.', 'Writing a margin question without rewriting the original document.'),
      caution: t('Una sugerencia no es una dependencia confirmada.', 'A suggestion is not a confirmed dependency.'),
      value: t('Secuencia revisable, sin conexiones inventadas.', 'Reviewable sequence without invented connections.')
    },
    {
      key: 'schedule', target: 'schedule', action: t('SIMULAR', 'SIMULATE'),
      label: t('IA → CRONOGRAMA', 'AI → SCHEDULE'),
      question: t('¿Se respeta la espera de todas las predecesoras?', 'Does the schedule wait for every predecessor?'),
      example: t('Explicar por qué G comienza en max(10,15), aunque el camino A–C–D suma 10.', 'Explain why G starts at max(10,15), although path A–C–D sums to 10.'),
      analogy: t('Una calculadora acompañada de una explicación de sus entradas.', 'A calculator accompanied by an explanation of its inputs.'),
      caution: t('La explicación de IA no sustituye el cálculo reproducible ni garantiza un resultado real.', 'An AI explanation does not replace reproducible calculation or guarantee a real result.'),
      value: t('Tiempos y holguras derivados del mismo modelo.', 'Times and float derived from the same model.')
    },
    {
      key: 'risks', target: 'risks', action: t('DETECTAR CANDIDATOS', 'DETECT CANDIDATES'),
      label: t('IA → RIESGOS', 'AI → RISKS'),
      question: t('¿Qué condición requiere evidencia antes de tratarse como riesgo?', 'Which condition needs evidence before being treated as a risk?'),
      example: t('Proponer verificar disponibilidad del Consejo; registrar que no hay fecha de agenda proporcionada.', 'Propose checking Council availability; record that no agenda date has been supplied.'),
      analogy: t('Una lista de preguntas para la próxima conversación con responsables.', 'A list of questions for the next conversation with task owners.'),
      caution: t('Un candidato no es un hecho, una probabilidad ni una nueva restricción del cronograma.', 'A candidate is not a fact, a probability, or a new schedule constraint.'),
      value: t('Preguntas priorizadas para revisión humana.', 'Prioritized questions for human review.')
    },
    {
      key: 'scenarios', target: 'scenarios', action: t('¿QUÉ PASARÍA SI…?', 'WHAT IF?'),
      label: t('IA → ESCENARIOS', 'AI → SCENARIOS'),
      question: t('¿Qué cambia al modificar solo la duración de E?', 'What changes when only E duration is modified?'),
      example: t('E7 desplaza F y G dos días, lleva el cierre a 18 y recalcula holguras. La tabla fuente sigue mostrando E5.', 'E7 shifts F and G two days, moves completion to 18, and recalculates float. The source table still shows E5.'),
      analogy: t('Una copia de trabajo para explorar una hipótesis sin alterar el original.', 'A working copy for exploring a hypothesis without altering the original.'),
      caution: t('Comparar escenarios no predice cuál ocurrirá. E7 es una hipótesis solicitada.', 'Comparing scenarios does not predict which will occur. E7 is a requested hypothesis.'),
      value: t('E5 → 16 días; E7 → 18 días, con supuestos visibles.', 'E5 → 16 days; E7 → 18 days, with visible assumptions.')
    }
  ];
  touchpoints.forEach(function (point) {
    const support = assistance[point.key];
    add('ai_' + point.key, {
      label: point.label, layer: 'ai', what: support.does, why: support.changes,
      question: point.question, example: point.example, analogy: point.analogy,
      related: ['w2s_ai', 'w2s_' + point.target], notConfuse: point.caution,
      sources: ['w2s_src_brief'], ai: support
    });
  });

  // These are schedule records referring to the shared task concepts, never replacements for them.
  const task = (code, label, duration, predecessors) => Object.freeze({
    code: code, concept: 'w2w_task_' + code.toLowerCase(), label: Object.freeze(label), duration: duration,
    predecessors: Object.freeze(predecessors), sources: Object.freeze(['w2s_src_edenbay'])
  });
  const model = Object.freeze({
    source: 'w2s_src_edenbay',
    tasks: Object.freeze([
      task('A', t('Revisar costos y beneficios', 'Review cost/benefit'), 3, []),
      task('B', t('Solicitar inclusión en la agenda del Consejo', 'Request Council agenda'), 1, ['A']),
      task('C', t('Desarrollar la propuesta', 'Develop proposal'), 5, ['A']),
      task('D', t('Imprimir material para entregar', 'Print handouts'), 2, ['C']),
      task('E', t('Preparar PowerPoint', 'Prepare PowerPoint'), 5, ['C']),
      task('F', t('Ensayar', 'Rehearse'), 2, ['E']),
      task('G', t('Realizar y apoyar la presentación', 'Deliver/support presentation'), 1, ['D', 'F'])
    ]),
    scenario: Object.freeze({ task: 'E', baseDuration: 5, duration: 7, source: 'w2s_src_brief' }),
    assumptions: Object.freeze(t('Modelo proyectado desde el día 0, relaciones fin a inicio sin desfase y recursos suficientes para el trabajo paralelo. No se añaden calendarios, fechas reales, restricciones de recursos ni dependencias no proporcionadas.', 'Projected model from day 0, finish-to-start relationships with no lag, and sufficient resources for parallel work. No calendars, actual dates, resource constraints, or unsupplied dependencies are added.'))
  });
  db.diagrams['04'] = {
    id: '04',
    title: t('¿Qué tiene que ocurrir primero?', 'What has to happen first?'),
    transition: t('Ya sabemos qué trabajo debe hacerse. Pero algunas tareas no pueden comenzar hasta que otras terminen. ¿Cómo descubrimos el orden del proyecto y qué tareas determinan su duración?', 'We now know what work must be done. But some tasks cannot start until others finish. How do we discover the project sequence and which tasks determine its duration?'),
    subtitle: t('Dependencias, Gantt, PERT y ruta crítica', 'Dependencies, Gantt, PERT, and critical path'),
    definition: t('Después de identificar el trabajo, debemos comprender cuánto dura, qué tareas dependen de otras y qué secuencia determina la duración total del proyecto.', 'After identifying the work, we must understand how long it takes, which tasks depend on others, and which sequence determines the total project duration.'),
    root: 'w2s_schedule',
    groups: [
      { label: t('Entradas y secuencia', 'Inputs and sequence'), nodes: ['w2s_taskdata', 'w2s_duration', 'w2s_dependency'] },
      { label: t('Representar y estimar', 'Represent and estimate'), nodes: ['w2s_network', 'w2s_gantt', 'w2s_pert', 'w2s_milestone'] },
      { label: t('Analizar el tiempo', 'Analyze time'), nodes: ['w2s_critical_path', 'w2s_early_late', 'w2s_slack'] },
      { label: t('Revisar supuestos', 'Review assumptions'), nodes: ['w2s_risks', 'w2s_scenarios'] }
    ],
    aiTitle: t('IA como apoyo al cronograma', 'AI as scheduling support'),
    aiMessage: t('La IA puede ayudar a estructurar, revisar y explicar. Las dependencias requieren evidencia; los escenarios son hipótesis. El cálculo local es determinista y el caso base permanece documentado.', 'AI can help structure, review, and explain. Dependencies require evidence; scenarios are hypotheses. The local calculation is deterministic and the base case remains documented.'),
    aiRelationships: touchpoints.map(function (point) {
      return { id: 'w2s_relation_' + point.key, from: 'w2s_ai', to: 'w2s_' + point.target,
        action: point.action, concept: 'w2s_ai_' + point.key, value: point.value };
    }),
    schedule: model
  };
})();
