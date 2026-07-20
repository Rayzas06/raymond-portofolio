import transportImg from "../assets/projects/transport.jpg";
import jokoImg from "../assets/projects/joko.jpg";
import blessingKostImg from "../assets/projects/blessingkost.jpg";

import htmlCssIcon from "../assets/skills/html5.svg";
import javaIcon from "../assets/skills/java.svg";
import typescriptIcon from "../assets/skills/typescript.svg";
import javascriptIcon from "../assets/skills/javascript.svg";
import nodejsIcon from "../assets/skills/nodejs.svg";
import reactIcon from "../assets/skills/React_dark.svg";
import nextjsIcon from "../assets/skills/nextjs_icon_dark.svg";
import pythonIcon from "../assets/skills/python.svg";
import reactNativeIcon from "../assets/skills/react_dark_native.svg";
import kotlinIcon from "../assets/skills/kotlin.svg";
import phpIcon from "../assets/skills/php_dark.svg";
import mysqlIcon from "../assets/skills/mysql-icon-dark.svg";
import postgresqlIcon from "../assets/skills/postgresql.svg";
import sqliteIcon from "../assets/skills/sqlite.svg";
import mongodbIcon from "../assets/skills/mongodb-icon-dark.svg";
import supabaseIcon from "../assets/skills/supabase.svg";
import firebaseIcon from "../assets/skills/firebase.svg";
import n8nIcon from "../assets/skills/n8n.svg";
import mastraIcon from "../assets/skills/mistral-ai_logo.svg";
import aiSdkIcon from "../assets/skills/AISDK.png";
import codeIgniterIcon from "../assets/skills/CodeIgniter.svg";
import laravelIcon from "../assets/skills/laravel.svg";
import figmaIcon from "../assets/skills/figma.svg";
import githubIcon from "../assets/skills/github_light.svg";
import dockerIcon from "../assets/skills/docker.svg";
import cloudflareIcon from "../assets/skills/cloudflare.svg";
import vercelIcon from "../assets/skills/vercel_dark.svg";
import sentryIcon from "../assets/skills/sentry.svg";
import googleCloudIcon from "../assets/skills/google-cloud.svg";
import jiraIcon from "../assets/skills/jira.svg";
import rabbitmqIcon from "../assets/skills/rabbitmq.svg";
import kubernetesIcon from "../assets/skills/kubernetes.svg";

import githubLogo from "../assets/skills/github_light.svg";
import gmailLogo from "../assets/Profile/Gmail.png";
import linkedinLogo from "../assets/Profile/linkedin.svg";
import phoneLogo from "../assets/Profile/Phone.svg";

export const profile = {
  name: "Raymond Divian Nathaniel",
  role: "Full-Stack Developer",
  location: "Jakarta, Indonesia",
  email: "raymond4114p@gmail.com",
  phone: "+62 823-7379-4242",
  github: "https://github.com/Rayzas06",
  linkedin: "https://www.linkedin.com/in/raymond-divian-nathaniel-212459321/",
  gpa: "3.86 / 4.00",
};

export const contactIcons = {
  github: githubLogo,
  gmail: gmailLogo,
  linkedin: linkedinLogo,
  phone: phoneLogo,
};

export const education = {
  school: "Universitas Pembangunan Nasional \"Veteran\" Jakarta",
  degree: "Bachelor's Degree, Computer Science — Information Systems",
  period: "2024 — Present",
  gpa: "3.86 / 4.00",
};

export const experience = [
  {
    title: "KSM Multimedia — Graphic Design Member",
    period: "June 2026 — Present",
    desc: "Studying design principles, typography, and digital asset creation applied to software interfaces.",
  },
];

export type Project = {
  id: string;
  title: string;
  period: string;
  status: "live" | "wip";
  stack: string[];
  points: string[];
  link: string;
  image: string;
  orientation: "landscape" | "portrait";
};

