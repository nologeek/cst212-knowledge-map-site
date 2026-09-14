(function () {
  'use strict';
  const db = window.CST212_W3;
  if (!db || !['01','02','03','04','05','06','07'].every(id => db.diagrams[id])) return;
  const t = (es, en) => ({ es, en });
  const definitions = [
    {
      id:'w3m_synthesize', target:'w3f_requisites', label:t('Requisitos: sintetizar con trazabilidad','Requirements: synthesize with traceability'), action:t('Sintetizar','Synthesize'),
      what:t('Organizar requisitos existentes conservando su significado y su origen.','Organize existing requirements while preserving their meaning and origin.'),
      why:t('El modelo lógico debe responder a necesidades documentadas, no a supuestos añadidos por la herramienta.','The logical model must address documented needs, not assumptions added by the tool.'),
      question:t('¿Podemos encontrar la evidencia de cada requisito resumido?','Can we find the evidence for every summarized requirement?'),
      example:t('Resumir el requisito de recibir pedidos por EDI sin transformarlo en un supuesto requisito de aplicación web.','Summarize the requirement to receive orders through EDI without turning it into an assumed web application requirement.'),
      analogy:t('Una síntesis con referencias al margen: reduce extensión, no elimina la posibilidad de volver al original.','A summary with references in the margin: it reduces length without removing the way back to the original.'),
      validate:t('Comparar el resumen con las fuentes; confirmar condiciones, excepciones y responsable de aceptación.','Compare the summary with its sources; confirm conditions, exceptions and the person responsible for acceptance.')
    },
    {
      id:'w3m_dfd', target:'w3k_dfd', label:t('DFD: proponer y revisar','DFD: draft and check'), action:t('Proponer / revisar','Draft / check'),
      what:t('Asistir la representación de entidades, procesos, almacenes y flujos de datos a partir de información disponible.','Assist the representation of entities, processes, stores and data flows using available information.'),
      why:t('Un dibujo plausible no demuestra que sus intercambios de información sean correctos.','A plausible drawing does not establish that its information exchanges are correct.'),
      question:t('¿Cada flujo tiene una fuente, un destino y un significado justificables?','Does every flow have a justifiable source, destination and meaning?'),
      example:t('Revisar que la confirmación del almacén llegue al proceso que utiliza esa evidencia antes de procesar el cargo.','Check that warehouse confirmation reaches the process that uses this evidence before processing the charge.'),
      analogy:t('Un delineante prepara el plano; la revisión comprueba que representa el sistema necesario.','A drafter prepares the blueprint; review checks that it represents the required system.'),
      validate:t('Contrastar con los requisitos y la notación DFD. La IA no debe introducir entidades, almacenes o flujos como hechos nuevos.','Check against requirements and DFD notation. AI must not introduce entities, stores or flows as new facts.')
    },
    {
      id:'w3m_levels', target:'w3k_levels', label:t('Niveles: comparar y equilibrar','Levels: compare and balance'), action:t('Comparar / equilibrar','Compare / balance'),
      what:t('Comparar la interfaz de un proceso padre con la interfaz de su diagrama hijo.','Compare a parent process interface with its child diagram interface.'),
      why:t('El aumento de detalle no autoriza a perder entradas ni a inventar salidas externas.','More detail does not permit losing inputs or inventing external outputs.'),
      question:t('¿Se conserva el significado de las entradas y salidas al cambiar de nivel?','Is the meaning of inputs and outputs preserved across levels?'),
      example:t('Señalar que el padre recibe A y el candidato hijo no muestra ninguna entrada equivalente.','Flag that the parent receives A while the candidate child shows no equivalent input.'),
      analogy:t('Al acercar el mapa, la vía que entraba en la ciudad no debe desaparecer.','When zooming into a map, the road entering the city must not disappear.'),
      validate:t('Comprobar si la señal es un error real, una descomposición válida del flujo o una diferencia de nombre que debe aclararse.','Check whether the flag is an actual error, valid flow decomposition or a naming difference requiring clarification.')
    },
    {
      id:'w3m_dictionary', target:db.diagrams['05'].root, label:t('Diccionario: extraer y normalizar','Dictionary: extract and normalize'), action:t('Extraer / normalizar','Extract / normalize'),
      what:t('Proponer entradas del diccionario y revisar nombres a partir del DFD y de la evidencia del sistema.','Propose dictionary entries and review names using the DFD and system evidence.'),
      why:t('Los nombres consistentes ayudan a que diferentes personas interpreten los mismos datos de la misma forma.','Consistent names help different people interpret the same data in the same way.'),
      question:t('¿Normalizar el nombre conserva el significado o mezcla datos distintos?','Does normalizing the name preserve meaning or mix different data?'),
      example:t('Relacionar el flujo Pedido con su entrada en el diccionario; marcar como ilustrativos los campos aún no confirmados.','Link the Order flow to its dictionary entry; mark unconfirmed fields as illustrative.'),
      analogy:t('Un glosario compartido propone una escritura común sin decidir por sí solo qué significa cada palabra.','A shared glossary proposes common wording without deciding on its own what every word means.'),
      validate:t('Revisar definiciones, composición, origen y destino. No convertir supuestos ni sinónimos aparentes en definiciones aceptadas.','Review definitions, composition, source and destination. Do not turn assumptions or apparent synonyms into accepted definitions.')
    },
    {
      id:'w3m_process', target:db.diagrams['06'].root, label:t('Procesos: expresar lógica y revisar caminos','Processes: express logic and check paths'), action:t('Proponer / revisar caminos','Draft / check paths'),
      what:t('Representar reglas conocidas mediante un diagrama de flujo o pseudocódigo y explorar sus caminos.','Represent known rules with a flowchart or pseudocode and explore their paths.'),
      why:t('La lógica debe cubrir sus alternativas sin confundirse con el movimiento de datos que muestra un DFD.','Logic must cover its alternatives without being confused with the data movement shown in a DFD.'),
      question:t('¿Los caminos Sí y No corresponden a las mismas reglas en ambas representaciones?','Do the Yes and No paths correspond to the same rules in both representations?'),
      example:t('Comparar crear una orden de envío cuando hay disponibilidad con enviar un mensaje cuando no la hay.','Compare creating a shipping order when inventory is available with sending a message when it is not.'),
      analogy:t('Dos formas de describir una receta: pasos dibujados o instrucciones escritas, con las mismas decisiones.','Two ways to describe a recipe: drawn steps or written instructions, with the same decisions.'),
      validate:t('Revisar reglas y casos excepcionales con usuarios y analista. Un caso límite sugerido no es una nueva política confirmada.','Review rules and edge cases with users and the analyst. A suggested edge case is not a confirmed new policy.')
    },
    {
      id:'w3m_decision', target:db.diagrams['07'].root, label:t('Decisiones: cobertura y conflictos','Decisions: coverage and conflicts'), action:t('Comprobar cobertura / conflictos','Check coverage / conflicts'),
      what:t('Revisar combinaciones de condiciones y resultados para detectar posibles omisiones o contradicciones.','Review combinations of conditions and results to identify possible omissions or contradictions.'),
      why:t('La tabla y el árbol deben aplicar la misma política y producir resultados equivalentes.','The table and tree must apply the same policy and produce equivalent results.'),
      question:t('¿Las ocho combinaciones tienen el resultado indicado por las reglas del caso?','Do all eight combinations have the result specified by the case rules?'),
      example:t('Comprobar que Sí/Sí/Sí recibe 20%, incluido el 5% adicional del caso, y no solo 15%.','Check that Yes/Yes/Yes receives 20%, including the additional 5% in the case, not just 15%.'),
      analogy:t('Una lista de verificación comprueba todas las salidas; no decide la política que determina sus importes.','A checklist checks every outcome; it does not decide the policy determining the amounts.'),
      validate:t('Usar exclusivamente las reglas autorizadas de College Driver. Confirmar cualquier posible conflicto antes de llamarlo error.','Use only the authorized College Driver rules. Confirm any possible conflict before calling it an error.')
    }
  ];
  definitions.forEach(item => {
    db.concepts[item.id] = {
      id:item.id,label:item.label,layer:'ai',what:item.what,why:item.why,question:item.question,
      example:item.example,analogy:item.analogy,related:[item.target,'w3f_analystvalidation'],
      notConfuse:t('Propuesta o señal de IA ≠ modelo, definición o regla validada.','AI proposal or flag ≠ validated model, definition or rule.'),sources:['w3-course'],
      ai:{connection:item.what,does:item.what,changes:item.why,validate:item.validate}
    };
  });
  db.consolidation = {
    id:'memory',aiNode:'w3f_ai',nodes:definitions.map(item=>item.target),
    aiRelationships:definitions.map(item=>({id:item.id+'_connection',from:'w3f_ai',to:item.target,action:item.action,concept:item.id,value:item.question})),
    journey:[
      {concept:'w3f_requisites',label:t('Requisitos','Requirements')},
      {concept:'w3f_functions',label:t('Funciones','Functions')},
      {concept:'w3f_logical_models',label:t('Modelo lógico','Logical model')},
      {concept:'w3k_dfd',label:t('DFD','DFD')},
      {concept:'w3k_context',label:t('Contexto','Context')},
      {concept:'w3k_diagram0',label:t('Diagrama 0','Diagram 0')},
      {concept:'w3k_child2_0',label:t('Diagrama hijo','Child diagram')},
      {concept:db.diagrams['04'].root,label:t('Equilibrio','Balancing')},
      {concept:db.diagrams['05'].root,label:t('Diccionario de datos','Data dictionary')},
      {concept:db.diagrams['06'].root,label:t('Lógica de procesos','Process logic')},
      {concept:db.diagrams['07'].root,label:t('Lógica de decisiones','Decision logic')}
    ]
  };
})();
