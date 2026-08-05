"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { FilterSection, type Filters } from "@/components/FilterSection";
import { PerfumeCard } from "@/components/PerfumeCard";
import { RecommendationQuiz } from "@/components/RecommendationQuiz";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { perfumes } from "@/data/perfumes";

const initialFilters: Filters = {
  query: "",
  gender: "",
  occasion: "",
  season: "",
  accord: ""
};

export default function Home() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const filteredPerfumes = useMemo(() => {
    const query = filters.query.trim().toLowerCase();

    return perfumes.filter((perfume) => {
      const searchMatch = !query || `${perfume.brand} ${perfume.name}`.toLowerCase().includes(query);
      const genderMatch = !filters.gender || perfume.gender === filters.gender;
      const occasionMatch = !filters.occasion || perfume.occasions.includes(filters.occasion as never);
      const seasonMatch = !filters.season || perfume.seasons.includes(filters.season as never);
      const accordMatch = !filters.accord || perfume.accords.includes(filters.accord);

      return searchMatch && genderMatch && occasionMatch && seasonMatch && accordMatch;
    });
  }, [filters]);

  return (
    <>
      <Navbar />

      <main className="bg-white">
        <HeroSection />
        <FeaturedCarousel />

        <section id="catalogo" className="bg-white py-10 sm:py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="font-display text-4xl font-semibold leading-none text-neutral-950 sm:text-5xl lg:text-6xl">
                Catálogo
              </h2>
            </div>

            <FilterSection filters={filters} resultCount={filteredPerfumes.length} onChange={setFilters} />

            {filteredPerfumes.length ? (
              <motion.div layout className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredPerfumes.map((perfume, index) => (
                  <PerfumeCard key={perfume.id} perfume={perfume} priority={index < 4} />
                ))}
              </motion.div>
            ) : (
              <div className="bg-neutral-50 p-10 text-center">
                <p className="font-display text-3xl font-semibold text-neutral-950">Sin coincidencias.</p>
              </div>
            )}
          </div>
        </section>

        <RecommendationQuiz />
      </main>

      <footer className="bg-white pb-28 pt-10 text-center md:pb-10">
        <div className="mx-auto mb-8 h-px max-w-2xl bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
        <p className="font-display text-3xl tracking-wide text-neutral-950">Lacio Decants</p>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-neutral-400">WhatsApp · +591 75639631</p>
      </footer>

      <WhatsAppButton />
    </>
  );
}
