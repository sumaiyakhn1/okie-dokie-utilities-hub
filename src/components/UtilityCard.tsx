import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface UtilityCardProps {
  title: string;
  description: string;
  url: string;
  delay?: number;
}

export const UtilityCard = ({ title, description, url, delay = 0 }: UtilityCardProps) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 shadow-card border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in">
        <CardHeader>
          <CardTitle className="flex items-start justify-between gap-2 text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
            <span>{title}</span>
            <ExternalLink className="h-5 w-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </a>
  );
};
