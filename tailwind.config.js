/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream:       "#1C1410",
        "cream-dark":"#2A2018",
        paper:       "#241C15",
        ink:         "#E8DED3",
        "ink-light": "#C4B5A5",
        "ink-faint": "#8C7E72",
        navy:        "#F2E8DC",
        "navy-light":"#D4C4B0",
        accent:      "#D4A574",
        "accent-soft":"#B8956E",
        warm:        "#C17F4E",
        "warm-light":"#D49B6E",
        blush:       "#3A2E24",
      },
      fontFamily: {
        serif:       ['"DM Serif Display"', 'Georgia', 'serif'],
        sans:        ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        handwritten: ['"Caveat"', 'cursive'],
      },
      fontSize: {
        'display':  ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'headline': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'subhead':  ['clamp(1.25rem, 3vw, 1.75rem)', { lineHeight: '1.3' }],
      },
      animation: {
        'fade-in':     'fadeIn 0.8s ease-out forwards',
        'fade-up':     'fadeUp 0.8s ease-out forwards',
        'slide-in':    'slideIn 0.6s ease-out forwards',
        'gentle-bob':  'gentleBob 6s ease-in-out infinite',
        'bird-fly':    'birdFly 18s linear infinite',
        'sway':        'sway 4s ease-in-out infinite',
        'sway-slow':   'sway 6s ease-in-out infinite',
        'float':       'floatUp 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        gentleBob: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%':      { transform: 'translateY(-6px) rotate(1deg)' },
        },
        birdFly: {
          '0%':   { transform: 'translateX(-60px) translateY(0)', opacity: '0' },
          '5%':   { opacity: '0.6' },
          '50%':  { transform: 'translateX(50vw) translateY(-15px)', opacity: '0.6' },
          '95%':  { opacity: '0.6' },
          '100%': { transform: 'translateX(110vw) translateY(5px)', opacity: '0' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%':      { transform: 'rotate(2deg)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
