export const profile = {
  name: "Ayush Soni",
  role: "Software Development Engineer",
  tagline:
    "A dev with love for all aspects of computer science. I love learning new technologies in my free time and making projects. I'm well versed with full stack development with multiple projects that are live and at scale.",
  location: "India",
  email: "soni.ayush.2212@gmail.com",
  website: "https://spectrefury.in",
  websiteLabel: "spectrefury.in",
  github: "https://github.com/SpectreFury",
  linkedin: "https://linkedin.com/in/ayushsoni2212",
  resume:
    "https://drive.google.com/file/d/1fETcOlJkqq_QtI35WV6LB36El9bDSNdL/view?usp=sharing",
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
    period: "Sep 2025 to Apr 2026",
    summary:
      "AI-driven financial reconciliation platform with distributed async workers, custom queuing and containerized deploys.",
    stack: ["Node.js", "Next.js", "PostgreSQL", "AWS S3", "Docker"],
  },
  {
    role: "Software Development Engineer",
    company: "Veramasa",
    location: "Bhopal, MP",
    period: "Jul 2025 to Sep 2025",
    summary:
      "Cross-platform mobile apps shipped to both app stores, covering Expo migration, global state and store pipelines.",
    stack: ["React Native", "Expo", "Redux Toolkit", "Zustand", "EAS"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  stack: string[];
  github: string;
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    title: "AskPDF",
    blurb:
      "Document intelligence with RAG for real-time QnA over uploads, with async chunking and embeddings using FastAPI and Celery.",
    stack: ["Next.js", "TypeScript", "FastAPI", "Celery", "PostgreSQL"],
    github: "https://github.com/SpectreFury/askpdf",
    image: "/pdf-qa-workspace.png",
    imageAlt: "AskPDF document QnA workspace preview",
  },
  {
    title: "Distributed Video Streaming",
    blurb:
      "Adaptive HLS streaming with FFmpeg transcoding fanned out to BullMQ workers for low-latency, fault-tolerant processing.",
    stack: ["Next.js", "Node.js", "MongoDB", "BullMQ", "Docker"],
    github: "https://github.com/SpectreFury/youtube-streaming",
    image: "/streaming-app.png",
    imageAlt: "Distributed video streaming app preview",
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
