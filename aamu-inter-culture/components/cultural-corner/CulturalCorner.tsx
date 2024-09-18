"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
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
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <Card className="max-w-7xl mx-auto">
        <CardContent className="p-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#660000]">
            Cultural Corner
          </h1>
          <div className="relative w-full max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search countries..."
              className="pl-10 bg-white border-[#660000]/30 text-[#660000] placeholder-gray-400 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <Card className="w-full lg:w-1/4 h-fit">
              <CardContent className="p-4">
                <h2 className="text-2xl font-semibold mb-4 text-[#660000]">
                  Countries
                </h2>
                <ScrollArea className="h-[300px] lg:h-[calc(100vh-20rem)] rounded-md border border-[#660000]/20">
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
              </CardContent>
            </Card>
            <Card className="w-full lg:w-3/4">
              <CardContent className="p-4">
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
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
