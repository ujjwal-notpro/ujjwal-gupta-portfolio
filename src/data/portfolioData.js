export const personalInfo = {
  name: "Ujjwal Gupta",
  username: "ujjwal-notpro060406",
  role: "Full Stack Developer",
  tagline: "Turning Ideas Into Interactive Digital Experiences.",
  introduction: "Hi, I'm Ujjwal Gupta, a passionate Full Stack Developer who enjoys turning ideas into functional and engaging digital experiences. I work with modern web technologies to build responsive, user-friendly and practical applications. My technical interests include frontend development, backend development, programming and software engineering. I enjoy learning new technologies, solving problems and continuously improving my development skills through personal projects and practical internship experiences. My goal is to become a skilled software developer and contribute to building impactful and scalable digital solutions.",
  heroDescription: "I build responsive and user-friendly web applications using modern technologies, creative thinking and practical development skills.",
  identity: "Computer Science student and aspiring software developer with knowledge of frontend development, backend development, programming languages, API integration and modern web technologies.",
  location: {
    origin: "Prayagraj, Uttar Pradesh, India",
    currentRegion: "Noida Region (Academic)"
  },
  social: {
    github: {
      username: "ujjwal-notpro060406",
      url: "https://github.com/ujjwal-notpro060406"
    },
    linkedin: {
      username: "ujjwal-gupta-491a2b218",
      url: "https://www.linkedin.com/in/ujjwal-gupta-491a2b218/"
    }
  },
  contact: {
    emailPlaceholder: "[your-email@example.com]",
    phonePlaceholder: "[+91 XXXXX XXXXX]",
    heading: "Let's Build Something Amazing Together.",
    description: "I'm always interested in connecting with developers, exploring new opportunities and collaborating on exciting projects. Feel free to reach out!"
  }
};

export const aboutData = {
  summary: [
    "I am a Computer Science student with a keen focus on Full Stack Web Development. I genuinely enjoy the process of turning conceptual ideas into practical, responsive, and aesthetically pleasing digital applications.",
    "My technical journey encompasses both frontend and backend technologies, supported by a strong foundation in core programming languages. I actively seek out programming challenges, write clean code, and embrace modern web development practices.",
    "Beyond software development and problem-solving, I have a passionate interest in art and craft as a creative extracurricular pursuit, which inspires my eye for visual detail, clean layout design, and intuitive user experiences."
  ],
  keyHighlights: [
    { label: "Academic Focus", value: "Computer Science" },
    { label: "Core Specialization", value: "Full Stack Web Development" },
    { label: "Programming Foundation", value: "Multi-Language (C, C++, Java, Python)" },
    { label: "Origin", value: "Prayagraj, Uttar Pradesh" },
    { label: "Creative Outlet", value: "Art & Craft" },
    { label: "Practical Experience", value: "3 Professional Internships" }
  ]
};

export const skillCategories = [
  {
    category: "Programming Languages",
    description: "Core algorithmic problem-solving and software foundation",
    skills: [
      { name: "C", icon: "Code2", badge: "Core", color: "#555555" },
      { name: "C++", icon: "Cpu", badge: "OOP & DSA", color: "#f34b7d" },
      { name: "Java", icon: "Coffee", badge: "Object Oriented", color: "#b07219" },
      { name: "Python", icon: "Binary", badge: "Scripting & Logic", color: "#3572A5" }
    ]
  },
  {
    category: "Frontend Development",
    description: "Modern, dynamic, and component-driven user interfaces",
    skills: [
      { name: "HTML5", icon: "FileCode", badge: "Semantic Markup", color: "#e34c26" },
      { name: "CSS3", icon: "Palette", badge: "Styling & Flexbox/Grid", color: "#563d7c" },
      { name: "JavaScript", icon: "FileJson", badge: "ES6+ & Asynchronous", color: "#f1e05a" },
      { name: "React.js", icon: "Layers", badge: "Hooks & Component State", color: "#3178c6" }
    ]
  },
  {
    category: "Backend Development",
    description: "Server-side logic, routing, and scalable endpoints",
    skills: [
      { name: "Node.js", icon: "Server", badge: "Runtime Environment", color: "#026e00" },
      { name: "REST API", icon: "Network", badge: "Endpoints & Data Flow", color: "#0969da" }
    ]
  },
  {
    category: "CSS Frameworks",
    description: "Rapid, responsive, and utility-driven styling",
    skills: [
      { name: "Bootstrap", icon: "LayoutGrid", badge: "Grid & UI Components", color: "#7952b3" },
      { name: "Tailwind CSS", icon: "Wind", badge: "Utility-First Styling", color: "#38bdf8" }
    ]
  },
  {
    category: "Development Tools",
    description: "Version control, code editing, and developer workflow",
    skills: [
      { name: "Git", icon: "GitBranch", badge: "Version Control", color: "#f05032" },
      { name: "GitHub", icon: "Github", badge: "Collaboration & Remote Repos", color: "#1f2328" },
      { name: "Visual Studio Code", icon: "Terminal", badge: "Primary IDE & Extensions", color: "#007acc" }
    ]
  },
  {
    category: "Additional Technical Knowledge",
    description: "Engineering methodologies and web development practices",
    skills: [
      { name: "Responsive Web Design", icon: "MonitorSmartphone", badge: "Adaptive Layouts", color: "#0969da" },
      { name: "API Integration", icon: "Boxes", badge: "Third-party APIs", color: "#1f883d" },
      { name: "DOM Manipulation", icon: "Sliders", badge: "Dynamic Element Control", color: "#d97706" },
      { name: "Frontend Development", icon: "Globe", badge: "Interactive UI/UX", color: "#4f46e5" },
      { name: "Backend Development", icon: "Database", badge: "Server Architecture", color: "#0891b2" },
      { name: "Web Application Development", icon: "AppWindow", badge: "Full Lifecycle", color: "#9333ea" }
    ]
  }
];

