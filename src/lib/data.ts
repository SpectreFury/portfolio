export const profile = {
  name: "Ayush Soni",
  role: "Software Development Engineer",
  tagline:
    "I build distributed systems, async pipelines, and full-stack products — from AI reconciliation engines to adaptive video streaming.",
  location: "India",
  email: "soni.ayush.2212@gmail.com",
  phone: "6267212293",
  website: "https://spectrefury.in",
  websiteLabel: "spectrefury.in",
  github: "https://github.com/SpectreFury",
  linkedin: "https://linkedin.com/in/ayushsoni2212",
  resume:
    "https://drive.google.com/file/d/1EIqRpxXy1CmdTufVSQsEKVZ2AzTDYVXt/view?usp=sharing",
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Development Engineer",
    company: "Cointab Software Pvt Ltd",
    location: "Mumbai, MH",
    period: "Sep 2025 – Apr 2026",
    summary:
      "AI-driven financial reconciliation platform — distributed async workers, custom queuing, containerized deploys.",
    stack: ["Node.js", "Next.js", "PostgreSQL", "AWS S3", "Docker"],
  },
  {
    role: "Software Development Engineer",
    company: "Veramasa",
    location: "Bhopal, MP",
    period: "Jul 2025 – Sep 2025",
    summary:
      "Cross-platform mobile apps shipped to both app stores — Expo migration, global state, store pipelines.",
    stack: ["React Native", "Expo", "Redux Toolkit", "Zustand", "EAS"],
  },
];

export type Project = {
  title: string;
  period: string;
  blurb: string;
  stack: string[];
  github: string;
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    title: "AskPDF",
    period: "Jul 2026 – Aug 2026",
    blurb:
      "Document intelligence with RAG — real-time QnA over uploads, async chunking + embeddings via FastAPI + Celery.",
    stack: ["Next.js", "TypeScript", "FastAPI", "Celery", "PostgreSQL"],
    github: "https://github.com/SpectreFury",
    image: "/pdf-qa-workspace.png",
    imageAlt: "AskPDF document QnA workspace preview",
  },
  {
    title: "Distributed Video Streaming",
    period: "Jun 2026 – Jul 2026",
    blurb:
      "Adaptive HLS streaming — FFmpeg transcoding fanned out to BullMQ workers for low-latency, fault-tolerant processing.",
    stack: ["Next.js", "Node.js", "MongoDB", "BullMQ", "Docker"],
    github: "https://github.com/SpectreFury",
  },
];

export const skills: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Go", "C++", "SQL"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Tailwind"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Convex", "Firestore"],
  },
  {
    label: "Cloud & Tools",
    items: ["AWS (S3, EC2)", "BullMQ", "Celery", "Docker"],
  },
];

export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
