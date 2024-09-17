// app/components/EventDetails.tsx
import { format } from "date-fns";
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
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{event.title}</DialogTitle>
        <DialogDescription>
          <div className="mt-4">
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
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
      <div className="flex justify-between mt-4">
        <Button variant="outline" onClick={() => toggleStarred(event.id)}>
          {isStarred ? "Unstar" : "Star"}
        </Button>
        <Button onClick={() => toggleAttending(event.id)}>
          {isAttending ? "Cancel Attendance" : "Attend"}
        </Button>
      </div>
    </DialogContent>
  );
}
