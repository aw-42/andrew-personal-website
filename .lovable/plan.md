

## Design Improvements: Animations & Visual Hierarchy

### 1. Scroll-triggered fade-in animations

Add staggered fade-in-up animations to each section as the user scrolls down. Use Intersection Observer to trigger animations when sections enter the viewport.

**Changes:**
- **`tailwind.config.ts`** — Add `fade-in` keyframe and animation utility
- **`src/hooks/useScrollAnimation.ts`** — Already exists; review and use or create a simple hook using Intersection Observer that returns a ref and `isVisible` boolean
- **`src/pages/Index.tsx`** — Wrap each section with the scroll animation hook, applying `opacity-0 translate-y-4` by default and transitioning to `opacity-100 translate-y-0` when visible. Stagger each section with increasing delay (e.g., hero instant, Current Focus 100ms, Formerly 200ms, etc.)

### 2. Visual hierarchy & spacing improvements

- **Increase section spacing** from `space-y-16` to `space-y-20` or `space-y-24` for more breathing room
- **Section headers** — Add a small decorative line or dot before the uppercase labels, and increase bottom margin from `space-y-4` to `space-y-6`
- **Hero section** — Increase the heading size slightly on desktop (`md:text-8xl`), and add more space between the heading and bio text
- **Cards** — Add subtle `hover:shadow-md hover:-translate-y-0.5 transition-all duration-200` for a gentle lift on hover
- **List items** — Add a subtle left border accent or increase line-height for better readability in the Formerly and Side Quests lists
- **Footer** — Add more top padding to separate it from content

### Files to edit
- `tailwind.config.ts` (add fade-in keyframes)
- `src/pages/Index.tsx` (animations, spacing, hover effects)
- `src/hooks/useScrollAnimation.ts` (verify/update the scroll observer hook)

