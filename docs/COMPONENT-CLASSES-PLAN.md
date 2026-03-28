# Component Classes Plan

> Turn the Monarch DS from "documentation with examples" into "an importable CSS component library backed by design tokens."

## Goal

Create `packages/components.css` — a single importable file of `.monarch-*` CSS classes that consuming Monarch projects use directly. The docs site examples should reference these classes, not raw Tailwind utilities, so the docs are a live proof that the DS works.

## Architecture

```
packages/
  tokens/              # ✅ Done — CSS custom properties
    colors.css
    typography.css
    spacing.css
    shadows.css
    animations.css
    index.css

  components/          # 🔨 NEW — CSS component classes
    buttons.css        # .monarch-btn, .monarch-btn-primary, etc.
    badges.css         # .monarch-badge, .monarch-badge-success, etc.
    inputs.css         # .monarch-input, .monarch-select, .monarch-textarea
    toggles.css        # .monarch-toggle, .monarch-checkbox
    avatars.css        # .monarch-avatar, .monarch-avatar-sm/md/lg
    cards.css          # .monarch-card, .monarch-card-elevated, .monarch-card-glass
    stat-cards.css     # .monarch-stat-card
    search-bar.css     # .monarch-search
    health.css         # .monarch-health-ring
    nav.css            # .monarch-nav-item, .monarch-nav-section
    sidebar.css        # .monarch-sidebar
    table.css          # .monarch-table
    kanban.css         # .monarch-kanban-column, .monarch-kanban-card
    feed.css           # .monarch-feed-item
    command.css        # .monarch-command-palette
    chat.css           # .monarch-chat, .monarch-chat-bubble
    index.css          # Combined import

  tailwind-preset/     # ✅ Done — Tailwind config preset
    preset.js
```

## Phases

### Phase 1: Atoms (foundation)
**Files:** `buttons.css`, `badges.css`, `inputs.css`, `toggles.css`, `avatars.css`

Each file defines:
- Base class (e.g., `.monarch-btn`) with shared styles
- Variant classes (e.g., `.monarch-btn-primary`, `.monarch-btn-secondary`)
- Size modifiers (e.g., `.monarch-btn-sm`, `.monarch-btn-lg`)
- State classes (e.g., `.monarch-btn-loading`, `.monarch-btn-disabled`)

**Update docs pages:** Replace inline Tailwind utilities in `src/pages/atoms/*.astro` with the new `.monarch-*` classes.

**Acceptance:** A consuming project can `@import 'monarch-design-system/components/buttons.css'` and use `<button class="monarch-btn monarch-btn-primary">Save</button>` with zero additional CSS.

### Phase 2: Molecules
**Files:** `cards.css`, `stat-cards.css`, `search-bar.css`, `health.css`, `nav.css`

These compose atoms. For example, `.monarch-stat-card` includes card styling + layout for icon, number, and label.

**Update docs pages:** Replace inline styles in `src/pages/molecules/*.astro`.

### Phase 3: Organisms
**Files:** `sidebar.css`, `table.css`, `kanban.css`, `feed.css`, `command.css`, `chat.css`

Complex components with internal structure. These reference atom and molecule classes.

**Update docs pages:** Replace inline styles in `src/pages/organisms/*.astro`.

### Phase 4: Templates & Integration
- Update template preview pages to use component classes
- Update the DS site's own sidebar/layout to use component classes (full dogfooding)
- Write integration guide: "How to import Monarch DS into a Next.js/Vite project"
- Test in a real Monarch project

## Class Naming Convention

```
.monarch-{component}                  # Base: .monarch-btn
.monarch-{component}-{variant}        # Variant: .monarch-btn-primary
.monarch-{component}-{size}           # Size: .monarch-btn-sm
.monarch-{component}--{state}         # State: .monarch-btn--loading
.monarch-{component}__{child}         # Child: .monarch-card__header
```

## CSS Approach

Each component class uses:
1. **CSS custom properties** from `packages/tokens/` for all values (colors, spacing, etc.)
2. **No Tailwind dependency** — pure CSS classes that work standalone
3. **Dark/light mode** via the same `[data-theme="light"]` toggle
4. **Transitions** on all interactive states (hover, focus, active)
5. **Composable** — classes can be combined (`.monarch-btn .monarch-btn-primary .monarch-btn-lg`)

Example structure for a component file:

```css
/* packages/components/buttons.css */

.monarch-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--monarch-space-2);
  padding: var(--monarch-space-2-5) var(--monarch-space-5);
  border-radius: var(--monarch-radius-lg);
  font-size: var(--monarch-text-sm);
  font-weight: var(--monarch-font-semibold);
  font-family: var(--monarch-font-sans);
  line-height: var(--monarch-leading-normal);
  transition: all var(--monarch-duration-base) var(--monarch-ease-default);
  cursor: pointer;
  border: none;
  background: transparent;
}

.monarch-btn:active {
  transform: scale(0.98);
}

.monarch-btn-primary {
  background: var(--monarch-brand-gradient);
  color: #fff;
}

.monarch-btn-primary:hover {
  box-shadow: var(--monarch-glow-purple);
  transform: scale(1.02);
}

/* ... etc */
```

## Tracking

Each phase gets a GitHub issue. Work items within each phase:
1. Create the CSS file with all classes
2. Update the corresponding docs page(s) to use the classes
3. Verify the docs page still renders correctly
4. Update the "View Code" snippets to show the class-based usage

## Dependencies

- Tokens must be imported before components (`@import 'monarch-design-system/tokens'`)
- Components are independent of Tailwind — they work with just the token CSS
- The Tailwind preset remains available for projects that prefer utility classes

## How to Resume

If pausing between phases:
1. Check which phase is complete by looking at `packages/components/` — if a file exists, that component is done
2. Check the corresponding docs page — if it uses `.monarch-*` classes, it's been updated
3. Pick up the next incomplete component file in the current phase
4. Each component is self-contained, so you can do them in any order within a phase
