"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";
import type { Perfume, PerfumeSize } from "@/data/perfumes";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { ProductImage } from "@/components/ProductImage";

type PerfumeCardProps = {
  perfume: Perfume;
  priority?: boolean;
};

export function PerfumeCard({ perfume, priority = false }: PerfumeCardProps) {
  const [size, setSize] = useState<PerfumeSize>("5ml");
  const price = perfume.prices[size];
  const whatsappHref = useMemo(() => createWhatsAppLink({ perfume, size }), [perfume, size]);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex h-full flex-col bg-white transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-3 pb-3">
        <div>
          <p className="text-xs font-medium text-neutral-500">{perfume.brand}</p>
          <p className="mt-1 text-xs text-neutral-400">{perfume.gender}</p>
        </div>
        <span className="text-xs font-medium uppercase text-neutral-300">
          {perfume.longevityHours}h • {perfume.sillage}
        </span>
      </div>

      <div className="relative aspect-square w-full overflow-hidden bg-[#F8F9FA] sm:aspect-[3/4]">
        <ProductImage src={perfume.image} alt={`${perfume.name} ${perfume.brand}`} priority={priority} />

        <div className="pointer-events-none absolute inset-x-3 bottom-3 grid translate-y-2 grid-cols-2 gap-2 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
          {(["5ml", "10ml"] as PerfumeSize[]).map((option) => (
            <a
              key={option}
              href={createWhatsAppLink({ perfume, size: option })}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/95 px-3 py-2 text-center text-xs font-medium text-neutral-950 shadow-sm backdrop-blur transition hover:bg-neutral-950 hover:text-white"
            >
              {option}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <h3 className="font-display text-2xl font-semibold leading-none text-neutral-950 sm:text-3xl">{perfume.name}</h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {perfume.accords.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 rounded-full bg-neutral-100 p-1">
          {(["5ml", "10ml"] as PerfumeSize[]).map((option) => (
            <button
              key={option}
              onClick={() => setSize(option)}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 ${
                size === option ? "bg-white text-neutral-950 shadow-sm" : "text-neutral-400 hover:text-neutral-950"
              }`}
              aria-pressed={size === option}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <p className="text-xl font-semibold text-neutral-950 sm:text-2xl">{price} BS</p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            <MessageCircle className="h-4 w-4" />
            Pedir
          </a>
        </div>
      </div>
    </motion.article>
  );
}