export const allProjects = [
  {
    id: 1,
    title: "Weather App",
    slug: "weather-app",
    category: "Web Apps & APIs",
    description: "A real-time weather forecasting web application integrated with the OpenWeatherMap API to fetch live meteorological data including temperature, humidity, and weather conditions by city search.",
    techStack: ["React.js", "JavaScript", "OpenWeatherMap API", "CSS3"],
    primaryLanguage: "JavaScript",
    languageColor: "#f1e05a",
    topics: ["weather-app", "react", "openweathermap-api", "javascript", "portfolio-project"],
    verifiedApi: "OpenWeatherMap API Integration",
    features: [
      "Live city-based meteorological search",
      "Real-time temperature, humidity, and atmospheric data",
      "Dynamic weather condition visualization",
      "Asynchronous API handling with error state management"
    ],
    github: "https://github.com/ujjwal-notpro060406",
    statusNote: "API integration verified with OpenWeatherMap"
  },
  {
    id: 2,
    title: "Mini Amazon",
    slug: "mini-amazon",
    category: "Web Apps & APIs",
    description: "An e-commerce prototype web application inspired by Amazon, featuring a product catalog, category browsing, interactive shopping cart management, and a responsive shopping layout.",
    techStack: ["React.js", "JavaScript", "HTML5", "Tailwind CSS"],
    primaryLanguage: "React.js",
    languageColor: "#3178c6",
    topics: ["ecommerce", "amazon-clone", "react", "tailwind-css", "cart-system"],
    features: [
      "Dynamic product showcase grid",
      "Interactive cart item addition and count calculation",
      "Clean e-commerce navigation bar with search bar mock",
      "Mobile-friendly responsive shopping experience"
    ],
    github: "https://github.com/ujjwal-notpro060406",
    statusNote: "Frontend e-commerce prototype; payment gateway marked for future backend integration"
  },
  {
    id: 3,
    title: "To-Do List",
    slug: "todo-list-app",
    category: "Web Apps & APIs",
    description: "A productivity task management application designed for seamless daily task organization, complete with status toggles, deletion, filtering, and local state persistence.",
    techStack: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
    primaryLanguage: "JavaScript",
    languageColor: "#f1e05a",
    topics: ["todo-list", "javascript", "dom-manipulation", "productivity", "localstorage"],
    features: [
      "Add, mark complete, and remove daily task items",
      "State-based task categorization and clean counter",
      "Pure JavaScript DOM manipulation for lightweight speed",
      "Clean, distraction-free user interface"
    ],
    github: "https://github.com/ujjwal-notpro060406",
    statusNote: "Client-side interactive productivity tool"
  },
  {
    id: 4,
    title: "Personal Portfolio",
    slug: "personal-portfolio",
    category: "UI & Prototypes",
    description: "A modern, responsive personal portfolio web application built with component-driven architecture to showcase technical skills, project archives, education, and professional milestones.",
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Web Design"],
    primaryLanguage: "React.js",
    languageColor: "#3178c6",
    topics: ["portfolio", "developer-portfolio", "react", "tailwindcss", "portfolio-project"],
    features: [
      "Modular and reusable React component structure",
      "Clean UI aesthetics and responsive layout",
      "Smooth section-to-section navigation",
      "Mobile-first responsive design"
    ],
    github: "https://github.com/ujjwal-notpro060406",
    statusNote: "Production personal portfolio"
  },
  {
    id: 5,
    title: "Mini Portfolio",
    slug: "mini-portfolio",
    category: "UI & Prototypes",
    description: "A lightweight, minimalist personal portfolio landing page focused on fast loading, essential developer introduction, quick skill highlights, and immediate social connection links.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design"],
    primaryLanguage: "HTML",
    languageColor: "#e34c26",
    topics: ["mini-portfolio", "html5", "css3", "minimalist", "web-developer"],
    features: [
      "Lightweight footprint for rapid load speeds",
      "Minimalist card structure focusing on essentials",
      "Responsive typography and mobile compatibility",
      "Direct link integration to developer profiles"
    ],
    github: "https://github.com/ujjwal-notpro060406",
    statusNote: "Lightweight landing page showcase"
  },
  {
    id: 6,
    title: "Login Page",
    slug: "login-auth-page",
    category: "UI & Prototypes",
    description: "A responsive user authentication interface showcasing clean form design, user input validation, password reveal toggling, and modern visual aesthetics.",
    techStack: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
    primaryLanguage: "JavaScript",
    languageColor: "#f1e05a",
    topics: ["login-page", "authentication-ui", "form-validation", "dom-manipulation"],
    features: [
      "Polished authentication card layout",
      "Interactive password visibility toggle",
      "Client-side input validation states",
      "Responsive centering and smooth focus animations"
    ],
    github: "https://github.com/ujjwal-notpro060406",
    statusNote: "Authentication UI prototype; requires backend auth service for live token issuance"
  },
  {
    id: 7,
    title: "Internship Page",
    slug: "internship-portal-page",
    category: "UI & Prototypes",
    description: "A structured portal webpage designed to present internship opportunities, application requirements, eligibility criteria, and program overviews in an accessible layout.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design"],
    primaryLanguage: "HTML",
    languageColor: "#e34c26",
    topics: ["internship-portal", "opportunities", "responsive-design", "html5", "css3"],
    features: [
      "Structured program overview and role descriptions",
      "Clear visual hierarchy with call-to-action sections",
      "Responsive card layouts for program eligibility",
      "Accessible typography and intuitive navigation"
    ],
    github: "https://github.com/ujjwal-notpro060406",
    statusNote: "Portal layout template for internship representation"
  },
  {
    id: 8,
    title: "Game of Cards",
    slug: "game-of-cards",
    category: "Games & Logic",
    description: "An interactive card-based browser game implementing core game rules, card deck shuffling, randomized turns, score tracking, and animated card flip effects.",
    techStack: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
    primaryLanguage: "JavaScript",
    languageColor: "#f1e05a",
    topics: ["card-game", "javascript-game", "dom-manipulation", "deck-shuffle", "browser-game"],
    features: [
      "Card deck distribution and shuffle algorithms",
      "Real-time game state and score evaluation",
      "Dynamic visual card states via DOM manipulation",
      "Engaging gameplay mechanics in vanilla JavaScript"
    ],
    github: "https://github.com/ujjwal-notpro060406",
    statusNote: "Interactive browser-based game project"
  },
  {
    id: 9,
    title: "Shape Game",
    slug: "shape-reflex-game",
    category: "Games & Logic",
    description: "A dynamic reflex and geometric shape recognition game that challenges players with varying visual targets, score tracking, and smooth CSS animation transitions.",
    techStack: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
    primaryLanguage: "JavaScript",
    languageColor: "#f1e05a",
    topics: ["shape-game", "reflex-game", "javascript", "animations", "interactive"],
    features: [
      "Dynamic geometric shape rendering and randomized cycles",
      "Score multiplier and reflex counter logic",
      "Interactive key/click detection with immediate feedback",
      "Lightweight animation performance"
    ],
    github: "https://github.com/ujjwal-notpro060406",
    statusNote: "Logic and visual response game application"
  },
  {
    id: 10,
    title: "Card Design (card.html)",
    slug: "card-design-component",
    category: "UI & Prototypes",
    description: "A standalone modern UI card component design exploring advanced CSS styling, subtle border glows, glassmorphism backdrop filters, and responsive content padding.",
    techStack: ["HTML5", "CSS3", "Responsive Web Design"],
    primaryLanguage: "CSS",
    languageColor: "#563d7c",
    topics: ["card-design", "css3", "html5", "ui-component", "responsive-card"],
    features: [
      "Advanced CSS styling and component layout",
      "Scalable typography and flexible content area",
      "Reusable standalone component structure",
      "Cross-browser compatible visual styling"
    ],
    github: "https://github.com/ujjwal-notpro060406",
    statusNote: "UI component architecture file (card.html)"
  },
  {
    id: 11,
    title: "Ujjwal Personal Website (ujjwal.html)",
    slug: "ujjwal-personal-website",
    category: "UI & Prototypes",
    description: "A dedicated personal website implementation (ujjwal.html) presenting personal biography, technical skills, project listings, and contact details with customized semantic structure.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    primaryLanguage: "HTML",
    languageColor: "#e34c26",
    topics: ["personal-website", "semantic-html", "css", "javascript", "profile"],
    features: [
      "Custom single-page profile presentation",
      "Structured technical skill sections and bio overview",
      "Responsive styling for mobile and desktop screens",
      "Integrated social connectivity links"
    ],
    github: "https://github.com/ujjwal-notpro060406",
    statusNote: "Personal website implementation file (ujjwal.html)"
  }
];

