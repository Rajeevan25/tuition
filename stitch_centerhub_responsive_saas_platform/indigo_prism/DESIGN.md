# Design System Specification: The Architectural Curator

## 1. Overview & Creative North Star
The "Creative North Star" for this design system is **The Architectural Curator**. 

In an industry often cluttered with dense spreadsheets and chaotic scheduling, this system acts as a sophisticated gallery space for data. We are moving away from the "SaaS-in-a-box" look. Instead of rigid grids and heavy borders, we employ a strategy of **Intentional Asymmetry** and **Tonal Depth**. 

The goal is to blend the functional precision of *Linear* with the fluid, expansive elegance of *Stripe*. We achieve this by treating the screen not as a flat canvas, but as a three-dimensional environment where depth is communicated through light and layering rather than lines.

---

## 2. Colors: Tonal Atmosphere
We use a sophisticated Material 3-inspired palette that prioritizes soft contrast over harsh containment.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders to define sections. Layout boundaries must be defined solely through background color shifts or subtle tonal transitions. A section should end because the background shifts from `surface` to `surface-container-low`, not because a line tells it to.

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of frosted glass.
- **Base Layer:** `surface` (#f8f9ff)
- **Secondary Sectioning:** `surface-container-low` (#eff4ff)
- **Primary Interaction Hubs:** `surface-container-lowest` (#ffffff)
- **Nested Content:** `surface-container-high` (#dce9ff)

### The Glass & Gradient Rule
For high-conversion CTAs and Hero backgrounds, use a **Signature Texture**. Instead of a flat `primary` fill, use a linear gradient: 
`linear-gradient(135deg, #3525cd 0%, #4f46e5 100%)`.
For floating navigation or "over-table" mobile cards, use **Glassmorphism**:
`background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(12px);`

---

## 3. Typography: Editorial Authority
We utilize a dual-font strategy to balance character with readability.

*   **Display & Headlines (Manrope):** Use these for high-level data points and section titles. The wider apertures and geometric forms of Manrope provide an "Editorial" feel.
    *   `display-lg`: 3.5rem (For hero metrics)
    *   `headline-md`: 1.75rem (For page headers)
*   **Interface & Body (Inter):** Use Inter for all functional elements, forms, and dense data. It is the workhorse that ensures legibility.
    *   `title-sm`: 1rem / Medium weight (For card titles)
    *   `body-md`: 0.875rem (For standard descriptions)
    *   `label-sm`: 0.6875rem / All Caps / Wide Letter Spacing (For metadata/tags)

---

## 4. Elevation & Depth: The Layering Principle
Hierarchy is achieved through **Tonal Layering** rather than traditional structural lines.

*   **Natural Lift:** Place a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#eff4ff) background. This creates a 0dp elevation look that feels premium and "unforced."
*   **Ambient Shadows:** For floating elements (Modals, Dropdowns), use an extra-diffused shadow: `box-shadow: 0 20px 50px -12px rgba(11, 28, 48, 0.08)`. The shadow color is a tint of `on-surface` (#0b1c30), never pure black.
*   **The Ghost Border:** If containment is strictly required for accessibility, use the `outline-variant` (#c7c4d8) at **15% opacity**. It should be felt, not seen.

---

## 5. Components: Polished Primitives

### Cards & Tables (The "Mobile-First" Hybrid)
*   **The Rule:** Forbid divider lines between table rows. 
*   **Implementation:** Use a `surface-container-lowest` card wrapper with `xl` (1.5rem) rounded corners. Separate data rows using a 1px vertical gap that reveals the `surface-container-low` background, or simply use 16px of vertical whitespace.
*   **Mobile:** Tables must transform into "Stackable Cards" using the `surface-container-highest` background to highlight the active record.

### Buttons (High-End Tactility)
*   **Primary:** Gradient fill (Primary to Primary-Container), `full` rounding, and a subtle inner-glow: `inset 0 1px 0 rgba(255,255,255,0.2)`.
*   **Secondary:** No background. Use `on-surface` text with a `surface-container-high` background on hover.

### Input Fields
*   **The Look:** Fields should be `surface-container-lowest` with a subtle `outline-variant` ghost border. 
*   **Focus State:** Shift the border to `primary` and add a 4px "Soft Focus" ring using `primary` at 10% opacity.

### Elegant Badges (Status Indicators)
*   Instead of heavy solid fills, use a "Tone-on-Tone" approach. 
*   **Success:** `emerald-50` background with `emerald-700` text. Small `sm` rounding.

---

## 6. Do’s and Don’ts

### Do
*   **DO** use whitespace as a functional tool. If a layout feels "off," add 16px of breathing room before adding a line.
*   **DO** use `xl` (1.5rem) rounding for outer containers and `md` (0.75rem) for internal elements (buttons/inputs). This "nested rounding" creates a professional, nested aesthetic.
*   **DO** use thin-line duotone icons. The secondary color of the icon should always match the `surface-tint`.

### Don’t
*   **DON’T** use 100% black text. Always use `on-surface` (#0b1c30) for better optical comfort.
*   **DON’T** use standard "Drop Shadows" on every card. Reserve shadows for elements that physically move or float over the interface.
*   **DON’T** use "Standard Blue" for links. Use the `primary` (#3525cd) which has more violet depth, leaning into the high-end Stripe/Linear aesthetic.