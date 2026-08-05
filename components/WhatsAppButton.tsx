import { MessageCircle, SlidersHorizontal } from "lucide-react";
import { createGeneralWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <>
      <a
        href={createGeneralWhatsAppLink()}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 hidden items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-black shadow-boutique transition hover:-translate-y-1 md:inline-flex"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>

      <nav className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 rounded-full border border-neutral-200 bg-white/94 text-xs font-medium uppercase tracking-[0.14em] text-neutral-950 shadow-boutique backdrop-blur md:hidden">
        <a href="#catalogo" className="inline-flex items-center justify-center gap-2 border-r border-neutral-200 px-4 py-3.5">
          <SlidersHorizontal className="h-4 w-4" />
          Filtros
        </a>
        <a
          href={createGeneralWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-r-full bg-[#25D366] px-4 py-3.5"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </nav>
    </>
  );
}
