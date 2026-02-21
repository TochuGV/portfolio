import type { Project, Experience, TechCategory } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "node-socketio-chat",
    image: "/companies/yoizen.png",
    description: "Real-time chat application with multiple settings using WebSockets...",
    concepts: ["Real-Time", "WebSockets"],
    technologies: ["JavaScript", "Node.js", "Express", "Socket.IO", "MongoDB", "Passport.js???"],
    repoUrl: "https://github.com/TochuGV/node-socketio-chat",
    demoUrl: "https://node-socketio-chat-aaw8.onrender.com/"
  },
  {
    id: 2,
    title: "Characters.API",
    image: "/companies/yoizen.png",
    description: "RESTful API created to manage characters with authentication and advanced search...",
    concepts: ["REST API", "Architecture"],
    technologies: ["JavaScript", "Node.js", "Express", "Prisma", "SQL Server", "Zod", "JWT", "Redis", "Docker", "Passport.js"],
    repoUrl: "https://github.com/TochuGV/Characters.API",
  },
  {
    id: 3,
    title: "Jungle Chess",
    image: "/companies/yoizen.png",
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
      summary: "Development and maintenance for ySocial, an omnichannel platform for customer service management across social media and digital channels.",
      achievements: [
        "Developed new features focused on improving omnichannel interaction between users and agents within the platform.",
        "Managed and optimized databases to ensure persistence and fluidity of real-time communications.",
        "Enhanced user experience (UX) in social media integrations, achieving more efficient and direct service flows."
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
      summary: "Development of a RESTful API for WirTrack, a web platform designed to optimize logistics management and security in freight transportation.",
      achievements: [
        "Architected and developed specific endpoints for real-time logistics route registration and querying.",
        "Designed data models and integrated with relational databases to ensure information integrity and consistency.",
        "Applied robust development standards to build a secure, maintainable API ready for production environments."
      ],
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
      { name: "SQL Server", icon: "sqlserver" },
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
      { name: "Render", icon: "render" },
      { name: "Azure DevOps", icon: "azure" }
    ]
  },
  {
    name: "Tools",
    technologies: [
      { name: "Git", icon: "git" },
      { name: "Postman", icon: "postman" },
      { name: "Swagger", icon: "swagger" },
      { name: "Figma", icon: "figma" },
      { name: "Trello", icon: "trello" }
    ]
  }
  //{ name: "React Native", icon: "reactnative" }, // Hasta 'EventGallery', no se escribe. Falta el logo.
  //{ name: "Expo", icon: "expo" }, // Hasta 'EventGallery', no se escribe. Falta el logo.
  //{ name: "Supabase", icon: "supabase" }, // Hasta que no la utilice, no se pone.
  //{ name: "Cloudflare", icon: "cloudflare" }, // Hasta 'EventGallery', no se escribe.
  //{ name: "TypeORM", icon: "typeorm"} // Queda descartada.
]