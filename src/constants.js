// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import jQuery from './assets/tech_logo/jQuery.png'


// Experience Section Logo's
import cetpa from './assets/company_logo/cetpa.jpeg';
import united from './assets/company_logo/united.jpeg'

// Education Section Logo's
import shoolini from './assets/education_logo/shoolini.png';
import cbse from './assets/education_logo/cbse.png';

// Project Section Logo's
import movierecLogo from './assets/work_logo/movie_rec.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import Grocifylogo from './assets/work_logo/grocify-logo.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 1,
      img: cetpa,
      role: "Fullstack with MERN",
      company: "Cetpa Intitute of Noida",
      date: "march 2025 - janaury 2026",
      desc: "i hove complated Full Stack MERN internship training at CETPA Infotech, where I am actively contributing to innovative projects as a Fullstack Engineer. I have worked on both frontend and backend development using HTML, CSS, JavaScript, MongoDB, Bootstrap, and ReactJS. I collaborated closely with the team to build responsive, high-performance web applications and enhanced user experience through seamless integration of multiple technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "javaScript",
        "HTML",
        "CSS",
        "Node",
        "Express",
        "MongoDB",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: shoolini,
      school: "Shoolini University, Solan, Himachal Pradesh",
      date: "August 2025 - Pursuing",
      desc: "I am Pursuing My Bachelor of Computer Application from Shoolini University, where I built a strong foundation in programming, software development, and computer science fundamentals. During my studies, I gained hands-on experience in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I also actively participated in workshops, coding activities, and technical events, which helped me strengthen my practical skills and overall technical growth. My academic experience has played a key role in shaping my problem-solving abilities and preparing me for real-world development challenges.",
      degree: "Bachelor of Computer Applications - BCA",
    },
    
    {
      id: 2,
      img: cbse,
      school: "Government Coed Sarvodaya Vidhyalaya,Dichaon Kalan, New Delhi",
      date: "march 2023",
      grade: "79.4",
      desc: "I had completed my 12th education from Government Coed Sarvodaya Vidhyalaya,Dichaon Kalan, New Delhi CBSE Board, where Studied Hindi, English, History, Economics, Geography",
      degree: "CBSE(XII)",
    },
  ];



  export const projects = [
    
    
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/rawatmohit1234/Movie-Search-App-React-",
      webapp: "https://movie-search-app-react-eight.vercel.app/",
    },   
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/rawatmohit1234/Images-Search-App/blob/main/index.html",
      webapp: "https://rawcdn.githack.com/rawatmohit1234/Images-Search-App/2990e83b72be9436e3f93fdf16060bd77fd16392/index.html",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/rawatmohit1234/Image-Background-Remover/blob/main/index.html",
      webapp: "https://rawcdn.githack.com/rawatmohit1234/Image-Background-Remover/d879aeaf4b5bab971b7927146db0e6a26552ac61/index.html",
    },
  ];  