(function () {
  'use strict';

  var atlas = window.CST212_W3 = window.CST212_W3 || {};
  ['diagrams', 'concepts', 'sources', 'models'].forEach(function (key) {
    atlas[key] = atlas[key] || {};
  });
  function t(es, en) { return { es: es, en: en }; }
  function id(name) { return 'w3d_' + name; }

  // Details: what, why, question, example, analogy, notConfuse.
  // AI extension: connection, does, changes, validate. It is not course doctrine.
  function concept(name, label, layer, details, related, ai) {
    var value = { id: id(name), label: label, layer: layer,
      related: related.map(id), sources: layer === 'foundation' ? ['w3-course'] : [] };
    ['what', 'why', 'question', 'example', 'analogy', 'notConfuse'].forEach(function (key, i) {
      value[key] = details[i];
    });
    value.ai = {};
    ['connection', 'does', 'changes', 'validate'].forEach(function (key, i) {
      value.ai[key] = ai[i];
    });
    atlas.concepts[value.id] = value;
  }

  concept('dictionary', t('Diccionario de datos', 'Data dictionary'), 'foundation', [
    t('Repositorio organizado que documenta los datos del sistema, sus elementos, estructuras, usos y relaciones.', 'An organized repository documenting system data, its elements, structures, uses and relationships.'),
    t('Permite que el equipo use cada nombre con un significado compartido y pueda consultar su definici\u00f3n.', 'It gives the team a shared meaning for each name and a definition they can consult.'),
    t('\u00bfQu\u00e9 significa exactamente este dato?', 'What exactly does this data mean?'),
    t('Pedido puede tener una entrada con descripci\u00f3n, origen, destino y composici\u00f3n. Los campos mostrados aqu\u00ed son ilustrativos.', 'Order can have an entry with description, source, destination and composition. The fields shown here are illustrative.'),
    t('Es el glosario t\u00e9cnico del sistema: explica los t\u00e9rminos que aparecen en su mapa.', 'It is the system\u2019s technical glossary: it explains the terms that appear on its map.'),
    t('El DFD representa movimiento; el DD define significado. Un DD no exige una tecnolog\u00eda de base de datos.', 'The DFD represents movement; the DD defines meaning. A DD does not require a database technology.')
  ], ['dfd', 'flow', 'store', 'element', 'structure', 'description', 'sourceDestination'], [
    t('Extensi\u00f3n de IA: ayudar a documentar el vocabulario a partir del modelo y de evidencia disponible.', 'AI extension: help document vocabulary from the model and available evidence.'),
    t('Propone entradas y se\u00f1ala definiciones incompletas para revisi\u00f3n.', 'It proposes entries and flags incomplete definitions for review.'),
    t('Agiliza el borrador del glosario; no decide el significado de los datos.', 'It speeds up a glossary draft; it does not decide what data means.'),
    t('El analista contrasta cada definici\u00f3n con el modelo y la evidencia del sistema antes de aceptarla.', 'The analyst checks each definition against the model and system evidence before accepting it.')
  ]);
  concept('flow', t('Flujo de datos', 'Data flow'), 'foundation', [
    t('Conjunto de datos que se mueve entre componentes del DFD y recibe un nombre significativo.', 'A named set of data moving between components of a DFD.'),
    t('Su entrada en el DD aclara qu\u00e9 informaci\u00f3n viaja y evita interpretar la flecha como una orden de ejecuci\u00f3n.', 'Its DD entry explains which information travels and prevents reading the arrow as an execution command.'),
    t('\u00bfQu\u00e9 informaci\u00f3n transporta este flujo?', 'Which information does this flow carry?'),
    t('Pedido es un flujo del ejemplo; su descomposici\u00f3n en identificadores y cantidad es ilustrativa.', 'Order is an example flow; its breakdown into identifiers and quantity is illustrative.'),
    t('Como un sobre rotulado: el DFD muestra el trayecto y el DD describe el contenido.', 'Like a labeled envelope: the DFD shows its route and the DD describes its contents.'),
    t('Un flujo puede contener varios elementos; no es un elemento individual ni una secuencia de pasos.', 'A flow may contain several elements; it is neither a single element nor a sequence of steps.')
  ], ['dictionary', 'element', 'order', 'orderStatus', 'sourceDestination'], [
    t('Extensi\u00f3n de IA: extraer nombres de flujos como candidatos de entrada.', 'AI extension: extract flow names as entry candidates.'),
    t('Localiza etiquetas y extremos visibles del flujo en el DFD proporcionado.', 'It locates labels and visible flow endpoints in the supplied DFD.'),
    t('Reduce transcripci\u00f3n manual y deja pendientes los contenidos no documentados.', 'It reduces manual transcription and leaves undocumented contents unresolved.'),
    t('Revisar nombre, direcci\u00f3n y alcance en el DFD; no deducir campos solo por el nombre.', 'Check name, direction and scope in the DFD; do not infer fields from the name alone.')
  ]);
  concept('store', t('Almac\u00e9n de datos', 'Data store'), 'foundation', [
    t('Informaci\u00f3n conservada para que los procesos puedan consultarla o actualizarla; el DD describe su contenido y uso.', 'Information retained for processes to consult or update; the DD describes its contents and use.'),
    t('Distingue los datos que permanecen disponibles de los que est\u00e1n viajando por un flujo.', 'It distinguishes retained information from information traveling in a flow.'),
    t('\u00bfQu\u00e9 se conserva y qu\u00e9 procesos lo utilizan?', 'What is retained and which processes use it?'),
    t('D1 Pedidos es el almac\u00e9n del ejemplo. Su lista de campos y procesos de lectura y escritura se presenta como ilustrativa.', 'D1 Orders is the example store. Its field list and reading and writing processes are presented as illustrative.'),
    t('Como un archivo de consulta: interesa qu\u00e9 guarda y qui\u00e9n lo usa, antes que el material del archivador.', 'Like a reference archive: what it holds and who uses it matter before the cabinet material does.'),
    t('Un almac\u00e9n l\u00f3gico no equivale necesariamente a una tabla SQL ni prescribe una implementaci\u00f3n.', 'A logical store is not necessarily a SQL table and does not prescribe an implementation.')
  ], ['dictionary', 'orders', 'process', 'structure'], [
    t('Extensi\u00f3n de IA: reunir las menciones y los usos documentados de un almac\u00e9n.', 'AI extension: collect documented mentions and uses of a store.'),
    t('Propone una descripci\u00f3n de contenido y relaciona procesos lectores y escritores.', 'It proposes a content description and links reading and writing processes.'),
    t('Ayuda a organizar el inventario l\u00f3gico sin convertirlo en dise\u00f1o f\u00edsico.', 'It helps organize the logical inventory without turning it into physical design.'),
    t('Comprobar cada uso en los flujos del modelo y dejar sin resolver la tecnolog\u00eda no especificada.', 'Check each use against model flows and leave unspecified technology unresolved.')
  ]);
  concept('element', t('Elemento de datos', 'Data element'), 'foundation', [
    t('Unidad b\u00e1sica de informaci\u00f3n con significado espec\u00edfico dentro del sistema.', 'A basic unit of information with a specific meaning within the system.'),
    t('Permite definir por separado las piezas que componen un flujo o una estructura.', 'It allows the pieces of a flow or structure to be defined separately.'),
    t('\u00bfQu\u00e9 representa este campo por s\u00ed mismo?', 'What does this field represent on its own?'),
    t('Customer_ID, Order_Date, Product_Code y Quantity son posibles elementos ilustrativos del pedido.', 'Customer_ID, Order_Date, Product_Code and Quantity are possible illustrative order elements.'),
    t('Como una palabra con significado propio dentro de una frase estructurada.', 'Like a word with its own meaning within a structured sentence.'),
    t('Elemento no es flujo: una flecha puede transportar una combinaci\u00f3n de elementos.', 'Element does not mean flow: an arrow may carry a combination of elements.')
  ], ['structure', 'flow', 'order_id', 'customer_id', 'product_code', 'quantity', 'order_date', 'status'], [
    t('Extensi\u00f3n de IA: identificar posibles elementos en descripciones existentes.', 'AI extension: identify possible elements in existing descriptions.'),
    t('Separa campos mencionados de inferencias que requieren evidencia.', 'It separates mentioned fields from inferences requiring evidence.'),
    t('Facilita la descomposici\u00f3n inicial de estructuras sin aprobar campos nuevos.', 'It helps initially break down structures without approving new fields.'),
    t('Confirmar el significado de cada campo y si pertenece realmente a la estructura.', 'Confirm each field\u2019s meaning and whether it actually belongs to the structure.')
  ]);
  concept('process', t('Proceso', 'Process'), 'foundation', [
    t('Actividad que transforma datos de entrada en datos de salida; el DD vincula los datos con los procesos que los usan.', 'An activity transforming input data into output data; the DD links data to the processes using it.'),
    t('Aclara qui\u00e9n produce, recibe, lee o actualiza la informaci\u00f3n descrita.', 'It clarifies which activity produces, receives, reads or updates the described information.'),
    t('\u00bfQu\u00e9 proceso necesita o produce este dato?', 'Which process needs or produces this data?'),
    t('Recibir / procesar pedido aparece como destino de Pedido. Consultar estado y los usos del almac\u00e9n son ilustrativos.', 'Receive / process order appears as the destination of Order. Query status and store uses are illustrative.'),
    t('Como una estaci\u00f3n de trabajo que recibe documentos y entrega informaci\u00f3n transformada.', 'Like a workstation that receives documents and delivers transformed information.'),
    t('El DD documenta el uso del dato; no sustituye la descripci\u00f3n de la l\u00f3gica interna del proceso.', 'The DD documents data use; it does not replace a description of internal process logic.')
  ], ['flow', 'store', 'sourceDestination'], [
    t('Extensi\u00f3n de IA: asociar entradas del DD con procesos nombrados en el modelo.', 'AI extension: associate DD entries with processes named in the model.'),
    t('Recopila referencias de producci\u00f3n y consumo de datos.', 'It gathers references to data production and consumption.'),
    t('Permite revisar usos dispersos desde una misma entrada.', 'It enables review of scattered uses from a single entry.'),
    t('Verificar la direcci\u00f3n del flujo y no inventar pasos ni reglas del proceso.', 'Verify flow direction and do not invent process steps or rules.')
  ]);
  concept('entity', t('Entidad externa', 'External entity'), 'foundation', [
    t('Persona, organizaci\u00f3n o sistema fuera del l\u00edmite modelado que env\u00eda o recibe datos.', 'A person, organization or system outside the modeled boundary that sends or receives data.'),
    t('Sit\u00faa el origen o destino de un flujo sin confundir al participante con un proceso interno.', 'It locates a flow\u2019s source or destination without confusing the participant with an internal process.'),
    t('\u00bfQui\u00e9n fuera del sistema entrega o recibe esta informaci\u00f3n?', 'Who outside the system supplies or receives this information?'),
    t('Cliente es el origen del Pedido del ejemplo; el retorno de Estado del pedido al cliente es ilustrativo.', 'Customer is the source of the example Order; returning Order status to the customer is illustrative.'),
    t('Como el remitente o destinatario que est\u00e1 fuera de una oficina.', 'Like a sender or recipient outside an office.'),
    t('La entidad Cliente es un participante; Customer_ID es un elemento que lo identifica en los datos.', 'The Customer entity is a participant; Customer_ID is an element identifying it in data.')
  ], ['sourceDestination', 'flow', 'customer_id'], [
    t('Extensi\u00f3n de IA: reconocer participantes expl\u00edcitos al preparar entradas.', 'AI extension: recognize explicit participants when preparing entries.'),
    t('Relaciona una etiqueta de origen o destino con la entidad nombrada.', 'It relates a source or destination label to the named entity.'),
    t('Ayuda a mantener uniforme el vocabulario de participantes.', 'It helps keep participant vocabulary consistent.'),
    t('Confirmar el l\u00edmite del sistema y no inferir permisos ni datos personales adicionales.', 'Confirm the system boundary and do not infer permissions or additional personal data.')
  ]);
  concept('structure', t('Estructura / composici\u00f3n', 'Structure / composition'), 'foundation', [
    t('Combinaci\u00f3n organizada de elementos que, juntos, representan informaci\u00f3n significativa.', 'An organized combination of elements that together represent meaningful information.'),
    t('Explica de qu\u00e9 est\u00e1 hecho un dato compuesto y permite revisar sus partes.', 'It explains what composite data is made of and allows its parts to be reviewed.'),
    t('\u00bfQu\u00e9 elementos forman esta entrada?', 'Which elements make up this entry?'),
    t('Composici\u00f3n ilustrativa de Pedido: Order_ID, Customer_ID, Product_Code, Quantity y Order_Date.', 'Illustrative Order composition: Order_ID, Customer_ID, Product_Code, Quantity and Order_Date.'),
    t('Como la lista de ingredientes de una receta, no las instrucciones para cocinarla.', 'Like a recipe\u2019s ingredient list, not its cooking instructions.'),
    t('Estructura no es flujo: agrupar campos no indica direcci\u00f3n, orden de ejecuci\u00f3n ni obligatoriedad.', 'Structure is not flow: grouping fields does not indicate direction, execution order or mandatory status.')
  ], ['dictionary', 'element', 'order', 'flow'], [
    t('Extensi\u00f3n de IA: organizar elementos respaldados en estructuras candidatas.', 'AI extension: organize supported elements into candidate structures.'),
    t('Agrupa campos mencionados y se\u00f1ala partes cuya composici\u00f3n falta.', 'It groups mentioned fields and flags parts with missing composition.'),
    t('Produce una propuesta revisable, no una estructura contractual.', 'It produces a reviewable proposal, not a contractual structure.'),
    t('Validar pertenencia, repeticiones y restricciones solo cuando la evidencia las establezca.', 'Validate membership, repetition and constraints only when evidence establishes them.')
  ]);
  concept('description', t('Descripci\u00f3n', 'Description'), 'foundation', [
    t('Explicaci\u00f3n del significado y alcance de la entrada en lenguaje comprensible.', 'An explanation of an entry\u2019s meaning and scope in understandable language.'),
    t('Un nombre breve por s\u00ed solo no permite distinguir interpretaciones diferentes.', 'A short name alone cannot distinguish different interpretations.'),
    t('\u00bfQu\u00e9 representa esta entrada y hasta d\u00f3nde llega su significado?', 'What does this entry represent and how far does its meaning extend?'),
    t('Pedido: informaci\u00f3n enviada por el cliente para solicitar productos. Esa frase no define reglas de pago o aprobaci\u00f3n.', 'Order: information submitted by the customer to request products. That sentence does not define payment or approval rules.'),
    t('Como la definici\u00f3n de un t\u00e9rmino junto a su nombre en un glosario.', 'Like a term\u2019s definition next to its name in a glossary.'),
    t('Una descripci\u00f3n no debe introducir pol\u00edticas, formatos ni validaciones que no est\u00e9n establecidos.', 'A description must not introduce policies, formats or validations that have not been established.')
  ], ['dictionary', 'naming', 'ai_draft'], [
    t('Extensi\u00f3n de IA: redactar definiciones usando evidencia suministrada.', 'AI extension: draft definitions using supplied evidence.'),
    t('Convierte notas en redacci\u00f3n clara y marca ambig\u00fcedades pendientes.', 'It turns notes into clear wording and marks unresolved ambiguities.'),
    t('Mejora la expresi\u00f3n del significado propuesto sin validarlo.', 'It improves how proposed meaning is expressed without validating it.'),
    t('Comparar cada afirmaci\u00f3n con la evidencia; una frase convincente puede ser incorrecta.', 'Compare every claim with the evidence; convincing wording can be wrong.')
  ]);
  concept('sourceDestination', t('Origen / destino', 'Source / destination'), 'foundation', [
    t('Referencias a los componentes que entregan y reciben los datos documentados en una entrada.', 'References to the components supplying and receiving the data documented in an entry.'),
    t('Conectan la definici\u00f3n del DD con el recorrido o uso representado en el DFD.', 'They connect a DD definition with the route or use represented in the DFD.'),
    t('\u00bfDe d\u00f3nde llega este dato y a qu\u00e9 componente se entrega?', 'Where does this data come from and which component receives it?'),
    t('Pedido: Cliente \u2192 Recibir / procesar pedido. Los extremos de las otras entradas se muestran como ilustrativos.', 'Order: Customer \u2192 Receive / process order. The other entries\u2019 endpoints are shown as illustrative.'),
    t('Como los campos remitente y destinatario de un sobre.', 'Like the sender and recipient fields on an envelope.'),
    t('Origen del flujo no equivale a fuente documental: esta \u00faltima respalda la definici\u00f3n y pertenece a la trazabilidad.', 'A flow source is not documentary evidence: the latter supports a definition and belongs to traceability.')
  ], ['flow', 'entity', 'process', 'traceability'], [
    t('Extensi\u00f3n de IA: cotejar extremos nombrados entre DFD y DD.', 'AI extension: compare named endpoints between DFD and DD.'),
    t('Se\u00f1ala destinos distintos o referencias a componentes ausentes.', 'It flags differing destinations or references to missing components.'),
    t('Convierte discrepancias de transcripci\u00f3n en preguntas de revisi\u00f3n.', 'It turns transcription discrepancies into review questions.'),
    t('Verificar el sentido de la flecha y distinguir cada contexto cuando existen varios usos.', 'Verify arrow direction and distinguish contexts when there are multiple uses.')
  ]);
  concept('dfd', t('DFD: movimiento de datos', 'DFD: data movement'), 'foundation', [
    t('Modelo de c\u00f3mo los datos circulan entre entidades externas, procesos y almacenes.', 'A model of how data moves among external entities, processes and stores.'),
    t('Ofrece el contexto de uso de los nombres que el diccionario debe definir.', 'It provides the usage context for names that the dictionary must define.'),
    t('\u00bfD\u00f3nde se mueve la informaci\u00f3n cuyo significado quiero consultar?', 'Where does the information whose meaning I want to look up move?'),
    t('La etiqueta Pedido del DFD debe corresponder a la entrada Pedido del DD.', 'The DFD label Order should correspond to the DD entry Order.'),
    t('El mapa de rutas que se consulta junto con el glosario del viaje.', 'The route map consulted alongside the journey\u2019s glossary.'),
    t('El DFD no es un diagrama de secuencia de tareas ni la definici\u00f3n completa de sus datos.', 'A DFD is neither a task-sequence diagram nor the complete definition of its data.')
  ], ['flow', 'dictionary', 'naming'], [
    t('Extensi\u00f3n de IA: usar el DFD suministrado como punto de partida de un borrador de DD.', 'AI extension: use the supplied DFD as a starting point for a DD draft.'),
    t('Extrae etiquetas y relaciones visibles sin completar autom\u00e1ticamente campos desconocidos.', 'It extracts visible labels and relationships without automatically filling unknown fields.'),
    t('Reduce el trabajo de inventario inicial de t\u00e9rminos.', 'It reduces the initial work of inventorying terms.'),
    t('Confirmar la lectura del diagrama y la versi\u00f3n del modelo utilizada.', 'Confirm the diagram reading and the model version used.')
  ]);
  concept('order', t('Entrada: Pedido', 'Entry: Order'), 'foundation', [
    t('Entrada que define la informaci\u00f3n enviada por el cliente para solicitar productos.', 'An entry defining information submitted by the customer to request products.'),
    t('Vincula el nombre Pedido con una descripci\u00f3n y permite examinar su posible composici\u00f3n.', 'It connects the name Order with a description and allows its possible composition to be examined.'),
    t('\u00bfQu\u00e9 quiere decir Pedido en este modelo?', 'What does Order mean in this model?'),
    t('Ejemplo de Kitchen Gadgets: Cliente env\u00eda Pedido a Recibir / procesar pedido. Los cinco campos de esta vista son ilustrativos.', 'Kitchen Gadgets example: Customer sends Order to Receive / process order. The five fields in this view are illustrative.'),
    t('Como la ficha que explica qu\u00e9 contiene un formulario de solicitud.', 'Like a record explaining what a request form contains.'),
    t('La composici\u00f3n ilustrativa no confirma identificadores obligatorios, formatos ni reglas de aceptaci\u00f3n.', 'Illustrative composition does not confirm mandatory identifiers, formats or acceptance rules.')
  ], ['flow', 'structure', 'order_id', 'customer_id', 'product_code', 'quantity', 'order_date'], [
    t('Extensi\u00f3n de IA: preparar una entrada de Pedido con informaci\u00f3n aportada.', 'AI extension: prepare an Order entry using supplied information.'),
    t('Organiza nombre, descripci\u00f3n y extremos y separa los campos propuestos.', 'It organizes name, description and endpoints and separates proposed fields.'),
    t('Hace visible qu\u00e9 parte del borrador procede de evidencia y cu\u00e1l es una hip\u00f3tesis.', 'It makes visible which part of the draft comes from evidence and which is a hypothesis.'),
    t('Confirmar los campos con el caso o sus responsables antes de considerarlos especificaci\u00f3n.', 'Confirm fields against the case or with its owners before treating them as a specification.')
  ]);
  concept('orderStatus', t('Entrada: Estado del pedido', 'Entry: Order status'), 'foundation', [
    t('Entrada para explicar el significado del flujo denominado Estado del pedido y su composici\u00f3n documentada.', 'An entry explaining the meaning of the flow named Order status and its documented composition.'),
    t('Evita que el nombre se interprete como una regla de transici\u00f3n o una lista impl\u00edcita de estados.', 'It prevents the name from being interpreted as a transition rule or an implicit list of statuses.'),
    t('\u00bfQu\u00e9 informaci\u00f3n comunica Estado del pedido?', 'What information does Order status communicate?'),
    t('Ejemplo ilustrativo: Consultar estado entrega al Cliente Order_ID y Status. No se establece un cat\u00e1logo de valores.', 'Illustrative example: Query status delivers Order_ID and Status to Customer. No value catalog is established.'),
    t('Como una respuesta sobre la situaci\u00f3n de una solicitud identificada.', 'Like a response about the situation of an identified request.'),
    t('El flujo Estado del pedido puede contener varios elementos; el campo Status es solo una pieza ilustrativa.', 'The Order status flow may contain several elements; the Status field is only an illustrative piece.')
  ], ['flow', 'order_id', 'status', 'sourceDestination'], [
    t('Extensi\u00f3n de IA: redactar el alcance de la respuesta usando descripciones existentes.', 'AI extension: draft the response scope using existing descriptions.'),
    t('Puede detectar que faltan la composici\u00f3n o los extremos documentados.', 'It can detect missing documented composition or endpoints.'),
    t('Transforma vac\u00edos de documentaci\u00f3n en asuntos pendientes de aclarar.', 'It turns documentation gaps into matters awaiting clarification.'),
    t('No aceptar estados, transiciones ni plazos sugeridos sin reglas expl\u00edcitas del sistema.', 'Do not accept suggested statuses, transitions or time limits without explicit system rules.')
  ]);
  concept('orders', t('Entrada: D1 Pedidos', 'Entry: D1 Orders'), 'foundation', [
    t('Entrada del almac\u00e9n l\u00f3gico D1 Pedidos, destinada a describir qu\u00e9 informaci\u00f3n conserva y c\u00f3mo la usan los procesos.', 'An entry for the logical store D1 Orders, describing what information it retains and how processes use it.'),
    t('Mantiene conectados el nombre del almac\u00e9n, su contenido y sus usos sin decidir su tecnolog\u00eda.', 'It connects the store name, its contents and its uses without deciding its technology.'),
    t('\u00bfQu\u00e9 datos guarda D1 Pedidos y qu\u00e9 procesos los leen o escriben?', 'What data does D1 Orders retain and which processes read or write it?'),
    t('Modelo ilustrativo: Recibir / procesar pedido escribe y Consultar estado lee; los seis campos propuestos no son un esquema confirmado.', 'Illustrative model: Receive / process order writes and Query status reads; the six proposed fields are not a confirmed schema.'),
    t('Como la ficha de un archivo que enumera contenido y consultas habituales.', 'Like an archive record listing contents and common uses.'),
    t('D1 es una etiqueta del modelo, no un nombre de tabla ni una instrucci\u00f3n para crear una base de datos.', 'D1 is a model label, not a table name or an instruction to create a database.')
  ], ['store', 'process', 'structure', 'order', 'status'], [
    t('Extensi\u00f3n de IA: reunir las referencias del almac\u00e9n en una entrada candidata.', 'AI extension: collect store references in a candidate entry.'),
    t('Resume contenidos y usos expl\u00edcitos y marca los no sustentados.', 'It summarizes explicit contents and uses and flags unsupported ones.'),
    t('Facilita revisar el alcance l\u00f3gico antes de cualquier dise\u00f1o f\u00edsico.', 'It makes logical scope easier to review before any physical design.'),
    t('Contrastar lecturas, escrituras y campos con el modelo; no generar restricciones por costumbre.', 'Check reads, writes and fields against the model; do not generate constraints from habit.')
  ]);

  concept('order_id', t('Order_ID: identificador del pedido', 'Order_ID: order identifier'), 'deepening', [
    t('Campo ilustrativo que permite referirse a un pedido dentro de una composici\u00f3n propuesta.', 'An illustrative field allowing an order to be referenced within a proposed composition.'),
    t('Ayuda a diferenciar la referencia a un pedido de la informaci\u00f3n completa que describe ese pedido.', 'It helps distinguish an order reference from the complete information describing that order.'),
    t('\u00bfA qu\u00e9 pedido se refiere este dato?', 'Which order does this data refer to?'),
    t('Uso ilustrativo: incluir Order_ID tanto en Pedido como en Estado del pedido para discutir una referencia compartida.', 'Illustrative use: include Order_ID in both Order and Order status to discuss a shared reference.'),
    t('Como el n\u00famero de referencia de una solicitud, sin presuponer c\u00f3mo se asigna.', 'Like a request reference number, without assuming how it is assigned.'),
    t('El nombre no establece unicidad global, tipo num\u00e9rico, formato ni una clave de base de datos.', 'The name does not establish global uniqueness, numeric type, format or a database key.')
  ], ['element', 'order', 'orderStatus'], [
    t('La IA puede identificar menciones expl\u00edcitas a una referencia de pedido.', 'AI can identify explicit mentions of an order reference.'),
    t('Propone asociarlas a una definici\u00f3n com\u00fan cuando el contexto coincide.', 'It proposes associating them with a common definition when context matches.'),
    t('Ayuda a revisar referencias entre entradas sin inventar su formato.', 'It helps review references between entries without inventing their format.'),
    t('Confirmar alcance del identificador y correspondencia entre usos con evidencia del sistema.', 'Confirm the identifier\u2019s scope and correspondence between uses against system evidence.')
  ]);
  concept('customer_id', t('Customer_ID: identificador del cliente', 'Customer_ID: customer identifier'), 'deepening', [
    t('Campo ilustrativo para referirse al cliente asociado con los datos de un pedido.', 'An illustrative field referencing the customer associated with order data.'),
    t('Separa la referencia al participante de otros datos que podr\u00edan describirlo.', 'It separates a participant reference from other data that might describe that participant.'),
    t('\u00bfQu\u00e9 cliente se est\u00e1 identificando en esta entrada?', 'Which customer is being identified in this entry?'),
    t('Composici\u00f3n ilustrativa: Pedido incluye Customer_ID; no se a\u00f1aden nombre, direcci\u00f3n ni datos de contacto.', 'Illustrative composition: Order includes Customer_ID; no name, address or contact information is added.'),
    t('Como una referencia de cliente en una ficha, distinta de la persona misma.', 'Like a customer reference on a record, distinct from the person themselves.'),
    t('Customer_ID no es la entidad externa Cliente ni demuestra la existencia de una cuenta registrada.', 'Customer_ID is not the Customer external entity and does not demonstrate that a registered account exists.')
  ], ['element', 'entity', 'order'], [
    t('La IA puede reconocer referencias a clientes en documentos aportados.', 'AI can recognize customer references in supplied documents.'),
    t('Se\u00f1ala nombres que parecen referirse al mismo identificador.', 'It flags names that appear to refer to the same identifier.'),
    t('Ayuda a revisar terminolog\u00eda sin ampliar los datos personales del modelo.', 'It helps review terminology without expanding the model\u2019s personal data.'),
    t('Validar a qui\u00e9n identifica y no asumir equivalencia con usuario, cuenta o comprador.', 'Validate whom it identifies and do not assume equivalence with user, account or buyer.')
  ]);
  concept('product_code', t('Product_Code: c\u00f3digo de producto', 'Product_Code: product code'), 'deepening', [
    t('Campo ilustrativo que referencia el producto al que corresponde la informaci\u00f3n solicitada.', 'An illustrative field referencing the product associated with the requested information.'),
    t('Permite discutir la identificaci\u00f3n del producto sin confundirla con su descripci\u00f3n comercial.', 'It allows product identification to be discussed separately from its commercial description.'),
    t('\u00bfQu\u00e9 producto representa este c\u00f3digo?', 'Which product does this code represent?'),
    t('Uso ilustrativo: Product_Code aparece junto a Quantity en la composici\u00f3n propuesta de Pedido.', 'Illustrative use: Product_Code appears alongside Quantity in the proposed Order composition.'),
    t('Como una referencia de cat\u00e1logo que apunta a un producto.', 'Like a catalog reference pointing to a product.'),
    t('No se prescribe SKU, c\u00f3digo de barras, formato ni cantidad de productos por pedido.', 'No SKU, barcode, format or number of products per order is prescribed.')
  ], ['element', 'quantity', 'structure'], [
    t('La IA puede detectar menciones de c\u00f3digos de producto.', 'AI can detect mentions of product codes.'),
    t('Propone agrupar etiquetas equivalentes cuando existe evidencia de equivalencia.', 'It proposes grouping equivalent labels when there is evidence of equivalence.'),
    t('Reduce variaciones de redacci\u00f3n sin decidir el sistema de codificaci\u00f3n.', 'It reduces wording variation without choosing the coding system.'),
    t('Confirmar qu\u00e9 identifica el c\u00f3digo y si distingue variantes seg\u00fan la documentaci\u00f3n.', 'Confirm what the code identifies and whether it distinguishes variants according to documentation.')
  ]);
  concept('quantity', t('Quantity: cantidad', 'Quantity: quantity'), 'deepening', [
    t('Campo ilustrativo que expresa la cantidad solicitada de un producto en una composici\u00f3n propuesta.', 'An illustrative field expressing the requested quantity of a product in a proposed composition.'),
    t('Obliga a aclarar qu\u00e9 se cuenta o mide antes de interpretar un valor.', 'It requires clarifying what is counted or measured before interpreting a value.'),
    t('\u00bfCantidad de qu\u00e9 y con qu\u00e9 unidad?', 'Quantity of what, and in which unit?'),
    t('Ejemplo ilustrativo: Quantity acompa\u00f1a Product_Code; la unidad y los valores admisibles quedan por confirmar.', 'Illustrative example: Quantity accompanies Product_Code; units and allowed values remain to be confirmed.'),
    t('Como una cifra en una lista de compra que necesita indicar qu\u00e9 est\u00e1 contando.', 'Like a number on a shopping list that needs to identify what it counts.'),
    t('El nombre no establece enteros, m\u00ednimos, m\u00e1ximos, disponibilidad ni reglas de inventario.', 'The name does not establish integers, minima, maxima, availability or inventory rules.')
  ], ['element', 'product_code', 'description'], [
    t('La IA puede detectar que una cantidad carece de unidad o alcance documentado.', 'AI can detect that a quantity lacks documented units or scope.'),
    t('Formula preguntas sobre unidad y contexto como pendientes.', 'It formulates questions about units and context as unresolved items.'),
    t('Hace visible una ambig\u00fcedad antes de que se convierta en una restricci\u00f3n asumida.', 'It exposes ambiguity before it becomes an assumed constraint.'),
    t('Validar unidad y restricciones con reglas aportadas; no aceptar l\u00edmites generados por la IA.', 'Validate units and constraints against supplied rules; do not accept AI-generated limits.')
  ]);
  concept('order_date', t('Order_Date: fecha del pedido', 'Order_Date: order date'), 'deepening', [
    t('Campo ilustrativo para una fecha asociada al pedido; el evento exacto debe definirse en el sistema.', 'An illustrative field for a date associated with the order; the exact event must be defined by the system.'),
    t('Evita confundir fecha de solicitud, recepci\u00f3n o registro cuando no est\u00e1n diferenciadas.', 'It avoids confusing request, receipt or recording dates when they have not been distinguished.'),
    t('\u00bfLa fecha de qu\u00e9 evento representa Order_Date?', 'Which event\u2019s date does Order_Date represent?'),
    t('Ejemplo ilustrativo: Pedido contiene Order_Date, con evento y formato pendientes de confirmar.', 'Illustrative example: Order contains Order_Date, with its event and format awaiting confirmation.'),
    t('Como una fecha escrita en una ficha que necesita explicar qu\u00e9 ocurri\u00f3 ese d\u00eda.', 'Like a date written on a record that needs to explain what happened that day.'),
    t('No se presupone hora, zona horaria, fecha de env\u00edo ni formato de almacenamiento.', 'Time, time zone, shipment date and storage format are not assumed.')
  ], ['element', 'order', 'description'], [
    t('La IA puede comparar usos de nombres de fechas.', 'AI can compare uses of date names.'),
    t('Marca posibles diferencias entre el evento descrito y la etiqueta utilizada.', 'It flags possible differences between the described event and the label used.'),
    t('Ayuda a precisar el significado temporal antes de decidir su representaci\u00f3n.', 'It helps clarify temporal meaning before choosing its representation.'),
    t('Confirmar el evento con los responsables; no sustituir una fecha ambigua por una suposici\u00f3n.', 'Confirm the event with its owners; do not replace an ambiguous date with an assumption.')
  ]);
  concept('status', t('Status: estado', 'Status: status'), 'deepening', [
    t('Elemento ilustrativo para expresar la situaci\u00f3n de un pedido en la respuesta propuesta.', 'An illustrative element expressing an order\u2019s situation in the proposed response.'),
    t('Distingue el valor que describe una situaci\u00f3n de la respuesta completa que lo transporta.', 'It distinguishes the value describing a situation from the complete response carrying it.'),
    t('\u00bfQu\u00e9 significa el estado y qui\u00e9n define sus valores?', 'What does the status mean and who defines its values?'),
    t('Composici\u00f3n ilustrativa de Estado del pedido: Order_ID y Status. No se inventan estados posibles.', 'Illustrative Order status composition: Order_ID and Status. Possible statuses are not invented.'),
    t('Como una anotaci\u00f3n de situaci\u00f3n que necesita un vocabulario acordado.', 'Like a situation note that needs an agreed vocabulary.'),
    t('Este campo no establece un ciclo de vida ni las condiciones para cambiar de estado.', 'This field does not establish a lifecycle or conditions for changing status.')
  ], ['element', 'orderStatus', 'orders'], [
    t('La IA puede localizar estados mencionados expl\u00edcitamente en la evidencia.', 'AI can locate statuses explicitly mentioned in the evidence.'),
    t('Lista los valores encontrados y sus contextos como candidatos de documentaci\u00f3n.', 'It lists found values and their contexts as documentation candidates.'),
    t('Ayuda a preparar preguntas sobre vocabulario sin crear una pol\u00edtica de estados.', 'It helps prepare vocabulary questions without creating a status policy.'),
    t('Confirmar valores y significado; no importar cat\u00e1logos habituales de otros sistemas.', 'Confirm values and meaning; do not import common catalogs from other systems.')
  ]);

  concept('naming', t('Coherencia de nombres', 'Naming consistency'), 'deepening', [
    t('Correspondencia expl\u00edcita entre un nombre usado en el DFD y la entrada que define su significado en el DD.', 'An explicit correspondence between a name used in the DFD and the entry defining its meaning in the DD.'),
    t('Impide que cambios accidentales de vocabulario oculten datos sin definir o diferencias de significado.', 'It prevents accidental vocabulary changes from hiding undefined data or differences in meaning.'),
    t('\u00bfEste nombre remite a la misma definici\u00f3n en ambos modelos?', 'Does this name refer to the same definition in both models?'),
    t('Pedido \u2194 Pedido es coherente. Pedido, Compra y Solicitud son un ejemplo de posibles sin\u00f3nimos accidentales, no equivalencias aprobadas.', 'Order \u2194 Order is consistent. Order, Purchase and Request illustrate possible accidental synonyms, not approved equivalences.'),
    t('Como mantener la misma etiqueta en un mapa y en su \u00edndice.', 'Like keeping the same label on a map and in its index.'),
    t('Nombres parecidos no garantizan igual significado; los alias y conceptos distintos deben modelarse expl\u00edcitamente.', 'Similar names do not guarantee equal meaning; aliases and distinct concepts must be explicitly modeled.')
  ], ['dfd', 'dictionary', 'duplicates'], [
    t('Extensi\u00f3n de IA: comparar etiquetas del DFD y nombres del DD.', 'AI extension: compare DFD labels and DD names.'),
    t('Se\u00f1ala nombres sin entrada o variaciones potencialmente accidentales.', 'It flags names without an entry or potentially accidental variations.'),
    t('Ofrece una lista de correspondencias para revisi\u00f3n humana.', 'It offers a list of correspondences for human review.'),
    t('Revisar contexto y significado antes de renombrar o declarar dos t\u00e9rminos equivalentes.', 'Review context and meaning before renaming or declaring two terms equivalent.')
  ]);
  concept('duplicates', t('Posibles duplicados', 'Possible duplicates'), 'deepening', [
    t('Entradas que parecen describir el mismo dato y requieren comparaci\u00f3n de alcance y uso.', 'Entries appearing to describe the same data and requiring comparison of scope and use.'),
    t('Su revisi\u00f3n evita definiciones redundantes o contradictorias sin borrar distinciones necesarias.', 'Reviewing them avoids redundant or contradictory definitions without erasing necessary distinctions.'),
    t('\u00bfSon dos entradas del mismo concepto o conceptos distintos?', 'Are these two entries for one concept or distinct concepts?'),
    t('Ejemplo ilustrativo: Pedido y Solicitud podr\u00edan coincidir o representar etapas diferentes; el nombre no permite decidirlo.', 'Illustrative example: Order and Request could match or represent different stages; their names do not decide this.'),
    t('Como dos fichas parecidas que deben compararse antes de archivar una.', 'Like two similar records that must be compared before filing one away.'),
    t('Parecido textual no es duplicaci\u00f3n confirmada ni autoriza fusionar entradas.', 'Textual similarity is not confirmed duplication and does not authorize merging entries.')
  ], ['naming', 'description', 'validation'], [
    t('Extensi\u00f3n de IA: detectar pares candidatos por nombre y descripci\u00f3n.', 'AI extension: detect candidate pairs by name and description.'),
    t('Expone similitudes y diferencias que motivan la sospecha.', 'It exposes the similarities and differences behind the suspicion.'),
    t('Prioriza comparaciones para el analista sin alterar el diccionario.', 'It prioritizes comparisons for the analyst without altering the dictionary.'),
    t('Comprobar origen, destino, composici\u00f3n y alcance antes de fusionar o mantener separados.', 'Check source, destination, composition and scope before merging or keeping entries separate.')
  ]);
  concept('traceability', t('Trazabilidad de definiciones', 'Definition traceability'), 'deepening', [
    t('Relaci\u00f3n entre una definici\u00f3n y la evidencia del sistema que respalda sus afirmaciones.', 'The relationship between a definition and the system evidence supporting its claims.'),
    t('Permite revisar por qu\u00e9 se acept\u00f3 un significado y qu\u00e9 revisar cuando cambia el modelo.', 'It allows review of why a meaning was accepted and what to revisit when the model changes.'),
    t('\u00bfQu\u00e9 evidencia respalda esta afirmaci\u00f3n sobre el dato?', 'Which evidence supports this claim about the data?'),
    t('Ejemplo ilustrativo: relacionar una descripci\u00f3n con un requisito aportado y comprobar que el texto respalda esa definici\u00f3n.', 'Illustrative example: link a description to a supplied requirement and check that its text supports that definition.'),
    t('Como el rastro de una decisi\u00f3n que permite volver a la raz\u00f3n documentada.', 'Like a decision trail that leads back to its documented reason.'),
    t('Una referencia no prueba por s\u00ed sola la afirmaci\u00f3n; tampoco equivale al origen de un flujo.', 'A reference alone does not prove a claim; it is also distinct from a flow source.')
  ], ['description', 'sourceDestination', 'validation'], [
    t('Extensi\u00f3n de IA: proponer v\u00ednculos a evidencia realmente aportada.', 'AI extension: propose links to evidence actually supplied.'),
    t('Relaciona afirmaciones con fragmentos disponibles y marca las que carecen de respaldo.', 'It relates claims to available passages and flags unsupported claims.'),
    t('Reduce la b\u00fasqueda documental durante la revisi\u00f3n.', 'It reduces document searching during review.'),
    t('Abrir la evidencia y comprobar respaldo y versi\u00f3n; no aceptar citas, p\u00e1ginas o enlaces inventados.', 'Open the evidence and check support and version; do not accept invented citations, pages or links.')
  ]);
  concept('ai', t('IA para documentar datos', 'AI for data documentation'), 'ai', [
    t('Extensi\u00f3n de IA que ayuda a preparar entradas candidatas del diccionario a partir de material proporcionado.', 'An AI extension helping prepare candidate dictionary entries from supplied material.'),
    t('Permite dedicar m\u00e1s atenci\u00f3n a ambig\u00fcedades mientras automatiza parte de la organizaci\u00f3n inicial.', 'It allows more attention to ambiguities while automating part of the initial organization.'),
    t('\u00bfC\u00f3mo documentar datos con IA sin inventar su significado?', 'How can data be documented with AI without inventing its meaning?'),
    t('Ejemplo ilustrativo: extraer Pedido del DFD y proponer una entrada con campos pendientes de confirmar.', 'Illustrative example: extract Order from the DFD and propose an entry with fields awaiting confirmation.'),
    t('Como un asistente de documentaci\u00f3n que prepara fichas para que un responsable las revise.', 'Like a documentation assistant preparing records for an owner to review.'),
    t('Una definici\u00f3n redactada por IA no es una definici\u00f3n validada ni contenido atribuido al curso.', 'An AI-drafted definition is neither a validated definition nor content attributed to the course.')
  ], ['dfd', 'ai_draft', 'validation', 'dictionary'], [
    t('Conecta el modelo disponible con un borrador revisable de DD.', 'It connects the available model to a reviewable DD draft.'),
    t('Extrae candidatos, identifica elementos, redacta y se\u00f1ala posibles inconsistencias.', 'It extracts candidates, identifies elements, drafts and flags possible inconsistencies.'),
    t('Acelera la preparaci\u00f3n; la autoridad sobre el significado sigue en la evidencia y sus responsables.', 'It speeds up preparation; authority over meaning remains with evidence and its owners.'),
    t('El analista valida nombres, contenido, usos y respaldo antes de aceptar cualquier entrada.', 'The analyst validates names, contents, uses and support before accepting any entry.')
  ]);
  concept('ai_draft', t('Entradas en borrador', 'Draft entries'), 'ai', [
    t('Propuestas de entradas que conservan como pendientes los significados o campos no confirmados.', 'Proposed entries keeping unconfirmed meanings or fields explicitly unresolved.'),
    t('Mantienen visible la diferencia entre una sugerencia de documentaci\u00f3n y un acuerdo sobre los datos.', 'They preserve the visible difference between a documentation suggestion and an agreement about data.'),
    t('\u00bfQu\u00e9 parte de esta entrada est\u00e1 respaldada y qu\u00e9 falta validar?', 'Which part of this entry is supported and what still needs validation?'),
    t('Ejemplo ilustrativo: proponer Order_Date y dejar pendiente qu\u00e9 evento representa.', 'Illustrative example: propose Order_Date and leave the event it represents unresolved.'),
    t('Como un borrador editorial con preguntas abiertas antes de su aprobaci\u00f3n.', 'Like an editorial draft with open questions before approval.'),
    t('Completar todos los campos de una plantilla no demuestra que sus afirmaciones sean correctas.', 'Completing every template field does not demonstrate that its claims are correct.')
  ], ['description', 'traceability', 'validation'], [
    t('La IA organiza afirmaciones disponibles y preguntas pendientes en una propuesta.', 'AI organizes available claims and unresolved questions into a proposal.'),
    t('Distingue contenido extra\u00eddo de inferencias sugeridas.', 'It distinguishes extracted content from suggested inferences.'),
    t('Entrega una base para conversaci\u00f3n y revisi\u00f3n, sin promoverla autom\u00e1ticamente a aceptada.', 'It supplies a basis for discussion and review without automatically promoting it to accepted status.'),
    t('Resolver dudas con evidencia o conservarlas como pendientes; no aprobar por fluidez del texto.', 'Resolve doubts with evidence or keep them pending; do not approve based on fluent wording.')
  ]);
  concept('validation', t('Validaci\u00f3n del analista', 'Analyst validation'), 'deepening', [
    t('Revisi\u00f3n del significado propuesto frente al modelo y a evidencia del sistema antes de aceptar una entrada.', 'Review of proposed meaning against the model and system evidence before accepting an entry.'),
    t('Evita convertir inferencias, contradicciones o ejemplos ilustrativos en especificaciones.', 'It prevents inferences, contradictions or illustrative examples from becoming specifications.'),
    t('\u00bfPodemos justificar esta definici\u00f3n con el modelo y sus responsables?', 'Can we justify this definition using the model and its owners?'),
    t('Ejemplo ilustrativo: confirmar qu\u00e9 evento expresa Order_Date antes de aceptar su definici\u00f3n.', 'Illustrative example: confirm which event Order_Date expresses before accepting its definition.'),
    t('Como una revisi\u00f3n de significado antes de dar por acordado un glosario.', 'Like a meaning review before treating a glossary as agreed.'),
    t('Validar no es aceptar todas las sugerencias de IA ni comprobar solo la ortograf\u00eda.', 'Validation does not mean accepting every AI suggestion or checking spelling alone.')
  ], ['dictionary', 'ai_draft', 'traceability'], [
    t('La IA puede preparar preguntas para la revisi\u00f3n humana.', 'AI can prepare questions for human review.'),
    t('Se\u00f1ala afirmaciones sin respaldo y presenta evidencia disponible para contrastarlas.', 'It flags unsupported claims and presents available evidence for comparison.'),
    t('Facilita la revisi\u00f3n sin asumir la decisi\u00f3n de aceptar significado.', 'It facilitates review without taking over the decision to accept meaning.'),
    t('El analista confirma o corrige; lo no resuelto permanece pendiente y no se presenta como regla.', 'The analyst confirms or corrects; unresolved matters remain pending and are not presented as rules.')
  ]);

  concept('ai_extraction', t('IA \u2192 flujos: extraer candidatos', 'AI \u2192 flows: extract candidates'), 'ai', [
    t('Asistencia para convertir etiquetas de flujo del DFD aportado en nombres candidatos de entradas.', 'Assistance converting flow labels in a supplied DFD into candidate entry names.'),
    t('Reduce omisiones de transcripci\u00f3n al iniciar el diccionario.', 'It reduces transcription omissions when starting the dictionary.'),
    t('\u00bfQu\u00e9 flujos nombrados necesitan una definici\u00f3n?', 'Which named flows need a definition?'),
    t('Ejemplo ilustrativo: reconocer Pedido y Estado del pedido como candidatos separados.', 'Illustrative example: recognize Order and Order status as separate candidates.'),
    t('Como copiar los t\u00edtulos de un mapa a un \u00edndice por revisar.', 'Like copying map labels into an index awaiting review.'),
    t('Extraer un nombre no demuestra qu\u00e9 campos contiene ni que el modelo est\u00e9 completo.', 'Extracting a name does not establish its fields or prove the model is complete.')
  ], ['ai', 'flow', 'dfd', 'ai_draft'], [
    t('IA \u2192 flujos: extraer candidatos a partir de etiquetas visibles.', 'AI \u2192 flows: extract candidates from visible labels.'),
    t('Recoge nombres, origen y destino cuando est\u00e1n representados.', 'It collects names, source and destination when represented.'),
    t('Ahorra inventario manual y muestra qu\u00e9 falta describir.', 'It saves manual inventory work and shows what still needs describing.'),
    t('Cotejar cada candidato con el DFD; corregir etiquetas mal le\u00eddas y no completar datos ausentes.', 'Check each candidate against the DFD; correct misread labels and do not fill absent data.')
  ]);
  concept('ai_identify', t('IA \u2192 elementos: identificar', 'AI \u2192 elements: identify'), 'ai', [
    t('Asistencia para reconocer unidades de datos mencionadas en descripciones proporcionadas.', 'Assistance recognizing data units mentioned in supplied descriptions.'),
    t('Ayuda a distinguir contenido compuesto y campos individuales durante la documentaci\u00f3n.', 'It helps distinguish composite content from individual fields during documentation.'),
    t('\u00bfQu\u00e9 elementos est\u00e1n mencionados y cu\u00e1les solo estamos suponiendo?', 'Which elements are mentioned and which are only assumed?'),
    t('Ejemplo ilustrativo: proponer Quantity como elemento y mantener pendiente su unidad.', 'Illustrative example: propose Quantity as an element and leave its unit unresolved.'),
    t('Como subrayar piezas nombradas en una descripci\u00f3n antes de organizarlas.', 'Like underlining named pieces in a description before organizing them.'),
    t('Los campos habituales en otros pedidos no son autom\u00e1ticamente campos de este sistema.', 'Fields common in other orders are not automatically fields of this system.')
  ], ['ai', 'element', 'structure', 'quantity'], [
    t('IA \u2192 elementos: identificar unidades candidatas.', 'AI \u2192 elements: identify candidate units.'),
    t('Relaciona cada propuesta con una menci\u00f3n disponible o la marca como hip\u00f3tesis.', 'It relates each proposal to an available mention or marks it as a hypothesis.'),
    t('Facilita separar la evidencia de las suposiciones de composici\u00f3n.', 'It helps separate evidence from composition assumptions.'),
    t('Confirmar pertenencia y significado de cada elemento; no aceptar campos por mera plausibilidad.', 'Confirm each element\u2019s membership and meaning; do not accept fields merely because they are plausible.')
  ]);
  concept('ai_definition', t('IA \u2192 definiciones: redactar', 'AI \u2192 definitions: draft'), 'ai', [
    t('Asistencia de redacci\u00f3n para expresar con claridad un significado respaldado por material aportado.', 'Writing assistance expressing meaning supported by supplied material clearly.'),
    t('Hace las entradas m\u00e1s legibles y permite detectar frases ambiguas.', 'It makes entries more readable and helps detect ambiguous wording.'),
    t('\u00bfLa redacci\u00f3n conserva el significado documentado?', 'Does the wording preserve the documented meaning?'),
    t('Ejemplo ilustrativo: convertir notas sobre una solicitud de productos en una descripci\u00f3n de Pedido sin a\u00f1adir reglas de pago.', 'Illustrative example: turn notes about a product request into an Order description without adding payment rules.'),
    t('Como un editor que aclara una frase sin decidir los hechos.', 'Like an editor clarifying a sentence without deciding the facts.'),
    t('Una definici\u00f3n elegante sigue siendo borrador mientras no se valide su significado.', 'An elegant definition remains a draft until its meaning is validated.')
  ], ['ai', 'description', 'ai_draft', 'validation'], [
    t('IA \u2192 definiciones: redactar borradores.', 'AI \u2192 definitions: draft wording.'),
    t('Resume material disponible y conserva preguntas sobre alcance.', 'It summarizes available material and preserves questions about scope.'),
    t('Reduce trabajo de redacci\u00f3n sin reemplazar el acuerdo sobre significado.', 'It reduces writing work without replacing agreement on meaning.'),
    t('Comprobar cada afirmaci\u00f3n contra la evidencia y retirar cualquier regla a\u00f1adida.', 'Check each claim against the evidence and remove any added rule.')
  ]);
  concept('ai_duplicates', t('IA \u2192 duplicados: detectar candidatos', 'AI \u2192 duplicates: detect candidates'), 'ai', [
    t('Comparaci\u00f3n asistida de entradas para encontrar posibles definiciones repetidas.', 'Assisted comparison of entries to find possibly repeated definitions.'),
    t('Ayuda a revisar incoherencias cuando el diccionario crece.', 'It helps review inconsistencies as the dictionary grows.'),
    t('\u00bfEstas entradas comparten significado o solo se parecen?', 'Do these entries share meaning or only look similar?'),
    t('Ejemplo ilustrativo: proponer comparar Pedido y Solicitud sin fusionarlos.', 'Illustrative example: propose comparing Order and Request without merging them.'),
    t('Como poner dos fichas lado a lado para que una persona revise sus diferencias.', 'Like placing two records side by side for a person to review their differences.'),
    t('Una alerta de similitud no confirma duplicaci\u00f3n ni autoriza borrar una entrada.', 'A similarity alert does not confirm duplication or authorize deleting an entry.')
  ], ['ai', 'duplicates', 'naming', 'validation'], [
    t('IA \u2192 duplicados: detectar pares para revisi\u00f3n.', 'AI \u2192 duplicates: detect pairs for review.'),
    t('Compara etiquetas, descripciones y composiciones disponibles.', 'It compares available labels, descriptions and compositions.'),
    t('Prioriza revisiones y explica por qu\u00e9 dos entradas parecen coincidir.', 'It prioritizes reviews and explains why two entries appear to match.'),
    t('El analista decide equivalencia tras revisar usos y alcance; conservar diferencias justificadas.', 'The analyst decides equivalence after reviewing uses and scope; preserve justified differences.')
  ]);
  concept('ai_naming', t('IA \u2192 nombres: comprobar coherencia', 'AI \u2192 naming: check consistency'), 'ai', [
    t('Comparaci\u00f3n asistida entre etiquetas del DFD y nombres de entradas del DD.', 'Assisted comparison between DFD labels and DD entry names.'),
    t('Localiza t\u00e9rminos que podr\u00edan dejar al lector sin una definici\u00f3n clara.', 'It locates terms that might leave a reader without a clear definition.'),
    t('\u00bfCada nombre del modelo conduce a la entrada correcta?', 'Does each model name lead to the correct entry?'),
    t('Ejemplo ilustrativo: se\u00f1alar que Pedido en el DFD aparece como Compra en un borrador del DD.', 'Illustrative example: flag that Order in the DFD appears as Purchase in a DD draft.'),
    t('Como un corrector de referencias cruzadas entre un mapa y su glosario.', 'Like a cross-reference checker between a map and its glossary.'),
    t('Coherencia de nombres no equivale a renombrar autom\u00e1ticamente conceptos diferentes.', 'Naming consistency does not mean automatically renaming different concepts.')
  ], ['ai', 'naming', 'dfd', 'dictionary'], [
    t('IA \u2192 nombres: comprobar correspondencias.', 'AI \u2192 naming: check correspondences.'),
    t('Presenta nombres sin correspondencia y posibles variantes accidentales.', 'It presents unmatched names and possible accidental variants.'),
    t('Acelera el cotejo de vocabulario entre representaciones.', 'It speeds up vocabulary comparison between representations.'),
    t('Confirmar significado y alias expl\u00edcitos antes de corregir una etiqueta.', 'Confirm meaning and explicit aliases before correcting a label.')
  ]);
  concept('ai_traceability', t('IA \u2192 trazabilidad: vincular evidencia', 'AI \u2192 traceability: link evidence'), 'ai', [
    t('Asistencia para relacionar afirmaciones de una entrada con evidencia disponible del sistema.', 'Assistance relating claims in an entry to available system evidence.'),
    t('Hace revisable el respaldo de las definiciones propuestas.', 'It makes the support for proposed definitions reviewable.'),
    t('\u00bfLa referencia propuesta realmente respalda esta definici\u00f3n?', 'Does the proposed reference actually support this definition?'),
    t('Ejemplo ilustrativo: vincular la descripci\u00f3n de Pedido con el fragmento aportado que explica la solicitud de productos.', 'Illustrative example: link the Order description to the supplied passage explaining the product request.'),
    t('Como una nota de procedencia que permite volver al texto utilizado.', 'Like a provenance note allowing a return to the text used.'),
    t('Vincular evidencia no permite inventar referencias ni atribuir al curso una propuesta de IA.', 'Linking evidence does not permit invented references or attributing an AI proposal to the course.')
  ], ['ai', 'traceability', 'description', 'validation'], [
    t('IA \u2192 trazabilidad: proponer v\u00ednculos a evidencia aportada.', 'AI \u2192 traceability: propose links to supplied evidence.'),
    t('Relaciona afirmaciones con fragmentos disponibles y se\u00f1ala ausencia de respaldo.', 'It relates claims to available passages and flags missing support.'),
    t('Facilita auditar el origen documental de cada significado propuesto.', 'It helps audit the documentary origin of each proposed meaning.'),
    t('Revisar el contenido y la versi\u00f3n de la evidencia; rechazar enlaces o citas no comprobables.', 'Review evidence content and version; reject unverifiable links or citations.')
  ]);

  var orderFields = ['order_id', 'customer_id', 'product_code', 'quantity', 'order_date'].map(id);
  atlas.models.w3d_dictionary = {
    defaultEntry: 'order',
    qa: {
      diagramId: '05', viewKey: '05', rootSelector: '.w3d',
      controls: {
        entry: { selector: '[data-w3d-select]', event: 'change',
          accessibleName: t('Seleccionar entrada del diccionario', 'Select dictionary entry'),
          values: ['order', 'orderStatus', 'orders'], defaultValue: 'order' },
        definition: { selector: '[data-w3d-entry]', scope: 'local replacement only' },
        announcement: { selector: '[data-w3d-announcement]', role: 'status', live: 'polite' },
        comparison: { selector: '.w3d-comparison [data-w3-detail]',
          namingSelector: '.w3d-comparison [data-w3-detail="w3d_naming"]' },
        fields: { selector: '.w3d-fields [data-w3-detail]',
          expectedByEntry: {
            order: orderFields.slice(), orderStatus: ['w3d_order_id', 'w3d_status'],
            orders: orderFields.concat(id('status'))
          } },
        lens: { owner: 'api.support', selector: '[data-w3-lens]',
          figureAttribute: 'data-lens', figureClass: 'is-ai', values: ['base', 'ai'],
          event: 'w3:lenschange', eventDetail: { lens: 'base|ai' },
          preserves: ['selected entry', 'native DOM', 'support DOM', 'detail delegation'] }
      },
      locales: ['es', 'en'],
      viewports: [{ width: 1920, height: 1080 }, { width: 1366, height: 768 },
        { width: 768, height: 1024 }, { width: 390, height: 844 }],
      checks: ['Open every field in every entry in both lenses and locales',
        'Select another entry while AI is active without replacing support',
        'Dispatch w3:lenschange without replacing the native definition',
        'Verify cleanup removes the scoped change listener',
        'Verify no horizontal page overflow at the listed viewports'],
      scope: 'D05 custom view only; shell integration must be checked in the main atlas'
    },
    fieldNames: {
      w3d_order_id: 'Order_ID', w3d_customer_id: 'Customer_ID',
      w3d_product_code: 'Product_Code', w3d_quantity: 'Quantity',
      w3d_order_date: 'Order_Date', w3d_status: 'Status'
    },
    entries: [
      { key: 'order', concept: id('order'), kindConcept: id('flow'),
        name: t('Pedido', 'Order'),
        description: t('Informaci\u00f3n enviada por el cliente para solicitar productos.', 'Information submitted by the customer to request products.'),
        source: { concept: id('entity'), label: t('Cliente', 'Customer') },
        destination: { concept: id('process'), label: t('Recibir / procesar pedido', 'Receive / process order') },
        composition: orderFields.slice(),
        note: t('Composici\u00f3n ilustrativa: estos cinco campos son posibles elementos, no requisitos confirmados del caso.', 'Illustrative composition: these five fields are possible elements, not confirmed case requirements.') },
      { key: 'orderStatus', concept: id('orderStatus'), kindConcept: id('flow'),
        name: t('Estado del pedido', 'Order status'),
        description: t('Ejemplo ilustrativo: informaci\u00f3n que comunica la situaci\u00f3n de un pedido identificado.', 'Illustrative example: information communicating the situation of an identified order.'),
        source: { concept: id('process'), label: t('Consultar estado', 'Query status') },
        destination: { concept: id('entity'), label: t('Cliente', 'Customer') },
        composition: ['order_id', 'status'].map(id),
        note: t('Origen, destino y composici\u00f3n ilustrativos. Los valores de Status y sus cambios requieren evidencia del sistema.', 'Illustrative source, destination and composition. Status values and changes require system evidence.') },
      { key: 'orders', concept: id('orders'), kindConcept: id('store'),
        name: t('D1 Pedidos', 'D1 Orders'),
        description: t('Ejemplo ilustrativo: conserva informaci\u00f3n de pedidos para su registro y consulta. No especifica tecnolog\u00eda.', 'Illustrative example: retains order information for recording and consultation. It specifies no technology.'),
        source: { concept: id('process'), label: t('Recibir / procesar pedido (escribe)', 'Receive / process order (writes)') },
        destination: { concept: id('process'), label: t('Consultar estado (lee)', 'Query status (reads)') },
        composition: orderFields.concat(id('status')),
        note: t('Campos y usos ilustrativos: origen indica qui\u00e9n escribe y destino qui\u00e9n lee. No es un esquema de base de datos confirmado.', 'Illustrative fields and uses: source identifies the writer and destination the reader. This is not a confirmed database schema.') }
    ]
  };

  function relationship(name, target, action, detail, value) {
    return { id: id('rel_' + name), from: id('ai'), to: id(target), action: action,
      concept: id(detail), value: value };
  }
  atlas.diagrams['05'] = {
    id: '05', kind: 'dictionary',
    title: t('Diccionario de datos', 'Data dictionary'),
    question: t('\u00bfQu\u00e9 significa cada dato del sistema?', 'What does each piece of system data mean?'),
    statement: t('El DFD muestra d\u00f3nde se mueven los datos; el DD explica qu\u00e9 significan.', 'The DFD shows where data moves; the DD explains what it means.'),
    definition: t('Repositorio central que documenta y organiza los datos utilizados por el sistema.', 'A central repository documenting and organizing the data used by the system.'),
    transition: t('Ya sabemos qu\u00e9 datos existen y c\u00f3mo se mueven. \u00bfC\u00f3mo representamos la l\u00f3gica que ocurre dentro de un proceso?', 'We know which data exists and how it moves. How do we represent the logic inside a process?'),
    root: id('dictionary'),
    nodes: ['flow', 'store', 'element', 'process', 'entity', 'structure', 'description', 'sourceDestination'].map(id),
    aiNode: id('ai'),
    aiQuestion: t('\u00bfC\u00f3mo puede la IA ayudar a documentar datos sin inventar definiciones que no existen en el sistema?', 'How can AI help document data without inventing definitions that do not exist in the system?'),
    aiMessage: t('La IA puede proponer definiciones. El significado real de los datos debe provenir del modelo y de la evidencia del sistema. Un borrador de IA no es una definici\u00f3n validada.', 'AI can propose definitions. The actual meaning of data must come from the model and system evidence. An AI draft is not a validated definition.'),
    aiFlow: ['dfd', 'ai', 'ai_draft', 'validation', 'dictionary'].map(id),
    aiRelationships: [
      relationship('extraction', 'flow', t('Extraer candidatos', 'Extract candidates'), 'ai_extraction', t('Re\u00fane etiquetas del DFD sin inventar contenido ausente.', 'Collects DFD labels without inventing missing content.')),
      relationship('identify', 'element', t('Identificar elementos', 'Identify elements'), 'ai_identify', t('Distingue campos mencionados de propuestas pendientes.', 'Distinguishes mentioned fields from unresolved proposals.')),
      relationship('definition', 'description', t('Redactar definiciones', 'Draft definitions'), 'ai_definition', t('Aclara el texto; el significado sigue sujeto a validaci\u00f3n.', 'Clarifies wording; meaning remains subject to validation.')),
      relationship('duplicates', 'duplicates', t('Detectar posibles duplicados', 'Detect possible duplicates'), 'ai_duplicates', t('Propone pares para comparar sin fusionar entradas.', 'Proposes pairs to compare without merging entries.')),
      relationship('naming', 'naming', t('Comprobar nombres', 'Check naming'), 'ai_naming', t('Coteja etiquetas del DFD y entradas del DD.', 'Compares DFD labels and DD entries.')),
      relationship('traceability', 'traceability', t('Vincular evidencia', 'Link evidence'), 'ai_traceability', t('Relaciona afirmaciones con evidencia aportada y revisable.', 'Relates claims to supplied, reviewable evidence.'))
    ]
  };
}());
