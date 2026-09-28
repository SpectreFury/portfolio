import Image from "next/image";
import {
  ArrowUpRight,
  Clapperboard,
  FileText,
  Mail,
  MapPin,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { experience, profile, projects, skills } from "@/lib/data";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-1 font-mono text-tiny text-muted-foreground">
      <span className="text-primary">~/</span>
      {children}
    </p>
  );
}

const links = [
  { label: "github.com/SpectreFury", href: profile.github, Icon: GithubIcon },
  {
    label: "linkedin.com/in/ayushsoni2212",
    href: profile.linkedin,
    Icon: LinkedinIcon,
  },
];

const chip = "font-mono text-tiny px-1.5 py-0";

export function Bento() {
  const [askPdf, streaming] = projects;

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-3 pb-4 pt-3 lg:min-h-0 lg:overflow-hidden">
      <div className="grid flex-1 grid-cols-1 gap-cell lg:min-h-0 lg:grid-cols-12 lg:grid-rows-[minmax(0,0.95fr)_minmax(0,1.05fr)_minmax(0,1.5fr)]">
        {/* About: wide board */}
        <Card
          id="about"
          className="flex scroll-mt-20 flex-col pad-cell lg:col-span-7 lg:min-h-0 lg:overflow-hidden"
        >
          <Eyebrow>about</Eyebrow>
          <h1 className="text-title font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-0.5 font-mono text-micro font-semibold text-primary">
            {profile.role}
          </p>
          <p className="mt-1.5 text-lead text-muted-foreground">
            {profile.tagline}
          </p>
        </Card>

        {/* Status and links: narrow side board */}
        <Card className="flex flex-col pad-cell lg:col-span-5 lg:min-h-0 lg:overflow-hidden">
          <div className="flex items-start justify-between gap-2">
            <Eyebrow>status</Eyebrow>
            <ModeToggle className="-mt-0.5 h-7 w-7 shrink-0" />
          </div>
          <p className="flex items-center gap-1.5 text-cell font-medium">
            <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gruv-green" />
            open to opportunities
          </p>
          <p className="mt-0.5 flex items-center gap-1.5 font-mono text-tiny text-muted-foreground">
            <MapPin className="h-3 w-3 shrink-0" />
            {profile.location}
          </p>
          <p className="mt-1.5 font-mono text-tiny text-muted-foreground">
            <span className="text-foreground">now</span> · debugging in neovim rn{" "}
            <span className="animate-pulse text-gruv-green motion-reduce:animate-none">
              ▊
            </span>
          </p>
          <div className="mt-auto flex flex-col gap-x-1 pt-2 font-mono text-tiny">
            {links.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center gap-1.5 rounded px-1 py-px text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <Icon className="h-3 w-3 shrink-0" />
                <span className="truncate">{label}</span>
              </a>
            ))}
          </div>
        </Card>

        {/* Work: single wide section with both jobs */}
        <Card
          id="work"
          className="flex scroll-mt-20 flex-col pad-cell lg:col-span-7 lg:min-h-0 lg:overflow-hidden"
        >
          <Eyebrow>work</Eyebrow>
          <div className="flex min-h-0 flex-col divide-y divide-border">
            {experience.map((job) => (
              <div key={job.company} className="py-1.5 first:pt-0 last:pb-0">
                <p className="text-cell font-semibold leading-tight">
                  {job.role}{" "}
                  <span className="font-normal text-gruv-blue">
                    @ {job.company}
                  </span>
                </p>
                <p className="mt-px font-mono text-tiny text-muted-foreground">
                  {job.period} · {job.location}
                </p>
                <p className="mt-1 text-micro text-muted-foreground">
                  {job.summary}
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {job.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className={chip}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Contact: compact square board */}
        <Card
          id="contact"
          className="flex scroll-mt-20 flex-col pad-cell lg:col-span-5 lg:min-h-0 lg:overflow-hidden"
        >
          <Eyebrow>contact</Eyebrow>
          <h2 className="text-head font-bold tracking-tight">
            Let&apos;s build something reliable.
          </h2>
          <p className="mt-1 text-micro text-muted-foreground">
            Email is the fastest way to reach me. I usually reply within a day.
          </p>
          <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-3">
            <Button
              asChild
              size="lg"
              className="flex-1 justify-start bg-gruv-green text-cell text-[#1d2021] dark:bg-gruv-yellow"
            >
              <a href={`mailto:${profile.email}`}>
                <Mail />
                Get in touch
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-cell"
            >
              <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                <FileText />
                Resume
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </Card>

        {/* Projects: single section with both projects */}
        <Card
          id="projects"
          className="flex scroll-mt-20 flex-col pad-cell lg:col-span-8 lg:min-h-0 lg:overflow-hidden"
        >
          <Eyebrow>projects</Eyebrow>
          <div className="grid min-h-0 flex-1 gap-4 sm:grid-cols-2">
            {/* AskPDF */}
            <div className="flex min-w-0 flex-col">
              {askPdf.image && (
                <a
                  href={askPdf.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[16/9] shrink-0 overflow-hidden rounded-md border border-border"
                >
                  <Image
                    src={askPdf.image}
                    alt={askPdf.imageAlt ?? `${askPdf.title} preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
              )}
              <div className="mt-1.5 flex items-start justify-between gap-1.5">
                <p className="min-w-0 truncate text-cell font-semibold leading-tight">
                  {askPdf.title}
                </p>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 shrink-0"
                  aria-label={`${askPdf.title} on GitHub`}
                >
                  <a href={askPdf.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-3 w-3" />
                  </a>
                </Button>
              </div>
              <p className="mt-1 text-micro text-muted-foreground">
                {askPdf.blurb}
              </p>
              <div className="mt-auto flex flex-wrap gap-1 pt-1.5">
                {askPdf.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className={chip}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Streaming */}
            <div className="flex min-w-0 flex-col border-t border-dashed border-border pt-3 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
              <div className="flex flex-row items-center justify-center gap-1.5 rounded-md border border-dashed border-border bg-secondary/40 px-2 py-6 text-muted-foreground">
                <Clapperboard className="h-3.5 w-3.5 shrink-0 text-primary" />
                <p className="font-mono text-tiny">preview coming soon</p>
              </div>
              <div className="mt-1.5 flex items-start justify-between gap-1.5">
                <p className="min-w-0 truncate text-cell font-semibold leading-tight">
                  {streaming.title}
                </p>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 shrink-0"
                  aria-label={`${streaming.title} on GitHub`}
                >
                  <a href={streaming.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-3 w-3" />
                  </a>
                </Button>
              </div>
              <p className="mt-1 text-micro text-muted-foreground">
                {streaming.blurb}
              </p>
              <div className="mt-auto flex flex-wrap gap-1 pt-1.5">
                {streaming.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className={chip}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Skills: narrow side board that fills the full row height */}
        <Card
          id="skills"
          className="flex scroll-mt-20 flex-col pad-cell lg:col-span-4 lg:min-h-0 lg:overflow-hidden"
        >
          <Eyebrow>skills</Eyebrow>
          <div className="grid min-h-0 flex-1 auto-rows-fr gap-1.5 sm:grid-cols-2 lg:grid-cols-1">
            {skills.map((group) => (
              <div
                key={group.label}
                className="flex min-h-0 min-w-0 flex-col justify-center overflow-hidden rounded-lg border border-border bg-secondary/30 p-1.5"
              >
                <p className="mb-1 font-mono text-tiny text-muted-foreground">
                  {group.label.toLowerCase()}
                </p>
                <div className="flex flex-wrap gap-1">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="px-1.5 py-0 text-tiny"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <footer className="mt-2 flex shrink-0 flex-wrap items-center justify-between gap-x-3 gap-y-1 px-0.5 font-mono text-tiny text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          <span className="text-primary">gruvbox</span> · next.js · shadcn
        </p>
      </footer>
    </main>
  );
}
