import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface CountryFlag {
  png: string;
  svg: string;
  alt: string;
}

interface Country {
  flags: CountryFlag;
}

const WorldFlags: React.FC = () => {
  const [flags, setFlags] = useState<string[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=flags")
      .then((response) => response.json())
      .then((data: Country[]) =>
        setFlags(data.map((country) => country.flags.png))
      )
      .catch((error) => console.error("Error fetching flags:", error));
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    const newPosition =
      direction === "left"
        ? Math.max(0, scrollPosition - 200)
        : Math.min((flags.length - 5) * 50, scrollPosition + 200);
    setScrollPosition(newPosition);
  };

  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center text-primary">
          Our Global Community
        </h2>
        <div className="relative">
          <motion.div
            className="flex overflow-hidden"
            animate={{ x: -scrollPosition }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {flags.map((flag, index) => (
              <div key={index} className="mr-4">
                <Image
                  src={flag}
                  alt="Country flag"
                  width={75}
                  height={50}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder-flag.png"; // Fallback image
                    target.onerror = null; // Prevent infinite loop
                  }}
                />
              </div>
            ))}
          </motion.div>
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Scroll left"
          >
            <ChevronLeft className="text-primary" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Scroll right"
          >
            <ChevronRight className="text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorldFlags;
