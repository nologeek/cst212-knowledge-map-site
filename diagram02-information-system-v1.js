(function () {
  "use strict";

  var FOUNDATION_SOURCE = "CST212 FOUNDATION · CST212 Week 1 learning materials · SOURCE_METADATA_PENDING";
  var DEEPENING_SOURCE = "ACADEMIC DEEPENING · SOURCE_METADATA_PENDING";
  var AI_SOURCE = "AI-FIRST EXTENSION · SOURCE_METADATA_PENDING";
  var currentDetail = null;

  function B(es, en) { return { es: es, en: en }; }
  function isEnglish() {
    var lang = (document.documentElement.lang || "").toLowerCase();
    if (lang.indexOf("en") === 0) return true;
    return !!document.querySelector('[data-lang="en"].is-active, [data-lang="en"][aria-pressed="true"], [data-language="en"].is-active');
  }
  function T(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return isEnglish() ? (value.en || value.es || "") : (value.es || value.en || "");
  }

  var details = {
    system: {
      title: B("Sistema de información", "Information system"), layer: "foundation",
      what: B("Un sistema de información integra distintos componentes para apoyar procesos, operaciones y objetivos de una organización. El software puede ser una parte importante, pero no constituye por sí solo todo el sistema.", "An information system integrates different components to support an organization's processes, operations and objectives. Software may be an important part, but by itself it does not constitute the whole system."),
      why: B("Los componentes deben trabajar de manera coordinada para producir el resultado esperado.", "The components must work together in a coordinated way to produce the expected outcome."),
      question: B("¿Qué necesita funcionar en conjunto para que el sistema produzca el resultado esperado?", "What needs to work together for the system to produce the expected outcome?"),
      examples: [
        [B("Negocios", "Business"), B("Sistema de reservas. Personas: cliente y empleado. Proceso: solicitud → verificar → reservar. Información: cliente + fecha + disponibilidad. Reglas: no se puede reservar dos veces el mismo recurso. Recursos: kayaks, personal e instalaciones. Tecnología: base de datos y aplicación. Resultado: reserva válida. Si la aplicación funciona perfectamente pero la información de disponibilidad es incorrecta, el sistema no tuvo éxito.", "Reservation system. People: customer and employee. Process: request → verify → reserve. Information: customer + date + availability. Rules: the same resource cannot be reserved twice. Resources: kayaks, staff and facilities. Technology: database and application. Outcome: valid reservation. If the application works perfectly but availability information is wrong, the system did not succeed.")],
        [B("Educación", "Education"), B("Entorno de aprendizaje. Personas: estudiantes y docentes. Procesos: enseñanza y evaluación. Información: contenido, retroalimentación y calificaciones. Reglas: políticas académicas. Tecnología: LMS, dispositivos y conectividad. Resultado: experiencia de aprendizaje. Que el LMS funcione no significa automáticamente que el estudiante esté aprendiendo.", "Learning environment. People: students and teachers. Processes: teaching and assessment. Information: content, feedback and grades. Rules: academic policies. Technology: LMS, devices and connectivity. Outcome: learning experience. A working LMS does not automatically mean the student is learning.")],
        [B("Biología · analogía estructural", "Biology · structural analogy"), B("CORAZÓN ≠ SISTEMA CIRCULATORIO. El corazón es un componente crítico, pero el sistema circulatorio también contiene sangre, vasos sanguíneos, regulación e intercambio.", "HEART ≠ CIRCULATORY SYSTEM. The heart is a critical component, but the circulatory system also contains blood, blood vessels, regulation and exchange.")],
        [B("Música", "Music"), B("Una presentación en vivo integra músicos, coordinación, partitura, reglas, instrumentos y tecnología de audio. El mejor sistema de audio no garantiza una buena interpretación.", "A live performance integrates musicians, coordination, score, rules, instruments and audio technology. The best audio system does not guarantee a good performance.")]
      ],
      related: B("Personas · Procesos · Información · Recursos · Tecnología · Reglas · Propósito · Resultado", "People · Processes · Information · Resources · Technology · Rules · Purpose · Outcome"),
      confuse: B("Software.", "Software."),
      important: B("SOFTWARE ≠ SISTEMA DE INFORMACIÓN", "SOFTWARE ≠ INFORMATION SYSTEM")
    },
    purpose: {
      title: B("Propósito organizacional", "Organizational purpose"), layer: "foundation",
      what: B("Los sistemas de información existen para apoyar actividades, procesos, decisiones u objetivos de una organización.", "Information systems exist to support an organization's activities, processes, decisions or objectives."),
      question: B("¿Para qué existe este sistema de información?", "Why does this information system exist?"),
      confuse: B("La tecnología como propósito del sistema.", "Technology as the purpose of the system.")
    },
    people: {
      title: B("Personas", "People"), layer: "foundation",
      what: B("Las personas que utilizan, administran, alimentan, supervisan o reciben resultados del sistema.", "The people who use, manage, feed, supervise or receive results from the system."),
      why: B("Las necesidades, decisiones y capacidades de las personas influyen en cómo funciona el sistema.", "People's needs, decisions and capabilities influence how the system works."),
      question: B("¿Quién participa y quién utiliza sus resultados?", "Who participates and who uses its results?"),
      examples: [[B("Ejemplos", "Examples"), B("Clientes, empleados, gerentes y proveedores.", "Customers, employees, managers and suppliers.")]],
      related: B("Procesos · Información · Resultado del sistema", "Processes · Information · System outcome")
    },
    processes: {
      title: B("Procesos", "Processes"), layer: "foundation",
      what: B("Actividades relacionadas mediante las cuales el sistema ayuda a realizar el trabajo de la organización.", "Related activities through which the system helps carry out the organization's work."),
      question: B("¿Qué trabajo debe realizarse y cómo se conectan sus actividades?", "What work must be performed and how are its activities connected?"),
      examples: [[B("Ejemplo", "Example"), B("Solicitud → validación → procesamiento → resultado.", "Request → validation → processing → result.")]],
      related: B("Diagrama 03 · Procesos de negocio", "Diagram 03 · Business processes")
    },
    information: {
      title: B("Información", "Information"), layer: "foundation",
      what: B("Datos organizados y utilizados para operar, comunicar o tomar decisiones.", "Data organized and used to operate, communicate or make decisions."),
      question: B("¿Qué necesita saber el sistema para funcionar?", "What does the system need to know to operate?"),
      examples: [[B("Ejemplo", "Example"), B("Cliente + fecha de reserva + disponibilidad del recurso → información de reserva utilizable.", "Customer + reservation date + resource availability → usable reservation information.")]],
      related: B("Procesos · Personas · Resultado del sistema", "Processes · People · System outcome")
    },
    resources: {
      title: B("Recursos", "Resources"), layer: "foundation",
      what: B("Los medios humanos, físicos, financieros, informativos o técnicos necesarios para que el sistema opere.", "The human, physical, financial, informational or technical means required for the system to operate."),
      question: B("¿Qué necesita el sistema para funcionar?", "What does the system need to operate?"),
      related: B("Personas · Información · Tecnología", "People · Information · Technology")
    },
    technology: {
      title: B("Tecnología", "Technology"), layer: "foundation",
      what: B("Las herramientas técnicas utilizadas para apoyar las funciones del sistema.", "The technical tools used to support system functions."),
      question: B("¿Qué capacidades tecnológicas apoyan el sistema?", "What technological capabilities support the system?"),
      examples: [[B("Puede incluir", "May include"), B("Hardware, software, redes, infraestructura de datos y automatización.", "Hardware, software, networks, data infrastructure and automation.")]],
      related: B("Software · Sistema de información", "Software · Information system"),
      confuse: B("El sistema completo.", "The complete system."),
      important: B("La tecnología sirve al sistema. La tecnología no es automáticamente el sistema.", "Technology serves the system. Technology is not automatically the system."),
      aiLens: B("TECNOLOGÍA → PUEDE INCORPORAR → INTELIGENCIA ARTIFICIAL", "TECHNOLOGY → MAY INCORPORATE → ARTIFICIAL INTELLIGENCE")
    },
    software: {
      title: B("Software", "Software"), layer: "foundation",
      what: B("Conjunto de programas e instrucciones digitales diseñados para realizar funciones específicas.", "A set of digital programs and instructions designed to perform specific functions."),
      why: B("Puede registrar, procesar, comunicar o automatizar actividades, pero necesita integrarse con los demás componentes para producir valor.", "It can record, process, communicate or automate activities, but it must integrate with the other components to produce value."),
      metaphor: B("El software es un instrumento de la orquesta; no es toda la orquesta.", "Software is an instrument in the orchestra; it is not the whole orchestra."),
      examples: [[B("Negocios", "Business"), B("Aplicación de reservas. El sistema completo también incluye personas, información de disponibilidad, reglas de negocio, procesos, recursos, pagos y responsabilidades.", "Reservation application. The complete system also includes people, availability information, business rules, processes, resources, payments and responsibilities.")]],
      related: B("Tecnología · Sistema de información", "Technology · Information system"),
      confuse: B("El sistema de información completo.", "The complete information system."),
      important: B("SOFTWARE ≠ SISTEMA", "SOFTWARE ≠ SYSTEM")
    },
    rules: {
      title: B("Reglas", "Rules"), layer: "foundation",
      what: B("Condiciones que orientan o limitan cómo deben funcionar los procesos y componentes del sistema.", "Conditions that guide or limit how the system's processes and components must operate."),
      question: B("¿Qué está permitido, requerido o prohibido?", "What is allowed, required or prohibited?"),
      examples: [[B("Ejemplos", "Examples"), B("Reglas de disponibilidad, reglas de autorización, políticas de negocio y reglas de validación.", "Availability rules, authorization rules, business policies and validation rules.")]],
      related: B("Procesos · Personas · Tecnología", "Processes · People · Technology")
    },
    outcome: {
      title: B("Resultado del sistema", "System outcome"), layer: "foundation",
      what: B("El resultado producido cuando los componentes del sistema trabajan de manera coordinada.", "The result produced when the system's components work in a coordinated way."),
      why: B("Un componente puede funcionar individualmente mientras el sistema completo continúa produciendo un resultado deficiente.", "A component may work individually while the complete system continues to produce a poor outcome."),
      question: B("¿El sistema produjo el resultado esperado?", "Did the system produce the expected outcome?")
    },
    sociotechnical: {
      title: B("Perspectiva sociotécnica", "Sociotechnical perspective"), layer: "deepening",
      what: B("Una perspectiva sociotécnica ayuda a observar cómo los elementos humanos y organizacionales interactúan con los componentes técnicos de un sistema.", "A sociotechnical perspective helps us observe how human and organizational elements interact with a system's technical components."),
      why: B("Una solución puede funcionar técnicamente y aun así producir un mal resultado si los procesos, las personas, las reglas o las responsabilidades no funcionan adecuadamente.", "A solution may work technically and still produce a poor outcome if processes, people, rules or responsibilities do not work properly."),
      metaphor: B("Un automóvil técnicamente perfecto no garantiza un buen viaje. También importan el conductor, la carretera, las reglas y el destino.", "A technically perfect car does not guarantee a good journey. The driver, road, rules and destination also matter."),
      examples: [[B("Social / organizacional", "Social / organizational"), B("Personas, roles, políticas, cultura y responsabilidades.", "People, roles, policies, culture and responsibilities.")], [B("Técnico", "Technical"), B("Software, hardware, datos, redes e infraestructura.", "Software, hardware, data, networks and infrastructure.")]],
      related: B("Interacción → Resultado del sistema", "Interaction → System outcome"),
      important: B("ÉXITO TÉCNICO ≠ ÉXITO DEL SISTEMA", "TECHNICAL SUCCESS ≠ SYSTEM SUCCESS"),
      aiLens: B("AGREGAR IA PUEDE CAMBIAR EL SISTEMA SOCIOTÉCNICO, NO SOLO EL SOFTWARE.", "ADDING AI MAY CHANGE THE SOCIOTECHNICAL SYSTEM, NOT ONLY THE SOFTWARE.")
    },
    "technology-ai": {
      title: B("Tecnología → IA", "Technology → AI"), layer: "ai",
      what: B("La inteligencia artificial aparece como una posible capacidad tecnológica dentro del sistema.", "Artificial intelligence appears as a possible technological capability within the system."),
      question: B("¿Qué cambia cuando uno de los componentes tecnológicos incorpora inteligencia artificial?", "What changes when an information system incorporates AI as a technological capability?"),
      important: B("TECNOLOGÍA → PUEDE INCORPORAR → INTELIGENCIA ARTIFICIAL", "TECHNOLOGY → MAY INCORPORATE → ARTIFICIAL INTELLIGENCE")
    },
    "ai-information": {
      title: B("IA → Información", "AI → Information"), layer: "ai",
      what: B("La IA puede analizar grandes cantidades de información, clasificar contenido, identificar patrones o generar nuevas representaciones.", "AI can analyze large amounts of information, classify content, identify patterns or generate new representations."),
      question: B("¿Cómo puede la IA analizar o generar información?", "How can AI analyze or generate information?"),
      important: B("PATRÓN DETECTADO ≠ VERDAD CONFIRMADA", "DETECTED PATTERN ≠ CONFIRMED TRUTH")
    },
    "ai-processes": {
      title: B("IA → Procesos", "AI → Processes"), layer: "ai",
      what: B("La IA puede asistir o automatizar actividades específicas dentro de un proceso.", "AI can assist or automate specific activities within a process."),
      question: B("¿Cómo puede la IA asistir o automatizar partes de un proceso?", "How can AI assist or automate parts of a process?"),
      examples: [[B("Ejemplo", "Example"), B("Solicitud → clasificación con IA → flujo apropiado → una persona gestiona la excepción.", "Request → AI classification → appropriate workflow → a person handles the exception.")]],
      important: B("Automatizar un proceso malo no lo convierte en un buen proceso.", "Automating a bad process does not turn it into a good process.")
    },
    "ai-people": {
      title: B("IA → Personas y roles", "AI → People and roles"), layer: "ai",
      what: B("Incorporar IA puede cambiar qué tareas realizan las personas, qué capacidades necesitan y qué resultados deben revisar.", "Introducing AI may change which tasks people perform, which capabilities they need and which results they must review."),
      question: B("¿Cómo puede la IA ampliar la capacidad humana o cambiar el trabajo?", "How can AI augment human capability or change work?"),
      examples: [[B("Ejemplo", "Example"), B("500 registros → la IA identifica patrones candidatos → el analista valida → conclusión.", "500 records → AI identifies candidate patterns → analyst validates → conclusion.")]],
      important: B("Ampliar capacidad no significa transferir responsabilidad.", "Augmenting capability does not mean transferring responsibility.")
    },
    "rules-ai": {
      title: B("Reglas → IA", "Rules → AI"), layer: "ai",
      what: B("La IA debe operar dentro de límites definidos por el sistema.", "AI must operate within limits defined by the system."),
      question: B("¿Cómo gobiernan las reglas del sistema a la IA?", "How is AI governed by system rules?"),
      questions: [B("¿Qué puede hacer?", "What may it do?"), B("¿Qué no puede hacer?", "What may it not do?"), B("¿Qué datos puede utilizar?", "What data may it use?"), B("¿Cuándo requiere revisión?", "When does it require review?"), B("¿Quién responde por el resultado?", "Who is accountable for the result?")],
      important: B("LA IA TIENE CAPACIDADES. EL SISTEMA DEFINE LOS LÍMITES.", "AI HAS CAPABILITIES. THE SYSTEM DEFINES THE LIMITS.")
    }
  };

  var diagramConfig = {
    id: "diagram-02",
    baseState: { components: ["people", "processes", "information", "resources", "technology"], hierarchy: ["system", "technology", "software"] },
    aiLensState: { inactive: B("✦ APLICAR CAPA IA", "✦ APPLY AI LENS"), active: B("✦ CAPA IA ACTIVA", "✦ AI LENS ACTIVE") },
    aiRelationships: [
      { key: "technology-ai", level: 1 },
      { key: "ai-people", level: 2, action: B("AMPLIAR / CAMBIAR EL TRABAJO", "AUGMENT / CHANGE WORK") },
      { key: "ai-processes", level: 2, action: B("ASISTIR / AUTOMATIZAR", "ASSIST / AUTOMATE") },
      { key: "ai-information", level: 2, action: B("ANALIZAR / GENERAR", "ANALYZE / GENERATE") },
      { key: "rules-ai", level: 2, action: B("GOBERNAR", "GOVERN") }
    ],
    aiRelationshipContent: {
      "technology-ai": details["technology-ai"], "ai-people": details["ai-people"], "ai-processes": details["ai-processes"],
      "ai-information": details["ai-information"], "rules-ai": details["rules-ai"]
    }
  };

  var registry = window.CST212DiagramAILenses || { diagrams: {}, register: function (config) { this.diagrams[config.id] = config; return config; } };
  window.CST212DiagramAILenses = registry;
  registry.register(diagramConfig);

  function layerSource(layer) {
    if (layer === "deepening") return DEEPENING_SOURCE;
    if (layer === "ai") return AI_SOURCE;
    return FOUNDATION_SOURCE;
  }

  function layerBadge(layer) {
    if (layer === "deepening") return B("PROFUNDIZACIÓN ACADÉMICA", "ACADEMIC DEEPENING");
    if (layer === "ai") return B("AI-FIRST EXTENSION", "AI-FIRST EXTENSION");
    return B("CST212 FOUNDATION", "CST212 FOUNDATION");
  }

  function transitionInMarkup() {
    var en = isEnglish();
    return '<section class="d2is-transition-in" data-d2is-transition="in"><div class="d2is-transition-inner"><div class="d2is-transition-flow"><div class="d2is-transition-node">' + (en ? 'SYSTEM' : 'SISTEMA') + '</div><span class="d2is-transition-arrow">→</span><div class="d2is-transition-node is-technology">' + (en ? 'TECHNOLOGY' : 'TECNOLOGÍA') + '</div><span class="d2is-transition-arrow">→</span><div class="d2is-transition-node is-software">SOFTWARE</div></div><p>' + (en ? 'If we use software within the system, do software and system mean the same thing?' : 'Si utilizamos software dentro del sistema, ¿software y sistema significan lo mismo?') + '</p><strong>' + (en ? 'NO.' : 'NO.') + '</strong></div></section>';
  }

  function transitionOutMarkup() {
    var en = isEnglish();
    return '<section class="d2is-transition-out" data-d2is-transition="out"><div class="d2is-transition-inner"><small>' + (en ? 'FROM COMPONENTS TO WORK' : 'DE LOS COMPONENTES AL TRABAJO') + '</small><h4>' + (en ? 'We now know which elements make up an information system. But how does the work actually happen inside it?' : 'Ya sabemos qué elementos componen un sistema de información. Pero ¿cómo ocurre realmente el trabajo dentro de él?') + '</h4><p>' + (en ? 'The next diagram focuses on the activities and relationships through which the organization performs its work.' : 'El siguiente diagrama se concentra en las actividades y relaciones mediante las cuales la organización realiza su trabajo.') + '</p><span class="d2is-transition-next">' + (en ? 'DIAGRAM 03 · BUSINESS PROCESSES' : 'DIAGRAMA 03 · PROCESOS DE NEGOCIO') + '</span></div></section>';
  }

  function componentButton(key, label, question) {
    return '<button type="button" class="d2is-component d2is-open" data-d2is-detail="' + key + '"><small>CST212 FOUNDATION</small><strong>' + label + '</strong><span>' + question + '</span></button>';
  }

  function stageMarkup() {
    var en = isEnglish();
    var people = componentButton('people', en ? 'People' : 'Personas', en ? 'Who participates?' : '¿Quién participa?');
    var processes = componentButton('processes', en ? 'Processes' : 'Procesos', en ? 'What work is performed?' : '¿Qué trabajo se realiza?');
    var information = componentButton('information', en ? 'Information' : 'Información', en ? 'What must the system know?' : '¿Qué necesita saber?');
    var resources = componentButton('resources', en ? 'Resources' : 'Recursos', en ? 'What does the system need?' : '¿Qué necesita para operar?');
    var relations = diagramConfig.aiRelationships.filter(function (item) { return item.level === 2; }).map(function (item) {
      return '<button type="button" class="d2is-ai-relation d2is-open" data-d2is-detail="' + item.key + '"><strong>' + T(details[item.key].title) + '</strong><span>' + T(item.action) + '</span></button>';
    }).join('');
    return '<div class="d2is-stage" data-diagram02="true"><button type="button" class="d2is-purpose d2is-open" data-d2is-detail="purpose"><small>' + (en ? 'ORGANIZATIONAL PURPOSE' : 'PROPÓSITO ORGANIZACIONAL') + '</small><strong>' + (en ? 'Why does this information system exist?' : '¿Para qué existe este sistema de información?') + '</strong></button>' +
      '<button type="button" class="d2is-system d2is-open" data-d2is-detail="system"><small>CST212 / TIFFIN FOUNDATION</small><strong>' + (en ? 'INFORMATION SYSTEM' : 'SISTEMA DE INFORMACIÓN') + '</strong><span>' + (en ? 'COMPONENTS + RELATIONSHIPS + PURPOSE' : 'COMPONENTES + RELACIONES + PROPÓSITO') + '</span></button>' +
      '<div class="d2is-components">' + people + processes + information + resources + '<div class="d2is-component d2is-technology"><button type="button" class="d2is-component d2is-open" data-d2is-detail="technology"><small>CST212 FOUNDATION</small><strong>' + (en ? 'Technology' : 'Tecnología') + '</strong><span>' + (en ? 'Technical capabilities that support the system' : 'Capacidades técnicas que apoyan el sistema') + '</span></button><b class="d2is-technology-label">' + (en ? 'CONTAINS / PART OF' : 'CONTIENE / ES PARTE DE') + '</b><button type="button" class="d2is-software d2is-open" data-d2is-detail="software"><strong>SOFTWARE</strong><span>' + (en ? 'PART OF TECHNOLOGY' : 'PARTE DE TECNOLOGÍA') + '</span></button><button type="button" class="d2is-ai-entry d2is-open d2is-ai-only" data-d2is-detail="technology-ai"><strong>' + (en ? 'ARTIFICIAL INTELLIGENCE' : 'INTELIGENCIA ARTIFICIAL') + '</strong><span>' + (en ? 'TECHNOLOGY → MAY INCORPORATE → AI' : 'TECNOLOGÍA → PUEDE INCORPORAR → IA') + '</span></button></div></div>' +
      '<button type="button" class="d2is-rules d2is-open" data-d2is-detail="rules"><small>' + (en ? 'CROSS-CUTTING CONSTRAINT' : 'RESTRICCIÓN TRANSVERSAL') + '</small><strong>' + (en ? 'RULES · What is allowed, required or prohibited?' : 'REGLAS · ¿Qué está permitido, requerido o prohibido?') + '</strong></button>' +
      '<button type="button" class="d2is-outcome d2is-open" data-d2is-detail="outcome"><small>' + (en ? 'SYSTEM OUTCOME' : 'RESULTADO DEL SISTEMA') + '</small><strong>' + (en ? 'Coordinated components produce the outcome' : 'Los componentes coordinados producen el resultado') + '</strong><span>' + (en ? 'A working component does not guarantee system success.' : 'Un componente que funciona no garantiza el éxito del sistema.') + '</span></button>' +
      '<button type="button" class="d2is-deepening d2is-open" data-d2is-detail="sociotechnical"><span><small>' + (en ? 'ACADEMIC DEEPENING' : 'PROFUNDIZACIÓN ACADÉMICA') + '</small><strong>' + (en ? 'Sociotechnical perspective' : 'Perspectiva sociotécnica') + '</strong></span><span>→</span></button>' +
      '<section class="d2is-ai-layer d2is-ai-only" aria-label="' + (en ? 'Diagram 02 AI Lens' : 'Capa IA del Diagrama 02') + '"><p class="d2is-ai-question">' + (en ? 'What changes when an information system incorporates AI as a technological capability?' : '¿Qué cambia cuando uno de los componentes tecnológicos incorpora inteligencia artificial?') + '</p><p class="d2is-ai-level">' + (en ? 'LEVEL 2 · WHAT AI MAY CHANGE' : 'NIVEL 2 · QUÉ PUEDE CAMBIAR LA IA') + '</p><div class="d2is-ai-relations">' + relations + '</div></section></div>';
  }

  function headingMarkup() {
    var en = isEnglish();
    return '<div class="d2is-meta-row"><span class="d2is-kicker">' + (en ? 'DIAGRAM 02 · WEEK 1' : 'DIAGRAMA 02 · SEMANA 1') + '</span><div class="d2is-lens-control" role="group" aria-label="' + (en ? 'Diagram 02 view' : 'Vista del Diagrama 02') + '"><button type="button" data-d2is-lens="base" aria-pressed="true">BASE</button><button type="button" class="d2is-lens-ai" data-d2is-lens="ai" aria-pressed="false">' + T(diagramConfig.aiLensState.inactive) + '</button></div></div><h3>' + (en ? 'COMPONENTS OF AN INFORMATION SYSTEM' : 'COMPONENTES DE UN SISTEMA DE INFORMACIÓN') + '</h3><strong class="d2is-primary">' + (en ? 'AN INFORMATION SYSTEM IS NOT JUST SOFTWARE.' : 'UN SISTEMA NO ES SOLO SOFTWARE.') + '</strong><p class="d2is-intro">' + T(details.system.what) + '</p><p class="d2is-question">' + (en ? 'What needs to work together for the system to produce the expected outcome?' : '¿Qué necesita funcionar en conjunto para que el sistema produzca el resultado esperado?') + '</p>';
  }

  function getFigure() {
    var mounted = document.querySelector('#week-1 .lesson-diagram[data-diagram02-owner="true"]');
    if (mounted) return mounted;
    var figures = Array.prototype.slice.call(document.querySelectorAll('#week-1 .lesson-diagram'));
    return figures.find(function (figure) {
      var heading = figure.querySelector('.diagram-heading h3, .diagram-heading h2, h3');
      var text = (heading ? heading.textContent : figure.textContent || '').replace(/\s+/g, ' ').trim().toUpperCase();
      return text.indexOf('SISTEMA ≠ SOFTWARE') !== -1 || text.indexOf('SYSTEM ≠ SOFTWARE') !== -1;
    }) || null;
  }

  function prepareTransitions(figure) {
    if (!document.querySelector('[data-d2is-transition="in"]')) {
      var oldBefore = figure.previousElementSibling;
      if (oldBefore && !oldBefore.classList.contains('lesson-diagram') && /SISTEMA|SYSTEM/.test(oldBefore.textContent || '') && /SOFTWARE/.test(oldBefore.textContent || '')) oldBefore.style.display = 'none';
      var holderIn = document.createElement('div');
      holderIn.innerHTML = transitionInMarkup();
      figure.insertAdjacentElement('beforebegin', holderIn.firstElementChild);
    }
    if (!document.querySelector('[data-d2is-transition="out"]')) {
      var oldAfter = figure.nextElementSibling;
      if (oldAfter && !oldAfter.classList.contains('lesson-diagram') && /SISTEMA|SYSTEM/.test(oldAfter.textContent || '')) oldAfter.style.display = 'none';
      var holderOut = document.createElement('div');
      holderOut.innerHTML = transitionOutMarkup();
      figure.insertAdjacentElement('afterend', holderOut.firstElementChild);
    }
  }

  function setLens(active) {
    var stage = document.querySelector('.d2is-stage');
    var figure = getFigure();
    if (!stage || !figure) return;
    stage.classList.toggle('is-ai-lens', !!active);
    figure.dataset.d2Lens = active ? 'ai' : 'base';
    var base = figure.querySelector('[data-d2is-lens="base"]');
    var ai = figure.querySelector('[data-d2is-lens="ai"]');
    if (base) base.setAttribute('aria-pressed', active ? 'false' : 'true');
    if (ai) {
      ai.setAttribute('aria-pressed', active ? 'true' : 'false');
      ai.textContent = T(active ? diagramConfig.aiLensState.active : diagramConfig.aiLensState.inactive);
    }
    if (currentDetail) renderModal(currentDetail);
  }

  function mount() {
    var figure = getFigure();
    if (!figure) return false;
    if (figure.querySelector('.d2is-stage')) return true;
    figure.dataset.diagram02Owner = 'true';
    figure.classList.add('d2is-figure');
    var heading = figure.querySelector('.diagram-heading, .d2is-heading');
    if (!heading) { heading = document.createElement('header'); figure.prepend(heading); }
    heading.className = 'd2is-heading';
    heading.innerHTML = headingMarkup();
    var oldStage = figure.querySelector('.diagram-stage');
    var holder = document.createElement('div');
    holder.innerHTML = stageMarkup();
    if (oldStage) oldStage.replaceWith(holder.firstElementChild);
    else heading.insertAdjacentElement('afterend', holder.firstElementChild);
    var caption = figure.querySelector('figcaption, .diagram-caption, .d2is-caption');
    if (!caption) { caption = document.createElement('figcaption'); figure.appendChild(caption); }
    caption.className = 'd2is-caption';
    caption.innerHTML = '<span>' + (isEnglish() ? 'Software is part of technology. Technology is part of the information system.' : 'El software es parte de la tecnología. La tecnología es parte del sistema de información.') + '</span><span><b>' + (isEnglish() ? 'SOURCE' : 'FUENTE') + '</b> ' + FOUNDATION_SOURCE + '</span>';
    prepareTransitions(figure);
    setLens(false);
    return true;
  }

  function section(label, content, className) {
    if (!content) return '';
    return '<section class="d2is-modal-section' + (className ? ' ' + className : '') + '"><h5>' + label + '</h5>' + content + '</section>';
  }
  function paragraph(value) { return value ? '<p>' + T(value) + '</p>' : ''; }
  function list(items) { return items && items.length ? '<ul>' + items.map(function (item) { return '<li>' + T(item) + '</li>'; }).join('') + '</ul>' : ''; }
  function examples(items) {
    if (!items || !items.length) return '';
    return '<div class="d2is-modal-examples">' + items.map(function (item) { return '<div class="d2is-modal-example"><b>' + T(item[0]) + '</b><p>' + T(item[1]) + '</p></div>'; }).join('') + '</div>';
  }

  function modalMarkup(key) {
    var d = details[key];
    if (!d) return '';
    var en = isEnglish();
    var badgeClass = d.layer === 'deepening' ? ' is-deepening' : d.layer === 'ai' ? ' is-ai' : '';
    var grid = '';
    grid += section(en ? 'WHAT IS IT?' : '¿QUÉ ES?', paragraph(d.what));
    grid += section(en ? 'WHY DOES IT MATTER?' : '¿POR QUÉ IMPORTA?', paragraph(d.why));
    grid += section(en ? 'GUIDING QUESTION' : 'PREGUNTA GUÍA', paragraph(d.question));
    grid += section(en ? 'METAPHOR' : 'METÁFORA', paragraph(d.metaphor));
    grid += section(en ? 'EXAMPLE' : 'EJEMPLO', examples(d.examples), d.examples && d.examples.length > 2 ? 'is-wide' : '');
    grid += section(en ? 'CONTROL QUESTIONS' : 'PREGUNTAS DE CONTROL', list(d.questions), d.questions ? 'is-wide' : '');
    grid += section(en ? 'RELATED CONCEPTS' : 'CONCEPTOS RELACIONADOS', paragraph(d.related));
    grid += section(en ? 'DO NOT CONFUSE' : 'NO CONFUNDIR', paragraph(d.confuse));
    grid += section(en ? 'IMPORTANT' : 'IMPORTANTE', paragraph(d.important), d.layer === 'ai' ? 'd2is-modal-ai' : '');
    if (d.aiLens && document.querySelector('.d2is-stage.is-ai-lens')) grid += section(en ? 'AI LENS' : 'CAPA IA', paragraph(d.aiLens), 'd2is-modal-ai');
    grid += section(en ? 'SOURCE / LAYER' : 'FUENTE / CAPA', '<p>' + layerSource(d.layer) + '</p>');
    return '<div class="d2is-backdrop" data-d2is-close="true"></div><article class="d2is-modal" role="dialog" aria-modal="true" aria-labelledby="d2is-modal-title"><button type="button" class="d2is-modal-close" data-d2is-close="true" aria-label="' + (en ? 'Close' : 'Cerrar') + '">×</button><header class="d2is-modal-head"><span class="d2is-badge' + badgeClass + '">' + T(layerBadge(d.layer)) + '</span><h4 id="d2is-modal-title">' + T(d.title) + '</h4></header><div class="d2is-modal-grid">' + grid + '</div></article>';
  }

  function closeModal() {
    document.querySelectorAll('.d2is-backdrop, .d2is-modal').forEach(function (node) { node.remove(); });
    currentDetail = null;
  }

  function renderModal(key) {
    closeModal();
    currentDetail = key;
    var holder = document.createElement('div');
    holder.innerHTML = modalMarkup(key);
    while (holder.firstChild) document.body.appendChild(holder.firstChild);
    var close = document.querySelector('.d2is-modal-close');
    if (close) close.focus({ preventScroll: true });
  }

  document.addEventListener('click', function (event) {
    var lens = event.target.closest('[data-d2is-lens]');
    if (lens) {
      event.preventDefault();
      event.stopImmediatePropagation();
      setLens(lens.getAttribute('data-d2is-lens') === 'ai');
      return;
    }
    var open = event.target.closest('.d2is-open[data-d2is-detail]');
    if (open) {
      event.preventDefault();
      event.stopImmediatePropagation();
      renderModal(open.getAttribute('data-d2is-detail'));
      return;
    }
    if (event.target.closest('[data-d2is-close="true"]')) {
      event.preventDefault();
      event.stopImmediatePropagation();
      closeModal();
    }
  }, true);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && document.querySelector('.d2is-modal')) closeModal();
  });

  var observer = new MutationObserver(function () {
    if (!document.querySelector('.d2is-stage') && getFigure()) mount();
  });

  function start() {
    if (!mount()) { window.setTimeout(start, 140); return; }
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
}());