export const internships = [
  {
    id: 1,
    company: "BeeSkilled",
    role: "Internship Experience",
    duration: "May 2026 – June 2026",
    location: "Practical Learning / Remote",
    description: "Participated in an intensive internship experience gaining structured practical learning and technical exposure. Focused on modern development workflows, collaborative engineering principles, and deepening practical knowledge of web software architecture.",
    tags: ["Practical Learning", "Technical Exposure", "Software Workflows", "Engineering Practices"]
  },
  {
    id: 2,
    company: "Vault of Code",
    role: "Internship Experience",
    duration: "June 2026 – July 2026",
    location: "Practical Learning / Remote",
    description: "Engaged in hands-on technical learning and development exposure. Strengthened problem-solving capabilities, explored code structure standards, and gained practical insight into real-world software development methodologies.",
    tags: ["Technical Learning", "Development Exposure", "Problem Solving", "Code Quality"]
  },
  {
    id: 3,
    company: "UptoSkills",
    role: "Full Stack Development Intern",
    duration: "June 2026 – September 2026",
    location: "Full Stack Development / Internship",
    description: "Served as a Full Stack Development Intern, focusing directly on web development, technical learning, and practical development exposure across frontend and backend environments to build responsive and functional web applications.",
    tags: ["Full Stack Development", "Web Development", "Frontend & Backend", "Technical Exposure"]
  }
];

