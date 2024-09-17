// app/lib/constant/constant.ts
import {
  Book,
  Briefcase,
  Globe,
  GraduationCap,
  LucideIcon,
  Music,
  Palette,
  Trophy,
  Utensils,
} from "lucide-react";
import { Event } from "../../components/types";

export const eventIcons: Record<string, LucideIcon> = {
  Cultural: Globe,
  Career: Briefcase,
  Academic: GraduationCap,
  Food: Utensils,
  Music: Music,
  Workshop: Book,
  Art: Palette,
  Sports: Trophy,
  default: Globe,
};

export const categories = [
  "All",
  "Cultural",
  "Career",
  "Academic",
  "Birthday",
  "Sports",
  "Art",
];
export const eventTypes = [
  "All",
  "Upcoming",
  "Past",
  "Key",
  "Mandatory",
  "Birthday",
];
export const organizers = [
  "All",
  "ISA",
  "AAMU Athletics",
  "AAMU Career Services",
  "AAMU Departments",
];
export const tags = [
  "cultural",
  "food",
  "social",
  "career",
  "academic",
  "workshop",
  "sports",
  "art",
];

export const events: Event[] = [
  {
    id: 1,
    title: "International Food Festival",
    date: new Date(2023, 8, 15),
    time: "12:00 PM - 4:00 PM",
    description:
      "Experience cuisines from around the world prepared by our international students.",
    location: "AAMU Quad",
    attendees: 120,
    organizer: "ISA",
    tags: ["cultural", "food", "social"],
    category: "Cultural",
    isKeyEvent: true,
    isMandatory: false,
    icon: "Food",
    dresscode: "Casual",
    foodServed: true,
  },
  // Add more events here...
];
