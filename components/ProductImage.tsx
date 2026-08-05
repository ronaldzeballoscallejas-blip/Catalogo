"use client";

import Image from "next/image";
import { ImageOff } from "lucide-react";
import { useState } from "react";

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDYwMCA4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZyI+PHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiNmNWY1ZjciLz48cmVjdCB4PSIyMzAiIHk9IjE4MCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSI0MjAiIGZpbGw9IiNlM2UwZDkiLz48L3N2Zz4=";

type ProductImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function ProductImage({ src, alt, priority = false, className = "" }: ProductImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`flex h-full w-full flex-col items-center justify-center bg-bone text-ash ${className}`}>
        <ImageOff className="mb-3 h-8 w-8" />
        <span className="text-xs font-semibold uppercase tracking-[0.22em]">Imagen no disponible</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1280px) 28vw, (min-width: 768px) 42vw, 92vw"
      priority={priority}
      placeholder="blur"
      blurDataURL={blurDataURL}
      onError={() => setFailed(true)}
      className={`h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105 ${className}`}
    />
  );
}
