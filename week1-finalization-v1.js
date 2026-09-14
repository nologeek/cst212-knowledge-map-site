(function () {
  'use strict';

  function B(es, en) { return { es: es, en: en }; }
  function isEnglish() { return document.documentElement.lang === 'en' || document.body.classList.contains('atlas-lang-en'); }
  function T(value) { return value && (isEnglish() ? value.en : value.es) || ''; }
  function D(title, what, why, question, metaphor, example, related, confuse, options) {
    return Object.assign({ title: title, what: what, why: why, question: question, metaphor: metaphor, example: example, related: related, confuse: confuse, layer: 'foundation' }, options || {});
  }

  var FOUNDATION = B('CST212 · Semana 1 · Fundamento académico', 'CST212 · Week 1 · Academic foundation');
  var AI_LAYER = B('Extensión AI-First · requiere validación', 'AI-First extension · validation required');
  var details = {
    d05_boundary: D(B('Frontera del sistema', 'System boundary'), B('Límite conceptual que separa los elementos incluidos en el sistema de los que pertenecen a su entorno.', 'The conceptual limit separating elements included in the system from those in its environment.'), B('Evita intentar resolver aquello que está fuera del control del proyecto o excluir elementos necesarios.', 'It prevents trying to solve what is outside project control or excluding required elements.'), B('¿Qué pertenece al sistema que estamos analizando?', 'What belongs to the system we are analyzing?'), B('Las paredes de una casa distinguen interior y entorno, aunque puertas y ventanas los conectan.', 'A house wall distinguishes inside from environment, although doors and windows connect them.'), B('La reserva, el personal y la disponibilidad pueden estar dentro del sistema HKA; el cliente permanece fuera.', 'Reservations, staff and availability may be inside HKA; the customer remains outside.'), B('Alcance · Interior · Exterior · Interfaz', 'Scope · Inside · Outside · Interface'), B('Una frontera conceptual no es necesariamente una pared física.', 'A conceptual boundary is not necessarily a physical wall.')),
    d05_inside: D(B('Dentro / interno', 'Inside / internal'), B('Elementos considerados parte del sistema o del alcance del análisis.', 'Elements considered part of the system or analysis scope.'), B('Son los elementos sobre los que existe responsabilidad o capacidad de cambio.', 'These are the elements over which there is responsibility or capacity for change.'), B('¿Tenemos responsabilidad o capacidad para modificar este elemento?', 'Do we have responsibility or capacity to modify this element?'), B('El espacio de trabajo dentro de una cerca analítica.', 'The workspace inside an analytical fence.'), B('Procesos de reserva, personal, información, reglas, recursos y tecnología de HKA.', 'HKA reservation processes, staff, information, rules, resources and technology.'), B('Frontera · Alcance · Componentes', 'Boundary · Scope · Components'), B('Interno no significa aislado del entorno.', 'Internal does not mean isolated from the environment.')),
    d05_outside: D(B('Fuera / externo', 'Outside / external'), B('Elementos que interactúan con el sistema sin formar parte directa de su alcance interno.', 'Elements that interact with the system without being directly inside its scope.'), B('Pueden condicionar el sistema aunque no puedan controlarse directamente.', 'They may condition the system even when they cannot be controlled directly.'), B('¿Influye en el sistema aunque no podamos controlarlo?', 'Does it influence the system even if we cannot control it?'), B('El clima fuera de la casa afecta lo que ocurre dentro.', 'Weather outside a house affects what happens inside.'), B('Cliente, proveedor de pagos y contexto de la marina en el caso HKA.', 'Customer, payment provider and marina context in the HKA case.'), B('Entorno · Dependencia · Interesado', 'Environment · Dependency · Stakeholder'), B('Externo no significa irrelevante.', 'External does not mean irrelevant.')),
    d05_interface: D(B('Interfaz', 'Interface'), B('Punto o mecanismo por el que el sistema intercambia información, recursos o acciones con un elemento externo.', 'A point or mechanism through which the system exchanges information, resources or actions with an external element.'), B('Hace visible cómo cruza la frontera una interacción.', 'It makes visible how an interaction crosses the boundary.'), B('¿Por dónde y de qué forma se produce el intercambio?', 'Where and how does the exchange occur?'), B('Una puerta que permite un cruce controlado.', 'A door enabling a controlled crossing.'), B('Sitio web, teléfono, canal de pago o conversación humana.', 'Website, phone, payment channel or human conversation.'), B('Entrada · Salida · Entidad externa', 'Input · Output · External entity'), B('La interfaz conecta con el sistema; no es todo el sistema.', 'The interface connects to the system; it is not the entire system.'), { ai: 'd05_ai_interface' }),
    d05_input: D(B('Entrada', 'Input'), B('Información, recursos o acciones que ingresan al sistema desde otro elemento.', 'Information, resources or actions entering the system from another element.'), B('Activa procesos y aporta datos necesarios para producir resultados.', 'It triggers processes and supplies data needed to produce outcomes.'), B('¿Qué recibe el sistema y de quién?', 'What does the system receive, and from whom?'), B('Ingredientes que entran a una cocina.', 'Ingredients entering a kitchen.'), B('Solicitud del cliente que ingresa al proceso de reserva.', 'A customer request entering the reservation process.'), B('Interfaz · Proceso · Información', 'Interface · Process · Information'), B('Una entrada no es todavía un resultado.', 'An input is not yet an outcome.'), { ai: 'd05_ai_input' }),
    d05_output: D(B('Salida', 'Output'), B('Información, recursos o acciones que el sistema entrega a otro elemento.', 'Information, resources or actions delivered by the system to another element.'), B('Expresa el resultado que cruza la frontera hacia el entorno.', 'It expresses the result crossing the boundary into the environment.'), B('¿Qué entrega el sistema y a quién?', 'What does the system deliver, and to whom?'), B('El plato que sale de la cocina hacia el cliente.', 'The dish leaving the kitchen for the customer.'), B('Confirmación de reserva enviada al cliente.', 'Reservation confirmation sent to the customer.'), B('Resultado · Interfaz · Interesado', 'Outcome · Interface · Stakeholder'), B('Una salida no es necesariamente el propósito completo.', 'An output is not necessarily the whole purpose.')),
    d05_dependency: D(B('Dependencia', 'Dependency'), B('Elemento externo del que el sistema necesita una capacidad, recurso o servicio.', 'An external element from which the system needs a capability, resource or service.'), B('Una dependencia puede afectar disponibilidad, costo, tiempo y control.', 'A dependency can affect availability, cost, time and control.'), B('¿Qué necesita el sistema de algo que no controla?', 'What does the system need from something it does not control?'), B('Un puente administrado por otra organización.', 'A bridge managed by another organization.'), B('Un proveedor de pagos externo utilizado por HKA.', 'An external payment provider used by HKA.'), B('Exterior · Riesgo · Interfaz', 'Outside · Risk · Interface'), B('Depender no significa que el proveedor pertenezca al sistema.', 'Depending on a provider does not mean it belongs to the system.')),
    d05_scope: D(B('Alcance', 'Scope'), B('Conjunto de elementos y responsabilidades incluidos en el análisis o proyecto.', 'The set of elements and responsibilities included in the analysis or project.'), B('Permite acordar qué será estudiado o cambiado y qué no.', 'It clarifies what will be studied or changed and what will not.'), B('¿Qué incluye este esfuerzo y qué queda excluido?', 'What does this effort include and exclude?'), B('El encuadre de una fotografía.', 'The frame of a photograph.'), B('Analizar la gestión de reservas sin asumir que se rediseñará toda la empresa.', 'Analyzing reservation management without assuming the entire business will be redesigned.'), B('Frontera · Proyecto · Responsabilidad', 'Boundary · Project · Responsibility'), B('Alcance del proyecto y sistema completo no siempre son equivalentes.', 'Project scope and the complete system are not always equivalent.')),
    d05_stakeholder: D(B('Interesado', 'Stakeholder'), B('Persona, grupo u organización afectada por el sistema o capaz de influir en él.', 'A person, group or organization affected by or able to influence the system.'), B('Sus necesidades, decisiones e interacciones ayudan a definir el análisis.', 'Their needs, decisions and interactions help define the analysis.'), B('¿Quién recibe impacto o puede influir en el resultado?', 'Who is affected or can influence the result?'), B('Una persona alrededor de la mesa de decisiones.', 'A person around the decision table.'), B('Cliente, Steve, Linda, Janet o proveedor externo en el caso HKA.', 'Customer, Steve, Linda, Janet or an external provider in HKA.'), B('Persona · Rol · Entorno', 'Person · Role · Environment'), B('Interesado no significa solamente usuario final.', 'Stakeholder does not mean only end user.')),
    d05_technology: D(B('Tecnología', 'Technology'), B('Capacidades técnicas que apoyan el funcionamiento del sistema.', 'Technical capabilities supporting system operation.'), B('Puede incorporar software, infraestructura, automatización o IA como partes del sistema.', 'It may include software, infrastructure, automation or AI as parts of the system.'), B('¿Qué capacidad tecnológica apoya el sistema?', 'Which technological capability supports the system?'), B('Una herramienta dentro de un taller más amplio.', 'A tool inside a larger workshop.'), B('Microsoft Access, software contable y sitio web en HKA.', 'Microsoft Access, accounting software and website in HKA.'), B('Sistema · Software · IA', 'System · Software · AI'), B('Tecnología no equivale al sistema completo.', 'Technology is not the whole system.')),
    d05_ai: D(B('Inteligencia artificial', 'Artificial intelligence'), B('Capacidad tecnológica posible dentro del sistema o mediante un servicio externo.', 'A possible technological capability inside the system or through an external service.'), B('Puede cambiar el tratamiento de entradas, interfaces e información y crear nuevas dependencias.', 'It may change how inputs, interfaces and information are handled and create new dependencies.'), B('¿Dónde entra la IA y qué cruza la frontera?', 'Where does AI enter, and what crosses the boundary?'), B('Un nuevo instrumento que necesita conexiones, reglas y supervisión.', 'A new instrument requiring connections, rules and oversight.'), B('Asistencia conversacional o clasificación de solicitudes.', 'Conversational assistance or request classification.'), B('Tecnología · Dependencia · Gobierno', 'Technology · Dependency · Governance'), B('La IA no es el sistema completo.', 'AI is not the whole system.'), { layer: 'ai', aiCan: B('Interpretar entradas, asistir interfaces y analizar información.', 'Interpret inputs, assist interfaces and analyze information.'), changes: B('Añade procesamiento, movimiento de datos y posibles dependencias externas.', 'It adds processing, data movement and possible external dependencies.'), validate: B('Exactitud, datos utilizados, límites, privacidad y supervisión.', 'Accuracy, data used, limits, privacy and oversight.') }),
    d05_ai_input: D(B('IA + Entradas', 'AI + Inputs'), B('La IA puede interpretar, clasificar o estructurar información que entra al sistema.', 'AI can interpret, classify or structure information entering the system.'), B('Puede convertir solicitudes no estructuradas en datos útiles para un proceso.', 'It can turn unstructured requests into useful process data.'), B('¿La interpretación conserva el significado de la entrada?', 'Does the interpretation preserve the input meaning?'), B('Un clasificador que organiza correspondencia antes de repartirla.', 'A sorter organizing mail before distribution.'), B('Texto libre del cliente → clasificación con IA → solicitud estructurada.', 'Customer free text → AI classification → structured request.'), B('Entrada · Información · Validación', 'Input · Information · Validation'), B('Interpretación automática no equivale a interpretación correcta.', 'Automated interpretation is not necessarily correct.'), { layer: 'ai', aiCan: B('Interpretar y clasificar.', 'Interpret and classify.'), changes: B('La entrada puede estructurarse antes de llegar al proceso.', 'Input may be structured before reaching the process.'), validate: B('Clasificación, contexto, errores y excepciones.', 'Classification, context, errors and exceptions.') }),
    d05_ai_interface: D(B('IA + Interfaz', 'AI + Interface'), B('La IA puede mediar o asistir la interacción entre una persona y el sistema.', 'AI can mediate or assist interaction between a person and the system.'), B('Puede ampliar acceso y respuesta, pero cambia cómo se interpreta la interacción.', 'It can expand access and response, but changes how interaction is interpreted.'), B('¿Qué debe ocurrir cuando la IA no comprende?', 'What should happen when AI does not understand?'), B('Un asistente en una puerta, no la casa completa.', 'An assistant at a doorway, not the entire house.'), B('Asistencia conversacional en el sitio web de reservas.', 'Conversational assistance on the reservation website.'), B('Interfaz · Persona · Excepción', 'Interface · Person · Exception'), B('Una interfaz con IA no es todo el sistema.', 'An AI interface is not the whole system.'), { layer: 'ai', aiCan: B('Asistir y mediar interacciones.', 'Assist and mediate interactions.'), changes: B('La interfaz puede interpretar lenguaje y adaptar respuestas.', 'The interface may interpret language and adapt responses.'), validate: B('Comprensión, accesibilidad, escalamiento humano y registro.', 'Understanding, accessibility, human escalation and records.') }),
    d05_ai_information: D(B('IA + Información', 'AI + Information'), B('La IA puede extraer patrones o contenido de la información disponible.', 'AI can extract patterns or content from available information.'), B('Amplía la capacidad de análisis, pero depende de la calidad y procedencia de los datos.', 'It expands analysis capacity but depends on data quality and provenance.'), B('¿Qué información usa y qué tan confiable es?', 'What information does it use, and how reliable is it?'), B('Una lupa rápida que todavía necesita enfoque y comprobación.', 'A fast magnifying glass that still needs focus and checking.'), B('Analizar solicitudes y registros de disponibilidad.', 'Analyze requests and availability records.'), B('Datos · Evidencia · Procedencia', 'Data · Evidence · Provenance'), B('Patrón detectado no equivale a hecho confirmado.', 'A detected pattern is not a confirmed fact.'), { layer: 'ai', aiCan: B('Extraer y analizar.', 'Extract and analyze.'), changes: B('Aumenta escala y velocidad de análisis.', 'It increases analysis scale and speed.'), validate: B('Calidad, actualidad, sesgo, procedencia y contexto.', 'Quality, currency, bias, provenance and context.') }),
    d05_ai_governance: D(B('Reglas → IA', 'Rules → AI'), B('Las reglas del sistema delimitan qué puede hacer la IA y bajo qué controles.', 'System rules define what AI may do and under which controls.'), B('La capacidad técnica necesita responsabilidad y límites de uso.', 'Technical capability needs accountability and use limits.'), B('¿Quién responde y qué está permitido?', 'Who is accountable, and what is allowed?'), B('Los carriles y señales que orientan un vehículo.', 'Lanes and signs guiding a vehicle.'), B('Definir datos permitidos, revisión humana y manejo de errores.', 'Define allowed data, human review and error handling.'), B('Reglas · Gobierno · Responsabilidad', 'Rules · Governance · Accountability'), B('Gobernar no significa impedir toda innovación.', 'Governance does not mean preventing all innovation.'), { layer: 'ai', aiCan: B('Aplicar restricciones definidas y registrar actividad.', 'Apply defined constraints and record activity.'), changes: B('La IA opera dentro de permisos, controles y responsabilidades explícitas.', 'AI operates within explicit permissions, controls and accountability.'), validate: B('Cumplimiento real, auditoría, excepciones y responsables.', 'Actual compliance, auditability, exceptions and owners.') }),

    d06_candidate: D(B('Candidato de proyecto', 'Project candidate'), B('Propuesta que merece evaluación antes de comprometer recursos.', 'A proposal deserving evaluation before resources are committed.'), B('Transforma una necesidad investigada en una opción concreta para analizar.', 'It turns an investigated need into a concrete option to assess.'), B('¿Qué cambio estamos considerando y por qué?', 'What change are we considering, and why?'), B('Un puente dibujado que todavía debe comprobarse antes de construirlo.', 'A sketched bridge that must still be assessed before construction.'), B('Mejorar la gestión de reservas de HKA.', 'Improve HKA reservation management.'), B('Alternativas · Viabilidad · Caso de negocio', 'Alternatives · Feasibility · Business case'), B('Candidato no significa proyecto aprobado.', 'Candidate does not mean approved project.')),
    d06_feasibility: D(B('Viabilidad', 'Feasibility'), B('Evaluación de si una propuesta puede realizarse razonablemente bajo las condiciones de la organización.', 'Assessment of whether a proposal can reasonably be carried out under organizational conditions.'), B('Permite reconocer restricciones antes de invertir.', 'It reveals constraints before investment.'), B('¿Podemos y debemos hacerlo?', 'Can and should we do it?'), B('Revisar terreno, recursos y clima antes de una expedición.', 'Checking terrain, resources and weather before an expedition.'), B('Examinar la propuesta HKA desde cuatro dimensiones canónicas.', 'Examine the HKA proposal through four canonical dimensions.'), B('Operativa · Técnica · Económica · Tiempo', 'Operational · Technical · Economic · Schedule'), B('Viabilidad no es una sola verificación técnica.', 'Feasibility is not a single technical check.')),
    d06_operational: D(B('Viabilidad operativa', 'Operational feasibility'), B('Evalúa si la solución puede funcionar en la organización y si personas y procesos pueden adoptarla.', 'Assesses whether the solution can work in the organization and whether people and processes can adopt it.'), B('Una solución útil debe integrarse al trabajo real.', 'A useful solution must fit real work.'), B('¿Los usuarios podrán utilizarla y los procesos adaptarse?', 'Can users operate it and processes adapt?'), B('Podemos construir el vehículo, pero ¿la organización puede conducirlo?', 'We may build the vehicle, but can the organization drive it?'), B('Preguntar si Steve, Linda y Janet pueden trabajar con el proceso propuesto.', 'Ask whether Steve, Linda and Janet can work with the proposed process.'), B('Personas · Procesos · Adopción', 'People · Processes · Adoption'), B('Posible técnicamente no significa viable operativamente.', 'Technically possible does not mean operationally feasible.')),
    d06_technical: D(B('Viabilidad técnica', 'Technical feasibility'), B('Evalúa si existen tecnología, capacidades e infraestructura para implementar y operar la solución.', 'Assesses whether technology, capabilities and infrastructure exist to implement and operate the solution.'), B('Confirma que la propuesta puede construirse, integrarse y mantenerse.', 'It checks that the proposal can be built, integrated and maintained.'), B('¿Tenemos tecnología, conocimiento e integración suficientes?', 'Do we have enough technology, knowledge and integration capability?'), B('Comprobar que las piezas y herramientas permiten construir y mantener el puente.', 'Checking that parts and tools can build and maintain the bridge.'), B('Preguntar si reservas, disponibilidad y operación pueden soportarse confiablemente.', 'Ask whether reservations, availability and operations can be supported reliably.'), B('Tecnología · Integración · Mantenimiento', 'Technology · Integration · Maintenance'), B('Posible técnicamente no equivale a buena decisión empresarial.', 'Technically possible is not a good business decision.'), { ai: 'd06_ai_technical' }),
    d06_economic: D(B('Viabilidad económica', 'Economic feasibility'), B('Compara costos esperados con beneficios y valor potencial.', 'Compares expected costs with benefits and potential value.'), B('Permite juzgar si el valor esperado justifica la inversión total.', 'It helps judge whether expected value justifies total investment.'), B('¿Los beneficios esperados justifican los costos?', 'Do expected benefits justify the costs?'), B('Una balanza entre recursos invertidos y valor obtenido.', 'A scale balancing invested resources and obtained value.'), B('Preguntar si los beneficios esperados para HKA justificarían el costo.', 'Ask whether expected HKA benefits would justify cost.'), B('Costos · Beneficios · Valor', 'Costs · Benefits · Value'), B('No deben inventarse cifras para aparentar precisión.', 'Figures must not be invented to create false precision.'), { ai: 'd06_ai_economic' }),
    d06_schedule: D(B('Viabilidad de tiempo', 'Schedule feasibility'), B('Evalúa si el proyecto puede realizarse dentro del tiempo disponible o requerido.', 'Assesses whether the project can be completed within available or required time.'), B('Dependencias, fechas críticas y disponibilidad pueden cambiar la decisión.', 'Dependencies, critical dates and availability may change the decision.'), B('¿Puede entregarse en un plazo realista?', 'Can it be delivered in a realistic timeframe?'), B('Trazar una ruta considerando distancia, paradas y recursos disponibles.', 'Planning a route considering distance, stops and available resources.'), B('Preguntar si HKA dispone del tiempo y recursos necesarios.', 'Ask whether HKA has the required time and resources.'), B('Tiempo · Dependencias · Recursos', 'Time · Dependencies · Resources'), B('Un prototipo rápido no equivale a preparación para producción.', 'A fast prototype is not production readiness.')),
    d06_business: D(B('Caso de negocio', 'Business case'), B('Justificación estructurada de por qué la organización debería considerar realizar el proyecto.', 'A structured justification for why the organization should consider doing the project.'), B('Reúne problema, objetivos, alternativas, costos, beneficios, riesgos, viabilidad y recomendación.', 'It brings together problem, objectives, alternatives, costs, benefits, risks, feasibility and recommendation.'), B('¿Qué evidencia justifica invertir en esta propuesta?', 'What evidence justifies investing in this proposal?'), B('El argumento sustentado antes de comprometer la expedición.', 'The evidence-based argument before committing to the expedition.'), B('Estructurar la justificación para mejorar la gestión de reservas de HKA.', 'Structure the justification for improving HKA reservation management.'), B('Problema · Viabilidad · Recomendación', 'Problem · Feasibility · Recommendation'), B('Caso de negocio no es especificación técnica.', 'A business case is not a technical specification.'), { ai: 'd06_ai_business' }),
    d06_alternatives: D(B('Alternativas', 'Alternatives'), B('Opciones distintas que pueden responder al problema antes de elegir una solución.', 'Different options that may address the problem before choosing a solution.'), B('Evitan convertir la primera idea en única respuesta.', 'They prevent the first idea from becoming the only answer.'), B('¿Qué otras formas de responder merecen evaluación?', 'Which other responses deserve assessment?'), B('Varias rutas posibles hacia el mismo destino.', 'Several possible routes to the same destination.'), B('Cambio de proceso, herramienta existente, integración o nuevo software.', 'Process change, existing tool, integration or new software.'), B('Problema · Comparación · Decisión', 'Problem · Comparison · Decision'), B('Alternativa no equivale a recomendación.', 'Alternative does not mean recommendation.'), { ai: 'd06_ai_alternatives' }),
    d06_risks: D(B('Riesgos', 'Risks'), B('Eventos o condiciones inciertas que pueden afectar objetivos, costos, tiempo o valor.', 'Uncertain events or conditions that may affect objectives, cost, time or value.'), B('Hacen explícitos supuestos y posibles consecuencias.', 'They make assumptions and possible consequences explicit.'), B('¿Qué podría impedir o perjudicar el resultado esperado?', 'What could prevent or harm the expected result?'), B('Nubes en el pronóstico que deben considerarse antes de salir.', 'Clouds in a forecast that should be considered before departure.'), B('Disponibilidad de datos, adopción, integración o dependencia externa.', 'Data availability, adoption, integration or external dependency.'), B('Viabilidad · Supuestos · Mitigación', 'Feasibility · Assumptions · Mitigation'), B('Riesgo no significa que el evento ocurrirá.', 'Risk does not mean the event will occur.'), { ai: 'd06_ai_risks' }),
    d06_human: D(B('Revisión humana y gobierno', 'Human and governance review'), B('Responsabilidad organizacional de evaluar evidencia y aprobar, reformular o detener.', 'Organizational accountability for assessing evidence and approving, reframing or stopping.'), B('La decisión compromete recursos y consecuencias que no pertenecen a la IA.', 'The decision commits resources and consequences that do not belong to AI.'), B('¿Quién tiene autoridad y responde por la decisión?', 'Who has authority and accountability for the decision?'), B('La firma responsable al final de una recomendación.', 'The accountable signature at the end of a recommendation.'), B('Dirección de HKA revisa la recomendación y sus supuestos.', 'HKA leadership reviews the recommendation and assumptions.'), B('Decisión · Gobierno · Responsabilidad', 'Decision · Governance · Accountability'), B('Revisión humana no es aceptar automáticamente la recomendación.', 'Human review is not automatic acceptance of a recommendation.')),
    d06_go: D(B('GO / Avanzar', 'GO / Proceed'), B('La evidencia apoya continuar con la alternativa seleccionada.', 'Evidence supports continuing with the selected alternative.'), B('Convierte el análisis en una decisión explícita y sustentada.', 'It turns analysis into an explicit, supported decision.'), B('¿Qué evidencia permite avanzar?', 'What evidence supports proceeding?'), B('Una señal de paso respaldada por la revisión del camino.', 'A green signal backed by review of the road.'), B('Avanzar solo si la propuesta HKA queda sustentada.', 'Proceed only if the HKA proposal is supported.'), B('Caso de negocio · Decisión', 'Business case · Decision'), B('GO no elimina riesgos ni la necesidad de seguimiento.', 'GO does not remove risks or the need for monitoring.')),
    d06_reframe: D(B('REFRAME / Reformular', 'REFRAME'), B('El problema puede ser válido, pero la propuesta o su encuadre debe cambiar.', 'The problem may be valid, but the proposal or framing must change.'), B('Permite aprender y volver a alternativas sin negar la necesidad.', 'It supports learning and returning to alternatives without denying the need.'), B('¿Qué supuesto, alcance o alternativa debe revisarse?', 'Which assumption, scope or alternative should be reviewed?'), B('Redibujar la ruta cuando el terreno no coincide con el mapa.', 'Redrawing the route when terrain does not match the map.'), B('Ajustar alcance o alternativa para HKA según la evidencia.', 'Adjust HKA scope or alternative based on evidence.'), B('Evidencia · Alternativas · Retroalimentación', 'Evidence · Alternatives · Feedback'), B('Reformular no significa que el problema desapareció.', 'Reframing does not mean the problem disappeared.')),
    d06_stop: D(B('STOP / Detener', 'STOP'), B('La evidencia no justifica continuar con el proyecto propuesto.', 'Evidence does not justify proceeding with the proposed project.'), B('Evita comprometer recursos sin sustento suficiente.', 'It avoids committing resources without sufficient support.'), B('¿Por qué no conviene continuar ahora?', 'Why should we not proceed now?'), B('Detener una expedición cuando las condiciones no la justifican.', 'Stopping an expedition when conditions do not justify it.'), B('No aprobar la propuesta HKA si la evidencia no la respalda.', 'Do not approve the HKA proposal if evidence does not support it.'), B('Decisión · Evidencia · Responsabilidad', 'Decision · Evidence · Accountability'), B('STOP es un resultado analítico válido, no un fracaso.', 'STOP is a valid analytical result, not a failure.')),
    d06_ai: D(B('IA como apoyo al análisis', 'AI as analysis support'), B('Capacidad para explorar, comparar, modelar y sintetizar durante la evaluación.', 'Capability to explore, compare, model and synthesize during assessment.'), B('Puede ampliar el análisis sin asumir responsabilidad por la decisión.', 'It can expand analysis without taking responsibility for the decision.'), B('¿Qué puede apoyar y qué debe revisar una persona?', 'What can it support, and what must a person review?'), B('Un copiloto analítico, no quien firma la decisión.', 'An analytical copilot, not the decision signer.'), B('Comparar escenarios y estructurar evidencia para revisión.', 'Compare scenarios and structure evidence for review.'), B('Evidencia · Supuestos · Gobierno', 'Evidence · Assumptions · Governance'), B('IA no equivale a aprobación automática.', 'AI does not equal automatic approval.'), { layer: 'ai', aiCan: B('Explorar alternativas, comparar, modelar y sintetizar.', 'Explore alternatives, compare, model and synthesize.'), changes: B('Aumenta la escala de análisis y exige trazabilidad.', 'It increases analysis scale and requires traceability.'), validate: B('Datos, supuestos, actualidad, riesgos y revisión humana.', 'Data, assumptions, currency, risks and human review.') }),
    d06_ai_alternatives: D(B('IA + Alternativas', 'AI + Alternatives'), B('La IA puede ampliar el conjunto de opciones consideradas.', 'AI can broaden the set of options considered.'), B('Ayuda a no limitar el análisis a la primera propuesta.', 'It helps avoid limiting analysis to the first proposal.'), B('¿Qué opciones adicionales merecen evaluación?', 'Which additional options deserve assessment?'), B('Un generador de rutas que no elige el destino.', 'A route generator that does not choose the destination.'), B('Proponer combinaciones de cambio de proceso, integración o software.', 'Propose combinations of process change, integration or software.'), B('Alternativas · Viabilidad', 'Alternatives · Feasibility'), B('Propuesta de IA no equivale a solución recomendada.', 'An AI proposal is not a recommended solution.'), { layer: 'ai', aiCan: B('Generar y explorar opciones.', 'Generate and explore options.'), changes: B('Expande el espacio de alternativas.', 'It expands the alternative space.'), validate: B('Alineación con el problema, consecuencias y viabilidad.', 'Alignment with the problem, consequences and feasibility.') }),
    d06_ai_technical: D(B('IA + Viabilidad técnica', 'AI + Technical feasibility'), B('La IA puede apoyar la comparación de tecnologías, arquitecturas y restricciones.', 'AI can support comparison of technologies, architectures and constraints.'), B('Acelera revisión, pero su conocimiento puede estar incompleto o desactualizado.', 'It accelerates review, but its knowledge may be incomplete or outdated.'), B('¿La comparación usa evidencia actual?', 'Does the comparison use current evidence?'), B('Un catálogo rápido que todavía debe contrastarse con especificaciones reales.', 'A fast catalog that still must be checked against real specifications.'), B('Comparar opciones de integración para la propuesta HKA.', 'Compare integration options for the HKA proposal.'), B('Tecnología · Restricciones · Evidencia', 'Technology · Constraints · Evidence'), B('Respuesta plausible no significa compatibilidad comprobada.', 'A plausible answer is not proven compatibility.'), { layer: 'ai', aiCan: B('Evaluar y comparar candidatos.', 'Assess and compare candidates.'), changes: B('Acelera la exploración técnica.', 'It accelerates technical exploration.'), validate: B('Documentación actual, pruebas, capacidades internas e integración.', 'Current documentation, tests, internal capability and integration.') }),
    d06_ai_economic: D(B('IA + Viabilidad económica', 'AI + Economic feasibility'), B('La IA puede apoyar escenarios y simulaciones de costos y beneficios.', 'AI can support cost and benefit scenarios and simulations.'), B('Permite explorar sensibilidad sin convertir supuestos en hechos.', 'It enables sensitivity exploration without turning assumptions into facts.'), B('¿Qué entradas y supuestos sostienen el modelo?', 'Which inputs and assumptions support the model?'), B('Una calculadora de escenarios, no el resultado financiero real.', 'A scenario calculator, not the actual financial outcome.'), B('Comparar escenarios de costo y ahorro sin inventar valores.', 'Compare cost and savings scenarios without inventing values.'), B('Costos · Beneficios · Supuestos', 'Costs · Benefits · Assumptions'), B('Modelo generado no equivale a resultado financiero real.', 'A generated model is not an actual financial outcome.'), { layer: 'ai', aiCan: B('Modelar y simular escenarios.', 'Model and simulate scenarios.'), changes: B('Hace visibles rangos y sensibilidad.', 'It makes ranges and sensitivity visible.'), validate: B('Fuentes, fórmulas, supuestos y cifras reales.', 'Sources, formulas, assumptions and actual figures.') }),
    d06_ai_risks: D(B('IA + Riesgos', 'AI + Risks'), B('La IA puede identificar candidatos de riesgo para revisión.', 'AI can identify risk candidates for review.'), B('Amplía la búsqueda de posibles fallas o dependencias.', 'It broadens the search for possible failures or dependencies.'), B('¿Qué riesgo falta comprobar en el contexto real?', 'Which risk still needs checking in the real context?'), B('Una lista de alertas que un equipo debe priorizar.', 'An alert list a team must prioritize.'), B('Detectar posibles riesgos de datos, adopción o proveedor.', 'Identify possible data, adoption or provider risks.'), B('Riesgo · Evidencia · Mitigación', 'Risk · Evidence · Mitigation'), B('Riesgo sugerido no equivale a riesgo confirmado.', 'A suggested risk is not a confirmed risk.'), { layer: 'ai', aiCan: B('Identificar candidatos.', 'Identify candidates.'), changes: B('Amplía cobertura de revisión.', 'It broadens review coverage.'), validate: B('Probabilidad, impacto, contexto y mitigación.', 'Probability, impact, context and mitigation.') }),
    d06_ai_business: D(B('IA + Caso de negocio', 'AI + Business case'), B('La IA puede sintetizar evidencia y estructurar argumentos.', 'AI can synthesize evidence and structure arguments.'), B('Ayuda a organizar material complejo manteniendo trazabilidad.', 'It helps organize complex material while maintaining traceability.'), B('¿Cada afirmación puede rastrearse a evidencia y supuestos?', 'Can each claim be traced to evidence and assumptions?'), B('Un editor que organiza el expediente, no quien aprueba la inversión.', 'An editor organizing the case file, not the investment approver.'), B('Estructurar el caso HKA para revisión responsable.', 'Structure the HKA case for accountable review.'), B('Síntesis · Evidencia · Recomendación', 'Synthesis · Evidence · Recommendation'), B('Texto convincente no equivale a argumento verdadero.', 'Convincing text is not a true argument.'), { layer: 'ai', aiCan: B('Sintetizar y estructurar.', 'Synthesize and structure.'), changes: B('Reduce esfuerzo de organización y aumenta la necesidad de trazabilidad.', 'It reduces organization effort and increases the need for traceability.'), validate: B('Procedencia, omisiones, supuestos y coherencia.', 'Provenance, omissions, assumptions and coherence.') }),

    d07_need: D(B('Necesidad u oportunidad', 'Need or opportunity'), B('Situación que puede justificar investigar un cambio.', 'A situation that may justify investigating change.'), B('Da origen a la planeación sin predeterminar la solución.', 'It starts planning without predetermining the solution.'), B('¿Qué merece ser comprendido?', 'What deserves understanding?'), B('Una señal de partida, no una ruta completa.', 'A starting signal, not a complete route.'), B('Una dificultad u oportunidad observada en HKA.', 'A difficulty or opportunity observed at HKA.'), B('Señal · Problema · Planeación', 'Signal · Problem · Planning'), B('Necesidad no equivale a solicitud de software.', 'Need does not equal a software request.')),
    d07_system: D(B('Comprender el sistema', 'Understand the system'), B('Reconocer componentes, relaciones y propósito del conjunto.', 'Recognize the whole set of components, relationships and purpose.'), B('No puede cambiarse responsablemente algo que no se comprende.', 'Something cannot be responsibly changed without understanding it.'), B('¿Qué contiene y cómo interactúan sus partes?', 'What does it contain, and how do its parts interact?'), B('Comprender la orquesta antes de cambiar un instrumento.', 'Understand the orchestra before changing an instrument.'), B('Revisitar el Diagrama 01.', 'Revisit Diagram 01.'), B('Sistema · Propósito · Relaciones', 'System · Purpose · Relationships'), B('Sistema no es igual a software.', 'System is not the same as software.')),
    d07_process: D(B('Mapear el proceso de negocio', 'Map the business process'), B('Representar cómo el trabajo transforma entradas en resultados.', 'Represent how work transforms inputs into outcomes.'), B('Permite localizar dónde surge valor, demora, error o coordinación.', 'It reveals where value, delay, error or coordination occurs.'), B('¿Qué trabajo ocurre y en qué secuencia?', 'What work occurs, and in what sequence?'), B('Seguir una receta antes de cambiar la cocina.', 'Follow a recipe before changing the kitchen.'), B('Revisitar el Diagrama 03.', 'Revisit Diagram 03.'), B('Entrada · Actividad · Resultado', 'Input · Activity · Outcome'), B('Proceso no equivale a departamento.', 'Process does not equal department.')),
    d07_signal: D(B('Señal o síntoma', 'Signal or symptom'), B('Manifestación observable que inicia la investigación.', 'An observable manifestation that starts investigation.'), B('Indica dónde mirar, pero no demuestra todavía la causa.', 'It indicates where to look but does not yet prove the cause.'), B('¿Qué estamos observando?', 'What are we observing?'), B('Una luz de advertencia en el tablero.', 'A dashboard warning light.'), B('Queja, demora o inconsistencia observada.', 'An observed complaint, delay or inconsistency.'), B('Evidencia · Hipótesis · Problema', 'Evidence · Hypothesis · Problem'), B('Síntoma no equivale a problema subyacente.', 'Symptom is not the underlying problem.'), { ai: 'd07_ai_signals' }),
    d07_investigation: D(B('Investigación preliminar', 'Preliminary investigation'), B('Recopilación y análisis inicial de hechos para comprender la situación.', 'Initial gathering and analysis of facts to understand the situation.'), B('Prueba explicaciones antes de comprometer una solución.', 'It tests explanations before committing to a solution.'), B('¿Qué evidencia apoya o contradice la hipótesis?', 'What evidence supports or contradicts the hypothesis?'), B('Una linterna que ilumina antes de avanzar.', 'A flashlight used before moving forward.'), B('Entrevistas, observación y revisión de registros.', 'Interviews, observation and record review.'), B('Evidencia · Hipótesis · Validación', 'Evidence · Hypothesis · Validation'), B('Investigar no es confirmar la primera explicación.', 'Investigation is not confirmation of the first explanation.'), { ai: 'd07_ai_investigation' }),
    d07_problem: D(B('Problema subyacente', 'Underlying problem'), B('Condición respaldada por evidencia que explica los síntomas relevantes.', 'An evidence-supported condition explaining relevant symptoms.'), B('Orienta alternativas hacia la causa y no solo hacia la manifestación.', 'It directs alternatives toward the cause rather than only the manifestation.'), B('¿Cuál condición debemos cambiar?', 'Which condition must we change?'), B('La raíz bajo los síntomas visibles.', 'The root beneath visible symptoms.'), B('Revisitar el Diagrama 04.', 'Revisit Diagram 04.'), B('Síntoma · Evidencia · Alternativas', 'Symptom · Evidence · Alternatives'), B('Problema no equivale a solución solicitada.', 'Problem does not equal requested solution.')),
    d07_boundary: D(B('Definir la frontera', 'Define the boundary'), B('Establecer qué está dentro del sistema y qué permanece en el entorno.', 'Establish what is inside the system and what remains in the environment.'), B('Delimita responsabilidad, alcance e interfaces.', 'It defines responsibility, scope and interfaces.'), B('¿Hasta dónde llega el sistema que podemos analizar o cambiar?', 'Where does the system we can analyze or change begin and end?'), B('Trazar la cerca analítica.', 'Draw the analytical fence.'), B('Revisitar el Diagrama 05.', 'Revisit Diagram 05.'), B('Alcance · Interfaz · Dependencia', 'Scope · Interface · Dependency'), B('Frontera no equivale a pared física.', 'Boundary is not a physical wall.')),
    d07_alternatives: D(B('Generar alternativas', 'Generate alternatives'), B('Explorar respuestas distintas antes de escoger una solución.', 'Explore different responses before choosing a solution.'), B('Evita saltar directamente a software, automatización o IA.', 'It prevents jumping directly to software, automation or AI.'), B('¿Qué opciones podrían responder al problema?', 'Which options might address the problem?'), B('Comparar varias rutas antes de iniciar el viaje.', 'Compare several routes before starting the journey.'), B('Proceso, capacitación, herramienta existente, integración o desarrollo.', 'Process, training, existing tool, integration or development.'), B('Problema · Viabilidad · Comparación', 'Problem · Feasibility · Comparison'), B('Alternativa no equivale a decisión.', 'Alternative does not equal decision.'), { ai: 'd07_ai_alternatives' }),
    d07_feasibility: D(B('Evaluar viabilidad', 'Evaluate feasibility'), B('Analizar dimensiones operativa, técnica, económica y de tiempo.', 'Assess operational, technical, economic and schedule dimensions.'), B('Comprueba si la propuesta puede realizarse razonablemente.', 'It checks whether the proposal can reasonably be carried out.'), B('¿Podemos y debemos hacerlo?', 'Can and should we do it?'), B('Revisar condiciones antes de construir.', 'Check conditions before building.'), B('Revisitar el Diagrama 06.', 'Revisit Diagram 06.'), B('Operativa · Técnica · Económica · Tiempo', 'Operational · Technical · Economic · Schedule'), B('Viabilidad técnica no representa toda la viabilidad.', 'Technical feasibility is not all feasibility.'), { ai: 'd07_ai_feasibility' }),
    d07_business: D(B('Construir el caso de negocio', 'Build the business case'), B('Integrar evidencia y viabilidad en una justificación estructurada.', 'Integrate evidence and feasibility into a structured justification.'), B('Explica por qué vale o no vale la pena comprometer recursos.', 'It explains why committing resources is or is not worthwhile.'), B('¿Qué argumento sustentado presentamos?', 'Which supported argument do we present?'), B('Organizar el expediente antes de la decisión.', 'Organize the case file before the decision.'), B('Revisitar el Diagrama 06.', 'Revisit Diagram 06.'), B('Evidencia · Recomendación · Decisión', 'Evidence · Recommendation · Decision'), B('Caso de negocio no es especificación técnica.', 'Business case is not a technical specification.'), { ai: 'd07_ai_business' }),
    d07_decision: D(B('Decisión', 'Decision'), B('Elección responsable de avanzar, reformular o detener.', 'An accountable choice to proceed, reframe or stop.'), B('Cierra la planeación con razones, responsables y próximos pasos.', 'It closes planning with reasons, owners and next steps.'), B('¿Qué decisión sostiene la evidencia?', 'Which decision does the evidence support?'), B('El cruce donde una organización elige ruta.', 'The junction where an organization chooses a route.'), B('GO, REFRAME o STOP.', 'GO, REFRAME or STOP.'), B('Caso de negocio · Gobierno · Responsabilidad', 'Business case · Governance · Accountability'), B('Decidir no es obedecer automáticamente una recomendación.', 'Decision is not automatic obedience to a recommendation.')),
    d07_analyst: D(B('Analista de sistemas', 'Systems analyst'), B('Profesional que comprende necesidades, procesos y sistemas, analiza información, evalúa alternativas y conecta objetivos con soluciones posibles.', 'A professional who understands needs, processes and systems, analyzes information, assesses alternatives and connects objectives with possible solutions.'), B('Acompaña toda la planeación, no solamente el paso tecnológico.', 'The analyst supports the entire planning journey, not only the technology step.'), B('¿Qué necesita comprender y conectar antes de recomendar?', 'What must be understood and connected before recommending?'), B('Un guía que estudia el terreno antes de proponer una ruta.', 'A guide who studies the terrain before proposing a route.'), B('El analista sigue la ruta completa de Semana 1.', 'The analyst follows the complete Week 1 path.'), B('Investigación · Evidencia · Decisión', 'Investigation · Evidence · Decision'), B('El analista no empieza por el software; empieza por comprender.', 'The analyst does not start with software; the analyst starts by understanding.')),
    d07_planning: D(B('Planeación en el SDLC', 'Planning in the SDLC'), B('Etapa inicial que estudia necesidad, alcance, alternativas y viabilidad antes del análisis detallado.', 'The initial stage studying need, scope, alternatives and feasibility before detailed analysis.'), B('Reduce el riesgo de diseñar la solución equivocada.', 'It reduces the risk of designing the wrong solution.'), B('¿Existe una base suficiente para continuar al análisis?', 'Is there sufficient basis to continue to analysis?'), B('Elegir el viaje antes de dibujar cada detalle del camino.', 'Choose the journey before drawing every road detail.'), B('Semana 1 se ubica en Planeación; lo siguiente será Análisis.', 'Week 1 is located in Planning; Analysis comes next.'), B('SDLC · Análisis · Proyecto', 'SDLC · Analysis · Project'), B('Orientar el paso siguiente no significa implementar Semana 2.', 'Orienting the next step does not implement Week 2.')),
    d07_go: D(B('GO / Avanzar', 'GO / Proceed'), B('Continuar porque la evidencia sostiene la propuesta.', 'Continue because evidence supports the proposal.'), B('Permite iniciar la siguiente etapa con una justificación explícita.', 'It allows the next stage to begin with explicit justification.'), B('¿Por qué avanzamos?', 'Why do we proceed?'), B('Abrir el siguiente tramo de la ruta.', 'Open the next part of the route.'), B('Decisión organizacional sustentada.', 'A supported organizational decision.'), B('Decisión · Evidencia', 'Decision · Evidence'), B('GO no significa certeza total.', 'GO does not mean total certainty.')),
    d07_reframe: D(B('REFRAME / Reformular', 'REFRAME'), B('Volver al problema, frontera o alternativas para ajustar la propuesta.', 'Return to problem, boundary or alternatives to adjust the proposal.'), B('Conserva el aprendizaje sin forzar una solución inadecuada.', 'It preserves learning without forcing an unsuitable solution.'), B('¿Qué debemos replantear?', 'What must we rethink?'), B('Redibujar una ruta con nueva evidencia.', 'Redraw a route using new evidence.'), B('Ajustar el candidato antes de continuar.', 'Adjust the candidate before proceeding.'), B('Retroalimentación · Alternativas', 'Feedback · Alternatives'), B('Reformular no elimina el problema.', 'Reframing does not remove the problem.')),
    d07_stop: D(B('STOP / Detener', 'STOP'), B('No continuar porque la evidencia no justifica el proyecto.', 'Do not continue because evidence does not justify the project.'), B('Protege recursos y responsabilidad organizacional.', 'It protects organizational resources and accountability.'), B('¿Qué evidencia indica detenernos?', 'What evidence tells us to stop?'), B('Cerrar una ruta que no conduce al destino.', 'Close a route that does not lead to the destination.'), B('Resultado analítico válido.', 'A valid analytical result.'), B('Decisión · Responsabilidad', 'Decision · Accountability'), B('Detener no equivale a fracasar.', 'Stopping does not equal failure.')),
    d07_ai: D(B('IA como apoyo transversal', 'AI as cross-cutting support'), B('La IA puede apoyar etapas seleccionadas de la planeación sin sustituir evidencia ni responsabilidad.', 'AI can support selected planning stages without replacing evidence or accountability.'), B('Amplía observación, síntesis, exploración y comparación.', 'It expands observation, synthesis, exploration and comparison.'), B('¿Dónde aporta capacidad y dónde debe validarse?', 'Where does it add capability, and where must it be validated?'), B('Un copiloto que acompaña varios tramos sin asumir el destino.', 'A copilot supporting several legs without owning the destination.'), B('Apoyar señales, investigación, alternativas, viabilidad y caso de negocio.', 'Support signals, investigation, alternatives, feasibility and business case.'), B('Evidencia · Gobierno · Analista', 'Evidence · Governance · Analyst'), B('Apoyo transversal no equivale a decisión autónoma.', 'Cross-cutting support is not autonomous decision-making.'), { layer: 'ai', aiCan: B('Detectar, sintetizar, explorar, comparar y modelar.', 'Detect, synthesize, explore, compare and model.'), changes: B('Aumenta escala y velocidad a lo largo de la planeación.', 'It increases scale and speed throughout planning.'), validate: B('Evidencia, contexto, trazabilidad y responsabilidad humana.', 'Evidence, context, traceability and human accountability.') }),
    d07_ai_signals: D(B('IA + Señales', 'AI + Signals'), B('La IA puede detectar patrones o cambios candidatos en señales operativas.', 'AI can detect candidate patterns or changes in operational signals.'), B('Puede ayudar a descubrir oportunidades de investigación de manera continua.', 'It can help discover investigation opportunities continuously.'), B('¿La señal detectada representa una situación real?', 'Does the detected signal represent a real situation?'), B('Un radar que detecta algo que todavía debe identificarse.', 'Radar detecting something that still must be identified.'), B('Monitorear registros para señalar cambios candidatos.', 'Monitor records to flag candidate changes.'), B('Descubrimiento continuo · Validación', 'Continuous discovery · Validation'), B('Señal automática no equivale a prioridad estratégica.', 'An automated signal is not a strategic priority.'), { layer: 'ai', aiCan: B('Detectar señales candidatas.', 'Detect candidate signals.'), changes: B('La investigación puede comenzar proactivamente.', 'Investigation may begin proactively.'), validate: B('Relevancia, contexto, falsos positivos y prioridad humana.', 'Relevance, context, false positives and human priority.') }),
    d07_ai_investigation: D(B('IA + Investigación', 'AI + Investigation'), B('La IA puede sintetizar entrevistas, documentos y registros.', 'AI can synthesize interviews, documents and records.'), B('Ayuda a comparar más material sin eliminar la revisión de procedencia.', 'It helps compare more material without removing provenance review.'), B('¿La síntesis conserva evidencia y contexto?', 'Does the synthesis preserve evidence and context?'), B('Un asistente que ordena el expediente para el investigador.', 'An assistant organizing the case file for the investigator.'), B('Agrupar hallazgos candidatos de distintas fuentes.', 'Group candidate findings from different sources.'), B('Evidencia · Procedencia · Hipótesis', 'Evidence · Provenance · Hypothesis'), B('Síntesis no equivale a verdad.', 'Synthesis does not equal truth.'), { layer: 'ai', aiCan: B('Sintetizar y detectar patrones.', 'Synthesize and detect patterns.'), changes: B('Amplía el volumen de material comparable.', 'It expands the volume of comparable material.'), validate: B('Fuente, contexto, omisiones y contradicciones.', 'Source, context, omissions and contradictions.') }),
    d07_ai_alternatives: D(B('IA + Alternativas', 'AI + Alternatives'), B('La IA puede explorar opciones candidatas.', 'AI can explore candidate options.'), B('Amplía el espacio de respuesta antes de evaluar.', 'It expands the response space before assessment.'), B('¿Qué opción adicional merece estudio?', 'Which additional option deserves study?'), B('Un mapa con rutas sugeridas.', 'A map with suggested routes.'), B('Generar opciones de proceso, integración o tecnología.', 'Generate process, integration or technology options.'), B('Alternativas · Viabilidad', 'Alternatives · Feasibility'), B('Opción generada no equivale a recomendación.', 'A generated option is not a recommendation.'), { layer: 'ai', aiCan: B('Explorar opciones.', 'Explore options.'), changes: B('Evita limitarse a la primera idea.', 'It avoids limiting analysis to the first idea.'), validate: B('Alineación, consecuencias y factibilidad.', 'Alignment, consequences and feasibility.') }),
    d07_ai_feasibility: D(B('IA + Viabilidad', 'AI + Feasibility'), B('La IA puede comparar restricciones y modelar escenarios.', 'AI can compare constraints and model scenarios.'), B('Apoya la evaluación sin sustituir datos actuales ni juicio responsable.', 'It supports assessment without replacing current data or accountable judgment.'), B('¿Qué supuestos sostienen la comparación?', 'Which assumptions support the comparison?'), B('Un simulador que no reemplaza la prueba real.', 'A simulator that does not replace a real test.'), B('Comparar escenarios técnicos y económicos.', 'Compare technical and economic scenarios.'), B('Viabilidad · Supuestos · Evidencia', 'Feasibility · Assumptions · Evidence'), B('Modelo no equivale a resultado real.', 'A model is not the real outcome.'), { layer: 'ai', aiCan: B('Comparar y modelar.', 'Compare and model.'), changes: B('Acelera escenarios y sensibilidad.', 'It accelerates scenarios and sensitivity analysis.'), validate: B('Entradas, actualidad, límites y pruebas.', 'Inputs, currency, limits and tests.') }),
    d07_ai_business: D(B('IA + Caso de negocio', 'AI + Business case'), B('La IA puede sintetizar evidencia en una estructura revisable.', 'AI can synthesize evidence into a reviewable structure.'), B('Reduce esfuerzo de organización, pero no posee responsabilidad de decisión.', 'It reduces organization effort but does not own decision accountability.'), B('¿La recomendación conserva trazabilidad?', 'Does the recommendation preserve traceability?'), B('Un editor del expediente, no el comité de decisión.', 'An editor of the case file, not the decision committee.'), B('Organizar argumentos y supuestos para revisión.', 'Organize arguments and assumptions for review.'), B('Síntesis · Gobierno · Decisión', 'Synthesis · Governance · Decision'), B('IA no conecta directamente con GO.', 'AI does not connect directly to GO.'), { layer: 'ai', aiCan: B('Sintetizar.', 'Synthesize.'), changes: B('Hace más rápida la estructuración del argumento.', 'It speeds up argument structuring.'), validate: B('Evidencia, procedencia, supuestos y aprobación humana.', 'Evidence, provenance, assumptions and human approval.') }),
    d07_continuous: D(B('Descubrimiento continuo', 'Continuous discovery'), B('Posibilidad AI-First de observar señales operativas que generen necesidades candidatas para investigación.', 'An AI-First possibility to observe operational signals that produce candidate needs for investigation.'), B('Puede volver más proactiva la detección sin declarar prioridades automáticamente.', 'It can make detection more proactive without automatically declaring priorities.'), B('¿Qué señal merece validación humana y planeación?', 'Which signal deserves human validation and planning?'), B('Un radar permanente conectado a una torre de control humana.', 'A continuous radar connected to a human control tower.'), B('Operaciones → señales continuas → monitoreo con IA → necesidad candidata → validación humana.', 'Operations → continuous signals → AI monitoring → candidate need → human validation.'), B('Señales · Planeación · Gobierno', 'Signals · Planning · Governance'), B('Detección automática no equivale a prioridad estratégica.', 'Automated detection is not a strategic priority.'), { layer: 'ai', aiCan: B('Monitorear y señalar candidatos.', 'Monitor and flag candidates.'), changes: B('La planeación puede recibir señales proactivas.', 'Planning may receive proactive signals.'), validate: B('Contexto, impacto, prioridad y autorización humana.', 'Context, impact, priority and human authorization.') }),
    d07_evidence: D(B('Evidencia', 'Evidence'), B('Información verificable que permite sustentar o cuestionar una interpretación, alternativa o recomendación.', 'Verifiable information used to support or challenge an interpretation, alternative or recommendation.'), B('Mantiene trazabilidad entre el análisis realizado y la decisión organizacional.', 'It preserves traceability between the analysis and the organizational decision.'), B('¿Qué datos y observaciones respaldan esta conclusión?', 'Which data and observations support this conclusion?'), B('Las piezas comprobables de un expediente.', 'The verifiable pieces of a case file.'), B('Resultados de la investigación, supuestos documentados y restricciones confirmadas.', 'Investigation findings, documented assumptions and confirmed constraints.'), B('Investigación · Supuestos · Caso de negocio', 'Investigation · Assumptions · Business case'), B('Una respuesta generada no equivale a evidencia validada.', 'A generated answer is not validated evidence.'))
  };

  var config = {
    '05': {
      terms: ['LÍMITE DEL SISTEMA', 'FRONTERA DEL SISTEMA', 'SYSTEM BOUNDARY'],
      title: B('FRONTERA DEL SISTEMA', 'SYSTEM BOUNDARY'),
      subtitle: B('DEFINIR EL ALCANCE ANTES DE CAMBIAR', 'DEFINE SCOPE BEFORE CHANGE'),
      description: B('La frontera define qué elementos forman parte del alcance del análisis y cuáles pertenecen al entorno externo.', 'The boundary defines which elements are part of the analysis scope and which belong to the external environment.'),
      question: B('¿Qué está dentro del sistema, qué está fuera y cómo se relacionan?', 'What is inside the system, what is outside, and how do they interact?'),
      aiQuestion: B('¿Qué cambia cuando una capacidad de IA cruza o participa en las interfaces del sistema?', 'What changes when an AI capability crosses or participates in system interfaces?'),
      render: renderD05
    },
    '06': {
      terms: ['CASO DE NEGOCIO Y VIABILIDAD', 'CASO DE NEGOCIO + VIABILIDAD', 'VIABILIDAD + CASO DE NEGOCIO', 'BUSINESS CASE AND FEASIBILITY', 'BUSINESS CASE + FEASIBILITY', 'FEASIBILITY + BUSINESS CASE'],
      title: B('VIABILIDAD + CASO DE NEGOCIO', 'FEASIBILITY + BUSINESS CASE'),
      subtitle: B('EVALUAR ANTES DE COMPROMETER RECURSOS', 'ASSESS BEFORE COMMITTING RESOURCES'),
      description: B('Antes de comprometer recursos, el analista evalúa si la propuesta es viable y si existe justificación empresarial suficiente.', 'Before committing resources, the analyst assesses whether the proposal is feasible and sufficiently justified.'),
      question: B('¿Vale la pena hacer este proyecto?', 'Is this project worth doing?'),
      aiQuestion: B('¿Cómo puede la IA ayudarnos a evaluar una propuesta sin tomar la decisión por nosotros?', 'How can AI help us assess a proposal without making the decision for us?'),
      render: renderD06
    },
    '07': {
      terms: ['RESUMEN CONECTADO DE SEMANA 1', 'MODELO CONSOLIDADO DE SEMANA 1', 'DE LA NECESIDAD A LA DECISIÓN', 'CONNECTED WEEK 1 SUMMARY', 'WEEK 1 CONSOLIDATED MODEL', 'FROM NEED TO DECISION'],
      title: B('DE LA NECESIDAD A LA DECISIÓN', 'FROM NEED TO DECISION'),
      subtitle: B('MAPA DE PLANEACIÓN DEL SISTEMA', 'SYSTEM PLANNING MAP'),
      description: B('La planeación conecta lo aprendido antes de iniciar el desarrollo.', 'Planning connects what we learned before development begins.'),
      question: B('¿Cómo se conecta todo lo aprendido antes de iniciar el desarrollo?', 'How does everything learned connect before development begins?'),
      aiQuestion: B('¿Cómo cambia la planeación cuando la IA puede apoyar cada etapa?', 'How does planning change when AI can support each stage?'),
      render: renderD07
    }
  };

  var revisitTargets = {
    d07_need: '04',
    d07_system: '01',
    d07_process: '03',
    d07_signal: '04',
    d07_investigation: '04',
    d07_problem: '04',
    d07_boundary: '05',
    d07_alternatives: '06',
    d07_feasibility: '06',
    d07_business: '06',
    d07_decision: '06'
  };

  function detailButton(key, title, subtitle, classes) {
    return '<button type="button" class="w1f-node ' + (classes || '') + '" data-w1f-detail="' + key + '"><strong>' + title + '</strong>' + (subtitle ? '<span>' + subtitle + '</span>' : '') + '</button>';
  }

  function lensControl(number) {
    return '<div class="w1f-lens-control" role="group" aria-label="' + (isEnglish() ? 'Diagram ' + number + ' view' : 'Vista del Diagrama ' + number) + '"><button type="button" data-w1fd-lens="base" aria-pressed="true">BASE</button><button type="button" class="w1f-lens-ai" data-w1fd-lens="ai" aria-pressed="false">' + (isEnglish() ? 'APPLY AI LENS' : 'APLICAR CAPA IA') + '</button></div>';
  }

  function aiRelation(key, target, action) {
    return '<button type="button" class="w1f-ai-relation" data-w1f-detail="' + key + '"><small>' + target + '</small><strong>' + action + '</strong></button>';
  }

  function renderD05() {
    var en = isEnglish();
    var component = function (name) { return '<button type="button" class="w1f-node" data-w1f-detail="d05_inside"><strong>' + name + '</strong></button>'; };
    return '<div class="w1f-stage-inner"><p class="w1f-master-question">' + T(config['05'].question) + '</p><div class="w1f-boundary-layout"><aside class="w1f-external-zone"><span class="w1f-zone-label">' + (en ? 'EXTERNAL ENVIRONMENT' : 'ENTORNO EXTERNO') + '</span><button type="button" class="w1f-zone-button" data-w1f-detail="d05_stakeholder"><strong>' + (en ? 'CUSTOMER' : 'CLIENTE') + '</strong><span>' + (en ? 'External stakeholder' : 'Interesado externo') + '</span></button><button type="button" class="w1f-zone-button" data-w1f-detail="d05_outside"><strong>' + (en ? 'OUTSIDE' : 'FUERA') + '</strong><span>' + (en ? 'Influences without direct control' : 'Influye sin control directo') + '</span></button><button type="button" class="w1f-zone-button" data-w1f-detail="d05_dependency"><strong>' + (en ? 'DEPENDENCY' : 'DEPENDENCIA') + '</strong><span>' + (en ? 'External service' : 'Servicio externo') + '</span></button></aside><div class="w1f-boundary-box"><button type="button" class="w1f-boundary-label" data-w1f-detail="d05_boundary">' + (en ? 'SYSTEM BOUNDARY' : 'FRONTERA DEL SISTEMA') + '</button><div class="w1f-boundary-core"><button type="button" class="w1f-node is-scope" data-w1f-detail="d05_scope"><strong>' + (en ? 'ANALYSIS SCOPE' : 'ALCANCE DEL ANÁLISIS') + '</strong></button>' + component(en ? 'PEOPLE' : 'PERSONAS') + component(en ? 'PROCESSES' : 'PROCESOS') + '<button type="button" class="w1f-node" data-w1f-detail="d05_inside" data-w1f-ai="d05_ai_information"><strong>' + (en ? 'INFORMATION' : 'INFORMACIÓN') + '</strong></button>' + component(en ? 'RULES' : 'REGLAS') + component(en ? 'RESOURCES' : 'RECURSOS') + detailButton('d05_technology', en ? 'TECHNOLOGY' : 'TECNOLOGÍA', en ? 'May incorporate AI' : 'Puede incorporar IA') + '</div><button type="button" class="w1f-interface is-left" data-w1f-detail="d05_interface">' + (en ? 'INTERFACE' : 'INTERFAZ') + '</button><button type="button" class="w1f-interface is-right" data-w1f-detail="d05_interface">' + (en ? 'INTERFACE' : 'INTERFAZ') + '</button><div class="w1f-io-flow"><span class="w1f-flow-arrow">→</span>' + detailButton('d05_input', en ? 'INPUT' : 'ENTRADA', en ? 'Customer request' : 'Solicitud del cliente') + detailButton('d05_output', en ? 'OUTPUT' : 'SALIDA', en ? 'Confirmation' : 'Confirmación') + '<span class="w1f-flow-arrow">→</span></div><div class="w1f-tech-gateway">' + detailButton('d05_technology', en ? 'TECHNOLOGY' : 'TECNOLOGÍA', en ? 'Possible capability' : 'Capacidad posible') + lensControl('05') + detailButton('d05_ai', en ? 'ARTIFICIAL INTELLIGENCE' : 'INTELIGENCIA ARTIFICIAL', en ? 'Technological capability' : 'Capacidad tecnológica', 'w1f-ai-node') + '</div></div><aside class="w1f-external-zone"><span class="w1f-zone-label">' + (en ? 'EXTERNAL ENVIRONMENT' : 'ENTORNO EXTERNO') + '</span><button type="button" class="w1f-zone-button" data-w1f-detail="d05_stakeholder"><strong>' + (en ? 'SUPPLIER' : 'PROVEEDOR') + '</strong><span>' + (en ? 'External stakeholder' : 'Interesado externo') + '</span></button><button type="button" class="w1f-zone-button" data-w1f-detail="d05_outside"><strong>' + (en ? 'OUTSIDE' : 'FUERA') + '</strong><span>' + (en ? 'Connected environment' : 'Entorno conectado') + '</span></button><button type="button" class="w1f-zone-button w1f-ai-node" data-w1f-detail="d05_dependency"><strong>' + (en ? 'AI PROVIDER' : 'PROVEEDOR DE IA') + '</strong><span>' + (en ? 'External dependency · example' : 'Dependencia externa · ejemplo') + '</span></button></aside></div><div class="w1f-ai-relations">' + aiRelation('d05_ai_input', en ? 'AI → INPUTS' : 'IA → ENTRADAS', en ? 'INTERPRET / CLASSIFY' : 'INTERPRETAR / CLASIFICAR') + aiRelation('d05_ai_interface', en ? 'AI → INTERFACES' : 'IA → INTERFACES', en ? 'MEDIATE / ASSIST' : 'MEDIAR / ASISTIR') + aiRelation('d05_ai_information', en ? 'AI → INFORMATION' : 'IA → INFORMACIÓN', en ? 'EXTRACT / ANALYZE' : 'EXTRAER / ANALIZAR') + aiRelation('d05_ai_governance', en ? 'RULES → AI' : 'REGLAS → IA', en ? 'CONTROL / GOVERN' : 'CONTROLAR / GOBERNAR') + '</div></div>';
  }

  function renderD06() {
    var en = isEnglish();
    return '<div class="w1f-stage-inner"><p class="w1f-master-question">' + T(config['06'].question) + '</p><div class="w1f-feasibility-map">' + detailButton('d06_operational', en ? 'OPERATIONAL FEASIBILITY' : 'VIABILIDAD OPERATIVA', en ? 'Does it work for people and operations?' : '¿Funciona para personas y operación?', 'is-operational') + detailButton('d06_technical', en ? 'TECHNICAL FEASIBILITY' : 'VIABILIDAD TÉCNICA', en ? 'Can it be built and operated?' : '¿Puede construirse y operarse?', 'is-technical') + detailButton('d06_candidate', en ? 'PROJECT CANDIDATE' : 'CANDIDATO DE PROYECTO', en ? 'A proposal, not an approval' : 'Una propuesta, no una aprobación', 'is-candidate') + detailButton('d06_economic', en ? 'ECONOMIC FEASIBILITY' : 'VIABILIDAD ECONÓMICA', en ? 'Is expected value worth the cost?' : '¿El valor justifica el costo?', 'is-economic') + detailButton('d06_schedule', en ? 'SCHEDULE FEASIBILITY' : 'VIABILIDAD DE TIEMPO', en ? 'Can it be delivered in time?' : '¿Puede entregarse a tiempo?', 'is-schedule') + '</div><div class="w1f-tech-gateway">' + detailButton('d06_feasibility', en ? 'FOUR-DIMENSION REVIEW' : 'EVALUACIÓN EN CUATRO DIMENSIONES', en ? 'Operational · Technical · Economic · Schedule' : 'Operativa · Técnica · Económica · Tiempo') + lensControl('06') + detailButton('d06_ai', en ? 'AI ANALYSIS SUPPORT' : 'IA COMO APOYO AL ANÁLISIS', en ? 'Does not own the decision' : 'No es dueña de la decisión', 'w1f-ai-node') + '</div><div class="w1f-decision-flow">' + detailButton('d06_alternatives', en ? 'ALTERNATIVES' : 'ALTERNATIVAS', en ? 'Compare possible responses' : 'Comparar respuestas posibles') + '<span class="w1f-flow-arrow">→</span>' + detailButton('d06_risks', en ? 'RISKS' : 'RIESGOS', en ? 'Identify uncertainty and exposure' : 'Identificar incertidumbre y exposición') + '<span class="w1f-flow-arrow">→</span>' + detailButton('d06_business', en ? 'BUSINESS CASE' : 'CASO DE NEGOCIO', en ? 'Evidence-based justification' : 'Justificación sustentada') + '</div><div class="w1f-outcomes"><button type="button" class="w1f-outcome is-go" data-w1f-detail="d06_go">GO / ' + (en ? 'PROCEED' : 'AVANZAR') + '</button><button type="button" class="w1f-outcome is-reframe" data-w1f-detail="d06_reframe">REFRAME / ' + (en ? 'RETHINK' : 'REFORMULAR') + '</button><button type="button" class="w1f-outcome is-stop" data-w1f-detail="d06_stop">STOP / ' + (en ? 'STOP' : 'DETENER') + '</button></div><div class="w1f-ai-relations">' + aiRelation('d06_ai_alternatives', en ? 'AI → ALTERNATIVES' : 'IA → ALTERNATIVAS', en ? 'GENERATE / EXPLORE' : 'GENERAR / EXPLORAR') + aiRelation('d06_ai_technical', en ? 'AI → TECHNICAL' : 'IA → TÉCNICA', en ? 'ASSESS / COMPARE' : 'EVALUAR / COMPARAR') + aiRelation('d06_ai_economic', en ? 'AI → ECONOMIC' : 'IA → ECONÓMICA', en ? 'MODEL / SIMULATE' : 'MODELAR / SIMULAR') + aiRelation('d06_ai_risks', en ? 'AI → RISKS' : 'IA → RIESGOS', en ? 'IDENTIFY CANDIDATES' : 'IDENTIFICAR CANDIDATOS') + aiRelation('d06_ai_business', en ? 'AI → BUSINESS CASE' : 'IA → CASO DE NEGOCIO', en ? 'SYNTHESIZE' : 'SINTETIZAR') + aiRelation('d06_human', en ? 'HUMAN / GOVERNANCE → DECISION' : 'PERSONA / GOBIERNO → DECISIÓN', en ? 'APPROVE / ACCOUNTABILITY' : 'APROBAR / RESPONDER') + '</div></div>';
  }

  function journeyNode(key, number, title) {
    return '<button type="button" class="w1f-journey-node" data-w1f-detail="' + key + '"><b>' + String(number).padStart(2, '0') + '</b><strong>' + title + '</strong></button>';
  }

  function renderD07() {
    var en = isEnglish();
    var labels = en ? ['NEED / OPPORTUNITY', 'UNDERSTAND SYSTEM', 'MAP PROCESS', 'SIGNAL / SYMPTOM', 'INVESTIGATE', 'DEFINE PROBLEM', 'BOUND SYSTEM', 'ALTERNATIVES', 'FEASIBILITY', 'BUSINESS CASE', 'DECISION'] : ['NECESIDAD / OPORTUNIDAD', 'COMPRENDER SISTEMA', 'MAPEAR PROCESO', 'SEÑAL / SÍNTOMA', 'INVESTIGAR', 'DEFINIR PROBLEMA', 'DELIMITAR SISTEMA', 'ALTERNATIVAS', 'VIABILIDAD', 'CASO DE NEGOCIO', 'DECISIÓN'];
    var keys = ['d07_need', 'd07_system', 'd07_process', 'd07_signal', 'd07_investigation', 'd07_problem', 'd07_boundary', 'd07_alternatives', 'd07_feasibility', 'd07_business', 'd07_decision'];
    var aiDecisionChain = '<div class="w1f-ai-decision-chain" style="display:flex;align-items:center;justify-content:center;gap:.55rem;flex-wrap:wrap;grid-column:1/-1" aria-label="' + (en ? 'AI-supported decision sequence' : 'Secuencia de decisión asistida por IA') + '">' + aiRelation('d07_ai', en ? 'AI SUPPORT' : 'APOYO DE IA', en ? 'ASSIST' : 'ASISTIR') + '<span class="w1f-flow-arrow">→</span>' + aiRelation('d07_evidence', en ? 'EVIDENCE' : 'EVIDENCIA', en ? 'TRACE / VALIDATE' : 'TRAZAR / VALIDAR') + '<span class="w1f-flow-arrow">→</span>' + aiRelation('d06_human', en ? 'HUMAN / GOVERNANCE' : 'PERSONA / GOBIERNO', en ? 'REVIEW / ACCOUNTABILITY' : 'REVISAR / RESPONDER') + '<span class="w1f-flow-arrow">→</span>' + aiRelation('d07_decision', en ? 'DECISION' : 'DECISIÓN', 'GO / REFRAME / STOP') + '</div>';
    return '<div class="w1f-stage-inner"><p class="w1f-master-question">' + T(config['07'].question) + '</p><div class="w1f-journey">' + keys.map(function (key, index) { return journeyNode(key, index + 1, labels[index]); }).join('') + '</div><div class="w1f-outcomes"><button type="button" class="w1f-outcome is-go" data-w1f-detail="d07_go">GO / ' + (en ? 'PROCEED' : 'AVANZAR') + '</button><button type="button" class="w1f-outcome is-reframe" data-w1f-detail="d07_reframe">REFRAME / ' + (en ? 'RETHINK' : 'REFORMULAR') + '</button><button type="button" class="w1f-outcome is-stop" data-w1f-detail="d07_stop">STOP / ' + (en ? 'STOP' : 'DETENER') + '</button></div><div class="w1f-analyst-rail"><button type="button" class="w1f-analyst" data-w1f-detail="d07_analyst"><strong>' + (en ? 'SYSTEMS ANALYST' : 'ANALISTA DE SISTEMAS') + '</strong></button><p>' + (en ? 'The analyst follows the entire journey. The analyst does not start with software; the analyst starts by understanding.' : 'El analista acompaña toda la ruta. No empieza por el software; empieza por comprender.') + '</p>' + lensControl('07') + detailButton('d07_ai', en ? 'ARTIFICIAL INTELLIGENCE' : 'INTELIGENCIA ARTIFICIAL', en ? 'Analysis support · not decision owner' : 'Apoyo al análisis · no decide', 'w1f-ai-node') + '</div><div class="w1f-ai-relations">' + aiDecisionChain + aiRelation('d07_continuous', en ? 'OPERATIONS → AI → CANDIDATE NEED → HUMAN VALIDATION' : 'OPERACIÓN → IA → NECESIDAD CANDIDATA → VALIDACIÓN HUMANA', en ? 'CONTINUOUS DISCOVERY' : 'DESCUBRIMIENTO CONTINUO') + aiRelation('d07_ai_signals', en ? 'AI → SIGNALS' : 'IA → SEÑALES', en ? 'DETECT' : 'DETECTAR') + aiRelation('d07_ai_investigation', en ? 'AI → INVESTIGATION' : 'IA → INVESTIGACIÓN', en ? 'SYNTHESIZE' : 'SINTETIZAR') + aiRelation('d07_ai_alternatives', en ? 'AI → ALTERNATIVES' : 'IA → ALTERNATIVAS', en ? 'EXPLORE' : 'EXPLORAR') + aiRelation('d07_ai_feasibility', en ? 'AI → FEASIBILITY' : 'IA → VIABILIDAD', en ? 'COMPARE / MODEL' : 'COMPARAR / MODELAR') + aiRelation('d07_ai_business', en ? 'AI → BUSINESS CASE' : 'IA → CASO DE NEGOCIO', en ? 'SYNTHESIZE' : 'SINTETIZAR') + '</div><div class="w1f-sdlc-strip"><button type="button" class="is-current" data-w1f-detail="d07_planning">' + (en ? 'PLANNING · WEEK 1' : 'PLANEACIÓN · SEMANA 1') + '</button><span>→</span><span>' + (en ? 'ANALYSIS · NEXT' : 'ANÁLISIS · SIGUIENTE') + '</span><span>→</span><span>' + (en ? 'DESIGN' : 'DISEÑO') + '</span><span>→</span><span>' + (en ? 'IMPLEMENTATION' : 'IMPLEMENTACIÓN') + '</span><span>→</span><span>' + (en ? 'SUPPORT / SECURITY' : 'SOPORTE / SEGURIDAD') + '</span></div><div class="w1f-memory"><span>' + (en ? 'UNDERSTAND' : 'COMPRENDER') + '</span><i>→</i><span>' + (en ? 'INVESTIGATE' : 'INVESTIGAR') + '</span><i>→</i><span>' + (en ? 'BOUND' : 'DELIMITAR') + '</span><i>→</i><span>' + (en ? 'COMPARE' : 'COMPARAR') + '</span><i>→</i><span>' + (en ? 'JUSTIFY' : 'JUSTIFICAR') + '</span><i>→</i><span>' + (en ? 'DECIDE' : 'DECIDIR') + '</span></div></div>';
  }

  function findFigure(number) {
    var owned = document.querySelector('#week-1 .lesson-diagram[data-w1f-diagram="' + number + '"]');
    if (owned) return owned;
    var terms = config[number].terms;
    return Array.prototype.slice.call(document.querySelectorAll('#week-1 .lesson-diagram')).find(function (figure) {
      var heading = figure.querySelector('.diagram-heading h3, .diagram-heading h2, .w1f-heading h3, h3');
      var text = (heading ? heading.textContent : '').replace(/\s+/g, ' ').trim().toUpperCase();
      return terms.some(function (term) { return text.indexOf(term) !== -1; });
    }) || null;
  }

  function findAnyFigure(number) {
    var padded = String(number).padStart(2, '0');
    if (config[padded]) {
      var configured = findFigure(padded);
      if (configured) return configured;
    }
    var direct = document.querySelector('#week-1 [data-w1f-diagram="' + padded + '"], #week-1 [data-diagram="' + padded + '"], #week-1 [data-diagram-number="' + padded + '"], #week-1 #diagram-' + padded + ', #week-1 #diagram-' + String(parseInt(padded, 10)));
    if (direct) return direct.closest('.lesson-diagram, figure') || direct;
    var pattern = new RegExp('(?:DIAGRAMA|DIAGRAM)\\s*0?' + parseInt(padded, 10) + '(?:\\D|$)', 'i');
    return Array.prototype.slice.call(document.querySelectorAll('#week-1 .lesson-diagram, #week-1 figure')).find(function (figure) {
      var heading = figure.querySelector('.diagram-heading, .w1f-heading, h2, h3');
      return pattern.test(heading ? heading.textContent : '');
    }) || null;
  }

  function createMissingFigure(number, allowAppend) {
    var week = document.getElementById('week-1');
    if (!week) return null;
    var anchor = number === '05' ? (findFigure('06') || findFigure('07')) : (number === '06' ? findFigure('07') : null);
    if (!anchor && !allowAppend) return null;
    var figure = document.createElement('figure');
    figure.className = 'lesson-diagram';
    figure.dataset.w1fDiagram = number;
    figure.innerHTML = '<div class="diagram-heading"><h3>' + T(config[number].title) + '</h3></div><div class="diagram-stage"></div><figcaption></figcaption>';
    if (anchor) anchor.before(figure);
    else week.appendChild(figure);
    return figure;
  }

  function headingMarkup(number) {
    var c = config[number];
    return '<small>' + (isEnglish() ? 'DIAGRAM ' + number + ' · WEEK 1' : 'DIAGRAMA ' + number + ' · SEMANA 1') + '</small><h3>' + T(c.title) + '</h3><strong>' + T(c.subtitle) + '</strong><p>' + T(c.description) + '</p>';
  }

  function transitionMarkup(to) {
    var content = {
      '05': B('Ya entendemos mejor el problema.<br>Pero ¿hasta dónde llega el sistema que podemos analizar o cambiar?', 'We understand the problem better.<br>But where does the system we can analyze or change begin and end?'),
      '06': B('Ya sabemos cuál es el sistema y su alcance.<br>¿Vale la pena invertir recursos en cambiarlo?', 'We know the system and its scope.<br>Is it worth investing resources to change it?'),
      '07': B('Sistema · Proceso · Problema · Frontera · Viabilidad<br>¿Cómo se conecta todo antes de iniciar el desarrollo?', 'System · Process · Problem · Boundary · Feasibility<br>How does everything connect before development begins?')
    };
    return '<section class="w1f-transition" data-w1f-transition="' + to + '"><div><small>' + (isEnglish() ? 'PEDAGOGICAL TRANSITION' : 'TRANSICIÓN PEDAGÓGICA') + '</small><p>' + T(content[to]) + '</p>' + (to === '06' ? '<strong>' + (isEnglish() ? 'PROJECT CANDIDATE' : 'CANDIDATO DE PROYECTO') + '</strong>' : '') + '</div></section>';
  }

  function captionMarkup(number) {
    var messages = {
      '05': B('La frontera aclara alcance, responsabilidad e intercambios con el entorno.', 'The boundary clarifies scope, accountability and exchanges with the environment.'),
      '06': B('La viabilidad informa el caso de negocio; la organización conserva la decisión.', 'Feasibility informs the business case; the organization retains the decision.'),
      '07': B('La planeación conecta la necesidad con una decisión sustentada.', 'Planning connects need with an evidence-based decision.')
    };
    return '<span>' + T(messages[number]) + '</span><span><b>' + (isEnglish() ? 'SOURCE / LAYER' : 'FUENTE / CAPA') + '</b> ' + T(FOUNDATION) + '</span>';
  }

  function setLens(figure, active) {
    var stage = figure.querySelector('.w1f-stage');
    if (!stage) return;
    stage.classList.toggle('is-ai-lens', !!active);
    figure.dataset.w1fLens = active ? 'ai' : 'base';
    var base = figure.querySelector('[data-w1fd-lens="base"]');
    var ai = figure.querySelector('[data-w1fd-lens="ai"]');
    var number = figure.dataset.w1fDiagram;
    var question = figure.querySelector('.w1f-master-question');
    if (question && config[number]) question.textContent = T(active ? config[number].aiQuestion : config[number].question);
    if (base) base.setAttribute('aria-pressed', active ? 'false' : 'true');
    if (ai) {
      ai.setAttribute('aria-pressed', active ? 'true' : 'false');
      ai.textContent = active ? (isEnglish() ? 'AI LENS ACTIVE' : 'CAPA IA ACTIVA') : (isEnglish() ? 'APPLY AI LENS' : 'APLICAR CAPA IA');
    }
    figure.querySelectorAll('.w1f-ai-node, .w1f-ai-relations [data-w1f-detail]').forEach(function (node) {
      node.setAttribute('aria-hidden', active ? 'false' : 'true');
      node.tabIndex = active ? 0 : -1;
    });
  }

  function section(label, value, className) {
    if (!value) return '';
    return '<section class="w1f-drawer-section ' + (className || '') + '"><h5>' + label + '</h5><p>' + value + '</p></section>';
  }

  function drawerMarkup(key, figure) {
    var d = details[key];
    if (!d) return '';
    var en = isEnglish();
    var grid = '';
    grid += section(en ? '01 · WHAT IS IT?' : '01 · ¿QUÉ ES?', T(d.what));
    grid += section(en ? '02 · WHY DOES IT MATTER?' : '02 · ¿POR QUÉ IMPORTA?', T(d.why));
    grid += section(en ? '03 · GUIDING QUESTION' : '03 · PREGUNTA GUÍA', T(d.question));
    grid += section(en ? '04 · METAPHOR / ANALOGY' : '04 · METÁFORA / ANALOGÍA', T(d.metaphor));
    grid += section(en ? '05 · EXAMPLE' : '05 · EJEMPLO', T(d.example));
    grid += section(en ? '06 · RELATED CONCEPTS' : '06 · CONCEPTOS RELACIONADOS', T(d.related));
    grid += section(en ? '07 · DO NOT CONFUSE WITH' : '07 · NO CONFUNDIR CON', T(d.confuse));
    grid += section(en ? '08 · SOURCE / EPISTEMIC LAYER' : '08 · FUENTE / CAPA EPISTÉMICA', T(d.layer === 'ai' ? AI_LAYER : FOUNDATION));
    var aiDetail = d.layer === 'ai' ? d : (figure && figure.dataset.w1fLens === 'ai' && d.ai ? details[d.ai] : null);
    if (aiDetail) {
      grid += section(en ? '09 · AI CONNECTION' : '09 · CONEXIÓN IA', T(aiDetail.title), 'is-ai');
      grid += section(en ? '10 · WHAT AI CAN DO HERE' : '10 · QUÉ PUEDE HACER LA IA AQUÍ', T(aiDetail.aiCan || aiDetail.what), 'is-ai');
      grid += section(en ? '11 · WHAT CHANGES' : '11 · QUÉ CAMBIA', T(aiDetail.changes || aiDetail.why), 'is-ai');
      grid += section(en ? '12 · WHAT STILL REQUIRES VALIDATION' : '12 · QUÉ DEBE SEGUIR VALIDÁNDOSE', T(aiDetail.validate || aiDetail.confuse), 'is-ai');
    }
    var revisit = revisitTargets[key] ? '<button type="button" class="w1f-revisit" data-w1f-revisit="' + revisitTargets[key] + '">' + (en ? 'REVISIT DIAGRAM ' : 'REVISITAR DIAGRAMA ') + revisitTargets[key] + '</button>' : '';
    return '<button type="button" class="w1f-backdrop" data-w1f-close="true" aria-label="' + (en ? 'Close' : 'Cerrar') + '"></button><article class="w1f-drawer" role="dialog" aria-modal="true" aria-labelledby="w1f-drawer-title"><header class="w1f-drawer-head"><div><small>' + T(d.layer === 'ai' ? AI_LAYER : FOUNDATION) + '</small><h4 id="w1f-drawer-title">' + T(d.title) + '</h4></div><button type="button" class="w1f-close" data-w1f-close="true" aria-label="' + (en ? 'Close' : 'Cerrar') + '">×</button></header><div class="w1f-drawer-grid">' + grid + '</div>' + revisit + '</article>';
  }

  var currentFigure = null;
  function closeDrawer() {
    document.querySelectorAll('.w1f-backdrop, .w1f-drawer').forEach(function (node) { node.remove(); });
    document.body.classList.remove('w1f-drawer-open');
  }

  function openDrawer(key, figure) {
    if (!details[key]) return;
    closeDrawer();
    currentFigure = figure;
    var holder = document.createElement('div');
    holder.innerHTML = drawerMarkup(key, figure);
    while (holder.firstChild) document.body.appendChild(holder.firstChild);
    document.body.classList.add('w1f-drawer-open');
    document.querySelectorAll('[data-w1f-close="true"]').forEach(function (node) {
      node.onclick = function (event) { event.preventDefault(); closeDrawer(); };
    });
    document.querySelectorAll('[data-w1f-revisit]').forEach(function (node) {
      node.onclick = function (event) {
        event.preventDefault();
        var target = findAnyFigure(node.getAttribute('data-w1f-revisit'));
        closeDrawer();
        if (!target) return;
        target.setAttribute('tabindex', '-1');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.setTimeout(function () { target.focus({ preventScroll: true }); }, 420);
      };
    });
    var close = document.querySelector('.w1f-close');
    if (close) close.focus({ preventScroll: true });
  }

  function bind(figure) {
    figure.querySelectorAll('[data-w1f-detail]').forEach(function (node) {
      node.onpointerdown = function (event) {
        if (typeof event.button === 'number' && event.button !== 0) return;
        event.preventDefault();
        event.stopPropagation();
        node.dataset.w1fPointer = '1';
        openDrawer(node.getAttribute('data-w1f-detail'), figure);
      };
      node.onclick = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (node.dataset.w1fPointer === '1') { delete node.dataset.w1fPointer; return; }
        openDrawer(node.getAttribute('data-w1f-detail'), figure);
      };
    });
    figure.querySelectorAll('[data-w1fd-lens]').forEach(function (node) {
      node.onpointerdown = function (event) {
        if (typeof event.button === 'number' && event.button !== 0) return;
        event.preventDefault();
        event.stopPropagation();
        node.dataset.w1fPointer = '1';
        setLens(figure, node.getAttribute('data-w1fd-lens') === 'ai');
      };
      node.onclick = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (node.dataset.w1fPointer === '1') { delete node.dataset.w1fPointer; return; }
        setLens(figure, node.getAttribute('data-w1fd-lens') === 'ai');
      };
    });
  }

  function detailEntries(figure) {
    var entries = [];
    figure.querySelectorAll('*').forEach(function (node) {
      Array.prototype.slice.call(node.attributes || []).forEach(function (attribute) {
        if (/^data-.*detail/i.test(attribute.name) && attribute.value) entries.push({ node: node, key: attribute.value });
      });
    });
    return entries;
  }

  function externalContentResolves(key) {
    return Object.keys(window).some(function (name) {
      if (name.indexOf('CST212') !== 0) return false;
      try {
        var candidate = window[name];
        return candidate && ['content', 'details', 'data'].some(function (property) {
          return candidate[property] && Object.prototype.hasOwnProperty.call(candidate[property], key);
        });
      } catch (error) { return false; }
    });
  }

  function validateFigure(figure) {
    if (!figure) return { found: false, nodes: 0, unresolvedKeys: [], baseControl: false, aiControl: false, overlayBlockers: 0, passed: false };
    var entries = detailEntries(figure);
    var unresolved = entries.filter(function (entry) {
      var directlyBound = typeof entry.node.onclick === 'function' || typeof entry.node.onpointerdown === 'function';
      return !details[entry.key] && !externalContentResolves(entry.key) && !directlyBound;
    }).map(function (entry) { return entry.key; }).filter(function (key, index, keys) { return keys.indexOf(key) === index; });
    var controls = Array.prototype.slice.call(figure.querySelectorAll('button, [role="button"]'));
    var baseControl = controls.some(function (node) { return /(^|\s)BASE(\s|$)/i.test(node.textContent || '') || node.getAttribute('data-w1fd-lens') === 'base'; });
    var aiControl = controls.some(function (node) { return /CAPA IA|AI LENS/i.test(node.textContent || '') || node.getAttribute('data-w1fd-lens') === 'ai'; });
    var overlayBlockers = Array.prototype.slice.call(figure.querySelectorAll('[class*="overlay"], [class*="backdrop"]')).filter(function (node) {
      var style = window.getComputedStyle(node);
      return style.display !== 'none' && style.visibility !== 'hidden' && style.pointerEvents !== 'none' && node.getAttribute('aria-hidden') !== 'true';
    }).length;
    var result = { found: true, nodes: entries.length, unresolvedKeys: unresolved, baseControl: baseControl, aiControl: aiControl, overlayBlockers: overlayBlockers };
    result.passed = entries.length > 0 && unresolved.length === 0 && baseControl && aiControl && overlayBlockers === 0;
    return result;
  }

  function validateWeek1() {
    var report = { diagrams: {}, overlays: {}, viewportValidation: 'not-performed', passed: true };
    ['01', '02', '03', '04', '05', '06', '07'].forEach(function (number) {
      var result = validateFigure(findAnyFigure(number));
      report.diagrams[number] = result;
      report[number] = result;
      if (!result.passed) report.passed = false;
    });
    var drawers = document.querySelectorAll('.w1f-drawer').length;
    var backdrops = document.querySelectorAll('.w1f-backdrop').length;
    report.overlays = { drawers: drawers, backdrops: backdrops, balanced: drawers === backdrops };
    if (!report.overlays.balanced) report.passed = false;
    window.CST212_WEEK1_FINAL_VALIDATION = report;
    return report;
  }

  function mountFigure(number, options) {
    options = options || {};
    var figure = findFigure(number);
    if (!figure && options.createMissing) figure = createMissingFigure(number, options.allowAppend);
    if (!figure) return false;
    var existingStage = figure.querySelector('.w1f-stage[data-w1f-stage="' + number + '"]');
    if (existingStage && !options.force) return true;
    var preserveActiveLens = !!(options.preserveLens && figure.dataset.w1fLens === 'ai');
    figure.dataset.w1fDiagram = number;
    figure.classList.add('w1f-figure', 'w1f-d' + number);
    var heading = figure.querySelector('.diagram-heading, .w1f-heading');
    if (!heading) { heading = document.createElement('header'); figure.prepend(heading); }
    heading.className = 'w1f-heading';
    heading.innerHTML = headingMarkup(number);
    var oldStage = figure.querySelector('.diagram-stage, .w1f-stage');
    var holder = document.createElement('div');
    holder.innerHTML = '<div class="w1f-stage" data-w1f-stage="' + number + '">' + config[number].render() + '</div>';
    if (oldStage) oldStage.replaceWith(holder.firstElementChild);
    else heading.insertAdjacentElement('afterend', holder.firstElementChild);
    var caption = figure.querySelector('figcaption, .diagram-caption, .w1f-caption');
    if (!caption) { caption = document.createElement('figcaption'); figure.appendChild(caption); }
    caption.className = 'w1f-caption';
    caption.innerHTML = captionMarkup(number);
    if (figure.previousElementSibling && figure.previousElementSibling.getAttribute('data-w1f-transition') === number) {
      var transitionHolder = document.createElement('div');
      transitionHolder.innerHTML = transitionMarkup(number);
      figure.previousElementSibling.replaceWith(transitionHolder.firstElementChild);
    } else {
      figure.insertAdjacentHTML('beforebegin', transitionMarkup(number));
    }
    setLens(figure, preserveActiveLens);
    bind(figure);
    return true;
  }

  function mountEndCard(force) {
    var figure = findFigure('07');
    if (!figure) return;
    var existing = document.querySelector('#week-1 .w1f-end-card');
    if (existing && !force) return;
    var en = isEnglish();
    var markup = '<section class="w1f-end-card"><div><small>' + (en ? 'WEEK 1 COMPLETE' : 'SEMANA 1 COMPLETADA') + '</small><h3>' + (en ? 'Systems planning' : 'Planeación de sistemas') + '</h3><p>' + (en ? 'Before designing a solution, we learned to understand the system, investigate the problem, assess alternatives and justify a decision.' : 'Antes de diseñar una solución, aprendimos a comprender el sistema, investigar el problema, evaluar alternativas y justificar una decisión.') + '</p><p class="w1f-end-ai">' + (en ? 'With AI we can expand our capacity to investigate and compare, but evidence, context and human accountability remain essential.' : 'Con IA podemos ampliar la capacidad de investigar y comparar, pero la evidencia, el contexto y la responsabilidad humana siguen siendo fundamentales.') + '</p><div class="w1f-next">' + (en ? 'NEXT · WEEK 2 · SYSTEMS DEVELOPMENT WITH PROJECT MANAGEMENT' : 'SIGUIENTE · SEMANA 2 · DESARROLLO DE SISTEMAS CON GESTIÓN DE PROYECTOS') + '</div></div></section>';
    if (existing) {
      var holder = document.createElement('div');
      holder.innerHTML = markup;
      existing.replaceWith(holder.firstElementChild);
    } else figure.insertAdjacentHTML('afterend', markup);
  }

  var mounting = false;
  function mountAll(createMissing, allowAppend) {
    if (mounting) return;
    mounting = true;
    var ready = ['05', '06', '07'].map(function (number) {
      return mountFigure(number, { createMissing: !!createMissing || number === '05', allowAppend: !!allowAppend });
    }).every(Boolean);
    if (ready) {
      mountEndCard(false);
      validateWeek1();
    }
    mounting = false;
    return ready;
  }

  var startAttempts = 0;
  var maxStartAttempts = 24;
  var retryTimer = null;
  var observersReady = false;
  var lastLanguage = null;

  function refreshLanguage() {
    var language = isEnglish() ? 'en' : 'es';
    if (language === lastLanguage) return;
    lastLanguage = language;
    closeDrawer();
    ['05', '06', '07'].forEach(function (number) {
      mountFigure(number, { createMissing: true, allowAppend: true, force: true, preserveLens: true });
    });
    mountEndCard(true);
    validateWeek1();
  }

  function observeChanges() {
    if (observersReady) return;
    var week = document.getElementById('week-1');
    if (!week) return;
    observersReady = true;
    lastLanguage = isEnglish() ? 'en' : 'es';
    var timer = null;
    new MutationObserver(function () {
      window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        if (!document.querySelector('#week-1 .w1f-stage[data-w1f-stage="05"]') || !document.querySelector('#week-1 .w1f-stage[data-w1f-stage="06"]') || !document.querySelector('#week-1 .w1f-stage[data-w1f-stage="07"]')) mountAll(true, true);
        else validateWeek1();
      }, 90);
    }).observe(week, { childList: true, subtree: true });
    var languageObserver = new MutationObserver(refreshLanguage);
    languageObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang', 'class'] });
    if (document.body) languageObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    document.addEventListener('atlas:languagechange', refreshLanguage);
    document.addEventListener('languagechange', refreshLanguage);
  }

  function start() {
    window.clearTimeout(retryTimer);
    if (mountAll(false, false)) { observeChanges(); return; }
    startAttempts += 1;
    if (startAttempts < maxStartAttempts) {
      retryTimer = window.setTimeout(start, 170);
      return;
    }
    mountAll(true, true);
    observeChanges();
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && document.querySelector('.w1f-drawer')) closeDrawer();
  });

  window.CST212Week1Finalization = { config: config, content: details, setLens: setLens, validateAll: validateWeek1, validation: function () { return window.CST212_WEEK1_FINAL_VALIDATION || {}; } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
}());
