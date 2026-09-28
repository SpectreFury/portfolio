import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/experience";
import { education, skills } from "@/lib/data";

export function SkillsEducation() {
  return (
    <>
      <section id="skills" className="scroll-mt-20 pt-16">
        <SectionHeading index="03" title="skills" />
        <Card>
          <CardContent className="space-y-5 pt-6">
            {skills.map((group) => (
              <div key={group.label}>
                <p className="mb-2 font-mono text-xs text-muted-foreground">
                  {group.label.toLowerCase()}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Badge key={item} variant="outline" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section id="education" className="scroll-mt-20 pt-16">
        <SectionHeading index="04" title="education" />
        <Card>
          <CardHeader className="flex flex-row items-start gap-3 space-y-0 pb-2">
            <span className="rounded-md bg-secondary p-2">
              <GraduationCap className="h-4 w-4 text-primary" />
            </span>
            <div className="flex w-full flex-wrap items-baseline justify-between gap-2">
              <p className="font-semibold leading-tight">{education.school}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {education.score}
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="pl-11 text-sm text-muted-foreground">
              {education.degree}
            </p>
            <p className="pl-11 font-mono text-xs text-muted-foreground">
              {education.period}
            </p>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
