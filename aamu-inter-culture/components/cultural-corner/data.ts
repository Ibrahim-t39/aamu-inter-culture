// app/components/cultural-corner/data.ts

import { CountrySpotlight } from "./types";

export const countrySpotlights: CountrySpotlight[] = [
  {
    country: "Japan",
    flagImage: "/placeholder.svg?height=200&width=300",
    overview:
      "Japan is an island country in East Asia, known for its unique blend of ancient traditions and cutting-edge technology.",
    capital: "Tokyo",
    population: "125.36 million (2021)",
    language: "Japanese",
    currency: "Japanese Yen (JPY)",
    landmarks: [
      {
        name: "Mount Fuji",
        image: "/placeholder.svg?height=200&width=300",
        description: undefined,
      },
      {
        name: "Tokyo Tower",
        image: "/placeholder.svg?height=200&width=300",
        description: undefined,
      },
      {
        name: "Fushimi Inari Shrine",
        image: "/placeholder.svg?height=200&width=300",
        description: undefined,
      },
    ],
    cuisine: {
      dishes: ["Sushi", "Ramen", "Tempura", "Udon", "Miso Soup"],
      recipe: {
        name: "Miso Soup",
        image: "/placeholder.svg?height=200&width=300",
        ingredients: [
          "4 cups water",
          "2 teaspoons dashi granules",
          "3 tablespoons miso paste",
          "1 block silken tofu, diced",
          "1 tablespoon dried wakame",
          "2 green onions, thinly sliced",
        ],
        instructions: [
          "Bring water to a boil in a medium saucepan.",
          "Add dashi granules and dissolve.",
          "Reduce heat to medium and add tofu.",
          "Dissolve miso paste in a small amount of water and add to the soup.",
          "Add wakame and simmer for 2-3 minutes.",
          "Serve garnished with green onions.",
        ],
      },
    },
    music: {
      traditional:
        "Traditional Japanese music includes genres like gagaku (court music) and shakuhachi (bamboo flute music).",
      modern:
        "J-pop and J-rock are popular modern genres, with a thriving idol culture.",
      artists: [
        "BABYMETAL",
        "Utada Hikaru",
        "Yoshida Brothers",
        "Perfume",
        "ONE OK ROCK",
      ],
      dances: ["Bon Odori", "Kabuki", "Butoh", "Yosakoi"],
    },
    literature: {
      folktales:
        "Japanese folklore includes stories of yokai (supernatural creatures) and tales like Momotaro and The Tale of the Bamboo Cutter.",
      modernAuthors: [
        "Haruki Murakami",
        "Banana Yoshimoto",
        "Keigo Higashino",
        "Yukio Mishima",
        "Kazuo Ishiguro",
      ],
    },
    art: {
      traditional:
        "Traditional Japanese art forms include ukiyo-e woodblock prints, ikebana (flower arrangement), and calligraphy.",
      modern:
        "Contemporary Japanese art often blends traditional techniques with modern concepts, as seen in the works of Takashi Murakami and Yayoi Kusama.",
      famousArtists: [
        "Katsushika Hokusai",
        "Yayoi Kusama",
        "Takashi Murakami",
        "Yoshitomo Nara",
        "Hiroshi Sugimoto",
      ],
    },
    people: {
      customs:
        "Japanese culture emphasizes respect, politeness, and harmony. Bowing is a common greeting, and removing shoes before entering homes is customary.",
      festivals: [
        "Hanami (Cherry Blossom Viewing)",
        "Obon",
        "Gion Matsuri",
        "Sapporo Snow Festival",
        "Tanabata",
      ],
    },
  },
  {
    country: "Italy",
    flagImage: "/placeholder.svg?height=200&width=300",
    overview:
      "Italy, located in Southern Europe, is renowned for its art, architecture, and influential role in world history and culture.",
    capital: "Rome",
    population: "59.55 million (2021)",
    language: "Italian",
    currency: "Euro (EUR)",
    landmarks: [
      {
        name: "Colosseum",
        image: "/placeholder.svg?height=200&width=300",
        description: undefined,
      },
      {
        name: "Leaning Tower of Pisa",
        image: "/placeholder.svg?height=200&width=300",
        description: undefined,
      },
      {
        name: "Vatican City",
        image: "/placeholder.svg?height=200&width=300",
        description: undefined,
      },
    ],
    cuisine: {
      dishes: ["Pizza", "Pasta", "Gelato", "Tiramisu", "Risotto"],
      recipe: {
        name: "Tiramisu",
        image: "/placeholder.svg?height=200&width=300",
        ingredients: [
          "6 egg yolks",
          "3/4 cup sugar",
          "1 1/4 cups mascarpone cheese",
          "1 3/4 cups heavy whipping cream",
          "2 cups brewed coffee",
          "1 package ladyfingers",
          "Cocoa powder for dusting",
        ],
        instructions: [
          "Whisk egg yolks and sugar until thick and pale.",
          "Mix mascarpone into yolk mixture.",
          "Whip heavy cream to stiff peaks and fold into mascarpone mixture.",
          "Dip ladyfingers in coffee and layer in dish.",
          "Spread mascarpone mixture over ladyfingers and repeat layers.",
          "Dust with cocoa powder and refrigerate.",
        ],
      },
    },
    music: {
      traditional:
        "Italy has a rich tradition of opera and classical music, with composers like Verdi and Puccini.",
      modern:
        "Modern Italian music includes pop, rock, and hip hop, with popular artists such as Laura Pausini and Eros Ramazzotti.",
      artists: [
        "Andrea Bocelli",
        "Luciano Pavarotti",
        "Zucchero",
        "Måneskin",
        "Laura Pausini",
      ],
      dances: ["Tarantella", "Pizzica", "Furlana", "Saltarello"],
    },
    literature: {
      folktales:
        "Italian folklore includes tales like 'Pinocchio' and stories of the Befana, an old woman who delivers gifts to children on Epiphany.",
      modernAuthors: [
        "Dante Alighieri",
        "Italo Calvino",
        "Umberto Eco",
        "Elena Ferrante",
        "Alessandro Baricco",
      ],
    },
    art: {
      traditional:
        "Italy is known for Renaissance art, with masters like Michelangelo, Leonardo da Vinci, and Raphael.",
      modern:
        "Contemporary Italian artists like Maurizio Cattelan challenge traditional forms with provocative works.",
      famousArtists: [
        "Leonardo da Vinci",
        "Michelangelo",
        "Caravaggio",
        "Sandro Botticelli",
        "Amedeo Modigliani",
      ],
    },
    people: {
      customs:
        "Italians value family, food, and culture. Mealtime is often a social event, and fashion is highly regarded.",
      festivals: [
        "Carnival of Venice",
        "Palio di Siena",
        "Ferragosto",
        "Sanremo Music Festival",
        "Festa della Repubblica",
      ],
    },
  },
  {
    country: "Brazil",
    flagImage: "/placeholder.svg?height=200&width=300",
    overview:
      "Brazil is the largest country in South America, known for its biodiversity, vibrant culture, and world-famous festivals.",
    capital: "Brasília",
    population: "213.99 million (2021)",
    language: "Portuguese",
    currency: "Brazilian Real (BRL)",
    landmarks: [
      {
        name: "Christ the Redeemer",
        image: "/placeholder.svg?height=200&width=300",
        description: undefined,
      },
      {
        name: "Amazon Rainforest",
        image: "/placeholder.svg?height=200&width=300",
        description: undefined,
      },
      {
        name: "Iguaçu Falls",
        image: "/placeholder.svg?height=200&width=300",
        description: undefined,
      },
    ],
    cuisine: {
      dishes: ["Feijoada", "Pão de queijo", "Brigadeiro", "Coxinha", "Moqueca"],
      recipe: {
        name: "Brigadeiro",
        image: "/placeholder.svg?height=200&width=300",
        ingredients: [
          "1 can sweetened condensed milk",
          "2 tablespoons unsweetened cocoa powder",
          "2 tablespoons butter",
          "Chocolate sprinkles",
        ],
        instructions: [
          "In a saucepan, stir together condensed milk, cocoa powder, and butter over medium heat.",
          "Cook until thickened and pulling away from the sides of the pan.",
          "Let cool, shape into balls, and roll in sprinkles.",
        ],
      },
    },
    music: {
      traditional:
        "Samba, Bossa Nova, and Forró are some of Brazil's most recognized traditional music genres.",
      modern:
        "Brazilian pop, hip hop, and Sertanejo are popular modern genres.",
      artists: [
        "João Gilberto",
        "Anitta",
        "Caetano Veloso",
        "Ivete Sangalo",
        "Gilberto Gil",
      ],
      dances: ["Samba", "Forró", "Frevo", "Capoeira"],
    },
    literature: {
      folktales:
        "Brazilian folklore includes the stories of Saci-Pererê, Curupira, and the legend of Iara.",
      modernAuthors: [
        "Jorge Amado",
        "Paulo Coelho",
        "Clarice Lispector",
        "Chico Buarque",
        "Machado de Assis",
      ],
    },
    art: {
      traditional:
        "Brazilian art reflects the country's indigenous, African, and Portuguese influences.",
      modern:
        "Modern Brazilian art includes movements like Tropicalia, blending native themes with global concepts.",
      famousArtists: [
        "Candido Portinari",
        "Tarsila do Amaral",
        "Lygia Clark",
        "Hélio Oiticica",
        "Beatriz Milhazes",
      ],
    },
    people: {
      customs: "",
      festivals: [],
    },
  },

  // Add more countries here...
];
