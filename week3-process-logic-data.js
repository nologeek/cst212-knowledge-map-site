(function (global) {
  'use strict';

  var atlas = global.CST212_W3 = global.CST212_W3 || {};
  ['diagrams', 'concepts', 'sources', 'models'].forEach(function (key) {
    atlas[key] = atlas[key] || {};
  });
  function t(es, en) { return { es: es, en: en }; }
  function concept(key, layer, content) {
    var id = 'w3p_' + key;
    content.id = id;
    content.layer = layer;
    // Only foundation content cites the already registered course source.
    // Deepening and AI content explicitly identify their separate status.
    content.sources = layer === 'foundation' ? ['w3-course'] : [];
    atlas.concepts[id] = content;
    return id;
  }

  concept('logic', 'foundation', {
    label: t('L\u00f3gica de procesos', 'Process logic'),
    what: t('Describe el orden de las acciones y las condiciones que eligen un camino dentro de un proceso.', 'Describes the order of actions and the conditions that choose a path inside a process.'),
    why: t('Un nombre como procesar pedido no explica qu\u00e9 hacer cuando hay o no hay disponibilidad.', 'A name such as process order does not explain what to do when inventory is or is not available.'),
    question: t('\u00bfQu\u00e9 ocurre dentro del proceso y qu\u00e9 condici\u00f3n cambia el camino?', 'What happens inside the process, and which condition changes the path?'),
    example: t('Ejemplo aportado: recibir pedido, consultar inventario y elegir entre crear la orden de env\u00edo o enviar el aviso de no disponibilidad.', 'Provided example: receive an order, check inventory, and choose between creating a shipping order and sending an unavailable message.'),
    analogy: t('Como abrir las instrucciones de una tarea para ver sus pasos y sus bifurcaciones.', 'Like opening the instructions for a task to see its steps and forks.'),
    related: ['w3p_flowchart', 'w3p_pseudocode', 'w3p_blackbox'],
    notConfuse: t('La l\u00f3gica interna no es el movimiento de datos entre procesos que representa un DFD.', 'Internal logic is distinct from the movement of data between processes represented by a DFD.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: convertir una descripci\u00f3n validada en un borrador de pasos.', 'AI extension: turn a validated description into a draft sequence.'),
      does: t('Propone acciones y decisiones vinculadas con las frases del requisito.', 'Proposes actions and decisions linked to the requirement wording.'),
      changes: t('Acelera la expresi\u00f3n inicial de la l\u00f3gica, sin establecer reglas del negocio.', 'Speeds up the initial expression of logic without establishing business rules.'),
      validate: t('Contrastar cada acci\u00f3n y ambas ramas con la descripci\u00f3n aportada.', 'Compare each action and both branches with the provided description.')
    }
  });
  concept('flowchart', 'foundation', {
    label: t('Diagrama de flujo', 'Flowchart'),
    what: t('Representaci\u00f3n visual de la secuencia de pasos, decisiones y caminos que sigue un proceso.', 'A visual representation of the sequence of steps, decisions, and paths followed by a process.'),
    why: t('Permite seguir una ejecuci\u00f3n y reconocer de un vistazo d\u00f3nde se separan y terminan sus caminos.', 'Lets a reader follow an execution and see where its paths split and end.'),
    question: t('\u00bfQu\u00e9 ocurre primero, qu\u00e9 sigue y qu\u00e9 decisi\u00f3n cambia el camino?', 'What happens first, what follows, and which decision changes the path?'),
    example: t('En el ejemplo aportado, el rombo de disponibilidad conduce a crear la orden de env\u00edo o a enviar el aviso.', 'In the provided example, the availability diamond leads to creating a shipping order or sending the message.'),
    analogy: t('Como un mapa de recorrido que indica qu\u00e9 desv\u00edo tomar en una bifurcaci\u00f3n.', 'Like a route map showing which turn to take at a fork.'),
    related: ['w3p_start', 'w3p_available', 'w3p_arrows', 'w3p_comparison'],
    notConfuse: t('Sus flechas expresan secuencia de control; no deben leerse como flujos de datos de un DFD.', 'Its arrows express control sequence; they should not be read as DFD data flows.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: elaborar un borrador visual desde el requisito.', 'AI extension: draft a visual representation from the requirement.'),
      does: t('Propone s\u00edmbolos, conexiones y r\u00f3tulos S\u00ed/No.', 'Proposes symbols, connections, and Yes/No labels.'),
      changes: t('Reduce el trabajo de dibujar una primera versi\u00f3n.', 'Reduces the work of drawing a first version.'),
      validate: t('Revisar la direcci\u00f3n de las flechas, los s\u00edmbolos y que ambos caminos lleguen a Fin.', 'Review arrow direction, symbols, and whether both paths reach End.')
    }
  });
  concept('pseudocode', 'foundation', {
    label: t('Pseudoc\u00f3digo', 'Pseudocode'),
    what: t('Descripci\u00f3n estructurada de la l\u00f3gica en lenguaje cercano al humano, independiente de la sintaxis de un lenguaje de programaci\u00f3n.', 'A structured description of logic in language close to human language, independent of any programming language syntax.'),
    why: t('Hace expl\u00edcitos la condici\u00f3n, sus alternativas y el alcance de cada acci\u00f3n.', 'Makes the condition, its alternatives, and the scope of each action explicit.'),
    question: t('\u00bfC\u00f3mo expresar la misma secuencia y decisi\u00f3n con instrucciones legibles?', 'How can the same sequence and decision be expressed as readable instructions?'),
    example: t('SI hay disponibilidad ENTONCES crear orden de env\u00edo; SI NO, enviar aviso de no disponibilidad; FIN SI.', 'IF inventory is available THEN create a shipping order; ELSE send an unavailable message; END IF.'),
    analogy: t('Como una receta escrita que indica qu\u00e9 alternativa seguir seg\u00fan una condici\u00f3n.', 'Like a written recipe that says which alternative to follow for a condition.'),
    related: ['w3p_flowchart', 'w3p_available', 'w3p_branchclosure', 'w3p_comparison'],
    notConfuse: t('No es c\u00f3digo fuente ejecutable: no fija tipos, bibliotecas ni una implementaci\u00f3n.', 'It is not executable source code: it does not specify types, libraries, or an implementation.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: redactar instrucciones estructuradas a partir de las mismas reglas.', 'AI extension: draft structured instructions from the same rules.'),
      does: t('Expresa la bifurcaci\u00f3n con SI, SI NO y FIN SI, sin agregar acciones.', 'Expresses the branch with IF, ELSE, and END IF without adding actions.'),
      changes: t('Facilita comparar el texto con la vista visual antes de programar.', 'Makes it easier to compare the text with the visual view before programming.'),
      validate: t('Comprobar que la sangr\u00eda y las condiciones conservan exactamente las dos ramas.', 'Check that indentation and conditions preserve exactly the two branches.')
    }
  });
  concept('dfd', 'foundation', {
    label: t('DFD \u2260 diagrama de flujo', 'DFD \u2260 flowchart'),
    what: t('El DFD representa qu\u00e9 informaci\u00f3n se mueve entre componentes; el diagrama de flujo representa c\u00f3mo se ordenan pasos y decisiones dentro de un proceso.', 'A DFD represents what information moves between components; a flowchart represents how steps and decisions are ordered inside a process.'),
    why: t('Evita interpretar una flecha de datos como una instrucci\u00f3n temporal o insertar decisiones de control en un DFD.', 'Prevents reading a data arrow as a timing instruction or inserting control decisions into a DFD.'),
    question: t('\u00bfEsta flecha transporta informaci\u00f3n o indica el siguiente paso?', 'Does this arrow carry information or indicate the next step?'),
    example: t('Comparaci\u00f3n ilustrativa: pedido que entra a un proceso es informaci\u00f3n; consultar inventario antes de decidir es secuencia.', 'Illustrative comparison: an order entering a process is information; checking inventory before deciding is sequence.'),
    analogy: t('El DFD se parece a un mapa de entregas; el diagrama de flujo, a las instrucciones para realizar una entrega.', 'A DFD resembles a delivery map; a flowchart resembles instructions for making a delivery.'),
    related: ['w3p_logic', 'w3p_flowchart', 'w3p_blackbox', 'w3p_arrows'],
    notConfuse: t('Ambos pueden mostrar procesos, pero no responden a la misma pregunta ni usan las flechas con el mismo significado.', 'Both may show processes, but they answer different questions and give arrows different meanings.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: revisar si una explicaci\u00f3n mezcla movimiento de datos con control.', 'AI extension: review whether an explanation mixes data movement with control.'),
      does: t('Se\u00f1ala r\u00f3tulos y decisiones cuya funci\u00f3n parece incompatible con la notaci\u00f3n elegida.', 'Flags labels and decisions whose role seems incompatible with the chosen notation.'),
      changes: t('Ayuda a detectar una confusi\u00f3n conceptual antes de detallar el dibujo.', 'Helps detect a conceptual confusion before detailing the drawing.'),
      validate: t('El analista identifica la pregunta del modelo antes de aceptar una correcci\u00f3n.', 'The analyst identifies the model question before accepting a correction.')
    }
  });
  concept('comparison', 'foundation', {
    label: t('Diagrama, pseudoc\u00f3digo y c\u00f3digo fuente', 'Flowchart, pseudocode, and source code'),
    what: t('El diagrama ofrece una visi\u00f3n visual de secuencia y ramas; el pseudoc\u00f3digo expresa la misma l\u00f3gica en texto estructurado. El c\u00f3digo fuente la implementa en un lenguaje concreto.', 'A flowchart gives a visual overview of sequence and branches; pseudocode expresses the same logic as structured text. Source code implements it in a specific language.'),
    why: t('Permite elegir una representaci\u00f3n legible sin confundir un modelo acordado con un programa terminado.', 'Helps choose a readable representation without confusing an agreed model with a finished program.'),
    question: t('\u00bfLas dos representaciones eligen la misma acci\u00f3n para la misma disponibilidad?', 'Do both representations select the same action for the same availability?'),
    example: t('S\u00ed en el rombo equivale a la rama ENTONCES; No equivale a SI NO. Ninguna vista representa el c\u00f3digo fuente final.', 'Yes at the diamond corresponds to the THEN branch; No corresponds to ELSE. Neither view represents final source code.'),
    analogy: t('Como comparar un plano de ruta, instrucciones escritas y el veh\u00edculo que realiza el recorrido.', 'Like comparing a route map, written instructions, and the vehicle that performs the journey.'),
    related: ['w3p_flowchart', 'w3p_pseudocode', 'w3p_paths'],
    notConfuse: t('Cambiar de vista no cambia las reglas; pasar a c\u00f3digo exigir\u00eda decisiones de implementaci\u00f3n que este ejemplo no aporta.', 'Switching views does not change the rules; moving to code would require implementation decisions that this example does not provide.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: comparar versiones visuales y textuales de una regla.', 'AI extension: compare visual and textual versions of a rule.'),
      does: t('Busca condiciones omitidas, ramas invertidas o acciones agregadas al traducir.', 'Looks for omitted conditions, reversed branches, or added actions during translation.'),
      changes: t('Agiliza la revisi\u00f3n de equivalencia entre representaciones.', 'Speeds up equivalence review between representations.'),
      validate: t('Recorrer S\u00ed y No en ambas vistas y contrastar sus resultados con el requisito.', 'Trace Yes and No in both views and compare their outcomes with the requirement.')
    }
  });
  concept('blackbox', 'deepening', {
    label: t('Abrir la caja negra', 'Open the black box'),
    what: t('Profundizaci\u00f3n acad\u00e9mica: en un nivel del DFD, un proceso puede verse por sus entradas y salidas sin mostrar sus pasos internos.', 'Academic deepening: at one DFD level, a process can be viewed through its inputs and outputs without showing its internal steps.'),
    why: t('Ayuda a separar lo que un proceso recibe y produce de la forma en que toma decisiones internamente.', 'Helps separate what a process receives and produces from how it makes internal decisions.'),
    question: t('\u00bfQu\u00e9 necesitamos abrir para entender c\u00f3mo transforma sus entradas?', 'What do we need to open to understand how it transforms its inputs?'),
    example: t('Lectura ilustrativa: abrir procesar pedido revela la consulta de inventario y la bifurcaci\u00f3n de disponibilidad.', 'Illustrative reading: opening process order reveals the inventory check and the availability branch.'),
    analogy: t('Como observar una m\u00e1quina por lo que entra y sale, y luego abrir su cubierta para estudiar los pasos.', 'Like observing a machine through what enters and leaves, then opening its cover to study the steps.'),
    related: ['w3p_dfd', 'w3p_logic', 'w3p_description'],
    notConfuse: t('Esta met\u00e1fora no convierte el diagrama de flujo en un DFD hijo ni agrega reglas al proceso.', 'This metaphor does not turn the flowchart into a child DFD or add rules to the process.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: ayudar a formular preguntas sobre el interior a\u00fan no descrito.', 'AI extension: help formulate questions about an interior that has not yet been described.'),
      does: t('Identifica acciones que necesitar\u00edan una explicaci\u00f3n para conectar entradas y salidas.', 'Identifies actions that would need explanation to connect inputs and outputs.'),
      changes: t('Hace visibles vac\u00edos de descripci\u00f3n sin rellenarlos como hechos.', 'Makes description gaps visible without filling them as facts.'),
      validate: t('Solicitar evidencia del proceso real antes de aceptar un paso interno propuesto.', 'Request evidence of the actual process before accepting a proposed internal step.')
    }
  });
  concept('start', 'foundation', {
    label: t('Inicio', 'Start'),
    what: t('Terminador que marca el punto de entrada al recorrido representado.', 'A terminator marking the entry point of the represented path.'),
    why: t('Da un comienzo inequ\u00edvoco para seguir la secuencia del pedido.', 'Gives an unambiguous beginning for following the order sequence.'),
    question: t('\u00bfDesde d\u00f3nde se comienza a leer este proceso?', 'Where does reading this process begin?'),
    example: t('Inicio conduce a recibir pedido en el ejemplo aportado.', 'Start leads to receive order in the provided example.'),
    analogy: t('Como la salida se\u00f1alada de un recorrido.', 'Like the marked starting point of a route.'),
    related: ['w3p_receive', 'w3p_end', 'w3p_flowchart'],
    notConfuse: t('El terminador no es una entidad externa ni una operaci\u00f3n que consulta datos.', 'A terminator is neither an external entity nor an operation that queries data.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: comprobar que el borrador tiene una entrada clara.', 'AI extension: check that the draft has a clear entry.'),
      does: t('Relaciona Inicio con el primer paso descrito.', 'Connects Start with the first described step.'),
      changes: t('Facilita encontrar pasos iniciales desconectados.', 'Helps find disconnected initial steps.'),
      validate: t('Confirmar que el primer paso sigue siendo recibir pedido.', 'Confirm that the first step is still receive order.')
    }
  });
  concept('receive', 'foundation', {
    label: t('Recibir pedido', 'Receive order'),
    what: t('Paso de entrada que incorpora el pedido al proceso; se dibuja con el s\u00edmbolo de entrada/salida.', 'An input step that brings the order into the process; it uses the input/output symbol.'),
    why: t('La consulta posterior necesita el pedido recibido como contexto.', 'The later check needs the received order as context.'),
    question: t('\u00bfQu\u00e9 entrada llega antes de consultar el inventario?', 'What input arrives before checking inventory?'),
    example: t('El ejemplo aportado recibe el pedido y luego consulta inventario, sin a\u00f1adir validaciones no indicadas.', 'The provided example receives the order and then checks inventory, without adding unspecified validations.'),
    analogy: t('Como recibir una solicitud antes de decidir c\u00f3mo atenderla.', 'Like receiving a request before deciding how to fulfill it.'),
    related: ['w3p_start', 'w3p_inventory', 'w3p_unavailable'],
    notConfuse: t('Recibir un pedido no confirma su disponibilidad ni realiza un cobro.', 'Receiving an order neither confirms its availability nor charges a payment.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: reconocer la entrada expl\u00edcita de la descripci\u00f3n.', 'AI extension: recognize the explicit input in the description.'),
      does: t('Propone un paso de recepci\u00f3n y su lugar en la secuencia.', 'Proposes a receiving step and its position in the sequence.'),
      changes: t('Ayuda a conservar la entrada al pasar de texto a diagrama.', 'Helps preserve the input when moving from text to diagram.'),
      validate: t('No suponer campos obligatorios ni controles adicionales que el caso no especifica.', 'Do not assume required fields or additional checks that the case does not specify.')
    }
  });
  concept('inventory', 'foundation', {
    label: t('Consultar inventario', 'Check inventory'),
    what: t('Acci\u00f3n de proceso que consulta el inventario antes de evaluar disponibilidad; se representa con un rect\u00e1ngulo.', 'A process action that checks inventory before evaluating availability; it is represented by a rectangle.'),
    why: t('Separa obtener informaci\u00f3n de decidir qu\u00e9 camino seguir con ella.', 'Separates obtaining information from deciding which path to follow with it.'),
    question: t('\u00bfQu\u00e9 acci\u00f3n prepara la decisi\u00f3n de disponibilidad?', 'What action prepares the availability decision?'),
    example: t('En la secuencia aportada, consultar inventario ocurre despu\u00e9s de recibir pedido y antes del rombo.', 'In the provided sequence, checking inventory happens after receiving the order and before the diamond.'),
    analogy: t('Como consultar un tablero de existencias antes de elegir una respuesta.', 'Like checking a stock board before choosing a response.'),
    related: ['w3p_receive', 'w3p_available', 'w3p_edgecases'],
    notConfuse: t('Consultar inventario es una acci\u00f3n; el inventario como almac\u00e9n de datos ser\u00eda otro concepto.', 'Checking inventory is an action; inventory as a data store would be a different concept.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: distinguir la consulta de la condici\u00f3n que utiliza su resultado.', 'AI extension: distinguish the check from the condition that uses its result.'),
      does: t('Propone la consulta como paso previo al rombo.', 'Proposes the check as a step before the diamond.'),
      changes: t('Hace m\u00e1s f\u00e1cil detectar una decisi\u00f3n sin informaci\u00f3n previa.', 'Makes it easier to detect a decision with no preceding information.'),
      validate: t('Verificar el orden y dejar como pregunta el caso de un valor ausente.', 'Verify the order and leave a missing value as an open question.')
    }
  });
  concept('available', 'foundation', {
    label: t('\u00bfHay disponibilidad?', 'Available?'),
    what: t('Decisi\u00f3n binaria representada con un rombo: S\u00ed y No seleccionan acciones alternativas.', 'A binary decision represented by a diamond: Yes and No select alternative actions.'),
    why: t('Explicita por qu\u00e9 una ejecuci\u00f3n crea la orden de env\u00edo y otra env\u00eda un aviso.', 'Explains why one execution creates a shipping order and another sends a message.'),
    question: t('\u00bfQu\u00e9 rama corresponde a la disponibilidad seleccionada?', 'Which branch matches the selected availability?'),
    example: t('S\u00ed conduce a crear orden de env\u00edo; No conduce a enviar aviso de no disponibilidad. Ambas ramas terminan.', 'Yes leads to create shipping order; No leads to send unavailable message. Both branches end.'),
    analogy: t('Como una bifurcaci\u00f3n con dos se\u00f1ales que dependen de una sola respuesta.', 'Like a fork with two signs depending on a single answer.'),
    related: ['w3p_inventory', 'w3p_ship', 'w3p_unavailable', 'w3p_branchclosure'],
    notConfuse: t('S\u00ed y No son resultados de una condici\u00f3n, no dos acciones simult\u00e1neas. Un dato ausente no se convierte aqu\u00ed en No.', 'Yes and No are outcomes of a condition, not simultaneous actions. A missing value is not treated as No here.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: identificar la condici\u00f3n y sus dos alternativas.', 'AI extension: identify the condition and its two alternatives.'),
      does: t('Relaciona S\u00ed con ENTONCES y No con SI NO.', 'Maps Yes to THEN and No to ELSE.'),
      changes: t('Facilita revisar ramas invertidas entre diagrama y texto.', 'Helps review reversed branches between diagram and text.'),
      validate: t('Probar ambas respuestas sin inventar umbrales de existencias ni condiciones adicionales.', 'Test both answers without inventing stock thresholds or additional conditions.')
    }
  });
  concept('ship', 'foundation', {
    label: t('Crear orden de env\u00edo', 'Create shipping order'),
    what: t('Acci\u00f3n de proceso de la rama S\u00ed; crea la orden de env\u00edo y se representa con un rect\u00e1ngulo.', 'The process action on the Yes branch; it creates the shipping order and is represented by a rectangle.'),
    why: t('Expresa el resultado indicado cuando la decisi\u00f3n confirma disponibilidad.', 'Expresses the specified outcome when the decision confirms availability.'),
    question: t('\u00bfQu\u00e9 acci\u00f3n est\u00e1 permitida por la rama S\u00ed del ejemplo?', 'Which action belongs to the Yes branch of the example?'),
    example: t('Disponibilidad S\u00ed: crear orden de env\u00edo y llegar a Fin.', 'Availability Yes: create shipping order and reach End.'),
    analogy: t('Como preparar una instrucci\u00f3n de despacho una vez elegida la ruta correspondiente.', 'Like preparing a dispatch instruction after selecting the corresponding route.'),
    related: ['w3p_available', 'w3p_end', 'w3p_unavailable'],
    notConfuse: t('Crear la orden no significa que el env\u00edo ya ocurri\u00f3, que hubo cobro o que lleg\u00f3 una confirmaci\u00f3n del almac\u00e9n.', 'Creating the order does not mean shipment has happened, payment was charged, or warehouse confirmation arrived.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: conservar la acci\u00f3n exacta de la rama positiva.', 'AI extension: preserve the exact action of the positive branch.'),
      does: t('Incluye crear orden de env\u00edo solamente cuando la condici\u00f3n es S\u00ed.', 'Includes create shipping order only when the condition is Yes.'),
      changes: t('Permite detectar expansiones no justificadas como cobrar o despachar autom\u00e1ticamente.', 'Helps detect unjustified expansions such as charging or automatically dispatching.'),
      validate: t('Comprobar que esta acci\u00f3n no aparece en la rama No y que luego termina el recorrido.', 'Check that this action does not appear on the No branch and that the path then ends.')
    }
  });
  concept('unavailable', 'foundation', {
    label: t('Enviar aviso de no disponibilidad', 'Send unavailable message'),
    what: t('Paso de salida de la rama No que comunica la no disponibilidad; utiliza el paralelogramo de entrada/salida.', 'The output step on the No branch that communicates unavailability; it uses the input/output parallelogram.'),
    why: t('Da una salida expl\u00edcita al caso sin disponibilidad en lugar de dejar la rama sin destino.', 'Gives an explicit output to the unavailable case instead of leaving the branch without a destination.'),
    question: t('\u00bfQu\u00e9 comunica el proceso cuando la respuesta es No?', 'What does the process communicate when the answer is No?'),
    example: t('Disponibilidad No: enviar aviso de no disponibilidad y llegar a Fin.', 'Availability No: send unavailable message and reach End.'),
    analogy: t('Como entregar una respuesta cuando una solicitud no puede atenderse en ese recorrido.', 'Like returning a response when a request cannot be fulfilled along that path.'),
    related: ['w3p_available', 'w3p_end', 'w3p_receive'],
    notConfuse: t('El aviso no establece cancelaci\u00f3n, reembolso, lista de espera ni reintentos; el ejemplo no define esas pol\u00edticas.', 'The message does not establish cancellation, refund, waiting list, or retries; the example does not define those policies.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: mantener una salida visible para la rama negativa.', 'AI extension: keep a visible output for the negative branch.'),
      does: t('Representa el aviso sin agregar consecuencias comerciales.', 'Represents the message without adding business consequences.'),
      changes: t('Ayuda a evitar que la rama No desaparezca en una traducci\u00f3n del modelo.', 'Helps prevent the No branch from disappearing when translating the model.'),
      validate: t('Confirmar que se env\u00eda el aviso indicado y que no se crea una orden de env\u00edo en esta rama.', 'Confirm that the specified message is sent and that no shipping order is created on this branch.')
    }
  });
  concept('end', 'foundation', {
    label: t('Fin', 'End'),
    what: t('Terminador que cierra el recorrido del ejemplo despu\u00e9s de cualquiera de las dos acciones alternativas.', 'A terminator that closes the example path after either of the two alternative actions.'),
    why: t('Permite comprobar que tanto S\u00ed como No tienen una terminaci\u00f3n expl\u00edcita.', 'Makes it possible to check that both Yes and No have an explicit termination.'),
    question: t('\u00bfLlegan ambos caminos al final del proceso representado?', 'Do both paths reach the end of the represented process?'),
    example: t('Crear orden de env\u00edo llega a Fin; enviar aviso tambi\u00e9n llega a Fin.', 'Create shipping order reaches End; send message also reaches End.'),
    analogy: t('Como una salida compartida a la que llegan dos recorridos alternativos.', 'Like a shared exit reached by two alternative routes.'),
    related: ['w3p_start', 'w3p_ship', 'w3p_unavailable', 'w3p_branchclosure'],
    notConfuse: t('Fin cierra el alcance de este modelo; no prueba que el producto se entreg\u00f3 ni que termin\u00f3 todo el sistema.', 'End closes the scope of this model; it does not prove the product was delivered or the whole system ended.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: rastrear terminaciones desde cada resultado de la decisi\u00f3n.', 'AI extension: trace termination from each decision outcome.'),
      does: t('Se\u00f1ala caminos que no alcanzan un terminador en el borrador.', 'Flags paths that do not reach a terminator in the draft.'),
      changes: t('Facilita detectar una rama colgante antes de aceptar el modelo.', 'Helps detect a dangling branch before accepting the model.'),
      validate: t('Seguir manualmente ambas ramas hasta Fin, sin exigir resultados fuera de este alcance.', 'Follow both branches to End without requiring outcomes outside this scope.')
    }
  });
  concept('arrows', 'foundation', {
    label: t('Flechas de secuencia', 'Sequence arrows'),
    what: t('Conectores dirigidos que indican el siguiente paso; los r\u00f3tulos S\u00ed y No identifican las salidas de la decisi\u00f3n.', 'Directed connectors indicating the next step; Yes and No labels identify the decision exits.'),
    why: t('El orden y el sentido de una flecha forman parte de la l\u00f3gica, aunque las posiciones visuales cambien.', 'Arrow order and direction are part of the logic even if visual positions change.'),
    question: t('\u00bfQu\u00e9 paso se alcanza siguiendo esta flecha?', 'Which step is reached by following this arrow?'),
    example: t('Consultar inventario apunta a disponibilidad; la salida No apunta al aviso de no disponibilidad.', 'Check inventory points to availability; the No exit points to the unavailable message.'),
    analogy: t('Como se\u00f1ales de sentido \u00fanico que gu\u00edan el recorrido.', 'Like one-way signs guiding a route.'),
    related: ['w3p_flowchart', 'w3p_dfd', 'w3p_available'],
    notConfuse: t('Estas flechas indican control y no describen la composici\u00f3n de datos transportados.', 'These arrows indicate control and do not describe the composition of transported data.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: revisar conectores y r\u00f3tulos de rama.', 'AI extension: review connectors and branch labels.'),
      does: t('Busca flechas invertidas o salidas sin r\u00f3tulo que vuelvan ambigua la lectura.', 'Looks for reversed arrows or unlabeled exits that make the reading ambiguous.'),
      changes: t('Ayuda a revisar la estructura del diagrama sin cambiar sus acciones.', 'Helps review the diagram structure without changing its actions.'),
      validate: t('Confirmar la direcci\u00f3n con el pseudoc\u00f3digo y las reglas aportadas.', 'Confirm direction against pseudocode and the provided rules.')
    }
  });
  concept('branchclosure', 'foundation', {
    label: t('Cerrar la decisi\u00f3n: Fin si', 'Close the decision: End if'),
    what: t('Marca estructural que cierra las alternativas de SI y SI NO en el pseudoc\u00f3digo.', 'A structural marker closing the IF and ELSE alternatives in pseudocode.'),
    why: t('Aclara que solo una acci\u00f3n alternativa pertenece a cada recorrido antes de continuar.', 'Clarifies that only one alternative action belongs to each path before continuing.'),
    question: t('\u00bfD\u00f3nde termina el alcance de la condici\u00f3n?', 'Where does the scope of the condition end?'),
    example: t('FIN SI sigue a las alternativas de crear orden y enviar aviso; FIN cierra despu\u00e9s el proceso completo.', 'END IF follows the create-order and send-message alternatives; END then closes the entire process.'),
    analogy: t('Como cerrar un par\u00e9ntesis que contiene dos alternativas.', 'Like closing a parenthesis containing two alternatives.'),
    related: ['w3p_pseudocode', 'w3p_available', 'w3p_end'],
    notConfuse: t('FIN SI no es una tercera acci\u00f3n comercial y no equivale por s\u00ed solo al terminador Fin.', 'END IF is not a third business action and is not by itself the End terminator.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: comprobar el alcance de un bloque condicional.', 'AI extension: check the scope of a conditional block.'),
      does: t('Sugiere un cierre legible y sangr\u00eda coherente para las ramas.', 'Suggests a readable closure and consistent indentation for branches.'),
      changes: t('Reduce la ambig\u00fcedad al revisar l\u00f3gica expresada en texto.', 'Reduces ambiguity when reviewing logic expressed as text.'),
      validate: t('Verificar que el cierre no deje las dos acciones dentro de un mismo recorrido.', 'Verify that the closure does not leave both actions in the same path.')
    }
  });
  concept('description', 'foundation', {
    label: t('Descripci\u00f3n del proceso', 'Process description'),
    what: t('Enunciado en lenguaje natural que establece las acciones y la condici\u00f3n que debe representar la l\u00f3gica.', 'A natural-language statement establishing the actions and condition that the logic must represent.'),
    why: t('Proporciona el punto de comparaci\u00f3n para saber si un diagrama conserva el caso.', 'Provides the comparison point for deciding whether a diagram preserves the case.'),
    question: t('\u00bfQu\u00e9 dice realmente el requisito sobre cada resultado de disponibilidad?', 'What does the requirement actually say about each availability outcome?'),
    example: t('Caso aportado: recibir pedido, consultar inventario; si hay disponibilidad, crear orden de env\u00edo; si no, enviar aviso.', 'Provided case: receive order, check inventory; if available, create shipping order; otherwise, send a message.'),
    analogy: t('Como el encargo escrito con el que se compara un plano.', 'Like the written brief against which a plan is compared.'),
    related: ['w3p_logic', 'w3p_paths', 'w3p_review'],
    notConfuse: t('Una descripci\u00f3n breve no autoriza inventar qu\u00e9 hacer con datos ausentes o productos inv\u00e1lidos.', 'A brief description does not authorize inventing how to handle missing data or invalid products.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: interpretar el requisito antes de dibujar.', 'AI extension: interpret the requirement before drawing.'),
      does: t('Separa acciones, condici\u00f3n y resultados expresamente mencionados.', 'Separates explicitly mentioned actions, condition, and outcomes.'),
      changes: t('Facilita detectar qu\u00e9 parte est\u00e1 descrita y qu\u00e9 parte requiere preguntas.', 'Helps identify what is described and what requires questions.'),
      validate: t('Mantener un v\u00ednculo entre cada paso propuesto y la frase que lo respalda.', 'Keep a link between each proposed step and the wording that supports it.')
    }
  });
  concept('paths', 'deepening', {
    label: t('Comprobar los dos caminos', 'Check both paths'),
    what: t('Profundizaci\u00f3n acad\u00e9mica: recorrer cada respuesta de la condici\u00f3n para comparar acciones, secuencia y terminaci\u00f3n.', 'Academic deepening: trace each condition outcome to compare actions, sequence, and termination.'),
    why: t('Leer solo S\u00ed puede ocultar una rama No invertida, desconectada o con una acci\u00f3n indebida.', 'Reading only Yes can hide a reversed, disconnected, or incorrect No branch.'),
    question: t('\u00bfCada respuesta activa exactamente su acci\u00f3n y llega a Fin en ambas vistas?', 'Does each answer activate exactly its action and reach End in both views?'),
    example: t('La prueba S\u00ed recorre crear orden de env\u00edo; la prueba No recorre enviar aviso. Los pasos previos y Fin son compartidos.', 'The Yes test traverses create shipping order; the No test traverses send message. Earlier steps and End are shared.'),
    analogy: t('Como recorrer los dos desv\u00edos de un mapa para comprobar a d\u00f3nde llevan.', 'Like walking both detours on a map to check where they lead.'),
    related: ['w3p_available', 'w3p_comparison', 'w3p_end', 'w3p_edgecases'],
    notConfuse: t('Cubrir las dos respuestas de este modelo no demuestra que todos los casos reales del negocio est\u00e9n definidos.', 'Covering both answers in this model does not prove that every real business case is defined.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: proponer recorridos de verificaci\u00f3n.', 'AI extension: propose verification paths.'),
      does: t('Enumera la secuencia para S\u00ed y No y compara las dos representaciones.', 'Enumerates the Yes and No sequences and compares the two representations.'),
      changes: t('Acelera la b\u00fasqueda de omisiones y acciones inesperadas.', 'Speeds up the search for omissions and unexpected actions.'),
      validate: t('Usar resultados esperados derivados del requisito, no del propio borrador generado.', 'Use expected outcomes derived from the requirement, not from the generated draft itself.')
    }
  });
  concept('edgecases', 'ai', {
    label: t('Casos l\u00edmite como preguntas', 'Edge cases as questions'),
    what: t('Extensi\u00f3n de IA: situaciones candidatas para preguntar por reglas que la descripci\u00f3n no establece.', 'AI extension: candidate situations for asking about rules that the description does not establish.'),
    why: t('Hace visible la incertidumbre sin convertir una suposici\u00f3n en una nueva rama de negocio.', 'Makes uncertainty visible without turning an assumption into a new business branch.'),
    question: t('\u00bfQu\u00e9 deber\u00eda ocurrir ante una situaci\u00f3n que el caso a\u00fan no define?', 'What should happen in a situation the case does not yet define?'),
    example: t('Preguntas ilustrativas aportadas: \u00bfy si falta el valor de inventario?, \u00bfel producto es inv\u00e1lido?, \u00bfnunca llega una confirmaci\u00f3n del almac\u00e9n? No son reglas confirmadas.', 'Provided illustrative questions: what if the inventory value is missing, the product is invalid, or warehouse confirmation never arrives? These are not confirmed rules.'),
    analogy: t('Como notas con preguntas al margen de un plano, pendientes de respuesta.', 'Like question notes in the margin of a plan, awaiting answers.'),
    related: ['w3p_inventory', 'w3p_description', 'w3p_review'],
    notConfuse: t('El flujo base no agrega rechazo autom\u00e1tico, esperas, plazos ni reintentos. Sugerir una excepci\u00f3n no confirma una pol\u00edtica.', 'The base flow adds no automatic rejection, waiting, deadlines, or retries. Suggesting an exception does not confirm a policy.'),
    ai: {
      connection: t('La IA propone candidatos de casos l\u00edmite como extensi\u00f3n del ejercicio.', 'AI proposes edge-case candidates as an extension of the exercise.'),
      does: t('Formula preguntas sobre datos ausentes, productos inv\u00e1lidos y confirmaciones que no llegan.', 'Formulates questions about missing data, invalid products, and confirmations that never arrive.'),
      changes: t('Ampl\u00eda las preguntas de an\u00e1lisis, sin ampliar autom\u00e1ticamente las reglas.', 'Broadens analysis questions without automatically broadening the rules.'),
      validate: t('El responsable del proceso debe responder con evidencia antes de modificar el modelo.', 'The process owner must answer with evidence before the model is changed.')
    }
  });
  concept('ai', 'ai', {
    label: t('IA para expresar y revisar l\u00f3gica', 'AI for expressing and reviewing logic'),
    what: t('Extensi\u00f3n de IA que ayuda a interpretar descripciones, elaborar borradores y sugerir revisiones de caminos.', 'An AI extension that helps interpret descriptions, prepare drafts, and suggest path reviews.'),
    why: t('Ofrece una primera representaci\u00f3n que el analista puede contrastar con las reglas reales.', 'Offers a first representation that an analyst can compare with the actual rules.'),
    question: t('\u00bfC\u00f3mo ayuda la IA sin convertir autom\u00e1ticamente su borrador en una especificaci\u00f3n correcta?', 'How can AI help without automatically turning its draft into a correct specification?'),
    example: t('Extensi\u00f3n ilustrativa: proponer el rombo de disponibilidad y pedir revisar sus dos salidas contra la descripci\u00f3n.', 'Illustrative extension: propose the availability diamond and request a review of both exits against the description.'),
    analogy: t('Como un asistente que dibuja un borrador mientras el responsable conserva la decisi\u00f3n sobre las reglas.', 'Like an assistant drawing a draft while the owner retains authority over the rules.'),
    related: ['w3p_draft', 'w3p_review', 'w3p_edgecases'],
    notConfuse: t('Esta ayuda es una extensi\u00f3n propuesta, no contenido atribuido al curso ni autoridad para establecer pol\u00edticas.', 'This assistance is a proposed extension, not content attributed to the course or authority to establish policy.'),
    ai: {
      connection: t('Conecta la descripci\u00f3n con borradores y preguntas de revisi\u00f3n.', 'Connects the description with drafts and review questions.'),
      does: t('Interpreta, propone diagrama y pseudoc\u00f3digo, comprueba caminos y sugiere casos l\u00edmite.', 'Interprets, proposes a flowchart and pseudocode, checks paths, and suggests edge cases.'),
      changes: t('Acelera la preparaci\u00f3n de material para revisi\u00f3n humana.', 'Speeds up the preparation of material for human review.'),
      validate: t('Las reglas del negocio y la evidencia deben validar la l\u00f3gica propuesta.', 'Business rules and evidence must validate the proposed logic.')
    }
  });
  concept('draft', 'ai', {
    label: t('Borrador de l\u00f3gica', 'Draft logic'),
    what: t('Extensi\u00f3n de IA: representaci\u00f3n candidata que todav\u00eda requiere revisi\u00f3n contra el requisito.', 'AI extension: a candidate representation that still requires review against the requirement.'),
    why: t('Nombrarlo borrador evita aceptar por apariencia una secuencia que podr\u00eda omitir o inventar acciones.', 'Calling it a draft avoids accepting a sequence on appearance when it could omit or invent actions.'),
    question: t('\u00bfQu\u00e9 partes del borrador est\u00e1n respaldadas y cu\u00e1les siguen siendo supuestos?', 'Which parts of the draft are supported, and which remain assumptions?'),
    example: t('Candidato ilustrativo: un diagrama generado con las dos ramas de disponibilidad, pendiente de comparaci\u00f3n con el caso.', 'Illustrative candidate: a generated diagram with both availability branches, awaiting comparison with the case.'),
    analogy: t('Como un boceto a l\u00e1piz que a\u00fan admite correcciones.', 'Like a pencil sketch that still allows corrections.'),
    related: ['w3p_ai', 'w3p_review', 'w3p_validated'],
    notConfuse: t('Un borrador legible o sint\u00e1cticamente ordenado no es una especificaci\u00f3n aceptada.', 'A readable or neatly structured draft is not an accepted specification.'),
    ai: {
      connection: t('Es la salida candidata de la asistencia de IA.', 'It is the candidate output of AI assistance.'),
      does: t('Entrega una propuesta para discutir acciones, orden y ramas.', 'Delivers a proposal for discussing actions, order, and branches.'),
      changes: t('Permite revisar algo concreto antes de aceptar una representaci\u00f3n.', 'Makes something concrete available for review before accepting a representation.'),
      validate: t('Contrastar cada elemento con evidencia y registrar las preguntas sin respuesta.', 'Compare every element with evidence and record unanswered questions.')
    }
  });
  concept('review', 'deepening', {
    label: t('Validaci\u00f3n del analista y usuario', 'Analyst and user validation'),
    what: t('Profundizaci\u00f3n acad\u00e9mica: revisi\u00f3n de las acciones y condiciones con la descripci\u00f3n y el responsable del proceso.', 'Academic deepening: reviewing actions and conditions against the description and with the process owner.'),
    why: t('Una representaci\u00f3n puede ser coherente consigo misma y aun as\u00ed describir reglas equivocadas.', 'A representation can be internally consistent and still describe incorrect rules.'),
    question: t('\u00bfLa l\u00f3gica conserva las reglas aportadas y hace visibles las preguntas pendientes?', 'Does the logic preserve the provided rules and make open questions visible?'),
    example: t('Revisi\u00f3n ilustrativa: confirmar que S\u00ed crea la orden, No env\u00eda el aviso y ninguna rama incorpora un cobro.', 'Illustrative review: confirm that Yes creates the order, No sends the message, and neither branch adds a charge.'),
    analogy: t('Como cotejar un plano con quien conoce el recorrido real.', 'Like checking a map with someone who knows the actual route.'),
    related: ['w3p_description', 'w3p_paths', 'w3p_validated'],
    notConfuse: t('La conformidad entre dos borradores generados no sustituye la evidencia del requisito.', 'Agreement between two generated drafts does not replace requirement evidence.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: preparar comparaciones para la revisi\u00f3n humana.', 'AI extension: prepare comparisons for human review.'),
      does: t('Presenta posibles omisiones y explica qu\u00e9 parte de la descripci\u00f3n us\u00f3.', 'Presents possible omissions and explains which part of the description it used.'),
      changes: t('Concentra la atenci\u00f3n del revisor en discrepancias concretas.', 'Focuses reviewer attention on specific discrepancies.'),
      validate: t('El analista y el usuario deciden qu\u00e9 observaciones son errores reales y qu\u00e9 reglas se aceptan.', 'The analyst and user decide which observations are actual errors and which rules are accepted.')
    }
  });
  concept('validated', 'deepening', {
    label: t('Modelo de proceso aceptado', 'Accepted process model'),
    what: t('Profundizaci\u00f3n acad\u00e9mica: representaci\u00f3n revisada que conserva las reglas respaldadas dentro de un alcance definido.', 'Academic deepening: a reviewed representation preserving supported rules within a defined scope.'),
    why: t('Distingue el resultado revisado de los candidatos que solo parecen razonables.', 'Distinguishes the reviewed result from candidates that merely look reasonable.'),
    question: t('\u00bfQu\u00e9 alcance y qu\u00e9 reglas respalda la aceptaci\u00f3n de este modelo?', 'What scope and rules does acceptance of this model support?'),
    example: t('Aceptaci\u00f3n ilustrativa limitada: ambas vistas conservan las dos ramas aportadas; los casos excepcionales contin\u00faan como preguntas.', 'Illustrative limited acceptance: both views preserve the two provided branches; exceptional cases remain questions.'),
    analogy: t('Como un plano revisado con un alcance declarado, sin afirmar que cubra todo el territorio.', 'Like a reviewed map with a stated scope, without claiming to cover the entire territory.'),
    related: ['w3p_review', 'w3p_description', 'w3p_edgecases'],
    notConfuse: t('Aceptado para este ejemplo no significa programa terminado ni pol\u00edtica completa para todos los pedidos reales.', 'Accepted for this example does not mean a finished program or a complete policy for all real orders.'),
    ai: {
      connection: t('Extensi\u00f3n de IA: ayudar a documentar cambios aprobados y preguntas abiertas.', 'AI extension: help document approved changes and open questions.'),
      does: t('Resume la versi\u00f3n revisada y separa lo aceptado de lo pendiente.', 'Summarizes the reviewed version and separates accepted items from pending ones.'),
      changes: t('Facilita comunicar el alcance de la l\u00f3gica revisada.', 'Makes it easier to communicate the scope of the reviewed logic.'),
      validate: t('La aceptaci\u00f3n la determina la revisi\u00f3n humana con evidencia, no la seguridad expresada por la IA.', 'Acceptance is determined by human review with evidence, not by AI confidence.')
    }
  });

  concept('ai_interpret', 'ai', {
    label: t('Interpretar la descripci\u00f3n', 'Interpret the description'),
    what: t('Conexi\u00f3n de extensi\u00f3n de IA hacia la descripci\u00f3n: extraer acciones y condici\u00f3n expl\u00edcitas.', 'An AI-extension connection to the description: extract explicit actions and the condition.'),
    why: t('Permite discutir qu\u00e9 se entend\u00f3 antes de dibujar una secuencia.', 'Makes it possible to discuss what was understood before drawing a sequence.'),
    question: t('\u00bfQu\u00e9 frase respalda cada paso que la IA identific\u00f3?', 'Which phrase supports each step identified by AI?'),
    example: t('Extensi\u00f3n ilustrativa: identificar consultar inventario como acci\u00f3n y disponibilidad como condici\u00f3n.', 'Illustrative extension: identify check inventory as an action and availability as a condition.'),
    analogy: t('Como subrayar verbos y condiciones en un encargo.', 'Like underlining verbs and conditions in a brief.'),
    related: ['w3p_ai', 'w3p_description', 'w3p_review'],
    notConfuse: t('Interpretar no permite completar silenciosamente reglas ausentes ni atribuir esa extensi\u00f3n al curso.', 'Interpretation does not permit silently completing missing rules or attributing this extension to the course.'),
    ai: {
      connection: t('IA hacia descripci\u00f3n del proceso: interpretar.', 'AI to process description: interpret.'),
      does: t('Separa acciones, orden, condici\u00f3n y resultados nombrados.', 'Separates named actions, order, condition, and outcomes.'),
      changes: t('Produce una lectura inicial trazable del requisito.', 'Produces an initial reading that can be traced to the requirement.'),
      validate: t('Comparar la extracci\u00f3n con el texto original y marcar cualquier supuesto.', 'Compare the extraction with the original text and mark every assumption.')
    }
  });
  concept('ai_flowchart', 'ai', {
    label: t('Proponer un diagrama de flujo', 'Draft a flowchart'),
    what: t('Conexi\u00f3n de extensi\u00f3n de IA hacia el diagrama: proponer s\u00edmbolos y enlaces para las reglas descritas.', 'An AI-extension connection to the flowchart: propose symbols and links for the described rules.'),
    why: t('Ofrece una vista visual temprana donde revisar decisiones y terminaciones.', 'Provides an early visual view for reviewing decisions and terminations.'),
    question: t('\u00bfCada forma y flecha conserva el significado y el orden del requisito?', 'Does every shape and arrow preserve the requirement meaning and order?'),
    example: t('Extensi\u00f3n ilustrativa: dibujar un rombo de disponibilidad y conectar sus dos acciones a Fin.', 'Illustrative extension: draw an availability diamond and connect both actions to End.'),
    analogy: t('Como un dibujante que prepara un plano inicial para revisi\u00f3n.', 'Like a draftsperson preparing an initial plan for review.'),
    related: ['w3p_ai', 'w3p_flowchart', 'w3p_draft'],
    notConfuse: t('Un dibujo bien formado puede tener reglas incorrectas; su aspecto no lo valida.', 'A well-formed drawing can contain incorrect rules; its appearance does not validate it.'),
    ai: {
      connection: t('IA hacia diagrama de flujo: generar borrador.', 'AI to flowchart: generate a draft.'),
      does: t('Propone terminadores, procesos, entrada/salida, decisi\u00f3n y flechas.', 'Proposes terminators, processes, input/output, a decision, and arrows.'),
      changes: t('Reduce el esfuerzo de representar la primera versi\u00f3n visual.', 'Reduces the effort of representing the first visual version.'),
      validate: t('Seguir S\u00ed y No, comprobar s\u00edmbolos y rechazar pasos sin respaldo.', 'Trace Yes and No, check symbols, and reject unsupported steps.')
    }
  });
  concept('ai_pseudocode', 'ai', {
    label: t('Proponer pseudoc\u00f3digo', 'Draft pseudocode'),
    what: t('Conexi\u00f3n de extensi\u00f3n de IA hacia el pseudoc\u00f3digo: expresar el mismo requisito como texto estructurado.', 'An AI-extension connection to pseudocode: express the same requirement as structured text.'),
    why: t('Hace posible revisar la condici\u00f3n y el alcance de cada acci\u00f3n sin depender del dibujo.', 'Makes it possible to review the condition and scope of each action without relying on the drawing.'),
    question: t('\u00bfEl texto conserva la misma alternativa que el rombo para cada respuesta?', 'Does the text preserve the same alternative as the diamond for each answer?'),
    example: t('Extensi\u00f3n ilustrativa: traducir S\u00ed a ENTONCES crear orden y No a SI NO enviar aviso.', 'Illustrative extension: translate Yes to THEN create order and No to ELSE send message.'),
    analogy: t('Como escribir instrucciones a partir de un mapa de rutas ya acordado.', 'Like writing instructions from an already agreed route map.'),
    related: ['w3p_ai', 'w3p_pseudocode', 'w3p_comparison'],
    notConfuse: t('La propuesta es pseudoc\u00f3digo pedag\u00f3gico; no es c\u00f3digo fuente final ni una regla nueva.', 'The proposal is teaching pseudocode; it is not final source code or a new rule.'),
    ai: {
      connection: t('IA hacia pseudoc\u00f3digo: generar borrador.', 'AI to pseudocode: generate a draft.'),
      does: t('Redacta la secuencia y el bloque condicional con sangr\u00eda legible.', 'Writes the sequence and conditional block with readable indentation.'),
      changes: t('Facilita revisar la l\u00f3gica textual antes de elegir una implementaci\u00f3n.', 'Makes it easier to review textual logic before choosing an implementation.'),
      validate: t('Comparar las acciones ejecutadas en ambas respuestas con el diagrama y el requisito.', 'Compare the actions performed for both answers against the flowchart and the requirement.')
    }
  });
  concept('ai_paths', 'ai', {
    label: t('Revisar caminos de la l\u00f3gica', 'Review logic paths'),
    what: t('Conexi\u00f3n de extensi\u00f3n de IA hacia los caminos: buscar omisiones o diferencias entre recorridos esperados y propuestos.', 'An AI-extension connection to paths: look for omissions or differences between expected and proposed paths.'),
    why: t('Una rama incorrecta puede pasar inadvertida si solo se observa el resultado m\u00e1s frecuente.', 'An incorrect branch can go unnoticed if only the most common outcome is examined.'),
    question: t('\u00bfS\u00ed y No terminan con la acci\u00f3n que la descripci\u00f3n indica?', 'Do Yes and No end with the action specified by the description?'),
    example: t('Extensi\u00f3n ilustrativa: se\u00f1alar como posible error una rama No que tambi\u00e9n cree la orden de env\u00edo.', 'Illustrative extension: flag as a possible error a No branch that also creates a shipping order.'),
    analogy: t('Como un lector que prueba cada desv\u00edo de unas instrucciones.', 'Like a reader trying every detour in a set of instructions.'),
    related: ['w3p_ai', 'w3p_paths', 'w3p_review'],
    notConfuse: t('Una alerta de IA es una observaci\u00f3n candidata, no un error confirmado ni cobertura de todos los escenarios reales.', 'An AI flag is a candidate observation, not a confirmed error or coverage of every real scenario.'),
    ai: {
      connection: t('IA hacia l\u00f3gica: comprobar caminos.', 'AI to logic: check paths.'),
      does: t('Enumera pasos alcanzables y compara finales y acciones por rama.', 'Enumerates reachable steps and compares endings and actions by branch.'),
      changes: t('Dirige la revisi\u00f3n hacia diferencias concretas de comportamiento.', 'Directs review toward specific behavioral differences.'),
      validate: t('Reproducir la discrepancia con S\u00ed o No y comprobarla contra el requisito.', 'Reproduce the discrepancy with Yes or No and check it against the requirement.')
    }
  });
  concept('ai_edgecases', 'ai', {
    label: t('Sugerir preguntas sobre excepciones', 'Suggest questions about exceptions'),
    what: t('Conexi\u00f3n de extensi\u00f3n de IA hacia casos l\u00edmite: proponer preguntas que requieren una respuesta del responsable.', 'An AI-extension connection to edge cases: propose questions requiring an answer from the owner.'),
    why: t('Permite ampliar la investigaci\u00f3n sin contaminar el flujo con decisiones inventadas.', 'Makes it possible to broaden investigation without introducing invented decisions into the flow.'),
    question: t('\u00bfQu\u00e9 informaci\u00f3n falta para decidir ante cada situaci\u00f3n excepcional?', 'What information is missing to decide how to handle each exceptional situation?'),
    example: t('Preguntas ilustrativas: \u00bfqu\u00e9 pasa si falta inventario?, \u00bfc\u00f3mo tratar un producto inv\u00e1lido?, \u00bfqu\u00e9 hacer si nunca llega confirmaci\u00f3n del almac\u00e9n?', 'Illustrative questions: what if inventory is missing, how should an invalid product be handled, and what if warehouse confirmation never arrives?'),
    analogy: t('Como preparar preguntas para una entrevista antes de modificar las instrucciones.', 'Like preparing interview questions before changing the instructions.'),
    related: ['w3p_ai', 'w3p_edgecases', 'w3p_description'],
    notConfuse: t('Estas preguntas no crean tiempos de espera, reintentos, rechazos ni obligaciones de confirmaci\u00f3n en el ejemplo.', 'These questions create no waiting times, retries, rejections, or confirmation obligations in the example.'),
    ai: {
      connection: t('IA hacia casos l\u00edmite: sugerir candidatos.', 'AI to edge cases: suggest candidates.'),
      does: t('Enumera incertidumbres y las formula como preguntas, no como instrucciones.', 'Lists uncertainties and formulates them as questions, not instructions.'),
      changes: t('Ayuda a preparar una conversaci\u00f3n informada con quien define el proceso.', 'Helps prepare an informed conversation with whoever defines the process.'),
      validate: t('Obtener una regla respaldada antes de incorporar una nueva condici\u00f3n o acci\u00f3n.', 'Obtain a supported rule before incorporating a new condition or action.')
    }
  });

  var order = {
    id: 'w3p_order',
    steps: [
      { id: 'start', concept: 'w3p_start', symbol: 'terminator', label: t('Inicio', 'Start') },
      { id: 'receive', concept: 'w3p_receive', symbol: 'inputoutput', label: t('Recibir pedido', 'Receive order') },
      { id: 'inventory', concept: 'w3p_inventory', symbol: 'process', label: t('Consultar inventario', 'Check inventory') },
      { id: 'available', concept: 'w3p_available', symbol: 'decision', label: t('\u00bfDisponible?', 'Available?') },
      { id: 'ship', concept: 'w3p_ship', symbol: 'process', label: t('Crear orden de env\u00edo', 'Create shipping order') },
      { id: 'unavailable', concept: 'w3p_unavailable', symbol: 'inputoutput', label: t('Enviar aviso de no disponibilidad', 'Send unavailable message') },
      { id: 'end', concept: 'w3p_end', symbol: 'terminator', label: t('Fin', 'End') }
    ],
    edges: [
      { id: 'start_receive', from: 'start', to: 'receive' },
      { id: 'receive_inventory', from: 'receive', to: 'inventory' },
      { id: 'inventory_available', from: 'inventory', to: 'available' },
      { id: 'available_ship', from: 'available', to: 'ship', branch: 'yes' },
      { id: 'available_unavailable', from: 'available', to: 'unavailable', branch: 'no' },
      { id: 'ship_end', from: 'ship', to: 'end', branch: 'yes' },
      { id: 'unavailable_end', from: 'unavailable', to: 'end', branch: 'no' }
    ],
    lines: [
      { id: 'begin', step: 'start', concept: 'w3p_start', indent: 0, text: t('INICIO', 'BEGIN') },
      { id: 'receive', step: 'receive', concept: 'w3p_receive', indent: 0, text: t('RECIBIR pedido', 'RECEIVE order') },
      { id: 'inventory', step: 'inventory', concept: 'w3p_inventory', indent: 0, text: t('CONSULTAR inventario', 'CHECK inventory') },
      { id: 'if', step: 'available', concept: 'w3p_available', indent: 0, text: t('SI hay disponibilidad ENTONCES', 'IF inventory is available THEN') },
      { id: 'ship', step: 'ship', concept: 'w3p_ship', indent: 1, branch: 'yes', text: t('CREAR orden de env\u00edo', 'CREATE shipping order') },
      { id: 'else', step: 'available', concept: 'w3p_available', indent: 0, branch: 'no', text: t('SI NO', 'ELSE') },
      { id: 'unavailable', step: 'unavailable', concept: 'w3p_unavailable', indent: 1, branch: 'no', text: t('ENVIAR aviso de no disponibilidad', 'SEND unavailable message') },
      { id: 'endif', step: 'end', concept: 'w3p_branchclosure', indent: 0, text: t('FIN SI', 'END IF') },
      { id: 'end', step: 'end', concept: 'w3p_end', indent: 0, text: t('FIN', 'END') }
    ],
    outcomes: {
      yes: t('S\u00ed: se crea la orden de env\u00edo y se llega a Fin. El aviso no pertenece a este recorrido.', 'Yes: the shipping order is created and End is reached. The message is not part of this path.'),
      no: t('No: se env\u00eda el aviso de no disponibilidad y se llega a Fin. No se crea la orden de env\u00edo.', 'No: the unavailable message is sent and End is reached. No shipping order is created.')
    },
    trace: function (branch) {
      if (branch !== 'yes' && branch !== 'no') { throw new Error('Select yes or no for the availability exercise.'); }
      var steps = ['start'];
      var edges = [];
      var cursor = 'start';
      while (cursor !== 'end') {
        var edge = order.edges.find(function (candidate) {
          return candidate.from === cursor && (!candidate.branch || candidate.branch === branch);
        });
        if (!edge || steps.indexOf(edge.to) !== -1) { throw new Error('Invalid process-logic path.'); }
        edges.push(edge.id);
        steps.push(edge.to);
        cursor = edge.to;
      }
      return {
        branch: branch,
        steps: steps,
        edges: edges,
        lines: order.lines.filter(function (line) {
          return steps.indexOf(line.step) !== -1 && (!line.branch || line.branch === branch);
        }).map(function (line) { return line.id; }),
        outcome: order.outcomes[branch]
      };
    }
  };
  atlas.models.w3p_order = order;
  atlas.diagrams['06'] = {
    id: '06',
    kind: 'processlogic',
    title: t('\u00bfQu\u00e9 ocurre dentro de un proceso?', 'What happens inside a process?'),
    question: t('\u00bfC\u00f3mo representamos el orden, las decisiones y los caminos internos?', 'How do we represent internal order, decisions, and paths?'),
    statement: t('Diagrama de flujo + pseudoc\u00f3digo: dos representaciones de la misma l\u00f3gica.', 'Flowchart + pseudocode: two representations of the same logic.'),
    definition: t('El DFD muestra movimiento de datos; el diagrama de flujo y el pseudoc\u00f3digo explican la l\u00f3gica interna de un proceso.', 'A DFD shows data movement; a flowchart and pseudocode explain the internal logic of a process.'),
    transition: t('Algunos procesos no dependen de una sola condici\u00f3n. \u00bfQu\u00e9 hacemos cuando una decisi\u00f3n depende de varias reglas al mismo tiempo?', 'Some processes do not depend on a single condition. What do we do when a decision depends on several rules at the same time?'),
    root: 'w3p_logic',
    // Step concepts are already discoverable in both native representations.
    nodes: ['w3p_logic', 'w3p_flowchart', 'w3p_pseudocode', 'w3p_description', 'w3p_paths', 'w3p_review', 'w3p_validated'],
    model: 'w3p_order',
    aiNode: 'w3p_ai',
    aiQuestion: t('\u00bfC\u00f3mo puede la IA ayudarnos a expresar la l\u00f3gica de un proceso sin convertir autom\u00e1ticamente el borrador en una especificaci\u00f3n correcta?', 'How can AI help us express process logic without automatically turning the draft into a correct specification?'),
    aiMessage: t('La IA puede proponer l\u00f3gica. Las reglas del negocio deben validarla.', 'AI can propose logic. Business rules must validate it.'),
    aiFlow: ['w3p_description', 'w3p_ai', 'w3p_draft', 'w3p_review', 'w3p_validated'],
    aiRelationships: [
      { id: 'w3p_rel_description', from: 'w3p_ai', to: 'w3p_description', action: t('Interpretar', 'Interpret'), concept: 'w3p_ai_interpret', value: t('Separar acciones y condici\u00f3n sin completar reglas ausentes.', 'Separate actions and the condition without completing missing rules.') },
      { id: 'w3p_rel_flowchart', from: 'w3p_ai', to: 'w3p_flowchart', action: t('Generar borrador', 'Generate draft'), concept: 'w3p_ai_flowchart', value: t('Proponer s\u00edmbolos y secuencia para revisar las dos ramas.', 'Propose symbols and sequence for reviewing both branches.') },
      { id: 'w3p_rel_pseudocode', from: 'w3p_ai', to: 'w3p_pseudocode', action: t('Generar borrador', 'Generate draft'), concept: 'w3p_ai_pseudocode', value: t('Expresar las mismas reglas en texto estructurado legible.', 'Express the same rules as readable structured text.') },
      { id: 'w3p_rel_paths', from: 'w3p_ai', to: 'w3p_paths', action: t('Comprobar caminos', 'Check paths'), concept: 'w3p_ai_paths', value: t('Comparar secuencia, acciones y terminaci\u00f3n de S\u00ed y No.', 'Compare the sequence, actions, and termination of Yes and No.') },
      { id: 'w3p_rel_edgecases', from: 'w3p_ai', to: 'w3p_edgecases', action: t('Sugerir candidatos', 'Suggest candidates'), concept: 'w3p_ai_edgecases', value: t('Preguntar por datos ausentes, productos inv\u00e1lidos y confirmaciones pendientes sin fijar pol\u00edticas.', 'Ask about missing data, invalid products, and pending confirmations without setting policy.') }
    ]
  };
}(window));
