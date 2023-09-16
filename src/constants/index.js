import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  at,
  ei,
  carrent,
  jobit,
  tripguide,
  threejs,
  d,
  f,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Science",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Django",
    icon: d,
  },
  {
    name: "Flask",
    icon: f,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Akash Technolabs",
    icon: at,
    iconBg: "#FFFFFF",
    date: "Mar 2022 - May 2022",
    points: [
      "Developing and maintaining web applications  JavaScript, React.js, Redux.js, React Native, Node.js, Python, Django and Django Rest Framework",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I leveraged these tools to build responsive and dynamic web applications, enhancing my proficiency in both client-side and server-side development.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "eInfochips (An Arrow Company)",
    icon: ei,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - July 2023",
    points: [
      "The internship provided me with valuable exposure to SQL, Python, essential Python packages like NumPy, Pandas, Matplotlib, Seaborn, as well as the exciting world of Machine Learning",
      "I successfully completed a project utilizing Power BI, further broadening my skills in data visualization and business intelligence..",
      "I honed my skills in developing predictive models, classification algorithms, and regression analysis.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];


const projects = [
  {
    name: "Food Delivery Web App",
    description:
      "Introducing a food delivery web app, created by React and Context API for state management and Firebase for real-time data storage. Enjoy an intuitive user experience as you browse through a diverse menu and place orders effortlessly, while our cutting-edge technologies ensure accurate tracking and prompt delivery.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "Context Api",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/MihirDavada/FoodOrderApp0401",
  },
  {
    name: "Full Stack E-Commerce Website",
    description:
      "Introducing our powerful Full Stack E-Commerce Web App, built using technologies like React, Redux, Django, Django Rest Framework, and PostgreSQL. Enjoy a seamless shopping experience with a responsive and intuitive user interface. Our app provides real-time product updates, secure payment options, and efficient order processing.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/MihirDavada/E_Comm",
  },
  {
    name: "Recipes React Native App",
    description:
      "Recipes app built in React Native is a mobile application that provides users with a collection of recipes and cooking instructions. It aims to offer a convenient and user-friendly platform for individuals to discover new dishes, explore ingredients, and learn cooking techniques",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Expo",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/MihirDavada/ReactNativeProjects",
  },
];

export { services, technologies, experiences, projects };
