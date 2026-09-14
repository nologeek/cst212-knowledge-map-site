(function () {
  "use strict";

  function B(es, en) { return { es: es, en: en }; }
  function isEnglish() { return (document.documentElement.lang || "es").toLowerCase().indexOf("en") === 0; }
  function T(value) { return value ? value[isEnglish() ? "en" : "es"] : ""; }

  var FOUNDATION_SOURCE = "CST212 Week 1 learning materials · SOURCE_METADATA_PENDING";
  var DEEPENING_SOURCE = "PEDAGOGICAL / ACADEMIC DEEPENING · SOURCE_METADATA_PENDING";
  var AI_SOURCE = "AI-FIRST EXTENSION · NOT CST212 CANONICAL · SOURCE_METADATA_PENDING";
  var currentDetail = null;
  var followTimer = null;

  var diagramConfig = {
    id: "diagram03-business-processes",
    baseState: B("BASE · CÓMO FLUYE EL TRABAJO", "BASE · HOW WORK FLOWS"),
    aiLensState: {
      inactive: B("APLICAR CAPA IA", "APPLY AI LENS"),
      active: B("CAPA IA ACTIVA", "AI LENS ACTIVE")
    },
    aiRelationships: [
      { key: "ai-input", action: B("CLASIFICAR", "CLASSIFY") },
      { key: "ai-information", action: B("ANALIZAR", "ANALYZE") },
      { key: "ai-activity", action: B("ASISTIR / AUTOMATIZAR", "ASSIST / AUTOMATE") },
      { key: "ai-decision", action: B("RECOMENDAR", "RECOMMEND") }
    ]
  };

  var details = {
    process: {
      title: B("Proceso de negocio", "Business process"), layer: "foundation",
      what: B("Un conjunto de actividades relacionadas que transforman entradas en resultados para una organización o sus usuarios.", "A set of related activities that transforms inputs into outcomes for an organization or its users."),
      why: B("Comprender el proceso permite identificar cómo se realiza realmente el trabajo antes de intentar modificarlo o automatizarlo.", "Understanding the process reveals how work is actually performed before attempting to modify or automate it."),
      question: B("¿Qué ocurre desde que aparece una necesidad o entrada hasta que se produce un resultado?", "What happens from the moment a need or input appears until an outcome is produced?"),
      metaphor: B("Una receta: no basta con tener ingredientes. También importa qué se hace con ellos y en qué orden.", "A recipe: having ingredients is not enough. What is done with them and in what order also matters."),
      memory: B("EL TRABAJO FLUYE A TRAVÉS DE UN PROCESO.", "WORK FLOWS THROUGH A PROCESS."),
      examples: [
        [B("NEGOCIOS", "BUSINESS"), B("Solicitud → verificación → decisión → servicio → valor.", "Request → verification → decision → service → value.")],
        [B("EDUCACIÓN", "EDUCATION"), B("Asignación → revisión → actividad → entrega → retroalimentación → aprendizaje.", "Assignment → review → activity → submission → feedback → learning.")],
        [B("BIOLOGÍA", "BIOLOGY"), B("Alimento → digestión → absorción → nutrientes disponibles. Analogía estructural.", "Food → digestion → absorption → available nutrients. Structural analogy.")],
        [B("PSICOLOGÍA", "PSYCHOLOGY"), B("Información → atención → procesamiento → práctica → respuesta de aprendizaje.", "Information → attention → processing → practice → learning response.")],
        [B("MÚSICA", "MUSIC"), B("Partitura → ensayo → interpretación → ejecución → experiencia musical.", "Score → rehearsal → interpretation → performance → musical experience.")]
      ]
    },
    input: {
      title: B("Entrada", "Input"), layer: "foundation",
      what: B("Algo que inicia o alimenta el proceso. Puede ser una solicitud, información, un evento, un recurso o una necesidad.", "Something that starts or feeds the process. It may be a request, information, an event, a resource or a need."),
      question: B("¿Qué pone en marcha el proceso?", "What sets the process in motion?"),
      metaphor: B("Los ingredientes antes de comenzar una receta.", "The ingredients before starting a recipe."),
      important: B("HKA: un cliente solicita reservar un kayak.", "HKA: a customer requests a kayak reservation.")
    },
    activity: {
      title: B("Actividad", "Activity"), layer: "foundation",
      what: B("Una acción realizada como parte del proceso para transformar o avanzar el trabajo.", "An action performed as part of the process to transform or advance the work."),
      question: B("¿Qué debe hacerse en este punto?", "What must be done at this point?"),
      metaphor: B("Un paso de la receta.", "A step in the recipe."),
      important: B("Ejemplo: consultar disponibilidad.", "Example: check availability."),
      confuse: B("ACTIVIDAD ≠ RESULTADO. Consultar disponibilidad es una actividad; reserva confirmada es un resultado.", "ACTIVITY ≠ OUTCOME. Checking availability is an activity; a confirmed reservation is an outcome.")
    },
    decision: {
      title: B("Decisión", "Decision"), layer: "foundation",
      what: B("Un punto del proceso donde una condición puede determinar diferentes caminos.", "A point in the process where a condition may determine different paths."),
      question: B("¿Qué condición determina qué ocurre después?", "What condition determines what happens next?"),
      important: B("¿Hay un kayak disponible? SÍ → continuar la reserva. NO → informar al cliente o explorar una alternativa.", "Is a kayak available? YES → continue the reservation. NO → inform the customer or explore an alternative."),
      confuse: B("Aquí solo se introduce la bifurcación del proceso. Las tablas y árboles de decisión se estudiarán posteriormente.", "This introduces process branching only. Decision tables and trees are studied later.")
    },
    information: {
      title: B("Información", "Information"), layer: "foundation",
      what: B("Información necesaria para realizar actividades y tomar decisiones dentro del proceso.", "Information needed to perform activities and make decisions within the process."),
      question: B("¿Qué necesitamos saber para continuar correctamente?", "What do we need to know to continue correctly?"),
      important: B("Para comprobar disponibilidad: fecha, hora, tipo de kayak y reservas existentes. Un proceso con información incorrecta puede producir resultados incorrectos.", "To check availability: date, time, kayak type and existing reservations. A process with incorrect information may produce incorrect outcomes.")
    },
    people: {
      title: B("Personas y roles", "People and roles"), layer: "foundation",
      what: B("Las personas o roles que ejecutan actividades, toman decisiones, supervisan o reciben resultados.", "The people or roles that perform activities, make decisions, supervise or receive outcomes."),
      question: B("¿Quién hace qué?", "Who does what?"),
      important: B("Cliente: solicita. Empleado: valida. Personal responsable: entrega el recurso.", "Customer: requests. Employee: validates. Responsible staff: delivers the resource."),
      confuse: B("ROL ≠ PERSONA ESPECÍFICA. Un rol describe una responsabilidad dentro del proceso.", "ROLE ≠ SPECIFIC PERSON. A role describes responsibility within the process.")
    },
    rules: {
      title: B("Reglas", "Rules"), layer: "foundation",
      what: B("Condiciones que determinan cómo debe comportarse el proceso.", "Conditions that determine how the process must behave."),
      question: B("¿Qué condición debe cumplirse?", "What condition must be met?"),
      important: B("Una reserva no puede confirmarse si el kayak ya está asignado para ese horario.", "A reservation cannot be confirmed if the kayak is already assigned for that time."),
      confuse: B("REGLA ≠ ACTIVIDAD. Una regla gobierna una actividad o decisión.", "RULE ≠ ACTIVITY. A rule governs an activity or decision.")
    },
    resources: {
      title: B("Recursos", "Resources"), layer: "foundation",
      what: B("Los elementos que el proceso necesita para poder ejecutarse.", "The elements the process needs in order to run."),
      question: B("¿Qué necesita el proceso para producir el resultado?", "What does the process need to produce the outcome?"),
      important: B("HKA: kayak, equipo de seguridad, instructor, franja horaria e instalaciones.", "HKA: kayak, safety equipment, instructor, time slot and facilities.")
    },
    technology: {
      title: B("Tecnología", "Technology"), layer: "foundation",
      what: B("Herramientas técnicas que pueden apoyar una o varias actividades del proceso.", "Technical tools that may support one or more process activities."),
      important: B("Ejemplos: sitio web, base de datos, aplicación y sistema de pagos.", "Examples: website, database, application and payment system."),
      confuse: B("PROCESO ≠ SOFTWARE. Un proceso de negocio puede ser manual, digital o híbrido. La tecnología puede apoyarlo, pero el proceso describe el trabajo.", "PROCESS ≠ SOFTWARE. A business process may be manual, digital or hybrid. Technology may support it, but the process describes the work.")
    },
    outcome: {
      title: B("Resultado", "Outcome"), layer: "foundation",
      what: B("El producto, servicio, información o cambio generado por el proceso.", "The product, service, information or change generated by the process."),
      question: B("¿Qué produjo el proceso?", "What did the process produce?"),
      important: B("Ejemplo: reserva confirmada.", "Example: confirmed reservation."),
      confuse: B("ACTIVIDAD ≠ RESULTADO.", "ACTIVITY ≠ OUTCOME.")
    },
    value: {
      title: B("Valor", "Value"), layer: "foundation",
      what: B("El beneficio o utilidad que el resultado produce para una persona, cliente u organización.", "The benefit or usefulness that the outcome produces for a person, customer or organization."),
      question: B("¿Por qué importa este resultado?", "Why does this outcome matter?"),
      important: B("Una reserva confiable permite al cliente saber que el recurso está disponible, evita conflictos y permite preparar la operación. Completar actividades no basta: el proceso debe producir un resultado útil.", "A reliable reservation lets the customer know the resource is available, avoids conflicts and lets the operation prepare. Completing activities is not enough: the process must produce a useful outcome.")
    },
    modeling: {
      title: B("Modelado de procesos de negocio", "Business process modeling"), layer: "deepening",
      what: B("Representar visualmente cómo se realiza el trabajo para comprender actividades, relaciones, decisiones y resultados.", "Visually representing how work is performed to understand activities, relationships, decisions and outcomes."),
      why: B("Puede ayudar a identificar trabajo duplicado, esperas, pasos manuales, responsabilidad poco clara, información inconsistente, complejidad innecesaria y oportunidades de mejora.", "It can help identify duplicated work, waiting, manual steps, unclear responsibility, inconsistent information, unnecessary complexity and improvement opportunities."),
      important: B("SI NO ENTENDEMOS EL PROCESO ACTUAL, PODEMOS TERMINAR AUTOMATIZANDO UN PROCESO DEFICIENTE.", "IF WE DO NOT UNDERSTAND THE CURRENT PROCESS, WE MAY END UP AUTOMATING A BAD PROCESS.")
    },
    hka: {
      title: B("Ejemplo HKA", "HKA example"), layer: "foundation",
      what: B("El cliente solicita un kayak; se registra la solicitud; se revisan fecha, tipo y disponibilidad; se decide; se asigna el kayak; se confirma la reserva; se crea valor.", "The customer requests a kayak; the request is registered; date, type and availability are checked; a decision is made; the kayak is assigned; the reservation is confirmed; value is created."),
      why: B("HKA utiliza Microsoft Access, registros de hojas sueltas, una pizarra, software contable y coordinación manual realizada por personas.", "HKA uses Microsoft Access, loose-leaf records, a whiteboard, accounting software and manual coordination performed by people."),
      important: B("EL PROCESO EXISTE AUNQUE LA TECNOLOGÍA ESTÉ FRAGMENTADA.", "THE PROCESS EXISTS EVEN WHEN TECHNOLOGY IS FRAGMENTED.")
    },
    "ai-overview": {
      title: B("IA como capacidad del proceso", "AI as a process capability"), layer: "ai",
      what: B("La IA puede incorporarse como capacidad tecnológica adicional en puntos específicos de un proceso ya comprendido.", "AI may be incorporated as an additional technological capability at specific points in an already-understood process."),
      question: B("¿En qué partes del proceso puede la IA aportar valor?", "Where can AI add value inside the process?"),
      important: B("PRIMERO COMPRENDEMOS EL PROCESO. DESPUÉS DECIDIMOS DÓNDE LA IA PUEDE APORTAR VALOR.", "PROCESS FIRST. AI SECOND.")
    },
    "ai-input": {
      title: B("IA + Entrada", "AI + Input"), layer: "ai",
      what: B("La IA puede clasificar una entrada para determinar qué tipo de solicitud, documento, mensaje o evento ha llegado al proceso.", "AI can classify an input to determine what type of request, document, message or event has entered the process."),
      important: B("Mensaje del cliente → clasificación IA → solicitud de reserva. Valor posible: velocidad, direccionamiento y escala. Los errores de clasificación deben gestionarse.", "Customer message → AI classification → reservation request. Possible value: speed, routing and scale. Classification errors must be handled.")
    },
    "ai-information": {
      title: B("IA + Información", "AI + Information"), layer: "ai",
      what: B("La IA puede extraer, comparar, resumir o identificar patrones en la información utilizada por el proceso.", "AI can extract, compare, summarize or identify patterns in information used by the process."),
      important: B("Puede revisar disponibilidad e identificar posibles conflictos de horario. ANÁLISIS IA ≠ HECHO VALIDADO.", "It may review availability and identify possible scheduling conflicts. AI ANALYSIS ≠ VALIDATED FACT.")
    },
    "ai-activity": {
      title: B("IA + Actividad", "AI + Activity"), layer: "ai",
      what: B("La IA puede apoyar o ejecutar actividades específicas cuando sus entradas, límites y resultados están suficientemente definidos.", "AI can support or execute specific activities when their inputs, boundaries and outcomes are sufficiently defined."),
      important: B("Puede generar un borrador, clasificar una solicitud, extraer información o ejecutar una acción repetitiva acotada. La automatización debe tener límites.", "It may generate a draft, classify a request, extract information or perform a bounded repetitive action. Automation must be bounded."),
      memory: B("AUTOMATIZAR UN PROCESO MALO NO LO CONVIERTE EN UN BUEN PROCESO. NO AUTOMATICES LA CONFUSIÓN.", "AUTOMATING A BAD PROCESS DOES NOT MAKE IT A GOOD PROCESS. DO NOT AUTOMATE CONFUSION.")
    },
    "ai-decision": {
      title: B("IA + Decisión", "AI + Decision"), layer: "ai",
      what: B("La IA puede analizar información y generar una recomendación para apoyar un punto de decisión.", "AI can analyze information and generate a recommendation to support a decision point."),
      important: B("INFORMACIÓN → IA → RECOMENDACIÓN → REGLA / VALIDACIÓN HUMANA → DECISIÓN. RECOMENDACIÓN IA ≠ AUTORIDAD DE DECISIÓN.", "INFORMATION → AI → RECOMMENDATION → RULE / HUMAN REVIEW → DECISION. AI RECOMMENDATION ≠ DECISION AUTHORITY."),
      why: B("La validación humana es un punto donde una persona revisa, valida o asume responsabilidad antes de continuar, según la consecuencia y la incertidumbre.", "A human gate is a point where a person reviews, validates or assumes responsibility before continuing, according to consequence and uncertainty.")
    },
    "ai-deepening": {
      title: B("Puntos candidatos de intervención IA", "Candidate AI intervention points"), layer: "ai",
      what: B("Un proceso puede analizarse como una secuencia de puntos candidatos donde la IA podría asistir, sin convertir esta extensión en metodología canónica de CST212.", "A process can be analyzed as a sequence of candidate points where AI might assist, without treating this extension as canonical CST212 methodology."),
      questions: [
        B("¿Es repetitiva la actividad?", "Is the activity repetitive?"),
        B("¿La entrada está suficientemente clara?", "Is the input sufficiently clear?"),
        B("¿Se conocen las reglas?", "Are the rules known?"),
        B("¿La incertidumbre es aceptable?", "Is uncertainty acceptable?"),
        B("¿Qué ocurre si la IA se equivoca?", "What happens if AI is wrong?"),
        B("¿Se requiere revisión humana?", "Is human review required?"),
        B("¿La IA crea valor significativo?", "Does AI create meaningful value?")
      ]
    }
  };

  function layerBadge(layer) {
    if (layer === "deepening") return B("PROFUNDIZACIÓN ACADÉMICA", "ACADEMIC DEEPENING");
    if (layer === "ai") return B("AI-FIRST EXTENSION · NO CANÓNICO", "AI-FIRST EXTENSION · NOT CANONICAL");
    return B("CST212 / TIFFIN FOUNDATION", "CST212 / TIFFIN FOUNDATION");
  }

  function layerSource(layer) {
    if (layer === "deepening") return DEEPENING_SOURCE;
    if (layer === "ai") return AI_SOURCE;
    return FOUNDATION_SOURCE;
  }

  function transitionInMarkup() {
    var en = isEnglish();
    var components = en ? ["People", "Information", "Processes", "Resources", "Technology"] : ["Personas", "Información", "Procesos", "Recursos", "Tecnología"];
    return '<section class="d3bp-transition-in" data-d3bp-transition="in"><div class="d3bp-transition-inner"><p>' + (en ? 'We now understand the elements that make up a system. Next, we need to understand how they work together.' : 'Ya sabemos qué elementos forman parte de un sistema. Ahora necesitamos entender cómo trabajan juntos.') + '</p><h4>' + (en ? 'HOW DOES THE WORK ACTUALLY HAPPEN INSIDE THE SYSTEM?' : '¿CÓMO OCURRE REALMENTE EL TRABAJO DENTRO DEL SISTEMA?') + '</h4><div class="d3bp-component-field">' + components.map(function (item) { return '<span class="' + (/Process|Proceso/.test(item) ? 'is-process' : '') + '">' + item + '</span>'; }).join('') + '</div><div class="d3bp-process-expands"><span>' + (en ? 'PROCESS' : 'PROCESO') + '</span><i></i><span>' + (en ? 'INPUT' : 'ENTRADA') + '</span><span>' + (en ? 'ACTIVITY' : 'ACTIVIDAD') + '</span><span>' + (en ? 'DECISION' : 'DECISIÓN') + '</span><span>' + (en ? 'ACTIVITY' : 'ACTIVIDAD') + '</span><span>' + (en ? 'OUTCOME' : 'RESULTADO') + '</span></div></div></section>';
  }

  function transitionOutMarkup() {
    var en = isEnglish();
    return '<section class="d3bp-transition-out" data-d3bp-transition="out"><div class="d3bp-transition-inner"><small>' + (en ? 'FROM EXPECTED FLOW TO INVESTIGATION' : 'DEL FLUJO ESPERADO A LA INVESTIGACIÓN') + '</small><h4>' + (en ? 'We now understand how the work should flow. But what happens when the outcome is not what we expected?' : 'Ya entendemos cómo debería fluir el trabajo. Pero ¿qué ocurre cuando el resultado no es el esperado?') + '</h4><div class="d3bp-outcome-chain"><span>' + (en ? 'OUTCOME' : 'RESULTADO') + '</span><b>↓</b><span>' + (en ? 'SIGNAL' : 'SEÑAL') + '</span><b>↓</b><span>' + (en ? 'SYMPTOM' : 'SÍNTOMA') + '</span></div><span class="d3bp-transition-next">' + (en ? 'DIAGRAM 04 · FROM SYMPTOM TO THE REAL PROBLEM' : 'DIAGRAMA 04 · DEL SÍNTOMA AL PROBLEMA REAL') + '</span></div></section>';
  }

  function flowButton(key, label, hint, hka, step, extra) {
    return '<button type="button" class="d3bp-step d3bp-open ' + (extra || '') + '" style="--step:' + step + '" data-d3bp-detail="' + key + '"><strong class="d3bp-base-copy">' + label + '</strong><strong class="d3bp-hka-copy">' + hka + '</strong><span>' + hint + '</span></button>';
  }

  function supportButton(key, label, hint, extra) {
    return '<button type="button" class="d3bp-support-node d3bp-open ' + (extra || '') + '" data-d3bp-detail="' + key + '"><strong>' + label + '</strong><span>' + hint + '</span></button>';
  }

  function headingMarkup() {
    var en = isEnglish();
    return '<div class="d3bp-meta-row"><span class="d3bp-kicker">' + (en ? 'DIAGRAM 03 · WEEK 1' : 'DIAGRAMA 03 · SEMANA 1') + '</span><div class="d3bp-lens-control" role="group" aria-label="' + (en ? 'Diagram 03 view' : 'Vista del Diagrama 03') + '"><button type="button" data-d3bp-lens="base" aria-pressed="true">BASE</button><button type="button" class="d3bp-lens-ai" data-d3bp-lens="ai" aria-pressed="false">' + T(diagramConfig.aiLensState.inactive) + '</button></div></div><h3>' + (en ? 'BUSINESS PROCESSES' : 'PROCESOS DE NEGOCIO') + '</h3><strong class="d3bp-primary">' + (en ? 'FROM WORK TO OUTCOME' : 'DEL TRABAJO AL RESULTADO') + '</strong><p class="d3bp-intro">' + (en ? 'A business process connects activities, people, information, rules and resources to transform an input into an outcome that creates value.' : 'Un proceso de negocio conecta actividades, personas, información, reglas y recursos para transformar una entrada en un resultado que aporta valor.') + '</p>';
  }

  function stageMarkup() {
    var en = isEnglish();
    var relationRows = { "ai-input": 1, "ai-information": 2, "ai-decision": 3, "ai-activity": 4 };
    var relations = diagramConfig.aiRelationships.map(function (item) {
      var gate = item.key === "ai-decision" ? '<em>' + (en ? 'HUMAN GATE' : 'VALIDACIÓN HUMANA') + '</em>' : '';
      return '<button type="button" class="d3bp-ai-relation d3bp-open" data-ai-row="' + relationRows[item.key] + '" data-d3bp-detail="' + item.key + '"><strong>' + T(details[item.key].title) + '</strong><span>' + T(item.action) + '</span>' + gate + '</button>';
    }).join('');
    return '<div class="d3bp-stage" data-diagram03="true"><div class="d3bp-toolrow"><div class="d3bp-actions"><button type="button" class="d3bp-action" data-d3bp-follow="true">▶ ' + (en ? 'FOLLOW THE PROCESS' : 'SEGUIR EL PROCESO') + '</button><button type="button" class="d3bp-action" data-d3bp-hka="true" aria-pressed="false">▶ ' + (en ? 'VIEW HKA EXAMPLE' : 'VER EJEMPLO HKA') + '</button></div></div><div class="d3bp-linear-map"><button type="button" class="d3bp-process-concept d3bp-open" data-d3bp-detail="process"><strong>' + (en ? 'BUSINESS PROCESS' : 'PROCESO DE NEGOCIO') + '</strong><span>' + (en ? 'WORK → OUTCOME → VALUE' : 'TRABAJO → RESULTADO → VALOR') + '</span></button><div class="d3bp-process-link" aria-hidden="true"></div><div class="d3bp-flow-wrap"><div class="d3bp-work-unit" aria-hidden="true"></div><div class="d3bp-flow">' +
      flowButton('input', en ? 'INPUT' : 'ENTRADA', en ? 'Starts the work' : 'Inicia el trabajo', en ? 'Customer request' : 'Solicitud del cliente', 0, 'is-input') +
      flowButton('activity', en ? 'ACTIVITY' : 'ACTIVIDAD', en ? 'Transforms' : 'Transforma', en ? 'Register request' : 'Registrar solicitud', 1, 'is-activity') +
      flowButton('decision', en ? 'DECISION' : 'DECISIÓN', en ? 'Opens a path' : 'Abre un camino', en ? 'Kayak available?' : '¿Kayak disponible?', 2, 'is-decision') +
      flowButton('activity', en ? 'ACTIVITY' : 'ACTIVIDAD', en ? 'Advances the work' : 'Avanza el trabajo', en ? 'Assign kayak' : 'Asignar kayak', 3, 'is-activity') +
      flowButton('outcome', en ? 'OUTCOME' : 'RESULTADO', en ? 'What was produced?' : '¿Qué se produjo?', en ? 'Reservation confirmed' : 'Reserva confirmada', 4, 'is-outcome') +
      flowButton('value', en ? 'VALUE' : 'VALOR', en ? 'Why does it matter?' : '¿Por qué importa?', en ? 'Reliable reservation' : 'Reserva confiable', 5, 'is-value') +
      '</div></div><div class="d3bp-ai-relations">' + relations + '</div><div class="d3bp-ai-column"><div class="d3bp-lens-gateway"><div class="d3bp-ai-preview"><small>TECHNOLOGY → AI</small><strong><span class="is-off">IA · OFF</span><span class="is-on">IA · ON</span></strong></div></div><button type="button" class="d3bp-ai-hub d3bp-open d3bp-ai-only" data-d3bp-detail="ai-overview"><strong>' + (en ? 'ARTIFICIAL INTELLIGENCE' : 'INTELIGENCIA ARTIFICIAL') + '</strong><span>' + (en ? 'ADDITIONAL TECHNOLOGICAL CAPABILITY' : 'CAPACIDAD TECNOLÓGICA ADICIONAL') + '</span></button><button type="button" class="d3bp-ai-rule d3bp-open d3bp-ai-only" data-d3bp-detail="ai-deepening">' + (en ? 'PROCESS FIRST · AI SECOND · REVIEW CANDIDATE INTERVENTION POINTS' : 'PROCESO PRIMERO · IA DESPUÉS · REVISAR PUNTOS CANDIDATOS DE INTERVENCIÓN') + '</button></div></div><p class="d3bp-ai-question d3bp-ai-only">' + (en ? 'WHERE CAN AI ADD VALUE INSIDE THE PROCESS?' : '¿EN QUÉ PARTES DEL PROCESO PUEDE LA IA APORTAR VALOR?') + '</p><p class="d3bp-support-label">' + (en ? 'ELEMENTS THAT SUPPORT AND GOVERN THE FLOW' : 'ELEMENTOS QUE APOYAN Y GOBIERNAN EL FLUJO') + '</p><div class="d3bp-support">' +
      supportButton('people', en ? 'People / Roles' : 'Personas / Roles', en ? 'Who does what?' : '¿Quién hace qué?') +
      supportButton('information', en ? 'Information' : 'Información', en ? 'What must be known?' : '¿Qué debemos saber?') +
      supportButton('rules', en ? 'Rules' : 'Reglas', en ? 'What must be met?' : '¿Qué debe cumplirse?') +
      supportButton('resources', en ? 'Resources' : 'Recursos', en ? 'What is needed?' : '¿Qué se necesita?') +
      supportButton('technology', en ? 'Technology' : 'Tecnología', en ? 'What supports the work?' : '¿Qué apoya el trabajo?', 'is-technology') +
      '</div><button type="button" class="d3bp-principle d3bp-open" data-d3bp-detail="modeling"><strong>' + (en ? 'PROCESS ≠ SOFTWARE.' : 'PROCESO ≠ SOFTWARE.') + '</strong> ' + (en ? 'If we do not understand the current process, we may end up automating a bad process.' : 'Si no entendemos el proceso actual, podemos terminar automatizando un proceso deficiente.') + '</button><p class="d3bp-status" role="status" aria-live="polite"></p></div>';
  }

  function getFigure() {
    var mounted = document.querySelector('#week-1 .lesson-diagram[data-diagram03-owner="true"]');
    if (mounted) return mounted;
    var figures = Array.prototype.slice.call(document.querySelectorAll('#week-1 .lesson-diagram'));
    return figures.find(function (figure) {
      var heading = figure.querySelector('.diagram-heading h3, .diagram-heading h2, h3');
      var text = (heading ? heading.textContent : figure.textContent || '').replace(/\s+/g, ' ').trim().toUpperCase();
      return text.indexOf('SISTEMA ≠ SOFTWARE + SISTEMA SOCIOTÉCNICO') !== -1 || text.indexOf('SYSTEM ≠ SOFTWARE + SOCIOTECHNICAL SYSTEM') !== -1;
    }) || null;
  }

  function prepareTransitions(figure) {
    var previousTransition = document.querySelector('[data-d2is-transition="out"]');
    if (previousTransition) previousTransition.hidden = true;
    if (!document.querySelector('[data-d3bp-transition="in"]')) {
      var holderIn = document.createElement('div');
      holderIn.innerHTML = transitionInMarkup();
      figure.insertAdjacentElement('beforebegin', holderIn.firstElementChild);
    }
    if (!document.querySelector('[data-d3bp-transition="out"]')) {
      var oldAfter = figure.nextElementSibling;
      if (oldAfter && !oldAfter.classList.contains('lesson-diagram') && /RESULTADO|OUTCOME/.test(oldAfter.textContent || '')) oldAfter.hidden = true;
      var holderOut = document.createElement('div');
      holderOut.innerHTML = transitionOutMarkup();
      figure.insertAdjacentElement('afterend', holderOut.firstElementChild);
    }
    var transition = document.querySelector('[data-d3bp-transition="in"]');
    if (!transition) return;
    if (!('IntersectionObserver' in window)) { transition.classList.add('is-visible'); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
    }, { threshold: .28 });
    io.observe(transition);
  }

  function setLens(active) {
    var figure = getFigure();
    if (!figure) return;
    var stage = figure.querySelector('.d3bp-stage');
    if (!stage) return;
    stage.classList.toggle('is-ai-lens', !!active);
    figure.dataset.d3bpLens = active ? 'ai' : 'base';
    var base = figure.querySelector('[data-d3bp-lens="base"]');
    var ai = figure.querySelector('[data-d3bp-lens="ai"]');
    if (base) base.setAttribute('aria-pressed', active ? 'false' : 'true');
    if (ai) {
      ai.setAttribute('aria-pressed', active ? 'true' : 'false');
      ai.textContent = T(active ? diagramConfig.aiLensState.active : diagramConfig.aiLensState.inactive);
    }
    if (currentDetail) renderModal(currentDetail);
  }

  function runProcess() {
    var figure = getFigure();
    if (!figure) return;
    var stage = figure.querySelector('.d3bp-stage');
    var status = figure.querySelector('.d3bp-status');
    if (!stage) return;
    window.clearTimeout(followTimer);
    stage.classList.remove('is-following');
    void stage.offsetWidth;
    stage.classList.add('is-following');
    if (status) status.textContent = isEnglish() ? 'Following one unit of work from input to value.' : 'Siguiendo una unidad de trabajo desde la entrada hasta el valor.';
    followTimer = window.setTimeout(function () {
      stage.classList.remove('is-following');
      if (status) status.textContent = isEnglish() ? 'Sequence complete: the outcome creates value.' : 'Secuencia completada: el resultado crea valor.';
    }, 5700);
  }

  function toggleHka() {
    var figure = getFigure();
    if (!figure) return;
    var stage = figure.querySelector('.d3bp-stage');
    var button = figure.querySelector('[data-d3bp-hka]');
    if (!stage || !button) return;
    var active = !stage.classList.contains('is-hka');
    stage.classList.toggle('is-hka', active);
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
    button.textContent = active ? (isEnglish() ? '■ HKA EXAMPLE ACTIVE' : '■ EJEMPLO HKA ACTIVO') : (isEnglish() ? '▶ VIEW HKA EXAMPLE' : '▶ VER EJEMPLO HKA');
    if (active) runProcess();
  }

  function mount() {
    var figure = getFigure();
    if (!figure) return false;
    if (figure.querySelector('.d3bp-stage[data-diagram03="true"]')) return true;
    figure.dataset.diagram03Owner = 'true';
    figure.classList.add('d3bp-figure');
    var heading = figure.querySelector('.diagram-heading, .d3bp-heading');
    if (!heading) { heading = document.createElement('header'); figure.prepend(heading); }
    heading.className = 'd3bp-heading';
    heading.innerHTML = headingMarkup();
    var oldStage = figure.querySelector('.diagram-stage');
    var holder = document.createElement('div');
    holder.innerHTML = stageMarkup();
    if (oldStage) oldStage.replaceWith(holder.firstElementChild);
    else heading.insertAdjacentElement('afterend', holder.firstElementChild);
    var caption = figure.querySelector('figcaption, .diagram-caption, .d3bp-caption');
    if (!caption) { caption = document.createElement('figcaption'); figure.appendChild(caption); }
    caption.className = 'd3bp-caption';
    caption.innerHTML = '<span>' + (isEnglish() ? 'A process connects work to a useful outcome. Technology may support it, but it does not define it.' : 'Un proceso conecta el trabajo con un resultado útil. La tecnología puede apoyarlo, pero no lo define.') + '</span><span><b>' + (isEnglish() ? 'SOURCE' : 'FUENTE') + '</b> ' + FOUNDATION_SOURCE + '</span>';
    prepareTransitions(figure);
    setLens(false);
    bindDirectControls(figure.querySelector('.d3bp-stage'));
    return true;
  }

  function section(label, content, className) {
    if (!content) return '';
    return '<section class="d3bp-modal-section ' + (className || '') + '"><h5>' + label + '</h5>' + content + '</section>';
  }
  function paragraph(value) { return value ? '<p>' + T(value) + '</p>' : ''; }
  function list(items) { return items && items.length ? '<ul>' + items.map(function (item) { return '<li>' + T(item) + '</li>'; }).join('') + '</ul>' : ''; }
  function examples(items) {
    if (!items || !items.length) return '';
    return '<div class="d3bp-examples">' + items.map(function (item) { return '<div class="d3bp-example"><b>' + T(item[0]) + '</b><p>' + T(item[1]) + '</p></div>'; }).join('') + '</div>';
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
    grid += section(en ? 'MULTI-DOMAIN EXAMPLES' : 'EJEMPLOS MULTIDOMINIO', examples(d.examples), 'is-wide');
    grid += section(en ? 'CONTROL QUESTIONS' : 'PREGUNTAS DE CONTROL', list(d.questions), 'is-wide');
    grid += section(en ? 'DO NOT CONFUSE' : 'NO CONFUNDIR', paragraph(d.confuse));
    grid += section(en ? 'IMPORTANT' : 'IMPORTANTE', paragraph(d.important), d.layer === 'ai' ? 'is-ai' : 'is-important');
    grid += section(en ? 'MEMORY HOOK' : 'REGLA PARA RECORDAR', paragraph(d.memory), d.layer === 'ai' ? 'is-ai' : 'is-important');
    grid += section(en ? 'SOURCE / LAYER' : 'FUENTE / CAPA', '<p>' + layerSource(d.layer) + '</p>');
    return '<div class="d3bp-backdrop" data-d3bp-close="true"></div><article class="d3bp-modal" role="dialog" aria-modal="true" aria-labelledby="d3bp-modal-title"><button type="button" class="d3bp-modal-close" data-d3bp-close="true" aria-label="' + (en ? 'Close' : 'Cerrar') + '">×</button><header class="d3bp-modal-head"><h4 id="d3bp-modal-title">' + T(d.title) + '</h4></header><div class="d3bp-modal-grid">' + grid + '</div></article>';
  }

  function closeModal() {
    document.querySelectorAll('.d3bp-backdrop, .d3bp-modal').forEach(function (node) { node.remove(); });
    currentDetail = null;
  }

  function renderModal(key) {
    closeModal();
    currentDetail = key;
    var holder = document.createElement('div');
    holder.innerHTML = modalMarkup(key);
    while (holder.firstChild) document.body.appendChild(holder.firstChild);
    var close = document.querySelector('.d3bp-modal-close');
    document.querySelectorAll('[data-d3bp-close="true"]').forEach(function (node) {
      node.onclick = function (event) { event.preventDefault(); closeModal(); };
    });
    if (close) close.focus({ preventScroll: true });
  }

  function bindDirectControls(root) {
    if (!root) return;
    root.querySelectorAll('.d3bp-open[data-d3bp-detail]').forEach(function (node) {
      node.onpointerdown = function (event) {
        if (typeof event.button === 'number' && event.button !== 0) return;
        event.preventDefault();
        event.stopPropagation();
        renderModal(node.getAttribute('data-d3bp-detail'));
      };
      node.onclick = function (event) { event.preventDefault(); renderModal(node.getAttribute('data-d3bp-detail')); };
    });
    root.querySelectorAll('[data-d3bp-lens]').forEach(function (node) {
      node.onclick = function (event) { event.preventDefault(); setLens(node.getAttribute('data-d3bp-lens') === 'ai'); };
    });
    var follow = root.querySelector('[data-d3bp-follow]');
    if (follow) follow.onclick = function (event) { event.preventDefault(); runProcess(); };
    var hka = root.querySelector('[data-d3bp-hka]');
    if (hka) hka.onclick = function (event) { event.preventDefault(); toggleHka(); };
  }

  window.addEventListener('click', function (event) {
    var lens = event.target.closest('[data-d3bp-lens]');
    if (lens) {
      event.preventDefault();
      event.stopImmediatePropagation();
      setLens(lens.getAttribute('data-d3bp-lens') === 'ai');
      return;
    }
    if (event.target.closest('[data-d3bp-follow]')) {
      event.preventDefault();
      event.stopImmediatePropagation();
      runProcess();
      return;
    }
    if (event.target.closest('[data-d3bp-hka]')) {
      event.preventDefault();
      event.stopImmediatePropagation();
      toggleHka();
      return;
    }
    var open = event.target.closest('.d3bp-open[data-d3bp-detail]');
    if (open) {
      event.preventDefault();
      event.stopImmediatePropagation();
      renderModal(open.getAttribute('data-d3bp-detail'));
      return;
    }
    if (event.target.closest('[data-d3bp-close="true"]')) {
      event.preventDefault();
      event.stopImmediatePropagation();
      closeModal();
    }
  }, true);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && document.querySelector('.d3bp-modal')) closeModal();
  });

  function start() {
    if (!mount()) { window.setTimeout(start, 160); return; }
    var week = document.getElementById('week-1');
    if (!week) return;
    var observer = new MutationObserver(function () {
      if (!document.querySelector('.d3bp-stage[data-diagram03="true"]') && getFigure()) mount();
    });
    observer.observe(week, { childList: true, subtree: true });
  }

  window.CST212DiagramAILenses = window.CST212DiagramAILenses || {};
  window.CST212DiagramAILenses.diagram03 = diagramConfig;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
}());
