import { Card } from "./ui/card";

export function SkillCard({
  icon: Icon,
  title,
  skills,
}: {
  icon: any;
  title: string;
  skills: string[];
}) {
  return (
    <div className="col-span-1 h-full w-full">
      <Card className="h-full p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-md bg-primary text-primary-foreground">
            <Icon className="h-6 w-6" />
          </div>
          <h4>{title}</h4>
        </div>
        <ul className="space-y-3 text-sm">
          {skills.map((skill: string, index: number) => (
            <li key={index} className="flex items-center gap-4">
              <div className="h-1.5 w-1.5 bg-primary"></div>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
