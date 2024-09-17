import { tags } from "../lib/constant/constant";
import { Badge } from "./ui/badge";

interface EventTagsProps {
  selectedTags: string[];
  toggleTag: (tag: string) => void;
}

export function EventTags({ selectedTags, toggleTag }: EventTagsProps) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Filter by Tags:</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant={selectedTags.includes(tag) ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
