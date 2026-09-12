const makeWeek2Node = ({ id, title, definition, question, metaphor, example, category, x, y, size = 48, layer = "canonical", status = "nuevo", tags = [] }) => ({
  id,
  title,
  shortDefinition: definition,
  question,
  metaphor,
  example,
  weekIntroduced: 2,
  status,
  category,
  layer,
  x,
  y,
  size,
  tags: ["week2", ...tags]
});

const week2Nodes = [
  makeWeek2Node({ id: "project-management", title: "Project Management", definition: "Organizes how an approved project will be delivered within scope, time, cost and quality constraints.", question: "How do we organize delivery?", metaphor: "The navigation plan after deciding the journey is worthwhile.", example: "Define deliverables, work packages, tasks, responsibilities and dependencies.", category: "sdlc", x: 2050, y: 130, size: 66, tags: ["project"] }),
  makeWeek2Node({ id: "project", title: "Project", definition: "Temporary effort with defined scope, beginning, end, sponsor and constraints for time, cost and quality.", question: "What temporary outcome are we organizing?", metaphor: "A bounded expedition with a destination and finish line.", example: "Implementing a new reservation capability for HKA.", category: "business", x: 1870, y: 70, size: 54, tags: ["scope"] }),
  makeWeek2Node({ id: "ongoing-operation", title: "Ongoing Operation", definition: "Continuous work that sustains regular organizational activity rather than producing a temporary project outcome.", question: "Is this temporary project work or continuing operations?", metaphor: "Running the restaurant every day rather than redesigning how it works.", example: "Daily kayak rental service after the project has ended.", category: "business", x: 2240, y: 70, size: 50, tags: ["distinction"] }),
  makeWeek2Node({ id: "project-decomposition", title: "Project Decomposition", definition: "Progressively divides an approved project into manageable deliverables, work packages and tasks.", question: "How do we organize an approved project?", metaphor: "Turning a mountain into a climbable sequence of stages.", example: "Break a reservation-system project into training, data migration, configuration and rollout work.", category: "modeling", x: 2050, y: 290, size: 62, tags: ["wbs"] }),
  makeWeek2Node({ id: "wbs", title: "Work Breakdown Structure (WBS / EDT)", definition: "Hierarchical decomposition of project work into deliverables, work packages and tasks.", question: "What work must be completed?", metaphor: "A project tree whose leaves are manageable work.", example: "Project -> Reservation capability -> Booking work package -> Configure booking rules.", category: "modeling", x: 2050, y: 450, size: 68, tags: ["decomposition"] }),
  makeWeek2Node({ id: "deliverable", title: "Deliverable", definition: "A verifiable project output produced to satisfy part of the approved scope.", question: "What tangible or verifiable result must exist?", metaphor: "A completed destination on the project route.", example: "Approved reservation workflow or deployed booking module.", category: "modeling", x: 1880, y: 590, size: 48, tags: ["wbs"] }),
  makeWeek2Node({ id: "work-package", title: "Work Package", definition: "A manageable unit of project work that can be estimated, assigned and controlled.", question: "What work can one owner plan and manage?", metaphor: "A labeled box of related work inside a deliverable.", example: "Data migration preparation for the reservation capability.", category: "modeling", x: 2050, y: 650, size: 50, tags: ["wbs"] }),
  makeWeek2Node({ id: "task", title: "Task", definition: "A specific piece of work with duration, effort, resources, responsibility, dependencies and cost.", question: "What action must be performed?", metaphor: "The smallest scheduled move that advances the project.", example: "Clean customer records before migration.", category: "modeling", x: 2220, y: 590, size: 48, tags: ["wbs"] }),
  makeWeek2Node({ id: "task-attributes", title: "Task Attributes", definition: "Duration, effort, resources, responsibility, dependencies and cost used to plan and control a task.", question: "What must we know to schedule and assign this task?", metaphor: "The task's project identity card.", example: "Eight hours of effort, two calendar days, one analyst and one prerequisite.", category: "business", x: 2380, y: 690, size: 47, tags: ["task"] }),
  makeWeek2Node({ id: "dependencies", title: "Dependencies", definition: "Logical relationships that determine which tasks must precede or follow others.", question: "What must happen before this work can begin?", metaphor: "Links in a chain where order changes the finish date.", example: "Data must be cleaned before it can be migrated.", category: "sdlc", x: 1870, y: 840, size: 52, tags: ["schedule"] }),
  makeWeek2Node({ id: "schedule", title: "Schedule", definition: "Time-based arrangement of project tasks, dependencies, milestones and resources.", question: "When can the work occur?", metaphor: "The project route placed on a calendar.", example: "Sequence analysis, configuration, migration, testing and rollout.", category: "sdlc", x: 2050, y: 860, size: 52, tags: ["time"] }),
  makeWeek2Node({ id: "critical-path", title: "Critical Path", definition: "Sequence of dependent tasks that determines the minimum possible project duration.", question: "Which dependent sequence controls the earliest finish?", metaphor: "The path with no schedule slack, not the path with the hardest work.", example: "Requirements approval -> configuration -> integration test -> launch.", category: "sdlc", x: 2230, y: 840, size: 56, tags: ["schedule"] }),
  makeWeek2Node({ id: "milestone", title: "Milestone", definition: "A significant checkpoint or event with no project work duration of its own.", question: "What meaningful event signals progress?", metaphor: "A road marker, not the driving itself.", example: "Requirements approved.", category: "business", x: 2400, y: 860, size: 45, tags: ["task-distinction"] }),
  makeWeek2Node({ id: "effort-duration", title: "Effort != Calendar Duration", definition: "Effort measures work consumed; duration measures elapsed calendar time.", question: "How much work and how much elapsed time are different?", metaphor: "Eight hours of work may span one day or an entire week.", example: "Two specialists each contribute four hours across three calendar days.", category: "business", x: 2050, y: 1040, size: 58, tags: ["resources", "cost"] }),
  makeWeek2Node({ id: "requirements-discovery", title: "Requirements Discovery", definition: "Evidence-based process for discovering, classifying and validating what the system must provide or constrain.", question: "What does the system need?", metaphor: "Turning stakeholder reality into a shared model of need.", example: "Interviews and observation reveal reservation inputs, rules, outputs, performance and security needs.", category: "sdlc", x: 2700, y: 150, size: 68, tags: ["analysis"] }),
  makeWeek2Node({ id: "fact-finding", title: "Fact Finding", definition: "Systematic collection of evidence about stakeholders, current work, information and needs.", question: "What facts must we gather before stating requirements?", metaphor: "Fieldwork before drawing the map.", example: "Interview staff, observe rentals and review current records.", category: "people", x: 2520, y: 350, size: 58, tags: ["discovery"] }),
  makeWeek2Node({ id: "candidate-requirements", title: "Candidate Requirements", definition: "Potential statements of need that remain provisional until classified and validated.", question: "What might the system need to provide or constrain?", metaphor: "Draft evidence cards awaiting confirmation.", example: "The system should show real-time kayak availability.", category: "sdlc", x: 2700, y: 500, size: 55, tags: ["candidate"] }),
  makeWeek2Node({ id: "requirement-classification", title: "Requirement Classification", definition: "Organizes candidate requirements into input, process, output, performance and security categories.", question: "What kind of requirement is this?", metaphor: "Sorting evidence into five useful lenses.", example: "Response time belongs to performance; access control belongs to security.", category: "modeling", x: 2880, y: 620, size: 52, tags: ["requirements"] }),
  makeWeek2Node({ id: "requirement-validation", title: "Requirement Validation", definition: "Checks requirements against evidence, stakeholder confirmation and acceptance criteria.", question: "Is this requirement correct, necessary, clear and testable?", metaphor: "A checkpoint between a plausible statement and an agreed need.", example: "Staff confirm the reservation conflict rule and its exceptions.", category: "people", x: 2700, y: 760, size: 55, tags: ["requirements"] }),
  makeWeek2Node({ id: "requirements-model", title: "Requirements Model", definition: "Structured representation of validated system needs and constraints.", question: "How do validated requirements fit together?", metaphor: "The shared blueprint of what, before deciding how.", example: "A connected model of reservation functions, data, performance and security needs.", category: "modeling", x: 2700, y: 910, size: 58, tags: ["requirements"] }),
  makeWeek2Node({ id: "what-vs-how", title: "WHAT != HOW", definition: "Requirements describe what the system must provide or constrain; implementation describes how a chosen solution will do it.", question: "Are we stating the need or prematurely choosing the implementation?", metaphor: "Specify the destination before selecting the vehicle.", example: "WHAT: prevent double booking. HOW: not necessarily a particular database or framework.", category: "system", x: 2900, y: 330, size: 58, tags: ["distinction"] }),
  makeWeek2Node({ id: "requirement-input", title: "Input Requirement", definition: "Defines information or events that enter the system.", question: "What enters?", metaphor: "Ingredients entering a process.", example: "Customer, date, kayak type and contact details.", category: "modeling", x: 2480, y: 1080, size: 48, tags: ["requirement-category"] }),
  makeWeek2Node({ id: "requirement-process", title: "Process Requirement", definition: "Defines transformations, rules or activities the system must perform.", question: "What happens?", metaphor: "The work done to transform input.", example: "Check availability and prevent conflicting reservations.", category: "modeling", x: 2700, y: 1080, size: 48, tags: ["requirement-category"] }),
  makeWeek2Node({ id: "requirement-output", title: "Output Requirement", definition: "Defines information or results the system must produce.", question: "What comes out?", metaphor: "The result delivered after processing.", example: "Reservation confirmation and updated availability.", category: "modeling", x: 2920, y: 1080, size: 48, tags: ["requirement-category"] }),
  makeWeek2Node({ id: "requirement-performance", title: "Performance Requirement", definition: "Defines how well or how quickly the system must operate.", question: "How well?", metaphor: "The service level across the whole flow.", example: "Availability results must appear within two seconds.", category: "business", x: 2580, y: 1250, size: 50, tags: ["cross-cutting"] }),
  makeWeek2Node({ id: "requirement-security", title: "Security Requirement", definition: "Defines how information, actions and access must be protected.", question: "How protected?", metaphor: "Guardrails surrounding the entire flow.", example: "Only authorized staff may change rental history.", category: "business", x: 2820, y: 1250, size: 50, tags: ["cross-cutting"] }),
  makeWeek2Node({ id: "interview", title: "Interview", definition: "Direct conversation used to explore experience, needs, rules and exceptions.", question: "What can stakeholders explain in depth?", metaphor: "A guided window into lived work.", example: "Interview Linda about reservation conflicts.", category: "people", x: 2320, y: 360, size: 38, tags: ["fact-finding"] }),
  makeWeek2Node({ id: "questionnaire", title: "Questionnaire", definition: "Structured questions used to gather comparable information from many people.", question: "What can we collect consistently at scale?", metaphor: "The same measuring stick across many voices.", example: "Survey customers about booking preferences.", category: "people", x: 2370, y: 450, size: 38, tags: ["fact-finding"] }),
  makeWeek2Node({ id: "observation", title: "Observation", definition: "Watching work as it actually occurs to detect behaviors, delays and exceptions.", question: "What happens in practice?", metaphor: "Seeing the process rather than only hearing its description.", example: "Observe how the whiteboard is updated during peak hours.", category: "people", x: 2400, y: 550, size: 38, tags: ["fact-finding"] }),
  makeWeek2Node({ id: "focus-group", title: "Focus Group", definition: "Facilitated group discussion used to compare viewpoints and discover shared concerns.", question: "Where do stakeholder perspectives agree or conflict?", metaphor: "Several lenses focused on the same process.", example: "Discuss reservation needs with instructors and rental staff.", category: "people", x: 2440, y: 650, size: 38, tags: ["fact-finding"] }),
  makeWeek2Node({ id: "current-system-review", title: "Current-System Review", definition: "Review of existing records, forms, software and procedures to understand the present system.", question: "What does the current system reveal?", metaphor: "Reading the footprints left by current work.", example: "Review Access tables, loose-leaf records and the availability board.", category: "people", x: 2990, y: 450, size: 40, tags: ["fact-finding"] }),
  makeWeek2Node({ id: "process-mapping", title: "Process Mapping", definition: "Visual representation of current activities, decisions, handoffs and flows.", question: "How does work move today?", metaphor: "A route map for organizational work.", example: "Map inquiry through booking, payment and equipment handoff.", category: "modeling", x: 3020, y: 550, size: 40, tags: ["fact-finding"] }),
  makeWeek2Node({ id: "research-technique", title: "Research", definition: "Study of relevant external practices, standards, technologies or evidence.", question: "What can outside evidence teach us?", metaphor: "Looking beyond the current walls for tested knowledge.", example: "Review reservation practices and security guidance.", category: "people", x: 3050, y: 650, size: 38, tags: ["fact-finding"] }),
  makeWeek2Node({ id: "fdd", title: "Functional Decomposition Diagram (FDD)", definition: "Hierarchical decomposition of business or system functions into smaller functions.", question: "What functions does the business or system perform?", metaphor: "A function tree, not a project work plan.", example: "Manage Reservations -> Create, Check availability, Modify, Cancel.", category: "modeling", x: 3120, y: 900, size: 66, tags: ["decomposition"] }),
  makeWeek2Node({ id: "wbs-vs-fdd", title: "WBS != FDD", definition: "Both use decomposition, but WBS decomposes project work while FDD decomposes business or system functions.", question: "Are we decomposing delivery work or system behavior?", metaphor: "One tree builds the project; the other explains the system.", example: "WBS: conduct migration. FDD: manage reservations.", category: "system", x: 3100, y: 1080, size: 58, tags: ["critical-distinction"] }),
  makeWeek2Node({ id: "development-approaches", title: "Development Approaches", definition: "Week 2 cluster that positions SDLC, JAD, RAD and Agile without treating them as identical categories.", question: "How do these approaches support systems development differently?", metaphor: "Different lenses and working patterns around development.", example: "JAD intensifies collaboration while RAD accelerates prototyping.", category: "sdlc", x: 3350, y: 180, size: 62, tags: ["forum-2-1"] }),
  makeWeek2Node({ id: "jad", title: "JAD", definition: "Collaborative facilitated approach for intensive stakeholder and user participation, especially during requirements work.", question: "How can stakeholders discover requirements together?", metaphor: "A focused workshop that replaces scattered conversations.", example: "Facilitated reservation requirements session with staff and sponsor.", category: "people", x: 3250, y: 350, size: 46, tags: ["forum-2-1"] }),
  makeWeek2Node({ id: "rad", title: "RAD", definition: "Rapid development approach emphasizing prototyping and accelerated feedback.", question: "How can prototypes shorten the learning cycle?", metaphor: "Build a testable sketch quickly, then refine from feedback.", example: "Prototype the booking flow before full implementation.", category: "sdlc", x: 3420, y: 350, size: 46, tags: ["forum-2-1"] }),
  makeWeek2Node({ id: "forum-2-1", title: "Forum 2.1", definition: "Prepared discussion expansion for comparing SDLC, JAD, RAD and Agile accurately.", question: "Where do these approaches overlap and differ?", metaphor: "A comparison table waiting for evidence and discussion.", example: "Discuss lifecycle structure, stakeholder collaboration, prototyping and iteration.", category: "people", x: 3340, y: 500, size: 44, tags: ["ready-for-expansion"] }),
  makeWeek2Node({ id: "human-governance-layer", title: "Human / Governance Layer", definition: "Humans define intent, frame problems, approve boundaries, validate evidence, authorize decisions, accept risk and validate requirements.", question: "Which judgments remain accountable human decisions?", metaphor: "The steering layer that sets direction and accepts consequences.", example: "A sponsor approves scope while stakeholders validate requirements.", category: "ai", layer: "ai-first-overlay", x: 3500, y: 720, size: 62, tags: ["governance"] }),
  makeWeek2Node({ id: "agent-execution-layer", title: "Agent Execution Layer", definition: "Agents may draft decompositions, analyze evidence, generate plans and requirements, implement, test, document and monitor within defined boundaries.", question: "What execution can agents perform under explicit constraints?", metaphor: "A capable engine operating inside a human-defined route and guardrails.", example: "An agent proposes a WBS and dependency hypothesis for review.", category: "ai", layer: "ai-first-overlay", x: 3500, y: 900, size: 62, tags: ["execution"] }),
  makeWeek2Node({ id: "humans-steer-agents-execute", title: "Humans Steer / Agents Execute", definition: "Human governance directs intent and accountability while agents execute candidate work; AI may also assist human steering.", question: "Who steers, who executes and who validates?", metaphor: "Human navigation with agent propulsion and instrument assistance.", example: "Humans approve acceptance criteria; agents implement and test against them.", category: "ai", layer: "ai-first-overlay", x: 3500, y: 1080, size: 58, tags: ["principle"] }),
  makeWeek2Node({ id: "ai-output-candidate", title: "AI Output = Candidate / Hypothesis", definition: "AI output does not become truth until validated through evidence, tests, stakeholder confirmation, human decision or acceptance criteria.", question: "What evidence converts this output from plausible to accepted?", metaphor: "A draft submitted for proof, not a verdict.", example: "An AI-generated requirement is reviewed with stakeholders before adoption.", category: "ai", layer: "ai-first-overlay", x: 3320, y: 1230, size: 56, tags: ["validation"] }),
  makeWeek2Node({ id: "good-ai-wrong-problem", title: "Good AI + Wrong Problem", definition: "Strong AI applied to a wrongly framed problem produces an efficient solution to the wrong problem.", question: "Are we accelerating the correct problem?", metaphor: "A fast train on the wrong track.", example: "Automating a broken approval process without correcting its rules.", category: "ai", layer: "ai-first-overlay", x: 3500, y: 1270, size: 54, tags: ["week1-connection"] }),
  makeWeek2Node({ id: "ai-iterative-loop", title: "AI-First Iterative Loop", definition: "Intent -> Plan -> Execute -> Test/Evaluate -> Evidence -> Review -> Iterate.", question: "How does evidence continuously reshape AI-assisted execution?", metaphor: "A learning loop with explicit review gates.", example: "Generate a candidate FDD, test it against interviews, review gaps and iterate.", category: "ai", layer: "ai-first-overlay", x: 3680, y: 1230, size: 58, tags: ["extension"] }),
  makeWeek2Node({ id: "industry-reference-evidence", title: "Industry Reference / Evidence", definition: "External 2026 references from OpenAI, Microsoft and Google used as evidence for AI-First interpretation, not as CST212 canonical content.", question: "What current industry evidence supports or challenges this interpretation?", metaphor: "A bridge from academic foundations to contemporary practice.", example: "Agent-first engineering, agent lifecycle and execution-boundary references.", category: "ai", layer: "industry-reference", x: 3850, y: 430, size: 60, status: "transversal", tags: ["industry-reference"] }),
  makeWeek2Node({ id: "human-review", title: "Human Review", definition: "Explicit review that decides whether a learning-derived candidate is supported, safe and useful enough to progress.", question: "Should this candidate move forward?", metaphor: "A bridge gate that does not open automatically.", example: "Review course provenance, evidence and risk before promotion.", category: "people", layer: "quantum-candidate", x: 3850, y: 620, size: 52, status: "experimental", tags: ["transfer"] }),
  makeWeek2Node({ id: "possible-future-promotion", title: "Possible Future Promotion", definition: "Potential manual promotion after human review; no candidate automatically becomes Quantum canonical.", question: "Has a human governance process approved promotion?", metaphor: "Graduation after evidence and review, never automatic elevation.", example: "A candidate gate may be adopted later after explicit review.", category: "quantum", layer: "quantum-candidate", x: 3850, y: 790, size: 54, status: "experimental", tags: ["not-promoted"] }),
  makeWeek2Node({ id: "qaif-project-decomposition-gate", title: "Quantum Candidate: Project Decomposition Gate", definition: "Learning-derived candidate flow from approved problem through scope, deliverables, work packages, tasks, dependencies, resources and schedule.", question: "Is the approved project decomposed well enough to organize delivery?", metaphor: "A candidate gate between project approval and executable work.", example: "Approved Problem -> Scope -> Deliverables -> Work Packages -> Tasks -> Dependencies -> Resources -> Schedule/Critical Path.", category: "quantum", layer: "quantum-candidate", x: 3850, y: 1030, size: 64, status: "experimental", tags: ["candidate-gate"] }),
  makeWeek2Node({ id: "qaif-requirements-discovery-gate", title: "Quantum Candidate: Requirements Discovery Gate", definition: "Learning-derived candidate flow from understood problem through stakeholders, fact finding, functional decomposition, candidate requirements, classification and validation.", question: "Are requirements evidence-based and validated before implementation?", metaphor: "A candidate checkpoint between understanding and building.", example: "Understood Problem -> Stakeholders -> Fact Finding -> FDD -> Candidate Requirements -> Classification -> Validation.", category: "quantum", layer: "quantum-candidate", x: 3850, y: 1240, size: 64, status: "experimental", tags: ["candidate-gate"] })
];

