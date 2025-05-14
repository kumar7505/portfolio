import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "BootStrap",
      icon: "/assets/tech/bootstrap.svg",
      link: "https://getbootstrap.com/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Redux",
      icon: "/assets/tech/redux.svg",
      link: "https://redux.js.org/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "npm",
      icon: "/assets/tech/npm.svg",
      link: "https://www.npmjs.com/",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
  ],
};

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Atlanwa Technologies",
    icon: "/assets/company/atlanwa.jpg",
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Dec 2024",
    points: [
      "I served as an Software Developer in Atlanwa Technologies, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
      "Led induction programs, ensured new member alignment with Atlanwa's mission, and provided technical mentorship.",
      "Developed Atlanwa's website, enhancing the organization's online visibility.",
      "Spearheaded promotional campaigns, actively engaged with the Atlanwa community, and played a key role in planning and executing events.",
    ],
  },

  {
    title: "Machine Learning Intern",
    company_name: "Infosys SpringBoard",
    icon: "/assets/company/springboard.png",
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Gained hands-on experience in working with databases, performing data exploration, and conducting data analysis to derive meaningful insights.",
      "Worked on real-world datasets to understand patterns, trends, and prepare data for machine learning workflows.",
      "Received mentorship and guidance from industry experts, enhancing technical skills and understanding of machine learning concepts.",
      "Developed a strong foundation in data handling, preprocessing, and analytical thinking within a professional environment.",
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
    name: "Real Time Video Dehazing",
    description:
      "A real-time AI-powered assistant that captures video or images from a camera, processes the footage to reduce haze and improve visibility, and displays the dehazed video instantly. It integrates with devices to simplify video enhancement tasks in daily life.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "red-text-gradient",
      },
      {
        name: "Pillow",
        color: "purple-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Liveblocks",
        color: "yellow-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",  // NoSQL database
      }
    ],

    image: "/assets/projects/RealTime.png",
    source_code_link: "https://github.com/kumar7505/Real-time-video-Dehazing",
    deployed_link: "",
  },
  {
    name: "E-Commerce Website",
    description:
      "Creating an e-commerce website using React JS and Express JS involves several steps to build a platform that allows users to browse and purchase products. Here's a brief overview of the process:",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",  // Core language
      },
      {
        name: "React",
        color: "blue-text-gradient",  // Frontend framework
      },
      {
        name: "Express",
        color: "green-text-gradient",  // Backend framework
      },
      {
        name: "Stripe",
        color: "purple-text-gradient",  // Payment processing / Fintech
      },
      {
        name: "Redux",
        color: "orange-text-gradient",  // State management
      },
      {
        name: "Node.js",
        color: "green-text-gradient",  // Backend runtime
      },
    ],
    image: "/assets/projects/amazon.jpg",
    source_code_link: "https://github.com/kumar7505/E-Commerce-Website",
    deployed_link: "",
  },
  {
    name: "College Official Website",
    description:
      "A comprehensive platform built for our college to showcase infrastructure, achievements, and official updates. Includes secure login systems for students and faculty to access semester results and update academic records. Designed with a user-friendly interface and responsive layout.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "purple-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "orange-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "yellow-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],

    image: "/assets/projects/Vec.png",
    source_code_link:
      "https://github.com/SAMSDP/VEC_Landing",
    deployed_link: "",
  },
  {
  name: "Gemini Clone",
  description: "The Gemini Clone is a recreated version of an AI-powered digital assistant platform. It takes user inputs, processes requests, and sends relevant responses. Built with HTML, CSS, JavaScript, Bootstrap, and the Google Gemini API.",
  tags: [
    {
      name: "HTML",
      color: "blue-text-gradient" // Core technology for web structure
    },
    {
      name: "CSS",
      color: "green-text-gradient" // Styling
    },
    {
      name: "JavaScript",
      color: "yellow-text-gradient" // Core programming language
    },
    {
      name: "Bootstrap",
      color: "pink-text-gradient" // Frontend framework
    },
    {
      name: "Google Gemini API",
      color: "purple-text-gradient" // AI-powered responses
    }
  ],
  image: "/assets/projects/gemini.png",
  source_code_link:
    "https://github.com/kumar7505/Gemini-Clone",
  deployed_link:
    "",
  },
  {
    name: "Learning Management System",
    description:
      "A full-stack platform that allows users to browse, purchase, and watch courses. Admins can create and manage courses, apply custom discounts, and track sales. Integrated with PayPal for secure payments and built for scalability and ease of use.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "PayPal API",
        color: "purple-text-gradient",
      },
    ],

    image: "/assets/projects",
    source_code_link: 
      "https://github.com/kumar7505/Learning-Management-System",
    deployed_link:
      "",
  },
  {
  name: "Google Clone",
    description:
      "A functional clone of the Google search engine built using HTML, CSS, and Bootstrap. Integrated with the Google Search API to fetch and display real-time search results, mimicking the look and feel of the original Google homepage and results page. Features responsive design and smooth user experience across devices.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "purple-text-gradient",
      },
      {
        name: "Google API",
        color: "orange-text-gradient",
      },
    ],

    image: "/assets/projects/google.png",
    source_code_link:
      "https://github.com/kumar7505/Google-Clone/tree/main/files",
    deployed_link:
      "",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/kumar7505",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/kumar-p75/",
  },
  // {
  //   id: "x",
  //   icon: <XIcon />,
  //   link: "https://twitter.com/satyamshorrf",
  // },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://instagram.com/itskumarhere___",
  },
];

const heroTexts = [
  "React developer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Quality Engineer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
