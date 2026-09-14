(() => {
  const renderCover = () => {
    const home = document.getElementById("home") || document.querySelector("[data-section='home'], .home");
    if (!home || home.dataset.coverV2 === "ready") return;

    home.dataset.coverV2 = "ready";
    home.classList.add("cover-v2");
    home.setAttribute("aria-label", "Portada del Atlas Interactivo de Aprendizaje CST212");
    home.innerHTML = `
      <div class="cover-v2__content">
        <h1 class="cover-v2__heading">
          <span class="cover-v2__title">Análisis y diseño de sistemas</span>
          <span class="cover-v2__subtitle">Atlas interactivo de aprendizaje</span>
        </h1>
        <div class="cover-v2__people">
          <div class="cover-v2__student" aria-label="Estudiante Víctor Manuel Ayala Vargas">
            <img class="cover-v2__photo" src="assets/victor-manuel-ayala-vargas.jpg" alt="Fotografía de Víctor Manuel Ayala Vargas">
            <span class="cover-v2__identity"><span class="cover-v2__identity-label">Estudiante</span><strong>Víctor Manuel Ayala Vargas</strong></span>
          </div>
        </div>
        <p class="cover-v2__progress"><strong>2026</strong><span class="cover-v2__progress-dot" aria-hidden="true"></span><strong>Progreso actual: Semana 3 de 7</strong></p>
      </div>`;
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", renderCover, { once: true });
  else renderCover();

  new MutationObserver(renderCover).observe(document.documentElement, { childList: true, subtree: true });
})();
