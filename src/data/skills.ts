import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    description: "Creating responsive, intuitive, and visually appealing user interfaces",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Javascript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
      { name: "Flutter", level: 98 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    description: "Building robust, scalable server-side applications and APIs",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "Typescript", level: 80 },
      { name: "Javascript", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 82 },
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    description: "Managing deployment, CI/CD, and infrastructure automation",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Azure CLI", level: 92 },
      { name: "GitHub Actions", level: 80 },
      { name: "Render", level: 78 },
      { name: "Vercel", level: 88 },
      { name: "Railway", level: 85 },
    ],
  },
  {
    id: "data",
    name: "Data & AI",
    description: "Leveraging data analytics and AI for intelligent solutions",
    skills: [
      { name: "PostgreSQL", level: 75 },
      { name: "MsSQL", level: 88 },
      { name: "Data Visualization", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "Firebase", level: 85 },
      { name: "Sequelize", level: 72 },
    ],
  },
];
