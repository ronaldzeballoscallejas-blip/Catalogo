import { featuredPerfumes } from "@/data/perfumes";
import { ProductImage } from "@/components/ProductImage";

export function HeroSection() {
  const heroPerfume = featuredPerfumes[0];

  return (
    <section className="border-b border-neutral-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_.82fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.01em] text-neutral-950 sm:text-6xl lg:text-8xl">
            Fragancias selectas, sin comprar a ciegas.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-neutral-500 sm:text-lg">
            Decants de 5 ml y 10 ml para descubrir tu próxima firma olfativa.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#catalogo"
              className="rounded-full bg-neutral-950 px-6 py-3 text-center text-xs font-medium uppercase tracking-widest text-white transition hover:bg-neutral-800"
            >
              Ver catálogo
            </a>
            <a
              href="#destacados"
              className="rounded-full border border-neutral-200 px-6 py-3 text-center text-xs font-medium uppercase tracking-widest text-neutral-950 transition hover:border-neutral-950"
            >
              Destacados
            </a>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-[.72fr_1fr]">
          <div className="hidden content-end sm:grid">
            <div className="bg-neutral-50 p-4">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F8F9FA]">
                <ProductImage src={featuredPerfumes[1]?.image ?? heroPerfume.image} alt="Decant destacado" />
              </div>
            </div>
          </div>
          <div className="bg-neutral-50 p-3 shadow-sm sm:p-4">
            <div className="relative aspect-square overflow-hidden bg-[#F8F9FA] sm:aspect-[3/4]">
              <ProductImage src={heroPerfume.image} alt={`${heroPerfume.name} ${heroPerfume.brand}`} priority />
            </div>
            <div className="mt-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-neutral-500">{heroPerfume.brand}</p>
                <h2 className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">{heroPerfume.name}</h2>
              </div>
              <p className="text-xl font-medium">{heroPerfume.prices["5ml"]} BS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
