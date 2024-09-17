"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import "../app/globals.css"; // Ensure you're importing the actual CSS file

interface StudentCardProps {
  name: string;
  country: string;
  image: string;
}

const StudentCard: React.FC<StudentCardProps> = ({ name, country, image }) => (
  <Card className="hover:shadow-lg">
    <CardContent>
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-bold text-center">{name}</h3>
      <p className="text-center text-gray-600">{country}</p>
    </CardContent>
  </Card>
);

export default StudentCard;
