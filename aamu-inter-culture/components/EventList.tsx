import { EventCard } from "./EventCard";
import { Event } from "./types";

interface EventListProps {
  events: Event[];
  starredEvents: number[];
  attendingEvents: number[];
  toggleStarred: (id: number) => void;
  toggleAttending: (id: number) => void;
}

export function EventList({
  events,
  starredEvents,
  attendingEvents,
  toggleStarred,
  toggleAttending,
}: EventListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          isStarred={starredEvents.includes(event.id)}
          isAttending={attendingEvents.includes(event.id)}
          toggleStarred={toggleStarred}
          toggleAttending={toggleAttending}
        />
      ))}
    </div>
  );
}
