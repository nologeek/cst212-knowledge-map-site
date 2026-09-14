(() => {
  const isEn = () => document.documentElement.lang.toLowerCase().startsWith("en");

  const copy = () => isEn() ? {
    week: "WEEK 1",
    title: "Systems planning",
    promise: "Learn to investigate needs, understand systems, analyze processes and justify decisions before designing a solution.",
    aiPromise: "Explore how artificial intelligence can assist, expand and automate parts of systems analysis and design, without replacing evidence, human judgment or accountability for decisions.",
    lead: "Before designing a solution,<br>we need to understand the system.",
    questions: [
      "What need exists?",
      "What problem are we observing?",
      "How does the system work today?",
      "Is it really worthwhile to change it?"
    ],
    body: "This week we will learn to move from a signal or need to an evidence-based decision, before assuming the answer must be software, automation or artificial intelligence.",
    progress: ["UNDERSTAND", "INVESTIGATE", "EVALUATE", "DECIDE"],
    cue: "Let us begin by asking an important question.",
    system: "SYSTEM",
    orbit: ["People", "Processes", "Information", "Rules", "Resources", "Technology"],
    ai: "AI can expand our capacity to observe, investigate and compare alternatives, but it does not remove the need to understand the system or validate decisions."
  } : {
    week: "SEMANA 1",
    title: "Planeación de sistemas",
    promise: "Aprende a investigar necesidades, comprender sistemas, analizar procesos y justificar decisiones antes de diseñar una solución.",
    aiPromise: "Explora además cómo la inteligencia artificial puede asistir, ampliar y automatizar partes del análisis y diseño de sistemas, sin reemplazar la evidencia, el criterio humano ni la responsabilidad sobre las decisiones.",
    lead: "Antes de diseñar una solución,<br>tenemos que entender el sistema.",
    questions: [
      "¿Qué necesidad existe?",
      "¿Qué problema estamos observando?",
      "¿Cómo funciona hoy el sistema?",
      "¿Vale realmente la pena cambiarlo?"
    ],
    body: "Esta semana aprenderemos a pasar de una señal o necesidad a una decisión sustentada en evidencia, antes de asumir que la respuesta debe ser software, automatización o inteligencia artificial.",
    progress: ["COMPRENDER", "INVESTIGAR", "EVALUAR", "DECIDIR"],
    cue: "Comencemos por hacernos una pregunta importante.",
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

  const stories = () => isEn() ? [
    { number: "01", terms: ["WHAT IS A SYSTEM"], title: "What is a system", eyebrow: "Let us begin with the foundation", text: "A system is a set of related elements that interact to achieve a purpose." },
    { number: "02", terms: ["COMPONENTS OF AN INFORMATION SYSTEM", "SYSTEM ≠ SOFTWARE"], title: "Components of an information system", eyebrow: "From the whole to its coordinated parts", text: "An information system is not just software. Its outcome emerges when people, processes, information, rules, resources and technology work together." },
    { number: "03", terms: ["BUSINESS PROCESSES"], title: "Business processes", eyebrow: "From components to work", text: "A business process connects activities, people, information, rules and resources to transform an input into an outcome that creates value." },
    { number: "04", terms: ["FROM SYMPTOM TO THE REAL PROBLEM", "PROBLEM FRAMING"], title: "From symptom to the real problem", eyebrow: "Investigate before concluding", text: "A signal starts the inquiry. Evidence tests explanations, refines the problem and supports a preliminary decision." },
    { number: "05", terms: ["SYSTEM BOUNDARY"], title: "System boundary", eyebrow: "From the problem to its analytical limits", text: "We understand the problem better. But where does the system we can analyze or change begin and end?" },
    { number: "06", terms: ["FEASIBILITY + BUSINESS CASE", "BUSINESS CASE AND FEASIBILITY", "BUSINESS CASE + FEASIBILITY"], title: "Feasibility + business case", eyebrow: "From scope to investment", text: "We know the system and its scope. Is it worth investing resources to change it?" },
    { number: "07", terms: ["FROM NEED TO DECISION", "CONNECTED WEEK 1 SUMMARY", "WEEK 1 CONSOLIDATED MODEL"], title: "From need to decision", eyebrow: "Week 1 connected", text: "How does everything learned connect before development begins?" }
  ] : [
    { number: "01", terms: ["QUÉ ES UN SISTEMA"], title: "Qué es un sistema", eyebrow: "Empecemos con el fundamento", text: "Un sistema es un conjunto de elementos relacionados que interactúan para lograr un propósito." },
    { number: "02", terms: ["COMPONENTES DE UN SISTEMA DE INFORMACIÓN", "SISTEMA ≠ SOFTWARE"], title: "Componentes de un sistema de información", eyebrow: "Del conjunto a sus partes coordinadas", text: "Un sistema de información no es solo software. Su resultado emerge cuando personas, procesos, información, reglas, recursos y tecnología trabajan en conjunto." },
    { number: "03", terms: ["PROCESOS DE NEGOCIO"], title: "Procesos de negocio", eyebrow: "De los componentes al trabajo", text: "Un proceso de negocio conecta actividades, personas, información, reglas y recursos para transformar una entrada en un resultado que aporta valor." },
    { number: "04", terms: ["DEL SÍNTOMA AL PROBLEMA REAL", "ENCUADRE DEL PROBLEMA"], title: "Del síntoma al problema real", eyebrow: "Investigar antes de concluir", text: "Una señal inicia la investigación. La evidencia pone a prueba las explicaciones, refina el problema y sustenta una decisión preliminar." },
    { number: "05", terms: ["FRONTERA DEL SISTEMA", "LÍMITE DEL SISTEMA"], title: "Frontera del sistema", eyebrow: "Del problema a sus límites de análisis", text: "Ya entendemos mejor el problema. Pero ¿hasta dónde llega el sistema que podemos analizar o cambiar?" },
    { number: "06", terms: ["VIABILIDAD + CASO DE NEGOCIO", "CASO DE NEGOCIO Y VIABILIDAD", "CASO DE NEGOCIO + VIABILIDAD"], title: "Viabilidad + caso de negocio", eyebrow: "Del alcance a la inversión", text: "Ya sabemos cuál es el sistema y su alcance. ¿Vale la pena invertir recursos en cambiarlo?" },
    { number: "07", terms: ["DE LA NECESIDAD A LA DECISIÓN", "RESUMEN CONECTADO DE SEMANA 1", "MODELO CONSOLIDADO DE SEMANA 1"], title: "De la necesidad a la decisión", eyebrow: "Semana 1 conectada", text: "¿Cómo se conecta todo lo aprendido antes de iniciar el desarrollo?" }
  ];

  const findFigure = (root, story) => [...root.querySelectorAll(".lesson-diagram")].find(figure => {
    const heading = figure.querySelector(".diagram-heading h3,.d2is-heading h3,.d3bp-heading h3,.d4pr-heading h3,.w1f-heading h3,h3");
    const value = (heading?.textContent || "").replace(/\s+/g, " ").trim().toUpperCase();
    return story.terms.some(term => value.includes(term));
  });

  const ensureManifest = (root, intro, text) => {
    let manifest = root.querySelector(".w1i-manifest");
    if (!manifest) {
      manifest = document.createElement("div");
      manifest.className = "w1i-manifest";
      intro.before(manifest);
    }
    const language = isEn() ? "en" : "es";
    if (manifest.dataset.w1iLanguage === language) return;
    manifest.dataset.w1iLanguage = language;
    manifest.innerHTML = `
      <section class="w1i-manifest-scene is-foundation">
        <div><small>${isEn() ? "THE LEARNING JOURNEY" : "EL RECORRIDO DE APRENDIZAJE"}</small><p>${text.promise}</p></div>
      </section>
      <section class="w1i-manifest-scene is-ai">
        <div><small>${isEn() ? "AN OPTIONAL AI LENS" : "UNA CAPA DE IA OPCIONAL"}</small><p>${text.aiPromise.replace(isEn() ? "assist, expand and automate" : "asistir, ampliar y automatizar", isEn() ? "<strong>assist, expand and automate</strong>" : "<strong>asistir, ampliar y automatizar</strong>")}</p></div>
      </section>`;
  };

  const ensureDiagramIntros = root => {
    root.querySelectorAll(".w1f-transition").forEach(node => node.remove());
    stories().forEach(story => {
      const figure = findFigure(root, story);
      if (!figure) return;
      figure.classList.add(`w1i-diagram-${story.number}`);
      const heading = figure.querySelector(".diagram-heading h3,.d2is-heading h3,.d3bp-heading h3,.d4pr-heading h3,.w1f-heading h3,h3");
      if (heading && heading.textContent !== story.title) heading.textContent = story.title;
      let scene = root.querySelector(`[data-w1i-for="${story.number}"]`);
      if (!scene) {
        scene = document.createElement("section");
        scene.className = "w1i-concept-scene";
        scene.dataset.w1iFor = story.number;
        figure.before(scene);
      }
      const signature = `${isEn() ? "en" : "es"}-${story.number}`;
      if (scene.dataset.w1iSignature !== signature) {
        scene.dataset.w1iSignature = signature;
        scene.innerHTML = `<div><small>${story.eyebrow}</small><p class="w1i-scene-index">${isEn() ? "Diagram" : "Diagrama"} ${Number(story.number)}</p><h3>${story.title}</h3><p class="w1i-scene-copy">${story.text}</p>${story.number === "01" ? `<strong>${isEn() ? "Now let us see how its parts connect." : "Ahora veamos cómo se conectan sus partes."}</strong>` : ""}</div>`;
      }
    });
  };

  const render = () => {
    const root = document.querySelector("#week-1");
    const intro = root?.querySelector(".week-intro");
    if (!root || !intro) return;
    const language = isEn() ? "en" : "es";
    const text = copy();
    ensureManifest(root, intro, text);
    if (intro.dataset.introV2 === language) {
      ensureDiagramIntros(root);
      return;
    }
    const toggle = root.querySelector(".w1f-lens-toggle");
    intro.dataset.introV2 = language;
    intro.className = "week-intro w1i-intro";
    intro.innerHTML = `
      <div class="w1i-copy">
        <p class="w1i-index"><span>01 / 07</span><span>${text.week}</span></p>
        <h2>${text.title}</h2>
        <p class="w1i-lead">${text.lead}</p>
        <div class="w1i-questions">${text.questions.map(question => `<p>${question}</p>`).join("")}</div>
        <p class="w1i-progression">${text.progress.map((step, index) => `${index ? "<i>→</i>" : ""}<span>${step}</span>`).join("")}</p>
        <p class="w1i-cue">${text.cue}</p>
      </div>
      <div class="w1i-morph" aria-hidden="true">
        <div class="w1i-orbit">
          ${text.orbit.map((item, index) => `<span class="satellite s${index + 1}">${item}</span>`).join("")}
          <strong>${text.system}</strong>
        </div>
      </div>`;
    if (toggle) toggle.hidden = true;
    removeLegacyQuestion(root);
    requestAnimationFrame(() => ensureDiagramIntros(root));
  };

  const boot = () => render();
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
  else boot();
  new MutationObserver(() => requestAnimationFrame(render)).observe(document.documentElement, { childList: true, subtree: true });
})();
