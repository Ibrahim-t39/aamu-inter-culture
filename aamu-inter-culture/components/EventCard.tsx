"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import "../app/globals.css"; // Ensure you're importing the actual CSS file

interface EventCardProps {
  title: string;
  date: string;
  rsvpLink: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, rsvpLink }) => (
  <div className="inline-block mx-2">
    <Card className="hover:shadow-lg">
      <CardContent>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{date}</p>
        <Button className="mt-4 bg-primary text-white" ref={rsvpLink}>
          RSVP
        </Button>
      </CardContent>
    </Card>
  </div>
);

export default EventCard;
