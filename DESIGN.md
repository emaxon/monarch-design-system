# DESIGN.md — Monarch Design System Reference

> Feed this file to an LLM to generate correct Monarch-styled HTML/CSS.

---

## Brand Identity

**Logo**: White Lucide crown icon on violet gradient (`#7C55F5 → #AB76E2`), 8px border-radius.

**Fonts**:
- Display: `Clash Display` (weight 500, used for h1 / `.monarch-display`)
- UI: `Inter` (weights 300–800)
- Code: `JetBrains Mono`
- Emphasis: `Instrument Serif` italic (via `<em>` inside h1, scales to 1.15em)

**Theming**: Dark mode is the default. Light mode activates with `data-theme="light"` on `<html>`. All tokens are CSS custom properties on `:root` with overrides under `[data-theme="light"]`.

---

## Color Tokens

### Brand

| Token | Dark | Light |
|-------|------|-------|
| `--monarch-brand-violet` | `#7C55F5` | `#6940E8` *(darkened for AA contrast)* |
| `--monarch-brand-lavender` | `#AB76E2` | `#AB76E2` |
| `--monarch-brand-blush` | `#E0B2B3` | `#E0B2B3` |
| `--monarch-brand-gradient` | `linear-gradient(135deg, #7C55F5, #AB76E2, #E0B2B3)` | same |
| `--monarch-brand-gradient-subtle` | `linear-gradient(135deg, rgba(124,85,245,0.15), rgba(224,178,179,0.1))` | same |
| `--monarch-brand-purple` *(alias)* | `var(--monarch-brand-violet)` | — |

### Backgrounds

| Token | Dark | Light | Notes |
|-------|------|-------|-------|
| `--monarch-bg-base` | `#14141E` | `#F7F5F3` | Page canvas |
| `--monarch-bg-surface` | `#1A1A29` | `#FFFEFE` | Cards, panels |
| `--monarch-bg-elevated` | `#212232` | `#F2F0EC` | Dropdowns, tooltips, inputs (dark) |
| `--monarch-bg-chrome` | same as surface | same as base | Header + sidebar — grounding surface |
| `--monarch-bg-overlay` | `rgba(20,20,30,0.82)` | `rgba(247,245,243,0.88)` | Modals, backdrops |

> In **light mode**, `bg-chrome` = `bg-base` (warm stone), so header/sidebar appear grounded. In dark mode it equals `bg-surface`.

### Text

| Token | Dark | Light |
|-------|------|-------|
| `--monarch-text-primary` | `#F7F5F3` | `#1C1917` |
| `--monarch-text-secondary` | `#A09AB5` | `#57534E` |
| `--monarch-text-muted` | `#807A93` | `#6B6560` |
| `--monarch-text-inverse` | `#14141E` | `#F7F5F3` |

### Borders

| Token | Dark | Light |
|-------|------|-------|
| `--monarch-border-subtle` | `#252538` | `#E8E3DC` |
| `--monarch-border-medium` | `#363648` | `#D4CCC2` |
| `--monarch-border-strong` | `#4A4A5E` | `#B5ADA4` |

### Semantic

| Token | Dark | Light |
|-------|------|-------|
| `--monarch-success` | `#22C55E` | `#15803D` |
| `--monarch-warning` | `#F59E0B` | `#B45309` |
| `--monarch-danger` | `#EF4444` | `#B91C1C` |
| `--monarch-info` | `#3B82F6` | `#4338CA` |

Each semantic color also has `*-light` (brighter tint) and `*-dim` (rgba background, ~10–15% opacity) variants — e.g. `--monarch-success-light`, `--monarch-success-dim`. Use `*-dim` for badge backgrounds and `*-light` for text on those backgrounds.

### Glass & Glow

