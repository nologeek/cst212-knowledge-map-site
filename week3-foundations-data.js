(function () {
  'use strict';

  // D01 only. Preserve the shared registry and every other contributor's data.
  const w3 = window.CST212_W3 = window.CST212_W3 || {};
  w3.diagrams = w3.diagrams || {};
  w3.concepts = w3.concepts || {};
  w3.sources = w3.sources || {};
  w3.models = w3.models || {};

  function t(es, en) { return { es: es, en: en }; }

  if (!w3.sources['w3-course']) {
    w3.sources['w3-course'] = {
      author: 'CST212 ES_A190',
      year: 's. f.',
      title: 'Semana 3: Modelado de datos y procesos. Material e instrucciones acad\u00e9micas suministrados por el estudiante.'
    };
  }
  w3.sources.w3f_editorial = {
    author: 'Elaboraci\u00f3n did\u00e1ctica del atlas CST212',
    year: 's. f.',
    title: 'D01: ejemplos e interpretaciones de modelado y extensi\u00f3n de IA elaborados para el atlas. Las propuestas de IA no se atribuyen a Tiffin.'
  };

  // Each entry supplies all eight base panels and all four contextual AI panels.
  function register(concept) {
    concept.sources = concept.sources || (concept.layer === 'ai'
      ? ['w3f_editorial']
      : concept.layer === 'deepening'
        ? ['w3-course', 'w3f_editorial']
        : ['w3-course']);
    w3.concepts[concept.id] = concept;
  }

  register({
    id: 'w3f_facts',
    label: t('Hechos', 'Facts'),
    layer: 'foundation',
    what: t('Informaci\u00f3n aportada o constatada sobre la situaci\u00f3n que se analiza. Es el punto de partida para formular requisitos.', 'Supplied or established information about the situation under analysis. It is the starting point for formulating requirements.'),
    why: t('Anclar el an\u00e1lisis en evidencia evita presentar una suposici\u00f3n como una necesidad del sistema.', 'Grounding analysis in evidence prevents an assumption from being presented as a system need.'),
    question: t('\u00bfQu\u00e9 sabemos y de d\u00f3nde procede esa informaci\u00f3n?', 'What do we know, and where did that information come from?'),
    example: t('Hechos suministrados de Kitchen Gadgets: el cliente env\u00eda un pedido mediante EDI y el sistema procesa el cargo despu\u00e9s del env\u00edo.', 'Supplied Kitchen Gadgets facts: the customer sends an order through EDI, and the system processes the charge after shipment.'),
    analogy: t('Las observaciones del terreno antes de dibujar el plano: describen lo encontrado, no lo que deseamos construir.', 'Site observations before drawing a blueprint: they describe what was found, not what we wish to build.'),
    related: ['w3f_requisites', 'w3f_traceability', 'w3f_candidate_model'],
    notConfuse: t('Un hecho no es una propuesta de dise\u00f1o. Que exista un pedido EDI no demuestra que haya una aplicaci\u00f3n web.', 'A fact is not a design proposal. An EDI order does not establish that a web application exists.'),
    ai: {
      connection: t('Extensi\u00f3n IA: ayudar a localizar evidencia en el material aportado.', 'AI extension: help locate evidence in the supplied material.'),
      does: t('Extraer afirmaciones y conservar el fragmento de origen junto a cada una.', 'Extract statements and retain the source passage alongside each one.'),
      changes: t('La recopilaci\u00f3n gana rapidez; la evidencia sigue siendo el texto original.', 'Collection becomes faster; the original text remains the evidence.'),
      validate: t('Confirmar cada afirmaci\u00f3n contra su fuente y separar inferencias de hechos.', 'Confirm each statement against its source and separate inferences from facts.')
    }
  });

  register({
    id: 'w3f_requisites',
    label: t('Requisitos', 'Requirements'),
    layer: 'foundation',
    what: t('Enunciados de las capacidades y condiciones que el sistema debe satisfacer, derivados de necesidades y hechos documentados.', 'Statements of the capabilities and conditions the system must satisfy, derived from documented needs and facts.'),
    why: t('Dan un criterio para decidir si un modelo representa lo que se necesita o agrega comportamientos sin respaldo.', 'They provide a criterion for deciding whether a model represents the needs or adds unsupported behavior.'),
    question: t('\u00bfQu\u00e9 debe cumplir el sistema y qu\u00e9 evidencia respalda cada requisito?', 'What must the system satisfy, and what evidence supports each requirement?'),
    example: t('Formulaci\u00f3n propuesta a partir del caso: el sistema debe procesar el cargo despu\u00e9s del env\u00edo. Conserva la condici\u00f3n temporal suministrada.', 'Proposed wording based on the case: the system must process the charge after shipment. It preserves the supplied timing condition.'),
    analogy: t('El encargo que debe cumplir un plano antes de elegir los materiales de construcci\u00f3n.', 'The brief a blueprint must satisfy before construction materials are chosen.'),
    related: ['w3f_facts', 'w3f_functions', 'w3f_logical_models', 'w3f_traceability', 'w3f_ai_synthesize_detail'],
    notConfuse: t('Un requisito expresa una necesidad; una sugerencia de IA o una tecnolog\u00eda preferida no se vuelve requisito por aparecer en un borrador.', 'A requirement expresses a need; an AI suggestion or preferred technology does not become a requirement by appearing in a draft.'),
    ai: {
      connection: t('Extensi\u00f3n IA: sintetizar requisitos conservando sus fuentes y condiciones.', 'AI extension: synthesize requirements while retaining their sources and conditions.'),
      does: t('Resumir enunciados, se\u00f1alar duplicados y marcar ambig\u00fcedades para revisi\u00f3n.', 'Summarize statements, flag duplicates, and mark ambiguities for review.'),
      changes: t('El analista recibe una s\u00edntesis rastreable que todav\u00eda requiere aprobaci\u00f3n.', 'The analyst receives a traceable synthesis that still requires approval.'),
      validate: t('Comprobar que no se pierdan actores, restricciones ni el orden env\u00edo antes de cargo.', 'Check that actors, constraints, and the shipment-before-charge order are preserved.')
    }
  });

  register({
    id: 'w3f_functions',
    label: t('Funciones', 'Functions'),
    layer: 'foundation',
    what: t('Agrupaciones de lo que el sistema debe hacer. El FDD organiza estas funciones; el modelo l\u00f3gico explica c\u00f3mo se relacionan datos, procesos y decisiones.', 'Groupings of what the system must do. The FDD organizes these functions; the logical model explains how data, processes, and decisions relate.'),
    why: t('Conectan los requisitos con responsabilidades comprensibles antes de detallar las transformaciones de informaci\u00f3n.', 'They connect requirements to understandable responsibilities before information transformations are detailed.'),
    question: t('\u00bfQu\u00e9 funciones necesitamos para satisfacer los requisitos?', 'Which functions do we need to satisfy the requirements?'),
    example: t('Agrupaci\u00f3n candidata del caso: gestionar pedidos, coordinar el env\u00edo y procesar el cargo. Es una organizaci\u00f3n propuesta, no un organigrama suministrado.', 'Candidate grouping for the case: manage orders, coordinate shipment, and process the charge. This is a proposed organization, not a supplied organization chart.'),
    analogy: t('Las tareas del proyecto agrupadas por prop\u00f3sito antes de explicar qu\u00e9 informaci\u00f3n necesita cada una.', 'Project tasks grouped by purpose before explaining the information each one needs.'),
    related: ['w3f_requisites', 'w3f_fdd', 'w3f_logical_models', 'w3f_ai_group_detail'],
    notConfuse: t('Una funci\u00f3n no implica un departamento, una pantalla ni un servicio t\u00e9cnico. El FDD tampoco representa por s\u00ed solo los flujos de datos.', 'A function does not imply a department, screen, or technical service. The FDD alone does not represent data flows either.'),
    ai: {
      connection: t('Extensi\u00f3n IA: agrupar requisitos en funciones candidatas.', 'AI extension: group requirements into candidate functions.'),
      does: t('Proponer nombres y agrupaciones con la lista de requisitos que sostiene cada funci\u00f3n.', 'Propose names and groupings with the requirements that support each function.'),
      changes: t('Se pueden comparar distintas agrupaciones antes de fijar el modelo.', 'Different groupings can be compared before settling the model.'),
      validate: t('Revisar cobertura, solapamientos y funciones sin evidencia de una necesidad.', 'Review coverage, overlaps, and functions without evidence of a need.')
    }
  });

  register({
    id: 'w3f_fdd',
    label: t('FDD: puente desde las funciones', 'FDD: the bridge from functions'),
    layer: 'foundation',
    what: t('El diagrama de descomposici\u00f3n funcional organiza funciones en una jerarqu\u00eda. Aqu\u00ed sirve de puente desde lo trabajado en Semana 2 hacia el modelado l\u00f3gico.', 'The functional decomposition diagram organizes functions in a hierarchy. Here it bridges the Week 2 work and logical modeling.'),
    why: t('Aprovecha la organizaci\u00f3n de funciones ya construida para preguntar qu\u00e9 datos y decisiones necesita cada funci\u00f3n.', 'It uses the existing organization of functions to ask what data and decisions each function needs.'),
    question: t('\u00bfQu\u00e9 falta explicar despu\u00e9s de identificar las funciones?', 'What remains to be explained after identifying the functions?'),
    example: t('Una funci\u00f3n candidata llamada gestionar pedidos orienta el siguiente an\u00e1lisis: qu\u00e9 pedido recibe, qu\u00e9 transforma y qu\u00e9 informaci\u00f3n entrega.', 'A candidate function called manage orders guides the next analysis: which order it receives, what it transforms, and what information it produces.'),
    analogy: t('Un \u00edndice organiza los temas; todav\u00eda falta explicar las relaciones dentro del contenido.', 'A table of contents organizes topics; the relationships within the content still need explanation.'),
    related: ['w3f_functions', 'w3f_requisites', 'w3f_logical_models'],
    notConfuse: t('La jerarqu\u00eda del FDD no es una secuencia temporal ni un diagrama de flujo de datos.', 'The FDD hierarchy is neither a timeline nor a data flow diagram.'),
    ai: {
      connection: t('Extensi\u00f3n IA: usar funciones existentes como punto de partida del borrador.', 'AI extension: use existing functions as the starting point for a draft.'),
      does: t('Sugerir preguntas sobre entradas, salidas y decisiones de cada funci\u00f3n.', 'Suggest questions about the inputs, outputs, and decisions of each function.'),
      changes: t('El puente al modelado produce preguntas expl\u00edcitas en lugar de completar huecos de forma silenciosa.', 'The bridge to modeling produces explicit questions instead of silently filling gaps.'),
      validate: t('No convertir autom\u00e1ticamente cada rama del FDD en un proceso o flujo confirmado.', 'Do not automatically turn each FDD branch into a confirmed process or flow.')
    }
  });

  register({
    id: 'w3f_logical_models',
    label: t('Modelos l\u00f3gicos', 'Logical models'),
    layer: 'foundation',
    what: t('Una representaci\u00f3n de lo que el sistema debe hacer y c\u00f3mo se relacionan sus datos, procesos y decisiones, sin especificar todav\u00eda la tecnolog\u00eda concreta que lo implementar\u00e1.', 'A representation of what the system must do and how its data, processes, and decisions relate, without yet specifying the concrete technology that will implement it.'),
    why: t('Permite analizar y corregir el funcionamiento conceptual antes de tomar decisiones f\u00edsicas de dise\u00f1o. Este es el foco principal de la Semana 3 dentro del an\u00e1lisis del sistema.', 'It allows conceptual behavior to be analyzed and corrected before physical design decisions are made. This is the main Week 3 focus within system analysis.'),
    question: t('\u00bfC\u00f3mo debe funcionar el sistema independientemente de la tecnolog\u00eda que finalmente utilicemos?', 'How should the system work independently of the technology we eventually use?'),
    example: t('Interpretaci\u00f3n candidata: cliente \u2192 pedido \u2192 verificaci\u00f3n de inventario \u2192 env\u00edo. Resume relaciones del ejemplo; no es por s\u00ed sola un DFD formal ni agrega una arquitectura al caso.', 'Candidate interpretation: customer \u2192 order \u2192 inventory verification \u2192 shipment. It summarizes relationships in the example; it is not itself a formal DFD and adds no architecture to the case.'),
    analogy: t('El plano de una construcci\u00f3n antes de elegir materiales y comenzar a construir. Corregirlo temprano evita construir sobre una interpretaci\u00f3n equivocada.', 'A building blueprint before choosing materials and starting construction. Correcting it early avoids building on a mistaken interpretation.'),
    related: ['w3f_functions', 'w3f_fdd', 'w3f_design', 'w3f_candidate_model', 'w3f_consistency', 'w3f_traceability'],
    notConfuse: t('L\u00f3gico enfatiza qu\u00e9 ocurre; f\u00edsico, c\u00f3mo implementarlo. Un artefacto l\u00f3gico puede registrar restricciones de interfaz conocidas, como EDI, sin decidir toda la soluci\u00f3n t\u00e9cnica.', 'Logical emphasizes what happens; physical emphasizes how to implement it. A logical artifact may record known interface constraints, such as EDI, without choosing the entire technical solution.'),
    ai: {
      connection: t('Extensi\u00f3n IA: producir representaciones l\u00f3gicas candidatas desde requisitos documentados.', 'AI extension: produce candidate logical representations from documented requirements.'),
      does: t('Proponer relaciones entre datos, procesos y decisiones, identificando supuestos y preguntas abiertas.', 'Propose relationships between data, processes, and decisions, identifying assumptions and open questions.'),
      changes: t('Se obtienen borradores para analizar antes; generar el modelo no demuestra su validez.', 'Drafts become available for earlier analysis; generating a model does not establish its validity.'),
      validate: t('Revisar fidelidad al caso, cobertura de requisitos, coherencia y trazabilidad antes de aceptar.', 'Review fidelity to the case, requirements coverage, consistency, and traceability before acceptance.')
    }
  });

  register({
    id: 'w3f_design',
    label: t('Dise\u00f1o', 'Design'),
    layer: 'foundation',
    what: t('En esta secuencia, la etapa que decide c\u00f3mo realizar la soluci\u00f3n con tecnolog\u00edas, interfaces y estructuras concretas a partir del modelo l\u00f3gico.', 'In this sequence, the stage that decides how to realize the solution using concrete technologies, interfaces, and structures based on the logical model.'),
    why: t('Distinguirla del modelado l\u00f3gico ayuda a resolver primero el funcionamiento necesario y despu\u00e9s elegir una realizaci\u00f3n t\u00e9cnica.', 'Distinguishing it from logical modeling helps establish the required behavior before selecting a technical realization.'),
    question: t('\u00bfC\u00f3mo implementar\u00e1 la tecnolog\u00eda el comportamiento ya analizado?', 'How will technology implement the behavior already analyzed?'),
    example: t('Ejemplo f\u00edsico ilustrativo, no arquitectura afirmada de Kitchen Gadgets: aplicaci\u00f3n web, API, base de datos e infraestructura en la nube.', 'Illustrative physical example, not an asserted Kitchen Gadgets architecture: web application, API, database, and cloud infrastructure.'),
    analogy: t('Elegir materiales y soluciones constructivas para realizar el plano.', 'Choosing materials and construction methods to realize the blueprint.'),
    related: ['w3f_logical_models', 'w3f_implementation', 'w3f_compare_purpose', 'w3f_compare_participants', 'w3f_compare_information', 'w3f_compare_behavior'],
    notConfuse: t('Dise\u00f1o f\u00edsico no significa solamente hardware. Aqu\u00ed aparece como referencia de secuencia, sin desarrollar contenidos de semanas posteriores.', 'Physical design does not mean hardware alone. It appears here as a sequence reference, without developing later weeks\u2019 content.'),
    ai: {
      connection: t('Extensi\u00f3n IA: ayudar a reconocer cu\u00e1ndo una propuesta ya elige tecnolog\u00eda.', 'AI extension: help recognize when a proposal already selects technology.'),
      does: t('Separar sugerencias de realizaci\u00f3n t\u00e9cnica de descripciones del comportamiento requerido.', 'Separate technical realization suggestions from descriptions of required behavior.'),
      changes: t('Las decisiones t\u00e9cnicas quedan visibles como propuestas con justificaci\u00f3n pendiente.', 'Technical decisions become visible as proposals whose justification remains pending.'),
      validate: t('Comprobar que las sugerencias no se presenten como requisitos del caso ni alteren el modelo aceptado.', 'Check that suggestions are not presented as case requirements and do not alter the accepted model.')
    }
  });

  register({
    id: 'w3f_implementation',
    label: t('Implementaci\u00f3n', 'Implementation'),
    layer: 'foundation',
    what: t('La realizaci\u00f3n de la soluci\u00f3n dise\u00f1ada en un sistema operativo. Cierra esta representaci\u00f3n de secuencia; no ampl\u00eda el temario de la Semana 3.', 'The realization of the designed solution as an operational system. It closes this sequence representation without expanding the Week 3 syllabus.'),
    why: t('Muestra para qu\u00e9 se modela antes de construir: detectar interpretaciones equivocadas cuando corregirlas todav\u00eda es m\u00e1s sencillo.', 'It shows why modeling precedes building: to detect mistaken interpretations while correcting them is still easier.'),
    question: t('\u00bfLo construido realiza el comportamiento que se analiz\u00f3 y acept\u00f3?', 'Does the built system realize the behavior that was analyzed and accepted?'),
    example: t('Criterio derivado del hecho suministrado: una realizaci\u00f3n del caso debe respetar que el cargo se procesa despu\u00e9s del env\u00edo, cualquiera que sea su tecnolog\u00eda.', 'Criterion derived from the supplied fact: an implementation of the case must respect that the charge is processed after shipment, whatever its technology.'),
    analogy: t('Construir a partir del plano acordado y comprobar que la construcci\u00f3n corresponde al encargo.', 'Building from the agreed blueprint and checking that the construction meets the brief.'),
    related: ['w3f_design', 'w3f_logical_models', 'w3f_requisites', 'w3f_traceability'],
    notConfuse: t('Un prototipo que funciona no demuestra por s\u00ed solo que los requisitos sean correctos o que el modelo haya sido validado.', 'A working prototype does not by itself establish that the requirements are correct or that the model has been validated.'),
    ai: {
      connection: t('Extensi\u00f3n IA: usar el modelo como referencia para explicar el comportamiento de una realizaci\u00f3n.', 'AI extension: use the model as a reference for explaining an implementation\u2019s behavior.'),
      does: t('Ayudar a identificar diferencias aparentes entre lo descrito y lo construido.', 'Help identify apparent differences between what was described and what was built.'),
      changes: t('La comparaci\u00f3n puede asistirse, pero sigue necesitando evidencia del sistema real.', 'Comparison can be assisted, but it still needs evidence from the actual system.'),
      validate: t('La asistencia o generaci\u00f3n de c\u00f3digo no sustituye comprobar que se cumplen los requisitos.', 'Assistance or code generation does not replace checking that requirements are satisfied.')
    }
  });

  register({
    id: 'w3f_candidate_model',
    label: t('Modelo candidato', 'Candidate model'),
    layer: 'deepening',
    what: t('Una interpretaci\u00f3n propuesta de datos, procesos y decisiones que todav\u00eda debe contrastarse con los requisitos y la evidencia.', 'A proposed interpretation of data, processes, and decisions that must still be checked against requirements and evidence.'),
    why: t('Su etiqueta mantiene visible la diferencia entre una representaci\u00f3n plausible y una representaci\u00f3n aceptada.', 'Its label keeps the distinction between a plausible representation and an accepted one visible.'),
    question: t('\u00bfQu\u00e9 partes est\u00e1n respaldadas y cu\u00e1les son decisiones o supuestos de esta propuesta?', 'Which parts are supported, and which are decisions or assumptions in this proposal?'),
    example: t('Interpretaci\u00f3n candidata: organizar el caso en recibir pedido, verificar inventario, generar orden de env\u00edo y procesar cargo. Los nombres y la descomposici\u00f3n son propuestos.', 'Candidate interpretation: organize the case into receive order, verify inventory, generate shipping order, and process charge. The names and decomposition are proposed.'),
    analogy: t('Un boceto a l\u00e1piz que se puede comparar con otros antes de aprobar el plano.', 'A pencil sketch that can be compared with others before approving the blueprint.'),
    related: ['w3f_logical_models', 'w3f_draft', 'w3f_analystvalidation', 'w3f_accepted', 'w3f_ai_generate_detail'],
    notConfuse: t('Candidato no significa hecho del caso. Puede ser creado por una persona o por IA y en ambos casos necesita revisi\u00f3n.', 'Candidate does not mean a case fact. It may be created by a person or by AI, and either way it needs review.'),
    ai: {
      connection: t('Extensi\u00f3n IA: generar candidatos con supuestos expl\u00edcitos.', 'AI extension: generate candidates with explicit assumptions.'),
      does: t('Ofrecer alternativas y explicar qu\u00e9 requisito sustenta cada elemento.', 'Offer alternatives and explain which requirement supports each element.'),
      changes: t('Aumenta la cantidad de opciones; tambi\u00e9n la necesidad de comparar su sustento.', 'The number of options grows, as does the need to compare their supporting evidence.'),
      validate: t('Rechazar elementos inventados y resolver preguntas abiertas antes de promover un candidato a aceptado.', 'Reject invented elements and resolve open questions before promoting a candidate to accepted.')
    }
  });

  register({
    id: 'w3f_consistency',
    label: t('Consistencia', 'Consistency'),
    layer: 'deepening',
    what: t('Coherencia entre las afirmaciones, reglas y representaciones del modelo, y entre estas y los requisitos documentados.', 'Coherence among the model\u2019s statements, rules, and representations, and between these and the documented requirements.'),
    why: t('Permite detectar contradicciones antes de que diferentes partes del sistema se construyan con interpretaciones incompatibles.', 'It helps detect contradictions before different parts of the system are built from incompatible interpretations.'),
    question: t('\u00bfEl modelo conserva el mismo significado y respeta las condiciones del caso en todas sus representaciones?', 'Does the model preserve the same meaning and respect the case conditions across its representations?'),
    example: t('Si un borrador propone cobrar al recibir el pedido, contradice el hecho suministrado de procesar el cargo despu\u00e9s del env\u00edo.', 'If a draft proposes charging upon order receipt, it contradicts the supplied fact that the charge is processed after shipment.'),
    analogy: t('Distintas vistas de un mismo plano deben describir la misma construcci\u00f3n.', 'Different views of the same blueprint must describe the same building.'),
    related: ['w3f_requisites', 'w3f_logical_models', 'w3f_traceability', 'w3f_analystvalidation', 'w3f_ai_check_detail'],
    notConfuse: t('Un modelo puede ser coherente consigo mismo y aun as\u00ed describir una necesidad equivocada. Consistencia no equivale a correcci\u00f3n completa.', 'A model may be internally coherent and still describe the wrong need. Consistency does not equal complete correctness.'),
    ai: {
      connection: t('Extensi\u00f3n IA: se\u00f1alar posibles contradicciones para su revisi\u00f3n.', 'AI extension: flag possible contradictions for review.'),
      does: t('Comparar reglas y nombres entre requisitos y borradores, indicando la evidencia del posible conflicto.', 'Compare rules and names across requirements and drafts, indicating the evidence for a possible conflict.'),
      changes: t('Se obtiene una lista de alertas argumentadas, no una certificaci\u00f3n autom\u00e1tica.', 'The result is a list of reasoned alerts, not automatic certification.'),
      validate: t('Confirmar cada alerta y buscar omisiones; la ausencia de alertas no prueba consistencia.', 'Confirm each alert and look for omissions; the absence of alerts does not prove consistency.')
    }
  });

  register({
    id: 'w3f_traceability',
    label: t('Trazabilidad', 'Traceability'),
    layer: 'deepening',
    what: t('V\u00ednculos expl\u00edcitos que permiten seguir un elemento del modelo hasta el requisito y la evidencia que justifican su existencia.', 'Explicit links that allow a model element to be followed back to the requirement and evidence that justify its existence.'),
    why: t('Ayuda a detectar requisitos sin representaci\u00f3n, elementos sin respaldo y el impacto de un cambio.', 'It helps detect requirements without representation, unsupported elements, and the impact of a change.'),
    question: t('\u00bfQu\u00e9 requisito justifica este elemento y d\u00f3nde est\u00e1 la evidencia?', 'Which requirement justifies this element, and where is the evidence?'),
    example: t('V\u00ednculo propuesto: hecho cargo despu\u00e9s del env\u00edo \u2192 requisito que conserva esa condici\u00f3n \u2192 proceso candidato procesar cargo.', 'Proposed link: charge-after-shipment fact \u2192 requirement preserving that condition \u2192 candidate process process charge.'),
    analogy: t('El rastro de una decisi\u00f3n: permite volver desde el dibujo hasta el motivo por el que se dibuj\u00f3.', 'A decision trail: it lets you return from the drawing to the reason it was drawn.'),
    related: ['w3f_facts', 'w3f_requisites', 'w3f_candidate_model', 'w3f_consistency', 'w3f_ai_link_detail'],
    notConfuse: t('Compartir palabras o tener una referencia bibliogr\u00e1fica no prueba que un requisito justifique un elemento espec\u00edfico.', 'Sharing words or having a bibliographic reference does not prove that a requirement justifies a specific element.'),
    ai: {
      connection: t('Extensi\u00f3n IA: sugerir enlaces entre evidencia, requisitos y elementos del modelo.', 'AI extension: suggest links between evidence, requirements, and model elements.'),
      does: t('Proponer correspondencias con una explicaci\u00f3n y destacar elementos sin fuente localizada.', 'Propose mappings with an explanation and highlight elements for which no source was located.'),
      changes: t('La b\u00fasqueda de respaldo se acelera; los enlaces sugeridos siguen pendientes de confirmaci\u00f3n.', 'Finding supporting evidence becomes faster; suggested links still await confirmation.'),
      validate: t('Abrir la evidencia y comprobar que respalda el significado del enlace, no solo una coincidencia de vocabulario.', 'Read the evidence and check that it supports the meaning of the link, not merely matching vocabulary.')
    }
  });

  register({
    id: 'w3f_ai',
    label: t('IA como apoyo al modelado', 'AI as modeling support'),
    layer: 'ai',
    what: t('Extensi\u00f3n did\u00e1ctica de IA: una capacidad de apoyo para sintetizar, agrupar, generar, comprobar y vincular durante el modelado. No es contenido atribuido a Tiffin.', 'An educational AI extension: a support capability for synthesizing, grouping, generating, checking, and linking during modeling. It is not content attributed to Tiffin.'),
    why: t('Permite explorar ayuda concreta en el trabajo del analista sin delegar en la generaci\u00f3n la autoridad para aprobar requisitos.', 'It explores concrete support for the analyst\u2019s work without giving generation the authority to approve requirements.'),
    question: t('\u00bfC\u00f3mo puede la IA ayudar a construir modelos l\u00f3gicos sin convertir suposiciones en requisitos?', 'How can AI help build logical models without turning assumptions into requirements?'),
    example: t('Extensi\u00f3n propuesta: recibir los requisitos documentados, producir un borrador con fuentes y supuestos, y entregarlo al analista para revisi\u00f3n.', 'Proposed extension: receive documented requirements, produce a draft with sources and assumptions, and submit it to the analyst for review.'),
    analogy: t('Un ayudante que prepara bocetos y se\u00f1ala dudas; el boceto no lleva por s\u00ed solo una aprobaci\u00f3n.', 'An assistant who prepares sketches and flags questions; a sketch does not carry its own approval.'),
    related: ['w3f_requisites', 'w3f_functions', 'w3f_candidate_model', 'w3f_consistency', 'w3f_traceability', 'w3f_draft', 'w3f_analystvalidation'],
    notConfuse: t('Modelo generado por IA no equivale a modelo validado. La IA de esta vista ayuda al analista; no se afirma que forme parte del sistema Kitchen Gadgets.', 'An AI-generated model is not a validated model. AI in this view supports the analyst; it is not asserted to be part of the Kitchen Gadgets system.'),
    ai: {
      connection: t('La extensi\u00f3n conecta cinco tareas concretas con conceptos del modelo base.', 'The extension connects five concrete tasks to concepts in the base model.'),
      does: t('Sintetizar requisitos, agrupar funciones, generar candidatos, comprobar consistencia y vincular evidencia.', 'Synthesize requirements, group functions, generate candidates, check consistency, and link evidence.'),
      changes: t('El flujo incorpora un borrador asistido y mantiene una puerta expl\u00edcita de validaci\u00f3n humana.', 'The workflow adds an assisted draft and retains an explicit human validation gate.'),
      validate: t('Revisar hechos, supuestos, cobertura y enlaces; registrar qu\u00e9 se acepta y qu\u00e9 se devuelve para correcci\u00f3n.', 'Review facts, assumptions, coverage, and links; record what is accepted and what is returned for correction.')
    }
  });

  register({
    id: 'w3f_draft',
    label: t('Borrador de modelo l\u00f3gico', 'Draft logical model'),
    layer: 'ai',
    what: t('En el flujo propuesto de IA, una primera versi\u00f3n del modelo que distingue elementos respaldados, interpretaciones candidatas y cuestiones abiertas.', 'In the proposed AI workflow, an initial model version that distinguishes supported elements, candidate interpretations, and open questions.'),
    why: t('Hace revisable lo producido por la IA y evita que una presentaci\u00f3n convincente oculte decisiones sin respaldo.', 'It makes AI output reviewable and prevents a convincing presentation from hiding unsupported decisions.'),
    question: t('\u00bfQu\u00e9 propone este borrador y qu\u00e9 debe resolver el analista antes de aceptarlo?', 'What does this draft propose, and what must the analyst resolve before accepting it?'),
    example: t('Borrador candidato: representar pedido EDI, estado del pedido, orden de env\u00edo y confirmaci\u00f3n de env\u00edo. Mantener como propuesta la organizaci\u00f3n interna de procesos.', 'Candidate draft: represent the EDI order, order status, shipping order, and shipping confirmation. Keep the internal process organization labeled as proposed.'),
    analogy: t('Una versi\u00f3n del plano con notas de revisi\u00f3n visibles.', 'A blueprint version with visible review notes.'),
    related: ['w3f_ai', 'w3f_candidate_model', 'w3f_analystvalidation', 'w3f_traceability'],
    notConfuse: t('Borrador describe el estado de revisi\u00f3n de una versi\u00f3n; candidato indica que la interpretaci\u00f3n sigue siendo una propuesta. Ninguno significa aceptado.', 'Draft describes a version\u2019s review state; candidate indicates that the interpretation remains a proposal. Neither means accepted.'),
    ai: {
      connection: t('Extensi\u00f3n IA: convertir requisitos documentados en un artefacto provisional legible.', 'AI extension: turn documented requirements into a readable provisional artifact.'),
      does: t('Presentar la propuesta junto a fuentes, supuestos y preguntas, conservando la identificaci\u00f3n de sus elementos.', 'Present the proposal with sources, assumptions, and questions while preserving its element identifiers.'),
      changes: t('El trabajo pasa de una generaci\u00f3n abierta a una versi\u00f3n concreta que se puede revisar.', 'The work moves from open-ended generation to a concrete version that can be reviewed.'),
      validate: t('Verificar que ning\u00fan supuesto quede redactado como requisito confirmado ni se reinterprete el EDI como solicitud no estructurada.', 'Check that no assumption is worded as a confirmed requirement and that EDI is not reinterpreted as an unstructured request.')
    }
  });

  register({
    id: 'w3f_analystvalidation',
    label: t('Validaci\u00f3n del analista', 'Analyst validation'),
    layer: 'ai',
    what: t('En esta extensi\u00f3n, la revisi\u00f3n responsable que contrasta el borrador con hechos y requisitos, corrige errores y resuelve o registra dudas antes de aceptar.', 'In this extension, the accountable review that checks the draft against facts and requirements, corrects errors, and resolves or records questions before acceptance.'),
    why: t('Impide que el paso de generaci\u00f3n a aceptaci\u00f3n sea autom\u00e1tico y conserva la responsabilidad del juicio de an\u00e1lisis.', 'It prevents automatic promotion from generation to acceptance and preserves responsibility for analytical judgment.'),
    question: t('\u00bfExiste evidencia suficiente para aceptar esta versi\u00f3n dentro del alcance acordado?', 'Is there enough evidence to accept this version within the agreed scope?'),
    example: t('El analista contrasta el pedido EDI y el cargo posterior al env\u00edo con el material suministrado; devuelve para correcci\u00f3n un borrador que cobra antes.', 'The analyst checks the EDI order and charge after shipment against the supplied material; a draft that charges earlier is returned for correction.'),
    analogy: t('Revisar el plano contra el encargo antes de autorizar que se use como referencia.', 'Reviewing the blueprint against the brief before authorizing its use as a reference.'),
    related: ['w3f_draft', 'w3f_requisites', 'w3f_consistency', 'w3f_traceability', 'w3f_accepted'],
    notConfuse: t('Validar no es aprobar el formato del dibujo ni aceptar una puntuaci\u00f3n de confianza de la IA. Puede exigir corregir el borrador o aclarar un requisito.', 'Validation is not approving the drawing\u2019s formatting or accepting an AI confidence score. It may require correcting the draft or clarifying a requirement.'),
    ai: {
      connection: t('Extensi\u00f3n IA: preparar evidencia y preguntas para apoyar la revisi\u00f3n humana.', 'AI extension: prepare evidence and questions to support human review.'),
      does: t('Organizar diferencias, referencias y posibles contradicciones para que el analista las examine.', 'Organize differences, references, and possible contradictions for the analyst to examine.'),
      changes: t('La revisi\u00f3n puede concentrarse en decisiones y evidencia con una propuesta concreta delante.', 'Review can focus on decisions and evidence with a concrete proposal at hand.'),
      validate: t('La decisi\u00f3n de aceptar exige juicio humano y registro de alcance, cambios y cuestiones pendientes.', 'Acceptance requires human judgment and a record of scope, changes, and outstanding questions.')
    }
  });

  register({
    id: 'w3f_accepted',
    label: t('Modelo aceptado', 'Accepted model'),
    layer: 'ai',
    what: t('Estado final del flujo ilustrativo: una versi\u00f3n revisada y aceptada para un alcance definido, con sus decisiones y limitaciones registradas.', 'Final state in the illustrative workflow: a reviewed version accepted for a defined scope, with its decisions and limitations recorded.'),
    why: t('Establece qu\u00e9 representaci\u00f3n puede usarse como referencia y evita confundirla con cualquier salida reciente de IA.', 'It establishes which representation may serve as a reference and prevents it from being confused with any recent AI output.'),
    question: t('\u00bfQu\u00e9 versi\u00f3n fue aceptada, por qui\u00e9n y con qu\u00e9 alcance?', 'Which version was accepted, by whom, and for what scope?'),
    example: t('Ejemplo hipot\u00e9tico de estado, no aprobaci\u00f3n real del caso: tras revisar fuentes y corregir contradicciones, el analista registra la aceptaci\u00f3n de una versi\u00f3n.', 'Hypothetical state example, not an actual case approval: after reviewing sources and correcting contradictions, the analyst records acceptance of a version.'),
    analogy: t('El plano revisado que se acuerda usar como referencia, conservando su fecha y alcance.', 'The reviewed blueprint agreed upon as a reference, with its date and scope retained.'),
    related: ['w3f_analystvalidation', 'w3f_logical_models', 'w3f_traceability', 'w3f_design'],
    notConfuse: t('Aceptado no significa implementado, perfecto ni inmutable. Un cambio de requisitos puede requerir nueva revisi\u00f3n.', 'Accepted does not mean implemented, perfect, or immutable. A requirements change may require another review.'),
    ai: {
      connection: t('Extensi\u00f3n IA: consultar la versi\u00f3n aceptada al preparar propuestas posteriores.', 'AI extension: consult the accepted version when preparing later proposals.'),
      does: t('Explicar decisiones registradas y proponer el impacto de nuevos cambios.', 'Explain recorded decisions and propose the impact of new changes.'),
      changes: t('Las nuevas generaciones se comparan con una referencia identificable.', 'New generations are compared against an identifiable reference.'),
      validate: t('Confirmar la identidad de la versi\u00f3n y someter a revisi\u00f3n cualquier modificaci\u00f3n propuesta.', 'Confirm the version identity and review any proposed modification.')
    }
  });

  // Clickable comparison rows are complete concepts, not isolated captions.
  register({
    id: 'w3f_compare_purpose',
    label: t('Qu\u00e9 ocurre / c\u00f3mo se realiza', 'What happens / how it is realized'),
    layer: 'deepening',
    what: t('La comparaci\u00f3n distingue dos preguntas: el modelo l\u00f3gico explica comportamiento e informaci\u00f3n; el dise\u00f1o f\u00edsico elige su realizaci\u00f3n t\u00e9cnica.', 'The comparison distinguishes two questions: the logical model explains behavior and information; physical design chooses their technical realization.'),
    why: t('Evita responder con una tecnolog\u00eda cuando todav\u00eda se necesita aclarar el funcionamiento del sistema.', 'It avoids answering with a technology when the system\u2019s behavior still needs clarification.'),
    question: t('\u00bfEstamos explicando una necesidad o eligiendo c\u00f3mo realizarla?', 'Are we explaining a need or choosing how to realize it?'),
    example: t('L\u00f3gico: cliente, pedido, verificaci\u00f3n de inventario y env\u00edo. F\u00edsico ilustrativo: aplicaci\u00f3n web, API, base de datos y nube. La segunda lista no afirma la arquitectura del caso.', 'Logical: customer, order, inventory verification, and shipment. Illustrative physical: web application, API, database, and cloud. The second list does not assert the case architecture.'),
    analogy: t('Distinguir lo que el plano debe resolver de los materiales y medios con que se realizar\u00e1.', 'Distinguishing what the blueprint must solve from the materials and means used to realize it.'),
    related: ['w3f_logical_models', 'w3f_design', 'w3f_compare_participants', 'w3f_compare_information', 'w3f_compare_behavior'],
    notConfuse: t('Qu\u00e9/c\u00f3mo es una orientaci\u00f3n, no una prohibici\u00f3n absoluta de detalles conocidos en todo artefacto l\u00f3gico.', 'What/how is a guide, not an absolute ban on known details in every logical artifact.'),
    ai: {
      connection: t('Extensi\u00f3n IA: distinguir afirmaciones de comportamiento de decisiones t\u00e9cnicas.', 'AI extension: distinguish behavioral statements from technical decisions.'),
      does: t('Clasificar propuestas y explicar las que mezclan ambos niveles.', 'Classify proposals and explain those that mix both levels.'),
      changes: t('La mezcla de niveles se vuelve una pregunta revisable.', 'Mixed levels become a reviewable question.'),
      validate: t('Conservar restricciones t\u00e9cnicas que s\u00ed est\u00e9n documentadas, como la entrada EDI del caso.', 'Retain technical constraints that are documented, such as the case\u2019s EDI input.')
    }
  });

  register({
    id: 'w3f_compare_participants',
    label: t('Participantes y acceso', 'Participants and access'),
    layer: 'deepening',
    what: t('El modelo l\u00f3gico identifica qui\u00e9n intercambia informaci\u00f3n; el dise\u00f1o f\u00edsico concreta mecanismos de acceso cuando corresponda.', 'The logical model identifies who exchanges information; physical design specifies access mechanisms where appropriate.'),
    why: t('Separa el papel del cliente de una interfaz concreta que podr\u00eda utilizar.', 'It separates the customer\u2019s role from a concrete interface the customer might use.'),
    question: t('\u00bfQui\u00e9n participa y qu\u00e9 medio de acceso est\u00e1 realmente documentado?', 'Who participates, and what access mechanism is actually documented?'),
    example: t('Hecho del caso: el cliente env\u00eda pedidos mediante EDI. Una aplicaci\u00f3n web sirve como ejemplo f\u00edsico general; no se deduce de ese hecho.', 'Case fact: the customer sends orders through EDI. A web application serves as a general physical example; it is not inferred from that fact.'),
    analogy: t('Identificar a quien necesita entrar es distinto de elegir el mecanismo de la puerta.', 'Identifying who needs to enter differs from choosing the door mechanism.'),
    related: ['w3f_facts', 'w3f_logical_models', 'w3f_design', 'w3f_compare_information'],
    notConfuse: t('Cliente no equivale a aplicaci\u00f3n web. Las columnas comparan preguntas, no correspondencias obligatorias uno a uno.', 'Customer does not equal web application. The columns compare questions, not mandatory one-to-one mappings.'),
    ai: {
      connection: t('Extensi\u00f3n IA: identificar participantes e interfaces mencionados en la evidencia.', 'AI extension: identify participants and interfaces mentioned in the evidence.'),
      does: t('Separar menciones expl\u00edcitas de interfaces meramente sugeridas.', 'Separate explicit mentions from merely suggested interfaces.'),
      changes: t('La propuesta distingue los canales conocidos de las opciones hipot\u00e9ticas.', 'The proposal distinguishes known channels from hypothetical options.'),
      validate: t('No reemplazar el EDI estructurado por un formulario, un chat o una solicitud no estructurada.', 'Do not replace structured EDI with a form, chat, or unstructured request.')
    }
  });

  register({
    id: 'w3f_compare_information',
    label: t('Informaci\u00f3n e infraestructura de datos', 'Information and data infrastructure'),
    layer: 'deepening',
    what: t('Lo l\u00f3gico describe qu\u00e9 informaci\u00f3n se intercambia o necesita; lo f\u00edsico decide mecanismos concretos para transportarla y conservarla.', 'The logical view describes what information is exchanged or needed; the physical view chooses concrete mechanisms for transporting and retaining it.'),
    why: t('Permite discutir el significado de pedido o inventario antes de convertirlos en interfaces o estructuras de almacenamiento.', 'It allows the meaning of order or inventory to be discussed before turning them into interfaces or storage structures.'),
    question: t('\u00bfEstamos nombrando informaci\u00f3n del negocio o el mecanismo t\u00e9cnico que la maneja?', 'Are we naming business information or the technical mechanism that handles it?'),
    example: t('L\u00f3gico: pedido y datos necesarios para verificar inventario en una interpretaci\u00f3n candidata. F\u00edsico ilustrativo: una API y una base de datos; el caso no determina estas elecciones.', 'Logical: order and data needed to verify inventory in a candidate interpretation. Illustrative physical: an API and a database; the case does not determine these choices.'),
    analogy: t('El contenido de una carta es distinto del medio que la transporta y del archivo que la conserva.', 'A letter\u2019s content differs from the medium that carries it and the archive that retains it.'),
    related: ['w3f_logical_models', 'w3f_design', 'w3f_candidate_model', 'w3f_compare_behavior'],
    notConfuse: t('Pedido no equivale a API, y una necesidad de conservar datos no fija una tecnolog\u00eda de base de datos.', 'Order does not equal API, and a need to retain data does not determine a database technology.'),
    ai: {
      connection: t('Extensi\u00f3n IA: explicar datos necesarios sin convertirlos autom\u00e1ticamente en una arquitectura.', 'AI extension: explain needed data without automatically turning it into an architecture.'),
      does: t('Proponer descripciones de informaci\u00f3n y marcar campos o mecanismos inferidos.', 'Propose information descriptions and mark inferred fields or mechanisms.'),
      changes: t('Las decisiones de representaci\u00f3n quedan separadas de las necesidades de informaci\u00f3n.', 'Representation decisions remain separate from information needs.'),
      validate: t('Comprobar que cada dato propuesto tenga sustento o quede identificado como pregunta pendiente.', 'Check that each proposed datum has support or is identified as an open question.')
    }
  });

  register({
    id: 'w3f_compare_behavior',
    label: t('Transformaciones y realizaci\u00f3n t\u00e9cnica', 'Transformations and technical realization'),
    layer: 'deepening',
    what: t('El modelo l\u00f3gico explica transformaciones y decisiones; el dise\u00f1o f\u00edsico concreta los componentes y recursos que permitir\u00e1n realizarlas.', 'The logical model explains transformations and decisions; physical design specifies the components and resources that will realize them.'),
    why: t('Hace visible que elegir infraestructura no responde por s\u00ed solo qu\u00e9 regla o transformaci\u00f3n necesita el sistema.', 'It shows that choosing infrastructure does not by itself explain which rule or transformation the system needs.'),
    question: t('\u00bfQu\u00e9 transformaci\u00f3n debe ocurrir antes de preguntar d\u00f3nde se ejecutar\u00e1?', 'What transformation must occur before asking where it will run?'),
    example: t('Interpretaci\u00f3n l\u00f3gica candidata: verificar inventario y generar informaci\u00f3n para el env\u00edo. Infraestructura en la nube es una opci\u00f3n f\u00edsica ilustrativa, no un hecho del caso.', 'Candidate logical interpretation: verify inventory and generate shipment information. Cloud infrastructure is an illustrative physical option, not a case fact.'),
    analogy: t('Describir el trabajo que debe realizarse antes de elegir el taller y sus herramientas.', 'Describing the work to be done before choosing the workshop and its tools.'),
    related: ['w3f_functions', 'w3f_logical_models', 'w3f_design', 'w3f_consistency'],
    notConfuse: t('Env\u00edo no equivale a nube. La cadena del ejemplo expresa una idea de funcionamiento; sus flechas no constituyen un DFD formal.', 'Shipment does not equal cloud. The example chain expresses an idea of behavior; its arrows do not constitute a formal DFD.'),
    ai: {
      connection: t('Extensi\u00f3n IA: redactar transformaciones propuestas con sus entradas y resultados.', 'AI extension: describe proposed transformations with their inputs and results.'),
      does: t('Se\u00f1alar cuando una propuesta menciona infraestructura pero omite explicar la regla del negocio.', 'Flag when a proposal names infrastructure but fails to explain the business rule.'),
      changes: t('La revisi\u00f3n puede enfocarse primero en el significado de la transformaci\u00f3n.', 'Review can focus first on the meaning of the transformation.'),
      validate: t('Confirmar que la transformaci\u00f3n y sus condiciones provengan del caso o est\u00e9n marcadas como interpretaci\u00f3n.', 'Confirm that the transformation and its conditions come from the case or are marked as interpretation.')
    }
  });

  // Five distinct relationship drawers for the five required AI actions.
  register({
    id: 'w3f_ai_synthesize_detail',
    label: t('IA \u2192 requisitos: sintetizar', 'AI \u2192 requirements: synthesize'),
    layer: 'ai',
    what: t('Relaci\u00f3n de apoyo que convierte requisitos documentados en una s\u00edntesis breve sin eliminar condiciones ni fuentes.', 'A support relationship that turns documented requirements into a concise synthesis without removing conditions or sources.'),
    why: t('Una s\u00edntesis fiel facilita modelar; una s\u00edntesis que omite restricciones cambia la necesidad.', 'A faithful synthesis makes modeling easier; a synthesis that omits constraints changes the need.'),
    question: t('\u00bfLa versi\u00f3n resumida conserva todas las condiciones relevantes del requisito?', 'Does the summarized version preserve all relevant conditions of the requirement?'),
    example: t('Extensi\u00f3n propuesta: resumir el requisito como procesar cargo despu\u00e9s del env\u00edo. Reducirlo a procesar cargo perder\u00eda una condici\u00f3n aportada.', 'Proposed extension: summarize the requirement as process charge after shipment. Reducing it to process charge would lose a supplied condition.'),
    analogy: t('Condensar una receta sin borrar el orden de sus pasos esenciales.', 'Condensing a recipe without deleting the order of its essential steps.'),
    related: ['w3f_ai', 'w3f_requisites', 'w3f_facts', 'w3f_traceability'],
    notConfuse: t('Sintetizar no autoriza completar huecos, cambiar prioridades ni inventar requisitos.', 'Synthesizing does not authorize filling gaps, changing priorities, or inventing requirements.'),
    ai: {
      connection: t('Extensi\u00f3n IA; origen: IA; destino: requisitos; acci\u00f3n: sintetizar.', 'AI extension; source: AI; target: requirements; action: synthesize.'),
      does: t('Agrupar enunciados equivalentes y conservar restricciones con referencia a su origen.', 'Combine equivalent statements and retain constraints with a reference to their origin.'),
      changes: t('Produce una vista m\u00e1s manejable del material documentado.', 'It produces a more manageable view of the documented material.'),
      validate: t('Comparar la s\u00edntesis con los originales y resolver ambig\u00fcedades con evidencia.', 'Compare the synthesis with the originals and resolve ambiguities using evidence.')
    }
  });

  register({
    id: 'w3f_ai_group_detail',
    label: t('IA \u2192 funciones: agrupar', 'AI \u2192 functions: group'),
    layer: 'ai',
    what: t('Relaci\u00f3n de apoyo que organiza requisitos por prop\u00f3sito y propone funciones identificables.', 'A support relationship that organizes requirements by purpose and proposes identifiable functions.'),
    why: t('Conecta necesidades dispersas con responsabilidades que luego pueden explicarse mediante un modelo l\u00f3gico.', 'It connects scattered needs to responsibilities that can then be explained through a logical model.'),
    question: t('\u00bfQu\u00e9 requisitos pertenecen a esta funci\u00f3n y por qu\u00e9?', 'Which requirements belong to this function, and why?'),
    example: t('Extensi\u00f3n candidata: reunir la orden de env\u00edo al almac\u00e9n y su confirmaci\u00f3n bajo coordinar env\u00edo. La agrupaci\u00f3n es propuesta; los intercambios proceden del caso.', 'Candidate extension: group the shipping order to the warehouse and its confirmation under coordinate shipment. The grouping is proposed; the exchanges come from the case.'),
    analogy: t('Ordenar fichas de tareas por objetivo y mantener visible qu\u00e9 contiene cada grupo.', 'Sorting task cards by objective while keeping each group\u2019s contents visible.'),
    related: ['w3f_ai', 'w3f_functions', 'w3f_fdd', 'w3f_requisites'],
    notConfuse: t('Una agrupaci\u00f3n funcional no decide departamentos, microservicios ni el orden temporal de ejecuci\u00f3n.', 'A functional grouping does not decide departments, microservices, or execution timing.'),
    ai: {
      connection: t('Extensi\u00f3n IA; origen: IA; destino: funciones; acci\u00f3n: agrupar.', 'AI extension; source: AI; target: functions; action: group.'),
      does: t('Proponer grupos, nombres y una justificaci\u00f3n basada en sus requisitos.', 'Propose groups, names, and a justification based on their requirements.'),
      changes: t('Hace comparables varias organizaciones funcionales candidatas.', 'It makes multiple candidate functional organizations comparable.'),
      validate: t('Revisar requisitos omitidos, duplicaci\u00f3n de responsabilidades y grupos que mezclen prop\u00f3sitos incompatibles.', 'Review omitted requirements, duplicated responsibilities, and groups that mix incompatible purposes.')
    }
  });

  register({
    id: 'w3f_ai_generate_detail',
    label: t('IA \u2192 modelos candidatos: generar', 'AI \u2192 candidate models: generate'),
    layer: 'ai',
    what: t('Relaci\u00f3n de apoyo que produce interpretaciones candidatas de datos, procesos y decisiones desde los requisitos y funciones disponibles.', 'A support relationship that produces candidate interpretations of data, processes, and decisions from available requirements and functions.'),
    why: t('Ofrece un objeto concreto para discutir el funcionamiento antes de construirlo.', 'It provides a concrete object for discussing behavior before building it.'),
    question: t('\u00bfCada elemento generado est\u00e1 respaldado o identificado como supuesto?', 'Is every generated element supported or identified as an assumption?'),
    example: t('Extensi\u00f3n propuesta: generar un modelo candidato con pedido EDI, orden de env\u00edo y confirmaci\u00f3n. La descomposici\u00f3n interna se presenta como interpretaci\u00f3n revisable.', 'Proposed extension: generate a candidate model with the EDI order, shipping order, and confirmation. The internal decomposition is presented as a reviewable interpretation.'),
    analogy: t('Preparar variantes de un plano para evaluarlas contra el mismo encargo.', 'Preparing blueprint alternatives to assess against the same brief.'),
    related: ['w3f_ai', 'w3f_candidate_model', 'w3f_draft', 'w3f_analystvalidation'],
    notConfuse: t('Generar un modelo no lo valida. La fluidez de una explicaci\u00f3n no demuestra que el caso la respalde.', 'Generating a model does not validate it. A fluent explanation does not establish support from the case.'),
    ai: {
      connection: t('Extensi\u00f3n IA; origen: IA; destino: modelos candidatos; acci\u00f3n: generar.', 'AI extension; source: AI; target: candidate models; action: generate.'),
      does: t('Proponer alternativas con fuentes, supuestos y preguntas abiertas por elemento.', 'Propose alternatives with sources, assumptions, and open questions for each element.'),
      changes: t('Acelera la preparaci\u00f3n de borradores que pasan a revisi\u00f3n del analista.', 'It accelerates the preparation of drafts that proceed to analyst review.'),
      validate: t('Verificar fidelidad al caso, cobertura y ausencia de tecnolog\u00edas o reglas inventadas.', 'Check fidelity to the case, coverage, and the absence of invented technologies or rules.')
    }
  });

  register({
    id: 'w3f_ai_check_detail',
    label: t('IA \u2192 consistencia: comprobar', 'AI \u2192 consistency: check'),
    layer: 'ai',
    what: t('Relaci\u00f3n de apoyo que busca contradicciones entre requisitos y representaciones del modelo y formula alertas explicadas.', 'A support relationship that searches for contradictions between requirements and model representations and produces explained alerts.'),
    why: t('Una alerta localizada permite discutir el conflicto y su evidencia antes de aceptar el modelo.', 'A localized alert allows the conflict and its evidence to be discussed before accepting the model.'),
    question: t('\u00bfQu\u00e9 afirmaciones entran en conflicto y qu\u00e9 evidencia permite resolverlo?', 'Which statements conflict, and what evidence can resolve the conflict?'),
    example: t('Extensi\u00f3n propuesta: marcar como conflicto un borrador con cargo al recibir pedido frente al hecho cargo despu\u00e9s del env\u00edo.', 'Proposed extension: flag a draft with a charge upon order receipt as conflicting with the charge-after-shipment fact.'),
    analogy: t('Un revisor que coloca una nota entre dos instrucciones incompatibles y explica por qu\u00e9 chocan.', 'A reviewer who places a note between two incompatible instructions and explains why they conflict.'),
    related: ['w3f_ai', 'w3f_consistency', 'w3f_requisites', 'w3f_analystvalidation'],
    notConfuse: t('Comprobar con IA produce hallazgos candidatos, no una prueba de correcci\u00f3n. Puede omitir conflictos o se\u00f1alar falsos positivos.', 'Checking with AI produces candidate findings, not proof of correctness. It may miss conflicts or flag false positives.'),
    ai: {
      connection: t('Extensi\u00f3n IA; origen: IA; destino: consistencia; acci\u00f3n: comprobar.', 'AI extension; source: AI; target: consistency; action: check.'),
      does: t('Comparar reglas, t\u00e9rminos y condiciones, citando las partes en conflicto.', 'Compare rules, terms, and conditions, citing the conflicting parts.'),
      changes: t('El analista puede priorizar discrepancias identificadas y explicadas.', 'The analyst can prioritize identified and explained discrepancies.'),
      validate: t('Confirmar cada hallazgo contra fuentes; no tratar una revisi\u00f3n sin alertas como aprobaci\u00f3n.', 'Confirm each finding against sources; do not treat a review without alerts as approval.')
    }
  });

  register({
    id: 'w3f_ai_link_detail',
    label: t('IA \u2192 trazabilidad: vincular', 'AI \u2192 traceability: link'),
    layer: 'ai',
    what: t('Relaci\u00f3n de apoyo que propone enlaces justificados entre evidencia, requisitos, funciones y elementos candidatos del modelo.', 'A support relationship that proposes justified links between evidence, requirements, functions, and candidate model elements.'),
    why: t('Permite preguntar por el origen de cada elemento y localizar requisitos sin representaci\u00f3n.', 'It allows the origin of each element to be questioned and requirements without representation to be located.'),
    question: t('\u00bfEste enlace demuestra respaldo sem\u00e1ntico o solamente similitud de palabras?', 'Does this link establish semantic support or merely similar wording?'),
    example: t('Extensi\u00f3n propuesta: vincular procesar cargo con el requisito que conserva cargo despu\u00e9s del env\u00edo y con el enunciado suministrado que lo sustenta.', 'Proposed extension: link process charge to the requirement preserving charge after shipment and to the supplied statement that supports it.'),
    analogy: t('Un hilo que une cada pieza del plano con la nota del encargo que la justifica.', 'A thread connecting each piece of the blueprint to the brief note that justifies it.'),
    related: ['w3f_ai', 'w3f_traceability', 'w3f_facts', 'w3f_requisites', 'w3f_candidate_model'],
    notConfuse: t('Un enlace sugerido no es evidencia nueva. La IA no debe inventar citas, p\u00e1ginas, requisitos ni aprobaciones para completarlo.', 'A suggested link is not new evidence. AI must not invent citations, pages, requirements, or approvals to complete it.'),
    ai: {
      connection: t('Extensi\u00f3n IA; origen: IA; destino: trazabilidad; acci\u00f3n: vincular.', 'AI extension; source: AI; target: traceability; action: link.'),
      does: t('Sugerir correspondencias con referencia de origen y se\u00f1alar elementos sin respaldo localizado.', 'Suggest mappings with source references and flag elements for which no support was located.'),
      changes: t('La justificaci\u00f3n del modelo se convierte en una red de enlaces revisables.', 'The model\u2019s justification becomes a network of reviewable links.'),
      validate: t('Comprobar origen, destino y significado de cada enlace; dejar los enlaces no confirmados como candidatos.', 'Check the source, target, and meaning of each link; leave unconfirmed links as candidates.')
    }
  });

  const stages = [
    'w3f_facts',
    'w3f_requisites',
    'w3f_functions',
    'w3f_logical_models',
    'w3f_design',
    'w3f_implementation'
  ];
  const aiFlow = [
    'w3f_requisites',
    'w3f_ai',
    'w3f_draft',
    'w3f_analystvalidation',
    'w3f_accepted'
  ];

  w3.models.w3f_sequence = {
    id: 'w3f_sequence',
    kind: 'sequence',
    title: t('Del requisito al modelo l\u00f3gico', 'From requirements to logical model'),
    stages: stages.map(function (id, index) {
      return { id: id, order: index + 1, highlighted: id === 'w3f_logical_models' };
    }),
    focus: 'w3f_logical_models',
    bridge: 'w3f_fdd',
    arrowMeaning: t('Las flechas muestran la progresi\u00f3n del trabajo de an\u00e1lisis hacia dise\u00f1o e implementaci\u00f3n; no son flujos de datos ni impiden revisar pasos anteriores.', 'Arrows show the progression of analysis work toward design and implementation; they are not data flows and do not prevent revisiting earlier steps.'),
    scope: t('Semana 3: el an\u00e1lisis del sistema contin\u00faa, con foco en modelos l\u00f3gicos de datos y procesos. Dise\u00f1o e implementaci\u00f3n solo sit\u00faan la secuencia.', 'Week 3: system analysis continues, focusing on logical data and process models. Design and implementation only provide sequence context.'),
    logicalExample: t('Interpretaci\u00f3n candidata: cliente \u2192 pedido \u2192 verificaci\u00f3n de inventario \u2192 env\u00edo.', 'Candidate interpretation: customer \u2192 order \u2192 inventory verification \u2192 shipment.'),
    physicalExample: t('Ejemplo f\u00edsico general: aplicaci\u00f3n web, API, base de datos e infraestructura en la nube. No es una arquitectura suministrada del caso.', 'General physical example: web application, API, database, and cloud infrastructure. This is not a supplied case architecture.')
  };

  w3.models.w3f_ai_workflow = {
    id: 'w3f_ai_workflow',
    kind: 'sequence',
    layer: 'ai',
    title: t('De los requisitos a un modelo aceptado con apoyo de IA', 'From requirements to an accepted model with AI support'),
    nodes: aiFlow.slice(),
    validationGate: 'w3f_analystvalidation',
    acceptanceCondition: t('Solo avanzar a aceptado cuando el analista haya revisado la evidencia, corregido contradicciones y registrado la decisi\u00f3n y su alcance.', 'Advance to accepted only when the analyst has reviewed the evidence, corrected contradictions, and recorded the decision and its scope.'),
    revision: t('Si la validaci\u00f3n detecta errores o requisitos sin aclarar, el borrador vuelve a revisi\u00f3n; la secuencia muestra el camino de aceptaci\u00f3n, no un resultado garantizado.', 'If validation finds errors or unclear requirements, the draft returns for revision; the sequence shows the acceptance path, not a guaranteed outcome.'),
    epistemicNote: t('Extensi\u00f3n did\u00e1ctica propuesta para el atlas. No se atribuye a Tiffin ni afirma una aprobaci\u00f3n real del modelo del caso.', 'An educational extension proposed for the atlas. It is not attributed to Tiffin and does not assert actual approval of the case model.')
  };

  w3.diagrams['01'] = {
    id: '01',
    kind: 'sequence',
    title: t('Del requisito al modelo l\u00f3gico', 'From requirements to logical model'),
    question: t('Ya sabemos qu\u00e9 debe hacer el sistema. \u00bfC\u00f3mo convertimos esos requisitos en una representaci\u00f3n que podamos analizar antes de construir?', 'We know what the system must do. How do we turn those requirements into a representation we can analyze before building?'),
    statement: t('ANTES DE CONSTRUIR, MODELAMOS.', 'BEFORE BUILDING, WE MODEL.'),
    definition: t('El modelo l\u00f3gico representa qu\u00e9 ocurre, qu\u00e9 informaci\u00f3n se mueve, qu\u00e9 transformaciones se realizan y qu\u00e9 decisiones existen. El dise\u00f1o f\u00edsico concreta c\u00f3mo lo implementar\u00e1 la tecnolog\u00eda.', 'The logical model represents what happens, what information moves, what transformations occur, and what decisions exist. Physical design specifies how technology will implement it.'),
    transition: t('Si queremos comprender c\u00f3mo funciona el sistema, \u00bfqu\u00e9 ocurre con la informaci\u00f3n mientras atraviesa sus procesos? Datos \u2192 proceso \u2192 datos: la siguiente mirada es el DFD.', 'If we want to understand how the system works, what happens to information as it passes through its processes? Data \u2192 process \u2192 data: the next view is the DFD.'),
    introduction: t('En la Semana 2 descubrimos qu\u00e9 necesita el sistema y organizamos sus funciones mediante el FDD. Ahora profundizamos: primero representamos su funcionamiento l\u00f3gico; las elecciones de servidor, framework o base de datos corresponden al dise\u00f1o.', 'In Week 2 we discovered what the system needs and organized its functions through the FDD. Now we go deeper: first we represent its logical behavior; server, framework, and database choices belong to design.'),
    root: 'w3f_logical_models',
    nodes: stages.slice(),
    highlightedNodes: ['w3f_logical_models'],
    bridge: 'w3f_fdd',
    model: 'w3f_sequence',
    comparisonNote: t('L\u00f3gico = qu\u00e9; f\u00edsico = c\u00f3mo. Las filas contrastan preguntas, no equivalencias uno a uno. Las tecnolog\u00edas son ejemplos generales, no hechos de Kitchen Gadgets; la entrada EDI documentada sigue siendo EDI estructurado.', 'Logical = what; physical = how. Rows contrast questions, not one-to-one equivalences. Technologies are general examples, not Kitchen Gadgets facts; the documented EDI input remains structured EDI.'),
    comparison: [
      {
        id: 'w3f_compare_purpose',
        label: t('Enfoque', 'Focus'),
        logical: t('QU\u00c9 ocurre: datos, procesos y decisiones.', 'WHAT happens: data, processes, and decisions.'),
        physical: t('C\u00d3MO se realiza: tecnolog\u00edas y componentes concretos.', 'HOW it is realized: concrete technologies and components.')
      },
      {
        id: 'w3f_compare_participants',
        label: t('Participantes y acceso', 'Participants and access'),
        logical: t('Cliente: \u00bfqui\u00e9n origina el pedido? En el caso, el pedido llega por EDI.', 'Customer: who originates the order? In the case, the order arrives through EDI.'),
        physical: t('Aplicaci\u00f3n web: ejemplo general de interfaz, no un canal afirmado del caso.', 'Web application: a general interface example, not an asserted case channel.')
      },
      {
        id: 'w3f_compare_information',
        label: t('Informaci\u00f3n y mecanismos', 'Information and mechanisms'),
        logical: t('Pedido y datos de inventario: \u00bfqu\u00e9 informaci\u00f3n necesita el modelo candidato?', 'Order and inventory data: what information does the candidate model need?'),
        physical: t('API y base de datos: ejemplos de mecanismos de intercambio y persistencia.', 'API and database: examples of exchange and persistence mechanisms.')
      },
      {
        id: 'w3f_compare_behavior',
        label: t('Transformaciones y recursos', 'Transformations and resources'),
        logical: t('Verificaci\u00f3n de inventario \u2192 env\u00edo: relaci\u00f3n candidata que requiere explicar datos y reglas.', 'Inventory verification \u2192 shipment: a candidate relationship whose data and rules need explanation.'),
        physical: t('Infraestructura en la nube: ejemplo de d\u00f3nde podr\u00eda operar una realizaci\u00f3n t\u00e9cnica.', 'Cloud infrastructure: an example of where a technical realization could operate.')
      }
    ],
    aiNode: 'w3f_ai',
    aiQuestion: t('\u00bfC\u00f3mo puede la IA ayudar a construir modelos l\u00f3gicos sin convertir suposiciones en requisitos?', 'How can AI help build logical models without turning assumptions into requirements?'),
    aiMessage: t('MODELO GENERADO POR IA \u2260 MODELO VALIDADO. Extensi\u00f3n propuesta: la IA ayuda a preparar y revisar; el analista valida antes de aceptar. Estas capacidades no se atribuyen a Tiffin.', 'AI-GENERATED MODEL \u2260 VALIDATED MODEL. Proposed extension: AI helps prepare and review; the analyst validates before acceptance. These capabilities are not attributed to Tiffin.'),
    aiFlow: aiFlow.slice(),
    aiModel: 'w3f_ai_workflow',
    aiRelationships: [
      {
        id: 'w3f_synthesize',
        from: 'w3f_ai',
        to: 'w3f_requisites',
        action: t('SINTETIZAR', 'SYNTHESIZE'),
        concept: 'w3f_ai_synthesize_detail',
        value: t('Condensar requisitos conservando fuentes y condiciones.', 'Condense requirements while preserving sources and conditions.')
      },
      {
        id: 'w3f_group',
        from: 'w3f_ai',
        to: 'w3f_functions',
        action: t('AGRUPAR', 'GROUP'),
        concept: 'w3f_ai_group_detail',
        value: t('Organizar requisitos en funciones candidatas justificadas.', 'Organize requirements into justified candidate functions.')
      },
      {
        id: 'w3f_generate',
        from: 'w3f_ai',
        to: 'w3f_candidate_model',
        action: t('GENERAR', 'GENERATE'),
        concept: 'w3f_ai_generate_detail',
        value: t('Proponer modelos con evidencia, supuestos y preguntas visibles.', 'Propose models with visible evidence, assumptions, and questions.')
      },
      {
        id: 'w3f_check',
        from: 'w3f_ai',
        to: 'w3f_consistency',
        action: t('COMPROBAR', 'CHECK'),
        concept: 'w3f_ai_check_detail',
        value: t('Se\u00f1alar contradicciones posibles para revisi\u00f3n del analista.', 'Flag possible contradictions for analyst review.')
      },
      {
        id: 'w3f_link',
        from: 'w3f_ai',
        to: 'w3f_traceability',
        action: t('VINCULAR', 'LINK'),
        concept: 'w3f_ai_link_detail',
        value: t('Conectar elementos del modelo con requisitos y evidencia comprobable.', 'Connect model elements with requirements and checkable evidence.')
      }
    ]
  };
}());
