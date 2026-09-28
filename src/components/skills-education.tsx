import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/experience";
import { skills } from "@/lib/data";

export function Skills() {
  return (
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
  );
}
