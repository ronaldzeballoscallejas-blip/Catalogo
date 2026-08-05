"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { featuredPerfumes } from "@/data/perfumes";
import { ProductImage } from "@/components/ProductImage";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function FeaturedCarousel() {
  const [index, setIndex] = useState(0);
  const active = featuredPerfumes[index];

  const goTo = (nextIndex: number) => {
    const total = featuredPerfumes.length;
    setIndex((nextIndex + total) % total);
  };

  return (
    <section id="destacados" className="bg-neutral-950 py-14 text-white lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-5xl font-semibold leading-none">Selección</h2>
          <div className="flex gap-2">
            <button onClick={() => goTo(index - 1)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:bg-white hover:text-black">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => goTo(index + 1)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:bg-white hover:text-black">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid overflow-hidden bg-[#121212] lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative min-h-[380px] bg-[#101010] sm:min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -28 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0 p-6 sm:p-8"
              >
                <div className="relative h-full w-full">
                  <ProductImage src={active.image} alt={`${active.name} ${active.brand}`} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-center p-7 lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.28 }}
              >
                <p className="text-sm text-white/45">{active.brand}</p>
                <h3 className="mt-3 font-display text-5xl font-semibold leading-none sm:text-6xl">{active.name}</h3>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
                  {active.accords.join(" · ")}
                </p>
                <a
                  href={createWhatsAppLink({ perfume: active, size: "10ml" })}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pedir 10ml
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {featuredPerfumes.map((perfume, dotIndex) => (
            <button
              key={perfume.id}
              onClick={() => setIndex(dotIndex)}
              className={`h-2 rounded-full transition-all ${dotIndex === index ? "w-9 bg-white" : "w-2 bg-white/25 hover:bg-white/60"}`}
              aria-label={`Ver ${perfume.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
