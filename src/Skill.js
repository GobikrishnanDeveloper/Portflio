import React from "react";
import "./Skill.css";

function Skill() {
  const skills = [
    { icon: "🐍", name: "Python" },
    { icon: "⚛️", name: "React" },
    { icon: "🎨", name: "CSS" },
    { icon: "💻", name: "JavaScript" },
    { icon: "⚙️", name: "Git & GitHub" },
    { icon: "📱", name: "Responsive Design" }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <p className="skills-intro">
          As a fresher, I am focused on <span>Python Full Stack Development</span>.
        </p>

        <div className="skills-badge-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-badge">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
