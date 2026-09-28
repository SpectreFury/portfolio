import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/data";

export function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <h2 className="mb-6 font-mono text-sm tracking-tight">
      <span className="text-primary">{index}</span>
      <span className="text-muted-foreground"> ~/</span>
      <span>{title}</span>
    </h2>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 pt-16">
      <SectionHeading index="01" title="experience" />
      <div className="space-y-4">
        {experience.map((job) => (
          <Card key={`${job.company}-${job.period}`}>
            <CardHeader className="pb-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="font-semibold leading-tight">{job.role}</p>
                  <p className="mt-1 text-sm text-gruv-blue">
                    {job.company} · {job.location}
                  </p>
                </div>
                <p className="font-mono text-xs text-muted-foreground">
                  {job.period}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground marker:text-primary">
                {job.points.map((point) => (
                  <li key={point.slice(0, 32)}>{point}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-mono text-[11px]">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
