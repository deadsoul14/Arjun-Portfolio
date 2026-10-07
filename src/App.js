import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#home" className="logo">
            <span>&lt;</span>Arjun K Lapoji<span>&gt;</span>
          </a>

          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-button">
            Connect Here
          </a>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section id="home" className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <p className="eyebrow">HELLO, I'M</p>

              <h1>
                Arjun <span>K Lapoji</span>
              </h1>

              <h2>
                Frontend Developer, <br />
                <span>Creative Problem Solver &amp;
                  Fast Learner.
                </span>
              </h2>

              <p className="hero-description">
                I build modern, responsive and user-friendly web experiences
                using clean code and thoughtful design.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="primary-button">
                  View My Work <span>↗</span>
                </a>

                <a href="#contact" className="secondary-button">
                  Contact Me
                </a>
              </div>

              <div className="social-links">
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a href="mailto:hello@example.com">Email</a>
              </div>
            </div>

            <div className="hero-card">
              <div className="code-window">
                <div className="window-header">
                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span>developer.js</span>
                </div>

                <div className="code">
                  <p>
                    <span className="purple">const</span>{" "}
                    <span className="blue">developer</span> = {"{"}
                  </p>

                  <p className="indent">
                    <span className="red">name</span>:{" "}
                    <span className="orange">'Arjun'</span>,
                  </p>

                  <p className="indent">
                    <span className="red">role</span>:{" "}
                    <span className="orange">'Frontend Developer'</span>,
                  </p>

                  <p className="indent">
                    <span className="red">passion</span>:{" "}
                    <span className="orange">'Building UIs'</span>,
                  </p>

                  <p className="indent">
                    <span className="red">coffee</span>:{" "}
                    <span className="orange">true</span>
                  </p>

                  <p>{"};"}</p>

                  <p className="code-comment">
                  {"// Turning ideas into experiences."}
                </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section about">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">01 — ABOUT ME</p>
              <h2>Building with purpose.</h2>
            </div>

            <div className="about-grid">
              <div>
                <p className="large-text">
                  I'm a passionate frontend developer who enjoys transforming
                  ideas into clean, functional and engaging digital products.
                </p>
              </div>

              <div className="about-text">
                <p>
                  I focus on writing maintainable code and creating interfaces
                  that feel intuitive across desktop, tablet and mobile
                  devices.
                </p>

                <p>
                  My approach combines development, design thinking and
                  attention to detail to create experiences that users enjoy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section skills">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">02 — SKILLS</p>
              <h2>My toolkit.</h2>
            </div>

            <div className="skills-grid">
              <div className="skill-card">
                <span className="skill-number">01</span>
                <h3>HTML</h3>
                <p>
                  Semantic, accessible and well-structured web interfaces.
                </p>
              </div>

              <div className="skill-card">
                <span className="skill-number">02</span>
                <h3>CSS</h3>
                <p>
                  Responsive layouts, animations and modern visual systems.
                </p>
              </div>

              <div className="skill-card">
                <span className="skill-number">03</span>
                <h3>JavaScript</h3>
                <p>
                  Interactive experiences with clean and scalable logic.
                </p>
              </div>

              <div className="skill-card">
                <span className="skill-number">04</span>
                <h3>React</h3>
                <p>
                  Component-based interfaces built for maintainability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section projects">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">03 — PROJECTS</p>
              <h2>Things I've built.</h2>
            </div>

            <div className="projects-grid">
              <article className="project-card featured">
                <div className="project-number">01</div>

                <div>
                  <p className="project-type">WEB APPLICATION</p>

                  <h3>Number Guessing Game</h3>

                  <p>
                    An interactive number guessing game featuring multiple
                    difficulty levels and multiplayer gameplay.
                  </p>

                  <div className="tags">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                  </div>

                  <a href="#contact" className="project-link">
                    View Project ↗
                  </a>
                </div>
              </article>

              <article className="project-card">
                <div className="project-number">02</div>

                <div>
                  <p className="project-type">PORTFOLIO</p>

                  <h3>Personal Portfolio</h3>

                  <p>
                    A responsive portfolio designed to showcase development
                    skills, projects and experience.
                  </p>

                  <div className="tags">
                    <span>React</span>
                    <span>CSS</span>
                    <span>Responsive</span>
                  </div>

                  <a href="#contact" className="project-link">
                    View Project ↗
                  </a>
                </div>
              </article>

              <article className="project-card">
                <div className="project-number">03</div>

                <div>
                  <p className="project-type">UI DESIGN</p>

                  <h3>Modern Dashboard</h3>

                  <p>
                    A clean dashboard interface focused on usability,
                    information hierarchy and responsive design.
                  </p>

                  <div className="tags">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>UI/UX</span>
                  </div>

                  <a href="#contact" className="project-link">
                    View Project ↗
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact">
          <div className="container contact-container">
            <div className="section-heading">
              <p className="eyebrow">04 — CONTACT</p>

              <h2>
                Have an idea?
                <br />
                <span>Let's build it.</span>
              </h2>
            </div>

            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas or
              opportunities to build something meaningful.
            </p>

            <a href="mailto:hello@example.com" className="contact-button">
              hello@example.com <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container footer-content">
          <p>© 2026 Arjun. All rights reserved.</p>

          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
