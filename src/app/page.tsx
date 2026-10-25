
const projects = [
  {
    number: "01",
    category: "CARDIOVASCULAR AI",
    title: "CardioSense",
    description:
      "An ECG image analysis platform exploring deep learning, cardiac pattern classification, and AI-assisted clinical explanations.",
    tags: ["ResNet-18", "ONNX", "FastAPI", "RAG"],
    featured: true,
  },
  {
    number: "02",
    category: "MEDICAL INTELLIGENCE",
    title: "Medical Report Intelligence",
    description:
      "An AI-powered platform combining medical report analysis, prediction APIs, clinical guideline retrieval, and analysis history.",
    tags: ["Next.js", "FastAPI", "RAG", "Database"],
  },
  {
    number: "03",
    category: "MEDICAL COMPUTER VISION",
    title: "Skin Cancer Detection AI",
    description:
      "A medical image classification project exploring skin lesion categories through a Streamlit interface and a CNN-based workflow.",
    tags: ["CNN", "TensorFlow / Keras", "Python", "Streamlit"],
  },
  {
    number: "04",
    category: "EXPLAINABLE AI",
    title: "Diabetes Clinical Decision Support",
    description:
      "A research-oriented project investigating diabetes risk prediction, model comparisons, and explainability for clinical decision support.",
    tags: ["Python", "XGBoost", "SHAP", "Machine Learning"],
  },
  {
    number: "05",
    category: "PREDICTIVE HEALTHCARE",
    title: "Heart Disease Prediction",
    description:
      "A supervised machine learning project using classification models to estimate cardiovascular risk from input health features.",
    tags: ["Logistic Regression", "Random Forest", "Scikit-learn"],
  },
  {
    number: "06",
    category: "HEALTHCARE AUTOMATION",
    title: "HealthMate",
    description:
      "A healthcare website assistant concept combining conversational interactions, workflow automation, and structured information capture.",
    tags: ["n8n", "Chatbot", "Google Sheets", "Automation"],
  },
];

