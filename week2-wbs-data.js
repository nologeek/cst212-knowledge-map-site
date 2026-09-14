(function () {
  const t = (es, en) => ({ es, en });
  window.CST212_W2 = window.CST212_W2 || { diagrams: {}, concepts: {}, sources: {} };
  const db = window.CST212_W2;
  const unassigned = t('No especificado en el material suministrado', 'Not specified in the supplied material');

  Object.assign(db.sources, {
    w2w_case_user: {
      author: 'Usuario',
      year: 's.f.',
      title: 'Eden Bay: propuesta de Dawn al Town Council, tareas A–G (material suministrado en la conversación)',
      url: null,
      kind: 'user-provided',
      note: t('Fuente del objetivo, tareas, duraciones y precedencias. No se proporcionó una URL pública.', 'Source of the objective, tasks, durations, and precedence data. No public URL was provided.')
    },
    w2w_pmi_lexicon: {
      author: 'Project Management Institute',
      year: '2026',
      title: 'PMI Lexicon of Project Management Terms (Version 5.0)',
      url: 'https://www.pmi.org/-/media/pmi/documents/registered/pdf/pmbok-standards/pmi-lexicon-pm-terms.pdf?rev=447328d841c249af985d14177ddd5f95'
    },
    w2w_burek_wbs: {
      author: 'Burek, P.',
      year: '2013',
      title: 'The ABC basics of the WBS Paul Burek.',
      url: 'https://www.pmi.org/learning/library/work-breakdown-structure-basics-5919'
    },
    w2w_nasa_wbs: {
      author: 'National Aeronautics and Space Administration',
      year: '2021',
      title: 'NASA Work Breakdown Structure (WBS) Handbook (NASA/SP-20210023927)',
      url: 'https://www.nasa.gov/wp-content/uploads/2023/08/nasa-work-breakdown-structure-handbook.pdf'
    },
    w2w_nasa_planning: {
      author: 'National Aeronautics and Space Administration',
      year: 's.f.',
      title: '6.1 Technical Planning',
      url: 'https://www.nasa.gov/reference/6-1-technical-planning/'
    },
    w2w_nist_genai: {
      author: 'Autio, C., Schwartz, R., Dunietz, J., Jain, S., Stanley, M., Tabassi, E., Hall, P., & Roberts, K.',
      year: '2024',
      title: 'Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)',
      url: 'https://doi.org/10.6028/NIST.AI.600-1'
    }
  });

  Object.assign(db.concepts, {
    w2w_wbs: {
      id: 'w2w_wbs', label: t('EDT / WBS', 'WORK BREAKDOWN STRUCTURE'), layer: 'foundation',
      what: t('La EDT descompone el alcance del proyecto en partes progresivamente más pequeñas y manejables.', 'The WBS breaks down the project scope into progressively smaller, more manageable parts.'),
      why: t('Ayuda a reconocer los resultados necesarios antes de planificar su ejecución.', 'It helps identify the required results before planning their execution.'),
      question: t('¿Qué trabajo integra el alcance completo?', 'What work makes up the complete scope?'),
      example: t('Agrupación ilustrativa del caso: propuesta documentada y participación preparada reúnen las tareas A–G suministradas.', 'Illustrative case grouping: documented proposal and prepared participation bring together the supplied tasks A–G.'),
      analogy: t('Un índice organiza el contenido de una entrega, sin indicar cuándo se escribe cada parte.', 'A contents list organizes a delivery without stating when each part is written.'),
      related: ['w2w_scope', 'w2w_major_deliverable', 'w2w_work_package', 'w2w_task'],
      notConfuse: t('EDT: qué trabajo y entregables. Cronograma: cuándo y en qué orden. FDD: funciones del sistema.', 'WBS: what work and deliverables. Schedule: when and in what order. FDD: system functions.'),
      sources: ['w2w_burek_wbs', 'w2w_nasa_wbs', 'w2w_case_user'],
      ai: {
        connection: t('La IA propone un borrador a partir del alcance suministrado.', 'AI proposes a draft from the supplied scope.'),
        does: t('Sugiere agrupaciones de entregables y paquetes.', 'It suggests deliverable and package groupings.'),
        changes: t('Acelera la comparación de estructuras posibles.', 'It speeds up comparison of possible structures.'),
        validate: t('El PM y el equipo revisan cobertura, duplicados y correspondencia con el alcance aceptado.', 'The PM and team review coverage, duplicates, and alignment with accepted scope.')
      }
    },
    w2w_scope: {
      id: 'w2w_scope', label: t('ALCANCE', 'SCOPE'), layer: 'foundation',
      what: t('Define qué trabajo y resultados forman parte del proyecto y qué queda fuera.', 'It defines which work and results belong to the project and what is excluded.'),
      why: t('Establece los límites de la descomposición.', 'It establishes the boundaries of decomposition.'),
      question: t('¿Qué debemos entregar exactamente?', 'What exactly must we deliver?'),
      example: t('Caso suministrado: preparar la propuesta de Dawn al Town Council mediante A–G. No se suministra un proyecto de implementación del sistema.', 'Supplied case: prepare Dawn’s proposal to the Town Council through A–G. A system implementation project is not supplied.'),
      analogy: t('El marco de una imagen delimita qué pertenece a ella.', 'A picture frame defines what belongs inside it.'),
      related: ['w2w_project', 'w2w_wbs', 'w2w_generated', 'w2w_validated'],
      notConfuse: t('El alcance no incluye automáticamente todo lo que una persona o una IA pueda sugerir.', 'Scope does not automatically include everything a person or AI might suggest.'),
      sources: ['w2w_burek_wbs', 'w2w_case_user'],
      ai: {
        connection: t('La IA interpreta el objetivo y las tareas aportadas.', 'AI interprets the supplied objective and tasks.'),
        does: t('Separa datos explícitos, ambigüedades y propuestas.', 'It separates explicit data, ambiguities, and proposals.'),
        changes: t('El texto inicial se vuelve una estructura revisable.', 'The initial text becomes a reviewable structure.'),
        validate: t('Toda interpretación debe conservar su evidencia; ampliar alcance exige aceptación explícita.', 'Every interpretation must retain its evidence; expanding scope requires explicit acceptance.')
      }
    },
    w2w_major_deliverable: {
      id: 'w2w_major_deliverable', label: t('ENTREGABLE PRINCIPAL', 'MAJOR DELIVERABLE'), layer: 'deepening',
      what: t('Resultado amplio y verificable que reúne componentes del alcance.', 'A broad, verifiable result that brings together scope components.'),
      why: t('Da un propósito reconocible a cada rama.', 'It gives each branch a recognizable purpose.'),
      question: t('¿Qué resultado común reúne esta rama?', 'What shared result does this branch bring together?'),
      example: t('Agrupación ilustrativa: propuesta documentada reúne sustento revisado, propuesta y material impreso.', 'Illustrative grouping: documented proposal brings together reviewed supporting information, the proposal, and printed material.'),
      analogy: t('Un volumen reúne capítulos que contribuyen a un mismo tema.', 'A volume gathers chapters contributing to the same topic.'),
      related: ['w2w_scope', 'w2w_work_package', 'w2w_major_proposal', 'w2w_major_session'],
      notConfuse: t('Los nombres de las ramas son una propuesta didáctica; no fueron suministrados como agrupaciones oficiales del curso.', 'Branch names are a teaching proposal; they were not supplied as official course groupings.'),
      sources: ['w2w_pmi_lexicon', 'w2w_burek_wbs', 'w2w_case_user']
    },
    w2w_work_package: {
      id: 'w2w_work_package', label: t('PAQUETE DE TRABAJO', 'WORK PACKAGE'), layer: 'deepening',
      what: t('Componente del nivel inferior de la EDT cuyo trabajo puede estimarse y gestionarse.', 'A component at the lowest WBS level whose work can be estimated and managed.'),
      why: t('Delimita una unidad de control antes de derivar actividades.', 'It defines a unit of control before deriving activities.'),
      question: t('¿Qué resultado concreto completa este paquete?', 'What concrete result completes this package?'),
      example: t('Agrupación ilustrativa: propuesta y material impreso se produce con C, desarrollar propuesta, y D, imprimir material.', 'Illustrative grouping: proposal and printed material are produced through C, develop the proposal, and D, print material.'),
      analogy: t('Una caja se identifica por su contenido; prepararla requiere acciones.', 'A box is identified by its contents; preparing it requires actions.'),
      related: ['w2w_major_deliverable', 'w2w_task', 'w2w_package_proposal'],
      notConfuse: t('Las tareas derivadas son planificación de actividades, no niveles inferiores adicionales de la EDT.', 'Derived tasks are activity planning, not additional lower WBS levels.'),
      sources: ['w2w_pmi_lexicon', 'w2w_burek_wbs', 'w2w_case_user']
    },
    w2w_task: {
      id: 'w2w_task', label: t('TAREA / ACTIVIDAD', 'TASK / ACTIVITY'), layer: 'foundation',
      what: t('Acción definida para producir el resultado de un paquete de trabajo.', 'A defined action for producing a work package result.'),
      why: t('Conecta un resultado esperado con trabajo ejecutable.', 'It connects an expected result to executable work.'),
      question: t('¿Qué acción produce este resultado?', 'Which action produces this result?'),
      example: t('Caso suministrado: E, desarrollar PowerPoint, dura 5 días y tiene a C como predecesora.', 'Supplied case: E, develop PowerPoint, takes 5 days and has C as its predecessor.'),
      analogy: t('Escribir es la acción; el documento terminado es el resultado.', 'Writing is the action; the finished document is the result.'),
      related: ['w2w_work_package', 'w2w_duration', 'w2w_responsible', 'w2w_dependency'],
      notConfuse: t('Una tarea del proyecto no es una función que ejecuta el sistema.', 'A project task is not a function performed by the system.'),
      sources: ['w2w_nasa_planning', 'w2w_case_user'],
      ai: {
        connection: t('La IA puede sugerir actividades candidatas al revisar un paquete.', 'AI can suggest candidate activities when reviewing a package.'),
        does: t('Formula posibles subtareas como propuestas separadas.', 'It formulates possible subtasks as separate proposals.'),
        changes: t('Hace visibles alternativas que el equipo puede discutir.', 'It reveals alternatives for the team to discuss.'),
        validate: t('A–G conservan sus datos; ninguna candidata se incorpora sin aceptación ni altera sus precedencias automáticamente.', 'A–G retain their data; no candidate is incorporated without acceptance or automatically changes their precedence data.')
      }
    },
    w2w_duration: {
      id: 'w2w_duration', label: t('DURACIÓN DE LA TAREA', 'TASK DURATION'), layer: 'foundation',
      what: t('Cantidad de períodos de trabajo necesarios para completar una actividad.', 'The number of work periods needed to complete an activity.'),
      why: t('Expresa cuánto trabajo temporal debe acomodar el futuro cronograma.', 'It expresses the span of work time the future schedule must accommodate.'),
      question: t('¿Cuánto dura y con qué calendario se interpretará?', 'How long does it take, and which calendar will interpret it?'),
      example: t('Caso suministrado: A dura 3 días. Ese dato no proporciona su fecha de inicio ni su fecha de terminación.', 'Supplied case: A takes 3 days. That value does not provide its start or finish date.'),
      analogy: t('La duración de una película no indica a qué hora comienza la función.', 'A movie’s running time does not tell you when the screening starts.'),
      related: ['w2w_task_a', 'w2w_task', 'w2w_responsible', 'w2w_dependency'],
      notConfuse: t('DURACIÓN ≠ FECHA DE CALENDARIO. Tampoco equivale a horas-persona de esfuerzo.', 'DURATION ≠ CALENDAR DATE. It is not person-hours of effort either.'),
      sources: ['w2w_pmi_lexicon', 'w2w_case_user']
    },
    w2w_responsible: {
      id: 'w2w_responsible', label: t('RECURSO RESPONSABLE', 'RESPONSIBLE RESOURCE'), layer: 'foundation',
      what: t('Persona o rol asignado para ejecutar una actividad y comunicar su avance.', 'The person or role assigned to perform an activity and report progress.'),
      why: t('Permite relacionar el trabajo con capacidad y disponibilidad reales.', 'It connects work with actual capacity and availability.'),
      question: t('¿Quién realiza la actividad y qué disponibilidad tiene?', 'Who performs the activity, and what availability do they have?'),
      example: t('Caso suministrado: la propuesta es de Dawn; no se especifica quién ejecuta cada tarea A–G.', 'Supplied case: the proposal is Dawn’s; who performs each task A–G is not specified.'),
      analogy: t('Un programa de concierto no sustituye la asignación de cada parte a un intérprete.', 'A concert program does not replace assigning each part to a performer.'),
      related: ['w2w_task', 'w2w_duration', 'w2w_project'],
      notConfuse: t('Ser la persona asociada a la propuesta no demuestra que Dawn sea responsable de todas las tareas.', 'Being associated with the proposal does not establish that Dawn is responsible for every task.'),
      sources: ['w2w_nasa_planning', 'w2w_case_user']
    },
    w2w_dependency: {
      id: 'w2w_dependency', label: t('DEPENDENCIAS', 'DEPENDENCIES'), layer: 'foundation',
      what: t('Relaciones lógicas que condicionan el inicio o la terminación de actividades.', 'Logical relationships that constrain when activities start or finish.'),
      why: t('Conservan las condiciones que utilizará la planificación temporal.', 'They preserve the conditions used in time planning.'),
      question: t('¿Qué actividad debe preceder a esta según los datos disponibles?', 'Which activity must precede this one according to the available data?'),
      example: t('Caso suministrado: G tiene a D y F como predecesoras. Aquí se conserva ese dato sin calcular fechas ni ruta crítica.', 'Supplied case: G has D and F as predecessors. That data is preserved here without calculating dates or the critical path.'),
      analogy: t('Una condición de entrada explica qué debe estar listo, no a qué carpeta pertenece el trabajo.', 'An entry condition explains what must be ready, not which folder the work belongs in.'),
      related: ['w2w_task_g', 'w2w_task_d', 'w2w_task_f', 'w2w_wbs'],
      notConfuse: t('La relación padre-hijo de la EDT expresa pertenencia. Una dependencia expresa orden entre actividades.', 'A WBS parent-child relationship expresses membership. A dependency expresses order between activities.'),
      sources: ['w2w_pmi_lexicon', 'w2w_nasa_planning', 'w2w_case_user']
    },
    w2w_project: {
      id: 'w2w_project', label: t('PROPUESTA DE DAWN AL TOWN COUNCIL', 'DAWN’S PROPOSAL TO THE TOWN COUNCIL'), layer: 'foundation',
      what: t('Trabajo del caso Eden Bay orientado a preparar la propuesta de Dawn al Town Council.', 'Work from the Eden Bay case aimed at preparing Dawn’s proposal to the Town Council.'),
      why: t('Da un objetivo común a las siete tareas suministradas.', 'It gives the seven supplied tasks a common objective.'),
      question: t('¿Cómo organizar A–G alrededor de los resultados que ayudan a producir?', 'How can A–G be organized around the results they help produce?'),
      example: t('Caso suministrado: revisar costos/beneficios, solicitar agenda, desarrollar propuesta, imprimir, desarrollar PowerPoint, ensayar y presentar/apoyar.', 'Supplied case: review costs/benefits, request agenda time, develop the proposal, print, develop PowerPoint, rehearse, and present/support.'),
      analogy: t('La portada reúne las partes de una entrega bajo un mismo propósito.', 'A cover brings the parts of a delivery together under one purpose.'),
      related: ['w2w_scope', 'w2w_wbs', 'w2w_major_proposal', 'w2w_major_session'],
      notConfuse: t('La existencia de la propuesta no acredita aprobación del Council ni autoriza implementación adicional.', 'The existence of the proposal does not establish Council approval or authorize additional implementation.'),
      sources: ['w2w_case_user']
    },
    w2w_major_proposal: {
      id: 'w2w_major_proposal', label: t('PROPUESTA DOCUMENTADA', 'DOCUMENTED PROPOSAL'), layer: 'deepening',
      what: t('Agrupación ilustrativa de sustento revisado, propuesta y material impreso.', 'An illustrative grouping of reviewed supporting information, the proposal, and printed material.'),
      why: t('Reúne los resultados de A, C y D sin convertir su orden en jerarquía.', 'It brings together the results of A, C, and D without turning their order into hierarchy.'),
      question: t('¿Qué resultados documentales reúne esta rama?', 'Which documentary results does this branch bring together?'),
      example: t('Agrupación propia: costos y beneficios revisados, más propuesta y material impreso.', 'Original grouping: reviewed costs and benefits, plus the proposal and printed material.'),
      analogy: t('Una carpeta reúne documentos relacionados aunque se elaboren en momentos distintos.', 'A folder gathers related documents even when they are produced at different times.'),
      related: ['w2w_major_deliverable', 'w2w_package_review', 'w2w_package_proposal'],
      notConfuse: t('Este nombre es una organización didáctica; el usuario suministró tareas, no esta rama de EDT.', 'This name is a teaching organization; the user supplied tasks, not this WBS branch.'),
      sources: ['w2w_case_user', 'w2w_nasa_wbs']
    },
    w2w_major_session: {
      id: 'w2w_major_session', label: t('PARTICIPACIÓN PREPARADA Y REALIZADA', 'PREPARED AND COMPLETED PARTICIPATION'), layer: 'deepening',
      what: t('Agrupación ilustrativa de solicitud de agenda, apoyo visual ensayado y presentación/apoyo.', 'An illustrative grouping of the agenda request, rehearsed visual support, and presentation/support.'),
      why: t('Da cabida a B, E, F y G como trabajo necesario para la participación.', 'It accommodates B, E, F, and G as work needed for participation.'),
      question: t('¿Qué resultados preparan y completan la participación?', 'Which results prepare and complete participation?'),
      example: t('Agrupación propia: solicitud de agenda, PowerPoint y ensayo, e intervención ante el Council.', 'Original grouping: agenda request, PowerPoint and rehearsal, and participation before the Council.'),
      analogy: t('Una actuación reúne preparación y ejecución bajo un mismo resultado.', 'A performance brings preparation and execution together under one result.'),
      related: ['w2w_major_deliverable', 'w2w_package_agenda', 'w2w_package_presentation', 'w2w_package_session'],
      notConfuse: t('Agrupar B con G no añade una dependencia B→G que no fue suministrada.', 'Grouping B with G does not add a B→G dependency that was not supplied.'),
      sources: ['w2w_case_user', 'w2w_nasa_wbs']
    },
    w2w_package_review: {
      id: 'w2w_package_review', label: t('COSTOS Y BENEFICIOS REVISADOS', 'REVIEWED COSTS AND BENEFITS'), layer: 'deepening',
      what: t('Paquete ilustrativo que agrupa el resultado de la revisión A.', 'An illustrative package grouping the result of review A.'),
      why: t('Identifica el sustento que A ayuda a preparar.', 'It identifies the supporting information that A helps prepare.'),
      question: t('¿Qué información queda revisada al completar A?', 'Which information has been reviewed when A is complete?'),
      example: t('Caso: A revisa costos/beneficios en 3 días; el nombre del paquete es una agrupación didáctica.', 'Case: A reviews costs/benefits in 3 days; the package name is a teaching grouping.'),
      analogy: t('Una etiqueta identifica el contenido revisado sin describir cada paso de revisión.', 'A label identifies the reviewed content without describing every review step.'),
      related: ['w2w_work_package', 'w2w_major_proposal', 'w2w_task_a'],
      notConfuse: t('No se suministran cifras, categorías de costos ni un formato de informe.', 'No figures, cost categories, or report format are supplied.'),
      sources: ['w2w_case_user', 'w2w_nasa_wbs']
    },
    w2w_package_proposal: {
      id: 'w2w_package_proposal', label: t('PROPUESTA Y MATERIAL IMPRESO', 'PROPOSAL AND PRINTED MATERIAL'), layer: 'deepening',
      what: t('Paquete ilustrativo que reúne los resultados de C y D.', 'An illustrative package bringing together the results of C and D.'),
      why: t('Relaciona el contenido desarrollado con el material que se imprimirá.', 'It relates the developed content to the material to be printed.'),
      question: t('¿Qué resultados aportan desarrollar e imprimir?', 'Which results come from developing and printing?'),
      example: t('Caso: C desarrolla la propuesta; D imprime material. Su agrupación en un paquete es ilustrativa.', 'Case: C develops the proposal; D prints material. Grouping them in one package is illustrative.'),
      analogy: t('Un manuscrito y sus ejemplares forman parte de una entrega documental.', 'A manuscript and its copies form part of a document delivery.'),
      related: ['w2w_work_package', 'w2w_task_c', 'w2w_task_d', 'w2w_major_proposal'],
      notConfuse: t('El paquete no fija cantidades de copias ni criterios de aprobación que el caso no proporcionó.', 'The package does not set copy counts or approval criteria that the case did not provide.'),
      sources: ['w2w_case_user', 'w2w_nasa_wbs']
    },
    w2w_package_agenda: {
      id: 'w2w_package_agenda', label: t('SOLICITUD DE ESPACIO EN AGENDA', 'REQUEST FOR AGENDA TIME'), layer: 'deepening',
      what: t('Paquete ilustrativo para el resultado de solicitar espacio mediante B.', 'An illustrative package for the result of requesting time through B.'),
      why: t('Hace visible la gestión de agenda dentro del trabajo a organizar.', 'It makes the agenda request visible within the work to be organized.'),
      question: t('¿Qué gestión de agenda está expresamente incluida?', 'Which agenda-related action is explicitly included?'),
      example: t('Caso: B solicita espacio en agenda en 1 día después de A.', 'Case: B requests agenda time in 1 day after A.'),
      analogy: t('Enviar una solicitud de reserva no equivale a recibir su confirmación.', 'Submitting a reservation request is not the same as receiving confirmation.'),
      related: ['w2w_work_package', 'w2w_task_b', 'w2w_major_session'],
      notConfuse: t('Solicitar espacio no significa que exista una fecha confirmada.', 'Requesting time does not mean that a confirmed date exists.'),
      sources: ['w2w_case_user', 'w2w_nasa_wbs']
    },
    w2w_package_presentation: {
      id: 'w2w_package_presentation', label: t('APOYO VISUAL Y ENSAYO', 'VISUAL SUPPORT AND REHEARSAL'), layer: 'deepening',
      what: t('Paquete ilustrativo que reúne el PowerPoint desarrollado y el ensayo realizado.', 'An illustrative package bringing together the developed PowerPoint and completed rehearsal.'),
      why: t('Agrupa los resultados de E y F que preparan la intervención.', 'It groups the results of E and F that prepare the presentation.'),
      question: t('¿Qué debe producir la preparación visual y oral?', 'What must visual and oral preparation produce?'),
      example: t('Caso: E desarrolla PowerPoint y F ensaya; esta agrupación no altera sus duraciones.', 'Case: E develops PowerPoint and F rehearses; this grouping does not change their durations.'),
      analogy: t('La partitura y el ensayo preparan una interpretación, pero no son todavía la actuación.', 'The score and rehearsal prepare a performance but are not yet the performance itself.'),
      related: ['w2w_work_package', 'w2w_task_e', 'w2w_task_f', 'w2w_major_session'],
      notConfuse: t('No se infieren número de diapositivas, duración del discurso ni audiencia adicional.', 'Slide count, speech length, and any additional audience are not inferred.'),
      sources: ['w2w_case_user', 'w2w_nasa_wbs']
    },
    w2w_package_session: {
      id: 'w2w_package_session', label: t('PRESENTACIÓN Y APOYO REALIZADOS', 'COMPLETED PRESENTATION AND SUPPORT'), layer: 'deepening',
      what: t('Paquete ilustrativo que nombra el resultado de la actividad G.', 'An illustrative package naming the result of activity G.'),
      why: t('Incluye la intervención final entre los resultados del trabajo.', 'It includes the final presentation among the work results.'),
      question: t('¿Qué actuación completa G según el caso?', 'Which action does G complete according to the case?'),
      example: t('Caso: presentar/apoyar dura 1 día después de D y F.', 'Case: presenting/supporting takes 1 day after D and F.'),
      analogy: t('Dar una exposición es un resultado de ejecución; la decisión de quienes escuchan es otra cuestión.', 'Delivering a presentation is a performance result; the listeners’ decision is a separate matter.'),
      related: ['w2w_work_package', 'w2w_task_g', 'w2w_major_session'],
      notConfuse: t('Presentar/apoyar no prueba que el Town Council apruebe la propuesta.', 'Presenting/supporting does not establish that the Town Council approves the proposal.'),
      sources: ['w2w_case_user', 'w2w_nasa_wbs']
    },
    w2w_task_a: {
      id: 'w2w_task_a', code: 'A', label: t('A · Revisar costos/beneficios', 'A · Review costs/benefits'), layer: 'foundation', type: 'activity',
      duration: 3, durationUnit: 'days', responsible: unassigned, package: 'w2w_package_review',
      predecessors: [], successors: ['w2w_task_b', 'w2w_task_c'],
      what: t('Revisión de costos y beneficios incluida como tarea A del caso.', 'Review of costs and benefits included as case task A.'),
      why: t('Aporta la revisión que precede a solicitar agenda y desarrollar la propuesta.', 'It provides the review preceding the agenda request and proposal development.'),
      question: t('¿Qué costos y beneficios deben revisarse con la información disponible?', 'Which costs and benefits must be reviewed using the available information?'),
      example: t('Dato suministrado: 3 días; sin predecesoras indicadas; sucesoras B y C.', 'Supplied data: 3 days; no stated predecessors; successors B and C.'),
      analogy: t('Revisar la información de partida antes de preparar una recomendación.', 'Reviewing the starting information before preparing a recommendation.'),
      related: ['w2w_package_review', 'w2w_task_b', 'w2w_task_c', 'w2w_duration'],
      notConfuse: t('Los 3 días son duración de A, no una fecha ni una cifra de costo.', 'The 3 days are A’s duration, not a date or a cost figure.'),
      sources: ['w2w_case_user']
    },
    w2w_task_b: {
      id: 'w2w_task_b', code: 'B', label: t('B · Solicitar espacio en agenda', 'B · Request agenda time'), layer: 'foundation', type: 'activity',
      duration: 1, durationUnit: 'days', responsible: unassigned, package: 'w2w_package_agenda',
      predecessors: ['w2w_task_a'], successors: [],
      what: t('Solicitud de espacio en agenda identificada como tarea B.', 'The request for agenda time identified as task B.'),
      why: t('Hace explícito el trabajo de solicitar la oportunidad de presentar.', 'It makes requesting an opportunity to present explicit work.'),
      question: t('¿Qué solicitud debe tramitarse después de A?', 'Which request must be made after A?'),
      example: t('Dato suministrado: 1 día después de A; no se indican sucesoras.', 'Supplied data: 1 day after A; no successors are stated.'),
      analogy: t('Solicitar un turno inicia una gestión, sin garantizar su confirmación.', 'Requesting a slot initiates a process without guaranteeing confirmation.'),
      related: ['w2w_package_agenda', 'w2w_task_a', 'w2w_dependency'],
      notConfuse: t('No se añade B como predecesora de G: esa relación no fue suministrada.', 'B is not added as a predecessor of G: that relationship was not supplied.'),
      sources: ['w2w_case_user']
    },
    w2w_task_c: {
      id: 'w2w_task_c', code: 'C', label: t('C · Desarrollar propuesta', 'C · Develop the proposal'), layer: 'foundation', type: 'activity',
      duration: 5, durationUnit: 'days', responsible: unassigned, package: 'w2w_package_proposal',
      predecessors: ['w2w_task_a'], successors: ['w2w_task_d', 'w2w_task_e'],
      what: t('Desarrollo de la propuesta, identificado como tarea C.', 'Development of the proposal, identified as task C.'),
      why: t('Produce el contenido que antecede al material impreso y al PowerPoint.', 'It produces the content preceding the printed material and PowerPoint.'),
      question: t('¿Cómo se desarrolla la propuesta a partir de la revisión A?', 'How is the proposal developed from review A?'),
      example: t('Dato suministrado: 5 días después de A; sucesoras D y E.', 'Supplied data: 5 days after A; successors D and E.'),
      analogy: t('El texto central permite preparar diferentes soportes de comunicación.', 'A central text enables different communication formats to be prepared.'),
      related: ['w2w_package_proposal', 'w2w_task_a', 'w2w_task_d', 'w2w_task_e'],
      notConfuse: t('Desarrollar una propuesta no equivale a que haya sido aprobada.', 'Developing a proposal does not mean it has been approved.'),
      sources: ['w2w_case_user']
    },
    w2w_task_d: {
      id: 'w2w_task_d', code: 'D', label: t('D · Imprimir material', 'D · Print material'), layer: 'foundation', type: 'activity',
      duration: 2, durationUnit: 'days', responsible: unassigned, package: 'w2w_package_proposal',
      predecessors: ['w2w_task_c'], successors: ['w2w_task_g'],
      what: t('Impresión del material, identificada como tarea D.', 'Printing the material, identified as task D.'),
      why: t('Prepara uno de los resultados requeridos antes de G.', 'It prepares one of the results required before G.'),
      question: t('¿Qué material debe quedar impreso después de C?', 'Which material must be printed after C?'),
      example: t('Dato suministrado: 2 días después de C; sucesora G.', 'Supplied data: 2 days after C; successor G.'),
      analogy: t('Un contenido preparado pasa a su soporte físico.', 'Prepared content is transferred to a physical format.'),
      related: ['w2w_package_proposal', 'w2w_task_c', 'w2w_task_g'],
      notConfuse: t('La duración no informa cantidades de copias, proveedor o presupuesto.', 'The duration does not specify copy counts, supplier, or budget.'),
      sources: ['w2w_case_user']
    },
    w2w_task_e: {
      id: 'w2w_task_e', code: 'E', label: t('E · Desarrollar PowerPoint', 'E · Develop PowerPoint'), layer: 'foundation', type: 'activity',
      duration: 5, durationUnit: 'days', responsible: unassigned, package: 'w2w_package_presentation',
      predecessors: ['w2w_task_c'], successors: ['w2w_task_f'],
      what: t('Desarrollo del PowerPoint, identificado como tarea E.', 'Development of the PowerPoint, identified as task E.'),
      why: t('Prepara el apoyo visual que antecede al ensayo.', 'It prepares the visual support preceding rehearsal.'),
      question: t('¿Cómo se representa la propuesta en el apoyo visual?', 'How is the proposal represented in the visual support?'),
      example: t('Dato suministrado: 5 días después de C; sucesora F.', 'Supplied data: 5 days after C; successor F.'),
      analogy: t('Una guía visual organiza lo que acompañará una explicación oral.', 'A visual guide organizes what accompanies an oral explanation.'),
      related: ['w2w_package_presentation', 'w2w_task_c', 'w2w_task_f'],
      notConfuse: t('Cinco días de desarrollo no significan cinco diapositivas ni cinco días de presentación.', 'Five days of development do not mean five slides or five days of presenting.'),
      sources: ['w2w_case_user']
    },
    w2w_task_f: {
      id: 'w2w_task_f', code: 'F', label: t('F · Ensayar', 'F · Rehearse'), layer: 'foundation', type: 'activity',
      duration: 2, durationUnit: 'days', responsible: unassigned, package: 'w2w_package_presentation',
      predecessors: ['w2w_task_e'], successors: ['w2w_task_g'],
      what: t('Ensayo incluido como tarea F después de desarrollar PowerPoint.', 'Rehearsal included as task F after developing PowerPoint.'),
      why: t('Incluye la preparación de la intervención dentro del trabajo del caso.', 'It includes preparing to deliver the presentation within the case work.'),
      question: t('¿Qué debe practicarse con el apoyo visual preparado?', 'What should be practiced with the prepared visual support?'),
      example: t('Dato suministrado: 2 días después de E; sucesora G.', 'Supplied data: 2 days after E; successor G.'),
      analogy: t('El ensayo musical prepara la interpretación antes de actuar ante el público.', 'A musical rehearsal prepares a performance before playing for an audience.'),
      related: ['w2w_package_presentation', 'w2w_task_e', 'w2w_task_g'],
      notConfuse: t('Ensayar no sustituye presentar/apoyar ni acredita una decisión del Council.', 'Rehearsing does not replace presenting/supporting or establish a Council decision.'),
      sources: ['w2w_case_user']
    },
    w2w_task_g: {
      id: 'w2w_task_g', code: 'G', label: t('G · Presentar/apoyar', 'G · Present/support'), layer: 'foundation', type: 'activity',
      duration: 1, durationUnit: 'days', responsible: unassigned, package: 'w2w_package_session',
      predecessors: ['w2w_task_d', 'w2w_task_f'], successors: [],
      what: t('Presentación y apoyo de la propuesta, incluidos como tarea G.', 'Presentation and support of the proposal, included as task G.'),
      why: t('Identifica la intervención ante el Town Council como trabajo del proyecto.', 'It identifies participation before the Town Council as project work.'),
      question: t('¿Qué trabajo de presentación/apoyo completa G?', 'Which presentation/support work does G complete?'),
      example: t('Dato suministrado: 1 día después de D y F; sin sucesoras indicadas.', 'Supplied data: 1 day after D and F; no stated successors.'),
      analogy: t('Subir al escenario es una actividad distinta de preparar los materiales y ensayar.', 'Taking the stage is a different activity from preparing materials and rehearsing.'),
      related: ['w2w_package_session', 'w2w_task_d', 'w2w_task_f', 'w2w_dependency'],
      notConfuse: t('Su duración no es una fecha de reunión; su realización no demuestra aprobación.', 'Its duration is not a meeting date; completing it does not establish approval.'),
      sources: ['w2w_case_user']
    },
    w2w_ai_hub: {
      id: 'w2w_ai_hub', label: t('IA · APOYO A LA DESCOMPOSICIÓN', 'AI · DECOMPOSITION SUPPORT'), layer: 'ai',
      what: t('Punto común de asistencia para interpretar el alcance y proponer una descomposición revisable.', 'A common assistance point for interpreting scope and proposing a reviewable decomposition.'),
      why: t('Permite explorar una estructura sin dar por aceptada su salida.', 'It allows a structure to be explored without assuming its output is accepted.'),
      question: t('¿Qué puede proponer la IA usando solo el alcance disponible?', 'What can AI propose using only the available scope?'),
      example: t('Aplicación ilustrativa: organizar A–G en grupos candidatos con referencias a sus tareas originales.', 'Illustrative application: organize A–G into candidate groups with references to the original tasks.'),
      analogy: t('Una mesa de borradores permite comparar propuestas antes de elegir una.', 'A drafting table lets proposals be compared before choosing one.'),
      related: ['w2w_scope', 'w2w_generated', 'w2w_missing_work', 'w2w_pm_team'],
      notConfuse: t('Es apoyo para producir borradores; no tiene autoridad para aceptar alcance.', 'It supports drafting; it has no authority to accept scope.'),
      sources: ['w2w_case_user', 'w2w_nist_genai'],
      ai: {
        connection: t('Conecta alcance, borrador, tareas y revisión de omisiones.', 'It connects scope, the draft, tasks, and omission review.'),
        does: t('Interpreta, descompone y sugiere preguntas para revisión.', 'It interprets, decomposes, and suggests review questions.'),
        changes: t('Reduce el esfuerzo de elaborar una primera organización.', 'It reduces the effort of preparing an initial organization.'),
        validate: t('El PM y el equipo revisan la salida; la IA no valida su propia autoridad.', 'The PM and team review the output; AI does not validate its own authority.')
      }
    },
    w2w_generated: {
      id: 'w2w_generated', label: t('EDT GENERADA · BORRADOR', 'GENERATED WBS · DRAFT'), layer: 'ai',
      what: t('Descomposición propuesta que todavía requiere revisión humana.', 'A proposed decomposition that still requires human review.'),
      why: t('Hace visible el estado provisional de las agrupaciones.', 'It makes the provisional status of groupings visible.'),
      question: t('¿Qué elementos están respaldados y cuáles son propuestas?', 'Which elements are supported, and which are proposals?'),
      example: t('Aplicación ilustrativa: la IA agrupa C y D como propuesta y material impreso; el nombre sigue siendo candidato.', 'Illustrative application: AI groups C and D as proposal and printed material; that name remains a candidate.'),
      analogy: t('Un plano a lápiz permite cambios antes de su aprobación.', 'A pencil drawing allows changes before approval.'),
      related: ['w2w_wbs', 'w2w_ai_hub', 'w2w_pm_team', 'w2w_validated'],
      notConfuse: t('EDT GENERADA ≠ EDT VALIDADA. Una estructura plausible no acredita cobertura ni aceptación.', 'GENERATED WBS ≠ VALIDATED WBS. A plausible structure does not establish coverage or acceptance.'),
      sources: ['w2w_burek_wbs', 'w2w_nist_genai', 'w2w_case_user'],
      ai: {
        connection: t('Es la salida de la asistencia de descomposición.', 'It is the output of decomposition assistance.'),
        does: t('Organiza candidatos con trazabilidad a su entrada.', 'It organizes candidates with traceability to their input.'),
        changes: t('Ofrece un objeto concreto que el equipo puede corregir.', 'It provides a concrete object for the team to correct.'),
        validate: t('Revisar A–G, límites, duplicados y agrupaciones antes de aceptar la EDT.', 'Review A–G, boundaries, duplicates, and groupings before accepting the WBS.')
      }
    },
    w2w_missing_work: {
      id: 'w2w_missing_work', label: t('POSIBLES OMISIONES', 'POSSIBLE OMISSIONS'), layer: 'ai',
      what: t('Diferencias o preguntas encontradas al comparar alcance y borrador.', 'Differences or questions found when comparing scope and the draft.'),
      why: t('Ayuda a detectar una tarea suministrada que haya quedado sin representar.', 'It helps detect a supplied task that has not been represented.'),
      question: t('¿Falta trabajo ya incluido en el alcance o se está sugiriendo trabajo nuevo?', 'Is already-scoped work missing, or is new work being suggested?'),
      example: t('Aplicación ilustrativa: si B no aparece en el borrador, señalar su ausencia; no inventar una tarea H.', 'Illustrative application: if B is absent from the draft, flag its absence; do not invent task H.'),
      analogy: t('Una lista de cotejo señala una casilla sin cubrir, pero no cambia por sí sola el pedido.', 'A checklist flags an uncovered item but does not itself change the request.'),
      related: ['w2w_scope', 'w2w_generated', 'w2w_task_b', 'w2w_pm_team'],
      notConfuse: t('Una sospecha de omisión no es autorización para añadir alcance.', 'A suspected omission is not authorization to add scope.'),
      sources: ['w2w_case_user', 'w2w_burek_wbs', 'w2w_nist_genai'],
      ai: {
        connection: t('Compara el borrador con las entradas suministradas.', 'It compares the draft with the supplied inputs.'),
        does: t('Señala ausencias, duplicados o puntos sin evidencia.', 'It flags absences, duplicates, or unsupported points.'),
        changes: t('Concentra la revisión en diferencias identificables.', 'It focuses review on identifiable differences.'),
        validate: t('Confirmar cada hallazgo; cualquier trabajo nuevo requiere aceptación de alcance.', 'Confirm each finding; any new work requires scope acceptance.')
      }
    },
    w2w_pm_team: {
      id: 'w2w_pm_team', label: t('PM / EQUIPO · REVISAR SALIDA', 'PM / TEAM · REVIEW OUTPUT'), layer: 'ai',
      what: t('Revisión humana de la descomposición producida con apoyo de IA.', 'Human review of the decomposition produced with AI assistance.'),
      why: t('Mantiene el juicio sobre alcance y aceptación en las personas responsables.', 'It keeps judgment about scope and acceptance with the responsible people.'),
      question: t('¿Qué se acepta, corrige o devuelve como pregunta?', 'What is accepted, corrected, or returned as a question?'),
      example: t('Aplicación ilustrativa: aceptar una agrupación útil de A–G y rechazar una fase de implementación no solicitada.', 'Illustrative application: accept a useful grouping of A–G and reject an unrequested implementation phase.'),
      analogy: t('La revisión editorial aprueba el texto; no convierte al procesador de texto en autoridad.', 'Editorial review approves the text; it does not make the word processor an authority.'),
      related: ['w2w_generated', 'w2w_ai_hub', 'w2w_validated', 'w2w_scope'],
      notConfuse: t('La flecha hacia el hub representa gobierno de la salida, no validación de la IA como autoridad.', 'The arrow to the hub represents governance of its output, not validation of AI as an authority.'),
      sources: ['w2w_nist_genai', 'w2w_burek_wbs'],
      ai: {
        connection: t('El PM y el equipo supervisan lo que el hub propone.', 'The PM and team oversee what the hub proposes.'),
        does: t('La IA puede presentar evidencia y diferencias para apoyar la revisión.', 'AI can present evidence and differences to support review.'),
        changes: t('La propuesta pasa por una decisión humana explícita.', 'The proposal undergoes an explicit human decision.'),
        validate: t('Revisar la salida contra el alcance; tramitar aceptación de cambios con quien corresponda.', 'Review the output against scope; obtain change acceptance from the appropriate authority.')
      }
    },
    w2w_validated: {
      id: 'w2w_validated', label: t('EDT VALIDADA', 'VALIDATED WBS'), layer: 'ai',
      what: t('Estado de una EDT después de revisar y aceptar su correspondencia con el alcance.', 'The state of a WBS after its alignment with scope has been reviewed and accepted.'),
      why: t('Distingue una propuesta generada de una estructura aceptada para continuar la planificación.', 'It distinguishes a generated proposal from an accepted structure for continuing planning.'),
      question: t('¿Qué evidencia y decisión respaldan su aceptación?', 'Which evidence and decision support its acceptance?'),
      example: t('Aplicación ilustrativa: tras revisar A–G, registrar las agrupaciones aceptadas. El atlas no afirma que esa aceptación ya ocurrió.', 'Illustrative application: after reviewing A–G, record accepted groupings. The atlas does not claim that this acceptance has already occurred.'),
      analogy: t('Un plano revisado lleva una decisión identificable, no solo una apariencia terminada.', 'A reviewed drawing carries an identifiable decision, not just a finished appearance.'),
      related: ['w2w_generated', 'w2w_pm_team', 'w2w_wbs', 'w2w_scope'],
      notConfuse: t('Validar la EDT no aprueba la propuesta ante el Council ni valida automáticamente un cronograma.', 'Validating the WBS does not approve the proposal before the Council or automatically validate a schedule.'),
      sources: ['w2w_burek_wbs', 'w2w_nist_genai', 'w2w_case_user'],
      ai: {
        connection: t('Es el destino de la revisión humana, después del borrador asistido.', 'It is the destination of human review after the assisted draft.'),
        does: t('La IA puede ayudar a registrar cambios y evidencia de revisión.', 'AI can help record changes and review evidence.'),
        changes: t('El estado pasa de propuesto a aceptado solo mediante revisión.', 'The state changes from proposed to accepted only through review.'),
        validate: t('Conservar versión, decisiones y límites; una ampliación posterior requiere nueva aceptación.', 'Preserve the version, decisions, and boundaries; a later expansion requires new acceptance.')
      }
    },
    w2w_ai_interpret: {
      id: 'w2w_ai_interpret', label: t('INTERPRETAR / ESTRUCTURAR EL ALCANCE', 'INTERPRET / STRUCTURE SCOPE'), layer: 'ai',
      what: t('Asistencia para separar el objetivo, los datos expresos y lo no especificado.', 'Assistance for separating the objective, explicit data, and unspecified information.'),
      why: t('Evita que una interpretación se presente como dato del caso.', 'It helps prevent an interpretation from being presented as case data.'),
      question: t('¿De qué frase suministrada procede cada afirmación?', 'Which supplied phrase supports each statement?'),
      example: t('Aplicación: conservar Dawn, Town Council y A–G; marcar responsables y costos como no especificados.', 'Application: retain Dawn, Town Council, and A–G; mark assignees and costs as unspecified.'),
      analogy: t('Subrayar un texto distingue lo que dice de lo que el lector supone.', 'Annotating a text separates what it says from what the reader assumes.'),
      related: ['w2w_ai_hub', 'w2w_scope', 'w2w_project'],
      notConfuse: t('Interpretar no autoriza completar vacíos con datos inventados.', 'Interpreting does not authorize filling gaps with invented data.'),
      sources: ['w2w_case_user', 'w2w_nist_genai'],
      ai: {
        connection: t('Hub IA → alcance.', 'AI hub → scope.'),
        does: t('Clasifica objetivo, tareas, restricciones y preguntas abiertas.', 'It classifies the objective, tasks, constraints, and open questions.'),
        changes: t('El alcance textual queda organizado para revisión.', 'Textual scope becomes organized for review.'),
        validate: t('Cotejar cada interpretación con la entrada y dejar visibles los vacíos.', 'Compare every interpretation with the input and keep gaps visible.')
      }
    },
    w2w_ai_decompose: {
      id: 'w2w_ai_decompose', label: t('DESCOMPONER EN UN BORRADOR', 'DECOMPOSE INTO A DRAFT'), layer: 'ai',
      what: t('Propuesta de entregables y paquetes para organizar el trabajo suministrado.', 'A proposal of deliverables and packages for organizing the supplied work.'),
      why: t('Permite discutir una jerarquía concreta.', 'It enables discussion of a concrete hierarchy.'),
      question: t('¿Cada paquete contribuye a un entregable del alcance?', 'Does each package contribute to an in-scope deliverable?'),
      example: t('Aplicación: agrupar E y F como apoyo visual y ensayo, identificando ese nombre como ilustrativo.', 'Application: group E and F as visual support and rehearsal, identifying that name as illustrative.'),
      analogy: t('Ordenar piezas en cajas ayuda a ver conjuntos sin fabricar piezas nuevas.', 'Sorting pieces into boxes helps reveal groups without manufacturing new pieces.'),
      related: ['w2w_ai_hub', 'w2w_generated', 'w2w_work_package'],
      notConfuse: t('Descomponer no convierte las precedencias A–G en ramas de EDT.', 'Decomposing does not turn A–G precedence relationships into WBS branches.'),
      sources: ['w2w_burek_wbs', 'w2w_case_user', 'w2w_nist_genai'],
      ai: {
        connection: t('Hub IA → borrador de EDT.', 'AI hub → WBS draft.'),
        does: t('Propone niveles y mantiene las tareas vinculadas a sus paquetes.', 'It proposes levels and keeps tasks linked to their packages.'),
        changes: t('El equipo compara una organización visible del trabajo.', 'The team compares a visible organization of the work.'),
        validate: t('Comprobar cobertura de A–G, ausencia de duplicados y frontera entre paquetes y actividades.', 'Check coverage of A–G, absence of duplicates, and the boundary between packages and activities.')
      }
    },
    w2w_ai_suggest: {
      id: 'w2w_ai_suggest', label: t('SUGERIR ACTIVIDADES CANDIDATAS', 'SUGGEST CANDIDATE ACTIVITIES'), layer: 'ai',
      what: t('Propuestas de acciones posibles que requieren evaluación antes de incorporarse.', 'Proposals for possible actions requiring evaluation before incorporation.'),
      why: t('Ayuda a explorar el detalle de un paquete sin modificar silenciosamente el caso.', 'It helps explore package detail without silently changing the case.'),
      question: t('¿La candidata detalla trabajo existente o amplía el alcance?', 'Does the candidate detail existing work or expand scope?'),
      example: t('Aplicación ilustrativa: preguntar si C necesita una revisión de redacción; no crear una tarea adicional como hecho del caso.', 'Illustrative application: ask whether C needs an editing review; do not create an additional task as a case fact.'),
      analogy: t('Una nota adhesiva propone algo para discutir, no lo convierte en compromiso.', 'A sticky note proposes something for discussion; it does not make it a commitment.'),
      related: ['w2w_ai_hub', 'w2w_task', 'w2w_task_c', 'w2w_scope'],
      notConfuse: t('Candidata no significa tarea aprobada ni nueva predecesora para D04.', 'Candidate does not mean an approved task or a new predecessor for D04.'),
      sources: ['w2w_case_user', 'w2w_nist_genai'],
      ai: {
        connection: t('Hub IA → tareas.', 'AI hub → tasks.'),
        does: t('Presenta sugerencias separadas de A–G.', 'It presents suggestions separately from A–G.'),
        changes: t('El equipo dispone de preguntas para precisar el trabajo.', 'The team gains questions for clarifying the work.'),
        validate: t('Aceptar o rechazar cada candidata; conservar los IDs y datos del caso sin alteraciones automáticas.', 'Accept or reject each candidate; preserve case IDs and data without automatic changes.')
      }
    },
    w2w_ai_omissions: {
      id: 'w2w_ai_omissions', label: t('REVISAR OMISIONES', 'REVIEW OMISSIONS'), layer: 'ai',
      what: t('Comparación entre el alcance suministrado y su representación en el borrador.', 'Comparison of the supplied scope with its representation in the draft.'),
      why: t('Una jerarquía ordenada también puede omitir trabajo.', 'An orderly hierarchy can still omit work.'),
      question: t('¿Qué tarea suministrada no tiene ubicación en el árbol?', 'Which supplied task has no place in the tree?'),
      example: t('Aplicación: si el borrador incluye A y C–G pero omite B, señalar la falta de la solicitud de agenda.', 'Application: if the draft includes A and C–G but omits B, flag the missing agenda request.'),
      analogy: t('Cotejar un pedido con su contenido permite reconocer una pieza faltante.', 'Comparing an order with its contents reveals a missing piece.'),
      related: ['w2w_ai_hub', 'w2w_missing_work', 'w2w_task_b', 'w2w_generated'],
      notConfuse: t('Recuperar una tarea suministrada no es lo mismo que inventar trabajo adicional.', 'Recovering a supplied task is not the same as inventing additional work.'),
      sources: ['w2w_case_user', 'w2w_burek_wbs', 'w2w_nist_genai'],
      ai: {
        connection: t('Hub IA → posibles omisiones.', 'AI hub → possible omissions.'),
        does: t('Señala cobertura incompleta y pide evidencia para elementos dudosos.', 'It flags incomplete coverage and requests evidence for doubtful elements.'),
        changes: t('La revisión se apoya en diferencias concretas.', 'Review is supported by concrete differences.'),
        validate: t('Confirmar el hallazgo contra la fuente; no añadir alcance sin aceptación.', 'Confirm the finding against the source; do not add scope without acceptance.')
      }
    },
    w2w_ai_validate: {
      id: 'w2w_ai_validate', label: t('VALIDAR LA SALIDA', 'VALIDATE THE OUTPUT'), layer: 'ai',
      what: t('Decisión del PM y del equipo sobre la salida propuesta, con las aceptaciones de alcance que correspondan.', 'The PM and team’s decision on the proposed output, with any required scope acceptance.'),
      why: t('Impide confundir una respuesta generada con una estructura aceptada.', 'It prevents confusing a generated response with an accepted structure.'),
      question: t('¿La salida representa el alcance aceptado y deja visibles sus supuestos?', 'Does the output represent accepted scope and make its assumptions visible?'),
      example: t('Aplicación: revisar que D conserve 2 días, G conserve D y F, y las agrupaciones sigan identificadas como propuestas.', 'Application: check that D retains 2 days, G retains D and F, and groupings remain identified as proposals.'),
      analogy: t('La persona revisora firma el contenido, no otorga autoridad a la herramienta que lo redactó.', 'The reviewer signs off on the content, not on the authority of the tool that drafted it.'),
      related: ['w2w_pm_team', 'w2w_ai_hub', 'w2w_generated', 'w2w_validated'],
      notConfuse: t('PM/equipo → hub significa validar la salida y gobernar su uso; no declarar a la IA autoridad del proyecto.', 'PM/team → hub means validating the output and governing its use; it does not declare AI the project authority.'),
      sources: ['w2w_case_user', 'w2w_nist_genai', 'w2w_burek_wbs'],
      ai: {
        connection: t('PM/equipo → hub IA: gobierno sobre su salida.', 'PM/team → AI hub: governance over its output.'),
        does: t('La IA facilita trazabilidad y revisiones; las personas deciden.', 'AI supports traceability and revisions; people decide.'),
        changes: t('Solo una salida revisada y aceptada puede tratarse como EDT validada.', 'Only a reviewed and accepted output can be treated as a validated WBS.'),
        validate: t('Registrar decisiones, mantener A–G fieles al caso y aceptar explícitamente cualquier ampliación.', 'Record decisions, keep A–G faithful to the case, and explicitly accept any expansion.')
      }
    }
  });

  const taskIds = ['w2w_task_a', 'w2w_task_b', 'w2w_task_c', 'w2w_task_d', 'w2w_task_e', 'w2w_task_f', 'w2w_task_g'];
  db.diagrams['03'] = {
    id: '03',
    title: t('ESTRUCTURA DE DESGLOSE DE TRABAJO', 'WORK BREAKDOWN STRUCTURE'),
    transition: t('Elegir cómo trabajaremos no basta.\n\n¿Cómo convertimos el alcance completo en trabajo que podamos asignar, estimar y controlar?', 'Choosing how we will work is not enough.\n\nHow do we turn the full scope into work we can assign, estimate, and control?'),
    subtitle: t('DIVIDE Y VENCERÁS', 'DIVIDE AND CONQUER'),
    definition: t('La EDT descompone el alcance del proyecto en partes progresivamente más pequeñas y manejables.', 'The WBS breaks down the project scope into progressively smaller, more manageable parts.'),
    root: 'w2w_project',
    groups: [
      { label: t('ALCANCE Y EDT', 'SCOPE AND WBS'), nodes: ['w2w_scope', 'w2w_wbs'] },
      { label: t('ENTREGABLES Y PAQUETES', 'DELIVERABLES AND PACKAGES'), nodes: ['w2w_major_deliverable', 'w2w_work_package'] },
      { label: t('DATOS DE LAS ACTIVIDADES', 'ACTIVITY DATA'), nodes: ['w2w_task', 'w2w_duration', 'w2w_responsible', 'w2w_dependency'] }
    ],
    defaultMode: 'base',
    layerLabels: {
      foundation: t('CST212 · FUNDAMENTO ACADÉMICO', 'CST212 FOUNDATION'),
      deepening: t('PROFUNDIZACIÓN ACADÉMICA', 'ACADEMIC DEEPENING'),
      ai: t('EXTENSIÓN AI-FIRST', 'AI-FIRST EXTENSION')
    },
    layerNotes: {
      foundation: t('Temas y frases del pedido CST212. Objetivo, tareas A–G, duraciones y precedencias proceden del caso suministrado por el usuario.', 'Topics and phrases from the CST212 request. The objective, tasks A–G, durations, and precedence data come from the user-supplied case.'),
      deepening: t('Los entregables y paquetes del árbol son agrupaciones didácticas propias, apoyadas en el método EDT. No se atribuyen como agrupaciones dadas por Tiffin.', 'The tree’s deliverables and packages are original teaching groupings supported by the WBS method. They are not attributed as groupings supplied by Tiffin.'),
      ai: t('Aplicación pedagógica AI-first solicitada en la continuación. NIST sustenta la cautela ante contenido generado; este flujo no se presenta como método prescrito por NIST ni por Tiffin.', 'An AI-first teaching application requested in the continuation. NIST supports caution about generated content; this flow is not presented as a method prescribed by NIST or Tiffin.')
    },
    sources: ['w2w_case_user', 'w2w_pmi_lexicon', 'w2w_burek_wbs', 'w2w_nasa_wbs', 'w2w_nasa_planning', 'w2w_nist_genai'],
    sourceNote: t('La fuente del caso es el material suministrado por el usuario y no tiene URL proporcionada. PMI, NASA y NIST son referencias externas, no fuentes de los hechos de Eden Bay ni publicaciones atribuidas a Tiffin. s.f. indica fecha no identificada.', 'The case source is user-supplied material with no provided URL. PMI, NASA, and NIST are external references, not sources of Eden Bay facts or publications attributed to Tiffin. s.f. indicates no identified date (n.d.).'),
    caseNote: t('Ejemplo Eden Bay; agrupación ilustrativa de las tareas suministradas', 'Eden Bay example; illustrative grouping of the supplied tasks'),
    exampleNote: t('Eden Bay: preparar la propuesta de Dawn al Town Council. A–G y sus datos son suministrados; los nombres y agrupaciones de entregables y paquetes son explícitamente ilustrativos.', 'Eden Bay: prepare Dawn’s proposal to the Town Council. A–G and their data are supplied; deliverable and package names and groupings are explicitly illustrative.'),
    treeCaption: t('PROYECTO > ENTREGABLE PRINCIPAL > PAQUETE DE TRABAJO. Debajo se muestran actividades derivadas, diferenciadas de la EDT.', 'PROJECT > MAJOR DELIVERABLE > WORK PACKAGE. Derived activities are shown below, distinguished from the WBS.'),
    treeBoundary: t('La EDT termina en los paquetes. La unión con una actividad indica a qué resultado contribuye; no expresa precedencia temporal.', 'The WBS ends at packages. A link to an activity identifies the result it contributes to; it does not express time precedence.'),
    completenessNote: t('La ilustración organiza las siete tareas suministradas. Una EDT completa debe cubrir el alcance aceptado sin omisiones ni duplicados; este ejemplo no presume trabajo adicional.', 'The illustration organizes the seven supplied tasks. A complete WBS must cover accepted scope without omissions or duplicates; this example does not assume additional work.'),
    scheduleBoundary: t('EDT: QUÉ TRABAJO. CRONOGRAMA: CUÁNDO / EN QUÉ ORDEN. D03 conserva datos de las tareas para D04; no calcula fechas, holguras ni ruta crítica.', 'WBS: WHAT WORK. SCHEDULE: WHEN / IN WHAT ORDER. D03 preserves task data for D04; it does not calculate dates, float, or the critical path.'),
    durationNote: t('DURACIÓN ≠ FECHA DE CALENDARIO. Los días se conservan tal como fueron suministrados; no se infieren fecha inicial, calendario laboral ni días festivos.', 'DURATION ≠ CALENDAR DATE. Days are preserved as supplied; no start date, work calendar, or holidays are inferred.'),
    assignmentNote: t('No se suministraron responsables por tarea, recursos concretos ni costos estimados. La asociación de Dawn con la propuesta no completa esos campos.', 'Task assignees, specific resources, and estimated costs were not supplied. Dawn’s association with the proposal does not fill those fields.'),
    tree: {
      concept: 'w2w_project', type: 'project',
      children: [
        {
          concept: 'w2w_major_proposal', type: 'deliverable',
          children: [
            { concept: 'w2w_package_review', type: 'work-package', children: [
              { concept: 'w2w_task_a', type: 'activity' }
            ] },
            { concept: 'w2w_package_proposal', type: 'work-package', children: [
              { concept: 'w2w_task_c', type: 'activity' },
              { concept: 'w2w_task_d', type: 'activity' }
            ] }
          ]
        },
        {
          concept: 'w2w_major_session', type: 'deliverable',
          children: [
            { concept: 'w2w_package_agenda', type: 'work-package', children: [
              { concept: 'w2w_task_b', type: 'activity' }
            ] },
            { concept: 'w2w_package_presentation', type: 'work-package', children: [
              { concept: 'w2w_task_e', type: 'activity' },
              { concept: 'w2w_task_f', type: 'activity' }
            ] },
            { concept: 'w2w_package_session', type: 'work-package', children: [
              { concept: 'w2w_task_g', type: 'activity' }
            ] }
          ]
        }
      ]
    },
    taskIds: taskIds,
    activityFields: [
      { key: 'durationLabel', concept: 'w2w_duration', label: t('DURACIÓN DE LA TAREA', 'TASK DURATION') },
      { key: 'responsible', concept: 'w2w_responsible', label: t('RECURSO RESPONSABLE', 'RESPONSIBLE RESOURCE') },
      { key: 'predecessors', concept: 'w2w_dependency', label: t('PREDECESORAS', 'PREDECESSORS') },
      { key: 'successors', concept: 'w2w_dependency', label: t('SUCESORAS', 'SUCCESSORS') }
    ],
    activityNote: t('Duraciones y predecesoras son datos suministrados, no estimaciones de IA. Las sucesoras son la lectura inversa de esas mismas relaciones. No se añade B como predecesora de G.', 'Durations and predecessors are supplied data, not AI estimates. Successors are the reverse reading of those same relationships. B is not added as a predecessor of G.'),
    activityDetails: taskIds.map((id) => {
      const task = db.concepts[id];
      return {
        concept: id, code: task.code, package: task.package,
        duration: task.duration, durationUnit: task.durationUnit,
        durationLabel: t(task.duration + (task.duration === 1 ? ' día' : ' días'), task.duration + (task.duration === 1 ? ' day' : ' days')),
        responsible: task.responsible,
        dependencies: task.predecessors.slice(),
        predecessors: task.predecessors.slice(),
        successors: task.successors.slice(),
        sources: ['w2w_case_user']
      };
    }),
    aiTitle: t('¿CÓMO AYUDA LA IA A DESCOMPONER SIN INVENTAR TRABAJO FUERA DEL ALCANCE?', 'HOW CAN AI HELP DECOMPOSE WITHOUT INVENTING OUT-OF-SCOPE WORK?'),
    aiMasterQuestion: t('¿Cómo ayuda la IA a descomponer sin inventar trabajo fuera del alcance?', 'How can AI help decompose without inventing out-of-scope work?'),
    aiMessage: t('La IA interpreta el alcance y propone una descomposición. El PM y el equipo revisan la salida: una EDT generada no es una EDT validada. Nunca se añade alcance sin aceptación.', 'AI interprets scope and proposes a decomposition. The PM and team review the output: a generated WBS is not a validated WBS. Scope is never added without acceptance.'),
    aiPending: false,
    aiHub: 'w2w_ai_hub',
    aiNode: 'w2w_ai_hub',
    aiFlow: ['w2w_scope', 'w2w_ai_hub', 'w2w_generated', 'w2w_pm_team', 'w2w_validated'],
    distinction: ['w2w_generated', 'w2w_validated'],
    aiFlowCaption: t('ALCANCE > IA > BORRADOR DE DESCOMPOSICIÓN > REVISIÓN PM/EQUIPO > EDT VALIDADA', 'SCOPE > AI > DRAFT DECOMPOSITION > PM/TEAM REVIEW > VALIDATED WBS'),
    aiRelationships: [
      {
        id: 'w2w_rel_interpret', from: 'w2w_ai_hub', to: 'w2w_scope',
        action: t('INTERPRETAR / ESTRUCTURAR', 'INTERPRET / STRUCTURE'),
        concept: 'w2w_ai_interpret',
        value: t('Organizar lo suministrado y marcar lo desconocido.', 'Organize supplied information and mark what is unknown.')
      },
      {
        id: 'w2w_rel_decompose', from: 'w2w_ai_hub', to: 'w2w_generated',
        action: t('DESCOMPONER', 'DECOMPOSE'),
        concept: 'w2w_ai_decompose',
        value: t('Proponer entregables y paquetes con trazabilidad al alcance.', 'Propose deliverables and packages traceable to scope.')
      },
      {
        id: 'w2w_rel_suggest', from: 'w2w_ai_hub', to: 'w2w_task',
        action: t('SUGERIR CANDIDATOS', 'SUGGEST CANDIDATES'),
        concept: 'w2w_ai_suggest',
        value: t('Separar propuestas de actividades de las tareas A–G dadas.', 'Separate proposed activities from the given tasks A–G.')
      },
      {
        id: 'w2w_rel_omissions', from: 'w2w_ai_hub', to: 'w2w_missing_work',
        action: t('REVISAR OMISIONES', 'REVIEW OMISSIONS'),
        concept: 'w2w_ai_omissions',
        value: t('Detectar diferencias sin convertir sugerencias en alcance aceptado.', 'Detect differences without turning suggestions into accepted scope.')
      },
      {
        id: 'w2w_rel_validate', from: 'w2w_pm_team', to: 'w2w_ai_hub',
        action: t('VALIDAR', 'VALIDATE'),
        concept: 'w2w_ai_validate',
        value: t('El PM/equipo valida la salida; no concede autoridad a la IA.', 'The PM/team validates the output; it does not grant authority to AI.')
      }
    ]
  };
})();
