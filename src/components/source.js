import logoEdu from "../assets/bu.png";
import logoUd from "../assets/udemy.png";

import logoCss3 from "../assets/icons/tools/css3.svg";
import logoHtml5 from "../assets/icons/tools/html5.svg";
import logoJs from "../assets/icons/tools/js.svg";
import logoReact from "../assets/icons/tools/react.svg";
import logoMern from "../assets/icons/tools/mern3.png";
import logobootstrap from "../assets/icons/tools/bootstrap.svg";
import logojq from "../assets/icons/tools/jquery.svg";
import logosql from "../assets/icons/tools/mysql.svg";
import logosass from "../assets/icons/tools/sass.svg";

export const trainingList = {
  education: [
    {
      inst: "Bogazici University",
      subj: "Management Information Systems",
      logo: logoEdu,
    },
  ],
  certificates: [
    {
      inst: "Udemy",
      subj: "MySQL Database Administration - SQL Database for Beginners",
      link:
        "https://www.udemy.com/certificate/UC-c1a89330-6954-49a8-afbc-9fced68d5455/",
      logo: logoUd,
    },
    {
      inst: "Udemy",
      subj: "React, NodeJS, Express & MongoDB - The MERN Fullstack Guide",
      link:
        "https://www.udemy.com/certificate/UC-a10346d3-0a2e-423a-85b5-6830447a1216/",
      logo: logoUd,
    },
    {
      inst: "Udemy",
      subj: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      link:
        "https://www.udemy.com/certificate/UC-bc57daf4-6704-485a-a1ee-92b8d6bb9452/",
      logo: logoUd,
    },
    {
      inst: "Udemy",
      subj: "JavaScript - The Complete Guide 2020 (Beginner + Advanced)",
      link:
        "https://www.udemy.com/certificate/UC-c51d6e98-59ae-4581-985e-f220600c0fc0/",
      logo: logoUd,
    },
    {
      inst: "Udemy",
      subj: "CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass)",
      link:
        "https://www.udemy.com/certificate/UC-3f7db1f6-05c7-4e5e-aef6-206332e94f1b/",
      logo: logoUd,
    },
    {
      inst: "Udemy",
      subj: "The Complete Front-End Web Development",
      link:
        "https://www.udemy.com/certificate/UC-71e5967f-d6cd-4231-9014-626e2c056baf/",
      logo: logoUd,
    },
  ],
};

export const skillsList = {
  project: [
    { logo: logoCss3, description: "CSS3" },
    { logo: logoHtml5, description: "HTML5" },
    { logo: logoJs, description: "JavaScript" },
    { logo: logoReact, description: "React" },
    { logo: logoMern, description: "MERN" },
  ],
  basic: [
    { logo: logosass, description: "SASS/SCSS" },
    { logo: logosql, description: "MySQL" },
  ],
};

export const projectList = [
  {
    name: "Portfolio",
    description: "",
    codeURL: "",
    link: "",
    logo: "",
    tools: [logoReact, logoCss3, logoHtml5, logobootstrap ]
  },
  {
    name: "E-Business Card",
    description: "A website for creating and collecting business cards.",
    codeURL: "",
    link: "https://ebcards.web.app/home",
    logo: "",
    tools: [logoMern, logoCss3, logoHtml5, logobootstrap ]
  },
  {
    name: "Coffee Here",
    description: "starbucks order page sample with React",
    codeURL: "https://github.com/ebru-c-7/Project-Coffee-React",
    link: "https://coffee-here-now-react.web.app",
    logo: "",
    tools: [logoReact, logoCss3, logoHtml5 ]
  },
  {
    name: "Daily Missions",
    description: "A daily task organizer with a web component 'message box'",
    codeURL: "https://github.com/ebru-c-7/Project_Missions",
    link: "https://daily-missions.web.app",
    logo: "",
    tools: [logoJs, logoCss3, logoHtml5]
  },
  {
    name: "Shopping List",
    description: "A jQuery project: shopping list",
    codeURL: "https://github.com/ebru-c-7/Project_Shopping_List",
    link: "https://project-shopping-list-07.web.app/",
    logo: "",
    tools: [logojq, logoCss3, logoHtml5]
  },
  {
    name: "IMDB",
    description: "A chrome extension for adding 'search on imdb' option to the context menu",
    codeURL: "https://github.com/ebru-c-7/Project_imdb",
    link: "",
    logo: "",
    tools: [logoJs]
  },
  {
    name: "Coffee Here",
    description: "A sample starbucks order page (vanilla JavaScript)",
    codeURL: "https://github.com/ebru-c-7/Project_Coffee",
    link: "https://coffee-here-now.web.app",
    logo: "",
    tools: [logoJs, logoCss3, logoHtml5]
  },

];
