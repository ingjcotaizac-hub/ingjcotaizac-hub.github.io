/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: 'var(--bg-base)',
        muted: 'var(--bg-muted)',
        fg: 'var(--fg-base)',
        fgMuted: 'var(--fg-muted)',
        accent: 'var(--accent-primary)',
        accentSoft: 'var(--accent-soft)',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}