(function () {
  "use strict";

  const details = {
    logical: ["CST212 > Week 3 > Logical Modeling", "Zoom level 2 · Concept family", "Logical Model / Modelo logico", "Describes what the system does and how information and processes behave without committing to technology.", ["WHAT + logical behavior", "Not a technology design", "Validated requirements as input", "Cheaper to correct than a built system"]],
    context: ["CST212 > Week 3 > Logical Modeling > Context Diagram", "Zoom level 3 · Specific model", "Context Diagram / Diagrama de contexto", "Formal representation of the system boundary: one process, external entities and boundary-crossing data flows.", ["One system/process", "External entities", "Inbound flows", "Outbound flows"]],
    dfd: ["CST212 > Week 3 > Logical Modeling > DFD", "Zoom level 3 · Specific model", "Data Flow Diagram / Diagrama de flujo de datos", "Models movement and transformation of data. It is not a flowchart.", ["External entity", "Process", "Data flow", "Data store"]],
    levels: ["CST212 > Week 3 > DFD > Levels", "Zoom level 3 · Model hierarchy", "Context > Diagram 0 > Child Diagrams", "Google Maps metaphor: overview, major processes, then one decomposed process.", ["Context: overview", "Diagram 0: major processes", "Child: one process", "Consistent boundary"]],
    balancing: ["CST212 > Week 3 > DFD > Balancing", "Zoom level 3 · Consistency rule", "DFD Balancing / Equilibrio", "Parent and child external flows remain consistent. A road entering the city cannot disappear when zooming in.", ["Preserve inputs", "Preserve outputs", "Compare parent/child", "Find missing flows"]],
    dictionary: ["CST212 > Week 3 > Data Meaning", "Zoom level 3 · Data definition", "Data Dictionary / Diccionario de datos", "The DFD shows where data moves; the dictionary explains what it means and contains.", ["ORDER / PEDIDO", "order_id + customer_id", "date + products + quantities", "price + total"]],
    logic: ["CST212 > Week 3 > Process and Decision Logic", "Zoom level 2 · Tool family", "Process / Decision Logic", "Complementary tools reveal sequence, algorithms, condition combinations and decision paths.", ["Flowchart: sequence", "Pseudocode: logic", "Decision table: combinations", "Decision tree: paths"]],
    lenses: ["CST212 > Week 3 > One System > Multiple Lenses", "Zoom level 2 · Model family", "One System, Multiple Models", "These models are complementary lenses, not competitors.", ["Boundary: Context", "Movement: DFD", "Meaning: Dictionary", "Logic: complementary tools"]],
    asis: ["CST212 > Week 3 > Systemic AI-First", "Zoom level 2 · Non-canonical extension", "AS-IS > Analysis > TO-BE", "Compare current evidence with an improved candidate state; shorter is not automatically better.", ["Current evidence", "Candidate improvement", "Risk and compliance", "Human validation"]],
    ai: ["CST212 > Week 3 > AI-First > Assisted Modeling", "Zoom level 2 · AI-First extension", "AI-Assisted System Modeling", "AI outputs remain candidate models until checked against stakeholders, requirements, evidence, source systems and tests.", ["Candidate boundary", "Candidate DFD/dictionary", "Suspected bottlenecks", "Validation required"]],
    dfdkg: ["CST212 > Week 3 > Representation", "Zoom level 3 · Critical distinction", "DFD is not a Knowledge Graph", "DFDs represent data movement; knowledge graphs represent entities and semantic relationships. This map is closer to a learning graph.", ["DFD: movement", "Graph: relationships", "Different notation", "May support each other"]],
    gate: ["CST212 > Week 3 > Learning Transfer", "Zoom level 2 · Quantum candidate", "Logical System Modeling Gate", "Prevents Requirements to Code jumps by requiring logical understanding and human acceptance first.", ["Learning-derived", "Experimental", "Not Quantum canonical", "Human acceptance required"]]
  };

  const node = (label, spanish, concept) => concept
    ? `<button class="semantic-node" data-concept="${concept}" type="button">${label}<small>${spanish}</small></button>`
    : `<div class="journey-node">${label}<small>${spanish}</small></div>`;
  const arrow = () => '<span class="journey-arrow">→</span>';
  const flow = (items) => items.map((item, index) => node(...item) + (index < items.length - 1 ? arrow() : "")).join("");

  function buildJourney() {
    const learnView = document.querySelector("#learnView");
    if (!learnView || document.querySelector("#courseJourneyView")) return;
    const learnButton = [...document.querySelectorAll("button")].find((button) => button.textContent.trim().startsWith("LEARN"));
    if (!learnButton) return;
    const controls = learnButton.parentElement;
    const journeyButton = learnButton.cloneNode(true);
    journeyButton.id = "courseJourneyTab";
    journeyButton.classList.add("course-journey-tab");
    journeyButton.disabled = false;
    journeyButton.innerHTML = '<span>COURSE JOURNEY</span><small>recorrido</small>';
    controls.insertBefore(journeyButton, learnButton);

    const shell = learnView.parentElement;
    const views = [...shell.children].filter((element) => (element.id || "").toLowerCase().includes("view"));
    const detailTitle = document.querySelector("#detailTitle");
    const detailPanel = detailTitle && (detailTitle.closest("aside") || detailTitle.parentElement?.parentElement);
    const journey = document.createElement("section");
    journey.id = "courseJourneyView";
    journey.className = "course-journey-view";
    journey.hidden = true;
    journey.setAttribute("aria-label", "Course Journey / Recorrido del curso");

    const week1 = flow([["NEED / PROBLEM / OPPORTUNITY", "Necesidad / problema / oportunidad"], ["PROBLEM FRAMING", "Formulacion"], ["ALTERNATIVES", "Alternativas"], ["FEASIBILITY", "Viabilidad"], ["GO / REFRAME / STOP", "Decision"]]);
    const project = flow([["APPROVED PROJECT", "Proyecto"], ["WBS / EDT", "Desglose"], ["TASKS", "Tareas"], ["DEPENDENCIES", "Dependencias"], ["CRITICAL PATH", "Ruta critica"]]);
    const requirements = flow([["STAKEHOLDERS", "Interesados"], ["FACT FINDING", "Recopilacion"], ["REQUIREMENTS", "Requisitos"], ["FDD", "Funciones"]]);
    const lenses = flow([["BOUNDARY", "Context"], ["DATA MOVEMENT", "DFD"], ["DATA MEANING", "Dictionary"], ["SEQUENCE", "Flowchart"], ["ALGORITHM", "Pseudocode"], ["RULES", "Decision Table"], ["PATH", "Decision Tree"]]);
    const family = (label, title, spanish, concept) => `<div class="concept-family"><div class="journey-eyebrow">${label}</div>${node(title, spanish, concept)}</div>`;

    journey.innerHTML = `
      <header class="journey-hero"><div><div class="journey-kicker">CST212 · COURSE JOURNEY / RECORRIDO DEL CURSO</div><h1>From the right problem to a logical understanding.</h1><p>De la necesidad organizacional a una comprension logica del sistema. One connected roadmap, progressively revealed.</p></div><div class="journey-zoom-legend"><span>LEVEL 0 · Course</span><span>LEVEL 1 · Week</span><span>LEVEL 2 · Family</span><span>LEVEL 3 · Concept</span></div></header>
      <nav class="journey-toolbar" aria-label="Course journey controls"><div class="journey-mode-row"><span class="journey-mode-label">VIEW</span><button class="journey-mode-button" data-mode="focus" aria-pressed="true">FOCUS WEEK</button><button class="journey-mode-button" data-mode="cumulative" aria-pressed="false">CUMULATIVE</button></div><div class="journey-week-row"><span class="journey-mode-label">WEEK</span>${[1,2,3].map((week) => `<button class="journey-week-button" data-week-select="${week}" aria-pressed="${week === 3}">WEEK ${week}</button>`).join("")}<button class="journey-week-button" data-week-select="all" aria-pressed="false">ALL</button>${[4,5,6,7].map((week) => `<button class="journey-week-button" disabled>WEEK ${week}</button>`).join("")}</div></nav>
      <main class="journey-roadmap">
        <section class="journey-week" data-week="1" data-provenance="CST212_CANONICAL_WEEK_1"><div class="week-marker">WEEK<strong>1</strong></div><div class="week-content"><div class="journey-eyebrow">PLANNING / PLANEACION</div><h2 class="week-question">WHY? / POR QUE?</h2><p class="week-subtitle">Why should this system or project exist?</p><div class="journey-flow">${week1}</div></div></section>
        <section class="journey-week" data-week="2" data-provenance="CST212_CANONICAL_WEEK_2"><div class="week-marker">WEEK<strong>2</strong></div><div class="week-content"><div class="journey-eyebrow">PROJECT MANAGEMENT + ANALYSIS</div><h2 class="week-question">WHAT DO WE NEED?</h2><p class="week-subtitle">Que necesitamos y como organizamos el trabajo?</p><div class="dual-track"><div class="journey-track-wrap"><div class="journey-eyebrow">PROJECT WORK</div><div class="journey-track">${project}</div></div><div class="journey-track-wrap"><div class="journey-eyebrow">SYSTEM NEEDS</div><div class="journey-track">${requirements}</div></div></div></div></section>
        <section class="journey-week" data-week="3" data-provenance="CST212_CANONICAL_WEEK_3"><div class="week-marker">WEEK<strong>3</strong></div><div class="week-content"><div class="journey-eyebrow">LOGICAL MODELING / MODELADO LOGICO</div><h2 class="week-question">HOW DOES THE SYSTEM WORK LOGICALLY?</h2><p class="week-subtitle">Como se comportan datos, procesos y decisiones sin elegir tecnologia?</p><div class="week3-principle"><strong>LOGICAL MODEL<small>Modelo logico</small></strong><span>≠</span><strong>PHYSICAL DESIGN<small>Diseno fisico</small></strong></div><div class="concept-bridge"><span class="week-one-ref">WEEK 1 · SYSTEM BOUNDARY</span><span>→</span>${node("CONTEXT DIAGRAM", "Representacion formal", "context")}</div><div class="week3-family-grid">${family("SYSTEM LOGIC", "LOGICAL MODEL", "Modelo logico", "logical")}${family("DATA MOVEMENT", "DATA FLOW DIAGRAM", "Flujo de datos", "dfd")}${family("DATA MEANING", "DATA DICTIONARY", "Diccionario", "dictionary")}${family("SEMANTIC LEVELS", "CONTEXT > DIAGRAM 0 > CHILD", "Niveles DFD", "levels")}${family("CONSISTENCY", "DFD BALANCING", "Equilibrio", "balancing")}${family("PROCESS + DECISIONS", "LOGIC TOOLS", "Flujo · pseudocodigo · tabla · arbol", "logic")}</div><div class="model-lenses"><div class="journey-eyebrow">ONE SYSTEM · MULTIPLE COMPLEMENTARY LENSES</div><div class="model-lens-flow">${lenses}</div>${node("EXPLORE THE LENSES", "Modelos complementarios", "lenses")}</div><div class="week3-family-grid" style="margin-top:1.4rem">${family("SYSTEMIC / AI-FIRST", "AS-IS > ANALYSIS > TO-BE", "Estado actual y futuro", "asis")}${family("AI-FIRST", "AI-ASSISTED MODELING", "Modelo candidato", "ai")}${family("REPRESENTATION", "DFD ≠ KNOWLEDGE GRAPH", "Movimiento vs relaciones", "dfdkg")}${family("LEARNING TRANSFER", "LOGICAL MODELING GATE", "Candidato experimental", "gate")}</div></div></section>
        <div class="future-weeks">${[4,5,6,7].map((week) => `<div class="future-week">WEEK ${week}<br>Future / Futuro</div>`).join("")}</div>
      </main>
      <aside class="semantic-drawer" hidden aria-live="polite"><div class="semantic-level"></div><div class="semantic-breadcrumb"></div><h2></h2><p></p><div class="semantic-drawer-content"></div><button class="semantic-back">Back / Zoom out</button></aside>`;
    shell.insertBefore(journey, learnView);

    let mode = "focus";
    let selectedWeek = "3";
    const weeks = [...journey.querySelectorAll(".journey-week")];
    const roadmap = journey.querySelector(".journey-roadmap");
    const drawer = journey.querySelector(".semantic-drawer");
    function updateWeeks() {
      weeks.forEach((week) => {
        const number = Number(week.dataset.week);
        const target = selectedWeek === "all" ? 3 : Number(selectedWeek);
        week.classList.toggle("is-hidden", selectedWeek !== "all" && number > target);
        week.classList.toggle("is-muted", mode === "focus" && selectedWeek !== "all" && number < target);
        if (mode === "cumulative" || selectedWeek === "all") week.classList.remove("is-muted");
      });
      journey.querySelectorAll("[data-week-select]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.weekSelect === selectedWeek)));
      const target = selectedWeek === "all" ? null : journey.querySelector(`[data-week="${selectedWeek}"]`);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    journey.querySelectorAll("[data-mode]").forEach((button) => button.addEventListener("click", () => {
      mode = button.dataset.mode;
      journey.querySelectorAll("[data-mode]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      updateWeeks();
    }));
    journey.querySelectorAll("[data-week-select]").forEach((button) => button.addEventListener("click", () => { selectedWeek = button.dataset.weekSelect; updateWeeks(); }));
    journey.addEventListener("click", (event) => {
      const selected = event.target.closest("[data-concept]");
      if (!selected) return;
      const detail = details[selected.dataset.concept];
      journey.querySelectorAll(".semantic-node").forEach((item) => item.classList.remove("is-focused"));
      selected.classList.add("is-focused");
      roadmap.classList.add("has-semantic-focus");
      drawer.querySelector(".semantic-breadcrumb").textContent = detail[0];
      drawer.querySelector(".semantic-level").textContent = detail[1];
      drawer.querySelector("h2").textContent = detail[2];
      drawer.querySelector("p").textContent = detail[3];
      drawer.querySelector(".semantic-drawer-content").innerHTML = detail[4].map((item) => `<div class="semantic-detail-chip">${item}</div>`).join("");
      drawer.hidden = false;
      selected.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    drawer.querySelector(".semantic-back").addEventListener("click", () => {
      drawer.hidden = true;
      roadmap.classList.remove("has-semantic-focus");
      journey.querySelectorAll(".semantic-node").forEach((item) => item.classList.remove("is-focused"));
    });
    function leaveJourney() {
      journey.hidden = true;
      if (detailPanel) detailPanel.hidden = false;
      journeyButton.classList.remove("active");
      journeyButton.setAttribute("aria-selected", "false");
    }
    [...controls.querySelectorAll("button")].filter((button) => button !== journeyButton).forEach((button) => button.addEventListener("click", leaveJourney));
    journeyButton.addEventListener("click", () => {
      views.forEach((view) => { view.hidden = true; view.style.display = "none"; });
      if (detailPanel) detailPanel.hidden = true;
      [...controls.querySelectorAll("button")].forEach((button) => { button.classList.remove("active"); button.setAttribute("aria-selected", "false"); });
      journeyButton.classList.add("active");
      journeyButton.setAttribute("aria-selected", "true");
      journey.hidden = false;
      updateWeeks();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", buildJourney);
  else buildJourney();
})();
