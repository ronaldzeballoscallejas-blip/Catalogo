"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { allAccords, allGenders, allOccasions, allSeasons } from "@/data/perfumes";

export type Filters = {
  query: string;
  gender: string;
  occasion: string;
  season: string;
  accord: string;
};

type FilterSidebarProps = {
  filters: Filters;
  suggestions: string[];
  resultCount: number;
  onChange: (filters: Filters) => void;
};

const groups = [
  { key: "gender", label: "Género", values: allGenders },
  { key: "occasion", label: "Horario", values: allOccasions },
  { key: "season", label: "Estación", values: allSeasons },
  { key: "accord", label: "Notas", values: allAccords }
] as const;

export function FilterSidebar({ filters, suggestions, resultCount, onChange }: FilterSidebarProps) {
  const update = (key: keyof Filters, value: string) => onChange({ ...filters, [key]: value });
  const hasActiveFilters = filters.query || filters.gender || filters.occasion || filters.season || filters.accord;

  return (
    <aside className="border border-line bg-white p-4 shadow-float lg:sticky lg:top-24 lg:p-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-deepgold">Filtros</p>
          <p className="mt-1 text-sm text-ash">{resultCount} resultados</p>
        </div>
        <SlidersHorizontal className="h-5 w-5 text-ink" />
      </div>

      <label className="relative block">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ash" />
        <input
          value={filters.query}
          onChange={(event) => update("query", event.target.value)}
          placeholder="Buscar perfume o marca"
          className="h-12 w-full border border-line bg-bone pl-10 pr-3 text-sm outline-none transition placeholder:text-ash/70 focus:border-gold"
        />
      </label>

      {suggestions.length > 0 && (
        <div className="mt-2 border border-line bg-white p-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => update("query", suggestion)}
              className="block w-full px-3 py-2 text-left text-xs uppercase tracking-[0.12em] text-ash transition hover:bg-bone hover:text-ink"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      <div className="mt-6 space-y-6">
        {groups.map((group) => (
          <section key={group.key}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => update(group.key, "")}
                className={`gold-sweep border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                  filters[group.key] === "" ? "border-ink bg-ink text-white" : "border-line text-ash hover:border-gold hover:text-ink"
                }`}
              >
                Todos
              </button>
              {group.values.map((value) => (
                <button
                  key={value}
                  onClick={() => update(group.key, value)}
                  className={`gold-sweep border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                    filters[group.key] === value ? "border-ink bg-ink text-white" : "border-line text-ash hover:border-gold hover:text-ink"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      {hasActiveFilters && (
        <button
          onClick={() => onChange({ query: "", gender: "", occasion: "", season: "", accord: "" })}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 border border-line py-3 text-xs font-bold uppercase tracking-[0.18em] text-ink transition hover:border-gold hover:text-deepgold"
        >
          <X className="h-4 w-4" />
          Limpiar filtros
        </button>
      )}
    </aside>
  );
}
