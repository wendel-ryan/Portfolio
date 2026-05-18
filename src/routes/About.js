import React from "react";
import "./styles/About.css";
import Skill from "../Components/Skill"

const About = () => {

  const par1 = `I’m a developer from Mason City, Iowa with a genuine passion for problem‑solving and building things that make life easier for others. I discovered coding in college and quickly switched my major after realizing how much I enjoyed the mix of logic, creativity, and the satisfaction of finding solutions that actually work. That same mindset is why math has always come naturally to me — I like challenges that reward persistence and clear thinking.`
  const par2 = `Outside of tech, I’m someone who thrives on connection and competition. I love hiking, golf, football, fitness, and spending time with the people who matter most to me. I’m social, respectful, and the kind of person who shows up for friends, family, and teammates.`
  const par3 = `Right now, my goal is simple: get my foot in the door at a company where I can contribute, grow, and prove myself. I’m hungry for experience, eager to learn, and ready to bring both my technical skills and my people‑first attitude to a team that values hard work and curiosity.
`;

  const skills = [
    "Python",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SQL",
    "Flask",
    "React.js",
    "SQLite",
    "Git",
    "REST APIs",
    "Web Scraping",
    "JSON",
    "Responsive Design",
    "Browser DevTools",
    "Front-End",
    "Back-End",
    "Full-Stack Integration",
    "UI/UX",
    "Component-Based Architecture",
    "State Management (React)",
    "Routing",
    "Form Handling",
    "API Consumption",
    "Data Processing",
    "Debugging",
    "Problem Solving",
    "Version Control",
    "Deployment Basics"
  ]

  return (
    <section className="about-page">
      <div className="about-info">
        <div className="bio">{par1}<br/><br/>{par2}<br/><br/>{par3}</div>
        <div className="skills">
          {skills.map((x) =>
            <Skill skill={x}/>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
