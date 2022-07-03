/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '400px',
      // => @media (min-width: 400px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: '#0572B2',
        secondary: '#DD1E3F',
        Tertiary: '#9BC7E0',
        primaryText: '#202020',
        secondaryText: '#4A4A4A',
        grey: '#202020',
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '10rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
        floatUp: {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        floatDown: {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(20px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        floatLeft: {
          '0%': {
            transform: 'translateY(0px) translateX(0px)',
          },
          '25%': {
            transform: 'translateY(-10px) translateX(10px)',
          },
          '50%': {
            transform: 'translateY(10px) translateX(-10px)',
          },
          '75%': {
            transform: 'translateY(10px) translateX(10px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        floatRight: {
          '0%': {
            transform: 'translateY(0px) translateX(0px)',
          },
          '25%': {
            transform: 'translateY(10px) translateX(-10px)',
          },
          '50%': {
            transform: 'translateY(-10px) translateX(10px)',
          },
          '75%': {
            transform: 'translateY(10px) translateX(10px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        floatUp: 'floatUp 6s ease-in-out infinite',
        floatDown: 'floatDown 6s ease-in-out infinite',
        floatLeft: 'floatLeft 12s ease-in-out infinite',
        floatRight: 'floatRight 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
