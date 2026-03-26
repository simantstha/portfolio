import { useState, useEffect } from 'react';
import './App.css';

/* ── Theme helpers ────────────────────────────────────────── */
function getInitialTheme() {
  const attrTheme = document.documentElement.getAttribute('data-theme');
  if (attrTheme === 'dark' || attrTheme === 'light') return attrTheme;
  try {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
  } catch (e) { /* private browsing */ }
  return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ? 'dark'
    : 'light';
}

/* ── Chip component ───────────────────────────────────────── */
function Chip({ label, color = 'blue' }) {
  return <span className={`chip chip-${color}`}>{label}</span>;
}

/* ── App ──────────────────────────────────────────────────── */
export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) { /* private browsing */ }
  }, [theme]);

  function toggleTheme() {
    setTheme(t => {
      const next = t === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* private browsing */ }
      return next;
    });
  }

  /* Scroll reveal */
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app" id="top">

      {/* ── NAV ──────────────────────────────────────────── */}
      <header className="nav">
        <a className="nav-logo" href="#top">SS</a>
        <div className="nav-right">
          <nav className="nav-links">
            <a href="#experience">experience</a>
            <a href="#projects">projects</a>
            <a href="#education">education</a>
            <a href="#skills">skills</a>
            <a href="#contact">contact</a>
          </nav>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="toggle theme"
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>
      </header>

      <main>

        {/* ── HERO ─────────────────────────────────────── */}
        <section className="hero">
          <div className="terminal">
            <div className="terminal-bar">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
              <span className="terminal-title">simant@portfolio ~ </span>
            </div>
            <div className="terminal-body">
              <p className="terminal-prompt">
                <span className="prompt-char">$</span> ./introduce.sh
              </p>
              <h1 className="hero-name">
                Simant Shrestha<span className="cursor">_</span>
              </h1>
              <p className="hero-role">Software Development Engineer</p>
              <p className="hero-location">Mitchell International · Eden Prairie, MN</p>

              <div className="hero-chips">
                <Chip label="java" color="blue" />
                <Chip label="python" color="blue" />
                <Chip label="php" color="blue" />
                <Chip label="spring-boot" color="green" />
                <Chip label="microservices" color="green" />
                <Chip label="rest-apis" color="green" />
                <Chip label="git" color="green" />
                <Chip label="sql" color="yellow" />
                <Chip label="mongodb" color="yellow" />
                <Chip label="machine-learning" color="yellow" />
              </div>

              <p className="hero-status">
                <span className="status-dot">✓</span>
                Open to new roles
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="mailto:simant.shrestha@gmail.com">
                  get_in_touch()
                </a>
                <a className="btn" href={`${process.env.PUBLIC_URL}/resume.pdf`} download>
                  resume.pdf ↓
                </a>
                <a className="btn" href="https://linkedin.com/in/simantstha" target="_blank" rel="noreferrer">
                  ↗ linkedin
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ───────────────────────────────── */}
        <section id="experience" className="section">
          <p className="section-label reveal">// work_experience</p>
          <div className="cards">

            <article className="card reveal">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Software Development Engineer 2</h2>
                  <p className="card-subtitle">Mitchell International · Remote</p>
                </div>
                <p className="card-date">Jun 2023 – Present</p>
              </div>
              <ul className="card-list">
                <li>Design, develop, and maintain Spring Boot microservices to support evolving business needs and improve system performance.</li>
                <li>Identify, troubleshoot, and resolve issues in legacy systems while implementing stability and performance optimizations.</li>
                <li>Develop and deploy new features end-to-end with rigorous testing to ensure high-quality, reliable releases.</li>
                <li>Partner with developers, product owners, and stakeholders to align engineering work with business goals and user needs.</li>
                <li>Execute thorough unit, integration, and system testing using debugging tools to quickly identify and resolve complex issues.</li>
              </ul>
              <div className="card-chips">
                <Chip label="java" color="blue" />
                <Chip label="spring-boot" color="green" />
                <Chip label="microservices" color="green" />
                <Chip label="junit" color="green" />
                <Chip label="sql" color="yellow" />
                <Chip label="agile" color="green" />
              </div>
            </article>

            <article className="card reveal">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Software Development Intern</h2>
                  <p className="card-subtitle">Mitchell International · Remote</p>
                </div>
                <p className="card-date">May 2022 – Aug 2022</p>
              </div>
              <ul className="card-list">
                <li>Created and tested APIs using Java and Spring Boot; set up API proxies and documentation in Apigee.</li>
                <li>Installed and configured Drupal 9 and Apigee Developer Portal Kickstart to streamline developer onboarding.</li>
                <li>Implemented automation solutions using Apigee smartdocs Maven plugin and ApigeeCLI for dynamic API documentation.</li>
                <li>Improved code quality with SonarLint, added unit tests, and contributed to code reviews and documentation.</li>
              </ul>
              <div className="card-chips">
                <Chip label="java" color="blue" />
                <Chip label="spring-boot" color="green" />
                <Chip label="apigee" color="green" />
                <Chip label="drupal" color="green" />
                <Chip label="sonarqube" color="yellow" />
              </div>
            </article>

          </div>
        </section>

        {/* ── PROJECTS ─────────────────────────────────── */}
        <section id="projects" className="section">
          <p className="section-label reveal">// projects</p>
          <div className="cards">

            <article className="project-card reveal">
              <div className="project-card-header">
                <h2 className="project-name">UniApply</h2>
                <span className="project-meta">Vercel + Fly.io</span>
              </div>
              <p className="project-description">
                AI-powered university application tracker with Claude-powered essay assistance,
                application status tracking, deadline reminders via email, and JWT-secured accounts.
                Full-stack: React frontend, Express + Prisma backend, PostgreSQL database.
              </p>
              <div className="card-chips">
                <Chip label="react" color="blue" />
                <Chip label="vite" color="green" />
                <Chip label="tailwind" color="green" />
                <Chip label="express" color="green" />
                <Chip label="prisma" color="green" />
                <Chip label="postgresql" color="yellow" />
                <Chip label="claude-ai" color="blue" />
                <Chip label="resend" color="green" />
                <Chip label="jwt" color="yellow" />
              </div>
              <div className="card-chips" style={{ marginTop: '0.8rem' }}>
                <a
                  className="btn"
                  href="https://github.com/simantstha/uniapply"
                  target="_blank"
                  rel="noreferrer"
                >
                  ↗ github
                </a>
              </div>
            </article>

          </div>
        </section>

        {/* ── EDUCATION ────────────────────────────────── */}
        <section id="education" className="section">
          <p className="section-label reveal">// education</p>
          <div className="cards">

            <article className="card reveal">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Virginia Tech</h2>
                  <p className="card-subtitle">Master of Engineering in Computer Science</p>
                </div>
                <p className="card-date">May 2023 · GPA 3.87</p>
              </div>
              <p className="card-body-text">
                Focused on software engineering, machine learning, and data analytics.
              </p>
            </article>

            <article className="card reveal">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Vellore Institute of Technology</h2>
                  <p className="card-subtitle">Bachelor of Technology in Information Technology</p>
                </div>
                <p className="card-date">Jul 2020 · GPA 9.06/10</p>
              </div>
              <p className="card-body-text">
                Data structures, operating systems, DBMS, and web development.
                Merit Scholarship recipient — 2017, 2019, 2020.
              </p>
            </article>

          </div>
        </section>

        {/* ── SKILLS ───────────────────────────────────── */}
        <section id="skills" className="section">
          <p className="section-label reveal">// skills</p>
          <div className="skills-grid reveal">

            <div className="skill-group">
              <h3>Languages</h3>
              <div className="skill-group-chips">
                <Chip label="java" color="blue" />
                <Chip label="python" color="blue" />
                <Chip label="php" color="blue" />
              </div>
            </div>

            <div className="skill-group">
              <h3>Engineering</h3>
              <div className="skill-group-chips">
                <Chip label="spring-boot" color="green" />
                <Chip label="microservices" color="green" />
                <Chip label="rest-apis" color="green" />
                <Chip label="oop" color="green" />
                <Chip label="design-patterns" color="green" />
                <Chip label="agile" color="green" />
                <Chip label="git" color="green" />
              </div>
            </div>

            <div className="skill-group">
              <h3>Data &amp; ML</h3>
              <div className="skill-group-chips">
                <Chip label="machine-learning" color="yellow" />
                <Chip label="sql" color="yellow" />
                <Chip label="mongodb" color="yellow" />
                <Chip label="firebase" color="yellow" />
                <Chip label="r" color="yellow" />
                <Chip label="matlab" color="yellow" />
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* ── CONTACT ────────────────────────────────────── */}
      <section id="contact" className="contact-section">
        <h2 className="contact-headline reveal">Let's build something.</h2>
        <p className="contact-subtext reveal">
          Open to backend roles where I can design and ship APIs, microservices, and data-driven features.
        </p>
        <div className="contact-actions reveal">
          <a className="btn btn-primary" href="mailto:simant.shrestha@gmail.com">✉ email</a>
          <a className="btn" href="https://linkedin.com/in/simantstha" target="_blank" rel="noreferrer">↗ linkedin</a>
          <a className="btn" href="https://github.com/simantstha" target="_blank" rel="noreferrer">↗ github</a>
        </div>
        <p className="contact-phone reveal">
          <span style={{ color: 'var(--color-accent-green)' }}>var</span> phone = &quot;+1 (585) 287-1739&quot;;
        </p>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer className="footer">
        <span>© {new Date().getFullYear()} simantstha</span>
        <span>Built with React</span>
      </footer>

    </div>
  );
}
