# Cómo añadir una pieza al portafolio LXD

Este portafolio utiliza Astro con **Content Collections** y **Tailwind CSS**, permitiendo agregar trabajos simplemente creando un archivo en formato markdown/MDX.

---

## Estructura de archivos

Las piezas de tu portafolio se gestionan en:
`src/content/work/nombre-de-tu-pieza.mdx`

Las imágenes que utilices (miniaturas, capturas adicionales, etc.) deben alojarse en:
`public/images/work/`

---

## Guía paso a paso

### Paso 1: Preparar los elementos multimedia y de embebido
* **Demos interactivos (Rise, Storyline, Genially)**: Publica a Review 360 u otro hosting y copia la URL de visualización.
* **H5P**: Copia el link del iFrame de H5P.com o de tu LMS Moodle.
* **Capturas de pantalla (Moodle / LMS)**: Guarda capturas de pantalla a una resolución recomendada de `16:10` o `4:3` en formato `.jpg` o `.png` optimizado.
* **Documentos PDF (Storyboards, Guiones)**: Guárdalos en `public/pdfs/nombre-documento.pdf`.

### Paso 2: Crear el archivo `.mdx`
Crea un nuevo archivo con extensión `.mdx` dentro de `src/content/work/`. 

Define los metadatos (Frontmatter) arriba del todo, y el contenido explicativo con su componente de integración debajo:

```markdown
---
title: "Módulo interactivo de Housekeeping"
year: 2025
client: "Cadena Hotelera XYZ"
role: "LXD & Diseño instruccional"
tools: ["Articulate Rise", "Vyond"]
tags: ["Hotelería", "Micro-learning"]
thumbnail: "/images/work/housekeeping-thumb.jpg"
demoType: "iframe"
demoUrl: "https://rise.articulate.com/share/tu-id-de-compartir"
featured: true
order: 1
description: "Módulo autoformativo gamificado para la capacitación del personal de pisos en técnicas de desinfección."
---
import ArticulateEmbed from '../../components/embeds/ArticulateEmbed.astro';

Aquí escribes un párrafo muy corto de contexto (100-150 palabras máximo) sobre los objetivos del proyecto y la aproximación pedagógica.

<ArticulateEmbed url={frontmatter.demoUrl} title={frontmatter.title} />
```

---

## Componentes Disponibles para Integrar Demos

### 1. Demos de Articulate Rise / Storyline
```markdown
import ArticulateEmbed from '../../components/embeds/ArticulateEmbed.astro';

<ArticulateEmbed url={frontmatter.demoUrl} title={frontmatter.title} />
```

### 2. Demos de H5P
```markdown
import H5PEmbed from '../../components/embeds/H5PEmbed.astro';

<H5PEmbed url={frontmatter.demoUrl} title={frontmatter.title} />
```

### 3. Vídeos (YouTube / Vimeo)
```markdown
import VideoEmbed from '../../components/embeds/VideoEmbed.astro';

<VideoEmbed url="https://www.youtube.com/watch?v=tu-video-id" title={frontmatter.title} />
```

### 4. Galería de Capturas de Moodle (con Lightbox/Ampliado)
```markdown
import ImageGallery from '../../components/embeds/ImageGallery.astro';

<ImageGallery images={[
  '/images/work/captura1.jpg',
  '/images/work/captura2.jpg'
]} />
```

### 5. PDFs descargables (Guiones, storyboards)
```markdown
import PdfPreview from '../../components/embeds/PdfPreview.astro';

<PdfPreview url="/pdfs/guion-housekeeping.pdf" />
```

### 6. Animaciones en GIF (con control Play/Pause)
```markdown
import GifPlayer from '../../components/embeds/GifPlayer.astro';

<GifPlayer gifUrl="/images/work/animacion.gif" placeholderUrl="/images/work/animacion-estatica.jpg" alt="Demostración de simulación" />
```
