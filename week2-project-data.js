(function () {
  const t = (es, en) => ({ es, en });
  window.CST212_W2 = window.CST212_W2 || { diagrams: {}, concepts: {}, sources: {} };
  const db = window.CST212_W2;

  Object.assign(db.sources, {
    w2p_src_apm_project: {
      author: 'Association for Project Management', year: 's.f.',
      title: 'What is project management?',
      url: 'https://www.apm.org.uk/resources/what-is-project-management/'
    },
    w2p_src_apm_scope: {
      author: 'Association for Project Management', year: 's.f.',
      title: 'What is scope management?',
      url: 'https://www.apm.org.uk/resources/what-is-project-management/what-is-scope-management/'
    },
    w2p_src_apm_manager: {
      author: 'Association for Project Management', year: 's.f.',
      title: 'What does a project manager do?',
      url: 'https://www.apm.org.uk/jobs-and-careers/career-path/what-does-a-project-manager-do/'
    },
    w2p_src_apm_glossary: {
      author: 'Association for Project Management', year: 's.f.',
      title: 'Project management glossary',
      url: 'https://www.apm.org.uk/resources/glossary/'
    },
    w2p_src_apm_quality: {
      author: 'Association for Project Management', year: 's.f.',
      title: 'What is quality management and control?',
      url: 'https://www.apm.org.uk/resources/what-is-project-management/what-is-quality-management-and-control/'
    },
    w2p_src_apm_resources: {
      author: 'Bird, K.', year: '2018',
      title: 'What is resource management?',
      url: 'https://www.apm.org.uk/blog/what-is-resource-management/'
    },
    w2p_src_apm_controls: {
      author: 'Association for Project Management', year: 's.f.',
      title: 'What is project controls?',
      url: 'https://www.apm.org.uk/resources/what-is-project-management/what-is-project-controls/'
    },
    w2p_src_apm_risks: {
      author: 'Association for Project Management', year: 's.f.',
      title: 'What is risk management?',
      url: 'https://www.apm.org.uk/resources/what-is-project-management/what-is-risk-management/'
    },
    w2p_src_apm_governance: {
      author: 'Association for Project Management', year: 's.f.',
      title: 'What is governance?',
      url: 'https://www.apm.org.uk/resources/what-is-project-management/what-is-governance/'
    },
    w2p_src_apm_sponsor: {
      author: 'Samphire, M.', year: '2019',
      title: 'Who and what is a sponsor in project management?',
      url: 'https://www.apm.org.uk/blog/who-and-what-is-a-sponsor-in-project-management/'
    },
    w2p_src_ms_project: {
      author: 'Microsoft', year: 's.f.',
      title: 'Project help',
      url: 'https://support.microsoft.com/en-us/project/project-help'
    },
    w2p_src_ms_tracking: {
      author: 'Microsoft', year: 's.f.',
      title: 'Review the progress of your schedule',
      url: 'https://support.microsoft.com/en-us/project/review-the-progress-of-your-schedule'
    },
    w2p_src_nist_rmf: {
      author: 'Tabassi, E.', year: '2023',
      title: 'Artificial Intelligence Risk Management Framework (AI RMF 1.0) (NIST AI 100-1)',
      url: 'https://doi.org/10.6028/NIST.AI.100-1'
    },
    w2p_src_nist_genai: {
      author: 'Autio, C., Schwartz, R., Dunietz, J., Jain, S., Stanley, M., Tabassi, E., Hall, P., & Roberts, K.',
      year: '2024',
      title: 'Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)',
      url: 'https://doi.org/10.6028/NIST.AI.600-1'
    }
  });

  Object.assign(db.concepts, {
    w2p_project: {
      id: 'w2p_project', label: t('PROYECTO', 'PROJECT'), layer: 'foundation',
      what: t('Un esfuerzo temporal realizado para alcanzar un objetivo o producir un resultado definido dentro de un alcance.', 'A temporary effort undertaken to achieve an objective or produce a defined result within a scope.'),
      why: t('Convierte una intención en trabajo que puede organizarse, asignarse, medirse y controlarse.', 'It turns an intention into work that can be organized, assigned, measured, and controlled.'),
      question: t('¿Qué resultado debemos entregar y bajo qué restricciones?', 'What result must we deliver, and under what constraints?'),
      example: t('Ejemplo ilustrativo: implantar un sistema de reservas para una escuela de música, desde la autorización hasta la entrega aceptada. No describe Eden Bay/AREV.', 'Illustrative example: implement a booking system for a music school, from authorization to accepted delivery. This does not describe Eden Bay/AREV.'),
      analogy: t('Un viaje con destino, fecha de salida, recursos y condiciones de llegada.', 'A journey with a destination, departure date, resources, and arrival conditions.'),
      related: ['w2p_scope', 'w2p_sponsor', 'w2p_manager', 'w2p_start', 'w2p_end', 'w2p_operation', 'w2p_acceptance'],
      notConfuse: t('Proyecto no equivale a operación continua: implantar el sistema tiene un cierre; atender reservas es trabajo recurrente.', 'A project is distinct from ongoing operations: implementing the system has a closure; handling bookings is recurring work.'),
      sources: ['w2p_src_apm_project'],
      ai: {
        connection: t('El apoyo de IA se conecta a la información, los riesgos, el plan y el estado del proyecto.', 'AI support connects to project information, risks, the plan, and status.'),
        does: t('Prepara síntesis y propuestas para discutir cómo ejecutar el trabajo.', 'Prepares summaries and proposals for discussing how to execute the work.'),
        changes: t('Puede acortar la preparación; organizar y decidir siguen siendo responsabilidades del proyecto.', 'May shorten preparation; organizing and deciding remain project responsibilities.'),
        validate: t('Confirmar objetivo, límites, responsables y aceptación con las personas autorizadas.', 'Confirm the objective, boundaries, owners, and acceptance with authorized people.')
      }
    },
    w2p_scope: {
      id: 'w2p_scope', label: t('ALCANCE', 'SCOPE'), layer: 'foundation',
      what: t('Define qué trabajo y resultados forman parte del proyecto y qué queda fuera.', 'Defines which work and results belong to the project and what is excluded.'),
      why: t('Hace visibles los límites y permite evaluar qué cambia al añadir una petición.', 'Makes boundaries visible and helps assess what changes when a request is added.'),
      question: t('¿Qué debemos entregar exactamente?', 'What exactly must we deliver?'),
      example: t('Ejemplo ilustrativo: incluir reservas y confirmaciones; excluir cobros en línea de la primera entrega.', 'Illustrative example: include bookings and confirmations; exclude online payments from the first delivery.'),
      analogy: t('El contorno de un rompecabezas: define qué piezas pertenecen a esta entrega.', 'The outline of a puzzle: it defines which pieces belong to this delivery.'),
      related: ['w2p_project', 'w2p_acceptance', 'w2p_plan', 'w2p_rules'],
      notConfuse: t('ALCANCE ≠ TODO LO QUE LA ORGANIZACIÓN PODRÍA DESEAR. Una petición nueva requiere evaluar impacto y autoridad de aprobación.', 'SCOPE ≠ EVERYTHING THE ORGANIZATION MAY WANT. A new request requires assessing impact and approval authority.'),
      sources: ['w2p_src_apm_scope'],
      ai: {
        connection: t('Las propuestas de plan se comparan con el alcance autorizado.', 'Plan proposals are compared with the authorized scope.'),
        does: t('Señala posibles actividades fuera de alcance y exclusiones ambiguas.', 'Flags potentially out-of-scope activities and ambiguous exclusions.'),
        changes: t('Facilita discutir límites antes de comprometer tiempo o presupuesto.', 'Helps discuss boundaries before committing time or budget.'),
        validate: t('El PM revisa impactos; la autoridad designada aprueba cualquier cambio de alcance.', 'The PM reviews impacts; the designated authority approves any scope change.')
      }
    },
    w2p_sponsor: {
      id: 'w2p_sponsor', label: t('PATROCINADOR', 'SPONSOR'), layer: 'foundation',
      what: t('Persona o autoridad que respalda el proyecto y finalmente ayuda a determinar si cumple su propósito y alcance.', 'The person or authority who supports the project and ultimately helps determine whether it fulfills its purpose and scope.'),
      why: t('Conecta el trabajo con el propósito organizacional y respalda decisiones que exceden la autoridad del equipo.', 'Connects the work to organizational purpose and supports decisions beyond the team’s authority.'),
      question: t('¿Quién tiene autoridad para respaldar el proyecto y aceptar su resultado?', 'Who has the authority to support the project and accept its result?'),
      example: t('Ejemplo ilustrativo: la dirección de una escuela respalda el sistema y participa en la aceptación según las reglas acordadas.', 'Illustrative example: school leadership sponsors the system and participates in acceptance under agreed rules.'),
      analogy: t('Quien encarga el viaje, respalda sus recursos y confirma que el destino sirve al propósito.', 'The person commissioning the journey, supporting its resources, and confirming the destination serves its purpose.'),
      related: ['w2p_project', 'w2p_manager', 'w2p_acceptance', 'w2p_governance'],
      notConfuse: t('El patrocinador no es el coordinador cotidiano ni necesariamente el único aceptante; la autoridad se define en la gobernanza.', 'The sponsor is not the day-to-day coordinator or necessarily the sole accepting authority; governance defines that authority.'),
      sources: ['w2p_src_apm_sponsor', 'w2p_src_apm_governance'],
      ai: {
        connection: t('Participa en la gobernanza que dirige y limita el apoyo de IA.', 'Participates in the governance that directs and limits AI support.'),
        does: t('La IA prepara opciones y consecuencias para su deliberación.', 'AI prepares options and consequences for the sponsor’s consideration.'),
        changes: t('Puede recibir comparaciones más claras entre propuestas.', 'Can receive clearer comparisons between proposals.'),
        validate: t('El patrocinador decide dentro de su autoridad; una recomendación de IA no constituye su aprobación.', 'The sponsor decides within their authority; an AI recommendation does not constitute their approval.')
      }
    },
    w2p_manager: {
      id: 'w2p_manager', label: t('DIRECTOR / GERENTE DE PROYECTO', 'PROJECT MANAGER'), layer: 'foundation',
      what: t('Persona responsable de coordinar el trabajo del proyecto para avanzar hacia sus objetivos dentro de las restricciones acordadas.', 'The person responsible for coordinating project work toward its objectives within the agreed constraints.'),
      why: t('Integra compromisos del equipo y resuelve o escala obstáculos entre tareas.', 'Integrates team commitments and resolves or escalates obstacles between tasks.'),
      question: t('¿Quién coordina tareas, personas, recursos, tiempos y riesgos?', 'Who coordinates tasks, people, resources, time, and risks?'),
      example: t('Ejemplo ilustrativo: el PM coordina entrevistas y entregas; el analista de sistemas investiga cómo se solicitan y confirman las reservas.', 'Illustrative example: the PM coordinates interviews and deliveries; the systems analyst investigates how bookings are requested and confirmed.'),
      analogy: t('La dirección de una orquesta coordina la ejecución sin tocar todos los instrumentos.', 'An orchestra conductor coordinates the performance without playing every instrument.'),
      related: ['w2p_team', 'w2p_plan', 'w2p_status', 'w2p_risks', 'w2p_governance'],
      notConfuse: t('PM ≠ ANALISTA DE SISTEMAS. El PM coordina el proyecto; el analista estudia necesidades, procesos y requisitos. Una persona puede asumir ambos roles, con responsabilidades distintas.', 'PM ≠ SYSTEMS ANALYST. The PM coordinates the project; the analyst studies needs, processes, and requirements. One person may hold both roles, with distinct responsibilities.'),
      sources: ['w2p_src_apm_manager'],
      ai: {
        connection: t('Supervisa borradores, alertas y explicaciones del apoyo de IA.', 'Supervises drafts, alerts, and explanations from AI support.'),
        does: t('La IA prepara agendas de seguimiento y opciones ante bloqueos.', 'AI prepares follow-up agendas and options for addressing blockers.'),
        changes: t('Permite dedicar más atención a coordinación, negociación y decisiones.', 'Allows more attention to coordination, negotiation, and decisions.'),
        validate: t('El PM confirma evidencia y compromisos, y escala decisiones fuera de su autoridad.', 'The PM confirms evidence and commitments, escalating decisions outside their authority.')
      }
    },
    w2p_team: {
      id: 'w2p_team', label: t('EQUIPO', 'TEAM'), layer: 'foundation',
      what: t('Personas con responsabilidades complementarias que realizan el trabajo y producen los entregables del proyecto.', 'People with complementary responsibilities who perform the work and produce project deliverables.'),
      why: t('Los compromisos necesitan responsables con habilidades y disponibilidad reales.', 'Commitments need owners with actual skills and availability.'),
      question: t('¿Quién realiza cada parte y qué necesita de los demás?', 'Who performs each part, and what do they need from others?'),
      example: t('Ejemplo ilustrativo: una analista estudia reservas, una desarrolladora configura el sistema y una docente aporta criterios de uso.', 'Illustrative example: an analyst studies bookings, a developer configures the system, and a teacher contributes usage criteria.'),
      analogy: t('Un ensamble musical: partes diferentes deben coordinarse para producir una misma obra.', 'A musical ensemble: different parts must be coordinated to produce one performance.'),
      related: ['w2p_project', 'w2p_manager', 'w2p_resources', 'w2p_quality'],
      notConfuse: t('El equipo no incluye automáticamente a todos los interesados. Una herramienta de IA tampoco asume responsabilidad profesional.', 'The team does not automatically include every stakeholder. An AI tool does not assume professional accountability either.'),
      sources: ['w2p_src_apm_glossary', 'w2p_src_apm_manager'],
      ai: {
        connection: t('El equipo aporta actualizaciones que alimentan la información del proyecto.', 'The team supplies updates that feed project information.'),
        does: t('La IA organiza pendientes por responsable propuesto y detecta asignaciones sin confirmar.', 'AI organizes open items by proposed owner and flags unconfirmed assignments.'),
        changes: t('Puede facilitar la preparación de acuerdos de trabajo.', 'May make working agreements easier to prepare.'),
        validate: t('Cada persona confirma capacidad, fechas y asignaciones antes de que se registren como compromisos.', 'Each person confirms capacity, dates, and assignments before they are recorded as commitments.')
      }
    },
    w2p_time: {
      id: 'w2p_time', label: t('TIEMPO', 'TIME'), layer: 'foundation',
      what: t('Fechas, duraciones y secuencia temporal que delimitan cuándo puede realizarse y completarse el trabajo.', 'Dates, durations, and sequencing that determine when work can be performed and completed.'),
      why: t('Una fecha deseada debe contrastarse con dependencias y disponibilidad.', 'A desired date must be assessed against dependencies and availability.'),
      question: t('¿Cuándo debe completarse?', 'When must it be completed?'),
      example: t('Ejemplo ilustrativo: reservar dos semanas para configurar el sistema, considerando que la docente solo puede revisarlo los viernes.', 'Illustrative example: allow two weeks to configure the system, considering that the teacher can review it only on Fridays.'),
      analogy: t('Un itinerario: tanto el recorrido como las esperas afectan la llegada.', 'An itinerary: both travel and waiting affect arrival.'),
      related: ['w2p_start', 'w2p_end', 'w2p_resources', 'w2p_plan', 'w2p_status'],
      notConfuse: t('Duración no equivale a esfuerzo: ocho horas de trabajo pueden distribuirse en varios días.', 'Duration is not effort: eight hours of work may be spread across several days.'),
      sources: ['w2p_src_apm_project', 'w2p_src_apm_controls'],
      ai: {
        connection: t('El apoyo al plan utiliza calendarios y dependencias disponibles.', 'Plan support uses available calendars and dependencies.'),
        does: t('Propone secuencias y señala fechas que parecen incompatibles.', 'Proposes sequences and flags dates that appear incompatible.'),
        changes: t('Acelera la comparación de escenarios de calendario.', 'Speeds up comparison of scheduling scenarios.'),
        validate: t('Revisar duraciones, esperas, calendarios y compromisos con el equipo; una fecha generada es una propuesta.', 'Review durations, waiting periods, calendars, and commitments with the team; a generated date is a proposal.')
      }
    },
    w2p_cost: {
      id: 'w2p_cost', label: t('COSTO', 'COST'), layer: 'foundation',
      what: t('Valor financiero del trabajo y de los recursos necesarios para entregar el alcance acordado.', 'The financial value of the work and resources needed to deliver the agreed scope.'),
      why: t('Permite comparar lo estimado, lo autorizado y lo gastado para sostener decisiones viables.', 'Allows comparison of estimated, authorized, and actual spending to support feasible decisions.'),
      question: t('¿Qué recursos financieros requiere?', 'What financial resources does it require?'),
      example: t('Ejemplo ilustrativo: presupuestar configuración, licencias y formación; registrar por separado el gasto mensual posterior de operación.', 'Illustrative example: budget for configuration, licenses, and training; record subsequent monthly operating expenditure separately.'),
      analogy: t('El presupuesto de una grabación: incluye estudio, músicos y edición, no solo el archivo final.', 'A recording budget: it includes the studio, musicians, and editing, not just the final file.'),
      related: ['w2p_scope', 'w2p_resources', 'w2p_sponsor', 'w2p_status'],
      notConfuse: t('Una estimación de costo no es presupuesto autorizado ni gasto real; deben distinguirse.', 'A cost estimate is neither an authorized budget nor actual expenditure; distinguish them.'),
      sources: ['w2p_src_apm_controls', 'w2p_src_apm_resources'],
      ai: {
        connection: t('La síntesis del estado puede comparar partidas de costo proporcionadas.', 'Status synthesis can compare supplied cost items.'),
        does: t('Organiza categorías y señala gastos sin correspondencia en el plan.', 'Organizes categories and flags spending without a corresponding plan item.'),
        changes: t('Ayuda a enfocar la revisión financiera en diferencias concretas.', 'Helps focus financial review on specific differences.'),
        validate: t('Comprobar importes, moneda, tarifas y cálculos con registros autorizados; no inventar precios.', 'Check amounts, currency, rates, and calculations against authorized records; do not invent prices.')
      }
    },
    w2p_quality: {
      id: 'w2p_quality', label: t('CALIDAD', 'QUALITY'), layer: 'foundation',
      what: t('Grado en que el resultado cumple las condiciones acordadas y sirve para el uso previsto.', 'The degree to which the result meets agreed conditions and serves its intended use.'),
      why: t('Terminar tareas no demuestra que el sistema entregue un resultado aceptable.', 'Finishing tasks does not establish that the system delivers an acceptable result.'),
      question: t('¿Qué condiciones debe cumplir el resultado para ser aceptable?', 'What conditions must the result meet to be acceptable?'),
      example: t('Ejemplo ilustrativo: comprobar que el sistema impide reservar dos clases en la misma sala y franja horaria.', 'Illustrative example: check that the system prevents booking two classes in the same room and time slot.'),
      analogy: t('Un instrumento afinado: estar terminado no basta si no produce el sonido necesario.', 'A tuned instrument: being finished is insufficient if it cannot produce the required sound.'),
      related: ['w2p_scope', 'w2p_acceptance', 'w2p_team', 'w2p_end'],
      notConfuse: t('Calidad no significa añadir funciones sin límite ni declarar perfección; requiere criterios y evidencia adecuados.', 'Quality does not mean adding unlimited features or declaring perfection; it requires suitable criteria and evidence.'),
      sources: ['w2p_src_apm_quality'],
      ai: {
        connection: t('Relaciona las condiciones de aceptación con la información de revisión disponible.', 'Relates acceptance conditions to available review information.'),
        does: t('Sugiere preguntas y escenarios que podrían revelar condiciones no cubiertas.', 'Suggests questions and scenarios that could reveal uncovered conditions.'),
        changes: t('Amplía los candidatos para revisión sin demostrar por sí misma la calidad.', 'Expands candidates for review without itself demonstrating quality.'),
        validate: t('Personas competentes comprueban el resultado mediante evidencia observada y criterios acordados.', 'Qualified people check the result using observed evidence and agreed criteria.')
      }
    },
    w2p_resources: {
      id: 'w2p_resources', label: t('RECURSOS', 'RESOURCES'), layer: 'foundation',
      what: t('Personas, capacidades, equipos, herramientas, materiales y fondos disponibles para realizar el trabajo.', 'People, capabilities, equipment, tools, materials, and funds available to perform the work.'),
      why: t('Un plan solo puede ejecutarse si sus recursos están disponibles cuando se necesitan.', 'A plan can be executed only if its resources are available when needed.'),
      question: t('¿Qué necesitamos, en qué cantidad y en qué momento?', 'What do we need, in what quantity, and when?'),
      example: t('Ejemplo ilustrativo: disponer de una sala para formación, licencias y tiempo de una docente para validar el flujo de reservas.', 'Illustrative example: have a training room, licenses, and a teacher’s time to validate the booking workflow.'),
      analogy: t('Ingredientes, cocina y cocineros: una receta no se ejecuta solo con instrucciones.', 'Ingredients, a kitchen, and cooks: instructions alone do not execute a recipe.'),
      related: ['w2p_team', 'w2p_time', 'w2p_cost', 'w2p_software'],
      notConfuse: t('Tener un recurso identificado no significa tenerlo reservado; una persona no está disponible a tiempo completo por aparecer en el plan.', 'Identifying a resource does not mean it is reserved; being listed in the plan does not make a person available full time.'),
      sources: ['w2p_src_apm_resources'],
      ai: {
        connection: t('El plan propuesto puede cruzarse con disponibilidades registradas.', 'The proposed plan can be cross-checked against recorded availability.'),
        does: t('Señala posibles solapamientos en asignaciones de personas o equipos.', 'Flags possible overlaps in assignments of people or equipment.'),
        changes: t('Hace más visibles las restricciones antes de prometer entregas.', 'Makes constraints more visible before deliveries are promised.'),
        validate: t('Confirmar habilidades, permisos, capacidad y reservas con los responsables de los recursos.', 'Confirm skills, permissions, capacity, and reservations with resource owners.')
      }
    },
    w2p_start: {
      id: 'w2p_start', label: t('INICIO', 'START'), layer: 'foundation',
      what: t('Límite inicial definido del esfuerzo temporal, con propósito, responsable y autorización para comenzar.', 'The defined starting boundary of the temporary effort, with a purpose, owner, and authorization to begin.'),
      why: t('Separa una intención favorable de un trabajo autorizado que puede asumir compromisos.', 'Separates a favorable intention from authorized work that can take on commitments.'),
      question: t('¿Qué debe quedar autorizado y acordado antes de comenzar?', 'What must be authorized and agreed before starting?'),
      example: t('Ejemplo ilustrativo: la escuela autoriza el proyecto, designa al PM y acuerda el objetivo de la primera entrega.', 'Illustrative example: the school authorizes the project, appoints the PM, and agrees on the first delivery objective.'),
      analogy: t('La salida de un viaje después de acordar destino y condiciones.', 'Departure on a journey after agreeing on the destination and conditions.'),
      related: ['w2p_project', 'w2p_sponsor', 'w2p_scope', 'w2p_plan'],
      notConfuse: t('GO expresa la decisión de avanzar; no demuestra que todas las condiciones de arranque estén resueltas.', 'GO expresses the decision to move forward; it does not establish that every starting condition is resolved.'),
      sources: ['w2p_src_apm_project', 'w2p_src_apm_governance'],
      ai: {
        connection: t('Utiliza la documentación de decisión como entrada para organizar el arranque.', 'Uses decision documentation as input for organizing the start.'),
        does: t('Prepara una lista de acuerdos iniciales pendientes.', 'Prepares a list of outstanding initial agreements.'),
        changes: t('Facilita distinguir lo ya acordado de lo todavía abierto.', 'Helps distinguish what is agreed from what remains open.'),
        validate: t('Verificar la autorización real y su alcance; una lista completa no autoriza el proyecto.', 'Verify actual authorization and its scope; a completed checklist does not authorize the project.')
      }
    },
    w2p_end: {
      id: 'w2p_end', label: t('FIN', 'END'), layer: 'foundation',
      what: t('Cierre definido del proyecto al completar sus compromisos o mediante una decisión autorizada de terminación.', 'The defined closure of the project when its commitments are completed or through an authorized termination decision.'),
      why: t('Aclara qué se entregó, qué se transfiere y quién atiende los asuntos posteriores.', 'Clarifies what was delivered, what is handed over, and who handles subsequent matters.'),
      question: t('¿Qué evidencia y decisiones permiten cerrar este proyecto?', 'What evidence and decisions allow this project to close?'),
      example: t('Ejemplo ilustrativo: documentar la aceptación del sistema, transferir instrucciones al personal y asignar los pendientes de soporte.', 'Illustrative example: document system acceptance, hand instructions to staff, and assign outstanding support items.'),
      analogy: t('Cerrar una producción musical y entregar el máster no termina su reproducción cotidiana.', 'Closing a music production and handing over the master does not end its everyday playback.'),
      related: ['w2p_project', 'w2p_acceptance', 'w2p_operation', 'w2p_status'],
      notConfuse: t('Fin no equivale automáticamente a éxito: un proyecto también puede cerrarse por cancelación. El servicio puede continuar después.', 'An end does not automatically mean success: a project can also close through cancellation. The service may continue afterward.'),
      sources: ['w2p_src_apm_project', 'w2p_src_apm_glossary'],
      ai: {
        connection: t('Reúne evidencia del estado para preparar el cierre.', 'Brings together status evidence to prepare closure.'),
        does: t('Resume entregas, decisiones y pendientes de transferencia.', 'Summarizes deliveries, decisions, and outstanding handover items.'),
        changes: t('Puede reducir el trabajo de ordenar el expediente final.', 'May reduce the work of organizing the final project record.'),
        validate: t('Comprobar aceptación o terminación autorizada y responsables posteriores; la IA no declara el cierre.', 'Check acceptance or authorized termination and subsequent owners; AI does not declare closure.')
      }
    },
    w2p_acceptance: {
      id: 'w2p_acceptance', label: t('ÉXITO / ACEPTACIÓN', 'SUCCESS / ACCEPTANCE'), layer: 'foundation',
      what: t('La aceptación reconoce que una entrega satisface criterios acordados. El éxito considera además objetivos, restricciones y propósito del proyecto.', 'Acceptance recognizes that a delivery satisfies agreed criteria. Success also considers project objectives, constraints, and purpose.'),
      why: t('Evita reducir el éxito a haber terminado una lista de tareas.', 'Prevents reducing success to having finished a task list.'),
      question: t('¿Quién acepta qué resultado, con qué criterios y con qué evidencia?', 'Who accepts which result, against which criteria, and with what evidence?'),
      example: t('Ejemplo ilustrativo: la responsable autorizada acepta el flujo de reservas tras comprobar los escenarios acordados; el ahorro de tiempo se observa después.', 'Illustrative example: the authorized owner accepts the booking workflow after checking agreed scenarios; time savings are observed later.'),
      analogy: t('Recibir una llave y comprobar que abre la puerta; el valor del lugar depende también de poder usarlo.', 'Receiving a key and checking that it opens the door; the place’s value also depends on being able to use it.'),
      related: ['w2p_scope', 'w2p_quality', 'w2p_sponsor', 'w2p_end', 'w2p_operation'],
      notConfuse: t('Aceptación de una entrega, cierre del proyecto y realización de beneficios son decisiones o resultados relacionados, pero distintos.', 'Acceptance of a delivery, project closure, and benefit realization are related but distinct decisions or outcomes.'),
      sources: ['w2p_src_apm_quality', 'w2p_src_apm_sponsor'],
      ai: {
        connection: t('Organiza la evidencia que revisa la autoridad de aceptación.', 'Organizes the evidence reviewed by the accepting authority.'),
        does: t('Relaciona cada criterio con evidencia disponible y señala criterios sin respaldo.', 'Maps each criterion to available evidence and flags unsupported criteria.'),
        changes: t('Hace más clara la revisión de cobertura antes de aceptar.', 'Makes coverage review clearer before acceptance.'),
        validate: t('La persona autorizada comprueba resultados y registra su decisión; la IA no firma ni concede aceptación.', 'The authorized person checks results and records their decision; AI does not sign or grant acceptance.')
      }
    },
    w2p_operation: {
      id: 'w2p_operation', label: t('OPERACIÓN CONTINUA', 'ONGOING OPERATION'), layer: 'foundation',
      what: t('Trabajo recurrente que mantiene un servicio o proceso una vez disponible.', 'Recurring work that sustains a service or process once available.'),
      why: t('El resultado del proyecto necesita responsables y recursos para seguir funcionando.', 'The project result needs owners and resources to keep working.'),
      question: t('¿Quién mantendrá el servicio después de la entrega?', 'Who will maintain the service after delivery?'),
      example: t('Ejemplo ilustrativo: implantar el sistema es el proyecto; atender reservas, administrar cuentas y resolver incidencias es operación.', 'Illustrative example: implementing the system is the project; handling bookings, managing accounts, and resolving incidents are operations.'),
      analogy: t('Montar una biblioteca es un proyecto; prestar y recibir libros es operación recurrente.', 'Setting up a library is a project; lending and receiving books is recurring operation.'),
      related: ['w2p_project', 'w2p_end', 'w2p_resources', 'w2p_acceptance'],
      notConfuse: t('Operación no significa ausencia de cambios. Una mejora delimitada puede gestionarse como un nuevo proyecto dentro de un servicio existente.', 'Operation does not mean an absence of change. A bounded improvement can be managed as a new project within an existing service.'),
      sources: ['w2p_src_apm_project'],
      ai: {
        connection: t('El apoyo al cierre prepara información para quienes recibirán el servicio.', 'Closure support prepares information for those receiving the service.'),
        does: t('Propone un resumen de transferencia con pendientes y contactos responsables.', 'Proposes a handover summary with open items and responsible contacts.'),
        changes: t('Puede facilitar la continuidad entre entrega y uso cotidiano.', 'May ease continuity between delivery and everyday use.'),
        validate: t('La organización confirma responsables de soporte, costos recurrentes y permisos de cualquier uso futuro de IA.', 'The organization confirms support owners, recurring costs, and permissions for any future AI use.')
      }
    },
    w2p_software: {
      id: 'w2p_software', label: t('SOFTWARE DE GESTIÓN DE PROYECTOS', 'PROJECT MANAGEMENT SOFTWARE'), layer: 'foundation',
      what: t('Herramientas para registrar tareas, dependencias, recursos y avance, y presentar vistas del trabajo del proyecto.', 'Tools for recording tasks, dependencies, resources, and progress, and presenting views of project work.'),
      why: t('Mantiene una representación compartida del plan y facilita detectar cambios entre versiones.', 'Maintains a shared representation of the plan and helps identify changes between versions.'),
      question: t('¿Qué información debemos mantener actualizada para coordinar el trabajo?', 'What information must we keep current to coordinate the work?'),
      example: t('Ejemplo ilustrativo: registrar tareas y responsables en una herramienta como Microsoft Project y comparar el avance con el plan guardado.', 'Illustrative example: record tasks and owners in a tool such as Microsoft Project and compare progress with the saved plan.'),
      analogy: t('Un tablero de control: organiza indicadores, pero necesita datos correctos y alguien que decida.', 'A control panel: it organizes indicators but needs correct data and someone to make decisions.'),
      related: ['w2p_plan', 'w2p_status', 'w2p_information', 'w2p_resources'],
      notConfuse: t('Es software para gestionar el proyecto, no necesariamente el sistema que el proyecto construye. Usarlo no garantiza una buena gestión.', 'It is software for managing the project, not necessarily the system the project builds. Using it does not guarantee good management.'),
      sources: ['w2p_src_ms_project', 'w2p_src_ms_tracking'],
      ai: {
        connection: t('Solo puede usar registros accesibles mediante una integración o exportación autorizada.', 'Can use only records accessible through an authorized integration or export.'),
        does: t('Con los datos disponibles, redacta resúmenes y propone actualizaciones para revisar.', 'With available data, drafts summaries and proposes updates for review.'),
        changes: t('Añade una forma de consultar y explicar el registro del proyecto.', 'Adds a way to query and explain the project record.'),
        validate: t('Verificar permisos, campos, fechas de actualización y cambios propuestos; este atlas no conecta ni modifica herramientas externas.', 'Verify permissions, fields, update dates, and proposed changes; this atlas does not connect to or modify external tools.')
      }
    },
    w2p_information: {
      id: 'w2p_information', label: t('INFORMACIÓN DEL PROYECTO', 'PROJECT INFORMATION'), layer: 'deepening',
      what: t('Registros con procedencia identificable sobre acuerdos, entregas, estimaciones, cambios y avance.', 'Records with identifiable provenance about agreements, deliveries, estimates, changes, and progress.'),
      why: t('Permite rastrear por qué una decisión se tomó y qué evidencia la respalda.', 'Makes it possible to trace why a decision was made and what evidence supports it.'),
      question: t('¿De dónde viene esta afirmación y corresponde a la versión vigente?', 'Where does this claim come from, and does it match the current version?'),
      example: t('Ejemplo ilustrativo: vincular una decisión sobre reservas con el acta fechada y distinguirla de una propuesta aún no aprobada.', 'Illustrative example: link a booking decision to dated meeting minutes and distinguish it from an unapproved proposal.'),
      analogy: t('Un expediente con separadores y fechas: permite volver al documento que sostiene cada conclusión.', 'A file with dividers and dates: it lets you return to the document supporting each conclusion.'),
      related: ['w2p_software', 'w2p_plan', 'w2p_status', 'w2p_ai_information'],
      notConfuse: t('Un resumen es una interpretación. No sustituye al registro original ni convierte una opinión en una decisión aprobada.', 'A summary is an interpretation. It neither replaces the original record nor turns an opinion into an approved decision.'),
      sources: ['w2p_src_apm_controls', 'w2p_src_nist_genai'],
      ai: {
        connection: t('IA → INFORMACIÓN DEL PROYECTO: SINTETIZAR.', 'AI → PROJECT INFORMATION: SYNTHESIZE.'),
        does: t('Agrupa acuerdos, pendientes y contradicciones conservando referencias a los registros.', 'Groups agreements, open items, and contradictions while retaining references to records.'),
        changes: t('Ofrece una entrada breve a documentos dispersos.', 'Provides a brief entry point into scattered documents.'),
        validate: t('Cotejar afirmaciones, citas, fechas y omisiones con los originales; marcar lo no confirmado.', 'Cross-check claims, citations, dates, and omissions against originals; mark what is unconfirmed.')
      }
    },
    w2p_risks: {
      id: 'w2p_risks', label: t('RIESGOS', 'RISKS'), layer: 'deepening',
      what: t('Eventos o condiciones inciertos que podrían afectar los objetivos, como amenazas u oportunidades.', 'Uncertain events or conditions that could affect objectives, as threats or opportunities.'),
      why: t('Permite preparar respuestas antes de que la incertidumbre afecte el trabajo.', 'Allows responses to be prepared before uncertainty affects the work.'),
      question: t('¿Qué podría ocurrir, qué efecto tendría y quién evaluará la respuesta?', 'What could happen, what effect would it have, and who will assess the response?'),
      example: t('Ejemplo ilustrativo: si la docente no pudiera revisar a tiempo, la aceptación podría retrasarse; la disponibilidad debe confirmarse.', 'Illustrative example: if the teacher could not review on time, acceptance might be delayed; availability must be confirmed.'),
      analogy: t('Prever lluvia para un concierto al aire libre permite preparar una alternativa; la previsión no es lluvia observada.', 'Anticipating rain for an outdoor concert allows a fallback to be prepared; a forecast is not observed rain.'),
      related: ['w2p_plan', 'w2p_manager', 'w2p_resources', 'w2p_ai_risks'],
      notConfuse: t('Un riesgo no es una incidencia ya ocurrida. Un candidato generado por IA tampoco es un hecho ni un riesgo evaluado.', 'A risk is not an issue that has already occurred. An AI-generated candidate is neither a fact nor an assessed risk.'),
      sources: ['w2p_src_apm_risks'],
      ai: {
        connection: t('IA → RIESGOS: DETECTAR CANDIDATOS.', 'AI → RISKS: DETECT CANDIDATES.'),
        does: t('Propone hipótesis a partir de supuestos, dependencias y vacíos documentados.', 'Proposes hypotheses from documented assumptions, dependencies, and gaps.'),
        changes: t('Amplía la lista de asuntos que conviene investigar.', 'Expands the list of matters worth investigating.'),
        validate: t('Revisar pertinencia, evidencia, probabilidad, impacto y responsable; no inventar puntuaciones ni declarar exhaustividad.', 'Review relevance, evidence, likelihood, impact, and ownership; do not invent scores or claim completeness.')
      }
    },
    w2p_plan: {
      id: 'w2p_plan', label: t('PLAN', 'PLAN'), layer: 'deepening',
      what: t('Descripción integrada de cómo se entregará el alcance: trabajo, responsables, tiempos, recursos y mecanismos de seguimiento.', 'An integrated description of how scope will be delivered: work, owners, timing, resources, and tracking arrangements.'),
      why: t('Relaciona decisiones que de otro modo quedarían como listas separadas.', 'Connects decisions that would otherwise remain separate lists.'),
      question: t('¿Cómo coordinamos el trabajo para entregar lo acordado?', 'How do we coordinate the work to deliver what was agreed?'),
      example: t('Ejemplo ilustrativo: acordar quién estudia las reservas, cuándo configura el sistema y cómo se revisará antes de entregarlo.', 'Illustrative example: agree who studies bookings, when the system is configured, and how it will be reviewed before delivery.'),
      analogy: t('Una partitura compartida indica entradas, secuencia y coordinación, aunque durante el ensayo haya ajustes.', 'A shared score sets entries, sequence, and coordination, even when adjustments arise during rehearsal.'),
      related: ['w2p_scope', 'w2p_manager', 'w2p_time', 'w2p_resources', 'w2p_ai_plan'],
      notConfuse: t('Un plan no es solo un cronograma ni una predicción garantizada. Su versión aprobada debe distinguirse de los borradores.', 'A plan is more than a schedule and is not a guaranteed prediction. Its approved version must be distinguished from drafts.'),
      sources: ['w2p_src_apm_controls', 'w2p_src_apm_manager'],
      ai: {
        connection: t('IA → PLAN: PROPONER / ORGANIZAR.', 'AI → PLAN: DRAFT / ORGANIZE.'),
        does: t('Estructura un borrador a partir del alcance, restricciones y disponibilidad conocidos.', 'Structures a draft from known scope, constraints, and availability.'),
        changes: t('Facilita discutir alternativas sin empezar de una página vacía.', 'Makes alternatives easier to discuss without starting from a blank page.'),
        validate: t('El equipo revisa viabilidad y compromisos; el PM integra y se obtienen las aprobaciones requeridas.', 'The team reviews feasibility and commitments; the PM integrates the plan and required approvals are obtained.')
      }
    },
    w2p_status: {
      id: 'w2p_status', label: t('ESTADO DEL PROYECTO', 'PROJECT STATUS'), layer: 'deepening',
      what: t('Situación del trabajo en una fecha de corte, comparada con el plan y respaldada por actualizaciones verificables.', 'The state of work at a reporting date, compared with the plan and supported by verifiable updates.'),
      why: t('Hace visibles desviaciones y decisiones pendientes mientras todavía pueden atenderse.', 'Makes deviations and pending decisions visible while they can still be addressed.'),
      question: t('¿Dónde estamos frente al plan y qué requiere atención?', 'Where are we against the plan, and what needs attention?'),
      example: t('Ejemplo ilustrativo: al corte del viernes, la configuración figura terminada y la revisión sigue pendiente; falta confirmar su nueva fecha.', 'Illustrative example: at Friday’s reporting date, configuration is recorded as complete and review remains pending; its new date needs confirmation.'),
      analogy: t('Un marcador con hora de actualización: describe lo registrado, no lo que sucede fuera de su cobertura.', 'A scoreboard with an update time: it describes what was recorded, not what happens beyond its coverage.'),
      related: ['w2p_plan', 'w2p_information', 'w2p_time', 'w2p_cost', 'w2p_ai_status'],
      notConfuse: t('Tiempo transcurrido no equivale a avance completado; una fecha pronosticada tampoco es una entrega realizada.', 'Elapsed time is not completed progress; a forecast date is not an actual delivery either.'),
      sources: ['w2p_src_ms_tracking', 'w2p_src_apm_controls'],
      ai: {
        connection: t('IA → ESTADO: MONITOREAR / EXPLICAR.', 'AI → STATUS: MONITOR / EXPLAIN.'),
        does: t('Compara actualizaciones disponibles y redacta diferencias, bloqueos y posibles explicaciones.', 'Compares available updates and describes differences, blockers, and possible explanations.'),
        changes: t('Puede hacer más frecuente y comprensible el seguimiento si recibe datos actualizados.', 'Can make tracking more frequent and understandable if updated data is supplied.'),
        validate: t('Revisar fecha de corte, cobertura, línea base y causas con responsables; no afirmar vigilancia en tiempo real sin integración.', 'Review the reporting date, coverage, baseline, and causes with owners; do not claim real-time monitoring without integration.')
      }
    },
    w2p_rules: {
      id: 'w2p_rules', label: t('REGLAS DEL PROYECTO', 'PROJECT RULES'), layer: 'deepening',
      what: t('Acuerdos y políticas que fijan límites de decisión, tratamiento de información y procedimientos de cambio y aprobación.', 'Agreements and policies defining decision limits, information handling, and change and approval procedures.'),
      why: t('Permite saber quién puede comprometer recursos y cuándo debe escalar una decisión.', 'Clarifies who may commit resources and when a decision must be escalated.'),
      question: t('¿Qué puede decidir cada rol y qué requiere aprobación?', 'What may each role decide, and what requires approval?'),
      example: t('Ejemplo ilustrativo: una propuesta que añada cobros en línea debe pasar por evaluación del PM y aprobación de la autoridad designada.', 'Illustrative example: a proposal adding online payments must undergo PM assessment and approval by the designated authority.'),
      analogy: t('Las reglas de una competencia establecen quién decide y cómo se resuelven disputas.', 'Competition rules establish who decides and how disputes are resolved.'),
      related: ['w2p_governance', 'w2p_manager', 'w2p_sponsor', 'w2p_scope'],
      notConfuse: t('Una preferencia personal o una instrucción escrita a una IA no sustituye una política aprobada ni un control de acceso.', 'A personal preference or an instruction written to AI does not replace an approved policy or an access control.'),
      sources: ['w2p_src_apm_governance'],
      ai: {
        connection: t('Las reglas alimentan la gobernanza humana que establece los límites del apoyo de IA.', 'Rules inform the human governance that sets the limits of AI support.'),
        does: t('La IA puede señalar solicitudes que parecen exceder los límites documentados.', 'AI can flag requests that appear to exceed documented limits.'),
        changes: t('Hace explícitos los puntos donde una propuesta necesita revisión.', 'Makes points requiring review explicit within a proposal.'),
        validate: t('Confirmar versión vigente, permisos efectivos y autoridad; las reglas necesitan aplicación organizacional y técnica.', 'Confirm the current version, effective permissions, and authority; rules need organizational and technical enforcement.')
      }
    },
    w2p_governance: {
      id: 'w2p_governance', label: t('GOBERNANZA HUMANA', 'HUMAN GOVERNANCE'), layer: 'deepening',
      what: t('Marco de autoridad y responsabilidad del proyecto que conecta reglas, director y patrocinador. Es el origen de la relación de gobierno hacia la IA.', 'The project’s authority and accountability framework connecting rules, the manager, and the sponsor. It is the source of the governance relationship directed toward AI.'),
      why: t('Ubica decisiones y escalamiento en roles organizacionales identificables.', 'Places decisions and escalation with identifiable organizational roles.'),
      question: t('¿Quién fija límites, revisa propuestas y autoriza decisiones?', 'Who sets limits, reviews proposals, and authorizes decisions?'),
      example: t('Ejemplo ilustrativo: las reglas delimitan datos permitidos; el PM revisa el plan sugerido; el patrocinador decide un cambio que excede la autoridad del PM.', 'Illustrative example: rules define permitted data; the PM reviews the suggested plan; the sponsor decides a change beyond the PM’s authority.'),
      analogy: t('Una cadena de autorización con personas responsables, no un sello que una herramienta pueda ponerse a sí misma.', 'An authorization chain with accountable people, not a seal a tool can award itself.'),
      related: ['w2p_rules', 'w2p_manager', 'w2p_sponsor', 'w2p_ai_support', 'w2p_ai_governance'],
      notConfuse: t('Gobernanza no es el modelo de IA ni una nueva persona. Las reglas orientan; las personas y órganos autorizados deciden.', 'Governance is neither the AI model nor a new person. Rules guide; authorized people and bodies decide.'),
      sources: ['w2p_src_apm_governance', 'w2p_src_nist_rmf'],
      ai: {
        connection: t('REGLAS / PM / PATROCINADOR → IA: GOBERNAR / APROBAR.', 'RULES / PM / SPONSOR → AI: GOVERN / APPROVE.'),
        does: t('Recibe límites y prepara propuestas sujetas a revisión y autorización humanas.', 'Receives limits and prepares proposals subject to human review and authorization.'),
        changes: t('Cada uso propuesto de IA tiene un propósito, un responsable y un punto de revisión.', 'Each proposed AI use has a purpose, an owner, and a review point.'),
        validate: t('Identificar quién aprobó, qué versión aprobó y dentro de qué autoridad; conservar el registro de la decisión.', 'Identify who approved, which version they approved, and within what authority; retain the decision record.')
      }
    },
    w2p_ai_support: {
      id: 'w2p_ai_support', label: t('APOYO A LA GESTIÓN', 'PROJECT MANAGEMENT SUPPORT'), layer: 'ai',
      what: t('Uso propuesto de IA para organizar información y preparar análisis del proyecto bajo supervisión humana.', 'Proposed use of AI to organize information and prepare project analysis under human supervision.'),
      why: t('Puede reducir trabajo de preparación y dejar más tiempo para evaluar y coordinar.', 'May reduce preparation work and leave more time for evaluation and coordination.'),
      question: t('¿Qué ayuda concreta aporta la IA y quién revisa su resultado?', 'What concrete help does AI provide, and who reviews its result?'),
      example: t('Ejemplo ilustrativo: a partir de actas autorizadas, preparar acuerdos, candidatos de riesgo y un borrador de seguimiento que el PM revisa.', 'Illustrative example: use authorized minutes to prepare agreements, risk candidates, and a tracking draft for PM review.'),
      analogy: t('Un asistente que prepara la mesa de trabajo; las decisiones siguen teniendo responsables identificados.', 'An assistant preparing the worktable; decisions still have identified owners.'),
      related: ['w2p_information', 'w2p_risks', 'w2p_plan', 'w2p_status', 'w2p_governance'],
      notConfuse: t('La IA no se convierte en patrocinador ni asume la responsabilidad del proyecto. Estas conexiones son propuestas pedagógicas, no automatizaciones activas.', 'AI does not become the sponsor or assume project accountability. These connections are pedagogical proposals, not active automations.'),
      sources: ['w2p_src_nist_rmf', 'w2p_src_nist_genai'],
      ai: {
        connection: t('Cuatro relaciones salen hacia información, riesgos, plan y estado; la de gobernanza entra desde la organización.', 'Four relationships point toward information, risks, the plan, and status; governance points inward from the organization.'),
        does: t('Sintetiza, propone candidatos, organiza borradores y explica actualizaciones recibidas.', 'Synthesizes, proposes candidates, organizes drafts, and explains received updates.'),
        changes: t('Puede aumentar la capacidad de preparación sin transferir autoridad.', 'May increase preparation capacity without transferring authority.'),
        validate: t('Revisar cada salida contra evidencia y permisos, y registrar la decisión de la persona competente.', 'Review each output against evidence and permissions, and record the decision of the responsible person.')
      }
    },
    w2p_ai_information: {
      id: 'w2p_ai_information', label: t('IA → INFORMACIÓN: SINTETIZAR', 'AI → INFORMATION: SYNTHESIZE'), layer: 'ai',
      what: t('Relación que transforma registros autorizados en una síntesis con referencias y preguntas abiertas.', 'A relationship that transforms authorized records into a synthesis with references and open questions.'),
      why: t('Ayuda a orientarse entre documentos sin perder dónde se originó cada afirmación.', 'Helps navigate documents without losing the origin of each claim.'),
      question: t('¿Podemos volver del resumen al registro que respalda cada acuerdo?', 'Can we go from the summary back to the record supporting each agreement?'),
      example: t('Ejemplo ilustrativo: el resumen separa «confirmaciones incluidas», respaldado por un acta, de «cobros sugeridos», pendiente de decisión.', 'Illustrative example: the summary separates “confirmations included,” supported by minutes, from “payments suggested,” awaiting a decision.'),
      analogy: t('Un índice comentado orienta la lectura, pero no reemplaza las páginas originales.', 'An annotated index guides reading but does not replace the original pages.'),
      related: ['w2p_ai_support', 'w2p_information', 'w2p_rules'],
      notConfuse: t('Redactar con seguridad no prueba exactitud. Una síntesis puede omitir desacuerdos o inventar una referencia.', 'Confident wording does not prove accuracy. A synthesis can omit disagreements or invent a reference.'),
      sources: ['w2p_src_nist_genai'],
      ai: {
        connection: t('Origen: apoyo de IA. Destino: información del proyecto.', 'Source: AI support. Destination: project information.'),
        does: t('Agrupa contenido por acuerdos, pendientes y contradicciones, señalando el documento y la fecha.', 'Groups content into agreements, open items, and contradictions, indicating the document and date.'),
        changes: t('El lector recibe una ruta breve hacia la evidencia relevante.', 'The reader receives a short route to relevant evidence.'),
        validate: t('Abrir referencias y cotejar afirmaciones y omisiones; conservar incertidumbres y pedir revisión al responsable del registro.', 'Open references and cross-check claims and omissions; preserve uncertainties and seek review from the record owner.')
      }
    },
    w2p_ai_risks: {
      id: 'w2p_ai_risks', label: t('IA → RIESGOS: DETECTAR CANDIDATOS', 'AI → RISKS: DETECT CANDIDATES'), layer: 'ai',
      what: t('Relación que propone riesgos posibles para investigación, sin declarar que ocurrieron ni que estén confirmados.', 'A relationship proposing possible risks for investigation, without declaring that they occurred or are confirmed.'),
      why: t('Convierte vacíos y supuestos en preguntas concretas para el equipo.', 'Turns gaps and assumptions into concrete questions for the team.'),
      question: t('¿Qué evidencia necesitaríamos para evaluar este candidato?', 'What evidence would we need to assess this candidate?'),
      example: t('Ejemplo ilustrativo: al faltar una fecha de revisión, la IA propone investigar una posible demora; el PM consulta disponibilidad antes de evaluar el riesgo.', 'Illustrative example: when a review date is missing, AI proposes investigating a possible delay; the PM asks about availability before assessing the risk.'),
      analogy: t('Una lista de lugares por inspeccionar orienta la búsqueda; no certifica defectos.', 'A list of places to inspect guides a search; it does not certify defects.'),
      related: ['w2p_ai_support', 'w2p_risks', 'w2p_manager', 'w2p_information'],
      notConfuse: t('CANDIDATO ≠ HECHO. Una lista extensa no demuestra cobertura total ni permite asignar probabilidades sin fundamento.', 'CANDIDATE ≠ FACT. A long list proves neither complete coverage nor a basis for assigning probabilities.'),
      sources: ['w2p_src_apm_risks', 'w2p_src_nist_genai'],
      ai: {
        connection: t('Origen: apoyo de IA. Destino: riesgos del proyecto.', 'Source: AI support. Destination: project risks.'),
        does: t('Redacta candidatos como condición, evento posible y efecto, indicando el supuesto o dato que los motivó.', 'Drafts candidates as a condition, possible event, and effect, identifying the motivating assumption or data.'),
        changes: t('Produce una agenda de investigación que el equipo puede priorizar.', 'Produces an investigation agenda the team can prioritize.'),
        validate: t('El responsable contrasta cada candidato, documenta incertidumbre y evalúa impacto y respuesta antes de incorporarlo como riesgo evaluado.', 'The owner checks each candidate, documents uncertainty, and assesses impact and response before recording it as an assessed risk.')
      }
    },
    w2p_ai_plan: {
      id: 'w2p_ai_plan', label: t('IA → PLAN: PROPONER / ORGANIZAR', 'AI → PLAN: DRAFT / ORGANIZE'), layer: 'ai',
      what: t('Relación que estructura alternativas de trabajo a partir del alcance y las restricciones suministradas.', 'A relationship structuring work alternatives from supplied scope and constraints.'),
      why: t('Da al equipo un borrador discutible y muestra qué supuestos faltan por resolver.', 'Gives the team a draft to discuss and shows which assumptions remain unresolved.'),
      question: t('¿Qué parte de este borrador puede comprometerse con la capacidad disponible?', 'Which part of this draft can be committed to with available capacity?'),
      example: t('Ejemplo ilustrativo: proponer estudiar reservas antes de configurar pantallas y dejar la duración pendiente hasta consultar al equipo.', 'Illustrative example: propose studying bookings before configuring screens and leave duration open until the team is consulted.'),
      analogy: t('Un boceto de ruta permite discutir desvíos antes de reservar los trayectos.', 'A route sketch allows detours to be discussed before booking the journey.'),
      related: ['w2p_ai_support', 'w2p_plan', 'w2p_scope', 'w2p_resources', 'w2p_manager'],
      notConfuse: t('Borrador generado no equivale a línea base aprobada. Asignar un nombre o una fecha no crea un compromiso real.', 'A generated draft is not an approved baseline. Assigning a name or date does not create a real commitment.'),
      sources: ['w2p_src_apm_manager', 'w2p_src_nist_genai'],
      ai: {
        connection: t('Origen: apoyo de IA. Destino: plan del proyecto.', 'Source: AI support. Destination: project plan.'),
        does: t('Ordena actividades propuestas, explicita supuestos y deja visibles responsables o duraciones sin confirmar.', 'Orders proposed activities, states assumptions, and exposes unconfirmed owners or durations.'),
        changes: t('Facilita comparar opciones antes de acordar el plan.', 'Makes options easier to compare before agreeing on the plan.'),
        validate: t('El equipo confirma trabajo y capacidad; el PM revisa dependencias y restricciones; la autoridad correspondiente aprueba la versión.', 'The team confirms work and capacity; the PM reviews dependencies and constraints; the appropriate authority approves the version.')
      }
    },
    w2p_ai_status: {
      id: 'w2p_ai_status', label: t('IA → ESTADO: MONITOREAR / EXPLICAR', 'AI → STATUS: MONITOR / EXPLAIN'), layer: 'ai',
      what: t('Relación que compara actualizaciones disponibles con el plan y prepara una explicación de las diferencias.', 'A relationship comparing available updates with the plan and preparing an explanation of differences.'),
      why: t('Ayuda al PM a localizar desvíos y preguntas que requieren seguimiento.', 'Helps the PM locate deviations and questions needing follow-up.'),
      question: t('¿Qué cambió, desde cuándo y con qué respaldo?', 'What changed, since when, and with what support?'),
      example: t('Ejemplo ilustrativo: una revisión prevista para el jueves sigue abierta al viernes; la IA señala la diferencia y pide confirmar la causa.', 'Illustrative example: a review planned for Thursday remains open on Friday; AI flags the difference and asks for the cause to be confirmed.'),
      analogy: t('Un comentarista de un marcador solo puede explicar el partido con los datos que recibe.', 'A scoreboard commentator can explain the game only using the data received.'),
      related: ['w2p_ai_support', 'w2p_status', 'w2p_information', 'w2p_plan', 'w2p_software'],
      notConfuse: t('Detectar una variación no demuestra su causa. Un informe sin datos nuevos no constituye monitoreo continuo.', 'Detecting a variance does not establish its cause. A report without new data does not constitute continuous monitoring.'),
      sources: ['w2p_src_ms_tracking', 'w2p_src_nist_genai'],
      ai: {
        connection: t('Origen: apoyo de IA. Destino: estado del proyecto.', 'Source: AI support. Destination: project status.'),
        does: t('Resume diferencias frente al plan y distingue observaciones de explicaciones tentativas.', 'Summarizes differences from the plan and distinguishes observations from tentative explanations.'),
        changes: t('Acerca el seguimiento a preguntas accionables si las actualizaciones son suficientes.', 'Makes tracking more actionable if updates are sufficient.'),
        validate: t('Confirmar corte, cobertura, valores y causas con registros y responsables. Sin acceso actualizado, declarar esa limitación.', 'Confirm the reporting date, coverage, values, and causes with records and owners. Without current access, state that limitation.')
      }
    },
    w2p_ai_governance: {
      id: 'w2p_ai_governance', label: t('GOBERNANZA → IA: GOBERNAR / APROBAR', 'GOVERNANCE → AI: GOVERN / APPROVE'), layer: 'ai',
      what: t('Relación entrante que somete el apoyo de IA a reglas, revisión del PM y decisiones de la autoridad designada.', 'An incoming relationship subjecting AI support to rules, PM review, and decisions by the designated authority.'),
      why: t('Impide tratar una salida generada como autorización para cambiar compromisos.', 'Prevents treating generated output as authorization to change commitments.'),
      question: t('¿Quién puede aprobar esta acción y dónde queda registrada su decisión?', 'Who may approve this action, and where is their decision recorded?'),
      example: t('Ejemplo ilustrativo: la IA sugiere ampliar el alcance; el PM evalúa consecuencias y solicita la decisión del patrocinador según las reglas.', 'Illustrative example: AI suggests expanding scope; the PM assesses consequences and requests the sponsor’s decision under the rules.'),
      analogy: t('El copiloto puede sugerir una ruta, pero no recibe por ello la autoridad de quien autoriza el viaje.', 'A copilot can suggest a route without thereby receiving the authority of whoever authorizes the journey.'),
      related: ['w2p_governance', 'w2p_rules', 'w2p_manager', 'w2p_sponsor', 'w2p_ai_support'],
      notConfuse: t('La flecha va de la gobernanza humana hacia la IA. Aprobar corresponde a personas y órganos autorizados; la IA no se autoriza a sí misma.', 'The arrow points from human governance toward AI. Approval belongs to authorized people and bodies; AI does not authorize itself.'),
      sources: ['w2p_src_apm_governance', 'w2p_src_nist_rmf'],
      ai: {
        connection: t('Origen: gobernanza humana, relacionada con reglas, PM y patrocinador. Destino: apoyo de IA.', 'Source: human governance, connected to rules, the PM, and the sponsor. Destination: AI support.'),
        does: t('Opera dentro de límites autorizados y presenta sus propuestas para revisión humana.', 'Operates within authorized limits and presents its proposals for human review.'),
        changes: t('La preparación asistida incorpora responsables, límites y puntos de aprobación explícitos.', 'Assisted preparation incorporates explicit owners, limits, and approval points.'),
        validate: t('Comprobar identidad y autoridad del aprobador, versión revisada, permisos y registro de decisión antes de ejecutar un cambio.', 'Check the approver’s identity and authority, the reviewed version, permissions, and the decision record before executing a change.')
      }
    }
  });

  db.diagrams['01'] = {
    id: '01',
    title: t('Gestión del proyecto', 'Project management'),
    transition: t('Ya decidimos avanzar.\n¿Cómo convertimos esa decisión en un proyecto organizado?', 'We decided to move forward.\nHow do we turn that decision into an organized project?'),
    subtitle: t('DE LA DECISIÓN AL TRABAJO ORGANIZADO', 'FROM DECISION TO ORGANIZED WORK'),
    definition: t('Un esfuerzo temporal realizado para alcanzar un objetivo o producir un resultado definido dentro de un alcance.', 'A temporary effort undertaken to achieve an objective or produce a defined result within a scope.'),
    root: 'w2p_project',
    groups: [
      { label: t('Propósito, límites y aceptación del proyecto', 'Project purpose, boundaries, and acceptance'), nodes: ['w2p_scope', 'w2p_acceptance'] },
      { label: t('Personas que respaldan y realizan el proyecto', 'People who support and deliver the project'), nodes: ['w2p_sponsor', 'w2p_manager', 'w2p_team'] },
      { label: t('Restricciones y medios del proyecto', 'Project constraints and means'), nodes: ['w2p_time', 'w2p_cost', 'w2p_quality', 'w2p_resources'] },
      { label: t('Temporalidad del proyecto y continuidad del servicio', 'Project temporariness and service continuity'), nodes: ['w2p_start', 'w2p_end', 'w2p_operation'] },
      { label: t('Organización y seguimiento del proyecto', 'Project organization and tracking'), nodes: ['w2p_software', 'w2p_information', 'w2p_risks', 'w2p_plan', 'w2p_status'] },
      { label: t('Reglas y autoridad del proyecto', 'Project rules and authority'), nodes: ['w2p_rules', 'w2p_governance'] }
    ],
    aiTitle: t('APOYO A LA GESTIÓN', 'PROJECT MANAGEMENT SUPPORT'),
    aiMessage: t('La IA puede reducir el esfuerzo de organizar y analizar información del proyecto, pero la responsabilidad sobre alcance, prioridades y aceptación sigue siendo humana y organizacional.', 'AI can reduce the effort of organizing and analyzing project information, but responsibility for scope, priorities, and acceptance remains human and organizational.'),
    aiRelationships: [
      {
        id: 'w2p_rel_information', from: 'w2p_ai_support', to: 'w2p_information',
        action: t('SINTETIZAR', 'SYNTHESIZE'), concept: 'w2p_ai_information',
        value: t('Acuerdos y pendientes con referencias al registro original.', 'Agreements and open items with references to original records.')
      },
      {
        id: 'w2p_rel_risks', from: 'w2p_ai_support', to: 'w2p_risks',
        action: t('DETECTAR CANDIDATOS', 'DETECT CANDIDATES'), concept: 'w2p_ai_risks',
        value: t('Hipótesis para investigar, no hechos ni riesgos ya evaluados.', 'Hypotheses to investigate, not facts or already assessed risks.')
      },
      {
        id: 'w2p_rel_plan', from: 'w2p_ai_support', to: 'w2p_plan',
        action: t('PROPONER / ORGANIZAR', 'DRAFT / ORGANIZE'), concept: 'w2p_ai_plan',
        value: t('Borrador con supuestos y compromisos pendientes de validación.', 'A draft with assumptions and commitments awaiting validation.')
      },
      {
        id: 'w2p_rel_status', from: 'w2p_ai_support', to: 'w2p_status',
        action: t('MONITOREAR / EXPLICAR', 'MONITOR / EXPLAIN'), concept: 'w2p_ai_status',
        value: t('Diferencias según los datos recibidos, con fecha de corte y causas por confirmar.', 'Differences based on received data, with a reporting date and causes to confirm.')
      },
      {
        id: 'w2p_rel_governance', from: 'w2p_governance', to: 'w2p_ai_support',
        action: t('GOBERNAR / APROBAR', 'GOVERN / APPROVE'), concept: 'w2p_ai_governance',
        value: t('Reglas, PM y patrocinador fijan límites; las personas autorizadas aprueban.', 'Rules, the PM, and the sponsor set limits; authorized people approve.')
      }
    ],
    timeline: ['w2p_start', 'w2p_project', 'w2p_end'],
    distinction: ['w2p_project', 'w2p_operation'],
    timelineMessage: t('INICIO DEFINIDO → TRABAJO → FIN DEFINIDO', 'DEFINED START → WORK → DEFINED END'),
    distinctionMessage: t('PROYECTO ≠ OPERACIÓN CONTINUA', 'PROJECT ≠ ONGOING OPERATION'),
    aiNode: 'w2p_ai_support',
    governanceSources: ['w2p_rules', 'w2p_manager', 'w2p_sponsor'],
    defaultMode: 'base',
    aiControl: t('APLICAR CAPA IA', 'APPLY AI LENS'),
    weekTitle: t('DESARROLLO DE SISTEMAS CON GESTIÓN DE PROYECTOS', 'SYSTEMS DEVELOPMENT WITH PROJECT MANAGEMENT'),
    opening: t('Decidir que un proyecto vale la pena no significa que ya sepamos cómo ejecutarlo. Ahora debemos organizar el trabajo y descubrir con precisión qué necesita el nuevo sistema.', 'Deciding that a project is worth pursuing does not mean we already know how to execute it. We now need to organize the work and discover what the new system actually needs.'),
    actTitle: t('ACTO I · ORGANIZAR EL PROYECTO', 'ACT I · ORGANIZE THE PROJECT'),
    actQuestion: t('¿CÓMO ORGANIZAMOS EL PROYECTO?', 'HOW DO WE ORGANIZE THE PROJECT?'),
    nextTransition: t('Ya tenemos un proyecto.\n\n¿Todos los proyectos deberían desarrollarse de la misma manera?', 'We now have a project.\n\nShould all projects be developed in the same way?'),
    layerLabels: {
      foundation: t('CST212 · FUNDAMENTO ACADÉMICO', 'CST212 FOUNDATION'),
      deepening: t('PROFUNDIZACIÓN ACADÉMICA', 'ACADEMIC DEEPENING'),
      ai: t('EXTENSIÓN AI-FIRST', 'AI-FIRST EXTENSION')
    },
    sourceNote: t('Fundamento: temas y frases del pedido CST212 suministrado por el usuario. Las referencias de APM y Microsoft son fuentes externas de apoyo, no materiales atribuidos a Tiffin. La profundización amplía esos temas. Las aplicaciones de IA son propuestas pedagógicas del atlas; NIST fundamenta precauciones y gobernanza, no demuestra la eficacia de estas aplicaciones ni las prescribe para CST212.', 'Foundation: topics and wording in the CST212 request supplied by the user. APM and Microsoft references are external supporting sources, not materials attributed to Tiffin. Deepening expands those topics. AI applications are pedagogical proposals for the atlas; NIST supports precautions and governance, not claims of effectiveness or prescriptions for CST212.'),
    exampleNote: t('Todos los ejemplos son ilustrativos. No se afirman hechos, requisitos, cifras, roles ni decisiones del caso Eden Bay/AREV.', 'All examples are illustrative. No facts, requirements, figures, roles, or decisions are asserted about the Eden Bay/AREV case.'),
    sources: ['w2p_src_apm_project', 'w2p_src_apm_scope', 'w2p_src_apm_manager', 'w2p_src_apm_glossary', 'w2p_src_apm_quality', 'w2p_src_apm_resources', 'w2p_src_apm_controls', 'w2p_src_apm_risks', 'w2p_src_apm_governance', 'w2p_src_apm_sponsor', 'w2p_src_ms_project', 'w2p_src_ms_tracking', 'w2p_src_nist_rmf', 'w2p_src_nist_genai']
  };
})();
