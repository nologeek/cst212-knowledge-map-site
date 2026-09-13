(() => {
  const isEn = () => document.documentElement.lang.toLowerCase().startsWith("en");

  const copy = () => isEn() ? {
    week: "WEEK 1",
    title: "SYSTEMS PLANNING",
    lead: "Before designing a solution,<br>we need to understand the system.",
    questions: [
      "What need exists?",
      "What problem are we observing?",
      "How does the system work today?",
      "Is it really worthwhile to change it?"
    ],
    body: "This week we will learn to move from a signal or need to an evidence-based decision, before assuming the answer must be software, automation or artificial intelligence.",
    progress: ["UNDERSTAND", "INVESTIGATE", "EVALUATE", "DECIDE"],
    cue: "Let us begin by understanding what a system is.",
    system: "SYSTEM",
    orbit: ["People", "Processes", "Information", "Rules", "Resources", "Technology"],
    ai: "AI can expand our capacity to observe, investigate and compare alternatives, but it does not remove the need to understand the system or validate decisions."
  } : {
    week: "SEMANA 1",
    title: "PLANEACIÓN DE SISTEMAS",
    lead: "Antes de diseñar una solución,<br>tenemos que entender el sistema.",
    questions: [
      "¿Qué necesidad existe?",
      "¿Qué problema estamos observando?",
      "¿Cómo funciona hoy el sistema?",
      "¿Vale realmente la pena cambiarlo?"
    ],
    body: "Esta semana aprenderemos a pasar de una señal o necesidad a una decisión sustentada en evidencia, antes de asumir que la respuesta debe ser software, automatización o inteligencia artificial.",
    progress: ["COMPRENDER", "INVESTIGAR", "EVALUAR", "DECIDIR"],
    cue: "Comencemos por entender qué es un sistema.",
    system: "SISTEMA",
    orbit: ["Personas", "Procesos", "Información", "Reglas", "Recursos", "Tecnología"],
    ai: "La IA puede ampliar nuestra capacidad para observar, investigar y comparar alternativas, pero no elimina la necesidad de comprender el sistema ni validar las decisiones."
  };

  const removeLegacyQuestion = root => {
    root.querySelectorAll(".week1-master,.week1-master-question,.master-question,.week-master-question").forEach(node => node.remove());
    [...root.children].forEach(node => {
      if (/WEEK 1\s*·\s*MASTER QUESTION/i.test(node.textContent || "")) node.remove();
    });
  };

  const render = () => {
    const root = document.querySelector("#week-1");
    const intro = root?.querySelector(".week-intro");
    if (!root || !intro) return;
    const language = isEn() ? "en" : "es";
    if (intro.dataset.introV2 === language) return;

    const text = copy();
    const toggle = root.querySelector(".w1f-lens-toggle");
    intro.dataset.introV2 = language;
    intro.className = "week-intro w1i-intro";
    intro.innerHTML = `
      <div class="w1i-copy">
        <p class="w1i-index"><span>01 / 07</span><span>${text.week}</span></p>
        <h2>${text.title}</h2>
        <p class="w1i-lead">${text.lead}</p>
        <div class="w1i-questions">${text.questions.map(question => `<p>${question}</p>`).join("")}</div>
        <p class="w1i-body">${text.body}</p>
        <p class="w1i-progression">${text.progress.map((step, index) => `${index ? "<i>→</i>" : ""}<span>${step}</span>`).join("")}</p>
        <div class="w1i-lens-slot"></div>
        <p class="w1i-ai-copy">${text.ai}</p>
        <p class="w1i-cue">${text.cue}</p>
      </div>
      <div class="w1i-morph" aria-hidden="true">
        <div class="w1i-orbit">
          ${text.orbit.map((item, index) => `<span class="satellite s${index + 1}">${item}</span>`).join("")}
          <strong>${text.system}</strong>
        </div>
      </div>`;
    if (toggle) intro.querySelector(".w1i-lens-slot").appendChild(toggle);
    removeLegacyQuestion(root);
  };

  const boot = () => render();
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
  else boot();
  new MutationObserver(() => requestAnimationFrame(render)).observe(document.documentElement, { childList: true, subtree: true });
})();
