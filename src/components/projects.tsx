import Image from "next/image";
import { ArrowUpRight, Clapperboard } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/experience";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 pt-16">
      <SectionHeading index="02" title="projects" />
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden">
            {project.image ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[16/10] overflow-hidden border-b border-border"
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? `${project.title} preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </a>
            ) : (
              <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 border-b border-dashed border-border bg-secondary/40 text-muted-foreground">
                <Clapperboard className="h-6 w-6 text-primary" />
                <p className="font-mono text-xs">preview coming soon</p>
              </div>
            )}
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-base">{project.title}</CardTitle>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 shrink-0"
                  aria-label={`${project.title} on GitHub`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon />
                  </a>
                </Button>
              </div>
              <CardDescription className="font-mono text-xs">
                {project.period}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm leading-6 text-muted-foreground">
                {project.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="font-mono text-[11px]"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="font-mono text-xs"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                  Code
                  <ArrowUpRight />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <p className="mt-4 font-mono text-xs text-muted-foreground">
        more on{" "}
        <a
          className="text-primary hover:underline"
          href="https://github.com/SpectreFury"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/SpectreFury
        </a>
      </p>
    </section>
  );
}
