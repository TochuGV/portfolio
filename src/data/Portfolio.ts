import type { Project, Experience, TechCategory } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "node-socketio-chat",
    image: "/companies/yoizen.png",
    description: "Real-time chat application with multiple settings using WebSockets...",
    technologies: ["JavaScript", "Node.js", "Express", "Socket.IO", "MongoDB", "Passport.js???"],
    repoUrl: "https://github.com/TochuGV/node-socketio-chat",
    demoUrl: "https://node-socketio-chat-aaw8.onrender.com/"
  },
    {
    id: 2,
    title: "Characters.API",
    image: "/companies/yoizen.png",
    description: "RESTful API created to manage characters with autentication and avanced search...",
    technologies: ["JavaScript", "Node.js", "Express", "Prisma", "SQL Server", "Zod", "JWT", "Redis", "Docker", "Passport.js"],
    repoUrl: "https://github.com/TochuGV/Characters.API",
  }
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
      summary: "Desarrollo y mantenimiento para ySocial, una plataforma omnicanal para la gestión de atención al cliente en redes sociales y canales digitales.",
      achievements: [
        "Implementación y mantenimiento de funcionalidades en C#, Angular y JavaScript.",
        "Integración con SQL Server para el manejo de interacciones entre usuarios y agentes.",
        "Optimización de la experiencia de usuario en canales como WhatsApp, Instagram y Facebook."
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
      summary: "Desarrollo de una API RESTful para WirTrack, una plataforma web diseñada para optimizar la gestión logística y la seguridad en el transporte de mercancías.",
      achievements: [
        "Diseño y construcción de endpoints para el registro y consulta de rutas de viaje.",
        "Validación de datos con Zod e integración con PostgreSQL mediante TypeORM.",
        "Implementación de estándares de desarrollo Backend utilizando TypeScript, Node.js y Express."
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
      { name: "JavaScript", icon: "js" }, // Cuando tenga más proyecto con TypeScript, esta se va.
      { name: "TypeScript", icon: "ts" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      //{ name: "React Native", icon: "reactnative" }, // Hasta 'EventGallery', no se escribe. Falta el logo.
      //{ name: "Expo", icon: "expo" }, // Hasta 'EventGallery', no se escribe. Falta el logo.
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
      //{ name: "cloudflare", icon: "cloudflare" }, // Hasta 'EventGallery', no se escribe. Está bien acá?
    ],
  },
  {
    name: "Databases",
    technologies: [
      { name: "SQL Server", icon: "sqlserver" },
      { name: "Prisma", icon: "prisma" },
      { name: "Redis", icon: "redis" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgres" }, // Hasta saber Supabase, se queda.
      //{ name: "Supabase", icon: "supabase" }, // Hasta que no la utilice, no se pone.
      { name: "TypeORM", icon: "typeorm"}
    ],
  },
  {
    name: "Tools",
    technologies: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Postman", icon: "postman" },
      { name: "Vercel", icon: "vercel" }, // Se supone que esto lo voy a subir ahí.
      //{ name: "Render", icon: "render" },
      { name: "Trello", icon: "trello" }
    ]
  }
]