const week2Edges = [
  ["decision", "project-management", "sequence", "GO organizes delivery"],
  ["project", "project-management", "contains", "temporary effort"],
  ["project", "ongoing-operation", "interaction", "not the same"],
  ["project-management", "project-decomposition", "sequence", "organizes"],
  ["project-decomposition", "wbs", "sequence", "uses"],
  ["wbs", "deliverable", "contains", "decomposes"],
  ["deliverable", "work-package", "contains", "decomposes"],
  ["work-package", "task", "contains", "decomposes"],
  ["task", "task-attributes", "contains", "planned by"],
  ["task", "dependencies", "sequence", "linked by"],
  ["dependencies", "schedule", "sequence", "shape"],
  ["schedule", "critical-path", "produces", "reveals"],
  ["milestone", "schedule", "influence", "checkpoint"],
  ["effort-duration", "physical-resources", "influence", "resources"],
  ["physical-resources", "cronograma", "influence", "time"],
  ["cronograma", "economica", "influence", "cost"],
  ["economica", "viabilidad", "influence", "feasibility"],
  ["project-management", "analisis", "sequence", "enables"],
  ["underlying-problem", "requirements-discovery", "sequence", "understood problem"],
  ["stakeholders", "fact-finding", "sequence", "engage"],
  ["requirements-discovery", "fact-finding", "contains", "step"],
  ["fact-finding", "candidate-requirements", "produces", "evidence"],
  ["candidate-requirements", "requirement-classification", "sequence", "classify"],
  ["requirement-classification", "requirement-validation", "sequence", "validate"],
  ["requirement-validation", "requirements-model", "produces", "model"],
  ["what-vs-how", "requirements-discovery", "influence", "principle"],
  ["requirements-model", "requirement-input", "contains", "category"],
  ["requirement-input", "requirement-process", "sequence", "flow"],
  ["requirement-process", "requirement-output", "sequence", "flow"],
  ["requirement-performance", "requirements-model", "influence", "cross-cutting"],
  ["requirement-security", "requirements-model", "influence", "cross-cutting"],
  ["fact-finding", "interview", "contains", "technique"],
  ["fact-finding", "questionnaire", "contains", "technique"],
  ["fact-finding", "observation", "contains", "technique"],
  ["fact-finding", "focus-group", "contains", "technique"],
  ["fact-finding", "current-system-review", "contains", "technique"],
  ["fact-finding", "process-mapping", "contains", "technique"],
  ["fact-finding", "research-technique", "contains", "technique"],
  ["requirements-model", "fdd", "contains", "functional view"],
  ["wbs", "wbs-vs-fdd", "interaction", "project view"],
  ["fdd", "wbs-vs-fdd", "interaction", "system view"],
  ["development-approaches", "sdlc", "interaction", "lifecycle"],
  ["development-approaches", "jad", "contains", "collaboration"],
  ["development-approaches", "rad", "contains", "rapid prototyping"],
  ["development-approaches", "agile", "interaction", "iterative family"],
  ["forum-2-1", "development-approaches", "sequence", "ready to expand"],
  ["human-governance-layer", "agent-execution-layer", "interaction", "steer / execute"],
  ["humans-steer-agents-execute", "human-governance-layer", "contains", "principle"],
  ["humans-steer-agents-execute", "agent-execution-layer", "contains", "principle"],
  ["agent-execution-layer", "ai-output-candidate", "produces", "candidate"],
  ["ai-output-candidate", "requirement-validation", "sequence", "must validate"],
  ["good-ai-wrong-problem", "problem-framing-gate", "feedback", "return to problem"],
  ["ai-iterative-loop", "evidence", "feedback", "evaluate"],
  ["cst212-knowledge", "systemic-understanding", "sequence", "interpret"],
  ["systemic-understanding", "ai-first-interpretation", "sequence", "extend"],
  ["ai-first-interpretation", "industry-reference-evidence", "sequence", "compare"],
  ["industry-reference-evidence", "quantum-application-candidate", "sequence", "support candidate"],
  ["quantum-application-candidate", "human-review", "sequence", "requires"],
  ["human-review", "possible-future-promotion", "sequence", "may approve"],
  ["possible-future-promotion", "quantum-application-candidate", "feedback", "never automatic"],
  ["quantum-application-candidate", "qaif-project-decomposition-gate", "contains", "week 2 candidate"],
  ["quantum-application-candidate", "qaif-requirements-discovery-gate", "contains", "week 2 candidate"],
  ["qaif-project-decomposition-gate", "wbs", "contains", "academic source"],
  ["qaif-requirements-discovery-gate", "requirements-discovery", "contains", "academic source"]
];