export const educationData = [
  {
    institution: "Ajay Kumar Garg Engineering College (AKGEC)",
    degree: "Computer Science",
    degreeNote: "[Degree / Current Semester to be specified]",
    status: "College Student",
    location: "Ghaziabad, Uttar Pradesh (Delhi NCR / Noida Region)",
    period: "[College Enrollment Year – Expected Passing Year]",
    highlights: [
      "Branch: Computer Science",
      "Focusing on core computer science foundations, algorithms, data structures, and full-stack software development",
      "Active member in student tech community and personal project development"
    ],
    isCurrent: true
  },
  {
    institution: "National Institute of Open Schooling (NIOS)",
    degree: "Class 12 (Senior Secondary)",
    board: "NIOS",
    status: "Completed",
    period: "Completed in 2025",
    highlights: [
      "Completion Year: 2025",
      "Board: NIOS",
      "Stream & percentage [Available for confirmation upon request]"
    ],
    isCurrent: false
  },
  {
    institution: "Uttar Pradesh State Board (UP Board)",
    degree: "Class 11 (Secondary)",
    board: "UP Board",
    status: "Completed",
    period: "Completed in 2023",
    highlights: [
      "Completion Year: 2023",
      "Board: UP Board"
    ],
    isCurrent: false
  }
];

export const personalInterests = [
  {
    title: "Art and Craft",
    icon: "Palette",
    description: "Extracurricular creative activity cultivating patience, spatial design sense, hand-eye coordination, and a keen eye for aesthetic balance that directly enriches my frontend design work."
  },
  {
    title: "Exploring New Technologies",
    icon: "Compass",
    description: "Regularly tracking modern web frameworks, developer tools, AI innovations, and modern engineering practices to expand my technical horizon."
  },
  {
    title: "Learning Programming",
    icon: "Code",
    description: "Continuously strengthening problem-solving intuition, practicing algorithmic reasoning, and learning diverse language paradigms from C++ to JavaScript and Python."
  },
  {
    title: "Building Creative Projects",
    icon: "Sparkles",
    description: "Turning imaginative ideas into tangible digital prototypes, browser games, and utility applications that bring utility to everyday tasks."
  },
  {
    title: "Exploring Software Development",
    icon: "Cpu",
    description: "Studying software architecture, API design, responsive UI engineering, and best development practices to prepare for building scalable systems."
  }
];
