"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { aamuColors, majors, years } from "../lib/constant/constant";
import { students } from "../lib/data/data";
import { StudentCard } from "./StudentCard";
import { Student } from "./types";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function StudentDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMajor, setSelectedMajor] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedNationality, setSelectedNationality] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");

  const nationalities = useMemo(() => {
    const nationalitySet = new Set<string>(
      students.map((student) => student.nationality)
    );
    return ["All", ...Array.from(nationalitySet)].sort();
  }, []);

  const genders = useMemo(() => {
    const genderSet = new Set<string>(
      students.map((student) => student.gender)
    );
    return ["All", ...Array.from(genderSet)].sort();
  }, []);

  const filteredStudents = useMemo(() => {
    return students.filter((student: Student) => {
      const nameMatch = student.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const majorMatch =
        selectedMajor === "All" || student.major === selectedMajor;
      const yearMatch = selectedYear === "All" || student.year === selectedYear;
      const nationalityMatch =
        selectedNationality === "All" ||
        student.nationality === selectedNationality;
      const genderMatch =
        selectedGender === "All" || student.gender === selectedGender;
      return (
        nameMatch && majorMatch && yearMatch && nationalityMatch && genderMatch
      );
    });
  }, [
    searchQuery,
    selectedMajor,
    selectedYear,
    selectedNationality,
    selectedGender,
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ color: aamuColors.primary }}
      >
        Student Directory
      </motion.h1>
      <motion.div
        className="flex flex-col md:flex-row gap-4 mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Input
          type="text"
          placeholder="Search students..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow bg-white bg-opacity-80"
          style={{ borderColor: aamuColors.primary }}
        />
        <Select onValueChange={setSelectedMajor}>
          <SelectTrigger
            className="w-[180px] bg-white bg-opacity-80"
            style={{ borderColor: aamuColors.primary }}
          >
            <SelectValue placeholder="Select major" />
          </SelectTrigger>
          <SelectContent>
            {majors.map((major) => (
              <SelectItem key={major} value={major}>
                {major}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setSelectedYear}>
          <SelectTrigger
            className="w-[180px] bg-white bg-opacity-80"
            style={{ borderColor: aamuColors.primary }}
          >
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setSelectedNationality}>
          <SelectTrigger
            className="w-[180px] bg-white bg-opacity-80"
            style={{ borderColor: aamuColors.primary }}
          >
            <SelectValue placeholder="Select nationality" />
          </SelectTrigger>
          <SelectContent>
            {nationalities.map((nationality) => (
              <SelectItem key={nationality} value={nationality}>
                {nationality}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setSelectedGender}>
          <SelectTrigger
            className="w-[180px] bg-white bg-opacity-80"
            style={{ borderColor: aamuColors.primary }}
          >
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            {genders.map((gender) => (
              <SelectItem key={gender} value={gender}>
                {gender}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {filteredStudents.map((student) => (
          <motion.div
            key={student.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <StudentCard student={student} />
          </motion.div>
        ))}
      </motion.div>
      {filteredStudents.length === 0 && (
        <p className="text-center text-gray-700 mt-8 bg-white bg-opacity-80 p-4 rounded">
          No students found matching the criteria.
        </p>
      )}
    </div>
  );
}
