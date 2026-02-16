import type { Experience, TechCategory } from "../types";

export const experience: Experience[] = [
    {
      id: 1,
      position: "Full Stack Developer",
      company: "Yoizen",
      period: "Jan 2023 - Jul 2024",
      description: "Desarrollo de aplicaciones web utilizando React y Node.js. Implementación de APIs RESTful y gestión de bases de datos."
    },
    {
      id: 2,
      position: "Backend Developer",
      company: "Wirsolut",
      period: "Oct 2022 - Dec 2022",
      description: "Creación de interfaces de usuario responsivas. Optimización de rendimiento y experiencia de usuario."
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