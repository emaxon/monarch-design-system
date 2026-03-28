/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        monarch: {
          purple: {
            DEFAULT: '#7C3AED',
            light: '#A855F7',
            dark: '#6D28D9',
          },
          pink: {
            DEFAULT: '#EC4899',
            light: '#F472B6',
          },
          bg: {
            base: 'var(--monarch-bg-base)',
            surface: 'var(--monarch-bg-surface)',
            elevated: 'var(--monarch-bg-elevated)',
            overlay: 'var(--monarch-bg-overlay)',
          },
          text: {
            primary: 'var(--monarch-text-primary)',
            secondary: 'var(--monarch-text-secondary)',
            muted: 'var(--monarch-text-muted)',
            inverse: 'var(--monarch-text-inverse)',
          },
          border: {
            subtle: 'var(--monarch-border-subtle)',
            medium: 'var(--monarch-border-medium)',
            strong: 'var(--monarch-border-strong)',
          },
          success: {
            DEFAULT: '#22C55E',
            light: '#4ADE80',
            dim: 'rgba(34, 197, 94, 0.15)',
          },
          warning: {
            DEFAULT: '#F59E0B',
            light: '#FBBF24',
            dim: 'rgba(245, 158, 11, 0.15)',
          },
          danger: {
            DEFAULT: '#EF4444',
            light: '#F87171',
            dim: 'rgba(239, 68, 68, 0.15)',
          },
          info: {
            DEFAULT: '#3B82F6',
            light: '#60A5FA',
            dim: 'rgba(59, 130, 246, 0.15)',
          },
          glass: {
            bg: 'var(--monarch-glass-bg)',
            border: 'var(--monarch-glass-border)',
            highlight: 'var(--monarch-glass-highlight)',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
      },
      borderRadius: {
        monarch: {
          sm: '0.25rem',
          md: '0.5rem',
          lg: '0.75rem',
          xl: '1rem',
          '2xl': '1.5rem',
        },
      },
      boxShadow: {
        'monarch-sm': 'var(--monarch-shadow-sm)',
        'monarch-md': 'var(--monarch-shadow-md)',
        'monarch-lg': 'var(--monarch-shadow-lg)',
        'monarch-xl': 'var(--monarch-shadow-xl)',
        'monarch-glow': 'var(--monarch-glow-purple)',
        'monarch-glow-pink': 'var(--monarch-glow-pink)',
        'monarch-glow-brand': 'var(--monarch-glow-brand)',
      },
      animation: {
        'monarch-fade-in': 'monarch-fade-in var(--monarch-duration-base) var(--monarch-ease-out)',
        'monarch-fade-in-up': 'monarch-fade-in-up var(--monarch-duration-slow) var(--monarch-ease-out)',
        'monarch-slide-left': 'monarch-slide-in-left var(--monarch-duration-slow) var(--monarch-ease-out)',
        'monarch-scale-in': 'monarch-scale-in var(--monarch-duration-base) var(--monarch-ease-spring)',
        'monarch-pulse': 'monarch-pulse 2s var(--monarch-ease-in-out) infinite',
        'monarch-pulse-dot': 'monarch-pulse-dot 2s var(--monarch-ease-in-out) infinite',
        'monarch-shimmer': 'monarch-shimmer 2s linear infinite',
        'monarch-spin': 'monarch-spin 1s linear infinite',
      },
    },
  },
};
