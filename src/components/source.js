import logoEdu from "../assets/bu.png";
import logoUd from "../assets/udemy.png";

import logoCss3 from "../assets/icons/tools/css3.svg";
import logoHtml5 from "../assets/icons/tools/html5.svg";
import logoJs from "../assets/icons/tools/js.svg";
import logoReact from "../assets/icons/tools/react.svg";
import logoMern from "../assets/icons/tools/mern4.png";
import logobootstrap from "../assets/icons/tools/bootstrap.svg";
import logojq from "../assets/icons/tools/jquery.svg";
import logosql from "../assets/icons/tools/mysql.svg";
import logosass from "../assets/icons/tools/sass.svg";
import logogithub from "../assets/icons/tools/github.svg";
import logogit from "../assets/icons/tools/git.svg";

import imdb from "../assets/projects/imdb.png";
import shoppingList from "../assets/projects/shopping-list.JPG";
import missions from "../assets/projects/missions.png";
import coffee from "../assets/projects/coffee.png";
import ebc from "../assets/projects/ebc.png";

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
    { logo: logogithub, description: "github" },
    { logo: logogit, description: "git" },
  ],
};

export const projectList = [
  {
    name: "Portfolio",
    description: 
    `This portfolio page. 
    No sign up or log in is required.
    Created with React and Bootstrap.`,
    codeURL: "https://github.com/ebru-c-7/my-portfolio",
    link: "",
    logo: "",
    tools: [
      { name: "React", logo: logoReact },
      { name: "CSS3", logo: logoCss3 },
      { name: "HTML5", logo: logoHtml5 },
      { name: "Bootstrap", logo: logobootstrap },
    ],
  },
  {
    name: "E-Business Card (including Backend)",
    description:
      `A website for creating and collecting online business cards.
      Sign up or log in with email: test3@test.com, password: 1234567.
      For backend and frontend, MongoDB, Express, React, Node, and Bootstrap are used.`,
    codeURL: "https://github.com/ebru-c-7/Project_E_Business_Card/",
    link: "https://ebcards.web.app/home",
    logo: ebc,
    tools: [
      { name: "MERN", logo: logoMern },
      { name: "CSS3", logo: logoCss3 },
      { name: "HTML5", logo: logoHtml5 },
      { name: "Bootstrap", logo: logobootstrap },
    ],
  },
  {
    name: "Coffee Here",
    description: 
      `A sample starbucks order page designed for self-order kiosks.
      After completing order, sign up or log in with email: test3@test.com, password: 1234567
      Recreated with React.`,
    codeURL: "https://github.com/ebru-c-7/Project-Coffee-React",
    link: "https://coffee-here-now-react.web.app",
    logo: coffee,
    tools: [
      { name: "React", logo: logoReact },
      { name: "CSS3", logo: logoCss3 },
      { name: "HTML5", logo: logoHtml5 },
    ],
  },
  {
    name: "Daily Missions",
    description:
      `A daily task organizer page together with a message box web component.
     No sign up or log in is required.
      Created with vanilla JS, CSS3, and HTML5.`,
    codeURL: "https://github.com/ebru-c-7/Project_Missions",
    link: "https://daily-missions.web.app",
    logo: missions,
    tools: [
      { name: "JavaScript", logo: logoJs },
      { name: "CSS3", logo: logoCss3 },
      { name: "HTML5", logo: logoHtml5 },
    ],
  },
  {
    name: "Shopping List",
    description:
      `Asimple shopping list page using jQuery fully.
      No sign up or log in is required.
      Created with jQuery, CSS3, and HTML5.`,
    codeURL: "https://github.com/ebru-c-7/Project_Shopping_List",
    link: "https://project-shopping-list-07.web.app/",
    logo: shoppingList,
    tools: [
      { name: "jQuery", logo: logojq },
      { name: "CSS3", logo: logoCss3 },
      { name: "HTML5", logo: logoHtml5 },
    ],
  },
  {
    name: "IMDB",
    description:
      `A chrome extension to add 'search on imdb' option to the context menu for easy query.
      Get access to it with browser context menu after selecting any text on any website.
      Created with JS.`,
    codeURL: "https://github.com/ebru-c-7/Project_imdb",
    link: "",
    logo: imdb,
    tools: [
      { name: "JavaScript", logo: logoJs },
      { name: "CSS3", logo: logoCss3 },
    ],
  },
  {
    name: "Coffee Here",
    description:
      `A sample starbucks order page designed for self-order kiosks. 
      No sign up or log in is required.
      Created with vanilla JS, CSS3, and HTML5.`,
    codeURL: "https://github.com/ebru-c-7/Project_Coffee",
    link: "https://coffee-here-now.web.app",
    logo: coffee,
    tools: [
      { name: "JavaScript", logo: logoJs },
      { name: "CSS3", logo: logoCss3 },
      { name: "HTML5", logo: logoHtml5 },
    ],
  },
];
