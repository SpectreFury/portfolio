import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
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
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 pt-16">
      <SectionHeading index="02" title="projects" />
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-base">{project.title}</CardTitle>
                <Button asChild variant="ghost" size="icon" className="h-8 w-8 shrink-0" aria-label={`${project.title} on GitHub`}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon />
                  </a>
                </Button>
              </div>
              <CardDescription className="font-mono text-xs">
                {project.period}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground marker:text-primary">
                {project.description.map((line) => (
                  <li key={line.slice(0, 32)}>{line}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-mono text-[11px]">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" size="sm" className="font-mono text-xs">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
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
        more on <a className="text-primary hover:underline" href="https://github.com/SpectreFury" target="_blank" rel="noopener noreferrer">github.com/SpectreFury</a>
      </p>
    </section>
  );
}
