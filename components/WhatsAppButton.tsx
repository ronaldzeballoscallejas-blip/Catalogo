import { MessageCircle, SlidersHorizontal } from "lucide-react";
import { createGeneralWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <>
      <a
        href={createGeneralWhatsAppLink()}
        target="_blank"
        rel="noreferrer"
        className="gold-sweep fixed bottom-5 right-5 z-50 hidden items-center gap-3 bg-[#25D366] px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-ink shadow-boutique transition hover:-translate-y-1 md:inline-flex"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>

      <nav className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 border border-line bg-white/94 text-xs font-bold uppercase tracking-[0.16em] text-ink shadow-boutique backdrop-blur md:hidden">
        <a href="#catalogo" className="inline-flex items-center justify-center gap-2 border-r border-line px-4 py-4">
          <SlidersHorizontal className="h-4 w-4" />
          Filtros
        </a>
        <a href={createGeneralWhatsAppLink()} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] px-4 py-4">
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </nav>
    </>
  );
}
