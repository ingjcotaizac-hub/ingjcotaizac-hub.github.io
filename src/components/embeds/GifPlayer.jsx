import { useState, useRef } from 'react';

export default function GifPlayer({ gifUrl, placeholderUrl, alt }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const imgRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-inner border border-muted bg-neutral-900 group aspect-video flex items-center justify-center">
      <img
        ref={imgRef}
        src={isPlaying ? gifUrl : placeholderUrl}
        alt={alt}
        className="w-full h-full object-cover"
      />
      
      {/* Botón de Play/Pause flotante */}
      <button
        onClick={togglePlay}
        className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors focus:outline-none"
        aria-label={isPlaying ? "Pausar animación" : "Reproducir animación"}
      >
        <div className="w-16 h-16 rounded-full bg-white/95 text-neutral-950 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
          {isPlaying ? (
            // Icono de Pausa
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
          ) : (
            // Icono de Play
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 translate-x-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
            </svg>
          )}
        </div>
        
        {/* Etiqueta de GIF */}
        {!isPlaying && (
          <span className="absolute bottom-4 right-4 px-2 py-1 bg-black/85 text-white font-bold text-xs rounded tracking-wider uppercase">
            GIF
          </span>
        )}
      </button>
    </div>
  );
}
