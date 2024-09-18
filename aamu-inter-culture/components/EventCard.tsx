import { format } from "date-fns";
import {
  AlertCircle,
  Cake,
  LucideIcon,
  MapPin,
  School,
  Star,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { eventIcons } from "../lib/constant/constant";
import { cn } from "../lib/utils/utils";
import { EventDetails } from "./EventDetails";
import { Event } from "./types";
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
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent: LucideIcon =
    eventIcons[event.icon as keyof typeof eventIcons] || eventIcons.default;

  return (
    <Card
      className="flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#66000040] to-[#99000040] opacity-75 transition-opacity duration-300 ease-in-out" />
      <CardHeader className="relative z-10">
        <div className="flex justify-between items-start">
          <CardTitle className="text-[#660000] font-bold">
            {event.title}
          </CardTitle>
          <IconComponent
            className={`h-6 w-6 ${
              isHovered ? "text-[#660000]" : "text-gray-600"
            } transition-colors duration-300`}
          />
        </div>
        <CardDescription className="text-gray-700 transition-colors duration-300">
          {format(event.date, "MMMM d, yyyy")}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow relative z-10">
        <p className="text-gray-800 transition-colors duration-300">
          {event.description}
        </p>
        <div className="mt-4 flex items-center space-x-2 text-sm text-gray-700 transition-colors duration-300">
          <MapPin className="h-4 w-4" />
          <span>{event.location}</span>
        </div>
        <div className="mt-2 flex items-center space-x-2 text-sm text-gray-700 transition-colors duration-300">
          <Users className="h-4 w-4" />
          <span>{event.attendees} attendees</span>
        </div>
        <div className="mt-2 flex items-center space-x-2 text-sm text-gray-700 transition-colors duration-300">
          <School className="h-4 w-4" />
          <span>Organized by: {event.organizer}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {event.tags.map((tag: string) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-white/60 text-gray-800 transition-colors duration-300"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-between items-center gap-2 relative z-10">
        <Badge className="bg-[#660000]/80 text-white">{event.category}</Badge>
        <div className="flex gap-2">
          {event.isKeyEvent && (
            <Star className="h-4 w-4 text-yellow-600" aria-label="Key Event" />
          )}
          {event.isMandatory && (
            <AlertCircle
              className="h-4 w-4 text-red-600"
              aria-label="Mandatory Event"
            />
          )}
          {event.category === "Birthday" && (
            <Cake className="h-4 w-4 text-pink-600" aria-label="Birthday" />
          )}
        </div>
        <div className="flex gap-2">
          <Button
            variant={isStarred ? "secondary" : "outline"}
            size="sm"
            onClick={() => toggleStarred(event.id)}
            className={`bg-white/60 text-gray-800 hover:bg-[#660000]/80 hover:text-white transition-colors duration-300`}
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
            className={`bg-white/60 text-gray-800 hover:bg-[#660000]/80 hover:text-white transition-colors duration-300`}
          >
            {isAttending ? "Attending" : "Attend"}
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className={`bg-white/60 text-gray-800 hover:bg-[#660000]/80 hover:text-white transition-colors duration-300`}
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
