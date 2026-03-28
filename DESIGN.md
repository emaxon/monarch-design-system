# DESIGN.md — Monarch Design System Reference

> Feed this file to an LLM to generate correct Monarch-styled HTML/CSS.

## Brand Identity

**Logo**: White Lucide crown icon on indigo gradient (`#6366f1 → #818cf8`), 8px border-radius.

**Fonts**:
- UI: `Inter` (weights 300–800)
- Code: `JetBrains Mono`

**Color Palette**:
| Token | Dark Mode | Light Mode |
|-------|-----------|------------|
| `--monarch-bg-base` | `#0D0F1A` | `#FAFBFC` |
| `--monarch-bg-surface` | `#131525` | `#FFFFFF` |
| `--monarch-bg-elevated` | `#1A1D2E` | `#F1F5F9` |
| `--monarch-text-primary` | `#FFFFFF` | `#0F172A` |
| `--monarch-text-secondary` | `#94A3B8` | `#475569` |
| `--monarch-text-muted` | `#64748B` | `#94A3B8` |
| `--monarch-border-subtle` | `#1E293B` | `#E2E8F0` |
| `--monarch-border-medium` | `#334155` | `#CBD5E1` |
| `--monarch-brand-purple` | `#6366f1` | `#6366f1` |
| `--monarch-brand-purple-light` | `#818cf8` | `#818cf8` |
| `--monarch-brand-gradient` | `linear-gradient(135deg, #6366f1, #818cf8, #a78bfa)` | same |
| `--monarch-success` | `#22C55E` | same |
| `--monarch-warning` | `#F59E0B` | same |
| `--monarch-danger` | `#EF4444` | same |
| `--monarch-info` | `#3B82F6` | same |

**Dark mode is the default.** Light mode activates with `data-theme="light"` on `<html>`.

## Design Principles

1. **Design is function** — aesthetic serves experience, never sacrifice clarity for beauty
2. **Intentional restraint** — every element earns its place, no clutter or competing CTAs
3. **Premium by default** — gradient accents, glassmorphism, smooth animations
4. **Keyboard-first** — ⌘K command palette, keyboard shortcuts visible
5. **Never use hamburger menus on desktop** — always show full navigation
6. **Dark-first** — design in dark mode, verify in light mode
7. **8px grid** — all spacing is multiples of 8px

## Spacing Scale

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

## Border Radius

| Token | Value | Use For |
|-------|-------|---------|
| `--monarch-radius-sm` | 4px | Inline code, small elements |
| `--monarch-radius-md` | 8px | Buttons, inputs |
| `--monarch-radius-lg` | 12px | Cards, containers |
| `--monarch-radius-xl` | 16px | Modals, chat bubbles |
| `--monarch-radius-full` | 9999px | Avatars, pills, badges |

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

**Section headers** (like INTELLIGENCE, DATA ENGINE): `10px, uppercase, letter-spacing: 0.1em, font-weight: 600, color: --monarch-text-secondary`.

## Component Classes

### Import

```css
/* All tokens + all components */
@import 'monarch-design-system/tokens';
@import 'monarch-design-system/components';

/* Or selective */
@import 'monarch-design-system/tokens/colors.css';
@import 'monarch-design-system/components/buttons.css';
```

### Buttons

```html
<!-- Primary (gradient, white text) -->
<button class="monarch-btn monarch-btn-primary">Save Account</button>

<!-- Secondary (indigo outline) -->
<button class="monarch-btn monarch-btn-secondary">Cancel</button>

<!-- Ghost (transparent, shows bg on hover) -->
<button class="monarch-btn monarch-btn-ghost">View Details</button>

<!-- Danger (red tinted) -->
<button class="monarch-btn monarch-btn-danger">Delete</button>

<!-- Outline (neutral border) -->
<button class="monarch-btn monarch-btn-outline">Export</button>

<!-- Sizes -->
<button class="monarch-btn monarch-btn-primary monarch-btn-sm">Small</button>
<button class="monarch-btn monarch-btn-primary monarch-btn-lg">Large</button>

<!-- Icon button -->
<button class="monarch-btn monarch-btn-ghost monarch-btn-icon">
  <svg>...</svg>
</button>

<!-- Loading -->
<button class="monarch-btn monarch-btn-primary monarch-btn--loading">
  <svg class="monarch-btn__spinner">...</svg> Saving...
</button>

<!-- Disabled -->
<button class="monarch-btn monarch-btn-primary" disabled>Disabled</button>
```

### Badges

