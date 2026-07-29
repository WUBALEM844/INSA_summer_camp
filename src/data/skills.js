import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiMui,
  SiExpress,
  SiMysql,
  SiPostman,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc"; // Imported from vsc

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React.js", icon: FaReact },
      { name: "Material UI", icon: SiMui },
    ],
  },

  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
    ],
  },

  {
    category: "Database",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "Oracle Database", icon: FaDatabase },
    ],
  },

  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: VscCode },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

export default skills;