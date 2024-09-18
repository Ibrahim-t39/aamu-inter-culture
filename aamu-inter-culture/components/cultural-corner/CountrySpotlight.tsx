// app/components/cultural-corner/CountrySpotlight.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { CulturalTabs } from "./CulturalTabs";
import { CountrySpotlight as CountrySpotlightType } from "./types";

interface CountrySpotlightProps {
  country: CountrySpotlightType;
  onPrevious: () => void;
  onNext: () => void;
}

export function CountrySpotlight({
  country,
  onPrevious,
  onNext,
}: CountrySpotlightProps) {
  return (
    <Card className="w-full bg-white/80 border-[#660000]/20 overflow-hidden shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
            <Image
              src={country.flagImage}
              alt={`Flag of ${country.country}`}
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-2 text-[#660000]">
              {country.country}
            </h2>
            <p className="text-lg mb-4 text-gray-700">{country.overview}</p>
            <div className="grid grid-cols-2 gap-4 bg-[#660000]/5 p-4 rounded-lg">
              <div>
                <h3 className="font-semibold text-[#660000]">Capital</h3>
                <p className="text-gray-800">{country.capital}</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#660000]">Population</h3>
                <p className="text-gray-800">{country.population}</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#660000]">Language</h3>
                <p className="text-gray-800">{country.language}</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#660000]">Currency</h3>
                <p className="text-gray-800">{country.currency}</p>
              </div>
            </div>
          </div>
        </div>
        <CulturalTabs country={country} />
        <div className="flex justify-between mt-6">
          <Button
            onClick={onPrevious}
            variant="outline"
            className="bg-[#660000] text-white hover:bg-[#660000]/80"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous Country
          </Button>
          <Button
            onClick={onNext}
            variant="outline"
            className="bg-[#660000] text-white hover:bg-[#660000]/80"
          >
            Next Country <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