| Token | Value |
|-------|-------|
| `--monarch-glass-bg` | `rgba(26,26,41,0.6)` dark / `rgba(255,254,254,0.72)` light |
| `--monarch-glass-border` | `rgba(247,245,243,0.08)` dark / `rgba(0,0,0,0.08)` light |
| `--monarch-glass-blur` | `blur(16px)` |
| `--monarch-glass-blur-lg` | `blur(24px)` |
| `--monarch-glow-purple` | `0 0 20px rgba(124,85,245,0.3), 0 0 60px rgba(124,85,245,0.1)` |
| `--monarch-glow-pink` | `0 0 20px rgba(224,178,179,0.3), 0 0 60px rgba(224,178,179,0.1)` |
| `--monarch-glow-brand` | `0 0 30px rgba(124,85,245,0.2), 0 0 80px rgba(171,118,226,0.1)` |

---

## Spacing Scale

All spacing is multiples of 4px (8px grid in practice).

| Token | Value |
|-------|-------|
| `--monarch-space-1` | 4px |
| `--monarch-space-2` | 8px |
| `--monarch-space-3` | 12px |
| `--monarch-space-4` | 16px |
| `--monarch-space-5` | 20px |
| `--monarch-space-6` | 24px |
| `--monarch-space-8` | 32px |
| `--monarch-space-10` | 40px |
| `--monarch-space-12` | 48px |
| `--monarch-space-16` | 64px |

---

## Border Radius

| Token | Value | Use For |
|-------|-------|---------|
| `--monarch-radius-sm` | 4px | Inline code, small tags |
| `--monarch-radius-md` | 8px | Buttons, inputs |
| `--monarch-radius-lg` | 12px | Cards, containers |
| `--monarch-radius-xl` | 16px | Modals, chat bubbles |
| `--monarch-radius-full` | 9999px | Avatars, pills, badges |

---

## Typography Scale

| Token | Size | Use For |
|-------|------|---------|
| `--monarch-text-xs` | 12px | Labels, captions, timestamps |
| `--monarch-text-sm` | 14px | Body text, nav items, buttons |
| `--monarch-text-base` | 16px | Default body |
| `--monarch-text-lg` | 18px | Subheadings |
| `--monarch-text-xl` | 20px | Section headings |
| `--monarch-text-2xl` | 24px | Page headings |
| `--monarch-text-3xl` | 30px | Large headings |
| `--monarch-text-4xl+` | 36px+ | Hero text only |

**Section labels** (e.g. INTELLIGENCE, PIPELINE): `10px, uppercase, letter-spacing: 0.1em, font-weight: 600, color: --monarch-text-secondary`.

---

## Decorative Utilities

### Blueprint Layout

Patterned margin rails that are the **actual padding** of the layout container — not an overlay. Applied to `<main>` so the checkerboard pattern fills real gutters. Crossing rules bleed edge-to-edge with square intersection markers.

```html
<main class="monarch-blueprint">
  <div class="max-w-4xl mx-auto px-8">
    <!-- content -->
  </div>
</main>

<!-- With section dividers -->
<div class="monarch-blueprint">
  <div class="monarch-blueprint-rule"></div>
  <div class="monarch-blueprint-content px-8"><!-- section --></div>
  <div class="monarch-blueprint-rule"></div>
</div>
```

Override rail width: `style="--bp-margin: 24px;"`. Default is `clamp(8px, 2vw, 32px)`.

### Hero Grid

Dot-grid background pattern for hero and full-bleed sections. The grid is a `::before` pseudo-element — so `mask-image` clips the pattern only, not the section's children. The bottom edge fades to transparent, blending into the canvas below. Color automatically shifts for light mode.

```html
<section class="monarch-hero-grid relative">
  <div class="relative z-10">
    <!-- content sits above the grid -->
  </div>
</section>
```

Dark mode dots: `rgba(229, 231, 235, 0.1)`. Light mode dots: `rgba(28, 25, 23, 0.15)`. Grid pitch: `20px × 20px`. Mask: `linear-gradient(to bottom, black 50%, transparent 95%)`.

