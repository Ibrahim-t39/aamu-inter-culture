"use client";

import { EventFilters } from "@/components/EventFilters";
import { EventList } from "@/components/EventList";
import { EventTags } from "@/components/EventTags";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { events } from "@/lib/constant/constant";
import { isBefore, isToday } from "date-fns";
import { useState } from "react";

export default function EventsPage() {
  const [date, setDate] = useState<Date>();
  const [category, setCategory] = useState("All");
  const [eventType, setEventType] = useState("All");
  const [organizer, setOrganizer] = useState("All");
  const [starredEvents, setStarredEvents] = useState<number[]>([]);
  const [attendingEvents, setAttendingEvents] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredEvents = events.filter((event) => {
    const dateMatch =
      !date || event.date.toDateString() === date.toDateString();
    const categoryMatch = category === "All" || event.category === category;
    const organizerMatch = organizer === "All" || event.organizer === organizer;
    const searchMatch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const tagMatch =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => event.tags.includes(tag));
    const today = new Date();
    const eventTypeMatch =
      eventType === "All" ||
      (eventType === "Upcoming" &&
        (isToday(event.date) || isBefore(today, event.date))) ||
      (eventType === "Past" && isBefore(event.date, today)) ||
      (eventType === "Key" && event.isKeyEvent) ||
      (eventType === "Mandatory" && event.isMandatory) ||
      (eventType === "Birthday" && event.category === "Birthday");
    return (
      dateMatch &&
      categoryMatch &&
      eventTypeMatch &&
      organizerMatch &&
      searchMatch &&
      tagMatch
    );
  });

  const toggleStarred = (eventId: number) => {
    setStarredEvents((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  const toggleAttending = (eventId: number) => {
    setAttendingEvents((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setDate(undefined);
    setCategory("All");
    setEventType("All");
    setOrganizer("All");
    setSearchQuery("");
    setSelectedTags([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#660000]">
        Campus Events
      </h1>

      <EventFilters
        date={date}
        setDate={setDate}
        category={category}
        setCategory={setCategory}
        eventType={eventType}
        setEventType={setEventType}
        organizer={organizer}
        setOrganizer={setOrganizer}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        clearFilters={clearFilters}
      />

      <EventTags selectedTags={selectedTags} toggleTag={toggleTag} />

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Events</TabsTrigger>
          <TabsTrigger value="starred">Starred Events</TabsTrigger>
          <TabsTrigger value="attending">Attending Events</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {filteredEvents.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">
              No events found for the selected criteria.
            </p>
          ) : (
            <EventList
              events={filteredEvents}
              starredEvents={starredEvents}
              attendingEvents={attendingEvents}
              toggleStarred={toggleStarred}
              toggleAttending={toggleAttending}
            />
          )}
        </TabsContent>
        <TabsContent value="starred">
          {starredEvents.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">
              You haven&apos;t starred any events yet.
            </p>
          ) : (
            <EventList
              events={events.filter((event) =>
                starredEvents.includes(event.id)
              )}
              starredEvents={starredEvents}
              attendingEvents={attendingEvents}
              toggleStarred={toggleStarred}
              toggleAttending={toggleAttending}
            />
          )}
        </TabsContent>
        <TabsContent value="attending">
          {attendingEvents.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">
              You&apos;re not attending any events yet.
            </p>
          ) : (
            <EventList
              events={events.filter((event) =>
                attendingEvents.includes(event.id)
              )}
              starredEvents={starredEvents}
              attendingEvents={attendingEvents}
              toggleStarred={toggleStarred}
              toggleAttending={toggleAttending}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
