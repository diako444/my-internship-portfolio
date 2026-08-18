import './Skills.css';

function Skills() {
  const skillGroups = [
    {
      title: 'Frontend',
      description: 'Technologies I use to build clean, responsive, and interactive user interfaces.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Backend & Database',
      description: 'Tools I use for server-side logic and data handling, while growing toward full-stack development.',
      skills: ['PHP', 'MySQL', 'Laravel (Learning)'],
    },
    {
      title: 'Tools',
      description: 'Development tools and workflow essentials I use while building and managing projects.',
      skills: ['Git', 'GitHub', 'VS Code', 'Vite', 'XAMPP'],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <span className="section-label">SKILLS</span>
          <h2 className="section-title">
            My technical
            <span> stack and tools.</span>
          </h2>
          <p className="skills-intro">
            I focus on frontend development with React and JavaScript, while also
            building my backend foundation with PHP, MySQL, and Laravel.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`skill-tag ${
                      skill.includes('Learning') ? 'learning-tag' : ''
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
