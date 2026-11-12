/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1B3D',
          navyDark: '#071026',
          navyLight: '#132857',
          slateDark: '#0B0F19',
          cyberDark: '#060A12',
          lightBg: '#FAFAF8',
          cardLight: '#FFFFFF',
          cardDark: '#0E1524',
          cardCyber: '#111C30',
          emerald: '#059669',
          emeraldLight: '#10B981',
          emeraldDark: '#047857',
          cyan: '#06B6D4',
          cyanDark: '#0891B2',
          blue: '#2563EB',
          blueDark: '#1D4ED8',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 4s ease-in-out infinite',
        'scanline': 'scan 8s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(16, 185, 129, 0.3), 0 0 30px rgba(6, 182, 212, 0.2)' },
          '50%': { boxShadow: '0 0 25px rgba(16, 185, 129, 0.7), 0 0 45px rgba(6, 182, 212, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
