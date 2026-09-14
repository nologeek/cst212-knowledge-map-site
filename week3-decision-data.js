(function (global) {
  'use strict';
  const t = (es, en) => ({ es, en });
  const atlas = global.CST212_W3 = global.CST212_W3 || {};
  ['diagrams', 'concepts', 'sources', 'models'].forEach(key => {
    atlas[key] = atlas[key] || {};
  });
  const id = name => 'w3r_' + name;
  function add(name, label, layer, details, ai, related) {
    const entry = { id: id(name), label: t(...label), layer,
      related: (related || []).map(id), sources: layer === 'ai' ? [] : ['w3-course'], ai: {} };
    ['what', 'why', 'question', 'example', 'analogy', 'notConfuse'].forEach((key, i) => {
      entry[key] = t(...details[i]);
    });
    ['connection', 'does', 'changes', 'validate'].forEach((key, i) => {
      entry.ai[key] = t(...ai[i]);
    });
    atlas.concepts[entry.id] = entry;
    return entry.id;
  }

  add('decision', ['Lógica de decisiones', 'Decision logic'], 'foundation', [
    ['Relaciona combinaciones de condiciones con acciones definidas por las reglas del negocio.', 'Links combinations of conditions to actions defined by business rules.'],
    ['Permite explicar por qué un mismo proceso produce resultados distintos según sus entradas.', 'Explains why the same process produces different results for different inputs.'],
    ['¿Qué descuento corresponde a esta combinación de tres criterios?', 'Which discount applies to this combination of three criteria?'],
    ['College Driver: curso sí, historial limpio sí y edad 22 dan 10 %; al cumplir 23, el resultado es 20 %.', 'College Driver: course yes, clean record yes and age 22 give 10%; at age 23 the result becomes 20%.'],
    ['Como una llave de tres posiciones: importa la configuración completa, no una posición aislada.', 'Like a key with three positions: the full configuration matters, not one position alone.'],
    ['Representar una política no otorga autoridad para modificarla; tampoco calcula una prima monetaria.', 'Representing a policy does not grant authority to change it; it does not calculate a monetary premium either.']
  ], [
    ['La extensión IA relaciona la política aportada con representaciones que se pueden revisar.', 'The AI extension connects the supplied policy to representations that can be reviewed.'],
    ['Puede proponer una tabla, un árbol y perfiles de prueba a partir de estos criterios.', 'It can propose a table, a tree and test profiles from these criteria.'],
    ['Acelera la preparación de borradores y comparaciones entre resultados.', 'It speeds up drafting and comparison of outcomes.'],
    ['El analista debe contrastar los tres criterios y el bono con la política autorizada.', 'The analyst must check the three criteria and the bonus against authorized policy.']
  ], ['condition', 'rule', 'action', 'table', 'tree']);

  add('table', ['Tabla de decisión', 'Decision table'], 'foundation', [
    ['Organiza combinaciones de condiciones y sus acciones en reglas que se pueden comparar.', 'Organizes combinations of conditions and their actions into comparable rules.'],
    ['Su fortaleza es revisar la cobertura sistemáticamente: aquí se ven las ocho combinaciones juntas.', 'Its strength is systematic coverage review: all eight combinations are visible together here.'],
    ['¿Cada columna tiene una combinación distinta y exactamente un descuento?', 'Does each column have a distinct combination and exactly one discount?'],
    ['R5 muestra sí/sí/no y 10 %; R8 muestra sí/sí/sí y 20 %.', 'R5 shows yes/yes/no and 10%; R8 shows yes/yes/yes and 20%.'],
    ['Como una hoja de consulta: localiza la columna compatible con todos los datos.', 'Like a reference sheet: locate the column matching all the data.'],
    ['La tabla puede crecer y es menos intuitiva para leer una secuencia; un resultado repetido no vuelve idénticas sus reglas.', 'A table can grow large and is less intuitive for sequential reading; repeated outcomes do not make their rules identical.']
  ], [
    ['La IA puede traducir condiciones documentadas a columnas candidatas.', 'AI can translate documented conditions into candidate columns.'],
    ['Enumera combinaciones y completa descuentos a partir de la fórmula proporcionada.', 'It enumerates combinations and fills in discounts using the supplied formula.'],
    ['Reduce transcripción manual y facilita localizar celdas faltantes.', 'It reduces manual transcription and makes missing cells easier to locate.'],
    ['Revisar las ocho columnas, su orden y el bono de R8 antes de aceptar el borrador.', 'Review all eight columns, their order and the R8 bonus before accepting the draft.']
  ], ['tree', 'rule', 'coverage', 'comparison']);

  add('tree', ['Árbol de decisión', 'Decision tree'], 'foundation', [
    ['Representa condiciones sucesivas como ramas y resultados como hojas.', 'Represents successive conditions as branches and outcomes as leaves.'],
    ['Su fortaleza es explicar un camino visual: curso, historial y edad llevan a una hoja concreta.', 'Its strength is explaining a visual path: course, record and age lead to one specific leaf.'],
    ['¿Qué respuestas llevan desde la raíz hasta el descuento seleccionado?', 'Which answers lead from the root to the selected discount?'],
    ['Curso sí → historial sí → edad menor de 23 conduce a R5 y 10 %.', 'Course yes → clean record yes → age below 23 leads to R5 and 10%.'],
    ['Como seguir desvíos señalizados hasta una salida, conservando todas las alternativas del mapa.', 'Like following signposted turns to an exit while retaining all alternatives on the map.'],
    ['Puede crecer en profundidad y repetir preguntas en ramas distintas; no es un árbol aprendido por IA ni una política nueva.', 'It can grow deep and repeat questions on different branches; it is not an AI-trained tree or a new policy.']
  ], [
    ['La IA puede convertir una tabla aprobada en un árbol candidato.', 'AI can convert an approved table into a candidate tree.'],
    ['Distribuye las tres condiciones en niveles y vincula las ocho hojas a sus reglas.', 'It places the three conditions at successive levels and links the eight leaves to their rules.'],
    ['Ayuda a explicar recorridos sin volver a redactar la lógica manualmente.', 'It helps explain paths without manually rewriting the logic.'],
    ['Comprobar las ocho hojas contra la tabla: cambiar la representación no debe cambiar descuentos.', 'Check all eight leaves against the table: changing representation must not change discounts.']
  ], ['table', 'condition', 'action', 'comparison']);

  add('condition', ['Condición', 'Condition'], 'foundation', [
    ['Una pregunta cuyo valor verdadero o falso participa en la selección de una regla.', 'A question whose true or false value helps select a rule.'],
    ['Separar las tres preguntas permite enumerar 2³ = 8 combinaciones sin omitir casos.', 'Separating the three questions allows 2³ = 8 combinations to be enumerated without omissions.'],
    ['¿Estamos comprobando curso, historial de tres años o edad de al menos 23?', 'Are we checking the course, the three-year record or age of at least 23?'],
    ['C3 es falsa a los 22 años y verdadera a los 23.', 'C3 is false at age 22 and true at age 23.'],
    ['Como tres interruptores independientes que juntos seleccionan una salida.', 'Like three independent switches that together select an output.'],
    ['Una condición es una entrada lógica; el descuento es una acción de salida.', 'A condition is a logical input; the discount is an output action.']
  ], [
    ['La IA puede extraer preguntas binarias de las reglas escritas.', 'AI can extract binary questions from written rules.'],
    ['Propone nombres y predicados para curso, historial y umbral de edad.', 'It proposes names and predicates for the course, record and age threshold.'],
    ['Hace visibles ambigüedades antes de generar combinaciones.', 'It exposes ambiguities before combinations are generated.'],
    ['Confirmar el período de tres años y el operador ≥; no añadir criterios no documentados.', 'Confirm the three-year period and the ≥ operator; do not add undocumented criteria.']
  ], ['course', 'clean', 'age', 'rule']);

  add('rule', ['Regla', 'Rule'], 'foundation', [
    ['Asocia una combinación completa de respuestas con una acción o resultado.', 'Associates a complete combination of answers with an action or outcome.'],
    ['Hace explícito qué sucede cuando varias condiciones se evalúan juntas.', 'Makes explicit what happens when several conditions are evaluated together.'],
    ['¿Qué resultado corresponde a esta combinación, sin ignorar ninguna condición?', 'Which outcome corresponds to this combination without ignoring any condition?'],
    ['R6: curso sí, historial no y edad ≥ 23 sí producen 10 %.', 'R6: course yes, clean record no and age ≥ 23 yes produce 10%.'],
    ['Como una entrada de un catálogo: una configuración completa remite a una respuesta.', 'Like a catalog entry: a complete configuration points to one response.'],
    ['R2, R3 y R4 comparten 5 %, pero describen combinaciones distintas.', 'R2, R3 and R4 share 5%, but describe different combinations.']
  ], [
    ['La IA puede enumerar reglas candidatas a partir de las tres condiciones.', 'AI can enumerate candidate rules from the three conditions.'],
    ['Genera las ocho combinaciones y les aplica las reglas aportadas.', 'It generates the eight combinations and applies the supplied rules.'],
    ['Facilita detectar reglas omitidas o repetidas.', 'It makes omitted or repeated rules easier to detect.'],
    ['Confirmar unicidad de cada combinación y el tratamiento especial de sí/sí/sí.', 'Confirm that each combination is unique and that yes/yes/yes receives special treatment.']
  ], ['condition', 'action', 'coverage']);

  add('action', ['Acción / resultado', 'Action / result'], 'foundation', [
    ['Es la respuesta que una regla prescribe; en este caso es un porcentaje de descuento.', 'The response prescribed by a rule; in this case it is a discount percentage.'],
    ['Permite contrastar una decisión con un resultado esperado verificable.', 'Allows a decision to be compared with a verifiable expected outcome.'],
    ['¿Cuánto aportan los criterios y cuánto aporta el bono por cumplir los tres?', 'How much comes from the criteria and how much from the all-three bonus?'],
    ['Tres criterios dan 15 % más 5 % adicional: el resultado final es 20 %.', 'Three criteria give 15% plus an additional 5%: the final result is 20%.'],
    ['Como la salida de una calculadora: depende de entradas y de una operación definida.', 'Like a calculator output: it depends on inputs and a defined operation.'],
    ['20 % es el descuento del caso; no significa 20 unidades monetarias ni define una prima base.', '20% is the case discount; it does not mean 20 monetary units or define a base premium.']
  ], [
    ['La IA puede comprobar que cada salida coincide con la regla autorizada.', 'AI can check that each output matches the authorized rule.'],
    ['Desglosa el aporte de criterios y el bono para hacer revisable el cálculo.', 'It separates the criterion contribution and bonus to make the calculation reviewable.'],
    ['Vuelve explicable un resultado sin añadir autoridad a la política.', 'It makes an outcome explainable without adding policy authority.'],
    ['Recalcular el porcentaje y comprobar que se suma el bono una sola vez.', 'Recalculate the percentage and check that the bonus is added exactly once.']
  ], ['rule', 'bonus']);

  add('course', ['C1 · Curso de manejo seguro', 'C1 · Safe-driving course'], 'foundation', [
    ['Indica si la persona tomó el curso de manejo seguro del caso College Driver.', 'Indicates whether the person took the safe-driving course in the College Driver case.'],
    ['Cuando se cumple, suma 5 % y participa en la condición conjunta del bono.', 'When satisfied, it adds 5% and contributes to the all-three bonus condition.'],
    ['¿La persona tomó el curso de manejo seguro?', 'Did the person take the safe-driving course?'],
    ['R2 cumple solo el curso: sí/no/no produce 5 %.', 'R2 satisfies only the course criterion: yes/no/no produces 5%.'],
    ['Como una casilla de evidencia: marcarla habilita un aporte definido.', 'Like an evidence checkbox: selecting it enables a defined contribution.'],
    ['El caso no especifica proveedor, duración ni vencimiento del curso; no se deben inventar.', 'The case does not specify a provider, duration or expiry date for the course; these must not be invented.']
  ], [
    ['La IA puede identificar la mención del curso como una condición.', 'AI can identify the course statement as a condition.'],
    ['La expresa como un sí/no y la incluye en cada combinación.', 'It expresses it as yes/no and includes it in each combination.'],
    ['Evita perder este criterio al convertir texto en una tabla.', 'It helps prevent losing this criterion when converting text into a table.'],
    ['Verificar evidencia del curso fuera del simulador; la IA no certifica que se haya tomado.', 'Verify course evidence outside the simulator; AI does not certify attendance.']
  ], ['condition', 'bonus', 'rule_100']);

  add('clean', ['C2 · Sin multas ni accidentes en 3 años', 'C2 · No tickets or accidents in 3 years'], 'foundation', [
    ['Indica que no hubo multas ni accidentes en los últimos tres años.', 'Indicates that there were no tickets or accidents during the last three years.'],
    ['Aporta 5 % y conserva el alcance temporal exacto del segundo criterio.', 'It contributes 5% while preserving the exact time span of the second criterion.'],
    ['¿El historial está libre de multas y accidentes durante los últimos tres años?', 'Is the record free of tickets and accidents during the last three years?'],
    ['R3 cumple solo el historial limpio: no/sí/no produce 5 %.', 'R3 satisfies only the clean-record criterion: no/yes/no produces 5%.'],
    ['Como revisar una ventana de tiempo: importa lo ocurrido dentro de sus límites.', 'Like reviewing a time window: what happened within its boundaries matters.'],
    ['No significa solo ausencia de accidentes, ni historial de un año, ni historial de toda la vida.', 'It does not mean only no accidents, a one-year record or an entire lifetime record.']
  ], [
    ['La IA puede conservar los dos tipos de incidente y el período al estructurar la condición.', 'AI can preserve both incident types and the time span when structuring the condition.'],
    ['Señala borradores que omiten multas, accidentes o los tres años.', 'It flags drafts omitting tickets, accidents or the three-year period.'],
    ['Ayuda a mantener el significado al traducir la condición entre representaciones.', 'It helps retain the meaning when translating the condition between representations.'],
    ['Contrastar el historial real con evidencia autorizada; el selector es solo una entrada del ejemplo.', 'Check the actual record against authorized evidence; the selector is only an example input.']
  ], ['condition', 'bonus', 'rule_010']);

  add('age', ['C3 · Edad de 23 años o más', 'C3 · Age 23 or older'], 'foundation', [
    ['Evalúa edad ≥ 23; la igualdad en 23 está incluida.', 'Evaluates age ≥ 23; equality at 23 is included.'],
    ['El límite distingue perfiles de 22 y 23 años y puede activar también el bono conjunto.', 'The boundary distinguishes ages 22 and 23 and can also activate the all-three bonus.'],
    ['¿La edad alcanza 23 años, incluidos exactamente los 23?', 'Does the age reach 23 years, including exactly 23?'],
    ['Con curso e historial sí, 22 años producen 10 % y 23 años producen 20 %.', 'With course and clean record both yes, age 22 produces 10% and age 23 produces 20%.'],
    ['Como un umbral con el borde incluido: pisar el 23 ya cruza al lado verdadero.', 'Like an inclusive threshold: reaching 23 already enters the true side.'],
    ['≥ 23 no es > 23. El rango de entrada 0–120 es una validación del ejercicio, no una regla de elegibilidad del seguro.', '≥ 23 is not > 23. The 0–120 input range is exercise validation, not an insurance eligibility rule.']
  ], [
    ['La IA puede proponer pruebas a ambos lados del umbral de edad.', 'AI can propose tests on both sides of the age threshold.'],
    ['Compara edades 22 y 23 manteniendo los otros criterios iguales.', 'It compares ages 22 and 23 while keeping the other criteria unchanged.'],
    ['Hace visibles errores de frontera que una sola prueba no detectaría.', 'It exposes boundary errors that a single test might miss.'],
    ['Confirmar ≥ 23 y rechazar entradas inválidas sin inventar restricciones de la póliza.', 'Confirm ≥ 23 and reject invalid inputs without inventing policy restrictions.']
  ], ['condition', 'bonus', 'testcases']);

  add('bonus', ['5 % adicional al cumplir los tres', 'Extra 5% when all three are met'], 'foundation', [
    ['Añade 5 % al 15 % acumulado únicamente cuando C1, C2 y C3 son verdaderas.', 'Adds 5% to the accumulated 15% only when C1, C2 and C3 are true.'],
    ['Explica por qué el descuento máximo del caso es 20 % y no 15 %.', 'Explains why the maximum case discount is 20%, not 15%.'],
    ['¿Se cumplen simultáneamente los tres criterios?', 'Are all three criteria satisfied simultaneously?'],
    ['R8: 3 × 5 % + 5 % = 20 %. R5: 2 × 5 % + 0 % = 10 %.', 'R8: 3 × 5% + 5% = 20%. R5: 2 × 5% + 0% = 10%.'],
    ['Como completar un conjunto de tres piezas que habilita una bonificación única.', 'Like completing a three-piece set that enables one additional bonus.'],
    ['No se aplica con solo dos criterios ni se multiplica el descuento por 1,05.', 'It does not apply with only two criteria, and the discount is not multiplied by 1.05.']
  ], [
    ['La IA puede señalar excepciones conjuntivas en el texto de la política.', 'AI can flag conjunctive exceptions in the policy text.'],
    ['Comprueba que solo la combinación 111 incluye este aporte.', 'It checks that only combination 111 includes this contribution.'],
    ['Ayuda a evitar el error de sumar únicamente los tres aportes normales.', 'It helps avoid the error of adding only the three normal contributions.'],
    ['Verificar que R8 da 20 % y que ninguna otra regla recibe el bono.', 'Verify that R8 gives 20% and that no other rule receives the bonus.']
  ], ['rule_111', 'action_111', 'age']);

  add('coverage', ['Cobertura de combinaciones', 'Combination coverage'], 'foundation', [
    ['Comprueba que cada una de las ocho combinaciones binarias tiene un resultado definido.', 'Checks that each of the eight binary combinations has a defined outcome.'],
    ['Evita dejar perfiles sin respuesta y permite comparar la tabla con las ocho hojas del árbol.', 'It avoids leaving profiles without an answer and supports comparison with the tree’s eight leaves.'],
    ['¿Aparecen 000, 100, 010, 001, 110, 101, 011 y 111 exactamente una vez?', 'Do 000, 100, 010, 001, 110, 101, 011 and 111 each appear exactly once?'],
    ['El modelo muestra ocho reglas distintas, aunque solo existen cuatro porcentajes posibles.', 'The model shows eight distinct rules even though there are only four possible percentages.'],
    ['Como comprobar todas las casillas de una cuadrícula, no solo contar sus colores.', 'Like checking every cell in a grid rather than just counting its colors.'],
    ['En esta estructura se conservan ocho combinaciones; no significa que toda tabla de decisión sea irreducible.', 'This structure retains eight combinations; it does not mean every decision table is irreducible.']
  ], [
    ['La IA puede comparar reglas presentes con el conjunto esperado de combinaciones.', 'AI can compare present rules with the expected set of combinations.'],
    ['Señala una posible regla faltante si una combinación carece de resultado.', 'It flags a possible missing rule when a combination lacks an outcome.'],
    ['Acelera la revisión de exhaustividad sin demostrar por sí sola que la política sea correcta.', 'It speeds up completeness review without proving that the policy itself is correct.'],
    ['El analista confirma que las tres condiciones son las relevantes y revisa cada ausencia señalada.', 'The analyst confirms that the three conditions are relevant and reviews every flagged omission.']
  ], ['rule', 'table', 'tree', 'testcases']);

  add('conflicts', ['Conflictos entre reglas', 'Rule conflicts'], 'deepening', [
    ['Un conflicto candidato aparece cuando la misma combinación recibe resultados incompatibles.', 'A candidate conflict occurs when the same combination receives incompatible outcomes.'],
    ['Detectarlo ayuda a separar errores de representación de diferencias reales de política.', 'Detecting it helps distinguish representation errors from actual policy differences.'],
    ['¿Hay dos descuentos incompatibles para exactamente las mismas tres respuestas?', 'Are there two incompatible discounts for exactly the same three answers?'],
    ['Ejemplo ilustrativo de error: dos borradores asignan 15 % y 20 % a 111; el caso aportado establece 20 %.', 'Illustrative error example: two drafts assign 15% and 20% to 111; the supplied case specifies 20%.'],
    ['Como dos señales que indican salidas distintas para la misma dirección.', 'Like two signs pointing to different exits for the same destination.'],
    ['Reglas distintas con igual descuento no son un conflicto; una alerta de IA tampoco confirma un error de política.', 'Different rules with equal discounts are not a conflict; an AI flag does not confirm a policy error either.']
  ], [
    ['La IA puede comparar salidas después de normalizar las condiciones.', 'AI can compare outputs after normalizing conditions.'],
    ['Marca contradicciones candidatas y muestra las reglas que comparó.', 'It flags candidate contradictions and shows which rules it compared.'],
    ['Concentra la revisión humana en discrepancias concretas.', 'It focuses human review on specific discrepancies.'],
    ['Revisar evidencia, equivalencia de condiciones y versión de política antes de confirmar el conflicto.', 'Review evidence, equivalence of conditions and policy version before confirming a conflict.']
  ], ['rule', 'action', 'coverage']);

  add('testcases', ['Casos de prueba', 'Test cases'], 'deepening', [
    ['Son entradas con resultados esperados que permiten comprobar la implementación de reglas.', 'Inputs paired with expected outcomes that allow rule implementation to be checked.'],
    ['Las ocho combinaciones y el límite 22/23 comprueban cobertura y el bono sin depender solo del dibujo.', 'The eight combinations and the 22/23 boundary check coverage and the bonus without relying solely on the drawing.'],
    ['¿La tabla, el árbol y la calculadora coinciden para la misma entrada?', 'Do the table, tree and calculator agree for the same input?'],
    ['El caso propone sí/no/sí → 10 %. Prueba ilustrativa de entrada inválida: edad vacía debe dejar el resultado sin calcular.', 'The case proposes yes/no/yes → 10%. Illustrative invalid-input test: an empty age must leave the result uncalculated.'],
    ['Como probar cada llave y comprobar que abre la salida indicada.', 'Like testing each key and checking that it opens the stated exit.'],
    ['Un perfil de prueba no confirma información de una persona real ni autoriza una regla nueva.', 'A test profile does not confirm a real person’s information or authorize a new rule.']
  ], [
    ['La IA puede derivar perfiles de las combinaciones ya documentadas.', 'AI can derive profiles from already documented combinations.'],
    ['Sugiere entradas, resultados esperados y pruebas del límite de edad.', 'It suggests inputs, expected outcomes and age-boundary tests.'],
    ['Reduce trabajo repetitivo al preparar comprobaciones de equivalencia.', 'It reduces repetitive work when preparing equivalence checks.'],
    ['Calcular expectativas desde las reglas originales; una prueba generada puede repetir el error de la implementación.', 'Calculate expectations from the original rules; a generated test can repeat an implementation error.']
  ], ['age', 'coverage', 'comparison']);

  add('comparison', ['Tabla y árbol: fortalezas y límites', 'Table and tree: strengths and limits'], 'foundation', [
    ['Son dos representaciones de las mismas condiciones, reglas y resultados.', 'They are two representations of the same conditions, rules and outcomes.'],
    ['La tabla favorece comparación compacta y cobertura; el árbol favorece secuencia visual y explicación de un camino.', 'The table favors compact comparison and coverage; the tree favors visual sequence and explanation of one path.'],
    ['¿Necesito comparar todas las reglas o explicar cómo se llega a un resultado?', 'Do I need to compare every rule or explain how an outcome is reached?'],
    ['R5 aparece como columna sí/sí/no y como camino curso sí → historial sí → edad ≥ 23 no; ambos dan 10 %.', 'R5 appears as a yes/yes/no column and as the path course yes → clean record yes → age ≥ 23 no; both give 10%.'],
    ['Como un horario y un mapa de ruta: permiten lecturas diferentes del mismo recorrido.', 'Like a timetable and a route map: they offer different readings of the same journey.'],
    ['La tabla crece con las combinaciones y es menos secuencial; el árbol crece en anchura o profundidad y puede repetir preguntas.', 'The table grows with combinations and is less sequential; the tree grows wider or deeper and can repeat questions.']
  ], [
    ['La IA puede contrastar ambas representaciones mediante entradas comunes.', 'AI can compare both representations using common inputs.'],
    ['Relaciona cada columna con su hoja y detecta resultados que no coinciden.', 'It links each column to its leaf and detects mismatched outcomes.'],
    ['Ayuda a revisar conversiones sin cambiar la decisión que se representa.', 'It helps review conversions without changing the represented decision.'],
    ['Comprobar las ocho correspondencias; un árbol atractivo no demuestra equivalencia.', 'Check all eight correspondences; an attractive tree does not prove equivalence.']
  ], ['table', 'tree', 'coverage']);

  const conditions = [
    { key: 'course', concept: id('course'), label: t('Curso de manejo seguro', 'Safe-driving course') },
    { key: 'clean', concept: id('clean'), label: t('Sin multas ni accidentes en 3 años', 'No tickets or accidents in 3 years') },
    { key: 'age23', concept: id('age'), label: t('Edad ≥ 23', 'Age ≥ 23') }
  ];
  const ruleOrder = ['000', '100', '010', '001', '110', '101', '011', '111'];
  const rules = ruleOrder.map((key, index) => {
    const values = Array.from(key, bit => bit === '1');
    const count = values.filter(Boolean).length;
    const bonus = count === 3 ? 5 : 0;
    const discount = count * 5 + bonus;
    const profileEs = 'curso ' + (values[0] ? 'sí' : 'no') + ', historial limpio de tres años ' + (values[1] ? 'sí' : 'no') + ', edad ≥ 23 ' + (values[2] ? 'sí' : 'no');
    const profileEn = 'course ' + (values[0] ? 'yes' : 'no') + ', three-year clean record ' + (values[1] ? 'yes' : 'no') + ', age ≥ 23 ' + (values[2] ? 'yes' : 'no');
    const r = 'R' + (index + 1);
    const name = 'rule_' + key;
    const actionName = 'action_' + key;
    add(name, [r + ' · Regla ' + key, r + ' · Rule ' + key], 'foundation', [
      ['Esta regla corresponde a ' + profileEs + ' y prescribe ' + discount + ' %.', 'This rule matches ' + profileEn + ' and prescribes ' + discount + '%.'],
      ['Conserva una combinación identificable de ' + count + ' criterios cumplidos; el bono es ' + bonus + ' %.', 'It retains an identifiable combination of ' + count + ' satisfied criteria; the bonus is ' + bonus + '%.'],
      ['¿Las tres respuestas del perfil coinciden con ' + key + ' antes de aplicar ' + r + '?', 'Do all three profile answers match ' + key + ' before applying ' + r + '?'],
      [profileEs + ': ' + count + ' × 5 % + ' + bonus + ' % = ' + discount + ' %.', profileEn + ': ' + count + ' × 5% + ' + bonus + '% = ' + discount + '%.'],
      ['Como la dirección ' + key + ' de un catálogo: lleva al resultado de ' + r + ', aunque otra dirección pueda tener el mismo porcentaje.', 'Like address ' + key + ' in a catalog: it leads to the outcome of ' + r + ', even if another address has the same percentage.'],
      [key === '111' ? 'R8 recibe 20 %, no 15 %: incluye el bono adicional de 5 %.' : 'Compartir un porcentaje con otra regla no permite borrar las respuestas que identifican ' + r + '.', key === '111' ? 'R8 receives 20%, not 15%: it includes the additional 5% bonus.' : 'Sharing a percentage with another rule does not allow the answers identifying ' + r + ' to be erased.']
    ], [
      ['La IA puede cotejar la combinación ' + key + ' entre tabla, árbol y política aportada.', 'AI can compare combination ' + key + ' across the table, tree and supplied policy.'],
      ['Comprueba que ' + r + ' tenga tres respuestas y una salida de ' + discount + ' %.', 'It checks that ' + r + ' has three answers and an output of ' + discount + '%.'],
      ['Facilita rastrear una discrepancia hasta esta combinación concreta.', 'It makes a discrepancy easier to trace to this specific combination.'],
      ['Verificar ' + count + ' criterios, bono ' + bonus + ' % y resultado ' + discount + ' %; una sugerencia no redefine ' + r + '.', 'Verify ' + count + ' criteria, a ' + bonus + '% bonus and a ' + discount + '% outcome; a suggestion does not redefine ' + r + '.']
    ], ['condition', actionName, 'coverage']);
    add(actionName, [r + ' · Resultado ' + discount + ' %', r + ' · Result ' + discount + '%'], 'foundation', [
      ['Es la hoja de ' + r + ': aplica ' + discount + ' % cuando se cumple ' + profileEs + '.', 'It is the leaf of ' + r + ': it applies ' + discount + '% when ' + profileEn + ' holds.'],
      ['Permite verificar por separado el resultado del camino ' + key + ' y la selección de su regla.', 'It allows the outcome of path ' + key + ' and the selection of its rule to be checked separately.'],
      ['¿La hoja de ' + r + ' coincide con los ' + discount + ' % indicados en su columna?', 'Does the leaf of ' + r + ' match the ' + discount + '% shown in its column?'],
      ['Aporte de criterios: ' + count * 5 + ' %. Bono: ' + bonus + ' %. Descuento: ' + discount + ' %.', 'Criterion contribution: ' + count * 5 + '%. Bonus: ' + bonus + '%. Discount: ' + discount + '%.'],
      ['Como el recibo del recorrido ' + key + ': muestra el total y permite revisar cómo se obtuvo.', 'Like a receipt for path ' + key + ': it shows the total and allows its calculation to be reviewed.'],
      ['Esta hoja es un porcentaje del caso, no un precio de seguro ni evidencia de que el perfil real cumple los criterios.', 'This leaf is a case percentage, not an insurance price or evidence that a real profile meets the criteria.']
    ], [
      ['La IA puede comparar la salida de la hoja ' + key + ' con la regla ' + r + '.', 'AI can compare the output of leaf ' + key + ' with rule ' + r + '.'],
      ['Recalcula ' + count * 5 + ' + ' + bonus + ' y señala si no obtiene ' + discount + ' %.', 'It recalculates ' + count * 5 + ' + ' + bonus + ' and flags an outcome other than ' + discount + '%.'],
      ['Hace revisable el total de esta hoja al cambiar entre tabla y árbol.', 'It makes this leaf’s total reviewable when switching between table and tree.'],
      ['Contrastar el cálculo con el caso aportado; aceptar la explicación solo si justifica los ' + discount + ' %.', 'Check the calculation against the supplied case; accept the explanation only if it justifies ' + discount + '%.']
    ], [name, 'action', 'bonus']);
    return { id: id(name), actionId: id(actionName), key, number: index + 1,
      criteria: { course: values[0], clean: values[1], age23: values[2] }, count,
      criterionDiscount: count * 5, bonusDiscount: bonus, discount };
  });

  add('ai', ['IA para revisar reglas', 'AI for reviewing rules'], 'ai', [
    ['Extensión IA: asistencia para representar y comprobar las reglas aportadas de College Driver.', 'AI extension: assistance with representing and checking the supplied College Driver rules.'],
    ['Organiza condiciones, cobertura y pruebas en un proceso de revisión con responsabilidad humana.', 'Organizes conditions, coverage and tests into a review process with human responsibility.'],
    ['¿Cómo puede la IA ayudarnos a revisar reglas de decisión sin inventar políticas?', 'How can AI help us review decision rules without inventing policies?'],
    ['La IA puede comprobar que la combinación sí/sí/sí conserve 20 % en tabla y árbol.', 'AI can check that yes/yes/yes retains 20% in both table and tree.'],
    ['Como un asistente de revisión que resalta diferencias para quien tiene autoridad de decidir.', 'Like a review assistant highlighting differences for the person authorized to decide.'],
    ['Estas conexiones son una extensión IA; no se atribuyen al curso. La IA no establece políticas de seguros.', 'These connections are an AI extension; they are not attributed to the course. AI does not establish insurance policy.']
  ], [
    ['Conecta siete tareas de asistencia con conceptos de la decisión ya documentada.', 'It connects seven assistance tasks to concepts in the documented decision.'],
    ['Extrae condiciones, genera combinaciones, revisa cobertura y conflictos, y propone representaciones y pruebas.', 'It extracts conditions, generates combinations, reviews coverage and conflicts, and proposes representations and tests.'],
    ['Reduce trabajo de borrador y hace visibles puntos que requieren revisión.', 'It reduces drafting work and exposes points needing review.'],
    ['La evidencia del negocio y el analista validan cualquier resultado antes de aceptarlo.', 'Business evidence and the analyst validate every result before acceptance.']
  ], ['condition', 'rule', 'coverage', 'conflicts', 'table', 'tree', 'testcases']);

  const relationships = [
    ['conditions', 'condition', ['Extraer condiciones', 'Extract conditions'],
      ['Conservar curso, historial de tres años y edad ≥ 23.', 'Preserve the course, the three-year record and age ≥ 23.'],
      ['Convierte en preguntas binarias los criterios presentes en el texto aportado.', 'Turns criteria present in the supplied text into binary questions.'],
      ['Evita omitir el período del historial o cambiar el operador de edad.', 'Helps avoid omitting the record period or changing the age operator.'],
      ['¿Las preguntas extraídas conservan exactamente los tres criterios?', 'Do the extracted questions preserve exactly the three criteria?'],
      ['La extracción de C3 debe producir edad ≥ 23, no edad > 23.', 'Extracting C3 must produce age ≥ 23, not age > 23.'],
      ['Como subrayar cláusulas relevantes antes de construir una lista.', 'Like highlighting relevant clauses before building a list.'],
      ['Extraer no permite añadir proveedor del curso ni otra condición de elegibilidad.', 'Extraction does not permit adding a course provider or another eligibility condition.'],
      ['Comparar cada condición con su frase original, incluidos período y umbral.', 'Compare each condition with its original statement, including period and threshold.']],
    ['combinations', 'rule', ['Generar combinaciones', 'Generate combinations'],
      ['Enumerar ocho patrones distintos sin añadir políticas.', 'Enumerate eight distinct patterns without adding policies.'],
      ['Construye el producto de los valores sí/no de las tres condiciones documentadas.', 'Builds the product of yes/no values for the three documented conditions.'],
      ['Hace explícitos los perfiles que deben tener una acción definida.', 'Makes explicit which profiles need a defined action.'],
      ['¿Hay ocho patrones únicos con tres respuestas cada uno?', 'Are there eight unique patterns with three answers each?'],
      ['000, 100, 010, 001, 110, 101, 011 y 111 forman el conjunto del caso.', '000, 100, 010, 001, 110, 101, 011 and 111 form the case set.'],
      ['Como combinar tres interruptores y registrar cada posición posible.', 'Like combining three switches and recording every possible configuration.'],
      ['Generar combinaciones no determina por sí solo sus descuentos.', 'Generating combinations does not by itself determine their discounts.'],
      ['Comprobar unicidad, orden y aplicación de los porcentajes de la política aportada.', 'Check uniqueness, order and application of the supplied policy percentages.']],
    ['coverage', 'coverage', ['Comprobar cobertura', 'Check coverage'],
      ['Señalar patrones sin resultado para revisión del analista.', 'Flag patterns without an outcome for analyst review.'],
      ['Compara las combinaciones esperadas con las reglas realmente representadas.', 'Compares expected combinations with the rules actually represented.'],
      ['Ayuda a encontrar huecos incluso cuando el número total de filas parece correcto.', 'Helps find gaps even when the total row count appears correct.'],
      ['¿Cada patrón esperado tiene una y solo una regla en este modelo?', 'Does each expected pattern have exactly one rule in this model?'],
      ['Ejemplo ilustrativo: si falta 011, debe señalarse una posible regla faltante aunque otra esté duplicada.', 'Illustrative example: if 011 is absent, flag a possible missing rule even if another is duplicated.'],
      ['Como cotejar una lista de asistencia por nombres, no solo contar personas.', 'Like checking attendance by name rather than just counting people.'],
      ['Ocho reglas contadas no prueban cobertura si dos repiten la misma combinación.', 'Counting eight rules does not prove coverage if two repeat the same combination.'],
      ['Revisar el conjunto de claves y confirmar cada ausencia antes de cambiar el modelo.', 'Review the key set and confirm every omission before changing the model.']],
    ['conflicts', 'conflicts', ['Detectar conflictos', 'Detect conflicts'],
      ['Mostrar contradicciones candidatas con sus reglas comparadas.', 'Show candidate contradictions with the compared rules.'],
      ['Busca salidas incompatibles para condiciones equivalentes.', 'Looks for incompatible outputs for equivalent conditions.'],
      ['Facilita localizar una discrepancia que podría provenir de una conversión incorrecta.', 'Makes it easier to locate a discrepancy that may come from an incorrect conversion.'],
      ['¿La aparente contradicción compara realmente la misma combinación?', 'Does the apparent contradiction really compare the same combination?'],
      ['Ejemplo ilustrativo: un borrador asigna 15 % a 111; se contrasta con los 20 % del caso.', 'Illustrative example: a draft assigns 15% to 111; it is compared with the case’s 20%.'],
      ['Como un revisor que coloca dos afirmaciones incompatibles una junto a otra.', 'Like a reviewer placing two incompatible statements side by side.'],
      ['Una alerta de IA no es un error de política confirmado; descuentos iguales en perfiles distintos son válidos.', 'An AI flag is not a confirmed policy error; equal discounts for different profiles are valid.'],
      ['Confirmar equivalencia de condiciones y fuente autorizada antes de resolver la discrepancia.', 'Confirm equivalence of conditions and the authorized source before resolving the discrepancy.']],
    ['table', 'table', ['Borrador de tabla', 'Draft table'],
      ['Organizar condiciones y acciones en ocho columnas revisables.', 'Organize conditions and actions into eight reviewable columns.'],
      ['Presenta cada combinación como una regla con sus respuestas y su descuento.', 'Presents each combination as a rule with its answers and discount.'],
      ['Permite revisar cobertura y comparar porcentajes de forma compacta.', 'Enables coverage review and compact comparison of percentages.'],
      ['¿El borrador conserva las ocho columnas y la excepción de R8?', 'Does the draft retain all eight columns and the R8 exception?'],
      ['R8 debe mostrar sí/sí/sí y 20 %; R5 debe mostrar sí/sí/no y 10 %.', 'R8 must show yes/yes/yes and 20%; R5 must show yes/yes/no and 10%.'],
      ['Como preparar una hoja de consulta que otra persona debe cotejar.', 'Like preparing a reference sheet that someone else must check.'],
      ['Una tabla bien formateada no garantiza que las celdas expresen la política correcta.', 'A well-formatted table does not guarantee that its cells express the correct policy.'],
      ['Comprobar cada columna y evitar fusionar combinaciones solo porque comparten porcentaje.', 'Check every column and avoid merging combinations merely because they share a percentage.']],
    ['tree', 'tree', ['Borrador de árbol', 'Draft tree'],
      ['Vincular cada camino a la misma regla de la tabla.', 'Link each path to the same rule as the table.'],
      ['Propone una ramificación sucesiva de curso, historial y edad con ocho hojas.', 'Proposes successive branches for course, record and age with eight leaves.'],
      ['Facilita explicar qué condición conduce al siguiente paso de un perfil.', 'Makes it easier to explain which condition leads to the next step for a profile.'],
      ['¿Cada hoja corresponde a una columna y mantiene su resultado?', 'Does each leaf correspond to a column and retain its outcome?'],
      ['El camino sí → sí → no debe llegar a R5 y 10 %, igual que la tabla.', 'The yes → yes → no path must reach R5 and 10%, just like the table.'],
      ['Como dibujar rutas distintas usando las mismas direcciones de un catálogo.', 'Like drawing distinct routes using the same addresses from a catalog.'],
      ['El orden visual de las preguntas no puede introducir prioridades ni modificar descuentos.', 'The visual question order must not introduce priorities or change discounts.'],
      ['Recorrer los ocho caminos y cotejar regla y resultado con el modelo compartido.', 'Walk all eight paths and compare their rule and outcome with the shared model.']],
    ['tests', 'testcases', ['Generar casos de prueba', 'Generate test cases'],
      ['Preparar perfiles y expectativas contrastables con las reglas.', 'Prepare profiles and expectations that can be checked against the rules.'],
      ['Deriva un perfil por combinación y agrega candidatos para probar límites de entrada.', 'Derives one profile per combination and adds candidates for input-boundary testing.'],
      ['Ayuda a revisar equivalencia entre representaciones y detectar errores en el umbral.', 'Helps review equivalence between representations and detect threshold errors.'],
      ['¿Las expectativas se calcularon desde la política y no desde un borrador posiblemente incorrecto?', 'Were expectations calculated from policy rather than a possibly incorrect draft?'],
      ['Sí/sí/22 → 10 % y sí/sí/23 → 20 %. Entrada vacía: prueba ilustrativa de validación de interfaz.', 'Yes/yes/22 → 10% and yes/yes/23 → 20%. Empty input: an illustrative interface-validation test.'],
      ['Como preparar una lista de comprobación con respuestas conocidas antes de ensayar.', 'Like preparing a checklist with known answers before a trial.'],
      ['Una prueba sugerida no crea una condición comercial; la validación de interfaz no establece elegibilidad.', 'A suggested test does not create a business condition; interface validation does not establish eligibility.'],
      ['Validar las ocho expectativas, 22/23, entradas inválidas y conservación del perfil al cambiar de vista.', 'Validate all eight expectations, 22/23, invalid inputs and profile preservation when switching views.']]
  ].map(item => {
    const [name, target, label, value, what, why, question, example, analogy, notConfuse, validate] = item;
    const detail = add('ai_' + name, label, 'ai', [
      ['Extensión IA: ' + what[0], 'AI extension: ' + what[1]], why, question, example, analogy, notConfuse
    ], [
      ['Conecta la asistencia IA con ' + atlas.concepts[id(target)].label.es.toLowerCase() + '.', 'Connects AI assistance to ' + atlas.concepts[id(target)].label.en.toLowerCase() + '.'],
      what, value, validate
    ], ['ai', target]);
    return { id: id('relationship_' + name), from: id('ai'), to: id(target), action: t(...label), concept: detail, value: t(...value) };
  });

  function buildTree(prefix) {
    if (prefix.length === 3) return { key: prefix, ruleId: rules.find(rule => rule.key === prefix).id,
      actionId: id('action_' + prefix), leaf: true };
    return { prefix, conditionId: conditions[prefix.length].concept, conditionKey: conditions[prefix.length].key,
      yes: buildTree(prefix + '1'), no: buildTree(prefix + '0'), leaf: false };
  }
  function freeze(value) {
    Object.values(value).forEach(child => { if (child && typeof child === 'object') freeze(child); });
    return Object.freeze(value);
  }
  const model = freeze({ id: id('decision_model'), conditions, rules, tree: buildTree(''),
    defaultProfile: { course: true, clean: true, age: 22 },
    inputValidation: { minimumAge: 0, maximumAge: 120, integerAge: true,
      note: t('Rango del ejercicio; no define elegibilidad del seguro.', 'Exercise range; it does not define insurance eligibility.') } });
  atlas.models[model.id] = model;

  // Public QA API: evaluate({course:boolean, clean:boolean, age:number|string}).
  // Returns {valid, errors, key, ruleId, actionId, discount, ...}; invalid inputs
  // return null identifiers/discount. Age must be an integer in the UI range 0..120.
  // The frozen model is shared by the calculator, complete table and binary tree.
  function evaluate(profile) {
    const input = profile && typeof profile === 'object' ? profile : {};
    const errors = [];
    ['course', 'clean'].forEach(field => {
      if (typeof input[field] !== 'boolean') errors.push({ field, code: 'boolean_required' });
    });
    const rawAge = input.age;
    const numeric = typeof rawAge === 'number' || (typeof rawAge === 'string' && /^[+-]?\d+(?:\.\d+)?$/.test(rawAge.trim()));
    const age = numeric ? Number(rawAge) : NaN;
    if (!Number.isFinite(age) || !Number.isInteger(age) || age < 0 || age > 120) {
      errors.push({ field: 'age', code: 'integer_0_120_required' });
    }
    if (errors.length) return { valid: false, errors, key: null, ruleId: null, actionId: null,
      discount: null, criteria: null, count: null, criterionDiscount: null, bonusDiscount: null };
    const criteria = { course: input.course, clean: input.clean, age23: age >= 23 };
    const key = [criteria.course, criteria.clean, criteria.age23].map(value => value ? '1' : '0').join('');
    const rule = model.rules.find(candidate => candidate.key === key);
    return { valid: true, errors: [], age, criteria, key, ruleId: rule.id, actionId: rule.actionId,
      discount: rule.discount, count: rule.count, criterionDiscount: rule.criterionDiscount, bonusDiscount: rule.bonusDiscount };
  }
  const metadata = freeze({
    diagramId: '07',
    rootSelector: '.w3r',
    calculator: {
      method: 'window.CST212W3Decision.evaluate',
      input: { course: 'boolean', clean: 'boolean', age: 'integer number or numeric string, 0..120' },
      successFields: ['valid', 'age', 'criteria', 'key', 'ruleId', 'actionId', 'discount', 'count', 'criterionDiscount', 'bonusDiscount'],
      invalidFields: { valid: false, discount: null, ruleId: null, actionId: null },
      errors: ['boolean_required', 'integer_0_120_required'],
      defaultProfile: model.defaultProfile,
      boundaryExamples: [{ age: 22, course: true, clean: true, discount: 10 }, { age: 23, course: true, clean: true, discount: 20 }]
    },
    controls: {
      course: '[data-w3r-input="course"]',
      clean: '[data-w3r-input="clean"]',
      age: '[data-w3r-input="age"]',
      age22: '[data-w3r-age="22"]',
      age23: '[data-w3r-age="23"]',
      table: '[data-w3r-representation="table"]',
      tree: '[data-w3r-representation="tree"]',
      booleanValues: { yes: true, no: false }
    },
    panels: { table: '[data-w3r-panel="table"]', tree: '[data-w3r-panel="tree"]' },
    outputSelector: '.w3r-output',
    matchedRuleSelector: '[data-w3r-key].w3r-match',
    matchedBranchSelector: '[data-w3r-prefix].w3r-match',
    conceptSelector: '[data-w3-detail]',
    representationStateAttribute: 'aria-pressed',
    lens: { owner: 'main', attribute: 'data-lens', aiClass: 'is-ai', event: 'w3:lenschange', detail: '{lens}', rerendersExample: false },
    supportCallsPerRender: 1,
    eventScope: 'figure',
    cleanup: 'The function returned by CST212W3Views[07].bind removes its input, change and click listeners.'
  });
  global.CST212W3Decision = Object.assign(global.CST212W3Decision || {}, { evaluate, model, metadata });
  atlas.diagrams['07'] = {
    id: '07', kind: 'decision', title: t('Tabla de decisión y árbol de decisión', 'Decision table and decision tree'),
    question: t('¿Cómo representamos decisiones con varias reglas?', 'How do we represent decisions with multiple rules?'),
    statement: t('Mismas reglas. Diferente representación.', 'Same rules. Different representation.'),
    definition: t('Tres condiciones binarias producen ocho combinaciones. College Driver asigna 5 % por criterio y 5 % adicional si se cumplen los tres.', 'Three binary conditions produce eight combinations. College Driver assigns 5% per criterion and an extra 5% when all three are met.'),
    transition: t('Relaciona cada condición con su regla y cada regla con su resultado para validar la lógica del sistema.', 'Connect each condition to its rule and each rule to its outcome to validate system logic.'),
    root: id('decision'), model: model.id,
    nodes: ['condition', 'rule', 'action', 'table', 'tree', 'coverage', 'conflicts', 'testcases', 'bonus'].map(id),
    aiNode: id('ai'),
    aiQuestion: t('¿Cómo puede la IA ayudarnos a revisar reglas de decisión sin inventar políticas?', 'How can AI help us review decision rules without inventing policies?'),
    aiMessage: t('La IA puede ayudar a representar y comprobar reglas. No debe inventar las reglas del negocio ni establecer políticas de seguros.', 'AI can help represent and check rules. It must not invent business rules or establish insurance policy.'),
    aiFlow: ['decision', 'ai', 'table', 'tree', 'testcases', 'coverage'].map(id),
    aiRelationships: relationships
  };
})(window);