export const projects: Project[] = [
  {
    id: "transport",
    title: "Smart Public Transport Platform",
    period: "May – Jul 2026",
    status: "live",
    stack: ["CodeIgniter4", "PHP 8.2", "MySQL", "RabbitMQ", "Kubernetes"],
    points: [
      "12+ REST API endpoints untuk ticketing, real-time crowd monitoring, dan integrasi IoT.",
      "Event-driven architecture RabbitMQ dengan 3 background consumer untuk notifikasi real-time.",
      "Tim 6 orang, deploy di Kubernetes.",
    ],
    link: "https://github.com/anggasspm/smart-transport-platform",
    image: transportImg,
    orientation: "landscape",
  },
  {
    id: "joko",
    title: "JoKo — Student Team Finder & Event Hub",
    period: "May – Jun 2026",
    status: "wip",
    stack: ["Kotlin Native", "XML Layout", "Material Design 3"],
    points: [
      "UI/UX lengkap di 13 activity dan 10 fragment dengan Material Design 3.",
      "14 custom card layout, chip-input fragment, dark-theme design system.",
      "Tim 3 orang.",
    ],
    link: "https://github.com/wooffyy/joko-app",
    image: jokoImg,
    orientation: "portrait",
  },
  {
    id: "blessingkost",
    title: "BlessingKost — Boarding House Management",
    period: "Jul 2026 – Present",
    status: "live",
    stack: ["React", "Supabase", "Tailwind CSS"],
    points: [
      "Full-stack system (public site + admin panel) pakai React + Supabase.",
      "5 modul CRUD (rooms, gallery, facilities, testimonials, settings) dengan row-level security & real-time sync via React Query.",
      "Fixed bug kritis: data statis basi jadi data live dari database.",
    ],
    link: "https://blessing-kost.vercel.app/",
    image: blessingKostImg,
    orientation: "landscape",
  },
];

export const skills = {
  Languages: ["HTML/CSS", "Java", "TypeScript", "JavaScript", "Node.js", "React", "Next.js", "Python", "React Native", "Kotlin", "PHP"],
  "Database & Cloud": ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Supabase", "Firebase"],
  Frameworks: ["n8n", "Mastra", "AI SDK", "CodeIgniter 4", "Laravel"],
  "Tools & DevOps": ["Figma", "Git/GitHub", "Docker", "Cloudflare", "Vercel", "Sentry", "Google Cloud", "Jira", "RabbitMQ", "Kubernetes"],
  "Soft Skills": ["Communication", "Problem Solving", "Team Collaboration", "Adaptability", "Project Management", "Creativity", "Attention to Detail"],
};

export const skillIcons: Record<string, string> = {
  "HTML/CSS": htmlCssIcon,
  Java: javaIcon,
  TypeScript: typescriptIcon,
  JavaScript: javascriptIcon,
  "Node.js": nodejsIcon,
  React: reactIcon,
  "Next.js": nextjsIcon,
  Python: pythonIcon,
  "React Native": reactNativeIcon,
  Kotlin: kotlinIcon,
  PHP: phpIcon,
  MySQL: mysqlIcon,
  PostgreSQL: postgresqlIcon,
  SQLite: sqliteIcon,
  MongoDB: mongodbIcon,
  Supabase: supabaseIcon,
  Firebase: firebaseIcon,
  n8n: n8nIcon,
  Mastra: mastraIcon,
  "AI SDK": aiSdkIcon,
  "CodeIgniter 4": codeIgniterIcon,
  Laravel: laravelIcon,
  Figma: figmaIcon,
  "Git/GitHub": githubIcon,
  Docker: dockerIcon,
  Cloudflare: cloudflareIcon,
  Vercel: vercelIcon,
  Sentry: sentryIcon,
  "Google Cloud": googleCloudIcon,
  Jira: jiraIcon,
  RabbitMQ: rabbitmqIcon,
  Kubernetes: kubernetesIcon,
};