```html
<!-- Semantic colors -->
<span class="monarch-badge monarch-badge-success">Active</span>
<span class="monarch-badge monarch-badge-warning">Pending</span>
<span class="monarch-badge monarch-badge-danger">At Risk</span>
<span class="monarch-badge monarch-badge-info">Recruiting</span>
<span class="monarch-badge monarch-badge-purple">Review</span>

<!-- With dot indicator -->
<span class="monarch-badge monarch-badge-success">
  <span class="monarch-badge__dot monarch-badge__dot--pulse"></span> Online
</span>

<!-- Outlined -->
<span class="monarch-badge monarch-badge-success monarch-badge-outlined">Prospecting</span>

<!-- Count (notifications) -->
<span class="monarch-badge-count">3</span>

<!-- Sizes -->
<span class="monarch-badge monarch-badge-purple monarch-badge-sm">Small</span>
<span class="monarch-badge monarch-badge-purple monarch-badge-lg">Large</span>
```

### Inputs

```html
<!-- Text input -->
<label class="monarch-label">Account Name</label>
<input class="monarch-input" placeholder="Enter name..." />

<!-- Error state -->
<label class="monarch-label monarch-label--error">Required</label>
<input class="monarch-input monarch-input--error" />
<p class="monarch-helper monarch-helper--error">This field is required</p>

<!-- Select -->
<select class="monarch-select">
  <option>All Segments</option>
</select>

<!-- Textarea -->
<textarea class="monarch-textarea" rows="4" placeholder="Notes..."></textarea>

<!-- Search with icon + keyboard shortcut -->
<div class="monarch-search">
  <svg class="monarch-search__icon">...</svg>
  <input class="monarch-search__input" placeholder="Search..." />
  <kbd class="monarch-search__kbd">⌘K</kbd>
</div>

<!-- Input with prefix -->
<div class="monarch-input-group">
  <span class="monarch-input-group__prefix">$</span>
  <input class="monarch-input" placeholder="0.00" />
</div>
```

### Toggles

```html
<!-- Toggle switch -->
<div class="monarch-toggle monarch-toggle--active">
  <span class="monarch-toggle__thumb"></span>
</div>

<!-- Off state -->
<div class="monarch-toggle">
  <span class="monarch-toggle__thumb"></span>
</div>

<!-- With label row -->
<div class="monarch-toggle-row">
  <div>
    <div class="monarch-toggle-row__label">Auto-enrich</div>
    <div class="monarch-toggle-row__description">Enrich new accounts automatically</div>
  </div>
  <div class="monarch-toggle monarch-toggle--active">
    <span class="monarch-toggle__thumb"></span>
  </div>
</div>

<!-- Checkbox (checked) -->
<label class="monarch-checkbox">
  <div class="monarch-checkbox__box monarch-checkbox__box--checked">
    <svg>✓</svg>
  </div>
  <span class="monarch-checkbox__label">Intelligence Agent</span>
</label>

<!-- Checkbox (unchecked) -->
<label class="monarch-checkbox">
  <div class="monarch-checkbox__box"></div>
  <span class="monarch-checkbox__label monarch-checkbox__label--unchecked">Revenue Agent</span>
</label>
```

### Avatars

```html
<!-- Initials (brand gradient = primary user) -->
<div class="monarch-avatar monarch-avatar-md monarch-avatar-brand">JY</div>

<!-- Color variants -->
<div class="monarch-avatar monarch-avatar-md monarch-avatar-blue">EM</div>
<div class="monarch-avatar monarch-avatar-md monarch-avatar-green">KM</div>

<!-- Sizes -->
<div class="monarch-avatar monarch-avatar-sm monarch-avatar-brand">JY</div>
<div class="monarch-avatar monarch-avatar-lg monarch-avatar-brand">JY</div>

<!-- With status -->
<div class="monarch-avatar monarch-avatar-md monarch-avatar-brand">
  JY
  <span class="monarch-avatar__status monarch-avatar__status--online"></span>
</div>

<!-- AI Agent avatar (square corners) -->
<div class="monarch-avatar monarch-avatar-md monarch-avatar-agent">
  <svg>🤖</svg>
</div>

<!-- Avatar group -->
<div class="monarch-avatar-group">
  <div class="monarch-avatar monarch-avatar-sm monarch-avatar-brand">JY</div>
  <div class="monarch-avatar monarch-avatar-sm monarch-avatar-blue">EM</div>
  <div class="monarch-avatar monarch-avatar-sm monarch-avatar-green">KM</div>
  <div class="monarch-avatar monarch-avatar-sm monarch-avatar-group__overflow">+3</div>
</div>
```

### Cards

