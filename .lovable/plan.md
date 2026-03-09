

## Problem

The `body::after` pseudo-element has `z-index: 9999`, placing the texture **on top of all content**. You want it **behind** the content but **above** the background color.

## Solution

Change the `z-index` from `9999` to `0`, and ensure the main content sits above it by giving the app root a `position: relative` with `z-index: 1`.

### Changes

**`src/index.css`** — Change `body::after` z-index from `9999` to `0`.

**`src/App.tsx`** or **`index.html`** — Ensure the `#root` or app wrapper has `position: relative; z-index: 1` so all content stacks above the texture. This can be done with a simple CSS rule:
```css
#root {
  position: relative;
  z-index: 1;
}
```

This creates the correct layer order: background color → texture (z-index 0) → content (z-index 1).