### Noise Grain

Fixed full-viewport texture overlay at `z-index: 9999`, `pointer-events: none`. Adds tactile depth to flat surfaces. Add once per layout as the first child of `<body>`.

```html
<body>
  <div class="noise-overlay"></div>
  <!-- app -->
</body>
```

Opacity is intentionally subtle (`0.034`). Dark and light themes use separate optimised `.webp` assets via `--noise-image`.

---

## Component Classes

### Import

```css
@import 'monarch-design-system/tokens';
@import 'monarch-design-system/components';
```

### Buttons

```html
<!-- Primary (violet gradient, white text) -->
<button class="monarch-btn monarch-btn-primary">Save Account</button>

<!-- Secondary (indigo outline) -->
<button class="monarch-btn monarch-btn-secondary">Cancel</button>

<!-- Ghost (transparent, bg on hover) -->
<button class="monarch-btn monarch-btn-ghost">View Details</button>

<!-- Danger -->
<button class="monarch-btn monarch-btn-danger">Delete</button>

<!-- Outline (neutral border) -->
<button class="monarch-btn monarch-btn-outline">Export</button>

<!-- Sizes -->
<button class="monarch-btn monarch-btn-primary monarch-btn-sm">Small</button>
<button class="monarch-btn monarch-btn-primary monarch-btn-lg">Large</button>

<!-- Icon only -->
<button class="monarch-btn monarch-btn-ghost monarch-btn-icon"><svg>...</svg></button>

<!-- Loading -->
<button class="monarch-btn monarch-btn-primary monarch-btn--loading">
  <svg class="monarch-btn__spinner">...</svg> Saving...
</button>
```

### Badges

```html
<span class="monarch-badge monarch-badge-success">Active</span>
<span class="monarch-badge monarch-badge-warning">Pending</span>
<span class="monarch-badge monarch-badge-danger">At Risk</span>
<span class="monarch-badge monarch-badge-info">Recruiting</span>
<span class="monarch-badge monarch-badge-purple">Review</span>

<!-- With pulse dot -->
<span class="monarch-badge monarch-badge-success">
  <span class="monarch-badge__dot monarch-badge__dot--pulse"></span> Online
</span>

<!-- Outlined variant -->
<span class="monarch-badge monarch-badge-success monarch-badge-outlined">Prospecting</span>

<!-- Notification count -->
<span class="monarch-badge-count">3</span>

<!-- Sizes -->
<span class="monarch-badge monarch-badge-purple monarch-badge-sm">Small</span>
<span class="monarch-badge monarch-badge-purple monarch-badge-lg">Large</span>
```

### Inputs

In **light mode**, all `.monarch-input` elements automatically use `--monarch-bg-surface` as their background (overrides the dark default of `--monarch-bg-elevated`).

```html
<label class="monarch-label">Account Name</label>
<input class="monarch-input" placeholder="Enter name..." />

<!-- Error state -->
<label class="monarch-label monarch-label--error">Required</label>
<input class="monarch-input monarch-input--error" />
<p class="monarch-helper monarch-helper--error">This field is required</p>

<!-- Select -->
<select class="monarch-select"><option>All Segments</option></select>

<!-- Textarea -->
<textarea class="monarch-textarea" rows="4" placeholder="Notes..."></textarea>

<!-- Search with keyboard shortcut -->
<div class="monarch-search">
  <svg class="monarch-search__icon">...</svg>
  <input class="monarch-search__input" placeholder="Search..." />
  <kbd class="monarch-search__kbd">⌘K</kbd>
</div>

<!-- With prefix -->
<div class="monarch-input-group">
  <span class="monarch-input-group__prefix">$</span>
  <input class="monarch-input" placeholder="0.00" />
</div>
```

### Toggles

