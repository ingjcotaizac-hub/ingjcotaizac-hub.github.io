import { useState } from 'react';

export default function Lightbox({ images }) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div class="space-y-6">
      {/* Grid de miniaturas */}
      <div class="grid grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(img)}
            className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-muted bg-muted focus:outline-none focus:ring-2 focus:ring-accent transition-all"
          >
            <img
              src={img}
              alt={`Captura ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <span className="text-white text-xs font-semibold tracking-wider uppercase bg-black/60 px-3 py-1.5 rounded-full">
                Ampliar
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal de Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setActiveImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl font-bold bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setActiveImage(null)}
            aria-label="Cerrar modal"
          >
            &times;
          </button>
          
          <img
            src={activeImage}
            alt="Captura ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
