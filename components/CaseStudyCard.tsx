import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

export interface CaseStudyProps {
  title: string;
  category: string;
  patternBadge: string;
  overview: string;
  patterns: string[];
  techStack: string[];
  className?: string;
}

export function CaseStudyCard({
  title,
  category,
  patternBadge,
  overview,
  patterns,
  techStack,
  className,
}: CaseStudyProps) {
  return (
    <Card className={cn("flex h-full flex-col p-6", className)}>
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {category}
          </span>
        </div>
        <Badge variant="outline" className="font-mono text-xs">
          {patternBadge}
        </Badge>
      </div>

      <h3 className="mb-3">{title}</h3>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {overview}
      </p>

      <div className="mb-6 flex-grow space-y-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
          Core Architectural Patterns
        </h4>
        <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4">
          {patterns.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-dashed">
        {techStack.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
