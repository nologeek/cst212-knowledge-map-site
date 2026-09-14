(function (global) {
  'use strict';

  const t = (es, en) => ({ es, en });
  const atlas = global.CST212_W3 = global.CST212_W3 || {};
  ['diagrams', 'concepts', 'sources', 'models'].forEach(function (name) {
    atlas[name] = atlas[name] || {};
  });
  const id = key => 'w3b_' + key;
  function concept(key, layer, content, ai) {
    atlas.concepts[id(key)] = Object.assign({ id: id(key), layer, sources: ['w3-course'] }, content, {
      related: content.related.map(id), ai
    });
  }

  concept('balance', 'foundation', {
    label: t('Equilibrio entre niveles', 'Balancing between levels'),
    what: t('Correspondencia de las entradas y salidas externas del proceso padre con las de su diagrama hijo.', 'Correspondence between the external inputs and outputs of a parent process and those of its child diagram.'),
    why: t('Permite ampliar el detalle sin cambiar silenciosamente lo que el proceso recibe o entrega.', 'It allows more detail without silently changing what the process receives or delivers.'),
    question: t('Al descomponer 2.0, ¿seguimos recibiendo A y entregando B?', 'When decomposing 2.0, do we still receive A and deliver B?'),
    example: t('Ejercicio didáctico suministrado: A entra en 2.0 y B sale; el hijo conserva esa interfaz aunque agregue flujos internos.', 'Supplied teaching exercise: A enters 2.0 and B leaves; the child preserves that interface even when adding internal flows.'),
    analogy: t('Abrir una caja para ver sus partes no cambia sus conexiones con el exterior.', 'Opening a box to see its parts does not change its connections to the outside.'),
    notConfuse: t('Equilibrio no significa igual cantidad de procesos ni idéntico detalle interno. Tampoco basta contar flechas: importa el significado externo.', 'Balancing does not mean the same number of processes or identical internal detail. Counting arrows is insufficient: external meaning matters.'),
    related: ['parent', 'child', 'interface', 'internal']
  }, {
    connection: t('Extensión IA: comparar representaciones de dos niveles.', 'AI extension: compare representations at two levels.'),
    does: t('Señala posibles diferencias en los datos que cruzan el límite.', 'It flags possible differences in data crossing the boundary.'),
    changes: t('Organiza la revisión; no modifica por sí misma el DFD.', 'It organizes the review; it does not modify the DFD by itself.'),
    validate: t('El analista confirma la correspondencia semántica y decide si hay un error.', 'The analyst confirms semantic correspondence and decides whether an error exists.')
  });

  concept('parent', 'foundation', {
    label: t('Proceso padre 2.0', 'Parent process 2.0'),
    what: t('Proceso del nivel superior cuya interfaz externa sirve de referencia para la descomposición.', 'The process at the higher level whose external interface is the reference for decomposition.'),
    why: t('Fija qué recibe y qué entrega la función que luego se describe con más detalle.', 'It establishes what the function receives and delivers before it is described in greater detail.'),
    question: t('¿Qué entradas y salidas de 2.0 debe conservar su hijo?', 'Which inputs and outputs of 2.0 must its child preserve?'),
    example: t('Ejercicio suministrado: entrada A → proceso 2.0 → salida B.', 'Supplied exercise: input A → process 2.0 → output B.'),
    analogy: t('La vista cerrada de una caja muestra sus conexiones, aunque oculte sus partes.', 'A closed view of a box shows its connections while hiding its parts.'),
    notConfuse: t('2.0 es un identificador de proceso, no una versión de software ni un paso temporal.', '2.0 is a process identifier, not a software version or a time step.'),
    related: ['child', 'input_a', 'output_b', 'balance']
  }, {
    connection: t('Extensión IA: usar al padre como referencia de comparación.', 'AI extension: use the parent as the comparison reference.'),
    does: t('Extrae una lista candidata de entradas y salidas visibles de 2.0.', 'It extracts a candidate list of the visible inputs and outputs of 2.0.'),
    changes: t('Facilita cotejar la interfaz; no agrega requisitos al padre.', 'It makes the interface easier to compare; it adds no requirements to the parent.'),
    validate: t('Comprobar que A y B fueron interpretados con su dirección y significado correctos.', 'Check that A and B were interpreted with the correct direction and meaning.')
  });

  concept('child', 'foundation', {
    label: t('Diagrama hijo de 2.0', 'Child diagram of 2.0'),
    what: t('Descomposición que muestra procesos y flujos dentro del alcance del proceso padre.', 'A decomposition showing processes and flows within the scope of the parent process.'),
    why: t('Explica con más detalle cómo se transforma la información sin perder la relación con el nivel superior.', 'It explains information transformation in more detail while preserving the relationship to the higher level.'),
    question: t('¿El detalle del hijo sigue representando la misma interfaz de 2.0?', 'Does the child detail still represent the same interface as 2.0?'),
    example: t('Representación ilustrativa: tres procesos 2.1, 2.2 y 2.3 dentro del límite de 2.0. No se asignan funciones de negocio al caso.', 'Illustrative representation: three processes, 2.1, 2.2 and 2.3, within the boundary of 2.0. No business functions are assigned to the case.'),
    analogy: t('Un acercamiento muestra piezas de un mecanismo que desde lejos parecía una sola unidad.', 'A closer view reveals parts of a mechanism that looked like a single unit from farther away.'),
    notConfuse: t('El hijo no es otro sistema ni un diagrama de flujo de ejecución; sigue mostrando movimiento de datos.', 'The child is neither another system nor an execution flowchart; it still shows data movement.'),
    related: ['parent', 'p21', 'p22', 'p23', 'internal']
  }, {
    connection: t('Extensión IA: alinear el detalle hijo con el proceso que descompone.', 'AI extension: align child detail with the process it decomposes.'),
    does: t('Compara el límite del hijo con las conexiones externas del padre.', 'It compares the child boundary with the parent external connections.'),
    changes: t('Presenta diferencias candidatas sin convertir la descomposición en una especificación aceptada.', 'It presents candidate differences without turning the decomposition into an accepted specification.'),
    validate: t('Revisar el alcance del hijo y que cada flujo externo tenga correspondencia justificada.', 'Review the child scope and ensure each external flow has a justified correspondence.')
  });

  concept('interface', 'deepening', {
    label: t('Interfaz externa y límite', 'External interface and boundary'),
    what: t('Lectura del equilibrio que separa los flujos que cruzan el límite de los que permanecen dentro de él.', 'A reading of balancing that separates flows crossing the boundary from flows remaining inside it.'),
    why: t('Evita interpretar un nuevo flujo interno como si cambiara las entradas o salidas externas.', 'It prevents interpreting a new internal flow as a change to external inputs or outputs.'),
    question: t('¿Este dato cruza el límite de 2.0 o solo conecta procesos internos?', 'Does this data cross the boundary of 2.0 or only connect internal processes?'),
    example: t('En el ejercicio A/B, A y B cruzan el límite. Las conexiones ilustrativas Datos I, II y III quedan dentro.', 'In the A/B exercise, A and B cross the boundary. The illustrative Data I, II and III connections stay inside.'),
    analogy: t('Distinguir las puertas de una casa de los pasillos entre sus habitaciones.', 'Distinguishing the doors of a house from corridors between its rooms.'),
    notConfuse: t('El marco discontinuo es una ayuda visual para delimitar el ejercicio, no un nuevo símbolo de proceso o almacén DFD.', 'The dashed frame is a visual aid delimiting the exercise, not a new DFD process or data store symbol.'),
    related: ['balance', 'input_a', 'output_b', 'internal']
  }, {
    connection: t('Extensión IA: clasificar qué conexiones cruzan el límite.', 'AI extension: classify which connections cross the boundary.'),
    does: t('Propone separar flujos externos e internos antes de comparar niveles.', 'It proposes separating external and internal flows before comparing levels.'),
    changes: t('Reduce la mezcla de alcances en la revisión, sin decidir el límite del sistema.', 'It reduces scope confusion during review without deciding the system boundary.'),
    validate: t('El analista confirma dónde está el límite y qué representa cada conexión.', 'The analyst confirms where the boundary lies and what each connection represents.')
  });

  concept('input_a', 'foundation', {
    label: t('Entrada A', 'Input A'),
    what: t('Flujo de datos que entra desde el exterior al proceso 2.0 en el ejercicio suministrado.', 'The data flow entering process 2.0 from outside in the supplied exercise.'),
    why: t('Su correspondencia en el hijo permite comprobar que la descomposición conserva la información recibida.', 'Its correspondence in the child helps check that decomposition preserves the information received.'),
    question: t('¿Dónde entra A al alcance del diagrama hijo?', 'Where does A enter the scope of the child diagram?'),
    example: t('A → 2.0 en el padre; A → 2.1 en la representación ilustrativa del hijo que conserva la entrada.', 'A → 2.0 in the parent; A → 2.1 in the illustrative child representation that preserves the input.'),
    analogy: t('El contenido de una entrega sigue llegando al mismo taller aunque se detalle su recorrido interior.', 'A delivery still reaches the same workshop even when its internal route is shown in detail.'),
    notConfuse: t('A nombra datos, no una entidad externa ni una orden de ejecutar primero una tarea.', 'A names data, not an external entity or an instruction to execute a task first.'),
    related: ['parent', 'interface', 'missing_input', 'flows']
  }, {
    connection: t('Extensión IA: localizar la entrada de referencia en ambos niveles.', 'AI extension: locate the reference input at both levels.'),
    does: t('Busca una correspondencia de A en el hijo y señala una posible ausencia.', 'It looks for a correspondence for A in the child and flags a possible absence.'),
    changes: t('Hace visible una discrepancia candidata; no inventa una entrada sustitutiva.', 'It makes a candidate discrepancy visible; it does not invent a replacement input.'),
    validate: t('Confirmar contenido, dirección y posibles nombres equivalentes antes de concluir que falta A.', 'Confirm content, direction and possible equivalent names before concluding that A is missing.')
  });

  concept('output_b', 'foundation', {
    label: t('Salida B', 'Output B'),
    what: t('Flujo de datos que el proceso padre 2.0 entrega al exterior en el ejercicio suministrado.', 'The data flow that parent process 2.0 delivers to the outside in the supplied exercise.'),
    why: t('Permite revisar que el detalle hijo mantenga el resultado informativo representado por el padre.', 'It allows review of whether child detail preserves the information output represented by the parent.'),
    question: t('¿El hijo sigue entregando B al exterior?', 'Does the child still deliver B to the outside?'),
    example: t('2.0 → B en el padre; 2.3 → B en el dibujo ilustrativo del hijo.', '2.0 → B in the parent; 2.3 → B in the illustrative child drawing.'),
    analogy: t('El producto informativo que sale de una caja debe seguir reconocible al abrirla.', 'The information output leaving a box must remain recognizable when the box is opened.'),
    notConfuse: t('B es información que sale, no la entidad que la recibe ni la prueba de que toda la lógica interna sea correcta.', 'B is outgoing information, not the receiving entity or proof that all internal logic is correct.'),
    related: ['parent', 'interface', 'new_output', 'flows']
  }, {
    connection: t('Extensión IA: cotejar los resultados externos representados.', 'AI extension: compare the external outputs represented.'),
    does: t('Comprueba correspondencias candidatas de B y localiza salidas adicionales.', 'It checks candidate correspondences for B and locates additional outputs.'),
    changes: t('Prepara una lista de diferencias para revisión, sin aprobar nuevos resultados del proceso.', 'It prepares a difference list for review without approving new process outputs.'),
    validate: t('Verificar que B conserve su significado y que ninguna salida adicional carezca de justificación.', 'Verify that B retains its meaning and that any additional output is justified.')
  });

  concept('flows', 'foundation', {
    label: t('Flujos de datos', 'Data flows'),
    what: t('Conexiones dirigidas que muestran qué información se mueve entre componentes de un DFD.', 'Directed connections showing what information moves between DFD components.'),
    why: t('Comparar niveles exige seguir los datos y su dirección, no solo observar la forma del dibujo.', 'Comparing levels requires following data and its direction, not just observing the shape of a drawing.'),
    question: t('¿Qué información transporta esta flecha y de dónde a dónde va?', 'What information does this arrow carry, and where does it go?'),
    example: t('A y B son los flujos externos suministrados; Datos I, II y III son nombres internos ilustrativos.', 'A and B are the supplied external flows; Data I, II and III are illustrative internal names.'),
    analogy: t('Etiquetas de contenido sobre conexiones, no instrucciones sobre el orden de encendido de las máquinas.', 'Content labels on connections, not instructions for the order in which machines are switched on.'),
    notConfuse: t('Una flecha DFD expresa movimiento de datos; no es por sí sola una secuencia de control de un diagrama de flujo.', 'A DFD arrow expresses data movement; it is not by itself a control sequence in a flowchart.'),
    related: ['input_a', 'output_b', 'internal', 'naming']
  }, {
    connection: t('Extensión IA: revisar consistencia de conexiones.', 'AI extension: review connection consistency.'),
    does: t('Contrasta nombres, dirección y alcance de flujos en dos niveles.', 'It compares flow names, direction and scope across two levels.'),
    changes: t('Prioriza conexiones que merecen revisión, sin asumir equivalencias por similitud textual.', 'It prioritizes connections for review without assuming equivalence from textual similarity.'),
    validate: t('Confirmar el contenido y los extremos de cada flujo en la evidencia del modelo.', 'Confirm each flow content and endpoints against model evidence.')
  });

  concept('internal', 'foundation', {
    label: t('Flujos internos', 'Internal flows'),
    what: t('Datos que se mueven entre los procesos del hijo sin cruzar el límite del proceso padre.', 'Data moving between child processes without crossing the parent process boundary.'),
    why: t('El detalle interno puede crecer manteniendo coherentes las entradas y salidas externas.', 'Internal detail can grow while external inputs and outputs remain coherent.'),
    question: t('¿La nueva conexión permanece dentro del hijo y conserva A/B en el límite?', 'Does the new connection stay inside the child and preserve A/B at the boundary?'),
    example: t('Candidato 3: las conexiones ilustrativas Datos I, II y III enlazan 2.1, 2.2 y 2.3; A sigue entrando y B saliendo.', 'Candidate 3: illustrative Data I, II and III connections link 2.1, 2.2 and 2.3; A still enters and B still leaves.'),
    analogy: t('Agregar un pasillo interior no equivale a abrir una puerta nueva hacia la calle.', 'Adding an internal corridor is not the same as opening a new door to the street.'),
    notConfuse: t('Más flujos internos no implican desequilibrio. Equilibrio tampoco demuestra que cada transformación interna sea correcta.', 'More internal flows do not imply imbalance. Balancing also does not prove that every internal transformation is correct.'),
    related: ['child', 'interface', 'balance', 'flows']
  }, {
    connection: t('Extensión IA: distinguir ampliación interna de cambio externo.', 'AI extension: distinguish internal expansion from external change.'),
    does: t('Ayuda a separar las conexiones interiores de las que afectan la interfaz.', 'It helps separate interior connections from those affecting the interface.'),
    changes: t('Evita tratar cada flecha adicional como un error confirmado.', 'It avoids treating every additional arrow as a confirmed error.'),
    validate: t('Revisar los extremos del flujo y, por separado, la lógica de las transformaciones internas.', 'Review flow endpoints and, separately, the logic of internal transformations.')
  });

  concept('p21', 'foundation', {
    label: t('Proceso hijo 2.1', 'Child process 2.1'),
    what: t('Proceso interno ilustrativo usado para mostrar una parte de la descomposición de 2.0.', 'An illustrative internal process used to show one part of the decomposition of 2.0.'),
    why: t('Permite ubicar una entrada del hijo y distinguirla de las conexiones que permanecen dentro del límite.', 'It helps locate a child input and distinguish it from connections remaining within the boundary.'),
    question: t('¿A llega a 2.1 cruzando el límite externo en este candidato?', 'Does A reach 2.1 across the external boundary in this candidate?'),
    example: t('Ilustrativo: cuando A está presente, llega a 2.1; Datos I conecta 2.1 con 2.2.', 'Illustrative: when A is present, it reaches 2.1; Data I connects 2.1 to 2.2.'),
    analogy: t('Una pieza visible al ampliar el mecanismo representado por 2.0.', 'A part visible when enlarging the mechanism represented by 2.0.'),
    notConfuse: t('La numeración no define una secuencia temporal ni una función real del inventario de Kitchen Gadgets.', 'The numbering defines neither a time sequence nor a real Kitchen Gadgets inventory function.'),
    related: ['child', 'input_a', 'internal']
  }, {
    connection: t('Extensión IA: rastrear la entrada hacia un proceso interno.', 'AI extension: trace an input to an internal process.'),
    does: t('Relaciona la conexión entrante visible con la interfaz del padre.', 'It relates the visible incoming connection to the parent interface.'),
    changes: t('Ayuda a localizar una posible omisión; no deduce reglas de negocio para 2.1.', 'It helps locate a possible omission; it does not infer business rules for 2.1.'),
    validate: t('Confirmar que el dibujo representa la conexión prevista y no atribuirle una tarea no documentada.', 'Confirm that the drawing represents the intended connection without attributing an undocumented task to it.')
  });

  concept('p22', 'foundation', {
    label: t('Proceso hijo 2.2', 'Child process 2.2'),
    what: t('Proceso interno ilustrativo conectado con otras partes de la descomposición de 2.0.', 'An illustrative internal process connected to other parts of the decomposition of 2.0.'),
    why: t('Hace visible que el hijo puede incluir transformaciones y conexiones que el padre no detalla.', 'It shows that the child can include transformations and connections not detailed by the parent.'),
    question: t('¿Las conexiones de 2.2 permanecen dentro del alcance de 2.0?', 'Do the connections of 2.2 remain within the scope of 2.0?'),
    example: t('Ilustrativo: Datos I llega desde 2.1 y Datos II se dirige a 2.3, ambos dentro del hijo.', 'Illustrative: Data I arrives from 2.1 and Data II goes to 2.3, both inside the child.'),
    analogy: t('Una estación dentro de un taller cuyo detalle no aparece en la vista exterior.', 'A station inside a workshop whose detail does not appear in the outside view.'),
    notConfuse: t('Su posición central no lo convierte en una decisión de control; el círculo representa un proceso DFD.', 'Its central position does not make it a control decision; the circle represents a DFD process.'),
    related: ['child', 'internal', 'p21', 'p23']
  }, {
    connection: t('Extensión IA: reconocer conexiones que no cruzan el límite.', 'AI extension: recognize connections that do not cross the boundary.'),
    does: t('Clasifica las conexiones de 2.2 como candidatas a flujos internos según sus extremos.', 'It classifies the connections of 2.2 as candidate internal flows based on their endpoints.'),
    changes: t('Aporta detalle a la revisión del alcance, sin demostrar la corrección de su transformación.', 'It adds detail to scope review without proving that its transformation is correct.'),
    validate: t('Verificar extremos y significado de Datos I y II; las etiquetas ilustrativas no documentan reglas reales.', 'Verify the endpoints and meaning of Data I and II; illustrative labels do not document real rules.')
  });

  concept('p23', 'foundation', {
    label: t('Proceso hijo 2.3', 'Child process 2.3'),
    what: t('Proceso interno ilustrativo desde el cual se dibujan las salidas externas del hijo.', 'An illustrative internal process from which the child external outputs are drawn.'),
    why: t('Ayuda a distinguir una conexión interna que llega al proceso de un dato que sale del alcance de 2.0.', 'It helps distinguish an internal connection reaching the process from data leaving the scope of 2.0.'),
    question: t('¿Qué información sale de 2.3 hacia el exterior en este candidato?', 'What information leaves 2.3 for the outside in this candidate?'),
    example: t('Ilustrativo: 2.3 entrega B; en el candidato 2 también aparece X cruzando el límite.', 'Illustrative: 2.3 delivers B; in candidate 2, X also appears crossing the boundary.'),
    analogy: t('Una estación de salida que permite comparar lo que abandona el taller con lo anunciado en su vista general.', 'An output station that lets us compare what leaves the workshop with what its overview shows.'),
    notConfuse: t('Recibir otro flujo interno no autoriza por sí mismo una nueva salida externa.', 'Receiving another internal flow does not by itself justify a new external output.'),
    related: ['child', 'output_b', 'new_output', 'internal']
  }, {
    connection: t('Extensión IA: rastrear qué resultados atraviesan el límite.', 'AI extension: trace which outputs cross the boundary.'),
    does: t('Coteja las salidas visibles de 2.3 con B en el padre.', 'It compares the visible outputs of 2.3 with B in the parent.'),
    changes: t('Localiza diferencias de salida para el analista sin autorizar una nueva función.', 'It locates output differences for the analyst without authorizing a new function.'),
    validate: t('Revisar si cada salida externa tiene correspondencia y justificación en el modelo superior.', 'Review whether each external output has a correspondence and justification in the higher model.')
  });

  concept('missing_input', 'foundation', {
    label: t('Entrada sin correspondencia', 'Input without correspondence'),
    what: t('Situación en la que una entrada externa del padre no está representada de forma correspondiente en el hijo.', 'A situation in which a parent external input has no corresponding representation in the child.'),
    why: t('La descomposición podría haber perdido información que la función representada necesita recibir.', 'The decomposition may have lost information that the represented function needs to receive.'),
    question: t('¿Qué ocurrió con A al pasar del padre al hijo?', 'What happened to A when moving from parent to child?'),
    example: t('Candidato 1 del ejercicio: el padre recibe A, pero el hijo no muestra ninguna entrada externa. No está equilibrado.', 'Exercise candidate 1: the parent receives A, but the child shows no external input. It is not balanced.'),
    analogy: t('Un plano detallado omite una puerta de entrada visible en el plano general.', 'A detailed plan omits an entrance door visible in the overview.'),
    notConfuse: t('Una ausencia detectada por IA sigue siendo una señal candidata hasta revisar equivalencias, alcance y evidencia.', 'An absence detected by AI remains a candidate flag until equivalences, scope and evidence are reviewed.'),
    related: ['input_a', 'balance', 'flag']
  }, {
    connection: t('Extensión IA: señalar posibles entradas faltantes.', 'AI extension: flag possibly missing inputs.'),
    does: t('Enumera entradas del padre para las que no encuentra una correspondencia candidata.', 'It lists parent inputs for which it finds no candidate correspondence.'),
    changes: t('Concentra la revisión en una diferencia concreta, sin eliminar la validación humana.', 'It focuses review on a specific difference without removing human validation.'),
    validate: t('Descartar cambios de nombre o agrupaciones documentadas antes de confirmar una omisión.', 'Rule out documented renaming or grouping before confirming an omission.')
  });

  concept('new_output', 'foundation', {
    label: t('Salida externa X', 'External output X'),
    what: t('Salida adicional del hijo que no tiene correspondencia justificada en la interfaz del padre del ejercicio.', 'An additional child output with no justified correspondence in the parent interface of the exercise.'),
    why: t('Agregar un resultado externo cambia lo que el proceso entrega y requiere coherencia con el nivel superior.', 'Adding an external output changes what the process delivers and requires coherence with the higher level.'),
    question: t('¿Dónde está representada o justificada X en el padre?', 'Where is X represented or justified in the parent?'),
    example: t('Candidato 2 del ejercicio: el padre entrega B; el hijo entrega B y X. Sin correspondencia de X, no está equilibrado.', 'Exercise candidate 2: the parent delivers B; the child delivers B and X. With no correspondence for X, it is not balanced.'),
    analogy: t('La vista interior muestra una puerta adicional hacia la calle que el plano general no contempla.', 'The interior view shows an additional door to the street that the overview does not account for.'),
    notConfuse: t('X cruza el límite. No es el flujo interno adicional del candidato 3 ni una nueva regla del caso Kitchen Gadgets.', 'X crosses the boundary. It is neither the additional internal flow in candidate 3 nor a new Kitchen Gadgets case rule.'),
    related: ['output_b', 'interface', 'internal', 'flag']
  }, {
    connection: t('Extensión IA: señalar nuevas salidas posiblemente injustificadas.', 'AI extension: flag possibly unjustified new outputs.'),
    does: t('Identifica salidas del hijo sin correspondencia candidata en el padre.', 'It identifies child outputs with no candidate correspondence in the parent.'),
    changes: t('Expone un cambio de interfaz para revisión; no establece un nuevo requisito.', 'It exposes an interface change for review; it does not establish a new requirement.'),
    validate: t('Confirmar si X expresa información realmente nueva o una desagregación documentada antes de corregir el modelo.', 'Confirm whether X expresses genuinely new information or a documented decomposition before correcting the model.')
  });

  concept('naming', 'deepening', {
    label: t('Consistencia de nombres', 'Naming consistency'),
    what: t('Revisión de que los nombres permitan reconocer el significado de los datos al comparar niveles.', 'Review of whether names make data meaning recognizable when comparing levels.'),
    why: t('Nombres distintos pueden ocultar una correspondencia; nombres iguales pueden ocultar significados diferentes.', 'Different names can hide a correspondence; identical names can hide different meanings.'),
    question: t('¿Estas etiquetas representan los mismos datos o solo se parecen?', 'Do these labels represent the same data, or do they only look similar?'),
    example: t('Ejemplo ilustrativo: renombrar A como Entrada A requiere confirmar que conserva su contenido; la semejanza textual no basta.', 'Illustrative example: renaming A to Input A requires confirming that its content is preserved; textual similarity is insufficient.'),
    analogy: t('Comprobar el contenido de dos cajas aunque sus etiquetas sean parecidas.', 'Checking the contents of two boxes even when their labels look similar.'),
    notConfuse: t('Normalizar nombres no equivale a cambiar el significado ni autoriza unir datos diferentes.', 'Normalizing names does not mean changing meaning or authorize merging different data.'),
    related: ['flows', 'balance', 'review']
  }, {
    connection: t('Extensión IA: revisar consistencia terminológica.', 'AI extension: review terminology consistency.'),
    does: t('Propone pares de nombres para comprobar equivalencias o ambigüedades.', 'It proposes name pairs to check for equivalences or ambiguities.'),
    changes: t('Reduce trabajo de búsqueda; las equivalencias quedan pendientes de evidencia.', 'It reduces search work; equivalences remain subject to evidence.'),
    validate: t('Confirmar significado, composición y uso antes de aceptar un nombre común.', 'Confirm meaning, composition and use before accepting a shared name.')
  });

  concept('ai', 'ai', {
    label: t('Comparación asistida por IA', 'AI-assisted comparison'),
    what: t('Extensión IA: apoyo para comparar el padre y el hijo y proponer posibles inconsistencias; no es contenido atribuido al curso.', 'AI extension: support for comparing parent and child and proposing possible inconsistencies; this is not content attributed to the course.'),
    why: t('Puede concentrar la atención en diferencias concretas sin sustituir la lógica del modelo.', 'It can focus attention on specific differences without replacing model logic.'),
    question: t('¿Cómo puede la IA revisar la consistencia sin decidir por el analista?', 'How can AI review consistency without deciding for the analyst?'),
    example: t('Ilustrativo: la IA propone revisar la falta de A o la presencia de X; el analista confirma qué significan.', 'Illustrative: AI proposes reviewing the absence of A or presence of X; the analyst confirms what they mean.'),
    analogy: t('Una segunda lectura que deja observaciones para quien responde por el modelo.', 'A second reading that leaves observations for the person responsible for the model.'),
    notConfuse: t('Señal de IA ≠ error de modelado confirmado. El ejercicio usa comparación lógica de A/B, no ejecuta un modelo de IA.', 'AI flag ≠ confirmed modeling error. The exercise uses logical A/B comparison; it does not run an AI model.'),
    related: ['parent', 'child', 'flag', 'review', 'validated']
  }, {
    connection: t('Recibe el DFD padre y el DFD hijo como evidencia para comparar.', 'It receives the parent DFD and child DFD as evidence for comparison.'),
    does: t('Sugiere discrepancias de flujos, entradas, salidas y nombres.', 'It suggests discrepancies in flows, inputs, outputs and names.'),
    changes: t('Produce candidatos de revisión, nunca aprobación automática.', 'It produces review candidates, never automatic approval.'),
    validate: t('El analista contrasta cada señal con el modelo y acepta solo conclusiones justificadas.', 'The analyst checks each flag against the model and accepts only justified conclusions.')
  });

  concept('flag', 'ai', {
    label: t('Posible inconsistencia', 'Candidate inconsistency'),
    what: t('Extensión IA: observación pendiente de validar sobre una posible falta de correspondencia entre niveles.', 'AI extension: an observation awaiting validation about a possible lack of correspondence between levels.'),
    why: t('Mantiene separada la detección de una diferencia de la confirmación de un error.', 'It keeps detection of a difference separate from confirmation of an error.'),
    question: t('¿Qué evidencia confirma o descarta esta señal?', 'What evidence confirms or dismisses this flag?'),
    example: t('Ilustrativo: no encontrar A por su nombre genera una señal; una equivalencia documentada podría explicarla.', 'Illustrative: failing to find A by name generates a flag; a documented equivalence could explain it.'),
    analogy: t('Una nota de revisión pendiente, no un veredicto.', 'A pending review note, not a verdict.'),
    notConfuse: t('Una alerta de IA no confirma un error ni autoriza cambiar el modelo sin revisar.', 'An AI alert does not confirm an error or authorize changing the model without review.'),
    related: ['ai', 'missing_input', 'new_output', 'review']
  }, {
    connection: t('La comparación asistida entrega señales candidatas.', 'Assisted comparison produces candidate flags.'),
    does: t('Describe dónde parece faltar una correspondencia y qué debe revisarse.', 'It describes where correspondence seems absent and what needs review.'),
    changes: t('Convierte una sospecha en una pregunta comprobable, sin establecer su respuesta.', 'It turns a suspicion into a checkable question without establishing the answer.'),
    validate: t('Conservar o descartar la señal según dirección, significado y alcance documentados.', 'Retain or dismiss the flag based on documented direction, meaning and scope.')
  });

  concept('review', 'ai', {
    label: t('Revisión del analista', 'Analyst review'),
    what: t('Etapa de la extensión IA en la que una persona contrasta las señales con la lógica y evidencia del modelo.', 'A stage of the AI extension in which a person checks flags against model logic and evidence.'),
    why: t('El juicio sobre correspondencia semántica requiere interpretar el sistema, no aceptar una alerta automáticamente.', 'Judging semantic correspondence requires interpreting the system, not automatically accepting an alert.'),
    question: t('¿Hay realmente un error de modelado y qué evidencia lo demuestra?', 'Is there actually a modeling error, and what evidence demonstrates it?'),
    example: t('Ilustrativo: el analista confirma que X cruza el límite y carece de correspondencia en el padre antes de pedir una corrección.', 'Illustrative: the analyst confirms that X crosses the boundary and has no parent correspondence before requesting a correction.'),
    analogy: t('Revisar una observación en el plano antes de autorizar cambios en él.', 'Reviewing an observation on a plan before authorizing changes to it.'),
    notConfuse: t('Revisar no significa aprobar por defecto ni adoptar propuestas de IA como reglas del negocio.', 'Review does not mean default approval or adopting AI proposals as business rules.'),
    related: ['flag', 'naming', 'validated', 'balance']
  }, {
    connection: t('La IA entrega observaciones para una decisión humana.', 'AI supplies observations for a human decision.'),
    does: t('Puede organizar diferencias y sus referencias dentro de los DFD comparados.', 'It can organize differences and their references within the compared DFDs.'),
    changes: t('Facilita rastrear la observación; mantiene la responsabilidad en el analista.', 'It makes the observation easier to trace; responsibility remains with the analyst.'),
    validate: t('Aceptar, descartar o solicitar corrección con una justificación coherente con el modelo.', 'Accept, dismiss or request a correction with a justification coherent with the model.')
  });

  concept('validated', 'ai', {
    label: t('Modelo validado', 'Validated model'),
    what: t('Resultado de la extensión IA tras revisar y resolver las observaciones sobre consistencia entre niveles.', 'The result of the AI extension after reviewing and resolving observations about consistency between levels.'),
    why: t('Distingue una propuesta asistida de una representación aceptada mediante revisión.', 'It distinguishes an assisted proposal from a representation accepted through review.'),
    question: t('¿Las correspondencias externas fueron revisadas y las señales quedaron resueltas?', 'Were external correspondences reviewed and the flags resolved?'),
    example: t('Ilustrativo: el analista acepta la interfaz A/B del candidato 3 tras comprobar que los nuevos flujos permanecen dentro del hijo.', 'Illustrative: the analyst accepts candidate 3 A/B interface after checking that the new flows remain inside the child.'),
    analogy: t('Un plano revisado que deja de ser un borrador para el alcance comprobado.', 'A reviewed plan that is no longer a draft for the scope that was checked.'),
    notConfuse: t('Validar equilibrio no certifica todas las reglas internas ni la corrección completa del sistema.', 'Validating balance does not certify every internal rule or the correctness of the entire system.'),
    related: ['review', 'balance', 'internal']
  }, {
    connection: t('La asistencia termina en una decisión respaldada por revisión.', 'Assistance ends in a decision supported by review.'),
    does: t('Puede resumir observaciones resueltas y pendientes para el analista.', 'It can summarize resolved and pending observations for the analyst.'),
    changes: t('Ayuda a documentar el resultado, sin autoasignar el estado de validado.', 'It helps document the outcome without assigning validated status to itself.'),
    validate: t('Precisar el alcance de la aceptación y mantener pendientes las comprobaciones que no se realizaron.', 'Specify the scope of acceptance and leave unperformed checks pending.')
  });

  concept('ai_compare', 'ai', {
    label: t('IA → padre e hijo: comparar', 'AI → parent and child: compare'),
    what: t('Extensión IA: conexión que propone cotejar la interfaz del proceso padre con la descomposición hija.', 'AI extension: a connection proposing comparison of the parent process interface with the child decomposition.'),
    why: t('Reúne ambas vistas para que una diferencia pueda localizarse en su contexto.', 'It brings both views together so a difference can be located in context.'),
    question: t('¿Cada entrada y salida del padre tiene correspondencia justificada en el hijo?', 'Does every parent input and output have a justified correspondence in the child?'),
    example: t('Ilustrativo: cotejar A → 2.0 → B con los límites del candidato seleccionado.', 'Illustrative: compare A → 2.0 → B with the selected candidate boundaries.'),
    analogy: t('Colocar el plano general junto al acercamiento antes de anotar diferencias.', 'Place the overview beside the close-up before noting differences.'),
    notConfuse: t('Comparar niveles no exige copiar todos los procesos del hijo en el padre.', 'Comparing levels does not require copying every child process into the parent.'),
    related: ['ai', 'parent', 'child', 'balance']
  }, {
    connection: t('Origen: asistencia IA. Destino: modelo padre/hijo.', 'Source: AI assistance. Target: parent/child model.'),
    does: t('Propone correspondencias de entradas y salidas entre ambas representaciones.', 'It proposes input and output correspondences between both representations.'),
    changes: t('Acelera la preparación del cotejo; no decide que el modelo esté equilibrado.', 'It speeds up comparison preparation; it does not decide that the model is balanced.'),
    validate: t('Confirmar equivalencias semánticas y alcance del proceso comparado.', 'Confirm semantic equivalences and the scope of the compared process.')
  });

  concept('ai_flows', 'ai', {
    label: t('IA → flujos: revisar consistencia', 'AI → flows: check consistency'),
    what: t('Extensión IA: conexión dedicada a examinar dirección, extremos y significado candidato de los flujos.', 'AI extension: a connection dedicated to examining flow direction, endpoints and candidate meaning.'),
    why: t('Una conexión mal interpretada puede producir una conclusión equivocada sobre equilibrio.', 'A misinterpreted connection can produce an incorrect balancing conclusion.'),
    question: t('¿El flujo conserva su sentido y su relación con el límite entre niveles?', 'Does the flow preserve its direction and relationship to the boundary across levels?'),
    example: t('Ilustrativo: distinguir A entrante de B saliente y de Datos I, que queda dentro del hijo.', 'Illustrative: distinguish incoming A from outgoing B and from Data I, which stays inside the child.'),
    analogy: t('Leer el contenido y el destino de una conexión antes de compararla con otra.', 'Read a connection content and destination before comparing it with another.'),
    notConfuse: t('Revisar consistencia de datos no determina una secuencia de ejecución.', 'Checking data consistency does not determine an execution sequence.'),
    related: ['ai', 'flows', 'interface', 'internal']
  }, {
    connection: t('Origen: asistencia IA. Destino: flujos de datos.', 'Source: AI assistance. Target: data flows.'),
    does: t('Señala conexiones cuya dirección o clasificación interna/externa parece incoherente.', 'It flags connections whose direction or internal/external classification appears inconsistent.'),
    changes: t('Produce una lista de conexiones para examinar; no corrige automáticamente flechas.', 'It produces a list of connections to examine; it does not automatically correct arrows.'),
    validate: t('Revisar extremos, contenido y límite con la evidencia del DFD.', 'Review endpoints, content and boundary against DFD evidence.')
  });

  concept('ai_missing', 'ai', {
    label: t('IA → entradas faltantes: señalar', 'AI → missing inputs: flag'),
    what: t('Extensión IA: conexión que señala entradas del padre sin correspondencia candidata en el hijo.', 'AI extension: a connection flagging parent inputs with no candidate correspondence in the child.'),
    why: t('Hace visible una posible pérdida de información al ampliar el detalle.', 'It makes a possible loss of information visible when detail is expanded.'),
    question: t('¿La aparente ausencia de A es real o tiene una explicación documentada?', 'Is the apparent absence of A real, or does it have a documented explanation?'),
    example: t('Ilustrativo: marcar A en una revisión del candidato 1, que muestra al hijo sin entrada externa.', 'Illustrative: flag A when reviewing candidate 1, which shows the child without an external input.'),
    analogy: t('Una marca junto a un elemento del plano general que no se encuentra en el detalle.', 'A mark beside an overview element that cannot be found in the detailed view.'),
    notConfuse: t('No encontrar un nombre no prueba que falten los datos: la equivalencia debe investigarse.', 'Failing to find a name does not prove that data is missing: equivalence needs investigation.'),
    related: ['ai', 'missing_input', 'input_a', 'flag']
  }, {
    connection: t('Origen: asistencia IA. Destino: posibles entradas faltantes.', 'Source: AI assistance. Target: possibly missing inputs.'),
    does: t('Presenta la entrada del padre y la ausencia de una correspondencia encontrada.', 'It presents the parent input and the lack of a found correspondence.'),
    changes: t('Formula una señal revisable, sin inventar datos para completarla.', 'It formulates a reviewable flag without inventing data to fill the gap.'),
    validate: t('Confirmar una omisión real después de examinar nombres, composición y alcance.', 'Confirm an actual omission after examining names, composition and scope.')
  });

  concept('ai_outputs', 'ai', {
    label: t('IA → salidas nuevas: señalar', 'AI → new outputs: flag'),
    what: t('Extensión IA: conexión que señala salidas del hijo sin justificación candidata en el nivel padre.', 'AI extension: a connection flagging child outputs with no candidate justification at the parent level.'),
    why: t('Una salida nueva puede cambiar la función externa que el nivel superior representa.', 'A new output can change the external function represented by the higher level.'),
    question: t('¿X agrega información externa o desagrega algo ya documentado?', 'Does X add external information or decompose something already documented?'),
    example: t('Ilustrativo: señalar X en el candidato 2 porque el padre del ejercicio solo muestra B.', 'Illustrative: flag X in candidate 2 because the exercise parent only shows B.'),
    analogy: t('Anotar una salida adicional del plano detallado para contrastarla con el plano general.', 'Note an additional output on the detailed plan to compare it with the overview.'),
    notConfuse: t('La IA no autoriza X como nuevo requisito ni confirma por sí sola un error.', 'AI does not authorize X as a new requirement or confirm an error by itself.'),
    related: ['ai', 'new_output', 'output_b', 'flag']
  }, {
    connection: t('Origen: asistencia IA. Destino: nuevas salidas posiblemente injustificadas.', 'Source: AI assistance. Target: possibly unjustified new outputs.'),
    does: t('Relaciona la salida adicional con la interfaz externa que debería explicarla.', 'It relates the additional output to the external interface that should explain it.'),
    changes: t('Aporta una pregunta de revisión; no altera el alcance del sistema.', 'It supplies a review question; it does not alter system scope.'),
    validate: t('Determinar si existe correspondencia semántica y documentar cualquier corrección necesaria.', 'Determine whether semantic correspondence exists and document any necessary correction.')
  });

  concept('ai_naming', 'ai', {
    label: t('IA → nombres: revisar consistencia', 'AI → names: check consistency'),
    what: t('Extensión IA: conexión que propone revisar etiquetas ambiguas o equivalencias terminológicas entre niveles.', 'AI extension: a connection proposing review of ambiguous labels or terminology equivalences across levels.'),
    why: t('Una comparación literal puede confundir diferencias de vocabulario con diferencias de información.', 'A literal comparison can mistake vocabulary differences for information differences.'),
    question: t('¿Podemos justificar que dos nombres designan los mismos datos?', 'Can we justify that two names designate the same data?'),
    example: t('Ilustrativo: proponer revisar A y Entrada A sin declararlos equivalentes hasta conocer su definición.', 'Illustrative: propose reviewing A and Input A without declaring them equivalent until their definition is known.'),
    analogy: t('Sugerir términos para un glosario y pedir al responsable que confirme su significado.', 'Suggest terms for a glossary and ask the responsible person to confirm their meaning.'),
    notConfuse: t('Parecido lingüístico no equivale a igualdad semántica; un cambio de nombre no corrige datos incompatibles.', 'Linguistic similarity does not equal semantic identity; renaming does not fix incompatible data.'),
    related: ['ai', 'naming', 'flows', 'review']
  }, {
    connection: t('Origen: asistencia IA. Destino: consistencia de nombres.', 'Source: AI assistance. Target: naming consistency.'),
    does: t('Sugiere nombres que merecen comparación por posible ambigüedad o equivalencia.', 'It suggests names worth comparing for possible ambiguity or equivalence.'),
    changes: t('Prepara candidatos de normalización y mantiene explícita su incertidumbre.', 'It prepares normalization candidates and keeps their uncertainty explicit.'),
    validate: t('Aceptar equivalencias solo después de revisar contenido, uso y definiciones del modelo.', 'Accept equivalences only after reviewing content, usage and model definitions.')
  });

  // Logical comparison of canonical flow identifiers for this teaching exercise.
  // It does not infer semantic equivalence and does not call or simulate an AI model.
  function evaluateCandidate(parent, candidate) {
    const difference = (left, right) => Array.from(new Set(left)).filter(value => !new Set(right).has(value));
    const missingInputs = difference(parent.inputs, candidate.inputs);
    const newInputs = difference(candidate.inputs, parent.inputs);
    const missingOutputs = difference(parent.outputs, candidate.outputs);
    const newOutputs = difference(candidate.outputs, parent.outputs);
    return {
      balanced: [missingInputs, newInputs, missingOutputs, newOutputs].every(items => items.length === 0),
      missingInputs, newInputs, missingOutputs, newOutputs
    };
  }
  const internalFlows = [
    { from: id('p21'), to: id('p22'), concept: id('internal'), label: t('Datos I', 'Data I') },
    { from: id('p22'), to: id('p23'), concept: id('internal'), label: t('Datos II', 'Data II') }
  ];
  atlas.models[id('model')] = {
    parent: { concept: id('parent'), inputs: ['A'], outputs: ['B'] },
    processes: [id('p21'), id('p22'), id('p23')],
    evaluateCandidate,
    candidates: [
      {
        id: 'missing-a', label: t('Candidato 1', 'Candidate 1'), inputs: [], outputs: ['B'], internalFlows: internalFlows.slice(),
        feedback: t('No está equilibrado: el padre recibe A, pero el hijo no representa esa entrada externa. Conservar B no compensa la pérdida de A.', 'It is not balanced: the parent receives A, but the child does not represent that external input. Preserving B does not compensate for losing A.')
      },
      {
        id: 'new-x', label: t('Candidato 2', 'Candidate 2'), inputs: ['A'], outputs: ['B', 'X'], internalFlows: internalFlows.slice(),
        feedback: t('No está equilibrado: el hijo conserva A y B, pero agrega X hacia el exterior sin correspondencia en el padre. X cruza el límite; no es un flujo interno.', 'It is not balanced: the child preserves A and B but adds X to the outside with no parent correspondence. X crosses the boundary; it is not an internal flow.')
      },
      {
        id: 'internal-detail', label: t('Candidato 3', 'Candidate 3'), inputs: ['A'], outputs: ['B'],
        internalFlows: internalFlows.concat({ from: id('p21'), to: id('p23'), concept: id('internal'), label: t('Datos III', 'Data III') }),
        feedback: t('Sí está equilibrado: A sigue entrando y B sigue saliendo. El flujo adicional Datos III permanece dentro del hijo. El detalle puede crecer mientras el significado externo siga siendo coherente.', 'It is balanced: A still enters and B still leaves. The additional Data III flow remains inside the child. Detail can grow while external meaning remains coherent.')
      }
    ]
  };

  atlas.diagrams['04'] = {
    id: '04', kind: 'balance', model: id('model'),
    title: t('Equilibrio entre niveles', 'Balancing between levels'),
    question: t('¿El hijo conserva lo que el padre recibe y entrega?', 'Does the child preserve what the parent receives and delivers?'),
    statement: t('El detalle interno puede crecer; las entradas y salidas externas deben seguir siendo coherentes.', 'Internal detail can grow; external inputs and outputs must remain coherent.'),
    definition: t('Equilibrar es conservar la correspondencia de los flujos externos entre un proceso padre y su diagrama hijo.', 'Balancing preserves the correspondence of external flows between a parent process and its child diagram.'),
    transition: t('Ya sabemos cómo se mueve la información entre procesos. Pero ¿qué significa exactamente cada dato que aparece en el modelo? Del flujo de datos pasamos a sus elementos y al diccionario de datos.', 'We now know how information moves between processes. But what exactly does each datum in the model mean? From data flows we move to their elements and the data dictionary.'),
    root: id('balance'),
    nodes: ['balance', 'parent', 'child', 'interface', 'input_a', 'output_b', 'flows', 'internal', 'p21', 'p22', 'p23', 'missing_input', 'new_output', 'naming', 'flag', 'review', 'validated'].map(id),
    aiNode: id('ai'),
    aiQuestion: t('¿Cómo puede la IA ayudarnos a revisar la consistencia entre niveles sin sustituir la lógica del modelo?', 'How can AI help review consistency between levels without replacing the logic of the model?'),
    aiMessage: t('La IA puede detectar posibles inconsistencias. El analista debe validar si realmente existe un error de modelado. Señal de IA ≠ error confirmado.', 'AI can detect possible inconsistencies. The analyst must validate whether a modeling error actually exists. AI flag ≠ confirmed error.'),
    aiFlow: ['parent', 'child', 'ai', 'flag', 'review', 'validated'].map(id),
    aiRelationships: [
      { id: id('rel_compare'), from: id('ai'), to: id('child'), action: t('Comparar padre e hijo', 'Compare parent and child'), concept: id('ai_compare'), value: t('Cotejar las interfaces de ambos niveles y proponer diferencias para revisión.', 'Compare interfaces at both levels and propose differences for review.') },
      { id: id('rel_flows'), from: id('ai'), to: id('flows'), action: t('Revisar consistencia', 'Check consistency'), concept: id('ai_flows'), value: t('Revisar dirección, extremos y significado candidato de los flujos.', 'Review direction, endpoints and candidate meaning of flows.') },
      { id: id('rel_missing'), from: id('ai'), to: id('missing_input'), action: t('Señalar entradas faltantes', 'Flag missing inputs'), concept: id('ai_missing'), value: t('Localizar entradas sin correspondencia aparente; el analista confirma si hay una omisión.', 'Locate inputs with no apparent correspondence; the analyst confirms whether an omission exists.') },
      { id: id('rel_outputs'), from: id('ai'), to: id('new_output'), action: t('Señalar salidas nuevas', 'Flag new outputs'), concept: id('ai_outputs'), value: t('Identificar salidas externas posiblemente injustificadas sin autorizar nuevos requisitos.', 'Identify possibly unjustified external outputs without authorizing new requirements.') },
      { id: id('rel_naming'), from: id('ai'), to: id('naming'), action: t('Revisar nombres', 'Check names'), concept: id('ai_naming'), value: t('Proponer equivalencias terminológicas que deben confirmarse por su significado.', 'Propose terminology equivalences that must be confirmed by meaning.') }
    ]
  };
}(window));