const mapData = {
  version: "Week-3-Logical-Modeling-and-Course-Journey",
  currentWeek: 3,
  weeks: [
    { id: "all", label: "All", enabled: true },
    { id: 1, label: "Week 1", enabled: true },
    { id: 2, label: "Week 2", enabled: true },
    { id: 3, label: "Week 3", enabled: false },
    { id: 4, label: "Week 4", enabled: false },
    { id: 5, label: "Week 5", enabled: false },
    { id: 6, label: "Week 6", enabled: false },
    { id: 7, label: "Week 7", enabled: false }
  ],
  statuses: {
    nuevo: { label: "NUEVO", color: "var(--new)" },
    aprendizaje: { label: "EN APRENDIZAJE", color: "var(--learning)" },
    conectado: { label: "CONECTADO", color: "var(--connected)" },
    consolidado: { label: "CONSOLIDADO", color: "var(--consolidated)" },
    transversal: { label: "TRANSVERSAL", color: "var(--transversal)" },
    experimental: { label: "EXPERIMENTAL / CANDIDATE", color: "var(--quantum)" }
  },
  relationshipTypes: {
    sequence: { label: "secuencia", symbol: "->" },
    interaction: { label: "interaccion", symbol: "<->" },
    contains: { label: "contiene", symbol: "⊂" },
    feedback: { label: "retroalimentacion", symbol: "⟳" },
    influence: { label: "influencia", symbol: "---" },
    produces: { label: "produce / transforma", symbol: "->" }
  },
  layers: {
    canonical: { label: "CST212 CANONICAL", color: "var(--sdlc)" },
    systemic: { label: "SYSTEMIC VIEW", color: "var(--system)" },
    ai: { label: "AI-FIRST", color: "var(--new)" },
    quantum: { label: "QUANTUM AI FIRST", color: "var(--quantum)" },
    case: { label: "CASE STUDIES", color: "var(--people)" },
    industry: { label: "INDUSTRY REFERENCE", color: "var(--transversal)" }
  },
  nodes: [
    {
      id: "sis-info",
      title: "Sistemas de informacion",
      shortDefinition: "Conjunto organizado de personas, procesos, datos y tecnologia que genera valor para una organizacion.",
      question: "Como se convierte informacion en valor organizacional?",
      metaphor: "Como un sistema nervioso: recibe senales, las procesa y ayuda a responder.",
      example: "Un sistema de matriculas conecta estudiantes, pagos, cursos, docentes y reportes.",
      weekIntroduced: 0,
      status: "conectado",
      category: "system",
      x: 520,
      y: 330,
      size: 92,
      tags: ["nucleo", "sistema", "valor"]
    },
    {
      id: "personas",
      title: "Personas",
      shortDefinition: "Actores que usan, operan, patrocinan o son afectados por el sistema.",
      question: "Quienes participan y que necesitan?",
      metaphor: "La parte humana que le da sentido al sistema.",
      example: "Usuarios finales, gerentes, clientes y equipo de TI.",
      weekIntroduced: 0,
      status: "conectado",
      category: "people",
      parent: "sis-info",
      x: 340,
      y: 210,
      size: 52,
      tags: ["componentes"]
    },
    {
      id: "procesos",
      title: "Procesos",
      shortDefinition: "Actividades coordinadas que producen resultados para la organizacion.",
      question: "Que trabajo se realiza y en que orden?",
      metaphor: "La ruta que sigue el trabajo para llegar a un resultado.",
      example: "Recibir una solicitud, validarla, aprobarla y registrarla.",
      weekIntroduced: 0,
      status: "aprendizaje",
      category: "business",
      parent: "sis-info",
      x: 520,
      y: 180,
      size: 56,
      tags: ["componentes", "negocio"]
    },
    {
      id: "datos",
      title: "Datos",
      shortDefinition: "Hechos registrados que permiten operar, medir y decidir.",
      question: "Que informacion necesita el sistema?",
      metaphor: "La materia prima que el sistema transforma en conocimiento util.",
      example: "Clientes, pedidos, cursos, pagos, fechas y estados.",
      weekIntroduced: 0,
      status: "conectado",
      category: "system",
      parent: "sis-info",
      x: 705,
      y: 220,
      size: 52,
      tags: ["componentes"]
    },
    {
      id: "tecnologia",
      title: "Tecnologia",
      shortDefinition: "Herramientas, infraestructura y software que soportan el sistema.",
      question: "Con que medios se implementa la solucion?",
      metaphor: "La caja de herramientas que permite ejecutar el diseno.",
      example: "Base de datos, aplicacion web, red, nube y controles de seguridad.",
      weekIntroduced: 0,
      status: "conectado",
      category: "system",
      parent: "sis-info",
      x: 720,
      y: 395,
      size: 56,
      tags: ["componentes"]
    },
    {
      id: "valor",
      title: "Valor organizacional",
      shortDefinition: "Beneficio medible o percibido que justifica el sistema.",
      question: "Que gana la organizacion?",
      metaphor: "El resultado por el que vale la pena construir el sistema.",
      example: "Reducir tiempos, mejorar decisiones o aumentar satisfaccion del cliente.",
      weekIntroduced: 0,
      status: "conectado",
      category: "business",
      x: 520,
      y: 515,
      size: 64,
      tags: ["valor", "organizacion"]
    },
    {
      id: "organizacion",
      title: "Organizacion",
      shortDefinition: "Contexto de mision, vision, estrategia, estructura, cultura, recursos y reglas.",
      question: "En que contexto existe el sistema?",
      metaphor: "El terreno donde el sistema debe funcionar.",
      example: "Una universidad con politicas academicas, presupuesto y metas de retencion.",
      weekIntroduced: 0,
      status: "conectado",
      category: "business",
      x: 190,
      y: 430,
      size: 72,
      tags: ["negocio", "estrategia"]
    },
    {
      id: "necesidades",
      title: "Necesidades del negocio",
      shortDefinition: "Problemas, oportunidades, objetivos y necesidades de usuarios que motivan un proyecto.",
      question: "Que problema u oportunidad debe resolverse?",
      metaphor: "La razon que pone el proyecto en movimiento.",
      example: "Demoras en aprobaciones, reportes manuales o baja visibilidad de indicadores.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      x: 185,
      y: 270,
      size: 68,
      tags: ["semana1", "planeacion"]
    },
    {
      id: "stakeholders",
      title: "Usuarios y stakeholders",
      shortDefinition: "Personas o grupos que usan, influyen o son impactados por el sistema.",
      question: "A quien afecta la solucion?",
      metaphor: "Las voces que deben escucharse antes de decidir.",
      example: "Clientes, gerencia, areas de negocio, TI y usuarios finales.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "people",
      x: 215,
      y: 105,
      size: 64,
      tags: ["semana1", "actores"]
    },
    {
      id: "sdlc",
      title: "SDLC",
      shortDefinition: "Ciclo de vida para planear, analizar, disenar, implementar y mantener sistemas.",
      question: "Como evoluciona una necesidad hasta una solucion?",
      metaphor: "El mapa de ruta de un proyecto de sistemas.",
      example: "Primero se justifica, luego se analizan requisitos, se disena, se implementa y se soporta.",
      weekIntroduced: 1,
      status: "aprendizaje",
      category: "sdlc",
      x: 1015,
      y: 325,
      size: 72,
      tags: ["semana1", "metodo"]
    },
    {
      id: "planeacion",
      title: "Planeacion",
      shortDefinition: "Fase inicial donde se justifica el proyecto y se decide si debe avanzar.",
      question: "Por que debemos realizar este proyecto?",
      metaphor: "La puerta de entrada que evita construir sin proposito.",
      example: "Evaluar si conviene crear un portal de autoservicio para estudiantes.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "sdlc",
      x: 940,
      y: 115,
      size: 66,
      tags: ["semana1", "sdlc", "activa"]
    },
    {
      id: "analisis",
      title: "Analisis",
      shortDefinition: "Fase donde se entiende que necesita el sistema y que requisitos debe cumplir.",
      question: "Que necesita el sistema?",
      metaphor: "Escuchar y ordenar antes de construir.",
      example: "Definir requisitos funcionales y necesidades de usuarios.",
      weekIntroduced: 1,
      status: "aprendizaje",
      category: "sdlc",
      x: 1140,
      y: 170,
      size: 60,
      tags: ["sdlc"]
    },
    {
      id: "diseno",
      title: "Diseno",
      shortDefinition: "Fase donde se decide como se construira la solucion.",
      question: "Como se construira?",
      metaphor: "El plano antes de levantar la solucion.",
      example: "Modelar interfaces, datos, arquitectura y componentes.",
      weekIntroduced: 1,
      status: "aprendizaje",
      category: "sdlc",
      x: 1190,
      y: 335,
      size: 58,
      tags: ["sdlc"]
    },
    {
      id: "implementacion",
      title: "Implementacion",
      shortDefinition: "Construccion, prueba y puesta en marcha del sistema.",
      question: "Como lo hacemos funcionar?",
      metaphor: "Convertir el plano en algo usable.",
      example: "Codificar, probar, migrar datos y capacitar usuarios.",
      weekIntroduced: 1,
      status: "aprendizaje",
      category: "sdlc",
      x: 1110,
      y: 500,
      size: 62,
      tags: ["sdlc"]
    },
    {
      id: "soporte",
      title: "Soporte y seguridad",
      shortDefinition: "Mantenimiento, mejora, proteccion y continuidad del sistema.",
      question: "Como lo mantenemos y protegemos?",
      metaphor: "Cuidar el sistema despues de ponerlo a vivir.",
      example: "Actualizar, monitorear, corregir fallas y gestionar accesos.",
      weekIntroduced: 1,
      status: "aprendizaje",
      category: "sdlc",
      x: 900,
      y: 515,
      size: 64,
      tags: ["sdlc", "seguridad"]
    },
    {
      id: "caso-negocio",
      title: "Caso de negocio",
      shortDefinition: "Argumento que conecta necesidad, estrategia, solucion propuesta, viabilidad y decision.",
      question: "Por que este proyecto merece recursos?",
      metaphor: "La historia razonada que justifica invertir.",
      example: "Demostrar que automatizar solicitudes reduce costos y mejora servicio.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      x: 735,
      y: 65,
      size: 66,
      tags: ["semana1", "planeacion"]
    },
    {
      id: "viabilidad",
      title: "Viabilidad",
      shortDefinition: "Evaluacion de si el proyecto sirve, conviene, puede hacerse y llega a tiempo.",
      question: "El proyecto debe avanzar?",
      metaphor: "El filtro que prueba si la idea resiste la realidad.",
      example: "Revisar capacidad operativa, costo, tecnologia disponible y calendario.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      x: 760,
      y: 205,
      size: 70,
      tags: ["semana1", "decision"]
    },
    {
      id: "operativa",
      title: "Operativa",
      shortDefinition: "Dimension de viabilidad que evalua si la solucion funciona para las personas y procesos.",
      question: "Sirve?",
      metaphor: "Probar si la solucion encaja con la forma real de trabajar.",
      example: "Usuarios dispuestos y procesos capaces de adoptar el sistema.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      parent: "viabilidad",
      x: 620,
      y: 105,
      size: 42,
      tags: ["viabilidad"]
    },
    {
      id: "economica",
      title: "Economica",
      shortDefinition: "Dimension de viabilidad que compara costos, beneficios y retorno esperado.",
      question: "Conviene?",
      metaphor: "La balanza entre inversion y beneficio.",
      example: "Ahorros esperados frente a licencias, desarrollo y capacitacion.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      parent: "viabilidad",
      x: 885,
      y: 120,
      size: 44,
      tags: ["viabilidad"]
    },
    {
      id: "tecnica",
      title: "Tecnica",
      shortDefinition: "Dimension de viabilidad que evalua si existe tecnologia y capacidad para construirlo.",
      question: "Podemos?",
      metaphor: "Ver si las herramientas y habilidades alcanzan.",
      example: "Equipo con experiencia, plataforma disponible e integraciones posibles.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      parent: "viabilidad",
      x: 905,
      y: 270,
      size: 42,
      tags: ["viabilidad"]
    },
    {
      id: "cronograma",
      title: "Cronograma",
      shortDefinition: "Dimension de viabilidad que evalua si el proyecto puede completarse a tiempo.",
      question: "Llegamos a tiempo?",
      metaphor: "El reloj que limita el alcance.",
      example: "Entregar antes de un nuevo periodo academico o regulacion.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "sdlc",
      parent: "viabilidad",
      x: 625,
      y: 285,
      size: 44,
      tags: ["viabilidad"]
    },
    {
      id: "decision",
      title: "Decision",
      shortDefinition: "Resultado de la planeacion: avanzar, replantear o descartar.",
      question: "Seguimos o no seguimos?",
      metaphor: "El semaforo del proyecto.",
      example: "Aprobar el inicio del analisis o ajustar el caso de negocio.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      x: 765,
      y: 365,
      size: 58,
      tags: ["semana1", "planeacion"]
    },
    {
      id: "analista",
      title: "Analista de sistemas",
      shortDefinition: "Puente entre negocio y tecnologia que traduce problemas en requisitos y soluciones viables.",
      question: "Que problema debe resolverse antes de pensar en tecnologia?",
      metaphor: "Un traductor entre necesidades humanas y soluciones tecnicas.",
      example: "Entrevista stakeholders, entiende procesos y comunica requisitos al equipo tecnico.",
      weekIntroduced: 1,
      status: "transversal",
      category: "people",
      x: 460,
      y: 70,
      size: 68,
      tags: ["semana1", "transversal", "comunicacion"]
    },
    {
      id: "modelado-procesos",
      title: "Modelado de procesos",
      shortDefinition: "Nodo preparado para ampliar como se representan procesos de negocio.",
      question: "Como se visualiza el trabajo?",
      metaphor: "Dibujar la ruta antes de mejorarla.",
      example: "Diagramar pasos, decisiones y responsables.",
      weekIntroduced: 1,
      status: "aprendizaje",
      category: "modeling",
      x: 360,
      y: 595,
      size: 52,
      tags: ["pendiente", "expansion"]
    },
    {
      id: "herramientas-modelado",
      title: "Herramientas de modelado",
      shortDefinition: "Nodo preparado para tecnicas y herramientas usadas para representar sistemas.",
      question: "Con que representamos el sistema?",
      metaphor: "El lenguaje visual compartido del proyecto.",
      example: "Diagramas, modelos, historias de usuario o prototipos.",
      weekIntroduced: 1,
      status: "aprendizaje",
      category: "modeling",
      x: 535,
      y: 650,
      size: 52,
      tags: ["pendiente", "expansion"]
    },
    {
      id: "agile",
      title: "Agile y metodos",
      shortDefinition: "Nodo preparado para comparar enfoques de desarrollo y adaptacion.",
      question: "Como organizamos el trabajo de desarrollo?",
      metaphor: "Una forma de aprender y ajustar mientras se construye.",
      example: "Iteraciones, retroalimentacion y mejora continua.",
      weekIntroduced: 1,
      status: "aprendizaje",
      category: "sdlc",
      x: 725,
      y: 635,
      size: 52,
      tags: ["pendiente", "expansion"]
    },
    {
      id: "investigacion-preliminar",
      title: "Investigacion preliminar",
      shortDefinition: "Exploracion inicial para entender problema, contexto, riesgos y opciones.",
      question: "Que sabemos antes de comprometernos?",
      metaphor: "Mirar el terreno antes de caminar.",
      example: "Revisar procesos actuales, restricciones, usuarios y costos generales.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      x: 545,
      y: 25,
      size: 48,
      tags: ["semana1", "planeacion"]
    },
    {
      id: "pensamiento-sistemico",
      title: "Pensamiento sistemico",
      shortDefinition: "Forma de entender como partes conectadas producen efectos, ciclos y retroalimentacion.",
      question: "Que cambia cuando una parte del sistema cambia?",
      metaphor: "Ver el bosque y tambien los caminos entre los arboles.",
      example: "Cambiar un proceso altera requisitos, costos, viabilidad y decisiones.",
      weekIntroduced: 1,
      status: "transversal",
      category: "system",
      x: 85,
      y: 610,
      size: 62,
      tags: ["semana1", "feedback", "transversal"]
    },
    {
      id: "ai-assisted-analysis",
      title: "AI-Assisted Systems Analysis",
      shortDefinition: "AI can augment the system analyst's ability to investigate, synthesize information, detect patterns, explore alternatives and prototype solutions.",
      question: "How can AI support analysis without replacing analyst judgment?",
      metaphor: "A research partner that accelerates exploration, but still needs a responsible human analyst.",
      example: "Using AI to summarize interviews, compare alternatives, draft models, or identify patterns in stakeholder feedback.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "ai",
      layer: "ai-first-overlay",
      x: 365,
      y: 760,
      size: 66,
      tags: ["semana1", "ai-first-overlay", "analysis"]
    },
    {
      id: "ai-analysis-tool",
      title: "AI as analysis tool",
      shortDefinition: "AI assists the analyst in understanding, investigating and designing the system.",
      question: "How does AI help us understand the system?",
      metaphor: "A lens that helps the analyst see patterns faster.",
      example: "AI helps organize interview notes or generate alternative process models for review.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "ai",
      layer: "ai-first-overlay",
      x: 210,
      y: 820,
      size: 54,
      tags: ["semana1", "ai-first-overlay", "distinction"]
    },
    {
      id: "ai-system-component",
      title: "AI as system component",
      shortDefinition: "AI is part of the solution being analyzed or designed.",
      question: "Does the system itself need AI?",
      metaphor: "AI as a machine inside the system, not just a tool used to study it.",
      example: "A chatbot, recommendation model, classifier, or prediction service embedded in the product.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "ai",
      layer: "ai-first-overlay",
      x: 535,
      y: 820,
      size: 56,
      tags: ["semana1", "ai-first-overlay", "distinction"]
    },
    {
      id: "problem-discovery",
      title: "Problem Discovery",
      shortDefinition: "Clarifying whether the perceived issue is the real business problem before proposing a system.",
      question: "What problem are we really solving?",
      metaphor: "Finding the root before treating the symptom.",
      example: "Discovering that delays come from unclear approval rules, not from lack of software.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      layer: "ai-first-overlay",
      x: 145,
      y: 735,
      size: 60,
      tags: ["semana1", "ai-first-overlay", "problem"]
    },
    {
      id: "problem-hypothesis",
      title: "Problem hypothesis",
      shortDefinition: "Initial assumption about the problem that must be tested with evidence.",
      question: "What do we think the problem is?",
      metaphor: "A first draft of the problem, not the final truth.",
      example: "Assuming users need automation before confirming where the bottleneck actually occurs.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      layer: "ai-first-overlay",
      x: 85,
      y: 820,
      size: 52,
      tags: ["semana1", "ai-first-overlay", "hypothesis"]
    },
    {
      id: "evidence",
      title: "Evidence",
      shortDefinition: "Data, observations, stakeholder input and process facts used to validate or challenge the problem hypothesis.",
      question: "What proves this is the real problem?",
      metaphor: "The receipts behind the business case.",
      example: "Cycle-time data, support tickets, interviews, error rates and process observations.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      layer: "ai-first-overlay",
      x: 345,
      y: 905,
      size: 48,
      tags: ["semana1", "ai-first-overlay", "evidence"]
    },
    {
      id: "refined-problem",
      title: "Refined problem",
      shortDefinition: "Updated understanding of the problem after investigation and evidence review.",
      question: "How has the problem changed after investigation?",
      metaphor: "A sharper target after removing assumptions.",
      example: "Reframing from 'we need a chatbot' to 'students need faster access to policy-specific answers'.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      layer: "ai-first-overlay",
      x: 555,
      y: 910,
      size: 50,
      tags: ["semana1", "ai-first-overlay", "problem"]
    },
    {
      id: "requirements-future",
      title: "Requirements",
      shortDefinition: "Future expansion node for what the system must do and the constraints it must satisfy.",
      question: "What must the system do?",
      metaphor: "The agreement between need and solution.",
      example: "Functional requirements, nonfunctional requirements, constraints and acceptance criteria.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "sdlc",
      layer: "ai-first-overlay",
      x: 735,
      y: 830,
      size: 50,
      tags: ["future-expansion", "ai-first-overlay", "requirements"]
    },
    {
      id: "systemic-questions",
      title: "Systemic questions before business case",
      shortDefinition: "Question set that prevents jumping to solutions before understanding problem, people, process, strategy, evidence and AI necessity.",
      question: "Do we understand the problem before the business case?",
      metaphor: "A checkpoint before asking for resources.",
      example: "Ask who experiences the problem, what process it affects and whether AI is actually needed.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "ai",
      layer: "ai-first-overlay",
      x: 610,
      y: 735,
      size: 58,
      tags: ["semana1", "ai-first-overlay", "questions"]
    },
    {
      id: "ai-governance",
      title: "AI Governance / Responsibility",
      shortDefinition: "Cross-cutting responsibility layer for accountability, data use, oversight, auditability and consequences when AI is wrong.",
      question: "Should we do it?",
      metaphor: "The ethical and operational guardrail around AI decisions.",
      example: "Define who is accountable, what data may be used, whether humans oversee results and how behavior is audited.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "ai",
      layer: "ai-first-overlay",
      x: 1010,
      y: 735,
      size: 66,
      tags: ["semana1", "ai-first-overlay", "governance", "responsibility"]
    },
    {
      id: "can-vs-should",
      title: "Can we? vs Should we?",
      shortDefinition: "A feasible technical solution is not automatically a responsible or appropriate solution.",
      question: "Can we build it, and should we build it?",
      metaphor: "A green light from engineering is not the same as a green light from responsibility.",
      example: "A model may be technically possible but inappropriate if data use, oversight or accountability is weak.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "ai",
      layer: "ai-first-overlay",
      x: 1170,
      y: 655,
      size: 54,
      tags: ["semana1", "ai-first-overlay", "governance"]
    },
    {
      id: "bad-process-ai",
      title: "AI does not fix a bad process",
      shortDefinition: "AI does not automatically turn a bad process into a good system.",
      question: "Are we improving the process or just automating the mess?",
      metaphor: "Speeding up confusion still produces confusion.",
      example: "Adding AI to a broken approval workflow may produce faster errors instead of better outcomes.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "ai",
      layer: "ai-first-overlay",
      x: 160,
      y: 930,
      size: 54,
      tags: ["semana1", "ai-first-overlay", "principle"]
    },
    {
      id: "knowledge-bridge",
      title: "Knowledge Bridge",
      shortDefinition: "Visual bridge that separates course knowledge, systemic understanding, AI-first interpretation and Quantum candidate application.",
      question: "How does learning become a reusable candidate practice?",
      metaphor: "A staircase from class concept to practical framework.",
      example: "Planning concepts become a candidate project intake pattern only after being understood and traced.",
      weekIntroduced: 1,
      status: "experimental",
      category: "quantum",
      layer: "quantum-candidate",
      x: 1320,
      y: 110,
      size: 64,
      tags: ["semana1", "quantum", "bridge"]
    },
    {
      id: "cst212-knowledge",
      title: "CST212 Knowledge",
      shortDefinition: "Canonical course knowledge introduced by Systems Analysis and Design.",
      question: "What does the course teach?",
      metaphor: "The academic foundation of the map.",
      example: "SDLC, planning, business case and feasibility.",
      weekIntroduced: 1,
      status: "conectado",
      category: "sdlc",
      layer: "canonical",
      x: 1320,
      y: 20,
      size: 46,
      tags: ["canonical", "week1"]
    },
    {
      id: "systemic-understanding",
      title: "Systemic Understanding",
      shortDefinition: "Understanding how course concepts connect through feedback, process effects and organizational decisions.",
      question: "How do the parts influence each other?",
      metaphor: "Seeing the whole system, not isolated vocabulary.",
      example: "Changing a process can change requirements, cost and feasibility.",
      weekIntroduced: 1,
      status: "transversal",
      category: "system",
      layer: "bridge",
      x: 1320,
      y: 205,
      size: 52,
      tags: ["systems-thinking", "week1"]
    },
    {
      id: "ai-first-interpretation",
      title: "AI-First Interpretation",
      shortDefinition: "Contemporary interpretation of CST212 concepts for AI-enabled systems.",
      question: "What changes when AI is in the analysis context?",
      metaphor: "A modern lens over the canonical model.",
      example: "Adding responsibility, evaluation, data quality and prototype-readiness questions.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "ai",
      layer: "ai-first-overlay",
      x: 1320,
      y: 390,
      size: 54,
      tags: ["ai-first-overlay", "week1"]
    },
    {
      id: "quantum-application-candidate",
      title: "Quantum Application Candidate",
      shortDefinition: "Learning-derived practice candidate that may later be proposed for Quantum AI First.",
      question: "What might become reusable practice later?",
      metaphor: "A lab note before it becomes a standard.",
      example: "A candidate project intake gate derived from CST212 Week 1 planning.",
      weekIntroduced: 1,
      status: "experimental",
      category: "quantum",
      layer: "quantum-candidate",
      x: 1320,
      y: 580,
      size: 60,
      tags: ["quantum", "candidate", "not-canonical"]
    },
    {
      id: "quantum-project-intake",
      title: "Quantum Project Intake",
      shortDefinition: "Candidate intake sequence for framing project need, problem evidence, stakeholders, process impact, strategy, and AI necessity.",
      question: "Should this become a project?",
      metaphor: "The front door before a project receives resources.",
      example: "A proposed Quantum intake asks what problem exists, who experiences it, what evidence supports it and whether AI is actually needed.",
      weekIntroduced: 1,
      status: "experimental",
      category: "quantum",
      layer: "quantum-candidate",
      x: 1015,
      y: 920,
      size: 64,
      tags: ["quantum", "candidate", "intake", "week1"]
    },
    {
      id: "quantum-feasibility-gate",
      title: "Quantum Feasibility Gate",
      shortDefinition: "Candidate gate that applies the four canonical feasibility checks and an AI/responsibility overlay before deciding GO, REFRAME or STOP.",
      question: "Do we proceed, reframe, or stop?",
      metaphor: "A decision gate with evidence and responsibility built in.",
      example: "Operational, economic, technical and schedule feasibility are checked with AI governance as an overlay, not a fifth canonical type.",
      weekIntroduced: 1,
      status: "experimental",
      category: "quantum",
      layer: "quantum-candidate",
      x: 1185,
      y: 870,
      size: 66,
      tags: ["quantum", "candidate", "feasibility", "week1"]
    },
    {
      id: "go-reframe-stop",
      title: "GO / REFRAME / STOP",
      shortDefinition: "Candidate decision outcomes for proceeding to analysis, returning to problem discovery, or preserving rationale and stopping.",
      question: "What decision should the evidence support?",
      metaphor: "A three-way project signal.",
      example: "GO moves toward analysis, REFRAME returns to problem discovery, STOP records evidence and rationale.",
      weekIntroduced: 1,
      status: "experimental",
      category: "quantum",
      layer: "quantum-candidate",
      x: 1365,
      y: 850,
      size: 58,
      tags: ["quantum", "candidate", "decision", "week1"]
    },
    {
      id: "system-not-software",
      title: "SYSTEM != SOFTWARE",
      shortDefinition: "A system may include software, but software is only one possible component of a larger system.",
      question: "Are we designing software, or are we improving a system?",
      metaphor: "Software can be one instrument; the system is the whole orchestra.",
      example: "A reservation portal may work while roles, inventory, communication and policies still make the service fail.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1580,
      y: 80,
      size: 72,
      tags: ["week1", "system", "software", "hierarchy"]
    },
    {
      id: "system-general",
      title: "System",
      shortDefinition: "A set of interacting parts organized to produce an outcome within a boundary.",
      question: "What belongs inside the system boundary?",
      metaphor: "A working whole made of connected parts.",
      example: "A rental business system includes people, records, equipment, policies, technology and customer interactions.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1580,
      y: 215,
      size: 62,
      tags: ["week1", "hierarchy", "system"]
    },
    {
      id: "rules-policies",
      title: "Rules / Policies",
      shortDefinition: "Formal or informal rules that shape how the system operates.",
      question: "What rules constrain the system?",
      metaphor: "The operating agreements behind behavior.",
      example: "Rental policies, safety rules, refund rules and approval rules.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      layer: "systemic",
      x: 1425,
      y: 320,
      size: 46,
      tags: ["week1", "hierarchy"]
    },
    {
      id: "org-governance",
      title: "Organization / Governance",
      shortDefinition: "Structures, roles and authority that guide decisions and accountability.",
      question: "Who decides and who is accountable?",
      metaphor: "The steering mechanism of the system.",
      example: "Ownership, management roles, compliance, policy authority and escalation paths.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      layer: "systemic",
      x: 1580,
      y: 345,
      size: 50,
      tags: ["week1", "hierarchy", "governance"]
    },
    {
      id: "physical-resources",
      title: "Physical Resources",
      shortDefinition: "Physical assets needed for the system to operate.",
      question: "What physical resources matter?",
      metaphor: "The tangible equipment the system depends on.",
      example: "Kayaks, racks, accessories, safety equipment, rooms or devices.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      layer: "systemic",
      x: 1745,
      y: 320,
      size: 48,
      tags: ["week1", "hierarchy"]
    },
    {
      id: "software",
      title: "Software",
      shortDefinition: "Programs and digital applications that may support part of a system.",
      question: "What software component, if any, is needed?",
      metaphor: "A tool inside the larger system toolbox.",
      example: "Web apps, mobile apps, portals, APIs, services and AI components.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1840,
      y: 440,
      size: 54,
      tags: ["week1", "hierarchy", "software"]
    },
    {
      id: "web-application",
      title: "Web application",
      shortDefinition: "A browser-based software component.",
      question: "Could a web app support this process?",
      metaphor: "A front desk that lives in the browser.",
      example: "Online reservation or intake forms.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1710,
      y: 545,
      size: 38,
      tags: ["week1", "software-component"]
    },
    {
      id: "mobile-application",
      title: "Mobile application",
      shortDefinition: "A phone or tablet app as a possible software component.",
      question: "Does the process need mobile access?",
      metaphor: "The system in the user's pocket.",
      example: "A field app for guides or staff.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1815,
      y: 570,
      size: 38,
      tags: ["week1", "software-component"]
    },
    {
      id: "transactional-portal",
      title: "Transactional portal",
      shortDefinition: "A software component for structured transactions and self-service.",
      question: "Do users need to complete transactions?",
      metaphor: "A digital counter for requests and confirmations.",
      example: "Booking, payments, status checks or account changes.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1935,
      y: 555,
      size: 40,
      tags: ["week1", "software-component"]
    },
    {
      id: "apis-services",
      title: "APIs / services",
      shortDefinition: "Software interfaces that connect components and exchange data.",
      question: "What needs to integrate?",
      metaphor: "Connectors between digital parts.",
      example: "A booking system connected to payments, email or accounting.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 2050,
      y: 510,
      size: 39,
      tags: ["week1", "software-component", "integration"]
    },
    {
      id: "ai-components-agents",
      title: "AI components / agents",
      shortDefinition: "AI elements that may be embedded inside a system as components.",
      question: "Is AI a component of the solution?",
      metaphor: "An intelligent component inside the larger machinery.",
      example: "A support agent, classifier, recommendation model or summarizer.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "ai",
      layer: "ai",
      x: 2070,
      y: 635,
      size: 42,
      tags: ["week1", "ai-first", "software-component"]
    },
    {
      id: "digital-infrastructure",
      title: "Digital infrastructure",
      shortDefinition: "Digital foundation that supports software and information management.",
      question: "What must exist below the application?",
      metaphor: "The digital foundation under the visible tools.",
      example: "Databases, repositories and knowledge libraries.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1590,
      y: 505,
      size: 48,
      tags: ["week1", "infrastructure"]
    },
    {
      id: "databases",
      title: "Databases",
      shortDefinition: "Structured storage for operational data.",
      question: "Where is data stored?",
      metaphor: "The organized memory of the system.",
      example: "Customer, reservation, availability and rental history records.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1470,
      y: 610,
      size: 34,
      tags: ["week1", "infrastructure"]
    },
    {
      id: "repositories",
      title: "Repositories",
      shortDefinition: "Managed places for files, artifacts, code, documents or models.",
      question: "Where do shared artifacts live?",
      metaphor: "A shelf for reusable knowledge and work products.",
      example: "Document library, code repository or process model repository.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1580,
      y: 640,
      size: 35,
      tags: ["week1", "infrastructure"]
    },
    {
      id: "knowledge-libraries",
      title: "Knowledge libraries",
      shortDefinition: "Collections of reference knowledge used by people or systems.",
      question: "What knowledge must be reusable?",
      metaphor: "A shared memory for decisions and learning.",
      example: "Policies, FAQs, product information or training materials.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1700,
      y: 625,
      size: 37,
      tags: ["week1", "infrastructure"]
    },
    {
      id: "hardware-infrastructure",
      title: "Hardware / infrastructure",
      shortDefinition: "Physical or cloud infrastructure that supports digital operations.",
      question: "What platform supports the technology?",
      metaphor: "The physical or cloud ground the system runs on.",
      example: "Devices, servers, network equipment or cloud infrastructure.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1900,
      y: 700,
      size: 44,
      tags: ["week1", "infrastructure"]
    },
    {
      id: "sociotechnical-system",
      title: "Sociotechnical System",
      shortDefinition: "A real organizational system emerges from interaction between social/organizational elements and technical elements.",
      question: "Do the social and technical parts work together?",
      metaphor: "A restaurant where the POS may work, but inventory, roles and communication can still break the whole system.",
      example: "The POS works perfectly while the restaurant fails because stock, roles, communication or process handoffs are defective.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1520,
      y: 760,
      size: 60,
      tags: ["week1", "sociotechnical", "system"]
    },
    {
      id: "correct-software-not-system",
      title: "Correct software != correct system",
      shortDefinition: "Correct software does not necessarily mean a correct system.",
      question: "Can the software be right while the system fails?",
      metaphor: "A perfect cash register cannot rescue a broken restaurant process.",
      example: "A working app may still fail if people, policies, data and workflows are misaligned.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1685,
      y: 805,
      size: 54,
      tags: ["week1", "principle"]
    },
    {
      id: "hka-current-system",
      title: "HKA Current System",
      shortDefinition: "HKA has a system made of fragmented manual and digital components with limited integration.",
      question: "What system exists today?",
      metaphor: "A business running through a patchwork of people, boards, records and software.",
      example: "Access, accounting software, website, loose-leaf records, whiteboard, magnets, kayaks and staff roles.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "case",
      layer: "case",
      x: 315,
      y: 1110,
      size: 68,
      tags: ["week1", "hka", "case-study"]
    },
    {
      id: "hka-people",
      title: "HKA People",
      shortDefinition: "People in the HKA current system: Steve, Linda, Janet and customers.",
      question: "Who participates in HKA?",
      metaphor: "The human side of the case system.",
      example: "Steve, Linda, Janet and customers.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "case",
      layer: "case",
      x: 110,
      y: 1045,
      size: 42,
      tags: ["week1", "hka", "people"]
    },
    {
      id: "hka-processes",
      title: "HKA Processes",
      shortDefinition: "Kayak rental, reservations, lessons, guided tours, customer service, accounting and marketing.",
      question: "What work happens in HKA?",
      metaphor: "The flows that make the business run.",
      example: "Reservations, lessons, tours and customer service.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "case",
      layer: "case",
      x: 230,
      y: 1010,
      size: 44,
      tags: ["week1", "hka", "process"]
    },
    {
      id: "hka-information",
      title: "HKA Information",
      shortDefinition: "Customer data, reservations, availability, schedules and rental history.",
      question: "What information does HKA depend on?",
      metaphor: "The memory of operations.",
      example: "Reservations, schedules and availability records.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "case",
      layer: "case",
      x: 405,
      y: 1010,
      size: 44,
      tags: ["week1", "hka", "information"]
    },
    {
      id: "hka-technology",
      title: "HKA Technology",
      shortDefinition: "Microsoft Access, accounting software and website.",
      question: "What technology already exists?",
      metaphor: "Digital tools already in the current system.",
      example: "Access database, accounting software and website.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "case",
      layer: "case",
      x: 560,
      y: 1060,
      size: 44,
      tags: ["week1", "hka", "technology"]
    },
    {
      id: "hka-manual-components",
      title: "HKA Manual Components",
      shortDefinition: "Loose-leaf records, availability whiteboard and magnets.",
      question: "What manual parts carry the work?",
      metaphor: "Analog tools holding pieces of the system together.",
      example: "Whiteboard availability and loose-leaf records.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "case",
      layer: "case",
      x: 120,
      y: 1195,
      size: 45,
      tags: ["week1", "hka", "manual"]
    },
    {
      id: "hka-resources",
      title: "HKA Resources",
      shortDefinition: "Kayaks, racks, accessories and safety equipment.",
      question: "What physical resources are part of the system?",
      metaphor: "The physical inventory behind the service.",
      example: "Kayaks, racks, accessories and safety equipment.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "case",
      layer: "case",
      x: 490,
      y: 1200,
      size: 45,
      tags: ["week1", "hka", "resources"]
    },
    {
      id: "hka-fragmented-integration",
      title: "Limited integration",
      shortDefinition: "The current HKA system combines manual and digital parts but lacks strong integration.",
      question: "Where is the current system fragmented?",
      metaphor: "Several useful pieces that do not fully talk to each other.",
      example: "Availability may live on a whiteboard while customer and accounting data live elsewhere.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "case",
      layer: "case",
      x: 320,
      y: 1275,
      size: 46,
      tags: ["week1", "hka", "integration"]
    },
    {
      id: "problem-framing-gate",
      title: "Problem Framing Gate",
      shortDefinition: "Reusable gate that moves from symptom to investigation, evidence, underlying problem, alternatives, feasibility, decision and solution.",
      question: "Are we solving the actual problem?",
      metaphor: "A diagnostic gate before prescribing a solution.",
      example: "A request for an app becomes an investigation into symptoms, evidence, process impact and alternatives.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      layer: "systemic",
      x: 840,
      y: 1110,
      size: 70,
      tags: ["week1", "problem-framing", "gate"]
    },
    {
      id: "symptom",
      title: "Symptom",
      shortDefinition: "What is observed before the underlying problem is proven.",
      question: "What are we observing?",
      metaphor: "The visible signal, not necessarily the cause.",
      example: "Missed reservations, delays or customer complaints.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      layer: "systemic",
      x: 650,
      y: 1010,
      size: 40,
      tags: ["week1", "problem-framing"]
    },
    {
      id: "investigation",
      title: "Investigation",
      shortDefinition: "Structured inquiry into symptoms, stakeholders, processes and evidence.",
      question: "What do we need to learn?",
      metaphor: "Looking under the hood before buying parts.",
      example: "Interview users, observe processes and inspect data.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      layer: "systemic",
      x: 760,
      y: 1010,
      size: 42,
      tags: ["week1", "problem-framing"]
    },
    {
      id: "underlying-problem",
      title: "Underlying Problem",
      shortDefinition: "The diagnosed cause or core issue behind the observed symptom.",
      question: "Is this the actual problem?",
      metaphor: "The root beneath the visible crack.",
      example: "The issue may be fragmented availability data, not lack of a new app.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      layer: "systemic",
      x: 960,
      y: 1015,
      size: 48,
      tags: ["week1", "problem-framing"]
    },
    {
      id: "alternatives",
      title: "Alternatives",
      shortDefinition: "Possible solution paths considered before deciding on software, AI or other changes.",
      question: "What options exist?",
      metaphor: "A menu before choosing the meal.",
      example: "Process change, training, SaaS, integration, new software, automation or AI-enabled solution.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      layer: "systemic",
      x: 1135,
      y: 1110,
      size: 56,
      tags: ["week1", "alternatives"]
    },
    {
      id: "do-not-begin-solution",
      title: "Do not begin with the solution",
      shortDefinition: "Problem analysis should not default directly to software or AI.",
      question: "Are we assuming the answer too early?",
      metaphor: "Do not prescribe before diagnosing.",
      example: "A request for a portal may be solved by process change, training or integration instead.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      layer: "systemic",
      x: 840,
      y: 1295,
      size: 54,
      tags: ["week1", "principle"]
    },
    {
      id: "process-change",
      title: "Process change",
      shortDefinition: "Improving the workflow without necessarily adding new software.",
      question: "Can the process be improved directly?",
      metaphor: "Fixing the route before buying a faster vehicle.",
      example: "Clearer reservation handoffs or updated availability process.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      layer: "systemic",
      x: 1050,
      y: 1210,
      size: 35,
      tags: ["week1", "alternative"]
    },
    {
      id: "organizational-change",
      title: "Organizational change",
      shortDefinition: "Changing roles, responsibilities or decision rights.",
      question: "Do people or roles need to change?",
      metaphor: "Changing who does what.",
      example: "Assigning reservation ownership or escalation responsibility.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "business",
      layer: "systemic",
      x: 1160,
      y: 1225,
      size: 37,
      tags: ["week1", "alternative"]
    },
    {
      id: "training-alternative",
      title: "Training",
      shortDefinition: "Improving capability through instruction or guidance.",
      question: "Would training solve the gap?",
      metaphor: "Teaching the system's people before changing its tools.",
      example: "Training staff to update availability consistently.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "people",
      layer: "systemic",
      x: 1265,
      y: 1210,
      size: 34,
      tags: ["week1", "alternative"]
    },
    {
      id: "existing-software-alt",
      title: "Existing software",
      shortDefinition: "Using or improving tools already available.",
      question: "Can an existing tool solve it?",
      metaphor: "Use the tool already on the bench.",
      example: "Improve use of Access or accounting software.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1070,
      y: 1310,
      size: 36,
      tags: ["week1", "alternative"]
    },
    {
      id: "saas-external",
      title: "SaaS / external service",
      shortDefinition: "Adopting an external service rather than custom-building.",
      question: "Can a service solve it?",
      metaphor: "Renting capability instead of building it.",
      example: "Use a booking platform instead of custom software.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1195,
      y: 1320,
      size: 37,
      tags: ["week1", "alternative"]
    },
    {
      id: "integration-alt",
      title: "Integration",
      shortDefinition: "Connecting existing components so information flows better.",
      question: "Do existing parts need to talk?",
      metaphor: "Bridges between islands.",
      example: "Synchronize reservations, availability and accounting.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1310,
      y: 1310,
      size: 35,
      tags: ["week1", "alternative"]
    },
    {
      id: "new-software-alt",
      title: "New software",
      shortDefinition: "Building new software only if justified by problem, alternatives and feasibility.",
      question: "Does this require new software?",
      metaphor: "Building a new tool only after proving the need.",
      example: "Custom reservation system after other options fail or underperform.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1080,
      y: 1405,
      size: 36,
      tags: ["week1", "alternative"]
    },
    {
      id: "hardware-alt",
      title: "Hardware",
      shortDefinition: "Physical technology or infrastructure as a possible solution path.",
      question: "Is physical technology needed?",
      metaphor: "Changing the equipment, not just the software.",
      example: "Scanners, devices, kiosks or network equipment.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1205,
      y: 1415,
      size: 34,
      tags: ["week1", "alternative"]
    },
    {
      id: "automation-alt",
      title: "Automation",
      shortDefinition: "Automating repetitive work where rules and data are ready.",
      question: "Can part of the process be automated?",
      metaphor: "Letting the routine steps run on rails.",
      example: "Automatic confirmations or availability updates.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "ai",
      x: 1320,
      y: 1405,
      size: 35,
      tags: ["week1", "alternative", "ai-first"]
    },
    {
      id: "ai-enabled-solution-alt",
      title: "AI-enabled solution",
      shortDefinition: "An AI-supported solution considered only after problem and data readiness are understood.",
      question: "Does this actually require AI?",
      metaphor: "AI as a specialized tool, not the default answer.",
      example: "AI support assistant only if data, process and oversight justify it.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "ai",
      layer: "ai",
      x: 1450,
      y: 1375,
      size: 38,
      tags: ["week1", "alternative", "ai-first"]
    },
    {
      id: "system-boundary",
      title: "System Boundary",
      shortDefinition: "Prepared future-expansion concept for deciding what is inside and outside the system being analyzed.",
      question: "Where is the system boundary?",
      metaphor: "Drawing the frame before analyzing the picture.",
      example: "Deciding whether rentals, accounting, marketing and customer service are in scope.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "system",
      layer: "systemic",
      x: 1490,
      y: 1110,
      size: 52,
      tags: ["week1", "future-expansion", "boundary"]
    },
    {
      id: "data-readiness",
      title: "Data Readiness",
      shortDefinition: "Future-expansion AI-first concept: AI usefulness depends on available, reliable and usable data.",
      question: "Is the data ready enough for AI?",
      metaphor: "AI cannot cook a good meal from spoiled ingredients.",
      example: "Fragmented, incomplete or inconsistent records limit model usefulness.",
      weekIntroduced: 1,
      status: "nuevo",
      category: "ai",
      layer: "ai",
      x: 1615,
      y: 1390,
      size: 44,
      tags: ["week1", "ai-first", "future-expansion", "data"]
    },
    {
      id: "qaif-problem-framing-gate",
      title: "Quantum AI First Problem Framing Gate v0.1",
      shortDefinition: "Candidate Quantum AI First gate that prevents assuming an app, portal, agent, AI solution or automation is automatically correct.",
      question: "Are we designing software, or improving a system?",
      metaphor: "A project intake gate that protects against solution-first thinking.",
      example: "Request -> symptom/opportunity -> problem framing -> evidence -> boundary -> stakeholders -> process -> alternatives -> feasibility -> AI/responsibility -> GO/REFRAME/STOP.",
      weekIntroduced: 1,
      status: "experimental",
      category: "quantum",
      layer: "quantum",
      x: 1650,
      y: 1185,
      size: 64,
      tags: ["week1", "quantum-ai-first", "candidate", "problem-framing"]
    },
    ...week2Nodes
  ],
  edges: [
    ["personas", "sis-info", "contains", "componente"],
    ["procesos", "sis-info", "contains", "componente"],
    ["datos", "sis-info", "contains", "componente"],
    ["tecnologia", "sis-info", "contains", "componente"],
    ["sis-info", "valor", "produces", "genera"],
    ["organizacion", "necesidades", "influence", "origina"],
    ["necesidades", "caso-negocio", "sequence", "motiva"],
    ["caso-negocio", "viabilidad", "sequence", "evalua"],
    ["viabilidad", "decision", "sequence", "filtra"],
    ["decision", "analisis", "sequence", "si"],
    ["decision", "planeacion", "feedback", "no / replantear"],
    ["sdlc", "planeacion", "contains", "fase"],
    ["planeacion", "analisis", "sequence", "sigue"],
    ["analisis", "diseno", "sequence", "sigue"],
    ["diseno", "implementacion", "sequence", "sigue"],
    ["implementacion", "soporte", "sequence", "sigue"],
    ["soporte", "planeacion", "feedback", "mejora"],
    ["planeacion", "caso-negocio", "sequence", "justifica"],
    ["viabilidad", "operativa", "contains", "sirve"],
    ["viabilidad", "economica", "contains", "conviene"],
    ["viabilidad", "tecnica", "contains", "podemos"],
    ["viabilidad", "cronograma", "contains", "tiempo"],
    ["analista", "stakeholders", "interaction", "escucha"],
    ["analista", "procesos", "interaction", "entiende"],
    ["analista", "tecnologia", "interaction", "traduce"],
    ["analista", "viabilidad", "influence", "aporta"],
    ["stakeholders", "necesidades", "influence", "expresan"],
    ["procesos", "modelado-procesos", "produces", "se representa"],
    ["modelado-procesos", "herramientas-modelado", "interaction", "usa"],
    ["agile", "sdlc", "interaction", "enfoque"],
    ["investigacion-preliminar", "caso-negocio", "sequence", "informa"],
    ["organizacion", "procesos", "sequence", "define"],
    ["procesos", "sis-info", "sequence", "requiere"],
    ["sis-info", "datos", "produces", "captura"],
    ["datos", "decision", "produces", "soporta"],
    ["decision", "valor", "produces", "orienta"],
    ["valor", "organizacion", "feedback", "retroalimenta"],
    ["procesos", "analisis", "influence", "cambia requisitos"],
    ["analisis", "economica", "influence", "requisitos afectan costos"],
    ["economica", "viabilidad", "feedback", "puede replantear"],
    ["viabilidad", "planeacion", "feedback", "vuelve"],
    ["analista", "ai-assisted-analysis", "interaction", "aumenta"],
    ["ai-assisted-analysis", "investigacion-preliminar", "sequence", "apoya"],
    ["ai-assisted-analysis", "problem-discovery", "sequence", "descubre"],
    ["ai-assisted-analysis", "requirements-future", "sequence", "prepara"],
    ["ai-analysis-tool", "ai-assisted-analysis", "contains", "modo de uso"],
    ["ai-system-component", "tecnologia", "contains", "parte de solucion"],
    ["systemic-questions", "caso-negocio", "sequence", "antes de"],
    ["systemic-questions", "problem-discovery", "sequence", "pregunta"],
    ["problem-discovery", "necesidades", "interaction", "aclara"],
    ["problem-discovery", "procesos", "interaction", "afecta"],
    ["problem-discovery", "organizacion", "influence", "estrategia"],
    ["problem-hypothesis", "ai-assisted-analysis", "sequence", "investigar"],
    ["ai-assisted-analysis", "evidence", "produces", "sintetiza"],
    ["evidence", "refined-problem", "sequence", "ajusta"],
    ["refined-problem", "caso-negocio", "sequence", "fundamenta"],
    ["decision", "problem-discovery", "feedback", "si contradice"],
    ["evidence", "problem-discovery", "feedback", "contradice hipotesis"],
    ["tecnica", "ai-governance", "influence", "puede"],
    ["operativa", "ai-governance", "influence", "personas"],
    ["ai-governance", "decision", "sequence", "debe"],
    ["tecnica", "can-vs-should", "interaction", "can we"],
    ["ai-governance", "can-vs-should", "interaction", "should we"],
    ["procesos", "ai-assisted-analysis", "interaction", "proceso"],
    ["bad-process-ai", "procesos", "influence", "principio"],
    ["bad-process-ai", "ai-assisted-analysis", "influence", "limite"],
    ["operativa", "ai-assisted-analysis", "influence", "adopcion confianza supervision excepciones"],
    ["economica", "ai-assisted-analysis", "influence", "costos IA supervision monitoreo"],
    ["tecnica", "ai-assisted-analysis", "influence", "datos modelos integracion evaluacion"],
    ["cronograma", "ai-assisted-analysis", "influence", "prototipo vs produccion"],
    ["cst212-knowledge", "knowledge-bridge", "sequence", "base"],
    ["knowledge-bridge", "systemic-understanding", "sequence", "interpreta"],
    ["systemic-understanding", "ai-first-interpretation", "sequence", "extiende"],
    ["ai-first-interpretation", "quantum-application-candidate", "sequence", "candidato"],
    ["planeacion", "caso-negocio", "sequence", "system planning"],
    ["caso-negocio", "quantum-project-intake", "produces", "informa"],
    ["viabilidad", "quantum-feasibility-gate", "produces", "fundamenta"],
    ["decision", "go-reframe-stop", "produces", "traduce"],
    ["quantum-project-intake", "caso-negocio", "sequence", "conecta"],
    ["quantum-project-intake", "quantum-feasibility-gate", "sequence", "evalua"],
    ["quantum-feasibility-gate", "ai-governance", "interaction", "overlay"],
    ["quantum-feasibility-gate", "go-reframe-stop", "sequence", "decide"],
    ["go-reframe-stop", "analisis", "sequence", "GO"],
    ["go-reframe-stop", "problem-discovery", "feedback", "REFRAME"],
    ["go-reframe-stop", "evidence", "feedback", "STOP rationale"],
    ["quantum-application-candidate", "quantum-project-intake", "contains", "practica candidata"],
    ["quantum-application-candidate", "quantum-feasibility-gate", "contains", "practica candidata"],
    ["system-not-software", "system-general", "contains", "distincion"],
    ["system-general", "personas", "contains", "parte"],
    ["system-general", "procesos", "contains", "parte"],
    ["system-general", "datos", "contains", "parte"],
    ["system-general", "rules-policies", "contains", "parte"],
    ["system-general", "org-governance", "contains", "parte"],
    ["system-general", "physical-resources", "contains", "parte"],
    ["system-general", "tecnologia", "contains", "parte"],
    ["tecnologia", "software", "contains", "subcomponente"],
    ["software", "web-application", "contains", "ejemplo"],
    ["software", "mobile-application", "contains", "ejemplo"],
    ["software", "transactional-portal", "contains", "ejemplo"],
    ["software", "apis-services", "contains", "ejemplo"],
    ["software", "ai-components-agents", "contains", "ejemplo"],
    ["tecnologia", "digital-infrastructure", "contains", "subcomponente"],
    ["digital-infrastructure", "databases", "contains", "ejemplo"],
    ["digital-infrastructure", "repositories", "contains", "ejemplo"],
    ["digital-infrastructure", "knowledge-libraries", "contains", "ejemplo"],
    ["tecnologia", "hardware-infrastructure", "contains", "subcomponente"],
    ["system-general", "sociotechnical-system", "sequence", "en organizacion"],
    ["personas", "tecnologia", "interaction", "sociotecnico"],
    ["procesos", "software", "interaction", "no basta"],
    ["organizacion", "system-general", "interaction", "contexto"],
    ["software", "system-general", "contains", "parte de"],
    ["correct-software-not-system", "sociotechnical-system", "influence", "principio"],
    ["hka-current-system", "hka-people", "contains", "personas"],
    ["hka-current-system", "hka-processes", "contains", "procesos"],
    ["hka-current-system", "hka-information", "contains", "informacion"],
    ["hka-current-system", "hka-technology", "contains", "tecnologia"],
    ["hka-current-system", "hka-manual-components", "contains", "manual"],
    ["hka-current-system", "hka-resources", "contains", "recursos"],
    ["hka-current-system", "hka-fragmented-integration", "produces", "limitacion"],
    ["hka-current-system", "sociotechnical-system", "influence", "caso"],
    ["symptom", "investigation", "sequence", "observa"],
    ["investigation", "evidence", "sequence", "recolecta"],
    ["evidence", "underlying-problem", "sequence", "diagnostica"],
    ["underlying-problem", "alternatives", "sequence", "explora"],
    ["alternatives", "viabilidad", "sequence", "evalua"],
    ["viabilidad", "decision", "sequence", "decide"],
    ["decision", "software", "sequence", "solucion posible"],
    ["problem-framing-gate", "symptom", "contains", "paso"],
    ["problem-framing-gate", "investigation", "contains", "paso"],
    ["problem-framing-gate", "evidence", "contains", "paso"],
    ["problem-framing-gate", "underlying-problem", "contains", "paso"],
    ["problem-framing-gate", "alternatives", "contains", "paso"],
    ["evidence", "underlying-problem", "feedback", "redefinir"],
    ["viabilidad", "alternatives", "feedback", "volver"],
    ["do-not-begin-solution", "problem-framing-gate", "influence", "principio"],
    ["alternatives", "process-change", "contains", "opcion"],
    ["alternatives", "organizational-change", "contains", "opcion"],
    ["alternatives", "training-alternative", "contains", "opcion"],
    ["alternatives", "existing-software-alt", "contains", "opcion"],
    ["alternatives", "saas-external", "contains", "opcion"],
    ["alternatives", "integration-alt", "contains", "opcion"],
    ["alternatives", "new-software-alt", "contains", "opcion"],
    ["alternatives", "hardware-alt", "contains", "opcion"],
    ["alternatives", "automation-alt", "contains", "opcion"],
    ["alternatives", "ai-enabled-solution-alt", "contains", "opcion"],
    ["system-boundary", "problem-framing-gate", "influence", "alcance"],
    ["data-readiness", "ai-enabled-solution-alt", "influence", "limita"],
    ["ai-assisted-analysis", "data-readiness", "influence", "validacion"],
    ["qaif-problem-framing-gate", "problem-framing-gate", "contains", "base"],
    ["qaif-problem-framing-gate", "system-boundary", "sequence", "delimita"],
    ["qaif-problem-framing-gate", "alternatives", "sequence", "opciones"],
    ["qaif-problem-framing-gate", "ai-governance", "sequence", "responsabilidad"],
    ["qaif-problem-framing-gate", "go-reframe-stop", "sequence", "resultado"],
    ["quantum-application-candidate", "qaif-problem-framing-gate", "contains", "candidato"]
  ].map(([source, target, relationshipType, label], index) => ({
    id: `edge-${index + 1}`,
    source,
    target,
    relationshipType,
    label,
    weekIntroduced: 1
  })).concat(week2Edges.map(([source, target, relationshipType, label], index) => ({
    id: `edge-w2-${index + 1}`,
    source,
    target,
    relationshipType,
    label,
    weekIntroduced: 2
  })))
};

