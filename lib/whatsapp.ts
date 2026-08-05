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

export type WhatsAppCartItem = {
  brand: string;
  name: string;
  size: PerfumeSize;
  price: number;
  quantity: number;
};

export function createCartWhatsAppLink(items: WhatsAppCartItem[], phone = "+59175639631") {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const lines = items.map(
    (item, index) =>
      `${index + 1}. ${item.name} (${item.brand}) - ${item.size} x${item.quantity} - ${item.price * item.quantity} BS`
  );
  const message = `Hola Lacio Decants, quiero ordenar estos decants:\n\n${lines.join("\n")}\n\nTotal: ${total} BS.`;

  return `https://wa.me/${normalizeWhatsAppNumber(phone)}?text=${encodeURIComponent(message)}`;
}

export function createGeneralWhatsAppLink(phone = "+59175639631") {
  const message = "Hola Lacio Decants, quiero consultar disponibilidad y hacer un pedido.";

  return `https://wa.me/${normalizeWhatsAppNumber(phone)}?text=${encodeURIComponent(message)}`;
}
