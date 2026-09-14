(function () {
  const t = (es, en) => ({ es, en });
  window.CST212_W2 = window.CST212_W2 || { diagrams: {}, concepts: {}, sources: {} };
  const db = window.CST212_W2;

  Object.assign(db.sources, {
    w2m_src_sdlc: {
      author: 'Jackson, G., Holdsworth, J., & Kosinski, M.',
      year: 's.f.',
      title: 'What is the software development life cycle (SDLC)?',
      url: 'https://www.ibm.com/think/topics/sdlc'
    },
    w2m_src_rad: {
      author: 'Stryker, C.',
      year: '2026',
      title: 'What is rapid application development?',
      url: 'https://www.ibm.com/think/topics/rapid-application-development'
    },
    w2m_src_requirements: {
      author: 'Connor, C., & Callejo, L.',
      year: '2002',
      title: 'Requirements Management Practices for Developers',
      url: 'https://public.dhe.ibm.com/software/rational/web/whitepapers/2003/RM_developers.pdf'
    },
    w2m_src_manifesto: {
      author: 'Beck, K., Beedle, M., van Bennekum, A., Cockburn, A., Cunningham, W., Fowler, M., Grenning, J., Highsmith, J., Hunt, A., Jeffries, R., Kern, J., Marick, B., Martin, R. C., Mellor, S., Schwaber, K., Sutherland, J., & Thomas, D.',
      year: '2001',
      title: 'Manifesto for Agile Software Development',
      url: 'https://agilemanifesto.org/'
    },
    w2m_src_principles: {
      author: 'Beck, K., Beedle, M., van Bennekum, A., Cockburn, A., Cunningham, W., Fowler, M., Grenning, J., Highsmith, J., Hunt, A., Jeffries, R., Kern, J., Marick, B., Martin, R. C., Mellor, S., Schwaber, K., Sutherland, J., & Thomas, D.',
      year: '2001',
      title: 'Principles behind the Agile Manifesto',
      url: 'https://agilemanifesto.org/principles.html'
    },
    w2m_src_scrum: {
      author: 'Schwaber, K., & Sutherland, J.',
      year: '2020',
      title: 'The Scrum Guide: The Definitive Guide to Scrum: The Rules of the Game',
      url: 'https://scrumguides.org/scrum-guide.html'
    },
    w2m_src_scrum_events: {
      author: 'Scrum Alliance',
      year: 's.f.',
      title: 'The Scrum Events and How They Work Together',
      url: 'https://resources.scrumalliance.org/Article/scrum-events'
    },
    w2m_src_scrum_artifacts: {
      author: 'Scrum Alliance',
      year: 's.f.',
      title: 'The Three Scrum Artifacts and Their Commitments',
      url: 'https://resources.scrumalliance.org/Article/scrum-artifacts'
    },
    w2m_src_scrum_team: {
      author: 'Scrum Alliance',
      year: 's.f.',
      title: 'The Scrum Team Roles and Accountabilities',
      url: 'https://resources.scrumalliance.org/Article/scrum-team'
    },
    w2m_src_kanban: {
      author: 'Kanban University',
      year: 's.f.',
      title: 'The Official Guide to the Kanban Method',
      url: 'https://kanban.university/kanban-guide/'
    },
    w2m_src_xp: {
      author: 'Agile Alliance',
      year: 's.f.',
      title: 'Extreme Programming',
      url: 'https://agilealliance.org/glossary/xp/'
    },
    w2m_src_ai_risk: {
      author: 'Autio, C., Schwartz, R., Dunietz, J., Jain, S., Stanley, M., Tabassi, E., Hall, P., & Roberts, K.',
      year: '2024',
      title: 'Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)',
      url: 'https://doi.org/10.6028/NIST.AI.600-1'
    },
    w2m_src_ai_agents: {
      author: 'GitHub',
      year: 's.f.',
      title: 'Application card: GitHub Copilot Agents',
      url: 'https://docs.github.com/en/copilot/responsible-use/agents'
    },
    w2m_src_ai_chat: {
      author: 'GitHub',
      year: 's.f.',
      title: 'Responsible use of GitHub Copilot Chat in GitHub',
      url: 'https://docs.github.com/copilot/responsible-use/chat-in-github'
    },
    w2m_src_ai_tests: {
      author: 'GitHub',
      year: 's.f.',
      title: 'Writing tests with GitHub Copilot',
      url: 'https://docs.github.com/en/copilot/tutorials/write-tests'
    },
    w2m_src_ai_docs: {
      author: 'GitHub',
      year: 's.f.',
      title: 'Prompt files',
      url: 'https://docs.github.com/en/copilot/tutorials/customization-library/prompt-files'
    }
  });

  Object.assign(db.concepts, {
    w2m_development_approach: {
      id: 'w2m_development_approach',
      label: t('¿CÓMO ORGANIZAMOS EL DESARROLLO?', 'HOW SHOULD WE ORGANIZE DEVELOPMENT?'),
      layer: 'foundation',
      what: t('Elegir cómo coordinar fases, colaboración, entregas y cambios. En CST212, SDLC proporciona el marco del ciclo de vida; los otros términos describen modelos, enfoques o formas de colaborar que pueden combinarse.', 'Choosing how to coordinate phases, collaboration, delivery, and change. In CST212, SDLC provides the lifecycle framework; the other terms describe models, approaches, or forms of collaboration that can be combined.'),
      why: t('La forma de trabajar debe responder a la incertidumbre, la disponibilidad de usuarios y las restricciones del proyecto.', 'The way of working should respond to uncertainty, user availability, and project constraints.'),
      question: t('¿Qué necesitamos aprender antes de comprometernos con una solución?', 'What do we need to learn before committing to a solution?'),
      example: t('Ejemplo ilustrativo: para un portal de tutorías, el equipo usa SDLC como mapa, una sesión JAD para aclarar necesidades y prototipos RAD para explorar la reserva.', 'Illustrative example: for a tutoring portal, the team uses SDLC as a map, a JAD session to clarify needs, and RAD prototypes to explore booking.'),
      analogy: t('Preparar un viaje exige un itinerario general, una forma de avanzar y acuerdos entre viajeros; son decisiones relacionadas, pero distintas.', 'Preparing a journey requires an overall itinerary, a way to travel, and agreements among travelers; these are related but different decisions.'),
      related: ['w2m_sdlc', 'w2m_waterfall', 'w2m_rad', 'w2m_jad', 'w2m_agile', 'w2m_ai_support'],
      notConfuse: t('Un ciclo de vida, un modelo secuencial, un taller de requisitos y una familia adaptativa no son categorías equivalentes ni opciones siempre excluyentes.', 'A lifecycle, a sequential model, a requirements workshop, and an adaptive family are not equivalent categories or always mutually exclusive choices.'),
      sources: ['w2m_src_sdlc', 'w2m_src_requirements', 'w2m_src_manifesto'],
      ai: {
        connection: t('Extensión AI-first: apoyo transversal a actividades dentro del enfoque elegido.', 'AI-first extension: support across activities within the chosen approach.'),
        does: t('Propone borradores de requisitos, prototipos y evidencias para discutir.', 'Proposes draft requirements, prototypes, and evidence for discussion.'),
        changes: t('Puede acortar la preparación de alternativas; coordinar decisiones sigue siendo necesario.', 'Can shorten preparation of alternatives; decisions still require coordination.'),
        validate: t('El equipo justifica el enfoque y quién revisa, decide y acepta cada resultado.', 'The team justifies its approach and who reviews, decides, and accepts each result.')
      }
    },
    w2m_sdlc: {
      id: 'w2m_sdlc',
      label: t('SDLC · Ciclo de vida', 'SDLC · System development life cycle'),
      layer: 'foundation',
      what: t('El ciclo de vida del desarrollo de sistemas organiza el desarrollo del sistema en fases como planeación, análisis, diseño, implementación y soporte.', 'The system development life cycle organizes system development into phases such as planning, analysis, design, implementation, and support.'),
      why: t('Ubica el propósito y los resultados de cada fase. En la Semana 2 se cierra planeación y se comienza análisis; el sistema también necesitará soporte.', 'Locates the purpose and outcomes of each phase. Week 2 closes planning and begins analysis; the system will also need support.'),
      question: t('¿En qué fase estamos y qué debemos lograr antes de continuar?', 'Which phase are we in, and what must we accomplish before continuing?'),
      example: t('Ejemplo ilustrativo: un sistema de préstamos pasa de justificar su necesidad a precisar reglas de devolución, diseñarlas, implementarlas y mantenerlas.', 'Illustrative example: a lending system moves from justifying its need to specifying return rules, designing them, implementing them, and maintaining them.'),
      analogy: t('El mapa de un recorrido identifica etapas; no obliga a recorrerlas una sola vez ni a usar el mismo vehículo.', 'A route map identifies stages; it does not require visiting each only once or using the same vehicle.'),
      related: ['w2m_development_approach', 'w2m_waterfall', 'w2m_rad', 'w2m_agile', 'w2m_requirements', 'w2m_documentation'],
      notConfuse: t('SDLC no equivale a Waterfall. El marco de fases puede organizarse de manera secuencial o iterativa; los nombres y agrupaciones varían entre fuentes.', 'SDLC does not equal Waterfall. Its phases can be organized sequentially or iteratively; names and groupings vary across sources.'),
      sources: ['w2m_src_sdlc'],
      ai: {
        connection: t('La IA se conecta a los productos de las fases: requisitos, diseño, código y evidencia.', 'AI connects to phase outputs: requirements, design, code, and evidence.'),
        does: t('Ayuda a detectar diferencias entre lo solicitado, lo documentado y lo construido.', 'Helps identify differences between what was requested, documented, and built.'),
        changes: t('Las revisiones pueden preparar evidencia con mayor frecuencia.', 'Reviews can prepare evidence more frequently.'),
        validate: t('Los responsables de cada fase comprueban trazabilidad y criterios de salida; un borrador no completa una fase.', 'Those responsible for each phase check traceability and exit criteria; a draft does not complete a phase.')
      }
    },
    w2m_waterfall: {
      id: 'w2m_waterfall',
      label: t('Waterfall · Modelo secuencial', 'Waterfall · Sequential model'),
      layer: 'foundation',
      what: t('Un enfoque secuencial donde el trabajo avanza principalmente de una fase completada hacia la siguiente.', 'A sequential approach in which work mainly progresses from a completed phase to the next.'),
      why: t('Ofrece claridad de etapas, documentación y planificación cuando los requisitos se conocen bien. Un cambio tardío puede obligar a rehacer entregables previos.', 'Provides clear stages, documentation, and planning when requirements are well understood. A late change can require reworking earlier deliverables.'),
      question: t('¿Qué tan confiables son los requisitos antes de comprometer diseño y construcción?', 'How reliable are the requirements before committing to design and construction?'),
      example: t('Ejemplo ilustrativo: una exportación con campos y formato ya acordados puede planificarse por etapas; cambiar el formato al final obliga a revisar diseño y pruebas.', 'Illustrative example: an export with agreed fields and format can be planned in stages; changing the format near the end requires revisiting design and tests.'),
      analogy: t('Una cadena de relevos: cada tramo recibe un resultado del anterior; corregirlo tarde afecta a quienes ya avanzaron.', 'A relay chain: each stage receives an outcome from the previous one; correcting it late affects those already moving ahead.'),
      related: ['w2m_sdlc', 'w2m_requirements', 'w2m_documentation', 'w2m_testing', 'w2m_agile'],
      notConfuse: t('Secuencial no significa que corregir sea imposible, ni garantiza fechas exactas. Describe cómo se organiza el avance predominante.', 'Sequential does not mean correction is impossible or dates are guaranteed. It describes the predominant organization of progress.'),
      sources: ['w2m_src_sdlc', 'w2m_src_requirements'],
      ai: {
        connection: t('Revisión de documentos y cambios entre fases.', 'Review of documents and changes between phases.'),
        does: t('Prepara una lista de requisitos, diseños y pruebas que podría afectar una modificación.', 'Prepares a list of requirements, designs, and tests potentially affected by a modification.'),
        changes: t('Puede acelerar el análisis de impacto; el retrabajo y las aprobaciones siguen existiendo.', 'Can accelerate impact analysis; rework and approvals still exist.'),
        validate: t('El equipo confirma dependencias reales y la autoridad competente aprueba el cambio.', 'The team confirms actual dependencies and the appropriate authority approves the change.')
      }
    },
    w2m_rad: {
      id: 'w2m_rad',
      label: t('RAD · Desarrollo rápido de aplicaciones', 'RAD · Rapid Application Development'),
      layer: 'foundation',
      what: t('Un enfoque orientado a desarrollar con rapidez mediante iteraciones, prototipos, participación del usuario y componentes que pueden construirse en paralelo.', 'An approach focused on rapid development through iterations, prototypes, user participation, and components that can be built in parallel.'),
      why: t('Permite discutir algo visible temprano. Necesita usuarios disponibles, capacidades técnicas y suficiente modularidad para que la rapidez no termine en problemas de integración.', 'Makes it possible to discuss something visible early. Requires available users, technical capability, and enough modularity to prevent speed from becoming integration trouble.'),
      question: t('¿Qué prototipo nos permitirá aclarar una necesidad antes de construir toda la solución?', 'Which prototype will help clarify a need before building the entire solution?'),
      example: t('Ejemplo ilustrativo: una escuela de música prueba un prototipo de reserva de salas, ajusta los horarios visibles y después conecta la disponibilidad real.', 'Illustrative example: a music school tries a room-booking prototype, adjusts the displayed schedules, and later connects actual availability.'),
      analogy: t('Probar maquetas de un escenario antes de construirlo permite cambiar la distribución mientras hacerlo cuesta menos.', 'Trying stage models before construction lets people change the layout while doing so costs less.'),
      related: ['w2m_prototypes', 'w2m_feedback', 'w2m_jad', 'w2m_sdlc', 'w2m_testing'],
      notConfuse: t('Un prototipo rápido no demuestra seguridad, rendimiento o integración de producción. RAD tampoco exige que todos los componentes puedan paralelizarse.', 'A quick prototype does not demonstrate production security, performance, or integration. RAD also does not require every component to be parallelizable.'),
      sources: ['w2m_src_rad'],
      ai: {
        connection: t('Generación y revisión de prototipos.', 'Prototype generation and revision.'),
        does: t('Prepara variantes de pantallas a partir de una necesidad explícita.', 'Prepares screen variants from an explicit need.'),
        changes: t('Puede reducir el tiempo hasta la primera conversación con usuarios.', 'Can reduce time to the first conversation with users.'),
        validate: t('Los usuarios prueban la tarea; el equipo distingue simulación, funcionalidad real y deuda pendiente.', 'Users try the task; the team distinguishes simulation, actual functionality, and unfinished work.')
      }
    },
    w2m_jad: {
      id: 'w2m_jad',
      label: t('JAD · Sesiones colaborativas', 'JAD · Collaborative sessions'),
      layer: 'foundation',
      what: t('Un enfoque colaborativo que reúne usuarios, responsables y equipo del sistema en sesiones estructuradas para acelerar la comprensión, definición y acuerdo sobre necesidades y requisitos.', 'A collaborative approach that brings users, decision-makers, and the system team together in structured sessions to accelerate understanding, definition, and agreement on needs and requirements.'),
      why: t('Hace visibles diferencias de interpretación. La preparación, la representación de usuarios y la facilitación condicionan la calidad del acuerdo.', 'Makes differences in interpretation visible. Preparation, user representation, and facilitation shape the quality of agreement.'),
      question: t('¿Quién debe participar para aclarar esta regla y quién puede confirmar el acuerdo?', 'Who needs to participate to clarify this rule, and who can confirm the agreement?'),
      example: t('Ejemplo ilustrativo: en un taller de préstamos, usuarios y personal acuerdan cómo registrar una devolución parcial y dejan una excepción pendiente para consulta.', 'Illustrative example: in a lending workshop, users and staff agree how to record a partial return and leave an exception pending consultation.'),
      analogy: t('Reunir a quienes interpretan una partitura para acordar un pasaje antes de ensayarlo por separado.', 'Bringing the performers of a score together to agree on a passage before rehearsing separately.'),
      related: ['w2m_requirements', 'w2m_documentation', 'w2m_feedback', 'w2m_rad', 'w2m_agile'],
      notConfuse: t('JAD significa Joint Application Development. Sus sesiones apoyan especialmente requisitos; no sustituyen todo el SDLC ni garantizan consenso por reunir personas.', 'JAD means Joint Application Development. Its sessions especially support requirements; they do not replace the entire SDLC or guarantee consensus merely by gathering people.'),
      sources: ['w2m_src_requirements'],
      ai: {
        connection: t('Preparación y síntesis de las sesiones de requisitos.', 'Preparation and synthesis of requirements sessions.'),
        does: t('Ordena notas autorizadas en acuerdos, desacuerdos y preguntas pendientes.', 'Organizes authorized notes into agreements, disagreements, and open questions.'),
        changes: t('El facilitador puede dedicar menos tiempo a ordenar el acta y más a aclarar diferencias.', 'The facilitator can spend less time organizing minutes and more time clarifying differences.'),
        validate: t('Los participantes confirman decisiones y atribuciones. No se debe convertir una propuesta en un acuerdo inexistente.', 'Participants confirm decisions and attributions. A proposal must not become an agreement that never occurred.')
      }
    },
    w2m_agile: {
      id: 'w2m_agile',
      label: t('Agile · Familia adaptativa', 'Agile · Adaptive family'),
      layer: 'foundation',
      what: t('Una familia de enfoques adaptativos e iterativos que favorecen entregas frecuentes, colaboración y respuesta al cambio.', 'A family of adaptive, iterative approaches that favor frequent delivery, collaboration, and responsiveness to change.'),
      why: t('Permite revisar lo que se construye al aprender de su uso. La adaptación requiere participación, prioridades claras y disciplina técnica.', 'Allows teams to revise what they build as they learn from use. Adaptation requires participation, clear priorities, and technical discipline.'),
      question: t('¿Qué resultado pequeño podemos entregar para aprender qué conviene hacer después?', 'What small outcome can we deliver to learn what to do next?'),
      example: t('Ejemplo ilustrativo: una biblioteca entrega primero la consulta de disponibilidad y usa comentarios reales para decidir si prioriza reservas o avisos.', 'Illustrative example: a library first delivers availability lookup and uses actual feedback to decide whether to prioritize reservations or notifications.'),
      analogy: t('Ensayar una composición por fragmentos, escucharlos y ajustar la interpretación sin perder el propósito del concierto.', 'Rehearsing a composition in sections, listening, and adjusting the interpretation while keeping the concert purpose in view.'),
      related: ['w2m_scrum', 'w2m_kanban', 'w2m_xp', 'w2m_feedback', 'w2m_requirements'],
      notConfuse: t('Agile no equivale a Scrum ni elimina planes o documentación. Kanban se relaciona por su utilidad para gestionar flujo; tiene raíces Lean y no nació subordinado a Agile.', 'Agile does not equal Scrum or eliminate plans or documentation. Kanban is related through its usefulness for managing flow; it has Lean roots and did not originate as a subordinate of Agile.'),
      sources: ['w2m_src_manifesto', 'w2m_src_principles', 'w2m_src_kanban'],
      ai: {
        connection: t('Preparación de opciones a partir de entregas y retroalimentación.', 'Preparation of options from deliveries and feedback.'),
        does: t('Relaciona comentarios con necesidades y propone pequeñas mejoras para discutir.', 'Connects comments to needs and proposes small improvements for discussion.'),
        changes: t('Puede aumentar las alternativas disponibles en cada ciclo de aprendizaje.', 'Can increase the alternatives available in each learning cycle.'),
        validate: t('Las personas comprueban valor, prioridades y capacidad; más código generado no implica más valor entregado.', 'People check value, priorities, and capacity; more generated code does not imply more delivered value.')
      }
    },
    w2m_scrum: {
      id: 'w2m_scrum',
      label: t('Scrum · Framework ágil', 'Scrum · Agile framework'),
      layer: 'deepening',
      what: t('Framework para trabajar de forma adaptativa. Sprint: ciclo de trabajo; Product Backlog: mejoras ordenadas; Sprint Backlog: objetivo, selección y plan del ciclo. Product Owner: valor y prioridades; Scrum Master: efectividad y comprensión de Scrum; Developers: incremento utilizable. Review: inspeccionar el resultado con interesados; Retro: mejorar la forma de trabajar.', 'A framework for adaptive work. Sprint: work cycle; Product Backlog: ordered improvements; Sprint Backlog: cycle goal, selection, and plan. Product Owner: value and priorities; Scrum Master: effectiveness and understanding of Scrum; Developers: usable increment. Review: inspect the outcome with stakeholders; Retro: improve the way of working.'),
      why: t('Conecta responsabilidades, trabajo visible y oportunidades regulares de aprender. Las fichas relacionadas explican cada elemento directamente.', 'Connects accountabilities, visible work, and regular opportunities to learn. Related drawers explain each element directly.'),
      question: t('¿Cómo sabremos que el resultado del Sprint es útil y qué cambiaremos al aprender?', 'How will we know the Sprint outcome is useful, and what will we change as we learn?'),
      example: t('Ejemplo ilustrativo: un equipo entrega la reserva de tutorías, conversa con estudiantes en la Review y acuerda mejorar sus datos de prueba en la Retro.', 'Illustrative example: a team delivers tutoring booking, talks with students at the Review, and agrees to improve its test data at the Retro.'),
      analogy: t('Un ritmo de ensayo compartido: existe una meta, cada persona aporta su especialidad y el grupo revisa tanto la música como su coordinación.', 'A shared rehearsal rhythm: there is a goal, each person contributes expertise, and the group reviews both the music and its coordination.'),
      related: ['w2m_sprint', 'w2m_product_backlog', 'w2m_sprint_backlog', 'w2m_product_owner', 'w2m_scrum_master', 'w2m_developers', 'w2m_sprint_review', 'w2m_sprint_retrospective', 'w2m_sprint_planning', 'w2m_daily_scrum', 'w2m_increment', 'w2m_definition_of_done', 'w2m_agile', 'w2m_kanban', 'w2m_xp'],
      notConfuse: t('Scrum es un framework del ecosistema Agile, no toda la agilidad. No prescribe todas las prácticas de ingeniería ni convierte al Scrum Master en jefe del equipo.', 'Scrum is a framework in the Agile ecosystem, not all of agility. It does not prescribe every engineering practice or make the Scrum Master the team boss.'),
      sources: ['w2m_src_scrum', 'w2m_src_scrum_events', 'w2m_src_scrum_team', 'w2m_src_scrum_artifacts'],
      ai: {
        connection: t('Apoyo a backlog, desarrollo y conversaciones de inspección.', 'Support for the backlog, development, and inspection conversations.'),
        does: t('Prepara preguntas y borradores basados en los elementos reales del producto.', 'Prepares questions and drafts based on actual product items.'),
        changes: t('Puede reducir la preparación administrativa de los eventos.', 'Can reduce administrative preparation for events.'),
        validate: t('PO, SM y Developers conservan sus responsabilidades; una IA no verifica por sí sola el valor del incremento.', 'PO, SM, and Developers retain their accountabilities; AI alone does not establish the value of an increment.')
      }
    },
    w2m_kanban: {
      id: 'w2m_kanban',
      label: t('Kanban · Gestión del flujo', 'Kanban · Flow management'),
      layer: 'deepening',
      what: t('Enfoque para mejorar el flujo de trabajo: visualizarlo, limitar trabajo en curso, explicitar políticas y ajustar con evidencia. Sus raíces están en Lean; se aplica sobre una forma de trabajo existente.', 'An approach to improving workflow: visualize work, limit work in progress, make policies explicit, and adjust using evidence. Its roots are in Lean; it is applied to an existing way of working.'),
      why: t('Ayuda a ver acumulaciones y terminar trabajo antes de comenzar más. Puede complementar equipos ágiles y otros servicios.', 'Helps reveal accumulating work and finish items before starting more. Can complement agile teams and other services.'),
      question: t('¿Dónde espera el trabajo y qué impide que llegue a completarse?', 'Where is work waiting, and what prevents it from reaching completion?'),
      example: t('Ejemplo ilustrativo: un equipo de soporte ve solicitudes acumuladas en revisión y acuerda ayudar allí antes de iniciar nuevas.', 'Illustrative example: a support team sees requests accumulating in review and agrees to help there before starting new ones.'),
      analogy: t('Observar las filas de una cafetería: abrir más pedidos no ayuda si todos esperan en el mismo mostrador.', 'Watching queues in a café: opening more orders does not help if all of them wait at the same counter.'),
      related: ['w2m_wip', 'w2m_scrum', 'w2m_agile', 'w2m_feedback', 'w2m_development'],
      notConfuse: t('Un tablero por sí solo no es gestión del flujo. Kanban no exige Sprints ni nació como un submétodo de Agile.', 'A board alone is not flow management. Kanban does not require Sprints and did not originate as an Agile submethod.'),
      sources: ['w2m_src_kanban'],
      ai: {
        connection: t('Lectura del historial de estados y bloqueos.', 'Reading the history of workflow states and blockers.'),
        does: t('Señala acumulaciones y propone preguntas sobre esperas recurrentes.', 'Highlights accumulating work and proposes questions about recurring waits.'),
        changes: t('Puede facilitar la conversación sobre el flujo del servicio.', 'Can make conversations about service flow easier.'),
        validate: t('El equipo comprueba fechas y causas; una espera observada no demuestra bajo desempeño individual.', 'The team checks dates and causes; an observed wait does not establish poor individual performance.')
      }
    },
    w2m_wip: {
      id: 'w2m_wip',
      label: t('WIP · Trabajo en curso', 'WIP · Work in progress'),
      layer: 'deepening',
      what: t('Trabajo iniciado y aún no terminado. Limitarlo hace explícita la capacidad disponible antes de aceptar más.', 'Work that has started but has not finished. Limiting it makes available capacity explicit before accepting more.'),
      why: t('Demasiados asuntos abiertos compiten por atención y ocultan esperas.', 'Too many open items compete for attention and hide waits.'),
      question: t('¿Qué podemos terminar o desbloquear antes de iniciar otro asunto?', 'What can we finish or unblock before starting another item?'),
      example: t('Ejemplo ilustrativo: ante varias solicitudes detenidas por el mismo dato faltante, el equipo resuelve esa dependencia antes de abrir otra solicitud.', 'Illustrative example: with several requests stalled by the same missing data, the team resolves that dependency before opening another request.'),
      analogy: t('Dejar espacio en la mesa de trabajo para poder terminar lo que ya está sobre ella.', 'Leaving space on the workbench so the work already there can be finished.'),
      related: ['w2m_kanban', 'w2m_development', 'w2m_testing'],
      notConfuse: t('Un límite de WIP regula trabajo simultáneo; no es una cuota de productividad de una persona.', 'A WIP limit regulates simultaneous work; it is not an individual productivity quota.'),
      sources: ['w2m_src_kanban'],
      ai: {
        connection: t('Detección de trabajo iniciado que parece olvidado.', 'Detection of started work that appears to have been forgotten.'),
        does: t('Propone una lista de elementos sin movimiento para conversar.', 'Proposes a list of items without movement for discussion.'),
        changes: t('Puede hacer visibles pendientes que no aparecen en el resumen diario.', 'Can reveal pending items absent from the daily summary.'),
        validate: t('Las personas confirman si falta actualizar el tablero o existe un bloqueo real.', 'People confirm whether the board needs updating or there is an actual blocker.')
      }
    },
    w2m_xp: {
      id: 'w2m_xp',
      label: t('XP · Extreme Programming', 'XP · Extreme Programming'),
      layer: 'deepening',
      what: t('Enfoque ágil con énfasis en prácticas de ingeniería: pruebas antes del código, programación en pareja, integración continua, diseño sencillo y refactorización.', 'An agile approach emphasizing engineering practices: tests before code, pair programming, continuous integration, simple design, and refactoring.'),
      why: t('La capacidad de cambiar depende de mantener el software comprensible y comprobable, además de organizar reuniones y prioridades.', 'The ability to change depends on keeping software understandable and checkable as well as organizing meetings and priorities.'),
      question: t('¿Qué práctica nos permite descubrir pronto si un cambio rompe algo que ya funcionaba?', 'Which practice helps us discover early whether a change breaks something that already worked?'),
      example: t('Ejemplo ilustrativo: antes de permitir cancelar una reserva, dos integrantes expresan el comportamiento esperado en una prueba y luego implementan el cambio.', 'Illustrative example: before enabling booking cancellation, two team members express the expected behavior in a test and then implement the change.'),
      analogy: t('Afinar y escuchar cada instrumento mientras se ensaya, para evitar descubrir al final que el conjunto está desafinado.', 'Tuning and listening to each instrument during rehearsal to avoid discovering at the end that the ensemble is out of tune.'),
      related: ['w2m_agile', 'w2m_scrum', 'w2m_development', 'w2m_testing', 'w2m_definition_of_done'],
      notConfuse: t('XP no significa programar sin diseño ni trabajar a un ritmo insostenible. Refactorizar mejora la estructura preservando el comportamiento esperado.', 'XP does not mean coding without design or working at an unsustainable pace. Refactoring improves structure while preserving expected behavior.'),
      sources: ['w2m_src_xp'],
      ai: {
        connection: t('Propuestas de código y pruebas durante la ingeniería.', 'Code and test suggestions during engineering work.'),
        does: t('Sugiere casos límite o una forma más clara de expresar una función.', 'Suggests boundary cases or a clearer way to express a function.'),
        changes: t('Puede acortar ciclos de propuesta y revisión técnica.', 'Can shorten cycles of suggestions and technical review.'),
        validate: t('El equipo revisa comportamiento y diseño. Un asistente no reemplaza la revisión humana de una pareja ni convierte pruebas generadas en evidencia ejecutada.', 'The team reviews behavior and design. An assistant does not replace a human partner review or turn generated tests into executed evidence.')
      }
    },
    w2m_sprint: {
      id: 'w2m_sprint',
      label: t('Sprint', 'Sprint'),
      layer: 'deepening',
      what: t('Ciclo de duración fija de un mes o menos que contiene el trabajo y los demás eventos de Scrum, orientado a un objetivo.', 'A fixed-length cycle of one month or less containing the work and other Scrum events, directed toward a goal.'),
      why: t('Crea una oportunidad cercana de revisar un resultado utilizable.', 'Creates a near-term opportunity to inspect a usable outcome.'),
      question: t('¿Qué objetivo da sentido al trabajo de este Sprint?', 'What goal gives this Sprint work its purpose?'),
      example: t('Ejemplo ilustrativo: durante un Sprint de dos semanas, el equipo busca que un estudiante pueda confirmar una tutoría; dos semanas es una elección del ejemplo.', 'Illustrative example: during a two-week Sprint, the team aims to let a student confirm a tutoring session; two weeks is a choice in this example.'),
      analogy: t('Un tramo de ensayo con una meta musical, no una carrera para tocar más notas.', 'A rehearsal segment with a musical goal, not a race to play more notes.'),
      related: ['w2m_scrum', 'w2m_sprint_backlog', 'w2m_sprint_planning', 'w2m_daily_scrum', 'w2m_sprint_review', 'w2m_sprint_retrospective'],
      notConfuse: t('Un Sprint no es una fase exclusiva de programación. Se puede ajustar el alcance con el PO sin poner en riesgo el objetivo; no se alarga para ocultar trabajo pendiente.', 'A Sprint is not a coding-only phase. Scope can be adjusted with the PO without endangering the goal; it is not extended to hide unfinished work.'),
      sources: ['w2m_src_scrum', 'w2m_src_scrum_events'],
      ai: {
        connection: t('Preparación de información sobre el objetivo del ciclo.', 'Preparation of information about the cycle goal.'),
        does: t('Agrupa dudas que amenazan la reserva completa del ejemplo.', 'Groups uncertainties that threaten complete booking in the example.'),
        changes: t('Puede revelar antes qué falta para el resultado.', 'Can reveal earlier what the outcome still needs.'),
        validate: t('Los Developers contrastan el resumen con trabajo real y capacidad disponible.', 'Developers compare the summary with actual work and available capacity.')
      }
    },
    w2m_product_backlog: {
      id: 'w2m_product_backlog',
      label: t('Product Backlog · Trabajo del producto', 'Product Backlog'),
      layer: 'deepening',
      what: t('Lista ordenada y cambiante de mejoras necesarias para el producto. Su compromiso es el Product Goal, el objetivo futuro que orienta el trabajo.', 'An ordered, evolving list of improvements needed for the product. Its commitment is the Product Goal, the future objective guiding the work.'),
      why: t('Hace visibles las opciones de mejora y su orden.', 'Makes improvement options and their order visible.'),
      question: t('¿Qué mejora aporta más al objetivo del producto ahora?', 'Which improvement contributes most to the product goal now?'),
      example: t('Ejemplo ilustrativo: consultar horarios, reservar y recibir recordatorios aparecen como mejoras; el PO cambia su orden tras conversar con usuarios.', 'Illustrative example: viewing schedules, booking, and receiving reminders appear as improvements; the PO changes their order after talking with users.'),
      analogy: t('Un repertorio ordenado que cambia conforme se aclara qué necesita la audiencia.', 'An ordered repertoire that changes as audience needs become clearer.'),
      related: ['w2m_product_owner', 'w2m_sprint_backlog', 'w2m_requirements', 'w2m_feedback'],
      notConfuse: t('No es una promesa de entregar todo ni un documento congelado. Una historia de usuario es un formato posible, no obligatorio en Scrum.', 'It is not a promise to deliver everything or a frozen document. A user story is a possible format, not a Scrum requirement.'),
      sources: ['w2m_src_scrum_artifacts', 'w2m_src_scrum'],
      ai: {
        connection: t('Clarificación de elementos del backlog.', 'Clarification of backlog items.'),
        does: t('Señala elementos parecidos y propone preguntas para distinguirlos.', 'Highlights similar items and suggests questions to distinguish them.'),
        changes: t('Puede facilitar una conversación de refinamiento mejor preparada.', 'Can make refinement conversations better prepared.'),
        validate: t('El PO decide el orden; los Developers valoran el tamaño del trabajo.', 'The PO decides the order; Developers assess the size of the work.')
      }
    },
    w2m_sprint_backlog: {
      id: 'w2m_sprint_backlog',
      label: t('Sprint Backlog · Plan del Sprint', 'Sprint Backlog · Sprint plan'),
      layer: 'deepening',
      what: t('Objetivo del Sprint, elementos seleccionados del Product Backlog y plan para realizarlos. Lo crean y adaptan los Developers.', 'The Sprint Goal, selected Product Backlog items, and the plan to deliver them. Developers create and adapt it.'),
      why: t('Explica por qué, qué y cómo se trabaja en el ciclo actual.', 'Explains why, what, and how work happens in the current cycle.'),
      question: t('¿Qué debemos adaptar hoy para avanzar hacia el objetivo?', 'What must we adapt today to move toward the goal?'),
      example: t('Ejemplo ilustrativo: confirmar tutorías es el objetivo; formulario y confirmación son la selección; validar horarios y probar conflictos forman parte del plan.', 'Illustrative example: confirming tutoring sessions is the goal; the form and confirmation are the selection; checking schedules and testing conflicts belong to the plan.'),
      analogy: t('La hoja de trabajo del ensayo de hoy, conectada con la pieza que se quiere lograr.', 'The worksheet for today rehearsal, connected to the piece the group wants to achieve.'),
      related: ['w2m_product_backlog', 'w2m_sprint', 'w2m_sprint_planning', 'w2m_developers', 'w2m_daily_scrum'],
      notConfuse: t('No es todo el Product Backlog ni una asignación fija del jefe. El plan evoluciona; el objetivo mantiene el foco.', 'It is not the entire Product Backlog or a fixed assignment from a boss. The plan evolves; the goal maintains focus.'),
      sources: ['w2m_src_scrum', 'w2m_src_scrum_artifacts'],
      ai: {
        connection: t('Descomposición del trabajo seleccionado.', 'Breaking down selected work.'),
        does: t('Propone pasos y dependencias técnicas para discutir.', 'Proposes steps and technical dependencies for discussion.'),
        changes: t('Puede acelerar el primer borrador del plan.', 'Can accelerate the first draft of the plan.'),
        validate: t('Los Developers ajustan tareas, capacidad y orden; la propuesta no es un compromiso automático.', 'Developers adjust tasks, capacity, and sequence; the proposal is not an automatic commitment.')
      }
    },
    w2m_product_owner: {
      id: 'w2m_product_owner',
      label: t('Product Owner · PO', 'Product Owner · PO'),
      layer: 'deepening',
      what: t('Responsable de maximizar el valor del producto y de la gestión efectiva del Product Backlog.', 'Accountable for maximizing product value and for effective Product Backlog management.'),
      why: t('Da claridad a decisiones sobre qué mejorar y por qué.', 'Clarifies decisions about what to improve and why.'),
      question: t('¿Qué evidencia justifica priorizar esta mejora?', 'What evidence justifies prioritizing this improvement?'),
      example: t('Ejemplo ilustrativo: el PO prioriza evitar reservas dobles antes de personalizar colores y explica el efecto esperado sobre usuarios.', 'Illustrative example: the PO prioritizes preventing double bookings before customizing colors and explains the expected effect on users.'),
      analogy: t('Quien cuida que el repertorio elegido responda al propósito del concierto.', 'The person who ensures the selected repertoire serves the concert purpose.'),
      related: ['w2m_product_backlog', 'w2m_sprint_review', 'w2m_developers', 'w2m_feedback'],
      notConfuse: t('No equivale automáticamente al patrocinador ni al gerente del proyecto. Escuchar a muchos interesados no convierte la responsabilidad en un comité.', 'It does not automatically equal the sponsor or project manager. Listening to many stakeholders does not turn the accountability into a committee.'),
      sources: ['w2m_src_scrum_team', 'w2m_src_scrum'],
      ai: {
        connection: t('Preparación de argumentos para priorizar.', 'Preparation of arguments for prioritization.'),
        does: t('Resume evidencia favorable y contraria a una mejora.', 'Summarizes evidence for and against an improvement.'),
        changes: t('Puede hacer más visibles los supuestos de la decisión.', 'Can make decision assumptions more visible.'),
        validate: t('El PO comprueba evidencia y asume la decisión; la IA no conoce por sí sola el valor del negocio.', 'The PO checks evidence and owns the decision; AI does not independently know business value.')
      }
    },
    w2m_scrum_master: {
      id: 'w2m_scrum_master',
      label: t('Scrum Master · SM', 'Scrum Master · SM'),
      layer: 'deepening',
      what: t('Responsable de establecer Scrum y de ayudar a mejorar la efectividad del Scrum Team mediante enseñanza, facilitación y eliminación de impedimentos.', 'Accountable for establishing Scrum and helping improve Scrum Team effectiveness through teaching, facilitation, and causing impediments to be removed.'),
      why: t('Ayuda a que los acuerdos de trabajo permitan aprender y colaborar.', 'Helps working agreements enable learning and collaboration.'),
      question: t('¿Qué barrera impide que el equipo se organice y mejore?', 'What barrier prevents the team from organizing itself and improving?'),
      example: t('Ejemplo ilustrativo: al detectar que nadie puede acceder al entorno de ensayo, el SM facilita resolver el acceso con el área responsable.', 'Illustrative example: after discovering that nobody can access the practice environment, the SM helps resolve access with the responsible department.'),
      analogy: t('Quien ayuda a que un conjunto aprenda a escucharse, sin tocar los instrumentos por sus integrantes.', 'Someone who helps an ensemble learn to listen, without playing the instruments for its members.'),
      related: ['w2m_scrum', 'w2m_developers', 'w2m_sprint_retrospective', 'w2m_daily_scrum'],
      notConfuse: t('No es un jefe que reparte tareas ni un secretario limitado a programar reuniones.', 'Not a boss who assigns tasks or a secretary limited to scheduling meetings.'),
      sources: ['w2m_src_scrum_team', 'w2m_src_scrum'],
      ai: {
        connection: t('Preparación de conversaciones sobre impedimentos.', 'Preparation of conversations about impediments.'),
        does: t('Ordena obstáculos registrados y preguntas pendientes.', 'Organizes recorded obstacles and open questions.'),
        changes: t('Puede liberar tiempo de organización para facilitar conversaciones.', 'Can free organizational effort for facilitating conversations.'),
        validate: t('El SM contrasta el contexto con las personas; no usa resúmenes para etiquetar o evaluar individuos.', 'The SM checks context with people and does not use summaries to label or evaluate individuals.')
      }
    },
    w2m_developers: {
      id: 'w2m_developers',
      label: t('Developers · Quienes crean el incremento', 'Developers · People creating the increment'),
      layer: 'deepening',
      what: t('Integrantes que crean un incremento utilizable, planifican el Sprint y cuidan la calidad. Incluye las especialidades necesarias, no solo programación.', 'Members who create a usable increment, plan the Sprint, and uphold quality. Includes the necessary specialties, not only programming.'),
      why: t('La entrega necesita integrar diseño, construcción y comprobación.', 'Delivery requires bringing together design, construction, and checking.'),
      question: t('¿Tenemos las capacidades y evidencias necesarias para terminar el resultado?', 'Do we have the capabilities and evidence needed to finish the outcome?'),
      example: t('Ejemplo ilustrativo: diseño de interfaz, programación y pruebas colaboran para que la confirmación de tutoría sea comprensible y funcione.', 'Illustrative example: interface design, programming, and testing collaborate to make tutoring confirmation understandable and functional.'),
      analogy: t('Los músicos que producen juntos una interpretación completa, cada uno aportando capacidades distintas.', 'The musicians who jointly produce a complete performance, each contributing different capabilities.'),
      related: ['w2m_sprint_backlog', 'w2m_increment', 'w2m_definition_of_done', 'w2m_development', 'w2m_testing'],
      notConfuse: t('Developers no significa únicamente personas que escriben código, ni equipos aislados que pasan problemas al siguiente departamento.', 'Developers does not mean only people who write code or isolated teams passing problems to the next department.'),
      sources: ['w2m_src_scrum_team', 'w2m_src_scrum'],
      ai: {
        connection: t('Apoyo técnico para construir y comprobar el incremento.', 'Technical support for building and checking the increment.'),
        does: t('Sugiere implementación y casos que convendría probar.', 'Suggests implementation and cases worth testing.'),
        changes: t('Puede reducir trabajo repetitivo de redacción de código.', 'Can reduce repetitive code-writing effort.'),
        validate: t('Los Developers revisan e integran las propuestas y conservan responsabilidad por la calidad.', 'Developers review and integrate proposals and retain accountability for quality.')
      }
    },
    w2m_sprint_review: {
      id: 'w2m_sprint_review',
      label: t('Sprint Review · Revisar el resultado', 'Sprint Review · Inspect the outcome'),
      layer: 'deepening',
      what: t('Sesión del Scrum Team con interesados para inspeccionar el resultado del Sprint y decidir adaptaciones futuras.', 'A session with the Scrum Team and stakeholders to inspect the Sprint outcome and decide future adaptations.'),
      why: t('Relaciona lo construido con necesidades y cambios del entorno.', 'Connects what was built with needs and changes in the environment.'),
      question: t('¿Qué aprendimos del resultado y qué conviene ajustar después?', 'What did we learn from the outcome, and what should we adjust next?'),
      example: t('Ejemplo ilustrativo: al usar la reserva, un estudiante identifica que falta aclarar la zona horaria; el equipo discute su impacto y el siguiente paso.', 'Illustrative example: while using booking, a student notices that the time zone is unclear; the team discusses its impact and the next step.'),
      analogy: t('Escuchar una pieza con su audiencia para comprender cómo fue recibida.', 'Listening to a piece with its audience to understand how it was received.'),
      related: ['w2m_feedback', 'w2m_product_backlog', 'w2m_increment', 'w2m_sprint_retrospective'],
      notConfuse: t('No se limita a una demostración, no es la Retro y no es una puerta obligatoria para liberar un incremento utilizable.', 'It is not limited to a demonstration, is not the Retro, and is not a mandatory gate for releasing a usable increment.'),
      sources: ['w2m_src_scrum_events', 'w2m_src_scrum'],
      ai: {
        connection: t('Síntesis de observaciones sobre el producto.', 'Synthesis of observations about the product.'),
        does: t('Agrupa comentarios sin borrar discrepancias.', 'Groups comments without erasing disagreements.'),
        changes: t('Puede facilitar que los aprendizajes lleguen al backlog.', 'Can help learning reach the backlog.'),
        validate: t('Los participantes confirman lo observado; frecuencia de un comentario no equivale a importancia.', 'Participants confirm observations; comment frequency does not equal importance.')
      }
    },
    w2m_sprint_retrospective: {
      id: 'w2m_sprint_retrospective',
      label: t('Sprint Retrospective · Retro', 'Sprint Retrospective · Retro'),
      layer: 'deepening',
      what: t('Evento del Scrum Team para acordar mejoras en calidad y efectividad de su forma de trabajar.', 'A Scrum Team event for agreeing improvements to the quality and effectiveness of its way of working.'),
      why: t('Transforma dificultades recurrentes en acciones de mejora.', 'Turns recurring difficulties into improvement actions.'),
      question: t('¿Qué cambio concreto probaremos para trabajar mejor?', 'What concrete change will we try to work better?'),
      example: t('Ejemplo ilustrativo: tras varias confusiones con datos de ensayo, el equipo acuerda preparar un conjunto compartido antes del próximo Sprint.', 'Illustrative example: after several misunderstandings over practice data, the team agrees to prepare a shared dataset before the next Sprint.'),
      analogy: t('Después del ensayo, el conjunto ajusta cómo se escucha y se coordina.', 'After rehearsal, the ensemble adjusts how it listens and coordinates.'),
      related: ['w2m_sprint_review', 'w2m_scrum_master', 'w2m_definition_of_done', 'w2m_feedback'],
      notConfuse: t('Revisa la forma de trabajar, mientras la Review inspecciona el resultado del producto. No es una sesión para culpar personas.', 'It examines the way of working, while the Review inspects the product outcome. It is not a session for blaming people.'),
      sources: ['w2m_src_scrum_events', 'w2m_src_scrum'],
      ai: {
        connection: t('Organización de observaciones voluntarias del equipo.', 'Organization of voluntarily shared team observations.'),
        does: t('Propone temas y posibles experimentos de mejora.', 'Suggests themes and possible improvement experiments.'),
        changes: t('Puede ayudar a pasar de muchas notas a una acción discutible.', 'Can help turn many notes into an action the team can discuss.'),
        validate: t('El equipo valida el contexto, protege información personal y elige la mejora; la IA no diagnostica a sus integrantes.', 'The team validates context, protects personal information, and chooses the improvement; AI does not diagnose its members.')
      }
    },
    w2m_sprint_planning: {
      id: 'w2m_sprint_planning',
      label: t('Sprint Planning · Planificación', 'Sprint Planning'),
      layer: 'deepening',
      what: t('Evento que inicia el Sprint: el equipo acuerda por qué vale la pena, qué puede realizar y cómo abordarlo.', 'The event that starts the Sprint: the team agrees why it is valuable, what can be delivered, and how to approach it.'),
      why: t('Relaciona objetivo, selección de trabajo y capacidad real.', 'Connects the goal, selected work, and actual capacity.'),
      question: t('¿Qué selección permite alcanzar un objetivo coherente y realizable?', 'Which selection supports a coherent, achievable goal?'),
      example: t('Ejemplo ilustrativo: el equipo selecciona consulta y confirmación para completar una reserva y deja personalización para otra ocasión.', 'Illustrative example: the team selects lookup and confirmation to complete a booking and leaves customization for another occasion.'),
      analogy: t('Elegir un pasaje que se pueda ensayar completo con el tiempo y músicos disponibles.', 'Choosing a passage that can be fully rehearsed with the available time and musicians.'),
      related: ['w2m_sprint', 'w2m_product_backlog', 'w2m_sprint_backlog', 'w2m_developers'],
      notConfuse: t('Planificar no garantiza terminar cualquier cantidad de trabajo solicitada.', 'Planning does not guarantee completing any requested amount of work.'),
      sources: ['w2m_src_scrum_events', 'w2m_src_scrum'],
      ai: {
        connection: t('Preparación de alternativas para el Sprint.', 'Preparation of Sprint alternatives.'),
        does: t('Muestra dependencias candidatas entre los elementos propuestos.', 'Shows candidate dependencies between proposed items.'),
        changes: t('Puede ayudar a discutir una selección con menos supuestos ocultos.', 'Can help discuss a selection with fewer hidden assumptions.'),
        validate: t('El equipo confirma objetivo y dependencias; los Developers deciden cuánto pueden abordar.', 'The team confirms the goal and dependencies; Developers decide how much they can take on.')
      }
    },
    w2m_daily_scrum: {
      id: 'w2m_daily_scrum',
      label: t('Daily Scrum · Inspección diaria', 'Daily Scrum · Daily inspection'),
      layer: 'deepening',
      what: t('Evento diario de 15 minutos para que los Developers inspeccionen el avance hacia el objetivo del Sprint y adapten su plan.', 'A daily 15-minute event for Developers to inspect progress toward the Sprint Goal and adapt their plan.'),
      why: t('Facilita reaccionar juntos ante un bloqueo o un descubrimiento.', 'Helps people respond together to a blocker or discovery.'),
      question: t('¿Qué ajuste necesitamos para avanzar hoy hacia el objetivo?', 'What adjustment do we need to move toward the goal today?'),
      example: t('Ejemplo ilustrativo: al faltar datos de horarios, dos integrantes coordinan resolverlos para desbloquear la confirmación.', 'Illustrative example: when schedule data is missing, two members coordinate to resolve it and unblock confirmation.'),
      analogy: t('Una breve afinación conjunta antes de continuar el ensayo.', 'A brief shared tuning before continuing rehearsal.'),
      related: ['w2m_developers', 'w2m_sprint_backlog', 'w2m_sprint', 'w2m_scrum_master'],
      notConfuse: t('No es un reporte al jefe ni exige contestar siempre tres preguntas. Adaptar el plan también puede ocurrir durante el resto del día.', 'It is not a report to a boss or a requirement to always answer three questions. The plan can also be adapted during the rest of the day.'),
      sources: ['w2m_src_scrum_events', 'w2m_src_scrum'],
      ai: {
        connection: t('Preparación de cambios relevantes desde el último encuentro.', 'Preparation of relevant changes since the last meeting.'),
        does: t('Resume actualizaciones registradas para que el equipo las contraste.', 'Summarizes recorded updates for the team to check.'),
        changes: t('Puede ahorrar búsqueda de información previa.', 'Can save effort gathering information beforehand.'),
        validate: t('Los Developers confirman el estado y conversan sobre el plan; un resumen no sustituye su coordinación.', 'Developers confirm status and discuss the plan; a summary does not replace their coordination.')
      }
    },
    w2m_increment: {
      id: 'w2m_increment',
      label: t('Incremento utilizable', 'Usable increment'),
      layer: 'deepening',
      what: t('Resultado utilizable que se suma a lo anterior y cumple la Definition of Done.', 'A usable outcome that adds to previous work and meets the Definition of Done.'),
      why: t('Permite juzgar progreso sobre algo que funciona en conjunto.', 'Allows progress to be judged through something that works as a whole.'),
      question: t('¿Puede usarse este resultado y funciona con lo que ya existía?', 'Can this outcome be used, and does it work with what already existed?'),
      example: t('Ejemplo ilustrativo: una reserva confirmada queda registrada y puede consultarse junto con las reservas anteriores.', 'Illustrative example: a confirmed booking is recorded and can be viewed alongside previous bookings.'),
      analogy: t('Añadir un pasaje ya ensayado que puede tocarse con el resto de la obra.', 'Adding a rehearsed passage that can be played with the rest of the work.'),
      related: ['w2m_definition_of_done', 'w2m_developers', 'w2m_prototypes', 'w2m_sprint_review'],
      notConfuse: t('Una maqueta o un fragmento de código sin integrar no constituye por sí solo un incremento utilizable.', 'A mockup or an unintegrated code fragment does not by itself constitute a usable increment.'),
      sources: ['w2m_src_scrum_artifacts', 'w2m_src_scrum'],
      ai: {
        connection: t('Apoyo para relacionar la entrega con evidencia de calidad.', 'Support for relating delivery to quality evidence.'),
        does: t('Organiza referencias a requisitos y resultados de pruebas disponibles.', 'Organizes references to requirements and available test results.'),
        changes: t('Puede hacer más fácil inspeccionar la entrega.', 'Can make delivery easier to inspect.'),
        validate: t('El equipo confirma que el resultado es utilizable; la cantidad de archivos generados no lo demuestra.', 'The team confirms that the outcome is usable; the number of generated files does not establish this.')
      }
    },
    w2m_definition_of_done: {
      id: 'w2m_definition_of_done',
      label: t('Definition of Done · Definición de terminado', 'Definition of Done'),
      layer: 'deepening',
      what: t('Descripción compartida de las condiciones de calidad que debe cumplir un incremento para considerarse terminado.', 'A shared description of the quality conditions an increment must meet to be considered done.'),
      why: t('Evita que cada persona entienda algo distinto por terminado.', 'Prevents each person from understanding something different by done.'),
      question: t('¿Qué evidencia necesitamos antes de llamar terminado al resultado?', 'What evidence do we need before calling the outcome done?'),
      example: t('Ejemplo ilustrativo: el equipo exige integración revisada, pruebas acordadas y ayuda actualizada; estas condiciones son del ejemplo, no una lista universal.', 'Illustrative example: the team requires reviewed integration, agreed tests, and updated help; these are conditions in the example, not a universal checklist.'),
      analogy: t('Un acuerdo compartido sobre cuándo una pieza está lista para tocarse ante público.', 'A shared agreement about when a piece is ready to perform for an audience.'),
      related: ['w2m_increment', 'w2m_testing', 'w2m_documentation', 'w2m_developers'],
      notConfuse: t('No equivale a criterios particulares de una sola funcionalidad ni a una declaración de la IA de que todo está listo.', 'It does not equal the particular criteria for one feature or an AI declaration that everything is ready.'),
      sources: ['w2m_src_scrum_artifacts', 'w2m_src_scrum'],
      ai: {
        connection: t('Organización de condiciones y evidencia existente.', 'Organization of conditions and existing evidence.'),
        does: t('Señala qué condiciones aún no tienen respaldo documentado.', 'Highlights conditions that still lack documented support.'),
        changes: t('Puede reducir omisiones al preparar la revisión.', 'Can reduce omissions when preparing a review.'),
        validate: t('El equipo verifica la evidencia real; no acepta resultados de pruebas que no se hayan ejecutado.', 'The team verifies actual evidence and does not accept results for tests that were never executed.')
      }
    },
    w2m_requirements: {
      id: 'w2m_requirements',
      label: t('Requisitos', 'Requirements'),
      layer: 'foundation',
      what: t('Necesidades y condiciones que el sistema debe satisfacer, expresadas para poder aclararse y comprobarse.', 'Needs and conditions the system must satisfy, expressed so they can be clarified and checked.'),
      why: t('Permiten discutir si se está construyendo la solución adecuada.', 'Make it possible to discuss whether the right solution is being built.'),
      question: t('¿Qué debe ocurrir, para quién y bajo qué condición?', 'What must happen, for whom, and under what condition?'),
      example: t('Ejemplo ilustrativo: si una sala ya está reservada para ese horario, el sistema debe impedir una reserva superpuesta.', 'Illustrative example: if a room is already booked for that time, the system must prevent an overlapping booking.'),
      analogy: t('Las condiciones de un encargo antes de decidir cómo construirlo.', 'The conditions of a commission before deciding how to build it.'),
      related: ['w2m_jad', 'w2m_sdlc', 'w2m_product_backlog', 'w2m_testing', 'w2m_ai_requirements'],
      notConfuse: t('Una idea de pantalla o una suposición del analista no constituye automáticamente un requisito confirmado.', 'A screen idea or analyst assumption does not automatically constitute a confirmed requirement.'),
      sources: ['w2m_src_requirements'],
      ai: {
        connection: t('IA → requisitos: analizar y aclarar.', 'AI → requirements: analyze and clarify.'),
        does: t('Sugiere preguntas sobre excepciones y términos ambiguos.', 'Suggests questions about exceptions and ambiguous terms.'),
        changes: t('Puede mejorar la preparación de la conversación con usuarios.', 'Can improve preparation for conversations with users.'),
        validate: t('La persona conocedora del proceso confirma la regla y su procedencia.', 'The person who knows the process confirms the rule and its origin.')
      }
    },
    w2m_prototypes: {
      id: 'w2m_prototypes',
      label: t('Prototipos', 'Prototypes'),
      layer: 'foundation',
      what: t('Representaciones parciales de una solución para explorar una pregunta antes de comprometer su construcción completa.', 'Partial representations of a solution used to explore a question before committing to complete construction.'),
      why: t('Hacen observables decisiones que son difíciles de discutir solo con palabras.', 'Make decisions observable when words alone are difficult to discuss.'),
      question: t('¿Qué duda concreta queremos resolver al usar este prototipo?', 'What specific uncertainty do we want to resolve by using this prototype?'),
      example: t('Ejemplo ilustrativo: dos pantallas simuladas permiten observar si una persona entiende cómo cambiar la fecha de una tutoría.', 'Illustrative example: two simulated screens let the team observe whether a person understands how to change a tutoring date.'),
      analogy: t('Una maqueta permite discutir la distribución sin ser todavía el edificio.', 'A model allows discussion of the layout without being the building yet.'),
      related: ['w2m_rad', 'w2m_feedback', 'w2m_requirements', 'w2m_increment', 'w2m_ai_prototypes'],
      notConfuse: t('Un prototipo convincente no demuestra que existan datos reales, permisos correctos o capacidad de producción.', 'A convincing prototype does not demonstrate actual data, correct permissions, or production capacity.'),
      sources: ['w2m_src_rad'],
      ai: {
        connection: t('IA → prototipos: generar e iterar.', 'AI → prototypes: generate and iterate.'),
        does: t('Propone variantes para observar una misma tarea.', 'Proposes variants for observing the same task.'),
        changes: t('Puede ampliar las alternativas disponibles para la prueba con usuarios.', 'Can expand the alternatives available for user trials.'),
        validate: t('Las personas observan la tarea real y anotan qué partes son simuladas.', 'People observe the actual task and record which parts are simulated.')
      }
    },
    w2m_documentation: {
      id: 'w2m_documentation',
      label: t('Documentación', 'Documentation'),
      layer: 'foundation',
      what: t('Registro comprensible y mantenido de requisitos, decisiones y funcionamiento del sistema.', 'An understandable, maintained record of requirements, decisions, and system behavior.'),
      why: t('Permite retomar una decisión y saber sobre qué versión se está trabajando.', 'Makes it possible to revisit a decision and know which version is being used.'),
      question: t('¿Qué necesita saber la próxima persona para usar o cambiar el sistema?', 'What does the next person need to know to use or change the system?'),
      example: t('Ejemplo ilustrativo: una ficha explica la regla de cancelación, quién la confirmó y qué comportamiento tiene la versión actual.', 'Illustrative example: a record explains the cancellation rule, who confirmed it, and how the current version behaves.'),
      analogy: t('La memoria escrita de las decisiones, para no volver a empezar cada conversación.', 'The written memory of decisions, so every conversation need not start over.'),
      related: ['w2m_waterfall', 'w2m_jad', 'w2m_agile', 'w2m_requirements', 'w2m_ai_documentation'],
      notConfuse: t('Documentar no es acumular páginas. Agile valora software funcionando y también reconoce valor en la documentación.', 'Documentation is not an accumulation of pages. Agile values working software and also recognizes the value of documentation.'),
      sources: ['w2m_src_requirements', 'w2m_src_manifesto'],
      ai: {
        connection: t('IA → documentación: redactar y sintetizar.', 'AI → documentation: draft and synthesize.'),
        does: t('Prepara una explicación de cambios a partir de material identificado.', 'Prepares an explanation of changes from identified material.'),
        changes: t('Puede reducir el esfuerzo de mantener explicaciones al día.', 'Can reduce the effort of keeping explanations current.'),
        validate: t('El autor confirma exactitud, versión y decisiones; la IA no inventa aprobaciones.', 'The author confirms accuracy, version, and decisions; AI must not invent approvals.')
      }
    },
    w2m_development: {
      id: 'w2m_development',
      label: t('Desarrollo / construcción', 'Development / construction'),
      layer: 'foundation',
      what: t('Trabajo de convertir requisitos y decisiones de diseño en componentes integrados del sistema.', 'The work of turning requirements and design decisions into integrated system components.'),
      why: t('La solución debe funcionar como conjunto, no solo como fragmentos prometedores.', 'The solution must work as a whole, not only as promising fragments.'),
      question: t('¿Cómo se integra este cambio y qué comportamiento debe conservar?', 'How does this change integrate, and what behavior must it preserve?'),
      example: t('Ejemplo ilustrativo: registrar una reserva requiere conectar formulario, validación y almacenamiento, además de mostrar una confirmación.', 'Illustrative example: recording a booking requires connecting the form, validation, and storage as well as displaying confirmation.'),
      analogy: t('Montar las piezas y comprobar que encajan para cumplir su función.', 'Assembling the pieces and checking that they fit to perform their function.'),
      related: ['w2m_developers', 'w2m_xp', 'w2m_sdlc', 'w2m_testing', 'w2m_ai_development'],
      notConfuse: t('Escribir código es parte de construir; no incluye por sí solo todo el ciclo de vida ni demuestra que se resolvió la necesidad.', 'Writing code is part of construction; it is not the entire lifecycle and does not establish that the need was met.'),
      sources: ['w2m_src_sdlc', 'w2m_src_xp'],
      ai: {
        connection: t('IA → desarrollo: asistir.', 'AI → development: assist.'),
        does: t('Propone código o explica un componente existente.', 'Proposes code or explains an existing component.'),
        changes: t('Puede reducir tareas repetitivas de implementación.', 'Can reduce repetitive implementation tasks.'),
        validate: t('El equipo comprueba integración, permisos y manejo de errores antes de aceptar el cambio.', 'The team checks integration, permissions, and error handling before accepting the change.')
      }
    },
    w2m_testing: {
      id: 'w2m_testing',
      label: t('Pruebas', 'Testing'),
      layer: 'foundation',
      what: t('Comprobaciones del comportamiento del sistema frente a resultados esperados y condiciones relevantes.', 'Checks of system behavior against expected outcomes and relevant conditions.'),
      why: t('Aportan evidencia sobre defectos y cumplimiento; escribir un caso no equivale a ejecutarlo.', 'Provide evidence about defects and conformance; writing a case is not the same as executing it.'),
      question: t('¿Qué resultado debería observarse y qué excepción debemos comprobar?', 'What outcome should be observed, and which exception must we check?'),
      example: t('Ejemplo ilustrativo: intentar reservar una sala ocupada debe producir rechazo sin guardar una reserva adicional.', 'Illustrative example: attempting to book an occupied room must produce a rejection without saving an additional booking.'),
      analogy: t('Probar una llave en las cerraduras pertinentes, no solo observar que su forma parece correcta.', 'Trying a key in the relevant locks, not just observing that its shape looks right.'),
      related: ['w2m_requirements', 'w2m_xp', 'w2m_definition_of_done', 'w2m_development', 'w2m_ai_testing'],
      notConfuse: t('Una prueba que pasa no demuestra ausencia de defectos. La cobertura depende también de qué situaciones se eligieron.', 'A passing test does not prove the absence of defects. Coverage also depends on which situations were selected.'),
      sources: ['w2m_src_sdlc', 'w2m_src_xp'],
      ai: {
        connection: t('IA → pruebas: generar y revisar.', 'AI → testing: generate and review.'),
        does: t('Propone casos habituales, límites y errores esperados.', 'Proposes typical cases, boundaries, and expected errors.'),
        changes: t('Puede reducir el esfuerzo inicial de redactar casos.', 'Can reduce the initial effort of writing cases.'),
        validate: t('El equipo confirma el resultado esperado con el requisito y revisa resultados de ejecución real.', 'The team confirms the expected outcome against the requirement and reviews actual execution results.')
      }
    },
    w2m_feedback: {
      id: 'w2m_feedback',
      label: t('Retroalimentación / feedback', 'Feedback'),
      layer: 'foundation',
      what: t('Observaciones sobre una experiencia o resultado que ayudan a decidir ajustes.', 'Observations about an experience or outcome that help determine adjustments.'),
      why: t('Permite contrastar lo que se esperaba con lo que las personas entienden y necesitan.', 'Allows expectations to be compared with what people understand and need.'),
      question: t('¿Qué observación cambia nuestra comprensión y de quién proviene?', 'Which observation changes our understanding, and who provided it?'),
      example: t('Ejemplo ilustrativo: una persona confunde la fecha de solicitud con la fecha de tutoría; el equipo observa la tarea antes de decidir cómo cambiar la pantalla.', 'Illustrative example: a person confuses the request date with the tutoring date; the team observes the task before deciding how to change the screen.'),
      analogy: t('Escuchar cómo se oye la música desde distintas partes de la sala.', 'Listening to how the music sounds from different parts of the room.'),
      related: ['w2m_rad', 'w2m_agile', 'w2m_sprint_review', 'w2m_prototypes', 'w2m_ai_feedback'],
      notConfuse: t('Una opinión aislada no representa a todos los usuarios. Un comentario también puede revelar un problema sin proponer la mejor solución.', 'One opinion does not represent all users. A comment can also reveal a problem without suggesting the best solution.'),
      sources: ['w2m_src_principles', 'w2m_src_rad', 'w2m_src_scrum_events'],
      ai: {
        connection: t('IA → feedback: sintetizar.', 'AI → feedback: synthesize.'),
        does: t('Agrupa temas conservando ejemplos y opiniones discrepantes.', 'Groups themes while preserving examples and dissenting views.'),
        changes: t('Puede facilitar la lectura de muchos comentarios.', 'Can make many comments easier to read.'),
        validate: t('El equipo revisa contexto, representación y comentarios originales antes de decidir.', 'The team reviews context, representation, and original comments before deciding.')
      }
    },
    w2m_ai_support: {
      id: 'w2m_ai_support',
      label: t('IA · Apoyo al desarrollo', 'AI · Development support'),
      layer: 'ai',
      what: t('Extensión AI-first del atlas: usar IA como apoyo en actividades de distintos enfoques, manteniendo responsabilidades y comprobaciones humanas.', 'An atlas AI-first extension: using AI to support activities across different approaches while retaining human responsibilities and checks.'),
      why: t('Ayuda a separar capacidad de generar propuestas de autoridad para decidir.', 'Helps separate the ability to generate proposals from authority to decide.'),
      question: t('¿La IA reemplaza estas metodologías o puede apoyar diferentes formas de desarrollar?', 'Does AI replace these methodologies, or can it support different ways of developing?'),
      example: t('Ejemplo ilustrativo: el mismo asistente ayuda a preparar un taller JAD y a redactar casos de prueba para un equipo Scrum; los responsables revisan ambos resultados.', 'Illustrative example: the same assistant helps prepare a JAD workshop and draft test cases for a Scrum team; the responsible people review both outcomes.'),
      analogy: t('Una herramienta en el taller amplía lo que se puede preparar; la organización del trabajo necesita acuerdos propios.', 'A workshop tool expands what can be prepared; organizing work still requires its own agreements.'),
      related: ['w2m_development_approach', 'w2m_ai_requirements', 'w2m_ai_prototypes', 'w2m_ai_documentation', 'w2m_ai_development', 'w2m_ai_testing', 'w2m_ai_feedback'],
      notConfuse: t('La IA no es una nueva metodología universal de desarrollo. Esta extensión y sus ejemplos son elaboración del atlas, no contenido atribuido a Tiffin ni hechos de Eden Bay/AREV.', 'AI is not a new universal development methodology. This extension and its examples are atlas-authored material, not content attributed to Tiffin or facts about Eden Bay/AREV.'),
      sources: ['w2m_src_ai_risk', 'w2m_src_ai_agents', 'w2m_src_ai_tests', 'w2m_src_ai_docs'],
      ai: {
        connection: t('Requisitos, prototipos, documentación, desarrollo, pruebas y feedback.', 'Requirements, prototypes, documentation, development, testing, and feedback.'),
        does: t('Genera propuestas, organiza información y señala preguntas para revisión.', 'Generates proposals, organizes information, and highlights questions for review.'),
        changes: t('Puede ampliar la velocidad y capacidad de preparación; el beneficio depende del contexto y la revisión.', 'Can increase preparation speed and capacity; benefits depend on context and review.'),
        validate: t('Comprobar exactitud, procedencia, datos permitidos y comportamiento real; las personas conservan decisiones y aceptación.', 'Check accuracy, provenance, permitted data, and actual behavior; people retain decisions and acceptance.')
      }
    },
    w2m_ai_requirements: {
      id: 'w2m_ai_requirements',
      label: t('IA → requisitos · Analizar y aclarar', 'AI → requirements · Analyze and clarify'),
      layer: 'ai',
      what: t('Conexión que transforma notas autorizadas en candidatos a requisitos y preguntas de aclaración.', 'A connection that turns authorized notes into candidate requirements and clarification questions.'),
      why: t('Hace discutibles ambigüedades antes de comprometer diseño.', 'Makes ambiguities discussable before committing to design.'),
      question: t('¿Qué parte está confirmada y qué parte debe preguntarse?', 'Which part is confirmed, and which part needs to be asked?'),
      example: t('Ejemplo ilustrativo: ante la nota «debe ser rápido», la IA propone preguntar qué tarea, volumen y tiempo de respuesta se esperan, sin inventar el umbral.', 'Illustrative example: given the note “it must be fast,” AI proposes asking about the expected task, volume, and response time without inventing a threshold.'),
      analogy: t('Un lápiz que subraya dudas en el acta antes de la conversación.', 'A pencil that underlines questions in the notes before the conversation.'),
      related: ['w2m_ai_support', 'w2m_requirements', 'w2m_jad', 'w2m_product_backlog'],
      notConfuse: t('Una inferencia plausible no es evidencia del proceso ni una aprobación del usuario.', 'A plausible inference is not process evidence or user approval.'),
      sources: ['w2m_src_requirements', 'w2m_src_ai_risk', 'w2m_src_sdlc'],
      ai: {
        connection: t('IA → requisitos, especialmente en análisis, JAD y refinamiento.', 'AI → requirements, especially in analysis, JAD, and refinement.'),
        does: t('Detecta términos vagos y conserva referencias a las notas de origen.', 'Detects vague terms and preserves references to source notes.'),
        changes: t('La conversación puede empezar con preguntas específicas.', 'The conversation can start with specific questions.'),
        validate: t('El analista vincula cada propuesta a su origen; usuarios o responsables confirman reglas, excepciones y medidas. Lo no confirmado queda como pregunta.', 'The analyst links each proposal to its origin; users or decision-makers confirm rules, exceptions, and measures. Unconfirmed items remain questions.')
      }
    },
    w2m_ai_prototypes: {
      id: 'w2m_ai_prototypes',
      label: t('IA → prototipos · Generar e iterar', 'AI → prototypes · Generate and iterate'),
      layer: 'ai',
      what: t('Conexión que produce versiones exploratorias a partir de una tarea y una duda de diseño explícitas.', 'A connection that produces exploratory versions from an explicit task and design question.'),
      why: t('Facilita discutir alternativas antes de invertir en una solución completa.', 'Makes alternatives easier to discuss before investing in a complete solution.'),
      question: t('¿Qué aprenderemos comparando estas dos variantes?', 'What will we learn by comparing these two variants?'),
      example: t('Ejemplo ilustrativo: la IA prepara una vista por calendario y otra por lista para observar cómo una persona encuentra una sala disponible; ambas usan datos ficticios.', 'Illustrative example: AI prepares calendar and list views to observe how a person finds an available room; both use fictional data.'),
      analogy: t('Un fabricante de maquetas que ofrece opciones para ensayar una decisión.', 'A model maker who offers options for trying out a decision.'),
      related: ['w2m_ai_support', 'w2m_prototypes', 'w2m_rad', 'w2m_feedback', 'w2m_increment'],
      notConfuse: t('Una apariencia pulida no convierte el prototipo en una solución operativa.', 'A polished appearance does not turn a prototype into an operational solution.'),
      sources: ['w2m_src_rad', 'w2m_src_sdlc', 'w2m_src_ai_chat'],
      ai: {
        connection: t('IA → prototipos dentro de RAD o exploración de soluciones.', 'AI → prototypes within RAD or solution exploration.'),
        does: t('Genera una variante y la ajusta después de una observación concreta.', 'Generates a variant and adjusts it after a concrete observation.'),
        changes: t('Puede acortar el intervalo entre una idea y una prueba de comprensión.', 'Can shorten the interval between an idea and a comprehension trial.'),
        validate: t('Usuarios realizan la tarea; el equipo revisa accesibilidad, estados de error y qué está simulado antes de reutilizar cualquier parte.', 'Users perform the task; the team checks accessibility, error states, and what is simulated before reusing any part.')
      }
    },
    w2m_ai_documentation: {
      id: 'w2m_ai_documentation',
      label: t('IA → documentación · Redactar y sintetizar', 'AI → documentation · Draft and synthesize'),
      layer: 'ai',
      what: t('Conexión que convierte material identificado en explicaciones o borradores de documentación.', 'A connection that turns identified material into explanations or draft documentation.'),
      why: t('Ayuda a que cambios pequeños no dejen instrucciones desactualizadas.', 'Helps prevent small changes from leaving instructions outdated.'),
      question: t('¿Qué afirmación del documento podemos rastrear a una decisión o comportamiento real?', 'Which statement in the document can we trace to an actual decision or behavior?'),
      example: t('Ejemplo ilustrativo: después de cambiar la cancelación de tutorías, la IA prepara una actualización de la ayuda usando la regla confirmada y la descripción del cambio.', 'Illustrative example: after tutoring cancellation changes, AI drafts a help update using the confirmed rule and change description.'),
      analogy: t('Un editor que prepara una nueva edición a partir de notas verificables.', 'An editor preparing a new edition from checkable notes.'),
      related: ['w2m_ai_support', 'w2m_documentation', 'w2m_jad', 'w2m_waterfall'],
      notConfuse: t('Texto fluido no demuestra exactitud ni autoriza atribuir decisiones a personas.', 'Fluent text does not establish accuracy or authorize attributing decisions to people.'),
      sources: ['w2m_src_ai_docs', 'w2m_src_ai_risk'],
      ai: {
        connection: t('IA → documentación de requisitos, uso y cambios.', 'AI → requirements, usage, and change documentation.'),
        does: t('Propone estructura, resumen y redacción consistente.', 'Proposes structure, summaries, and consistent wording.'),
        changes: t('Puede reducir esfuerzo editorial y facilitar actualizaciones pequeñas.', 'Can reduce editorial effort and make small updates easier.'),
        validate: t('El responsable contrasta el texto con la versión real, revisa enlaces y elimina afirmaciones sin respaldo o información que no deba compartirse.', 'The responsible person compares the text with the actual version, checks links, and removes unsupported statements or information that should not be shared.')
      }
    },
    w2m_ai_development: {
      id: 'w2m_ai_development',
      label: t('IA → desarrollo · Asistir', 'AI → development · Assist'),
      layer: 'ai',
      what: t('Conexión que ayuda a proponer, explicar o revisar código dentro del proceso técnico del equipo.', 'A connection that helps propose, explain, or review code within the team technical process.'),
      why: t('Puede reducir redacción repetitiva y hacer visibles alternativas de implementación.', 'Can reduce repetitive writing and make implementation alternatives visible.'),
      question: t('¿Qué parte de esta propuesta entendemos y podemos justificar antes de integrarla?', 'Which part of this proposal do we understand and can justify before integrating it?'),
      example: t('Ejemplo ilustrativo: la IA propone validar un formulario de reserva; una persona comprueba que también se valide en el servidor y que se respeten permisos.', 'Illustrative example: AI proposes booking-form validation; a person checks that validation also happens on the server and that permissions are respected.'),
      analogy: t('Un ayudante que prepara piezas que todavía deben encajar en la máquina.', 'An assistant who prepares parts that still have to fit the machine.'),
      related: ['w2m_ai_support', 'w2m_development', 'w2m_developers', 'w2m_xp', 'w2m_testing'],
      notConfuse: t('Código plausible o una revisión automática favorable no garantiza corrección, seguridad o integración.', 'Plausible code or a favorable automated review does not guarantee correctness, security, or integration.'),
      sources: ['w2m_src_ai_agents', 'w2m_src_ai_chat'],
      ai: {
        connection: t('IA → construcción, con Scrum, Waterfall u otro enfoque elegido.', 'AI → construction, with Scrum, Waterfall, or another chosen approach.'),
        does: t('Genera una propuesta acotada y explica sus supuestos.', 'Generates a bounded proposal and explains its assumptions.'),
        changes: t('Puede reducir el tiempo del primer borrador; revisar y mantener sigue siendo trabajo del equipo.', 'Can reduce time to the first draft; review and maintenance remain team work.'),
        validate: t('El equipo revisa lógica, dependencias, permisos y errores, y comprueba comportamiento en un entorno autorizado antes de incorporar la propuesta.', 'The team reviews logic, dependencies, permissions, and errors, and checks behavior in an authorized environment before incorporating the proposal.')
      }
    },
    w2m_ai_testing: {
      id: 'w2m_ai_testing',
      label: t('IA → pruebas · Generar y revisar', 'AI → testing · Generate and review'),
      layer: 'ai',
      what: t('Conexión que propone casos de prueba y preguntas sobre cobertura a partir de requisitos y código disponible.', 'A connection that proposes test cases and coverage questions from requirements and available code.'),
      why: t('Puede ayudar a considerar situaciones que se omiten al probar solo el camino esperado.', 'Can help consider situations omitted when testing only the expected path.'),
      question: t('¿La prueba comprueba la regla acordada o solo reproduce lo que hace el código?', 'Does the test check the agreed rule or merely reproduce what the code does?'),
      example: t('Ejemplo ilustrativo: para reservas, la IA propone probar horario ocupado, datos ausentes y cancelación; el equipo determina el resultado correcto para cada caso.', 'Illustrative example: for bookings, AI proposes testing occupied times, missing data, and cancellation; the team determines the correct outcome for each case.'),
      analogy: t('Preparar una lista de preguntas de examen todavía exige una clave de respuestas confiable.', 'Preparing exam questions still requires a trustworthy answer key.'),
      related: ['w2m_ai_support', 'w2m_testing', 'w2m_requirements', 'w2m_xp', 'w2m_definition_of_done'],
      notConfuse: t('Generar pruebas no significa ejecutarlas, y copiar un error del código en la expectativa puede producir una prueba que pasa incorrectamente.', 'Generating tests does not mean executing them, and copying a code defect into the expectation can produce a misleading passing test.'),
      sources: ['w2m_src_ai_tests', 'w2m_src_ai_agents'],
      ai: {
        connection: t('IA → diseño y revisión de pruebas en el enfoque seleccionado.', 'AI → test design and review within the selected approach.'),
        does: t('Sugiere escenarios normales, límites, excepciones y datos de ensayo.', 'Suggests normal scenarios, boundaries, exceptions, and test data.'),
        changes: t('Puede acelerar la preparación; la selección de casos sigue requiriendo criterio.', 'Can accelerate preparation; case selection still requires judgment.'),
        validate: t('Un revisor deriva expectativas del requisito, comprueba que cada caso pueda detectar un fallo y exige evidencia de ejecución antes de afirmar que pasa.', 'A reviewer derives expectations from the requirement, checks that each case can detect a failure, and requires execution evidence before claiming it passes.')
      }
    },
    w2m_ai_feedback: {
      id: 'w2m_ai_feedback',
      label: t('IA → feedback · Sintetizar', 'AI → feedback · Synthesize'),
      layer: 'ai',
      what: t('Conexión que organiza comentarios autorizados en temas rastreables para apoyar una conversación sobre mejoras.', 'A connection that organizes authorized comments into traceable themes to support a conversation about improvements.'),
      why: t('Ayuda a leer comentarios diversos sin tratar cada mensaje como un requisito nuevo.', 'Helps people read diverse comments without treating each message as a new requirement.'),
      question: t('¿Qué voces o contextos faltan en esta síntesis?', 'Which voices or contexts are missing from this synthesis?'),
      example: t('Ejemplo ilustrativo: comentarios sobre una agenda mencionan etiquetas y navegación; una observación aislada sobre acceso con teclado se conserva aunque no sea frecuente.', 'Illustrative example: comments about a calendar mention labels and navigation; a single observation about keyboard access is preserved even though it is not frequent.'),
      analogy: t('Un índice de un cuaderno de campo orienta la lectura, pero no reemplaza las observaciones originales.', 'An index to a field notebook guides reading but does not replace the original observations.'),
      related: ['w2m_ai_support', 'w2m_feedback', 'w2m_sprint_review', 'w2m_rad', 'w2m_product_owner'],
      notConfuse: t('Una síntesis no demuestra consenso, causalidad ni representatividad. El sentimiento inferido no es una evaluación de la persona.', 'A synthesis does not establish consensus, causation, or representativeness. Inferred sentiment is not an assessment of the person.'),
      sources: ['w2m_src_ai_risk', 'w2m_src_principles', 'w2m_src_sdlc'],
      ai: {
        connection: t('IA → feedback en prototipos, revisiones y entregas.', 'AI → feedback in prototypes, reviews, and deliveries.'),
        does: t('Agrupa temas y conserva referencias y comentarios que contradicen el patrón.', 'Groups themes and preserves references and comments that contradict the pattern.'),
        changes: t('Puede reducir el esfuerzo de clasificación y dejar más tiempo para interpretar.', 'Can reduce classification effort and leave more time for interpretation.'),
        validate: t('El equipo compara la síntesis con comentarios originales, revisa quién participó y quién falta; responsables del producto deciden las prioridades.', 'The team compares the synthesis with original comments and reviews who participated and who is missing; those responsible for the product decide priorities.')
      }
    }
  });

  db.diagrams['02'] = {
    id: '02',
    title: t('¿Todos los proyectos se desarrollan igual?', 'Are all projects developed the same way?'),
    transition: t('Ya tenemos un proyecto.\n\n¿Todos los proyectos deberían desarrollarse de la misma manera?', 'We already have a project.\n\nShould all projects be developed in the same way?'),
    subtitle: t('SDLC · WATERFALL · RAD · JAD · AGILE', 'SDLC · WATERFALL · RAD · JAD · AGILE'),
    definition: t('SDLC ofrece el marco del ciclo de vida; Waterfall organiza un avance principalmente secuencial; RAD aprende con prototipos e iteración; JAD facilita acuerdos sobre requisitos; Agile reúne enfoques adaptativos. Son categorías distintas que pueden complementarse.', 'SDLC provides the lifecycle framework; Waterfall organizes mainly sequential progress; RAD learns through prototypes and iteration; JAD facilitates requirements agreements; Agile brings together adaptive approaches. These are different categories that can complement one another.'),
    root: 'w2m_development_approach',
    groups: [
      { label: t('MARCO DEL CICLO DE VIDA', 'LIFECYCLE FRAMEWORK'), nodes: ['w2m_sdlc'] },
      { label: t('ESTRUCTURADO / SECUENCIAL', 'STRUCTURED / SEQUENTIAL'), nodes: ['w2m_waterfall'] },
      { label: t('RÁPIDO / ITERATIVO', 'RAPID / ITERATIVE'), nodes: ['w2m_rad'] },
      { label: t('COLABORACIÓN INTENSA', 'COLLABORATIVE REQUIREMENTS / TEAM-BASED'), nodes: ['w2m_jad'] },
      { label: t('ADAPTATIVO / ITERATIVO', 'ADAPTIVE / ITERATIVE'), nodes: ['w2m_agile'] }
    ],
    aiTitle: t('¿La IA reemplaza estas metodologías o puede apoyar diferentes formas de desarrollar?', 'Does AI replace these methodologies, or can it support different ways of developing?'),
    aiMessage: t('LA IA PUEDE CAMBIAR LA VELOCIDAD Y CAPACIDAD DEL TRABAJO.\nNO ELIMINA LA NECESIDAD DE ORGANIZAR EL DESARROLLO.', 'AI CAN CHANGE THE SPEED AND CAPACITY OF WORK.\nIT DOES NOT ELIMINATE THE NEED TO ORGANIZE DEVELOPMENT.'),
    aiRelationships: [
      { id: 'w2m_link_requirements', from: 'w2m_ai_support', to: 'w2m_requirements', action: t('ANALIZAR / ACLARAR', 'ANALYZE / CLARIFY'), concept: 'w2m_ai_requirements', value: t('Preguntas y candidatos; usuarios confirman las reglas.', 'Questions and candidates; users confirm rules.') },
      { id: 'w2m_link_prototypes', from: 'w2m_ai_support', to: 'w2m_prototypes', action: t('GENERAR / ITERAR', 'GENERATE / ITERATE'), concept: 'w2m_ai_prototypes', value: t('Variantes observables; personas prueban la tarea.', 'Observable variants; people try the task.') },
      { id: 'w2m_link_documentation', from: 'w2m_ai_support', to: 'w2m_documentation', action: t('REDACTAR / SINTETIZAR', 'DRAFT / SYNTHESIZE'), concept: 'w2m_ai_documentation', value: t('Borradores rastreables; autores confirman exactitud.', 'Traceable drafts; authors confirm accuracy.') },
      { id: 'w2m_link_development', from: 'w2m_ai_support', to: 'w2m_development', action: t('ASISTIR', 'ASSIST'), concept: 'w2m_ai_development', value: t('Código candidato; el equipo revisa e integra.', 'Candidate code; the team reviews and integrates.') },
      { id: 'w2m_link_testing', from: 'w2m_ai_support', to: 'w2m_testing', action: t('GENERAR / REVISAR', 'GENERATE / REVIEW'), concept: 'w2m_ai_testing', value: t('Casos propuestos; expectativas y ejecución se comprueban.', 'Proposed cases; expectations and execution are checked.') },
      { id: 'w2m_link_feedback', from: 'w2m_ai_support', to: 'w2m_feedback', action: t('SINTETIZAR', 'SYNTHESIZE'), concept: 'w2m_ai_feedback', value: t('Temas con evidencia; se conservan discrepancias.', 'Themes with evidence; disagreements are preserved.') }
    ],
    comparison: {
      criteria: [
        { id: 'w2m_requirement_stability', label: t('Estabilidad de requisitos', 'Requirement stability') },
        { id: 'w2m_change_tolerance', label: t('Tolerancia al cambio', 'Change tolerance') },
        { id: 'w2m_user_participation', label: t('Participación del usuario', 'User participation') },
        { id: 'w2m_delivery_speed', label: t('Velocidad de entrega', 'Delivery speed') },
        { id: 'w2m_iteration', label: t('Iteración', 'Iteration') },
        { id: 'w2m_structure', label: t('Documentación / estructura', 'Documentation / structure') }
      ],
      rows: [
        {
          concept: 'w2m_sdlc',
          values: {
            w2m_requirement_stability: t('No la presupone; depende del modelo elegido.', 'Does not assume it; depends on the selected model.'),
            w2m_change_tolerance: t('La gestión de cambios depende de cómo se organicen las fases.', 'Change management depends on how phases are organized.'),
            w2m_user_participation: t('Se define para las actividades de cada fase.', 'Defined for the activities in each phase.'),
            w2m_delivery_speed: t('No fija una velocidad ni una cadencia.', 'Does not prescribe speed or cadence.'),
            w2m_iteration: t('Puede recorrerse mediante modelos secuenciales o iterativos.', 'Can be organized through sequential or iterative models.'),
            w2m_structure: t('Marco de fases, objetivos y resultados; detalle según contexto.', 'Framework of phases, objectives, and outcomes; detail depends on context.')
          }
        },
        {
          concept: 'w2m_waterfall',
          values: {
            w2m_requirement_stability: t('Encaja mejor cuando se conocen bien y son relativamente estables.', 'Fits better when requirements are well understood and relatively stable.'),
            w2m_change_tolerance: t('Cambios tardíos suelen implicar revisar trabajo de fases previas.', 'Late changes often require revisiting work from earlier phases.'),
            w2m_user_participation: t('Suele concentrarse en definición y revisiones acordadas.', 'Often concentrated in definition and agreed reviews.'),
            w2m_delivery_speed: t('El producto integrado suele aparecer tras varias fases; depende del alcance.', 'An integrated product often appears after several phases; depends on scope.'),
            w2m_iteration: t('Avance principalmente secuencial, con retornos cuando se necesitan.', 'Mainly sequential progress, with returns when needed.'),
            w2m_structure: t('Entregables documentados y puntos de revisión entre fases.', 'Documented deliverables and review points between phases.')
          }
        },
        {
          concept: 'w2m_rad',
          values: {
            w2m_requirement_stability: t('Permite aclararlos al usar prototipos.', 'Allows clarification through prototype use.'),
            w2m_change_tolerance: t('Incorpora ajustes frecuentes; integración y modularidad condicionan el costo.', 'Incorporates frequent adjustments; integration and modularity shape their cost.'),
            w2m_user_participation: t('Frecuente y directa para evaluar versiones.', 'Frequent and direct to evaluate versions.'),
            w2m_delivery_speed: t('Busca prototipos tempranos; llegar a producción requiere trabajo adicional.', 'Seeks early prototypes; reaching production requires additional work.'),
            w2m_iteration: t('Ciclos de prototipo, observación y ajuste.', 'Cycles of prototyping, observation, and adjustment.'),
            w2m_structure: t('Prototipos y acuerdos de cada ciclo; requiere coordinación técnica.', 'Prototypes and cycle agreements; requires technical coordination.')
          }
        },
        {
          concept: 'w2m_jad',
          values: {
            w2m_requirement_stability: t('Ayuda a aclarar necesidades y resolver diferencias de interpretación.', 'Helps clarify needs and resolve differences in interpretation.'),
            w2m_change_tolerance: t('Facilita discutir cambios; no define su gestión durante todo el proyecto.', 'Helps discuss changes; does not define project-wide change management.'),
            w2m_user_participation: t('Intensa en sesiones preparadas y facilitadas.', 'Intensive in prepared, facilitated sessions.'),
            w2m_delivery_speed: t('Puede acelerar acuerdos; no determina la entrega de software.', 'Can accelerate agreements; does not determine software delivery.'),
            w2m_iteration: t('Las sesiones pueden repetirse; no son por sí solas iteraciones de entrega.', 'Sessions can repeat; they are not delivery iterations by themselves.'),
            w2m_structure: t('Agenda, participantes, facilitación, acuerdos y asuntos pendientes.', 'Agenda, participants, facilitation, agreements, and open issues.')
          }
        },
        {
          concept: 'w2m_agile',
          values: {
            w2m_requirement_stability: t('Asume que parte de la comprensión puede evolucionar.', 'Assumes that some understanding may evolve.'),
            w2m_change_tolerance: t('Favorece adaptar prioridades según aprendizaje y capacidad.', 'Favors adapting priorities based on learning and capacity.'),
            w2m_user_participation: t('Colaboración sostenida y feedback frecuente.', 'Ongoing collaboration and frequent feedback.'),
            w2m_delivery_speed: t('Busca valor utilizable frecuente; no garantiza menor duración total.', 'Seeks frequent usable value; does not guarantee a shorter total duration.'),
            w2m_iteration: t('Aprendizaje y adaptación repetidos; la cadencia depende del enfoque.', 'Repeated learning and adaptation; cadence depends on the approach.'),
            w2m_structure: t('Estructura según framework o método; documentación útil y mantenida.', 'Structure follows the framework or method; useful, maintained documentation.')
          }
        }
      ]
    },
    name: t('MÉTODOS / ENFOQUES DE DESARROLLO', 'DEVELOPMENT APPROACHES'),
    defaultMode: 'base',
    aiNode: 'w2m_ai_support',
    aiRoot: 'w2m_ai_support',
    aiMasterQuestion: t('¿La IA reemplaza estas metodologías o puede apoyar diferentes formas de desarrollar?', 'Does AI replace these methodologies, or can it support different ways of developing?'),
    aiNodes: ['w2m_ai_support', 'w2m_requirements', 'w2m_prototypes', 'w2m_documentation', 'w2m_development', 'w2m_testing', 'w2m_feedback'],
    aiAnswer: t('LA IA NO ES UNA NUEVA METODOLOGÍA UNIVERSAL DE DESARROLLO. Puede apoyar diferentes enfoques; las personas siguen organizando el trabajo y asumiendo la responsabilidad.', 'AI IS NOT A NEW UNIVERSAL DEVELOPMENT METHODOLOGY. It can support different approaches; people still organize the work and retain accountability.'),
    comparisonNote: t('Comparación cualitativa elaborada para el atlas a partir de las fuentes citadas. Describe tendencias y condiciones, no categorías equivalentes, mediciones ni un ranking. Un prototipo temprano, un acuerdo de requisitos y una entrega utilizable son resultados distintos.', 'A qualitative comparison authored for the atlas from the cited sources. Describes tendencies and conditions, not equivalent categories, measurements, or a ranking. An early prototype, a requirements agreement, and a usable delivery are different outcomes.'),
    combinationExample: t('Ejemplo ilustrativo: un proyecto puede usar SDLC como mapa, sesiones JAD para requisitos, prototipos para aprender y Scrum para organizar entregas. Prácticas de XP y Kanban pueden complementar el trabajo sin convertir todos los términos en sinónimos.', 'Illustrative example: a project can use SDLC as a map, JAD sessions for requirements, prototypes for learning, and Scrum to organize delivery. XP and Kanban practices can complement the work without making all these terms synonyms.'),
    layerLabels: {
      foundation: t('CST212 · FUNDAMENTO ACADÉMICO', 'CST212 FOUNDATION'),
      deepening: t('PROFUNDIZACIÓN ACADÉMICA', 'ACADEMIC DEEPENING'),
      ai: t('EXTENSIÓN AI-FIRST', 'AI-FIRST EXTENSION')
    },
    sourceNote: t('Las frases académicas proporcionadas y el encuadre de CST212 proceden del pedido del usuario. Las referencias externas respaldan definiciones y precisiones, no se presentan como fuentes asignadas o avaladas por Tiffin. Los campos ai de cualquier ficha y las conexiones de IA son extensión editorial del atlas. Las fichas de Scrum ofrecen profundización introductoria, no sustituyen su guía completa. s.f. significa sin fecha identificada.', 'The supplied academic wording and CST212 framing come from the user request. External references support definitions and clarifications and are not presented as sources assigned or endorsed by Tiffin. The ai fields in every drawer and the AI connections are atlas editorial extensions. Scrum drawers provide introductory deepening and do not replace the complete guide. s.f. means no identified date, equivalent to n.d.'),
    exampleNote: t('Todos los ejemplos son ilustrativos y creados para explicar los conceptos; no describen hechos del caso Eden Bay/AREV ni resultados observados de adopción de IA.', 'All examples are illustrative and created to explain the concepts; they do not describe facts from the Eden Bay/AREV case or observed outcomes of AI adoption.'),
    nextDiagram: '03',
    nextTransition: t('Elegir cómo trabajaremos no basta.\n\n¿Cómo convertimos el alcance completo en trabajo que podamos asignar, estimar y controlar?', 'Choosing how we will work is not enough.\n\nHow do we turn the full scope into work we can assign, estimate, and control?'),
    nextLabel: t('EDT / WBS', 'WBS / EDT')
  };
})();