const categoryColors = {
  business: "var(--business)",
  sdlc: "var(--sdlc)",
  people: "var(--people)",
  modeling: "var(--modeling)",
  system: "var(--system)",
  ai: "var(--new)",
  quantum: "var(--quantum)",
  case: "var(--people)"
};

const state = {
  scale: 0.62,
  tx: 60,
  ty: 42,
  selected: "sis-info",
  currentView: "learn",
  hkaOverlay: false,
  activeWeeks: new Set([0, 1, 2]),
  activeStatuses: new Set(Object.keys(mapData.statuses)),
  activeEdges: new Set(Object.keys(mapData.relationshipTypes)),
  activeLayers: new Set(Object.keys(mapData.layers)),
  query: ""
};

const svg = document.getElementById("knowledgeMap");
const viewport = document.getElementById("viewport");
const edgesLayer = document.getElementById("edgesLayer");
const nodesLayer = document.getElementById("nodesLayer");
const tooltip = document.getElementById("tooltip");
const detailTitle = document.getElementById("detailTitle");
const detailContent = document.getElementById("detailContent");
const learnView = document.getElementById("learnView");
const systemView = document.getElementById("systemView");

function renderStaticViews() {
  learnView.innerHTML = `
    <div class="journey-canvas">
      <header class="journey-intro">
        <div><p class="lesson-kicker">WEEK 1 / SEMANA 1</p><h2>From organizational need to an informed decision</h2><p>De una necesidad organizacional a una decision informada.</p></div>
        <button id="hkaOverlayToggle" class="overlay-toggle" type="button" aria-pressed="false">Show HKA example <span>Ver ejemplo HKA</span></button>
      </header>

      <section class="canvas-region organization-region" aria-labelledby="organizationHeading">
        <div class="region-number">01</div>
        <div class="region-heading"><p class="lesson-kicker">START / INICIO</p><h2 id="organizationHeading">Organization<span>Organizacion</span></h2><p>Why does a system exist?<span>Por que existe un sistema?</span></p></div>
        <div class="organization-orbit">
          ${canvasNode("Need", "Necesidad", "necesidades", "orbit-node orbit-north")}
          ${canvasNode("Problem", "Problema", "problem-discovery", "orbit-node orbit-east")}
          ${canvasNode("Opportunity", "Oportunidad", "valor", "orbit-node orbit-south")}
          ${canvasNode("Strategic objective", "Objetivo estrategico", "organizacion", "orbit-node orbit-west")}
          ${canvasNode("Organization", "Organizacion", "organizacion", "orbit-core")}
        </div>
      </section>

      ${journeyArrow("A need becomes a question about the whole system", "Una necesidad se convierte en una pregunta sobre el sistema completo")}

      <section class="canvas-region system-region" aria-labelledby="systemHeading">
        <div class="region-number">02</div>
        <div class="region-heading"><p class="lesson-kicker">CONTAINMENT / CONTENCION</p><h2 id="systemHeading">System<span>Sistema</span></h2><p>What belongs to the working whole?<span>Que pertenece al conjunto que produce el resultado?</span></p></div>
        <div class="system-boundary-shape">
          <span class="boundary-label">SYSTEM BOUNDARY / FRONTERA</span>
          <div class="system-parts">
            ${canvasNode("People", "Personas", "personas", "part-node")}
            ${canvasNode("Processes", "Procesos", "procesos", "part-node")}
            ${canvasNode("Information / Data", "Informacion / Datos", "datos", "part-node")}
            ${canvasNode("Rules", "Reglas", "rules-policies", "part-node")}
            ${canvasNode("Resources", "Recursos", "physical-resources", "part-node")}
            <div class="technology-zone">
              ${canvasNode("Technology", "Tecnologia", "tecnologia", "technology-core")}
              <div class="technology-parts">
                ${canvasNode("Software", "Software", "software", "tech-node")}
                ${canvasNode("Hardware", "Hardware", "hardware-infrastructure", "tech-node")}
                ${canvasNode("Infrastructure", "Infraestructura", "digital-infrastructure", "tech-node")}
              </div>
            </div>
          </div>
          <button class="learning-statement" type="button" data-concept="system-not-software"><strong>SYSTEM &ne; SOFTWARE</strong><span>SISTEMA &ne; SOFTWARE</span><small>Software is one possible component of a system.<br>El software es un posible componente de un sistema.</small></button>
        </div>
      </section>

      <section id="hkaOverlay" class="hka-overlay" aria-hidden="true">
        <div class="hka-overlay-head"><div><p class="lesson-kicker">OPTIONAL CASE / CASO OPCIONAL</p><h2>HKA current system<span>Sistema actual de HKA</span></h2></div><p>Microsoft Access is not the HKA system. It is one software component inside it.</p></div>
        <div class="hka-system-line">
          ${canvasNode("People", "Steve, Linda, Janet, customers", "hka-people", "hka-node")}
          ${canvasNode("Processes", "Rentals, reservations, lessons", "hka-processes", "hka-node")}
          ${canvasNode("Information", "Availability, schedules, history", "hka-information", "hka-node")}
          ${canvasNode("Technology", "Access, website, accounting", "hka-technology", "hka-node")}
          ${canvasNode("Physical resources", "Kayaks, racks, safety equipment", "hka-resources", "hka-node")}
        </div>
        <p class="hka-result">fragmented manual + digital parts &rarr; limited integration</p>
      </section>

      ${journeyArrow("A system succeeds through interaction, not isolated parts", "Un sistema funciona por la interaccion, no por partes aisladas")}

      <section class="canvas-region socio-region" aria-labelledby="socioHeading">
        <div class="region-number">03</div>
        <div class="region-heading"><p class="lesson-kicker">INTERACTION / INTERACCION</p><h2 id="socioHeading">Sociotechnical System<span>Sistema sociotecnico</span></h2></div>
        <div class="venn-stage">
          <button class="venn-circle social-circle" type="button" data-concept="personas"><strong>SOCIAL</strong><span>Social</span><small>People · Roles · Culture<br>Communication · Processes · Decisions</small></button>
          <button class="venn-circle technical-circle" type="button" data-concept="tecnologia"><strong>TECHNICAL</strong><span>Tecnico</span><small>Software · Hardware · Data<br>Networks · Infrastructure · AI</small></button>
          <button class="venn-outcome" type="button" data-concept="sociotechnical-system"><strong>SYSTEM OUTCOME</strong><span>Resultado del sistema</span></button>
        </div>
        <button class="insight-note" type="button" data-concept="correct-software-not-system"><strong>Correct software &ne; correct system.</strong><span>Software correcto &ne; sistema correcto.</span><small>Open the restaurant metaphor / Abre la metafora del restaurante</small></button>
      </section>

      ${journeyArrow("Now define what is under analysis", "Ahora define que esta bajo analisis")}

      <section class="canvas-region boundary-region" aria-labelledby="boundaryHeading">
        <div class="region-number">04</div>
        <div class="region-heading"><p class="lesson-kicker">SCOPE / ALCANCE</p><h2 id="boundaryHeading">System Boundary<span>Frontera del sistema</span></h2><p>What is inside the system and what is outside?<span>Que esta dentro del sistema y que esta fuera?</span></p></div>
        <div class="boundary-landscape">
          <div class="external-node ext-clients">Clients<span>Clientes</span></div>
          <div class="external-node ext-market">Market<span>Mercado</span></div>
          <div class="external-node ext-rules">Regulations<span>Regulaciones</span></div>
          <div class="external-node ext-actors">External actors<span>Actores externos</span></div>
          <button class="boundary-inside" type="button" data-concept="system-boundary">
            <span class="boundary-label">INSIDE / DENTRO</span>
            <span class="inside-cloud">People · Processes · Information · Rules · Resources · Technology</span>
          </button>
          <span class="crossing-arrow arrow-left">&rarr;</span><span class="crossing-arrow arrow-right">&harr;</span>
        </div>
      </section>

      ${journeyArrow("Observe first; diagnose before choosing", "Observa primero; diagnostica antes de elegir")}

      <section class="canvas-region framing-region" aria-labelledby="framingHeading">
        <div class="region-number">05</div>
        <div class="region-heading"><p class="lesson-kicker">DIAGNOSIS / DIAGNOSTICO</p><h2 id="framingHeading">Problem Framing<span>Formulacion del problema</span></h2></div>
        <button class="warning-ribbon" type="button" data-concept="do-not-begin-solution"><strong>DO NOT BEGIN WITH THE SOLUTION.</strong><span>NO EMPEZAR POR LA SOLUCION.</span></button>
        <div class="problem-path">
          ${pathNode("Symptom", "Sintoma", "symptom")}
          ${pathArrow()}
          ${pathNode("Investigation", "Investigacion", "investigation")}
          ${pathArrow()}
          ${pathNode("Evidence", "Evidencia", "evidence")}
          ${pathArrow()}
          ${pathNode("Underlying problem", "Problema real", "underlying-problem")}
          ${pathArrow()}
          ${pathNode("Alternatives", "Alternativas", "alternatives", "path-node branch-origin")}
        </div>
        <div class="feedback-arc"><span>evidence can redefine the problem</span><span>la evidencia puede redefinir el problema</span></div>
        <div class="alternative-field">
          ${alternativeNode("Process change", "Cambio de proceso", "process-change")}
          ${alternativeNode("Training", "Capacitacion", "training-alternative")}
          ${alternativeNode("Organizational change", "Cambio organizacional", "organizational-change")}
          ${alternativeNode("Existing software", "Software existente", "existing-software-alt")}
          ${alternativeNode("SaaS", "Servicio externo", "saas-external")}
          ${alternativeNode("Integration", "Integracion", "integration-alt")}
          ${alternativeNode("New software", "Nuevo software", "new-software-alt")}
          ${alternativeNode("Hardware", "Hardware", "hardware-alt")}
          ${alternativeNode("Automation", "Automatizacion", "automation-alt")}
          ${alternativeNode("AI-enabled solution", "Solucion con IA", "ai-enabled-solution-alt")}
        </div>
        <div class="converge-lines" aria-hidden="true"><span></span><span></span><span></span></div>
      </section>

      <section class="canvas-region feasibility-region" aria-labelledby="feasibilityHeading">
        <div class="region-number">06</div>
        <div class="region-heading"><p class="lesson-kicker">PLANNING / PLANEACION</p><h2 id="feasibilityHeading">Business Case &amp; Feasibility<span>Caso de negocio y viabilidad</span></h2><p>Should this project proceed?<span>Debe continuar este proyecto?</span></p></div>
        <div class="feasibility-constellation">
          ${feasibilityNode("Operational", "Operativa", "Does it work?", "Sirve?", "operativa", "feas-op")}
          ${feasibilityNode("Economic", "Economica", "Is it worth it?", "Conviene?", "economica", "feas-eco")}
          ${feasibilityNode("Technical", "Tecnica", "Can we do it?", "Podemos?", "tecnica", "feas-tech")}
          ${feasibilityNode("Schedule", "Cronograma", "Can we deliver in time?", "Llegamos?", "cronograma", "feas-time")}
          ${canvasNode("Feasibility", "Viabilidad", "viabilidad", "feasibility-core")}
        </div>
        <div class="decision-path" aria-label="Decision outcomes">
          <div class="decision-line"></div>
          <button class="decision go" type="button" data-concept="decision">GO<span>Proceed / Continuar</span></button>
          <button class="decision reframe" type="button" data-concept="go-reframe-stop">REFRAME<span>Reformular</span></button>
          <button class="decision stop" type="button" data-concept="go-reframe-stop">STOP<span>Detener</span></button>
        </div>
      </section>

      ${journeyArrow("An approved project must become organized work", "Un proyecto aprobado debe convertirse en trabajo organizado")}

      <section class="course-question-bridge" aria-label="Course learning journey">
        <button type="button" data-concept="problem-framing-gate"><small>WEEK 1</small><strong>WHY?</strong><span>Problem / Need<br>Problema / Necesidad</span></button>
        <span>&rarr;</span>
        <button type="button" data-concept="viabilidad"><small>WEEK 1</small><strong>SHOULD WE?</strong><span>Business Case / Feasibility<br>Caso / Viabilidad</span></button>
        <span>&rarr;</span>
        <button class="is-current" type="button" data-concept="project-management"><small>WEEK 2</small><strong>HOW DO WE ORGANIZE?</strong><span>Project Management / WBS<br>Gestion / EDT</span></button>
        <span>&rarr;</span>
        <button class="is-current" type="button" data-concept="requirements-discovery"><small>WEEK 2</small><strong>WHAT DOES IT NEED?</strong><span>Analysis / Requirements / FDD<br>Analisis / Requisitos / FDD</span></button>
        <span>&rarr;</span>
        <div class="future-question"><small>FUTURE</small><strong>HOW WILL WE DESIGN IT?</strong><span>Not expanded yet</span></div>
      </section>

      <header class="week-divider">
        <div><p class="lesson-kicker">WEEK 2 / SEMANA 2</p><h2>From project approval to validated system needs</h2><p>De la aprobacion del proyecto a necesidades validadas del sistema.</p></div>
        <span>02 / 07</span>
      </header>

      <section class="canvas-region week2-project-region" aria-labelledby="projectHeading">
        <div class="region-number">07</div>
        <div class="region-heading"><p class="lesson-kicker">DELIVERY / EJECUCION</p><h2 id="projectHeading">Project Management<span>Gestion del proyecto</span></h2><p>How do we organize an approved project?<span>Como organizamos un proyecto aprobado?</span></p></div>
        <div class="project-distinction">
          ${canvasNode("PROJECT", "PROYECTO", "project", "project-sun")}
          <div class="not-equal-mark">&ne;</div>
          ${canvasNode("ONGOING OPERATION", "OPERACION CONTINUA", "ongoing-operation", "operation-ring")}
        </div>
        <div class="project-characteristics" aria-label="Project characteristics">
          ${["defined scope", "beginning", "end", "sponsor", "time", "cost", "quality"].map(item => `<span>${item}</span>`).join("")}
        </div>

        <div class="wbs-landscape">
          <button class="wbs-title" type="button" data-concept="wbs"><strong>WORK BREAKDOWN STRUCTURE</strong><span>Estructura de Desglose del Trabajo</span><small>What project work must be completed?<br>Que trabajo del proyecto debe completarse?</small></button>
          <div class="decomposition-tree">
            ${canvasNode("PROJECT", "Proyecto", "project", "tree-node tree-root")}
            <span class="tree-line"></span>
            ${canvasNode("DELIVERABLE", "Entregable", "deliverable", "tree-node")}
            <span class="tree-line"></span>
            ${canvasNode("WORK PACKAGE", "Paquete de trabajo", "work-package", "tree-node")}
            <span class="tree-line"></span>
            ${canvasNode("TASK", "Tarea", "task", "tree-node tree-leaf")}
          </div>
          <div class="task-orbit">
            <p>TASK ATTRIBUTES<span>Atributos de la tarea</span></p>
            ${["duration", "effort", "resources", "responsibility", "dependencies", "cost"].map(item => `<span>${item}</span>`).join("")}
          </div>
        </div>

        <div class="schedule-track">
          ${pathNode("Dependencies", "Dependencias", "dependencies", "schedule-node")}
          ${pathArrow()}
          ${pathNode("Schedule", "Cronograma", "schedule", "schedule-node")}
          ${pathArrow()}
          ${pathNode("Critical Path", "Ruta critica", "critical-path", "schedule-node critical-node")}
          <button class="milestone-marker" type="button" data-concept="milestone"><strong>MILESTONE</strong><span>Hito = checkpoint, not work</span></button>
        </div>
        <p class="critical-note">Critical path = dependent sequence that determines minimum project duration. It is not "the most difficult work."</p>

        <button class="effort-duration-principle" type="button" data-concept="effort-duration"><strong>EFFORT &ne; CALENDAR DURATION</strong><span>ESFUERZO &ne; DURACION CALENDARIO</span><small>Effort &rarr; Resources &rarr; Time &rarr; Cost &rarr; Feasibility</small></button>
      </section>

      ${journeyArrow("Organized delivery creates space for disciplined analysis", "La ejecucion organizada abre paso a un analisis disciplinado")}

      <section class="canvas-region requirements-region" aria-labelledby="requirementsHeading">
        <div class="region-number">08</div>
        <div class="region-heading"><p class="lesson-kicker">DISCOVERY / DESCUBRIMIENTO</p><h2 id="requirementsHeading">Requirements Discovery<span>Descubrimiento de requisitos</span></h2><p>What does the system need?<span>Que necesita el sistema?</span></p></div>
        <div class="requirements-flow">
          ${pathNode("Understood Problem", "Problema comprendido", "underlying-problem", "requirement-step")}
          ${pathArrow()}
          ${pathNode("Stakeholders", "Interesados", "stakeholders", "requirement-step")}
          ${pathArrow()}
          ${pathNode("Fact Finding", "Recopilacion de hechos", "fact-finding", "requirement-step")}
          ${pathArrow()}
          ${pathNode("Candidate Requirements", "Requisitos candidatos", "candidate-requirements", "requirement-step")}
          ${pathArrow()}
          ${pathNode("Classification", "Clasificacion", "requirement-classification", "requirement-step")}
          ${pathArrow()}
          ${pathNode("Validation", "Validacion", "requirement-validation", "requirement-step")}
          ${pathArrow()}
          ${pathNode("Requirements Model", "Modelo de requisitos", "requirements-model", "requirement-step")}
        </div>

        <button class="what-how-principle" type="button" data-concept="what-vs-how"><strong>WHAT &ne; HOW</strong><span>QUE &ne; COMO</span><small>Requirement = what the system must provide or constrain.<br>Implementation = how a selected solution provides it.</small></button>

        <div class="fact-finding-field">
          <button class="fact-core" type="button" data-concept="fact-finding"><strong>FACT FINDING</strong><span>Recopilacion de hechos</span><small>WHO? WHAT? WHEN? WHERE? HOW? WHY?</small></button>
          ${canvasNode("Interview", "Entrevista", "interview", "fact-node fact-1")}
          ${canvasNode("Questionnaire", "Cuestionario", "questionnaire", "fact-node fact-2")}
          ${canvasNode("Observation", "Observacion", "observation", "fact-node fact-3")}
          ${canvasNode("Focus group", "Grupo focal", "focus-group", "fact-node fact-4")}
          ${canvasNode("Current-system review", "Revision del sistema actual", "current-system-review", "fact-node fact-5")}
          ${canvasNode("Process mapping", "Mapeo de procesos", "process-mapping", "fact-node fact-6")}
          ${canvasNode("Research", "Investigacion", "research-technique", "fact-node fact-7")}
        </div>

        <div class="requirement-model-stage">
          <div class="ipo-flow">
            ${pathNode("INPUT", "Entrada", "requirement-input", "requirement-category input-category")}
            ${pathArrow()}
            ${pathNode("PROCESS", "Proceso", "requirement-process", "requirement-category process-category")}
            ${pathArrow()}
            ${pathNode("OUTPUT", "Salida", "requirement-output", "requirement-category output-category")}
          </div>
          <div class="cross-cutting-band performance-band"><button type="button" data-concept="requirement-performance"><strong>PERFORMANCE</strong><span>Desempeno · How well? / Que tan bien?</span></button></div>
          <div class="cross-cutting-band security-band"><button type="button" data-concept="requirement-security"><strong>SECURITY</strong><span>Seguridad · How protected? / Que tan protegido?</span></button></div>
        </div>
      </section>

      ${journeyArrow("Decomposition appears twice, but answers different questions", "La descomposicion aparece dos veces, pero responde preguntas distintas")}

      <section class="canvas-region decomposition-comparison" aria-labelledby="comparisonHeading">
        <div class="region-number">09</div>
        <div class="region-heading"><p class="lesson-kicker">CRITICAL DISTINCTION / DISTINCION CLAVE</p><h2 id="comparisonHeading">WBS &ne; FDD</h2></div>
        <div class="comparison-domains">
          <button class="comparison-circle wbs-circle" type="button" data-concept="wbs"><small>PROJECT VIEW</small><strong>WBS / EDT</strong><span>What work must we perform to deliver the project?</span><em>Project &rarr; Deliverable &rarr; Work Package &rarr; Task</em></button>
          <div class="comparison-center"><strong>&ne;</strong><span>Both decompose.<br>Different things.</span></div>
          <button class="comparison-circle fdd-circle" type="button" data-concept="fdd"><small>SYSTEM VIEW</small><strong>FDD</strong><span>What functions does the business or system perform?</span><em>Manage Reservations &rarr; Create · Check · Modify · Cancel</em></button>
        </div>
      </section>

      <section class="canvas-region approaches-region" aria-labelledby="approachesHeading">
        <div class="region-number">10</div>
        <div class="region-heading"><p class="lesson-kicker">FORUM 2.1 / READY FOR EXPANSION</p><h2 id="approachesHeading">Development Approaches<span>Enfoques de desarrollo</span></h2><p>Related, but not necessarily identical categories.<span>Relacionados, pero no necesariamente categorias identicas.</span></p></div>
        <div class="approach-constellation">
          ${canvasNode("SDLC", "Lifecycle framework", "sdlc", "approach-node approach-sdlc")}
          ${canvasNode("JAD", "Collaborative requirements", "jad", "approach-node approach-jad")}
          ${canvasNode("RAD", "Rapid prototyping", "rad", "approach-node approach-rad")}
          ${canvasNode("AGILE", "Iterative and adaptive family", "agile", "approach-node approach-agile")}
          ${canvasNode("FORUM 2.1", "Ready for expansion", "forum-2-1", "approach-core")}
        </div>
      </section>

      ${journeyArrow("AI can accelerate the work, but validation remains essential", "La IA puede acelerar el trabajo, pero la validacion sigue siendo esencial")}

      <section class="canvas-region ai-development-region" aria-labelledby="aiDevelopmentHeading">
        <div class="region-number">11</div>
        <div class="region-heading"><p class="lesson-kicker">AI-FIRST EXTENSION / NOT CST212 CANONICAL</p><h2 id="aiDevelopmentHeading">Human Steering + Agent Execution<span>Direccion humana + ejecucion por agentes</span></h2></div>
        <div class="ai-swimlanes">
          <button class="human-lane" type="button" data-concept="human-governance-layer"><strong>HUMAN / GOVERNANCE LAYER</strong><span>Intent · Problem · Boundary · Evidence · Authorization · Risk · Validation</span></button>
          <div class="steering-bridge"><strong>HUMANS STEER</strong><span>AI may assist steering</span><strong>AGENTS EXECUTE</strong></div>
          <button class="agent-lane" type="button" data-concept="agent-execution-layer"><strong>AGENT EXECUTION LAYER</strong><span>Draft · Analyze · Decompose · Plan · Implement · Test · Document · Monitor</span></button>
        </div>
        <div class="ai-validation-equation">
          <button type="button" data-concept="ai-output-candidate"><strong>AI OUTPUT</strong><span>candidate / hypothesis</span></button>
          <b>+</b>
          <div><strong>evidence · tests · stakeholder confirmation · acceptance criteria</strong><span>validation</span></div>
          <b>&rarr;</b>
          <div><strong>REVIEWED RESULT</strong><span>never automatic truth</span></div>
        </div>
        <button class="wrong-problem-equation" type="button" data-concept="good-ai-wrong-problem"><strong>GOOD AI + WRONG PROBLEM = EFFICIENT SOLUTION TO THE WRONG PROBLEM</strong><span>Connects back to the Week 1 Problem Framing Gate.</span></button>
        <div class="iterative-loop" aria-label="AI-First iterative loop">
          ${["INTENT", "PLAN", "EXECUTE", "TEST / EVALUATE", "EVIDENCE", "REVIEW", "ITERATE"].map((item, index) => `<span>${item}</span>${index < 6 ? "<b>&rarr;</b>" : ""}`).join("")}
        </div>
      </section>

      <section class="learning-transfer-pipeline" aria-labelledby="transferHeading">
        <div><p class="lesson-kicker">LEARNING TRANSFER / TRANSFERENCIA</p><h2 id="transferHeading">Knowledge may become a candidate, never automatically canonical.</h2></div>
        <div class="pipeline-flow">
          ${pipelineStep("CST212 CANONICAL", "Academic source", "cst212-knowledge")}
          ${pathArrow()}
          ${pipelineStep("SYSTEMIC", "Interpretation", "systemic-understanding")}
          ${pathArrow()}
          ${pipelineStep("AI-FIRST", "Interpretation", "ai-first-interpretation")}
          ${pathArrow()}
          ${pipelineStep("INDUSTRY", "Reference / evidence", "industry-reference-evidence")}
          ${pathArrow()}
          ${pipelineStep("QUANTUM CANDIDATE", "Not canonical", "quantum-application-candidate")}
          ${pathArrow()}
          ${pipelineStep("HUMAN REVIEW", "Required gate", "human-review")}
          ${pathArrow()}
          ${pipelineStep("POSSIBLE PROMOTION", "Future only", "possible-future-promotion")}
        </div>
      </section>
    </div>
  `;

  systemView.innerHTML = `
    <div class="architecture-canvas">
      <header class="architecture-head"><p class="lesson-kicker">SYSTEM / CONTAINMENT ARCHITECTURE</p><h2>From whole to component</h2><p>System &rarr; subsystem &rarr; component &rarr; software component</p></header>
      <section class="architecture-system">
        <span class="architecture-label">SYSTEM / SISTEMA</span>
        <div class="architecture-ring human-ring">
          ${canvasNode("People", "Personas", "personas", "architecture-node")}
          ${canvasNode("Processes", "Procesos", "procesos", "architecture-node")}
          ${canvasNode("Information / Data", "Informacion / Datos", "datos", "architecture-node")}
          ${canvasNode("Rules / Policies", "Reglas / Politicas", "rules-policies", "architecture-node")}
          ${canvasNode("Governance", "Gobernanza", "org-governance", "architecture-node")}
          ${canvasNode("Physical resources", "Recursos fisicos", "physical-resources", "architecture-node")}
        </div>
        <div class="architecture-technology">
          <span class="architecture-label">TECHNOLOGY / TECNOLOGIA</span>
          <div class="architecture-software">
            <span class="architecture-label">SOFTWARE</span>
            ${canvasNode("Web application", "Aplicacion web", "web-application", "software-node")}
            ${canvasNode("Mobile application", "Aplicacion movil", "mobile-application", "software-node")}
            ${canvasNode("Portal", "Portal transaccional", "transactional-portal", "software-node")}
            ${canvasNode("APIs / services", "APIs / servicios", "apis-services", "software-node")}
            ${canvasNode("AI components", "Componentes IA", "ai-components-agents", "software-node")}
          </div>
          <div class="architecture-infrastructure">
            <span class="architecture-label">INFRASTRUCTURE / INFRAESTRUCTURA</span>
            ${canvasNode("Databases", "Bases de datos", "databases", "software-node")}
            ${canvasNode("Repositories", "Repositorios", "repositories", "software-node")}
            ${canvasNode("Knowledge libraries", "Bibliotecas de conocimiento", "knowledge-libraries", "software-node")}
            ${canvasNode("Hardware", "Hardware", "hardware-infrastructure", "software-node")}
          </div>
        </div>
        <button class="architecture-principle" type="button" data-concept="system-not-software">SYSTEM &ne; SOFTWARE<span>SISTEMA &ne; SOFTWARE</span></button>
      </section>
      <p class="architecture-footnote">These are possible containment relationships, not mandatory parts of every system.</p>
    </div>
  `;
}

