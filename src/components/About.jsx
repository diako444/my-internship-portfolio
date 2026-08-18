import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-intro">
          <span className="section-label">ABOUT ME</span>

          <h2 className="section-title">
            Building modern websites with
            <span> purpose and detail.</span>
          </h2>

          <p className="about-description">
            I am a passionate frontend developer focused on creating clean,
            responsive, and user-friendly web interfaces. I enjoy turning ideas
            into modern digital experiences using React, JavaScript, HTML, and CSS.
          </p>

          <p className="about-description">
            Alongside frontend development, I work with PHP and MySQL and I am
            currently learning Laravel. My goal is to grow into a React and
            Laravel full-stack developer by building practical, real-world web
            applications.
          </p>

          <a href="#projects" className="about-button">
            Explore My Projects
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="about-highlights">
          <div className="about-card">
            <div className="about-card-icon">⚛</div>
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML & CSS</p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">&lt;/&gt;</div>
            <h3>Backend Foundation</h3>
            <p>PHP, MySQL & Laravel learning</p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">⌘</div>
            <h3>Development Tools</h3>
            <p>Git, GitHub, Vite & VS Code</p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">↗</div>
            <h3>My Goal</h3>
            <p>React & Laravel Full-Stack Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
