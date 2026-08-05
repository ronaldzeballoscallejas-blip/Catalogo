import type { Perfume, PerfumeSize } from "@/data/perfumes";

const DEFAULT_COUNTRY_CODE = "591";

export function normalizeWhatsAppNumber(rawNumber: string) {
  const digits = rawNumber.replace(/\D/g, "");

  if (digits.startsWith(DEFAULT_COUNTRY_CODE)) {
    return digits;
  }

  return `${DEFAULT_COUNTRY_CODE}${digits.replace(/^0+/, "")}`;
}

export function createWhatsAppLink({
  perfume,
  size,
  phone = "+59175639631"
}: {
  perfume: Perfume;
  size: PerfumeSize;
  phone?: string;
}) {
  const price = perfume.prices[size];
  const message = `Hola Lacio Decants, me interesa el perfume ${perfume.name} (${perfume.brand}) en tamaño ${size} por ${price} BS.`;

  return `https://wa.me/${normalizeWhatsAppNumber(phone)}?text=${encodeURIComponent(message)}`;
}

export function createGeneralWhatsAppLink(phone = "+59175639631") {
  const message = "Hola Lacio Decants, quiero consultar disponibilidad y hacer un pedido.";

  return `https://wa.me/${normalizeWhatsAppNumber(phone)}?text=${encodeURIComponent(message)}`;
}