function canvasNode(english, spanish, id, className = "canvas-node") {
  return `<button class="canvas-node ${className}" type="button" data-concept="${id}"><strong>${english}</strong><span>${spanish}</span></button>`;
}

function journeyArrow(english, spanish) {
  return `<div class="journey-connector" aria-label="${english}"><span class="connector-line"></span><span class="connector-arrow">&#8595;</span><p>${english}<small>${spanish}</small></p></div>`;
}

function pathNode(english, spanish, id, className = "path-node") {
  return canvasNode(english, spanish, id, className);
}

function pathArrow() {
  return `<span class="path-arrow" aria-hidden="true">&#8594;</span>`;
}

function alternativeNode(english, spanish, id) {
  return canvasNode(english, spanish, id, "alternative-node");
}

function feasibilityNode(english, spanish, question, translation, id, position) {
  return `<button class="feasibility-node ${position}" type="button" data-concept="${id}"><strong>${english}</strong><span>${spanish}</span><small>${question}<br>${translation}</small></button>`;
}

function pipelineStep(title, subtitle, id) {
  return `<button class="pipeline-step" type="button" data-concept="${id}"><strong>${title}</strong><span>${subtitle}</span></button>`;
}

function visibleNodes() {
  const query = state.query.trim().toLowerCase();
  return mapData.nodes.filter((node) => {
    const weekMatch = state.activeWeeks.has(node.weekIntroduced);
    const statusMatch = state.activeStatuses.has(node.status);
    const layerMatch = state.activeLayers.has(getLayerKey(node));
    const queryMatch = !query || [node.title, node.shortDefinition, ...(node.tags || [])].join(" ").toLowerCase().includes(query);
    return weekMatch && statusMatch && layerMatch && queryMatch;
  });
}

