"use client";

import { motion } from "framer-motion";
import {
  Book,
  Github,
  Globe,
  GraduationCap,
  Home,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Star,
  Tv,
  Twitter,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { aamuColors } from "../lib/constant/constant";
import { Student } from "./types";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

interface StudentCardProps {
  student: Student;
}

export function StudentCard({ student }: StudentCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className="perspective-1000 w-full h-[400px]"
      whileHover={{ scale: 1.05, rotateY: 15 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Card
          className="w-full h-full absolute backface-hidden"
          style={{
            borderColor: aamuColors.primary,
            background: `linear-gradient(135deg, ${aamuColors.primary} 0%, ${aamuColors.primary}80 100%)`,
          }}
        >
          <CardContent className="p-6 flex flex-col h-full text-white">
            <div className="flex items-center mb-4">
              <div className="relative h-20 w-20 rounded-full overflow-hidden mr-4">
                <Image
                  src={student.image}
                  alt={student.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{student.name}</h3>
                <p className="text-sm flex items-center">
                  <Mail className="h-4 w-4 mr-1" /> {student.email}
                </p>
              </div>
              <Image
                src={`https://flagcdn.com/w20/${student.nationality.toLowerCase()}.png`}
                alt={`${student.nationality} flag`}
                width={20}
                height={15}
                className="ml-auto"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                <span>{student.major}</span>
              </div>
              <div className="flex items-center">
                <Book className="h-5 w-5 mr-2" />
                <span>{student.year}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{student.country}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2" />
                <span>{student.gpa.toFixed(1)}</span>
              </div>
            </div>
            <Badge
              className="mb-4 self-start"
              style={{
                backgroundColor: aamuColors.secondary,
                color: aamuColors.primary,
              }}
            >
              {student.funFact}
            </Badge>
            <p className="text-sm mt-auto">Click to see more details</p>
          </CardContent>
        </Card>

        <Card
          className="w-full h-full absolute backface-hidden"
          style={{
            borderColor: aamuColors.primary,
            background: `linear-gradient(135deg, ${aamuColors.primary}80 0%, ${aamuColors.primary} 100%)`,
            transform: "rotateY(180deg)",
          }}
        >
          <CardContent className="p-6 flex flex-col h-full text-white">
            <h3 className="text-2xl font-bold mb-4">{student.name}</h3>
            <p className="text-sm mb-4 flex-grow">{student.description}</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {student.favoriteColor && (
                <div className="flex items-center">
                  <Palette className="h-4 w-4 mr-1" />
                  <span className="text-sm">
                    Favorite Color: {student.favoriteColor}
                  </span>
                </div>
              )}
              {student.favoriteFood && (
                <div className="flex items-center">
                  <Utensils className="h-4 w-4 mr-1" />
                  <span className="text-sm">
                    Favorite Food: {student.favoriteFood}
                  </span>
                </div>
              )}
              {student.homeCity && (
                <div className="flex items-center">
                  <Home className="h-4 w-4 mr-1" />
                  <span className="text-sm">Home City: {student.homeCity}</span>
                </div>
              )}
              {student.favoriteShow && (
                <div className="flex items-center">
                  <Tv className="h-4 w-4 mr-1" />
                  <span className="text-sm">
                    Favorite Show: {student.favoriteShow}
                  </span>
                </div>
              )}
            </div>
            <div className="flex space-x-2 mb-4">
              {student.website && (
                <a
                  href={student.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="h-5 w-5 text-white" />
                </a>
              )}
              {student.linkedin && (
                <a
                  href={student.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              )}
              {student.twitter && (
                <a
                  href={student.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5 text-white" />
                </a>
              )}
              {student.github && (
                <a
                  href={student.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 text-white" />
                </a>
              )}
            </div>
            <p className="text-sm text-gray-200">Click to flip back</p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