const skills = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Explainable AI",
  "RAG Systems",
  "Python",
  "FastAPI",
  "Next.js",
  "SQL & Databases",
  "Model Evaluation",
];

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FBFF] text-[#17324D]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#DCEAF5] bg-[#F8FBFF]/95 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
        >
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1769AA] text-sm font-semibold tracking-wide text-white">
              KA
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-tight">
                Kashan Asdaq
              </span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-[#64748B]">
                Healthcare AI
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-[#526579] md:flex">
            <a href="#about" className="transition hover:text-[#1769AA]">
              About
            </a>
            <a href="#projects" className="transition hover:text-[#1769AA]">
              Projects
            </a>
            <a href="#expertise" className="transition hover:text-[#1769AA]">
              Expertise
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-[#1769AA] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#10558A]"
          >
            Let&apos;s connect
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="pointer-events-none absolute -right-40 -top-20 h-[440px] w-[440px] rounded-full bg-[#EAF5FD]/45 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-12 lg:py-32">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#DCEAF5] bg-white/70 px-4 py-2 text-xs font-medium tracking-wide text-[#1769AA]">
              <span className="h-2 w-2 rounded-full bg-[#2B8A78]" />
              SOFTWARE ENGINEERING · HEALTHCARE AI
            </div>

            <h1 className="max-w-3xl text-5xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Building intelligent
              <br />
              solutions for
              <br />
              <span className="font-serif italic text-[#1769AA]">
                better healthcare.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#526579] sm:text-lg">
              I&apos;m Kashan Asdaq, a Software Engineering graduate exploring
              the intersection of artificial intelligence, machine learning,
              and healthcare technology.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-full bg-[#1769AA] px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#10558A]"
              >
                Explore my work <ArrowIcon />
              </a>
              <a
                href="https://github.com/KashanAsdaq500"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#DCEAF5] bg-white px-6 py-3.5 text-sm font-medium transition hover:border-[#1769AA] hover:text-[#1769AA]"
              >
                GitHub profile
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#DCEAF5] pt-6 text-xs tracking-wide text-[#64748B]">
              <span>MEDICAL MACHINE LEARNING</span>
              <span>DEEP LEARNING</span>
              <span>EXPLAINABLE AI</span>
            </div>
          </div>

          {/* Professional profile photo */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] border border-[#DCEAF5]" />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-[#DCEAF5] bg-[#EAF5FD] p-3 shadow-2xl shadow-[#12304A]/10">
              <img
                src="/kashan.jpg"
                alt="Kashan Asdaq"
                className="h-[420px] w-full rounded-[1.2rem] object-cover object-center sm:h-[500px]"
              />
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#DCEAF5] bg-white px-4 py-3 shadow-lg sm:-left-8">
              <p className="text-[10px] tracking-[0.16em] text-[#64748B]">HEALTHCARE AI</p>
              <p className="mt-1 text-sm font-medium text-[#17324D]">AI with purpose.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-[#E2ECF5] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:items-start md:py-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#1769AA]">
              01 / ABOUT
            </p>
            <h2 className="mt-4 max-w-sm text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              Technology with a human purpose.
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-[#526579]">
              My work focuses on applying machine learning and modern software
              development to healthcare challenges. I enjoy building practical
              prototypes, exploring medical data, evaluating predictive models,
              and connecting AI systems with useful applications.
            </p>
            <p className="mt-4 text-base leading-8 text-[#526579]">
              I&apos;m particularly interested in medical image analysis,
              explainable AI, clinical decision-support research, and
              retrieval-augmented systems for healthcare information.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#1769AA]">
              02 / SELECTED WORK
            </p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Medical AI projects<span className="text-[#1769AA]">.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#64748B] sm:text-base">
              Projects spanning predictive modelling, medical image analysis,
              clinical information retrieval, and healthcare automation.
            </p>
          </div>
          <a
            href="https://github.com/KashanAsdaq500"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 self-start text-sm font-medium text-[#1769AA] transition hover:gap-3 sm:self-auto"
          >
            View GitHub <ArrowIcon />
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`group flex min-h-[310px] flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1769AA]/5 sm:p-7 ${
                project.featured
                  ? "border-[#B9D9F2] bg-[#EAF5FD]"
                  : "border-[#DCEAF5] bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium tracking-[0.18em] text-[#64748B]">
                  PROJECT {project.number}
                </span>
                <span className="text-[#1769AA] transition-transform group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </div>

              <p className="mt-8 text-[10px] font-semibold tracking-[0.16em] text-[#1769AA]">
                {project.category}
              </p>

              <h3 className="mt-3 text-2xl font-medium leading-snug tracking-tight">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-[#526579]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#DCEAF5] bg-white/70 px-3 py-1.5 text-[10px] font-medium text-[#526579]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-6 text-[#64748B]">
          Project descriptions reflect intended scope and known technologies.
          Model validation, demo availability, and clinical performance must
          be verified individually before publication.
        </p>
      </section>

      {/* Expertise */}
      <section id="expertise" className="bg-[#12304A] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:py-24 lg:px-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#9CCEF0]">
              03 / EXPERTISE
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              The tools behind
              <br />
              <span className="font-serif italic text-[#B9DFF8]">
                the ideas.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#C7DDED]">
              A growing toolkit for building, evaluating, and deploying
              data-driven applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-[#eee5e8] transition hover:border-[#9CCEF0] hover:bg-white/[0.09]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#EAF5FD] px-6 py-12 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-10 -top-24 h-64 w-64 rounded-full border border-[#C7DDED]" />
          <div className="pointer-events-none absolute -right-1 -top-16 h-48 w-48 rounded-full border border-[#C7DDED]" />
<p className="text-xs font-semibold tracking-[0.2em] text-[]">
  04 / GET IN TOUCH
          </p>
          <h2 className="relative mt-5 max-w-2xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-6xl">
            Let&apos;s build something meaningful.
          </h2>
          <p className="relative mt-5 max-w-xl text-sm leading-7 text-[#70635f] sm:text-base">
            Interested in healthcare AI, machine learning projects, research,
            or meaningful collaborations? I&apos;d be happy to connect.
          </p>

          <div className="relative mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/kashanasdaq/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1769AA] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#10558A]"
            >
              Connect on LinkedIn <ArrowIcon />
            </a>
            <a
              href="https://github.com/KashanAsdaq500"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#C7DDED] bg-white/70 px-6 py-3.5 text-sm font-medium transition hover:border-[#1769AA]"
            >
              Explore GitHub <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E2ECF5] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-[#64748B] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© 2026 Kashan Asdaq</p>
          <p>Healthcare AI · Machine Learning · Research</p>
          <a
            href="#home"
            className="font-medium transition hover:text-[#1769AA]"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}









