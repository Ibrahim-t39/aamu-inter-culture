import { format } from "date-fns";
import { aamuColors, eventColors } from "../lib/constant/constant";
import { Event } from "./types";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface EventDetailsProps {
  event: Event;
  isStarred: boolean;
  isAttending: boolean;
  toggleStarred: (id: number) => void;
  toggleAttending: (id: number) => void;
}

export function EventDetails({
  event,
  isStarred,
  isAttending,
  toggleStarred,
  toggleAttending,
}: EventDetailsProps) {
  const eventColor = eventColors[event.category] || eventColors.default;

  return (
    <DialogContent
      className="sm:max-w-[425px]"
      style={{ borderTop: `4px solid ${eventColor}` }}
    >
      <DialogHeader>
        <DialogTitle
          className="text-2xl font-bold"
          style={{ color: aamuColors.primary }}
        >
          {event.title}
        </DialogTitle>
        <DialogDescription>
          <div className="mt-4 space-y-2">
            <p>
              <strong>Date:</strong> {format(event.date, "MMMM d, yyyy")}
            </p>
            <p>
              <strong>Time:</strong> {event.time}
            </p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            <p>
              <strong>Organizer:</strong> {event.organizer}
            </p>
            <p>
              <strong>Description:</strong> {event.description}
            </p>
            <p>
              <strong>Dress Code:</strong> {event.dresscode}
            </p>
            <p>
              <strong>Food Served:</strong> {event.foodServed ? "Yes" : "No"}
            </p>
            <div className="mt-4">
              <strong>Tags:</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                {event.tags.map((tag: string) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    style={{
                      backgroundColor: `${eventColor}40`,
                      color: aamuColors.primary,
                    }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
      <div className="flex justify-between mt-4">
        <Button
          variant="outline"
          onClick={() => toggleStarred(event.id)}
          style={{
            borderColor: aamuColors.primary,
            color: isStarred ? "white" : aamuColors.primary,
            backgroundColor: isStarred ? aamuColors.primary : "transparent",
          }}
        >
          {isStarred ? "Unstar" : "Star"}
        </Button>
        <Button
          onClick={() => toggleAttending(event.id)}
          style={{
            borderColor: aamuColors.secondary,
            color: isAttending ? "white" : aamuColors.secondary,
            backgroundColor: isAttending ? aamuColors.secondary : "transparent",
          }}
        >
          {isAttending ? "Cancel Attendance" : "Attend"}
        </Button>
      </div>
    </DialogContent>
  );
}
