import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lacio Decants | Boutique de perfumes en decant",
  description:
    "Catálogo de decants premium con selección editorial y pedidos directos por WhatsApp."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
