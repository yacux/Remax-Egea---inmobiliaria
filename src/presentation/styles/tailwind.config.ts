// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Todas las páginas y layouts
    "./src/presentation/**/*.{js,ts,jsx,tsx}", // Componentes, estilos y layouts
    "./src/core/**/*.{js,ts,jsx,tsx}", // (Por si usas clases con estilos aquí)
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
    },
  },
  plugins: [],
};

export default config;
