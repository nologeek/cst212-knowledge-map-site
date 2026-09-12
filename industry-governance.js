(function () {
  "use strict";

  const sources = [
    {
      organization: "OpenAI",
      date: "2026-02-11 / verified 2026-09-12",
      finding: "Humans steer while agents execute inside a legible, versioned environment with plans, tests, observability and feedback loops.",
      implication: "Quantum hypothesis: encode intent, boundaries and evidence as durable artifacts before delegating execution."
    },
    {
      organization: "Anthropic",
      date: "2026-06-16 / verified 2026-09-12",
      finding: "People make most planning decisions while agents make most execution decisions; domain expertise remains a major success factor.",
      implication: "Quantum hypothesis: preserve accountable human planning and use containment for delegated execution."
    },
    {
      organization: "Microsoft",
      date: "updated 2026-08-21 / verified 2026-09-12",
      finding: "Agent development is versioned, traced, evaluated, monitored and governed through identity and least-privilege access.",
      implication: "Quantum hypothesis: require version, trace, evaluation and permission evidence at promotion gates."
    },
    {
      organization: "Google",
      date: "2026-09-09 / verified 2026-09-12",
      finding: "Behavioral evaluations test observable agent actions and guard against regressions while preserving room for valid alternate paths.",
      implication: "Quantum hypothesis: evaluate critical behaviors, not only final outputs or broad benchmark scores."
    }
  ];

  function createLayer() {
    const exploreView = document.querySelector("#exploreView");
    if (!exploreView || document.querySelector("#industryGovernancePanel")) return;

    if (!exploreView.style.position) exploreView.style.position = "relative";

    const launcher = document.createElement("button");
    launcher.className = "industry-governance-launcher";
    launcher.type = "button";
    launcher.setAttribute("aria-expanded", "false");
    launcher.setAttribute("aria-controls", "industryGovernancePanel");
    launcher.textContent = "Industry governance";

    const panel = document.createElement("section");
    panel.id = "industryGovernancePanel";
    panel.className = "industry-governance-panel";
    panel.hidden = true;
    panel.setAttribute("aria-label", "AI-First industry knowledge and freshness governance");
    panel.innerHTML = `
      <div class="industry-governance-kicker">AI-FIRST / INDUSTRY LAYER · LEARNING-DERIVED</div>
      <h2>Industry Knowledge &amp; Freshness Governance</h2>
      <p class="industry-governance-intro">Fast-moving AI practice is evidence, not CST212 canonical knowledge. Select a source to inspect its current finding and candidate implication.</p>
      <div class="industry-source-constellation" role="group" aria-label="Primary industry sources">
        ${sources.map((source, index) => `<button class="industry-source-node" type="button" data-source-index="${index}" aria-pressed="${index === 0}">${source.organization}</button>`).join("")}
      </div>
      <div class="industry-governance-flow" aria-label="Knowledge governance flow">
        <span class="industry-flow-node">INDUSTRY EVIDENCE</span><span class="industry-flow-arrow">→</span>
        <span class="industry-flow-node quantum">QUANTUM HYPOTHESIS</span><span class="industry-flow-arrow">→</span>
        <span class="industry-flow-node">HUMAN VALIDATION</span><span class="industry-flow-arrow">→</span>
        <span class="industry-flow-node quantum">POSSIBLE PROMOTION</span>
      </div>
      <div class="industry-source-detail" aria-live="polite"></div>
      <div class="freshness-gate">
        <div class="industry-governance-label">Knowledge Freshness Gate · risk-based heuristic</div>
        <div class="freshness-bands">
          <div class="freshness-band"><strong>&lt; 30 days</strong>Normally current unless change signals require an immediate check.</div>
          <div class="freshness-band"><strong>30–90 days</strong>Review recommended for models, APIs, SDKs, capabilities and workflows.</div>
          <div class="freshness-band"><strong>&gt; 90 days</strong>Reverify before an important current-state AI decision.</div>
        </div>
        <p class="freshness-note">Age never invalidates knowledge automatically. Update, supersede or preserve findings with evidence and provenance.</p>
      </div>`;

    const detail = panel.querySelector(".industry-source-detail");
    const showSource = (index) => {
      const source = sources[index];
      panel.querySelectorAll(".industry-source-node").forEach((button, buttonIndex) => {
        button.setAttribute("aria-pressed", String(buttonIndex === index));
      });
      detail.innerHTML = `<div class="industry-governance-label">INDUSTRY EVIDENCE · ${source.date}</div><h3>${source.organization}</h3><p>${source.finding}</p><p><strong>${source.implication}</strong></p>`;
    };

    panel.addEventListener("click", (event) => {
      const sourceButton = event.target.closest("[data-source-index]");
      if (sourceButton) showSource(Number(sourceButton.dataset.sourceIndex));
    });

    launcher.addEventListener("click", () => {
      panel.hidden = !panel.hidden;
      launcher.setAttribute("aria-expanded", String(!panel.hidden));
      launcher.textContent = panel.hidden ? "Industry governance" : "Close industry governance";
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !panel.hidden) launcher.click();
    });

    exploreView.append(launcher, panel);
    showSource(0);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createLayer);
  } else {
    createLayer();
  }
})();
