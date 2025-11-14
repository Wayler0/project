# Lighthouse Audit Report - STAC Institute Website

## Baseline Issues & Prioritized Fixes

### Critical (High Impact, Easy Win)
1. **Missing meta description** (SEO, affects CTR)
   - Add `<meta name="description" content="...">` to all pages
   - Impact: Improves search ranking + click-through rate
   - Effort: 2 min

2. **Images lacking width/height attributes** (CLS, Performance)
   - Add `width` and `height` to card images to prevent layout shift
   - Impact: Reduces Cumulative Layout Shift (CLS), smoother page load
   - Effort: 5 min

3. **No WebP image format** (Performance)
   - Convert JPGs to WebP, add srcset with fallback
   - Impact: 25-35% smaller file sizes, faster load
   - Effort: 15 min

4. **Unused Font Awesome CSS** (Performance)
   - Only using 4 social icons; inline CSS or use symbol sprites
   - Impact: Saves ~25KB HTTP request
   - Effort: 20 min

5. **No favicon caching headers** (Performance)
   - Serve favicon with long cache expiry
   - Impact: Avoids 404 requests on every page load
   - Effort: 10 min (server config)

### High (Medium Impact)
6. **Missing alt text on some images** (Accessibility)
   - Already fixed on index.html cards; verify about.html, courses.html
   - Impact: Screen reader users can navigate
   - Effort: 3 min

7. **Color contrast issues** (Accessibility)
   - Purple navbar may not meet WCAG AA on white text
   - Impact: Compliant for all users including colorblind
   - Effort: 10 min (audit + tweak palette)

8. **No responsive text** (Performance, Accessibility)
   - Use CSS clamp() for fluid typography scaling
   - Impact: Text readable on all screen sizes, no need for media queries
   - Effort: 15 min

9. **Inline styles in JavaScript** (Performance, Maintainability)
   - Already fixed (moved to CSS .open class)
   - Impact: Cleaner separation of concerns
   - Effort: Done

10. **No social meta tags** (Social, SEO)
    - Add Open Graph and Twitter Card tags
    - Impact: Better previews when shared on social media
    - Effort: 10 min

### Medium (Low Impact, Nice to Have)
11. **Scrolling text animation CPU-heavy** (Performance)
    - Use transform instead of translateX for better GPU acceleration
    - Impact: Smoother animation, lower CPU
    - Effort: 5 min

12. **No service worker / offline support** (PWA, Performance)
    - Not critical for a college site but good practice
    - Impact: Works offline, cacheable assets
    - Effort: 30 min (optional)

---

## Quick Wins (Do These First)

**Est. Total Time: ~45 min for all critical + high items**

1. Add meta descriptions to all 3 HTML files
2. Add width/height to all card images
3. Convert images to WebP (batch script)
4. Add srcset to cards with WebP + JPG fallback
5. Tweak color palette for WCAG AA contrast
6. Implement clamp() for typography scaling
7. Inline social icon CSS or use SVG
8. Add Open Graph / Twitter meta tags

---

## Audit Assumptions

- **Performance Budget**: Images should be <100KB per page combined
- **Accessibility Target**: WCAG AA (Level AA is standard for public institutions)
- **SEO Target**: Heading hierarchy, semantic HTML, meta tags
- **Mobile UX**: Header must be <50px, nav must collapse to hamburger, touch targets >44px

---

## Files to Update (Priority Order)

1. `home.css` — Add clamp() typography, improve color scheme
2. `index.html` — Add meta description, width/height, srcset
3. `about.html` — Add meta description, width/height
4. `courses.html` — Add meta description, width/height
5. Create batch image optimization script (WebP conversion)
6. Create `header.html` / `footer.html` components + build script
