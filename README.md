# <img src="public/favicon.svg" width="28" height="28" alt="Monarch" /> Monarch Design System

A premium, dark-first design system built on [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles. Designed for Monarch's B2B SaaS products.

**[📖 View Documentation](https://emaxon.github.io/monarch-design-system)** · **[🤖 LLM Guide (DESIGN.md)](DESIGN.md)**

## Features

- 🌙 **Dark-first** — dark mode is the default, light mode via toggle
- ⚛️ **Atomic Design** — Atoms → Molecules → Organisms → Templates
- 🎨 **Design Tokens** — CSS custom properties for colors, typography, spacing, shadows
- 🧩 **Component Classes** — importable `.monarch-*` CSS classes for every component
- 🌀 **Tailwind Preset** — import as a Tailwind CSS preset in any project
- ✨ **Smooth Animations** — purposeful transitions and hover effects
- 🔮 **Glassmorphism** — frosted glass effects for premium depth
- 💬 **LLM Chat UI** — conversational AI component for agent interfaces

## Quick Start

### Option 1: CSS Component Classes (recommended)

```css
/* Import tokens + components */
@import 'monarch-design-system/tokens';
@import 'monarch-design-system/components';
```

```html
<button class="monarch-btn monarch-btn-primary">Save Account</button>
<span class="monarch-badge monarch-badge-success">Active</span>
<input class="monarch-input" placeholder="Search..." />
```

### Option 2: Tailwind Preset

```js
// tailwind.config.js
import monarchPreset from 'monarch-design-system/tailwind-preset';

export default {
  presets: [monarchPreset],
};
```

### Option 3: Tokens Only

```css
@import 'monarch-design-system/tokens';

/* Use CSS custom properties directly */
.my-card {
  background: var(--monarch-bg-surface);
  border: 1px solid var(--monarch-border-subtle);
  border-radius: var(--monarch-radius-lg);
  color: var(--monarch-text-primary);
}
```

## For LLMs

Feed [`DESIGN.md`](DESIGN.md) to any LLM (Claude, GPT, Copilot, Cursor) as context. It contains the full brand reference, all design tokens, every component class with usage examples, and design principles — everything needed to generate correct Monarch-styled code.

## Architecture

```
packages/
  tokens/           # CSS custom properties (colors, typography, spacing, shadows)
  components/       # Importable .monarch-* CSS component classes
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
| Brand Indigo | `#6366f1` | `#6366f1` |
| Brand Gradient | `#6366f1 → #818cf8 → #a78bfa` | same |

## Development

```bash
npm install
npm run dev      # Start dev server
npm run build    # Build for production
```

---

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com)
