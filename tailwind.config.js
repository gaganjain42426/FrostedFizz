/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#FF6AA6",
        "secondary": "#66D6FF",
        "accent": "#FF9ECC",
        "navy": "#071740",
        "background-light": "#f8f5f7",
        "background-dark": "#230f17",
        "text-light": "#181014",
        "text-dark": "#f8f5f7",
        "text-muted-light": "#8d5e71",
        "text-muted-dark": "#a38d97",
        "border-light": "#f5f0f2",
        "border-dark": "#3c2a32"
      },
      fontFamily: {
        "display": ["Poppins", "sans-serif"],
        "body": ["Nunito", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
      animation: {
        'float-1': 'float 12s ease-in-out infinite',
        'float-2': 'float 15s ease-in-out infinite',
        'float-3': 'float 10s ease-in-out infinite',
        'float-4': 'float 18s ease-in-out infinite',
        'text-pop': 'text-pop 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'bg-pan': 'bg-pan 10s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-20px) rotate(-3deg)' },
          '50%': { transform: 'translateY(20px) rotate(3deg)' },
        },
        'text-pop': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'bg-pan': {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        }
      },
    },
  },
  plugins: [],
}
