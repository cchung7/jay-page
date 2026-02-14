/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    // Rings and ring-offsets
    { pattern: /ring-(?:accent|white|black)(?:\/\d+)?/ },
    { pattern: /ring-offset-(?:background|white|black)/ },

    // Borders and accent states
    { pattern: /border-(?:accent|border|black|white)(?:\/\d+)?/ },

    // Arbitrary shadow classes (for glow and 3D effects)
    { pattern: /shadow-\[.*\]/ },

    // Arbitrary blur/glow (optional but harmless)
    { pattern: /blur-\[.*\]/ },
  ],
  plugins: [],
};
