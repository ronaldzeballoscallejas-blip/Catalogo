"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageCircle, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { perfumes } from "@/data/perfumes";
import type { Perfume } from "@/data/perfumes";
import { createWhatsAppLink } from "@/lib/whatsapp";

const steps = [
  { key: "time", title: "¿Cuándo lo usarás?", options: ["Día", "Noche", "Todo uso"] },
  { key: "mood", title: "¿Qué sensación buscas?", options: ["Dulce", "Fresco", "Intenso", "Elegante", "Tropical"] },
  { key: "moment", title: "¿Para qué momento?", options: ["Diario", "Cita", "Oficina", "Fiesta", "Viaje"] }
] as const;

type Answers = Record<string, string>;

function scorePerfume(perfume: Perfume, answers: Answers) {
  let score = 0;

  if (answers.time && perfume.occasions.includes(answers.time as never)) score += 4;
  if (answers.mood && perfume.personality.includes(answers.mood.toLowerCase() as never)) score += 4;
  if (answers.moment === "Diario" && perfume.occasions.some((item) => item === "Día" || item === "Todo uso")) score += 2;
  if (answers.moment === "Cita" && perfume.personality.some((item) => item === "elegante" || item === "dulce")) score += 2;
  if (answers.moment === "Oficina" && perfume.occasions.includes("Día")) score += 2;
  if (answers.moment === "Fiesta" && perfume.sillage === "Fuerte" && perfume.longevityHours >= 8) score += 2;
  if (answers.moment === "Viaje" && perfume.occasions.includes("Todo uso")) score += 2;

  return score;
}

export function RecommendationQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const current = steps[step];

  const recommendations = useMemo(
    () =>
      perfumes
        .map((perfume) => ({ perfume, score: scorePerfume(perfume, answers) }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score || b.perfume.longevityHours - a.perfume.longevityHours)
        .slice(0, 3),
    [answers]
  );

  return (
    <section id="quiz" className="border-y border-neutral-100 bg-neutral-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-20">
        <div>
          <h2 className="font-display text-5xl font-semibold leading-none text-neutral-950 sm:text-6xl">Elige mejor.</h2>
        </div>

        <div className="bg-white p-5 shadow-sm">
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-sm text-neutral-400">
              {step + 1} / {steps.length}
            </p>
            <button
              onClick={() => {
                setAnswers({});
                setStep(0);
              }}
              className="inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-neutral-950"
            >
              <RotateCcw className="h-4 w-4" />
              Reiniciar
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-display text-4xl font-semibold text-neutral-950">{current.title}</h3>
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {current.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setAnswers((previous) => ({ ...previous, [current.key]: option }))}
                    className={`rounded-full border px-4 py-3 text-sm transition ${
                      answers[current.key] === option
                        ? "border-neutral-950 bg-neutral-950 text-white"
                        : "border-neutral-200 text-neutral-500 hover:border-neutral-950 hover:text-neutral-950"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-5">
            <button
              disabled={step === 0}
              onClick={() => setStep((value) => Math.max(value - 1, 0))}
              className="inline-flex items-center gap-2 text-sm text-neutral-400 transition enabled:hover:text-neutral-950 disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4" />
              Atrás
            </button>
            <button
              disabled={!answers[current.key]}
              onClick={() => setStep((value) => Math.min(value + 1, steps.length - 1))}
              className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm text-white transition enabled:hover:bg-neutral-800 disabled:opacity-30"
            >
              Siguiente
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-7 grid gap-3">
            {recommendations.map(({ perfume }) => (
              <a
                key={perfume.id}
                href={createWhatsAppLink({ perfume, size: "5ml" })}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 border-t border-neutral-100 py-4 transition hover:text-neutral-500"
              >
                <span>
                  <span className="block font-display text-2xl font-semibold text-neutral-950">{perfume.name}</span>
                  <span className="text-sm text-neutral-400">
                    {perfume.brand} · desde {perfume.prices["5ml"]} BS
                  </span>
                </span>
                <MessageCircle className="h-5 w-5 shrink-0 text-neutral-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
