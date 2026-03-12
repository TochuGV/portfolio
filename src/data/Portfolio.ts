import type { Project, Experience, TechCategory } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Macabeo Running Circuit",
    images: ["/companies/yoizen.png", "/companies/wirsolut.png", "/companies/yoizen.png"],
    description: "Full-stack application developed for a running club to manage and display race rankings....",
    concepts: ["Full Stack", "Data Processing"],
    technologies: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "Tanstack Query?"],
    demoUrl: "https://node-socketio-chat-aaw8.onrender.com/" // Agregar esto cuando esté subido!
  },
  {
    id: 2,
    title: "node-socketio-chat",
    images: ["/projects/node-socketio-chat/image1.png", "/projects/node-socketio-chat/image2.png", "/projects/node-socketio-chat/image3.png"],
    description: "Engineered a real-time messaging platform using Node.js, Socket.IO, and MongoDB, paired with a Vanilla JavaScript frontend to master native web fundamentals. The modular client-server architecture features OAuth authentication, bidirectional websocket communication, and audio waveform visualization. By bypassing modern frontend frameworks, the project demonstrates a deep understanding of native state synchronization, efficient rendering, and complex event handling.",
    concepts: ["Real-Time", "WebSockets"],
    technologies: ["JavaScript", "Node.js", "Express", "Socket.IO", "MongoDB", "Passport.js"],
    repoUrl: "https://github.com/TochuGV/node-socketio-chat",
    demoUrl: "https://node-socketio-chat-aaw8.onrender.com/"
  },
  {
    id: 3,
    title: "Characters.API",
    images: ["/projects/characters.api/image1.png", "/projects/characters.api/image2.png", "/projects/characters.api/image3.png", "/projects/characters.api/image4.png",],
    description: "Architected a production-ready RESTful API using Node.js, Prisma, and SQL Server, heavily focused on resilience and security. Engineered a multi-level caching system (Redis with an in-memory NodeCache fallback) utilizing the Adapter pattern to ensure high availability. The system guarantees data consistency through idempotency and features a secure Dual-Token JWT flow (HttpOnly cookies), all fully containerized with Docker and automated via GitHub Actions CI/CD.",
    concepts: ["REST API", "Architecture"],
    technologies: ["JavaScript", "Node.js", "Express", "Prisma", "SQL Server", "Redis", "Zod", "JWT", "Docker", "GitHub Actions"],
    repoUrl: "https://github.com/TochuGV/Characters.API",
  },
  {
    id: 4,
    title: "Jungle Chess",
    images: ["/companies/yoizen.png", "/companies/wirsolut.png", "/companies/yoizen.png"],
    description: "Implementation of the logic of the board game 'Dou Shou Qi'...",
    concepts: ["Game Logic", "Algorithms"], 
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/TochuGV/jungle-chess-web",
    demoUrl: "https://jungle-chess-web.vercel.app"
  },
]

export const experience: Experience[] = [
  {
    id: 1,
    position: "Full Stack Developer",
    period: "Jan 2023 - Jul 2024",
    company: {
      name: "Yoizen",
      url: "https://yoizen.com/",
      logo: "/companies/yoizen.png"
    }, 
    details: {
      summary: "Contributed to the development and evolution of ySocial, an omnichannel customer service platform.",
      achievements: [
        "Engineered end-to-end features to enhance the core functionality and user experience of the omnichannel platform.",
        "Managed relational database structures to ensure the persistence and fluidity of real-time communications.",
        "Optimized third-party social media integrations, streamlining message routing and management for customer service agents.",
        "Collaborated within an agile team environment, contributing to continuous planning, delivery, and milestone tracking."  
      ]
    },
    technologies: ["C#", "Angular", "JavaScript", "SQL Server", "jQuery", "Node.js"]
  },
  {
    id: 2,
    position: "Backend Developer",
    period: "Oct 2022 - Dec 2022",
    company: {
      name: "Wirsolut",
      url: "https://wirsolut.com/",
      logo: "/companies/wirsolut.png"
    },
    details: {
      summary: "Collaborated in a team to develop a RESTful API for WirTrack, a platform focused on logistics management optimization and security.",
      achievements: [
        "Architected and implemented secure RESTful endpoints for real-time logistics route registration and querying.",
        "Designed efficient relational data models to guarantee information integrity and consistency across the platform.",
        "Enforced strict data validation and static typing standards to build a robust, predictable, and maintainable API."  
      ]
    },
    technologies: ["TypeScript", "Node.js", "Express", "PostgreSQL", "TypeORM", "Zod", "Docker"]
  },
];

export const techStack: TechCategory[] = [
  {
    name: "Frontend", 
    technologies: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "ts" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Angular", icon: "angular" }
    ],
  },
  {
    name: "Backend",
    technologies: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "C#", icon: "cs" },
      { name: ".NET", icon: "dotnet" },
      { name: "Jest", icon: "jest" },
    ],
  },
  {
    name: "Databases",
    technologies: [
      { name: "SQL Server", icon: "/tech/sql-server.svg" },
      { name: "PostgreSQL", icon: "postgres" }, // Hasta saber Supabase, se queda.
      { name: "MongoDB", icon: "mongodb" },
      { name: "Prisma", icon: "prisma" },
      { name: "Redis", icon: "redis" },
    ],
  },
  {
    name: "Cloud & DevOps",
    technologies: [
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Render", icon: "https://cdn.simpleicons.org/render/FFFFFF" },
      { name: "Azure DevOps", icon: "azure" }
    ]
  },
  {
    name: "Tools",
    technologies: [
      { name: "Git", icon: "git" },
      { name: "Postman", icon: "postman" },
      { name: "Swagger", icon: "/tech/swagger.svg" },
      { name: "Figma", icon: "figma" },
      { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg" }
    ]
  }
  //{ name: "React Native", icon: "reactnative" }, // Hasta 'EventGallery', no se escribe. Falta el logo.
  //{ name: "Expo", icon: "expo" }, // Hasta 'EventGallery', no se escribe. Falta el logo.
  //{ name: "Supabase", icon: "supabase" }, // Hasta que no la utilice, no se pone.
  //{ name: "Cloudflare", icon: "cloudflare" }, // Hasta 'EventGallery', no se escribe.
  //{ name: "TypeORM", icon: "typeorm"} // Queda descartada.
]