function draw() {
  const nodes = visibleNodes();
  const nodeIds = new Set(nodes.map((node) => node.id));
  const edges = mapData.edges.filter((edge) => nodeIds.has(edge.source) && nodeIds.has(edge.target) && state.activeEdges.has(edge.relationshipType));

  edgesLayer.innerHTML = "";
  nodesLayer.innerHTML = "";

  edges.forEach((edge) => {
    const source = mapData.nodes.find((node) => node.id === edge.source);
    const target = mapData.nodes.find((node) => node.id === edge.target);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const midX = (source.x + target.x) / 2;
    const midY = (source.y + target.y) / 2;
    const dx = target.x - source.x;
    const dy = target.y - source.y;
    const curve = Math.min(90, Math.hypot(dx, dy) / 4);
    const cx = midX - dy / Math.hypot(dx || 1, dy || 1) * curve * 0.25;
    const cy = midY + dx / Math.hypot(dx || 1, dy || 1) * curve * 0.25;
    path.setAttribute("d", `M ${source.x} ${source.y} Q ${cx} ${cy} ${target.x} ${target.y}`);
    path.setAttribute("class", `edge ${edge.relationshipType}`);
    edgesLayer.appendChild(path);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", cx);
    text.setAttribute("y", cy - 6);
    text.setAttribute("class", "edge-label");
    text.textContent = edge.label;
    edgesLayer.appendChild(text);
  });

  nodes.forEach((node) => {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("class", `node ${node.status === "nuevo" ? "is-new" : ""} ${getLayerKey(node) === "ai" ? "is-ai-overlay" : ""} ${getLayerKey(node) === "quantum" ? "is-quantum-layer" : ""} ${getLayerKey(node) === "case" ? "is-case-study" : ""} ${getLayerKey(node) === "industry" ? "is-industry-layer" : ""} ${state.selected === node.id ? "is-selected" : ""}`);
    group.setAttribute("transform", `translate(${node.x}, ${node.y})`);
    group.setAttribute("tabindex", "0");
    group.setAttribute("role", "button");
    group.setAttribute("aria-label", node.title);

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", node.size);
    circle.setAttribute("fill", categoryColors[node.category] || "var(--accent)");
    circle.setAttribute("fill-opacity", node.id === "planeacion" ? "0.33" : "0.2");
    group.appendChild(circle);

    const titleLines = wrapLabel(node.title, node.size > 60 ? 18 : 13);
    titleLines.forEach((line, index) => {
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("y", (index - (titleLines.length - 1) / 2) * 15);
      text.setAttribute("font-size", node.size > 60 ? "13" : "11");
      text.textContent = line;
      group.appendChild(text);
    });

    if (node.question) {
      const subtitle = document.createElementNS("http://www.w3.org/2000/svg", "text");
      subtitle.setAttribute("class", "subtitle");
      subtitle.setAttribute("y", node.size * 0.58);
      subtitle.textContent = node.question.length > 24 ? node.question.slice(0, 23) + "..." : node.question;
      group.appendChild(subtitle);
    }

    if (node.status === "nuevo") {
      const badge = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      badge.setAttribute("class", "new-badge");
      badge.setAttribute("x", -22);
      badge.setAttribute("y", -node.size - 13);
      badge.setAttribute("width", 44);
      badge.setAttribute("height", 17);
      badge.setAttribute("rx", 7);
      group.appendChild(badge);

      const badgeText = document.createElementNS("http://www.w3.org/2000/svg", "text");
      badgeText.setAttribute("class", "new-badge-text");
      badgeText.setAttribute("y", -node.size);
      badgeText.textContent = "NUEVO";
      group.appendChild(badgeText);
    }

    if (getLayerKey(node) === "ai") {
      const overlayBadge = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      overlayBadge.setAttribute("class", "overlay-badge");
      overlayBadge.setAttribute("x", -28);
      overlayBadge.setAttribute("y", node.size + 7);
      overlayBadge.setAttribute("width", 56);
      overlayBadge.setAttribute("height", 15);
      overlayBadge.setAttribute("rx", 7);
      group.appendChild(overlayBadge);

      const overlayText = document.createElementNS("http://www.w3.org/2000/svg", "text");
      overlayText.setAttribute("class", "overlay-badge-text");
      overlayText.setAttribute("y", node.size + 18);
      overlayText.textContent = "AI LAYER";
      group.appendChild(overlayText);
    }

    if (getLayerKey(node) === "quantum") {
      const quantumBadge = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      quantumBadge.setAttribute("class", "quantum-badge");
      quantumBadge.setAttribute("x", -38);
      quantumBadge.setAttribute("y", node.size + 7);
      quantumBadge.setAttribute("width", 76);
      quantumBadge.setAttribute("height", 15);
      quantumBadge.setAttribute("rx", 7);
      group.appendChild(quantumBadge);

      const quantumText = document.createElementNS("http://www.w3.org/2000/svg", "text");
      quantumText.setAttribute("class", "quantum-badge-text");
      quantumText.setAttribute("y", node.size + 18);
      quantumText.textContent = "CANDIDATE";
      group.appendChild(quantumText);
    }

    if (getLayerKey(node) === "case") {
      const caseBadge = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      caseBadge.setAttribute("class", "case-badge");
      caseBadge.setAttribute("x", -25);
      caseBadge.setAttribute("y", node.size + 7);
      caseBadge.setAttribute("width", 50);
      caseBadge.setAttribute("height", 15);
      caseBadge.setAttribute("rx", 7);
      group.appendChild(caseBadge);

      const caseText = document.createElementNS("http://www.w3.org/2000/svg", "text");
      caseText.setAttribute("class", "case-badge-text");
      caseText.setAttribute("y", node.size + 18);
      caseText.textContent = "CASE";
      group.appendChild(caseText);
    }

    if (getLayerKey(node) === "industry") {
      const referenceBadge = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      referenceBadge.setAttribute("class", "reference-badge");
      referenceBadge.setAttribute("x", -34);
      referenceBadge.setAttribute("y", node.size + 7);
      referenceBadge.setAttribute("width", 68);
      referenceBadge.setAttribute("height", 15);
      referenceBadge.setAttribute("rx", 7);
      group.appendChild(referenceBadge);

      const referenceText = document.createElementNS("http://www.w3.org/2000/svg", "text");
      referenceText.setAttribute("class", "reference-badge-text");
      referenceText.setAttribute("y", node.size + 18);
      referenceText.textContent = "REFERENCE";
      group.appendChild(referenceText);
    }

    group.addEventListener("click", () => selectNode(node.id));
    group.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") selectNode(node.id);
    });
    group.addEventListener("mousemove", (event) => showTooltip(event, node));
    group.addEventListener("mouseleave", hideTooltip);
    nodesLayer.appendChild(group);
  });

  applyTransform();
  updateDetail();
}

