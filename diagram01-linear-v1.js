(function () {
  "use strict";
  var SOURCE = "CST212 Week 1 learning materials · SOURCE_METADATA_PENDING";
  var currentDetail = null;
  function B(es, en) { return { es: es, en: en }; }
  function englishMode() {
    var lang = (document.documentElement.lang || "").toLowerCase();
    if (lang.indexOf("en") === 0) return true;
    return !!document.querySelector('[data-lang="en"].is-active, [data-lang="en"][aria-pressed="true"], [data-language="en"].is-active');
  }
  function T(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return englishMode() ? (value.en || value.es || "") : (value.es || value.en || "");
  }
  var labels = {
    system: B("Sistema", "System"), people: B("Personas", "People"), processes: B("Procesos", "Processes"), information: B("Información", "Information"),
    rules: B("Reglas", "Rules"), resources: B("Recursos", "Resources"), technology: B("Tecnología", "Technology"), software: B("Software", "Software"),
    sociotechnical: B("Sistema sociotécnico", "Sociotechnical system"), business_process: B("Proceso de negocio", "Business process"), evidence: B("Evidencia", "Evidence"), feasibility: B("Viabilidad", "Feasibility")
  };
  var details = {
    system: {
      title: labels.system,
      what: B("Conjunto conectado de elementos que interactúan para lograr un propósito.", "A connected set of elements that interact to achieve a purpose."),
      why: B("Cambiar un elemento puede afectar muchos otros y modificar el resultado total.", "Changing one element can affect many others and alter the overall outcome."),
      question: B("¿Qué elementos y relaciones producen el resultado que observamos?", "Which elements and relationships produce the outcome we observe?"),
      metaphor: B("Una orquesta: un instrumento no es la orquesta.", "An orchestra: one instrument is not the orchestra."),
      related: ["people", "processes", "information", "rules", "resources", "technology"],
      confuse: B("Software o una herramienta aislada.", "Software or an isolated tool."),
      examples: [
        [B("Negocios", "Business"), B("Una empresa de reservas conecta clientes, empleados, reglas, disponibilidad, pagos, procedimientos y software.", "A reservation company connects customers, staff, rules, availability, payments, procedures and software.")],
        [B("Educación", "Education"), B("Una escuela conecta estudiantes, docentes, currículo, horarios, evaluación, políticas y herramientas digitales.", "A school connects students, teachers, curriculum, schedules, assessment, policies and digital tools.")],
        [B("Biología", "Biology"), B("El cuerpo conecta órganos, señales, recursos y mecanismos de regulación.", "The body connects organs, signals, resources and regulation mechanisms.")],
        [B("Psicología", "Psychology"), B("Aprender conecta atención, memoria, emoción, contexto y retroalimentación.", "Learning connects attention, memory, emotion, context and feedback.")],
        [B("Música", "Music"), B("Una orquesta conecta músicos, director, instrumentos, partitura y acústica.", "An orchestra connects musicians, conductor, instruments, score and acoustics.")]
      ]
    },
    purpose: {
      title: B("Propósito", "Purpose"),
      what: B("El resultado o finalidad que da sentido a la interacción entre los componentes.", "The outcome or end that gives meaning to the interaction among components."),
      question: B("¿Para qué existe este sistema?", "Why does this system exist?"),
      metaphor: B("El destino de un viaje. Sin un destino, podemos tener un automóvil, conductor y combustible, pero no sabemos cómo organizar el recorrido.", "The destination of a journey. Without a destination, we may have a car, driver and fuel, but we do not know how to organize the route."),
      examples: [[B("Negocios", "Business"), B("Para un sistema de reservas: asignar correctamente recursos disponibles a clientes en determinados momentos.", "For a reservation system: correctly assign available resources to customers at specific times.")]]
    },
    people: {
      title: labels.people, what: B("Quienes usan, operan, administran o reciben efectos del sistema.", "Those who use, operate, manage or are affected by the system."),
      why: B("Sus decisiones, capacidades y necesidades influyen directamente en el resultado.", "Their decisions, capabilities and needs directly influence the outcome."),
      question: B("¿Quién participa, decide o recibe los resultados?", "Who participates, decides or receives the outcomes?"), metaphor: B("Los actores de una obra.", "The actors in a play."), related: ["system", "processes", "sociotechnical"]
    },
    processes: {
      title: labels.processes, what: B("Actividades relacionadas que transforman entradas en resultados.", "Related activities that transform inputs into outcomes."),
      why: B("Revelan cómo ocurre realmente el trabajo, más allá del organigrama o del software.", "They reveal how work actually happens beyond the org chart or software."),
      question: B("¿Qué trabajo ocurre y en qué secuencia?", "What work happens and in what sequence?"), metaphor: B("La ruta que sigue el trabajo.", "The route that work follows."), related: ["business_process", "information", "rules"]
    },
    information: {
      title: labels.information, what: B("Datos interpretados y utilizados para operar o tomar decisiones.", "Data interpreted and used to operate or make decisions."),
      why: B("Permite coordinar actividades y mantener una comprensión compartida del estado del sistema.", "It coordinates activities and maintains a shared understanding of system state."),
      question: B("¿Qué debemos saber para actuar correctamente?", "What must we know to act correctly?"), metaphor: B("La memoria compartida del sistema.", "The shared memory of the system."), related: ["system", "processes", "evidence"]
    },
    rules: {
      title: labels.rules, what: B("Condiciones que guían o restringen comportamiento y decisiones.", "Conditions that guide or constrain behavior and decisions."),
      why: B("Hacen que el sistema actúe de manera consistente y explicable.", "They make system behavior consistent and explainable."),
      question: B("¿Qué está permitido, requerido o prohibido?", "What is allowed, required or prohibited?"), metaphor: B("Barandas de seguridad en una carretera.", "Guardrails on a road."), related: ["processes", "sociotechnical"]
    },
    resources: {
      title: labels.resources, what: B("Medios humanos, físicos, financieros u organizacionales usados por el sistema.", "Human, physical, financial or organizational means used by the system."),
      why: B("Definen la capacidad real para producir resultados.", "They define the real capacity to produce outcomes."),
      question: B("¿Con qué medios cuenta el sistema?", "What means are available to the system?"), metaphor: B("Los ingredientes y utensilios de una cocina.", "The ingredients and tools in a kitchen."), related: ["system", "feasibility"]
    },
    technology: {
      title: labels.technology, what: B("Herramientas técnicas que apoyan la operación del sistema.", "Technical tools that support system operation."),
      why: B("Puede aumentar capacidad y coordinación, pero no sustituye personas, procesos ni reglas.", "It can increase capacity and coordination but does not replace people, processes or rules."),
      question: B("¿Qué herramienta apoya el trabajo y con qué límites?", "Which tool supports the work, and within what limits?"), metaphor: B("Un instrumento dentro de la orquesta.", "An instrument within the orchestra."),
      related: ["software", "system"], confuse: B("El sistema completo.", "The complete system."), ai: B("La IA puede ser un componente dentro de tecnología: IA ⊂ tecnología ⊂ sistema.", "AI may be a component within technology: AI ⊂ technology ⊂ system.")
    },
    ai: {
      title: B("Inteligencia artificial", "Artificial intelligence"),
      what: B("Una capacidad tecnológica que puede analizar información, reconocer patrones, generar resultados, recomendar acciones o ejecutar tareas acotadas.", "A technological capability that can analyze information, recognize patterns, generate outputs, recommend actions or execute bounded tasks."),
      why: B("Puede cambiar la capacidad del sistema y también modificar cómo interactúan personas, procesos, información y reglas.", "It can change system capability and also modify how people, processes, information and rules interact."),
      important: B("IA ≠ SISTEMA. La IA es un componente o capacidad dentro de un sistema mayor.", "AI ≠ SYSTEM. AI is a component or capability inside a larger system."), aiFirst: true
    },
    "technology-ai": {
      title: B("Tecnología → IA", "Technology → AI"),
      what: B("La IA puede ser un componente dentro de tecnología: IA ⊂ tecnología ⊂ sistema.", "AI may be a component within technology: AI ⊂ technology ⊂ system."),
      question: B("¿Por qué la IA se considera una capacidad tecnológica?", "Why is AI considered a technological capability?"),
      important: B("IA ≠ SISTEMA. La IA es un componente o capacidad dentro de un sistema mayor.", "AI ≠ SYSTEM. AI is a component or capability inside a larger system."),
      aiFirst: true
    },
    "ai-information": {
      title: B("IA + Información", "AI + Information"), what: B("La IA puede analizar grandes cantidades de información para encontrar patrones, clasificar contenidos, resumir datos o detectar anomalías.", "AI can analyze large amounts of information to find patterns, classify content, summarize data or detect anomalies."),
      question: B("¿Cómo puede la IA analizar información?", "How can AI analyze information?"),
      examples: [[B("Ejemplo", "Example"), B("Un sistema puede analizar miles de comentarios de clientes y agrupar los problemas que aparecen con mayor frecuencia.", "A system can analyze thousands of customer comments and group the problems that appear most frequently.")]],
      value: B("Escala, velocidad, detección de patrones y síntesis.", "Scale, speed, pattern detection and synthesis."), important: B("La IA puede detectar patrones. El contexto humano ayuda a determinar qué significan.", "AI can detect patterns. Human context helps determine what they mean."), aiFirst: true
    },
    "ai-processes": {
      title: B("IA + Procesos", "AI + Processes"), what: B("La IA puede asistir o automatizar partes específicas de un proceso, especialmente tareas repetitivas, clasificación, generación de recomendaciones o procesamiento de información.", "AI can assist or automate specific parts of a process, especially repetitive tasks, classification, recommendation generation or information processing."),
      question: B("¿Cómo puede la IA asistir o automatizar partes de un proceso?", "How can AI assist or automate parts of a process?"),
      examples: [[B("Ejemplo", "Example"), B("Solicitud → clasificación con IA → flujo de trabajo correcto.", "Request → AI classification → correct workflow.")]],
      value: B("Velocidad, consistencia y escalabilidad.", "Speed, consistency and scalability."), important: B("Automatizar un proceso deficiente no lo convierte en un buen proceso. NO AUTOMATIZAR LA CONFUSIÓN.", "Automating a poor process does not turn it into a good process. DO NOT AUTOMATE CONFUSION."), aiFirst: true
    },
    "ai-people": {
      title: B("IA + Personas", "AI + People"), what: B("La IA puede ampliar la capacidad de las personas para investigar, comparar, resumir y producir alternativas.", "AI can augment people's ability to investigate, compare, summarize and produce alternatives."),
      question: B("¿Cómo puede la IA ampliar la capacidad humana?", "How can AI augment human capability?"),
      examples: [[B("Ejemplo", "Example"), B("100 entrevistas → síntesis con IA → temas recurrentes → validación del analista.", "100 interviews → AI synthesis → recurring themes → analyst validation.")]],
      important: B("Ampliar capacidad no significa transferir responsabilidad.", "Augmenting capability does not mean transferring responsibility."), aiFirst: true
    },
    "rules-ai": {
      title: B("Reglas → IA", "Rules → AI"), what: B("La IA debe operar dentro de límites definidos por el sistema.", "AI must operate within limits defined by the system."),
      question: B("¿Cómo gobiernan las reglas del sistema a la IA?", "How is AI governed by system rules?"),
      questions: [B("¿Qué puede hacer la IA?", "What may AI do?"), B("¿Qué no puede hacer?", "What may it not do?"), B("¿Qué datos puede utilizar?", "What data may it use?"), B("¿Cuándo se requiere revisión humana?", "When is human review required?"), B("¿Qué ocurre cuando la confianza es baja?", "What happens when confidence is low?")],
      important: B("LA IA TIENE CAPACIDADES. EL SISTEMA DEFINE LOS LÍMITES.", "AI HAS CAPABILITIES. THE SYSTEM DEFINES THE LIMITS."), aiFirst: true
    }
  };

  var diagramConfig = {
    id: "diagram-01",
    baseState: {
      components: [
        ["purpose", "Propósito", "Purpose", "¿Para qué existe?", "Why does it exist?"],
        ["people", "Personas", "People", "¿Quién participa?", "Who participates?"],
        ["processes", "Procesos", "Processes", "¿Qué trabajo ocurre?", "What work happens?"],
        ["information", "Información", "Information", "¿Qué necesita saber?", "What must it know?"],
        ["rules", "Reglas", "Rules", "¿Qué está permitido?", "What is allowed?"],
        ["resources", "Recursos", "Resources", "¿Qué necesita?", "What does it need?"],
        ["technology", "Tecnología", "Technology", "¿Qué tecnología apoya?", "What technology supports it?"]
      ]
    },
    aiLensState: {
      inactive: B("✦ APLICAR CAPA IA", "✦ APPLY AI LENS"),
      active: B("✦ CAPA IA ACTIVA", "✦ AI LENS ACTIVE")
    },
    aiRelationships: [
      { key: "technology-ai", level: 1, source: "technology", target: "ai" },
      { key: "ai-people", level: 2, row: "people", es: "IA → PERSONAS · AMPLIAR CAPACIDAD", en: "AI → PEOPLE · AUGMENT" },
      { key: "ai-processes", level: 2, row: "processes", es: "IA → PROCESOS · ASISTIR / AUTOMATIZAR", en: "AI → PROCESSES · ASSIST / AUTOMATE" },
      { key: "ai-information", level: 2, row: "information", es: "IA → INFORMACIÓN · ANALIZAR", en: "AI → INFORMATION · ANALYZE" },
      { key: "rules-ai", level: 2, row: "rules", es: "REGLAS → IA · GOBERNAR", en: "RULES → AI · GOVERN" }
    ],
    aiRelationshipContent: {
      "technology-ai": details["technology-ai"],
      "ai-people": details["ai-people"],
      "ai-processes": details["ai-processes"],
      "ai-information": details["ai-information"],
      "rules-ai": details["rules-ai"]
    }
  };

  var lensRegistry = window.CST212DiagramAILenses || {
    diagrams: {},
    register: function (config) { this.diagrams[config.id] = config; return config; }
  };
  window.CST212DiagramAILenses = lensRegistry;
  lensRegistry.register(diagramConfig);

  function component(key, es, en, qEs, qEn) { return '<button type="button" class="d1l-component d1l-open" data-detail="' + key + '"><strong>' + T(B(es, en)) + '</strong><span>' + T(B(qEs, qEn)) + '</span></button>'; }
  function relation(key, row, es, en) { return '<button type="button" class="d1l-relation d1l-open d1l-ai-only" data-detail="' + key + '" data-row="' + row + '">' + T(B(es, en)) + '</button>'; }
  function impact(key, es, en, aEs, aEn) { return '<button type="button" class="d1l-impact d1l-open" data-detail="' + key + '"><strong>' + T(B(es, en)) + '</strong><span>' + T(B(aEs, aEn)) + '</span></button>'; }
  function markup() {
    var en = englishMode();
    var components = diagramConfig.baseState.components.map(function (item) { return component(item[0], item[1], item[2], item[3], item[4]); }).join('');
    var relationships = diagramConfig.aiRelationships.filter(function (item) { return item.level === 2; }).map(function (item) { return relation(item.key, item.row, item.es, item.en); }).join('');
    return '<div class="d1l-stage" data-diagram01-linear="true"><header class="d1l-heading"><div class="d1l-meta-row"><p class="d1l-kicker">' + (en ? 'DIAGRAM 01 · WHAT IS A SYSTEM?' : 'DIAGRAMA 01 · ¿QUÉ ES UN SISTEMA?') + '</p><div class="d1l-lens-control" role="group" aria-label="' + (en ? 'Diagram 01 view' : 'Vista del Diagrama 01') + '"><button type="button" class="d1l-lens-base" data-d1l-lens="base" aria-pressed="true">BASE</button><button type="button" class="d1l-lens-ai" data-d1l-lens="ai" aria-pressed="false">' + T(diagramConfig.aiLensState.inactive) + '</button></div></div><h3>' +
      (en ? 'A system is a set of related elements that interact to achieve a purpose.' : 'Un sistema es un conjunto de elementos relacionados que interactúan para lograr un propósito.') + '</h3><p>' +
      (en ? 'It is not enough to look at each part separately. To understand a system, we must observe its components, their relationships and the purpose that connects them.' : 'No basta con mirar cada parte por separado. Para comprender un sistema debemos observar sus componentes, sus relaciones y el propósito que los conecta.') + '</p></header><div class="d1l-map">' +
      '<button type="button" class="d1l-system d1l-open" data-detail="system"><small>' + (en ? 'COURSE / ACADEMIC FOUNDATION' : 'CURSO / FUNDAMENTO ACADÉMICO') + '</small><strong>' + (en ? 'SYSTEM' : 'SISTEMA') + '</strong><span>' + (en ? 'COMPONENTS + RELATIONSHIPS + PURPOSE' : 'COMPONENTES + RELACIONES + PROPÓSITO') + '</span></button><div class="d1l-system-link" aria-hidden="true"></div><div class="d1l-components">' + components + '</div>' +
      '<button type="button" class="d1l-tech-bridge d1l-open d1l-ai-only" data-detail="technology-ai"><small>' + (en ? 'LEVEL 1 · WHERE AI ENTERS' : 'NIVEL 1 · DÓNDE ENTRA LA IA') + '</small><span>' + (en ? '→ MAY INCORPORATE →' : '→ PUEDE INCORPORAR →') + '</span></button>' +
      '<button type="button" class="d1l-ai d1l-open d1l-ai-only" data-detail="ai"><small>AI-FIRST EXTENSION</small><strong>' + (en ? 'ARTIFICIAL INTELLIGENCE' : 'INTELIGENCIA ARTIFICIAL') + '</strong><span>' + (en ? 'TECHNOLOGICAL CAPABILITY OF THE SYSTEM' : 'CAPACIDAD TECNOLÓGICA DEL SISTEMA') + '</span></button>' +
      '<p class="d1l-relations-heading d1l-ai-only">' + (en ? 'LEVEL 2 · WHAT AI MAY CHANGE' : 'NIVEL 2 · QUÉ PUEDE CAMBIAR LA IA') + '</p><div class="d1l-ai-relations">' + relationships + '</div><div class="d1l-ai-spine d1l-ai-only" aria-hidden="true"></div></div>' +
      '<div class="d1l-impacts-wrap d1l-ai-only"><p class="d1l-impacts-label">' + (en ? 'AI CAPABILITIES IN THE SYSTEM' : 'CAPACIDADES DE IA EN EL SISTEMA') + '</p><div class="d1l-impacts">' +
      impact('ai-information', 'Información aumentada', 'Augmented information', 'Analizar', 'Analyze') + impact('ai-processes', 'Procesos asistidos', 'Assisted processes', 'Asistir / automatizar', 'Assist / automate') + impact('ai-people', 'Personas ampliadas', 'Augmented people', 'Ampliar capacidad', 'Augment capability') + impact('rules-ai', 'IA gobernada', 'Governed AI', 'Reglas → IA', 'Rules → AI') + '</div></div><p class="d1l-state d1l-ai-only">' +
      (en ? 'AI can connect to different parts of the system to augment capabilities, analyze information and transform processes, always within its purpose and rules.' : 'La IA puede conectarse a distintas partes del sistema para ampliar capacidades, analizar información y transformar procesos, siempre dentro de su propósito y sus reglas.') + '</p></div>';
  }

  function isAIActive() {
    var stage = document.querySelector('.d1l-stage');
    return !!(stage && stage.classList.contains('is-ai-lens'));
  }
  function setLens(active) {
    var stage = document.querySelector('.d1l-stage');
    if (!stage) return;
    stage.classList.toggle('is-ai-lens', !!active);
    var baseButton = stage.querySelector('[data-d1l-lens="base"]');
    var aiButton = stage.querySelector('[data-d1l-lens="ai"]');
    if (baseButton) baseButton.setAttribute('aria-pressed', active ? 'false' : 'true');
    if (aiButton) {
      aiButton.setAttribute('aria-pressed', active ? 'true' : 'false');
      aiButton.textContent = T(active ? diagramConfig.aiLensState.active : diagramConfig.aiLensState.inactive);
    }
    if (currentDetail) renderModal(currentDetail);
  }
  function mount() {
    var oldStage = document.querySelector('.d1l-stage, .d1c-stage, .d1-stage');
    if (!oldStage) return false;
    var holder = document.createElement('div');
    holder.innerHTML = markup();
    oldStage.replaceWith(holder.firstElementChild);
    setLens(false);
    return true;
  }

  function section(label, content, className) { return content ? '<section class="d1l-modal-section' + (className ? ' ' + className : '') + '"><h5>' + label + '</h5>' + content + '</section>' : ''; }
  function paragraph(value) { return value ? '<p>' + T(value) + '</p>' : ''; }
  function renderExamples(items) { return items && items.length ? '<div class="d1l-modal-examples">' + items.map(function (item) { return '<div class="d1l-modal-example"><b>' + T(item[0]) + '</b><p>' + T(item[1]) + '</p></div>'; }).join('') + '</div>' : ''; }
  function renderRelated(items) { return items && items.length ? '<p>' + items.map(function (key) { return T(labels[key] || key); }).join(' · ') + '</p>' : ''; }
  function renderQuestions(items) { return items && items.length ? '<ul>' + items.map(function (item) { return '<li>' + T(item) + '</li>'; }).join('') + '</ul>' : ''; }
  function modalMarkup(key) {
    var d = details[key];
    if (!d) return '';
    var en = englishMode();
    var origin = d.aiFirst ? (en ? 'AI-FIRST EXTENSION · WEEK 1' : 'EXTENSIÓN AI-FIRST · SEMANA 1') : (en ? 'COURSE / ACADEMIC FOUNDATION · WEEK 1' : 'CURSO / FUNDAMENTO ACADÉMICO · SEMANA 1');
    var grid = '';
    grid += section(en ? 'WHAT IS IT?' : '¿QUÉ ES?', paragraph(d.what));
    grid += section(en ? 'WHY DOES IT MATTER?' : '¿POR QUÉ IMPORTA?', paragraph(d.why));
    grid += section(en ? 'GUIDING QUESTION' : 'PREGUNTA GUÍA', paragraph(d.question));
    grid += section(en ? 'METAPHOR' : 'METÁFORA', paragraph(d.metaphor));
    grid += section(en ? 'EXAMPLES' : 'EJEMPLOS', renderExamples(d.examples), d.examples && d.examples.length > 2 ? 'is-wide' : '');
    grid += section(en ? 'VALUE' : 'VALOR', paragraph(d.value));
    grid += section(en ? 'CONTROL QUESTIONS' : 'PREGUNTAS DE CONTROL', renderQuestions(d.questions), d.questions ? 'is-wide' : '');
    grid += section(en ? 'RELATED CONCEPTS' : 'CONCEPTOS RELACIONADOS', renderRelated(d.related));
    grid += section(en ? 'DO NOT CONFUSE WITH' : 'NO CONFUNDIR CON', paragraph(d.confuse));
    grid += section(en ? 'IMPORTANT' : 'IMPORTANTE', paragraph(d.important), d.aiFirst ? 'd1l-modal-ai' : '');
    if (d.ai && isAIActive()) grid += section(en ? 'AI LENS' : 'CAPA IA', paragraph(d.ai), 'd1l-modal-ai');
    grid += section(en ? 'ACADEMIC SOURCE' : 'FUENTE ACADÉMICA', '<p>' + SOURCE + '</p>');
    return '<div class="d1l-backdrop" data-d1l-close="true"></div><article class="d1l-modal" role="dialog" aria-modal="true" aria-labelledby="d1l-modal-title"><button type="button" class="d1l-modal-close" data-d1l-close="true" aria-label="' + (en ? 'Close' : 'Cerrar') + '">×</button><header class="d1l-modal-head"><small>' + origin + '</small><h4 id="d1l-modal-title">' + T(d.title) + '</h4></header><div class="d1l-modal-grid">' + grid + '</div></article>';
  }
  function closeModal() { document.querySelectorAll('.d1l-backdrop, .d1l-modal').forEach(function (node) { node.remove(); }); currentDetail = null; }
  function renderModal(key) {
    closeModal();
    currentDetail = key;
    var holder = document.createElement('div');
    holder.innerHTML = modalMarkup(key);
    while (holder.firstChild) document.body.appendChild(holder.firstChild);
    var close = document.querySelector('.d1l-modal-close');
    if (close) close.focus({ preventScroll: true });
  }

  document.addEventListener('click', function (event) {
    var lensButton = event.target.closest('[data-d1l-lens]');
    if (lensButton) {
      event.preventDefault();
      event.stopImmediatePropagation();
      setLens(lensButton.getAttribute('data-d1l-lens') === 'ai');
      return;
    }
    var open = event.target.closest('.d1l-open[data-detail]');
    if (open) { event.preventDefault(); event.stopImmediatePropagation(); renderModal(open.getAttribute('data-detail')); return; }
    if (event.target.closest('[data-d1l-close="true"]')) { event.preventDefault(); event.stopImmediatePropagation(); closeModal(); return; }
  }, true);
  document.addEventListener('keydown', function (event) { if (event.key === 'Escape' && document.querySelector('.d1l-modal')) closeModal(); });

  var observer = new MutationObserver(function () {
    if (!document.querySelector('.d1l-stage') && document.querySelector('.d1c-stage, .d1-stage')) { mount(); return; }
  });
  function start() {
    if (!mount()) { window.setTimeout(start, 120); return; }
    observer.observe(document.documentElement, { subtree: true, childList: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true }); else start();
}());
