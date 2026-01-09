/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",   // if you’re using /src directory
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
  ],
  plugins: [],
};
