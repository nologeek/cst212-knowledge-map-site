(function () {
  "use strict";

  function B(es, en) { return { es: es, en: en }; }
  function isEnglish() { return (document.documentElement.lang || "es").toLowerCase().indexOf("en") === 0; }
  function T(value) { return value ? value[isEnglish() ? "en" : "es"] : ""; }

  var FOUNDATION_SOURCE = "CST212 Week 1 learning materials · SOURCE_METADATA_PENDING";
  var AI_SOURCE = "AI-FIRST EXTENSION · NOT CST212 CANONICAL · SOURCE_METADATA_PENDING";
  var currentKey = null;

  var diagramConfig = {
    id: "diagram04-problem-investigation",
    pattern: "AI LENS = DENDRITIC AUGMENTATION",
    baseState: B("Flujo canónico de investigación", "Canonical investigation flow"),
    aiLensState: {
      inactive: B("APLICAR CAPA IA", "APPLY AI LENS"),
      active: B("CAPA IA ACTIVA", "AI LENS ACTIVE")
    },
    aiRelationships: [
      { source: "ai", target: "signal", key: "ai_signal", label: B("DETECTAR", "DETECT") },
      { source: "ai", target: "investigation", key: "ai_investigation", label: B("SINTETIZAR", "SYNTHESIZE") },
      { source: "ai", target: "hypothesis", key: "ai_hypothesis", label: B("GENERAR CANDIDATOS", "GENERATE CANDIDATES") },
      { source: "ai", target: "evidence", key: "ai_evidence", label: B("COMPARAR", "COMPARE") },
      { source: "ai", target: "alternatives", key: "ai_alternatives", label: B("EXPLORAR", "EXPLORE") }
    ]
  };

  var details = {
    need_opportunity: {
      title: B("Necesidad u oportunidad", "Need or opportunity"), layer: "foundation",
      what: B("Una brecha, aspiración u oportunidad de mejora que merece estudio.", "A gap, aspiration or improvement opportunity that deserves study."),
      why: B("Inicia la exploración sin asumir todavía la causa ni la solución.", "It begins exploration without assuming the cause or solution."),
      question: B("¿Qué resultado necesita mejorar y para quién?", "Which outcome needs improvement, and for whom?"),
      metaphor: B("La distancia entre dónde estamos y dónde necesitamos estar.", "The distance between where we are and where we need to be."),
      example: B("HKA necesita reducir conflictos y ofrecer reservas más confiables.", "HKA needs to reduce conflicts and provide more reliable reservations."),
      related: B("Señal · Síntoma · Investigación", "Signal · Symptom · Investigation"),
      confuse: B("Una solución predeterminada, como “necesitamos una aplicación”.", "A predetermined solution, such as “we need an app”.")
    },
    signal: {
      title: B("Señal", "Signal"), layer: "foundation",
      what: B("Una observación que indica que algo merece atención.", "An observation indicating that something deserves attention."),
      why: B("Activa preguntas, pero todavía no explica la causa.", "It triggers questions but does not yet explain the cause."),
      question: B("¿Qué cambió, aumentó o se repite y merece investigación?", "What changed, increased or repeats and deserves investigation?"),
      metaphor: B("Una luz de advertencia en el tablero de un automóvil.", "A warning light on a car dashboard."),
      example: B("Aumentan las llamadas y quejas relacionadas con las reservas.", "Calls and complaints related to reservations increase."),
      related: B("Necesidad · Síntoma · Investigación", "Need · Symptom · Investigation"),
      confuse: B("El problema explicado o la causa confirmada.", "The explained problem or confirmed cause."), aiKey: "ai_signal"
    },
    symptom: {
      title: B("Síntoma", "Symptom"), layer: "foundation",
      what: B("Un efecto visible que puede apuntar a una condición más profunda.", "A visible effect that may point to a deeper condition."),
      why: B("Distinguir efecto de causa evita resolver superficialmente el problema.", "Distinguishing effect from cause prevents superficial problem solving."),
      question: B("¿Qué observamos y qué otras causas podrían explicarlo?", "What do we observe, and what other causes might explain it?"),
      metaphor: B("Humo que indica que debemos buscar dónde se origina el fuego.", "Smoke indicating that we should find where the fire originates."),
      example: B("Aparecen reservas duplicadas o asignaciones incompatibles.", "Duplicate reservations or incompatible assignments appear."),
      related: B("Señal · Hipótesis · Problema subyacente", "Signal · Hypothesis · Underlying problem"),
      confuse: B("La causa raíz o el problema subyacente.", "The root cause or underlying problem.")
    },
    investigation: {
      title: B("Investigación", "Investigation"), layer: "foundation",
      what: B("Recopilación y revisión estructurada de hechos antes de concluir cuál es el problema.", "Structured gathering and review of facts before concluding what the problem is."),
      why: B("Sustituye suposiciones por evidencia y permite corregir la definición inicial.", "It replaces assumptions with evidence and allows the initial definition to be corrected."),
      question: B("¿Quién, qué, cuándo, dónde, cómo y por qué?", "Who, what, when, where, how and why?"),
      metaphor: B("Trabajo detectivesco que contrasta pistas antes de señalar una causa.", "Detective work that compares clues before naming a cause."),
      example: B("Comparar Microsoft Access, hojas sueltas, pizarra, reservas y entrevistas del personal de HKA.", "Compare Microsoft Access, loose-leaf sheets, the whiteboard, reservations and HKA staff interviews."),
      related: B("Hipótesis · Evidencia · Problema subyacente", "Hypothesis · Evidence · Underlying problem"),
      confuse: B("Buscar únicamente información que confirme una idea inicial.", "Looking only for information that confirms an initial idea."), aiKey: "ai_investigation"
    },
    hypothesis: {
      title: B("Hipótesis", "Hypothesis"), layer: "foundation",
      what: B("Una explicación candidata que podría relacionar los síntomas con una causa y que debe ponerse a prueba.", "A candidate explanation that might connect symptoms to a cause and must be tested."),
      why: B("Organiza la investigación sin convertir una posibilidad en una conclusión.", "It organizes the investigation without turning a possibility into a conclusion."),
      question: B("¿Qué explicación podría dar cuenta de lo observado y qué evidencia la refutaría?", "What explanation might account for what we observe, and what evidence would refute it?"),
      metaphor: B("Una teoría detectivesca que todavía debe contrastarse con las pruebas.", "A detective theory that still must be checked against the evidence."),
      example: B("La información fragmentada podría estar causando diferencias de disponibilidad.", "Fragmented information might be causing availability discrepancies."),
      related: B("Investigación · Evidencia · Confirmar · Reformular", "Investigation · Evidence · Confirm · Reframe"),
      confuse: B("Una causa verificada o una verdad aceptada.", "A verified cause or accepted truth."), aiKey: "ai_hypothesis"
    },
    underlying_problem: {
      title: B("Problema subyacente", "Underlying problem"), layer: "foundation",
      what: B("Una condición respaldada por evidencia que explica efectos negativos relevantes.", "An evidence-supported condition that explains meaningful negative effects."),
      why: B("Permite actuar sobre causas y no limitarse a aliviar síntomas.", "It enables action on causes rather than merely relieving symptoms."),
      question: B("¿Qué condición explica consistentemente la evidencia observada?", "Which condition consistently explains the observed evidence?"),
      metaphor: B("La raíz bajo tierra que explica varias hojas marchitas.", "The root underground that explains several wilted leaves."),
      example: B("La disponibilidad se actualiza en varios lugares sin una fuente compartida y vigente.", "Availability is updated in several places without one shared, current source."),
      related: B("Síntoma · Hipótesis · Evidencia · Alternativas", "Symptom · Hypothesis · Evidence · Alternatives"),
      confuse: B("Una petición de software o una explicación todavía hipotética.", "A software request or an explanation that is still hypothetical.")
    },
    alternatives: {
      title: B("Alternativas", "Alternatives"), layer: "foundation",
      what: B("Opciones distintas para responder al problema comprendido.", "Different options for responding to the understood problem."),
      why: B("Compararlas evita convertir la primera idea en una decisión automática.", "Comparing them prevents the first idea from becoming an automatic decision."),
      question: B("¿Qué combinaciones de proceso, personas, reglas o tecnología podrían funcionar?", "Which combinations of process, people, rules or technology might work?"),
      metaphor: B("Varias rutas posibles hacia un mismo destino.", "Several possible routes toward the same destination."),
      example: B("Cambio de proceso, capacitación, política, integración, SaaS, software, automatización, IA, una combinación o ningún cambio.", "Process change, training, policy, integration, SaaS, software, automation, AI, a combination or no change."),
      related: B("Problema subyacente · Evidencia · Decisión preliminar", "Underlying problem · Evidence · Preliminary decision"),
      confuse: B("Una lista limitada a productos tecnológicos.", "A list limited to technology products."), aiKey: "ai_alternatives"
    },
    evidence: {
      title: B("Evidencia", "Evidence"), layer: "foundation",
      what: B("Información verificable utilizada para apoyar, cuestionar o rechazar una explicación.", "Verifiable information used to support, question or reject an explanation."),
      why: B("Permite que el diagnóstico y la decisión no dependan solo de intuición o preferencia.", "It keeps diagnosis and decisions from depending only on intuition or preference."),
      question: B("¿Qué hechos sostienen esta explicación y cuáles la contradicen?", "Which facts support this explanation, and which contradict it?"),
      metaphor: B("Las piezas comprobables que permiten reconstruir lo ocurrido.", "The verifiable pieces that allow us to reconstruct what happened."),
      example: B("Horarios incompatibles, registros desactualizados, entrevistas y diferencias entre Access, hojas y pizarra.", "Conflicting schedules, outdated records, interviews and differences among Access, sheets and the whiteboard."),
      related: B("Investigación · Hipótesis · Confirmar · Cuestionar · Reformular", "Investigation · Hypothesis · Confirm · Question · Reframe"),
      confuse: B("Una opinión, una correlación aislada o contenido sin procedencia.", "An opinion, an isolated correlation or content without provenance."), aiKey: "ai_evidence"
    },
    preliminary_decision: {
      title: B("Decisión preliminar", "Preliminary decision"), layer: "foundation",
      what: B("Una conclusión inicial sustentada en la investigación disponible que orienta el siguiente paso.", "An initial conclusion supported by available investigation that guides the next step."),
      why: B("Permite avanzar, solicitar más evidencia, reformular o detener antes de comprometer una solución.", "It allows us to proceed, request more evidence, reframe or stop before committing to a solution."),
      question: B("¿La evidencia disponible permite decidir responsablemente qué debe ocurrir después?", "Does the available evidence support a responsible decision about what should happen next?"),
      metaphor: B("Una puerta de control antes de entrar a una inversión mayor.", "A checkpoint before entering a larger investment."),
      example: B("Investigar más la coordinación de disponibilidad antes de seleccionar una solución tecnológica.", "Investigate availability coordination further before selecting a technology solution."),
      related: B("Evidencia · Confirmar · Cuestionar · Reformular", "Evidence · Confirm · Question · Reframe"),
      confuse: B("Una decisión final irreversible o una autorización autónoma de IA.", "An irreversible final decision or autonomous AI authorization.")
    },
    confirm: {
      title: B("Confirmar", "Confirm"), layer: "foundation",
      what: B("Aceptar provisionalmente una hipótesis porque la evidencia disponible la respalda de manera suficiente.", "Provisionally accepting a hypothesis because available evidence supports it sufficiently."),
      why: B("Permite continuar sin presentar la conclusión como certeza absoluta.", "It allows work to continue without presenting the conclusion as absolute certainty."),
      question: B("¿Qué evidencia independiente respalda esta explicación?", "What independent evidence supports this explanation?"),
      metaphor: B("Varias piezas encajan y sostienen la misma estructura.", "Several pieces fit and support the same structure."),
      example: B("Los registros y entrevistas coinciden en que la disponibilidad se actualiza de forma fragmentada.", "Records and interviews agree that availability is updated in a fragmented way."),
      related: B("Hipótesis · Evidencia · Decisión preliminar", "Hypothesis · Evidence · Preliminary decision"),
      confuse: B("Declarar que ya no existe incertidumbre.", "Declaring that uncertainty no longer exists.")
    },
    question: {
      title: B("Cuestionar", "Question"), layer: "foundation",
      what: B("Reconocer que la evidencia es insuficiente, contradictoria o admite otras explicaciones.", "Recognizing that the evidence is insufficient, contradictory or allows other explanations."),
      why: B("Evita cerrar la investigación demasiado pronto.", "It prevents closing the investigation too early."),
      question: B("¿Qué falta saber y qué alternativa explicativa sigue abierta?", "What remains unknown, and what alternative explanation is still open?"),
      metaphor: B("Una pieza que parece encajar, pero deja un espacio importante.", "A piece that seems to fit but leaves an important gap."),
      example: B("Los registros difieren, pero aún no sabemos si el origen es tecnología, proceso o responsabilidad.", "Records differ, but we do not yet know whether the source is technology, process or responsibility."),
      related: B("Investigación · Hipótesis · Evidencia", "Investigation · Hypothesis · Evidence"),
      confuse: B("Rechazar una hipótesis sin examinarla.", "Rejecting a hypothesis without examining it.")
    },
    reframe: {
      title: B("Reformular", "Reframe"), layer: "foundation",
      what: B("Modificar la hipótesis o la definición del problema cuando la evidencia contradice el planteamiento inicial.", "Changing the hypothesis or problem definition when evidence contradicts the initial framing."),
      why: B("Mantiene el análisis conectado con la realidad observada.", "It keeps the analysis connected to observed reality."),
      question: B("¿Cómo debe cambiar nuestra explicación a partir de la nueva evidencia?", "How should our explanation change based on new evidence?"),
      metaphor: B("Redibujar la ruta cuando el mapa no coincide con el terreno.", "Redrawing the route when the map does not match the terrain."),
      example: B("El problema no es solo la base de datos: también intervienen reglas y coordinación manual.", "The problem is not only the database: rules and manual coordination are also involved."),
      related: B("Hipótesis · Evidencia · Investigación", "Hypothesis · Evidence · Investigation"),
      confuse: B("Abandonar el problema porque una explicación fue rechazada.", "Abandoning the problem because one explanation was rejected.")
    },
    technology: {
      title: B("Tecnología de apoyo", "Supporting technology"), layer: "foundation",
      what: B("Capacidades técnicas que pueden apoyar la observación, investigación, comparación y coordinación.", "Technical capabilities that may support observation, investigation, comparison and coordination."),
      why: B("Puede ampliar el trabajo analítico, pero no reemplaza el proceso de validación.", "It may extend analytical work but does not replace the validation process."),
      question: B("¿Qué capacidad tecnológica ayuda aquí y con qué límites?", "What technological capability helps here, and with what limits?"),
      metaphor: B("Instrumentos de investigación, no un veredicto automático.", "Investigation instruments, not an automatic verdict."),
      example: B("Registros, herramientas de análisis, bases de datos y, opcionalmente, IA.", "Records, analysis tools, databases and, optionally, AI."),
      related: B("Investigación · Evidencia · IA como capacidad", "Investigation · Evidence · AI as capability"),
      confuse: B("La autoridad que define el problema o toma la decisión final.", "The authority that defines the problem or makes the final decision.")
    },
    ai: {
      title: B("IA como capacidad de investigación", "AI as an investigation capability"), layer: "ai",
      what: B("Una capacidad tecnológica opcional que puede asistir puntos específicos del proceso de investigación.", "An optional technological capability that may assist specific points in the investigation process."),
      why: B("Puede ampliar escala y velocidad sin sustituir evidencia, contexto ni responsabilidad.", "It may increase scale and speed without replacing evidence, context or accountability."),
      question: B("¿Dónde aporta valor y qué debe seguir validándose?", "Where does it add value, and what must still be validated?"),
      metaphor: B("Una red de apoyo que toca puntos concretos, no una ruta paralela.", "A support network that touches specific points, not a parallel route."),
      example: B("Detectar, sintetizar, generar hipótesis candidatas, comparar y explorar alternativas.", "Detect, synthesize, generate candidate hypotheses, compare and explore alternatives."),
      related: B("Señal · Investigación · Hipótesis · Evidencia · Alternativas", "Signal · Investigation · Hypothesis · Evidence · Alternatives"),
      confuse: B("Una fuente autónoma de verdad o autoridad decisoria.", "An autonomous source of truth or decision authority.")
    },
    ai_signal: {
      title: B("IA + Señal", "AI + Signal"), layer: "ai",
      what: B("La IA puede examinar grandes volúmenes de información operativa para detectar cambios, patrones o anomalías que merecen investigación.", "AI can scan large volumes of operational information to detect changes, patterns or anomalies that deserve investigation."),
      why: B("Aumenta la capacidad de observación mediante detección de patrones, anomalías y tendencias.", "It increases observation capacity through pattern, anomaly and trend detection."),
      question: B("¿Qué patrón merece atención y cuál es su contexto?", "Which pattern deserves attention, and what is its context?"),
      metaphor: B("Un radar que señala algo inusual sin explicar todavía por qué ocurre.", "A radar that flags something unusual without yet explaining why it happens."),
      example: B("El volumen de quejas aumenta con el tiempo.", "Complaint volume increases over time."),
      related: B("Señal · Investigación · Monitoreo", "Signal · Investigation · Monitoring"),
      confuse: B("ANOMALÍA DETECTADA ≠ PROBLEMA EXPLICADO.", "ANOMALY DETECTED ≠ PROBLEM EXPLAINED."),
      aiCan: B("Detectar patrones, anomalías y tendencias.", "Detect patterns, anomalies and trends."),
      changes: B("Permite observar más información y priorizar señales candidatas.", "It enables broader observation and prioritization of candidate signals."),
      validate: B("La relevancia de la señal, su contexto y si existe una explicación alternativa.", "The relevance of the signal, its context and whether another explanation exists.")
    },
    ai_investigation: {
      title: B("IA + Investigación", "AI + Investigation"), layer: "ai",
      what: B("La IA puede revisar, clasificar, resumir y conectar información procedente de múltiples fuentes.", "AI can review, classify, summarize and connect information from multiple sources."),
      why: B("Reduce esfuerzo de revisión en entrevistas, documentos, tickets, registros y datos históricos.", "It reduces review effort across interviews, documents, tickets, logs, records and historical data."),
      question: B("¿Qué temas candidatos emergen y qué contexto podría faltar?", "Which candidate themes emerge, and what context might be missing?"),
      metaphor: B("Un asistente que organiza muchas pistas para que el analista las examine.", "An assistant that organizes many clues for the analyst to examine."),
      example: B("FUENTES → IA → TEMAS CANDIDATOS → REVISIÓN DEL ANALISTA.", "SOURCES → AI → CANDIDATE THEMES → ANALYST REVIEW."),
      related: B("Investigación · Evidencia · Revisión humana", "Investigation · Evidence · Human review"),
      confuse: B("Un resumen automático con comprensión completa del contexto.", "An automatic summary with complete contextual understanding."),
      aiCan: B("Clasificar, resumir, conectar y organizar fuentes.", "Classify, summarize, connect and organize sources."),
      changes: B("Acelera la revisión y hace visibles temas candidatos.", "It accelerates review and makes candidate themes visible."),
      validate: B("Procedencia, omisiones, contexto organizacional e interpretación del analista.", "Provenance, omissions, organizational context and analyst interpretation.")
    },
    ai_hypothesis: {
      title: B("IA + Hipótesis", "AI + Hypothesis"), layer: "ai",
      what: B("La IA puede proponer explicaciones posibles que deben contrastarse con evidencia.", "AI can propose possible explanations that must be tested against evidence."),
      why: B("Amplía el conjunto de causas candidatas sin convertirlas en hechos.", "It expands the set of candidate causes without turning them into facts."),
      question: B("¿Qué evidencia confirmaría o refutaría cada explicación candidata?", "What evidence would confirm or refute each candidate explanation?"),
      metaphor: B("Generar varias teorías antes de revisar las pruebas.", "Generating several theories before reviewing the evidence."),
      example: B("IA → HIPÓTESIS CANDIDATA → EVIDENCIA → VALIDACIÓN.", "AI → CANDIDATE HYPOTHESIS → EVIDENCE → VALIDATION."),
      related: B("Hipótesis · Evidencia · Reformulación", "Hypothesis · Evidence · Reframing"),
      confuse: B("HIPÓTESIS IA ≠ CAUSA VERIFICADA. IA → VERDAD no es una ruta válida.", "AI HYPOTHESIS ≠ VERIFIED CAUSE. AI → TRUTH is not a valid path."),
      aiCan: B("Generar explicaciones y relaciones candidatas.", "Generate candidate explanations and relationships."),
      changes: B("Amplía el espacio de hipótesis que el analista puede investigar.", "It expands the hypothesis space the analyst can investigate."),
      validate: B("Cada hipótesis mediante evidencia, procedencia y revisión del analista.", "Every hypothesis through evidence, provenance and analyst review.")
    },
    ai_evidence: {
      title: B("IA + Evidencia", "AI + Evidence"), layer: "ai",
      what: B("La IA puede comparar explicaciones candidatas con grandes volúmenes de información y señalar inconsistencias o material relevante.", "AI can compare candidate explanations against large volumes of information and flag inconsistencies or relevant material."),
      why: B("Ayuda a revisar relaciones y contradicciones que podrían pasar inadvertidas.", "It helps review relationships and contradictions that might otherwise be missed."),
      question: B("¿Qué apoya, contradice o queda fuera de la comparación?", "What supports, contradicts or falls outside the comparison?"),
      metaphor: B("Una lupa que amplía detalles, pero puede enfocar el lugar equivocado.", "A magnifying glass that enlarges details but may focus on the wrong place."),
      example: B("Comparar horarios, quejas y registros para localizar inconsistencias.", "Compare schedules, complaints and records to locate inconsistencies."),
      related: B("Evidencia · Procedencia · Validación", "Evidence · Provenance · Validation"),
      confuse: B("La IA puede perder contexto, asociar información incorrectamente o producir afirmaciones sin respaldo.", "AI may miss context, misassociate information or produce unsupported claims."),
      aiCan: B("Comparar, buscar inconsistencias y destacar material relevante.", "Compare, find inconsistencies and highlight relevant material."),
      changes: B("Aumenta la escala de comparación y ayuda a priorizar revisión.", "It increases comparison scale and helps prioritize review."),
      validate: B("Procedencia, asociación correcta, contexto y soporte verificable.", "Provenance, correct association, context and verifiable support.")
    },
    ai_alternatives: {
      title: B("IA + Alternativas", "AI + Alternatives"), layer: "ai",
      what: B("La IA puede ampliar el espacio de soluciones y generar enfoques candidatos.", "AI can expand the solution space and generate candidate approaches."),
      why: B("Ayuda a evitar que la primera solución propuesta se convierta en la única considerada.", "It helps prevent the first proposed solution from becoming the only one considered."),
      question: B("¿Qué opciones adicionales merecen evaluación?", "Which additional options deserve evaluation?"),
      metaphor: B("Un generador de rutas posibles que no elige el destino por nosotros.", "A generator of possible routes that does not choose the destination for us."),
      example: B("Proceso, capacitación, política, integración, software, automatización, IA, combinación o ningún cambio.", "Process, training, policy, integration, software, automation, AI, combination or no change."),
      related: B("Alternativas · Viabilidad · Decisión", "Alternatives · Feasibility · Decision"),
      confuse: B("La IA propone candidatos; no decide cuál alternativa es mejor.", "AI proposes candidates; it does not decide which alternative is best."),
      aiCan: B("Generar y combinar enfoques candidatos.", "Generate and combine candidate approaches."),
      changes: B("Expande el espacio de alternativas antes de evaluarlas.", "It expands the alternative space before evaluation."),
      validate: B("Alineación con el problema, viabilidad, consecuencias y valor real.", "Alignment with the problem, feasibility, consequences and real value.")
    }
  };

  var requiredKeys = ["need_opportunity", "signal", "symptom", "investigation", "hypothesis", "underlying_problem", "alternatives", "evidence", "preliminary_decision", "confirm", "question", "reframe"];

  function getFigure() {
    var mounted = document.querySelector('#week-1 .lesson-diagram[data-diagram04-owner="true"]');
    if (mounted) return mounted;
    var figures = Array.prototype.slice.call(document.querySelectorAll('#week-1 .lesson-diagram'));
    return figures.find(function (figure) {
      var heading = figure.querySelector('.diagram-heading h3, .diagram-heading h2, h3');
      var text = (heading ? heading.textContent : figure.textContent || '').replace(/\s+/g, ' ').trim().toUpperCase();
      return text.indexOf('DE LA SEÑAL AL PROBLEMA SUBYACENTE') !== -1 || text.indexOf('FROM SIGNAL TO UNDERLYING PROBLEM') !== -1;
    }) || null;
  }

  function hideSupersededBusinessDiagram() {
    var figures = Array.prototype.slice.call(document.querySelectorAll('#week-1 .lesson-diagram'));
    var legacy = figures.find(function (figure) {
      var heading = figure.querySelector('.diagram-heading h3, .diagram-heading h2, h3');
      var text = (heading ? heading.textContent : '').replace(/\s+/g, ' ').trim().toUpperCase();
      return text === '¿CÓMO FUNCIONA EL NEGOCIO?' || text === 'HOW DOES THE BUSINESS WORK?';
    });
    if (!legacy) return;
    legacy.hidden = true;
    legacy.dataset.supersededByDiagram03 = 'true';
    var bridge = legacy.nextElementSibling;
    if (bridge && !bridge.classList.contains('lesson-diagram')) bridge.hidden = true;
  }

  function node(key, position, subtitle, tone, ai) {
    var d = details[key];
    return '<button type="button" class="d4pr-node pos-' + position + ' ' + (tone || '') + '" data-d4pr-detail="' + key + '" data-d4pr-ai="' + (ai ? 'true' : 'false') + '"><strong>' + T(d.title) + '</strong><span>' + subtitle + '</span></button>';
  }

  function aiConnection(key, path, x, y) {
    var relation = diagramConfig.aiRelationships.find(function (item) { return item.key === key; });
    return '<g class="d4pr-ai-connection" data-d4pr-detail="' + key + '" role="button" tabindex="0" aria-label="' + T(details[key].title) + '"><path class="d4pr-ai-path" d="' + path + '" marker-end="url(#d4pr-ai-arrow)"></path><path class="d4pr-ai-hit" d="' + path + '"></path><text x="' + x + '" y="' + y + '">' + T(relation.label) + '</text></g>';
  }

  function baseSvg() {
    return '<svg class="d4pr-base-lines" viewBox="0 0 1500 700" preserveAspectRatio="none" aria-hidden="true"><defs><marker id="d4pr-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#70ded8"></path></marker></defs><path d="M310 78 H395" marker-end="url(#d4pr-arrow)"></path><path d="M675 78 H760" marker-end="url(#d4pr-arrow)"></path><path d="M900 132 V215" marker-end="url(#d4pr-arrow)"></path><path d="M760 270 H675" marker-end="url(#d4pr-arrow)"></path><path d="M395 270 H310" marker-end="url(#d4pr-arrow)"></path><path d="M170 325 V410" marker-end="url(#d4pr-arrow)"></path><path d="M310 465 H395" marker-end="url(#d4pr-arrow)"></path><path d="M675 465 H760" marker-end="url(#d4pr-arrow)"></path><path class="is-feedback" d="M535 410 C720 375 720 345 535 325" marker-end="url(#d4pr-arrow)"></path><text x="610" y="363">EVIDENCE TESTS</text><path class="is-feedback" d="M900 520 C1045 610 1090 315 1040 270" marker-end="url(#d4pr-arrow)"></path><text x="1035" y="470">REFRAME</text></svg>';
  }

  function aiSvg() {
    return '<svg class="d4pr-ai-lines" viewBox="0 0 1500 700" preserveAspectRatio="none" aria-label="AI dendritic connections"><defs><marker id="d4pr-ai-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#70ded8"></path></marker></defs>' +
      aiConnection('ai_signal', 'M1160 270 C1010 115 790 78 675 78', 900, 120) +
      aiConnection('ai_investigation', 'M1160 282 C1115 280 1080 270 1040 270', 1055, 250) +
      aiConnection('ai_hypothesis', 'M1160 295 C970 225 805 230 675 270', 820, 235) +
      aiConnection('ai_evidence', 'M1160 310 C980 410 830 462 675 465', 875, 405) +
      aiConnection('ai_alternatives', 'M1160 323 C930 590 560 570 310 465', 670, 565) + '</svg>';
  }

  function headingMarkup() {
    var en = isEnglish();
    return '<span class="d4pr-kicker">' + (en ? 'DIAGRAM 04 · WEEK 1' : 'DIAGRAMA 04 · SEMANA 1') + '</span><h3>' + (en ? 'FROM SYMPTOM TO THE REAL PROBLEM' : 'DEL SÍNTOMA AL PROBLEMA REAL') + '</h3><strong>' + (en ? 'INVESTIGATE BEFORE CONCLUDING' : 'INVESTIGAR ANTES DE CONCLUIR') + '</strong><p>' + (en ? 'A signal starts the inquiry. Evidence tests explanations, refines the problem and supports a preliminary decision.' : 'Una señal inicia la investigación. La evidencia pone a prueba las explicaciones, refina el problema y sustenta una decisión preliminar.') + '</p>';
  }

  function stageMarkup() {
    var en = isEnglish();
    var relationRows = { signal: 2, investigation: 4, hypothesis: 5, alternatives: 7, evidence: 8 };
    var relationships = diagramConfig.aiRelationships.map(function (item) {
      return '<button type="button" class="d4pr-ai-relation" style="--ai-row:' + relationRows[item.target] + '" data-d4pr-detail="' + item.key + '"><small>' + (en ? 'AI → ' : 'IA → ') + T(details[item.target].title) + '</small><strong>' + T(item.label) + '</strong></button>';
    }).join('');
    return '<div class="d4pr-stage" data-diagram04="true"><div class="d4pr-linear-map">' +
      '<div class="d4pr-problem-concept"><strong>' + (en ? 'FROM SYMPTOM TO THE REAL PROBLEM' : 'DEL SÍNTOMA AL PROBLEMA REAL') + '</strong><span>' + (en ? 'INVESTIGATE BEFORE CONCLUDING' : 'INVESTIGAR ANTES DE CONCLUIR') + '</span></div><div class="d4pr-core-link" aria-hidden="true"></div>' +
      '<div class="d4pr-flow">' +
      node('need_opportunity', 1, en ? 'What deserves study?' : '¿Qué merece estudio?', '', false) +
      node('signal', 2, en ? 'What changed?' : '¿Qué cambió?', 'is-observation', true) +
      node('symptom', 3, en ? 'What do we observe?' : '¿Qué observamos?', 'is-observation', false) +
      node('investigation', 4, en ? 'Gather and connect facts' : 'Recopilar y conectar hechos', 'is-analysis', true) +
      node('hypothesis', 5, en ? 'Candidate explanation' : 'Explicación candidata', 'is-analysis', true) +
      node('underlying_problem', 6, en ? 'Evidence-supported condition' : 'Condición respaldada', 'is-problem', false) +
      node('alternatives', 7, en ? 'Explore possible responses' : 'Explorar respuestas posibles', '', true) +
      node('evidence', 8, en ? 'Support · contradict · reframe' : 'Sostener · contradecir · reformular', 'is-analysis', true) +
      node('preliminary_decision', 9, en ? 'Proceed · investigate · reframe' : 'Avanzar · investigar · reformular', 'is-decision', false) +
      '</div><div class="d4pr-ai-relations">' + relationships + '</div>' +
      '<aside class="d4pr-ai-column"><button type="button" class="d4pr-technology" data-d4pr-detail="technology"><strong>' + (en ? 'TECHNOLOGY' : 'TECNOLOGÍA') + '</strong></button><p class="d4pr-tech-prompt">' + (en ? 'Would you like to add AI as a technological capability?' : '¿Deseas incorporar IA como capacidad tecnológica?') + '</p><div class="d4pr-lens-control" role="group" aria-label="' + (en ? 'Diagram 04 view' : 'Vista del Diagrama 04') + '"><button type="button" data-d4pr-lens="base" aria-pressed="true">BASE</button><button type="button" class="d4pr-lens-ai" data-d4pr-lens="ai" aria-pressed="false">' + T(diagramConfig.aiLensState.inactive) + '</button></div><button type="button" class="d4pr-ai-node" data-d4pr-detail="ai"><strong>' + (en ? 'ARTIFICIAL INTELLIGENCE' : 'INTELIGENCIA ARTIFICIAL') + '</strong></button></aside></div><div class="d4pr-review"><span>' + (en ? 'EVIDENCE MAY' : 'LA EVIDENCIA PUEDE') + '</span><button type="button" class="d4pr-review-action is-confirm" data-d4pr-detail="confirm">' + (en ? 'CONFIRM' : 'CONFIRMAR') + '</button><button type="button" class="d4pr-review-action is-question" data-d4pr-detail="question">' + (en ? 'QUESTION' : 'CUESTIONAR') + '</button><button type="button" class="d4pr-review-action is-reframe" data-d4pr-detail="reframe">' + (en ? 'REFRAME' : 'REFORMULAR') + '</button></div></div>';
  }

  function setLens(active) {
    var figure = getFigure();
    if (!figure) return;
    var stage = figure.querySelector('.d4pr-stage');
    if (!stage) return;
    stage.classList.toggle('is-ai-lens', !!active);
    figure.dataset.d4prLens = active ? 'ai' : 'base';
    var base = figure.querySelector('[data-d4pr-lens="base"]');
    var ai = figure.querySelector('[data-d4pr-lens="ai"]');
    if (base) base.setAttribute('aria-pressed', active ? 'false' : 'true');
    if (ai) {
      ai.setAttribute('aria-pressed', active ? 'true' : 'false');
      ai.textContent = T(active ? diagramConfig.aiLensState.active : diagramConfig.aiLensState.inactive);
    }
    if (currentKey) renderDrawer(currentKey);
  }

  function section(label, value, className) {
    if (!value) return '';
    return '<section class="d4pr-section ' + (className || '') + '"><h5>' + label + '</h5><p>' + value + '</p></section>';
  }

  function drawerMarkup(key) {
    var d = details[key];
    if (!d) return '';
    var en = isEnglish();
    var grid = '';
    grid += section(en ? 'WHAT IS IT?' : '¿QUÉ ES?', T(d.what));
    grid += section(en ? 'WHY DOES IT MATTER?' : '¿POR QUÉ IMPORTA?', T(d.why));
    grid += section(en ? 'GUIDING QUESTION' : 'PREGUNTA GUÍA', T(d.question));
    grid += section(en ? 'METAPHOR' : 'METÁFORA', T(d.metaphor));
    grid += section(en ? 'EXAMPLE' : 'EJEMPLO', T(d.example));
    grid += section(en ? 'RELATED CONCEPTS' : 'CONCEPTOS RELACIONADOS', T(d.related));
    grid += section(en ? 'DO NOT CONFUSE WITH' : 'NO CONFUNDIR CON', T(d.confuse));
    grid += section(en ? 'ACADEMIC SOURCE / LAYER' : 'FUENTE ACADÉMICA / CAPA', d.layer === 'ai' ? AI_SOURCE : FOUNDATION_SOURCE);
    var aiDetail = d.layer === 'ai' ? d : (document.querySelector('.d4pr-stage.is-ai-lens') && d.aiKey ? details[d.aiKey] : null);
    if (aiDetail) {
      grid += section(en ? 'AI CONNECTION' : 'CONEXIÓN IA', T(aiDetail.title), 'is-ai');
      grid += section(en ? 'WHAT AI CAN DO HERE' : 'QUÉ PUEDE HACER LA IA AQUÍ', T(aiDetail.aiCan || aiDetail.what), 'is-ai');
      grid += section(en ? 'WHAT CHANGES' : 'QUÉ CAMBIA', T(aiDetail.changes), 'is-ai');
      grid += section(en ? 'WHAT MUST STILL BE VALIDATED' : 'QUÉ DEBE SEGUIR VALIDÁNDOSE', T(aiDetail.validate || aiDetail.confuse), 'is-ai');
    }
    return '<div class="d4pr-backdrop" data-d4pr-close="true"></div><article class="d4pr-drawer" role="dialog" aria-modal="true" aria-labelledby="d4pr-drawer-title"><button type="button" class="d4pr-close" data-d4pr-close="true" aria-label="' + (en ? 'Close' : 'Cerrar') + '">×</button><header class="d4pr-drawer-head"><h4 id="d4pr-drawer-title">' + T(d.title) + '</h4></header><div class="d4pr-drawer-grid">' + grid + '</div></article>';
  }

  function closeDrawer() {
    document.querySelectorAll('.d4pr-backdrop, .d4pr-drawer').forEach(function (node) { node.remove(); });
    currentKey = null;
  }

  function renderDrawer(key) {
    if (!details[key]) return;
    closeDrawer();
    currentKey = key;
    var holder = document.createElement('div');
    holder.innerHTML = drawerMarkup(key);
    while (holder.firstChild) document.body.appendChild(holder.firstChild);
    var close = document.querySelector('.d4pr-close');
    document.querySelectorAll('[data-d4pr-close="true"]').forEach(function (node) {
      node.onclick = function (event) { event.preventDefault(); closeDrawer(); };
    });
    if (close) close.focus({ preventScroll: true });
  }

  function validateKeys(figure) {
    var visibleKeys = Array.prototype.slice.call(figure.querySelectorAll('[data-d4pr-detail]')).map(function (node) { return node.getAttribute('data-d4pr-detail'); });
    var unresolved = visibleKeys.filter(function (key, index) { return visibleKeys.indexOf(key) === index && !details[key]; });
    var missingRequired = requiredKeys.filter(function (key) { return visibleKeys.indexOf(key) === -1; });
    window.CST212_DIAGRAM04_VALIDATION = {
      visibleKeys: visibleKeys,
      unresolvedKeys: unresolved,
      missingRequiredKeys: missingRequired,
      passed: unresolved.length === 0 && missingRequired.length === 0
    };
    figure.dataset.contentKeys = window.CST212_DIAGRAM04_VALIDATION.passed ? 'resolved' : 'unresolved';
  }

  function mount() {
    var figure = getFigure();
    if (!figure) return false;
    if (figure.querySelector('.d4pr-stage[data-diagram04="true"]')) return true;
    hideSupersededBusinessDiagram();
    figure.dataset.diagram04Owner = 'true';
    figure.classList.add('d4pr-figure');
    var heading = figure.querySelector('.diagram-heading, .d4pr-heading');
    if (!heading) { heading = document.createElement('header'); figure.prepend(heading); }
    heading.className = 'd4pr-heading';
    heading.innerHTML = headingMarkup();
    var oldStage = figure.querySelector('.diagram-stage');
    var holder = document.createElement('div');
    holder.innerHTML = stageMarkup();
    if (oldStage) oldStage.replaceWith(holder.firstElementChild);
    else heading.insertAdjacentElement('afterend', holder.firstElementChild);
    var caption = figure.querySelector('figcaption, .diagram-caption, .d4pr-caption');
    if (!caption) { caption = document.createElement('figcaption'); figure.appendChild(caption); }
    caption.className = 'd4pr-caption';
    caption.innerHTML = '<span>' + (isEnglish() ? 'Evidence may confirm, question or reframe a hypothesis. A rejected hypothesis does not make the problem disappear.' : 'La evidencia puede confirmar, cuestionar o reformular una hipótesis. Rechazar una hipótesis no hace desaparecer el problema.') + '</span><span><b>' + (isEnglish() ? 'SOURCE' : 'FUENTE') + '</b> ' + FOUNDATION_SOURCE + '</span>';
    setLens(false);
    validateKeys(figure);
    bindDirectControls(figure.querySelector('.d4pr-stage'));
    return true;
  }

  function bindDirectControls(root) {
    if (!root) return;
    root.querySelectorAll('[data-d4pr-detail]').forEach(function (node) {
      node.onclick = function (event) { event.preventDefault(); renderDrawer(node.getAttribute('data-d4pr-detail')); };
    });
    root.querySelectorAll('[data-d4pr-lens]').forEach(function (node) {
      node.onclick = function (event) { event.preventDefault(); setLens(node.getAttribute('data-d4pr-lens') === 'ai'); };
    });
  }

  window.addEventListener('click', function (event) {
    var lens = event.target.closest('[data-d4pr-lens]');
    if (lens) {
      event.preventDefault();
      event.stopImmediatePropagation();
      setLens(lens.getAttribute('data-d4pr-lens') === 'ai');
      return;
    }
    var open = event.target.closest('[data-d4pr-detail]');
    if (open) {
      event.preventDefault();
      event.stopImmediatePropagation();
      renderDrawer(open.getAttribute('data-d4pr-detail'));
      return;
    }
    if (event.target.closest('[data-d4pr-close="true"]')) {
      event.preventDefault();
      event.stopImmediatePropagation();
      closeDrawer();
    }
  }, true);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && document.querySelector('.d4pr-drawer')) { closeDrawer(); return; }
    var connection = event.target.closest && event.target.closest('.d4pr-ai-connection[data-d4pr-detail]');
    if (connection && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      renderDrawer(connection.getAttribute('data-d4pr-detail'));
    }
  });

  function start() {
    if (!mount()) { window.setTimeout(start, 170); return; }
    var week = document.getElementById('week-1');
    if (!week) return;
    new MutationObserver(function () {
      if (!document.querySelector('.d4pr-stage[data-diagram04="true"]') && getFigure()) mount();
    }).observe(week, { childList: true, subtree: true });
  }

  window.CST212DiagramAILenses = window.CST212DiagramAILenses || {};
  window.CST212DiagramAILenses.diagram04 = diagramConfig;
  window.CST212DiagramAIGrammar = window.CST212DiagramAIGrammar || {
    name: "DENDRITIC AUGMENTATION",
    base: "canonical diagram remains visible and interactive",
    origin: "technology or capability layer",
    relationship: "AI touches specific canonical nodes",
    labels: "describe the capability at each touchpoint",
    interaction: "clicking a connection explains what happens and what must be validated"
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
}());
