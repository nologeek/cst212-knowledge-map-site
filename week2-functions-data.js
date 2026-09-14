(function () {
  const t = (es, en) => ({ es, en });
  window.CST212_W2 = window.CST212_W2 || { diagrams: {}, concepts: {}, sources: {} };
  const db = window.CST212_W2;

  Object.assign(db.sources, {
    w2u_src_nasa_decomposition: {
      author: 'National Aeronautics and Space Administration', year: '2023',
      title: '4.3 Logical Decomposition',
      url: 'https://www.nasa.gov/reference/4-3-logical-decomposition/'
    },
    w2u_src_nasa_requirements: {
      author: 'National Aeronautics and Space Administration', year: '2023',
      title: '4.2 Technical Requirements Definition',
      url: 'https://www.nasa.gov/reference/4-2-technical-requirements-definition/'
    },
    w2u_src_nasa_traceability: {
      author: 'National Aeronautics and Space Administration', year: '2023',
      title: '6.2 Requirements Management',
      url: 'https://www.nasa.gov/reference/6-2-requirements-management/'
    },
    w2u_src_nasa_wbs: {
      author: 'Sadler, C. L.', year: '2021',
      title: 'NASA Work Breakdown Structure (WBS) Handbook (NASA/SP-20210023927)',
      url: 'https://ntrs.nasa.gov/citations/20210023927'
    },
    w2u_src_sebok_logical: {
      author: 'Faisandier, A., Roedler, G., & Adcock, R.', year: 's.f.',
      title: 'Logical Architecture',
      url: 'https://sebokwiki.org/wiki/Logical_Architecture'
    },
    w2u_src_nist_genai: {
      author: 'Autio, C., Schwartz, R., Dunietz, J., Jain, S., Stanley, M., Tabassi, E., Hall, P., & Roberts, K.', year: '2024',
      title: 'Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)',
      url: 'https://doi.org/10.6028/NIST.AI.600-1'
    }
  });

  Object.assign(db.concepts, {
    w2u_fdd: {
      id: 'w2u_fdd', label: t('FDD: descomposición funcional', 'FDD: functional decomposition'), layer: 'foundation',
      what: t('Un FDD organiza una función amplia en funciones progresivamente más pequeñas para comprender qué debe hacer el sistema sin entrar todavía en el diseño físico de la solución.', 'An FDD organizes a broad function into progressively smaller functions to understand what the system must do without yet entering the physical design of the solution.'),
      why: t('Permite leer las capacidades del sistema como partes de un propósito común.', 'Makes system capabilities readable as parts of a shared purpose.'),
      question: t('¿QUÉ FUNCIONES DEBE REALIZAR EL SISTEMA?', 'WHAT FUNCTIONS MUST THE SYSTEM PERFORM?'),
      example: t('Ejemplo ilustrativo: AREV se divide en gestionar vehículos, mantenimiento, reparaciones y analizar información. Es una propuesta por validar.', 'Illustrative example: AREV divides into managing vehicles, maintenance, repairs, and analyzing information. This is a proposal to validate.'),
      analogy: t('El índice jerárquico de un libro muestra sus partes, no el orden en que alguien las leerá.', 'A book’s hierarchical contents show its parts, not the order in which someone will read them.'),
      related: ['w2u_function', 'w2u_decomposition', 'w2u_hierarchy', 'w2u_wbs', 'w2u_processflow', 'w2u_dfd', 'w2u_physical'],
      notConfuse: t('FDD describe jerarquía funcional; WBS, trabajo del proyecto; flujo de proceso, secuencia; DFD, movimiento de datos. Tampoco representa arquitectura física.', 'FDD describes functional hierarchy; WBS, project work; process flow, sequence; DFD, data movement. It does not represent physical architecture either.'),
      sources: ['w2u_src_nasa_decomposition', 'w2u_src_sebok_logical'],
      ai: {
        connection: t('El apoyo de IA se conecta a funciones, jerarquía y sustento del modelo.', 'AI support connects to functions, hierarchy, and the model’s rationale.'),
        does: t('Propone una organización revisable de las capacidades solicitadas.', 'Proposes a reviewable organization of requested capabilities.'),
        changes: t('Facilita discutir una primera estructura.', 'Makes an initial structure easier to discuss.'),
        validate: t('Analista y usuarios justifican nodos y límites con requisitos y evidencia.', 'The analyst and users justify nodes and boundaries with requirements and evidence.')
      }
    },
    w2u_function: {
      id: 'w2u_function', label: t('Función', 'Function'), layer: 'foundation',
      what: t('Una capacidad o trabajo que el sistema debe realizar para cumplir un propósito.', 'A capability or work the system must perform to fulfill a purpose.'),
      why: t('Expresa una responsabilidad del sistema antes de elegir herramientas.', 'Expresses a system responsibility before tools are chosen.'),
      question: t('¿Qué debe hacer el sistema?', 'What must the system do?'),
      example: t('Ejemplo ilustrativo: «Gestionar mantenimiento de vehículos» expresa una función; «Use React» y «Use PostgreSQL» son elecciones de implementación.', 'Illustrative example: “Manage vehicle maintenance” expresses a function; “Use React” and “Use PostgreSQL” are implementation choices.'),
      analogy: t('Afinar un instrumento es una capacidad; la marca del afinador es una elección de herramienta.', 'Tuning an instrument is a capability; the tuner’s brand is a tool choice.'),
      related: ['w2u_fdd', 'w2u_requirements', 'w2u_subfunctions', 'w2u_physical', 'w2u_maintenance_history'],
      notConfuse: t('FUNCIÓN ≠ TECNOLOGÍA. Tampoco equivale a una tarea del equipo como programar una pantalla.', 'FUNCTION ≠ TECHNOLOGY. It is also distinct from a team task such as programming a screen.'),
      sources: ['w2u_src_nasa_decomposition'],
      ai: {
        connection: t('IA → funciones: proponer candidatos.', 'AI → functions: propose candidates.'),
        does: t('Sugiere nombres con verbo y objeto a partir de requisitos relacionados.', 'Suggests verb-and-object names from related requirements.'),
        changes: t('Agrupa en capacidades una lista de enunciados.', 'Organizes a list of statements into capabilities.'),
        validate: t('Comprobar que cada capacidad fue solicitada o tiene una derivación justificada.', 'Check that each capability was requested or has a justified derivation.')
      }
    },
    w2u_decomposition: {
      id: 'w2u_decomposition', label: t('Descomposición funcional', 'Functional decomposition'), layer: 'foundation',
      what: t('Dividir una función general en funciones más pequeñas hasta obtener una estructura que pueda comprenderse y analizarse con claridad.', 'Divide a general function into smaller functions until the structure can be clearly understood and analyzed.'),
      why: t('Hace manejable el análisis sin perder el propósito de la función superior.', 'Makes analysis manageable without losing the parent function’s purpose.'),
      question: t('¿Qué capacidades menores permiten realizar esta función?', 'Which smaller capabilities enable this function?'),
      example: t('Ejemplo ilustrativo: gestionar mantenimiento podría descomponerse en registrar mantenimiento, consultar historial y actualizar estado.', 'Illustrative example: managing maintenance could decompose into recording maintenance, consulting history, and updating status.'),
      analogy: t('Un árbol: el tronco representa una función amplia; las ramas muestran funciones cada vez más específicas.', 'A tree: the trunk represents a broad function; the branches show increasingly specific functions.'),
      related: ['w2u_fdd', 'w2u_hierarchy', 'w2u_subfunctions', 'w2u_coverage'],
      notConfuse: t('Descomponer no obliga a crear siempre registrar, consultar y actualizar. Los requisitos determinan qué divisiones tienen sentido.', 'Decomposition does not require always creating record, consult, and update functions. Requirements determine which divisions make sense.'),
      sources: ['w2u_src_nasa_decomposition'],
      ai: {
        connection: t('La relación con jerarquía propone subfunciones.', 'The hierarchy relationship proposes subfunctions.'),
        does: t('Ensaya divisiones y explica cómo cada hija contribuye a la madre.', 'Tries divisions and explains how each child contributes to its parent.'),
        changes: t('Permite comparar alternativas de organización.', 'Allows alternative organizations to be compared.'),
        validate: t('Revisar necesidad, alcance y nivel de detalle con analista y usuarios.', 'Review necessity, scope, and detail level with the analyst and users.')
      }
    },
    w2u_requirements: {
      id: 'w2u_requirements', label: t('Requisitos', 'Requirements'), layer: 'foundation',
      what: t('Enunciados de capacidades o condiciones que el sistema debe satisfacer y que orientan el modelo funcional.', 'Statements of capabilities or conditions the system must satisfy that guide the functional model.'),
      why: t('Permiten preguntar qué justifica cada función y cómo reconocer un resultado adecuado.', 'Allow each function’s rationale and an adequate result to be identified.'),
      question: t('¿Qué obligación concreta del sistema representa este enunciado?', 'What specific system obligation does this statement represent?'),
      example: t('Requisito ilustrativo candidato: «El sistema debe permitir que usuarios autorizados consulten el historial de mantenimiento de vehículos». No consta aquí como aprobado.', 'Illustrative candidate requirement: “The system must allow authorized users to consult vehicle maintenance history.” It is not established here as approved.'),
      analogy: t('Un encargo precisa el resultado esperado; la función nombra la capacidad que lo realiza.', 'A commission specifies the expected result; a function names the capability delivering it.'),
      related: ['w2u_facts', 'w2u_function', 'w2u_coverage', 'w2u_traceability'],
      notConfuse: t('Un requisito funcional puede originar funciones; seguridad o rendimiento también pueden restringir varias funciones sin crear una rama propia.', 'A functional requirement can yield functions; security or performance may constrain several functions without creating a separate branch.'),
      sources: ['w2u_src_nasa_requirements'],
      ai: {
        connection: t('IA → requisitos: agrupar.', 'AI → requirements: group.'),
        does: t('Reúne enunciados afines conservando identificadores y condiciones.', 'Groups related statements while retaining identifiers and conditions.'),
        changes: t('Hace visibles capacidades compartidas.', 'Makes shared capabilities visible.'),
        validate: t('Confirmar que la agrupación no pierde permisos, excepciones ni restricciones.', 'Confirm that grouping preserves permissions, exceptions, and constraints.')
      }
    },
    w2u_subfunctions: {
      id: 'w2u_subfunctions', label: t('Subfunciones', 'Subfunctions'), layer: 'foundation',
      what: t('Funciones más específicas que contribuyen al propósito de una función superior.', 'More specific functions contributing to a parent function’s purpose.'),
      why: t('Permiten analizar responsabilidades pequeñas sin aislarlas del conjunto.', 'Allow smaller responsibilities to be analyzed without isolating them from the whole.'),
      question: t('¿Qué parte de la función superior realiza esta subfunción?', 'Which part of the parent function does this subfunction perform?'),
      example: t('Ejemplo ilustrativo: asociar costos sería una subfunción de gestionar reparaciones si los requisitos justifican ese vínculo.', 'Illustrative example: associating costs would be a subfunction of managing repairs if requirements justify that link.'),
      analogy: t('Una rama conserva su conexión con el tronco aunque tenga un nombre propio.', 'A branch keeps its connection to the trunk even when it has its own name.'),
      related: ['w2u_function', 'w2u_decomposition', 'w2u_hierarchy', 'w2u_repair_costs'],
      notConfuse: t('Ser hoja del árbol no significa ser una función indivisible, una pantalla o una tabla.', 'Being a tree leaf does not mean being an indivisible function, a screen, or a table.'),
      sources: ['w2u_src_nasa_decomposition'],
      ai: {
        connection: t('La propuesta de jerarquía alcanza las ramas y sus hojas.', 'Hierarchy proposals reach branches and leaves.'),
        does: t('Sugiere responsabilidades menores y posibles límites entre ellas.', 'Suggests smaller responsibilities and possible boundaries between them.'),
        changes: t('Facilita discutir qué detalle es suficiente para el análisis.', 'Helps discuss how much detail is sufficient for analysis.'),
        validate: t('Comprobar contribución a la madre, evidencia y ausencia de divisiones arbitrarias.', 'Check contribution to the parent, evidence, and absence of arbitrary divisions.')
      }
    },
    w2u_hierarchy: {
      id: 'w2u_hierarchy', label: t('Jerarquía de funciones', 'Function hierarchy'), layer: 'foundation',
      what: t('Relaciones de inclusión entre función global, funciones principales y subfunciones.', 'Inclusion relationships between an overall function, major functions, and subfunctions.'),
      why: t('Conserva el contexto cuando se pasa de una vista general a una detallada.', 'Preserves context when moving from an overview to detail.'),
      question: t('¿A qué función superior pertenece este nodo?', 'Which parent function does this node belong to?'),
      example: t('Ejemplo ilustrativo: nivel 0 AREV; nivel 1 gestionar vehículos; nivel 2 registrar vehículo.', 'Illustrative example: level 0 AREV; level 1 manage vehicles; level 2 register a vehicle.'),
      analogy: t('Un zoom cambia el detalle observado, no convierte las partes en pasos cronológicos.', 'Zooming changes the detail observed without turning parts into chronological steps.'),
      related: ['w2u_fdd', 'w2u_decomposition', 'w2u_subfunctions', 'w2u_arev'],
      notConfuse: t('Los niveles 0, 1 y 2 de este árbol no son niveles de DFD. Una línea madre-hija significa descomposición, no flujo de datos.', 'Levels 0, 1, and 2 of this tree are not DFD levels. A parent-child line means decomposition, not data flow.'),
      sources: ['w2u_src_nasa_decomposition', 'w2u_src_sebok_logical'],
      ai: {
        connection: t('IA → jerarquía: descomponer.', 'AI → hierarchy: decompose.'),
        does: t('Propone relaciones madre-hija manteniendo juntas capacidades con propósito común.', 'Proposes parent-child relationships keeping capabilities with a common purpose together.'),
        changes: t('Convierte una lista en una estructura navegable.', 'Turns a list into a navigable structure.'),
        validate: t('Analista y usuarios revisan pertenencia, equilibrio de detalle y sustento de cada nodo.', 'The analyst and users review membership, detail balance, and the rationale for each node.')
      }
    },
    w2u_source: {
      id: 'w2u_source', label: t('Fuente de evidencia del caso', 'Case evidence source'), layer: 'deepening',
      what: t('Registro identificable de entrevista, observación o documento del que procede una afirmación sobre el sistema.', 'An identifiable interview, observation, or document record from which a claim about the system originates.'),
      why: t('Permite revisar contexto y procedencia antes de aceptar una afirmación.', 'Allows context and provenance to be reviewed before a claim is accepted.'),
      question: t('¿Qué registro original, autor y fecha sostienen esta afirmación?', 'Which original record, author, and date support this claim?'),
      example: t('Ejemplo ilustrativo: una futura entrevista documentada podría respaldar la necesidad de historial; no se ha aportado esa entrevista aquí.', 'Illustrative example: a future documented interview could support the need for history; no such interview has been supplied here.'),
      analogy: t('La etiqueta de procedencia permite volver al origen de una muestra.', 'A provenance label allows a sample to be traced back to its origin.'),
      related: ['w2u_facts', 'w2u_requirements', 'w2u_traceability'],
      notConfuse: t('NASA y SEBoK sustentan el método, no hechos de Eden Bay/AREV. El pedido ofrece un modelo candidato, no evidencia operativa.', 'NASA and SEBoK support the method, not Eden Bay/AREV facts. The request supplies a candidate model, not operational evidence.'),
      sources: ['w2u_src_nasa_traceability'],
      ai: {
        connection: t('Es el inicio de la cadena fuente → hecho → requisito → función.', 'It starts the source → fact → requirement → function chain.'),
        does: t('Conserva referencias proporcionadas y señala fuentes faltantes.', 'Retains supplied references and flags missing sources.'),
        changes: t('Facilita recuperar el respaldo de una propuesta.', 'Makes a proposal’s support easier to retrieve.'),
        validate: t('Abrir el original y confirmar autenticidad, contexto y permisos de uso.', 'Open the original and confirm authenticity, context, and use permissions.')
      }
    },
    w2u_facts: {
      id: 'w2u_facts', label: t('Hechos y evidencia', 'Facts and evidence'), layer: 'foundation',
      what: t('Afirmaciones sobre la situación estudiada que requieren respaldo identificable y contexto.', 'Claims about the situation under study requiring identifiable support and context.'),
      why: t('Distingue lo observado o documentado de lo supuesto por quien modela.', 'Distinguishes what is observed or documented from the modeler’s assumptions.'),
      question: t('¿Qué sabemos, cómo lo sabemos y qué falta confirmar?', 'What do we know, how do we know it, and what needs confirmation?'),
      example: t('Afirmación ilustrativa por validar: «Los usuarios necesitan el historial de mantenimiento de vehículos». No se presenta como hecho verificado de AREV.', 'Illustrative claim to validate: “Users need vehicle maintenance history.” It is not presented as a verified AREV fact.'),
      analogy: t('Una observación anotada con contexto aporta respaldo; una conjetura indica dónde investigar.', 'An observation recorded with context provides support; a conjecture indicates where to investigate.'),
      related: ['w2u_source', 'w2u_requirements', 'w2u_traceability'],
      notConfuse: t('Una necesidad declarada es evidencia de lo expresado por alguien; no prueba por sí sola una solución o un requisito aprobado.', 'A stated need is evidence of what someone expressed; it does not by itself prove a solution or an approved requirement.'),
      sources: ['w2u_src_nasa_requirements', 'w2u_src_nasa_traceability'],
      ai: {
        connection: t('IA → hechos: sintetizar.', 'AI → facts: synthesize.'),
        does: t('Resume registros sin borrar contradicciones ni vacíos.', 'Summarizes records without removing contradictions or gaps.'),
        changes: t('Prepara una base de lectura para el análisis.', 'Prepares a reading foundation for analysis.'),
        validate: t('Cotejar cada afirmación con su fuente y mantener como supuestos los datos no confirmados.', 'Check each claim against its source and keep unconfirmed information as assumptions.')
      }
    },
    w2u_traceability: {
      id: 'w2u_traceability', label: t('Trazabilidad', 'Traceability'), layer: 'deepening',
      what: t('Vínculos revisables que permiten rastrear una función hasta su requisito y el origen que lo justifica.', 'Reviewable links allowing a function to be traced to its requirement and the origin justifying it.'),
      why: t('UNA FUNCIÓN DEBE PODER RASTREARSE HASTA UNA NECESIDAD, HECHO O REQUISITO.', 'A FUNCTION SHOULD BE TRACEABLE TO A NEED, FACT, OR REQUIREMENT.'),
      question: t('¿Por qué existe esta función y qué cambia si cambia su requisito?', 'Why does this function exist, and what changes if its requirement changes?'),
      example: t('Ejemplo candidato: necesidad de historial → requisito de consulta autorizada → consultar historial de mantenimiento. Falta la evidencia que confirme el primer vínculo.', 'Candidate example: need for history → authorized consultation requirement → consult maintenance history. Evidence confirming the first link is missing.'),
      analogy: t('Un hilo une la conclusión con las razones que permiten revisarla.', 'A thread connects a conclusion to the reasons that allow it to be reviewed.'),
      related: ['w2u_source', 'w2u_facts', 'w2u_requirements', 'w2u_function', 'w2u_maintenance_history'],
      notConfuse: t('Dibujar una flecha no demuestra el vínculo. La trazabilidad puede ser de varios requisitos a varias funciones.', 'Drawing an arrow does not prove the link. Traceability may connect several requirements to several functions.'),
      sources: ['w2u_src_nasa_traceability'],
      ai: {
        connection: t('IA → trazabilidad: vincular.', 'AI → traceability: link.'),
        does: t('Sugiere asociaciones con referencias y razones explícitas.', 'Suggests associations with explicit references and reasons.'),
        changes: t('Ayuda a localizar funciones sin sustento o requisitos sin representación.', 'Helps locate unsupported functions or unrepresented requirements.'),
        validate: t('Revisar sentido, versión y suficiencia del vínculo en ambas direcciones.', 'Review the meaning, version, and sufficiency of each link in both directions.')
      }
    },
    w2u_duplicates: {
      id: 'w2u_duplicates', label: t('Posibles duplicidades', 'Possible duplicates'), layer: 'deepening',
      what: t('Funciones que podrían expresar la misma capacidad pese a usar nombres iguales o diferentes.', 'Functions that may express the same capability despite using identical or different names.'),
      why: t('Evita repetir responsabilidades o fusionar capacidades que solo parecen semejantes.', 'Avoids repeating responsibilities or merging capabilities that merely seem similar.'),
      question: t('¿Coinciden propósito, datos, usuarios y resultado?', 'Do purpose, data, users, and result match?'),
      example: t('Ejemplo ilustrativo: los dos «consultar historial» del árbol pueden solaparse; uno está bajo mantenimiento y otro bajo análisis. Su alcance debe aclararse.', 'Illustrative example: the tree’s two “consult history” nodes may overlap; one sits under maintenance and the other under analysis. Their scope needs clarification.'),
      analogy: t('Dos etiquetas parecidas pueden nombrar el mismo cajón o cajones distintos.', 'Two similar labels may name the same drawer or different drawers.'),
      related: ['w2u_function', 'w2u_maintenance_history', 'w2u_analysis_history', 'w2u_requirements'],
      notConfuse: t('Similitud de palabras no prueba duplicidad; ninguna rama se elimina automáticamente.', 'Similar wording does not prove duplication; no branch is removed automatically.'),
      sources: ['w2u_src_nasa_requirements'],
      ai: {
        connection: t('IA → duplicidades: detectar.', 'AI → duplicates: detect.'),
        does: t('Marca pares de funciones con significado posiblemente común.', 'Flags function pairs with potentially shared meaning.'),
        changes: t('Concentra la revisión en límites ambiguos.', 'Focuses review on ambiguous boundaries.'),
        validate: t('El analista compara contexto con usuarios antes de mantener, renombrar o fusionar.', 'The analyst compares context with users before retaining, renaming, or merging.')
      }
    },
    w2u_coverage: {
      id: 'w2u_coverage', label: t('Cobertura de requisitos', 'Requirements coverage'), layer: 'deepening',
      what: t('Revisión de qué requisitos están representados por funciones y cuáles aún necesitan explicación o asignación.', 'A review of which requirements are represented by functions and which still need explanation or allocation.'),
      why: t('Permite detectar omisiones sin inventar funciones para llenar el árbol.', 'Allows omissions to be detected without inventing functions to fill the tree.'),
      question: t('¿Qué requisito queda sin mapear y qué significa esa ausencia?', 'Which requirement remains unmapped, and what does that absence mean?'),
      example: t('Ejemplo ilustrativo: un requisito candidato de usuarios autorizados puede restringir varias consultas, aunque no exista una rama llamada autorización.', 'Illustrative example: a candidate requirement for authorized users may constrain several queries even without a branch called authorization.'),
      analogy: t('Revisar una lista de encargos contra lo representado revela asuntos pendientes de explicar.', 'Checking a list of requests against what is represented reveals matters still needing explanation.'),
      related: ['w2u_requirements', 'w2u_function', 'w2u_traceability', 'w2u_hierarchy'],
      notConfuse: t('Requisito sin mapear no equivale automáticamente a error confirmado. Un enlace tampoco demuestra cumplimiento.', 'An unmapped requirement is not automatically a confirmed error. A link does not demonstrate fulfillment either.'),
      sources: ['w2u_src_nasa_traceability', 'w2u_src_nasa_requirements'],
      ai: {
        connection: t('IA → cobertura: comprobar.', 'AI → coverage: check.'),
        does: t('Compara requisitos disponibles con funciones y restricciones declaradas.', 'Compares available requirements with functions and stated constraints.'),
        changes: t('Produce preguntas de cobertura para revisión.', 'Produces coverage questions for review.'),
        validate: t('Confirmar versiones, tipo de requisito y suficiencia del mapeo; no atribuir cobertura total al caso sin su documentación.', 'Confirm versions, requirement type, and mapping sufficiency; do not claim full case coverage without its documentation.')
      }
    },
    w2u_wbs: {
      id: 'w2u_wbs', label: t('WBS / EDT: trabajo del proyecto', 'WBS: project work'), layer: 'foundation',
      what: t('Descomposición jerárquica del alcance del trabajo del proyecto en componentes manejables, orientados a sus entregables.', 'A hierarchical decomposition of project work scope into manageable components oriented around its deliverables.'),
      why: t('Permite organizar responsabilidades, estimaciones y control del trabajo necesario para entregar el sistema.', 'Supports responsibilities, estimates, and control of the work needed to deliver the system.'),
      question: t('¿QUÉ TRABAJO DEBE HACER EL PROYECTO?', 'WHAT PROJECT WORK MUST BE DONE?'),
      example: t('Ejemplo ilustrativo: preparar la especificación de consulta de historial es trabajo del proyecto; consultar historial es una función del sistema.', 'Illustrative example: preparing the history-query specification is project work; consulting history is a system function.'),
      analogy: t('La WBS organiza el trabajo para construir una biblioteca; el FDD organiza lo que su sistema permitirá hacer.', 'The WBS organizes the work to build a library; the FDD organizes what its system will enable.'),
      related: ['w2u_fdd', 'w2u_function', 'w2u_decomposition'],
      notConfuse: t('WBS → gestión del proyecto. FDD → análisis del sistema. Compartir forma de árbol no vuelve equivalentes sus nodos.', 'WBS → project management. FDD → system analysis. Sharing a tree shape does not make their nodes equivalent.'),
      sources: ['w2u_src_nasa_wbs']
    },
    w2u_processflow: {
      id: 'w2u_processflow', label: t('Flujo de proceso', 'Process flow'), layer: 'deepening',
      what: t('Modelo que representa cómo avanza el trabajo mediante pasos, decisiones y posibles recorridos.', 'A model showing how work progresses through steps, decisions, and possible paths.'),
      why: t('Responde preguntas de secuencia que una jerarquía funcional no muestra.', 'Answers sequencing questions that a functional hierarchy does not show.'),
      question: t('¿CÓMO AVANZA EL TRABAJO?', 'HOW DOES WORK MOVE?'),
      example: t('Ejemplo ilustrativo: recibir una solicitud, revisarla y decidir su tratamiento describe un recorrido, no una descomposición.', 'Illustrative example: receiving a request, reviewing it, and deciding its treatment describes a path, not a decomposition.'),
      analogy: t('Un recorrido por una biblioteca indica por dónde pasar; su catálogo organiza lo que contiene.', 'A route through a library indicates where to go; its catalog organizes what it contains.'),
      related: ['w2u_fdd', 'w2u_hierarchy', 'w2u_dfd'],
      notConfuse: t('La posición de hermanos en un FDD no significa primero, después o en paralelo.', 'The position of siblings in an FDD does not mean first, next, or in parallel.'),
      sources: ['w2u_src_sebok_logical']
    },
    w2u_dfd: {
      id: 'w2u_dfd', label: t('DFD: flujo de datos', 'DFD: data flow'), layer: 'deepening',
      what: t('Modelo de cómo se mueven datos entre procesos, almacenes y entidades externas; aquí solo se distingue su propósito.', 'A model of how data moves between processes, stores, and external entities; only its purpose is distinguished here.'),
      why: t('Ayuda a reconocer que descomponer funciones y representar intercambio de datos responden preguntas distintas.', 'Helps distinguish decomposing functions from representing data exchange.'),
      question: t('¿CÓMO SE MUEVEN LOS DATOS?', 'HOW DOES DATA MOVE?'),
      example: t('Ejemplo ilustrativo: una solicitud de historial aporta criterios y recibe antecedentes; esos intercambios no están dibujados por las ramas del FDD.', 'Illustrative example: a history request supplies criteria and receives past records; those exchanges are not drawn by the FDD branches.'),
      analogy: t('El FDD enumera capacidades; el DFD sigue la información que intercambian.', 'The FDD organizes capabilities; the DFD follows the information they exchange.'),
      related: ['w2u_fdd', 'w2u_processflow', 'w2u_hierarchy', 'w2u_physical'],
      notConfuse: t('DFD no equivale a diagrama de secuencia ni a arquitectura física. Sus niveles no se deducen de los niveles de este FDD.', 'A DFD is neither a sequence diagram nor a physical architecture. Its levels are not inferred from this FDD’s levels.'),
      sources: ['w2u_src_sebok_logical']
    },
    w2u_physical: {
      id: 'w2u_physical', label: t('Diseño físico', 'Physical design'), layer: 'deepening',
      what: t('Decisiones sobre los componentes y tecnologías concretos con los que se realizará la solución.', 'Decisions about the concrete components and technologies used to realize the solution.'),
      why: t('Separarlo del FDD permite discutir necesidades sin fijar prematuramente una implementación.', 'Separating it from the FDD allows needs to be discussed without fixing implementation prematurely.'),
      question: t('¿Con qué elementos concretos se implementaría la solución?', 'Which concrete elements would implement the solution?'),
      example: t('Ejemplo ilustrativo: elegir React o PostgreSQL pertenece a decisiones de implementación; no son funciones de AREV.', 'Illustrative example: choosing React or PostgreSQL belongs to implementation decisions; these are not AREV functions.'),
      analogy: t('Elegir el material de un instrumento es distinto de definir qué debe poder interpretar.', 'Choosing an instrument’s material differs from defining what it must be able to play.'),
      related: ['w2u_function', 'w2u_fdd', 'w2u_dfd'],
      notConfuse: t('Una rama funcional no impone una pantalla, servicio, tabla o servidor. Tampoco hay correspondencia uno a uno obligatoria.', 'A functional branch does not prescribe a screen, service, table, or server. Nor is a one-to-one correspondence required.'),
      sources: ['w2u_src_nasa_decomposition', 'w2u_src_sebok_logical']
    },

    w2u_arev: {
      id: 'w2u_arev', label: t('AREV', 'AREV'), layer: 'deepening', candidate: true,
      what: t('Análisis de reparaciones para equipo vehicular: raíz del modelo funcional ilustrativo propuesto en el pedido.', 'Repair analysis for vehicle equipment: the root of the illustrative functional model proposed in the request.'),
      why: t('Reúne capacidades candidatas bajo un propósito común que debe contrastarse con el caso.', 'Brings candidate capabilities under a shared purpose to be checked against the case.'),
      question: t('¿Qué capacidades necesita realmente AREV y qué evidencia las justifica?', 'Which capabilities does AREV actually need, and what evidence justifies them?'),
      example: t('Modelo ilustrativo / candidato: cuatro ramas y doce subfunciones; no es una especificación confirmada de Eden Bay.', 'Illustrative requirement model / candidate: four branches and twelve subfunctions; not a confirmed Eden Bay specification.'),
      analogy: t('Un mapa preliminar sitúa zonas de interés que todavía deben contrastarse con el terreno.', 'A preliminary map locates areas of interest that must still be checked against the terrain.'),
      related: ['w2u_vehicles', 'w2u_maintenance', 'w2u_repairs', 'w2u_analysis', 'w2u_fdd'],
      notConfuse: t('El nombre del caso no convierte las ramas propuestas en requisitos aprobados ni confirma datos operativos.', 'The case name does not turn proposed branches into approved requirements or confirm operational data.'),
      requiredInformation: t('Por confirmar: límites del sistema, usuarios, decisiones de gestión, registros disponibles y reglas de acceso.', 'To confirm: system boundaries, users, management decisions, available records, and access rules.'),
      evidence: t('Necesidad supuesta: comprender reparaciones de vehículos. Requisito candidato: organizar información útil para esa gestión. Evidencia pendiente: documentación original de Eden Bay/AREV y validación de usuarios.', 'Assumed need: understand vehicle repairs. Candidate requirement: organize information useful for that management. Pending evidence: original Eden Bay/AREV documentation and user validation.'),
      sources: ['w2u_src_nasa_decomposition'],
      ai: {
        connection: t('La propuesta de jerarquía parte de esta raíz candidata.', 'The hierarchy proposal starts from this candidate root.'),
        does: t('Organiza capacidades sin atribuirlas como hechos al caso.', 'Organizes capabilities without attributing them to the case as facts.'),
        changes: t('Ofrece una estructura inicial para conversar.', 'Offers an initial structure for discussion.'),
        validate: t('Confirmar propósito y alcance con documentos y usuarios antes de aprobar el árbol.', 'Confirm purpose and scope with documents and users before approving the tree.')
      }
    },
    w2u_vehicles: {
      id: 'w2u_vehicles', label: t('Gestionar vehículos', 'Manage vehicles'), layer: 'deepening', candidate: true,
      what: t('Capacidad candidata para mantener identificable la información de cada vehículo.', 'Candidate capability for maintaining identifiable information about each vehicle.'),
      why: t('Daría un referente común a mantenimiento y reparaciones.', 'Would provide a shared reference for maintenance and repairs.'),
      question: t('¿Qué información identifica un vehículo para estas funciones?', 'What information identifies a vehicle for these functions?'),
      example: t('Ejemplo ilustrativo: usar la misma identidad del vehículo al consultar sus datos y registrar una intervención.', 'Illustrative example: use the same vehicle identity when consulting its details and recording an intervention.'),
      analogy: t('Una ficha de catálogo mantiene reconocible el objeto al que se refieren otros registros.', 'A catalog entry keeps the object referenced by other records identifiable.'),
      related: ['w2u_arev', 'w2u_vehicle_register', 'w2u_vehicle_consult', 'w2u_vehicle_update'],
      notConfuse: t('Gestionar información del vehículo no implica comprarlo, conducirlo o diseñar una tabla física.', 'Managing vehicle information does not imply purchasing it, driving it, or designing a physical table.'),
      requiredInformation: t('Por confirmar: identificador, atributos necesarios, responsables de actualización y reglas para evitar registros duplicados.', 'To confirm: identifier, necessary attributes, update owners, and rules for avoiding duplicate records.'),
      evidence: t('Necesidad supuesta: distinguir vehículos. Requisito candidato: mantener información identificable de cada uno. Evidencia pendiente: formularios actuales y entrevistas que precisen datos y autoridad.', 'Assumed need: distinguish vehicles. Candidate requirement: maintain identifiable information for each. Pending evidence: current forms and interviews specifying data and authority.'),
      sources: ['w2u_src_nasa_decomposition'],
      ai: {
        connection: t('Candidata de nivel 1 dentro de la jerarquía.', 'A level 1 candidate within the hierarchy.'),
        does: t('Agrupa requisitos relativos a identidad y datos del vehículo.', 'Groups requirements about vehicle identity and details.'),
        changes: t('Hace visible una responsabilidad común.', 'Makes a shared responsibility visible.'),
        validate: t('Confirmar si las tres subfunciones propuestas están justificadas.', 'Confirm whether the three proposed subfunctions are justified.')
      }
    },
    w2u_vehicle_register: {
      id: 'w2u_vehicle_register', label: t('Registrar vehículo', 'Register a vehicle'), layer: 'deepening', candidate: true,
      what: t('Crear el registro inicial que permite identificar un vehículo en el sistema.', 'Create the initial record allowing a vehicle to be identified in the system.'),
      why: t('Sería necesario para asociar futuras intervenciones al vehículo correcto.', 'Would allow future interventions to be associated with the correct vehicle.'),
      question: t('¿Qué datos mínimos permiten dar de alta un vehículo sin duplicarlo?', 'What minimum data allows a vehicle to be registered without duplication?'),
      example: t('Ejemplo ilustrativo: ingresar un identificador y los datos acordados antes de asociar un mantenimiento.', 'Illustrative example: enter an identifier and agreed details before associating maintenance.'),
      analogy: t('Abrir una ficha nueva en un archivo.', 'Opening a new entry in a file.'),
      related: ['w2u_vehicles', 'w2u_vehicle_consult', 'w2u_maintenance_register'],
      notConfuse: t('Registrar en AREV no equivale a matricular legalmente el vehículo.', 'Registering in AREV does not mean legally registering the vehicle.'),
      requiredInformation: t('Por confirmar: identificador único, atributos obligatorios y criterio de existencia previa.', 'To confirm: unique identifier, mandatory attributes, and the criterion for an existing record.'),
      evidence: t('Necesidad supuesta: incorporar vehículos al registro. Requisito candidato: permitir su alta identificable. Evidencia pendiente: documento o entrevista sobre cómo ingresan los vehículos al sistema.', 'Assumed need: add vehicles to the register. Candidate requirement: allow identifiable registration. Pending evidence: a document or interview about how vehicles enter the system.'),
      sources: ['w2u_src_nasa_decomposition'],
      ai: {
        connection: t('Subfunción propuesta bajo gestionar vehículos.', 'Proposed subfunction under manage vehicles.'),
        does: t('Señala datos de alta mencionados por los requisitos.', 'Identifies registration data mentioned by requirements.'),
        changes: t('Ayuda a delimitar la creación del registro.', 'Helps define record creation boundaries.'),
        validate: t('Confirmar obligatoriedad de campos y reglas de duplicados.', 'Confirm mandatory fields and duplicate rules.')
      }
    },
    w2u_vehicle_consult: {
      id: 'w2u_vehicle_consult', label: t('Consultar vehículo', 'Consult vehicle details'), layer: 'deepening', candidate: true,
      what: t('Recuperar información de un vehículo mediante criterios de consulta acordados.', 'Retrieve vehicle information using agreed query criteria.'),
      why: t('Permitiría reconocer el vehículo antes de revisar o asociar intervenciones.', 'Would allow the vehicle to be identified before reviewing or associating interventions.'),
      question: t('¿Qué necesita ver el usuario para confirmar que encontró el vehículo correcto?', 'What must the user see to confirm the correct vehicle was found?'),
      example: t('Ejemplo ilustrativo: consultar por identificador y revisar los atributos que distinguen ese vehículo.', 'Illustrative example: query by identifier and review attributes distinguishing that vehicle.'),
      analogy: t('Buscar una ficha sin cambiar su contenido.', 'Finding an entry without changing its contents.'),
      related: ['w2u_vehicles', 'w2u_vehicle_register', 'w2u_vehicle_update'],
      notConfuse: t('Consultar datos del vehículo no es consultar todo su historial de mantenimiento.', 'Consulting vehicle details is not consulting its entire maintenance history.'),
      requiredInformation: t('Por confirmar: criterios de búsqueda, datos visibles, permisos y respuesta si no hay coincidencias.', 'To confirm: search criteria, visible data, permissions, and the response when no match exists.'),
      evidence: t('Necesidad supuesta: localizar información de un vehículo. Requisito candidato: ofrecer una consulta identificable. Evidencia pendiente: preguntas de usuarios y ejemplos de búsquedas reales.', 'Assumed need: locate vehicle information. Candidate requirement: provide an identifiable query. Pending evidence: user questions and examples of actual searches.'),
      sources: ['w2u_src_nasa_decomposition'],
      ai: {
        connection: t('Candidata vinculable a requisitos de consulta.', 'A candidate linkable to query requirements.'),
        does: t('Separa consulta de datos maestros y consulta de antecedentes.', 'Separates master-data queries from history queries.'),
        changes: t('Aclara límites entre funciones parecidas.', 'Clarifies boundaries between similar functions.'),
        validate: t('Revisar con usuarios qué información responde a cada consulta.', 'Review with users which information answers each query.')
      }
    },
    w2u_vehicle_update: {
      id: 'w2u_vehicle_update', label: t('Actualizar información', 'Update information'), layer: 'deepening', candidate: true,
      what: t('Modificar datos permitidos de un vehículo ya registrado.', 'Modify permitted details of an already registered vehicle.'),
      why: t('Mantendría útiles los datos cuando cambian o requieren corrección.', 'Would keep data useful when it changes or requires correction.'),
      question: t('¿Qué puede cambiar, quién puede cambiarlo y qué debe conservarse?', 'What may change, who may change it, and what must be retained?'),
      example: t('Ejemplo ilustrativo: corregir un atributo del vehículo conservando su identidad y los vínculos existentes.', 'Illustrative example: correct a vehicle attribute while retaining its identity and existing links.'),
      analogy: t('Corregir una ficha sin convertirla en la ficha de otro objeto.', 'Correcting an entry without turning it into another object’s entry.'),
      related: ['w2u_vehicles', 'w2u_vehicle_consult', 'w2u_vehicle_register'],
      notConfuse: t('Actualizar datos del vehículo no equivale a cambiar el estado de una intervención.', 'Updating vehicle details does not mean changing an intervention’s status.'),
      requiredInformation: t('Por confirmar: registro seleccionado, valores actuales y nuevos, campos editables y autorización.', 'To confirm: selected record, current and new values, editable fields, and authorization.'),
      evidence: t('Necesidad supuesta: corregir o mantener datos vigentes. Requisito candidato: actualizar atributos autorizados. Evidencia pendiente: reglas de edición y situaciones documentadas de cambio.', 'Assumed need: correct or maintain current details. Candidate requirement: update authorized attributes. Pending evidence: editing rules and documented change situations.'),
      sources: ['w2u_src_nasa_decomposition'],
      ai: {
        connection: t('Candidata de actualización dentro de vehículos.', 'An update candidate within vehicles.'),
        does: t('Relaciona peticiones de corrección con datos y permisos.', 'Links correction requests to data and permissions.'),
        changes: t('Separa cambios de información y cambios de estado.', 'Separates information changes from status changes.'),
        validate: t('Confirmar qué se puede editar y si se exige conservar historial de cambios.', 'Confirm what may be edited and whether change history is required.')
      }
    },
    w2u_maintenance: {
      id: 'w2u_maintenance', label: t('Gestionar mantenimiento', 'Manage maintenance'), layer: 'deepening', candidate: true,
      what: t('Organizar información de mantenimiento asociada a los vehículos.', 'Organize maintenance information associated with vehicles.'),
      why: t('Permitiría reconocer intervenciones y seguir su situación.', 'Would allow interventions to be identified and their status followed.'),
      question: t('¿Qué considera mantenimiento el usuario y cómo lo distingue de reparación?', 'What does the user consider maintenance, and how is it distinguished from repair?'),
      example: t('Ejemplo ilustrativo: reunir el registro, la consulta histórica y el cambio de estado de una intervención.', 'Illustrative example: bring together recording, historical consultation, and status changes for an intervention.'),
      analogy: t('Una sección de bitácora reúne anotaciones con un mismo propósito.', 'A logbook section brings together entries serving the same purpose.'),
      related: ['w2u_arev', 'w2u_maintenance_register', 'w2u_maintenance_history', 'w2u_maintenance_status', 'w2u_repairs'],
      notConfuse: t('El sistema gestiona información; no realiza físicamente el mantenimiento. El límite con reparaciones está por validar.', 'The system manages information; it does not physically perform maintenance. The boundary with repairs remains to be validated.'),
      requiredInformation: t('Por confirmar: vehículo, intervenciones, fechas, estados permitidos y definición de mantenimiento.', 'To confirm: vehicle, interventions, dates, permitted states, and the definition of maintenance.'),
      evidence: t('Necesidad supuesta: conocer mantenimiento y seguimiento. Requisito candidato: gestionar esos registros. Evidencia pendiente: documentación y usuarios que distingan mantenimiento de reparación.', 'Assumed need: understand maintenance and follow-up. Candidate requirement: manage those records. Pending evidence: documentation and users distinguishing maintenance from repair.'),
      sources: ['w2u_src_nasa_decomposition'],
      ai: {
        connection: t('Función principal usada para proponer descomposición.', 'Major function used to propose decomposition.'),
        does: t('Sugiere registrar, consultar y actualizar como candidatos.', 'Suggests record, consult, and update as candidates.'),
        changes: t('Hace discutible el alcance de cada responsabilidad.', 'Makes each responsibility’s scope available for discussion.'),
        validate: t('Analista y usuarios aceptan, ajustan o descartan cada subfunción según evidencia.', 'The analyst and users accept, adjust, or discard each subfunction according to evidence.')
      }
    },
    w2u_maintenance_register: {
      id: 'w2u_maintenance_register', label: t('Registrar mantenimiento', 'Record maintenance'), layer: 'deepening', candidate: true,
      what: t('Incorporar un registro de mantenimiento vinculado a un vehículo.', 'Add a maintenance record linked to a vehicle.'),
      why: t('Daría origen a antecedentes consultables sobre las intervenciones.', 'Would create consultable records of interventions.'),
      question: t('¿Qué información describe suficientemente el mantenimiento registrado?', 'What information sufficiently describes the recorded maintenance?'),
      example: t('Ejemplo ilustrativo: registrar vehículo, fecha y descripción de una intervención si esos datos son requeridos.', 'Illustrative example: record vehicle, date, and intervention description if those data are required.'),
      analogy: t('Añadir una entrada fechada a una bitácora.', 'Adding a dated entry to a logbook.'),
      related: ['w2u_maintenance', 'w2u_maintenance_history', 'w2u_vehicle_consult'],
      notConfuse: t('Registrar un mantenimiento no demuestra por sí solo que se haya realizado o aprobado.', 'Recording maintenance does not by itself establish that it was performed or approved.'),
      requiredInformation: t('Por confirmar: vehículo, descripción, fecha, origen del registro y condición de la intervención.', 'To confirm: vehicle, description, date, record origin, and intervention condition.'),
      evidence: t('Necesidad supuesta: conservar antecedentes de mantenimiento. Requisito candidato: registrar intervenciones vinculadas al vehículo. Evidencia pendiente: formularios y reglas sobre qué eventos se registran.', 'Assumed need: retain maintenance history. Candidate requirement: record interventions linked to the vehicle. Pending evidence: forms and rules defining which events are recorded.'),
      sources: ['w2u_src_nasa_decomposition'],
      ai: {
        connection: t('Subfunción candidata de captura de mantenimiento.', 'Candidate maintenance-capture subfunction.'),
        does: t('Extrae datos mencionados en requisitos de registro.', 'Extracts data mentioned in recording requirements.'),
        changes: t('Ayuda a precisar la información necesaria.', 'Helps specify necessary information.'),
        validate: t('Confirmar si se registran eventos previstos, realizados o ambos, sin asumirlo.', 'Confirm whether planned events, completed events, or both are recorded, without assuming.')
      }
    },
    w2u_maintenance_history: {
      id: 'w2u_maintenance_history', label: t('Consultar historial', 'Consult history'), layer: 'deepening', candidate: true,
      what: t('Consultar historial de mantenimiento de un vehículo dentro de la rama de mantenimiento.', 'Consult a vehicle’s maintenance history within the maintenance branch.'),
      why: t('Ayudaría a conocer antecedentes relevantes de las intervenciones.', 'Would help reveal relevant intervention history.'),
      question: t('¿Qué antecedentes de mantenimiento necesita consultar un usuario autorizado?', 'Which maintenance records does an authorized user need to consult?'),
      example: t('Ejemplo ilustrativo: recuperar intervenciones de un vehículo para un intervalo acordado, sin asumir que ese filtro sea requisito confirmado.', 'Illustrative example: retrieve a vehicle’s interventions for an agreed period, without assuming that filter is a confirmed requirement.'),
      analogy: t('Leer páginas anteriores de una bitácora antes de interpretar una nueva anotación.', 'Reading earlier logbook pages before interpreting a new entry.'),
      related: ['w2u_maintenance', 'w2u_maintenance_register', 'w2u_analysis_history', 'w2u_traceability'],
      notConfuse: t('No asumir equivalencia con el historial de la rama de análisis. Si propósito, alcance y datos coinciden, puede existir duplicidad.', 'Do not assume equivalence with the analysis branch’s history. If purpose, scope, and data match, duplication may exist.'),
      requiredInformation: t('Por confirmar: identidad del vehículo, registros históricos, criterios de consulta y permisos.', 'To confirm: vehicle identity, historical records, query criteria, and permissions.'),
      evidence: t('Necesidad ilustrativa por validar: los usuarios necesitan historial de mantenimiento. Requisito candidato: permitir su consulta a usuarios autorizados. Evidencia pendiente: fuente original y confirmación de alcance.', 'Illustrative need to validate: users need maintenance history. Candidate requirement: allow authorized users to consult it. Pending evidence: an original source and scope confirmation.'),
      sources: ['w2u_src_nasa_decomposition', 'w2u_src_nasa_traceability'],
      ai: {
        connection: t('Ejemplo de función enlazada a un requisito candidato.', 'Example of a function linked to a candidate requirement.'),
        does: t('Propone el vínculo con la necesidad de historial.', 'Proposes a link to the need for history.'),
        changes: t('Permite discutir el sustento de un nodo concreto.', 'Allows the rationale for a specific node to be discussed.'),
        validate: t('Localizar evidencia real y revisar diferencias frente a consultar historial en análisis.', 'Locate real evidence and review differences from consulting history in analysis.')
      }
    },
    w2u_maintenance_status: {
      id: 'w2u_maintenance_status', label: t('Actualizar estado', 'Update status'), layer: 'deepening', candidate: true,
      what: t('Modificar el estado permitido de un registro de mantenimiento.', 'Modify the permitted state of a maintenance record.'),
      why: t('Distinguiría situaciones que afectan el seguimiento de la intervención.', 'Would distinguish situations affecting intervention tracking.'),
      question: t('¿Qué estados existen y qué autoriza pasar de uno a otro?', 'Which states exist, and what authorizes moving between them?'),
      example: t('Ejemplo ilustrativo: pasar de pendiente a completado solo si esos estados y la evidencia exigida se acuerdan.', 'Illustrative example: move from pending to completed only if those states and the required evidence are agreed.'),
      analogy: t('Cambiar una etiqueta de situación no modifica el objeto, pero cambia cómo se interpreta.', 'Changing a status label does not modify the object but changes how it is interpreted.'),
      related: ['w2u_maintenance', 'w2u_maintenance_register', 'w2u_maintenance_history'],
      notConfuse: t('Actualizar estado no es actualizar los datos generales del vehículo ni reparar físicamente una avería.', 'Updating status is neither updating general vehicle details nor physically repairing a fault.'),
      requiredInformation: t('Por confirmar: intervención, estado actual, estado solicitado, transiciones válidas y responsable autorizado.', 'To confirm: intervention, current state, requested state, valid transitions, and authorized owner.'),
      evidence: t('Necesidad supuesta: conocer situación de mantenimiento. Requisito candidato: cambiar estados conforme a reglas. Evidencia pendiente: estados reales, responsables y criterios de transición documentados.', 'Assumed need: know maintenance status. Candidate requirement: change states according to rules. Pending evidence: documented actual states, owners, and transition criteria.'),
      sources: ['w2u_src_nasa_decomposition'],
      ai: {
        connection: t('Candidata sujeta a requisitos de estado.', 'Candidate constrained by state requirements.'),
        does: t('Identifica preguntas sobre estados y cambios permitidos.', 'Identifies questions about states and permitted changes.'),
        changes: t('Expone reglas que aún faltan por definir.', 'Exposes rules still needing definition.'),
        validate: t('No inventar estados ni autoridad para cambiarlos; consultar responsables.', 'Do not invent states or authority to change them; consult owners.')
      }
    },
    w2u_repairs: {
      id: 'w2u_repairs', label: t('Gestionar reparaciones', 'Manage repairs'), layer: 'deepening', candidate: true,
      what: t('Organizar registros de reparación, sus costos asociados y su consulta.', 'Organize repair records, their associated costs, and their retrieval.'),
      why: t('Reuniría información para comprender las reparaciones de un vehículo.', 'Would bring together information needed to understand a vehicle’s repairs.'),
      question: t('¿Qué responsabilidad común une estas capacidades de reparación?', 'What shared responsibility connects these repair capabilities?'),
      example: t('Ejemplo ilustrativo: registrar una reparación, vincular importes y consultar sus detalles como partes de una capacidad mayor.', 'Illustrative example: record a repair, link amounts, and consult its details as parts of a larger capability.'),
      analogy: t('Un expediente reúne documentos distintos referidos al mismo asunto.', 'A case file brings together different documents about the same matter.'),
      related: ['w2u_arev', 'w2u_repair_register', 'w2u_repair_costs', 'w2u_repair_consult', 'w2u_maintenance'],
      notConfuse: t('La agrupación es propuesta: no confirma que toda reparación se distinga del mantenimiento ni que el sistema autorice gastos.', 'The grouping is proposed: it does not confirm that every repair differs from maintenance or that the system authorizes expenditure.'),
      requiredInformation: t('Por confirmar: definición de reparación, vehículo, registros, conceptos de costo y acceso.', 'To confirm: definition of repair, vehicle, records, cost categories, and access.'),
      evidence: t('Necesidad supuesta: comprender reparaciones y costos. Requisito candidato: organizar registros relacionados. Evidencia pendiente: documentación del caso que justifique estas capacidades y sus límites.', 'Assumed need: understand repairs and costs. Candidate requirement: organize related records. Pending evidence: case documentation justifying these capabilities and boundaries.'),
      sources: ['w2u_src_nasa_decomposition'],
      ai: {
        connection: t('Agrupación candidata de funciones relacionadas con reparación.', 'Candidate grouping of repair-related functions.'),
        does: t('Propone un nombre común conservando las obligaciones de cada requisito.', 'Proposes a shared name while retaining each requirement’s obligations.'),
        changes: t('Simplifica la lectura de requisitos afines.', 'Simplifies reading of related requirements.'),
        validate: t('El analista verifica qué funciones pertenecen a la rama y cuáles no están solicitadas.', 'The analyst checks which functions belong in the branch and which were not requested.')
      }
    },
    w2u_repair_register: {
      id: 'w2u_repair_register', label: t('Registrar reparación', 'Record a repair'), layer: 'deepening', candidate: true,
      what: t('Crear un registro que describa una reparación vinculada a un vehículo.', 'Create a record describing a repair linked to a vehicle.'),
      why: t('Proporcionaría una referencia para consultar la reparación y asociar información.', 'Would provide a reference for querying the repair and associating information.'),
      question: t('¿Qué distingue esta reparación de otras del mismo vehículo?', 'What distinguishes this repair from others for the same vehicle?'),
      example: t('Ejemplo ilustrativo: registrar una reparación con referencia, vehículo y descripción acordados.', 'Illustrative example: record a repair with an agreed reference, vehicle, and description.'),
      analogy: t('Abrir una carpeta para un evento concreto.', 'Opening a folder for a specific event.'),
      related: ['w2u_repairs', 'w2u_repair_costs', 'w2u_repair_consult'],
      notConfuse: t('Un registro informático no demuestra que la reparación se ejecutó, fue autorizada o quedó pagada.', 'An electronic record does not establish that the repair was performed, authorized, or paid.'),
      requiredInformation: t('Por confirmar: referencia, vehículo, descripción, fecha y origen del evento registrado.', 'To confirm: reference, vehicle, description, date, and origin of the recorded event.'),
      evidence: t('Necesidad supuesta: conservar reparaciones identificables. Requisito candidato: registrar cada reparación pertinente. Evidencia pendiente: registros originales y reglas sobre qué se considera reparación.', 'Assumed need: retain identifiable repairs. Candidate requirement: record each relevant repair. Pending evidence: original records and rules defining what counts as a repair.'),
      sources: ['w2u_src_nasa_decomposition'],
      ai: {
        connection: t('Subfunción de registro propuesta para reparaciones.', 'Recording subfunction proposed for repairs.'),
        does: t('Relaciona la captura con requisitos de identidad y descripción.', 'Links capture to identification and description requirements.'),
        changes: t('Ayuda a separar registro y ejecución física.', 'Helps separate recording from physical execution.'),
        validate: t('Confirmar datos necesarios y momento del registro con usuarios.', 'Confirm necessary data and recording timing with users.')
      }
    },
    w2u_repair_costs: {
      id: 'w2u_repair_costs', label: t('Asociar costos', 'Associate costs'), layer: 'deepening', candidate: true,
      what: t('Vincular información de costos a una reparación identificada.', 'Link cost information to an identified repair.'),
      why: t('Permitiría relacionar importes con los eventos que explican su origen.', 'Would connect amounts to the events explaining their origin.'),
      question: t('¿Qué costo corresponde a qué reparación y con qué respaldo?', 'Which cost belongs to which repair, and with what support?'),
      example: t('Ejemplo ilustrativo: asociar un importe documentado a una reparación sin asumir categorías contables del caso.', 'Illustrative example: associate a documented amount with a repair without assuming the case’s accounting categories.'),
      analogy: t('Adjuntar un comprobante al expediente correcto.', 'Attaching a supporting record to the correct file.'),
      related: ['w2u_repairs', 'w2u_repair_register', 'w2u_analysis_costs'],
      notConfuse: t('Asociar un costo no equivale a aprobarlo, pagarlo ni calcular automáticamente el costo total.', 'Associating a cost does not mean approving it, paying it, or automatically calculating total cost.'),
      requiredInformation: t('Por confirmar: referencia de reparación, concepto, importe, moneda y documento de respaldo.', 'To confirm: repair reference, category, amount, currency, and supporting document.'),
      evidence: t('Necesidad supuesta: relacionar reparaciones e importes. Requisito candidato: vincular costos documentados. Evidencia pendiente: formularios o reportes que prueben la necesidad y definan conceptos.', 'Assumed need: relate repairs and amounts. Candidate requirement: link documented costs. Pending evidence: forms or reports establishing the need and defining categories.'),
      sources: ['w2u_src_nasa_decomposition'],
      ai: {
        connection: t('Candidata vinculada al sustento del análisis de costos.', 'Candidate linked to the basis of cost analysis.'),
        does: t('Señala relaciones propuestas entre registro e importe.', 'Flags proposed links between records and amounts.'),
        changes: t('Expone qué datos faltan para interpretar los costos.', 'Exposes data missing for interpreting costs.'),
        validate: t('Comprobar moneda, concepto y respaldo; no inventar importes ni permisos de aprobación.', 'Check currency, category, and support; do not invent amounts or approval permissions.')
      }
    },
    w2u_repair_consult: {
      id: 'w2u_repair_consult', label: t('Consultar reparación', 'Consult a repair'), layer: 'deepening', candidate: true,
      what: t('Recuperar los datos de una reparación identificada.', 'Retrieve the details of an identified repair.'),
      why: t('Permitiría responder preguntas sobre un evento específico.', 'Would allow questions about a specific event to be answered.'),
      question: t('¿Qué datos necesita el usuario para comprender esta reparación?', 'What data does the user need to understand this repair?'),
      example: t('Ejemplo ilustrativo: consultar la descripción y los costos asociados a una referencia de reparación.', 'Illustrative example: consult the description and associated costs for a repair reference.'),
      analogy: t('Abrir un expediente concreto, en lugar de resumir todo el archivo.', 'Opening one specific file rather than summarizing the entire archive.'),
      related: ['w2u_repairs', 'w2u_repair_register', 'w2u_repair_costs', 'w2u_analysis_history'],
      notConfuse: t('Consultar una reparación no equivale a analizar tendencias del conjunto de reparaciones.', 'Consulting one repair does not mean analyzing trends across repairs.'),
      requiredInformation: t('Por confirmar: referencia o criterios de búsqueda, datos disponibles y permisos de consulta.', 'To confirm: reference or search criteria, available data, and query permissions.'),
      evidence: t('Necesidad supuesta: revisar una reparación particular. Requisito candidato: recuperar sus detalles. Evidencia pendiente: consultas reales de usuarios y alcance de información requerido.', 'Assumed need: review a particular repair. Candidate requirement: retrieve its details. Pending evidence: actual user queries and required information scope.'),
      sources: ['w2u_src_nasa_decomposition'],
      ai: {
        connection: t('Subfunción candidata comparada con otras consultas.', 'Candidate subfunction compared with other queries.'),
        does: t('Distingue consulta individual de consulta histórica o agregada.', 'Distinguishes individual queries from historical or aggregate queries.'),
        changes: t('Aclara la granularidad del resultado esperado.', 'Clarifies the expected result’s granularity.'),
        validate: t('Revisar criterios de búsqueda y límites con quienes consultarán el sistema.', 'Review search criteria and boundaries with future system users.')
      }
    },
    w2u_analysis: {
      id: 'w2u_analysis', label: t('Analizar información', 'Analyze information'), layer: 'deepening', candidate: true,
      what: t('Organizar consultas y análisis que produzcan información útil para gestión.', 'Organize queries and analyses producing useful management information.'),
      why: t('Relacionaría registros operativos con preguntas de decisión.', 'Would connect operational records with decision questions.'),
      question: t('¿Qué decisión necesita información y cómo se obtiene de los registros?', 'Which decision needs information, and how is it obtained from records?'),
      example: t('Ejemplo ilustrativo: revisar costos e historial para preparar información de gestión, sin suponer indicadores exigidos por Eden Bay.', 'Illustrative example: review costs and history to prepare management information without assuming indicators required by Eden Bay.'),
      analogy: t('Leer varias notas para comprender un tema, en lugar de limitarse a archivarlas.', 'Reading several notes to understand a topic rather than merely filing them.'),
      related: ['w2u_arev', 'w2u_analysis_costs', 'w2u_analysis_history', 'w2u_management_information'],
      notConfuse: t('Analizar información no requiere automáticamente IA, predicciones o paneles específicos.', 'Analyzing information does not automatically require AI, predictions, or specific dashboards.'),
      requiredInformation: t('Por confirmar: preguntas de gestión, usuarios destinatarios, registros, periodos y criterios de interpretación.', 'To confirm: management questions, intended users, records, periods, and interpretation criteria.'),
      evidence: t('Necesidad supuesta: apoyar decisiones con información. Requisito candidato: ofrecer análisis pertinentes. Evidencia pendiente: decisiones y reportes solicitados por usuarios del caso.', 'Assumed need: support decisions with information. Candidate requirement: provide relevant analyses. Pending evidence: decisions and reports requested by case users.'),
      sources: ['w2u_src_nasa_decomposition'],
      ai: {
        connection: t('Rama candidata cuyo alcance debe contrastarse con requisitos.', 'Candidate branch whose scope must be checked against requirements.'),
        does: t('Agrupa preguntas de gestión por información requerida.', 'Groups management questions by required information.'),
        changes: t('Vuelve explícito el propósito de cada análisis.', 'Makes each analysis purpose explicit.'),
        validate: t('Confirmar decisiones destinatarias y evitar capacidades predictivas no solicitadas.', 'Confirm intended decisions and avoid unrequested predictive capabilities.')
      }
    },
    w2u_analysis_costs: {
      id: 'w2u_analysis_costs', label: t('Analizar costos', 'Analyze costs'), layer: 'deepening', candidate: true,
      what: t('Examinar costos registrados mediante criterios pertinentes a una pregunta de gestión.', 'Examine recorded costs using criteria relevant to a management question.'),
      why: t('Permitiría interpretar importes más allá de un registro aislado.', 'Would allow amounts to be interpreted beyond an individual record.'),
      question: t('¿Qué comparación de costos sería útil y qué datos la hacen válida?', 'Which cost comparison would be useful, and what data makes it valid?'),
      example: t('Ejemplo ilustrativo: comparar costos por periodo solo después de acordar conceptos incluidos y moneda.', 'Illustrative example: compare costs by period only after agreeing on included categories and currency.'),
      analogy: t('Comparar cuentas exige saber si incluyen los mismos conceptos.', 'Comparing bills requires knowing whether they include the same items.'),
      related: ['w2u_analysis', 'w2u_repair_costs', 'w2u_management_information'],
      notConfuse: t('Analizar costos no es simplemente asociarlos ni autoriza decisiones de compra.', 'Analyzing costs is not merely associating them and does not authorize purchasing decisions.'),
      requiredInformation: t('Por confirmar: importes, conceptos, moneda, periodos, agrupación y exclusiones.', 'To confirm: amounts, categories, currency, periods, grouping, and exclusions.'),
      evidence: t('Necesidad supuesta: interpretar costos. Requisito candidato: comparar o resumir importes con criterios acordados. Evidencia pendiente: preguntas de gestión y reglas de cálculo documentadas.', 'Assumed need: interpret costs. Candidate requirement: compare or summarize amounts using agreed criteria. Pending evidence: documented management questions and calculation rules.'),
      sources: ['w2u_src_nasa_decomposition'],
      ai: {
        connection: t('Función candidata sometida a revisión de cobertura.', 'Candidate function subject to coverage review.'),
        does: t('Relaciona análisis propuestos con preguntas y datos disponibles.', 'Links proposed analyses to questions and available data.'),
        changes: t('Revela análisis sin datos o reglas suficientes.', 'Reveals analyses lacking sufficient data or rules.'),
        validate: t('Confirmar comparabilidad y cálculos; no inventar totales, indicadores ni resultados del caso.', 'Confirm comparability and calculations; do not invent totals, indicators, or case results.')
      }
    },
    w2u_analysis_history: {
      id: 'w2u_analysis_history', label: t('Consultar historial', 'Consult history'), layer: 'deepening', candidate: true,
      what: t('Consultar antecedentes para una pregunta de gestión dentro de la rama de análisis; su alcance está pendiente.', 'Consult historical records for a management question within the analysis branch; its scope is pending.'),
      why: t('Podría aportar contexto a una decisión si ofrece una perspectiva distinta de la consulta de mantenimiento.', 'Could provide decision context if it offers a perspective distinct from the maintenance query.'),
      question: t('¿Qué aporta esta consulta que no aporta el historial de mantenimiento?', 'What does this query provide that maintenance history does not?'),
      example: t('Ejemplo ilustrativo: revisar antecedentes para una pregunta de gestión. Si usa el mismo propósito y datos que mantenimiento, podría fusionarse tras validación.', 'Illustrative example: review history for a management question. If its purpose and data match maintenance, it could be merged after validation.'),
      analogy: t('Dos índices pueden abrir las mismas páginas o perspectivas distintas del archivo.', 'Two indexes may open the same pages or different perspectives on the archive.'),
      related: ['w2u_analysis', 'w2u_maintenance_history', 'w2u_repair_consult', 'w2u_duplicates'],
      notConfuse: t('Estar en otra rama no demuestra una función distinta. Se conserva como candidata para examinar el posible solapamiento.', 'Being in another branch does not establish a distinct function. It remains a candidate for examining possible overlap.'),
      requiredInformation: t('Por confirmar: pregunta de gestión, antecedentes incluidos, periodos, permisos y diferencias frente al historial de mantenimiento.', 'To confirm: management question, included history, periods, permissions, and differences from maintenance history.'),
      evidence: t('Necesidad hipotética: una perspectiva histórica para gestión. Requisito candidato: consulta con alcance propio, si se justifica. Evidencia pendiente: usuarios deben demostrar la diferencia o confirmar duplicidad.', 'Hypothetical need: a historical management perspective. Candidate requirement: a query with its own scope, if justified. Pending evidence: users must establish the difference or confirm duplication.'),
      sources: ['w2u_src_nasa_decomposition', 'w2u_src_nasa_requirements'],
      ai: {
        connection: t('Nodo concreto de revisión de duplicidades.', 'Specific node for duplicate review.'),
        does: t('Compara su propósito con consultar historial de mantenimiento.', 'Compares its purpose with consulting maintenance history.'),
        changes: t('Hace visible una ambigüedad del árbol candidato.', 'Makes an ambiguity in the candidate tree visible.'),
        validate: t('El analista decide con usuarios si conservar, precisar o fusionar; no eliminar automáticamente.', 'The analyst decides with users whether to retain, clarify, or merge; do not remove automatically.')
      }
    },
    w2u_management_information: {
      id: 'w2u_management_information', label: t('Generar información para gestión', 'Generate management information'), layer: 'deepening', candidate: true,
      what: t('Preparar información que responda a preguntas de usuarios responsables de gestión.', 'Prepare information answering questions from users responsible for management.'),
      why: t('Conectaría datos y análisis con un uso organizacional concreto.', 'Would connect data and analysis to a specific organizational use.'),
      question: t('¿Quién necesita qué información para tomar qué decisión?', 'Who needs which information to make which decision?'),
      example: t('Ejemplo ilustrativo: preparar un resumen de costos e intervenciones para una revisión acordada con el destinatario.', 'Illustrative example: prepare a cost and intervention summary for a review agreed with its recipient.'),
      analogy: t('Preparar un informe para una pregunta concreta, no imprimir todo el archivo.', 'Preparing a report for a specific question rather than printing the whole archive.'),
      related: ['w2u_analysis', 'w2u_analysis_costs', 'w2u_analysis_history', 'w2u_requirements'],
      notConfuse: t('Generar información no significa decidir por la gerencia ni elegir ahora un formato físico o una herramienta.', 'Generating information does not mean deciding for management or choosing a physical format or tool now.'),
      requiredInformation: t('Por confirmar: destinatario, decisión, contenido, origen de datos, frecuencia y nivel de detalle.', 'To confirm: recipient, decision, content, data origin, frequency, and detail level.'),
      evidence: t('Necesidad supuesta: recibir información útil para gestión. Requisito candidato: producir una salida pertinente. Evidencia pendiente: solicitudes de destinatarios y ejemplos de información necesaria.', 'Assumed need: receive useful management information. Candidate requirement: produce a relevant output. Pending evidence: recipient requests and examples of needed information.'),
      sources: ['w2u_src_nasa_decomposition'],
      ai: {
        connection: t('Candidata enlazada a requisitos de salida.', 'Candidate linked to output requirements.'),
        does: t('Relaciona contenido propuesto con decisiones y destinatarios.', 'Links proposed content to decisions and recipients.'),
        changes: t('Permite detectar salidas sin propósito definido.', 'Allows outputs without a defined purpose to be detected.'),
        validate: t('Confirmar utilidad, contenido y acceso con los usuarios de la información.', 'Confirm usefulness, content, and access with information users.')
      }
    },

    w2u_ai_support: {
      id: 'w2u_ai_support', label: t('Apoyo de IA al análisis funcional', 'AI support for functional analysis'), layer: 'ai',
      what: t('Apoyo propuesto para organizar evidencia y capacidades candidatas bajo revisión del analista y los usuarios.', 'Proposed support for organizing evidence and candidate capabilities under analyst and user review.'),
      why: t('Puede facilitar la preparación del modelo sin decidir qué necesita la organización.', 'May ease model preparation without deciding what the organization needs.'),
      question: t('¿Qué propuesta aporta la IA y qué debe validar una persona?', 'What does AI propose, and what must a person validate?'),
      example: t('Ejemplo ilustrativo: organizar requisitos de historial, proponer funciones y señalar la posible duplicidad entre dos consultas.', 'Illustrative example: organize history requirements, propose functions, and flag possible duplication between two queries.'),
      analogy: t('Un ayudante ordena piezas sobre la mesa; el analista y los usuarios determinan si pertenecen al modelo.', 'A helper arranges pieces on the table; the analyst and users determine whether they belong in the model.'),
      related: ['w2u_facts', 'w2u_requirements', 'w2u_function', 'w2u_hierarchy', 'w2u_duplicates', 'w2u_coverage', 'w2u_traceability'],
      notConfuse: t('Un agrupamiento propuesto no es un modelo aprobado. El atlas describe usos de IA, no ejecuta automatizaciones ni aporta evidencia nueva del caso.', 'A proposed grouping is not an approved model. The atlas describes AI uses; it does not run automations or supply new case evidence.'),
      sources: ['w2u_src_nist_genai'],
      ai: {
        connection: t('Un único nodo de apoyo se conecta a siete puntos concretos del análisis.', 'One support node connects to seven specific analysis points.'),
        does: t('Sintetiza, agrupa, propone candidatos, descompone, detecta duplicidades, comprueba cobertura y sugiere vínculos.', 'Synthesizes, groups, proposes candidates, decomposes, detects duplicates, checks coverage, and suggests links.'),
        changes: t('Ofrece un borrador con preguntas y relaciones para discutir.', 'Offers a draft with questions and relationships to discuss.'),
        validate: t('El analista y los usuarios confirman sustento y significado antes de aceptar la estructura.', 'The analyst and users confirm support and meaning before accepting the structure.')
      }
    },
    w2u_ai_facts: {
      id: 'w2u_ai_facts', label: t('IA → hechos: sintetizar', 'AI → facts: synthesize'), layer: 'ai',
      what: t('Síntesis propuesta de registros disponibles, con referencias y distinción entre evidencia y supuesto.', 'A proposed synthesis of available records, with references and a distinction between evidence and assumption.'),
      why: t('Hace legible el material previo sin convertir sus vacíos en afirmaciones.', 'Makes prior material readable without turning its gaps into claims.'),
      question: t('¿Qué frase del original respalda esta síntesis?', 'Which statement in the original supports this synthesis?'),
      example: t('Ejemplo ilustrativo: resumir una necesidad de historial solo si aparece en un registro; si no, marcarla como hipótesis.', 'Illustrative example: summarize a need for history only if it appears in a record; otherwise mark it as a hypothesis.'),
      analogy: t('Un resumen con marcadores permite regresar a las páginas originales.', 'A summary with bookmarks allows a return to the original pages.'),
      related: ['w2u_ai_support', 'w2u_source', 'w2u_facts', 'w2u_requirements'],
      notConfuse: t('Repetir una afirmación no la verifica. La IA puede omitir matices o inventar citas.', 'Repeating a claim does not verify it. AI may omit nuance or invent citations.'),
      sources: ['w2u_src_nist_genai'],
      ai: {
        connection: t('Origen: apoyo de IA. Destino: hechos y evidencia.', 'Source: AI support. Destination: facts and evidence.'),
        does: t('Ordena afirmaciones y conserva origen, contexto y contradicciones.', 'Organizes claims while retaining origin, context, and contradictions.'),
        changes: t('Reduce la lectura inicial necesaria para localizar asuntos relevantes.', 'Reduces initial reading needed to locate relevant matters.'),
        validate: t('Cotejar citas y omisiones con originales; no hay hechos AREV confirmados por este resumen.', 'Check citations and omissions against originals; this summary confirms no AREV facts.')
      }
    },
    w2u_ai_requirements: {
      id: 'w2u_ai_requirements', label: t('IA → requisitos: agrupar', 'AI → requirements: group'), layer: 'ai',
      what: t('Agrupación propuesta de requisitos con capacidades relacionadas, manteniendo las obligaciones particulares.', 'Proposed grouping of requirements with related capabilities while retaining individual obligations.'),
      why: t('Ayuda a pasar de enunciados dispersos a temas funcionales comprensibles.', 'Helps move from scattered statements to understandable functional themes.'),
      question: t('¿Qué comparten estos requisitos y qué diferencia debe conservarse?', 'What do these requirements share, and which differences must remain?'),
      example: t('Ejemplo ilustrativo: agrupar consultas de reparación sin perder cuál exige autorización o un filtro particular.', 'Illustrative example: group repair queries without losing which requires authorization or a particular filter.'),
      analogy: t('Clasificar notas por tema conserva cada nota, no las reemplaza por una frase vaga.', 'Sorting notes by topic preserves each note rather than replacing them with one vague phrase.'),
      related: ['w2u_ai_support', 'w2u_requirements', 'w2u_function', 'w2u_coverage'],
      notConfuse: t('Agrupar no es aprobar, reescribir obligaciones ni eliminar requisitos parecidos.', 'Grouping is not approving, rewriting obligations, or removing similar requirements.'),
      sources: ['w2u_src_nasa_requirements', 'w2u_src_nist_genai'],
      ai: {
        connection: t('Origen: apoyo de IA. Destino: requisitos.', 'Source: AI support. Destination: requirements.'),
        does: t('Propone categorías y conserva identificadores, condiciones y excepciones.', 'Proposes categories and retains identifiers, conditions, and exceptions.'),
        changes: t('Hace más fácil reconocer familias de capacidades.', 'Makes families of capabilities easier to recognize.'),
        validate: t('El analista contrasta el grupo con todos sus enunciados y consulta ambigüedades con usuarios.', 'The analyst checks the group against all its statements and discusses ambiguities with users.')
      }
    },
    w2u_ai_functions: {
      id: 'w2u_ai_functions', label: t('IA → funciones: proponer candidatos', 'AI → functions: propose candidates'), layer: 'ai',
      what: t('La IA puede analizar requisitos relacionados y proponer funciones candidatas que parezcan representar capacidades comunes.', 'AI can analyze related requirements and propose candidate functions that appear to represent shared capabilities.'),
      why: t('Da nombres discutibles a capacidades comunes sin darlas por aprobadas.', 'Gives shared capabilities names for discussion without treating them as approved.'),
      question: t('¿Cada función propuesta representa una capacidad respaldada?', 'Does each proposed function represent a supported capability?'),
      example: t('Ejemplo ilustrativo del pedido: registrar reparación, ver historial y actualizar estado podrían agruparse bajo gestionar reparaciones. Es otra agrupación candidata, no añade hojas al árbol AREV.', 'Illustrative example from the request: record repair, view history, and update status could group under manage repairs. This is another candidate grouping, not additional leaves in the AREV tree.'),
      analogy: t('Poner título a un conjunto de notas ayuda a entenderlo; no cambia lo que dicen.', 'Giving a set of notes a title helps understanding without changing what they say.'),
      related: ['w2u_ai_support', 'w2u_function', 'w2u_requirements', 'w2u_repairs'],
      notConfuse: t('AGRUPAMIENTO PROPUESTO ≠ MODELO FUNCIONAL APROBADO. No completar una familia con capacidades que nadie solicitó.', 'PROPOSED GROUPING ≠ APPROVED FUNCTIONAL MODEL. Do not complete a family with capabilities nobody requested.'),
      sources: ['w2u_src_nasa_decomposition', 'w2u_src_nist_genai'],
      ai: {
        connection: t('Origen: apoyo de IA. Destino: funciones.', 'Source: AI support. Destination: functions.'),
        does: t('Propone nombres y explica qué requisitos representarían.', 'Proposes names and explains which requirements they would represent.'),
        changes: t('Convierte grupos de requisitos en capacidades candidatas visibles.', 'Turns requirement groups into visible candidate capabilities.'),
        validate: t('Analista y usuarios revisan propósito, límites y enlaces; descartan funciones sin justificación.', 'The analyst and users review purpose, boundaries, and links; they discard unjustified functions.')
      }
    },
    w2u_ai_hierarchy: {
      id: 'w2u_ai_hierarchy', label: t('IA → jerarquía: descomponer', 'AI → hierarchy: decompose'), layer: 'ai',
      what: t('La IA puede sugerir cómo dividir una función amplia en subfunciones más específicas.', 'AI can suggest how to divide a broad function into more specific subfunctions.'),
      why: t('Ofrece alternativas de detalle que pueden contrastarse con el propósito superior.', 'Offers alternatives for detail that can be checked against the parent purpose.'),
      question: t('¿Las subfunciones explican la función superior sin introducir trabajo ajeno?', 'Do the subfunctions explain the parent without introducing unrelated work?'),
      example: t('Ejemplo ilustrativo: gestionar mantenimiento → registrar, consultar y actualizar; analista y usuarios validan si esa división responde a requisitos.', 'Illustrative example: manage maintenance → record, consult, and update; the analyst and users validate whether this division answers requirements.'),
      analogy: t('Un zoom revela partes pertinentes; aumentar detalle no autoriza inventar nuevas partes.', 'Zooming reveals relevant parts; increasing detail does not authorize inventing new parts.'),
      related: ['w2u_ai_support', 'w2u_hierarchy', 'w2u_decomposition', 'w2u_subfunctions', 'w2u_maintenance'],
      notConfuse: t('Una estructura simétrica no prueba corrección. Tres hijas por rama es la forma ilustrativa solicitada, no una regla universal.', 'A symmetric structure does not prove correctness. Three children per branch is the requested illustrative shape, not a universal rule.'),
      sources: ['w2u_src_nasa_decomposition', 'w2u_src_nist_genai'],
      ai: {
        connection: t('Origen: apoyo de IA. Destino: jerarquía de funciones y sus subfunciones.', 'Source: AI support. Destination: function hierarchy and its subfunctions.'),
        does: t('Sugiere relaciones madre-hija y motivos de pertenencia.', 'Suggests parent-child relationships and membership reasons.'),
        changes: t('Permite recorrer niveles y revisar el detalle progresivamente.', 'Allows levels to be traversed and detail to be reviewed progressively.'),
        validate: t('El analista y los usuarios confirman contribución, necesidad y nivel de análisis; no confundir enlaces con secuencia.', 'The analyst and users confirm contribution, need, and analysis level; do not confuse links with sequence.')
      }
    },
    w2u_ai_duplicates: {
      id: 'w2u_ai_duplicates', label: t('IA → duplicidades: detectar', 'AI → duplicates: detect'), layer: 'ai',
      what: t('La IA puede detectar funciones que parecen duplicadas o semánticamente muy similares.', 'AI can detect functions that appear duplicated or semantically very similar.'),
      why: t('Dirige la conversación hacia posibles solapamientos del modelo.', 'Directs discussion toward possible model overlaps.'),
      question: t('¿Es la misma capacidad con dos nombres o dos capacidades con un nombre parecido?', 'Is this one capability with two names or two capabilities with similar names?'),
      example: t('Ejemplo ilustrativo: «Ver historial del vehículo» y «Consultar historial del vehículo» pueden ser equivalentes; también deben compararse los dos historiales del árbol.', 'Illustrative example: “View vehicle history” and “Consult vehicle history” may be equivalent; the tree’s two history nodes should also be compared.'),
      analogy: t('Un aviso de coincidencia pide comparar, no borrar.', 'A match alert asks for comparison, not deletion.'),
      related: ['w2u_ai_support', 'w2u_duplicates', 'w2u_maintenance_history', 'w2u_analysis_history'],
      notConfuse: t('La similitud semántica no confirma igualdad de usuarios, datos o propósito.', 'Semantic similarity does not confirm identical users, data, or purpose.'),
      sources: ['w2u_src_nasa_requirements', 'w2u_src_nist_genai'],
      ai: {
        connection: t('Origen: apoyo de IA. Destino: posibles duplicidades.', 'Source: AI support. Destination: possible duplicates.'),
        does: t('Marca pares candidatos y explica el parecido observado.', 'Flags candidate pairs and explains the observed similarity.'),
        changes: t('Reduce el esfuerzo de localizar nombres ambiguos.', 'Reduces the effort needed to locate ambiguous names.'),
        validate: t('Comparar requisitos, propósito y alcance con usuarios antes de renombrar o fusionar nodos.', 'Compare requirements, purpose, and scope with users before renaming or merging nodes.')
      }
    },
    w2u_ai_coverage: {
      id: 'w2u_ai_coverage', label: t('IA → cobertura: comprobar', 'AI → coverage: check'), layer: 'ai',
      what: t('La IA puede comparar requisitos con funciones para detectar posibles requisitos que todavía no están representados en el FDD.', 'AI can compare requirements with functions to detect possible requirements not yet represented in the FDD.'),
      why: t('Señala preguntas de omisión antes de aceptar el modelo.', 'Flags omission questions before the model is accepted.'),
      question: t('¿Qué requisito no tiene una representación explicada?', 'Which requirement lacks an explained representation?'),
      example: t('Ejemplo ilustrativo: marcar «requisito sin mapear» si una consulta solicitada no tiene función asociada, manteniendo pendiente la revisión del analista.', 'Illustrative example: flag “unmapped requirement” if a requested query lacks an associated function, keeping analyst review pending.'),
      analogy: t('Una marca de revisión indica dónde mirar; no emite un veredicto.', 'A review mark indicates where to look; it does not issue a verdict.'),
      related: ['w2u_ai_support', 'w2u_coverage', 'w2u_requirements', 'w2u_traceability'],
      notConfuse: t('ALERTA DE IA ≠ ERROR CONFIRMADO DEL MODELO. No todo requisito exige una nueva rama; algunos restringen varias funciones.', 'AI FLAG ≠ CONFIRMED MODELING ERROR. Not every requirement needs a new branch; some constrain several functions.'),
      sources: ['w2u_src_nasa_traceability', 'w2u_src_nist_genai'],
      ai: {
        connection: t('Origen: apoyo de IA. Destino: cobertura de requisitos.', 'Source: AI support. Destination: requirements coverage.'),
        does: t('Contrasta requisitos suministrados y vínculos declarados, señalando ausencias o relaciones débiles.', 'Compares supplied requirements and declared links, flagging missing or weak relationships.'),
        changes: t('Prepara una lista de asuntos para revisar con usuarios.', 'Prepares a list of matters to review with users.'),
        validate: t('Revisar vigencia y tipo de requisito, suficiencia del enlace y restricciones transversales; sin requisitos completos no declarar cobertura completa.', 'Review requirement currency and type, link sufficiency, and cross-cutting constraints; without complete requirements, do not declare complete coverage.')
      }
    },
    w2u_ai_traceability: {
      id: 'w2u_ai_traceability', label: t('IA → trazabilidad: vincular', 'AI → traceability: link'), layer: 'ai',
      what: t('La IA puede ayudar a mantener vínculos entre hechos, requisitos y funciones.', 'AI can help maintain links between facts, requirements, and functions.'),
      why: t('Permite discutir el origen de una capacidad y los efectos de cambiarla.', 'Allows a capability’s origin and the effects of changing it to be discussed.'),
      question: t('¿Puede revisarse cada enlace hasta una fuente identificable?', 'Can each link be reviewed back to an identifiable source?'),
      example: t('Cadena ilustrativa: fuente pendiente → necesidad de historial por confirmar → requisito candidato de consulta autorizada → consultar historial de mantenimiento.', 'Illustrative chain: pending source → history need to confirm → candidate authorized-query requirement → consult maintenance history.'),
      analogy: t('Una cadena solo es tan revisable como el sustento de cada eslabón.', 'A chain is only as reviewable as the support for each link.'),
      related: ['w2u_ai_support', 'w2u_source', 'w2u_facts', 'w2u_requirements', 'w2u_function', 'w2u_traceability'],
      notConfuse: t('Asociar textos parecidos no demuestra derivación. Una referencia académica no sustituye evidencia del caso.', 'Associating similar texts does not establish derivation. An academic reference does not replace case evidence.'),
      sources: ['w2u_src_nasa_traceability', 'w2u_src_nist_genai'],
      ai: {
        connection: t('Origen: apoyo de IA. Destino: trazabilidad; cadena fuente → hecho → requisito → función.', 'Source: AI support. Destination: traceability; chain source → fact → requirement → function.'),
        does: t('Propone enlaces con explicación y conserva identificadores y referencias proporcionadas.', 'Proposes explained links and retains supplied identifiers and references.'),
        changes: t('Facilita encontrar nodos huérfanos y revisar cambios de requisitos.', 'Makes orphan nodes easier to find and requirement changes easier to review.'),
        validate: t('El analista coteja originales, versiones y sentido de cada vínculo; mantiene como pendientes los que carecen de evidencia.', 'The analyst checks originals, versions, and each link’s meaning; links lacking evidence remain pending.')
      }
    }
  });

  db.diagrams['07'] = {
    id: '07',
    title: t('¿Qué debe hacer el sistema?', 'What must the system do?'),
    transition: t('Ya reunimos hechos y empezamos a definir requisitos.\n\nPero una lista de requisitos todavía puede ser difícil de comprender.\n\n¿Cómo organizamos visualmente lo que el sistema debe hacer?', 'We have gathered facts and begun defining requirements.\n\nBut a list of requirements can still be difficult to understand.\n\nHow do we organize what the system must do?'),
    subtitle: t('Diagrama de descomposición funcional · FDD', 'Functional decomposition diagram · FDD'),
    definition: t('Un FDD organiza una función amplia en funciones progresivamente más pequeñas para comprender qué debe hacer el sistema sin entrar todavía en el diseño físico de la solución.', 'An FDD organizes a broad function into progressively smaller functions to understand what the system must do without yet entering the physical design of the solution.'),
    root: 'w2u_arev',
    candidateModel: true,
    candidateLabel: t('Modelo ilustrativo / candidato', 'Illustrative requirement model / candidate'),
    candidateFunctionLabel: t('Función candidata', 'Candidate function'),
    requiredInformationLabel: t('Información necesaria por confirmar', 'Required information to confirm'),
    evidenceLabel: t('Necesidad, requisito y evidencia pendiente', 'Need, requirement, and pending evidence'),
    tree: {
      concept: 'w2u_arev',
      children: [
        { concept: 'w2u_vehicles', children: [
          { concept: 'w2u_vehicle_register', children: [] },
          { concept: 'w2u_vehicle_consult', children: [] },
          { concept: 'w2u_vehicle_update', children: [] }
        ] },
        { concept: 'w2u_maintenance', children: [
          { concept: 'w2u_maintenance_register', children: [] },
          { concept: 'w2u_maintenance_history', children: [] },
          { concept: 'w2u_maintenance_status', children: [] }
        ] },
        { concept: 'w2u_repairs', children: [
          { concept: 'w2u_repair_register', children: [] },
          { concept: 'w2u_repair_costs', children: [] },
          { concept: 'w2u_repair_consult', children: [] }
        ] },
        { concept: 'w2u_analysis', children: [
          { concept: 'w2u_analysis_costs', children: [] },
          { concept: 'w2u_analysis_history', children: [] },
          { concept: 'w2u_management_information', children: [] }
        ] }
      ]
    },
    levels: [
      { id: 'w2u_level0', label: t('Nivel 0 · Función global', 'Level 0 · Overall function'), nodes: ['w2u_arev'] },
      { id: 'w2u_level1', label: t('Nivel 1 · Funciones principales', 'Level 1 · Major functions'), nodes: ['w2u_vehicles', 'w2u_maintenance', 'w2u_repairs', 'w2u_analysis'] },
      { id: 'w2u_level2', label: t('Nivel 2 · Subfunciones', 'Level 2 · Subfunctions'), nodes: ['w2u_vehicle_register', 'w2u_vehicle_consult', 'w2u_vehicle_update', 'w2u_maintenance_register', 'w2u_maintenance_history', 'w2u_maintenance_status', 'w2u_repair_register', 'w2u_repair_costs', 'w2u_repair_consult', 'w2u_analysis_costs', 'w2u_analysis_history', 'w2u_management_information'] }
    ],
    treeNote: t('Cada enlace significa «se descompone en». Los niveles indican detalle funcional, no secuencia temporal ni niveles de DFD. Analista y usuarios validan las candidatas.', 'Each link means “decomposes into.” Levels indicate functional detail, not time sequence or DFD levels. The analyst and users validate candidates.'),
    groups: [
      { label: t('Comprender la estructura funcional', 'Understand the functional structure'), nodes: ['w2u_fdd', 'w2u_function', 'w2u_decomposition', 'w2u_hierarchy', 'w2u_subfunctions'] },
      { label: t('Justificar las funciones', 'Justify functions'), nodes: ['w2u_source', 'w2u_facts', 'w2u_requirements', 'w2u_traceability'] },
      { label: t('Revisar el modelo candidato', 'Review the candidate model'), nodes: ['w2u_duplicates', 'w2u_coverage'] },
      { label: t('Distinguir modelos y diseño', 'Distinguish models and design'), nodes: ['w2u_wbs', 'w2u_processflow', 'w2u_dfd', 'w2u_physical'] }
    ],
    comparison: {
      criteria: [
        { id: 'w2u_cmp_question', label: t('Pregunta principal', 'Main question') },
        { id: 'w2u_cmp_focus', label: t('Qué representa', 'What it represents') },
        { id: 'w2u_cmp_links', label: t('Qué significan sus conexiones', 'What its connections mean') },
        { id: 'w2u_cmp_example', label: t('Ejemplo ilustrativo', 'Illustrative example') },
        { id: 'w2u_cmp_limit', label: t('Qué no debe inferirse', 'What must not be inferred') }
      ],
      rows: [
        { concept: 'w2u_fdd', values: {
          w2u_cmp_question: t('¿QUÉ FUNCIONES DEBE REALIZAR EL SISTEMA?', 'WHAT FUNCTIONS MUST THE SYSTEM PERFORM?'),
          w2u_cmp_focus: t('Análisis del sistema: capacidades y subfunciones.', 'System analysis: capabilities and subfunctions.'),
          w2u_cmp_links: t('La función superior se descompone en funciones menores.', 'The parent function decomposes into smaller functions.'),
          w2u_cmp_example: t('Gestionar mantenimiento contiene consultar historial.', 'Manage maintenance contains consult history.'),
          w2u_cmp_limit: t('No determina orden temporal, datos intercambiados ni tecnología física.', 'Does not determine time order, exchanged data, or physical technology.')
        } },
        { concept: 'w2u_wbs', values: {
          w2u_cmp_question: t('¿QUÉ TRABAJO DEBE HACER EL PROYECTO?', 'WHAT PROJECT WORK MUST BE DONE?'),
          w2u_cmp_focus: t('Gestión del proyecto: alcance del trabajo y entregables.', 'Project management: work scope and deliverables.'),
          w2u_cmp_links: t('Un componente de trabajo se divide en componentes menores.', 'A work component divides into smaller components.'),
          w2u_cmp_example: t('Preparar la especificación de consulta de historial.', 'Prepare the history-query specification.'),
          w2u_cmp_limit: t('No describe automáticamente capacidades del sistema ni orden de ejecución.', 'Does not automatically describe system capabilities or execution order.')
        } },
        { concept: 'w2u_processflow', values: {
          w2u_cmp_question: t('¿CÓMO AVANZA EL TRABAJO?', 'HOW DOES WORK MOVE?'),
          w2u_cmp_focus: t('Pasos, decisiones y recorridos de un proceso.', 'Steps, decisions, and paths within a process.'),
          w2u_cmp_links: t('Secuencia o condiciones para pasar entre pasos.', 'Sequence or conditions for moving between steps.'),
          w2u_cmp_example: t('Recibir solicitud → revisar → decidir tratamiento.', 'Receive request → review → decide handling.'),
          w2u_cmp_limit: t('No es un árbol de capacidades ni define por sí solo el flujo detallado de datos.', 'Is not a capability tree and does not by itself define detailed data flow.')
        } },
        { concept: 'w2u_dfd', values: {
          w2u_cmp_question: t('¿CÓMO SE MUEVEN LOS DATOS?', 'HOW DOES DATA MOVE?'),
          w2u_cmp_focus: t('Datos que circulan entre procesos, almacenes y entidades externas.', 'Data moving between processes, stores, and external entities.'),
          w2u_cmp_links: t('Intercambios de datos identificados.', 'Identified data exchanges.'),
          w2u_cmp_example: t('Criterios de consulta entran; antecedentes consultados salen.', 'Query criteria enter; retrieved history leaves.'),
          w2u_cmp_limit: t('No es cronograma ni arquitectura física; sus niveles no equivalen a los del FDD.', 'Is neither a schedule nor a physical architecture; its levels do not equal FDD levels.')
        } }
      ]
    },
    aiNode: 'w2u_ai_support',
    aiTitle: t('Apoyo de IA al análisis funcional', 'AI support for functional analysis'),
    aiMasterQuestion: t('¿Cómo puede la IA ayudar a organizar funciones sin inventar capacidades que nadie ha solicitado?', 'How can AI help organize functions without inventing capabilities that nobody requested?'),
    aiMessage: t('La IA puede proponer la estructura. Los requisitos y la evidencia deben justificarla.', 'AI can propose the structure. Requirements and evidence must justify it.'),
    aiRelationships: [
      { id: 'w2u_rel_facts', from: 'w2u_ai_support', to: 'w2u_facts', action: t('Sintetizar', 'Synthesize'), concept: 'w2u_ai_facts', value: t('Afirmaciones con fuente y supuestos claramente separados.', 'Sourced claims and clearly distinguished assumptions.') },
      { id: 'w2u_rel_requirements', from: 'w2u_ai_support', to: 'w2u_requirements', action: t('Agrupar', 'Group'), concept: 'w2u_ai_requirements', value: t('Grupos que conservan requisitos, condiciones y excepciones.', 'Groups retaining requirements, conditions, and exceptions.') },
      { id: 'w2u_rel_functions', from: 'w2u_ai_support', to: 'w2u_function', action: t('Proponer candidatos', 'Propose candidates'), concept: 'w2u_ai_functions', value: t('Capacidades propuestas con requisitos por revisar.', 'Proposed capabilities with requirements to review.') },
      { id: 'w2u_rel_hierarchy', from: 'w2u_ai_support', to: 'w2u_hierarchy', action: t('Descomponer', 'Decompose'), concept: 'w2u_ai_hierarchy', value: t('Funciones y subfunciones cuya pertenencia validan analista y usuarios.', 'Functions and subfunctions whose membership the analyst and users validate.') },
      { id: 'w2u_rel_duplicates', from: 'w2u_ai_support', to: 'w2u_duplicates', action: t('Detectar', 'Detect'), concept: 'w2u_ai_duplicates', value: t('Posibles solapamientos, sin fusionar automáticamente.', 'Possible overlaps, without automatic merging.') },
      { id: 'w2u_rel_coverage', from: 'w2u_ai_support', to: 'w2u_coverage', action: t('Comprobar', 'Check'), concept: 'w2u_ai_coverage', value: t('Requisitos sin mapear que requieren interpretación humana.', 'Unmapped requirements requiring human interpretation.') },
      { id: 'w2u_rel_traceability', from: 'w2u_ai_support', to: 'w2u_traceability', action: t('Vincular', 'Link'), concept: 'w2u_ai_traceability', value: t('Enlaces propuestos cuyo sustento debe cotejarse.', 'Proposed links whose support must be checked.') }
    ],
    aiFlow: ['w2u_source', 'w2u_facts', 'w2u_requirements', 'w2u_function'],
    aiFlowTitle: t('Fuente → hecho → requisito → función', 'Source → fact → requirement → function'),
    aiFlowNote: t('Extensión AI-first: conservar el origen y revisar cada vínculo. Los ejemplos AREV son candidatos; la cadena no convierte supuestos en hechos verificados.', 'AI-first extension: retain the origin and review every link. AREV examples are candidates; the chain does not turn assumptions into verified facts.'),
    defaultMode: 'base',
    aiControl: t('Aplicar capa IA', 'Apply AI lens'),
    layerLabels: {
      foundation: t('CST212 · Fundamento académico', 'CST212 foundation'),
      deepening: t('Profundización académica', 'Academic deepening'),
      ai: t('Extensión AI-first', 'AI-first extension')
    },
    sourceNote: t('Fundamento: conceptos y frases del tramo D06 → D07 suministrado por el usuario. NASA y SEBoK apoyan el método como referencias externas, no como materiales atribuidos a Tiffin ni evidencia de AREV. Las funciones candidatas son una ilustración del pedido. NIST orienta la revisión de salidas de IA; no demuestra la eficacia de estas aplicaciones pedagógicas.', 'Foundation: concepts and wording in the D06 → D07 section supplied by the user. NASA and SEBoK support the method as external references, not as materials attributed to Tiffin or AREV evidence. Candidate functions illustrate the request. NIST guides review of AI outputs; it does not establish the effectiveness of these pedagogical applications.'),
    exampleNote: t('Modelo ilustrativo / candidato de AREV. Necesidades, datos, reglas y requisitos propuestos necesitan evidencia del caso y validación de usuarios. La comparación con DFD es introductoria y no implementa la Semana 3.', 'Illustrative requirement model / candidate for AREV. Proposed needs, data, rules, and requirements need case evidence and user validation. The DFD comparison is introductory and does not implement Week 3.'),
    sources: ['w2u_src_nasa_decomposition', 'w2u_src_nasa_requirements', 'w2u_src_nasa_traceability', 'w2u_src_nasa_wbs', 'w2u_src_sebok_logical', 'w2u_src_nist_genai']
  };
})();