```html
<div class="monarch-toggle monarch-toggle--active">
  <span class="monarch-toggle__thumb"></span>
</div>

<div class="monarch-toggle-row">
  <div>
    <div class="monarch-toggle-row__label">Auto-enrich</div>
    <div class="monarch-toggle-row__description">Enrich new accounts automatically</div>
  </div>
  <div class="monarch-toggle monarch-toggle--active"><span class="monarch-toggle__thumb"></span></div>
</div>

<label class="monarch-checkbox">
  <div class="monarch-checkbox__box monarch-checkbox__box--checked"><svg>✓</svg></div>
  <span class="monarch-checkbox__label">Intelligence Agent</span>
</label>
```

### Avatars

```html
<!-- Initials — brand gradient background -->
<div class="monarch-avatar monarch-avatar-md monarch-avatar-brand">JY</div>

<!-- Color variants -->
<div class="monarch-avatar monarch-avatar-md monarch-avatar-blue">EM</div>
<div class="monarch-avatar monarch-avatar-md monarch-avatar-green">KM</div>

<!-- Sizes: sm, md, lg -->
<div class="monarch-avatar monarch-avatar-sm monarch-avatar-brand">JY</div>

<!-- With online status -->
<div class="monarch-avatar monarch-avatar-md monarch-avatar-brand">
  JY
  <span class="monarch-avatar__status monarch-avatar__status--online"></span>
</div>

<!-- AI agent (square corners) -->
<div class="monarch-avatar monarch-avatar-md monarch-avatar-agent"><svg>...</svg></div>

<!-- Group -->
<div class="monarch-avatar-group">
  <div class="monarch-avatar monarch-avatar-sm monarch-avatar-brand">JY</div>
  <div class="monarch-avatar monarch-avatar-sm monarch-avatar-blue">EM</div>
  <div class="monarch-avatar monarch-avatar-sm monarch-avatar-group__overflow">+3</div>
</div>
```

### Cards

```html
<!-- Base -->
<div class="monarch-card">
  <div class="monarch-card__body">Content</div>
</div>

<!-- With header -->
<div class="monarch-card">
  <div class="monarch-card__header">
    <span class="monarch-card__header-title">Agent Activity</span>
    <button class="monarch-card__header-action">View All →</button>
  </div>
  <div class="monarch-card__body">Content</div>
</div>

<!-- Gradient border -->
<div class="monarch-card-gradient" style="padding: 24px;">Featured content</div>

<!-- Glass (use over gradient backgrounds) -->
<div class="monarch-card-glass" style="padding: 24px;">Frosted content</div>

<!-- Stat card -->
<div class="monarch-stat-card">
  <div class="monarch-stat-card__icon" style="background: rgba(59,130,246,0.12);">
    <svg style="color: #3B82F6;">...</svg>
  </div>
  <span class="monarch-stat-card__value">433</span>
  <span class="monarch-stat-card__label">Total Accounts</span>
</div>
```

### Health Indicators

Score thresholds: 70–100 = healthy (green), 40–69 = warning (amber), 0–39 = critical (red).

```html
<div class="monarch-health-ring monarch-health-ring-md">
  <svg class="monarch-health-ring__svg" viewBox="0 0 36 36">
    <path class="monarch-health-ring__track" d="M18 2.08a15.92 15.92 0 010 31.83 15.92 15.92 0 010-31.83" stroke-width="3" />
    <path class="monarch-health-ring__fill monarch-health-ring__fill--healthy" d="M18 2.08a15.92 15.92 0 010 31.83 15.92 15.92 0 010-31.83" stroke-width="3" stroke-dasharray="81, 100" />
  </svg>
  <span class="monarch-health-ring__value" style="color: #22C55E;">81</span>
</div>
```

### Navigation

