const projects = [
  {
    number: "01",
    category: "CARDIOVASCULAR AI",
    title: "CardioSense",
    status: "Prototype",
    githubUrl: "https://github.com/KashanAsdaq500/CardioSense",
    description:
      "An ECG image-analysis prototype exploring cardiac-pattern classification, an API-backed workflow, and retrieval of medical guidance to support explanations.",
    focus: "Image classification· API integration· guideline retrieval",
    tags: ["ResNet-18", "ONNX", "FastAPI", "RAG"],
    featured: true,
  },
  {
    number: "02",
    category: "MEDICAL INFORMATION",
    title: "Medical Report Intelligence",
    status: "Prototype",
    githubUrl: "https://github.com/KashanAsdaq500/Medical-Report-Intelligence",
    description:
      "A full-stack healthcare prototype connecting report analysis, prediction endpoints, medical-guideline retrieval, and analysis history.",
    focus: "Full-stack integration· model API· RAG",
    tags: ["Next.js", "FastAPI", "RAG", "Database"],
  },
  {
    number: "03",
    category: "MEDICAL COMPUTER VISION",
    title: "Skin Cancer Detection AI",
    status: "Under verification",
    githubUrl: "https://github.com/KashanAsdaq500/skin-cancer-detection-ai",
    description:
      "A skin-lesion image-classification project with a Streamlit interface and CNN-oriented workflow. Prediction behavior and model integration need verification before results are presented as model outputs.",
    focus: "Image classification· model validation· responsible AI",
    tags: ["CNN", "TensorFlow / Keras", "Python", "Streamlit"],
  },
  {
    number: "04",
    category: "EXPLAINABLE AI",
    title: "Diabetes Clinical Decision Support",
    status: "Research / WIP",
    githubUrl: "https://github.com/KashanAsdaq500/Explainable-Diabetes-CDSS",
    description:
      "A research-oriented exploration of diabetes-risk modelling, comparison of machine-learning approaches, and feature-level explanations for decision-support research.",
    focus: "Model comparison· explainability· evaluation",
    tags: ["Python", "XGBoost", "SHAP", "Machine Learning"],
  },
  {
    number: "05",
    category: "PREDICTIVE HEALTHCARE",
    title: "Heart Disease Prediction",
    status: "ML project",
    githubUrl: "https://github.com/KashanAsdaq500/heart-disease-prediction-ml",
    description:
      "A supervised-learning project comparing classification approaches to estimate cardiovascular risk from structured health features.",
    focus: "Tabular data· classification· evaluation",
    tags: ["Logistic Regression", "Random Forest", "Scikit-learn"],
  },
  {
    number: "06",
    category: "HEALTHCARE WORKFLOWS",
    title: "HealthMate",
    status: "Concept / Prototype",
    githubUrl: "https://github.com/KashanAsdaq500",
    description:
      "A healthcare website-assistant concept exploring conversational interactions, workflow automation, and structured information capture.",
    focus: "Chatbot experience · workflow automation",
    tags: ["n8n", "Chatbot", "Google Sheets", "Automation"],
  },
];

const skills = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Explainable AI",
  "RAG & Embeddings",
  "Python",
  "FastAPI",
  "Next.js",
  "SQL & Databases",
  "Model Evaluation",
  "TensorFlow / Keras",
  "Git & GitHub",
];

const experience = [
  {
    role: "AI Intern",
    organization: "Internee.pk Â· Remote",
    period: "Feb 2026 - Apr 2026",
    description:
      "Built practical experience with AI-focused tasks and project workflows in a remote internship setting.",
  },
];

function ArrowIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 5h5v5M19 5l-9 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="home" className="min-h-screen overflow-hidden bg-[#F8FBFF] text-[#17324D]">
      <header className="sticky top-0 z-50 border-b border-[#DCEAF5] bg-[#F8FBFF]/95 backdrop-blur-xl">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3" aria-label="Kashan Asdaq home">
            
            <span>
              <span className="block text-sm font-semibold tracking-tight">Kashan Asdaq</span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-[#64748B]">Healthcare AI Portfolio</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-[#526579] md:flex">
            <a href="#about" className="transition hover:text-[#1769AA]">About</a>
            <a href="#projects" className="transition hover:text-[#1769AA]">Projects</a>
          
            <a href="#expertise" className="transition hover:text-[#1769AA]">Skills</a>
          </div>
          <a href="#contact" className="rounded-full bg-[#1769AA] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#10558A] sm:px-5">Let&apos;s connect</a>
        </nav>
      </header>

      <section className="relative">
        <div className="pointer-events-none absolute -right-40 -top-20 h-[440px] w-[440px] rounded-full bg-[#EAF5FD]/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-12 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DCEAF5] bg-white px-4 py-2 text-xs font-medium tracking-wide text-[#1769AA]">
              <span className="h-2 w-2 rounded-full bg-[#2B8A78]" />
              SOFTWARE ENGINEER · AI/ML DEVELOPER
            </div>
            <h1 className="max-w-3xl text-5xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
  Building Intelligent Solutions for{" "}
  <span className="font-serif italic text-[#1769AA]">
    Healthcare.
  </span>
</h1>
<p className="mt-5 text-sm font-medium tracking-wide text-[#1769AA] sm:text-base">
  Machine Learning · Healthcare AI · Full-Stack Development
</p>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#526579] sm:text-lg">
              I&apos;m Kashan Asdaq, a Software Engineering graduate interested in applying machine learning and modern software development to meaningful healthcare problems.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#64748B]">
              My focus includes medical image analysis, explainable AI, predictive modelling, and retrieval-augmented healthcare information systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-3 rounded-full bg-[#1769AA] px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#10558A]">Explore selected work <ArrowIcon /></a>
              <a href="https://github.com/KashanAsdaq500" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#DCEAF5] bg-white px-6 py-3.5 text-sm font-medium transition hover:border-[#1769AA] hover:text-[#1769AA]">GitHub profile <ExternalIcon /></a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#DCEAF5] pt-5 text-[10px] font-medium tracking-[0.13em] text-[#64748B] sm:text-xs">
              <span>MEDICAL MACHINE LEARNING</span>
              <span>DEEP LEARNING</span>
              <span>RESPONSIBLE AI</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] border border-[#DCEAF5]" />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-[#DCEAF5] bg-[#EAF5FD] p-3 shadow-2xl shadow-[#12304A]/10">
              <img src="/kashan.jpg" alt="Portrait of Kashan Asdaq" className="h-[390px] w-full rounded-[1.2rem] object-cover object-center sm:h-[470px]" />
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#DCEAF5] bg-white px-4 py-3 shadow-lg sm:-left-8">
              <p className="text-[10px] tracking-[0.16em] text-[#64748B]">MY APPROACH</p>
              <p className="mt-1 text-sm font-medium text-[#17324D]">Build· Evaluate· Improve</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[#E2ECF5] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:items-start md:py-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#1769AA]">01 / ABOUT</p>
            <h2 className="mt-4 max-w-sm text-3xl font-medium leading-tight tracking-tight sm:text-4xl">Technology with a human purpose.</h2>
          </div>
          <div>
            <p className="text-base leading-8 text-[#526579]">
              I enjoy taking a problem from data exploration to a usable software prototype: preparing data, training or integrating models, exposing functionality through APIs, and designing interfaces that make results easier to understand.
            </p>
            <p className="mt-4 text-base leading-8 text-[#526579]">
              I&apos;m especially interested in healthcare AI where model quality, explainability, privacy, and clear communication matter as much as the interface itself.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#DCEAF5] bg-[#F8FBFF] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1769AA]">Education</p>
                <p className="mt-2 font-semibold">BS Software Engineering</p>
                <p className="mt-1 text-sm text-[#64748B]">University of Karachi</p>
              </div>
              <div className="rounded-2xl border border-[#DCEAF5] bg-[#F8FBFF] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1769AA]">Areas of interest</p>
                <p className="mt-2 font-semibold">Medical AI & applied ML</p>
                <p className="mt-1 text-sm text-[#64748B]">Research prototypes and practical applications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#1769AA]">02 / SELECTED WORK</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">Medical AI projects<span className="text-[#1769AA]">.</span></h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base">
              A selection of projects spanning predictive modelling, medical image analysis, clinical information retrieval, and healthcare workflows.
            </p>
          </div>
          <a href="https://github.com/KashanAsdaq500" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 self-start text-sm font-medium text-[#1769AA] transition hover:gap-3 sm:self-auto">All repositories <ArrowIcon /></a>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className={`group flex min-h-[365px] flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1769AA]/5 sm:p-7 ${project.featured ? "border-[#B9D9F2] bg-[#EAF5FD]" : "border-[#DCEAF5] bg-white"}`}>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium tracking-[0.16em] text-[#64748B]">PROJECT {project.number}</span>
                <span className="rounded-full border border-[#DCEAF5] bg-white/80 px-2.5 py-1 text-[10px] font-medium text-[#526579]">{project.status}</span>
              </div>
              <p className="mt-7 text-[10px] font-semibold tracking-[0.16em] text-[#1769AA]">{project.category}</p>
              <h3 className="mt-3 text-2xl font-medium leading-snug tracking-tight">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[#526579]">{project.description}</p>
              <p className="mt-4 text-xs leading-5 text-[#64748B]"><span className="font-semibold text-[#526579]">Focus: </span>{project.focus}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="rounded-full border border-[#DCEAF5] bg-white/80 px-3 py-1.5 text-[10px] font-medium text-[#526579]">{tag}</span>)}
              </div>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1769AA] transition hover:gap-3">View repository <ArrowIcon /></a>
            </article>
          ))}
        </div>
        <div className="mt-7 rounded-2xl border border-[#DCEAF5] bg-white p-5 sm:p-6">
          <p className="text-sm font-semibold text-[#17324D]">A note on medical AI</p>
          <p className="mt-2 text-sm leading-7 text-[#64748B]">
            These projects are learning, research, or software prototypes not medical devices or substitutes for professional care. Performance claims should be interpreted only alongside the dataset, split strategy, external validation, and limitations. Some project interfaces or model outputs may still require verification.
          </p>
        </div>
      </section>

      
      <section id="expertise" className="bg-[#12304A] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:py-24 lg:px-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#9CCEF0]">03 / TOOLKIT</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">The tools behind <span className="font-serif italic text-[#B9DFF8]">the ideas.</span></h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#C7DDED]">A growing toolkit for building, evaluating, and deploying data-driven applications.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => <span key={skill} className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-[#E2EDF6] transition hover:border-[#9CCEF0] hover:bg-white/[0.09]">{skill}</span>)}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#EAF5FD] px-6 py-12 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-10 -top-24 h-64 w-64 rounded-full border border-[#C7DDED]" />
          <div className="pointer-events-none absolute -right-1 -top-16 h-48 w-48 rounded-full border border-[#C7DDED]" />
          <p className="text-xs font-semibold tracking-[0.2em] text-[#1769AA]">04 / GET IN TOUCH</p>
          <h2 className="relative mt-5 max-w-2xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-6xl">Let&apos;s build something meaningful.</h2>
          <p className="relative mt-5 max-w-xl text-sm leading-7 text-[#526579] sm:text-base">
            Interested in healthcare AI, machine learning projects, research, or thoughtful collaborations? Let&apos;s connect.
          </p>
          <div className="relative mt-8 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/kashanasdaq/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#1769AA] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#10558A]">Connect on LinkedIn <ArrowIcon /></a>
            <a href="https://github.com/KashanAsdaq500" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#C7DDED] bg-white/80 px-6 py-3.5 text-sm font-medium transition hover:border-[#1769AA]">Explore GitHub <ExternalIcon /></a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E2ECF5] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-[#64748B] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© 2026 Kashan Asdaq</p>
          <p>Healthcare AI· Machine Learning· Research</p>
          <a href="#home" className="font-medium transition hover:text-[#1769AA]">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}

