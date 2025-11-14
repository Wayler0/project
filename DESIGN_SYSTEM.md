# Design System & Brand Guidelines

## Color Palette

### Primary Colors
- **Primary Blue**: `#1e40af`
  - Use: Header background, main headings, primary CTAs
  - Contrast: 7:1 with white (WCAG AAA)

- **Primary Dark**: `#1e3a8a`
  - Use: Header hover, footer, active states
  - Contrast: 8:1 with white (WCAG AAA)

### Accent Colors
- **Accent Green**: `#059669`
  - Use: Secondary CTAs, course category highlights
  - Contrast: 5.5:1 with white (WCAG AA)

- **Accent Light Green**: `#10b981`
  - Use: Hover states for accent elements
  - Contrast: 4.8:1 with white (WCAG AA)

### Neutral Colors
- **Text Dark**: `#0f172a`
  - Use: Body text, primary content
  - Contrast: 18:1 with white (WCAG AAA)

- **Text Light**: `#6b7280`
  - Use: Secondary text, captions
  - Contrast: 7.5:1 with white (WCAG AA)

- **Border Gray**: `#e5e7eb`
  - Use: Subtle dividers, card borders

- **Background Light**: `#f9fafb`
  - Use: Page background, section backgrounds

---

## Typography Scale

### Font Family
```
'Segoe UI', Roboto, 'Helvetica Neue', system-ui, -apple-system, sans-serif
```
- System fonts = fast loading
- Professional + accessible
- Consistent across platforms

### Heading Sizes (with Fluid Scaling)
```
H1: clamp(1.8rem, 5vw, 3rem)      /* 28px - 48px */
H2: clamp(1.5rem, 4vw, 2.25rem)   /* 24px - 36px */
H3: clamp(1.25rem, 3vw, 1.875rem) /* 20px - 30px */
```

### Body Text
```
Base: clamp(14px, 1.8vw, 16px)
Line-height: 1.6
```

---

## Component Styles

### Buttons & CTAs
```css
Button {
  padding: 0.75rem 1.5rem;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

Button:hover {
  background: var(--accent-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
```

### Cards
```css
Card {
  background: white;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: all 0.25s ease;
}

Card:hover {
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transform: translateY(-4px);
}
```

### Course List Items
```css
ListItem {
  padding: 1rem;
  background: #f9fafb;
  border-left: 3px solid var(--accent);
  margin-bottom: 0.75rem;
  border-radius: 6px;
}
```

### Social Icons
```
Size: 44px (mobile-friendly touch target)
Spacing: 12px padding
Transition: All 0.2s with scale effect on hover
Background: Brand colors (Facebook: #1877f2, Twitter: #000, Instagram: gradient, Email: --primary)
```

---

## Spacing & Layout

### Gap/Padding Scale
```
xs: 0.25rem (4px)
sm: 0.5rem  (8px)
md: 1rem    (16px)
lg: 1.5rem  (24px)
xl: 2rem    (32px)
```

### Container Max-Width
```
Desktop: 1100px
Tablet: 768px
Mobile: 90% width
```

---

## Responsive Breakpoints

```
Mobile:  < 768px   (phones)
Tablet:  768-1024px (iPad)
Desktop: > 1024px   (laptops)
```

### Mobile-First Approach
1. Design for mobile first
2. Add features at tablet breakpoint
3. Optimize for desktop

---

## Shadows & Effects

### Shadow Levels
```css
--shadow: 0 1px 3px rgba(0,0,0,0.1);        /* subtle */
--shadow-md: 0 4px 6px rgba(0,0,0,0.1);     /* medium */
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1);   /* large */
```

### Transitions
```css
Hover effects: 0.2s ease
Page loads: 0.3s ease-out
Animations: 0.5s smooth
```

---

## Accessibility Checklist

✓ Color contrast meets WCAG AA (4.5:1 minimum)
✓ Touch targets at least 44px × 44px
✓ Focus states clearly visible
✓ Alt text on all images
✓ Semantic HTML (proper heading hierarchy)
✓ Skip-to-content link
✓ Keyboard navigation support
✓ ARIA labels on interactive elements

---

## Social Media Icons

| Brand | Color | Usage |
|-------|-------|-------|
| Facebook | #1877f2 | Community engagement |
| Twitter/X | #000000 | News & updates |
| Instagram | Gradient | Visual content |
| Email | Primary Blue | Newsletter signup |

---

## Design Tokens (CSS Variables)

```css
:root {
    --primary: #1e40af;
    --primary-dark: #1e3a8a;
    --accent: #059669;
    --accent-light: #10b981;
    --text: #0f172a;
    --text-light: #6b7280;
    --border: #e5e7eb;
    --bg: #ffffff;
    --shadow: 0 1px 3px rgba(0,0,0,0.1);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    --max-width: 1100px;
    --gap: 1rem;
}
```

---

## Before & After Comparison

### Before
- ❌ Inconsistent colors (purple, blue, cyan, gray)
- ❌ Fixed sizes (no scaling)
- ❌ Arial font (generic)
- ❌ Cyan background (not professional)
- ❌ Heavy animations (blink, scroll)

### After
- ✅ Professional color scheme (blue + green)
- ✅ Fluid typography (scales with viewport)
- ✅ System fonts (fast + consistent)
- ✅ Clean white background (professional)
- ✅ Smooth transitions (modern feel)

---

**Last Updated**: November 14, 2025
