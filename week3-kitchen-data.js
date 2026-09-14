(function (global) {
  'use strict';

  // Owned data only: D02, D03 and the shared Kitchen Gadgets models.
  const db = global.CST212_W3 = global.CST212_W3 || {};
  ['diagrams', 'concepts', 'sources', 'models'].forEach(function (key) {
    if (!db[key]) db[key] = {};
  });

  const t = (es, en) => ({ es, en });
  const source = 'w3-course';
  if (!db.sources[source]) {
    db.sources[source] = {
      author: 'CST212 ES_A190',
      year: 's. f.',
      title: 'Semana 3: Modelado de datos y procesos. Material e instrucciones académicas suministrados por el estudiante.'
    };
  }

  function ai(connection, does, changes, validate) {
    return { connection, does, changes, validate };
  }

  function concept(id, label, layer, content) {
    db.concepts[id] = Object.assign({ id, label, layer, sources: [source] }, content);
  }

  concept('w3k_dfd', t('Diagrama de flujo de datos', 'Data flow diagram'), 'foundation', {
    what: t('Un DFD representa cómo los datos entran, se transforman, se conservan y salen de un sistema mediante entidades externas, procesos, flujos y almacenes de datos.', 'A DFD represents how data enters, is transformed, is retained and leaves a system through external entities, processes, flows and data stores.'),
    why: t('Permite discutir el funcionamiento lógico antes de elegir una implementación y descubrir datos que faltan entre actividades.', 'It supports discussion of logical behavior before choosing an implementation and exposes missing data between activities.'),
    question: t('¿Qué información entra, qué la transforma y adónde va?', 'What information enters, what transforms it and where does it go?'),
    example: t('Kitchen Gadgets recibe un pedido por EDI, comunica su estado e intercambia una orden y una confirmación de envío con Warehouse. La estructura interna mostrada es candidata.', 'Kitchen Gadgets receives an EDI order, communicates its status and exchanges a shipping order and confirmation with Warehouse. The internal structure shown is a candidate.'),
    analogy: t('Un plano de las conversaciones y de sus archivos: muestra mensajes y transformaciones, no camiones ni edificios.', 'A plan of conversations and their records: it shows messages and transformations, not trucks or buildings.'),
    related: ['w3k_external_entity', 'w3k_process', 'w3k_data_flow', 'w3k_data_store', 'w3k_context'],
    notConfuse: t('Un DFD no es un diagrama de control, un calendario de ejecución ni un plano de tecnologías. Sus flechas transportan datos.', 'A DFD is not a control flow diagram, an execution schedule or a technology blueprint. Its arrows carry data.'),
    ai: ai(
      t('Extensión IA: revisar o proponer partes del modelo lógico, conservando el DFD BASE.', 'AI extension: review or propose parts of the logical model while preserving the BASE DFD.'),
      t('Sugerir nombres de flujos y detectar transformaciones que carecen de datos de entrada suficientes.', 'Suggest flow names and detect transformations without sufficient input data.'),
      t('Aparecen propuestas y anotaciones revisables; los hechos del caso no cambian.', 'Reviewable proposals and annotations are added; the case facts do not change.'),
      t('Verificar cada entidad, flujo y dependencia contra el material suministrado. La IA no se atribuye a Tiffin.', 'Check each entity, flow and dependency against the supplied material. AI is not attributed to Tiffin.')
    )
  });

  concept('w3k_external_entity', t('Entidad externa', 'External entity'), 'foundation', {
    what: t('Persona, organización u otro sistema fuera del límite estudiado que envía o recibe datos. Se representa convencionalmente con un rectángulo.', 'A person, organization or other system outside the boundary being studied that sends or receives data. It is conventionally represented by a rectangle.'),
    why: t('Hace explícito quién participa desde fuera y evita confundir responsabilidades externas con procesos internos.', 'It makes outside participants explicit and avoids confusing external responsibilities with internal processes.'),
    question: t('¿Quién intercambia información con el sistema desde afuera?', 'Who exchanges information with the system from outside?'),
    example: t('Customer envía el pedido EDI y recibe su estado; Warehouse recibe la orden de envío y devuelve la confirmación.', 'Customer sends the EDI order and receives its status; Warehouse receives the shipping order and returns the confirmation.'),
    analogy: t('Quien entrega o recibe una carta al otro lado de la ventanilla.', 'Someone delivering or receiving a letter on the other side of a service window.'),
    related: ['w3k_customer', 'w3k_warehouse', 'w3k_context', 'w3k_process'],
    notConfuse: t('Externo significa fuera del límite del modelo; no necesariamente fuera de la empresa. Warehouse no es el almacén de datos D2.', 'External means outside the model boundary, not necessarily outside the company. Warehouse is not data store D2.'),
    ai: ai(
      t('Extensión IA: ayudar a revisar el límite y los participantes del sistema.', 'AI extension: help review the system boundary and its participants.'),
      t('Comparar los participantes del texto con las entidades dibujadas.', 'Compare participants in the text with the entities drawn.'),
      t('Puede señalar una entidad candidata; no añade por defecto un servicio de IA ni de pagos.', 'It can flag a candidate entity; it does not add an AI or payment service by default.'),
      t('Confirmar con evidencia quién está fuera del límite y qué datos intercambia.', 'Confirm with evidence who is outside the boundary and what data they exchange.')
    )
  });

  concept('w3k_process', t('Proceso', 'Process'), 'foundation', {
    what: t('Actividad que transforma datos de entrada en datos de salida. Se representa con un círculo o rectángulo redondeado, según la notación DFD elegida.', 'An activity that transforms input data into output data. It is represented by a circle or rounded rectangle, depending on the chosen DFD notation.'),
    why: t('Explica qué trabajo lógico convierte la información recibida en un resultado útil.', 'It explains the logical work that turns received information into a useful result.'),
    question: t('¿Qué transformación ocurre y con qué datos puede realizarse?', 'What transformation occurs and what data makes it possible?'),
    example: t('Verificar inventario transforma el detalle del pedido y los datos de inventario en un pedido validado, dentro de la interpretación candidata.', 'Verify inventory transforms order detail and inventory data into a validated order within the candidate interpretation.'),
    analogy: t('Una mesa de trabajo que recibe documentos, los examina y produce otro documento.', 'A work desk that receives documents, examines them and produces another document.'),
    related: ['w3k_verify', 'w3k_shipping', 'w3k_charge', 'w3k_data_flow'],
    notConfuse: t('Un proceso no es una persona, un servidor ni una flecha. Su número identifica la descomposición; no fija un horario.', 'A process is not a person, server or arrow. Its number identifies decomposition; it does not set a schedule.'),
    ai: ai(
      t('Extensión IA: asistir una transformación específica, como revisar una comprobación de disponibilidad.', 'AI extension: assist a specific transformation, such as reviewing an availability check.'),
      t('Proponer una descripción de la transformación y advertir entradas insuficientes.', 'Propose a transformation description and flag insufficient inputs.'),
      t('Se distingue la función BASE de la asistencia opcional y de sus resultados sujetos a revisión.', 'The BASE function is distinguished from optional assistance and its reviewable outputs.'),
      t('Validar las reglas y que las salidas puedan derivarse de entradas reales; una inferencia no crea inventario.', 'Validate the rules and that outputs can be derived from actual inputs; an inference does not create inventory.')
    )
  });

  concept('w3k_data_flow', t('Flujo de datos', 'Data flow'), 'foundation', {
    what: t('Información que viaja de un origen a un destino. Se representa con una flecha dirigida y un nombre de datos, como Detalle del pedido.', 'Information traveling from a source to a destination. It is represented by a directed arrow and a data name, such as Order detail.'),
    why: t('Hace visible el contenido del intercambio y permite comprobar que un proceso recibe lo que necesita.', 'It makes the content of an exchange visible and supports checking that a process receives what it needs.'),
    question: t('¿Qué información está viajando y hacia quién?', 'What information is traveling and to whom?'),
    example: t('Orden de envío es información del sistema a Warehouse. Confirmación de envío es otro flujo, en sentido de regreso.', 'Shipping order is information from the system to Warehouse. Shipping confirmation is another flow in the return direction.'),
    analogy: t('El mensaje dentro de un sobre rotulado, junto con la dirección del destinatario.', 'The message inside a labeled envelope together with the recipient address.'),
    related: ['w3k_context_shipping', 'w3k_context_confirmation', 'w3k_process', 'w3k_data_store'],
    notConfuse: t('La flecha no representa el movimiento físico de productos, personas o dinero ni, por sí sola, una orden de ejecución.', 'The arrow does not represent physical movement of products, people or money, nor does it by itself prescribe execution order.'),
    ai: ai(
      t('Extensión IA: interpretar o clasificar el significado de un intercambio identificado.', 'AI extension: interpret or classify the meaning of an identified exchange.'),
      t('Sugerir una categoría para un mensaje o revisar si su etiqueta describe sus datos.', 'Suggest a category for a message or review whether its label describes its data.'),
      t('Se añade una interpretación revisable del mensaje. El pedido EDI del caso sigue siendo estructurado.', 'A reviewable interpretation of the message is added. The case EDI order remains structured.'),
      t('Comprobar origen, destino, significado y formato real; no convertir una etiqueta sugerida en un requisito nuevo.', 'Check the source, destination, meaning and actual format; do not turn a suggested label into a new requirement.')
    )
  });

  concept('w3k_data_store', t('Almacén de datos', 'Data store'), 'foundation', {
    what: t('Lugar lógico donde se conserva información para usarla después. Se representa con líneas paralelas o un rectángulo abierto, según la notación.', 'A logical place where information is retained for later use. It is represented by parallel lines or an open rectangle, depending on the notation.'),
    why: t('Distingue los datos persistentes de los mensajes en tránsito y de las actividades que los modifican.', 'It distinguishes retained data from messages in transit and from activities that change it.'),
    question: t('¿Qué información necesita conservar el sistema y qué proceso la consulta o registra?', 'What information must the system retain and which process reads or records it?'),
    example: t('D1 Pedidos, D2 Inventario, D3 Órdenes de envío y D4 Pagos son almacenes lógicos de la estructura interna candidata.', 'D1 Orders, D2 Inventory, D3 Shipping orders and D4 Payments are logical stores in the candidate internal structure.'),
    analogy: t('Un archivador identificado por el tipo de documento que conserva, sin elegir aún su material o fabricante.', 'A filing cabinet identified by the type of document it retains, before choosing its material or manufacturer.'),
    related: ['w3k_orders', 'w3k_inventory', 'w3k_shipping_orders', 'w3k_payments'],
    notConfuse: t('Un almacén lógico no determina una base de datos concreta. D2 Inventario conserva datos; Warehouse es una entidad del entorno.', 'A logical store does not determine a specific database. D2 Inventory retains data; Warehouse is an entity in the environment.'),
    ai: ai(
      t('Extensión IA: extraer o analizar información de registros autorizados.', 'AI extension: extract or analyze information from authorized records.'),
      t('Ayudar a localizar valores o detectar inconsistencias entre registros.', 'Help locate values or detect inconsistencies between records.'),
      t('Se agregan resultados derivados y trazables, sin sustituir silenciosamente los registros originales.', 'Derived, traceable results are added without silently replacing original records.'),
      t('Validar permisos, correspondencia con el registro fuente y vigencia de los datos; no inventar un esquema de almacenamiento.', 'Validate permissions, correspondence with the source record and data freshness; do not invent a storage schema.')
    )
  });

  concept('w3k_context', t('Diagrama de contexto', 'Context diagram'), 'foundation', {
    what: t('Vista que representa todo el sistema como un solo proceso y muestra las entidades externas y sus principales intercambios de datos.', 'A view that represents the entire system as one process and shows external entities and their main data exchanges.'),
    why: t('Acuerda el límite del sistema antes de discutir cómo se organiza por dentro.', 'It establishes the system boundary before discussing its internal organization.'),
    question: t('¿Qué intercambia el sistema con su entorno?', 'What does the system exchange with its environment?'),
    example: t('Un proceso de Kitchen Gadgets, Customer y Warehouse, con exactamente cuatro flujos: pedido EDI, estado del pedido, orden de envío y confirmación de envío.', 'One Kitchen Gadgets process, Customer and Warehouse, with exactly four flows: EDI order, order status, shipping order and shipping confirmation.'),
    analogy: t('Como mirar un país en Google Maps: primero reconoces su contorno y sus conexiones, sin ver sus calles.', 'Like viewing a country in Google Maps: first you recognize its outline and connections without seeing its streets.'),
    related: ['w3k_system', 'w3k_customer', 'w3k_warehouse', 'w3k_diagram0', 'w3k_levels'],
    notConfuse: t('No es el Diagrama 0 descompuesto. En esta vista no aparecen procesos internos, almacenes de datos ni servicios externos añadidos.', 'It is not the decomposed Diagram 0. This view contains no internal processes, data stores or added external services.'),
    ai: ai(
      t('Extensión IA hipotética: considerar una capacidad externa opcional en el límite del sistema.', 'Hypothetical AI extension: consider an optional external capability at the system boundary.'),
      t('Ayudar a formular qué asistencia se necesitaría y qué información exigiría.', 'Help state what assistance would be needed and what information it would require.'),
      t('La lente añade una anotación pedagógica; el contexto BASE mantiene un proceso, dos entidades y cuatro flujos.', 'The lens adds a teaching annotation; the BASE context keeps one process, two entities and four flows.'),
      t('Antes de modelar una dependencia real, confirmar necesidad, alcance y datos permitidos. No se afirma que el caso use IA.', 'Before modeling a real dependency, confirm the need, scope and permitted data. The case is not claimed to use AI.')
    )
  });

  concept('w3k_diagram0', t('Diagrama 0', 'Diagram 0'), 'foundation', {
    what: t('Descompone el proceso del contexto en los principales procesos internos y permite mostrar almacenes de datos e intercambios internos.', 'It decomposes the context process into the main internal processes and allows data stores and internal exchanges to be shown.'),
    why: t('Permite analizar responsabilidades y dependencias que el panorama general oculta.', 'It supports analysis of responsibilities and dependencies hidden by the overview.'),
    question: t('¿Qué procesos internos explican los intercambios del contexto?', 'Which internal processes explain the context exchanges?'),
    example: t('Modelo candidato: 1.0 Recibir pedido, 2.0 Verificar inventario, 3.0 Generar orden de envío y 4.0 Procesar cargo, con D1 a D4.', 'Candidate model: 1.0 Receive order, 2.0 Verify inventory, 3.0 Generate shipping order and 4.0 Process charge, with D1 through D4.'),
    analogy: t('Acercarse del país a la ciudad y distinguir sus zonas principales.', 'Zooming from a country into a city and distinguishing its main areas.'),
    related: ['w3k_context', 'w3k_receive', 'w3k_verify', 'w3k_shipping', 'w3k_charge', 'w3k_child2_0'],
    notConfuse: t('Diagrama 0 es el nombre de esta descomposición; no significa que contenga un solo proceso 0 ni que los números sean un cronómetro.', 'Diagram 0 is the name of this decomposition; it does not mean it contains only process 0 or that the numbers act as a clock.'),
    ai: ai(
      t('Extensión IA: localizar asistencia en un proceso concreto, aquí 2.0 Verificar inventario.', 'AI extension: locate assistance in a specific process, here 2.0 Verify inventory.'),
      t('Sugerir revisiones de la información utilizada por 2.0 o explicar sus resultados.', 'Suggest checks on the information used by 2.0 or explain its results.'),
      t('La asistencia tiene un responsable y un alcance más concretos que en el contexto.', 'The assistance has a more specific owner and scope than at context level.'),
      t('Conservar los cuatro intercambios externos y la dependencia del cargo respecto de la confirmación de envío.', 'Preserve the four external exchanges and the charge dependency on shipping confirmation.')
    )
  });

  concept('w3k_child2_0', t('Diagrama hijo de 2.0', 'Child diagram of 2.0'), 'foundation', {
    what: t('Vista que explica por dentro un solo proceso padre: 2.0 Verificar inventario. La descomposición propuesta contiene 2.1, 2.2 y 2.3.', 'A view that explains the inside of one parent process: 2.0 Verify inventory. The proposed decomposition contains 2.1, 2.2 and 2.3.'),
    why: t('Hace examinable una transformación compleja sin volver a descomponer todo el sistema.', 'It makes a complex transformation examinable without decomposing the entire system again.'),
    question: t('¿Cómo produce 2.0 un pedido validado a partir del detalle del pedido y del inventario?', 'How does 2.0 produce a validated order from order detail and inventory?'),
    example: t('2.1 Identificar productos solicitados, 2.2 Consultar inventario y 2.3 Determinar disponibilidad. 1.0, 3.0 y D2 se repiten solo como referencias del borde de 2.0.', '2.1 Identify requested products, 2.2 Query inventory and 2.3 Determine availability. 1.0, 3.0 and D2 are repeated only as references at the boundary of 2.0.'),
    analogy: t('Acercarse a una calle de la ciudad para entender sus conexiones locales, conservando los accesos del barrio.', 'Zooming into a city street to understand local connections while retaining the neighborhood entry points.'),
    related: ['w3k_verify', 'w3k_identify', 'w3k_query', 'w3k_determine', 'w3k_levels', 'w3k_zoom_breadcrumbs'],
    notConfuse: t('Los procesos 1.0 y 3.0 mostrados en el borde no son hijos de 2.0 ni nuevas entidades externas. El hijo no puede perder la consulta y respuesta de D2 presentes en el padre.', 'Processes 1.0 and 3.0 shown at the boundary are not children of 2.0 or new external entities. The child cannot lose the D2 query and response present in its parent.'),
    ai: ai(
      t('Extensión IA: ubicar asistencia específicamente en 2.3 Determinar disponibilidad.', 'AI extension: locate assistance specifically in 2.3 Determine availability.'),
      t('Explicar la evidencia disponible o señalar que no basta para respaldar una conclusión.', 'Explain available evidence or flag that it is insufficient to support a conclusion.'),
      t('Se precisa la subfunción asistida, manteniendo el detalle del pedido y el pedido validado en el borde del padre.', 'The assisted subfunction becomes precise while order detail and validated order remain at the parent boundary.'),
      t('Verificar que la ayuda use datos de D2 y reglas acordadas, sin sustituir datos faltantes por respuestas plausibles.', 'Check that assistance uses D2 data and agreed rules without replacing missing data with plausible answers.')
    )
  });

  concept('w3k_levels', t('Niveles del DFD', 'DFD levels'), 'foundation', {
    what: t('Vistas del mismo sistema con distinta profundidad: contexto para el límite, Diagrama 0 para procesos principales y diagramas hijo para un proceso específico.', 'Views of the same system at different depths: context for the boundary, Diagram 0 for main processes and child diagrams for a specific process.'),
    why: t('Permiten elegir el detalle necesario sin mezclar el panorama general con la lógica de cada subfunción.', 'They allow the required detail to be selected without mixing the overview with the logic of every subfunction.'),
    question: t('¿Qué pregunta responde este nivel y qué proceso explica el nivel siguiente?', 'Which question does this level answer and which process does the next level explain?'),
    example: t('Proceso 0 del contexto → procesos 1.0 a 4.0 del Diagrama 0 → procesos 2.1 a 2.3 dentro de 2.0.', 'Context process 0 → Diagram 0 processes 1.0 through 4.0 → processes 2.1 through 2.3 inside 2.0.'),
    analogy: t('País, ciudad y calle son escalas de observación; ninguna reemplaza el territorio por otro.', 'Country, city and street are observation scales; none replaces the territory with a different one.'),
    related: ['w3k_context', 'w3k_diagram0', 'w3k_child2_0', 'w3k_zoom_breadcrumbs'],
    notConfuse: t('Los números indican identidad y pertenencia, no segundos ni prioridad. Las convenciones para llamar nivel 0 al contexto o a otra vista pueden variar; aquí se usan nombres explícitos.', 'Numbers indicate identity and membership, not seconds or priority. Conventions for calling the context or another view level 0 can vary; explicit view names are used here.'),
    ai: ai(
      t('Extensión IA: examinar el alcance de la asistencia a diferentes profundidades.', 'AI extension: examine the scope of assistance at different depths.'),
      t('Relacionar una capacidad general con el proceso y la subfunción donde podría intervenir.', 'Relate a general capability to the process and subfunction where it could participate.'),
      t('La explicación pasa de capacidad opcional a responsabilidad concreta y después a operación delimitada.', 'The explanation moves from optional capability to a specific responsibility and then to a bounded operation.'),
      t('No confundir más detalle visual con evidencia de que la IA está implementada.', 'Do not confuse greater visual detail with evidence that AI has been implemented.')
    )
  });

  concept('w3k_zoom_breadcrumbs', t('Ruta del zoom', 'Zoom breadcrumbs'), 'deepening', {
    what: t('Recurso de navegación pedagógica que muestra el recorrido Contexto > Diagrama 0 > Proceso 2.0 y permite reconocer el nivel actual.', 'A teaching navigation aid that shows the path Context > Diagram 0 > Process 2.0 and identifies the current level.'),
    why: t('Evita perder la relación entre una vista detallada y el proceso que explica.', 'It prevents losing the relationship between a detailed view and the process it explains.'),
    question: t('¿Dentro de qué proceso estoy y a qué vista puedo volver?', 'Which process am I inside and which view can I return to?'),
    example: t('Desde el sistema del contexto se abre Diagrama 0; desde 2.0 se abre su hijo. La ruta conserva los dos pasos anteriores.', 'The context system opens Diagram 0; process 2.0 opens its child. The breadcrumb trail retains the two previous steps.'),
    analogy: t('La indicación de país, ciudad y calle que ayuda a orientarte al acercar un mapa.', 'The country, city and street indication that helps you stay oriented when zooming into a map.'),
    related: ['w3k_context', 'w3k_diagram0', 'w3k_child2_0', 'w3k_levels'],
    notConfuse: t('Es una ayuda de interfaz, no un quinto símbolo DFD ni un flujo de datos entre procesos.', 'It is an interface aid, not a fifth DFD symbol or a data flow between processes.'),
    ai: ai(
      t('Extensión IA: conservar el contexto de la explicación al cambiar de nivel.', 'AI extension: retain explanatory context when switching levels.'),
      t('Presentar la asistencia correspondiente al nivel y al proceso seleccionados.', 'Present assistance appropriate to the selected level and process.'),
      t('La relación IA visible cambia de alcance; la ruta del modelo BASE se conserva.', 'The visible AI relationship changes scope; the BASE model path is preserved.'),
      t('Comprobar que una nota de 2.3 no se presente como si describiera todo el sistema.', 'Check that a note about 2.3 is not presented as describing the entire system.')
    )
  });

  concept('w3k_system', t('Sistema de pedidos Kitchen Gadgets', 'Kitchen Gadgets order system'), 'foundation', {
    what: t('El sistema del caso, representado como un solo proceso en el contexto. Recibe pedidos EDI e intercambia información con Customer y Warehouse.', 'The case system, represented as a single process in the context. It receives EDI orders and exchanges information with Customer and Warehouse.'),
    why: t('Ofrece un límite estable para comparar el panorama general con las descomposiciones propuestas.', 'It provides a stable boundary for comparing the overview with the proposed decompositions.'),
    question: t('¿Qué responsabilidades quedan dentro del sistema de pedidos?', 'Which responsibilities lie inside the order system?'),
    example: t('El sistema comunica el estado del pedido, envía una orden de envío, recibe su confirmación y procesa el cargo después del envío.', 'The system communicates order status, sends a shipping order, receives confirmation and processes the charge after shipment.'),
    analogy: t('Una caja con cuatro mensajes que cruzan su borde; abrirla permite estudiar sus tareas internas.', 'A box with four messages crossing its boundary; opening it reveals its internal tasks.'),
    related: ['w3k_context', 'w3k_diagram0', 'w3k_customer', 'w3k_warehouse', 'w3k_charge'],
    notConfuse: t('El proceso único no afirma que haya un único programa ni describe servidores. EDI es un intercambio estructurado.', 'The single process does not assert that there is a single program or describe servers. EDI is a structured exchange.'),
    ai: ai(
      t('Extensión IA opcional: considerar asistencia al sistema como una capacidad hipotética.', 'Optional AI extension: consider assistance to the system as a hypothetical capability.'),
      t('Ayudar al analista a delimitar un uso concreto antes de descomponerlo.', 'Help the analyst bound a specific use before decomposing it.'),
      t('Se agrega una relación explicativa de la lente, sin añadir flujos al contexto canónico.', 'An explanatory lens relationship is added without adding flows to the canonical context.'),
      t('Confirmar que la capacidad responde a una necesidad validada; el caso aportado no establece uso de IA.', 'Confirm that the capability addresses a validated need; the supplied case does not establish AI use.')
    )
  });

  concept('w3k_customer', t('Cliente', 'Customer'), 'foundation', {
    what: t('Entidad externa Customer del caso Kitchen Gadgets: origina el pedido mediante EDI y recibe el estado del pedido.', 'The Customer external entity in the Kitchen Gadgets case: it originates the order through EDI and receives order status.'),
    why: t('Identifica el origen de la solicitud del caso y el destinatario de la información de estado.', 'It identifies the source of the case request and the recipient of status information.'),
    question: t('¿Qué envía y qué recibe Customer?', 'What does Customer send and receive?'),
    example: t('Customer → Pedido vía EDI → Sistema; Sistema → Estado del pedido → Customer.', 'Customer → EDI order → System; System → Order status → Customer.'),
    analogy: t('El remitente de una solicitud y destinatario de la respuesta sobre su trámite.', 'The sender of a request and recipient of the response about its handling.'),
    related: ['w3k_external_entity', 'w3k_context_edi', 'w3k_context_status'],
    notConfuse: t('Customer no es el proceso 1.0. El pedido EDI no se transforma aquí en un correo o conversación no estructurada.', 'Customer is not process 1.0. The EDI order is not turned here into unstructured email or conversation.'),
    ai: ai(
      t('Extensión IA: podría apoyar la comprensión de información del pedido o de su estado.', 'AI extension: it could support understanding of order or status information.'),
      t('Explicar un estado a partir de datos reales autorizados.', 'Explain a status using authorized actual data.'),
      t('Se añadiría ayuda explicativa; no se presupone un canal distinto del EDI aportado.', 'Explanatory help would be added; no channel other than the supplied EDI exchange is assumed.'),
      t('Validar que la explicación coincida con el pedido y no prometa fechas ni disponibilidad no suministradas.', 'Validate that the explanation matches the order and does not promise dates or availability not supplied.')
    )
  });

  concept('w3k_warehouse', t('Almacén (entidad externa)', 'Warehouse (external entity)'), 'foundation', {
    what: t('Entidad Warehouse del entorno del sistema de pedidos. Recibe información de la orden de envío y devuelve información de confirmación.', 'The Warehouse entity in the order system environment. It receives shipping order information and returns confirmation information.'),
    why: t('Hace visible la evidencia del envío que debe preceder al cargo.', 'It makes visible the evidence of shipment that must precede the charge.'),
    question: t('¿Qué mensaje confirma al sistema que ocurrió el envío?', 'Which message tells the system that shipment occurred?'),
    example: t('Warehouse → Confirmación de envío → Sistema; en el Diagrama 0 candidato esa confirmación entra a 4.0.', 'Warehouse → Shipping confirmation → System; in the candidate Diagram 0 that confirmation enters 4.0.'),
    analogy: t('Un interlocutor que recibe instrucciones documentadas y devuelve una constancia.', 'A counterpart that receives documented instructions and returns an acknowledgment.'),
    related: ['w3k_external_entity', 'w3k_context_shipping', 'w3k_context_confirmation', 'w3k_charge'],
    notConfuse: t('Warehouse no es D2 Inventario. La flecha de confirmación transporta información, no el paquete físico.', 'Warehouse is not D2 Inventory. The confirmation arrow carries information, not the physical package.'),
    ai: ai(
      t('Extensión IA: ayudar a revisar mensajes de confirmación y su correspondencia con la orden.', 'AI extension: help review confirmation messages and their correspondence with the order.'),
      t('Señalar referencias discordantes para revisión humana.', 'Flag mismatched references for human review.'),
      t('Se agrega una alerta sobre datos recibidos; la IA no genera por sí sola evidencia de envío.', 'An alert about received data is added; AI does not itself generate shipment evidence.'),
      t('Confirmar autenticidad, correspondencia y existencia de la confirmación antes de usarla para habilitar el cargo.', 'Confirm authenticity, correspondence and existence of confirmation before using it to enable the charge.')
    )
  });

  concept('w3k_receive', t('Recibir pedido', 'Receive order'), 'deepening', {
    what: t('Proceso 1.0 de la estructura candidata: recibe el pedido EDI, propone conservar su registro en D1 y entrega el detalle del pedido a 2.0.', 'Process 1.0 in the candidate structure: it receives the EDI order, proposes retaining its record in D1 and supplies order detail to 2.0.'),
    why: t('Conecta la entrada externa con la verificación interna y con los datos conservados del pedido.', 'It connects the external input to internal verification and retained order data.'),
    question: t('¿Qué información del pedido necesita la verificación y cuál debe conservarse?', 'Which order information does verification need and which must be retained?'),
    example: t('Pedido EDI → 1.0 → Detalle del pedido hacia 2.0; en paralelo lógico se representa Pedido registrado hacia D1, sin fijar un orden de ejecución.', 'EDI order → 1.0 → Order detail to 2.0; Order record to D1 is also represented logically without prescribing execution order.'),
    analogy: t('Una mesa de recepción que registra un documento y entrega su detalle a quien lo revisa.', 'A reception desk that records a document and gives its details to the reviewer.'),
    related: ['w3k_customer', 'w3k_orders', 'w3k_verify', 'w3k_zero_order_detail'],
    notConfuse: t('Recibir no equivale a clasificar texto libre: el caso especifica EDI. El registro en D1 es una decisión del modelo candidato.', 'Receiving is not the same as classifying free text: the case specifies EDI. Recording in D1 is a candidate modeling decision.'),
    ai: ai(
      t('Extensión IA: revisar correspondencia entre un pedido estructurado y sus datos internos.', 'AI extension: review correspondence between a structured order and its internal data.'),
      t('Señalar campos faltantes o discrepancias con un esquema que primero debe definirse.', 'Flag missing fields or discrepancies against a schema that must first be defined.'),
      t('Se agregaría una revisión opcional, sin inventar el formato EDI ni nuevas entradas externas.', 'An optional review would be added without inventing the EDI format or new external inputs.'),
      t('Confirmar el esquema real y evitar tratar una sugerencia de extracción como un dato recibido.', 'Confirm the actual schema and avoid treating an extraction suggestion as received data.')
    )
  });

  concept('w3k_verify', t('Verificar inventario', 'Verify inventory'), 'deepening', {
    what: t('Proceso 2.0 propuesto: usa el detalle del pedido y consulta D2 Inventario para producir un pedido validado. Su interior se explica en el diagrama hijo.', 'Proposed process 2.0: it uses order detail and queries D2 Inventory to produce a validated order. Its interior is explained in the child diagram.'),
    why: t('Sitúa la comprobación de disponibilidad antes de generar la orden de envío y permite examinar sus datos de soporte.', 'It places the availability check before generation of the shipping order and makes its supporting data examinable.'),
    question: t('¿Con qué evidencia se considera validado un pedido para continuar?', 'What evidence makes an order validated for continuation?'),
    example: t('Entradas: Detalle del pedido y Datos de inventario. Salidas: Consulta de inventario y Pedido validado. Estos cuatro flujos se conservan al abrir 2.1, 2.2 y 2.3.', 'Inputs: Order detail and Inventory data. Outputs: Inventory query and Validated order. These four flows are preserved when opening 2.1, 2.2 and 2.3.'),
    analogy: t('Un revisor que contrasta lo solicitado con el registro de existencias antes de emitir su conclusión.', 'A reviewer comparing what was requested with the stock record before issuing a conclusion.'),
    related: ['w3k_child2_0', 'w3k_inventory', 'w3k_identify', 'w3k_query', 'w3k_determine'],
    notConfuse: t('Pedido validado no significa pedido enviado ni cargo realizado. Las reglas para faltantes, reservas o pedidos parciales no fueron aportadas.', 'Validated order does not mean shipped order or processed charge. Rules for shortages, reservations or partial orders were not supplied.'),
    ai: ai(
      t('Extensión IA en Diagrama 0: asistir específicamente la verificación de inventario.', 'AI extension in Diagram 0: assist inventory verification specifically.'),
      t('Explicar inconsistencias entre el detalle solicitado y los datos consultados.', 'Explain inconsistencies between requested detail and queried data.'),
      t('Se incorpora ayuda revisable dentro de 2.0; su interfaz externa permanece igual.', 'Reviewable assistance is introduced within 2.0; its external interface remains the same.'),
      t('Comprobar datos actuales de D2, reglas aprobadas y que la IA no infiera disponibilidad cuando falta evidencia.', 'Check current D2 data, approved rules and that AI does not infer availability when evidence is missing.')
    )
  });

  concept('w3k_shipping', t('Generar orden de envío', 'Generate shipping order'), 'deepening', {
    what: t('Proceso 3.0 propuesto: transforma el pedido validado en información de la orden de envío para Warehouse y propone registrar esa orden en D3.', 'Proposed process 3.0: it transforms the validated order into shipping order information for Warehouse and proposes recording that order in D3.'),
    why: t('Separa la instrucción informativa de envío de la evidencia posterior de que el envío ocurrió.', 'It separates the informational shipping instruction from later evidence that shipment occurred.'),
    question: t('¿Qué información recibe Warehouse para preparar el envío?', 'What information does Warehouse receive to prepare shipment?'),
    example: t('Pedido validado → 3.0 → Orden de envío hacia Warehouse, con registro candidato de la misma orden en D3.', 'Validated order → 3.0 → Shipping order to Warehouse, with a candidate record of the same order in D3.'),
    analogy: t('Emitir una instrucción escrita y conservar su copia; emitirla no demuestra que ya se haya cumplido.', 'Issuing a written instruction and retaining its copy; issuing it does not prove it has already been carried out.'),
    related: ['w3k_verify', 'w3k_warehouse', 'w3k_shipping_orders', 'w3k_charge'],
    notConfuse: t('La orden es un documento de datos, no el producto físico ni una confirmación de envío.', 'The order is a data document, not the physical product or a shipping confirmation.'),
    ai: ai(
      t('Extensión IA: revisar la coherencia documental entre pedido validado y orden de envío.', 'AI extension: review documentary consistency between the validated order and shipping order.'),
      t('Señalar información contradictoria o que requiere completar una definición de datos.', 'Flag contradictory information or information needing a completed data definition.'),
      t('Se añade una revisión opcional sin anticipar la confirmación de Warehouse.', 'An optional review is added without anticipating Warehouse confirmation.'),
      t('Validar la correspondencia con el pedido y no inventar transportista, fechas ni campos no suministrados.', 'Validate correspondence with the order and do not invent a carrier, dates or fields not supplied.')
    )
  });

  concept('w3k_charge', t('Procesar cargo', 'Process charge'), 'deepening', {
    what: t('Proceso 4.0 candidato que respeta el hecho aportado: el sistema procesa el cargo después del envío. Recibe la confirmación de Warehouse y referencias del pedido y de la orden de envío.', 'Candidate process 4.0 respecting the supplied fact: the system processes the charge after shipment. It receives Warehouse confirmation and references to the order and shipping order.'),
    why: t('Hace explícita la dependencia del cargo respecto de una confirmación de envío correspondiente al pedido.', 'It makes the charge dependency on a shipping confirmation corresponding to the order explicit.'),
    question: t('¿Existe una confirmación de envío del pedido que permita procesar este cargo?', 'Is there shipping confirmation for the order that allows this charge to be processed?'),
    example: t('Warehouse aporta Confirmación de envío; D3 aporta Referencia del envío y D1 Datos del pedido para el cargo. Solo con la confirmación correspondiente puede continuar 4.0. Registrar en D4 y emitir estado desde 4.0 son decisiones candidatas.', 'Warehouse supplies Shipping confirmation; D3 supplies Shipping reference and D1 Order data for charge. Process 4.0 can proceed only with the corresponding confirmation. Recording in D4 and issuing status from 4.0 are candidate decisions.'),
    analogy: t('Una mesa que necesita la constancia de una entrega antes de tramitar el cargo asociado.', 'A desk that needs acknowledgment of a delivery before handling the associated charge.'),
    related: ['w3k_warehouse', 'w3k_shipping_orders', 'w3k_orders', 'w3k_payments', 'w3k_zero_shipping_confirmation'],
    notConfuse: t('El número 4.0 no impone por sí solo la condición temporal: la impone la regla descrita. Una orden de envío emitida no basta. No se agrega un servicio de pagos externo.', 'Number 4.0 does not itself impose the timing condition: the stated rule does. An issued shipping order is insufficient. No external payment service is added.'),
    ai: ai(
      t('Extensión IA: detectar posibles cargos sin confirmación o con referencias discordantes.', 'AI extension: detect possible charges without confirmation or with mismatched references.'),
      t('Producir una alerta explicada y vinculada a los registros observados.', 'Produce an explained alert linked to the observed records.'),
      t('La alerta asiste la revisión; no autoriza un cargo ni reemplaza la condición obligatoria del caso.', 'The alert assists review; it does not authorize a charge or replace the mandatory case condition.'),
      t('Validar correspondencia pedido-envío y evidencia recibida. Método, importe, autorizaciones y tratamiento de fallos siguen sin especificarse.', 'Validate order-shipment correspondence and received evidence. Method, amount, authorizations and failure handling remain unspecified.')
    )
  });

  concept('w3k_orders', t('Pedidos', 'Orders'), 'deepening', {
    what: t('D1, almacén lógico propuesto para conservar la información recibida del pedido.', 'D1, a proposed logical store retaining received order information.'),
    why: t('Permite referirse al mismo pedido durante actividades posteriores sin inventar nuevas entradas del cliente.', 'It allows later activities to refer to the same order without inventing new customer inputs.'),
    question: t('¿Qué información del pedido debe estar disponible cuando se procese el cargo?', 'What order information must be available when the charge is processed?'),
    example: t('1.0 registra el pedido en D1; 4.0 consulta datos del pedido para relacionarlos con el envío confirmado. Esta distribución es candidata.', 'Process 1.0 records the order in D1; 4.0 reads order data to relate it to the confirmed shipment. This allocation is a candidate.'),
    analogy: t('La carpeta de un expediente que otras mesas consultan durante el mismo trámite.', 'A case folder that other desks consult during the same procedure.'),
    related: ['w3k_data_store', 'w3k_receive', 'w3k_charge', 'w3k_zero_order_record'],
    notConfuse: t('D1 no es el pedido que viaja en una flecha ni una tecnología elegida. No se ha suministrado su esquema de campos.', 'D1 is neither the order traveling along an arrow nor a chosen technology. Its field schema has not been supplied.'),
    ai: ai(
      t('Extensión IA: extraer o analizar datos de pedidos ya estructurados.', 'AI extension: extract or analyze already structured order data.'),
      t('Localizar información en registros autorizados y citar su origen.', 'Locate information in authorized records and cite its origin.'),
      t('Se añade una vista derivada y revisable sin cambiar el registro fuente.', 'A derived, reviewable view is added without changing the source record.'),
      t('Validar permisos, esquema real y correspondencia exacta; EDI no se reclasifica como texto libre.', 'Validate permissions, the actual schema and exact correspondence; EDI is not reclassified as free text.')
    )
  });

  concept('w3k_inventory', t('Inventario', 'Inventory'), 'deepening', {
    what: t('D2, almacén lógico candidato que proporciona datos de inventario en respuesta a una consulta de 2.0 o de su subproceso 2.2.', 'D2, a candidate logical store supplying inventory data in response to a query from 2.0 or its subprocess 2.2.'),
    why: t('Identifica la fuente de datos utilizada para determinar disponibilidad y conserva la misma referencia al ampliar el proceso.', 'It identifies the data source used to determine availability and retains the same reference when expanding the process.'),
    question: t('¿Qué datos de inventario respaldan la conclusión sobre el pedido?', 'What inventory data supports the conclusion about the order?'),
    example: t('2.0 → Consulta de inventario → D2; D2 → Datos de inventario → 2.0. En el hijo, 2.2 conserva ambos intercambios.', '2.0 → Inventory query → D2; D2 → Inventory data → 2.0. In the child, 2.2 preserves both exchanges.'),
    analogy: t('Un registro de existencias que se consulta; no las estanterías físicas que describe.', 'A stock record that is queried, not the physical shelves it describes.'),
    related: ['w3k_verify', 'w3k_query', 'w3k_determine', 'w3k_warehouse'],
    notConfuse: t('D2 almacena información, no productos. Consultarlo no reserva ni modifica existencias; esas operaciones no están especificadas.', 'D2 stores information, not products. Querying it does not reserve or change stock; those operations are not specified.'),
    ai: ai(
      t('Extensión IA: revisar la calidad y suficiencia de la evidencia de inventario.', 'AI extension: review the quality and sufficiency of inventory evidence.'),
      t('Señalar datos ausentes, contradictorios o de vigencia incierta.', 'Flag missing, contradictory or potentially outdated data.'),
      t('Se añade una observación sobre la consulta y su respuesta, sin cambiar las existencias.', 'An observation about the query and response is added without changing stock.'),
      t('Validar vigencia, significado y origen de los valores; una predicción no equivale a inventario disponible.', 'Validate freshness, meaning and origin of values; a prediction is not available inventory.')
    )
  });

  concept('w3k_shipping_orders', t('Órdenes de envío', 'Shipping orders'), 'deepening', {
    what: t('D3, almacén lógico candidato para conservar las órdenes de envío generadas por 3.0.', 'D3, a candidate logical store retaining shipping orders generated by 3.0.'),
    why: t('Ofrece una referencia para relacionar la confirmación recibida con la orden emitida antes de procesar el cargo.', 'It provides a reference for relating received confirmation to the issued order before processing the charge.'),
    question: t('¿A qué orden de envío corresponde la confirmación recibida?', 'Which shipping order does the received confirmation correspond to?'),
    example: t('3.0 registra la orden en D3; D3 entrega una referencia del envío a 4.0. La confirmación sigue viniendo de Warehouse.', 'Process 3.0 records the order in D3; D3 supplies a shipping reference to 4.0. Confirmation still comes from Warehouse.'),
    analogy: t('El archivo de instrucciones emitidas con el que se coteja una constancia recibida.', 'The file of issued instructions against which a received acknowledgment is checked.'),
    related: ['w3k_shipping', 'w3k_charge', 'w3k_warehouse', 'w3k_data_store'],
    notConfuse: t('Guardar una orden de envío no demuestra que el envío ocurrió. D3 no sustituye la confirmación externa.', 'Storing a shipping order does not prove shipment occurred. D3 does not replace external confirmation.'),
    ai: ai(
      t('Extensión IA: ayudar a cotejar referencias documentales de envío.', 'AI extension: help cross-check documentary shipping references.'),
      t('Sugerir coincidencias y señalar ambigüedades para revisión.', 'Suggest matches and flag ambiguity for review.'),
      t('Se agrega una propuesta de correspondencia; no una confirmación fabricada.', 'A proposed correspondence is added, not a fabricated confirmation.'),
      t('Validar la identificación real del pedido y del envío, cuyo esquema no fue suministrado.', 'Validate actual order and shipment identification, whose schema was not supplied.')
    )
  });

  concept('w3k_payments', t('Pagos', 'Payments'), 'deepening', {
    what: t('D4, almacén lógico candidato para conservar el registro producido al procesar un cargo.', 'D4, a candidate logical store retaining the record produced when a charge is processed.'),
    why: t('Distingue el resultado documentado del procesamiento del cargo de los mensajes de envío que lo preceden.', 'It distinguishes the documented result of charge processing from the shipping messages that precede it.'),
    question: t('¿Qué constancia del procesamiento del cargo debe conservarse?', 'What record of charge processing must be retained?'),
    example: t('4.0 → Registro del cargo → D4. El modelo no proporciona importes, medios de pago ni un proveedor de pagos.', '4.0 → Charge record → D4. The model supplies no amounts, payment methods or payment provider.'),
    analogy: t('Un archivo de constancias del trámite; la carpeta no es una caja de dinero.', 'A file of processing records; the folder is not a cash box.'),
    related: ['w3k_charge', 'w3k_data_store', 'w3k_zero_payment_record'],
    notConfuse: t('La flecha a D4 transporta un registro, no dinero. Conservar un registro no permite asumir que un cargo fue exitoso.', 'The arrow into D4 carries a record, not money. Retaining a record does not justify assuming that a charge succeeded.'),
    ai: ai(
      t('Extensión IA: revisar inconsistencias en los registros del cargo.', 'AI extension: review inconsistencies in charge records.'),
      t('Señalar posibles duplicados o ausencia de evidencia de envío para revisión.', 'Flag possible duplicates or missing shipment evidence for review.'),
      t('Se añade una alerta; no se modifica el historial ni se ejecutan cargos.', 'An alert is added; history is not changed and charges are not executed.'),
      t('Confirmar con registros fuente cada anomalía y las reglas de negocio que aún faltan por definir.', 'Confirm each anomaly against source records and business rules that remain to be defined.')
    )
  });

  concept('w3k_identify', t('Identificar productos solicitados', 'Identify requested products'), 'deepening', {
    what: t('Subproceso 2.1 candidato: interpreta el detalle estructurado del pedido para identificar qué productos se deben consultar.', 'Candidate subprocess 2.1: it interprets structured order detail to identify which products must be queried.'),
    why: t('Hace explícito el vínculo entre lo solicitado y los elementos que se buscarán en inventario.', 'It makes the link between what was requested and the items to be looked up in inventory explicit.'),
    question: t('¿Qué productos del detalle del pedido debe consultar 2.2?', 'Which products from the order detail must 2.2 look up?'),
    example: t('Detalle del pedido → 2.1 → Productos solicitados hacia 2.2, conservando el contexto del pedido necesario para la verificación.', 'Order detail → 2.1 → Requested products to 2.2, retaining the order context needed for verification.'),
    analogy: t('Marcar en una lista los elementos que se van a buscar en un registro.', 'Marking the items in a list that will be looked up in a record.'),
    related: ['w3k_child2_0', 'w3k_receive', 'w3k_query', 'w3k_child_order_detail'],
    notConfuse: t('No convierte el pedido EDI en texto libre ni presupone un catálogo o código de producto concreto.', 'It does not turn the EDI order into free text or assume a specific catalog or product code.'),
    ai: ai(
      t('Extensión IA: ayudar a revisar referencias de productos ambiguas si el caso real las presentara.', 'AI extension: help review ambiguous product references if the actual case presented them.'),
      t('Señalar una referencia que requiere verificación, sin elegir silenciosamente otra.', 'Flag a reference requiring verification without silently selecting another.'),
      t('Se agrega una sugerencia a la identificación; el dato estructurado original se conserva.', 'A suggestion is added to identification; the original structured data is preserved.'),
      t('Validar contra referencias autorizadas y no inventar productos o equivalencias.', 'Validate against authorized references and do not invent products or equivalences.')
    )
  });

  concept('w3k_query', t('Consultar inventario', 'Query inventory'), 'deepening', {
    what: t('Subproceso 2.2 candidato: formula la consulta a D2 para los productos identificados y entrega el pedido junto con los datos de inventario a 2.3.', 'Candidate subprocess 2.2: it formulates the D2 query for identified products and supplies the order together with inventory data to 2.3.'),
    why: t('Separa obtener evidencia de decidir qué significa para la disponibilidad del pedido.', 'It separates obtaining evidence from deciding what that evidence means for order availability.'),
    question: t('¿Qué responde D2 sobre los productos que se están verificando?', 'What does D2 return about the products being checked?'),
    example: t('2.2 envía Consulta de inventario a D2 y recibe Datos de inventario; ambos flujos corresponden a los del proceso padre 2.0.', 'Process 2.2 sends Inventory query to D2 and receives Inventory data; both flows correspond to those of parent process 2.0.'),
    analogy: t('Consultar un registro y llevar la respuesta, junto con la pregunta original, al revisor.', 'Consulting a record and taking the answer, together with the original question, to the reviewer.'),
    related: ['w3k_identify', 'w3k_inventory', 'w3k_determine', 'w3k_child2_0'],
    notConfuse: t('Consultar no es reservar, descontar ni predecir existencias. El transporte tecnológico de la consulta no está especificado.', 'Querying is not reserving, subtracting or predicting stock. The technology transporting the query is not specified.'),
    ai: ai(
      t('Extensión IA: ayudar a describir la consulta y a revisar la suficiencia de su respuesta.', 'AI extension: help describe the query and review the sufficiency of its response.'),
      t('Identificar respuestas incompletas y explicar qué evidencia falta.', 'Identify incomplete responses and explain what evidence is missing.'),
      t('Se agregan observaciones sobre datos obtenidos; la consulta real sigue siendo necesaria.', 'Observations about obtained data are added; the actual query remains necessary.'),
      t('Comprobar que la respuesta corresponde a la consulta y que los datos conservan su contexto.', 'Check that the response corresponds to the query and that the data retains its context.')
    )
  });

  concept('w3k_determine', t('Determinar disponibilidad', 'Determine availability'), 'deepening', {
    what: t('Subproceso 2.3 candidato: evalúa el pedido con la evidencia consultada para producir el pedido validado que sale de 2.0.', 'Candidate subprocess 2.3: it evaluates the order against queried evidence to produce the validated order that leaves 2.0.'),
    why: t('Ubica con precisión la subfunción donde una conclusión debe justificarse con datos y reglas.', 'It precisely locates the subfunction where a conclusion must be justified by data and rules.'),
    question: t('¿Los datos consultados respaldan la validación del pedido según reglas acordadas?', 'Does the queried data support order validation under agreed rules?'),
    example: t('Pedido y datos de inventario → 2.3 → Pedido validado hacia 3.0. Este modelo muestra el recorrido validado; el tratamiento de faltantes queda pendiente.', 'Order and inventory data → 2.3 → Validated order to 3.0. This model shows the validated path; shortage handling remains open.'),
    analogy: t('Un revisor que emite una conclusión sustentada en el expediente, no en una suposición.', 'A reviewer issuing a conclusion supported by the file, not by an assumption.'),
    related: ['w3k_query', 'w3k_inventory', 'w3k_verify', 'w3k_shipping'],
    notConfuse: t('Determinar disponibilidad no significa inventar una política de faltantes, reservar productos, autorizar un cargo ni confirmar un envío.', 'Determining availability does not mean inventing a shortage policy, reserving products, authorizing a charge or confirming shipment.'),
    ai: ai(
      t('Extensión IA al nivel hijo: asistir específicamente la evaluación de evidencia en 2.3.', 'AI extension at child level: specifically assist evidence evaluation in 2.3.'),
      t('Explicar la conclusión propuesta y señalar datos insuficientes o contradictorios.', 'Explain the proposed conclusion and flag insufficient or contradictory data.'),
      t('La ayuda se delimita a una subfunción; el pedido validado conserva su significado y sus criterios pendientes de aprobación.', 'Assistance is bounded to one subfunction; validated order retains its meaning and its criteria awaiting approval.'),
      t('Verificar evidencia de D2, reglas explícitas y revisión responsable. Una respuesta convincente no demuestra disponibilidad.', 'Verify D2 evidence, explicit rules and accountable review. A convincing answer does not demonstrate availability.')
    )
  });

  // Every drawn edge receives its own complete, named pedagogical concept.
  // A flow is data; direction never stands for physical shipment or cash movement.
  function flow(id, label, from, to, level, meaning, why, example, validate) {
    const fromLabel = db.concepts[from].label;
    const toLabel = db.concepts[to].label;
    const levelConcept = { context: 'w3k_context', zero: 'w3k_diagram0', child: 'w3k_child2_0' }[level];
    concept(id, label, level === 'context' ? 'foundation' : 'deepening', {
      what: t(label.es + ': datos de ' + fromLabel.es + ' hacia ' + toLabel.es + '. ' + meaning.es, label.en + ': data from ' + fromLabel.en + ' to ' + toLabel.en + '. ' + meaning.en),
      why,
      question: t('¿Qué contiene "' + label.es + '" y por qué lo necesita ' + toLabel.es + '?', 'What does "' + label.en + '" contain and why does ' + toLabel.en + ' need it?'),
      example,
      analogy: t('Un sobre llamado "' + label.es + '" enviado por ' + fromLabel.es + ' a ' + toLabel.es + '; el contenido es información.', 'An envelope named "' + label.en + '" sent by ' + fromLabel.en + ' to ' + toLabel.en + '; its content is information.'),
      related: [from, to, 'w3k_data_flow', levelConcept],
      notConfuse: t('"' + label.es + '" es un mensaje de datos, no movimiento físico ni una instrucción de control. ' + (level === 'context' ? 'El intercambio está aportado por el caso; su formato detallado no está especificado.' : 'Su ubicación interna es una interpretación candidata; no agrega un hecho al caso.'), '"' + label.en + '" is a data message, not physical movement or a control instruction. ' + (level === 'context' ? 'The exchange is supplied by the case; its detailed format is unspecified.' : 'Its internal allocation is a candidate interpretation; it adds no fact to the case.')),
      ai: ai(
        t('Extensión IA: revisar el significado y la trazabilidad del flujo "' + label.es + '".', 'AI extension: review the meaning and traceability of the "' + label.en + '" flow.'),
        t('Contrastar la información enviada por ' + fromLabel.es + ' con la que necesita ' + toLabel.es + ' y explicar discrepancias.', 'Compare information sent by ' + fromLabel.en + ' with what ' + toLabel.en + ' needs and explain discrepancies.'),
        t('Se agrega una observación revisable sobre "' + label.es + '"; se mantienen origen, destino y nivel del modelo BASE.', 'A reviewable observation about "' + label.en + '" is added; the source, destination and level of the BASE model are preserved.'),
        validate
      )
    });
  }

  flow('w3k_context_edi', t('Pedido vía EDI', 'EDI order'), 'w3k_customer', 'w3k_system', 'context',
    t('Entrada estructurada del cliente indicada en el caso.', 'Structured customer input specified in the case.'),
    t('Fija el origen del pedido y evita sustituir el canal aportado por un ejemplo de texto libre.', 'It establishes the order source and avoids replacing the supplied channel with a free-text example.'),
    t('Customer entrega un pedido mediante EDI al sistema; no se ha suministrado un mensaje EDI concreto.', 'Customer delivers an order through EDI to the system; no specific EDI message has been supplied.'),
    t('Conservar el carácter estructurado del EDI y comprobar cualquier campo contra un esquema real suministrado.', 'Preserve the structured nature of EDI and check any field against an actual supplied schema.'));
  flow('w3k_context_status', t('Estado del pedido', 'Order status'), 'w3k_system', 'w3k_customer', 'context',
    t('Salida informativa del sistema hacia Customer indicada en el caso.', 'Informational system output to Customer specified in the case.'),
    t('Reconoce que el cliente recibe información sobre el pedido además de enviarlo.', 'It recognizes that the customer receives order information as well as sending the order.'),
    t('Sistema → Estado del pedido → Customer. No se han enumerado los estados ni su frecuencia.', 'System → Order status → Customer. Status values and frequency have not been enumerated.'),
    t('No inventar estados, promesas, fechas ni éxito de pago; verificar que la información corresponde al pedido.', 'Do not invent statuses, promises, dates or payment success; verify that the information corresponds to the order.'));
  flow('w3k_context_shipping', t('Orden de envío', 'Shipping order'), 'w3k_system', 'w3k_warehouse', 'context',
    t('Información de la orden que el sistema envía a Warehouse.', 'Order information the system sends to Warehouse.'),
    t('Distingue la solicitud informativa de envío de la confirmación posterior.', 'It distinguishes the informational shipping request from subsequent confirmation.'),
    t('Sistema → Orden de envío → Warehouse; la flecha no transporta el producto.', 'System → Shipping order → Warehouse; the arrow does not carry the product.'),
    t('Verificar que una orden emitida no se trate como prueba de envío realizado.', 'Verify that an issued order is not treated as proof of completed shipment.'));
  flow('w3k_context_confirmation', t('Confirmación de envío', 'Shipping confirmation'), 'w3k_warehouse', 'w3k_system', 'context',
    t('Información que Warehouse devuelve al sistema sobre el envío.', 'Information Warehouse returns to the system about shipment.'),
    t('Aporta la evidencia de envío necesaria para respetar que el cargo se procesa después.', 'It supplies shipment evidence needed to respect charge processing afterward.'),
    t('Warehouse → Confirmación de envío → Sistema; no es una confirmación de pago.', 'Warehouse → Shipping confirmation → System; it is not payment confirmation.'),
    t('Validar que la confirmación existe, corresponde al pedido y no ha sido inferida por IA.', 'Validate that confirmation exists, corresponds to the order and has not been inferred by AI.'));

  flow('w3k_zero_edi', t('Pedido vía EDI', 'EDI order'), 'w3k_customer', 'w3k_receive', 'zero',
    t('El flujo externo del contexto entra ahora al proceso candidato 1.0.', 'The context external flow now enters candidate process 1.0.'),
    t('Conserva el mismo intercambio externo mientras precisa su receptor interno.', 'It preserves the same external exchange while specifying its internal recipient.'),
    t('Customer → Pedido vía EDI → 1.0 Recibir pedido.', 'Customer → EDI order → 1.0 Receive order.'),
    t('Conservar nombre y significado del flujo del contexto; no agregar texto libre como entrada del caso.', 'Preserve the context flow name and meaning; do not add free text as a case input.'));
  flow('w3k_zero_status', t('Estado del pedido', 'Order status'), 'w3k_charge', 'w3k_customer', 'zero',
    t('Salida externa conservada. Ubicar su emisión en 4.0 es una simplificación candidata del recorrido mostrado.', 'Preserved external output. Locating its emission in 4.0 is a candidate simplification of the path shown.'),
    t('Mantiene el retorno informativo al cliente sin inventar un quinto proceso.', 'It preserves the informational return to the customer without inventing a fifth process.'),
    t('4.0 entrega un estado relacionado con el procesamiento del pedido; el caso no especifica el repertorio de estados ni si existen avisos anteriores.', 'Process 4.0 provides a status related to order processing; the case specifies neither the set of statuses nor whether earlier notifications exist.'),
    t('Confirmar la asignación del estado a 4.0 con el responsable del caso; no asumir cargo exitoso ni excluir otros momentos reales sin evidencia.', 'Confirm status allocation to 4.0 with the case owner; do not assume successful charging or exclude other actual notification times without evidence.'));
  flow('w3k_zero_order_record', t('Pedido registrado', 'Order record'), 'w3k_receive', 'w3k_orders', 'zero',
    t('Registro candidato de los datos del pedido recibido para su uso posterior.', 'Candidate record of received order data for later use.'),
    t('Explica de dónde obtiene D1 la información que después consulta 4.0.', 'It explains where D1 obtains the information that 4.0 later reads.'),
    t('1.0 → Pedido registrado → D1 Pedidos.', '1.0 → Order record → D1 Orders.'),
    t('Validar qué debe conservarse y cómo se relaciona con el EDI original, sin inventar campos.', 'Validate what must be retained and how it relates to the original EDI without inventing fields.'));
  flow('w3k_zero_order_detail', t('Detalle del pedido', 'Order detail'), 'w3k_receive', 'w3k_verify', 'zero',
    t('Entrada del proceso 2.0 con la información necesaria para identificar lo solicitado.', 'Process 2.0 input containing the information needed to identify what was requested.'),
    t('Establece una entrada del padre que debe conservarse cuando se abre su hijo.', 'It establishes a parent input that must be preserved when its child is opened.'),
    t('1.0 → Detalle del pedido → 2.0; en el hijo el mismo flujo llega a 2.1.', '1.0 → Order detail → 2.0; in the child the same flow reaches 2.1.'),
    t('Verificar que el hijo conserva el mismo detalle y no pierde el contexto necesario del pedido.', 'Verify that the child retains the same detail and does not lose necessary order context.'));
  flow('w3k_zero_inventory_query', t('Consulta de inventario', 'Inventory query'), 'w3k_verify', 'w3k_inventory', 'zero',
    t('Solicitud de datos de 2.0 hacia D2; forma parte de la interfaz del padre.', 'Data request from 2.0 to D2; it is part of the parent interface.'),
    t('Explicita qué proceso solicita la evidencia y evita una lectura sin solicitud representada.', 'It makes the evidence-requesting process explicit and avoids depicting a read without a represented request.'),
    t('2.0 → Consulta de inventario → D2; el hijo conserva la consulta desde 2.2.', '2.0 → Inventory query → D2; the child preserves the query from 2.2.'),
    t('Conservar la consulta en el hijo y no confundirla con una reserva o actualización de existencias.', 'Preserve the query in the child and do not confuse it with a stock reservation or update.'));
  flow('w3k_zero_inventory_data', t('Datos de inventario', 'Inventory data'), 'w3k_inventory', 'w3k_verify', 'zero',
    t('Respuesta de D2 con evidencia para la verificación del pedido.', 'D2 response containing evidence for order verification.'),
    t('Impide representar una verificación que produzca conclusiones sin datos de inventario.', 'It prevents depicting verification that produces conclusions without inventory data.'),
    t('D2 → Datos de inventario → 2.0; el hijo recibe la misma respuesta en 2.2.', 'D2 → Inventory data → 2.0; the child receives the same response in 2.2.'),
    t('Comprobar correspondencia con la consulta y vigencia de los datos; no sustituirlos por una predicción.', 'Check correspondence with the query and data freshness; do not replace them with a prediction.'));
  flow('w3k_zero_validated_order', t('Pedido validado', 'Validated order'), 'w3k_verify', 'w3k_shipping', 'zero',
    t('Resultado del recorrido de verificación que se entrega a 3.0 para generar la orden de envío.', 'Result of the verification path supplied to 3.0 to generate the shipping order.'),
    t('Define la salida del padre que debe conservar el subproceso 2.3.', 'It defines the parent output that subprocess 2.3 must preserve.'),
    t('2.0 → Pedido validado → 3.0; en el hijo procede de 2.3 con el mismo significado.', '2.0 → Validated order → 3.0; in the child it comes from 2.3 with the same meaning.'),
    t('Validar criterios de disponibilidad y la conservación del pedido; faltantes, reservas y excepciones permanecen pendientes.', 'Validate availability criteria and retention of the order; shortages, reservations and exceptions remain open.'));
  flow('w3k_zero_shipping_order', t('Orden de envío', 'Shipping order'), 'w3k_shipping', 'w3k_warehouse', 'zero',
    t('El intercambio externo del contexto se asigna al proceso candidato 3.0.', 'The context external exchange is allocated to candidate process 3.0.'),
    t('Relaciona el resultado de verificación con la información enviada a Warehouse.', 'It relates the verification result to information sent to Warehouse.'),
    t('3.0 → Orden de envío → Warehouse.', '3.0 → Shipping order → Warehouse.'),
    t('Conservar el intercambio del contexto y no interpretar la instrucción como un envío ya confirmado.', 'Preserve the context exchange and do not interpret the instruction as an already confirmed shipment.'));
  flow('w3k_zero_shipping_record', t('Orden de envío registrada', 'Shipping order record'), 'w3k_shipping', 'w3k_shipping_orders', 'zero',
    t('Copia lógica candidata de la orden emitida, conservada en D3.', 'Candidate logical copy of the issued order retained in D3.'),
    t('Permite cotejar posteriormente la confirmación con una orden emitida identificable.', 'It allows later comparison of confirmation with an identifiable issued order.'),
    t('3.0 → Orden de envío registrada → D3.', '3.0 → Shipping order record → D3.'),
    t('Comprobar que el registro corresponde a la orden emitida, sin tratarlo como confirmación de Warehouse.', 'Check that the record corresponds to the issued order without treating it as Warehouse confirmation.'));
  flow('w3k_zero_shipping_confirmation', t('Confirmación de envío', 'Shipping confirmation'), 'w3k_warehouse', 'w3k_charge', 'zero',
    t('Entrada externa a 4.0 que aporta la evidencia requerida antes de procesar el cargo del pedido correspondiente.', 'External input to 4.0 supplying the evidence required before processing the corresponding order charge.'),
    t('Representa la dependencia semántica del cargo respecto del envío confirmado, además de conservar el flujo del contexto.', 'It represents the semantic dependency of charging on confirmed shipment as well as preserving the context flow.'),
    t('Warehouse → Confirmación de envío → 4.0. Sin esta confirmación correspondiente no se habilita el cargo.', 'Warehouse → Shipping confirmation → 4.0. Without this corresponding confirmation the charge is not enabled.'),
    t('Exigir evidencia recibida del envío y correspondencia con el pedido; una alerta o inferencia de IA no habilita el cargo.', 'Require received shipment evidence and correspondence with the order; an AI alert or inference does not enable charging.'));
  flow('w3k_zero_shipping_reference', t('Referencia del envío', 'Shipping reference'), 'w3k_shipping_orders', 'w3k_charge', 'zero',
    t('Datos candidatos de D3 que permiten relacionar la orden emitida con la confirmación recibida.', 'Candidate D3 data allowing the issued order to be related to received confirmation.'),
    t('Evita usar una confirmación aislada sin referencia al envío que se está tramitando.', 'It avoids using an isolated confirmation without reference to the shipment being handled.'),
    t('D3 → Referencia del envío → 4.0, junto con la confirmación externa y los datos del pedido de D1.', 'D3 → Shipping reference → 4.0, alongside external confirmation and D1 order data.'),
    t('Validar la correspondencia documental sin inventar claves concretas ni deducir que la referencia prueba el envío.', 'Validate documentary correspondence without inventing specific keys or inferring that the reference proves shipment.'));
  flow('w3k_zero_charge_order_data', t('Datos del pedido para el cargo', 'Order data for charge'), 'w3k_orders', 'w3k_charge', 'zero',
    t('Consulta candidata de la información conservada del pedido que se relaciona con el cargo.', 'Candidate read of retained order information related to the charge.'),
    t('Proporciona contexto del pedido a 4.0 sin inventar una nueva entrada externa o suponer que una confirmación contiene todos los datos.', 'It supplies order context to 4.0 without inventing a new external input or assuming a confirmation contains all data.'),
    t('D1 → Datos del pedido para el cargo → 4.0. El esquema exacto y la información necesaria para ejecutar un cargo real no fueron aportados.', 'D1 → Order data for charge → 4.0. The exact schema and information needed to execute an actual charge were not supplied.'),
    t('Confirmar suficiencia y correspondencia de los datos; no inventar importes, credenciales ni medios de pago.', 'Confirm data sufficiency and correspondence; do not invent amounts, credentials or payment methods.'));
  flow('w3k_zero_payment_record', t('Registro del cargo', 'Charge record'), 'w3k_charge', 'w3k_payments', 'zero',
    t('Salida candidata que conserva información del procesamiento del cargo en D4.', 'Candidate output retaining charge-processing information in D4.'),
    t('Permite distinguir lo procesado y documentado de la mera existencia de una orden de envío.', 'It distinguishes what was processed and documented from the mere existence of a shipping order.'),
    t('4.0 → Registro del cargo → D4 Pagos; la flecha representa datos, no transferencia de dinero.', '4.0 → Charge record → D4 Payments; the arrow represents data, not a transfer of money.'),
    t('Validar contra el resultado real del procesamiento; no asumir éxito, reintentos ni políticas no suministradas.', 'Validate against the actual processing result; do not assume success, retries or policies not supplied.'));

  flow('w3k_child_order_detail', t('Detalle del pedido', 'Order detail'), 'w3k_receive', 'w3k_identify', 'child',
    t('La entrada del padre 2.0 se conserva y llega a su primer subproceso 2.1.', 'Parent 2.0 input is preserved and reaches its first subprocess 2.1.'),
    t('Permite comparar el borde del hijo con la entrada del padre sin perder información.', 'It supports comparing the child boundary with the parent input without losing information.'),
    t('Referencia de borde 1.0 → Detalle del pedido → 2.1 dentro de 2.0.', 'Boundary reference 1.0 → Order detail → 2.1 inside 2.0.'),
    t('Conservar el significado del Detalle del pedido del Diagrama 0; 1.0 permanece fuera del alcance interno del hijo.', 'Preserve the meaning of Order detail from Diagram 0; 1.0 remains outside the child internal scope.'));
  flow('w3k_child_identified_products', t('Productos solicitados', 'Requested products'), 'w3k_identify', 'w3k_query', 'child',
    t('Flujo interno candidato que identifica lo solicitado y conserva el contexto del pedido necesario para consultar y validar.', 'Candidate internal flow identifying what was requested and retaining order context needed for querying and validation.'),
    t('Explica cómo obtiene 2.2 el objeto de su consulta sin crear una entrada nueva al padre.', 'It explains how 2.2 obtains what it must query without creating a new parent input.'),
    t('2.1 → Productos solicitados → 2.2; no se especifican códigos ni campos concretos.', '2.1 → Requested products → 2.2; specific codes or fields are not specified.'),
    t('Verificar que se conserva el contexto necesario del pedido y que no se inventan productos ni equivalencias.', 'Verify that necessary order context is retained and products or equivalences are not invented.'));
  flow('w3k_child_inventory_query', t('Consulta de inventario', 'Inventory query'), 'w3k_query', 'w3k_inventory', 'child',
    t('La consulta de 2.0 hacia D2 se realiza dentro del hijo desde 2.2, con el mismo significado.', 'The query from 2.0 to D2 is performed inside the child by 2.2 with the same meaning.'),
    t('Conserva una salida del padre que de otro modo podría desaparecer al hacer zoom.', 'It preserves a parent output that might otherwise disappear during zoom.'),
    t('2.2 → Consulta de inventario → D2, que es el mismo almacén del Diagrama 0.', '2.2 → Inventory query → D2, the same store as in Diagram 0.'),
    t('Verificar mismo destino D2 y misma solicitud lógica del padre; no agregar reservas ni escrituras.', 'Verify the same D2 destination and same logical request as in the parent; do not add reservations or writes.'));
  flow('w3k_child_inventory_data', t('Datos de inventario', 'Inventory data'), 'w3k_inventory', 'w3k_query', 'child',
    t('Respuesta del mismo D2 que se conserva como entrada del padre, ahora recibida por 2.2.', 'Response from the same D2 preserved as a parent input, now received by 2.2.'),
    t('Mantiene visible la procedencia de la evidencia utilizada por 2.3.', 'It keeps the origin of evidence used by 2.3 visible.'),
    t('D2 → Datos de inventario → 2.2; después se transmiten dentro del hijo a 2.3.', 'D2 → Inventory data → 2.2; the data is then transmitted within the child to 2.3.'),
    t('Confirmar equivalencia con la respuesta del padre y trazabilidad hasta D2, sin rellenar datos faltantes con IA.', 'Confirm equivalence with the parent response and traceability to D2 without filling missing data with AI.'));
  flow('w3k_child_availability_input', t('Pedido y datos de inventario', 'Order and inventory data'), 'w3k_query', 'w3k_determine', 'child',
    t('Flujo interno candidato que combina el contexto del pedido con la respuesta consultada para evaluar disponibilidad.', 'Candidate internal flow combining order context with the queried response to evaluate availability.'),
    t('Evita que 2.3 reciba existencias sin saber qué se solicitó o un pedido sin evidencia de inventario.', 'It prevents 2.3 from receiving stock information without knowing what was requested or an order without inventory evidence.'),
    t('2.2 → Pedido y datos de inventario → 2.3; los datos proceden de entradas existentes del padre.', '2.2 → Order and inventory data → 2.3; the data comes from existing parent inputs.'),
    t('Comprobar que pedido y respuesta corresponden entre sí y que el flujo no introduce datos externos nuevos.', 'Check that the order and response correspond to each other and that the flow introduces no new external data.'));
  flow('w3k_child_validated_order', t('Pedido validado', 'Validated order'), 'w3k_determine', 'w3k_shipping', 'child',
    t('Salida de 2.3 que cruza el borde de 2.0 hacia la referencia externa al hijo 3.0.', 'Output from 2.3 crossing the 2.0 boundary toward 3.0, a reference external to the child.'),
    t('Conserva la salida del padre a la vez que explica qué subfunción la produce.', 'It preserves the parent output while explaining which subfunction produces it.'),
    t('2.3 → Pedido validado → referencia 3.0, equivalente a 2.0 → Pedido validado → 3.0 en el padre.', '2.3 → Validated order → reference 3.0, equivalent to 2.0 → Validated order → 3.0 in the parent.'),
    t('Conservar significado, destinatario y criterios acordados; no convertir validado en enviado ni agregar tratamiento de faltantes no definido.', 'Preserve meaning, recipient and agreed criteria; do not turn validated into shipped or add undefined shortage handling.'));

  concept('w3k_ai_dfd', t('IA sobre flujos y procesos', 'AI on flows and processes'), 'ai', {
    what: t('Extensión IA hipotética, no atribuida a Tiffin, para explorar cuatro intervenciones concretas sobre un DFD: interpretar flujos, asistir procesos, extraer datos y detectar anomalías.', 'A hypothetical AI extension, not attributed to Tiffin, exploring four specific interventions on a DFD: interpreting flows, assisting processes, extracting data and detecting anomalies.'),
    why: t('Ayuda a precisar qué transformación podría asistir la IA y con qué evidencia.', 'It helps specify which transformation AI could assist and with what evidence.'),
    question: t('¿Dónde puede participar la IA en un flujo de información sin alterar los hechos del caso?', 'Where can AI participate in an information flow without changing the case facts?'),
    example: t('Interpretar una etiqueta de flujo, asistir 2.0, extraer datos de D1 y advertir un cargo sin confirmación. El ejemplo de solicitud no estructurada se muestra aparte del EDI.', 'Interpret a flow label, assist 2.0, extract data from D1 and flag a charge without confirmation. The unstructured-request example is shown separately from EDI.'),
    analogy: t('Cuatro notas del analista adheridas a lugares concretos del plano.', 'Four analyst notes attached to specific places on the plan.'),
    related: ['w3k_ai_interpret', 'w3k_ai_assist', 'w3k_ai_extract', 'w3k_ai_anomalies'],
    notConfuse: t('Las relaciones de la lente son anotaciones de capacidades, no nuevas flechas de datos del caso. La IA no conecta todo ni reemplaza BASE.', 'Lens relationships are capability annotations, not new case data arrows. AI does not connect everything or replace BASE.'),
    ai: ai(
      t('Cada conexión nombra una acción y un objetivo específicos.', 'Each connection names a specific action and target.'),
      t('Producir propuestas, extracciones y alertas con trazabilidad.', 'Produce traceable proposals, extractions and alerts.'),
      t('Se amplía la interpretación pedagógica conservando todos los nodos y flujos BASE.', 'The teaching interpretation is extended while preserving every BASE node and flow.'),
      t('Validar datos, reglas y alcance; estas capacidades no son hechos del caso ni contenido IA atribuido al curso.', 'Validate data, rules and scope; these capabilities are not case facts or AI content attributed to the course.')
    )
  });

  concept('w3k_ai_interpret', t('Interpretar y clasificar un flujo', 'Interpret and classify a flow'), 'ai', {
    what: t('Extensión IA hipotética conectada a Flujo de datos para interpretar qué tipo de información viaja.', 'A hypothetical AI extension connected to Data flow to interpret what type of information travels.'),
    why: t('Una clasificación explícita ayuda a distinguir pedido, estado y confirmación sin confundir sus funciones.', 'An explicit classification helps distinguish an order, status and confirmation without confusing their roles.'),
    question: t('¿La categoría propuesta refleja el contenido real del mensaje?', 'Does the proposed category reflect the actual message content?'),
    example: t('La IA podría señalar que Confirmación de envío contiene evidencia de envío y no una autorización de pago.', 'AI could point out that Shipping confirmation contains shipment evidence and not payment authorization.'),
    analogy: t('Un lector que propone la etiqueta del sobre y explica su elección.', 'A reader proposing the envelope label and explaining the choice.'),
    related: ['w3k_ai_dfd', 'w3k_data_flow', 'w3k_context_confirmation'],
    notConfuse: t('Clasificar el significado de un mensaje no implica que sea no estructurado. El pedido del caso usa EDI.', 'Classifying a message meaning does not imply that it is unstructured. The case order uses EDI.'),
    ai: ai(
      t('Objetivo de la relación: el concepto Flujo de datos.', 'Relationship target: the Data flow concept.'),
      t('Proponer una categoría y explicar la evidencia que la respalda.', 'Propose a category and explain its supporting evidence.'),
      t('Se agrega una categoría revisable, sin alterar el mensaje original ni sus endpoints.', 'A reviewable category is added without altering the original message or its endpoints.'),
      t('Revisar significado, estructura y errores de clasificación; no aceptar una inferencia como dato recibido.', 'Review meaning, structure and classification errors; do not accept an inference as received data.')
    )
  });

  concept('w3k_ai_assist', t('Asistir la verificación', 'Assist verification'), 'ai', {
    what: t('Extensión IA hipotética conectada al proceso 2.0 Verificar inventario para asistir una transformación concreta.', 'A hypothetical AI extension connected to process 2.0 Verify inventory to assist a specific transformation.'),
    why: t('Permite evaluar una ayuda con entradas y salidas conocidas, en lugar de atribuirle toda la operación del sistema.', 'It enables evaluation of assistance with known inputs and outputs instead of attributing the whole system operation to it.'),
    question: t('¿Qué parte de la verificación puede asistir la IA y qué debe resolver una regla validada?', 'Which part of verification can AI assist and what must a validated rule resolve?'),
    example: t('Con detalle del pedido y datos reales de D2, la IA podría explicar una inconsistencia para que un responsable la revise.', 'Given order detail and actual D2 data, AI could explain an inconsistency for an accountable reviewer.'),
    analogy: t('Un ayudante que organiza la evidencia en la mesa del revisor.', 'An assistant organizing evidence on the reviewer desk.'),
    related: ['w3k_ai_dfd', 'w3k_verify', 'w3k_inventory', 'w3k_ai_zero'],
    notConfuse: t('Asistir no equivale a inventar reglas de disponibilidad ni a reemplazar la consulta de inventario.', 'Assisting does not mean inventing availability rules or replacing the inventory query.'),
    ai: ai(
      t('Objetivo de la relación: 2.0 Verificar inventario.', 'Relationship target: 2.0 Verify inventory.'),
      t('Comparar información del pedido con la evidencia y explicar posibles discrepancias.', 'Compare order information with evidence and explain possible discrepancies.'),
      t('Añade apoyo a la transformación; mantiene Detalle del pedido, Consulta de inventario, Datos de inventario y Pedido validado.', 'It adds transformation support; it preserves Order detail, Inventory query, Inventory data and Validated order.'),
      t('Comprobar reglas aprobadas, vigencia de D2 y fundamento de cada sugerencia.', 'Check approved rules, D2 freshness and the basis for every suggestion.')
    )
  });

  concept('w3k_ai_extract', t('Extraer y analizar datos del pedido', 'Extract and analyze order data'), 'ai', {
    what: t('Extensión IA hipotética conectada a D1 Pedidos para obtener una vista derivada de registros autorizados.', 'A hypothetical AI extension connected to D1 Orders to obtain a derived view of authorized records.'),
    why: t('Hace explícito el origen de los datos analizados y la necesidad de verificar cada valor extraído.', 'It makes the source of analyzed data and the need to verify each extracted value explicit.'),
    question: t('¿De qué registro procede cada dato que presenta la IA?', 'Which record does each data item presented by AI come from?'),
    example: t('La IA podría localizar información de un pedido registrado en D1 según un esquema que aún debe suministrarse. Los datos EDI ya son estructurados.', 'AI could locate information from an order recorded in D1 using a schema that still must be supplied. EDI data is already structured.'),
    analogy: t('Un índice que señala el documento y el lugar donde se encuentra un dato.', 'An index pointing to the document and location where a data item is found.'),
    related: ['w3k_ai_dfd', 'w3k_orders', 'w3k_data_store', 'w3k_receive'],
    notConfuse: t('Extraer no autoriza a completar valores ausentes ni convierte D1 en un conjunto de textos libres.', 'Extraction does not authorize completing absent values or turn D1 into a collection of free texts.'),
    ai: ai(
      t('Objetivo de la relación: D1 Pedidos.', 'Relationship target: D1 Orders.'),
      t('Localizar, resumir o analizar valores con referencias a los registros originales.', 'Locate, summarize or analyze values with references to original records.'),
      t('Se obtiene información derivada revisable; el registro conservado permanece como evidencia.', 'Reviewable derived information is obtained; the retained record remains the evidence.'),
      t('Verificar permisos, esquema, trazabilidad y exactitud; comparar cada resultado con su origen.', 'Verify permissions, schema, traceability and accuracy; compare each result with its source.')
    )
  });

  concept('w3k_ai_anomalies', t('Detectar anomalías antes del cargo', 'Detect anomalies before charging'), 'ai', {
    what: t('Extensión IA hipotética conectada a 4.0 para señalar incoherencias entre el pedido, la referencia de envío y su confirmación.', 'A hypothetical AI extension connected to 4.0 to flag inconsistencies between the order, shipping reference and confirmation.'),
    why: t('Concentra la revisión en la dependencia obligatoria: procesar el cargo después del envío confirmado.', 'It focuses review on the mandatory dependency: processing the charge after confirmed shipment.'),
    question: t('¿Hay evidencia correspondiente del envío antes de este cargo?', 'Is there corresponding shipment evidence before this charge?'),
    example: t('Una alerta hipotética indica que falta una confirmación correspondiente; la ausencia debe resolverse con evidencia real, no con una inferencia.', 'A hypothetical alert indicates that corresponding confirmation is missing; the absence must be resolved with actual evidence, not inference.'),
    analogy: t('Una nota de revisión que pide cotejar una constancia antes de continuar el trámite.', 'A review note requesting that an acknowledgment be checked before continuing the procedure.'),
    related: ['w3k_ai_dfd', 'w3k_charge', 'w3k_shipping_orders', 'w3k_zero_shipping_confirmation'],
    notConfuse: t('Una anomalía sugerida no prueba un error. La ausencia de alerta tampoco autoriza el cargo; la confirmación sigue siendo obligatoria.', 'A suggested anomaly does not prove an error. Absence of an alert does not authorize charging either; confirmation remains mandatory.'),
    ai: ai(
      t('Objetivo de la relación: 4.0 Procesar cargo.', 'Relationship target: 4.0 Process charge.'),
      t('Señalar referencias discordantes o evidencia ausente y explicar por qué requieren revisión.', 'Flag mismatched references or missing evidence and explain why they require review.'),
      t('Añade una alerta de apoyo; la regla de esperar la confirmación debe cumplirse independientemente de la IA.', 'It adds a supporting alert; the rule requiring confirmation must hold independently of AI.'),
      t('Cotejar registros originales, errores de alerta y responsabilidad de la decisión; no ejecutar un cargo desde una recomendación.', 'Cross-check original records, alert errors and decision accountability; do not execute a charge from a recommendation.')
    )
  });

  concept('w3k_ai_unstructured', t('Solicitud no estructurada: ejemplo IA', 'Unstructured request: AI example'), 'ai', {
    what: t('Entrada hipotética de texto libre utilizada solo para ilustrar una extensión IA. No es el pedido EDI de Kitchen Gadgets.', 'A hypothetical free-text input used only to illustrate an AI extension. It is not the Kitchen Gadgets EDI order.'),
    why: t('Permite explicar una transformación asistida por IA sin cambiar los datos del caso académico.', 'It enables explanation of an AI-assisted transformation without changing the academic case data.'),
    question: t('¿Qué información explícita contiene este texto de ejemplo?', 'What explicit information does this example text contain?'),
    example: t('Ejemplo inventado y separado: "Quiero consultar el estado de mi solicitud". No se atribuye este canal a Kitchen Gadgets.', 'Invented, separate example: "I want to check the status of my request." This channel is not attributed to Kitchen Gadgets.'),
    analogy: t('Una nota sin casillas que alguien ayuda a ordenar.', 'A note without form fields that someone helps organize.'),
    related: ['w3k_ai_classification', 'w3k_ai_structured', 'w3k_ai_dfd'],
    notConfuse: t('No describe una entrada BASE ni sustituye Pedido vía EDI.', 'It does not describe a BASE input or replace EDI order.'),
    ai: ai(
      t('Ejemplo independiente de una entrada para clasificación IA.', 'Independent example of an input for AI classification.'),
      t('Leer el texto aportado y distinguir su contenido explícito de datos ausentes.', 'Read the supplied text and distinguish its explicit content from absent data.'),
      t('El texto podría convertirse en una propuesta estructurada para revisión.', 'The text could become a structured proposal for review.'),
      t('No inferir identidad, número de pedido ni canal de contacto que el ejemplo no proporciona.', 'Do not infer identity, order number or contact channel that the example does not provide.')
    )
  });

  concept('w3k_ai_classification', t('Clasificación IA: ejemplo', 'AI classification: example'), 'ai', {
    what: t('Transformación hipotética del ejemplo separado: propone una categoría para la solicitud no estructurada.', 'A hypothetical transformation in the separate example: it proposes a category for the unstructured request.'),
    why: t('Muestra una función precisa de IA entre una entrada y una salida comprensibles.', 'It shows a precise AI function between understandable input and output.'),
    question: t('¿La categoría sugerida puede justificarse con el texto disponible?', 'Can the suggested category be justified by the available text?'),
    example: t('Para "Quiero consultar el estado de mi solicitud", la categoría candidata es Consulta de estado.', 'For "I want to check the status of my request", the candidate category is Status inquiry.'),
    analogy: t('Ordenar una nota en una bandeja rotulada y dejar la elección disponible para revisión.', 'Sorting a note into a labeled tray and leaving the choice available for review.'),
    related: ['w3k_ai_unstructured', 'w3k_ai_structured', 'w3k_ai_interpret'],
    notConfuse: t('Una categoría sugerida no resuelve la solicitud ni demuestra que el sistema BASE tenga ese canal.', 'A suggested category does not resolve the request or prove that the BASE system has that channel.'),
    ai: ai(
      t('La IA asiste específicamente la clasificación del texto del ejemplo.', 'AI specifically assists classification of the example text.'),
      t('Proponer Consulta de estado y explicar qué palabras sostienen la propuesta.', 'Propose Status inquiry and explain which words support the proposal.'),
      t('Se agrega una categoría con estado de propuesta, sin completar información ausente.', 'A category with proposal status is added without completing absent information.'),
      t('Revisar la clasificación y disponer de un tratamiento acordado para ambigüedad o insuficiencia de datos.', 'Review the classification and provide agreed handling for ambiguity or insufficient data.')
    )
  });

  concept('w3k_ai_structured', t('Datos estructurados propuestos: ejemplo', 'Proposed structured data: example'), 'ai', {
    what: t('Salida hipotética del ejemplo IA separado, organizada en campos revisables a partir de información explícita.', 'Hypothetical output of the separate AI example, organized into reviewable fields from explicit information.'),
    why: t('Hace visible el resultado de la transformación y permite comprobarlo contra el texto original.', 'It makes the transformation result visible and allows it to be checked against the original text.'),
    question: t('¿Cada valor propuesto tiene respaldo en la entrada o está marcado como ausente?', 'Does every proposed value have support in the input or is it marked as absent?'),
    example: t('Propuesta ilustrativa: categoría = Consulta de estado; referencia de solicitud = no proporcionada. No constituye un esquema del caso.', 'Illustrative proposal: category = Status inquiry; request reference = not provided. It is not a case schema.'),
    analogy: t('Una ficha preliminar completada solo con lo que realmente dice la nota.', 'A preliminary form completed only with what the note actually says.'),
    related: ['w3k_ai_unstructured', 'w3k_ai_classification', 'w3k_data_flow'],
    notConfuse: t('Estructurado no significa correcto ni validado. Esta salida no es el pedido EDI ni se incorpora a los grafos BASE.', 'Structured does not mean correct or validated. This output is not the EDI order and is not inserted into the BASE graphs.'),
    ai: ai(
      t('La IA propone un resultado estructurado de la clasificación ilustrativa.', 'AI proposes a structured result of the illustrative classification.'),
      t('Conservar texto fuente, categoría propuesta y ausencia de datos sin rellenarla.', 'Retain source text, proposed category and data absence without filling it.'),
      t('Se obtiene una propuesta revisable, pendiente de validación antes de cualquier uso operativo.', 'A reviewable proposal is obtained, awaiting validation before any operational use.'),
      t('Comprobar exactitud y datos faltantes; no confundir formato estructurado con evidencia de veracidad.', 'Check accuracy and missing data; do not confuse structured format with evidence of truth.')
    )
  });

  concept('w3k_ai_zoom', t('IA según el nivel de detalle', 'AI by level of detail'), 'ai', {
    what: t('Extensión IA hipotética que cambia la precisión de su explicación al pasar de contexto a Diagrama 0 y al hijo de 2.0.', 'A hypothetical AI extension whose explanation becomes more precise from context to Diagram 0 and the child of 2.0.'),
    why: t('Permite ubicar una capacidad opcional en un proceso y luego en una subfunción examinable.', 'It allows an optional capability to be located in a process and then in an examinable subfunction.'),
    question: t('¿Qué hace exactamente la IA en este nivel y con qué datos?', 'What exactly does AI do at this level and with what data?'),
    example: t('Contexto: capacidad externa opcional. Diagrama 0: asistencia a 2.0. Hijo: asistencia a 2.3. Las tres son anotaciones de lente, no modificaciones del contexto canónico.', 'Context: optional external capability. Diagram 0: assistance to 2.0. Child: assistance to 2.3. All three are lens annotations, not modifications of the canonical context.'),
    analogy: t('Acercar un mapa hasta poder señalar la mesa exacta donde trabaja un ayudante.', 'Zooming into a map until the exact desk where an assistant works can be pointed out.'),
    related: ['w3k_ai_context', 'w3k_ai_zero', 'w3k_ai_child', 'w3k_levels'],
    notConfuse: t('Mayor precisión de la explicación no significa que la IA reemplace BASE ni que esté implementada en Kitchen Gadgets. Esta extensión no se atribuye a Tiffin.', 'Greater explanatory precision does not mean AI replaces BASE or is implemented in Kitchen Gadgets. This extension is not attributed to Tiffin.'),
    ai: ai(
      t('Tres relaciones nombradas, cada una visible solo en su nivel correspondiente.', 'Three named relationships, each visible only at its corresponding level.'),
      t('Precisar alcance, entradas, apoyo propuesto y evidencia a revisar.', 'Specify scope, inputs, proposed support and evidence to review.'),
      t('Cambia el alcance de la anotación, sin modificar los nodos o flujos de los modelos BASE.', 'The annotation scope changes without modifying BASE model nodes or flows.'),
      t('Revisar que la capacidad general, el proceso 2.0 y la subfunción 2.3 describen una asistencia coherente.', 'Review that the general capability, process 2.0 and subfunction 2.3 describe coherent assistance.')
    )
  });

  concept('w3k_ai_context', t('Contexto: capacidad externa opcional', 'Context: optional external capability'), 'ai', {
    what: t('Extensión IA hipotética al nivel contexto: explorar asistencia externa opcional al sistema de pedidos. Es una anotación pedagógica, no una tercera entidad del caso.', 'A hypothetical AI extension at context level: explore optional external assistance to the order system. It is a teaching annotation, not a third case entity.'),
    why: t('Obliga a explicitar el alcance de una posible dependencia antes de introducirla en un modelo operativo.', 'It requires the scope of a possible dependency to be stated before introducing it into an operational model.'),
    question: t('¿Qué capacidad externa opcional se considera y qué necesidad validada la justificaría?', 'What optional external capability is being considered and what validated need would justify it?'),
    example: t('Relación de lente IA → Sistema de pedidos: Considerar asistencia opcional. El grafo BASE sigue mostrando solo Customer, sistema y Warehouse.', 'AI lens relationship → Order system: Consider optional assistance. The BASE graph still shows only Customer, system and Warehouse.'),
    analogy: t('Una nota al margen del plano que propone consultar a un especialista.', 'A margin note on the plan proposing consultation with a specialist.'),
    related: ['w3k_ai_zoom', 'w3k_system', 'w3k_context', 'w3k_ai_zero'],
    notConfuse: t('La relación no es un quinto flujo del contexto ni evidencia de un servicio contratado. Los cuatro intercambios canónicos no cambian.', 'The relationship is not a fifth context flow or evidence of a contracted service. The four canonical exchanges do not change.'),
    ai: ai(
      t('Alcance contexto; objetivo: Sistema de pedidos Kitchen Gadgets.', 'Context scope; target: Kitchen Gadgets order system.'),
      t('Ayudar a formular una capacidad de apoyo y sus límites para evaluación del analista.', 'Help formulate a supporting capability and its limits for analyst evaluation.'),
      t('Se muestra una posibilidad externa opcional; no se alteran entidades ni datos del contexto BASE.', 'An optional external possibility is shown; BASE context entities and data are not altered.'),
      t('Confirmar necesidad, datos permitidos y responsabilidad antes de modelar una dependencia real. No atribuir la propuesta al caso ni a Tiffin.', 'Confirm need, permitted data and accountability before modeling a real dependency. Do not attribute the proposal to the case or Tiffin.')
    )
  });

  concept('w3k_ai_zero', t('Diagrama 0: asistir 2.0', 'Diagram 0: assist 2.0'), 'ai', {
    what: t('Extensión IA hipotética al nivel Diagrama 0: la capacidad opcional se ubica específicamente en 2.0 Verificar inventario.', 'A hypothetical AI extension at Diagram 0 level: the optional capability is located specifically in 2.0 Verify inventory.'),
    why: t('Convierte una idea general de asistencia en una responsabilidad de proceso concreta y revisable.', 'It turns a general assistance idea into a specific, reviewable process responsibility.'),
    question: t('¿Qué ayuda puede recibir 2.0 para contrastar pedido e inventario?', 'What assistance can 2.0 receive to compare the order with inventory?'),
    example: t('Relación de lente IA → 2.0: Asistir verificación. La IA podría explicar discrepancias usando entradas reales de 2.0.', 'AI lens relationship → 2.0: Assist verification. AI could explain discrepancies using actual inputs to 2.0.'),
    analogy: t('Identificar el área concreta de una oficina donde podría colaborar un especialista.', 'Identifying the specific office area where a specialist could assist.'),
    related: ['w3k_ai_zoom', 'w3k_verify', 'w3k_diagram0', 'w3k_ai_child'],
    notConfuse: t('La asistencia se limita a 2.0; no sustituye 1.0, 3.0 o 4.0 ni introduce fuentes de inventario nuevas.', 'Assistance is limited to 2.0; it does not replace 1.0, 3.0 or 4.0 or introduce new inventory sources.'),
    ai: ai(
      t('Alcance Diagrama 0; objetivo: 2.0 Verificar inventario.', 'Diagram 0 scope; target: 2.0 Verify inventory.'),
      t('Ayudar a interpretar inconsistencias entre detalle del pedido y datos de inventario.', 'Help interpret inconsistencies between order detail and inventory data.'),
      t('La capacidad se asocia a un proceso con entradas y salidas definidas; los intercambios BASE se conservan.', 'The capability is associated with a process with defined inputs and outputs; BASE exchanges are preserved.'),
      t('Validar vigencia de D2, reglas de disponibilidad y mantenimiento de los cuatro flujos del borde de 2.0.', 'Validate D2 freshness, availability rules and preservation of the four flows at the 2.0 boundary.')
    )
  });

  concept('w3k_ai_child', t('Hijo: asistir 2.3', 'Child: assist 2.3'), 'ai', {
    what: t('Extensión IA hipotética al nivel hijo: precisar que la ayuda se encuentra en 2.3 Determinar disponibilidad, al revisar la evidencia del pedido y del inventario.', 'A hypothetical AI extension at child level: specify that assistance occurs in 2.3 Determine availability while reviewing order and inventory evidence.'),
    why: t('Permite evaluar una intervención concreta y distinguirla de identificar productos o consultar el registro.', 'It allows a specific intervention to be evaluated and distinguished from identifying products or querying the record.'),
    question: t('¿Qué evidencia permite a 2.3 sostener la conclusión propuesta?', 'What evidence allows 2.3 to support the proposed conclusion?'),
    example: t('Relación de lente IA → 2.3: Asistir determinación de disponibilidad. La ayuda puede explicar por qué datos insuficientes requieren revisión.', 'AI lens relationship → 2.3: Assist availability determination. Assistance can explain why insufficient data requires review.'),
    analogy: t('Señalar la mesa y la tarea específica dentro del área observada.', 'Pointing to the specific desk and task inside the observed area.'),
    related: ['w3k_ai_zoom', 'w3k_determine', 'w3k_child2_0', 'w3k_ai_zero'],
    notConfuse: t('Una explicación de IA no certifica existencias ni define una política de faltantes. La salida conserva el significado de Pedido validado.', 'An AI explanation does not certify stock or define a shortage policy. The output retains the meaning of Validated order.'),
    ai: ai(
      t('Alcance hijo de 2.0; objetivo: 2.3 Determinar disponibilidad.', 'Child-of-2.0 scope; target: 2.3 Determine availability.'),
      t('Explicar la evidencia y señalar contradicciones para revisión antes de aceptar una conclusión.', 'Explain evidence and flag contradictions for review before accepting a conclusion.'),
      t('La ayuda tiene un alcance más preciso que en Diagrama 0; no crea nuevas entradas ni salidas del padre.', 'Assistance has a more precise scope than in Diagram 0; it creates no new parent inputs or outputs.'),
      t('Verificar reglas explícitas, trazabilidad hasta D2 y responsabilidad de la validación, sin inventar criterios de disponibilidad.', 'Verify explicit rules, traceability to D2 and validation accountability without inventing availability criteria.')
    )
  });

  function node(id, kind, x, y, w, h, extra) {
    return Object.assign({ id, concept: id, kind, x, y, w, h }, extra || {});
  }

  function edge(id, from, to, path, labelX, labelY) {
    return { id: id + '_edge', from, to, concept: id, label: db.concepts[id].label, path, labelX, labelY };
  }

  // Labels have independent horizontal coordinates and room for label pills.
  // Paths are explicit orthogonal lanes; no SVG textPath or UI is created here.
  db.models['w3-kitchen-context'] = {
    id: 'w3-kitchen-context',
    label: t('Kitchen Gadgets: contexto', 'Kitchen Gadgets: context'),
    note: t('Hechos aportados: un sistema de pedidos, Customer, Warehouse y cuatro intercambios. Las flechas llevan información. El contexto no muestra almacenes internos. Abra el proceso 0 para ver una descomposición candidata.', 'Supplied facts: one order system, Customer, Warehouse and four exchanges. Arrows carry information. The context shows no internal stores. Open process 0 to view a candidate decomposition.'),
    width: 1200,
    height: 600,
    nodes: [
      node('w3k_customer', 'entity', 40, 250, 200, 120),
      node('w3k_system', 'process', 430, 210, 340, 180, { number: '0', zoomTarget: 'zero', aiTarget: { x: 770, y: 235 } }),
      node('w3k_warehouse', 'entity', 960, 250, 200, 120)
    ],
    edges: [
      edge('w3k_context_edi', 'w3k_customer', 'w3k_system', 'M 140 250 L 140 130 L 510 130 L 510 210', 325, 130),
      edge('w3k_context_status', 'w3k_system', 'w3k_customer', 'M 510 390 L 510 470 L 140 470 L 140 370', 325, 470),
      edge('w3k_context_shipping', 'w3k_system', 'w3k_warehouse', 'M 690 210 L 690 130 L 1060 130 L 1060 250', 875, 130),
      edge('w3k_context_confirmation', 'w3k_warehouse', 'w3k_system', 'M 1060 370 L 1060 470 L 690 470 L 690 390', 875, 470)
    ]
  };

  db.models['w3-kitchen-zero'] = {
    id: 'w3-kitchen-zero',
    label: t('Kitchen Gadgets: Diagrama 0 candidato', 'Kitchen Gadgets: candidate Diagram 0'),
    note: t('Interpretación candidata de la estructura interna: cuatro procesos y D1-D4. Conserva los cuatro intercambios del contexto. 4.0 requiere la confirmación de envío correspondiente antes del cargo; el número del proceso no expresa por sí solo esa regla. Emitir el estado desde 4.0 es una simplificación propuesta. Esquemas, faltantes, reservas y mecánica del cargo quedan pendientes de validación.', 'Candidate interpretation of internal structure: four processes and D1-D4. It preserves the four context exchanges. Process 4.0 requires corresponding shipping confirmation before charging; the process number alone does not express that rule. Emitting status from 4.0 is a proposed simplification. Schemas, shortages, reservations and charging mechanics await validation.'),
    width: 1200,
    height: 900,
    nodes: [
      node('w3k_customer', 'entity', 30, 65, 180, 110),
      node('w3k_receive', 'process', 400, 55, 250, 130, { number: '1.0' }),
      node('w3k_orders', 'store', 950, 65, 210, 110, { number: 'D1', aiTarget: { x: 1160, y: 100 } }),
      node('w3k_verify', 'process', 400, 270, 250, 140, { number: '2.0', zoomTarget: 'child', aiTarget: { x: 650, y: 290 } }),
      node('w3k_inventory', 'store', 950, 300, 210, 120, { number: 'D2' }),
      node('w3k_shipping', 'process', 400, 490, 250, 140, { number: '3.0' }),
      node('w3k_shipping_orders', 'store', 950, 495, 210, 130, { number: 'D3' }),
      node('w3k_warehouse', 'entity', 30, 500, 180, 110),
      node('w3k_charge', 'process', 400, 725, 250, 130, { number: '4.0', aiTarget: { x: 650, y: 745 } }),
      node('w3k_payments', 'store', 950, 755, 210, 90, { number: 'D4' })
    ],
    edges: [
      edge('w3k_zero_edi', 'w3k_customer', 'w3k_receive', 'M 210 110 L 400 110', 305, 110),
      edge('w3k_zero_status', 'w3k_charge', 'w3k_customer', 'M 400 800 L 15 800 L 15 25 L 120 25 L 120 65', 207, 800),
      edge('w3k_zero_order_record', 'w3k_receive', 'w3k_orders', 'M 650 115 L 950 115', 800, 115),
      edge('w3k_zero_order_detail', 'w3k_receive', 'w3k_verify', 'M 525 185 L 525 270', 525, 227),
      edge('w3k_zero_inventory_query', 'w3k_verify', 'w3k_inventory', 'M 650 330 L 950 330', 800, 330),
      edge('w3k_zero_inventory_data', 'w3k_inventory', 'w3k_verify', 'M 950 390 L 650 390', 800, 390),
      edge('w3k_zero_validated_order', 'w3k_verify', 'w3k_shipping', 'M 525 410 L 525 490', 525, 450),
      edge('w3k_zero_shipping_order', 'w3k_shipping', 'w3k_warehouse', 'M 400 540 L 210 540', 305, 540),
      edge('w3k_zero_shipping_record', 'w3k_shipping', 'w3k_shipping_orders', 'M 650 560 L 950 560', 800, 560),
      Object.assign(edge('w3k_zero_shipping_confirmation', 'w3k_warehouse', 'w3k_charge', 'M 120 610 L 120 680 L 465 680 L 465 725', 292, 680), { aiTarget: { x: 465, y: 705 } }),
      edge('w3k_zero_shipping_reference', 'w3k_shipping_orders', 'w3k_charge', 'M 1055 625 L 1055 680 L 590 680 L 590 725', 820, 680),
      edge('w3k_zero_charge_order_data', 'w3k_orders', 'w3k_charge', 'M 1160 140 L 1180 140 L 1180 875 L 525 875 L 525 855', 850, 875),
      edge('w3k_zero_payment_record', 'w3k_charge', 'w3k_payments', 'M 650 805 L 950 805', 800, 805)
    ],
    chargeDependency: {
      process: 'w3k_charge',
      requiredInput: 'w3k_zero_shipping_confirmation',
      rule: t('Procesar el cargo solo después de recibir la confirmación de envío correspondiente al pedido. La referencia de D3 o una alerta IA no sustituyen esa confirmación.', 'Process the charge only after receiving shipping confirmation corresponding to the order. The D3 reference or an AI alert does not replace that confirmation.')
    }
  };

  db.models['w3-kitchen-child'] = {
    id: 'w3-kitchen-child',
    label: t('Kitchen Gadgets: hijo candidato de 2.0', 'Kitchen Gadgets: candidate child of 2.0'),
    note: t('Interpretación candidata dentro de 2.0: solo 2.1, 2.2 y 2.3 son sus subprocesos. 1.0, 3.0 y D2 se repiten como referencias del borde y no son hijos ni nuevas entidades externas. Se conservan Detalle del pedido, Pedido validado, Consulta de inventario y Datos de inventario. Los dos flujos entre subprocesos son detalle interno. Las reglas para disponibilidad insuficiente no fueron suministradas.', 'Candidate interpretation inside 2.0: only 2.1, 2.2 and 2.3 are its subprocesses. 1.0, 3.0 and D2 are repeated as boundary references and are neither children nor new external entities. Order detail, Validated order, Inventory query and Inventory data are preserved. The two flows between subprocesses are internal detail. Rules for insufficient availability were not supplied.'),
    width: 1200,
    height: 900,
    parentProcess: 'w3k_verify',
    parentModel: 'w3-kitchen-zero',
    boundaryNodes: ['w3k_receive', 'w3k_inventory', 'w3k_shipping'],
    focusNodes: ['w3k_identify', 'w3k_query', 'w3k_determine'],
    nodes: [
      node('w3k_receive', 'process', 390, 35, 300, 100, { number: '1.0', boundary: true }),
      node('w3k_identify', 'process', 390, 195, 300, 120, { number: '2.1' }),
      node('w3k_query', 'process', 390, 375, 300, 130, { number: '2.2' }),
      node('w3k_inventory', 'store', 960, 385, 200, 120, { number: 'D2', boundary: true }),
      node('w3k_determine', 'process', 390, 575, 300, 130, { number: '2.3', aiTarget: { x: 690, y: 640 } }),
      node('w3k_shipping', 'process', 390, 765, 300, 110, { number: '3.0', boundary: true })
    ],
    edges: [
      edge('w3k_child_order_detail', 'w3k_receive', 'w3k_identify', 'M 540 135 L 540 195', 540, 165),
      edge('w3k_child_identified_products', 'w3k_identify', 'w3k_query', 'M 540 315 L 540 375', 540, 345),
      edge('w3k_child_inventory_query', 'w3k_query', 'w3k_inventory', 'M 690 410 L 960 410', 825, 410),
      edge('w3k_child_inventory_data', 'w3k_inventory', 'w3k_query', 'M 960 480 L 690 480', 825, 480),
      edge('w3k_child_availability_input', 'w3k_query', 'w3k_determine', 'M 540 505 L 540 575', 540, 540),
      edge('w3k_child_validated_order', 'w3k_determine', 'w3k_shipping', 'M 540 705 L 540 765', 540, 735)
    ],
    interface: [
      { direction: 'in', peer: 'w3k_receive', parentFlow: 'w3k_zero_order_detail', childFlow: 'w3k_child_order_detail', label: t('Detalle del pedido', 'Order detail') },
      { direction: 'out', peer: 'w3k_shipping', parentFlow: 'w3k_zero_validated_order', childFlow: 'w3k_child_validated_order', label: t('Pedido validado', 'Validated order') },
      { direction: 'out', peer: 'w3k_inventory', parentFlow: 'w3k_zero_inventory_query', childFlow: 'w3k_child_inventory_query', label: t('Consulta de inventario', 'Inventory query') },
      { direction: 'in', peer: 'w3k_inventory', parentFlow: 'w3k_zero_inventory_data', childFlow: 'w3k_child_inventory_data', label: t('Datos de inventario', 'Inventory data') }
    ]
  };

  const breadcrumbs = [
    { level: 'context', label: t('Contexto', 'Context'), concept: 'w3k_context', model: 'w3-kitchen-context' },
    { level: 'zero', label: t('Diagrama 0', 'Diagram 0'), concept: 'w3k_diagram0', model: 'w3-kitchen-zero' },
    { level: 'child', label: t('Proceso 2.0', 'Process 2.0'), concept: 'w3k_child2_0', model: 'w3-kitchen-child' }
  ];

  db.diagrams['02'] = {
    id: '02',
    title: t('¿Cómo se mueve la información?', 'How does information move?'),
    question: t('Si queremos comprender cómo funciona el sistema, ¿qué ocurre con la información mientras atraviesa sus procesos?', 'If we want to understand how the system works, what happens to information as it passes through its processes?'),
    statement: t('DIAGRAMA DE FLUJO DE DATOS: ENTRADAS, TRANSFORMACIONES, ALMACENAMIENTO Y SALIDAS.', 'DATA FLOW DIAGRAM: INPUTS, TRANSFORMATIONS, STORAGE AND OUTPUTS.'),
    definition: t('Un DFD representa cómo los datos entran, se transforman, se almacenan y salen de un sistema. Cada entidad, proceso, almacén y flecha abre su explicación.', 'A DFD represents how data enters, is transformed, is stored and leaves a system. Every entity, process, store and arrow opens its explanation.'),
    transition: t('Ya podemos reconocer cómo se mueve la información. ¿Qué ocurre si necesitamos mirar un proceso con más detalle?', 'We can now recognize how information moves. What happens if we need to examine a process in more detail?'),
    root: 'w3k_dfd',
    nodes: ['w3k_dfd', 'w3k_external_entity', 'w3k_process', 'w3k_data_flow', 'w3k_data_store', 'w3k_verify', 'w3k_orders', 'w3k_charge'],
    kind: 'dfd',
    model: 'w3-kitchen-zero',
    symbols: [
      { kind: 'entity', concept: 'w3k_external_entity', label: t('Entidad externa', 'External entity') },
      { kind: 'process', concept: 'w3k_process', label: t('Proceso', 'Process') },
      { kind: 'flow', concept: 'w3k_data_flow', label: t('Flujo de datos', 'Data flow') },
      { kind: 'store', concept: 'w3k_data_store', label: t('Almacén de datos', 'Data store') }
    ],
    teachingNote: t('Kitchen Gadgets conserva los intercambios aportados. Sus cuatro procesos y D1-D4 forman una estructura interna candidata. Las flechas representan datos, no productos físicos; 4.0 requiere confirmación de envío antes del cargo.', 'Kitchen Gadgets preserves the supplied exchanges. Its four processes and D1-D4 form a candidate internal structure. Arrows represent data, not physical products; 4.0 requires shipping confirmation before charging.'),
    aiNode: 'w3k_ai_dfd',
    aiQuestion: t('¿Dónde puede participar la IA en un flujo de información?', 'Where can AI participate in an information flow?'),
    aiMessage: t('Extensión IA hipotética, no atribuida a Tiffin. Cuatro conexiones concretas a flujos, procesos, datos y anomalías conservan BASE. El ejemplo no estructurado es independiente del pedido EDI del caso.', 'Hypothetical AI extension, not attributed to Tiffin. Four specific connections to flows, processes, data and anomalies preserve BASE. The unstructured example is independent of the case EDI order.'),
    aiFlow: ['w3k_ai_unstructured', 'w3k_ai_classification', 'w3k_ai_structured'],
    aiExample: t('EJEMPLO IA SEPARADO: solicitud no estructurada → clasificación IA → datos estructurados propuestos. Requiere validación. No es una entrada ni un recorrido BASE de Kitchen Gadgets.', 'SEPARATE AI EXAMPLE: unstructured request → AI classification → proposed structured data. Requires validation. It is not a Kitchen Gadgets BASE input or path.'),
    aiRelationships: [
      { id: 'w3k_d02_ai_interpret', from: 'w3k_ai_dfd', to: 'w3k_data_flow', targetEdge: 'w3k_zero_shipping_confirmation_edge', action: t('Interpretar / clasificar', 'Interpret / classify'), concept: 'w3k_ai_interpret', value: t('Interpretar la Confirmación de envío sin cambiar su contenido ni confundirla con autorización de pago.', 'Interpret Shipping confirmation without changing its content or confusing it with payment authorization.') },
      { id: 'w3k_d02_ai_assist', from: 'w3k_ai_dfd', to: 'w3k_verify', targetNode: 'w3k_verify', action: t('Asistir / transformar', 'Assist / transform'), concept: 'w3k_ai_assist', value: t('Ayudar a 2.0 a contrastar pedido e inventario con evidencia.', 'Help 2.0 compare the order and inventory using evidence.') },
      { id: 'w3k_d02_ai_extract', from: 'w3k_ai_dfd', to: 'w3k_orders', targetNode: 'w3k_orders', action: t('Extraer / analizar', 'Extract / analyze'), concept: 'w3k_ai_extract', value: t('Obtener datos trazables de D1, que conserva pedidos estructurados.', 'Obtain traceable data from D1, which retains structured orders.') },
      { id: 'w3k_d02_ai_detect', from: 'w3k_ai_dfd', to: 'w3k_charge', targetNode: 'w3k_charge', action: t('Detectar anomalías', 'Detect anomalies'), concept: 'w3k_ai_anomalies', value: t('Señalar evidencia ausente o discordante antes del cargo.', 'Flag missing or mismatched evidence before charging.') }
    ]
  };

  db.diagrams['03'] = {
    id: '03',
    title: t('Del panorama general al detalle', 'From the overview to the detail'),
    question: t('Ya podemos ver el sistema completo. ¿Qué ocurre si necesitamos mirar un proceso con más detalle?', 'We can now see the whole system. What happens if we need to examine one process in more detail?'),
    statement: t('CONTEXTO → DIAGRAMA 0 → DIAGRAMAS HIJO.', 'CONTEXT → DIAGRAM 0 → CHILD DIAGRAMS.'),
    definition: t('El zoom semántico explica el mismo sistema con mayor profundidad: primero su límite, luego sus procesos principales y finalmente el interior de un proceso. Como país, ciudad y calle en un mapa.', 'Semantic zoom explains the same system in greater depth: first its boundary, then its main processes and finally the inside of one process. Like country, city and street on a map.'),
    transition: t('Al hacer zoom podemos agregar detalle. ¿Podemos cambiar arbitrariamente lo que entra y sale? No: las entradas y salidas deben conservar su coherencia.', 'Zooming allows us to add detail. Can we arbitrarily change what enters and leaves? No: inputs and outputs must remain consistent.'),
    root: 'w3k_context',
    nodes: ['w3k_context', 'w3k_diagram0', 'w3k_child2_0', 'w3k_levels', 'w3k_zoom_breadcrumbs', 'w3k_system', 'w3k_verify', 'w3k_determine'],
    kind: 'zoom',
    models: { context: 'w3-kitchen-context', zero: 'w3-kitchen-zero', child: 'w3-kitchen-child' },
    initialLevel: 'context',
    levels: [
      { id: 'context', concept: 'w3k_context', label: t('Contexto', 'Context'), model: 'w3-kitchen-context', root: 'w3k_system', parent: null },
      { id: 'zero', concept: 'w3k_diagram0', label: t('Diagrama 0', 'Diagram 0'), model: 'w3-kitchen-zero', root: 'w3k_verify', parent: 'context' },
      { id: 'child', concept: 'w3k_child2_0', label: t('Hijo de 2.0', 'Child of 2.0'), model: 'w3-kitchen-child', root: 'w3k_determine', parent: 'zero' }
    ],
    breadcrumbs,
    zoomBreadcrumbs: breadcrumbs,
    teachingNote: t('Cuanto más acercamos el modelo, con más precisión identificamos dónde participa una capacidad de IA: sistema, proceso 2.0, subfunción 2.3. El detalle crece; las entradas y salidas del padre conservan su significado. El modelo interno es candidato y el caso no afirma usar IA.', 'The more we zoom into the model, the more precisely we identify where an AI capability participates: system, process 2.0, subfunction 2.3. Detail grows; parent inputs and outputs retain their meaning. The internal model is a candidate and the case does not claim to use AI.'),
    aiNode: 'w3k_ai_zoom',
    aiQuestion: t('¿Cómo cambia la precisión de la participación de IA al entrar en un proceso?', 'How does the precision of AI participation change when entering a process?'),
    aiMessage: t('Extensión IA hipotética, no atribuida a Tiffin. Contexto: capacidad externa opcional. Diagrama 0: asistencia a 2.0. Hijo: asistencia a 2.3. Son anotaciones por nivel; no agregan entidades ni flechas falsas al contexto BASE.', 'Hypothetical AI extension, not attributed to Tiffin. Context: optional external capability. Diagram 0: assistance to 2.0. Child: assistance to 2.3. These are level-specific annotations; they add no entities or fake arrows to the BASE context.'),
    aiFlow: ['w3k_ai_context', 'w3k_ai_zero', 'w3k_ai_child'],
    aiRelationships: [
      { id: 'w3k_d03_ai_context', from: 'w3k_ai_zoom', to: 'w3k_system', level: 'context', targetNode: 'w3k_system', action: t('Considerar asistencia externa opcional', 'Consider optional external assistance'), concept: 'w3k_ai_context', value: t('Capacidad hipotética anotada al nivel del sistema; los cuatro intercambios canónicos permanecen intactos.', 'Hypothetical capability annotated at system level; the four canonical exchanges remain intact.') },
      { id: 'w3k_d03_ai_zero', from: 'w3k_ai_zoom', to: 'w3k_verify', level: 'zero', targetNode: 'w3k_verify', action: t('Asistir verificación en 2.0', 'Assist verification in 2.0'), concept: 'w3k_ai_zero', value: t('Ayuda específica al proceso que contrasta detalle del pedido y datos de D2.', 'Specific assistance to the process comparing order detail with D2 data.') },
      { id: 'w3k_d03_ai_child', from: 'w3k_ai_zoom', to: 'w3k_determine', level: 'child', targetNode: 'w3k_determine', action: t('Asistir disponibilidad en 2.3', 'Assist availability in 2.3'), concept: 'w3k_ai_child', value: t('Ayuda delimitada a explicar evidencia y señalar insuficiencias antes de validar el pedido.', 'Assistance bounded to explaining evidence and flagging insufficiencies before order validation.') }
    ]
  };
})(window);
