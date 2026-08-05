"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { perfumes } from "@/data/perfumes";
import { createGeneralWhatsAppLink, createWhatsAppLink } from "@/lib/whatsapp";

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [onDarkSection, setOnDarkSection] = useState(false);
  const { scrollY } = useScroll();
  const padding = useTransform(scrollY, [0, 120], [16, 9]);

  useEffect(() => {
    const updateTheme = () => {
      const darkSection = document.getElementById("destacados");
      if (!darkSection) return;

      const rect = darkSection.getBoundingClientRect();
      setOnDarkSection(rect.top <= 74 && rect.bottom >= 74);
    };

    updateTheme();
    window.addEventListener("scroll", updateTheme, { passive: true });
    window.addEventListener("resize", updateTheme);

    return () => {
      window.removeEventListener("scroll", updateTheme);
      window.removeEventListener("resize", updateTheme);
    };
  }, []);

  const matches = useMemo(() => {
    const clean = query.trim().toLowerCase();
    if (clean.length < 2) return [];

    return perfumes
      .filter((perfume) => `${perfume.brand} ${perfume.name}`.toLowerCase().includes(clean))
      .slice(0, 6);
  }, [query]);

  const headerClass = onDarkSection
    ? "border-white/10 bg-black/90 text-white"
    : "border-neutral-100 bg-white/80 text-neutral-900";

  const mutedClass = onDarkSection ? "text-white/65 hover:text-white" : "text-neutral-500 hover:text-neutral-900";

  return (
    <>
      <motion.header
        style={{ paddingTop: padding, paddingBottom: padding }}
        className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${headerClass}`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="leading-none">
            <p className="font-display text-2xl font-semibold tracking-wide">Lacio</p>
            <p className={`mt-0.5 text-[11px] font-medium uppercase tracking-[0.24em] ${onDarkSection ? "text-white/55" : "text-neutral-500"}`}>
              Decants
            </p>
          </a>

          <div className={`hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.16em] lg:flex ${mutedClass}`}>
            <a className="transition" href="#destacados">
              Destacados
            </a>
            <a className="transition" href="#catalogo">
              Catálogo
            </a>
            <a className="transition" href="#quiz">
              Guía
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className={`grid h-10 w-10 place-items-center rounded-full border transition ${
                onDarkSection ? "border-white/15 text-white hover:bg-white hover:text-black" : "border-neutral-200 text-neutral-900 hover:bg-neutral-900 hover:text-white"
              }`}
              aria-label="Abrir buscador"
            >
              <Search className="h-4 w-4" />
            </button>
            <a
              href={createGeneralWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className={`hidden rounded-full px-5 py-2 text-xs font-medium uppercase tracking-widest transition sm:inline-flex ${
                onDarkSection ? "bg-white text-black hover:bg-neutral-200" : "bg-black text-white hover:bg-neutral-800"
              }`}
            >
              Contacto
            </a>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed inset-0 z-[80] bg-black/25 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-16 max-w-2xl rounded-2xl bg-white p-5 shadow-2xl"
            >
              <div className="mb-5 flex items-center justify-between">
                <p className="font-display text-3xl text-neutral-950">Buscar</p>
                <button onClick={() => setSearchOpen(false)} className="grid h-10 w-10 place-items-center rounded-full border border-neutral-200">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="relative">
                <Search className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="h-14 w-full border-b border-neutral-300 bg-transparent pl-8 pr-2 text-base outline-none transition focus:border-black"
                  placeholder="Marca o perfume"
                />
              </div>
              <div className="mt-4 divide-y divide-neutral-100">
                {matches.map((perfume) => (
                  <a
                    key={perfume.id}
                    href={createWhatsAppLink({ perfume, size: "5ml" })}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between py-4 text-sm transition hover:text-neutral-500"
                  >
                    <span>
                      <span className="block font-medium">{perfume.name}</span>
                      <span className="text-xs text-neutral-400">{perfume.brand}</span>
                    </span>
                    <span className="text-xs font-medium">{perfume.prices["5ml"]} BS</span>
                  </a>
                ))}
                {query.length >= 2 && matches.length === 0 && <p className="py-6 text-sm text-neutral-400">Sin coincidencias.</p>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
