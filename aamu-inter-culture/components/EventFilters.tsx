import { format } from "date-fns";
import { CalendarIcon, Filter } from "lucide-react";
import {
  aamuColors,
  categories,
  eventTypes,
  organizers,
} from "../lib/constant/constant";
import { cn } from "../lib/utils/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface EventFiltersProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  category: string;
  setCategory: (category: string) => void;
  eventType: string;
  setEventType: (eventType: string) => void;
  organizer: string;
  setOrganizer: (organizer: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  clearFilters: () => void;
}

export function EventFilters({
  date,
  setDate,
  category,
  setCategory,
  eventType,
  setEventType,
  organizer,
  setOrganizer,
  searchQuery,
  setSearchQuery,
  clearFilters,
}: EventFiltersProps) {
  return (
    <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
      <div className="flex-grow">
        <Input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
          style={{ borderColor: aamuColors.primary }}
        />
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
            style={{
              borderColor: aamuColors.primary,
              color: aamuColors.primary,
            }}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <Select onValueChange={setCategory}>
        <SelectTrigger
          className="w-[180px]"
          style={{ borderColor: aamuColors.primary, color: aamuColors.primary }}
        >
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={setEventType}>
        <SelectTrigger
          className="w-[180px]"
          style={{ borderColor: aamuColors.primary, color: aamuColors.primary }}
        >
          <SelectValue placeholder="Select event type" />
        </SelectTrigger>
        <SelectContent>
          {eventTypes.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={setOrganizer}>
        <SelectTrigger
          className="w-[180px]"
          style={{ borderColor: aamuColors.primary, color: aamuColors.primary }}
        >
          <SelectValue placeholder="Select organizer" />
        </SelectTrigger>
        <SelectContent>
          {organizers.map((org) => (
            <SelectItem key={org} value={org}>
              {org}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {(date ||
        category !== "All" ||
        eventType !== "All" ||
        organizer !== "All" ||
        searchQuery) && (
        <Button
          variant="ghost"
          onClick={clearFilters}
          className="flex items-center"
          style={{ color: aamuColors.primary }}
        >
          <Filter className="mr-2 h-4 w-4" />
          Clear filters
        </Button>
      )}
    </div>
  );
}
