## Goal

Make the DMAC Media logo notably bigger and remove the white box behind it so it sits cleanly on the site background.

## Changes

1. **Generate a transparent version of the logo**
   - Use image editing to strip the white background from `src/assets/dmac-logo.png`, save as `src/assets/dmac-logo.png` (overwrite) as a transparent PNG.
   - Keeps the same import path so nothing else needs updating.

2. **Header (`src/components/SiteHeader.tsx`)**
   - Bump logo from `h-10` → `h-20` (~80px).
   - Reduce header vertical padding from `py-4` → `py-3` so the taller logo doesn't bloat the bar.

3. **Footer (`src/components/SiteFooter.tsx`)**
   - Bump footer logo from `h-12` → `h-20` for visual consistency.

## Out of scope

- No palette changes (site stays white / ink-black / red-spark).
- No layout/route changes.
