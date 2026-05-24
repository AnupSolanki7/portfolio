/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F7F2E8',
          dark: '#EDE8DA',
          light: '#FDFAF4',
          card: '#F0EBE0',
        },
        ink: {
          DEFAULT: '#1A1A2E',
          blue: '#1D4ED8',
          medium: '#2563EB',
          light: '#60A5FA',
          faint: '#BFDBFE',
        },
        graphite: {
          DEFAULT: '#374151',
          light: '#6B7280',
          pale: '#9CA3AF',
        },
        'margin-red': '#DC2626',
        'margin-red-light': '#FCA5A5',
        highlight: '#FEF08A',
        'highlight-green': '#BBF7D0',
        blueprint: {
          DEFAULT: '#DBEAFE',
          dark: '#BFDBFE',
          grid: 'rgba(59,130,246,0.08)',
        },
        ruled: 'rgba(59,130,246,0.2)',
        grid: 'rgba(59,130,246,0.07)',
        background: '#F7F2E8',
        foreground: '#1A1A2E',
        card: '#F0EBE0',
        'card-foreground': '#1A1A2E',
        muted: '#E8E2D5',
        'muted-foreground': '#6B7280',
        border: 'rgba(59,130,246,0.25)',
        primary: {
          DEFAULT: '#1D4ED8',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#374151',
          foreground: '#FFFFFF',
        },
      },
      fontFamily: {
        hand: ['var(--font-hand)', 'Caveat', 'cursive'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Fira Code', 'Monaco', 'monospace'],
      },
      backgroundImage: {
        'notebook': `
          linear-gradient(to right, transparent 79px, rgba(220,38,38,0.35) 79px, rgba(220,38,38,0.35) 81px, transparent 81px),
          repeating-linear-gradient(transparent 0px, transparent 27px, rgba(59,130,246,0.2) 27px, rgba(59,130,246,0.2) 28px),
          repeating-linear-gradient(90deg, transparent 0px, transparent 27px, rgba(59,130,246,0.06) 27px, rgba(59,130,246,0.06) 28px)
        `,
        'blueprint-grid': `
          repeating-linear-gradient(rgba(59,130,246,0.1) 0px, rgba(59,130,246,0.1) 1px, transparent 1px, transparent 24px),
          repeating-linear-gradient(90deg, rgba(59,130,246,0.1) 0px, rgba(59,130,246,0.1) 1px, transparent 1px, transparent 24px)
        `,
        'ruled-only': `
          repeating-linear-gradient(transparent 0px, transparent 27px, rgba(59,130,246,0.18) 27px, rgba(59,130,246,0.18) 28px)
        `,
      },
      boxShadow: {
        'paper': '2px 3px 0 rgba(29,78,216,0.08), 4px 6px 0 rgba(29,78,216,0.04)',
        'paper-lg': '3px 5px 0 rgba(29,78,216,0.1), 6px 10px 0 rgba(29,78,216,0.05)',
        'ink': '0 2px 8px rgba(29,78,216,0.15)',
        'lifted': '0 8px 24px rgba(29,78,216,0.12), 0 2px 8px rgba(0,0,0,0.06)',
      },
      keyframes: {
        writeReveal: {
          from: { clipPath: 'inset(0 100% 0 0)' },
          to: { clipPath: 'inset(0 0% 0 0)' },
        },
        inkDrop: {
          from: { opacity: '0', transform: 'scale(0.85) translateY(12px)' },
          to: { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        drawLine: {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        penCursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scribble: {
          '0%': { strokeDashoffset: '1000', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { strokeDashoffset: '0', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'write-reveal': 'writeReveal 1.2s ease-out forwards',
        'ink-drop': 'inkDrop 0.6s ease-out forwards',
        'draw-line': 'drawLine 2s ease-in-out forwards',
        'float': 'floatUp 3s ease-in-out infinite',
        'pen-cursor': 'penCursor 1s ease-in-out infinite',
        'scribble': 'scribble 2s ease-in-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
};
