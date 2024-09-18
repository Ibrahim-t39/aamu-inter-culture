// app/components/cultural-corner/types.ts

import { ReactNode } from "react";

export interface CountrySpotlight {
  country: string;
  flagImage: string;
  overview: string;
  capital: string;
  population: string;
  language: string;
  currency: string;
  landmarks: {
    description: ReactNode;
    name: string;
    image: string;
  }[];
  cuisine: {
    dishes: string[];
    recipe: {
      name: string;
      image: string;
      ingredients: string[];
      instructions: string[];
    };
  };
  music: {
    traditional: string;
    modern: string;
    artists: string[];
    dances: string[];
  };
  literature: {
    folktales: string;
    modernAuthors: string[];
  };
  art: {
    traditional: string;
    modern: string;
    famousArtists: string[];
  };
  people: {
    customs: string;
    festivals: string[];
  };
}
