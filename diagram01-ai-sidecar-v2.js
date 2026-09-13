(function installDiagram01AiSidecar() {
  "use strict";

  var ROOT_SELECTOR = "#week-1";
  var relationOrder = ["information", "processes", "people", "governance"];
  var nodeSelectors = {
    information: ".d1c-information, .d1-information",
    processes: ".d1c-processes, .d1-processes",
    people: ".d1c-people, .d1-people",
    governance: ".d1c-rules, .d1-rules"
  };

  var content = {
    ai: {
      title: "INTELIGENCIA ARTIFICIAL",
      english: "AI CAPABILITY",
      sections: [
        ["QUÉ ES EN ESTE MODELO", "Una capacidad tecnológica que puede analizar información, reconocer patrones, generar resultados, recomendar acciones o ejecutar tareas acotadas."],
        ["POR QUÉ IMPORTA", "Puede cambiar la capacidad del sistema y también modificar cómo interactúan personas, procesos, información y reglas."],
        ["DISTINCIÓN CLAVE", "IA ≠ SISTEMA. La IA es un componente o una capacidad dentro de un sistema mayor.", "key"]
      ]
    },
    information: {
      title: "IA + INFORMACIÓN",
      english: "AI + INFORMATION",
      sections: [
        ["QUÉ SIGNIFICA", "La IA puede analizar grandes cantidades de información para encontrar patrones, clasificar contenidos, resumir datos o detectar anomalías."],
        ["EJEMPLO", "Un sistema puede analizar miles de comentarios de clientes y agrupar los problemas que aparecen con mayor frecuencia."],
        ["VALOR", ["Escala", "Velocidad", "Detección de patrones", "Síntesis"]],
        ["IDEA IMPORTANTE", "La IA puede detectar patrones. El contexto humano ayuda a determinar qué significan.", "key"]
      ]
    },
    processes: {
      title: "IA + PROCESOS",
      english: "AI + PROCESSES",
      sections: [
        ["QUÉ SIGNIFICA", "La IA puede asistir o automatizar partes específicas de un proceso, especialmente tareas repetitivas, clasificación, generación de recomendaciones o procesamiento de información."],
        ["EJEMPLO", "Solicitud → clasificación con IA → flujo de trabajo correcto."],
        ["VALOR", ["Velocidad", "Consistencia", "Escalabilidad"]],
        ["IDEA IMPORTANTE", "Automatizar un proceso deficiente no lo convierte en un buen proceso. NO AUTOMATICES LA CONFUSIÓN.", "key"]
      ]
    },
    people: {
      title: "IA + PERSONAS",
      english: "AI + PEOPLE",
      sections: [
        ["QUÉ SIGNIFICA", "La IA puede ampliar la capacidad de las personas para investigar, comparar, resumir y producir alternativas."],
        ["EJEMPLO", "100 entrevistas → síntesis con IA → temas recurrentes → validación del analista."],
        ["IDEA IMPORTANTE", "Ampliar capacidad no significa transferir responsabilidad.", "key"]
      ]
    },
    governance: {
      title: "REGLAS + IA",
      english: "RULES + AI",
      sections: [
        ["QUÉ SIGNIFICA", "La IA debe operar dentro de límites definidos por el sistema."],
        ["PREGUNTAS DE GOBERNANZA", ["¿Qué puede hacer la IA?", "¿Qué no puede hacer?", "¿Qué datos puede utilizar?", "¿Cuándo se requiere revisión humana?", "¿Qué ocurre cuando la confianza es baja?"]],
        ["IDEA CLAVE", "LA IA TIENE CAPACIDADES. EL SISTEMA DEFINE LOS LÍMITES.", "key"]
      ]
    }
  };

  function htmlEscape(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
    });
  }

  function ensureDrawer() {
    var drawer = document.querySelector(".d1a-drawer");
    if (drawer) return drawer;

    document.body.insertAdjacentHTML("beforeend",
      '<button class="d1a-backdrop" type="button" aria-label="Cerrar detalle" hidden></button>' +
      '<aside class="d1a-drawer" role="dialog" aria-modal="true" aria-labelledby="d1aDrawerTitle" hidden>' +
        '<button class="d1a-drawer-close" type="button" aria-label="Cerrar">×</button>' +
        '<div class="d1a-drawer-content"></div>' +
      '</aside>'
    );

    drawer = document.querySelector(".d1a-drawer");
    document.querySelector(".d1a-backdrop").addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      closeDrawer();
    });
    drawer.addEventListener("click", function (event) { event.stopPropagation(); });
    drawer.querySelector(".d1a-drawer-close").addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      closeDrawer();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !drawer.hidden) closeDrawer();
    });
    return drawer;
  }

  function renderSection(section) {
    var value = section[1];
    var body = Array.isArray(value)
      ? "<ul>" + value.map(function (item) { return "<li>" + htmlEscape(item) + "</li>"; }).join("") + "</ul>"
      : "<p>" + htmlEscape(value) + "</p>";
    return '<section class="d1a-drawer-section' + (section[2] === "key" ? " is-key" : "") + '">' +
      "<b>" + htmlEscape(section[0]) + "</b>" + body + "</section>";
  }

  function openDrawer(key) {
    var item = content[key];
    if (!item) return;
    var drawer = ensureDrawer();
    drawer.querySelector(".d1a-drawer-content").innerHTML =
      '<header><small>AI-FIRST EXTENSION · CST212 WEEK 1</small>' +
      '<h2 id="d1aDrawerTitle">' + htmlEscape(item.title) + '<span>' + htmlEscape(item.english) + '</span></h2></header>' +
      '<div class="d1a-drawer-grid">' + item.sections.map(renderSection).join("") + "</div>";
    drawer.hidden = false;
    document.querySelector(".d1a-backdrop").hidden = false;
    document.body.classList.add("d1a-drawer-open");
    drawer.querySelector(".d1a-drawer-close").focus();
  }

  function closeDrawer() {
    var drawer = document.querySelector(".d1a-drawer");
    var backdrop = document.querySelector(".d1a-backdrop");
    if (drawer) drawer.hidden = true;
    if (backdrop) backdrop.hidden = true;
    document.body.classList.remove("d1a-drawer-open");
  }

  function sidecarMarkup() {
    return '<svg class="d1a-paths" aria-label="Conexiones entre la inteligencia artificial y el sistema">' +
      '<defs>' +
        '<linearGradient id="d1aSignalGradient" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5ad5cc"/><stop offset=".55" stop-color="#8be9df"/><stop offset="1" stop-color="#6faee8"/></linearGradient>' +
        '<marker id="d1aArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#8be9df"/></marker>' +
      '</defs>' +
      relationOrder.map(function (key) {
        var labels = { information: "ANALIZAR", processes: "ASISTIR / AUTOMATIZAR", people: "AMPLIAR CAPACIDAD", governance: "GOBERNAR" };
        return '<g class="d1a-relation" data-relation="' + key + '">' +
          '<path id="d1aPath-' + key + '" class="d1a-signal" marker-end="url(#d1aArrow)"></path>' +
          '<path class="d1a-hit" role="button" tabindex="0" aria-label="Abrir ' + labels[key] + '"></path>' +
          '<text class="d1a-path-label" text-anchor="middle">' + labels[key] + '</text>' +
        '</g>';
      }).join("") +
    '</svg>' +
    '<button class="d1a-ai-node" type="button" aria-label="Abrir concepto Inteligencia Artificial"><small>AI CAPABILITY</small><strong>INTELIGENCIA ARTIFICIAL</strong></button>' +
    '<div class="d1a-mobile-relations" aria-label="Conexiones de inteligencia artificial">' +
      '<button type="button" data-mobile-relation="information">IA → INFORMACIÓN<span>ANALIZAR</span></button>' +
      '<button type="button" data-mobile-relation="processes">IA → PROCESOS<span>ASISTIR / AUTOMATIZAR</span></button>' +
      '<button type="button" data-mobile-relation="people">IA → PERSONAS<span>AMPLIAR CAPACIDAD</span></button>' +
      '<button type="button" data-mobile-relation="governance">REGLAS → IA<span>GOBERNAR</span></button>' +
    '</div>' +
    '<div class="d1a-state-message" aria-live="polite">' +
      '<p data-state="base">El sistema es el conjunto conectado. La tecnología forma parte de él, pero no necesariamente es el todo.</p>' +
      '<p data-state="ai">La IA puede conectarse a distintas partes del sistema para ampliar capacidades, analizar información y transformar procesos, siempre dentro de su propósito y sus reglas.</p>' +
    '</div>';
  }

  function point(rect, stageRect, side) {
    var x = rect.left - stageRect.left + rect.width / 2;
    var y = rect.top - stageRect.top + rect.height / 2;
    if (side === "left") x = rect.left - stageRect.left;
    if (side === "right") x = rect.right - stageRect.left;
    if (side === "top") y = rect.top - stageRect.top;
    if (side === "bottom") y = rect.bottom - stageRect.top;
    return { x: x, y: y };
  }

  function curve(start, end, key, width, height) {
    if (key === "information") {
      return "M " + start.x + " " + start.y + " C " + (start.x - 48) + " " + start.y + ", " + (end.x + 54) + " " + end.y + ", " + end.x + " " + end.y;
    }
    if (key === "processes") {
      return "M " + start.x + " " + (start.y - 12) + " C " + (width * .86) + " " + (height * .28) + ", " + (end.x + 70) + " " + end.y + ", " + end.x + " " + end.y;
    }
    if (key === "people") {
      return "M " + start.x + " " + (start.y - 24) + " C " + (width * .78) + " " + (height * .12) + ", " + (width * .44) + " " + (height * .1) + ", " + end.x + " " + end.y;
    }
    return "M " + start.x + " " + start.y + " C " + (width * .32) + " " + (height * .9) + ", " + (width * .78) + " " + (height * .9) + ", " + end.x + " " + end.y;
  }

  function drawConnections(root) {
    var stage = root.querySelector(".d1c-stage");
    var svg = stage && stage.querySelector(".d1a-paths");
    var aiNode = stage && stage.querySelector(".d1a-ai-node");
    if (!stage || !svg || !aiNode) return;

    var stageRect = stage.getBoundingClientRect();
    if (!stageRect.width || !stageRect.height) return;
    svg.setAttribute("viewBox", "0 0 " + stageRect.width + " " + stageRect.height);

    var aiRect = aiNode.getBoundingClientRect();
    relationOrder.forEach(function (key) {
      var target = stage.querySelector(nodeSelectors[key]);
      var group = svg.querySelector('[data-relation="' + key + '"]');
      if (!target || !group) return;
      var start;
      var end;
      if (key === "governance") {
        start = point(target.getBoundingClientRect(), stageRect, "right");
        end = point(aiRect, stageRect, "left");
      } else {
        start = point(aiRect, stageRect, "left");
        end = point(target.getBoundingClientRect(), stageRect, "right");
      }
      var pathData = curve(start, end, key, stageRect.width, stageRect.height);
      group.querySelector(".d1a-signal").setAttribute("d", pathData);
      group.querySelector(".d1a-hit").setAttribute("d", pathData);
      var label = group.querySelector(".d1a-path-label");
      var labelX = (start.x + end.x) / 2;
      var labelY = (start.y + end.y) / 2;
      if (key === "people") labelY = stageRect.height * .16;
      if (key === "processes") labelY -= 34;
      if (key === "information") labelY -= 18;
      if (key === "governance") labelY = stageRect.height * .87;
      label.setAttribute("x", labelX);
      label.setAttribute("y", labelY);
    });
  }

  function clearHover(stage) {
    stage.querySelectorAll(".d1a-relation").forEach(function (item) { item.classList.remove("is-muted", "is-hovered"); });
    stage.querySelectorAll(".d1a-related").forEach(function (item) { item.classList.remove("d1a-related"); });
  }

  function highlight(stage, key) {
    clearHover(stage);
    stage.querySelectorAll(".d1a-relation").forEach(function (item) {
      item.classList.toggle("is-muted", item.dataset.relation !== key);
      item.classList.toggle("is-hovered", item.dataset.relation === key);
    });
    var target = stage.querySelector(nodeSelectors[key]);
    var ai = stage.querySelector(".d1a-ai-node");
    if (target) target.classList.add("d1a-related");
    if (ai) ai.classList.add("d1a-related");
  }

  function bindStage(root, stage) {
    if (stage.dataset.d1aBound === "true") return;
    stage.dataset.d1aBound = "true";
    stage.querySelector(".d1a-ai-node").addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      openDrawer("ai");
    });

    stage.querySelectorAll(".d1a-relation").forEach(function (relation) {
      var key = relation.dataset.relation;
      relation.addEventListener("pointerenter", function () { highlight(stage, key); });
      relation.addEventListener("pointerleave", function () { clearHover(stage); });
      relation.querySelector(".d1a-hit").addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        openDrawer(key);
      });
      relation.querySelector(".d1a-hit").addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openDrawer(key);
        }
      });
    });

    stage.querySelectorAll("[data-mobile-relation]").forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        openDrawer(button.dataset.mobileRelation);
      });
    });
  }

  function currentAiState(root) {
    var active = Array.prototype.find.call(root.querySelectorAll(".w1f-lens-toggle button"), function (button) {
      return button.getAttribute("aria-pressed") === "true" || button.classList.contains("is-active");
    });
    if (active) return /CAPA IA|AI LENS/i.test(active.textContent);
    return root.classList.contains("is-ai-lens");
  }

  function setAiState(root, enabled) {
    root.classList.toggle("d1a-ai-active", enabled);
    root.querySelectorAll(".d1c-node.is-muted, .d1-node.is-muted").forEach(function (node) { node.classList.remove("is-muted"); });
    window.requestAnimationFrame(function () { drawConnections(root); });
  }

  function mount() {
    var root = document.querySelector(ROOT_SELECTOR);
    var stage = root && root.querySelector(".d1c-stage, .d1-stage");
    if (!root || !stage) return;

    root.querySelectorAll(".d1c-human-gate, .d1c-ai-marker, .d1c-ai-expansion, .d1c-ai-lines, .d1c-ai-edge, .d1c-ai-relation-label, .d1-human-gate, .d1-ai-edges, .d1-tech-expansion, .d1-ai-label, [class*='human-gate']").forEach(function (item) {
      item.hidden = true;
      item.setAttribute("aria-hidden", "true");
    });
    if (!stage.querySelector(".d1a-ai-node")) stage.insertAdjacentHTML("beforeend", sidecarMarkup());
    ensureDrawer();
    bindStage(root, stage);
    setAiState(root, currentAiState(root));

    if (!root.dataset.d1aEventsBound) {
      root.dataset.d1aEventsBound = "true";
      root.addEventListener("click", function (event) {
        var mobileRelation = event.target.closest("[data-mobile-relation]");
        var aiNode = event.target.closest(".d1a-ai-node");
        var pathHit = event.target.closest(".d1a-hit");
        if (!mobileRelation && !aiNode && !pathHit) return;
        event.preventDefault();
        event.stopPropagation();
        if (mobileRelation) openDrawer(mobileRelation.dataset.mobileRelation);
        else if (aiNode) openDrawer("ai");
        else openDrawer(pathHit.closest(".d1a-relation").dataset.relation);
      }, true);
      root.addEventListener("click", function (event) {
        var button = event.target.closest(".w1f-lens-toggle button");
        if (!button) return;
        window.setTimeout(function () {
          setAiState(root, /CAPA IA|AI LENS/i.test(button.textContent));
        }, 0);
      });
      root.addEventListener("cst212:lenschange", function () {
        window.setTimeout(function () { setAiState(root, currentAiState(root)); }, 0);
      });
      window.addEventListener("resize", function () { drawConnections(root); }, { passive: true });
    }
  }

  var scheduled = false;
  function scheduleMount() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(function () {
      scheduled = false;
      mount();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleMount, { once: true });
  } else {
    scheduleMount();
  }

  new MutationObserver(scheduleMount).observe(document.documentElement, { childList: true, subtree: true });
})();
