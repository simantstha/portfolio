import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="nav">
        <div className="nav-logo">SS</div>
        <nav className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="hero-eyebrow">Software Development Engineer</p>
              <h1 className="hero-title">
                Simant <span>Shrestha</span>
              </h1>
              <p className="hero-subtitle">
                Building reliable, scalable back-end systems with clean APIs and thoughtful engineering.
              </p>
              <div className="hero-meta">
                <span>Eden Prairie, MN</span>
                <span>Mitchell International Inc</span>
              </div>
              <div className="hero-actions">
                <a
                  className="btn primary"
                  href="mailto:simant.shrestha@mitchell.com"
                >
                  Get in touch
                </a>
                <a className="btn ghost" href="/resume.pdf" download>
                  Download Resume
                </a>
                <a
                  className="btn ghost"
                  href="https://linkedin.com/in/simantstha"
                  target="_blank"
                  rel="noreferrer"
                >
                  View LinkedIn
                </a>
              </div>
            </div>
            <div className="hero-photo">
              <img src="/profile.jpg" alt="Simant Shrestha portrait" />
            </div>
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <div className="section-header">
            <h2>Work Experience</h2>
            <p>
              Delivering production-ready services with a focus on performance, reliability, and clear communication.
            </p>
          </div>

          <div className="cards">
            <article className="card">
              <div className="card-header">
                <div>
                  <h3>Software Development Engineer 2</h3>
                  <p className="card-company">Mitchell International Inc · Remote</p>
                </div>
                <p className="card-meta">Jun 2023 – Present</p>
              </div>
              <ul className="card-list">
                <li>
                  Design, develop, and maintain Spring Boot microservices to support evolving business needs and improve system performance.
                </li>
                <li>
                  Identify, troubleshoot, and resolve issues in legacy systems while implementing stability and performance optimizations.
                </li>
                <li>
                  Develop and deploy new features end-to-end, with rigorous testing to ensure high quality and reliable releases.
                </li>
                <li>
                  Partner with developers, product owners, and stakeholders to align engineering work with business goals and user needs.
                </li>
                <li>
                  Participate in Agile ceremonies and drive continuous improvements to team processes and project outcomes.
                </li>
                <li>
                  Execute thorough unit, integration, and system testing using debugging tools to quickly identify and resolve complex issues.
                </li>
              </ul>
            </article>

            <article className="card">
              <div className="card-header">
                <div>
                  <h3>Software Development Intern</h3>
                  <p className="card-company">Mitchell International Inc · Remote</p>
                </div>
                <p className="card-meta">May 2022 – Aug 2022</p>
              </div>
              <ul className="card-list">
                <li>
                  Created and tested APIs using Java and Spring Boot; set up API proxies and documentation in Apigee.
                </li>
                <li>
                  Installed and configured Drupal 9 and Apigee Developer Portal Kickstart to streamline developer onboarding.
                </li>
                <li>
                  Implemented automation solutions using Apigee smartdocs Maven plugin and ApigeeCLI for dynamic API documentation.
                </li>
                <li>
                  Improved code quality with SonarLint, added unit tests, and contributed to code reviews and documentation.
                </li>
                <li>
                  Collaborated with mentors and cross-functional teams to resolve technical challenges and deliver internal tools.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-header">
            <h2>Education</h2>
          </div>
          <div className="cards">
            <article className="card compact">
              <div className="card-header">
                <div>
                  <h3>Virginia Tech</h3>
                  <p className="card-company">
                    Master of Engineering in Computer Science
                  </p>
                </div>
                <p className="card-meta">May 2023 · GPA 3.87 / 4.00</p>
              </div>
              <p className="card-body">
                Focused on software engineering, machine learning, and data analytics.
              </p>
            </article>

            <article className="card compact">
              <div className="card-header">
                <div>
                  <h3>Vellore Institute of Technology</h3>
                  <p className="card-company">
                    Bachelor of Technology in Information Technology
                  </p>
                </div>
                <p className="card-meta">Jul 2020 · GPA 9.06 / 10</p>
              </div>
              <p className="card-body">
                Coursework in data structures, operating systems, programming languages
                (Java &amp; Python), DBMS, and web development. Merit Scholarship recipient in 2017, 2019, and 2020.
              </p>
            </article>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="section-header">
            <h2>Skills</h2>
            <p>
              A toolkit focused on building robust services and data-driven solutions.
            </p>
          </div>
          <div className="skills-grid">
            <div className="skill-column">
              <h3>Programming Languages</h3>
              <p>Java · Python · PHP</p>
            </div>
            <div className="skill-column">
              <h3>Software Development</h3>
              <p>
                Object-Oriented Design · Microservices · REST APIs · Scrum &amp; Agile · Design Patterns · Git
              </p>
            </div>
            <div className="skill-column">
              <h3>Data &amp; Analytics</h3>
              <p>
                Machine Learning · R · MATLAB · SQL · MongoDB · Firebase
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="section-header">
            <h2>Let&apos;s build something.</h2>
            <p>
              I&apos;m open to roles where I can design and ship backend services, APIs, and data-driven features.
            </p>
          </div>
          <div className="contact-actions">
            <a
              className="btn primary wide"
              href="mailto:simant.shrestha@mitchell.com"
            >
              Email Simant
            </a>
            <p className="contact-meta">
              Or reach me at <span>+1 (585) 287-1739</span>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Simant Shrestha.</span>
        <span>Designed with an eye for detail, inspired by Apple.</span>
      </footer>
    </div>
  );
};


export default App;
