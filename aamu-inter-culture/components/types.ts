import { eventIcons } from "../lib/constant/constant";

export interface Event {
  id: number;
  title: string;
  date: Date;
  time: string;
  description: string;
  location: string;
  attendees: number;
  organizer: string;
  tags: string[];
  category: string;
  isKeyEvent: boolean;
  isMandatory: boolean;
  icon: keyof typeof eventIcons;
  dresscode: string;
  foodServed: boolean;
}
