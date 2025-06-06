import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink } from 'lucide-react'; // Example icon

interface ProjectShowcaseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  liveLink?: string; // Link to live project
  repoLink?: string; // Link to repository
  onViewDetailsClick: () => void; // To trigger a dialog, for example
}

const ProjectShowcaseCard: React.FC<ProjectShowcaseCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  // liveLink, // Could be used by the "View Details" dialog
  // repoLink,
  onViewDetailsClick,
}) => {
  console.log("Rendering ProjectShowcaseCard:", title);

  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <CardHeader className="p-0">
        <AspectRatio ratio={16 / 9}>
          <img
            src={imageUrl || '/placeholder.svg'}
            alt={title}
            className="object-cover w-full h-full"
            onError={(e) => { e.currentTarget.src = '/placeholder.svg'; }}
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
          {description}
        </CardDescription>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={onViewDetailsClick}>
          View Details
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectShowcaseCard;