(function () {
  'use strict';

  const t = (es, en) => ({ es, en });
  const illustrative = (es, en) => t(
    'Ejemplo ilustrativo de Eden Bay (no son datos recopilados): ' + es,
    'Illustrative Eden Bay example (not collected data): ' + en
  );
  const aiDetails = (connection, does, changes, validate) => ({ connection, does, changes, validate });

  window.CST212_W2 = window.CST212_W2 || { diagrams: {}, concepts: {}, sources: {} };
  const db = window.CST212_W2;
  db.diagrams = db.diagrams || {};
  db.concepts = db.concepts || {};
  db.sources = db.sources || {};

  // Foundation follows the user-supplied course summary. External references
  // corroborate methods; they are not presented as official CST212 materials.
  // Supplied course material has no public URL. Analytical recommendations,
  // academic deepening and the AI-FIRST extension are identified in the text.
  Object.assign(db.sources, {
    w2f_src_course_summary: {
      author: 'Usuario; resumen del curso proporcionado en esta conversación',
      year: 's.f.',
      title: 'CST212, Semana 2: descubrimiento / recopilación de hechos [Resumen no publicado; no es una fuente oficial externa]',
      url: ''
    },
    w2f_src_interviews: {
      author: 'User research community',
      year: '2017',
      title: 'Using in-depth interviews',
      url: 'https://www.gov.uk/service-manual/user-research/using-in-depth-interviews'
    },
    w2f_src_observation: {
      author: 'Office for Health Improvement and Disparities',
      year: '2021',
      title: 'Contextual inquiry',
      url: 'https://www.gov.uk/guidance/contextual-inquiry'
    },
    w2f_src_focus_groups: {
      author: 'Office for Health Improvement and Disparities',
      year: '2020',
      title: 'Focus group study: qualitative studies',
      url: 'https://www.gov.uk/guidance/focus-group-study-qualitative-studies'
    },
    w2f_src_surveys: {
      author: 'Office for Health Improvement and Disparities',
      year: '2018',
      title: 'Evaluation methods: evaluation in health and wellbeing',
      url: 'https://www.gov.uk/guidance/evaluation-in-health-and-wellbeing-methods'
    },
    w2f_src_closure: {
      author: 'Usuario; continuación D06 del material proporcionado',
      year: 's.f.',
      title: 'CST212, Semana 2: cierre de descubrimiento, caso Eden Bay / AREV y extensión AI-FIRST [Material no publicado; leído hasta la transición D06 a D07]',
      url: ''
    },
    w2f_src_nist_genai: {
      author: 'Autio, C., Schwartz, R., Dunietz, J., Jain, S., Stanley, M., Tabassi, E., Hall, P., & Roberts, K.',
      year: '2024',
      title: 'Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)',
      url: 'https://doi.org/10.6028/NIST.AI.600-1'
    },
    w2f_src_triangulation: {
      author: 'Foreign, Commonwealth & Development Office',
      year: '2023',
      title: 'Understanding institutional analysis',
      url: 'https://www.gov.uk/government/publications/understanding-institutional-analysis/understanding-institutional-analysis'
    },
    w2f_src_nonprobability: {
      author: 'Statistics Canada',
      year: 's.f.',
      title: '3.2.3 Non-probability sampling',
      url: 'https://www150.statcan.gc.ca/n1/edu/power-pouvoir/ch13/nonprob/5214898-eng.htm'
    },
    w2f_src_sampling: {
      author: 'Statistics Canada',
      year: 's.f.',
      title: '3.2.2 Probability sampling',
      url: 'https://www150.statcan.gc.ca/n1/edu/power-pouvoir/ch13/prob/5214899-eng.htm'
    }
  });

  Object.assign(db.concepts, {
    w2f_reality: {
      id: 'w2f_reality', label: t('REALIDAD DEL TRABAJO', 'REALITY OF THE WORK'), layer: 'foundation',
      what: t('El trabajo tal como ocurre: personas, actividades, información, reglas, herramientas y excepciones. El analista lo descubre mediante entrevistas, encuestas, observación, grupos focales, revisión del sistema actual, documentos y registros, y mapeo de procesos.', 'Work as it actually happens: people, activities, information, rules, tools, and exceptions. The analyst discovers it through interviews, surveys, observation, focus groups, current system review, documents and records, and business process mapping.'),
      why: t('Los requisitos necesitan evidencia del trabajo y de sus problemas; adivinar puede producir una solución que no responda a las necesidades.', 'Requirements need evidence about work and its problems; guessing can produce a solution that fails to address needs.'),
      question: t('¿Quién hace qué, cuándo, dónde, cómo y por qué?', 'Who does what, when, where, how, and why?'),
      example: illustrative('Investigar cómo se registra y consulta el mantenimiento de vehículos, combinando conversaciones, observación y revisión de registros antes de proponer cambios.', 'Investigate how vehicle maintenance is recorded and retrieved, combining conversations, observation, and record review before proposing changes.'),
      analogy: t('Reconocer el terreno antes de trazar una ruta: un mapa imaginado no muestra los obstáculos reales.', 'Survey the ground before planning a route: an imagined map does not show real obstacles.'),
      related: ['w2f_stakeholders', 'w2f_interviews', 'w2f_surveys', 'w2f_observation', 'w2f_focus_groups', 'w2f_current_system_review', 'w2f_documents_records', 'w2f_business_process_mapping', 'w2f_facts'],
      notConfuse: t('La realidad del trabajo no equivale al procedimiento escrito ni a una opinión aislada. Las diferencias entre fuentes son preguntas para investigar.', 'The reality of work is not the same as a written procedure or an isolated opinion. Differences between sources are questions to investigate.'),
      sources: ['w2f_src_course_summary']
    },
    w2f_interviews: {
      id: 'w2f_interviews', label: t('ENTREVISTAS', 'INTERVIEWS'), layer: 'foundation',
      what: t('Conversaciones planificadas con usuarios o interesados para conocer su trabajo en profundidad, comprender el contexto y hacer preguntas de seguimiento.', 'Planned conversations with users or stakeholders to explore their work in depth, understand context, and ask follow-up questions.'),
      why: t('Permiten aclarar respuestas y explorar dificultades y excepciones. Requieren tiempo y reflejan la perspectiva y posibles sesgos de cada persona.', 'They allow clarification and exploration of difficulties and exceptions. They take time and reflect each person\'s perspective and possible biases.'),
      question: t('¿Puede describir la última vez que realizó esta tarea y explicar qué ocurrió?', 'Can you describe the last time you performed this task and explain what happened?'),
      example: illustrative('Planear una conversación sobre el registro de mantenimiento, pedir un caso concreto y preguntar después cómo se resolvió una dificultad.', 'Plan a conversation about recording maintenance, request a concrete case, and then ask how a difficulty was resolved.'),
      analogy: t('Una conversación con una linterna: cada respuesta permite iluminar un detalle que antes no se veía.', 'A conversation with a flashlight: each answer helps illuminate a previously unseen detail.'),
      related: ['w2f_open_questions', 'w2f_closed_questions', 'w2f_numeric_scale', 'w2f_joe', 'w2f_stakeholders', 'w2f_surveys', 'w2f_observation', 'w2f_facts'],
      notConfuse: t('Entrevistar no es improvisar sin propósito ni convertir una declaración en hecho comprobado. Una entrevista tampoco representa por sí sola a todos los usuarios.', 'Interviewing is not aimless improvisation or treating a statement as a verified fact. One interview does not represent all users.'),
      sources: ['w2f_src_course_summary', 'w2f_src_interviews']
    },
    w2f_open_questions: {
      id: 'w2f_open_questions', label: t('PREGUNTAS ABIERTAS', 'OPEN QUESTIONS'), layer: 'foundation',
      what: t('Preguntas que permiten responder con palabras propias, sin limitar la respuesta a opciones predeterminadas. Pueden usarse en entrevistas y encuestas.', 'Questions that allow answers in the respondent\'s own words, without restricting them to predefined options. They can be used in interviews and surveys.'),
      why: t('Descubren detalles, explicaciones y dificultades que el analista podría no haber previsto; sus respuestas requieren interpretación cuidadosa.', 'They uncover details, explanations, and difficulties the analyst may not have anticipated; answers require careful interpretation.'),
      question: t('¿Qué dificultades encuentra al registrar el mantenimiento de un vehículo?', 'What difficulties do you encounter when recording vehicle maintenance?'),
      example: illustrative('PREGUNTAS DE EJEMPLO para Joe, mecánico: ¿Qué información necesita normalmente antes de comenzar una reparación de un vehículo? ¿Qué dificultades encuentra al consultar el historial de mantenimiento de un vehículo? No se proporcionan respuestas oficiales.', 'EXAMPLE QUESTIONS for Joe, Mechanic: What information do you normally need before beginning a vehicle repair? What difficulties do you encounter when consulting a vehicle\'s maintenance history? No official answers are provided.'),
      analogy: t('Una hoja en blanco que permite describir el recorrido, en lugar de escoger una ruta ya dibujada.', 'A blank sheet on which to describe the journey instead of selecting a route already drawn.'),
      related: ['w2f_interviews', 'w2f_surveys', 'w2f_closed_questions', 'w2f_numeric_scale', 'w2f_why'],
      notConfuse: t('Abierta no significa vaga ni dirigida. Preguntar por qué un sistema es malo presupone un juicio y puede sesgar la respuesta.', 'Open does not mean vague or leading. Asking why a system is bad presupposes a judgment and can bias the answer.'),
      sources: ['w2f_src_course_summary', 'w2f_src_interviews']
    },
    w2f_closed_questions: {
      id: 'w2f_closed_questions', label: t('PREGUNTAS CERRADAS', 'CLOSED QUESTIONS'), layer: 'foundation',
      what: t('Preguntas que limitan la respuesta a opciones definidas, como sí/no o una selección de categorías. Pueden formar parte de entrevistas y encuestas.', 'Questions that restrict answers to defined options, such as yes/no or a selection of categories. They can be part of interviews and surveys.'),
      why: t('Facilitan registrar y comparar respuestas concretas, aunque explican menos contexto y pueden omitir situaciones no contempladas.', 'They make specific answers easier to record and compare, although they explain less context and may omit unanticipated situations.'),
      question: t('¿Consulta el historial antes de autorizar una reparación? Sí / No.', 'Do you consult the history before authorizing a repair? Yes / No.'),
      example: illustrative('PREGUNTAS DE EJEMPLO para Joe: ¿Consulta el historial del vehículo antes de comenzar una reparación? Sí / No. ¿Registra actualmente la reparación en un sistema digital? Sí / No. Las preguntas no presuponen las respuestas ni que exista ese registro digital.', 'EXAMPLE QUESTIONS for Joe: Do you consult the vehicle\'s history before beginning a repair? Yes / No. Do you currently record the repair in a digital system? Yes / No. These questions presume neither the answers nor the existence of that digital record.'),
      analogy: t('Casillas de un formulario: facilitan ordenar respuestas, pero solo admiten lo que el formulario contempla.', 'Form checkboxes: they make answers easy to organize but accommodate only what the form anticipates.'),
      related: ['w2f_interviews', 'w2f_surveys', 'w2f_open_questions', 'w2f_numeric_scale', 'w2f_facts'],
      notConfuse: t('Una respuesta cerrada sigue siendo una declaración de la persona. Marcar sí no demuestra que la acción ocurra siempre; las opciones deben ajustarse al contexto.', 'A closed answer is still a person\'s statement. Selecting yes does not establish that the action always occurs; options must fit the context.'),
      sources: ['w2f_src_course_summary', 'w2f_src_surveys']
    },
    w2f_numeric_scale: {
      id: 'w2f_numeric_scale', label: t('ESCALA NUMÉRICA', 'NUMERIC SCALE'), layer: 'foundation',
      what: t('Formato de pregunta cerrada que recoge una valoración mediante números con significado definido, por ejemplo de 1, muy difícil, a 5, muy fácil.', 'A closed-question format that collects a rating using numbers with defined meanings, for example from 1, very difficult, to 5, very easy.'),
      why: t('Permite comparar percepciones con la misma escala. Los números describen una valoración, no una medición automática del desempeño del sistema.', 'It allows perceptions to be compared using the same scale. The numbers describe a rating, not an automatic measurement of system performance.'),
      question: t('De 1 a 5, ¿qué tan fácil le resulta encontrar el historial de mantenimiento? 1 = muy difícil; 5 = muy fácil.', 'From 1 to 5, how easy is it for you to find the maintenance history? 1 = very difficult; 5 = very easy.'),
      example: illustrative('PREGUNTAS DE EJEMPLO para Joe: Del 1 al 5, ¿qué tan fácil es encontrar la información necesaria antes de iniciar una reparación? 1 = muy difícil, 5 = muy fácil. Del 1 al 5, ¿qué tan confiable considera la información disponible sobre reparaciones anteriores? 1 = nada confiable, 5 = muy confiable. Son valoraciones propuestas, no respuestas obtenidas ni medidas de tiempo o exactitud.', 'EXAMPLE QUESTIONS for Joe: From 1 to 5, how easy is it to find the information needed before beginning a repair? 1 = very difficult, 5 = very easy. From 1 to 5, how reliable do you consider the available information about previous repairs? 1 = not at all reliable, 5 = very reliable. These are proposed ratings, not collected answers or measurements of time or accuracy.'),
      analogy: t('Una puntuación de satisfacción: ordena valoraciones, pero no funciona como un cronómetro.', 'A satisfaction rating: it orders judgments but does not work like a stopwatch.'),
      related: ['w2f_surveys', 'w2f_interviews', 'w2f_closed_questions', 'w2f_open_questions', 'w2f_facts'],
      notConfuse: t('Opinión cuantificada no equivale a hecho operativo medido. Una escala de 1 a 5 tampoco demuestra que la distancia entre todas las valoraciones sea igual.', 'A quantified opinion is not a measured operational fact. A 1-to-5 scale also does not establish equal distances between all ratings.'),
      sources: ['w2f_src_course_summary']
    },
    w2f_surveys: {
      id: 'w2f_surveys', label: t('ENCUESTAS', 'SURVEYS'), layer: 'foundation',
      what: t('Recopilación estructurada de respuestas de varias personas mediante un cuestionario común. Puede combinar preguntas abiertas, respondidas con palabras propias; cerradas, con opciones limitadas; y escalas numéricas, que registran valoraciones como facilidad de 1 a 5.', 'Structured collection of answers from multiple people through a common questionnaire. It can combine open questions, answered in people\'s own words; closed questions, with limited options; and numeric scales, which record ratings such as ease from 1 to 5.'),
      why: t('Permiten comparar respuestas a mayor escala que una conversación individual. Ofrecen menos profundidad y son sensibles al diseño de preguntas, a quién participa y a quién no responde.', 'They allow comparison across more people than an individual conversation. They offer less depth and are sensitive to question design, who participates, and who does not respond.'),
      question: t('¿Qué necesitamos preguntar de la misma manera a varias personas para comparar sus respuestas?', 'What do we need to ask several people in the same way to compare their answers?'),
      example: illustrative('Un cuestionario podría preguntar qué dificultades existen (abierta), si se consulta el historial antes de autorizar una reparación (cerrada: sí/no) y qué tan fácil es encontrarlo (escala: 1 muy difícil a 5 muy fácil). Estas son preguntas propuestas, no resultados.', 'A questionnaire could ask what difficulties exist (open), whether history is consulted before authorizing a repair (closed: yes/no), and how easy it is to find (scale: 1 very difficult to 5 very easy). These are proposed questions, not results.'),
      analogy: t('La misma plantilla entregada a varias personas: facilita comparar, pero la plantilla determina qué puede contarse.', 'The same template handed to several people: it helps comparison, but the template determines what can be reported.'),
      related: ['w2f_open_questions', 'w2f_closed_questions', 'w2f_numeric_scale', 'w2f_interviews', 'w2f_sampling', 'w2f_facts'],
      notConfuse: t('Encuesta no significa únicamente preguntas cerradas. Muchas respuestas no garantizan representatividad, y una puntuación de facilidad sigue siendo una percepción.', 'A survey does not mean only closed questions. Many responses do not guarantee representativeness, and an ease rating remains a perception.'),
      sources: ['w2f_src_course_summary', 'w2f_src_surveys']
    },
    w2f_observation: {
      id: 'w2f_observation', label: t('OBSERVACIÓN', 'OBSERVATION'), layer: 'foundation',
      what: t('Estudiar el trabajo mientras las personas lo realizan en su contexto, registrando acciones, secuencias, herramientas y dificultades observables.', 'Study work while people perform it in context, recording observable actions, sequences, tools, and difficulties.'),
      why: t('Permite contrastar lo que las personas dicen con lo que ocurre y descubrir pasos que omiten al explicarlo. La presencia del observador puede influir en la conducta.', 'It helps compare what people say with what happens and uncover steps omitted in explanations. The observer\'s presence can influence behavior.'),
      question: t('¿Qué sucede realmente cuando una persona realiza esta tarea?', 'What actually happens when a person performs this task?'),
      example: illustrative('Observar, con autorización, una búsqueda del historial y anotar qué herramientas se usan; cualquier diferencia con lo declarado se investigaría antes de concluir.', 'Observe an authorized history lookup and note which tools are used; any difference from reported behavior would be investigated before drawing conclusions.'),
      analogy: t('Ver preparar una receta revela pausas y ajustes que no aparecen al escuchar solo su descripción.', 'Watching a recipe being prepared reveals pauses and adjustments missing from its verbal description.'),
      related: ['w2f_interviews', 'w2f_current_system_review', 'w2f_business_process_mapping', 'w2f_how', 'w2f_facts'],
      notConfuse: t('Lo que alguien dice puede diferir de lo que hace sin que haya engaño. Una sesión observada no demuestra que todos los casos sean iguales ni explica por sí sola los motivos.', 'What someone says may differ from what they do without deception. One observed session does not establish that all cases are alike or explain motives on its own.'),
      sources: ['w2f_src_course_summary', 'w2f_src_observation']
    },
    w2f_focus_groups: {
      id: 'w2f_focus_groups', label: t('GRUPOS FOCALES', 'FOCUS GROUPS'), layer: 'foundation',
      what: t('Discusiones guiadas con varias personas sobre un tema, en las que la interacción permite conocer experiencias compartidas y puntos de vista diferentes.', 'Guided discussions with multiple people about a topic, where interaction reveals shared experiences and different perspectives.'),
      why: t('Los participantes pueden recordar, ampliar o cuestionar ideas de otros. La presión social, las jerarquías o una voz dominante pueden sesgar lo expresado.', 'Participants may recall, extend, or question others\' ideas. Social pressure, hierarchies, or a dominant voice can bias what is expressed.'),
      question: t('¿Qué experiencias comparten los participantes y en qué difieren sus necesidades?', 'Which experiences do participants share, and how do their needs differ?'),
      example: illustrative('Proponer una conversación guiada sobre consultar el historial, dando espacio a experiencias distintas y registrando desacuerdos sin presentarlos como resultados ya obtenidos.', 'Propose a guided discussion about consulting history, allowing different experiences and recording disagreements without presenting them as results already obtained.'),
      analogy: t('Una mesa de conversación: una experiencia despierta otras, pero el volumen de una voz no mide la importancia de su necesidad.', 'A discussion table: one experience brings others to mind, but a voice\'s volume does not measure the importance of its need.'),
      related: ['w2f_interviews', 'w2f_open_questions', 'w2f_surveys', 'w2f_who', 'w2f_facts'],
      notConfuse: t('Un grupo focal no es una votación representativa ni varias entrevistas independientes. El acuerdo visible puede reflejar la dinámica social y debe interpretarse con cuidado.', 'A focus group is not a representative vote or several independent interviews. Visible agreement may reflect social dynamics and needs careful interpretation.'),
      sources: ['w2f_src_course_summary', 'w2f_src_focus_groups', 'w2f_src_surveys']
    },
    w2f_current_system_review: {
      id: 'w2f_current_system_review', label: t('REVISIÓN DEL SISTEMA ACTUAL', 'CURRENT SYSTEM REVIEW'), layer: 'foundation',
      what: t('Examinar las herramientas, formularios, registros y procesos con los que hoy se realiza el trabajo. Incluye software, hojas de cálculo, documentos, hábitos y soluciones manuales que compensan limitaciones.', 'Examine the tools, forms, records, and processes used to perform work today. This includes software, spreadsheets, documents, habits, and manual workarounds that compensate for limitations.'),
      why: t('Revela reglas reales, duplicaciones y dependencias que podrían quedar ocultas si se estudiara únicamente el software formal.', 'It reveals actual rules, duplication, and dependencies that could remain hidden if only the formal software were studied.'),
      question: t('¿Qué usan realmente las personas para completar el trabajo, incluidas las soluciones fuera del sistema formal?', 'What do people actually use to complete the work, including workarounds outside the formal system?'),
      example: illustrative('Revisar si el mantenimiento se gestiona con formularios, software o una hoja de cálculo auxiliar, y preguntar qué resuelve cada recurso. Su existencia debe comprobarse.', 'Review whether maintenance is managed with forms, software, or an auxiliary spreadsheet, and ask what each resource solves. Their existence must be established.'),
      analogy: t('Inspeccionar todo un taller: las herramientas improvisadas también explican cómo se consigue terminar el trabajo.', 'Inspect an entire workshop: improvised tools also explain how work gets finished.'),
      related: ['w2f_documents_records', 'w2f_observation', 'w2f_interviews', 'w2f_business_process_mapping', 'w2f_how', 'w2f_facts'],
      notConfuse: t('Sistema actual no significa solo aplicación informática. Una solución manual habitual tampoco se convierte automáticamente en una regla aprobada o en un requisito futuro.', 'The current system is more than its software application. A habitual workaround does not automatically become an approved rule or a future requirement.'),
      sources: ['w2f_src_course_summary']
    },
    w2f_documents_records: {
      id: 'w2f_documents_records', label: t('DOCUMENTOS Y REGISTROS', 'DOCUMENTS AND RECORDS'), layer: 'foundation',
      what: t('Fuentes existentes que describen reglas o conservan información del trabajo: procedimientos, formularios, órdenes, informes e historiales. Un formulario vacío muestra campos; un registro completado documenta un caso.', 'Existing sources that describe rules or preserve information about work: procedures, forms, orders, reports, and histories. A blank form shows fields; a completed record documents a case.'),
      why: t('Permiten identificar datos utilizados, condiciones escritas y rastros de operaciones. Hay que considerar su fecha, procedencia, vigencia y posibles omisiones.', 'They help identify data used, written conditions, and traces of operations. Their date, provenance, currency, and possible omissions matter.'),
      question: t('¿Qué información queda registrada y qué documentos respaldan las reglas que nos describen?', 'What information is recorded, and which documents support the rules being described?'),
      example: illustrative('Examinar una plantilla de orden de mantenimiento y una muestra autorizada de órdenes completadas para distinguir campos previstos de información efectivamente registrada.', 'Examine a maintenance order template and an authorized sample of completed orders to distinguish intended fields from information actually recorded.'),
      analogy: t('Un archivo de huellas: ayuda a reconstruir lo ocurrido, aunque puede contener vacíos o huellas mal registradas.', 'An archive of footprints: it helps reconstruct events but may contain gaps or incorrectly recorded traces.'),
      related: ['w2f_documents', 'w2f_records', 'w2f_current_system_review', 'w2f_sampling', 'w2f_what', 'w2f_when', 'w2f_facts'],
      notConfuse: t('Un procedimiento escrito describe lo previsto, no prueba su cumplimiento. Un registro tampoco es infalible: debe examinarse y contrastarse.', 'A written procedure describes what is intended, not proof of compliance. A record is not infallible either: it needs examination and corroboration.'),
      sources: ['w2f_src_course_summary']
    },
    w2f_business_process_mapping: {
      id: 'w2f_business_process_mapping', label: t('MAPEO DE PROCESOS: APLICACIÓN AL DESCUBRIMIENTO', 'PROCESS MAPPING: APPLICATION TO DISCOVERY'), layer: 'foundation',
      what: t('Aplicar el mapeo estudiado en Semana 1, diagrama 03, para organizar los hechos sobre actividades, decisiones, actores, información y problemas del trabajo actual.', 'Apply the mapping studied in Week 1, diagram 03, to organize facts about activities, decisions, actors, information, and problems in current work.'),
      why: t('Conecta hallazgos dispersos y permite localizar preguntas pendientes en el flujo. La explicación completa de proceso y modelado se conserva en Semana 1, diagrama 03.', 'It connects scattered findings and locates unanswered questions in the workflow. The full explanation of processes and modeling remains in Week 1, diagram 03.'),
      question: t('¿Dónde se ubican las actividades, decisiones, responsables, datos y dificultades que estamos descubriendo?', 'Where do the activities, decisions, owners, data, and difficulties being discovered fit?'),
      example: illustrative('Esbozar solicitud de mantenimiento, decisión de autorización, ejecución y registro; marcar como pendientes los pasos y responsables que aún no tengan evidencia.', 'Sketch a maintenance request, authorization decision, execution, and recording; mark steps and owners without evidence as unresolved.'),
      analogy: t('Anotar hallazgos sobre el mapa de una ruta ya aprendido, señalando los tramos todavía desconocidos.', 'Annotate findings on a route map already learned, marking sections that remain unknown.'),
      // Existing Week 1 concept IDs: references only, never duplicated here.
      related: ['process_modeling', 'business_process', 'w2f_observation', 'w2f_current_system_review', 'w2f_facts'],
      notConfuse: t('Este nodo aplica el diagrama 03 de Semana 1; no vuelve a definir todo el concepto. Un mapa provisional no prueba que el trabajo ocurra así ni prescribe todavía el proceso futuro.', 'This node applies Week 1 diagram 03; it does not redefine the full concept. A provisional map does not prove work happens that way or prescribe the future process.'),
      sources: ['w2f_src_course_summary']
    },
    w2f_sampling: {
      id: 'w2f_sampling', label: t('MUESTREO', 'SAMPLING'), layer: 'foundation',
      what: t('Seleccionar una parte de una población para estudiarla. Aleatorio simple: sortear unidades con igual probabilidad. Sistemático: cada k unidades con inicio aleatorio. Estratificado: seleccionar dentro de cada grupo relevante. Por conglomerados: seleccionar grupos y estudiar sus unidades. La distinción probabilístico / no probabilístico se ofrece como profundización académica.', 'Select part of a population for study. Simple random: draw units with equal probability. Systematic: every kth unit with a random start. Stratified: select within each relevant group. Cluster: select groups and study their units. The probability / non-probability distinction is offered as academic deepening.'),
      why: t('Hace manejable revisar personas o registros cuando no se puede estudiar el conjunto completo; la selección condiciona las conclusiones.', 'It makes studying people or records manageable when the entire population cannot be examined; selection affects conclusions.'),
      question: t('¿De qué población obtendremos la muestra y cómo seleccionaremos sus unidades?', 'Which population will the sample come from, and how will its units be selected?'),
      example: illustrative('Definir las órdenes de un período y comparar cuatro diseños: sortear registros; elegir cada décimo tras un inicio aleatorio; seleccionar registros dentro de cada tipo de vehículo; o sortear grupos de registros. RECOMENDACIÓN ANALÍTICA: considerar estratos por vehículos policiales, camiones de basura, bomberos y otros vehículos municipales, sin declararlo un método obligatorio.', 'Define orders from a period and compare four designs: randomly draw records; select every tenth after a random start; select records within each vehicle type; or randomly draw groups of records. ANALYTICAL RECOMMENDATION: consider strata for police vehicles, garbage trucks, fire trucks, and other municipal vehicles, without declaring this method mandatory.'),
      analogy: t('Examinar algunas piezas de una caja: cómo se eligen importa para lo que se pueda decir del conjunto.', 'Examine some pieces from a box: how they are chosen matters for what can be said about the whole.'),
      related: ['w2f_random_sampling', 'w2f_systematic_sampling', 'w2f_stratified_sampling', 'w2f_cluster_sampling', 'w2f_probability_sampling', 'w2f_nonprobability_sampling', 'w2f_sampling_recommendation', 'w2f_records', 'w2f_surveys'],
      notConfuse: t('Una muestra no es toda la población. Un tamaño grande no corrige por sí solo una lista incompleta ni una selección sesgada.', 'A sample is not the entire population. A large size alone does not correct an incomplete list or biased selection.'),
      sources: ['w2f_src_course_summary', 'w2f_src_sampling', 'w2f_src_nonprobability']
    },
    w2f_random_sampling: {
      id: 'w2f_random_sampling', label: t('MUESTREO ALEATORIO SIMPLE', 'SIMPLE RANDOM SAMPLING'), layer: 'foundation',
      what: t('Selección probabilística al azar: cada unidad y cada muestra posible del tamaño fijado tienen la misma probabilidad de selección.', 'Probability selection by chance: each unit and each possible sample of the fixed size have equal selection probabilities.'),
      why: t('Evita que quien selecciona escoja según sus preferencias; necesita una lista adecuada de la población.', 'It prevents selection based on the selector\'s preferences; it requires an appropriate population list.'),
      question: t('¿Cómo elegiremos unidades al azar a partir de la lista completa?', 'How will we select units randomly from the complete list?'),
      example: illustrative('Numerar 120 órdenes ficticias y sortear 12 números distintos con igual probabilidad, sin reemplazo.', 'Number 120 fictional orders and randomly draw 12 distinct numbers with equal probability, without replacement.'),
      analogy: t('Un sorteo justo con una papeleta por unidad.', 'A fair draw with one ticket per unit.'),
      related: ['w2f_sampling', 'w2f_probability_sampling', 'w2f_systematic_sampling', 'w2f_stratified_sampling', 'w2f_documents_records', 'w2f_surveys'],
      notConfuse: t('Aleatorio no significa elegir los primeros, los más accesibles o los que parecen variados. Una muestra concreta no tiene representatividad garantizada.', 'Random does not mean choosing the first, most accessible, or seemingly varied units. A particular sample is not guaranteed to be representative.'),
      sources: ['w2f_src_course_summary', 'w2f_src_sampling']
    },
    w2f_systematic_sampling: {
      id: 'w2f_systematic_sampling', label: t('MUESTREO SISTEMÁTICO', 'SYSTEMATIC SAMPLING'), layer: 'foundation',
      what: t('Seleccionar cada k unidades de una lista después de elegir al azar un inicio entre 1 y k. El intervalo determina las selecciones siguientes.', 'Select every kth unit from a list after randomly choosing a start between 1 and k. The interval determines subsequent selections.'),
      why: t('Simplifica recorrer la lista; exige revisar patrones periódicos que coincidan con el intervalo y distorsionen la muestra.', 'It simplifies traversing the list; periodic patterns matching the interval must be considered because they can distort the sample.'),
      question: t('¿Cuál será el intervalo, cómo sortearemos el inicio y qué periodicidad podría afectar la selección?', 'What interval will we use, how will we randomize the start, and what periodicity could affect selection?'),
      example: illustrative('Para 120 órdenes ficticias y 12 selecciones, k = 10. Si el inicio sorteado es 4, seleccionar 4, 14, 24, 34, 44, 54, 64, 74, 84, 94, 104 y 114.', 'For 120 fictional orders and 12 selections, k = 10. If the random start is 4, select 4, 14, 24, 34, 44, 54, 64, 74, 84, 94, 104, and 114.'),
      analogy: t('Avanzar con pasos iguales después de sortear el primer punto.', 'Move in equal steps after randomly choosing the first point.'),
      related: ['w2f_sampling', 'w2f_random_sampling', 'w2f_documents_records', 'w2f_surveys'],
      notConfuse: t('No es muestreo aleatorio simple: las selecciones quedan ligadas al intervalo. Empezar siempre por el primer registro elimina el inicio aleatorio; un patrón repetido puede sesgar el resultado.', 'It is not simple random sampling: selections are tied to the interval. Always starting with the first record removes the random start; a repeating pattern can bias the result.'),
      sources: ['w2f_src_course_summary', 'w2f_src_sampling']
    },
    w2f_who: {
      id: 'w2f_who', label: t('QUIÉN', 'WHO'), layer: 'foundation',
      what: t('Pregunta de descubrimiento que identifica personas, roles, responsables y destinatarios del trabajo y de la información.', 'A discovery question that identifies people, roles, owners, and recipients of work and information.'),
      why: t('Permite atribuir acciones y decisiones y detectar necesidades de personas que podrían quedar fuera de la investigación.', 'It helps attribute actions and decisions and detect needs of people who might otherwise be excluded from research.'),
      question: t('¿Quién solicita, registra, autoriza, ejecuta y consulta?', 'Who requests, records, authorizes, performs, and consults?'),
      example: illustrative('Preguntar quién autoriza una reparación y contrastar la respuesta con el procedimiento y los registros disponibles.', 'Ask who authorizes a repair and compare the answer with the procedure and available records.'),
      analogy: t('Identificar quién participa en cada tramo de una carrera de relevos.', 'Identify who takes part in each leg of a relay race.'),
      related: ['w2f_stakeholders', 'w2f_interviews', 'w2f_focus_groups', 'w2f_business_process_mapping', 'w2f_facts'],
      notConfuse: t('Un cargo en el organigrama no prueba quién realiza o autoriza realmente una acción. La respuesta alimenta hechos, no permisos inventados.', 'A title on an organization chart does not establish who actually performs or authorizes an action. The answer feeds facts, not invented permissions.'),
      sources: ['w2f_src_course_summary']
    },
    w2f_what: {
      id: 'w2f_what', label: t('QUÉ', 'WHAT'), layer: 'foundation',
      what: t('Pregunta de descubrimiento sobre actividades, datos, entradas, salidas y problemas concretos del trabajo.', 'A discovery question about activities, data, inputs, outputs, and specific work problems.'),
      why: t('Concreta qué sucede y qué información interviene antes de proponer funciones para el sistema.', 'It establishes what happens and which information is involved before proposing system functions.'),
      question: t('¿Qué se hace, qué datos se usan y qué resultado se produce?', 'What is done, what data is used, and what result is produced?'),
      example: illustrative('Identificar qué datos contiene una orden de mantenimiento y cuáles se usan al consultar el historial.', 'Identify which data a maintenance order contains and which are used when consulting the history.'),
      analogy: t('Revisar ingredientes y resultado de una receta antes de cambiar sus utensilios.', 'Inspect a recipe\'s ingredients and result before changing its utensils.'),
      related: ['w2f_documents_records', 'w2f_observation', 'w2f_current_system_review', 'w2f_facts'],
      notConfuse: t('Describir qué ocurre hoy no equivale a decidir qué pantalla construir. La respuesta debe convertirse en evidencia antes de derivar requisitos.', 'Describing what happens today is not deciding which screen to build. The answer must become evidence before requirements are derived.'),
      sources: ['w2f_src_course_summary']
    },
    w2f_when: {
      id: 'w2f_when', label: t('CUÁNDO', 'WHEN'), layer: 'foundation',
      what: t('Pregunta de descubrimiento sobre momentos, eventos desencadenantes, frecuencia, secuencia y plazos del trabajo.', 'A discovery question about timing, triggering events, frequency, sequence, and work deadlines.'),
      why: t('Permite ubicar esperas, condiciones temporales y diferencias entre casos habituales y excepcionales.', 'It helps locate waiting periods, timing conditions, and differences between routine and exceptional cases.'),
      question: t('¿Cuándo comienza la actividad, con qué frecuencia ocurre y cuándo debe terminar?', 'When does the activity begin, how often does it occur, and when must it finish?'),
      example: illustrative('Investigar si el mantenimiento se registra al finalizar la tarea o después, y contrastar lo declarado con fechas disponibles.', 'Investigate whether maintenance is recorded when the task ends or later, and compare reported timing with available dates.'),
      analogy: t('Una línea de tiempo que muestra tanto acciones como esperas.', 'A timeline showing both actions and waiting periods.'),
      related: ['w2f_documents_records', 'w2f_observation', 'w2f_business_process_mapping', 'w2f_facts'],
      notConfuse: t('Una fecha de registro puede diferir de la fecha del evento. Una demora percibida necesita distinguirse de una duración medida.', 'A recording date may differ from the event date. A perceived delay must be distinguished from a measured duration.'),
      sources: ['w2f_src_course_summary']
    },
    w2f_where: {
      id: 'w2f_where', label: t('DÓNDE', 'WHERE'), layer: 'foundation',
      what: t('Pregunta de descubrimiento sobre el lugar físico, canal o ubicación de la información donde ocurre el trabajo.', 'A discovery question about the physical location, channel, or information location where work happens.'),
      why: t('Hace visibles necesidades de acceso y transferencias de información entre lugares y herramientas.', 'It makes access needs and information transfers between locations and tools visible.'),
      question: t('¿Dónde se realiza la tarea y dónde se guarda o consulta su información?', 'Where is the task performed, and where is its information stored or retrieved?'),
      example: illustrative('Preguntar dónde se registra una reparación y dónde se encuentra después su historial, sin asumir que ambos lugares coinciden.', 'Ask where a repair is recorded and where its history is later found, without assuming both locations are the same.'),
      analogy: t('Ubicar estaciones y conexiones en un plano para entender por dónde debe pasar la información.', 'Locate stations and connections on a map to understand where information must travel.'),
      related: ['w2f_observation', 'w2f_current_system_review', 'w2f_documents_records', 'w2f_facts'],
      notConfuse: t('Dónde no se limita a una dirección física: puede ser un archivo, una aplicación o un canal. Nombrar el lugar no demuestra quién tiene acceso.', 'Where is not limited to a physical address: it may be a file, application, or channel. Naming the location does not establish who has access.'),
      sources: ['w2f_src_course_summary']
    },
    w2f_how: {
      id: 'w2f_how', label: t('CÓMO', 'HOW'), layer: 'foundation',
      what: t('Pregunta de descubrimiento sobre los pasos, herramientas, intercambios y excepciones mediante los cuales se completa una actividad.', 'A discovery question about the steps, tools, exchanges, and exceptions through which an activity is completed.'),
      why: t('Revela mecanismos reales y soluciones manuales que pueden no aparecer en una descripción general.', 'It reveals actual mechanisms and manual workarounds that may be absent from a general description.'),
      question: t('¿Cómo se realiza la tarea paso a paso y qué ocurre si algo falla?', 'How is the task performed step by step, and what happens if something fails?'),
      example: illustrative('Pedir que se muestre cómo buscar el historial de un vehículo y anotar los pasos y recursos utilizados.', 'Ask for a demonstration of how to find a vehicle\'s history and record the steps and resources used.'),
      analogy: t('Seguir las instrucciones reales de montaje, incluidos los ajustes que alguien hace para que encaje una pieza.', 'Follow the actual assembly steps, including adjustments made to fit a piece.'),
      related: ['w2f_observation', 'w2f_interviews', 'w2f_current_system_review', 'w2f_business_process_mapping', 'w2f_facts'],
      notConfuse: t('Cómo se trabaja hoy no es cómo deberá implementarse el futuro software. Una descripción verbal se contrasta con el trabajo observado.', 'How work is done today is not how future software must be implemented. A verbal description is compared with observed work.'),
      sources: ['w2f_src_course_summary']
    },
    w2f_why: {
      id: 'w2f_why', label: t('POR QUÉ', 'WHY'), layer: 'foundation',
      what: t('Pregunta de descubrimiento sobre el propósito, la justificación y las razones de una actividad o regla.', 'A discovery question about the purpose, justification, and reasons behind an activity or rule.'),
      why: t('Ayuda a separar una necesidad de la solución que alguien propone y a examinar pasos que se mantienen por costumbre.', 'It helps separate a need from someone\'s proposed solution and examine steps maintained out of habit.'),
      question: t('¿Por qué se realiza este paso y qué necesidad o regla pretende atender?', 'Why is this step performed, and which need or rule is it intended to address?'),
      example: illustrative('Preguntar por qué se consulta el historial antes de autorizar una reparación y buscar evidencia del propósito y de la regla descrita.', 'Ask why history is consulted before authorizing a repair and seek evidence for the purpose and rule described.'),
      analogy: t('Entender para qué sirve una llave antes de fabricar otra igual.', 'Understand what a key is for before making another just like it.'),
      related: ['w2f_open_questions', 'w2f_interviews', 'w2f_documents_records', 'w2f_facts', 'w2f_requirements'],
      notConfuse: t('Una explicación plausible no demuestra una causa ni una regla autorizada. Las razones declaradas también deben contrastarse.', 'A plausible explanation does not establish a cause or an authorized rule. Reported reasons also require corroboration.'),
      sources: ['w2f_src_course_summary']
    },
    w2f_facts: {
      id: 'w2f_facts', label: t('HECHOS', 'FACTS'), layer: 'foundation',
      what: t('Hallazgos sustentados en evidencia identificable sobre el trabajo actual. Las respuestas a quién, qué, cuándo, dónde, cómo y por qué alimentan su recopilación y contraste.', 'Findings supported by identifiable evidence about current work. Answers to who, what, when, where, how, and why feed their collection and corroboration.'),
      why: t('Ofrecen una base rastreable para discutir cambios y derivar requisitos, conservando el contexto y las limitaciones de lo encontrado.', 'They provide a traceable basis for discussing changes and deriving requirements while retaining the context and limitations of findings.'),
      question: t('¿Qué evidencia respalda este hallazgo, de dónde proviene y hasta dónde permite concluir?', 'What evidence supports this finding, where does it come from, and how far does it support conclusions?'),
      example: illustrative('Si una observación documentara que se consultaron dos registros para una reparación, el hecho se limitaría a ese caso. No demostraría que siempre ocurre ni que ya se ha investigado Eden Bay.', 'If an observation documented two records being consulted for a repair, the fact would be limited to that case. It would not establish that this always happens or that Eden Bay has already been researched.'),
      analogy: t('Piezas con etiqueta de procedencia: permiten reconstruir una historia sin inventar las partes que faltan.', 'Pieces with provenance labels: they help reconstruct a story without inventing missing parts.'),
      related: ['w2f_who', 'w2f_what', 'w2f_when', 'w2f_where', 'w2f_how', 'w2f_why', 'w2f_opinion', 'w2f_triangulation', 'w2f_organize'],
      notConfuse: t('Declaración, opinión, hipótesis y hecho operativo son distintos. Puede comprobarse que alguien puntuó 2/5, pero esa puntuación expresa una percepción, no un tiempo de respuesta medido.', 'A statement, opinion, hypothesis, and operational fact are different. It can be established that someone rated something 2/5, but the rating expresses a perception, not a measured response time.'),
      sources: ['w2f_src_course_summary']
    },
    w2f_requirements: {
      id: 'w2f_requirements', label: t('REQUISITOS VALIDADOS', 'VALIDATED REQUIREMENTS'), layer: 'foundation',
      what: t('Declaraciones de lo que el sistema necesita hacer o cumplir, revisadas por usuarios y analista contra las necesidades y la evidencia. Se distinguen de candidatos aún pendientes de esa validación.', 'Statements of what the system needs to do or satisfy, reviewed by users and the analyst against needs and evidence. They differ from candidates still awaiting that validation.'),
      why: t('Transforman el conocimiento del trabajo en condiciones que orientan el diseño y pueden comprobarse, con un vínculo explícito a su evidencia.', 'They turn knowledge of work into conditions that guide design and can be checked, with an explicit link to their evidence.'),
      question: t('¿Qué necesita hacer o cumplir el sistema, qué evidencia lo justifica y cómo se comprobará?', 'What does the system need to do or satisfy, what evidence justifies it, and how will it be checked?'),
      example: illustrative('El candidato permitir consultar el historial por vehículo solo pasaría a validado después de revisar con usuarios y analista quién lo necesita, qué información abarca y cómo se comprobará. Aquí no se afirma que esa validación haya ocurrido.', 'The candidate allow history retrieval by vehicle would become validated only after users and the analyst review who needs it, which information it covers, and how it will be checked. No such validation is claimed here.'),
      analogy: t('Un encargo preciso escrito después de comprender el problema que debe resolver.', 'A precise brief written after understanding the problem it must solve.'),
      related: ['w2f_candidate_requirements', 'w2f_validation', 'w2f_facts', 'w2f_reality', 'w2f_why'],
      notConfuse: t('Validado no significa implementado, probado ni inmutable. HECHOS → ORGANIZAR → COMPARAR → ACLARAR → CANDIDATOS → VALIDACIÓN → REQUISITOS VALIDADOS mantiene visibles las decisiones humanas.', 'Validated does not mean implemented, tested, or immutable. FACTS → ORGANIZE → COMPARE → CLARIFY → CANDIDATES → VALIDATION → VALIDATED REQUIREMENTS keeps human decisions visible.'),
      sources: ['w2f_src_course_summary', 'w2f_src_closure']
    }
  });

  Object.assign(db.concepts, {
    w2f_stratified_sampling: {
      id: 'w2f_stratified_sampling', label: t('MUESTREO ESTRATIFICADO', 'STRATIFIED SAMPLING'), layer: 'foundation',
      what: t('Dividir la población en grupos relevantes, mutuamente excluyentes, y seleccionar una muestra dentro de cada grupo. En el diseño probabilístico, la selección dentro de los estratos utiliza azar.', 'Divide the population into relevant, mutually exclusive groups and select a sample within every group. In a probability design, selection within strata uses randomization.'),
      why: t('Permite incluir categorías pequeñas pero importantes cuyos perfiles de mantenimiento podrían perderse en una muestra aleatoria del conjunto.', 'It helps include small but important categories whose maintenance profiles could be missed in a random sample of the whole.'),
      question: t('¿Qué grupos necesitan representación y cómo seleccionaremos registros dentro de cada uno?', 'Which groups need representation, and how will we select records within each?'),
      example: illustrative('Usar como posibles estratos vehículos policiales, camiones de basura, camiones de bomberos y otros vehículos municipales; seleccionar registros al azar dentro de cada categoría.', 'Use police vehicles, garbage trucks, fire trucks, and other municipal vehicles as possible strata; randomly select records within each category.'),
      analogy: t('Elegir algunas piezas de cada compartimento de una caja clasificada.', 'Choose some pieces from every compartment of a sorted box.'),
      related: ['w2f_sampling', 'w2f_sampling_recommendation', 'w2f_cluster_sampling', 'w2f_probability_sampling'],
      notConfuse: t('Estratificar no es seleccionar solo algunos grupos. Tampoco basta asignar cuotas: elegir por conveniencia dentro de cada grupo no constituye muestreo probabilístico.', 'Stratifying is not selecting only some groups. Quotas alone are insufficient: convenience selection within groups is not probability sampling.'),
      sources: ['w2f_src_closure', 'w2f_src_sampling', 'w2f_src_nonprobability']
    },
    w2f_cluster_sampling: {
      id: 'w2f_cluster_sampling', label: t('MUESTREO POR CONGLOMERADOS', 'CLUSTER SAMPLING'), layer: 'foundation',
      what: t('Dividir la población en grupos y seleccionar algunos al azar. En el diseño de una etapa se estudian todas las unidades de los grupos seleccionados.', 'Divide the population into groups and randomly select some groups. In a one-stage design, all units in the selected groups are studied.'),
      why: t('Puede reducir el trabajo de acceso cuando los registros están agrupados; la semejanza dentro de los grupos puede reducir la diversidad de la muestra.', 'It can reduce access effort when records are grouped; similarity within groups can reduce sample diversity.'),
      question: t('¿Qué agrupaciones existen y qué perderíamos al estudiar solo algunas?', 'Which groupings exist, and what might we miss by studying only some of them?'),
      example: illustrative('Si las órdenes estuvieran archivadas en lotes mensuales, sortear algunos lotes y revisar todas sus órdenes. La existencia de esos lotes es hipotética.', 'If orders were filed in monthly batches, randomly select some batches and review all their orders. The existence of those batches is hypothetical.'),
      analogy: t('Sortear cajas completas y examinar su contenido.', 'Randomly draw whole boxes and examine their contents.'),
      related: ['w2f_sampling', 'w2f_stratified_sampling', 'w2f_probability_sampling', 'w2f_records'],
      notConfuse: t('Estratos: muestra de cada grupo. Conglomerados: muestra de grupos. Si luego se seleccionan unidades dentro de los grupos elegidos, el diseño tiene etapas adicionales.', 'Strata: a sample from every group. Clusters: a sample of groups. Selecting units within chosen groups adds further sampling stages.'),
      sources: ['w2f_src_closure', 'w2f_src_sampling']
    },
    w2f_probability_sampling: {
      id: 'w2f_probability_sampling', label: t('MUESTREO PROBABILÍSTICO', 'PROBABILITY SAMPLING'), layer: 'deepening',
      what: t('Profundización académica: selección mediante azar en la que cada unidad tiene una probabilidad de inclusión conocida y positiva; no necesariamente igual.', 'Academic deepening: randomized selection in which every unit has a known, positive inclusion probability; probabilities need not be equal.'),
      why: t('Permite relacionar el diseño de selección con las inferencias sobre la población.', 'It connects the selection design to inferences about the population.'),
      question: t('¿Puede explicarse la probabilidad de inclusión de cada unidad?', 'Can each unit\'s inclusion probability be explained?'),
      example: illustrative('Seleccionar aleatoriamente registros dentro de cada tipo de vehículo y documentar el tamaño de cada grupo y su selección.', 'Randomly select records within each vehicle type and document each group\'s size and selection.'),
      analogy: t('Un sorteo con reglas conocidas antes de extraer las papeletas.', 'A draw whose rules are known before tickets are selected.'),
      related: ['w2f_random_sampling', 'w2f_systematic_sampling', 'w2f_stratified_sampling', 'w2f_cluster_sampling', 'w2f_nonprobability_sampling'],
      notConfuse: t('Probabilidad conocida no exige igualdad. Igual probabilidad por unidad tampoco vuelve todo diseño aleatorio simple.', 'Known probability does not require equality. Equal probability per unit does not make every design simple random sampling.'),
      sources: ['w2f_src_sampling']
    },
    w2f_nonprobability_sampling: {
      id: 'w2f_nonprobability_sampling', label: t('SELECCIÓN NO PROBABILÍSTICA / INTENCIONAL', 'NON-PROBABILITY / PURPOSIVE SELECTION'), layer: 'deepening',
      what: t('Profundización académica: seleccionar sin un mecanismo de azar que permita conocer probabilidades de inclusión. La selección intencional elige participantes por su experiencia relevante.', 'Academic deepening: select without a random mechanism that establishes inclusion probabilities. Purposive selection chooses participants for relevant experience.'),
      why: t('Puede servir para profundizar en roles concretos, pero no sustenta por sí sola estimaciones representativas de toda la población.', 'It can help explore specific roles, but alone does not support representative estimates of the whole population.'),
      question: t('¿Buscamos comprender una experiencia específica o estimar una característica poblacional?', 'Are we trying to understand a specific experience or estimate a population characteristic?'),
      example: illustrative('Invitar a Joe por su rol de mecánico para explorar información previa a una reparación. Eso no es una muestra aleatoria de todos los usuarios.', 'Invite Joe because he is a mechanic to explore information needed before repairs. That is not a random sample of all users.'),
      analogy: t('Consultar a quien conoce una tarea, sin confundir su experiencia con un censo.', 'Consult someone who knows a task without mistaking that experience for a census.'),
      related: ['w2f_probability_sampling', 'w2f_interviews', 'w2f_stakeholders', 'w2f_joe'],
      notConfuse: t('No probabilístico no significa inútil; limita las inferencias. Elegir varios roles por criterio no asigna probabilidades conocidas.', 'Non-probability does not mean useless; it limits inference. Selecting several roles by judgment does not assign known probabilities.'),
      sources: ['w2f_src_nonprobability']
    },
    w2f_sampling_recommendation: {
      id: 'w2f_sampling_recommendation', label: t('EDEN BAY: RECOMENDACIÓN ANALÍTICA', 'EDEN BAY: ANALYTICAL RECOMMENDATION'), layer: 'deepening',
      what: t('RECOMENDACIÓN ANALÍTICA: el muestreo estratificado por tipo de vehículo es un candidato sólido porque el caso incluye vehículos policiales, camiones de basura, bomberos y otros vehículos municipales.', 'ANALYTICAL RECOMMENDATION: stratified sampling by vehicle type is a strong candidate because the case includes police vehicles, garbage trucks, fire trucks, and other municipal vehicles.'),
      why: t('Esas categorías pueden diferir en uso, mantenimiento, costos y reparaciones. Una muestra aleatoria simple podría incluir muy pocos registros de una categoría pequeña pero importante.', 'Those categories may differ in use, maintenance, costs, and repairs. A simple random sample could include too few records from a small but important category.'),
      question: t('¿Los grupos y registros disponibles justifican estratificar para el objetivo de esta investigación?', 'Do the available groups and records justify stratifying for this research objective?'),
      example: illustrative('Proponer incluir cada categoría de la flota, revisar cuántos registros existen y decidir la selección dentro de cada estrato antes de analizar resultados.', 'Propose including every fleet category, review how many records exist, and decide selection within each stratum before analyzing results.'),
      analogy: t('Escuchar cada sección de una orquesta antes de juzgar el conjunto.', 'Listen to every section of an orchestra before judging the whole.'),
      related: ['w2f_sampling', 'w2f_stratified_sampling', 'w2f_random_sampling', 'w2f_records', 'w2f_martin'],
      notConfuse: t('La composición de la flota procede del caso suministrado; recomendar estratos es razonamiento analítico, no una regla absoluta ni un resultado del curso. Deben revisarse objetivo, cobertura y recursos.', 'Fleet composition comes from the supplied case; recommending strata is analytical reasoning, not an absolute rule or a course result. Objective, coverage, and resources need review.'),
      sources: ['w2f_src_closure', 'w2f_src_sampling']
    },
    w2f_opinion: {
      id: 'w2f_opinion', label: t('OPINIÓN / PERCEPCIÓN', 'OPINION / PERCEPTION'), layer: 'foundation',
      what: t('Lo que una persona cree, experimenta o interpreta. Una percepción ayuda a descubrir necesidades, pero se distingue de un hecho operativo respaldado por evidencia observable.', 'What a person believes, experiences, or interprets. A perception helps uncover needs but differs from an operational fact supported by observable evidence.'),
      why: t('Permite tomar en serio la experiencia sin presentar una valoración como tiempo, frecuencia o error medido.', 'It lets us take experience seriously without presenting a judgment as measured time, frequency, or error.'),
      question: t('¿Qué significa lento en esta actividad y qué evidencia permitiría investigarlo?', 'What does slow mean in this activity, and what evidence could help investigate it?'),
      example: illustrative('La frase hipotética "El sistema actual es lento" motivaría investigar tiempos de respuesta, pasos, esperas y errores. No se atribuye esa frase a ningún actor del caso.', 'The hypothetical statement "The current system is slow" would prompt investigation of response times, steps, waits, and errors. It is not attributed to any case stakeholder.'),
      analogy: t('Sentir frío y medir la temperatura aportan información distinta; una experiencia no sustituye la medición.', 'Feeling cold and measuring temperature provide different information; an experience does not replace a measurement.'),
      related: ['w2f_facts', 'w2f_numeric_scale', 'w2f_clarify', 'w2f_triangulation', 'w2f_followup_questions'],
      notConfuse: t('PERCEPCIÓN ≠ HECHO VERIFICADO. Que una persona haya expresado una opinión puede documentarse; el contenido de esa opinión aún requiere contraste.', 'PERCEPTION ≠ VERIFIED FACT. A person expressing an opinion can be documented; the content of that opinion still requires corroboration.'),
      sources: ['w2f_src_closure']
    },
    w2f_triangulation: {
      id: 'w2f_triangulation', label: t('TRIANGULACIÓN', 'TRIANGULATION'), layer: 'deepening',
      what: t('Profundización académica: contrastar información obtenida mediante diferentes fuentes o técnicas para aumentar nuestra comprensión de una situación.', 'Academic deepening: compare information from different sources or methods to increase understanding of a situation.'),
      why: t('Permite estudiar coincidencias y diferencias entre entrevista, observación y registros, conservando los desacuerdos que requieren aclaración.', 'It helps examine agreement and differences between interviews, observation, and records while preserving disagreements requiring clarification.'),
      question: t('¿Entrevista, observación y registros respaldan el mismo hallazgo en el mismo contexto?', 'Do the interview, observation, and records support the same finding in the same context?'),
      example: illustrative('Tres fuentes hipotéticas: entrevista expresa dificultad para encontrar historial; observación muestra varias búsquedas manuales; registros de tiempos o del proceso corroboran pasos y espera. Juntas podrían respaldar un hallazgo compartido limitado a los casos estudiados.', 'Three hypothetical sources: an interview reports difficulty finding history; observation shows several manual searches; timing or process records corroborate steps and waiting. Together they could support a shared finding limited to the cases studied.'),
      analogy: t('Mirar el mismo objeto desde distintos ángulos para entender su forma.', 'View the same object from different angles to understand its shape.'),
      related: ['w2f_interviews', 'w2f_observation', 'w2f_records', 'w2f_shared_finding', 'w2f_compare', 'w2f_clarify'],
      notConfuse: t('No se presenta como encabezado canónico de Semana 2. Tres repeticiones de una misma fuente no son tres confirmaciones independientes, y la triangulación no obliga a encontrar acuerdo.', 'It is not presented as a canonical Week 2 heading. Three repetitions of one source are not three independent confirmations, and triangulation does not force agreement.'),
      sources: ['w2f_src_triangulation']
    },
    w2f_shared_finding: {
      id: 'w2f_shared_finding', label: t('HALLAZGO COMPARTIDO', 'SHARED FINDING'), layer: 'deepening',
      what: t('Una conclusión delimitada que diferentes fuentes respaldan después del contraste. Conserva qué aporta cada fuente y qué parte permanece incierta.', 'A bounded conclusion supported by different sources after comparison. It preserves each source\'s contribution and what remains uncertain.'),
      why: t('Hace visible la convergencia sin borrar excepciones ni ampliar la conclusión a casos no estudiados.', 'It makes convergence visible without erasing exceptions or extending conclusions to unstudied cases.'),
      question: t('¿Qué podemos sostener en común y con qué límites?', 'What can we jointly support, and within which limits?'),
      example: illustrative('Si entrevista, observación y registros coincidieran, formular: en los casos revisados, consultar el historial requirió varias búsquedas manuales. No afirmar una causa técnica ni una frecuencia poblacional.', 'If interview, observation, and records agreed, state: in the reviewed cases, consulting history required several manual searches. Do not assert a technical cause or population frequency.'),
      analogy: t('La zona donde coinciden varios mapas, conservando sus bordes.', 'The area where several maps agree, retaining their boundaries.'),
      related: ['w2f_triangulation', 'w2f_facts', 'w2f_clarify', 'w2f_candidate_requirements'],
      notConfuse: t('Compartido no significa aprobado por mayoría ni causado por el software. Si las fuentes discrepan, el hallazgo puede ser precisamente una diferencia por aclarar.', 'Shared does not mean approved by majority or caused by software. If sources disagree, the finding may be a difference requiring clarification.'),
      sources: ['w2f_src_closure', 'w2f_src_triangulation']
    },
    w2f_stakeholders: {
      id: 'w2f_stakeholders', label: t('ACTORES DE EDEN BAY / AREV', 'EDEN BAY / AREV STAKEHOLDERS'), layer: 'foundation',
      what: t('Actores del caso suministrado: Maria, administradora municipal; Martin, gerente del Departamento de Equipos; Phil, supervisor de mantenimiento; Alice, auxiliar administrativa de mantenimiento; Joe, mecánico.', 'Stakeholders in the supplied case: Maria, Town Manager; Martin, Equipment Department Manager; Phil, Maintenance Supervisor; Alice, Maintenance Clerk; Joe, Mechanic.'),
      why: t('Sus roles permiten investigar diferentes perspectivas del mismo sistema, desde decisiones municipales hasta registro y ejecución del mantenimiento.', 'Their roles allow investigation of different views of the same system, from municipal decisions to maintenance recording and execution.'),
      question: t('¿Qué necesita conocer cada actor y cómo se relaciona su trabajo con el de los demás?', 'What does each stakeholder need to know, and how does their work relate to others\' work?'),
      example: illustrative('Planear preguntas distintas para Maria, Martin, Phil, Alice y Joe, y contrastar sus respuestas cuando se obtengan.', 'Plan different questions for Maria, Martin, Phil, Alice, and Joe, and compare their answers once collected.'),
      analogy: t('Cinco posiciones desde las que se observa el mismo recorrido del trabajo.', 'Five positions from which to observe the same work journey.'),
      related: ['w2f_maria', 'w2f_martin', 'w2f_phil', 'w2f_alice', 'w2f_joe', 'w2f_who', 'w2f_validation'],
      notConfuse: t('Los nombres y cargos son datos del caso proporcionado. Las preguntas y perspectivas a investigar son propuestas, no testimonios ni respuestas oficiales.', 'Names and roles are facts from the supplied case. Questions and perspectives to investigate are proposals, not testimony or official answers.'),
      sources: ['w2f_src_closure']
    },
    w2f_maria: {
      id: 'w2f_maria', label: t('MARIA · ADMINISTRADORA MUNICIPAL', 'MARIA · TOWN MANAGER'), layer: 'foundation',
      what: t('Maria ocupa el rol Town Manager en el caso Eden Bay / AREV. Es una interlocutora para investigar necesidades de información en la gestión municipal.', 'Maria holds the Town Manager role in the Eden Bay / AREV case. She is a participant for investigating information needs in municipal management.'),
      why: t('Permite preguntar cómo la información de la flota debe apoyar decisiones municipales, sin suponer qué informes utiliza.', 'She can be asked how fleet information should support municipal decisions, without assuming which reports she uses.'),
      question: t('¿Qué decisiones municipales necesitan información sobre disponibilidad y mantenimiento de la flota?', 'Which municipal decisions need information about fleet availability and maintenance?'),
      example: illustrative('PREGUNTA DE EJEMPLO para Maria: ¿Qué información necesita recibir para evaluar la situación de la flota? No se inventa su respuesta.', 'EXAMPLE QUESTION for Maria: What information do you need to receive to assess the fleet\'s situation? Her answer is not invented.'),
      analogy: t('Una vista general que necesita apoyarse en detalles comprobables del terreno.', 'An overview that needs support from verifiable details on the ground.'),
      related: ['w2f_stakeholders', 'w2f_martin', 'w2f_interviews', 'w2f_validation'],
      notConfuse: t('El cargo no demuestra que Maria capture reparaciones ni apruebe cada una. Esas responsabilidades deben investigarse.', 'Her role does not establish that Maria enters repair records or approves each repair. Those responsibilities require investigation.'),
      sources: ['w2f_src_closure']
    },
    w2f_martin: {
      id: 'w2f_martin', label: t('MARTIN · GERENTE DEL DEPARTAMENTO DE EQUIPOS', 'MARTIN · EQUIPMENT DEPARTMENT MANAGER'), layer: 'foundation',
      what: t('Martin es Equipment Department Manager en el caso. Su rol orienta preguntas sobre las necesidades del departamento y la información de sus equipos.', 'Martin is the Equipment Department Manager in the case. His role guides questions about departmental needs and equipment information.'),
      why: t('Ayuda a investigar cómo se relacionan categorías de vehículos, recursos e información de mantenimiento a nivel del departamento.', 'He helps investigate how vehicle categories, resources, and maintenance information relate at departmental level.'),
      question: t('¿Qué información necesita el departamento para comparar necesidades de distintos tipos de vehículos?', 'What information does the department need to compare needs across vehicle types?'),
      example: illustrative('PREGUNTA DE EJEMPLO para Martin: ¿Qué diferencias entre categorías de la flota debemos considerar al revisar sus registros?', 'EXAMPLE QUESTION for Martin: Which differences between fleet categories should we consider when reviewing their records?'),
      analogy: t('Conectar la vista general con las necesidades de un conjunto de equipos.', 'Connect the overview with the needs of a collection of equipment.'),
      related: ['w2f_stakeholders', 'w2f_maria', 'w2f_phil', 'w2f_sampling_recommendation'],
      notConfuse: t('No se atribuyen a Martin decisiones, presupuestos ni reglas específicas que el material suministrado no documenta.', 'Martin is not assigned specific decisions, budgets, or rules not documented in the supplied material.'),
      sources: ['w2f_src_closure']
    },
    w2f_phil: {
      id: 'w2f_phil', label: t('PHIL · SUPERVISOR DE MANTENIMIENTO', 'PHIL · MAINTENANCE SUPERVISOR'), layer: 'foundation',
      what: t('Phil es Maintenance Supervisor en el caso. Es un interlocutor para investigar cómo se supervisa el trabajo de mantenimiento.', 'Phil is the Maintenance Supervisor in the case. He is a participant for investigating how maintenance work is supervised.'),
      why: t('Permite explorar seguimiento, secuencias y excepciones desde la supervisión, para contrastarlas con ejecución y registro.', 'He can help explore tracking, sequences, and exceptions from supervision, to compare them with execution and recording.'),
      question: t('¿Cómo conoce el estado de una reparación y qué ocurre cuando hay una excepción?', 'How do you know a repair\'s status, and what happens when there is an exception?'),
      example: illustrative('PREGUNTA DE EJEMPLO para Phil: ¿Qué información necesita para dar seguimiento a una reparación pendiente?', 'EXAMPLE QUESTION for Phil: What information do you need to follow up on a pending repair?'),
      analogy: t('Seguir el avance de varias tareas y los puntos donde se detienen.', 'Track progress across several tasks and the points where they stop.'),
      related: ['w2f_stakeholders', 'w2f_martin', 'w2f_alice', 'w2f_joe', 'w2f_how'],
      notConfuse: t('Supervisión no demuestra qué decisiones autoriza Phil ni quién introduce datos. Se investigan esas fronteras del rol.', 'Supervision does not establish which decisions Phil authorizes or who enters data. Those role boundaries require investigation.'),
      sources: ['w2f_src_closure']
    },
    w2f_alice: {
      id: 'w2f_alice', label: t('ALICE · AUXILIAR ADMINISTRATIVA DE MANTENIMIENTO', 'ALICE · MAINTENANCE CLERK'), layer: 'foundation',
      what: t('Alice ocupa el rol Maintenance Clerk en el caso. Su participación permite investigar el trabajo administrativo asociado al mantenimiento.', 'Alice holds the Maintenance Clerk role in the case. Her participation helps investigate administrative work associated with maintenance.'),
      why: t('Permite preguntar cómo llegan los datos, qué campos se utilizan y qué información falta, sin asumir una aplicación o un procedimiento concreto.', 'She can be asked how data arrives, which fields are used, and what information is missing, without assuming a particular application or procedure.'),
      question: t('¿Qué información recibe para registrar una reparación y qué hace cuando está incompleta?', 'What information do you receive to record a repair, and what do you do when it is incomplete?'),
      example: illustrative('PREGUNTA DE EJEMPLO para Alice: ¿Puede mostrar qué documentos o herramientas intervienen al registrar mantenimiento?', 'EXAMPLE QUESTION for Alice: Can you show which documents or tools are involved in recording maintenance?'),
      analogy: t('Examinar cómo se convierten los detalles del trabajo en una memoria consultable.', 'Examine how work details become a retrievable memory.'),
      related: ['w2f_stakeholders', 'w2f_documents', 'w2f_records', 'w2f_current_system_review', 'w2f_phil'],
      notConfuse: t('El rol no demuestra que Alice utilice software, una hoja de cálculo o papel. Son posibilidades por observar, no hechos del caso añadidos.', 'Her role does not establish that Alice uses software, a spreadsheet, or paper. Those are possibilities to observe, not added case facts.'),
      sources: ['w2f_src_closure']
    },
    w2f_joe: {
      id: 'w2f_joe', label: t('JOE · MECÁNICO', 'JOE · MECHANIC'), layer: 'foundation',
      what: t('Joe es Mechanic en el caso. Es un posible entrevistado para comprender la información necesaria antes de reparar un vehículo y las dificultades al consultar antecedentes.', 'Joe is the Mechanic in the case. He is a possible interviewee for understanding information needed before vehicle repairs and difficulties consulting prior work.'),
      why: t('Su perspectiva permite investigar el uso de información durante la ejecución del mantenimiento y contrastarlo con supervisión y registro.', 'His perspective helps investigate information use while performing maintenance and compare it with supervision and recording.'),
      question: t('¿Qué información necesita normalmente antes de comenzar una reparación de un vehículo?', 'What information do you normally need before beginning a vehicle repair?'),
      example: illustrative('PREGUNTAS DE EJEMPLO. Abiertas: ¿Qué información necesita normalmente antes de comenzar una reparación de un vehículo? ¿Qué dificultades encuentra al consultar el historial de mantenimiento de un vehículo? Cerradas: ¿Consulta el historial del vehículo antes de comenzar una reparación? Sí / No. ¿Registra actualmente la reparación en un sistema digital? Sí / No. Escalas: Del 1 al 5, ¿qué tan fácil es encontrar la información necesaria antes de iniciar una reparación? 1 muy difícil, 5 muy fácil. Del 1 al 5, ¿qué tan confiable considera la información disponible sobre reparaciones anteriores? 1 nada confiable, 5 muy confiable. Son preguntas, no respuestas oficiales.', 'EXAMPLE QUESTIONS. Open: What information do you normally need before beginning a vehicle repair? What difficulties do you encounter when consulting a vehicle\'s maintenance history? Closed: Do you consult the vehicle\'s history before beginning a repair? Yes / No. Do you currently record the repair in a digital system? Yes / No. Scales: From 1 to 5, how easy is it to find the information needed before beginning a repair? 1 very difficult, 5 very easy. From 1 to 5, how reliable do you consider the available information about previous repairs? 1 not at all reliable, 5 very reliable. These are questions, not official answers.'),
      analogy: t('Comprender qué necesita quien utiliza una herramienta durante el trabajo.', 'Understand what the person using a tool during work needs.'),
      related: ['w2f_interviews', 'w2f_open_questions', 'w2f_closed_questions', 'w2f_numeric_scale', 'w2f_phil', 'w2f_alice'],
      notConfuse: t('No se afirma que Joe haya contestado, sufrido una demora o utilizado un sistema digital. Las escalas registrarían percepciones, no tiempos medidos ni exactitud demostrada.', 'Joe is not claimed to have answered, experienced a delay, or used a digital system. Scales would record perceptions, not measured time or demonstrated accuracy.'),
      sources: ['w2f_src_closure']
    },
    w2f_organize: {
      id: 'w2f_organize', label: t('ORGANIZAR', 'ORGANIZE'), layer: 'foundation',
      what: t('Ordenar la evidencia por actividad, actor, fecha, fuente y tema, conservando por separado observaciones, declaraciones e interpretaciones.', 'Arrange evidence by activity, stakeholder, date, source, and topic, keeping observations, statements, and interpretations separate.'),
      why: t('Hace recuperable cada hallazgo y prepara la comparación sin perder su contexto.', 'It makes each finding retrievable and prepares comparison without losing context.'),
      question: t('¿Cómo encontraremos la fuente y el contexto de cada elemento?', 'How will we find each item\'s source and context?'),
      example: illustrative('Agrupar material sobre búsqueda de historial y conservar para cada elemento si procede de entrevista, observación o registro.', 'Group material about history lookup and preserve whether each item comes from an interview, observation, or record.'),
      analogy: t('Ordenar piezas de investigación sin despegar sus etiquetas.', 'Sort research pieces without removing their labels.'),
      related: ['w2f_facts', 'w2f_sources', 'w2f_compare', 'w2f_provenance'],
      notConfuse: t('Clasificar no verifica la verdad del contenido. Un tema común no demuestra que todas las experiencias sean iguales.', 'Classification does not verify content. A common theme does not establish that all experiences are the same.'),
      sources: ['w2f_src_closure']
    },
    w2f_compare: {
      id: 'w2f_compare', label: t('COMPARAR', 'COMPARE'), layer: 'foundation',
      what: t('Contrastar evidencia organizada para identificar coincidencias, diferencias, contradicciones y vacíos entre fuentes.', 'Compare organized evidence to identify agreements, differences, contradictions, and gaps across sources.'),
      why: t('Permite saber qué necesita explicación adicional antes de formular requisitos.', 'It shows what needs further explanation before requirements are formulated.'),
      question: t('¿Las diferencias se refieren al mismo trabajo, período y tipo de caso?', 'Do differences concern the same work, period, and case type?'),
      example: illustrative('Comparar una descripción de búsqueda con los pasos observados y los registros del mismo tipo de operación.', 'Compare a lookup description with observed steps and records for the same type of operation.'),
      analogy: t('Colocar varias versiones de un recorrido una al lado de otra.', 'Place several versions of a journey side by side.'),
      related: ['w2f_organize', 'w2f_sources', 'w2f_triangulation', 'w2f_clarify'],
      notConfuse: t('Comparar no es escoger la versión más repetida. Diferencias de contexto pueden explicar aparentes contradicciones.', 'Comparison is not choosing the most repeated version. Context differences may explain apparent contradictions.'),
      sources: ['w2f_src_closure']
    },
    w2f_clarify: {
      id: 'w2f_clarify', label: t('ACLARAR', 'CLARIFY'), layer: 'foundation',
      what: t('Volver a las fuentes o realizar preguntas y observaciones adicionales para resolver ambigüedades, contradicciones e información incompleta.', 'Return to sources or conduct additional questions and observations to resolve ambiguity, contradictions, and incomplete information.'),
      why: t('Evita que una suposición rellene silenciosamente un vacío de evidencia.', 'It prevents an assumption from silently filling an evidence gap.'),
      question: t('¿Qué necesitamos preguntar, observar o revisar para resolver esta incertidumbre?', 'What must we ask, observe, or review to resolve this uncertainty?'),
      example: illustrative('Ante una referencia hipotética a demoras, preguntar en qué actividad ocurren, con qué frecuencia y cómo podría medirse la espera.', 'Given a hypothetical reference to delays, ask which activity they occur in, how often, and how waiting could be measured.'),
      analogy: t('Completar un tramo borroso de un mapa regresando al lugar.', 'Clarify a blurred map section by returning to the location.'),
      related: ['w2f_compare', 'w2f_followup_questions', 'w2f_opinion', 'w2f_candidate_requirements'],
      notConfuse: t('Aclarar no es inducir una respuesta que confirme nuestra idea. Lo no resuelto debe seguir marcado como pendiente.', 'Clarifying is not leading someone toward an answer that confirms our idea. Unresolved items must remain marked as pending.'),
      sources: ['w2f_src_closure']
    },
    w2f_candidate_requirements: {
      id: 'w2f_candidate_requirements', label: t('REQUISITOS CANDIDATOS', 'REQUIREMENT CANDIDATES'), layer: 'foundation',
      what: t('Propuestas de lo que el sistema debería hacer o cumplir, derivadas de evidencia analizada y todavía pendientes de validación con usuarios y analista.', 'Proposals for what the system should do or satisfy, derived from analyzed evidence and still awaiting validation with users and the analyst.'),
      why: t('Hace explícita una necesidad discutible antes de tratarla como compromiso confirmado.', 'It makes a proposed need explicit before treating it as a confirmed commitment.'),
      question: t('¿Qué necesidad respalda este candidato y qué debemos confirmar antes de validarlo?', 'Which need supports this candidate, and what must we confirm before validating it?'),
      example: illustrative('Proponer consultar el historial por vehículo si la investigación respalda esa necesidad; anotar fuentes y dudas sobre usuarios, alcance y criterios.', 'Propose retrieving history by vehicle if research supports that need; record sources and uncertainties about users, scope, and criteria.'),
      analogy: t('Un borrador de encargo que aún necesita revisión con quien utilizará el resultado.', 'A draft brief that still needs review with those who will use the result.'),
      related: ['w2f_clarify', 'w2f_facts', 'w2f_candidate_finding', 'w2f_validation', 'w2f_requirements'],
      notConfuse: t('Un candidato extraído de un documento o propuesto por IA no es un requisito validado. Un hallazgo describe evidencia; un candidato propone una necesidad del sistema.', 'A candidate extracted from a document or proposed by AI is not a validated requirement. A finding describes evidence; a candidate proposes a system need.'),
      sources: ['w2f_src_closure']
    },
    w2f_validation: {
      id: 'w2f_validation', label: t('VALIDACIÓN USUARIO / ANALISTA', 'USER / ANALYST VALIDATION'), layer: 'foundation',
      what: t('Revisión conjunta del candidato, su evidencia, significado y condiciones de comprobación con usuarios y analista antes de declararlo validado.', 'Joint review of a candidate, its evidence, meaning, and conditions for checking it with users and the analyst before declaring it validated.'),
      why: t('Permite corregir interpretaciones, resolver desacuerdos y confirmar que el requisito atiende una necesidad real.', 'It allows interpretations to be corrected, disagreements resolved, and the requirement\'s fit to a real need confirmed.'),
      question: t('¿Entendemos lo mismo, la evidencia lo respalda y sabemos cómo comprobar su cumplimiento?', 'Do we mean the same thing, does evidence support it, and do we know how to check compliance?'),
      example: illustrative('Revisar con los actores pertinentes el candidato de consulta por vehículo; registrar lo aceptado, lo corregido y lo que sigue pendiente.', 'Review the history-by-vehicle candidate with relevant stakeholders; record what is accepted, corrected, and still unresolved.'),
      analogy: t('Revisar juntos un encargo antes de darlo por acordado.', 'Review a brief together before considering it agreed.'),
      related: ['w2f_candidate_requirements', 'w2f_stakeholders', 'w2f_facts', 'w2f_requirements', 'w2f_ai_validation'],
      notConfuse: t('La IA no representa el consentimiento del usuario ni el juicio del analista. Revisar un requisito no demuestra que el sistema ya lo implemente.', 'AI does not represent user consent or analyst judgment. Reviewing a requirement does not establish that the system already implements it.'),
      sources: ['w2f_src_closure']
    },
    w2f_documents: {
      id: 'w2f_documents', label: t('DOCUMENTOS: REGLAS Y CAMPOS', 'DOCUMENTS: RULES AND FIELDS'), layer: 'foundation',
      what: t('Procedimientos, formularios y otros artefactos que describen reglas, conceptos o campos previstos para el trabajo.', 'Procedures, forms, and other artifacts describing rules, concepts, or fields intended for work.'),
      why: t('Permiten preguntar qué información se exige y qué reglas documentadas deben contrastarse con la práctica.', 'They help identify required information and documented rules that must be compared with practice.'),
      question: t('¿Qué campo o regla describe este documento y está vigente?', 'Which field or rule does this document describe, and is it current?'),
      example: illustrative('Extraer de una plantilla de mantenimiento los campos previstos y conservar la página o sección para comprobar la lectura.', 'Extract intended fields from a maintenance template and preserve the page or section to check the reading.'),
      analogy: t('Leer el plano de una tarea y luego comprobar cómo se ejecuta.', 'Read a task\'s blueprint and then check how it is performed.'),
      related: ['w2f_documents_records', 'w2f_records', 'w2f_current_system_review', 'w2f_candidate_requirements', 'w2f_provenance'],
      notConfuse: t('Una regla escrita puede estar obsoleta; un campo extraído no demuestra uso efectivo ni aprobación de un requisito futuro.', 'A written rule may be obsolete; an extracted field does not establish actual use or approval of a future requirement.'),
      sources: ['w2f_src_course_summary', 'w2f_src_closure']
    },
    w2f_records: {
      id: 'w2f_records', label: t('REGISTROS: EVIDENCIA DE OPERACIONES', 'RECORDS: OPERATIONAL EVIDENCE'), layer: 'foundation',
      what: t('Entradas históricas que documentan casos del trabajo, como órdenes o reparaciones registradas. Se distinguen de la plantilla vacía que define sus campos.', 'Historical entries documenting work cases, such as recorded orders or repairs. They differ from the blank template defining their fields.'),
      why: t('Permiten revisar frecuencias, secuencias y diferencias por categoría, considerando cobertura, calidad y modo de selección.', 'They help examine frequencies, sequences, and differences by category, considering coverage, quality, and selection.'),
      question: t('¿Qué cubren estos registros y qué patrón puede comprobarse directamente en ellos?', 'What do these records cover, and which pattern can be checked directly in them?'),
      example: illustrative('Comparar registros de mantenimiento por tipo de vehículo sin inventar cifras, costos ni reparaciones que no estén documentados.', 'Compare maintenance records by vehicle type without inventing undocumented figures, costs, or repairs.'),
      analogy: t('Una bitácora permite estudiar recorridos, pero sus vacíos también importan.', 'A logbook allows journeys to be studied, but its gaps also matter.'),
      related: ['w2f_documents_records', 'w2f_sampling', 'w2f_triangulation', 'w2f_candidate_finding', 'w2f_alice'],
      notConfuse: t('PATRÓN ≠ CAUSA. Más reparaciones registradas no demuestran por sí solas peor mantenimiento: pueden intervenir uso, cobertura o calidad del registro.', 'PATTERN ≠ CAUSE. More recorded repairs do not by themselves establish worse maintenance: usage, coverage, or recording quality may matter.'),
      sources: ['w2f_src_closure']
    },
    w2f_sources: {
      id: 'w2f_sources', label: t('FUENTES PARA CONTRASTAR', 'SOURCES TO COMPARE'), layer: 'foundation',
      what: t('Los orígenes concretos de evidencia: entrevistas identificadas, respuestas de encuesta, notas de observación, documentos y registros del sistema actual.', 'Specific origins of evidence: identified interviews, survey responses, observation notes, documents, and current-system records.'),
      why: t('Permiten comprobar si dos afirmaciones son independientes, comparables y rastreables.', 'They help check whether two claims are independent, comparable, and traceable.'),
      question: t('¿De qué fuente viene cada afirmación y podemos volver a su contexto?', 'Which source does each claim come from, and can we return to its context?'),
      example: illustrative('Vincular una afirmación sobre búsqueda de historial con su entrevista, nota de observación y registros, si esas fuentes llegan a recopilarse.', 'Link a claim about history lookup to its interview, observation note, and records if those sources are collected.'),
      analogy: t('Una cadena de referencias que permite regresar al origen de cada pieza.', 'A chain of references that leads back to each piece\'s origin.'),
      related: ['w2f_interviews', 'w2f_surveys', 'w2f_documents', 'w2f_records', 'w2f_observation', 'w2f_compare', 'w2f_provenance'],
      notConfuse: t('La bibliografía explica métodos; no prueba hechos sobre Eden Bay. Un resumen y su entrevista original tampoco son dos fuentes independientes.', 'Bibliography explains methods; it does not prove facts about Eden Bay. A summary and its original interview are not two independent sources.'),
      sources: ['w2f_src_closure', 'w2f_src_triangulation']
    },
    w2f_followup_questions: {
      id: 'w2f_followup_questions', label: t('PREGUNTAS DE SEGUIMIENTO', 'FOLLOW-UP QUESTIONS'), layer: 'foundation',
      what: t('Preguntas adicionales dirigidas a información incompleta, ambigua o contradictoria encontrada durante la investigación.', 'Additional questions addressing incomplete, ambiguous, or contradictory information encountered during research.'),
      why: t('Convierten una incertidumbre específica en una próxima acción de investigación.', 'They turn a specific uncertainty into the next research action.'),
      question: t('¿Qué pregunta aclararía este vacío sin sugerir la respuesta?', 'Which question would clarify this gap without suggesting the answer?'),
      example: illustrative('Ante la frase hipotética "El sistema tarda demasiado": ¿En qué actividad específica ocurre la espera? ¿Con qué frecuencia? ¿Cuánto tarda aproximadamente? Esta última respuesta sería una estimación declarada, pendiente de medición.', 'Given the hypothetical statement "The system takes too long": In which specific activity does the waiting occur? How often? Approximately how long does it take? The last answer would be a reported estimate, pending measurement.'),
      analogy: t('Orientar la siguiente linterna hacia la zona que sigue a oscuras.', 'Point the next flashlight toward the area still in darkness.'),
      related: ['w2f_interviews', 'w2f_open_questions', 'w2f_clarify', 'w2f_opinion', 'w2f_joe'],
      notConfuse: t('Una pregunta propuesta por IA no es una entrevista realizada. El analista decide pertinencia, lenguaje y momento.', 'An AI-proposed question is not a completed interview. The analyst decides relevance, wording, and timing.'),
      sources: ['w2f_src_closure', 'w2f_src_interviews']
    },
    w2f_ai_assistant: {
      id: 'w2f_ai_assistant', label: t('ASISTENTE DE INVESTIGACIÓN', 'FACT-FINDING ASSISTANT'), layer: 'ai',
      what: t('Extensión AI-FIRST: apoyo para transcribir y sintetizar entrevistas, agrupar y analizar encuestas, extraer documentos, detectar patrones en registros, organizar observaciones, comparar fuentes y proponer preguntas de seguimiento.', 'AI-FIRST extension: support for transcribing and summarizing interviews, grouping and analyzing surveys, extracting from documents, detecting record patterns, organizing observations, comparing sources, and proposing follow-up questions.'),
      why: t('Ayuda a examinar más material sin eliminar el vínculo entre fuente, interpretación, hallazgo candidato y validación humana.', 'It helps examine more material without losing the link between source, interpretation, candidate finding, and human validation.'),
      question: t('¿Cómo puede la IA ayudarnos a encontrar patrones en la evidencia sin confundir interpretación con hecho?', 'How can AI help us find patterns in evidence without confusing interpretation with fact?'),
      example: illustrative('Usar únicamente material realmente recopilado para preparar una síntesis de la búsqueda de historial, con referencias a sus fuentes y dudas explícitas. No generar supuestas entrevistas con Joe.', 'Use only actually collected material to prepare a history-lookup summary with source references and explicit uncertainties. Do not generate supposed interviews with Joe.'),
      analogy: t('Un ayudante que ordena indicios sobre la mesa para que el investigador los compruebe.', 'An assistant who arranges clues on a table for the researcher to check.'),
      related: ['w2f_interviews', 'w2f_surveys', 'w2f_documents', 'w2f_records', 'w2f_observation', 'w2f_sources', 'w2f_followup_questions', 'w2f_provenance'],
      notConfuse: t('LA IA PUEDE AYUDAR A ENCONTRAR PATRONES. NO CONVIERTE AUTOMÁTICAMENTE UNA INTERPRETACIÓN EN UN HECHO.', 'AI CAN HELP FIND PATTERNS. IT DOES NOT AUTOMATICALLY TURN AN INTERPRETATION INTO A FACT.'),
      sources: ['w2f_src_closure', 'w2f_src_nist_genai']
    },
    w2f_ai_source: {
      id: 'w2f_ai_source', label: t('FUENTE PARA PROCESAMIENTO IA', 'SOURCE FOR AI PROCESSING'), layer: 'ai',
      what: t('Material de origen identificable entregado a la IA, con su versión y localización: por ejemplo un fragmento de entrevista autorizado o registros seleccionados.', 'Identifiable source material supplied to AI with its version and location, such as an authorized interview excerpt or selected records.'),
      why: t('Fija qué evidencia puede respaldar el resultado y permite revisar omisiones o transformaciones.', 'It establishes which evidence can support the output and enables review of omissions or transformations.'),
      question: t('¿Cuál es el material exacto que la IA procesó?', 'What exact material did AI process?'),
      example: illustrative('Identificar el archivo y las filas de una muestra de mantenimiento antes de solicitar una agrupación de patrones.', 'Identify the file and rows of a maintenance sample before requesting pattern grouping.'),
      analogy: t('Conservar el original junto a una copia de trabajo.', 'Keep the original alongside a working copy.'),
      related: ['w2f_sources', 'w2f_ai_assistant', 'w2f_provenance', 'w2f_records'],
      notConfuse: t('Una referencia inventada no es procedencia. Un ejemplo pedagógico y una respuesta generada no son registros reales del caso.', 'An invented reference is not provenance. A teaching example and a generated answer are not real case records.'),
      sources: ['w2f_src_closure', 'w2f_src_nist_genai']
    },
    w2f_candidate_finding: {
      id: 'w2f_candidate_finding', label: t('HALLAZGO CANDIDATO', 'CANDIDATE FINDING'), layer: 'ai',
      what: t('Interpretación, tema, patrón o anomalía propuesto a partir del material procesado, todavía pendiente de comprobar contra la fuente.', 'An interpretation, theme, pattern, or anomaly proposed from processed material, still awaiting verification against its source.'),
      why: t('Mantiene visible la incertidumbre antes de usar una salida de IA como evidencia de una necesidad.', 'It keeps uncertainty visible before using AI output as evidence of a need.'),
      question: t('¿Qué fragmentos o registros respaldan esta interpretación y qué podría refutarla?', 'Which excerpts or records support this interpretation, and what could refute it?'),
      example: illustrative('La IA podría proponer el tema búsquedas manuales repetidas si los datos lo respaldaran; el analista revisaría los casos antes de aceptarlo.', 'AI could propose the theme repeated manual searches if data supported it; the analyst would review cases before accepting it.'),
      analogy: t('Una nota con una hipótesis junto a las pistas que podrían sostenerla.', 'A hypothesis note beside clues that might support it.'),
      related: ['w2f_ai_assistant', 'w2f_ai_validation', 'w2f_provenance', 'w2f_candidate_requirements', 'w2f_records'],
      notConfuse: t('HALLAZGO CANDIDATO ≠ HECHO VERIFICADO. Un patrón no prueba causa; un hallazgo tampoco es automáticamente un requisito.', 'CANDIDATE FINDING ≠ VERIFIED FACT. A pattern does not prove cause; a finding is not automatically a requirement either.'),
      sources: ['w2f_src_closure', 'w2f_src_nist_genai']
    },
    w2f_ai_validation: {
      id: 'w2f_ai_validation', label: t('VALIDACIÓN HUMANA DEL HALLAZGO', 'HUMAN VALIDATION OF THE FINDING'), layer: 'ai',
      what: t('El analista revisa el resultado de IA frente a fuentes, contexto y evidencia, y consulta a usuarios cuando necesita aclaraciones. Registra aceptación, corrección o rechazo.', 'The analyst reviews AI output against sources, context, and evidence, consulting users when clarification is needed. Acceptance, correction, or rejection is recorded.'),
      why: t('Impide que una síntesis convincente o un patrón aparente se convierta por inercia en un hecho.', 'It prevents a convincing summary or apparent pattern from becoming a fact by default.'),
      question: t('¿La fuente respalda exactamente esta conclusión y sus límites?', 'Does the source support this exact conclusion and its limits?'),
      example: illustrative('Comprobar si los registros realmente muestran el patrón sugerido y si el resumen conserva excepciones antes de incorporar el hallazgo al análisis.', 'Check whether records actually show the suggested pattern and whether the summary retains exceptions before incorporating the finding into analysis.'),
      analogy: t('Volver a las piezas originales antes de aceptar la reconstrucción.', 'Return to the original pieces before accepting the reconstruction.'),
      related: ['w2f_candidate_finding', 'w2f_ai_source', 'w2f_provenance', 'w2f_facts', 'w2f_validation'],
      notConfuse: t('Validar un hallazgo no valida todavía un requisito. Preguntar otra vez al mismo modelo no sustituye el contraste humano con la fuente.', 'Validating a finding does not yet validate a requirement. Asking the same model again does not replace human comparison with the source.'),
      sources: ['w2f_src_closure', 'w2f_src_nist_genai']
    },
    w2f_provenance: {
      id: 'w2f_provenance', label: t('PROCEDENCIA Y TRAZABILIDAD · EXTENSIÓN AI-FIRST', 'PROVENANCE AND TRACEABILITY · AI-FIRST EXTENSION'), layer: 'ai',
      what: t('Extensión AI-FIRST: conservar el recorrido FUENTE → PROCESAMIENTO IA → HALLAZGO CANDIDATO → VALIDACIÓN. Registrar origen, fragmento o filas, transformación y revisión humana.', 'AI-FIRST extension: preserve the path SOURCE → AI PROCESSING → CANDIDATE FINDING → VALIDATION. Record origin, excerpt or rows, transformation, and human review.'),
      why: t('TODO HALLAZGO IMPORTANTE DEBE PODER RASTREARSE HASTA SU FUENTE.', 'IMPORTANT FINDINGS SHOULD REMAIN TRACEABLE TO THEIR SOURCE.'),
      question: t('¿Podemos reconstruir de dónde salió este hallazgo y cómo fue revisado?', 'Can we reconstruct where this finding came from and how it was reviewed?'),
      example: illustrative('Vincular una síntesis con el fragmento original y anotar qué interpretación se corrigió tras contrastarla; conservar la decisión de quien revisó.', 'Link a summary to the original excerpt and record which interpretation was corrected after comparison; preserve the reviewer\'s decision.'),
      analogy: t('El comprobante de origen y las anotaciones de cada transformación de una pieza.', 'The origin receipt and annotations for each transformation of a piece.'),
      related: ['w2f_ai_source', 'w2f_ai_assistant', 'w2f_candidate_finding', 'w2f_ai_validation', 'w2f_sources'],
      notConfuse: t('Es una extensión AI-FIRST, no un encabezado canónico atribuido al curso. Trazabilidad permite revisar una afirmación; no garantiza que sea verdadera.', 'This is an AI-FIRST extension, not a canonical heading attributed to the course. Traceability enables a claim to be reviewed; it does not guarantee truth.'),
      sources: ['w2f_src_closure', 'w2f_src_nist_genai']
    }
  });

  // Every concept has four specific AI drawer fields. The supplied continuation
  // defines these uses; NIST corroborates risks, provenance and human review.
  const aiNotes = {
    w2f_reality: aiDetails(
      t('Conecta evidencia del trabajo real con el asistente de investigación.', 'Connects real-work evidence to the fact-finding assistant.'),
      t('Ordena material recibido e identifica lagunas entre actividades y fuentes.', 'Organizes supplied material and identifies gaps across activities and sources.'),
      t('Facilita localizar qué falta investigar antes de redactar requisitos.', 'Helps locate what remains to be researched before drafting requirements.'),
      t('Comprobar cada afirmación en fuentes reales; no simular evidencia de Eden Bay.', 'Check each claim in real sources; do not simulate Eden Bay evidence.')
    ),
    w2f_interviews: aiDetails(
      t('IA → ENTREVISTAS: TRANSCRIBIR / SINTETIZAR.', 'AI → INTERVIEWS: TRANSCRIBE / SUMMARIZE.'),
      t('Transcribe material autorizado, organiza declaraciones y localiza fragmentos y temas recurrentes.', 'Transcribes authorized material, organizes statements, and locates excerpts and recurring themes.'),
      t('Acelera la revisión de entrevistas extensas sin sustituir la conversación.', 'Speeds up review of long interviews without replacing conversation.'),
      t('Revisar transcripción, atribución y excepciones contra el original: RESUMEN ≠ CONTEXTO COMPLETO.', 'Check transcription, attribution, and exceptions against the original: SUMMARY ≠ FULL CONTEXT.')
    ),
    w2f_open_questions: aiDetails(
      t('Conecta respuestas abiertas con preguntas de seguimiento.', 'Connects open answers with follow-up questions.'),
      t('Propone preguntas neutrales sobre dificultades y detalles todavía ausentes.', 'Suggests neutral questions about difficulties and still-missing details.'),
      t('Amplía posibles líneas de entrevista para que el analista seleccione.', 'Expands possible interview directions for the analyst to select.'),
      t('Eliminar presuposiciones y no presentar preguntas a Joe como respuestas obtenidas.', 'Remove presuppositions and never present questions for Joe as collected answers.')
    ),
    w2f_closed_questions: aiDetails(
      t('Conecta decisiones de cuestionario con respuestas limitadas y comparables.', 'Connects questionnaire decisions with limited, comparable answers.'),
      t('Propone opciones y detecta preguntas que mezclan más de una acción.', 'Suggests options and flags questions combining more than one action.'),
      t('Facilita revisar consistencia entre versiones del cuestionario.', 'Helps review consistency across questionnaire versions.'),
      t('Comprobar pertinencia de sí/no y conservar respuestas como declaraciones, no conductas probadas.', 'Check whether yes/no fits and retain answers as statements, not proven behavior.')
    ),
    w2f_numeric_scale: aiDetails(
      t('Conecta valoraciones de facilidad o confianza con análisis de encuestas.', 'Connects ease or confidence ratings with survey analysis.'),
      t('Agrupa respuestas por puntuación conservando significado y denominador.', 'Groups answers by rating while retaining meaning and denominator.'),
      t('Hace visibles diferencias de percepción entre participantes o roles.', 'Makes differences in perception across participants or roles visible.'),
      t('Comprobar conteos y anclajes; no convertir facilidad percibida en minutos ni confianza en exactitud.', 'Check counts and anchors; do not convert perceived ease to minutes or confidence to accuracy.')
    ),
    w2f_surveys: aiDetails(
      t('IA → ENCUESTAS: AGRUPAR / ANALIZAR.', 'AI → SURVEYS: GROUP / ANALYZE.'),
      t('Agrupa respuestas abiertas, propone categorías e identifica temas y patrones.', 'Groups open responses, proposes categories, and identifies themes and patterns.'),
      t('Permite revisar conjuntos de respuestas conservando categorías editables.', 'Enables response sets to be reviewed while keeping categories editable.'),
      t('Revisar respuestas originales, categorías, conteos y ausencias; una categoría generada es interpretación.', 'Review original answers, categories, counts, and missingness; a generated category is interpretation.')
    ),
    w2f_observation: aiDetails(
      t('IA → OBSERVACIONES: ORGANIZAR.', 'AI → OBSERVATIONS: ORGANIZE.'),
      t('Ordena notas por pasos, momentos, actores y herramientas mencionadas.', 'Orders notes by steps, timing, stakeholders, and mentioned tools.'),
      t('Facilita comparar secuencias observadas con descripciones de entrevistas.', 'Helps compare observed sequences with interview descriptions.'),
      t('Separar acciones observadas de inferencias; la IA no vio lo que las notas no registran.', 'Separate observed actions from inferences; AI did not see what the notes do not record.')
    ),
    w2f_focus_groups: aiDetails(
      t('Conecta la discusión grupal con síntesis que preservan voces distintas.', 'Connects group discussion to summaries preserving distinct voices.'),
      t('Organiza temas, acuerdos, discrepancias y fragmentos por participante cuando es identificable.', 'Organizes themes, agreements, disagreements, and excerpts by identifiable participant.'),
      t('Ayuda a revisar interacción sin reducirla a una sola respuesta grupal.', 'Helps review interaction without reducing it to a single group answer.'),
      t('Comprobar atribución, voces dominantes y desacuerdos; repetición no equivale a consenso.', 'Check attribution, dominant voices, and disagreements; repetition is not consensus.')
    ),
    w2f_current_system_review: aiDetails(
      t('Conecta artefactos del sistema actual con extracción de reglas y campos.', 'Connects current-system artifacts to rule and field extraction.'),
      t('Compara formularios, documentación y notas de herramientas o soluciones manuales.', 'Compares forms, documentation, and notes about tools or manual workarounds.'),
      t('Ayuda a localizar diferencias entre reglas escritas y práctica documentada.', 'Helps locate differences between written rules and documented practice.'),
      t('Confirmar vigencia y uso; un artefacto no demuestra que describa todo el sistema.', 'Confirm currency and use; an artifact does not establish that it describes the whole system.')
    ),
    w2f_documents_records: aiDetails(
      t('Conecta documentos y registros a dos usos distintos del asistente.', 'Connects documents and records to two distinct assistant uses.'),
      t('Extrae reglas de documentos y busca patrones en registros completados.', 'Extracts document rules and looks for patterns in completed records.'),
      t('Permite comparar lo previsto en formularios con lo registrado en casos.', 'Helps compare what forms intend with what cases record.'),
      t('Mantener documento, versión y filas; extracción no prueba cumplimiento ni causalidad.', 'Retain document, version, and rows; extraction proves neither compliance nor causality.')
    ),
    w2f_business_process_mapping: aiDetails(
      t('Conecta evidencia organizada con la aplicación del diagrama 03 de Semana 1.', 'Connects organized evidence to applying Week 1 diagram 03.'),
      t('Propone ubicar actividades, decisiones y actores mencionados en las fuentes.', 'Suggests placing activities, decisions, and stakeholders mentioned in sources.'),
      t('Ayuda a detectar pasos sin evidencia en el mapa del trabajo actual.', 'Helps detect steps without evidence in the current-work map.'),
      t('Revisar cada enlace con fuentes y usuarios; no completar pasos por plausibilidad.', 'Check each connection with sources and users; do not fill steps based on plausibility.')
    ),
    w2f_sampling: aiDetails(
      t('Conecta el plan de selección con cobertura de personas y registros.', 'Connects the selection plan to coverage of people and records.'),
      t('Ayuda a describir población, unidad, lista y alternativas de selección.', 'Helps describe population, unit, frame, and selection alternatives.'),
      t('Hace comparables las decisiones del muestreo antes del análisis.', 'Makes sampling decisions comparable before analysis.'),
      t('El analista define el diseño; una lista sugerida por un modelo no garantiza azar ni cobertura.', 'The analyst defines the design; a model-suggested list guarantees neither randomness nor coverage.')
    ),
    w2f_random_sampling: aiDetails(
      t('Conecta el sorteo de registros con una selección documentable.', 'Connects random record selection with a documentable procedure.'),
      t('Ayuda a preparar identificadores y describir el procedimiento de sorteo.', 'Helps prepare identifiers and describe the random-draw procedure.'),
      t('Facilita documentar cómo se formó la muestra sin elegir por apariencia.', 'Helps document sample formation without choosing by appearance.'),
      t('Usar un procedimiento aleatorio adecuado; números inventados por IA no prueban aleatoriedad.', 'Use an appropriate random procedure; AI-invented numbers do not establish randomness.')
    ),
    w2f_systematic_sampling: aiDetails(
      t('Conecta orden de registros, inicio aleatorio e intervalo de selección.', 'Connects record order, random start, and selection interval.'),
      t('Ayuda a describir la secuencia y señalar periodicidades que conviene investigar.', 'Helps describe the sequence and flag periodicity worth investigating.'),
      t('Hace visible qué posiciones entrarían en la muestra.', 'Makes visible which positions would enter the sample.'),
      t('Comprobar inicio, intervalo y orden; ausencia de alerta no descarta sesgo periódico.', 'Check start, interval, and order; no alert does not rule out periodic bias.')
    ),
    w2f_who: aiDetails(
      t('Conecta la pregunta quién con actores y fuentes identificadas.', 'Connects who to identified stakeholders and sources.'),
      t('Extrae nombres y roles explícitos y marca responsables no documentados.', 'Extracts explicit names and roles and flags undocumented owners.'),
      t('Ayuda a preparar preguntas sobre traspasos de responsabilidad.', 'Helps prepare questions about responsibility handoffs.'),
      t('No deducir permisos de cargos; confirmar quién realiza y autoriza cada acción.', 'Do not infer permissions from titles; confirm who performs and authorizes each action.')
    ),
    w2f_what: aiDetails(
      t('Conecta qué con actividades, campos y resultados descritos.', 'Connects what to described activities, fields, and outputs.'),
      t('Agrupa menciones de datos usados y tareas realizadas.', 'Groups mentions of data used and tasks performed.'),
      t('Facilita identificar términos que distintas personas usan de forma diferente.', 'Helps identify terms used differently by different people.'),
      t('Contrastar cada campo o actividad extraídos con su fuente concreta.', 'Compare each extracted field or activity with its specific source.')
    ),
    w2f_when: aiDetails(
      t('Conecta cuándo con fechas, secuencias, frecuencias y esperas.', 'Connects when to dates, sequences, frequencies, and waits.'),
      t('Organiza marcas temporales y distingue fechas de evento y registro.', 'Organizes timestamps and distinguishes event dates from recording dates.'),
      t('Ayuda a localizar incertidumbres temporales para preguntas de seguimiento.', 'Helps locate timing uncertainties for follow-up questions.'),
      t('Comprobar unidades y contexto; una estimación verbal no es una duración medida.', 'Check units and context; a verbal estimate is not a measured duration.')
    ),
    w2f_where: aiDetails(
      t('Conecta dónde con ubicaciones físicas, archivos, herramientas y canales.', 'Connects where to physical locations, files, tools, and channels.'),
      t('Ordena lugares de captura, almacenamiento y consulta mencionados.', 'Organizes mentioned locations for capture, storage, and retrieval.'),
      t('Ayuda a detectar transferencias de información que requieren aclaración.', 'Helps detect information transfers requiring clarification.'),
      t('Confirmar ubicación y acceso; mencionar una aplicación no demuestra dónde reside el dato.', 'Confirm location and access; mentioning an application does not establish where data resides.')
    ),
    w2f_how: aiDetails(
      t('Conecta cómo con secuencias y excepciones del trabajo actual.', 'Connects how to current-work sequences and exceptions.'),
      t('Organiza pasos descritos u observados con referencia a sus fuentes.', 'Organizes described or observed steps with source references.'),
      t('Permite comparar procedimientos sin perder las soluciones manuales descritas.', 'Helps compare procedures without losing described manual workarounds.'),
      t('No insertar pasos faltantes; confirmar las conexiones con observación y usuarios.', 'Do not insert missing steps; confirm connections with observation and users.')
    ),
    w2f_why: aiDetails(
      t('Conecta por qué con propósitos declarados y reglas documentadas.', 'Connects why to stated purposes and documented rules.'),
      t('Distingue razones expresadas de hipótesis que necesitan investigación.', 'Distinguishes expressed reasons from hypotheses needing investigation.'),
      t('Ayuda a preguntar por necesidades detrás de soluciones solicitadas.', 'Helps ask about needs behind requested solutions.'),
      t('Una explicación generada no prueba intención ni causa; volver a quien aporta la razón.', 'A generated explanation proves neither intent nor cause; return to the reason\'s source.')
    ),
    w2f_facts: aiDetails(
      t('Conecta hallazgos con evidencia localizable y límites explícitos.', 'Connects findings to locatable evidence and explicit limits.'),
      t('Propone ordenar afirmaciones según respaldo y dudas pendientes.', 'Suggests organizing claims by support and unresolved questions.'),
      t('Facilita revisar qué puede sostenerse antes de derivar candidatos.', 'Helps review what can be supported before deriving candidates.'),
      t('La clasificación de IA no verifica un hecho: revisar evidencia, contexto y alcance.', 'AI classification does not verify a fact: review evidence, context, and scope.')
    ),
    w2f_requirements: aiDetails(
      t('Conecta requisitos validados con su evidencia y decisión humana.', 'Connects validated requirements to evidence and a human decision.'),
      t('Ayuda a conservar trazas y señalar cambios posteriores que requieren revisión.', 'Helps retain traceability and flag later changes requiring review.'),
      t('Facilita consultar qué se validó y con qué condiciones.', 'Helps retrieve what was validated and under which conditions.'),
      t('No marcar validado sin decisión documentada de usuarios y analista.', 'Do not mark validated without a documented user and analyst decision.')
    ),
    w2f_stratified_sampling: aiDetails(
      t('Conecta categorías de vehículos con cobertura de la muestra.', 'Connects vehicle categories to sample coverage.'),
      t('Ayuda a clasificar registros por tipo y mostrar categorías sin representación.', 'Helps classify records by type and show unrepresented categories.'),
      t('Facilita comparar perfiles sin ocultar grupos pequeños.', 'Helps compare profiles without hiding small groups.'),
      t('Verificar clasificación, selección dentro de cada estrato y tratamiento de tamaños distintos.', 'Verify classification, selection within each stratum, and treatment of differing sizes.')
    ),
    w2f_cluster_sampling: aiDetails(
      t('Conecta grupos de registros con un diseño por conglomerados.', 'Connects record groups to a cluster design.'),
      t('Ayuda a describir agrupaciones existentes y cobertura de grupos seleccionados.', 'Helps describe existing groupings and selected-group coverage.'),
      t('Permite valorar qué casos quedarían concentrados en la revisión.', 'Helps assess which cases would be concentrated in the review.'),
      t('Comprobar que los grupos existen y fueron seleccionados por el procedimiento definido.', 'Check that groups exist and were selected using the defined procedure.')
    ),
    w2f_probability_sampling: aiDetails(
      t('Conecta el diseño declarado con probabilidades de inclusión.', 'Connects the stated design to inclusion probabilities.'),
      t('Ayuda a explicar supuestos de selección y datos faltantes del marco.', 'Helps explain selection assumptions and missing frame information.'),
      t('Hace visibles límites metodológicos antes de generalizar resultados.', 'Makes methodological limits visible before generalizing results.'),
      t('Revisar el procedimiento real, no aceptar la etiqueta probabilístico por recomendación de IA.', 'Review the actual procedure; do not accept the probability label based on an AI recommendation.')
    ),
    w2f_nonprobability_sampling: aiDetails(
      t('Conecta selección por experiencia con alcance de las conclusiones.', 'Connects experience-based selection to the scope of conclusions.'),
      t('Ayuda a justificar por qué entrevistar roles concretos como Joe o Alice.', 'Helps explain why specific roles such as Joe or Alice should be interviewed.'),
      t('Clarifica la diferencia entre profundidad cualitativa y estimación poblacional.', 'Clarifies the difference between qualitative depth and population estimation.'),
      t('No asignar representatividad estadística ni probabilidades inventadas a participantes elegidos por criterio.', 'Do not assign statistical representativeness or invented probabilities to purposively selected participants.')
    ),
    w2f_sampling_recommendation: aiDetails(
      t('Conecta la flota descrita con una recomendación analítica revisable.', 'Connects the described fleet to a reviewable analytical recommendation.'),
      t('Compara ventajas y límites de estratificar por tipo de vehículo.', 'Compares advantages and limitations of stratifying by vehicle type.'),
      t('Ayuda a explicar por qué categorías pequeñas merecen atención explícita.', 'Helps explain why small categories deserve explicit attention.'),
      t('Confirmar objetivo y registros disponibles; la IA no convierte una recomendación en regla del curso.', 'Confirm the objective and available records; AI does not turn a recommendation into a course rule.')
    ),
    w2f_opinion: aiDetails(
      t('Conecta percepciones con preguntas que buscan evidencia observable.', 'Connects perceptions with questions seeking observable evidence.'),
      t('Marca valoraciones como lento o confiable y propone cómo aclararlas.', 'Flags judgments such as slow or reliable and proposes how to clarify them.'),
      t('Permite conservar la experiencia sin mezclarla con mediciones.', 'Preserves experience without mixing it with measurements.'),
      t('No reformular una queja como estadística; conservar quién la expresó y su contexto real.', 'Do not rewrite a complaint as a statistic; retain its actual speaker and context.')
    ),
    w2f_triangulation: aiDetails(
      t('Conecta entrevista, observación y registros sobre una misma situación.', 'Connects interview, observation, and records about the same situation.'),
      t('Prepara comparaciones con apoyos, contradicciones y fuentes ausentes.', 'Prepares comparisons showing support, contradictions, and missing sources.'),
      t('Facilita investigar diferencias sin forzar un relato único.', 'Helps investigate differences without forcing a single narrative.'),
      t('Verificar independencia y contexto; tres textos derivados de uno no son tres confirmaciones.', 'Verify independence and context; three texts derived from one are not three confirmations.')
    ),
    w2f_shared_finding: aiDetails(
      t('Conecta evidencia convergente con una conclusión delimitada.', 'Connects converging evidence to a bounded conclusion.'),
      t('Propone una redacción que explicita apoyos y excepciones.', 'Proposes wording that makes support and exceptions explicit.'),
      t('Ayuda a discutir exactamente qué sostienen las distintas fuentes.', 'Helps discuss exactly what the different sources support.'),
      t('Comprobar cada apoyo y conservar desacuerdos; coincidencia no demuestra causa.', 'Check each supporting item and preserve disagreements; agreement does not prove cause.')
    ),
    w2f_stakeholders: aiDetails(
      t('Conecta los cinco roles suministrados con preguntas de investigación.', 'Connects the five supplied roles to research questions.'),
      t('Organiza temas por Maria, Martin, Phil, Alice y Joe.', 'Organizes topics by Maria, Martin, Phil, Alice, and Joe.'),
      t('Ayuda a detectar perspectivas todavía no consultadas.', 'Helps identify perspectives not yet consulted.'),
      t('Mantener nombres y cargos del caso; no fabricar entrevistas ni responsabilidades.', 'Retain case names and titles; do not fabricate interviews or responsibilities.')
    ),
    w2f_maria: aiDetails(
      t('Conecta el rol municipal de Maria con necesidades de información por investigar.', 'Connects Maria\'s municipal role to information needs to investigate.'),
      t('Prepara preguntas sobre decisiones municipales y síntesis de declaraciones reales.', 'Prepares questions about municipal decisions and summaries of actual statements.'),
      t('Facilita relacionar una necesidad general con evidencia operativa disponible.', 'Helps connect a general need to available operational evidence.'),
      t('No atribuir a Maria prioridades, aprobaciones ni respuestas que no haya expresado.', 'Do not attribute unexpressed priorities, approvals, or answers to Maria.')
    ),
    w2f_martin: aiDetails(
      t('Conecta el rol de Martin con información del Departamento de Equipos.', 'Connects Martin\'s role to Equipment Department information.'),
      t('Prepara comparaciones de temas sobre categorías de flota y necesidades del departamento.', 'Prepares topic comparisons about fleet categories and departmental needs.'),
      t('Ayuda a formular preguntas concretas sobre diferencias entre vehículos.', 'Helps formulate specific questions about differences between vehicles.'),
      t('No inventar presupuestos, reglas de compra o decisiones departamentales.', 'Do not invent budgets, purchasing rules, or departmental decisions.')
    ),
    w2f_phil: aiDetails(
      t('Conecta supervisión de mantenimiento con secuencias y excepciones documentadas.', 'Connects maintenance supervision to documented sequences and exceptions.'),
      t('Organiza preguntas y declaraciones sobre seguimiento del trabajo.', 'Organizes questions and statements about tracking work.'),
      t('Facilita contrastar la perspectiva de supervisión con ejecución y registro.', 'Helps compare the supervision perspective with execution and recording.'),
      t('Confirmar con Phil las responsabilidades descritas; no deducir autorizaciones del cargo.', 'Confirm described responsibilities with Phil; do not infer authorizations from his title.')
    ),
    w2f_alice: aiDetails(
      t('Conecta el rol administrativo de Alice con documentos y campos utilizados.', 'Connects Alice\'s administrative role to documents and fields used.'),
      t('Ayuda a organizar ejemplos reales de captura, datos incompletos y consultas.', 'Helps organize actual examples of data entry, incomplete data, and lookups.'),
      t('Facilita localizar preguntas sobre origen y calidad de los registros.', 'Helps locate questions about record origin and quality.'),
      t('No suponer herramientas o errores de Alice; comprobarlos en material autorizado.', 'Do not assume Alice\'s tools or errors; check them in authorized material.')
    ),
    w2f_joe: aiDetails(
      t('Conecta la entrevista a Joe con preguntas abiertas, cerradas y escalas.', 'Connects Joe\'s interview to open questions, closed questions, and scales.'),
      t('Organiza las seis preguntas de ejemplo y propone seguimiento si hubiera respuestas reales.', 'Organizes the six example questions and proposes follow-up if actual answers exist.'),
      t('Prepara una guía centrada en información previa a reparar y consulta del historial.', 'Prepares a guide focused on pre-repair information and history retrieval.'),
      t('No responder en nombre de Joe; una escala de confianza mide percepción, no exactitud.', 'Do not answer on Joe\'s behalf; a confidence scale measures perception, not accuracy.')
    ),
    w2f_organize: aiDetails(
      t('Conecta el material recopilado con una clasificación rastreable.', 'Connects collected material to traceable classification.'),
      t('Agrupa notas por actividad, actor y fuente, conservando referencias.', 'Groups notes by activity, stakeholder, and source while retaining references.'),
      t('Reduce trabajo de ordenamiento y facilita recuperar fragmentos.', 'Reduces sorting work and makes excerpts easier to retrieve.'),
      t('Revisar categorías y elementos omitidos; ordenar no confirma contenido.', 'Review categories and omitted items; organization does not confirm content.')
    ),
    w2f_compare: aiDetails(
      t('Conecta diferentes fuentes y versiones de un mismo trabajo.', 'Connects different sources and versions of the same work.'),
      t('Señala coincidencias, contradicciones y diferencias de período o contexto.', 'Flags agreements, contradictions, and period or context differences.'),
      t('Ayuda a priorizar qué diferencias requieren volver a las fuentes.', 'Helps prioritize differences requiring a return to sources.'),
      t('Comprobar que los casos sean comparables; no borrar discrepancias para simplificar.', 'Check case comparability; do not erase discrepancies for simplicity.')
    ),
    w2f_clarify: aiDetails(
      t('Conecta vacíos detectados con nuevas preguntas de investigación.', 'Connects detected gaps to new research questions.'),
      t('Sugiere qué preguntar o revisar para resolver cada incertidumbre.', 'Suggests what to ask or review to resolve each uncertainty.'),
      t('Convierte ambigüedades en una lista de seguimiento para el analista.', 'Turns ambiguities into an analyst follow-up list.'),
      t('El analista selecciona preguntas neutrales y conserva pendientes sin respuesta.', 'The analyst selects neutral questions and retains unanswered items as unresolved.')
    ),
    w2f_candidate_requirements: aiDetails(
      t('Conecta hallazgos y reglas extraídas con propuestas del sistema.', 'Connects findings and extracted rules to system proposals.'),
      t('Redacta candidatos vinculados a evidencia y señala términos ambiguos.', 'Drafts candidates linked to evidence and flags ambiguous terms.'),
      t('Facilita discutir propuestas antes de asumir compromisos.', 'Helps discuss proposals before assuming commitments.'),
      t('CANDIDATO EXTRAÍDO ≠ REQUISITO VALIDADO; revisar necesidad y alcance con usuarios.', 'EXTRACTED CANDIDATE ≠ VALIDATED REQUIREMENT; review need and scope with users.')
    ),
    w2f_validation: aiDetails(
      t('Conecta candidatos con la revisión de usuarios y analista.', 'Connects candidates to user and analyst review.'),
      t('Prepara evidencia, dudas y diferencias de redacción para la conversación.', 'Prepares evidence, questions, and wording differences for discussion.'),
      t('Ayuda a registrar correcciones y decisiones humanas de forma explícita.', 'Helps record corrections and human decisions explicitly.'),
      t('Usuarios y analista deciden; ninguna salida del modelo cuenta como aceptación.', 'Users and the analyst decide; no model output counts as acceptance.')
    ),
    w2f_documents: aiDetails(
      t('IA → DOCUMENTOS: EXTRAER.', 'AI → DOCUMENTS: EXTRACT.'),
      t('Extrae conceptos, reglas, campos y requisitos candidatos de artefactos disponibles.', 'Extracts concepts, rules, fields, and requirement candidates from available artifacts.'),
      t('Facilita localizar contenido pertinente en documentos extensos.', 'Helps locate relevant content in long documents.'),
      t('Comprobar texto, versión y localización; conservar procedencia y estado de candidato.', 'Check text, version, and location; retain provenance and candidate status.')
    ),
    w2f_records: aiDetails(
      t('IA → REGISTROS: DETECTAR PATRONES.', 'AI → RECORDS: DETECT PATTERNS.'),
      t('Señala agrupaciones, anomalías y patrones en los registros proporcionados.', 'Flags groupings, anomalies, and patterns in supplied records.'),
      t('Orienta qué casos y diferencias conviene investigar después.', 'Guides which cases and differences warrant further investigation.'),
      t('Verificar registros y cálculos: PATRÓN ≠ CAUSA; revisar faltantes y selección.', 'Verify records and calculations: PATTERN ≠ CAUSE; review missingness and selection.')
    ),
    w2f_sources: aiDetails(
      t('IA → FUENTES: COMPARAR.', 'AI → SOURCES: COMPARE.'),
      t('Relaciona afirmaciones de entrevistas, encuestas, observaciones, documentos y registros.', 'Relates claims from interviews, surveys, observations, documents, and records.'),
      t('Facilita localizar apoyos y contradicciones sin perder el origen.', 'Helps locate support and contradictions without losing origin.'),
      t('Volver a las fuentes originales; bibliografía y resúmenes no sustituyen evidencia del caso.', 'Return to original sources; bibliography and summaries do not replace case evidence.')
    ),
    w2f_followup_questions: aiDetails(
      t('IA → PREGUNTAS: PROPONER SEGUIMIENTO.', 'AI → QUESTIONS: SUGGEST FOLLOW-UP.'),
      t('Propone preguntas ante datos incompletos, contradicciones o expresiones como tarda demasiado.', 'Proposes questions about incomplete data, contradictions, or expressions such as takes too long.'),
      t('Ayuda a pasar de una impresión general a una actividad investigable.', 'Helps move from a general impression to an investigable activity.'),
      t('El analista decide pertinencia; las preguntas y respuestas hipotéticas siguen siendo ejemplos.', 'The analyst decides relevance; hypothetical questions and answers remain examples.')
    ),
    w2f_ai_assistant: aiDetails(
      t('Hub de las siete conexiones de la lente de IA del diagrama 06.', 'Hub for the seven connections in diagram 06\'s AI lens.'),
      t('Transforma fuentes disponibles en síntesis y hallazgos candidatos rastreables.', 'Transforms available sources into traceable summaries and candidate findings.'),
      t('Añade apoyo a la investigación sin saltar organizar, comparar, aclarar y validar.', 'Adds research support without skipping organization, comparison, clarification, and validation.'),
      t('Conservar contexto y revisión humana; no convertir interpretación en hecho por fluidez.', 'Preserve context and human review; fluent interpretation does not become fact.')
    ),
    w2f_ai_source: aiDetails(
      t('Primer paso: FUENTE → PROCESAMIENTO IA.', 'First step: SOURCE → AI PROCESSING.'),
      t('Trabaja sobre material identificado con fragmentos, páginas o filas recuperables.', 'Works on identified material with retrievable excerpts, pages, or rows.'),
      t('Permite regresar al material exacto que dio origen a una salida.', 'Enables a return to the exact material behind an output.'),
      t('Comprobar origen y autorización del material; excluir testimonios o datos inventados.', 'Check material origin and authorization; exclude invented testimony or data.')
    ),
    w2f_candidate_finding: aiDetails(
      t('Paso intermedio entre procesamiento IA y validación humana.', 'Intermediate step between AI processing and human validation.'),
      t('Propone temas o patrones con referencias y dudas explícitas.', 'Proposes themes or patterns with references and explicit uncertainties.'),
      t('Hace revisable la interpretación antes de integrarla al análisis.', 'Makes interpretation reviewable before it enters analysis.'),
      t('Aceptar, corregir o rechazar con evidencia; no asumir causalidad ni aprobación.', 'Accept, correct, or reject using evidence; do not assume causality or approval.')
    ),
    w2f_ai_validation: aiDetails(
      t('Cierra el recorrido de IA mediante revisión del analista y aclaración con usuarios.', 'Closes the AI path through analyst review and clarification with users.'),
      t('Presenta al revisor fuentes y diferencias entre original y síntesis.', 'Presents sources and original-versus-summary differences to the reviewer.'),
      t('Ayuda a documentar por qué un hallazgo se acepta, corrige o rechaza.', 'Helps document why a finding is accepted, corrected, or rejected.'),
      t('La persona revisora decide; el hallazgo aprobado aún debe pasar al proceso de requisitos.', 'The reviewer decides; an accepted finding must still enter the requirements process.')
    ),
    w2f_provenance: aiDetails(
      t('Atraviesa fuente, procesamiento, hallazgo candidato y validación.', 'Spans source, processing, candidate finding, and validation.'),
      t('Ayuda a conservar referencias de origen, transformaciones y decisiones de revisión.', 'Helps retain origin references, transformations, and review decisions.'),
      t('Permite reconstruir la historia de cada hallazgo importante.', 'Enables the history of each important finding to be reconstructed.'),
      t('Comprobar que cada referencia abre la evidencia correcta; trazabilidad no garantiza verdad.', 'Check that each reference leads to the correct evidence; traceability does not guarantee truth.')
    )
  };
  Object.entries(aiNotes).forEach(([id, details]) => {
    db.concepts[id].ai = details;
    db.concepts[id].sources = Array.from(new Set([
      ...db.concepts[id].sources, 'w2f_src_closure', 'w2f_src_nist_genai'
    ]));
  });

  db.diagrams['06'] = {
    id: '06',
    title: t('¿Cómo descubrimos lo que el sistema necesita?', 'How do we discover what the system needs?'),
    transition: t('Pero ¿de dónde salen esos requisitos? No podemos adivinarlos. Tenemos que descubrir hechos.', 'But where do those requirements come from? We cannot guess them. We have to discover facts.'),
    subtitle: t('Descubrimiento / recopilación de hechos', 'Discovery / fact-finding'),
    definition: t('El analista reúne información de usuarios, procesos, documentos y del sistema actual para comprender cómo funciona realmente el trabajo y qué necesita cambiar.', 'The analyst gathers information from users, processes, documents, and the current system to understand how work actually happens and what needs to change.'),
    root: 'w2f_reality',
    groups: [
      {
        label: t('Fuentes y métodos para descubrir la realidad', 'Sources and methods for discovering reality'),
        nodes: ['w2f_stakeholders', 'w2f_interviews', 'w2f_surveys', 'w2f_observation', 'w2f_focus_groups', 'w2f_current_system_review', 'w2f_documents_records', 'w2f_business_process_mapping']
      },
      {
        label: t('Personas del caso Eden Bay / AREV', 'People in the Eden Bay / AREV case'),
        nodes: ['w2f_maria', 'w2f_martin', 'w2f_phil', 'w2f_alice', 'w2f_joe']
      },
      {
        label: t('Preguntas de entrevistas y encuestas', 'Interview and survey question formats'),
        nodes: ['w2f_open_questions', 'w2f_closed_questions', 'w2f_numeric_scale']
      },
      {
        label: t('Muestreo: métodos disponibles en la ficha', 'Sampling: methods available in the drawer'),
        nodes: ['w2f_sampling']
      },
      {
        label: t('Seis preguntas que alimentan los hechos', 'Six questions that feed facts'),
        nodes: ['w2f_who', 'w2f_what', 'w2f_when', 'w2f_where', 'w2f_how', 'w2f_why']
      },
      {
        label: t('De los hechos a requisitos validados', 'From facts to validated requirements'),
        nodes: ['w2f_facts', 'w2f_organize', 'w2f_compare', 'w2f_clarify', 'w2f_candidate_requirements', 'w2f_validation', 'w2f_requirements']
      },
      {
        label: t('Distinguir experiencia y evidencia', 'Distinguish experience and evidence'),
        nodes: ['w2f_opinion']
      }
    ],
    aiPending: false,
    aiNode: 'w2f_ai_assistant',
    aiMasterQuestion: t('¿Cómo puede la IA ayudarnos a encontrar patrones en la evidencia sin confundir interpretación con hecho?', 'How can AI help us find patterns in evidence without confusing interpretation with fact?'),
    aiCoreRule: t('LA IA PUEDE AYUDAR A ENCONTRAR PATRONES. NO CONVIERTE AUTOMÁTICAMENTE UNA INTERPRETACIÓN EN UN HECHO.', 'AI CAN HELP FIND PATTERNS. IT DOES NOT AUTOMATICALLY TURN AN INTERPRETATION INTO A FACT.'),
    aiRelationships: [
      { from: 'w2f_ai_assistant', to: 'w2f_interviews', label: t('TRANSCRIBIR / SINTETIZAR', 'TRANSCRIBE / SUMMARIZE') },
      { from: 'w2f_ai_assistant', to: 'w2f_surveys', label: t('AGRUPAR / ANALIZAR', 'GROUP / ANALYZE') },
      { from: 'w2f_ai_assistant', to: 'w2f_documents', label: t('EXTRAER', 'EXTRACT') },
      { from: 'w2f_ai_assistant', to: 'w2f_records', label: t('DETECTAR PATRONES', 'DETECT PATTERNS') },
      { from: 'w2f_ai_assistant', to: 'w2f_observation', label: t('ORGANIZAR', 'ORGANIZE') },
      { from: 'w2f_ai_assistant', to: 'w2f_sources', label: t('COMPARAR', 'COMPARE') },
      { from: 'w2f_ai_assistant', to: 'w2f_followup_questions', label: t('PROPONER SEGUIMIENTO', 'SUGGEST FOLLOW-UP') }
    ],
    aiFlow: ['w2f_ai_source', 'w2f_ai_assistant', 'w2f_candidate_finding', 'w2f_ai_validation'],
    questions: [
      t('Quién', 'Who'),
      t('Qué', 'What'),
      t('Cuándo', 'When'),
      t('Dónde', 'Where'),
      t('Cómo', 'How'),
      t('Por qué', 'Why')
    ],
    evidenceFlow: ['w2f_facts', 'w2f_organize', 'w2f_compare', 'w2f_clarify', 'w2f_candidate_requirements', 'w2f_validation', 'w2f_requirements'],
    evidenceInputs: ['w2f_stakeholders', 'w2f_documents_records', 'w2f_current_system_review', 'w2f_observation', 'w2f_surveys', 'w2f_interviews', 'w2f_focus_groups', 'w2f_business_process_mapping'],
    triangulationRelationships: [
      { from: 'w2f_interviews', to: 'w2f_shared_finding', label: t('Declaraciones contrastadas', 'Compared statements') },
      { from: 'w2f_observation', to: 'w2f_shared_finding', label: t('Acciones observadas', 'Observed actions') },
      { from: 'w2f_records', to: 'w2f_shared_finding', label: t('Evidencia de registros', 'Record evidence') }
    ]
  };

  const discovery = db.diagrams['06'];
  discovery.aiTitle = db.concepts[discovery.aiNode].label;
  discovery.aiMessage = discovery.aiCoreRule;

  // Adapt existing AI content to the shared renderer's relationship contract.
  discovery.aiRelationships = discovery.aiRelationships.map(({ from, to, label }) => {
    const target = db.concepts[to];
    const suffix = to.slice('w2f_'.length);
    const detailId = 'w2f_ai_detail_' + suffix;
    db.concepts[detailId] = {
      id: detailId,
      label: t(target.label.es + ': ' + label.es, target.label.en + ': ' + label.en),
      layer: 'ai',
      what: target.ai.does,
      why: target.ai.changes,
      question: target.question,
      example: target.example,
      analogy: target.analogy,
      related: [from, to, 'w2f_provenance', 'w2f_ai_validation'],
      notConfuse: target.notConfuse,
      sources: [...target.sources],
      ai: { ...target.ai }
    };
    return {
      id: 'w2f_ai_relationship_' + suffix,
      from,
      to,
      action: label,
      concept: detailId,
      value: target.ai.changes
    };
  });
})();
