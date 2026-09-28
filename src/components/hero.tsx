import { ArrowUpRight, FileText, Globe, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/lib/data";

const socials = [
  { label: "GitHub", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
  { label: "Website", href: profile.website, icon: Globe },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export function Hero() {
  return (
    <section id="top" className="pt-14 sm:pt-20">
      <Badge variant="secondary" className="mb-5 font-mono text-xs">
        <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-gruv-green" />
        open to opportunities
      </Badge>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-2 font-mono text-sm font-semibold text-primary sm:text-base">
        {profile.role}
      </p>

      <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
        {profile.tagline}
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Button asChild>
          <a href={`mailto:${profile.email}`}>
            <Mail />
            Get in touch
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={profile.resume} target="_blank" rel="noopener noreferrer">
            <FileText />
            Resume
            <ArrowUpRight />
          </a>
        </Button>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-2">
        {socials.map(({ label, href, icon: Icon }) => (
          <Button key={label} asChild variant="ghost" size="sm" className="font-mono text-xs text-muted-foreground hover:text-foreground">
            <a
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
            >
              <Icon />
              {label === "Website" ? profile.websiteLabel : label}
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
}
