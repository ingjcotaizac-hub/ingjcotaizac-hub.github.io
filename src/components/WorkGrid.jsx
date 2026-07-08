import { useState } from 'react';

export default function WorkGrid({ works }) {
  const [selectedTag, setSelectedTag] = useState('Todos');

  // Obtener tags únicos
  const allTags = ['Todos', ...new Set(works.flatMap(work => work.data.tags))];

  // Filtrar
  const filteredWorks = selectedTag === 'Todos'
    ? works
    : works.filter(work => work.data.tags.includes(selectedTag));

  return (
    <div className="space-y-10">
      {/* Filtros */}
      <div className="flex flex-wrap gap-2 py-4 border-b border-muted">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
              selectedTag === tag
                ? 'bg-accent text-white shadow-sm'
                : 'bg-muted hover:bg-neutral-200 dark:hover:bg-neutral-800 text-fgMuted hover:text-fg'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid de Piezas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWorks.map(work => (
          <a
            key={work.slug}
            href={`/work/${work.slug}`}
            className="group block relative overflow-hidden rounded-xl border border-muted bg-white dark:bg-neutral-900 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            {/* Thumbnail */}
            <div className="aspect-[16:10] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative">
              {/* Overlay en hover */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1">
                  Ver pieza
                </span>
                <h3 className="text-white text-lg font-bold font-serif leading-tight">
                  {work.data.title}
                </h3>
                <p className="text-white/80 text-xs mt-1.5 line-clamp-2">
                  {work.data.description}
                </p>
              </div>
              
              {/* Imagen (o caja placeholder si no existe la imagen físicamente) */}
              <div className="w-full h-full flex items-center justify-center text-5xl">
                {work.data.demoType === 'iframe' && '🔗'}
                {work.data.demoType === 'h5p' && '🎮'}
                {work.data.demoType === 'gallery' && '💻'}
                {work.data.demoType === 'video' && '🎥'}
                {work.data.demoType === 'gif' && '⚡'}
                {work.data.demoType === 'pdf' && '📄'}
              </div>
            </div>

            {/* Info inferior de la tarjeta */}
            <div className="p-5">
              <div className="flex gap-1.5 flex-wrap mb-3">
                {work.data.tools.slice(0, 3).map(tool => (
                  <span key={tool} className="px-2 py-0.5 bg-accentSoft text-accent text-[10px] font-bold rounded-full uppercase tracking-wider">
                    {tool}
                  </span>
                ))}
              </div>
              <h4 className="font-serif font-bold text-fg group-hover:text-accent transition-colors line-clamp-1">
                {work.data.title}
              </h4>
              <p className="text-xs text-fgMuted mt-1">
                {work.data.client} &middot; {work.data.year}
              </p>
            </div>
          </a>
        ))}
      </div>

      {filteredWorks.length === 0 && (
        <div className="text-center py-16">
          <p className="text-fgMuted">No se encontraron piezas en esta categoría.</p>
        </div>
      )}
    </div>
  );
}
