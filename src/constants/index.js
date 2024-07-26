import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  QueueAssociates,
  headstarter,
  LSM,
  RR,
  QAManager,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Dynamics Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Dynamcs & Powerapps Developer",
    company_name: "Queue Associates",
    icon: QueueAssociates,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Collaborated with clients to understand their requirements for a Dynamics 365 CRM and implemented the solutions as a tech lead.",
      "Created Internal Tools such as a Project Hub & HR Suite using powerapps, power automate flows, and Dynamics/Sharepoint.",
      "Worked under a senior developer to learn Angular, TypeScript, and T-SQL, and assisted in testing/developing his projects.",
      "Worked on creating procedure and implementation/migration of source code to Azure DevOps.",
      "Created Dashboards in Power BI and our internal Dynamics CRM.",
      "Collaborated with other developers to assist with their client projects.",
    ],
  },
  {
    title: "Software Engineering Fellow",
    company_name: "Headstarter",
    icon: headstarter,
    iconBg: "#383E56",
    date: "July 2024 - Aug 2024",
    points: [
      "Will build 5+ AI apps and APIs using NextJS, OpenAi, Pinecone, and StripeAPI",
      "Developed projects from design to deployment leading 4+ engineering fellows using MVC design patterns",
      "Coached by Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git and microservice patterns",
    ],
  },
  {
    title: "Development Intern",
    company_name: "Queue Associates",
    icon: QueueAssociates,
    iconBg: "#383E56",
    date: "Summer 2022",
    points: [
      "Worked on the Queue Associates Customer Self-Service Portal",
      "Used a mix of Microsoft Power Apps, SQL, Javascript, and Bootstrap to design and update the portal",
      "Created knowledge base article templates to streamline the creation process, along with documentation explaining it.",
      "Created a feedback form that stores the responses in a Microsoft Dataverse table ",
      "Assisted with the Microsoft Virtual Power Agent Creation, Documentation, and publishing",
    ],
  },
  {
    title: "Development Contractor",
    company_name: "Queue Associates",
    icon: QueueAssociates,
    iconBg: "#383E56",
    date: "Summer 2021",
    points: [
      "Worked on the Queue Associates Certification Manager",
      "Designed a “Path” System to make assigning exams to people simpler and more efficient  ",
      "Created a web app that allowed admins to assign exams and assess progress, and employees to view what exams they needed to take",
      "Used Flask, Python, Javascript, Bootstrap, and MySQL to create the web app",
      "Stored and assessed all information using Azure Databases",
      "Deployed and managed the web app via Microsoft Azure",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Queue Associates Competencies Manager",
    description:
      "Internal web application designed to streamline the process of assigning certification exams to employees. Features a full sign-in system with separate access levels for admin and regular employees, customized home pages, and functionality to track the number of exams needed to meet benchmarks. Hosted on Azure with Azure DB for database management and Azure AD integration for sign-in authentication.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Azure",
        color: "blue-text-gradient",
      },
    ],
    image: QAManager,
    source_code_link: "https://github.com/",
  },
  {
    name: "Rebounding Resilience",
    description:
      "Web game where players control a bunny on a quest to obtain a golden carrot, designed to be completed in 5-15 minutes. Features challenging platforming levels, various enemies, and mechanics that require players to persevere through failure. Developed for the 2021 Games for Change Student Challenge Competition, winning the Game Accessibility Challenge in NYC. <a>https://chris32156.itch.io/rebounding-resilience</a>",
    tags: [
      {
        name: "Unity",
        color: "grey-text-gradient",
      },
      {
        name: "CSharp",
        color: "green-text-gradient",
      },
      {
        name: "OOP",
        color: "pink-text-gradient",
      },
    ],
    image: RR,
    source_code_link: "https://chris32156.itch.io/rebounding-resilience",
  },
  {
    name: "Lehman Schoolwork Manager",
    description:
      "Web application that enables students to manage their daily tasks, receive assignments, and view AI-generated daily schedules based on their assignments. Utilized the Google Sheets API as a database to efficiently organize and track student workloads. Achieved 5th place at the 2021 NYC Student Hack League and demonstrated significant success during COVID-19 by enhancing students' academic performance & mental health.",
    tags: [
      {
        name: "GoogleAPI",
        color: "green-text-gradient",
      },
      {
        name: "Database",
        color: "blue-text-gradient",
      },
      {
        name: "Design",
        color: "pink-text-gradient",
      },
    ],
    image: LSM,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