```html
<aside class="monarch-sidebar">
  <div class="monarch-sidebar__header"><!-- logo --></div>
  <nav class="monarch-sidebar__nav">
    <div class="monarch-nav-section">
      <div class="monarch-nav-section__title">Intelligence</div>
      <div class="monarch-nav-section__items">
        <a class="monarch-nav-item monarch-nav-item--active" href="/dashboard">
          <svg class="monarch-nav-item__icon">...</svg>
          <span class="monarch-nav-item__label">Dashboard</span>
        </a>
        <a class="monarch-nav-item" href="/signals">
          <svg class="monarch-nav-item__icon">...</svg>
          <span class="monarch-nav-item__label">Signal Graph</span>
        </a>
      </div>
    </div>
  </nav>
  <div class="monarch-sidebar__footer">
    <div class="monarch-avatar monarch-avatar-sm monarch-avatar-brand">JY</div>
    <div>
      <div style="font-size: 14px; font-weight: 500;">Joe Yared</div>
      <div style="font-size: 12px; color: var(--monarch-text-muted);">CEO</div>
    </div>
  </div>
</aside>
```

### Data Table

```html
<div class="monarch-card">
  <div class="monarch-table-header">
    <div class="monarch-table-header__title">
      Accounts <span class="monarch-table-header__count">433</span>
    </div>
    <div class="monarch-filter-tabs">
      <button class="monarch-filter-tab monarch-filter-tab--active">All</button>
      <button class="monarch-filter-tab">Active</button>
      <button class="monarch-filter-tab">At Risk</button>
    </div>
  </div>
  <table class="monarch-table">
    <thead>
      <tr>
        <th><button class="monarch-table__sortable">Account <svg>↑</svg></button></th>
        <th>Segment</th><th>Health</th><th>Pipeline</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>The Kitchen Source</td>
        <td><span class="monarch-badge monarch-badge-info">Commercial</span></td>
        <td><!-- health ring --></td>
        <td>$2,450,000</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Kanban Board

```html
<div class="monarch-kanban">
  <div class="monarch-kanban__column">
    <div class="monarch-kanban__column-header">
      <div class="monarch-kanban__column-title">
        Prospecting <span class="monarch-kanban__column-count">3</span>
      </div>
      <span class="monarch-kanban__column-total">$445K</span>
    </div>
    <div class="monarch-kanban__column-body">
      <div class="monarch-kanban__card">
        <div class="monarch-kanban__card-header">
          <span class="monarch-kanban__card-title">Renovation - Baltix</span>
        </div>
        <div class="monarch-kanban__card-footer">
          <span class="monarch-kanban__card-value">$154,527</span>
          <span class="monarch-kanban__card-days monarch-badge monarch-badge-danger monarch-badge-sm">45d</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Chat Interface

Agent bubbles use `--monarch-bg-elevated` (dark) / `--monarch-bg-surface` (light). The chat container uses `--monarch-bg-surface` (dark) / `--monarch-bg-base` (light).

```html
<div class="monarch-chat">
  <div class="monarch-chat__header">
    <div class="monarch-avatar monarch-avatar-md monarch-avatar-agent">
      <svg>...</svg>
      <span class="monarch-avatar__status monarch-avatar__status--online"></span>
    </div>
    <div class="monarch-chat__header-info">
      <div class="monarch-chat__header-name">Monarch Intelligence</div>
      <div class="monarch-chat__header-status">Your daily briefing agent</div>
    </div>
  </div>

  <div class="monarch-chat__messages">
    <!-- Agent bubble -->
    <div class="monarch-chat__bubble monarch-chat__bubble--agent">
      <div class="monarch-chat__bubble-avatar">
        <div class="monarch-avatar monarch-avatar-sm monarch-avatar-agent"><svg>...</svg></div>
      </div>
      <div class="monarch-chat__bubble-content">
        <div class="monarch-chat__bubble-body">Good morning. Here's your briefing...</div>
        <span class="monarch-chat__bubble-time">8:00 AM</span>
      </div>
    </div>

    <!-- User bubble -->
    <div class="monarch-chat__bubble monarch-chat__bubble--user">
      <div class="monarch-chat__bubble-avatar">
        <div class="monarch-avatar monarch-avatar-sm monarch-avatar-brand">JY</div>
      </div>
      <div class="monarch-chat__bubble-content">
        <div class="monarch-chat__bubble-body">What about AK Design Group?</div>
        <span class="monarch-chat__bubble-time">8:02 AM</span>
      </div>
    </div>

    <!-- Typing indicator -->
    <div class="monarch-chat__typing">
      <div class="monarch-chat__bubble-avatar">
        <div class="monarch-avatar monarch-avatar-sm monarch-avatar-agent"><svg>...</svg></div>
      </div>
      <div class="monarch-chat__typing-dots">
        <span class="monarch-chat__typing-dot"></span>
        <span class="monarch-chat__typing-dot"></span>
        <span class="monarch-chat__typing-dot"></span>
      </div>
    </div>
  </div>

  <div class="monarch-chat__prompts">
    <button class="monarch-chat__prompt-chip">Show at-risk deals</button>
    <button class="monarch-chat__prompt-chip">Weekly pipeline</button>
  </div>

  <div class="monarch-chat__input-area">
    <input class="monarch-input" placeholder="Ask Monarch anything..." />
    <button class="monarch-chat__send-btn"><svg>→</svg></button>
  </div>
</div>
```

