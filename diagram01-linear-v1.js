(function installDiagram01LinearModel() {
  "use strict";

  var ROOT = "#week-1";
  var details = {
    system: ["SISTEMA", "COURSE / ACADEMIC FOUNDATION", [
      ["QUÉ ES", "Un conjunto de elementos relacionados que interactúan para lograr un propósito."],
      ["POR QUÉ IMPORTA", "Porque cambiar una parte puede afectar a otras. Analizar un sistema significa comprender tanto sus componentes como sus relaciones."],
      ["METÁFORA", "Una orquesta: un violín no es la orquesta. El resultado aparece cuando músicos, instrumentos, partitura y dirección trabajan juntos."],
      ["PREGUNTA GUÍA", "¿Qué elementos participan y qué propósito intentan lograr juntos?"],
      ["IDEA CLAVE", "Las partes importan. Las relaciones también.", "key"]
    ]],
    purpose: ["PROPÓSITO", "COURSE / ACADEMIC FOUNDATION", [
      ["QUÉ ES", "El resultado o finalidad que da sentido a la interacción entre los componentes."],
      ["PREGUNTA GUÍA", "¿Para qué existe este sistema?"],
      ["EJEMPLO DE NEGOCIO", "Para un sistema de reservas: asignar correctamente recursos disponibles a clientes en determinados momentos."],
      ["METÁFORA", "El destino de un viaje. Sin un destino, podemos tener automóvil, conductor y combustible, pero no sabemos cómo organizar el recorrido."]
    ]],
    people: ["PERSONAS", "COURSE / ACADEMIC FOUNDATION", [
      ["QUÉ ES", "Quienes participan, utilizan, administran, toman decisiones o reciben resultados del sistema."],
      ["PREGUNTA GUÍA", "¿Quién participa y quién es afectado?"],
      ["EJEMPLOS", "Negocios: cliente, empleado, gerente y proveedor. Educación: estudiantes, docentes, coordinadores y familias."],
      ["METÁFORA", "Los actores de una obra."]
    ]],
    processes: ["PROCESOS", "COURSE / ACADEMIC FOUNDATION", [
      ["QUÉ ES", "Actividades relacionadas que transforman entradas en resultados."],
      ["PREGUNTA GUÍA", "¿Qué trabajo ocurre y en qué secuencia?"],
      ["EJEMPLO", "Solicitud → verificación → decisión → resultado."],
      ["METÁFORA", "Una receta: importan los elementos, pero también qué hacemos con ellos y en qué orden."]
    ]],
    information: ["INFORMACIÓN", "COURSE / ACADEMIC FOUNDATION", [
      ["QUÉ ES", "Datos que adquieren significado y permiten operar, comunicar o tomar decisiones."],
      ["PREGUNTA GUÍA", "¿Qué necesita saber el sistema?"],
      ["EJEMPLO", "Una fecha aislada es un dato. Kayak disponible el 15 de septiembre es información útil para tomar una decisión."],
      ["METÁFORA", "La memoria compartida del sistema."]
    ]],
    rules: ["REGLAS", "COURSE / ACADEMIC FOUNDATION", [
      ["QUÉ ES", "Condiciones que orientan o limitan el comportamiento y las decisiones del sistema."],
      ["PREGUNTA GUÍA", "¿Qué está permitido, requerido o prohibido?"],
      ["EJEMPLO", "Un kayak no puede reservarse dos veces en el mismo horario."],
      ["METÁFORA", "Las reglas de tránsito: permiten que múltiples elementos interactúen sin caos."]
    ]],
    resources: ["RECURSOS", "COURSE / ACADEMIC FOUNDATION", [
      ["QUÉ ES", "Medios que el sistema utiliza para funcionar."],
      ["CATEGORÍAS POSIBLES", "Humanos, físicos, financieros, informativos y tecnológicos."],
      ["PREGUNTA GUÍA", "¿Qué necesita el sistema para operar?"]
    ]],
    technology: ["TECNOLOGÍA", "COURSE / ACADEMIC FOUNDATION", [
      ["QUÉ ES", "Herramientas técnicas que apoyan determinadas funciones del sistema."],
      ["PUEDE INCLUIR", "Hardware, software, redes, automatización e inteligencia artificial."],
      ["PREGUNTA GUÍA", "¿Qué tecnología apoya el propósito del sistema?"],
      ["IDEA CLAVE", "La tecnología puede formar parte del sistema. No es necesariamente el sistema completo.", "key"]
    ]],
    ai: ["INTELIGENCIA ARTIFICIAL", "AI-FIRST EXTENSION", [
      ["QUÉ ES EN ESTE MODELO", "Una capacidad tecnológica que puede analizar información, reconocer patrones, generar resultados, recomendar acciones o ejecutar tareas acotadas."],
      ["POR QUÉ IMPORTA", "Puede cambiar la capacidad del sistema y también modificar cómo interactúan personas, procesos, información y reglas."],
      ["DISTINCIÓN CLAVE", "IA ≠ SISTEMA. La IA es un componente o capacidad dentro de un sistema mayor.", "key"]
    ]],
    aiInformation: ["IA + INFORMACIÓN", "AI-FIRST EXTENSION · ANALIZAR", [
      ["QUÉ SIGNIFICA", "La IA puede analizar grandes cantidades de información para encontrar patrones, clasificar contenidos, resumir datos o detectar anomalías."],
      ["EJEMPLO", "Un sistema puede analizar miles de comentarios de clientes y agrupar los problemas que aparecen con mayor frecuencia."],
      ["VALOR", "Escala, velocidad, detección de patrones y síntesis."],
      ["IDEA IMPORTANTE", "La IA puede detectar patrones. El contexto humano ayuda a determinar qué significan.", "key"]
    ]],
    aiProcesses: ["IA + PROCESOS", "AI-FIRST EXTENSION · ASISTIR / AUTOMATIZAR", [
      ["QUÉ SIGNIFICA", "La IA puede asistir o automatizar partes específicas de un proceso, especialmente tareas repetitivas, clasificación, generación de recomendaciones o procesamiento de información."],
      ["EJEMPLO", "Solicitud → clasificación con IA → flujo de trabajo correcto."],
      ["VALOR", "Velocidad, consistencia y escalabilidad."],
      ["IDEA IMPORTANTE", "Automatizar un proceso deficiente no lo convierte en un buen proceso. NO AUTOMATICES LA CONFUSIÓN.", "key"]
    ]],
    aiPeople: ["IA + PERSONAS", "AI-FIRST EXTENSION · AMPLIAR CAPACIDAD", [
      ["QUÉ SIGNIFICA", "La IA puede ampliar la capacidad de las personas para investigar, comparar, resumir y producir alternativas."],
      ["EJEMPLO", "100 entrevistas → síntesis con IA → temas recurrentes → validación del analista."],
      ["IDEA IMPORTANTE", "Ampliar capacidad no significa transferir responsabilidad.", "key"]
    ]],
    aiRules: ["REGLAS + IA", "AI-FIRST EXTENSION · GOBERNAR", [
      ["QUÉ SIGNIFICA", "La IA debe operar dentro de límites definidos por el sistema."],
      ["PREGUNTAS DE GOBERNANZA", "¿Qué puede hacer la IA? ¿Qué no puede hacer? ¿Qué datos puede utilizar? ¿Cuándo se requiere revisión humana? ¿Qué ocurre cuando la confianza es baja?"],
      ["IDEA CLAVE", "LA IA TIENE CAPACIDADES. EL SISTEMA DEFINE LOS LÍMITES.", "key"]
    ]]
  };

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
    });
  }

  function node(key, label, meta, className) {
    return '<button class="d1l-node ' + className + '" type="button" data-d1l-detail="' + key + '">' +
      '<b>' + escapeHtml(label) + '</b><span>' + escapeHtml(meta) + '</span></button>';
  }

  function markup() {
    return '<div class="d1l-shell">' +
      '<div class="d1l-definition"><strong>Un sistema es un conjunto de elementos relacionados que interactúan para lograr un propósito.</strong><span>No basta con mirar cada parte por separado. Para comprender un sistema debemos observar sus componentes, sus relaciones y el propósito que los conecta.</span></div>' +
      '<div class="d1l-map" aria-label="Modelo lineal de un sistema y su extensión con inteligencia artificial">' +
        '<button class="d1l-node d1l-system" type="button" data-d1l-detail="system"><small>COURSE / ACADEMIC FOUNDATION</small><strong>SISTEMA</strong><span>COMPONENTES + RELACIONES + PROPÓSITO</span></button>' +
        '<div class="d1l-system-link" aria-hidden="true"></div>' +
        '<div class="d1l-components" aria-label="Componentes del sistema">' +
          node("purpose", "Propósito", "¿PARA QUÉ EXISTE?", "d1l-component") +
          node("people", "Personas", "¿QUIÉN PARTICIPA?", "d1l-component") +
          node("processes", "Procesos", "¿QUÉ TRABAJO OCURRE?", "d1l-component") +
          node("information", "Información", "¿QUÉ NECESITA SABER?", "d1l-component") +
          node("rules", "Reglas", "¿QUÉ ESTÁ PERMITIDO?", "d1l-component") +
          node("resources", "Recursos", "¿QUÉ NECESITA?", "d1l-component") +
          node("technology", "Tecnología", "¿QUÉ TECNOLOGÍA APOYA?", "d1l-component d1l-technology") +
        '</div>' +
        '<div class="d1l-tech-bridge" aria-hidden="true"><span>CAPACIDAD POSIBLE</span></div>' +
        '<button class="d1l-node d1l-ai" type="button" data-d1l-detail="ai"><small>AI-FIRST EXTENSION</small><strong>INTELIGENCIA ARTIFICIAL</strong><span>CAPACIDAD TECNOLÓGICA DEL SISTEMA</span></button>' +
        '<div class="d1l-ai-fanout" aria-hidden="true"></div>' +
        '<div class="d1l-impacts" aria-label="Conexiones de inteligencia artificial">' +
          node("aiInformation", "Información aumentada", "ANALIZAR", "d1l-impact") +
          node("aiProcesses", "Procesos asistidos", "ASISTIR / AUTOMATIZAR", "d1l-impact") +
          node("aiPeople", "Personas ampliadas", "AMPLIAR CAPACIDAD", "d1l-impact") +
          node("aiRules", "IA gobernada", "REGLAS → IA", "d1l-impact") +
        '</div>' +
      '</div>' +
      '<div class="d1l-state" aria-live="polite">' +
        '<p data-state="base">El sistema es el conjunto conectado. La tecnología forma parte de él, pero no necesariamente es el todo.</p>' +
        '<p data-state="ai">La IA puede conectarse a distintas partes del sistema para ampliar capacidades, analizar información y transformar procesos, siempre dentro de su propósito y sus reglas.</p>' +
      '</div>' +
    '</div>';
  }

  function ensureModal() {
    if (document.querySelector(".d1l-modal")) return;
    document.body.insertAdjacentHTML("beforeend",
      '<button class="d1l-backdrop" type="button" aria-label="Cerrar detalle" hidden></button>' +
      '<aside class="d1l-modal" role="dialog" aria-modal="true" aria-labelledby="d1lModalTitle" hidden>' +
        '<button class="d1l-modal-close" type="button" aria-label="Cerrar">×</button>' +
        '<div class="d1l-modal-content"></div>' +
      '</aside>'
    );
  }

  function sectionMarkup(section) {
    return '<section' + (section[2] === "key" ? ' class="is-key"' : "") + '><b>' + escapeHtml(section[0]) + '</b><p>' + escapeHtml(section[1]) + '</p></section>';
  }

  function openModal(key) {
    var item = details[key];
    if (!item) return;
    ensureModal();
    var modal = document.querySelector(".d1l-modal");
    modal.querySelector(".d1l-modal-content").innerHTML =
      '<header><small>' + escapeHtml(item[1]) + '</small><h2 id="d1lModalTitle">' + escapeHtml(item[0]) + '</h2></header>' +
      '<div class="d1l-modal-grid">' + item[2].map(sectionMarkup).join("") + '</div>';
    modal.hidden = false;
    document.querySelector(".d1l-backdrop").hidden = false;
    document.body.classList.add("d1l-modal-open");
    modal.querySelector(".d1l-modal-close").focus();
  }

  function closeModal() {
    var modal = document.querySelector(".d1l-modal");
    var backdrop = document.querySelector(".d1l-backdrop");
    if (modal) modal.hidden = true;
    if (backdrop) backdrop.hidden = true;
    document.body.classList.remove("d1l-modal-open");
  }

  function currentAiState(root) {
    var active = Array.prototype.find.call(root.querySelectorAll(".w1f-lens-toggle button"), function (button) {
      return button.getAttribute("aria-pressed") === "true" || button.classList.contains("is-active");
    });
    if (active) return /CAPA IA|AI LENS/i.test(active.textContent);
    return root.classList.contains("is-ai-lens");
  }

  function setAiState(root, enabled) {
    root.classList.toggle("d1l-ai-active", enabled);
  }

  function mount() {
    var root = document.querySelector(ROOT);
    var stage = root && root.querySelector(".d1c-stage, .d1-stage, .d1l-stage");
    if (!root || !stage) return;
    if (!stage.classList.contains("d1l-stage") || !stage.querySelector(".d1l-shell")) {
      stage.className = "diagram-stage d1l-stage";
      stage.innerHTML = markup();
    }
    ensureModal();
    setAiState(root, currentAiState(root));
  }

  function handleClick(event) {
    var detailButton = event.target.closest("[data-d1l-detail]");
    var closeButton = event.target.closest(".d1l-modal-close, .d1l-backdrop");
    var modal = event.target.closest(".d1l-modal");
    var lensButton = event.target.closest(ROOT + " .w1f-lens-toggle button");

    if (detailButton) {
      event.preventDefault();
      event.stopImmediatePropagation();
      openModal(detailButton.dataset.d1lDetail);
      return;
    }

    if (closeButton) {
      event.preventDefault();
      event.stopImmediatePropagation();
      closeModal();
      return;
    }

    if (modal) {
      event.stopImmediatePropagation();
      return;
    }

    if (lensButton) {
      window.setTimeout(function () {
        var root = document.querySelector(ROOT);
        if (root) setAiState(root, /CAPA IA|AI LENS/i.test(lensButton.textContent));
      }, 0);
    }
  }

  document.addEventListener("click", handleClick, true);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && document.querySelector(".d1l-modal:not([hidden])")) closeModal();
  });

  var scheduled = false;
  function scheduleMount() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(function () {
      scheduled = false;
      mount();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", scheduleMount, { once: true });
  else scheduleMount();

  new MutationObserver(function (mutations) {
    var needsMount = mutations.some(function (mutation) {
      return mutation.target.closest && !mutation.target.closest(".d1l-modal, .d1l-backdrop, .d1l-stage");
    });
    if (needsMount) scheduleMount();
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
