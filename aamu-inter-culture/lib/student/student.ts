import { Student } from "../../components/types";

export const students: Student[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@aamu.edu",
    major: "Computer Science",
    year: "Senior",
    gpa: 3.8,
    image: "/placeholder.svg?height=400&width=400",
    country: "United States",
    funFact: "Can solve a Rubik's cube in under a minute!",
    description:
      "Passionate about AI and machine learning. Always up for a coding challenge.",
    website: "https://johndoe.dev",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    nationality: "Zambian",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@aamu.edu",
    major: "Electrical Engineering",
    year: "Junior",
    gpa: 3.9,
    image: "/placeholder.svg?height=400&width=400",
    country: "Canada",
    funFact: "Speaks four languages fluently!",
    description:
      "Aspiring robotics engineer with a love for sustainable energy solutions.",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    nationality: "Zambian",
  },
  // Add more students here...
];

export const majors = [
  "All",
  "Computer Science",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Biology",
  "Chemistry",
];
export const years = ["All", "Freshman", "Sophomore", "Junior", "Senior"];
