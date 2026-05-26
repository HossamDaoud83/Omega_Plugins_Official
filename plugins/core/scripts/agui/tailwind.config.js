/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        omega: {
          // Brand
          primary:  '#1B4F72',
          deep:     '#0F2E47',
          // Accents (used for category coding)
          teal:     '#0EA5A4',
          violet:   '#7C3AED',
          amber:    '#F59E0B',
          rose:     '#E11D48',
          emerald:  '#10B981',
          sky:      '#0EA5E9',
          // Status
          critical: '#CC0000',
          high:     '#FF8C00',
          complete: '#228B22',
          // Surfaces
          'alt-row':'#F8FBFD',
          surface:  '#FFFFFF',
          page:     '#F6F8FB',
          border:   '#E6EAF0',
          'border-strong': '#CBD5E1',
          ink:      '#0F172A',
          muted:    '#64748B',
        },
      },
      boxShadow: {
        'soft':  '0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.04)',
        'lift':  '0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 32px -8px rgba(15, 23, 42, 0.10)',
        'glow':  '0 0 0 1px rgba(27, 79, 114, 0.06), 0 18px 40px -12px rgba(27, 79, 114, 0.20)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #1B4F72 0%, #0EA5A4 50%, #7C3AED 100%)',
        'mesh': 'radial-gradient(at 12% 8%, rgba(14,165,164,0.12) 0px, transparent 45%), radial-gradient(at 88% 12%, rgba(124,58,237,0.10) 0px, transparent 50%), radial-gradient(at 50% 92%, rgba(27,79,114,0.10) 0px, transparent 45%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
