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
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Development Engineer",
    company: "Cointab Software Pvt Ltd",
    location: "Mumbai, MH",
    period: "September 2025 – April 2026",
    points: [
      "Engineered an AI-driven financial reconciliation platform using distributed systems and asynchronous workers, resulting in 50% reduction in reconciliation time.",
      "Architected a high-throughput, custom-built Node.js queuing system to process parallel reconciliations with fault tolerance, integrating backend services with Next.js to optimize data fetching performance.",
      "Built a suite of developer tools to streamline the SDLC using automated code review and analysis tools.",
      "Deployed and managed containerized applications using Docker, integrating PostgreSQL for reliable data persistence and AWS S3 for highly available object storage.",
    ],
    stack: ["Node.js", "Next.js", "PostgreSQL", "AWS S3", "Docker"],
  },
  {
    role: "Software Development Engineer",
    company: "Veramasa",
    location: "Bhopal, MP",
    period: "July 2025 – September 2025",
    points: [
      "Developed high-performance cross-platform applications for Android and iOS using React Native and Expo.",
      "Architected scalable global state management using Redux Toolkit and Zustand, optimizing persistence and reducing component re-renders.",
      "Transitioned from React Native Bare to Expo, eliminating legacy native code overhead and accelerating release cycles using EAS.",
      "Managed end-to-end deployment pipeline to Google Play Store and Apple App Store, managing keystores and app signing certificates.",
    ],
    stack: ["React Native", "Expo", "Redux Toolkit", "Zustand", "EAS"],
  },
  {
    role: "Software Developer Intern",
    company: "Zappian",
    location: "Bhopal, MP",
    period: "June 2023 – December 2023",
    points: [
      "Built high-performance loan aggregation platform with React and Express, streamlining on-boarding and dynamic plan recommendations.",
      "Implemented context for global state management, reducing component re-renders and avoiding prop drilling.",
      "Developed an AI powered tool helping non-technical team execute SQL database queries in natural language.",
    ],
    stack: ["React", "Express", "SQL", "AI"],
  },
];

export type Project = {
  title: string;
  period: string;
  description: string[];
  stack: string[];
  github: string;
};

export const projects: Project[] = [
  {
    title: "Distributed Video Streaming",
    period: "June 2026 – July 2026",
    description: [
      "Engineered a distributed video streaming platform using FFmpeg to transcode videos into HLS playlists for adaptive bitrate streaming.",
      "Developed a task queue system using BullMQ, offloading video processing to workers, maintaining low latency and fault tolerance.",
    ],
    stack: ["Next.js", "MongoDB", "Node.js", "BullMQ", "Docker", "FFmpeg"],
    github: "https://github.com/SpectreFury",
  },
  {
    title: "AskPDF",
    period: "July 2026 – August 2026",
    description: [
      "Built a full-stack document intelligence platform utilizing Retrieval-Augmented Generation (RAG), enabling real-time QnA with user-uploaded documents.",
      "Architected an asynchronous task processing pipeline using FastAPI and Celery to handle heavy document chunking and vector embedding workloads, improving server responsiveness.",
    ],
    stack: ["Next.js", "TypeScript", "FastAPI", "Celery", "Python", "PostgreSQL"],
    github: "https://github.com/SpectreFury",
  },
];

export const education = {
  school: "Rajiv Gandhi Proudyogiki Vishwavidhyalaya",
  degree: "Bachelor of Technology, Computer Science & Engineering",
  period: "Aug. 2020 – Aug. 2024",
  score: "CGPA: 8.1/10",
};

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
