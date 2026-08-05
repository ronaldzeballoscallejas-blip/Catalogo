"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import type { PerfumeSize } from "@/data/perfumes";
import { createCartWhatsAppLink } from "@/lib/whatsapp";

export type CartItem = {
  id: string;
  perfumeId: string;
  brand: string;
  name: string;
  size: PerfumeSize;
  price: number;
  quantity: number;
};

type CartDrawerProps = {
  items: CartItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
};

export function CartDrawer({
  items,
  open,
  onOpenChange,
  onIncrement,
  onDecrement,
  onRemove,
  onClear
}: CartDrawerProps) {
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const checkoutHref = createCartWhatsAppLink(items);

  return (
    <>
      <button
        onClick={() => onOpenChange(true)}
        className="fixed bottom-20 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-3 text-sm font-medium text-white shadow-boutique transition hover:bg-neutral-800 md:bottom-5 md:right-5"
      >
        <ShoppingBag className="h-4 w-4" />
        Carrito
        {itemCount > 0 && (
          <span className="grid h-5 min-w-5 place-items-center rounded-full bg-white px-1.5 text-xs text-neutral-950">{itemCount}</span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] bg-black/30 p-3 backdrop-blur-sm sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.aside
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="ml-auto flex h-full w-full max-w-md flex-col rounded-3xl bg-white p-5 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div>
                  <h2 className="font-display text-3xl font-semibold text-neutral-950">Carrito</h2>
                  <p className="text-sm text-neutral-400">{itemCount} item{itemCount === 1 ? "" : "s"}</p>
                </div>
                <button onClick={() => onOpenChange(false)} className="grid h-10 w-10 place-items-center rounded-full border border-neutral-200">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4">
                {items.length === 0 ? (
                  <div className="grid h-full place-items-center text-center">
                    <p className="text-sm text-neutral-400">Aún no agregaste decants.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <article key={item.id} className="border-b border-neutral-100 pb-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-display text-2xl font-semibold leading-none text-neutral-950">{item.name}</p>
                            <p className="mt-1 text-sm text-neutral-400">
                              {item.brand} · {item.size} · {item.price} BS
                            </p>
                          </div>
                          <button onClick={() => onRemove(item.id)} className="text-neutral-300 transition hover:text-neutral-950">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="inline-flex items-center rounded-full bg-neutral-100 p-1">
                            <button onClick={() => onDecrement(item.id)} className="grid h-8 w-8 place-items-center rounded-full bg-white">
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                            <button onClick={() => onIncrement(item.id)} className="grid h-8 w-8 place-items-center rounded-full bg-white">
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <p className="font-medium text-neutral-950">{item.price * item.quantity} BS</p>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-neutral-100 pt-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-neutral-400">Total</span>
                  <span className="text-2xl font-semibold text-neutral-950">{total} BS</span>
                </div>
                <div className="grid grid-cols-[.8fr_1.2fr] gap-3">
                  <button
                    onClick={onClear}
                    disabled={!items.length}
                    className="rounded-full border border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-500 transition hover:border-neutral-950 hover:text-neutral-950 disabled:opacity-30"
                  >
                    Vaciar
                  </button>
                  <a
                    href={items.length ? checkoutHref : undefined}
                    target="_blank"
                    rel="noreferrer"
                    aria-disabled={!items.length}
                    className={`rounded-full px-4 py-3 text-center text-sm font-medium ${
                      items.length ? "bg-[#25D366] text-black hover:bg-[#1fc35b]" : "pointer-events-none bg-neutral-100 text-neutral-400"
                    }`}
                  >
                    Pedir por WhatsApp
                  </a>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
