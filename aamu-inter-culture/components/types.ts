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

export interface Student {
  id: string;
  name: string;
  email: string;
  major: string;
  year: string;
  gpa: number;
  image: string;
  country: string;
  nationality: string;
  funFact: string;
  description: string;
  website?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  favoriteColor?: string;
  favoriteFood?: string;
  homeCity?: string;
  favoriteShow?: string;
}
