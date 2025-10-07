/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007ACC',          // this is what bg-primary uses
          foreground: '#FFFFFF',       // use text-primary-foreground
        },
        secondary: {
          DEFAULT: '#569CD6',
          foreground: '#FFFFFF',
        },
        background: '#1E1E1E',
        foreground: '#D4D4D4',
        card: '#252526',
        'card-foreground': '#D4D4D4',
        muted: '#3E3E42',
        'muted-foreground': '#858585',
        success: '#4EC9B0',
        'success-foreground': '#1E1E1E',
        warning: '#FFCC02',
        'warning-foreground': '#1E1E1E',
        error: '#F44747',
        'error-foreground': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