function wrapLabel(label, maxLength) {
  const words = label.split(" ");
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxLength && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  });
  if (line) lines.push(line);
  return lines.slice(0, 3);
}

function selectNode(id) {
  state.selected = id;
  draw();
}

function updateDetail() {
  const node = mapData.nodes.find((item) => item.id === state.selected) || visibleNodes()[0];
  if (!node) return;
  detailTitle.textContent = node.title;
  const connections = mapData.edges
    .filter((edge) => edge.source === node.id || edge.target === node.id)
    .map((edge) => {
      const otherId = edge.source === node.id ? edge.target : edge.source;
      const other = mapData.nodes.find((item) => item.id === otherId);
      return `${mapData.relationshipTypes[edge.relationshipType].symbol} ${other?.title || otherId} (${edge.label})`;
    });
  detailContent.innerHTML = detailRows({
    "Definition / Definicion": node.shortDefinition,
    "Why it matters / Por que importa": node.question,
    "Metaphor / Metafora": node.metaphor,
    "Example / Ejemplo": node.example,
    "Connections / Conexiones": connections.join("; ") || "Pending expansion / Pendiente de expansion.",
    "Source / Procedencia": layerLabel(node),
    "Week introduced / Semana": node.weekIntroduced === 0 ? "Course start / Inicio del curso" : `Week ${node.weekIntroduced} / Semana ${node.weekIntroduced}`,
    "Learning status / Estado": mapData.statuses[node.status].label
  });
}

