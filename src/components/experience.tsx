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
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        {experience.map((job, i) => (
          <div
            key={job.company}
            className={
              "p-5 sm:p-6" + (i > 0 ? " border-t border-border" : "")
            }
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="font-semibold leading-tight">
                {job.role}{" "}
                <span className="font-normal text-gruv-blue">
                  @ {job.company}
                </span>
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {job.period}
              </p>
            </div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {job.summary}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {job.stack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="font-mono text-[11px]"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
