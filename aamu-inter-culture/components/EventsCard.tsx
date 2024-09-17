import { format } from "date-fns";
import { AlertCircle, Cake, MapPin, School, Star, Users } from "lucide-react";
import { aamuColors, eventColors, eventIcons } from "../lib/constant/constant";
import { cn } from "../lib/utils/utils";
import { EventDetails } from "./EventDetails";
import { Event } from "./types";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dialog, DialogTrigger } from "./ui/dialog";

interface EventCardProps {
  event: Event;
  isStarred: boolean;
  isAttending: boolean;
  toggleStarred: (id: number) => void;
  toggleAttending: (id: number) => void;
}

export function EventCard({
  event,
  isStarred,
  isAttending,
  toggleStarred,
  toggleAttending,
}: EventCardProps) {
  const IconComponent = eventIcons[event.icon];
  const eventColor = eventColors[event.category] || eventColors.default;

  return (
    <Card
      className="flex flex-col"
      style={{ borderTop: `4px solid ${eventColor}` }}
    >
      <CardHeader style={{ backgroundColor: `${eventColor}20` }}>
        <div className="flex justify-between items-start">
          <CardTitle className="text-[#660000]">{event.title}</CardTitle>
          <IconComponent className="h-6 w-6 text-gray-400" />
        </div>
        <CardDescription>{format(event.date, "MMMM d, yyyy")}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p>{event.description}</p>
        <div className="mt-4 flex items-center space-x-2 text-sm text-gray-500">
          <MapPin className="h-4 w-4" />
          <span>{event.location}</span>
        </div>
        <div className="mt-2 flex items-center space-x-2 text-sm text-gray-500">
          <Users className="h-4 w-4" />
          <span>{event.attendees} attendees</span>
        </div>
        <div className="mt-2 flex items-center space-x-2 text-sm text-gray-500">
          <School className="h-4 w-4" />
          <span>Organized by: {event.organizer}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
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
      </CardContent>
      <CardFooter
        className="flex flex-wrap justify-between items-center gap-2"
        style={{ backgroundColor: `${eventColor}10` }}
      >
        <Badge style={{ backgroundColor: eventColor, color: "white" }}>
          {event.category}
        </Badge>
        <div className="flex gap-2">
          {event.isKeyEvent && (
            <Star className="h-4 w-4 text-yellow-500" aria-label="Key Event" />
          )}
          {event.isMandatory && (
            <AlertCircle
              className="h-4 w-4 text-red-500"
              aria-label="Mandatory Event"
            />
          )}
          {event.category === "Birthday" && (
            <Cake className="h-4 w-4 text-pink-500" aria-label="Birthday" />
          )}
        </div>
        <div className="flex gap-2">
          <Button
            variant={isStarred ? "secondary" : "outline"}
            size="sm"
            onClick={() => toggleStarred(event.id)}
            style={{
              borderColor: aamuColors.primary,
              color: isStarred ? "white" : aamuColors.primary,
              backgroundColor: isStarred ? aamuColors.primary : "transparent",
            }}
          >
            <Star
              className={cn("h-4 w-4 mr-1", isStarred ? "fill-current" : "")}
            />
            {isStarred ? "Starred" : "Star"}
          </Button>
          <Button
            variant={isAttending ? "secondary" : "outline"}
            size="sm"
            onClick={() => toggleAttending(event.id)}
            style={{
              borderColor: aamuColors.secondary,
              color: isAttending ? "white" : aamuColors.secondary,
              backgroundColor: isAttending
                ? aamuColors.secondary
                : "transparent",
            }}
          >
            {isAttending ? "Attending" : "Attend"}
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                style={{
                  borderColor: aamuColors.primary,
                  color: aamuColors.primary,
                }}
              >
                Details
              </Button>
            </DialogTrigger>
            <EventDetails
              event={event}
              isStarred={isStarred}
              isAttending={isAttending}
              toggleStarred={toggleStarred}
              toggleAttending={toggleAttending}
            />
          </Dialog>
        </div>
      </CardFooter>
    </Card>
  );
}
