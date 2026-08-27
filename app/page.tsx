const coreSkills = [
  'React.js',
  'JavaScript ES6+',
  'Redux Toolkit',
  'HTML5',
  'CSS3 / SCSS',
  'REST APIs',
  'Git & GitHub',
  'Responsive Development',
];

const workflowSkills = [
  'Figma to Code',
  'Feature-Sliced Design',
  'Accessibility Basics',
  'Testing Fundamentals',
  'CI/CD Fundamentals',
  'Component Architecture',
  'Performance Awareness',
  'Team Collaboration',
];

const growthSkills = ['Node.js', 'Express.js', 'MongoDB'];

const experience = [
  {
    title: 'Frontend Developer Projects',
    period: 'Hands-on portfolio work',
    summary:
      'Built responsive React applications with reusable components, API integrations, and clear UI structure tailored for real users and recruiter review.',
    points: [
      'Translated layouts into production-ready interfaces with attention to spacing, states, and accessibility.',
      'Used JavaScript, React, and Redux Toolkit patterns to keep features maintainable and predictable.',
      'Practiced clean Git workflows and deployment-ready project structure.',
    ],
  },
  {
    title: 'Collaborative Product Experience',
    period: 'Team and internship-style delivery',
    summary:
      'Worked in collaborative environments where design interpretation, consistency, and steady delivery mattered as much as writing the code itself.',
    points: [
      'Contributed to an Interior Design team internship project with a focus on polished presentation and responsive execution.',
      'Worked from design references and refined interfaces to feel clean, trustworthy, and easy to navigate.',
      'Strengthened communication habits around iteration, feedback, and shared ownership.',
    ],
  },
  {
    title: 'Growing Toward Full-Stack',
    period: 'Current learning direction',
    summary:
      'Expanding beyond the frontend with backend fundamentals that support stronger product thinking and easier collaboration across a team.',
    points: [
      'Learning Node.js, Express.js, and MongoDB for end-to-end feature understanding.',
      'Exploring API structure, data flow, and practical integration patterns.',
      'Building on a frontend-first foundation without losing focus on UI quality.',
    ],
  },
];

const projects = [
  {
    title: 'Aura Design',
    stack: ['React', 'JavaScript', 'SCSS', 'Responsive UI'],
    description:
      'A design-forward interface project focused on visual clarity, component consistency, and recruiter-friendly polish.',
    highlights: [
      'Clean card-based layout and modern visual rhythm.',
      'Strong attention to spacing, hierarchy, and interactive states.',
      'Shows frontend craft beyond basic functionality.',
    ],
    link: null,
  },
  {
    title: 'Recipe Search App',
    stack: ['React', 'REST API', 'JavaScript', 'Responsive UI'],
    description:
      'A recipe discovery experience that helps users search recipes and review detailed nutritional and calorie information.',
    highlights: [
      'Fetches and presents recipe data from an external API.',
      'Includes detailed nutrition and calorie details for individual recipes.',
      'Does not use advanced diet or calorie filtering, keeping the scope honest and clear.',
    ],
    link: null,
  },
  {
    title: 'Interior Design Team Internship Project',
    stack: ['HTML5', 'SCSS', 'Responsive Layout', 'Team Delivery'],
    description:
      'A collaborative project where visual presentation, layout precision, and teamwork were central to the final result.',
    highlights: [
      'Built with presentation quality and design fidelity in mind.',
      'Balanced collaboration needs with structured implementation.',
      'Demonstrates comfort working from shared concepts and design direction.',
    ],
    link: null,
  },
  {
    title: 'Weather App',
    stack: ['React', 'API Integration', 'JavaScript', 'CSS3'],
    description:
      'A practical weather interface that turns external data into a clear, easy-to-scan user experience.',
    highlights: [
      'Connects to a weather API and displays useful daily information.',
      'Prioritizes fast comprehension and mobile-friendly layout.',
      'Shows confidence with asynchronous data and UI states.',
    ],
    link: null,
  },
  {
    title: 'Grocery List App',
    stack: ['React', 'State Management', 'Local Persistence', 'UX Basics'],
    description:
      'A lightweight utility app designed around everyday usability, predictable interactions, and clean component structure.',
    highlights: [
      'Supports list creation and task-style item management.',
      'Reflects a practical approach to state updates and small product flows.',
      'Useful example of building simple interfaces that still feel thoughtful.',
    ],
    link: null,
  },
  {
    title: 'Best Cars 2025',
    stack: ['React', 'JavaScript', 'Responsive Cards', 'Content UI'],
    description:
      'A content-rich browsing experience built to organize information clearly and keep the interface approachable across screen sizes.',
    highlights: [
      'Uses reusable card patterns and visual grouping for readability.',
      'Focuses on clear comparison-style presentation.',
      'Demonstrates layout discipline and component reuse.',
    ],
    link: null,
  },
];

const contactPoints = [
  'Open to Frontend Developer and React Developer opportunities.',
  'Comfortable with responsive implementation, design handoff, and UI-focused collaboration.',
  'Portfolio content is structured to stay easy to update as new projects and links are added.',
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-5 sm:px-8 lg:px-10">
        <header className="surface-card sticky top-4 z-30 mb-8 flex items-center justify-between gap-4 rounded-full px-5 py-3 backdrop-blur">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-accent-strong)]">
              Nataliia Litskevych
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              Frontend Developer / React Developer
            </p>
          </div>

          <nav
            aria-label="Section navigation"
            className="hidden gap-5 text-sm text-[var(--color-muted)] md:flex"
          >
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#skills">
              Skills
            </a>
            <a className="nav-link" href="#experience">
              Experience
            </a>
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <section className="hero-shell reveal">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_340px]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/80 px-4 py-2 text-sm text-[var(--color-muted)] shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                Open to frontend-focused product teams
              </div>

              <div className="max-w-4xl space-y-5">
                <h1 className="text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-7xl">
                  Frontend interfaces that feel polished, responsive, and ready
                  for real product work.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
                  Nataliia Litskevych builds modern React experiences with clean
                  structure, strong visual discipline, and a thoughtful approach
                  to usability, responsiveness, and design handoff.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a className="primary-button" href="#projects">
                  View featured projects
                </a>
                <a className="secondary-button" href="#contact">
                  Contact Nataliia
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <article className="metric-card">
                  <p className="text-3xl font-semibold tracking-[-0.04em]">6</p>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">
                    Portfolio projects spanning APIs, UI polish, and responsive
                    execution
                  </p>
                </article>
                <article className="metric-card">
                  <p className="text-3xl font-semibold tracking-[-0.04em]">
                    React
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">
                    Practical focus on component structure, state, and clean
                    delivery
                  </p>
                </article>
                <article className="metric-card">
                  <p className="text-3xl font-semibold tracking-[-0.04em]">
                    UI-first
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">
                    Strong fit for teams that value implementation quality and
                    visual consistency
                  </p>
                </article>
              </div>
            </div>

            <aside className="surface-card relative overflow-hidden rounded-[2rem] p-6 lg:p-7">
              <div className="absolute inset-x-8 top-0 h-32 rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.22),_transparent_72%)] blur-3xl" />
              <div className="relative space-y-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                    Positioning
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                    Frontend Developer focused on React, usability, and clean
                    execution
                  </h2>
                </div>

                <div className="grid gap-3">
                  {[
                    'Responsive layouts for desktop and mobile',
                    'Figma-to-code handoff with careful visual detail',
                    'Scalable frontend thinking with Feature-Sliced Design',
                    'Growing backend knowledge for stronger cross-team work',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[var(--color-line)] bg-white/75 px-4 py-4 text-sm text-[var(--color-muted)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="about" className="section-block reveal">
          <div className="section-head">
            <SectionEyebrow>About</SectionEyebrow>
            <h2 className="section-title">A recruiter-friendly snapshot</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
            <article className="surface-card rounded-[2rem] p-7">
              <p className="text-lg leading-8 text-[var(--color-muted)]">
                Nataliia is a frontend developer building user interfaces with
                React, modern JavaScript, and a strong foundation in semantic
                HTML, CSS, and responsive implementation. Her work leans toward
                clean structure, maintainable components, and interfaces that
                feel calm, readable, and production-aware.
              </p>
              <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
                She is especially well suited to teams that need thoughtful UI
                execution, design-to-code reliability, and steady growth toward
                broader product ownership.
              </p>
            </article>
            <article className="surface-card rounded-[2rem] p-7">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                What stands out
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-muted)]">
                <li>Builds responsive interfaces with clear visual hierarchy.</li>
                <li>Comfortable turning design ideas into reliable frontend code.</li>
                <li>Balances polish, readability, and maintainability.</li>
                <li>Growing full-stack understanding without losing frontend focus.</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="skills" className="section-block reveal">
          <div className="section-head">
            <SectionEyebrow>Skills</SectionEyebrow>
            <h2 className="section-title">
              Frontend strengths with room to grow
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="surface-card rounded-[2rem] p-7">
              <h3 className="text-xl font-semibold">Core stack</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {coreSkills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
            <article className="surface-card rounded-[2rem] p-7">
              <h3 className="text-xl font-semibold">
                Workflow and product craft
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {workflowSkills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
            <article className="surface-card rounded-[2rem] p-7">
              <h3 className="text-xl font-semibold">Currently expanding</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {growthSkills.map((skill) => (
                  <span key={skill} className="skill-pill skill-pill-soft">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                Building backend familiarity to support end-to-end teamwork and
                stronger technical conversations.
              </p>
            </article>
          </div>
        </section>

        <section id="experience" className="section-block reveal">
          <div className="section-head">
            <SectionEyebrow>Experience</SectionEyebrow>
            <h2 className="section-title">
              Relevant experience for junior frontend roles
            </h2>
          </div>
          <div className="grid gap-5">
            {experience.map((item) => (
              <article
                key={item.title}
                className="surface-card rounded-[2rem] p-7"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                      {item.period}
                    </p>
                    <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                      {item.summary}
                    </p>
                  </div>
                  <ul className="grid max-w-xl gap-3 text-sm leading-7 text-[var(--color-muted)]">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-2xl border border-[var(--color-line)] bg-white/75 px-4 py-3"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-block reveal">
          <div className="section-head">
            <SectionEyebrow>Featured Projects</SectionEyebrow>
            <h2 className="section-title">
              Selected work that supports a frontend application
            </h2>
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="project-card surface-card rounded-[2rem] p-7"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                    Project {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                    {project.title}
                  </h3>
                </div>

                <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <span key={item} className="skill-pill">
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-[var(--color-line)] bg-white/75 px-4 py-3"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {project.link ? (
                  <div className="mt-6">
                    <a className="secondary-button" href={project.link}>
                      Open live project
                    </a>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-block reveal">
          <div className="surface-card overflow-hidden rounded-[2rem] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
              <div>
                <SectionEyebrow>Contact</SectionEyebrow>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  Ready for a Frontend Developer or React Developer conversation
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                  This portfolio is intentionally structured for job
                  applications: clear strengths, honest project framing, and an
                  easy path to add live links, contact details, or a resume
                  download when needed.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a className="primary-button" href="#projects">
                    Review projects
                  </a>
                  <a className="secondary-button" href="#about">
                    Read summary
                  </a>
                </div>
              </div>

              <aside className="rounded-[1.75rem] border border-[var(--color-line)] bg-white/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                  Recruiter notes
                </p>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-muted)]">
                  {contactPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
