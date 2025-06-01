import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function SkillCard({
  icon: Icon,
  title,
  skills,
}: {
  icon: any;
  title: string;
  skills: { name: string; category: string }[];
}) {
  return (
    <div className="col-span-1 h-full w-full">
      <Card className="h-full p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-10 w-10 grid place-items-center rounded-md bg-primary text-primary-foreground">
            <Icon className="h-6 w-6" />
          </div>
          <h4>{title}</h4>
        </div>
        <ul className="space-y-2 text-sm">
          {skills.map(
            (skill: { name: string; category: string }, index: number) => (
              <div
                key={index}
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-secondary-foreground">
                    {skill.name}
                  </p>
                </div>
                <Badge variant="secondary" className={`text-xs flex-shrink-0`}>
                  {skill.category}
                </Badge>
              </div>
            )
          )}
        </ul>
      </Card>
    </div>
  );
}
