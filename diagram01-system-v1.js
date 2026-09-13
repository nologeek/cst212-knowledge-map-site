(() => {
  const B = (es, en) => ({ es, en });
  const isEn = () => document.documentElement.lang.toLowerCase().startsWith("en");
  const T = value => value?.[isEn() ? "en" : "es"] || "";
  const SOURCE = {
    course_week: "Week 1",
    source_type: "Course material",
    source_title: "CST212 Week 1 learning materials",
    author: null,
    year: null,
    canonical_url: "https://tiffinglobal.myopenlms.net/course/view.php?id=24932",
    status: "SOURCE_METADATA_PENDING"
  };
  const C = {};
  const add = (key, title, what, why, question, metaphor, related, confuse, ai, memory = null) => {
    C[key] = { key, title, what, why, question, metaphor, related, confuse, ai, memory, source: SOURCE };
  };

  add("system", B("Sistema","System"), B("Un conjunto de elementos relacionados que interactúan para lograr un propósito.","A set of related elements that interact to achieve a purpose."), B("Porque cambiar una parte puede afectar a otras. Analizar un sistema significa comprender tanto sus componentes como sus relaciones.","Changing one part may affect others. Analyzing a system means understanding both its components and their relationships."), B("¿Qué elementos participan y qué propósito intentan lograr juntos?","What elements participate, and what purpose are they trying to achieve together?"), B("Una orquesta: un violín no es la orquesta. El resultado aparece cuando músicos, instrumentos, partitura y dirección trabajan juntos.","An orchestra: one violin is not the orchestra. The outcome emerges when musicians, instruments, score and direction work together."), ["people","processes","information","rules","resources","technology","purpose"], B("Una colección aleatoria de partes o una herramienta aislada.","A random collection of parts or an isolated tool."), B("La IA puede ser un componente tecnológico; no sustituye el propósito, las relaciones ni la responsabilidad del sistema.","AI can be a technology component; it does not replace the system's purpose, relationships or accountability."), B("Las partes importan. Las relaciones también.","The parts matter. The relationships matter too."));
  add("people", B("Personas","People"), B("Quienes participan, utilizan, administran, toman decisiones o reciben resultados del sistema.","Those who participate in, use, manage, make decisions about or receive outcomes from the system."), B("Sus capacidades, necesidades y decisiones influyen en el resultado del conjunto.","Their capabilities, needs and decisions influence the outcome of the whole."), B("¿Quién participa y quién es afectado?","Who participates, and who is affected?"), B("Los actores de una obra.","The actors in a play."), ["system","processes","rules"], B("Una categoría literal obligatoria en todo sistema biológico.","A mandatory literal category in every biological system."), B("La IA puede ampliar capacidades humanas, pero no asumir responsabilidad por defecto.","AI may augment human capabilities but does not assume accountability by default."));
  add("processes", B("Procesos","Processes"), B("Actividades relacionadas que transforman entradas en resultados.","Related activities that transform inputs into outcomes."), B("La secuencia y coordinación del trabajo determinan cómo se alcanza el propósito.","The sequence and coordination of work determine how the purpose is achieved."), B("¿Qué trabajo ocurre y en qué secuencia?","What work happens, and in what sequence?"), B("Una receta: importan los elementos, pero también qué hacemos con ellos y en qué orden.","A recipe: the elements matter, but so do what we do with them and in what order."), ["system","people","information"], B("Una lista de pantallas de software.","A list of software screens."), B("La IA puede asistir o automatizar tareas acotadas bajo controles definidos.","AI may assist or automate bounded tasks under defined controls."));
  add("information", B("Información","Information"), B("Datos que adquieren significado y permiten operar, comunicar o tomar decisiones.","Data that gains meaning and enables operation, communication or decisions."), B("Conecta el estado del sistema con las acciones que sus componentes deben realizar.","It connects system state with the actions its components must perform."), B("¿Qué necesita saber el sistema?","What does the system need to know?"), B("La memoria compartida del sistema.","The shared memory of the system."), ["system","processes","rules"], B("Datos aislados sin contexto.","Isolated data without context."), B("La IA puede analizar información y detectar patrones; la calidad y procedencia de los datos siguen siendo esenciales.","AI may analyze information and detect patterns; data quality and provenance remain essential."));
  add("rules", B("Reglas","Rules"), B("Condiciones que orientan o limitan el comportamiento y las decisiones del sistema.","Conditions that guide or constrain system behavior and decisions."), B("Permiten que múltiples elementos interactúen de manera consistente y gobernable.","They allow multiple elements to interact consistently and governably."), B("¿Qué está permitido, requerido o prohibido?","What is allowed, required or prohibited?"), B("Las reglas de tránsito: permiten interacción sin caos.","Traffic rules: they enable interaction without chaos."), ["system","people","technology"], B("Preferencias informales sin autoridad ni propósito.","Informal preferences without authority or purpose."), B("Las reglas deben limitar y gobernar el uso de IA, incluida la validación humana.","Rules must constrain and govern AI use, including human validation."));
  add("resources", B("Recursos","Resources"), B("Medios humanos, físicos, financieros, informativos o tecnológicos que el sistema utiliza para funcionar.","Human, physical, financial, informational or technological means the system uses to operate."), B("Sin capacidad y medios suficientes, el sistema no puede sostener su propósito.","Without sufficient means and capacity, the system cannot sustain its purpose."), B("¿Qué necesita el sistema para operar?","What does the system need to operate?"), B("El combustible y los suministros de un viaje.","The fuel and supplies for a journey."), ["system","processes","technology"], B("El propósito que orienta el uso de esos medios.","The purpose that guides how those means are used."), B("La IA también consume recursos: datos, cómputo, supervisión y monitoreo.","AI also consumes resources: data, compute, supervision and monitoring."));
  add("technology", B("Tecnología","Technology"), B("Herramientas técnicas que apoyan determinadas funciones del sistema.","Technical tools that support specific system functions."), B("Puede aumentar capacidad, pero no representa necesariamente el sistema completo.","It can increase capacity but does not necessarily represent the entire system."), B("¿Qué tecnología apoya el propósito del sistema?","What technology supports the system's purpose?"), B("Un instrumento dentro de la orquesta.","An instrument within the orchestra."), ["system","software","automation","ai"], B("El sistema completo.","The complete system."), B("La tecnología puede revelar software, automatización e IA como capacidades distintas.","Technology may reveal software, automation and AI as distinct capabilities."));
  add("purpose", B("Propósito","Purpose"), B("El resultado o finalidad que da sentido a la interacción entre los componentes.","The outcome or aim that gives meaning to interaction among components."), B("Una colección de componentes no forma un sistema significativo si no se organiza hacia una finalidad.","A collection of components does not form a meaningful system unless it is organized toward an aim."), B("¿Para qué existe este sistema?","Why does this system exist?"), B("El destino de un viaje: organiza vehículo, conductor, combustible y ruta.","The destination of a journey: it organizes vehicle, driver, fuel and route."), ["system","processes","rules"], B("Una función técnica individual.","An individual technical function."), B("La IA debe servir al propósito definido, no convertirse en el propósito por sí misma.","AI must serve the defined purpose, not become the purpose by itself."));
  add("software", B("Software","Software"), B("Programas e instrucciones digitales que realizan funciones específicas.","Programs and digital instructions that perform specific functions."), B("Puede apoyar procesos e información sin abarcar personas, reglas, recursos o propósito.","It may support processes and information without encompassing people, rules, resources or purpose."), B("¿Qué función específica apoya este software?","Which specific function does this software support?"), B("Una herramienta dentro de una caja de herramientas mayor.","One tool inside a larger toolbox."), ["technology","automation","ai"], B("El sistema completo.","The complete system."), B("El software puede incorporar IA, pero ambos siguen siendo componentes tecnológicos.","Software may incorporate AI, but both remain technology components."));
  add("automation", B("Automatización","Automation"), B("Ejecución controlada de tareas repetibles con intervención humana reducida.","Controlled execution of repeatable tasks with reduced human intervention."), B("Puede aumentar consistencia y velocidad cuando la tarea y sus límites están bien definidos.","It may increase consistency and speed when the task and its limits are well defined."), B("¿Qué tarea estable y acotada puede ejecutarse automáticamente?","Which stable, bounded task can be executed automatically?"), B("Un mecanismo que repite una secuencia definida.","A mechanism that repeats a defined sequence."), ["technology","software","processes","ai"], B("Inteligencia o autoridad autónoma.","Intelligence or autonomous authority."), B("La IA puede ampliar la automatización cuando hay incertidumbre, pero aumenta la necesidad de evaluación.","AI may extend automation under uncertainty, but increases the need for evaluation."));
  add("ai", B("Inteligencia artificial","Artificial intelligence"), B("Capacidad tecnológica que puede analizar, clasificar, generar, recomendar o ejecutar tareas acotadas.","A technology capability that may analyze, classify, generate, recommend or execute bounded tasks."), B("Puede modificar cómo interactúan información, procesos y personas, sin convertirse en el sistema entero.","It may change how information, processes and people interact without becoming the whole system."), B("¿Qué capacidad aporta la IA y quién valida sus resultados?","What capability does AI add, and who validates its outputs?"), B("Un copiloto especializado que requiere destino, reglas y responsable.","A specialized copilot that still needs a destination, rules and an accountable person."), ["technology","information","processes","people","rules"], B("El sistema o una autoridad autónoma por defecto.","The system or autonomous authority by default."), B("AI-FIRST EXTENSION: la IA no es el sistema; es un componente que puede cambiar relaciones dentro de él.","AI-FIRST EXTENSION: AI is not the system; it is a component that can change relationships within it."));

  const labels = {
    base: {
      center:B("SISTEMA","SYSTEM"),
      nodes:{people:B("PERSONAS","PEOPLE"),processes:B("PROCESOS","PROCESSES"),information:B("INFORMACIÓN","INFORMATION"),rules:B("REGLAS","RULES"),resources:B("RECURSOS","RESOURCES"),technology:B("TECNOLOGÍA","TECHNOLOGY"),purpose:B("PROPÓSITO","PURPOSE")}
    },
    business:{center:B("SISTEMA DE RESERVAS","RESERVATION SYSTEM"),nodes:{people:B("Clientes y empleados","Customers and employees"),processes:B("Proceso de reserva","Reservation process"),information:B("Disponibilidad","Availability information"),rules:B("Reglas de negocio","Business rules"),resources:B("Recursos disponibles","Available resources"),technology:B("Tecnología","Technology"),purpose:B("Asignar recursos correctamente","Assign resources correctly")}},
    education:{center:B("SISTEMA EDUCATIVO","EDUCATIONAL SYSTEM"),nodes:{people:B("Estudiantes y docentes","Students and teachers"),processes:B("Actividades de aprendizaje","Learning activities"),information:B("Evaluación y horarios","Assessment and schedules"),rules:B("Currículo y políticas","Curriculum and policies"),resources:B("Recursos educativos","Educational resources"),technology:B("Tecnología","Technology"),purpose:B("Aprendizaje","Learning")}},
    biology:{center:B("SISTEMA CIRCULATORIO","CIRCULATORY SYSTEM"),nodes:{people:B("Corazón","Heart"),processes:B("Circulación","Circulation"),information:B("Señales","Signals"),rules:B("Regulación","Regulation"),resources:B("Sangre","Blood"),technology:B("Órganos e intercambio","Organs and exchange"),purpose:B("Transportar y regular","Transport and regulate")}},
    psychology:{center:B("SISTEMA DE APRENDIZAJE","LEARNING SYSTEM"),nodes:{people:B("Atención","Attention"),processes:B("Práctica","Practice"),information:B("Memoria","Memory"),rules:B("Retroalimentación","Feedback"),resources:B("Contexto","Context"),technology:B("Emoción","Emotion"),purpose:B("Aprender","Learn")}},
    music:{center:B("ORQUESTA","ORCHESTRA"),nodes:{people:B("Músicos","Musicians"),processes:B("Coordinación","Coordination"),information:B("Partitura","Score"),rules:B("Dirección","Conductor"),resources:B("Instrumentos","Instruments"),technology:B("Acústica","Acoustics"),purpose:B("Interpretación conjunta","Shared performance")}}
  };
  const domainNames = {base:B("MODELO BASE","BASE MODEL"),business:B("NEGOCIOS","BUSINESS"),education:B("EDUCACIÓN","EDUCATION"),biology:B("BIOLOGÍA","BIOLOGY"),psychology:B("PSICOLOGÍA","PSYCHOLOGY"),music:B("MÚSICA","MUSIC")};
  let domain = "base";

  const node = (key, cls) => `<button type="button" class="d1-node ${cls}" data-d1-key="${key}"><span>${T(labels[domain].nodes[key] || C[key].title)}</span></button>`;
  const baseEdges = ["people","processes","information","rules","resources","technology","purpose"].map(key => `<line data-d1-edge data-from="system" data-to="${key}" x1="500" y1="310" x2="${{purpose:500,people:250,processes:760,information:900,technology:700,resources:300,rules:100}[key]}" y2="${{purpose:35,people:115,processes:115,information:320,technology:525,resources:525,rules:320}[key]}" />`).join("");

  const diagramHTML = aiOn => {
    const en = isEn();
    return `<div class="d1-definition"><p>${en?"A system is a set of related elements that interact to achieve a purpose.":"Un sistema es un conjunto de elementos relacionados que interactúan para lograr un propósito."}</p><small>${en?"Understanding a system requires more than looking at each part in isolation. We must understand its components, their relationships, and the purpose that connects them.":"No basta con mirar cada parte por separado. Para comprender un sistema debemos observar sus componentes, sus relaciones y el propósito que los conecta."}</small></div><div class="d1-domain-selector" aria-label="${en?"Example domain":"Dominio de ejemplo"}">${Object.keys(labels).map(key=>`<button type="button" data-d1-domain="${key}" class="${domain===key?"is-active":""}">${T(domainNames[key])}</button>`).join("")}</div><div class="d1-canvas ${domain!=="base"?"is-example":""}"><svg class="d1-edges" viewBox="0 0 1000 620" preserveAspectRatio="none" aria-hidden="true">${baseEdges}<g class="d1-ai-edges"><path data-from="ai" data-to="information" d="M850 520 Q980 430 900 320"/><path data-from="ai" data-to="processes" d="M850 520 Q980 230 760 115"/><path data-from="ai" data-to="people" d="M850 520 Q510 390 250 115"/><path class="govern" data-from="rules" data-to="ai" d="M100 320 Q430 650 850 520"/></g></svg><button type="button" class="d1-node d1-system" data-d1-key="system"><small>${domain==="base"?(en?"CONNECTED WHOLE":"CONJUNTO CONECTADO"):(en?"EXAMPLE":"EJEMPLO")}</small><span>${T(labels[domain].center)}</span></button>${node("purpose","d1-purpose")}${node("people","d1-people")}${node("processes","d1-processes")}${node("information","d1-information")}${node("technology","d1-technology")}${node("resources","d1-resources")}${node("rules","d1-rules")}<div class="d1-tech-expansion"><span>${en?"TECHNOLOGY REVEALS":"TECNOLOGÍA REVELA"}</span><div>${node("software","d1-software")}${node("automation","d1-automation")}${node("ai","d1-ai")}</div></div><div class="d1-ai-label analyze">${en?"ANALYZE":"ANALIZAR"}</div><div class="d1-ai-label assist">${en?"ASSIST / AUTOMATE":"ASISTIR / AUTOMATIZAR"}</div><div class="d1-ai-label augment">${en?"AUGMENT":"AMPLIAR CAPACIDAD"}</div><div class="d1-ai-label govern">${en?"CONSTRAIN / GOVERN":"LIMITAR / GOBERNAR"}</div><div class="d1-human-gate">HUMAN GATE</div></div><p class="d1-teaching">${en?"THE SYSTEM IS THE CONNECTED WHOLE. TECHNOLOGY IS PART OF IT, NOT NECESSARILY THE WHOLE.":"EL SISTEMA ES EL CONJUNTO CONECTADO. LA TECNOLOGÍA FORMA PARTE DE ÉL, NO ES NECESARIAMENTE EL TODO."}</p><div class="d1-ai-message"><b>${en?"AI-FIRST EXTENSION":"EXTENSIÓN AI-FIRST"}</b><p>${en?"Artificial intelligence may become a technology capability that analyzes information, assists processes and augments people. Adding AI does not remove purpose, rules, accountability or validation.":"La inteligencia artificial puede integrarse como capacidad tecnológica que analiza información, asiste procesos y amplía capacidades humanas. Agregar IA no elimina el propósito, las reglas, la responsabilidad ni la validación."}</p></div>`;
  };

  const cleanLegacySource = figure => {
    [...figure.children].forEach(child => {
      if (!child.matches(".diagram-heading,.diagram-stage,figcaption") && /SOURCE_METADATA_PENDING/.test(child.textContent || "")) child.remove();
    });
  };

  const render = () => {
    const root = document.querySelector("#week-1");
    const figures = root ? [...root.querySelectorAll(".lesson-diagram")].slice(0,2) : [];
    if (!root || figures.length < 2) return;
    const aiOn = root.classList.contains("is-ai-lens");
    const signature = `${isEn()?"en":"es"}-${aiOn?"ai":"base"}-${domain}`;
    if (figures[0].dataset.d1Master === signature) return;
    figures[0].dataset.d1Master = signature;
    root.querySelector(".w1i-morph")?.remove();
    cleanLegacySource(figures[0]);
    cleanLegacySource(figures[1]);

    const en = isEn();
    const h1 = figures[0].querySelector(".diagram-heading");
    const s1 = figures[0].querySelector(".diagram-stage");
    const c1 = figures[0].querySelector("figcaption");
    h1.innerHTML = `<small>${en?"DIAGRAM 01":"DIAGRAMA 01"}</small><h3>${en?"WHAT IS A SYSTEM?":"¿QUÉ ES UN SISTEMA?"}</h3>`;
    s1.className = "diagram-stage d1-stage";
    s1.innerHTML = diagramHTML(aiOn);
    c1.innerHTML = `<span>${en?"The parts matter. The relationships matter too.":"Las partes importan. Las relaciones también."}</span><span class="d1-source">${SOURCE.source_title} · ${SOURCE.status}</span>`;

    const h2 = figures[1].querySelector(".diagram-heading");
    const s2 = figures[1].querySelector(".diagram-stage");
    const c2 = figures[1].querySelector("figcaption");
    h2.innerHTML = `<small>${en?"DIAGRAM 02":"DIAGRAMA 02"}</small><h3>${en?"SYSTEM ≠ SOFTWARE":"SISTEMA ≠ SOFTWARE"}</h3>`;
    s2.className = "diagram-stage d2-stage";
    s2.innerHTML = `<div class="d2-boundary"><b>${en?"SYSTEM":"SISTEMA"}</b><div class="d2-components"><span>${en?"PEOPLE":"PERSONAS"}</span><span>${en?"PROCESSES":"PROCESOS"}</span><span>${en?"INFORMATION":"INFORMACIÓN"}</span><span>${en?"RULES":"REGLAS"}</span><span>${en?"RESOURCES":"RECURSOS"}</span><div class="d2-tech"><strong>${en?"TECHNOLOGY":"TECNOLOGÍA"}</strong><span>${en?"SOFTWARE":"SOFTWARE"}</span></div></div></div><p>${en?"Software can support a system. It does not represent the entire system.":"El software puede apoyar a un sistema. No representa el sistema completo."}</p>`;
    c2.innerHTML = `<span>${en?"Software is one possible component inside technology and the larger system.":"El software es un posible componente dentro de la tecnología y del sistema mayor."}</span><span class="d1-source">${SOURCE.source_title} · ${SOURCE.status}</span>`;

    let cursor = figures[0].nextElementSibling;
    while (cursor && cursor !== figures[1]) { const next = cursor.nextElementSibling; cursor.remove(); cursor = next; }
    const transition = document.createElement("section");
    transition.className = "d1-to-d2";
    transition.innerHTML = `<div class="d1-focus-shift"><span class="soft">${en?"PEOPLE · PROCESSES · INFORMATION · RULES · RESOURCES":"PERSONAS · PROCESOS · INFORMACIÓN · REGLAS · RECURSOS"}</span><strong>${en?"SYSTEM":"SISTEMA"}</strong><i>→</i><strong class="tech">${en?"TECHNOLOGY":"TECNOLOGÍA"}</strong><i>→</i><strong class="software">SOFTWARE</strong></div><p>${en?"If software supports a system, do software and system mean the same thing?":"Si usamos software para apoyar al sistema, ¿software y sistema significan lo mismo?"}</p>`;
    figures[1].before(transition);
    validate(figures[0]);
  };

  const validate = figure => {
    const required = ["system","people","processes","information","rules","resources","technology","purpose","software","automation","ai"];
    const rendered = [...figure.querySelectorAll("[data-d1-key]")].map(node=>node.dataset.d1Key);
    const unresolved = required.filter(key=>!C[key] || !rendered.includes(key));
    window.CST212_DIAGRAM01_VALIDATION = { required_keys:required, rendered_keys:[...new Set(rendered)], unresolved_keys:unresolved, passed:unresolved.length===0 };
    figure.dataset.d1Validation = unresolved.length ? "failed" : "passed";
  };

  const ensureUI = () => {
    if (document.querySelector(".d1-popover")) return;
    document.body.insertAdjacentHTML("beforeend", `<aside class="d1-popover" hidden></aside><section class="d1-drawer" hidden role="dialog" aria-modal="true"><button type="button" class="d1-drawer-close" data-d1-close aria-label="${isEn()?"Close":"Cerrar"}">×</button><div class="d1-drawer-content"></div></section>`);
  };

  const exampleText = key => {
    if (domain === "base") {
      const examples = {
        system:B("Sistema de reservas: clientes, empleados, disponibilidad, reglas, recursos y tecnología coordinados para asignar correctamente una reserva.","Reservation system: customers, staff, availability, rules, resources and technology coordinated to allocate a reservation correctly."),
        people:B("Cliente, empleado, gerente y proveedor.","Customer, employee, manager and supplier."),
        processes:B("Solicitud → verificación → decisión → resultado.","Request → verification → decision → outcome."),
        information:B("“Kayak disponible el 15 de septiembre” es información útil para decidir.","“Kayak available on September 15” is useful information for a decision."),
        rules:B("Un kayak no puede reservarse dos veces en el mismo horario.","A kayak cannot be booked twice in the same time slot."),
        resources:B("Personas, kayaks, instalaciones, presupuesto e información.","People, kayaks, facilities, budget and information."),
        technology:B("Hardware, software, redes, automatización e inteligencia artificial.","Hardware, software, networks, automation and artificial intelligence."),
        purpose:B("Asignar correctamente recursos disponibles a clientes en momentos determinados.","Correctly allocate available resources to customers at specific times."),
        software:B("Una aplicación web de reservas.","A reservation web application."),
        automation:B("Enviar automáticamente una confirmación después de validar la reserva.","Automatically send a confirmation after validating the reservation."),
        ai:B("Clasificar solicitudes o detectar patrones, con revisión humana cuando la decisión lo requiera.","Classify requests or detect patterns, with human review when the decision requires it.")
      };
      return T(examples[key]);
    }
    return `${T(domainNames[domain])}: ${T(labels[domain].center)} → ${T(labels[domain].nodes[key] || C[key].title)}.`;
  };

  const place = (node,pop) => {
    const rect=node.getBoundingClientRect(), width=Math.min(380,window.innerWidth-24);
    const left=Math.max(12,Math.min(window.innerWidth-width-12,rect.left+rect.width/2-width/2));
    let top=rect.bottom+12; if(top+330>window.innerHeight)top=Math.max(12,rect.top-320);
    Object.assign(pop.style,{width:`${width}px`,left:`${left}px`,top:`${top}px`});
  };
  const openPopover = (node,concept) => {
    ensureUI(); const pop=document.querySelector(".d1-popover");
    pop.innerHTML=`<small>${concept.key==="ai"?"AI-FIRST EXTENSION":"CST212 · WEEK 1"}</small><h4>${T(concept.title)}</h4><dl><dt>${isEn()?"WHAT IS IT?":"QUÉ ES"}</dt><dd>${T(concept.what)}</dd><dt>${isEn()?"WHY IT MATTERS":"POR QUÉ IMPORTA"}</dt><dd>${T(concept.why)}</dd><dt>${isEn()?"METAPHOR":"METÁFORA"}</dt><dd>${T(concept.metaphor)}</dd></dl><button type="button" data-d1-explore="${concept.key}">${isEn()?"Explore deeper":"Explorar más"} →</button>`;
    pop.hidden=false; place(node,pop);
  };
  const openDrawer = concept => {
    ensureUI(); const drawer=document.querySelector(".d1-drawer");
    drawer.querySelector(".d1-drawer-content").innerHTML=`<header><small>${concept.key==="ai"?"AI-FIRST EXTENSION · NOT CST212 CANONICAL":"COURSE / ACADEMIC FOUNDATION · WEEK 1"}</small><h2>${T(concept.title)}</h2>${concept.memory?`<p class="d1-memory">${T(concept.memory)}</p>`:""}</header><div class="d1-detail-grid"><section><b>01 ${isEn()?"WHAT IS IT?":"QUÉ ES"}</b><p>${T(concept.what)}</p></section><section><b>02 ${isEn()?"WHY DOES IT MATTER?":"POR QUÉ IMPORTA"}</b><p>${T(concept.why)}</p></section><section><b>03 ${isEn()?"GUIDING QUESTION":"PREGUNTA GUÍA"}</b><p>${T(concept.question)}</p></section><section><b>04 ${isEn()?"METAPHOR":"METÁFORA"}</b><p>${T(concept.metaphor)}</p></section><section class="d1-example-section"><b>05 ${isEn()?"EXAMPLES":"EJEMPLOS"}</b><div class="d1-drawer-domains">${Object.keys(labels).slice(1).map(key=>`<button type="button" data-d1-drawer-domain="${key}" class="${domain===key?"is-active":""}">${T(domainNames[key])}</button>`).join("")}</div><p>${exampleText(concept.key)}</p></section><section><b>06 ${isEn()?"RELATED CONCEPTS":"CONCEPTOS RELACIONADOS"}</b><p>${concept.related.map(key=>T(C[key].title)).join(" · ")}</p></section><section><b>07 ${isEn()?"DO NOT CONFUSE WITH":"NO CONFUNDIR CON"}</b><p>${T(concept.confuse)}</p></section><section><b>08 ${isEn()?"ACADEMIC SOURCE":"FUENTE ACADÉMICA"}</b><p>${SOURCE.source_title} · ${SOURCE.status}</p></section><section class="d1-ai-detail"><b>09 ${isEn()?"AI LENS":"CAPA IA"}</b><p>${T(concept.ai)}</p></section></div>`;
    drawer.hidden=false; document.body.classList.add("d1-drawer-open"); document.querySelector(".d1-popover").hidden=true;
  };

  document.addEventListener("pointerover",event=>{
    const n=event.target.closest?.("[data-d1-key]"); if(!n)return;
    const stage=n.closest(".d1-stage"); if(!stage)return; const key=n.dataset.d1Key;
    stage.querySelectorAll("[data-d1-key]").forEach(other=>other.classList.toggle("is-muted",other!==n && key!=="system" && !C[key].related.includes(other.dataset.d1Key)));
    stage.querySelectorAll("[data-d1-edge]").forEach(edge=>edge.classList.toggle("is-active",key==="system"||edge.dataset.from===key||edge.dataset.to===key));
  });
  document.addEventListener("pointerout",event=>{
    const stage=event.target.closest?.(".d1-stage"); if(!stage)return;
    stage.querySelectorAll(".is-muted,.is-active").forEach(el=>el.classList.remove("is-muted","is-active"));
  });
  document.addEventListener("click",event=>{
    const domainButton=event.target.closest?.("[data-d1-domain]");
    if(domainButton){domain=domainButton.dataset.d1Domain;document.querySelector("#week-1 .lesson-diagram")?.removeAttribute("data-d1-master");render();return;}
    const drawerDomain=event.target.closest?.("[data-d1-drawer-domain]");
    if(drawerDomain){domain=drawerDomain.dataset.d1DrawerDomain;const openKey=document.querySelector(".d1-drawer")?.dataset.openKey;document.querySelector("#week-1 .lesson-diagram")?.removeAttribute("data-d1-master");render();if(openKey)openDrawer(C[openKey]);return;}
    if(event.target.closest?.("[data-d1-close]")){document.querySelector(".d1-drawer").hidden=true;document.body.classList.remove("d1-drawer-open");return;}
    const explore=event.target.closest?.("[data-d1-explore]");
    if(explore){const drawer=document.querySelector(".d1-drawer");drawer.dataset.openKey=explore.dataset.d1Explore;openDrawer(C[explore.dataset.d1Explore]);return;}
    const n=event.target.closest?.("[data-d1-key]");
    if(n&&C[n.dataset.d1Key]){event.preventDefault();event.stopPropagation();openPopover(n,C[n.dataset.d1Key]);return;}
    if(!event.target.closest?.(".d1-popover")){const pop=document.querySelector(".d1-popover");if(pop)pop.hidden=true;}
  },true);
  document.addEventListener("keydown",event=>{if(event.key==="Escape"){const pop=document.querySelector(".d1-popover"),drawer=document.querySelector(".d1-drawer");if(pop)pop.hidden=true;if(drawer)drawer.hidden=true;document.body.classList.remove("d1-drawer-open");}});

  const boot=()=>{ensureUI();render();};
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
  new MutationObserver(()=>requestAnimationFrame(render)).observe(document.documentElement,{childList:true,subtree:true});
})();