### Command Palette

```html
<div class="monarch-command-palette">
  <div class="monarch-command-palette__input">
    <svg class="monarch-command-palette__input-icon">...</svg>
    <input placeholder="Type a command or search..." />
  </div>
  <div class="monarch-command-palette__results">
    <div class="monarch-command-palette__group-title">Quick Actions</div>
    <button class="monarch-command-palette__item monarch-command-palette__item--selected">
      <svg class="monarch-command-palette__item-icon">...</svg>
      <span class="monarch-command-palette__item-label">Create New Deal</span>
      <kbd class="monarch-command-palette__item-kbd">N</kbd>
    </button>
  </div>
  <div class="monarch-command-palette__footer">
    <span class="monarch-command-palette__footer-shortcut"><kbd class="monarch-command-palette__item-kbd">↑↓</kbd> Navigate</span>
    <span class="monarch-command-palette__footer-shortcut"><kbd class="monarch-command-palette__item-kbd">↵</kbd> Select</span>
  </div>
</div>
```

---

## Atomic Design Hierarchy

```
Atoms:      Buttons, Badges, Inputs, Toggles, Avatars
Molecules:  Cards, Stat Cards, Search Bar, Health Indicators, Nav Items
Organisms:  Sidebar, Data Table, Kanban Board, Agent Feed, Command Palette, Chat Interface
Templates:  Dashboard, List View
Decorative: Blueprint Layout, Hero Grid, Noise Grain
```

---

## Do's and Don'ts

**Do:**
- Use dark mode as the default; verify all states in light mode
- Use `--monarch-brand-violet` for primary CTAs and interactive accents
- Use `--monarch-brand-gradient` for hero text (`monarch-gradient-text`) and primary buttons
- Use semantic badge colors consistently — green=success, amber=warning, red=danger, blue=info
- Use `--monarch-bg-chrome` for header and sidebar backgrounds
- Show full navigation on desktop; never use hamburger menus on desktop
- Include keyboard shortcut indicators (⌘K, ESC, ↵)
- Use Inter for all UI text, JetBrains Mono for code/mono values
- Respect the 8px spacing grid
- Add smooth transitions (200–300ms ease) on all interactive elements
- Use glow effects (`--monarch-glow-brand`) on hover for primary interactive surfaces in dark mode

**Don't:**
- Use pure black (`#000`) or pure white (`#FFF`) as backgrounds — always use the token scale
- Use more than one primary button per visible area
- Add feature bloat or competing calls-to-action
- Use heavy box shadows in dark mode — use glow effects instead
- Use borders heavier than 1px for standard UI elements
- Sacrifice discoverability for aesthetics
- Hardcode hex values — always reference CSS custom properties
