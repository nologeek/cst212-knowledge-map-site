(function () {
  const t = (es, en) => ({ es, en });
  window.CST212_W2 = window.CST212_W2 || { diagrams: {}, concepts: {}, sources: {} };
  const db = window.CST212_W2;

  Object.assign(db.sources, {
    w2r_src_user_canon: {
      author: 'Usuario / User', year: 's.f. / n.d.',
      title: t('CST212: canon, ejemplos y consignas de requisitos aportados por el usuario', 'CST212: requirements canon, examples, and instructions supplied by the user'),
      url: '', kind: 'supplieduser', supplieduser: true,
      locator: t('Mensaje del usuario: apartados que comienzan con "CANON user", "Traceability academicdeepening" y "AI explicit".', 'User message: sections beginning with "CANON user", "Traceability academicdeepening", and "AI explicit".'),
      note: t('Fuente de las cinco categorías y del ejercicio de IA. Los ejemplos didácticos no son entrevistas, registros operativos ni requisitos aceptados del caso.', 'Source of the five categories and the AI exercise. Teaching examples are not interviews, operational records, or accepted case requirements.')
    },
    w2r_src_user_case: {
      author: 'Usuario / User', year: 's.f. / n.d.',
      title: t('AREV/Eden Bay: candidatos de requisitos aportados por el usuario; validación pendiente', 'AREV/Eden Bay: requirement candidates supplied by the user; validation pending'),
      url: '', kind: 'supplieduser', supplieduser: true,
      locator: t('Mensaje del usuario: desde "AREV EdenBay potentialcasecandidates" hasta "No source claims beyondprovided".', 'User message: from "AREV EdenBay potentialcasecandidates" through "No source claims beyondprovided".'),
      note: t('Se dispone de los candidatos del mensaje, no del documento completo del caso ni de una aprobación de sus usuarios. No se atribuyen páginas, entrevistas, cifras o reglas no proporcionadas.', 'The message supplies candidates, not the complete case document or approval by its users. No unsupplied pages, interviews, figures, or rules are attributed to the case.')
    },
    w2r_src_nasa_handbook: {
      author: 'Hirshorn, S. R., Voss, L. D., & Bromley, L. K. (NASA)', year: '2017',
      title: t('NASA Systems Engineering Handbook (NASA/SP-2016-6105 Rev. 2)', 'NASA Systems Engineering Handbook (NASA/SP-2016-6105 Rev. 2)'),
      url: 'https://www.nasa.gov/wp-content/uploads/2018/09/nasa_systems_engineering_handbook_0.pdf',
      kind: 'primary',
      locator: t('Sección 4.2 y apéndice C. Autoría y fecha de publicación, 17 de febrero de 2017, según el registro NTRS 20170001761.', 'Section 4.2 and Appendix C. Authorship and publication date, February 17, 2017, follow NTRS record 20170001761.'),
      note: t('Profundización sobre calidad, validación y acuerdo de requisitos. La clasificación de cinco tipos, los candidatos municipales y las actividades de IA proceden del ejercicio del usuario.', 'Further study on requirement quality, validation, and agreement. The five-type classification, municipal candidates, and AI activities come from the user exercise.')
    },
    w2r_src_iiba_requirements: {
      author: 'International Institute of Business Analysis (IIBA)', year: 's.f. / n.d.',
      title: t('The Business Analysis Standard: 4.4 Understanding Requirements and Designs', 'The Business Analysis Standard: 4.4 Understanding Requirements and Designs'),
      url: 'https://www.iiba.org/knowledgehub/the-business-analysis-standard/4-implementing-business-analysis/4-4-understanding-requirements-and-designs/',
      kind: 'primary',
      locator: t('Apartados 4.4.1 y 4.4.3 de la página pública oficial; no se asigna un año de publicación sin fecha comprobada.', 'Sections 4.4.1 and 4.4.3 of the official public page; no publication year is assigned without a confirmed date.'),
      note: t('Profundización sobre necesidad, requisito, diseño y trazabilidad. La cadena NECESIDAD → EVIDENCIA → REQUISITO es la adaptación didáctica solicitada por el usuario.', 'Further study on need, requirement, design, and traceability. NEED → EVIDENCE → REQUIREMENT is the teaching adaptation requested by the user.')
    }
  });

  Object.assign(db.concepts, {
    w2r_requirements: {
      id: 'w2r_requirements', label: t('REQUISITOS DEL SISTEMA', 'SYSTEM REQUIREMENTS'), layer: 'foundation',
      what: t('Capacidades o condiciones que el sistema necesita cumplir para responder a una necesidad de la organización o de sus usuarios.', 'Capabilities or conditions the system needs to fulfill to address a need of the organization or its users.'),
      why: t('Permiten acordar qué debe aportar el nuevo sistema antes de elegir cómo implementarlo.', 'They help people agree on what the new system must provide before choosing how to implement it.'),
      question: t('¿Qué debe permitir, producir o cumplir el sistema para responder a la necesidad?', 'What must the system enable, produce, or satisfy to address the need?'),
      example: t('Ejemplo didáctico del usuario: permitir consultar la disponibilidad de vehículos. Describe una capacidad; para convertirla en requisito aceptado faltan evidencia del contexto y validación con los usuarios.', 'User-supplied teaching example: allow users to check vehicle availability. It describes a capability; contextual evidence and user validation are still needed before it becomes an accepted requirement.'),
      analogy: t('Un encargo que explica qué resultado necesita quien lo solicita, antes de escoger herramientas para realizarlo.', 'A request explaining the result its requester needs before choosing the tools to deliver it.'),
      related: ['w2r_need', 'w2r_input', 'w2r_output', 'w2r_process', 'w2r_performance', 'w2r_security', 'w2r_design', 'w2r_human_validation'],
      notConfuse: t('REQUISITO ≠ DISEÑO DE IMPLEMENTACIÓN. Un botón azul, React o PostgreSQL describen decisiones de diseño y no establecen por sí mismos una necesidad del negocio. Las cinco categorías de este curso son entrada, salida, proceso, rendimiento y seguridad.', 'REQUIREMENT ≠ IMPLEMENTATION DESIGN. A blue button, React, or PostgreSQL describes design decisions and does not establish a business need by itself. The five categories in this course are input, output, process, performance, and security.'),
      sources: ['w2r_src_user_canon'],
      ai: {
        connection: t('La IA se conecta a este mismo requisito canónico mediante cuatro acciones distintas: clasificar, detectar duplicados, encontrar ambigüedades y comprobar conflictos.', 'AI connects to this same canonical requirement through four distinct actions: classify, detect duplicates, find ambiguity, and check conflicts.'),
        does: t('Propone categorías y observaciones sobre los enunciados recibidos, vinculando cada observación a sus fragmentos de origen.', 'Proposes categories and observations about supplied statements, linking each observation to its source spans.'),
        changes: t('Prepara una revisión más enfocada de los requisitos sin crear cuatro versiones diferentes del concepto.', 'Prepares a more focused requirements review without creating four different versions of the concept.'),
        validate: t('El usuario y el analista contrastan cada propuesta con su necesidad y evidencia; lo que carezca de respaldo queda pendiente de validación.', 'The user and analyst compare each proposal with its need and evidence; anything without support remains pending validation.')
      }
    },
    w2r_input: {
      id: 'w2r_input', label: t('ENTRADA', 'INPUT'), layer: 'foundation',
      what: t('Requisitos sobre los datos que el sistema debe recibir o capturar para realizar su trabajo.', 'Requirements concerning the data the system must receive or capture to perform its work.'),
      why: t('Aclaran qué información hace posible registrar una operación y de dónde debe obtenerse.', 'They clarify which information makes an operation possible and where it should come from.'),
      question: t('¿Qué datos deben entrar, quién los aporta y para qué se necesitan?', 'Which data must enter, who supplies them, and why are they needed?'),
      example: t('Ejemplos didácticos del canon: identificación del vehículo, solicitud de mantenimiento, fecha, kilometraje e información de reparación. En AREV/Eden Bay, identificación, información de mantenimiento o reparación y datos de costos son candidatos aportados por el usuario, pendientes de validación.', 'Teaching examples from the canon: vehicle identification, maintenance request, date, mileage, and repair information. In AREV/Eden Bay, identification, maintenance or repair information, and cost data are user-supplied candidates pending validation.'),
      analogy: t('Los datos que se entregan al recibir un vehículo en un taller, antes de preparar su historial.', 'The information supplied when a workshop receives a vehicle, before preparing its history.'),
      related: ['w2r_requirements', 'w2r_process', 'w2r_output', 'w2r_requirement_sources', 'w2r_case_candidates'],
      notConfuse: t('Los datos de entrada no son el diseño de un formulario ni su color. Recibir datos de costos es entrada; calcular un costo es proceso; presentar el informe es salida.', 'Input data is not a form design or its color. Receiving cost data is input; calculating a cost is a process; presenting the report is output.'),
      sources: ['w2r_src_user_canon', 'w2r_src_user_case'],
      ai: {
        connection: t('La extracción de fuentes y la clasificación pueden señalar datos de entrada mencionados expresamente.', 'Source extraction and classification can flag explicitly mentioned input data.'),
        does: t('Relaciona cada dato propuesto con el fragmento que lo menciona y formula preguntas sobre su origen.', 'Links each proposed data item to the span that mentions it and drafts questions about its origin.'),
        changes: t('Facilita discutir datos faltantes sin convertir campos sugeridos en obligaciones del caso.', 'Makes missing data easier to discuss without turning suggested fields into case obligations.'),
        validate: t('Confirmar necesidad, significado, unidad y responsable de cada dato. Los campos no respaldados se marcan como candidatos por validar.', 'Confirm the need, meaning, unit, and supplier of each data item. Unsupported fields are marked as candidates requiring validation.')
      }
    },
    w2r_output: {
      id: 'w2r_output', label: t('SALIDA', 'OUTPUT'), layer: 'foundation',
      what: t('Requisitos sobre la información y los resultados que el sistema debe entregar a sus usuarios.', 'Requirements concerning the information and results the system must deliver to its users.'),
      why: t('Conectan los datos procesados con las consultas y decisiones que debe apoyar el sistema.', 'They connect processed data to the inquiries and decisions the system should support.'),
      question: t('¿Qué resultado debe obtener cada usuario y para qué decisión o tarea?', 'What result should each user obtain, and for which decision or task?'),
      example: t('Ejemplos didácticos: historial de mantenimiento, informe de costos, estado del vehículo, resumen de reparaciones e información para la gestión. Para AREV/Eden Bay, informes de costos de mantenimiento, historial de reparaciones e información gerencial son candidatos pendientes de validación.', 'Teaching examples: maintenance history, cost report, vehicle status, repair summary, and management information. For AREV/Eden Bay, maintenance cost reports, repair history, and management information are candidates pending validation.'),
      analogy: t('El resumen que recibe quien debe decidir, elaborado a partir de los registros disponibles.', 'The summary received by someone who needs to make a decision, prepared from available records.'),
      related: ['w2r_requirements', 'w2r_input', 'w2r_process', 'w2r_need', 'w2r_security'],
      notConfuse: t('La salida es la información requerida; la disposición visual de un reporte pertenece al diseño. Generar un cálculo es proceso; entregar su resultado es salida.', 'Output is the required information; a report layout belongs to design. Performing a calculation is a process; delivering its result is output.'),
      sources: ['w2r_src_user_canon', 'w2r_src_user_case'],
      ai: {
        connection: t('La IA puede clasificar los resultados mencionados en la evidencia como posibles salidas.', 'AI can classify results mentioned in the evidence as possible outputs.'),
        does: t('Prepara una relación entre salida propuesta, destinatario mencionado y fragmento de respaldo; señala destinatarios aún desconocidos.', 'Prepares links between a proposed output, any named recipient, and its supporting span; flags recipients that remain unknown.'),
        changes: t('Ayuda a detectar solicitudes como "información gerencial" que todavía necesitan precisión.', 'Helps detect requests such as "management information" that still need clarification.'),
        validate: t('Los usuarios confirman contenido, destinatarios y propósito. No asumir periodicidad, formato ni indicadores que no fueron proporcionados.', 'Users confirm content, recipients, and purpose. Do not assume a frequency, format, or indicators that were not supplied.')
      }
    },
    w2r_process: {
      id: 'w2r_process', label: t('PROCESO', 'PROCESS'), layer: 'foundation',
      what: t('Requisitos sobre las operaciones que el sistema debe realizar para transformar datos o actualizar información.', 'Requirements concerning the operations the system must perform to transform data or update information.'),
      why: t('Explican qué debe ocurrir entre recibir datos y entregar un resultado útil.', 'They explain what must happen between receiving data and delivering a useful result.'),
      question: t('¿Qué operación debe ejecutar el sistema con los datos recibidos?', 'Which operation must the system perform on the received data?'),
      example: t('Ejemplos didácticos: registrar mantenimiento, calcular costos, actualizar el estado y comparar historiales de reparación. Para AREV/Eden Bay, registrar reparaciones, analizar costos y comparar mantenimientos son candidatos, no funciones confirmadas.', 'Teaching examples: record maintenance, calculate costs, update status, and compare repair histories. For AREV/Eden Bay, recording repairs, analyzing costs, and comparing maintenance are candidates, not confirmed functions.'),
      analogy: t('La secuencia de trabajo que convierte notas de taller en un historial organizado.', 'The sequence of work that turns workshop notes into an organized history.'),
      related: ['w2r_requirements', 'w2r_input', 'w2r_output', 'w2r_performance', 'w2r_questions'],
      notConfuse: t('El proceso expresa la operación necesaria, no el algoritmo, el lenguaje de programación o la base de datos que la implementará.', 'A process expresses the required operation, not the algorithm, programming language, or database that will implement it.'),
      sources: ['w2r_src_user_canon', 'w2r_src_user_case'],
      ai: {
        connection: t('La IA puede localizar verbos de operación en las fuentes y proponer su clasificación como proceso.', 'AI can locate operational verbs in sources and propose classifying them as processes.'),
        does: t('Separa registrar, calcular, actualizar y comparar, conservando las frases que motivan cada propuesta.', 'Separates recording, calculating, updating, and comparing while preserving the phrases behind each proposal.'),
        changes: t('Hace visibles operaciones vagas o mezcladas que requieren conversación con quienes realizan el trabajo.', 'Makes vague or combined operations visible for discussion with the people who do the work.'),
        validate: t('Acordar reglas de cálculo, condiciones de actualización y criterios de comparación. Si no hay evidencia, quedan pendientes; la IA no completa reglas de negocio por intuición.', 'Agree on calculation rules, update conditions, and comparison criteria. Without evidence, they remain pending; AI does not fill in business rules by intuition.')
      }
    },
    w2r_performance: {
      id: 'w2r_performance', label: t('RENDIMIENTO', 'PERFORMANCE'), layer: 'foundation',
      what: t('Requisitos sobre tiempo de respuesta, capacidad, disponibilidad, volumen y confiabilidad necesarios para el uso previsto.', 'Requirements concerning the response time, capacity, availability, volume, and reliability needed for the intended use.'),
      why: t('Una función puede existir y aun así resultar poco útil si no responde a las condiciones reales de operación.', 'A function may exist yet remain of little use if it cannot meet actual operating conditions.'),
      question: t('¿Con qué rapidez, capacidad, disponibilidad y confiabilidad debe operar, y para qué volumen de trabajo?', 'With what speed, capacity, availability, and reliability must it operate, and for what workload?'),
      example: t('Candidato para AREV/Eden Bay: que las consultas y registros sirvan a la operación municipal práctica. Falta acordar tiempos, carga, volumen, períodos de disponibilidad y criterios de confiabilidad con evidencia; no se asignan umbrales.', 'Candidate for AREV/Eden Bay: inquiries and records should support practical municipal operations. Response times, load, volume, availability periods, and reliability criteria still require evidence and agreement; no thresholds are assigned.'),
      analogy: t('No basta con que una ventanilla pueda atender: hay que conocer la demanda y las condiciones en que debe hacerlo.', 'It is not enough for a service desk to be able to help: its demand and required operating conditions must be understood.'),
      related: ['w2r_requirements', 'w2r_process', 'w2r_output', 'w2r_questions', 'w2r_quality'],
      notConfuse: t('El rendimiento del sistema no es el plazo de construcción del proyecto. "Rápido" o "siempre disponible" no establecen criterios acordados; tampoco autorizan inventar segundos, porcentajes o cantidades.', 'System performance is not the project delivery schedule. "Fast" or "always available" does not establish agreed criteria, nor does it authorize inventing seconds, percentages, or quantities.'),
      sources: ['w2r_src_user_canon', 'w2r_src_user_case'],
      ai: {
        connection: t('La detección de ambigüedades y las preguntas de seguimiento ayudan a precisar condiciones de operación.', 'Ambiguity detection and follow-up questions help clarify operating conditions.'),
        does: t('Señala términos como "rápido" y pide el escenario de uso, la medida y la evidencia con que se acordará el criterio.', 'Flags terms such as "fast" and asks for the use scenario, measure, and evidence needed to agree on a criterion.'),
        changes: t('Transforma adjetivos vagos en asuntos concretos que deben investigarse.', 'Turns vague adjectives into concrete matters that need investigation.'),
        validate: t('Usuarios y analista acuerdan valores y condiciones a partir de la operación real. Ningún valor generado por IA se presenta como dato del caso.', 'Users and the analyst agree on values and conditions based on actual operations. No AI-generated value is presented as case data.')
      }
    },
    w2r_security: {
      id: 'w2r_security', label: t('SEGURIDAD', 'SECURITY'), layer: 'foundation',
      what: t('Requisitos sobre acceso autorizado, permisos por rol, protección de registros y posibilidad de auditar acciones cuando corresponda.', 'Requirements concerning authorized access, role permissions, protection of records, and the ability to audit actions where appropriate.'),
      why: t('Aclaran quién puede consultar o modificar información y qué acciones necesitan quedar identificadas.', 'They clarify who may view or change information and which actions need to be identifiable.'),
      question: t('¿Quién puede hacer qué con cada registro y qué acciones deben poder revisarse?', 'Who may do what with each record, and which actions must be reviewable?'),
      example: t('Candidato AREV/Eden Bay: definir acceso según roles. Como preguntas didácticas, aclarar quién consulta historiales, quién registra reparaciones y si corresponde identificar cambios. Los nombres de roles y sus permisos están pendientes de validación.', 'AREV/Eden Bay candidate: define access by role. Teaching questions include who views histories, who records repairs, and whether changes should be identifiable. Role names and their permissions remain pending validation.'),
      analogy: t('Las autorizaciones de un archivo: no todas las personas necesitan consultar, cambiar o revisar los mismos registros.', 'An archive access policy: different people need to view, change, or review different records.'),
      related: ['w2r_requirements', 'w2r_input', 'w2r_output', 'w2r_questions', 'w2r_human_validation'],
      notConfuse: t('Seguridad aquí define condiciones de acceso y cuidado de los registros. Elegir productos o mecanismos técnicos pertenece al diseño; no se amplía el ejercicio a un programa de ciberseguridad.', 'Security here defines access and record-protection conditions. Choosing products or technical mechanisms belongs to design; this exercise does not expand into a cybersecurity program.'),
      sources: ['w2r_src_user_canon', 'w2r_src_user_case'],
      ai: {
        connection: t('La IA puede señalar permisos mencionados y comparar enunciados que parezcan incompatibles.', 'AI can flag stated permissions and compare statements that appear incompatible.'),
        does: t('Organiza propuestas de rol, acción y registro con sus fragmentos de respaldo; marca permisos no especificados.', 'Organizes proposed roles, actions, and records with their supporting spans; marks unspecified permissions.'),
        changes: t('Prepara la conversación sobre acceso sin otorgar permisos ni crear nuevos roles.', 'Prepares the access discussion without granting permissions or creating new roles.'),
        validate: t('Las personas responsables confirman permisos, protección y acciones auditables apropiadas. La IA no decide quién queda autorizado.', 'Responsible people confirm permissions, protection, and appropriate auditable actions. AI does not decide who becomes authorized.')
      }
    },
    w2r_need: {
      id: 'w2r_need', label: t('NECESIDAD', 'NEED'), layer: 'foundation',
      what: t('Situación, dificultad u objetivo que explica por qué la organización o sus usuarios necesitan una capacidad o condición.', 'A situation, difficulty, or objective explaining why the organization or its users need a capability or condition.'),
      why: t('Da propósito al requisito y ayuda a preguntar si lo solicitado realmente mejora el trabajo.', 'It gives a requirement purpose and helps people ask whether the request actually improves their work.'),
      question: t('¿Qué problema u objetivo de las personas justifica esta petición?', 'Which problem or objective of the people involved justifies this request?'),
      example: t('Hipótesis didáctica por validar: necesitar información para decidir qué vehículo puede utilizarse. Podría motivar consultar disponibilidad, pero el ejemplo del usuario no prueba que esa necesidad esté confirmada en AREV/Eden Bay.', 'Teaching hypothesis requiring validation: needing information to decide which vehicle can be used. It could motivate an availability inquiry, but the user example does not prove that this need is confirmed in AREV/Eden Bay.'),
      analogy: t('La razón para emprender un viaje, antes de escoger la ruta y el medio de transporte.', 'The reason for taking a journey, before choosing its route and means of transportation.'),
      related: ['w2r_requirements', 'w2r_evidence', 'w2r_traceability', 'w2r_design'],
      notConfuse: t('Una preferencia por un botón azul o una tecnología no demuestra por sí sola una necesidad organizacional. Hay que preguntar qué resultado se busca.', 'A preference for a blue button or a technology does not by itself demonstrate an organizational need. Ask what result is sought.'),
      sources: ['w2r_src_user_canon'],
      ai: {
        connection: t('La IA ayuda a relacionar peticiones con necesidades expresadas en fuentes identificables.', 'AI helps relate requests to needs expressed in identifiable sources.'),
        does: t('Distingue la necesidad explícita de una interpretación y propone preguntas cuando falta el motivo.', 'Distinguishes an explicit need from an interpretation and proposes questions when the reason is missing.'),
        changes: t('Hace visible cuándo un requisito candidato tiene propósito documentado y cuándo solo parece razonable.', 'Makes it visible when a candidate requirement has a documented purpose and when it merely seems reasonable.'),
        validate: t('Quien vive la situación confirma su necesidad; una inferencia de IA queda etiquetada como hipótesis, con validación pendiente.', 'The person experiencing the situation confirms the need; an AI inference remains labeled as a hypothesis pending validation.')
      }
    },
    w2r_requirement_sources: {
      id: 'w2r_requirement_sources', label: t('FUENTES DE REQUISITOS', 'REQUIREMENT SOURCES'), layer: 'foundation',
      what: t('Personas y materiales de los que se obtiene información para descubrir necesidades: conversaciones, observaciones, documentos o registros, cuando estén disponibles.', 'People and materials from which information is obtained to discover needs: conversations, observations, documents, or records, when available.'),
      why: t('Permiten distinguir lo que alguien aportó de lo que el analista o la IA está proponiendo.', 'They help distinguish what someone supplied from what the analyst or AI is proposing.'),
      question: t('¿De qué persona o material procede este enunciado y qué fragmento lo respalda?', 'Which person or material does this statement come from, and which span supports it?'),
      example: t('Fuente disponible: el mensaje del usuario, apartado "AREV EdenBay potentialcasecandidates". Entrevistas, formularios o registros municipales serían fuentes por solicitar, no documentos que ya se hayan consultado.', 'Available source: the user message, section "AREV EdenBay potentialcasecandidates". Interviews, forms, or municipal records would be sources to request, not documents already consulted.'),
      analogy: t('La procedencia de una noticia: saber quién la aportó permite volver a preguntar y revisar su contexto.', 'The origin of a news item: knowing who supplied it lets people ask again and examine its context.'),
      related: ['w2r_need', 'w2r_evidence', 'w2r_questions', 'w2r_traceability', 'w2r_ai_extract'],
      notConfuse: t('Una fuente académica explica métodos, pero no demuestra necesidades del caso. Un resumen generado por IA tampoco sustituye la fuente original.', 'An academic source explains methods but does not establish case needs. An AI-generated summary does not replace the original source either.'),
      sources: ['w2r_src_user_canon', 'w2r_src_user_case'],
      ai: {
        connection: t('IA → FUENTES DE REQUISITOS: EXTRAER.', 'AI → REQUIREMENT SOURCES: EXTRACT.'),
        does: t('Extrae enunciados de materiales realmente proporcionados y conserva fuente, localizador y fragmento literal.', 'Extracts statements from materials actually supplied and preserves the source, locator, and verbatim span.'),
        changes: t('Facilita preparar evidencia para revisión sin fingir acceso a documentos ausentes.', 'Helps prepare evidence for review without pretending to access missing documents.'),
        validate: t('Comparar cada extracción con su original. Si falta el material o no existe un tramo localizable, registrar "validación pendiente" y solicitar la fuente.', 'Compare each extraction with its original. If the material is missing or no span can be located, record "validation pending" and request the source.')
      }
    },
    w2r_evidence: {
      id: 'w2r_evidence', label: t('EVIDENCIA', 'EVIDENCE'), layer: 'deepening',
      what: t('Fragmento identificable de una fuente disponible que permite revisar el respaldo y el contexto de una afirmación.', 'An identifiable span of an available source that allows a claim support and context to be reviewed.'),
      why: t('Hace comprobable qué se recibió y qué parte del requisito propuesto sigue siendo una interpretación.', 'It makes clear what was received and which part of a proposed requirement remains an interpretation.'),
      question: t('¿Podemos volver al fragmento exacto y comprobar qué afirma realmente?', 'Can we return to the exact span and check what it actually says?'),
      example: t('Evidencia disponible: fuente w2r_src_user_case, mensaje del usuario, tramo "output maintcostreports,repairhistory,managementinfo". Respalda que se aportaron esos candidatos; no demuestra que usuarios municipales los hayan aprobado.', 'Available evidence: source w2r_src_user_case, user message, span "output maintcostreports,repairhistory,managementinfo". It supports that these candidates were supplied; it does not prove that municipal users approved them.'),
      analogy: t('Un señalador sobre el pasaje que se está discutiendo: permite volver al mismo lugar.', 'A bookmark on the passage under discussion: it allows everyone to return to the same place.'),
      related: ['w2r_requirement_sources', 'w2r_need', 'w2r_traceability', 'w2r_candidate_requirement', 'w2r_ai'],
      notConfuse: t('EVIDENCIA ≠ APROBACIÓN. Un fragmento puede documentar una sugerencia, una duda o un desacuerdo; no todo texto de una fuente constituye un requisito aceptado.', 'EVIDENCE ≠ APPROVAL. A span can document a suggestion, a question, or a disagreement; not every source statement constitutes an accepted requirement.'),
      sources: ['w2r_src_user_canon', 'w2r_src_user_case'],
      ai: {
        connection: t('Es el inicio del flujo EVIDENCIA → IA → REQUISITO CANDIDATO → VALIDACIÓN → REQUISITO ACEPTADO.', 'It begins the flow EVIDENCE → AI → CANDIDATE REQUIREMENT → VALIDATION → ACCEPTED REQUIREMENT.'),
        does: t('Conserva la cita original separada de su paráfrasis y señala qué parte es inferencia.', 'Keeps the original quotation separate from its paraphrase and flags which part is an inference.'),
        changes: t('Permite revisar la propuesta sin depender solo de la confianza en el resumen de IA.', 'Allows a proposal to be reviewed without relying solely on trust in the AI summary.'),
        validate: t('Comprobar autor o procedencia, localizador y correspondencia entre el fragmento y la afirmación. Nunca fabricar citas, páginas o registros faltantes.', 'Check authorship or provenance, locator, and correspondence between the span and the claim. Never fabricate quotations, pages, or missing records.')
      }
    },
    w2r_questions: {
      id: 'w2r_questions', label: t('PREGUNTAS DE SEGUIMIENTO', 'FOLLOW-UP QUESTIONS'), layer: 'foundation',
      what: t('Preguntas que aclaran información faltante, términos vagos o desacuerdos antes de aceptar un requisito.', 'Questions that clarify missing information, vague terms, or disagreements before accepting a requirement.'),
      why: t('Convierten incertidumbres en asuntos que pueden resolver las personas que conocen el trabajo.', 'They turn uncertainties into issues that the people familiar with the work can resolve.'),
      question: t('¿Qué falta saber, a quién debemos preguntar y qué decisión permitirá tomar la respuesta?', 'What is still unknown, whom should we ask, and what decision will the answer support?'),
      example: t('Preguntas didácticas, no respuestas del caso: ¿qué significa que un vehículo esté disponible?, ¿qué datos de costos se requieren?, ¿quién puede cambiar su estado?, ¿qué volumen y tiempo de respuesta necesita la operación?', 'Teaching questions, not case answers: what does vehicle availability mean, which cost data is needed, who may change its status, and what volume and response time does the operation require?'),
      analogy: t('Las preguntas que despejan una dirección incompleta antes de iniciar el viaje.', 'The questions that clarify an incomplete address before starting the journey.'),
      related: ['w2r_need', 'w2r_requirement_sources', 'w2r_performance', 'w2r_security', 'w2r_ai_followup', 'w2r_human_validation'],
      notConfuse: t('Una pregunta no es un requisito ni una respuesta. Formularla de manera convincente no demuestra que exista una regla del negocio.', 'A question is neither a requirement nor an answer. Phrasing it convincingly does not demonstrate that a business rule exists.'),
      sources: ['w2r_src_user_canon'],
      ai: {
        connection: t('IA → PREGUNTAS: GENERAR SEGUIMIENTO.', 'AI → QUESTIONS: GENERATE FOLLOW-UP.'),
        does: t('Propone preguntas vinculadas al fragmento ambiguo o al vacío de evidencia que intenta resolver.', 'Proposes questions linked to the ambiguous span or evidence gap they aim to resolve.'),
        changes: t('Prepara conversaciones más concretas y ayuda a dejar visibles las cuestiones abiertas.', 'Prepares more concrete conversations and helps keep unresolved issues visible.'),
        validate: t('El analista revisa pertinencia y destinatario; registra la respuesta real con su fuente, sin permitir que la IA responda en nombre del usuario.', 'The analyst reviews relevance and recipient, then records the actual answer with its source without letting AI answer on behalf of the user.')
      }
    },
    w2r_traceability: {
      id: 'w2r_traceability', label: t('TRAZABILIDAD: NECESIDAD → EVIDENCIA → REQUISITO', 'TRACEABILITY: NEED → EVIDENCE → REQUIREMENT'), layer: 'deepening',
      what: t('Relación que permite seguir un requisito hasta la necesidad que lo motiva. Aquí se conserva además la evidencia que respalda ese vínculo.', 'A relationship that lets a requirement be followed back to its motivating need. Here, the evidence supporting that link is also retained.'),
      why: t('Ayuda a explicar por qué existe un requisito y a revisar qué podría cambiar si cambia su origen.', 'It helps explain why a requirement exists and assess what might change when its origin changes.'),
      question: t('¿Qué necesidad justifica este requisito y con qué evidencia podemos defender la relación?', 'Which need justifies this requirement, and what evidence supports the relationship?'),
      example: t('Ejercicio pendiente de validación: necesidad hipotética de decidir qué vehículo usar → ejemplo del usuario "permitir consultar disponibilidadvehículos" → candidato de consulta de disponibilidad. El vínculo con una necesidad real del caso aún requiere confirmación.', 'Exercise pending validation: hypothetical need to decide which vehicle to use → user example "permitir consultar disponibilidadvehículos" → availability inquiry candidate. The link to an actual case need still requires confirmation.'),
      analogy: t('Un hilo que permite volver desde la petición escrita hasta la razón y el testimonio que la originaron.', 'A thread leading back from the written request to the reason and account that prompted it.'),
      related: ['w2r_need', 'w2r_evidence', 'w2r_requirements', 'w2r_candidate_requirement', 'w2r_accepted_requirement'],
      notConfuse: t('No basta con listar documentos. La trazabilidad identifica relaciones concretas; NECESIDAD → EVIDENCIA → REQUISITO es una adaptación didáctica, no una cita literal de IIBA ni una sexta categoría.', 'Listing documents is insufficient. Traceability identifies specific relationships; NEED → EVIDENCE → REQUIREMENT is a teaching adaptation, not a verbatim IIBA quotation or a sixth category.'),
      sources: ['w2r_src_user_canon', 'w2r_src_iiba_requirements'],
      ai: {
        connection: t('La IA puede proponer vínculos entre necesidades, fragmentos y candidatos.', 'AI can propose links between needs, spans, and candidates.'),
        does: t('Presenta cada vínculo propuesto con su texto de respaldo y marca los eslabones que faltan.', 'Presents each proposed link with its supporting text and marks missing links.'),
        changes: t('Facilita localizar requisitos sin respaldo y evidencia todavía no interpretada.', 'Helps locate unsupported requirements and evidence that has not yet been interpreted.'),
        validate: t('El analista revisa cada relación; semejanza de palabras no demuestra causalidad ni autorización. Los vínculos inferidos siguen pendientes.', 'The analyst reviews each relationship; similar wording proves neither causality nor authorization. Inferred links remain pending.')
      }
    },
    w2r_quality: {
      id: 'w2r_quality', label: t('CALIDAD DEL REQUISITO', 'REQUIREMENT QUALITY'), layer: 'deepening',
      what: t('Revisión de que el enunciado sea claro, necesario, viable, coherente y comprobable.', 'Review of whether a statement is clear, necessary, feasible, consistent, and verifiable.'),
      why: t('Reduce interpretaciones incompatibles y permite acordar cómo comprobar su cumplimiento.', 'It reduces incompatible interpretations and enables agreement on how fulfillment will be checked.'),
      question: t('¿Dos personas entienden lo mismo y saben qué evidencia demostraría su cumplimiento?', 'Do two people understand the same thing and know what evidence would demonstrate fulfillment?'),
      example: t('Ejemplo didáctico: "mostrar información útil rápidamente" deja pendientes el contenido, el usuario, el escenario y el criterio de respuesta. Se anotan esas preguntas; no se rellena el vacío con cifras inventadas.', 'Teaching example: "show useful information quickly" leaves the content, user, scenario, and response criterion unresolved. Record those questions; do not fill the gap with invented figures.'),
      analogy: t('Revisar que un encargo pueda comprenderse y comprobarse antes de darlo por acordado.', 'Checking that a request can be understood and checked before treating it as agreed.'),
      related: ['w2r_requirements', 'w2r_questions', 'w2r_performance', 'w2r_human_validation', 'w2r_ai_ambiguity', 'w2r_ai_conflicts'],
      notConfuse: t('Una redacción correcta no prueba que el requisito responda a la necesidad; una revisión de calidad no constituye aprobación.', 'Correct wording does not prove that a requirement addresses the need; a quality review does not constitute approval.'),
      sources: ['w2r_src_nasa_handbook', 'w2r_src_user_canon'],
      ai: {
        connection: t('La revisión se apoya en detectar duplicados, ambigüedades y conflictos, como acciones separadas.', 'Review is supported by detecting duplicates, ambiguity, and conflicts as separate actions.'),
        does: t('Presenta alertas con enunciados concretos y explica qué falta aclarar.', 'Presents alerts with specific statements and explains what needs clarification.'),
        changes: t('Ayuda a concentrar la revisión en problemas localizados, sin convertir un resultado automático en garantía de calidad.', 'Helps focus review on localized issues without turning an automated result into a quality guarantee.'),
        validate: t('Revisar alertas y posibles omisiones con usuarios y analista; no aceptar un texto solo porque la IA no encontró problemas.', 'Review alerts and possible omissions with users and the analyst; do not accept text merely because AI found no problems.')
      }
    },
    w2r_design: {
      id: 'w2r_design', label: t('DISEÑO DE IMPLEMENTACIÓN', 'IMPLEMENTATION DESIGN'), layer: 'deepening',
      what: t('Decisiones que representan cómo se implementará una solución para satisfacer los requisitos.', 'Decisions representing how a solution will be implemented to satisfy the requirements.'),
      why: t('Distinguirlo permite discutir la capacidad necesaria antes de comprometer una solución concreta.', 'Distinguishing it allows the needed capability to be discussed before committing to a specific solution.'),
      question: t('¿Estamos explicando qué necesita el usuario o cómo elegimos construirlo?', 'Are we explaining what the user needs or how we choose to build it?'),
      example: t('Contraste didáctico del usuario: permitir consultar disponibilidad de vehículos expresa la capacidad. Un botón azul hecho con React y datos en PostgreSQL propone cómo construir una solución; no acredita la necesidad ni una decisión técnica del caso.', 'User-supplied teaching contrast: allowing vehicle availability inquiries expresses the capability. A blue button built with React and data in PostgreSQL proposes how to build a solution; it does not establish the need or a case technology decision.'),
      analogy: t('Poder cruzar un río expresa una capacidad necesaria; escoger la estructura del puente es una decisión de solución.', 'Being able to cross a river expresses a needed capability; choosing the bridge structure is a solution decision.'),
      related: ['w2r_requirements', 'w2r_need', 'w2r_process', 'w2r_traceability'],
      notConfuse: t('REQUISITO ≠ DISEÑO. Una restricción técnica impuesta debe justificarse y documentarse; una preferencia de implementación no debe presentarse como necesidad del negocio.', 'REQUIREMENT ≠ DESIGN. An imposed technical constraint must be justified and documented; an implementation preference should not be presented as a business need.'),
      sources: ['w2r_src_user_canon', 'w2r_src_iiba_requirements'],
      ai: {
        connection: t('La IA puede advertir cuando un enunciado mezcla una capacidad con una tecnología o apariencia.', 'AI can flag when a statement mixes a capability with a technology or appearance.'),
        does: t('Propone separar la necesidad de la elección técnica y pregunta si existe una restricción documentada.', 'Proposes separating the need from the technical choice and asks whether a documented constraint exists.'),
        changes: t('Mantiene abierta la discusión de soluciones mientras se comprenden los requisitos.', 'Keeps the discussion of solutions open while requirements are being understood.'),
        validate: t('El analista confirma la distinción y cualquier restricción con su fuente; la IA no elimina restricciones reales ni impone tecnologías.', 'The analyst confirms the distinction and any constraint against its source; AI neither removes genuine constraints nor imposes technologies.')
      }
    },
    w2r_case_candidates: {
      id: 'w2r_case_candidates', label: t('AREV / EDEN BAY: CANDIDATOS POR VALIDAR', 'AREV / EDEN BAY: CANDIDATES TO VALIDATE'), layer: 'foundation',
      what: t('Posibles requisitos municipales señalados por el usuario para practicar las cinco categorías. Su condición es candidata, no aceptada.', 'Possible municipal requirements identified by the user to practice the five categories. Their status is candidate, not accepted.'),
      why: t('Permiten aplicar el modelo al contexto aportado sin afirmar más de lo que contiene el mensaje.', 'They allow the model to be applied to the supplied context without claiming more than the message contains.'),
      question: t('¿Qué candidato está respaldado por el mensaje y qué falta confirmar con evidencia del caso?', 'Which candidate is supported by the message, and what still needs confirmation with case evidence?'),
      example: t('Candidatos aportados: entrada, identificación del vehículo, información de mantenimiento o reparación y datos de costos; salida, informes de costos de mantenimiento, historial de reparaciones e información gerencial; proceso, registrar reparaciones, analizar costos y comparar mantenimientos; rendimiento, condiciones para la operación municipal práctica; seguridad, acceso por roles. Todos requieren validación.', 'Supplied candidates: input, vehicle identification, maintenance or repair information, and cost data; output, maintenance cost reports, repair history, and management information; process, recording repairs, analyzing costs, and comparing maintenance; performance, conditions for practical municipal operations; security, role-based access. All require validation.'),
      analogy: t('Una lista de asuntos para conversar con el taller y la gestión municipal, antes de convertirla en un acuerdo.', 'A list of topics to discuss with the workshop and municipal management before turning it into an agreement.'),
      related: ['w2r_input', 'w2r_output', 'w2r_process', 'w2r_performance', 'w2r_security', 'w2r_evidence', 'w2r_candidate_requirement'],
      notConfuse: t('El mensaje es evidencia de que estos candidatos fueron proporcionados. No equivale al documento original del caso, a entrevistas realizadas ni a requisitos validados; NASA e IIBA no describen este caso.', 'The message is evidence that these candidates were supplied. It is not the original case document, completed interviews, or validated requirements; NASA and IIBA do not describe this case.'),
      sources: ['w2r_src_user_case'],
      ai: {
        connection: t('La IA puede organizar los candidatos del tramo "AREV EdenBay potentialcasecandidates" bajo las cinco categorías.', 'AI can organize the candidates in the "AREV EdenBay potentialcasecandidates" span under the five categories.'),
        does: t('Conserva el respaldo del mensaje y prepara preguntas sobre datos, informes, operaciones, rendimiento y permisos.', 'Preserves the message support and prepares questions about data, reports, operations, performance, and permissions.'),
        changes: t('Prepara una agenda de análisis del caso con las incertidumbres a la vista.', 'Prepares a case analysis agenda with uncertainties visible.'),
        validate: t('Solicitar evidencia del caso y confirmación de usuarios y analista. No añadir costos monetarios, plazos, volúmenes, roles específicos o reglas no proporcionadas.', 'Request case evidence and confirmation from users and the analyst. Do not add monetary amounts, deadlines, volumes, specific roles, or unsupplied rules.')
      }
    },
    w2r_candidate_requirement: {
      id: 'w2r_candidate_requirement', label: t('REQUISITO CANDIDATO', 'CANDIDATE REQUIREMENT'), layer: 'deepening',
      what: t('Enunciado propuesto para revisión, todavía pendiente de confirmar su necesidad, alcance o condiciones.', 'A statement proposed for review, still awaiting confirmation of its need, scope, or conditions.'),
      why: t('Permite trabajar con propuestas sin confundir su elaboración con un compromiso aceptado.', 'It allows proposals to be developed without confusing their preparation with an accepted commitment.'),
      question: t('¿Qué parte está respaldada y qué preguntas impiden aceptarlo todavía?', 'Which part is supported, and which questions still prevent acceptance?'),
      example: t('Candidato: permitir consultar el historial de reparaciones. Respaldo del mensaje: w2r_src_user_case, tramo "repairhistory". Faltan confirmar usuarios, contenido y condiciones de consulta; el mensaje no registra su aprobación.', 'Candidate: allow repair history inquiries. Message support: w2r_src_user_case, span "repairhistory". Users, content, and inquiry conditions still need confirmation; the message records no approval.'),
      analogy: t('Un borrador sobre la mesa de discusión, con sus preguntas abiertas anotadas.', 'A draft on the discussion table with its open questions recorded.'),
      related: ['w2r_evidence', 'w2r_requirements', 'w2r_questions', 'w2r_human_validation', 'w2r_accepted_requirement'],
      notConfuse: t('GENERADO POR IA ≠ VALIDADO. Un candidato puede proceder de una persona o una herramienta; su origen no lo convierte en requisito aceptado.', 'AI-GENERATED ≠ VALIDATED. A candidate can come from a person or a tool; its origin does not make it an accepted requirement.'),
      sources: ['w2r_src_user_canon', 'w2r_src_user_case'],
      ai: {
        connection: t('Es la salida provisional de la etapa de IA y la entrada a la validación humana.', 'It is the provisional output of the AI stage and the input to human validation.'),
        does: t('Redacta un candidato con categoría propuesta, fuente, fragmento y dudas pendientes.', 'Drafts a candidate with a proposed category, source, span, and unresolved questions.'),
        changes: t('Hace revisable la propuesta y permite corregirla, rechazarla o investigar antes de aceptarla.', 'Makes the proposal reviewable so it can be corrected, rejected, or investigated before acceptance.'),
        validate: t('Mantener su estado candidato hasta una decisión humana explícita; una cita de respaldo tampoco equivale por sí sola a esa decisión.', 'Keep its candidate status until an explicit human decision; a supporting citation alone does not constitute that decision.')
      }
    },
    w2r_human_validation: {
      id: 'w2r_human_validation', label: t('VALIDACIÓN DEL USUARIO Y DEL ANALISTA', 'USER AND ANALYST VALIDATION'), layer: 'deepening',
      what: t('Revisión conjunta para confirmar que el requisito representa la necesidad y puede entenderse y comprobarse en su contexto.', 'Joint review to confirm that a requirement represents the need and can be understood and checked in its context.'),
      why: t('Permite resolver diferencias de interpretación antes de acordar el requisito.', 'It allows differences in interpretation to be resolved before the requirement is agreed.'),
      question: t('¿Las personas implicadas reconocen su necesidad y acuerdan qué significa cumplir este requisito?', 'Do the people involved recognize their need and agree on what fulfilling this requirement means?'),
      example: t('Ejercicio por realizar: revisar el candidato de historial de reparaciones con quienes lo usarían, confirmar contenido y permisos, y registrar la decisión con su evidencia. No se afirma que esa revisión ya ocurrió en AREV/Eden Bay.', 'Exercise to perform: review the repair history candidate with its intended users, confirm content and permissions, and record the decision with its evidence. This does not assert that the review has already occurred in AREV/Eden Bay.'),
      analogy: t('Leer el encargo con quien lo necesita y aclarar los puntos abiertos antes de acordarlo.', 'Reading a request with the person who needs it and clarifying open points before agreeing to it.'),
      related: ['w2r_candidate_requirement', 'w2r_need', 'w2r_evidence', 'w2r_quality', 'w2r_accepted_requirement'],
      notConfuse: t('La validación del requisito no es una corrección gramatical ni una prueba del sistema ya construido. La revisión automática no representa el acuerdo de usuarios y analista.', 'Requirement validation is neither proofreading nor testing the built system. Automated review does not represent agreement by users and the analyst.'),
      sources: ['w2r_src_user_canon', 'w2r_src_nasa_handbook'],
      ai: {
        connection: t('Recibe el candidato y sus evidencias después de la intervención de IA.', 'Receives the candidate and its evidence after AI assistance.'),
        does: t('Prepara material para revisar y resume decisiones expresamente aportadas, conservando su procedencia.', 'Prepares review material and summarizes explicitly supplied decisions while retaining their provenance.'),
        changes: t('Ayuda a documentar la conversación, mientras el juicio y el acuerdo siguen siendo humanos.', 'Helps document the conversation while judgment and agreement remain human.'),
        validate: t('Registrar quién participó, qué versión se revisó, qué se decidió y dónde está el respaldo. Si esos datos no fueron aportados, indicar validación pendiente.', 'Record who participated, which version was reviewed, what was decided, and where support can be found. If those details were not supplied, indicate validation pending.')
      }
    },
    w2r_accepted_requirement: {
      id: 'w2r_accepted_requirement', label: t('REQUISITO ACEPTADO', 'ACCEPTED REQUIREMENT'), layer: 'deepening',
      what: t('Requisito cuyo contenido y condiciones han sido validados y acordados por las personas con responsabilidad para aceptarlo.', 'A requirement whose content and conditions have been validated and agreed by the people responsible for accepting it.'),
      why: t('Proporciona una referencia compartida para el trabajo posterior.', 'It provides a shared reference for subsequent work.'),
      question: t('¿Qué decisión documentada permite afirmar que este requisito fue aceptado?', 'Which documented decision supports the claim that this requirement was accepted?'),
      example: t('Ejemplo condicional: el candidato de historial solo pasaría a aceptado después de confirmar necesidad y condiciones y registrar el acuerdo correspondiente. No se declara ningún requisito AREV/Eden Bay aceptado con la información disponible.', 'Conditional example: the history candidate would become accepted only after its need and conditions were confirmed and the corresponding agreement recorded. No AREV/Eden Bay requirement is declared accepted with the available information.'),
      analogy: t('La versión de un encargo que las personas responsables acuerdan utilizar.', 'The version of a request that the responsible people agree to use.'),
      related: ['w2r_candidate_requirement', 'w2r_human_validation', 'w2r_traceability', 'w2r_requirements'],
      notConfuse: t('ACEPTADO ≠ IMPLEMENTADO. El acuerdo sobre un requisito no demuestra que el sistema ya lo cumpla. Tampoco elimina la necesidad de evaluar cambios posteriores.', 'ACCEPTED ≠ IMPLEMENTED. Agreement on a requirement does not demonstrate that the system already fulfills it. It also does not remove the need to assess later changes.'),
      sources: ['w2r_src_user_canon', 'w2r_src_nasa_handbook'],
      ai: {
        connection: t('Cierra el flujo únicamente después de la validación humana y del acuerdo registrado.', 'Completes the flow only after human validation and recorded agreement.'),
        does: t('Puede preparar el registro del requisito y enlazarlo con la decisión realmente proporcionada.', 'Can prepare the requirement record and link it to the decision actually supplied.'),
        changes: t('Facilita recuperar el contenido acordado y su procedencia.', 'Makes the agreed content and its provenance easier to retrieve.'),
        validate: t('Comprobar evidencia de aceptación, versión y condiciones. La IA no se atribuye autoridad para aprobar ni completa decisiones ausentes.', 'Check acceptance evidence, version, and conditions. AI claims no authority to approve and does not fill in missing decisions.')
      }
    },
    w2r_ai: {
      id: 'w2r_ai', label: t('IA PARA DESCUBRIR Y MEJORAR REQUISITOS', 'AI TO DISCOVER AND IMPROVE REQUIREMENTS'), layer: 'ai',
      what: t('Apoyo al análisis de información proporcionada para extraer enunciados, revisar candidatos y preparar preguntas.', 'Support for analyzing supplied information to extract statements, review candidates, and prepare questions.'),
      why: t('Ayuda a organizar evidencia y enfocar la atención del usuario y del analista en decisiones pendientes.', 'It helps organize evidence and focus user and analyst attention on pending decisions.'),
      question: t('¿Cómo ayuda la IA a descubrir y mejorar requisitos sin inventar necesidades, datos ni decisiones?', 'How does AI help discover and improve requirements without inventing needs, data, or decisions?'),
      example: t('Ejercicio con el mensaje suministrado: extraer los candidatos AREV/Eden Bay con su tramo de origen, proponer categorías y formular dudas. Todo enunciado derivado conserva la condición de candidato hasta su validación.', 'Exercise using the supplied message: extract AREV/Eden Bay candidates with their source spans, propose categories, and formulate questions. Every derived statement retains candidate status until validated.'),
      analogy: t('Un asistente de lectura que ordena notas y señala dudas para que las personas decidan.', 'A reading assistant that organizes notes and highlights questions for people to decide.'),
      related: ['w2r_ai_extract', 'w2r_ai_classify', 'w2r_ai_duplicates', 'w2r_ai_ambiguity', 'w2r_ai_conflicts', 'w2r_ai_followup', 'w2r_human_validation'],
      notConfuse: t('La IA no es una fuente independiente sobre la organización ni una autoridad de aceptación. Generado por IA no significa validado.', 'AI is neither an independent source about the organization nor an acceptance authority. AI-generated does not mean validated.'),
      sources: ['w2r_src_user_canon'],
      ai: {
        connection: t('Seis interacciones: extraer de fuentes; clasificar, detectar duplicados, encontrar ambigüedades y comprobar conflictos sobre el mismo nodo de requisitos; generar preguntas de seguimiento.', 'Six interactions: extract from sources; classify, detect duplicates, find ambiguity, and check conflicts on the same requirements node; generate follow-up questions.'),
        does: t('Produce propuestas revisables con fuente y fragmento, o con una marca explícita de validación pendiente cuando falta respaldo.', 'Produces reviewable proposals with a source and span, or an explicit validation-pending label when support is missing.'),
        changes: t('El flujo conserva las etapas EVIDENCIA → IA → REQUISITO CANDIDATO → VALIDACIÓN DEL USUARIO Y DEL ANALISTA → REQUISITO ACEPTADO.', 'The flow preserves the stages EVIDENCE → AI → CANDIDATE REQUIREMENT → USER AND ANALYST VALIDATION → ACCEPTED REQUIREMENT.'),
        validate: t('Comprobar origen, significado, contexto y decisión humana. No inventar entrevistas, campos obligatorios, reglas, umbrales o aprobaciones.', 'Check origin, meaning, context, and human decision. Do not invent interviews, mandatory fields, rules, thresholds, or approvals.')
      }
    },
    w2r_ai_extract: {
      id: 'w2r_ai_extract', label: t('IA: EXTRAER', 'AI: EXTRACT'), layer: 'ai',
      what: t('Localizar y recuperar enunciados relevantes dentro de fuentes realmente proporcionadas.', 'Locate and retrieve relevant statements within sources actually supplied.'),
      why: t('Prepara material revisable y conserva la diferencia entre lo dicho y su interpretación.', 'It prepares reviewable material and preserves the distinction between what was said and its interpretation.'),
      question: t('¿Qué fragmento de qué fuente justifica la extracción?', 'Which span of which source justifies the extraction?'),
      example: t('Del mensaje del usuario, fuente w2r_src_user_case, extraer el tramo "process recordrepair,analyzecost,comparemaintenance" y proponer su lectura como candidatos de proceso, sin atribuirlo a una entrevista.', 'From the user message, source w2r_src_user_case, extract the span "process recordrepair,analyzecost,comparemaintenance" and propose reading it as process candidates without attributing it to an interview.'),
      analogy: t('Subrayar un pasaje conservando la página y el texto que lo rodea.', 'Highlighting a passage while retaining its page and surrounding text.'),
      related: ['w2r_ai', 'w2r_requirement_sources', 'w2r_evidence', 'w2r_candidate_requirement'],
      notConfuse: t('Extraer no significa completar un documento ni generar hechos que la fuente no contiene. Un resumen debe distinguirse del fragmento literal.', 'Extracting does not mean completing a document or generating facts the source does not contain. A summary must be distinguished from the verbatim span.'),
      sources: ['w2r_src_user_canon', 'w2r_src_user_case'],
      ai: {
        connection: t('IA → FUENTES DE REQUISITOS: EXTRAER.', 'AI → REQUIREMENT SOURCES: EXTRACT.'),
        does: t('Devuelve fuente, localizador, fragmento y una interpretación separada, marcada como candidata.', 'Returns the source, locator, span, and a separate interpretation marked as a candidate.'),
        changes: t('Reduce el trabajo de localizar pasajes para una revisión humana posterior.', 'Reduces the work of locating passages for later human review.'),
        validate: t('Comparar con el original y revisar posibles omisiones. Si la fuente falta, informar la ausencia y mantener validación pendiente.', 'Compare with the original and review possible omissions. If the source is missing, report its absence and keep validation pending.')
      }
    },
    w2r_ai_classify: {
      id: 'w2r_ai_classify', label: t('IA: CLASIFICAR', 'AI: CLASSIFY'), layer: 'ai',
      what: t('Proponer para un enunciado una de las cinco categorías del curso: entrada, salida, proceso, rendimiento o seguridad.', 'Propose one of the five course categories for a statement: input, output, process, performance, or security.'),
      why: t('Ayuda a distinguir datos recibidos, resultados, operaciones y condiciones sin perder el propósito del requisito.', 'It helps distinguish received data, results, operations, and conditions without losing the requirement purpose.'),
      question: t('¿Qué expresa principalmente este enunciado y qué fragmento permite clasificarlo así?', 'What does this statement primarily express, and which span supports that classification?'),
      example: t('Ejemplos del canon: recibir kilometraje propone entrada; entregar historial propone salida; calcular costos propone proceso. La categoría explica el enunciado, pero no confirma que el caso lo requiera.', 'Canon examples: receiving mileage suggests input; delivering a history suggests output; calculating costs suggests process. The category explains the statement but does not confirm that the case requires it.'),
      analogy: t('Ordenar notas en cinco carpetas identificadas, manteniendo la procedencia de cada nota.', 'Sorting notes into five labeled folders while retaining the origin of each note.'),
      related: ['w2r_ai', 'w2r_requirements', 'w2r_input', 'w2r_output', 'w2r_process', 'w2r_performance', 'w2r_security'],
      notConfuse: t('Clasificar no valida ni prioriza. Si un enunciado mezcla asuntos, proponer su separación para revisión; no inventar una sexta categoría ni cambiar su significado para hacerlo encajar.', 'Classification neither validates nor prioritizes. If a statement combines topics, propose separating it for review; do not invent a sixth category or change its meaning to make it fit.'),
      sources: ['w2r_src_user_canon'],
      ai: {
        connection: t('IA → REQUISITOS DEL SISTEMA: CLASIFICAR. El destino es el nodo canónico w2r_requirements.', 'AI → SYSTEM REQUIREMENTS: CLASSIFY. The target is the canonical node w2r_requirements.'),
        does: t('Propone categoría, justificación y fragmento de respaldo; señala enunciados que necesitan aclaración.', 'Proposes a category, rationale, and supporting span; flags statements needing clarification.'),
        changes: t('Facilita revisar la organización del conjunto con el vocabulario exacto del curso.', 'Helps review the organization of the set using the exact course vocabulary.'),
        validate: t('El analista confirma la categoría con el significado del enunciado. Si no hay evidencia suficiente, mantener la propuesta pendiente.', 'The analyst confirms the category against the statement meaning. If evidence is insufficient, keep the proposal pending.')
      }
    },
    w2r_ai_duplicates: {
      id: 'w2r_ai_duplicates', label: t('IA: DETECTAR DUPLICADOS', 'AI: DETECT DUPLICATES'), layer: 'ai',
      what: t('Señalar enunciados que podrían expresar la misma obligación para el mismo contexto.', 'Flag statements that could express the same obligation in the same context.'),
      why: t('Ayuda a discutir repeticiones y a conservar las diferencias que sí afectan a los usuarios.', 'It helps discuss repetitions while retaining differences that matter to users.'),
      question: t('¿Son dos formas de pedir lo mismo o cambian el usuario, los datos o las condiciones?', 'Are these two ways of requesting the same thing, or do the user, data, or conditions differ?'),
      example: t('Par ficticio para practicar: "consultar historial de reparaciones" y "ver reparaciones anteriores del vehículo". Podrían duplicarse, pero faltaría comprobar alcance y destinatarios; no son citas del caso.', 'Fictional practice pair: "consult repair history" and "view the vehicle previous repairs". They might be duplicates, but scope and recipients still need checking; these are not case quotations.'),
      analogy: t('Comparar dos notas parecidas antes de decidir si una puede sustituir a la otra.', 'Comparing two similar notes before deciding whether one can replace the other.'),
      related: ['w2r_ai', 'w2r_requirements', 'w2r_quality', 'w2r_traceability'],
      notConfuse: t('Parecido no significa duplicado. No borrar ni fusionar automáticamente; una diferencia de rol, período o contenido puede expresar otra necesidad.', 'Similarity does not mean duplication. Do not delete or merge automatically; a difference in role, period, or content may express another need.'),
      sources: ['w2r_src_user_canon'],
      ai: {
        connection: t('IA → REQUISITOS DEL SISTEMA: DETECTAR DUPLICADOS. Comparte el destino w2r_requirements con las otras revisiones.', 'AI → SYSTEM REQUIREMENTS: DETECT DUPLICATES. It shares the w2r_requirements target with the other reviews.'),
        does: t('Presenta pares candidatos a duplicado, ambos fragmentos y las diferencias que requieren revisión.', 'Presents potential duplicate pairs, both spans, and the differences requiring review.'),
        changes: t('Prepara decisiones de consolidación conservando el origen de cada petición.', 'Prepares consolidation decisions while retaining the origin of each request.'),
        validate: t('El analista y los usuarios confirman equivalencia. Una fusión acordada conserva ambas fuentes; sin confirmación, los enunciados permanecen separados.', 'The analyst and users confirm equivalence. An agreed merge retains both sources; without confirmation, the statements remain separate.')
      }
    },
    w2r_ai_ambiguity: {
      id: 'w2r_ai_ambiguity', label: t('IA: ENCONTRAR AMBIGÜEDADES', 'AI: FIND AMBIGUITY'), layer: 'ai',
      what: t('Localizar expresiones que admiten interpretaciones distintas o dejan condiciones sin precisar.', 'Locate expressions that allow different interpretations or leave conditions unspecified.'),
      why: t('Permite preguntar antes de convertir una interpretación accidental en una obligación del sistema.', 'It allows questions to be asked before an accidental interpretation becomes a system obligation.'),
      question: t('¿Qué palabra o condición pueden entender de forma diferente quienes usarán el sistema?', 'Which word or condition might the system users understand differently?'),
      example: t('Ejemplo didáctico: "mostrar el estado rápidamente" deja pendientes el significado de estado, el escenario y el tiempo de respuesta esperado. La revisión genera preguntas y no propone una cifra como si estuviera acordada.', 'Teaching example: "show status quickly" leaves the meaning of status, the scenario, and the expected response time unresolved. The review generates questions and does not propose a figure as if it had been agreed.'),
      analogy: t('Detectar palabras borrosas en un encargo y pedir que quien lo hizo las aclare.', 'Spotting unclear words in a request and asking its requester to clarify them.'),
      related: ['w2r_ai', 'w2r_requirements', 'w2r_quality', 'w2r_performance', 'w2r_questions'],
      notConfuse: t('Aclarar no significa sustituir una palabra vaga por una precisión inventada. Una frase fluida puede seguir siendo ambigua.', 'Clarifying does not mean replacing a vague word with invented precision. A fluent sentence can still be ambiguous.'),
      sources: ['w2r_src_user_canon'],
      ai: {
        connection: t('IA → REQUISITOS DEL SISTEMA: ENCONTRAR AMBIGÜEDADES. La observación permanece vinculada a w2r_requirements.', 'AI → SYSTEM REQUIREMENTS: FIND AMBIGUITY. The observation remains linked to w2r_requirements.'),
        does: t('Señala el fragmento ambiguo, explica la duda y prepara una pregunta neutral.', 'Flags the ambiguous span, explains the uncertainty, and prepares a neutral question.'),
        changes: t('Hace explícitas interpretaciones que podrían permanecer ocultas durante la lectura.', 'Makes explicit interpretations that might remain hidden during reading.'),
        validate: t('La persona conocedora del trabajo confirma el significado y las condiciones. Hasta recibir evidencia, conservar la duda como pendiente.', 'The person familiar with the work confirms the meaning and conditions. Until evidence is received, retain the question as pending.')
      }
    },
    w2r_ai_conflicts: {
      id: 'w2r_ai_conflicts', label: t('IA: COMPROBAR CONFLICTOS', 'AI: CHECK CONFLICTS'), layer: 'ai',
      what: t('Comparar enunciados para señalar obligaciones que podrían ser incompatibles bajo las mismas condiciones.', 'Compare statements to flag obligations that might be incompatible under the same conditions.'),
      why: t('Ayuda a llevar los desacuerdos concretos a las personas que pueden resolverlos.', 'It helps bring specific disagreements to the people who can resolve them.'),
      question: t('¿Pueden cumplirse ambos enunciados para el mismo rol, registro y situación?', 'Can both statements be fulfilled for the same role, record, and situation?'),
      example: t('Conflicto ficticio para practicar: "cualquier usuario puede editar reparaciones" frente a "solo usuarios autorizados pueden editarlas". Hay que revisar qué significa usuario y si comparten contexto; estas frases no son reglas confirmadas de AREV/Eden Bay.', 'Fictional conflict for practice: "any user may edit repairs" versus "only authorized users may edit them". The meaning of user and shared context must be reviewed; these statements are not confirmed AREV/Eden Bay rules.'),
      analogy: t('Encontrar dos instrucciones que podrían ordenar acciones incompatibles para la misma tarea.', 'Finding two instructions that might require incompatible actions for the same task.'),
      related: ['w2r_ai', 'w2r_requirements', 'w2r_security', 'w2r_quality', 'w2r_human_validation'],
      notConfuse: t('Un posible conflicto no es un error confirmado ni una decisión sobre cuál petición debe prevalecer. Diferencias de contexto pueden hacerlo desaparecer.', 'A possible conflict is neither a confirmed error nor a decision about which request should prevail. Context differences may resolve it.'),
      sources: ['w2r_src_user_canon'],
      ai: {
        connection: t('IA → REQUISITOS DEL SISTEMA: COMPROBAR CONFLICTOS. El destino sigue siendo w2r_requirements.', 'AI → SYSTEM REQUIREMENTS: CHECK CONFLICTS. The target remains w2r_requirements.'),
        does: t('Muestra ambos fragmentos, sus fuentes y las condiciones bajo las que parecerían incompatibles.', 'Shows both spans, their sources, and the conditions under which they would appear incompatible.'),
        changes: t('Prepara una conversación sobre decisiones incompatibles sin resolverlas unilateralmente.', 'Prepares a conversation about incompatible decisions without resolving them unilaterally.'),
        validate: t('Usuarios y analista confirman contexto y conflicto, acuerdan una resolución y documentan su respaldo. La IA no elige qué necesidad ignorar.', 'Users and the analyst confirm context and conflict, agree on a resolution, and document its support. AI does not choose which need to ignore.')
      }
    },
    w2r_ai_followup: {
      id: 'w2r_ai_followup', label: t('IA: GENERAR PREGUNTAS DE SEGUIMIENTO', 'AI: GENERATE FOLLOW-UP QUESTIONS'), layer: 'ai',
      what: t('Preparar preguntas para resolver vacíos de evidencia y dudas surgidas al analizar los candidatos.', 'Prepare questions to resolve evidence gaps and uncertainties arising from candidate analysis.'),
      why: t('Ayuda a convertir la revisión de textos en una conversación útil con usuarios y analista.', 'It helps turn text review into a useful conversation with users and the analyst.'),
      question: t('¿Qué pregunta permitirá confirmar o corregir el candidato sin sugerir una respuesta inventada?', 'Which question will help confirm or correct the candidate without suggesting an invented answer?'),
      example: t('A partir de "managementinfo" en w2r_src_user_case: ¿qué decisión de gestión debe apoyar esa información y qué contenido se necesita? La respuesta no está en el fragmento y debe obtenerse.', 'Based on "managementinfo" in w2r_src_user_case: which management decision should this information support, and what content is needed? The answer is not in the span and must be obtained.'),
      analogy: t('Preparar una agenda de preguntas con el motivo de cada una, antes de una conversación.', 'Preparing an agenda of questions and the reason for each before a conversation.'),
      related: ['w2r_ai', 'w2r_questions', 'w2r_requirement_sources', 'w2r_candidate_requirement', 'w2r_human_validation'],
      notConfuse: t('Generar preguntas no equivale a entrevistar ni a obtener respuestas. Una pregunta debe aclarar la necesidad, no imponer una solución o una cifra.', 'Generating questions is not conducting an interview or obtaining answers. A question should clarify the need, not impose a solution or figure.'),
      sources: ['w2r_src_user_canon', 'w2r_src_user_case'],
      ai: {
        connection: t('IA → PREGUNTAS DE SEGUIMIENTO: GENERAR PREGUNTAS.', 'AI → FOLLOW-UP QUESTIONS: GENERATE QUESTIONS.'),
        does: t('Vincula cada pregunta con el fragmento, la interpretación o el dato faltante que debe aclararse.', 'Links each question to the span, interpretation, or missing data item that needs clarification.'),
        changes: t('Deja una lista de asuntos abiertos que puede guiar la siguiente conversación.', 'Leaves a list of open issues that can guide the next conversation.'),
        validate: t('Revisar que la pregunta sea pertinente y neutral, y obtener la respuesta de la persona apropiada. Registrar la evidencia antes de cambiar el estado del candidato.', 'Check that the question is relevant and neutral, and obtain the answer from the appropriate person. Record the evidence before changing candidate status.')
      }
    }
  });

  db.diagrams['05'] = {
    id: '05',
    title: t('¿Qué necesita el sistema?', 'What does the system need?'),
    transition: t('Ya organizamos el proyecto. Ahora debemos comprender qué necesita realmente el nuevo sistema.', 'We have organized the project. Now we must understand what the new system really needs.'),
    subtitle: t('Modelado de requisitos', 'Requirements modeling'),
    definition: t('Los requisitos describen capacidades, condiciones y resultados que el nuevo sistema necesita para satisfacer las necesidades de la organización y de sus usuarios.', 'Requirements describe the capabilities, conditions, and results the new system needs to meet the needs of the organization and its users.'),
    root: 'w2r_requirements',
    groups: [
      {
        label: t('Cinco tipos de requisitos', 'Five types of requirements'),
        nodes: ['w2r_input', 'w2r_output', 'w2r_process', 'w2r_performance', 'w2r_security']
      },
      {
        label: t('Descubrir la necesidad', 'Discover the need'),
        nodes: ['w2r_need', 'w2r_requirement_sources', 'w2r_questions']
      },
      {
        label: t('Profundización: evidencia y trazabilidad', 'Further study: evidence and traceability'),
        nodes: ['w2r_evidence', 'w2r_traceability', 'w2r_quality']
      },
      {
        label: t('De candidato a requisito aceptado', 'From candidate to accepted requirement'),
        nodes: ['w2r_candidate_requirement', 'w2r_human_validation', 'w2r_accepted_requirement']
      },
      {
        label: t('Aplicación al caso: validación pendiente', 'Case application: validation pending'),
        nodes: ['w2r_case_candidates']
      }
    ],
    aiTitle: t('IA para descubrir y mejorar requisitos', 'AI to discover and improve requirements'),
    aiMessage: t('¿Cómo ayuda la IA a descubrir y mejorar requisitos sin inventar? Extrae evidencia, clasifica, detecta duplicados, encuentra ambigüedades, comprueba conflictos y genera preguntas. EVIDENCIA → IA → REQUISITO CANDIDATO → VALIDACIÓN DEL USUARIO Y DEL ANALISTA → REQUISITO ACEPTADO. Toda afirmación sobre datos existentes requiere fuente y fragmento o la marca de validación pendiente. GENERADO POR IA ≠ VALIDADO.', 'How does AI help discover and improve requirements without inventing them? It extracts evidence, classifies, detects duplicates, finds ambiguity, checks conflicts, and generates questions. EVIDENCE → AI → CANDIDATE REQUIREMENT → USER AND ANALYST VALIDATION → ACCEPTED REQUIREMENT. Every claim about existing data requires a source and span or a validation-pending label. AI-GENERATED ≠ VALIDATED.'),
    aiRelationships: [
      {
        id: 'w2r_rel_extract', from: 'w2r_ai', to: 'w2r_requirement_sources',
        action: t('EXTRAER', 'EXTRACT'), concept: 'w2r_ai_extract',
        value: t('Enunciados recuperables con fuente y fragmento literal; material ausente queda pendiente.', 'Retrievable statements with a source and verbatim span; missing material remains pending.')
      },
      {
        id: 'w2r_rel_classify', from: 'w2r_ai', to: 'w2r_requirements',
        action: t('CLASIFICAR', 'CLASSIFY'), concept: 'w2r_ai_classify',
        value: t('Propuesta de entrada, salida, proceso, rendimiento o seguridad, con justificación revisable.', 'A proposal of input, output, process, performance, or security with a reviewable rationale.')
      },
      {
        id: 'w2r_rel_duplicates', from: 'w2r_ai', to: 'w2r_requirements',
        action: t('DETECTAR DUPLICADOS', 'DETECT DUPLICATES'), concept: 'w2r_ai_duplicates',
        value: t('Pares posiblemente equivalentes con ambos fragmentos; la consolidación requiere confirmación humana.', 'Possibly equivalent pairs with both spans; consolidation requires human confirmation.')
      },
      {
        id: 'w2r_rel_ambiguity', from: 'w2r_ai', to: 'w2r_requirements',
        action: t('ENCONTRAR AMBIGÜEDADES', 'FIND AMBIGUITY'), concept: 'w2r_ai_ambiguity',
        value: t('Términos y condiciones por aclarar, sin completar reglas o umbrales con invenciones.', 'Terms and conditions needing clarification, without filling in rules or thresholds with inventions.')
      },
      {
        id: 'w2r_rel_conflicts', from: 'w2r_ai', to: 'w2r_requirements',
        action: t('COMPROBAR CONFLICTOS', 'CHECK CONFLICTS'), concept: 'w2r_ai_conflicts',
        value: t('Posibles incompatibilidades con evidencia de ambos lados y contexto por confirmar.', 'Possible incompatibilities with evidence from both sides and context to confirm.')
      },
      {
        id: 'w2r_rel_followup', from: 'w2r_ai', to: 'w2r_questions',
        action: t('GENERAR PREGUNTAS DE SEGUIMIENTO', 'GENERATE FOLLOW-UP QUESTIONS'), concept: 'w2r_ai_followup',
        value: t('Preguntas ligadas a vacíos o fragmentos concretos; las respuestas proceden de personas y fuentes reales.', 'Questions linked to specific gaps or spans; answers come from actual people and sources.')
      }
    ],
    aiFlow: ['w2r_evidence', 'w2r_ai', 'w2r_candidate_requirement', 'w2r_human_validation', 'w2r_accepted_requirement'],
    distinction: ['w2r_requirements', 'w2r_design']
  };
})();
