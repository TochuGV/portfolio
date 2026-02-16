export interface TechItem {
  name: string;
  icon: string;
}

export interface TechCategory {
  name: string;
  technologies: TechItem[];
}

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