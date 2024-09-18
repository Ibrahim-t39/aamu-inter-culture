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
    nationality: "US",
    funFact: "Can solve a Rubik's cube in under a minute!",
    description:
      "Passionate about AI and machine learning. Always up for a coding challenge.",
    website: "https://johndoe.dev",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    favoriteColor: "Blue",
    favoriteFood: "Pizza",
    homeCity: "New York",
    favoriteShow: "Stranger Things",
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
    nationality: "CA",
    funFact: "Speaks four languages fluently!",
    description:
      "Aspiring robotics engineer with a love for sustainable energy solutions.",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    favoriteColor: "Green",
    favoriteFood: "Sushi",
    homeCity: "Toronto",
    favoriteShow: "The Office",
  },
  // Add more students here...
];
