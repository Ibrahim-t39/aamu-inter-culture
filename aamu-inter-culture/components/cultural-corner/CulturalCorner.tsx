// app/components/cultural-corner/CulturalCorner.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { CountrySpotlight } from "./CountrySpotlight";
import { countrySpotlights } from "./data";

export function CulturalCorner() {
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries = countrySpotlights.filter((country) =>
    country.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const nextCountry = () => {
    setCurrentCountryIndex(
      (prevIndex) => (prevIndex + 1) % filteredCountries.length
    );
  };

  const prevCountry = () => {
    setCurrentCountryIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredCountries.length) % filteredCountries.length
    );
  };

  return (
    <div className="min-h-screen relative">
      <Image
        src="/images/logo/aamuwelcomecenter.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-white/70">
        <header className="py-6 px-4 md:px-8 relative z-10">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-[#660000]">
              Cultural Corner
            </h1>
            <div className="relative w-full max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search countries..."
                className="pl-10 bg-white border-[#660000]/30 text-[#660000] placeholder-gray-400 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-1/4">
              <div className="bg-white/80 rounded-lg shadow-md p-4">
                <h2 className="text-2xl font-semibold mb-4 text-[#660000]">
                  Countries
                </h2>
                <ScrollArea className="h-[calc(100vh-16rem)] rounded-md border border-[#660000]/20">
                  <div className="p-4">
                    {filteredCountries.map((country, index) => (
                      <Button
                        key={country.country}
                        variant="ghost"
                        className="w-full justify-start mb-2 text-left hover:bg-[#660000]/10 text-[#660000]"
                        onClick={() => setCurrentCountryIndex(index)}
                      >
                        {country.country}
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </aside>
            <div className="w-full md:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={filteredCountries[currentCountryIndex].country}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CountrySpotlight
                    country={filteredCountries[currentCountryIndex]}
                    onPrevious={prevCountry}
                    onNext={nextCountry}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
