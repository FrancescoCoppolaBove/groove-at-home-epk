/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        line: 'var(--line)',
        acc: 'var(--accent)',
        'acc-2': 'var(--accent-2)',
      },
      borderRadius: {
        soft: '16px',
        pill: '999px',
      },
      boxShadow: {
        elev: '0 10px 30px rgba(0,0,0,.25)',
      },
      maxWidth: {
        container: '1180px',
      },
    },
  },
  plugins: [],
};