function layerLabel(node) {
  if (getLayerKey(node) === "ai") return "AI-FIRST EXTENSION";
  if (getLayerKey(node) === "quantum") return "QUANTUM AI FIRST CANDIDATE (learning-derived, not canonical)";
  if (getLayerKey(node) === "systemic") return "SYSTEMIC VIEW";
  if (getLayerKey(node) === "case") return "CASE STUDY LAYER";
  if (getLayerKey(node) === "industry") return "INDUSTRY REFERENCE / NOT CST212 CANONICAL";
  return "COURSE / CANONICAL KNOWLEDGE";
}

function getLayerKey(node) {
  if (node.layer === "ai-first-overlay" || node.layer === "ai") return "ai";
  if (node.layer === "quantum-candidate" || node.layer === "quantum") return "quantum";
  if (node.layer === "systemic" || node.layer === "bridge") return "systemic";
  if (node.layer === "case") return "case";
  if (node.layer === "industry-reference") return "industry";
  return "canonical";
}

function detailRows(rows) {
  return Object.entries(rows).map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("");
}

function showTooltip(event, node) {
  tooltip.hidden = false;
  tooltip.innerHTML = `<strong>${node.title}</strong><span>${node.question}</span>`;
  tooltip.style.left = `${event.offsetX + 16}px`;
  tooltip.style.top = `${event.offsetY + 16}px`;
}

function hideTooltip() {
  tooltip.hidden = true;
}

function applyTransform() {
  viewport.setAttribute("transform", `translate(${state.tx} ${state.ty}) scale(${state.scale})`);
}

function setupFilters() {
  const weekFilters = document.getElementById("weekFilters");
  mapData.weeks.forEach((week) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = week.id === 1 || week.id === 2 || week.id === "all" ? "is-active" : "";
    button.textContent = week.label;
    button.disabled = !week.enabled;
    button.addEventListener("click", () => {
      if (week.id === "all") {
        state.activeWeeks = new Set([0, 1, 2]);
        document.querySelectorAll("#weekFilters button").forEach((item) => item.classList.toggle("is-active", item.textContent === "All" || item.textContent === "Week 1" || item.textContent === "Week 2"));
      } else if (state.activeWeeks.has(week.id)) {
        state.activeWeeks.delete(week.id);
        button.classList.remove("is-active");
      } else {
        state.activeWeeks.add(week.id);
        button.classList.add("is-active");
      }
      draw();
    });
    weekFilters.appendChild(button);
  });

  const statusFilters = document.getElementById("statusFilters");
  Object.entries(mapData.statuses).forEach(([key, status]) => {
    statusFilters.appendChild(makeCheckbox(key, status.label, status.color, state.activeStatuses, draw));
  });

  const layerFilters = document.getElementById("layerFilters");
  Object.entries(mapData.layers).forEach(([key, layer]) => {
    layerFilters.appendChild(makeCheckbox(key, layer.label, layer.color, state.activeLayers, draw));
  });

  const edgeFilters = document.getElementById("edgeFilters");
  Object.entries(mapData.relationshipTypes).forEach(([key, type]) => {
    edgeFilters.appendChild(makeCheckbox(key, `${type.symbol} ${type.label}`, "var(--muted)", state.activeEdges, draw));
  });
}

function makeCheckbox(key, label, color, activeSet, onChange) {
  const wrapper = document.createElement("label");
  wrapper.className = "legend-item";
  wrapper.innerHTML = `<input type="checkbox" checked><span class="swatch" style="color:${color}; background:${color}"></span><span>${label}</span>`;
  wrapper.querySelector("input").addEventListener("change", (event) => {
    if (event.target.checked) activeSet.add(key);
    else activeSet.delete(key);
    onChange();
  });
  return wrapper;
}

function setupInteractions() {
  document.querySelectorAll(".view-tab").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  document.getElementById("searchInput").addEventListener("input", (event) => {
    state.query = event.target.value;
    draw();
  });

  document.getElementById("centerMap").addEventListener("click", centerMap);
  document.getElementById("resetView").addEventListener("click", resetView);

  [learnView, systemView].forEach((view) => {
    view.addEventListener("click", (event) => {
      const concept = event.target.closest("[data-concept]");
      if (concept) selectNode(concept.dataset.concept);
      const toggle = event.target.closest("#hkaOverlayToggle");
      if (toggle) {
        state.hkaOverlay = !state.hkaOverlay;
        toggle.setAttribute("aria-pressed", String(state.hkaOverlay));
        toggle.classList.toggle("is-active", state.hkaOverlay);
        const overlay = document.getElementById("hkaOverlay");
        overlay.classList.toggle("is-visible", state.hkaOverlay);
        overlay.setAttribute("aria-hidden", String(!state.hkaOverlay));
      }
    });
    view.addEventListener("pointerover", (event) => {
      const concept = event.target.closest("[data-concept]");
      if (!concept || state.selected === concept.dataset.concept) return;
      state.selected = concept.dataset.concept;
      updateDetail();
    });
  });

  let dragging = false;
  let start = null;
  svg.addEventListener("pointerdown", (event) => {
    dragging = true;
    start = { x: event.clientX, y: event.clientY, tx: state.tx, ty: state.ty };
    svg.classList.add("is-dragging");
  });
  svg.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    state.tx = start.tx + event.clientX - start.x;
    state.ty = start.ty + event.clientY - start.y;
    applyTransform();
  });
  svg.addEventListener("pointerup", () => {
    dragging = false;
    svg.classList.remove("is-dragging");
  });
  svg.addEventListener("pointerleave", () => {
    dragging = false;
    svg.classList.remove("is-dragging");
  });
  svg.addEventListener("wheel", (event) => {
    event.preventDefault();
    const nextScale = Math.min(1.5, Math.max(0.35, state.scale + (event.deltaY > 0 ? -0.06 : 0.06)));
    state.scale = nextScale;
    applyTransform();
  }, { passive: false });
}

function switchView(view) {
  state.currentView = view;
  document.querySelectorAll(".view-tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  document.querySelectorAll(".view-pane").forEach((pane) => {
    pane.classList.toggle("is-active", pane.id === `${view}View`);
  });
  const exploreActive = view === "explore";
  document.querySelector(".workspace").classList.toggle("is-explore", exploreActive);
  document.getElementById("centerMap").style.display = exploreActive ? "" : "none";
  document.getElementById("resetView").style.display = exploreActive ? "" : "none";
}

function centerMap() {
  state.scale = 0.62;
  state.tx = 60;
  state.ty = 42;
  applyTransform();
}

function resetView() {
  state.query = "";
  document.getElementById("searchInput").value = "";
  state.activeWeeks = new Set([0, 1, 2]);
  state.activeStatuses = new Set(Object.keys(mapData.statuses));
  state.activeEdges = new Set(Object.keys(mapData.relationshipTypes));
  state.activeLayers = new Set(Object.keys(mapData.layers));
  document.querySelectorAll("input[type='checkbox']").forEach((input) => { input.checked = true; });
  document.querySelectorAll("#weekFilters button").forEach((button) => button.classList.add("is-active"));
  centerMap();
  draw();
}

setupFilters();
setupInteractions();
renderStaticViews();
switchView("learn");
draw();
