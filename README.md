# 👑 Monarch Design System

A premium, dark-first design system built on [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles. Designed for Monarch's B2B SaaS products.

**[View Documentation →](https://emaxon.github.io/monarch-design-system)**

## Features

- 🌙 **Dark-first** — dark mode is the default, light mode available via toggle
- ⚛️ **Atomic Design** — Atoms → Molecules → Organisms → Templates
- 🎨 **Design Tokens** — CSS custom properties for colors, typography, spacing, shadows
- 🌀 **Tailwind Preset** — import as a Tailwind CSS preset in any project
- ✨ **Smooth Animations** — purposeful transitions and hover effects
- 🔮 **Glassmorphism** — frosted glass effects for premium depth
- 💬 **LLM Chat UI** — conversational AI component for agent interfaces

## Quick Start

### Option 1: Tailwind Preset

```js
// tailwind.config.js
import monarchPreset from 'monarch-design-system/tailwind-preset';

export default {
  presets: [monarchPreset],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
};
```

### Option 2: CSS Tokens

```css
@import 'monarch-design-system/tokens';
```

## Design Inspirations

Built from the UX principles of:
- **Superhuman** — dark mode minimalism, gradient accents, keyboard-first
- **Framer** — aggressively minimal, content-forward
- **Pitch** — bold brand color, confident visual identity
- **Clerk** — developer dashboard excellence

## Development

```bash
npm install
npm run dev      # Start dev server
npm run build    # Build for production
```

## Architecture

```
packages/
  tokens/           # CSS custom properties (importable standalone)
  tailwind-preset/  # Tailwind CSS v4 preset

src/
  pages/
    tokens/         # Color, typography, spacing, shadow documentation
    atoms/          # Buttons, badges, inputs, toggles, avatars
    molecules/      # Cards, stat cards, search, health indicators
    organisms/      # Sidebar, data table, kanban, agent feed, chat UI
    templates/      # Dashboard, list view
```

## Brand

| Token | Dark | Light |
|-------|------|-------|
| Background Base | `#0D0F1A` | `#FAFBFC` |
| Background Surface | `#131525` | `#FFFFFF` |
| Brand Purple | `#7C3AED` | `#7C3AED` |
| Brand Gradient | `#7C3AED → #A855F7 → #EC4899` | same |

---

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com)
