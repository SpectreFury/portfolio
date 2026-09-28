import { ArrowUpRight, Globe, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "@/components/experience";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 pt-16">
      <SectionHeading index="04" title="contact" />
      <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
        <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
          Let&apos;s build something reliable.
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
          I&apos;m currently open to Software Development Engineer roles. The
          fastest way to reach me is email. I usually reply within a day.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button asChild>
            <a href={`mailto:${profile.email}`}>
              <Mail />
              {profile.email}
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={profile.website} target="_blank" rel="noopener noreferrer">
              <Globe />
              {profile.websiteLabel}
              <ArrowUpRight />
            </a>
          </Button>
        </div>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground">
          <a className="inline-flex items-center gap-1.5 hover:text-foreground" href={profile.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon className="h-3.5 w-3.5" /> github.com/SpectreFury
          </a>
          <a className="inline-flex items-center gap-1.5 hover:text-foreground" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="h-3.5 w-3.5" /> linkedin.com/in/ayushsoni2212
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="pb-10 pt-12">
      <Separator className="mb-6" />
      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name} ·{" "}
          <a href={profile.website} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline-offset-4 hover:underline">
            {profile.websiteLabel}
          </a>
        </p>
        <p>
          <span className="text-primary">gruvbox</span> · next.js · shadcn
        </p>
      </div>
    </footer>
  );
}
