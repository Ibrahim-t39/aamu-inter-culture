// app/components/cultural-corner/CulturalTabs.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Book,
  Landmark,
  Music,
  Paintbrush,
  Users,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import { CountrySpotlight } from "./types";

interface CulturalTabsProps {
  country: CountrySpotlight;
}

export function CulturalTabs({ country }: CulturalTabsProps) {
  return (
    <Tabs defaultValue="cuisine" className="w-full mt-6">
      <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 bg-[#660000]/10">
        <TabsTrigger
          value="cuisine"
          className="data-[state=active]:bg-[#660000] data-[state=active]:text-white"
        >
          <Utensils className="mr-2" /> Cuisine
        </TabsTrigger>
        <TabsTrigger
          value="music"
          className="data-[state=active]:bg-[#660000] data-[state=active]:text-white"
        >
          <Music className="mr-2" /> Music
        </TabsTrigger>
        <TabsTrigger
          value="literature"
          className="data-[state=active]:bg-[#660000] data-[state=active]:text-white"
        >
          <Book className="mr-2" /> Literature
        </TabsTrigger>
        <TabsTrigger
          value="landmarks"
          className="data-[state=active]:bg-[#660000] data-[state=active]:text-white"
        >
          <Landmark className="mr-2" /> Landmarks
        </TabsTrigger>
        <TabsTrigger
          value="art"
          className="data-[state=active]:bg-[#660000] data-[state=active]:text-white"
        >
          <Paintbrush className="mr-2" /> Art
        </TabsTrigger>
        <TabsTrigger
          value="people"
          className="data-[state=active]:bg-[#660000] data-[state=active]:text-white"
        >
          <Users className="mr-2" /> People
        </TabsTrigger>
      </TabsList>
      <TabsContent value="cuisine" className="mt-4 bg-white/50 p-4 rounded-lg">
        <h3 className="font-bold text-xl mb-4 text-[#660000]">Cuisine</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg mb-2 text-[#660000]">
              Popular Dishes
            </h4>
            <ul className="list-disc list-inside text-gray-700">
              {country.cuisine.dishes.map((dish, index) => (
                <li key={index}>{dish}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2 text-[#660000]">
              Featured Recipe: {country.cuisine.recipe.name}
            </h4>
            <Image
              src={country.cuisine.recipe.image}
              alt={country.cuisine.recipe.name}
              width={300}
              height={200}
              className="rounded-lg shadow-md mb-4"
            />
            <h5 className="font-bold mt-2 text-[#660000]">Ingredients:</h5>
            <ul className="list-disc list-inside text-gray-700">
              {country.cuisine.recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="music" className="mt-4 bg-white/50 p-4 rounded-lg">
        <h3 className="font-bold text-xl mb-4 text-[#660000]">Music</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg mb-2 text-[#660000]">
              Traditional Music
            </h4>
            <p className="text-gray-700">{country.music.traditional}</p>
            <h4 className="font-bold text-lg mt-4 mb-2 text-[#660000]">
              Modern Music
            </h4>
            <p className="text-gray-700">{country.music.modern}</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2 text-[#660000]">
              Notable Artists
            </h4>
            <ul className="list-disc list-inside text-gray-700">
              {country.music.artists.map((artist, index) => (
                <li key={index}>{artist}</li>
              ))}
            </ul>
            <h4 className="font-bold text-lg mt-4 mb-2 text-[#660000]">
              Traditional Dances
            </h4>
            <ul className="list-disc list-inside text-gray-700">
              {country.music.dances.map((dance, index) => (
                <li key={index}>{dance}</li>
              ))}
            </ul>
          </div>
        </div>
      </TabsContent>
      <TabsContent
        value="literature"
        className="mt-4 bg-white/50 p-4 rounded-lg"
      >
        <h3 className="font-bold text-xl mb-4 text-[#660000]">Literature</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg mb-2 text-[#660000]">
              Folktales and Myths
            </h4>
            <p className="text-gray-700">{country.literature.folktales}</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2 text-[#660000]">
              Modern Authors
            </h4>
            <ul className="list-disc list-inside text-gray-700">
              {country.literature.modernAuthors.map((author, index) => (
                <li key={index}>{author}</li>
              ))}
            </ul>
          </div>
        </div>
      </TabsContent>
      <TabsContent
        value="landmarks"
        className="mt-4 bg-white/50 p-4 rounded-lg"
      >
        <h3 className="font-bold text-xl mb-4 text-[#660000]">
          Famous Landmarks
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {country.landmarks.map((landmark, index) => (
            <div key={index} className="text-center">
              <Image
                src={landmark.image}
                alt={landmark.name}
                width={300}
                height={200}
                className="rounded-lg shadow-md mb-2"
              />
              <p className="font-bold text-[#660000]">{landmark.name}</p>
              <p className="text-gray-700">{landmark.description}</p>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="art" className="mt-4 bg-white/50 p-4 rounded-lg">
        <h3 className="font-bold text-xl mb-4 text-[#660000]">Art</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg mb-2 text-[#660000]">
              Traditional Art Forms
            </h4>
            <p className="text-gray-700">{country.art.traditional}</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2 text-[#660000]">
              Modern Art Scene
            </h4>
            <p className="text-gray-700">{country.art.modern}</p>
          </div>
        </div>
        <h4 className="font-bold text-lg mt-4 mb-2 text-[#660000]">
          Famous Artists
        </h4>
        <ul className="list-disc list-inside text-gray-700">
          {country.art.famousArtists.map((artist, index) => (
            <li key={index}>{artist}</li>
          ))}
        </ul>
      </TabsContent>
      <TabsContent value="people" className="mt-4 bg-white/50 p-4 rounded-lg">
        <h3 className="font-bold text-xl mb-4 text-[#660000]">
          People and Society
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg mb-2 text-[#660000]">
              Customs and Etiquette
            </h4>
            <p className="text-gray-700">{country.people.customs}</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2 text-[#660000]">
              Festivals and Celebrations
            </h4>
            <ul className="list-disc list-inside text-gray-700">
              {country.people.festivals.map((festival, index) => (
                <li key={index}>{festival}</li>
              ))}
            </ul>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
