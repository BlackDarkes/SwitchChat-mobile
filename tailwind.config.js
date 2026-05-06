/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Твои кастомные токены
        'accent-bg': 'var(--accent-bg)',
        'primary-bg': 'var(--primary-bg)',
        'secondary-bg': 'var(--secondary-bg)',
        'chat-bg': 'var(--chat-bg)',
        'message-bg': 'var(--message-bg)',
        'search-bg': 'var(--search-bg)',
        'accent-color': 'var(--accent-color)',
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'border-color': 'var(--border-color)',
        'not-read': 'var(--not-read)',
        
        // Shadcn UI стандарт
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
      },
    },
  },
  plugins: [],
};
