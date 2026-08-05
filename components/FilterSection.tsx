"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";
import { allAccords, allGenders, allOccasions, allSeasons } from "@/data/perfumes";

export type Filters = {
  query: string;
  gender: string;
  occasion: string;
  season: string;
  accord: string;
};

type FilterSectionProps = {
  filters: Filters;
  resultCount: number;
  onChange: (filters: Filters) => void;
};

const genderOptions = [
  { label: "Todos", value: "" },
  { label: "Hombre", value: "Hombres" },
  { label: "Mujer", value: "Mujeres" },
  { label: "Unisex", value: "Unisex" }
];

const advancedGroups = [
  { key: "occasion", label: "Horario", values: allOccasions },
  { key: "season", label: "Estación", values: allSeasons },
  { key: "accord", label: "Notas", values: allAccords }
] as const;

export function FilterSection({ filters, resultCount, onChange }: FilterSectionProps) {
  const [open, setOpen] = useState(false);
  const update = (key: keyof Filters, value: string) => onChange({ ...filters, [key]: value });
  const hasAdvanced = filters.occasion || filters.season || filters.accord;

  return (
    <section className="mb-8">
      <div className="flex flex-col gap-5 border-y border-neutral-100 py-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex gap-6 overflow-x-auto">
            {genderOptions.map((option) => (
              <button
                key={option.label}
                onClick={() => update("gender", option.value)}
                className={`shrink-0 border-b py-2 text-sm font-medium transition ${
                  filters.gender === option.value
                    ? "border-neutral-950 text-neutral-950"
                    : "border-transparent text-neutral-400 hover:text-neutral-950"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              value={filters.query}
              onChange={(event) => update("query", event.target.value)}
              placeholder="Buscar por marca o perfume"
              className="h-11 min-w-0 border-b border-neutral-300 bg-transparent px-0 text-sm outline-none transition placeholder:text-neutral-400 focus:border-black sm:w-80"
            />
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-600 transition hover:border-neutral-950 hover:text-neutral-950"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filtrar por notas {hasAdvanced ? "(+)" : "+"}
            </button>
          </div>
        </div>

        <p className="text-sm text-neutral-400">{resultCount} perfumes</p>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] bg-black/25 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.aside
              initial={{ x: 32, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 32, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="ml-auto flex h-full w-full max-w-md flex-col rounded-3xl bg-white p-6 shadow-2xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <h3 className="font-display text-3xl font-semibold text-neutral-950">Filtros</h3>
                <button onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full border border-neutral-200">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-7 overflow-y-auto">
                {advancedGroups.map((group) => (
                  <div key={group.key}>
                    <p className="mb-3 text-sm font-medium text-neutral-500">{group.label}</p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => update(group.key, "")}
                        className={`rounded-full border px-4 py-2 text-sm transition ${
                          filters[group.key] === "" ? "border-neutral-950 bg-neutral-950 text-white" : "border-neutral-200 text-neutral-500 hover:text-neutral-950"
                        }`}
                      >
                        Todos
                      </button>
                      {group.values.map((value) => (
                        <button
                          key={value}
                          onClick={() => update(group.key, value)}
                          className={`rounded-full border px-4 py-2 text-sm transition ${
                            filters[group.key] === value ? "border-neutral-950 bg-neutral-950 text-white" : "border-neutral-200 text-neutral-500 hover:text-neutral-950"
                          }`}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
                <button
                  onClick={() => onChange({ ...filters, occasion: "", season: "", accord: "" })}
                  className="rounded-full border border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-600 transition hover:border-neutral-950 hover:text-neutral-950"
                >
                  Limpiar
                </button>
                <button onClick={() => setOpen(false)} className="rounded-full bg-neutral-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-neutral-800">
                  Aplicar
                </button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
