import { useState } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

const photos = [
  { src: "/gallery/IMG_20250907_224538_096.webp", alt: "Momento Wicked 1" },
  { src: "/gallery/IMG-20241124-WA0019.jpg", alt: "Momento Wicked 2" },
  { src: "/gallery/Screenshot_20251025_122703_Photos.jpg", alt: "Momento Wicked 3" },
  { src: "/gallery/Screenshot_20251025_122738_Photos.jpg", alt: "Momento Wicked 4" },
  { src: "/gallery/IMG_20241123_205824_285.jpg", alt: "Momento Wicked 5" },
  { src: "/gallery/IMG_20241123_231055_960.jpg", alt: "Momento Wicked 6" },
  { src: "/gallery/20250806_225408.jpg", alt: "Momento Wicked 7" },
  { src: "/gallery/20250817_150603.jpg", alt: "Momento Wicked 8" },
  { src: "/gallery/20250907_190102.jpg", alt: "Momento Wicked 9" },
  { src: "/gallery/20251012_193803.jpg", alt: "Momento Wicked 10" },
  { src: "/gallery/20251025_223723.jpg", alt: "Momento Wicked 11" },
  { src: "/gallery/20250806_195550.jpg", alt: "Momento Wicked 12" },
  { src: "/gallery/20250910_235803.jpg", alt: "Momento Wicked 13" },
  { src: "/gallery/20251012_212358.jpg", alt: "Momento Wicked 14" },
  { src: "/gallery/20251012_223900.jpg", alt: "Momento Wicked 15" },
];

export default function WickedGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {photos.map((photo, index) => (
          <Card
            key={index}
            className="overflow-hidden cursor-pointer group border-primary/20 hover:border-primary/50 transition-all hover:scale-105"
            onClick={() => setSelectedPhoto(index)}
          >
            <div className="aspect-square relative">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Card>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={photos[selectedPhoto].src}
            alt={photos[selectedPhoto].alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

