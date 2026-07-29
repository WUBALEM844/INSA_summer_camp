import "./Skills.css";
import skills from "../../data/skills";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card" key={group.category}>
            <h3>{group.category}</h3>

            {group.items.map((skill) => {
              const Icon = skill.icon;

              return (
                <div className="skill-item" key={skill.name}>
                  <Icon className="icon" />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;