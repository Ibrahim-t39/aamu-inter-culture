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
  Tv,
  Twitter,
  User,
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

  const handleClick = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest("a")) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleSocialClick = (e: React.MouseEvent) => {
    e.stopPropagation();
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
          className="w-full h-full absolute backface-hidden overflow-hidden"
          style={{
            borderColor: aamuColors.primary,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#660000] via-[#990000] to-[#660000] animate-gradient-x"></div>
          <CardContent className="p-6 flex flex-col h-full text-white relative z-10">
            <div className="flex items-start mb-6">
              <div className="relative h-24 w-24 rounded-full overflow-hidden mr-4 border-4 border-white shadow-lg">
                <Image
                  src={student.image}
                  alt={student.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-3xl font-bold mb-1">{student.name}</h3>
                <p className="text-sm flex items-center mb-1">
                  <Mail className="h-4 w-4 mr-1" /> {student.email}
                </p>
                <p className="text-sm flex items-center">
                  <User className="h-4 w-4 mr-1" /> {student.pronouns}
                </p>
              </div>
              <div className="flex-shrink-0 ml-4">
                <Image
                  src={`https://flagcdn.com/w80/${student.nationality.toLowerCase()}.png`}
                  alt={`${student.nationality} flag`}
                  width={80}
                  height={60}
                  className="rounded-md shadow-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <div className="flex items-center text-sm font-semibold mb-1">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  <span>Major</span>
                </div>
                <p className="text-sm">{student.major}</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <div className="flex items-center text-sm font-semibold mb-1">
                  <Book className="h-5 w-5 mr-2" />
                  <span>Year</span>
                </div>
                <p className="text-sm">{student.year}</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <div className="flex items-center text-sm font-semibold mb-1">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Country</span>
                </div>
                <p className="text-sm">{student.country}</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <div className="flex items-center text-sm font-semibold mb-1">
                  <User className="h-5 w-5 mr-2" />
                  <span>Gender</span>
                </div>
                <p className="text-sm">{student.gender}</p>
              </div>
            </div>
            <Badge
              className="mb-4 self-start px-3 py-1"
              style={{
                backgroundColor: `${aamuColors.secondary}80`,
                color: "white",
              }}
            >
              {student.funFact}
            </Badge>
            <p className="text-sm mt-auto text-center italic">
              Click to see more details
            </p>
          </CardContent>
        </Card>

        <Card
          className="w-full h-full absolute backface-hidden overflow-hidden"
          style={{
            borderColor: aamuColors.primary,
            transform: "rotateY(180deg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#660000] via-[#990000] to-[#660000] animate-gradient-x"></div>
          <CardContent className="p-6 flex flex-col h-full text-white relative z-10">
            <h3 className="text-2xl font-bold mb-4">{student.name}</h3>
            {student.nameIPA && (
              <div className="mb-2">
                <span className="text-sm font-semibold">IPA: </span>
                <span className="text-sm font-mono">{student.nameIPA}</span>
              </div>
            )}
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
                  onClick={handleSocialClick}
                >
                  <Globe className="h-5 w-5 text-white hover:text-[#ffffffcc]" />
                </a>
              )}
              {student.linkedin && (
                <a
                  href={student.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleSocialClick}
                >
                  <Linkedin className="h-5 w-5 text-white hover:text-[#ffffffcc]" />
                </a>
              )}
              {student.twitter && (
                <a
                  href={student.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleSocialClick}
                >
                  <Twitter className="h-5 w-5 text-white hover:text-[#ffffffcc]" />
                </a>
              )}
              {student.github && (
                <a
                  href={student.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleSocialClick}
                >
                  <Github className="h-5 w-5 text-white hover:text-[#ffffffcc]" />
                </a>
              )}
            </div>
            <p className="text-sm text-gray-200 text-center italic">
              Click to flip back
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
