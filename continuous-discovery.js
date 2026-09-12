(function () {
  "use strict";

  const pipeline = [
    ["ENVIRONMENT", "Entorno"],
    ["OBSERVATION", "Observacion"],
    ["SIGNAL DETECTION", "Deteccion de senales"],
    ["OPPORTUNITY HYPOTHESIS", "Hipotesis de oportunidad"],
    ["PRELIMINARY RESEARCH", "Investigacion preliminar"],
    ["EVIDENCE", "Evidencia"],
    ["HUMAN VALIDATION", "Validacion humana", "human-gate"]
  ];

  const fullFlow = [
    ["CONTINUOUS DISCOVERY", "Descubrimiento continuo"],
    ["SIGNAL", "Senal"],
    ["OPPORTUNITY HYPOTHESIS", "Hipotesis"],
    ["EVIDENCE", "Evidencia"],
    ["HUMAN VALIDATION", "Validacion humana", "human-gate"],
    ["PROBLEM FRAMING GATE", "Formulacion"],
    ["BOUNDARY + STAKEHOLDERS", "Frontera + interesados"],
    ["ALTERNATIVES", "Alternativas"],
    ["BUSINESS CASE + FEASIBILITY", "Caso + viabilidad"],
    ["GO / REFRAME / STOP", "Decision", "human-gate"],
    ["PROJECT DECOMPOSITION", "Descomposicion"],
    ["WBS + DEPENDENCIES + CRITICAL PATH", "EDT + dependencias + ruta"],
    ["REQUIREMENTS DISCOVERY", "Descubrimiento de requisitos"],
    ["FDD + REQUIREMENTS MODEL", "FDD + modelo"],
    ["FUTURE SDLC STAGES", "No expandido", "future-stage"]
  ];

  const renderFlow = (items) => items.map((item, index) => {
    const node = `<div class="discovery-step ${item[2] || ""}">${item[0]}<small>${item[1]}</small></div>`;
    return index === items.length - 1 ? node : `${node}<span class="discovery-arrow">→</span>`;
  }).join("");

  function createContinuousDiscoveryLayer() {
    const exploreView = document.querySelector("#exploreView");
    if (!exploreView || document.querySelector("#continuousDiscoveryPanel")) return;
    if (!exploreView.style.position) exploreView.style.position = "relative";

    const launcher = document.createElement("button");
    launcher.className = "continuous-discovery-launcher";
    launcher.type = "button";
    launcher.setAttribute("aria-expanded", "false");
    launcher.setAttribute("aria-controls", "continuousDiscoveryPanel");
    launcher.textContent = "Continuous discovery";

    const panel = document.createElement("section");
    panel.id = "continuousDiscoveryPanel";
    panel.className = "continuous-discovery-panel";
    panel.hidden = true;
    panel.setAttribute("aria-label", "Continuous Opportunity Discovery AI-First layer");
    panel.innerHTML = `
      <div class="discovery-kicker">AI-FIRST EXTENSION · LEARNING-DERIVED · NOT CANONICAL</div>
      <h2>Continuous Opportunity Discovery<br><small>Descubrimiento continuo de oportunidades</small></h2>
      <p class="discovery-intro">Observe only evidence that is actually available. Signals may suggest where investigation should begin; they never authorize a problem, project or solution by themselves.</p>

      <div class="discovery-radar" aria-label="Sources of opportunity signals">
        <div class="discovery-radar-core">ENVIRONMENT<small>Entorno</small></div>
        <div class="signal-source"><strong>INTERNAL SIGNALS</strong><small>Senales internas</small><p>Operational metrics · recurring tickets · manual repetition · errors · delays · duplication · costs · bottlenecks</p></div>
        <div class="signal-source"><strong>USER SIGNALS</strong><small>Senales de usuarios</small><p>Feedback · support requests · complaints · behavior · abandonment · recurring requests · unmet needs</p></div>
        <div class="signal-source"><strong>TECHNOLOGY SIGNALS</strong><small>Senales tecnologicas</small><p>New AI capabilities · APIs · automation · infrastructure · integration possibilities</p></div>
        <div class="signal-source"><strong>EXTERNAL SIGNALS</strong><small>Senales externas</small><p>Market · regulation · competitors · academic and industry research · technology evolution</p></div>
      </div>

      <div class="discovery-label">DISCOVERY PIPELINE / FLUJO DE DESCUBRIMIENTO</div>
      <div class="discovery-pipeline">${renderFlow(pipeline)}</div>
      <div class="discovery-outcomes">
        <div class="discovery-outcome">REJECT / ARCHIVE<br><small>Rechazar / archivar</small></div>
        <span class="discovery-arrow">OR / O</span>
        <div class="discovery-outcome">PROBLEM FRAMING GATE<br><small>Formulacion del problema</small></div>
      </div>

      <div class="discovery-warnings">
        <div class="discovery-warning">A signal is not automatically a problem.<br><small>Una senal no es automaticamente un problema.</small></div>
        <div class="discovery-warning">A pattern is not automatically causation.<br><small>Un patron no demuestra automaticamente causalidad.</small></div>
        <div class="discovery-warning">A hypothesis is not automatically a project.<br><small>Una hipotesis no es automaticamente un proyecto.</small></div>
      </div>

      <div class="discovery-label">HUMAN / AGENT BOUNDARY · FRONTERA HUMANO / AGENTE</div>
      <div class="human-agent-boundary">
        <div class="boundary-lane"><strong>AGENTS MAY DISCOVER OPPORTUNITIES</strong><p>Observe · research · cluster · compare · detect · form hypotheses · collect evidence · propose</p></div>
        <div class="boundary-lock">║</div>
        <div class="boundary-lane human"><strong>HUMANS AUTHORIZE INTENT</strong><p>Validate context · assess importance · authorize intent · define acceptable risk · approve framing · authorize project decisions</p></div>
      </div>
      <div class="discovery-principle">NO AUTONOMOUS PATH: SIGNAL → DEVELOPMENT → PRODUCTION<br><small>AI opportunity ≠ AI solution · System solution ≠ Software solution</small></div>

      <div class="discovery-label">LEARNING-DERIVED END-TO-END CANDIDATE</div>
      <div class="candidate-end-to-end">${renderFlow(fullFlow)}</div>`;

    launcher.addEventListener("click", () => {
      const opening = panel.hidden;
      const industryPanel = document.querySelector("#industryGovernancePanel");
      const industryLauncher = document.querySelector(".industry-governance-launcher");
      if (opening && industryPanel && !industryPanel.hidden) {
        industryPanel.hidden = true;
        if (industryLauncher) {
          industryLauncher.setAttribute("aria-expanded", "false");
          industryLauncher.textContent = "Industry governance";
        }
      }
      panel.hidden = !panel.hidden;
      launcher.setAttribute("aria-expanded", String(!panel.hidden));
      launcher.textContent = panel.hidden ? "Continuous discovery" : "Close continuous discovery";
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !panel.hidden) launcher.click();
    });

    exploreView.append(launcher, panel);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createContinuousDiscoveryLayer);
  } else {
    createContinuousDiscoveryLayer();
  }
})();