```html
<!-- Base card -->
<div class="monarch-card">
  <div class="monarch-card__body">Content</div>
</div>

<!-- Card with header -->
<div class="monarch-card">
  <div class="monarch-card__header">
    <span class="monarch-card__header-title">Agent Activity</span>
    <button class="monarch-card__header-action">View All →</button>
  </div>
  <div class="monarch-card__body">Content</div>
</div>

<!-- Gradient border card -->
<div class="monarch-card-gradient" style="padding: 24px;">
  Featured content
</div>

<!-- Glass card (over gradient background) -->
<div class="monarch-card-glass" style="padding: 24px;">
  Frosted glass content
</div>

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

```html
<!-- Health ring (SVG-based) -->
<div class="monarch-health-ring monarch-health-ring-md">
  <svg class="monarch-health-ring__svg" viewBox="0 0 36 36">
    <path class="monarch-health-ring__track" d="M18 2.08a15.92 15.92 0 010 31.83 15.92 15.92 0 010-31.83" stroke-width="3" />
    <path class="monarch-health-ring__fill monarch-health-ring__fill--healthy" d="M18 2.08a15.92 15.92 0 010 31.83 15.92 15.92 0 010-31.83" stroke-width="3" stroke-dasharray="81, 100" />
  </svg>
  <span class="monarch-health-ring__value" style="color: #22C55E;">81</span>
</div>

<!-- Color thresholds: 70-100 = healthy (green), 40-69 = warning (amber), 0-39 = critical (red) -->
```

### Navigation

```html
<!-- Sidebar -->
<aside class="monarch-sidebar">
  <div class="monarch-sidebar__header">
    <!-- Logo -->
  </div>
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
        <th>Segment</th>
        <th>Health</th>
        <th>Pipeline</th>
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
          <!-- health ring -->
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

```html
<div class="monarch-chat">
  <div class="monarch-chat__header">
    <div class="monarch-avatar monarch-avatar-md monarch-avatar-agent">
      <svg>🤖</svg>
      <span class="monarch-avatar__status monarch-avatar__status--online"></span>
    </div>
    <div class="monarch-chat__header-info">
      <div class="monarch-chat__header-name">Monarch Intelligence</div>
      <div class="monarch-chat__header-status">Your daily briefing agent</div>
    </div>
  </div>

  <div class="monarch-chat__messages">
    <!-- Agent message -->
    <div class="monarch-chat__bubble monarch-chat__bubble--agent">
      <div class="monarch-chat__bubble-avatar">
        <div class="monarch-avatar monarch-avatar-sm monarch-avatar-agent"><svg>...</svg></div>
      </div>
      <div class="monarch-chat__bubble-content">
        <div class="monarch-chat__bubble-body">Good morning, Joe. Here's your briefing...</div>
        <span class="monarch-chat__bubble-time">8:00 AM</span>
      </div>
    </div>

    <!-- User message -->
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
    <svg class="monarch-command-palette__input-icon">🔍</svg>
    <input placeholder="Type a command or search..." />
  </div>
  <div class="monarch-command-palette__results">
    <div class="monarch-command-palette__group-title">Quick Actions</div>
    <button class="monarch-command-palette__item monarch-command-palette__item--selected">
      <svg class="monarch-command-palette__item-icon">+</svg>
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

## Atomic Design Hierarchy

```
Atoms (standalone elements):
  └── Buttons, Badges, Inputs, Toggles, Avatars

Molecules (atom compositions):
  └── Cards, Stat Cards, Search Bar, Health Indicators, Nav Items

Organisms (complex components):
  └── Sidebar, Data Table, Kanban Board, Agent Feed, Command Palette, Chat Interface

Templates (full page layouts):
  └── Dashboard (sidebar + stats + charts + feed)
  └── List View (sidebar + filters + data table)
```

## Do's and Don'ts

**Do:**
- Use dark mode as default
- Use `--monarch-brand-gradient` for primary CTAs and hero text
- Use semantic badge colors consistently (green=success, red=danger, etc.)
- Show full navigation on desktop
- Include keyboard shortcut indicators (⌘K, ESC, ↵)
- Use Inter for all UI text, JetBrains Mono for code
- Use the 8px spacing grid
- Add smooth transitions (200-300ms) on all interactive elements

**Don't:**
- Use hamburger menus on desktop
- Use pure black (#000) or pure white (#FFF) as backgrounds
- Use more than one primary button per visible area
- Add feature bloat or competing calls-to-action
- Use heavy shadows in dark mode (use glow effects instead)
- Sacrifice discoverability for aesthetics
- Use borders heavier than 1px for standard elements
