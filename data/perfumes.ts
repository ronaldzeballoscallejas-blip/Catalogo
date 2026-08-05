export type PerfumeGender = "Hombres" | "Mujeres" | "Unisex";
export type PerfumeSize = "5ml" | "10ml";
export type PerfumeOccasion = "Día" | "Noche" | "Todo uso";
export type PerfumeSeason = "Invierno" | "Primavera" | "Verano" | "Otoño";

export type Perfume = {
  id: string;
  brand: string;
  name: string;
  image: string;
  gallery?: string[];
  gender: PerfumeGender;
  prices: Record<PerfumeSize, number>;
  longevityHours: number;
  sillage: "Moderada" | "Fuerte";
  occasions: PerfumeOccasion[];
  seasons: PerfumeSeason[];
  accords: string[];
  notes: string[];
  personality: ("dulce" | "fresco" | "intenso" | "elegante" | "tropical")[];
  featured?: boolean;
};

export const perfumes: Perfume[] = [
  {
    id: "lattafa-khamrah",
    brand: "Lattafa",
    name: "Khamrah",
    image: "/assets/IMG_0981.PNG",
    gallery: ["/assets/IMG_0982.PNG"],
    gender: "Unisex",
    prices: { "5ml": 35, "10ml": 60 },
    longevityHours: 8,
    sillage: "Fuerte",
    occasions: ["Noche", "Todo uso"],
    seasons: ["Invierno", "Otoño"],
    accords: ["Dulce", "Cálido especiado", "Vainilla", "Ámbar"],
    notes: ["Canela", "Vainilla", "Ámbar"],
    personality: ["dulce", "intenso", "elegante"],
    featured: true
  },
  {
    id: "afnan-9pm-night-out",
    brand: "Afnan",
    name: "9 PM Night Out",
    image: "/assets/9pm night out 1.JPG",
    gallery: ["/assets/9pm night out 2.PNG"],
    gender: "Unisex",
    prices: { "5ml": 50, "10ml": 90 },
    longevityHours: 8,
    sillage: "Fuerte",
    occasions: ["Noche"],
    seasons: ["Invierno", "Otoño"],
    accords: ["Amaderado", "Cálido especiado", "Dulce"],
    notes: ["Maderas", "Especias", "Dulzor nocturno"],
    personality: ["dulce", "intenso"],
    featured: true
  },
  {
    id: "afnan-9pm-elixir",
    brand: "Afnan",
    name: "9 PM Elixir",
    image: "/assets/9pm elixir 1.JPG",
    gallery: ["/assets/9pm elixir 2.JPG"],
    gender: "Unisex",
    prices: { "5ml": 45, "10ml": 80 },
    longevityHours: 8,
    sillage: "Fuerte",
    occasions: ["Noche"],
    seasons: ["Invierno", "Otoño"],
    accords: ["Cálido especiado", "Avainillado", "Cuero"],
    notes: ["Vainilla", "Cuero", "Especias cálidas"],
    personality: ["intenso", "elegante"]
  },
  {
    id: "armaf-odyssey-mandarin-sky",
    brand: "Armaf",
    name: "Odyssey Mandarin Sky",
    image: "/assets/mandarine skie 1.PNG",
    gallery: ["/assets/mandarine skie 2.JPG"],
    gender: "Hombres",
    prices: { "5ml": 40, "10ml": 70 },
    longevityHours: 7,
    sillage: "Fuerte",
    occasions: ["Día", "Todo uso"],
    seasons: ["Primavera", "Verano"],
    accords: ["Cítrico", "Caramelo", "Dulce"],
    notes: ["Mandarina", "Caramelo", "Cítricos"],
    personality: ["fresco", "dulce"],
    featured: true
  },
  {
    id: "lattafa-yara-elixir",
    brand: "Lattafa",
    name: "Yara Elixir",
    image: "/assets/yara elixir 1.JPG",
    gallery: ["/assets/yara elixir 2.PNG"],
    gender: "Mujeres",
    prices: { "5ml": 35, "10ml": 70 },
    longevityHours: 6,
    sillage: "Fuerte",
    occasions: ["Día", "Todo uso"],
    seasons: ["Primavera", "Otoño"],
    accords: ["Avainillado", "Caramelo", "Afrutado"],
    notes: ["Vainilla", "Caramelo", "Frutas"],
    personality: ["dulce", "elegante"]
  },
  {
    id: "lattafa-yara-tous",
    brand: "Lattafa",
    name: "Yara Tous",
    image: "/assets/yara tous 1.PNG",
    gallery: ["/assets/yara tous 2.JPG"],
    gender: "Mujeres",
    prices: { "5ml": 40, "10ml": 65 },
    longevityHours: 6,
    sillage: "Fuerte",
    occasions: ["Día"],
    seasons: ["Primavera", "Verano"],
    accords: ["Tropical", "Dulce", "Avainillado"],
    notes: ["Mango", "Coco", "Vainilla"],
    personality: ["tropical", "dulce", "fresco"]
  },
  {
    id: "lattafa-eclaire",
    brand: "Lattafa",
    name: "Eclaire",
    image: "/assets/lattafa ecalire 1.JPG",
    gallery: ["/assets/lattafa ecalire 2.JPG"],
    gender: "Mujeres",
    prices: { "5ml": 40, "10ml": 70 },
    longevityHours: 7,
    sillage: "Fuerte",
    occasions: ["Noche", "Todo uso"],
    seasons: ["Invierno", "Otoño"],
    accords: ["Dulce", "Avainillado", "Lactónico"],
    notes: ["Leche cremosa", "Vainilla", "Caramelo"],
    personality: ["dulce", "elegante"],
    featured: true
  },
  {
    id: "lattafa-asad-bourbon",
    brand: "Lattafa",
    name: "Asad Bourbon",
    image: "/assets/asad bourbon 1.JPG",
    gallery: ["/assets/asad bourbon 2.WEBP"],
    gender: "Hombres",
    prices: { "5ml": 35, "10ml": 60 },
    longevityHours: 7,
    sillage: "Fuerte",
    occasions: ["Noche", "Todo uso"],
    seasons: ["Invierno", "Otoño"],
    accords: ["Avainillado", "Cacao", "Fresco especiado"],
    notes: ["Bourbon", "Cacao", "Especias"],
    personality: ["intenso", "elegante"]
  },
  {
    id: "rasasi-hawas-ice",
    brand: "Rasasi",
    name: "Hawas Ice",
    image: "/assets/hawaise ice 1.PNG",
    gallery: ["/assets/hawaise ice 2.PNG"],
    gender: "Hombres",
    prices: { "5ml": 45, "10ml": 80 },
    longevityHours: 8,
    sillage: "Fuerte",
    occasions: ["Día", "Todo uso"],
    seasons: ["Primavera", "Verano"],
    accords: ["Afrutado", "Cítrico", "Fresco"],
    notes: ["Manzana", "Cítricos", "Acorde acuático"],
    personality: ["fresco", "intenso"],
    featured: true
  },
  {
    id: "rasasi-hawas-malibu",
    brand: "Rasasi",
    name: "Hawas Malibu",
    image: "/assets/hawas malibu 1.JPG",
    gallery: ["/assets/hawas malibu 2.WEBP"],
    gender: "Unisex",
    prices: { "5ml": 45, "10ml": 80 },
    longevityHours: 7,
    sillage: "Fuerte",
    occasions: ["Día", "Todo uso"],
    seasons: ["Primavera", "Verano"],
    accords: ["Dulce", "Ámbar", "Cítrico"],
    notes: ["Ámbar", "Cítricos", "Dulzor tropical"],
    personality: ["tropical", "fresco", "dulce"]
  },
  {
    id: "valentino-born-in-roma-intense",
    brand: "Valentino",
    name: "Born in Roma Intense",
    image: "/assets/valentino born in roma intense 1.JPG",
    gallery: ["/assets/valentino born in roma intense 2.JPG"],
    gender: "Hombres",
    prices: { "5ml": 95, "10ml": 180 },
    longevityHours: 7,
    sillage: "Fuerte",
    occasions: ["Noche"],
    seasons: ["Invierno", "Otoño"],
    accords: ["Avainillado", "Ámbar", "Intenso"],
    notes: ["Vainilla", "Ámbar", "Lavanda"],
    personality: ["intenso", "elegante"],
    featured: true
  },
  {
    id: "armaf-club-de-nuit-intense-man",
    brand: "Armaf",
    name: "Club de Nuit Intense Man",
    image: "/assets/club de nuit intense man 1.JPG",
    gallery: ["/assets/club de nuit intense man 2.JPG"],
    gender: "Hombres",
    prices: { "5ml": 35, "10ml": 65 },
    longevityHours: 8,
    sillage: "Fuerte",
    occasions: ["Noche", "Todo uso"],
    seasons: ["Primavera", "Otoño"],
    accords: ["Amaderado", "Cítrico", "Fresco especiado"],
    notes: ["Limón", "Maderas", "Especias"],
    personality: ["fresco", "intenso"]
  },
  {
    id: "armaf-odyssey-homme",
    brand: "Armaf",
    name: "Odyssey Homme",
    image: "/assets/IMG_0982.PNG",
    gender: "Hombres",
    prices: { "5ml": 35, "10ml": 60 },
    longevityHours: 7,
    sillage: "Fuerte",
    occasions: ["Noche", "Todo uso"],
    seasons: ["Invierno", "Otoño"],
    accords: ["Ámbar", "Cálido especiado", "Avainillado"],
    notes: ["Ámbar", "Vainilla", "Especias"],
    personality: ["intenso", "elegante"]
  },
  {
    id: "armaf-odyssey-candee",
    brand: "Armaf",
    name: "Odyssey Candee",
    image: "/assets/odyssey candee 1.JPG",
    gallery: ["/assets/odyssey candee 2.PNG"],
    gender: "Mujeres",
    prices: { "5ml": 35, "10ml": 60 },
    longevityHours: 6,
    sillage: "Fuerte",
    occasions: ["Día", "Todo uso"],
    seasons: ["Primavera", "Verano"],
    accords: ["Afrutado", "Dulce", "Pachulí"],
    notes: ["Frutas", "Azúcar", "Pachulí"],
    personality: ["dulce", "fresco"]
  },
  {
    id: "armaf-club-de-nuit-untold",
    brand: "Armaf",
    name: "Club de Nuit Untold",
    image: "/assets/club de nuit untold 1.WEBP",
    gallery: ["/assets/club de nuit untold 2.PNG"],
    gender: "Unisex",
    prices: { "5ml": 40, "10ml": 70 },
    longevityHours: 8,
    sillage: "Fuerte",
    occasions: ["Noche", "Todo uso"],
    seasons: ["Invierno", "Otoño"],
    accords: ["Amaderado", "Ámbar", "Cálido especiado"],
    notes: ["Ámbar", "Maderas", "Azafrán"],
    personality: ["intenso", "elegante"],
    featured: true
  }
];

export const allAccords = Array.from(new Set(perfumes.flatMap((perfume) => perfume.accords))).sort();
export const allSeasons: PerfumeSeason[] = ["Invierno", "Primavera", "Verano", "Otoño"];
export const allOccasions: PerfumeOccasion[] = ["Día", "Noche", "Todo uso"];
export const allGenders: PerfumeGender[] = ["Hombres", "Mujeres", "Unisex"];
export const featuredPerfumes = perfumes.filter((perfume) => perfume.featured);
