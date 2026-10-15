---
version: alpha
name: Context Dev
description: A polished, technical landing-page system with bright blue accents, airy spacing, and a calm product-led SaaS tone.
colors:
  primary: "#2563eb"
  primary-60: "#60a5fa"
  secondary: "#4a5565"
  tertiary: "#eff6ff"
  neutral: "#e5e7eb"
  surface: "#ffffff"
  on-surface: "#111827"
  text-muted: "#4a5565"
  accent: "#60a5fa"
  success: "#10b981"
  warning: "#f59e0b"
  error: "#ef4444"
typography:
  headline-display:
    fontFamily: IBM Plex Sans
    fontSize: 56px
    fontWeight: 400
    lineHeight: 61.6px
    letterSpacing: -1.81177px
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 43.2px
    fontWeight: 400
    lineHeight: 49.68px
    letterSpacing: -1.512px
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 21.6px
    fontWeight: 400
    lineHeight: 25.92px
    letterSpacing: -0.54px
  headline-sm:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 22px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24.5455px
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
  label-lg:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  label-md:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
  label-sm:
    fontFamily: IBM Plex Sans
    fontSize: 9.9px
    fontWeight: 400
    lineHeight: 14px
    letterSpacing: 0px
  code-md:
    fontFamily: IBM Plex Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  code-sm:
    fontFamily: IBM Plex Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
rounded:
  none: 0px
  sm: 5px
  md: 8px
  lg: 12px
  xl: 23px
  full: 9999px
spacing:
  xs: 6px
  sm: 14px
  md: 28px
  lg: 58px
  xl: 132px
components:
  button-primary:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 14px
    height: 48px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 14px
    height: 48px
  button-tertiary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: 8px
    height: 29px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: 28px
  input:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 16px
    height: 56px
  chip:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 8px
  nav-link:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-lg}"
    padding: 0px
---

# Context Dev

## Overview

Context.dev feels like a modern technical SaaS brand: crisp, confident, and product-first. The page balances strong utility with a playful sense of motion and lightness through bright blues, soft surfaces, and an expansive hero composition. It is spacious rather than dense, aiming for clarity and trust over visual complexity.

## Colors

- **Primary (#2563eb):** The core brand blue used for key links, emphasis text, and interactive highlights. It reads as authoritative and energetic without feeling aggressive.
- **Accent (#60a5fa):** A lighter sky-blue companion used to soften gradients and add depth to the hero and supportive UI elements.
- **Tertiary (#eff6ff):** A pale blue wash for subtle button fills, input surfaces, and low-emphasis controls.
- **Surface (#ffffff):** The dominant base color for the page and UI containers, keeping the interface airy and legible.
- **On-surface (#111827):** Near-black text for headlines, primary buttons, and high-contrast interface labels.
- **Secondary (#4a5565):** Muted slate text used for navigation, descriptive copy, and less prominent labels.
- **Neutral (#e5e7eb):** A soft neutral for borders and quiet separation when structure is needed without heavy visual weight.
- **Error (#ef4444):** Reserved for destructive or invalid states; it should stay visually distinct from the calm blue system.
- **Success (#10b981) / Warning (#f59e0b):** Support colors for status messaging and metadata, used sparingly so the brand blue remains dominant.

## Typography

The system uses IBM Plex Sans as the primary voice, which gives the design a technical, modern, and highly readable character. Headlines are light-weight and generously spaced, with large negative letter-spacing on display sizes to keep the hero feeling editorial rather than blocky. Body copy stays regular weight for clarity, while labels and controls use slightly stronger weight to improve scanability.

The biggest headline style is `headline-display` at 56px, followed by `headline-lg` and `headline-md` for hierarchy within marketing sections. `body-md` is the default paragraph size, while `body-lg` can be used where narrative emphasis is needed. `label-md` and `label-lg` support navigation and buttons, and `code-md` / `code-sm` can be used for technical strings, URLs, or API references. Uppercase styling is not prominent; instead, the system relies on weight, spacing, and size contrast.

## Layout

The layout is centered, open, and hero-led, with content floating over a large atmospheric background. Use a fluid page structure with a restrained content width and generous horizontal breathing room, so the main message and product demo remain the focal points. Vertical spacing should follow the larger steps in the scale, especially around hero areas, while smaller 6px and 14px increments handle micro-spacing inside controls and inline clusters.

Cards and panels use substantial internal padding, with 28px as the default container inset. Section spacing should feel expansive, often jumping from medium to large gaps instead of relying on tight stacks. Interactive rows and nav clusters are compact, but major blocks should always preserve a calm, low-density rhythm.

## Elevation & Depth

The interface is mostly flat and clean, with elevation used sparingly to preserve a disciplined SaaS feel. Depth comes from soft shadows, thin borders, and tonal layering rather than dramatic floating effects. The hero and card treatment rely on subtle shadowing and pale fills to separate elements from the background without overwhelming the page.

Use `card` for raised content blocks that need a quiet frame, and keep shadows soft and low-opacity. Inputs and buttons should appear tactile through contrast and surface color, not heavy embossing. The visual hierarchy is primarily driven by color contrast and placement.

## Shapes

The shape language is rounded but controlled. Buttons lean on pill forms with `rounded.full`, while cards and large containers use `rounded.xl` to feel soft and modern. Inputs and chips sit in the middle of the spectrum with `rounded.lg` or `rounded.sm`, creating a clear distinction between structural surfaces and small control surfaces.

Overall, the system feels friendly and polished rather than geometric or sharp. Avoid extreme corner variance; consistency in rounding is part of the brand’s calm confidence.

## Components

Buttons are the most expressive interactive element. `button-primary` should use the strongest contrast, with a dark fill, light text, and pill rounding for major actions like “Start for free” or “Get API key.” `button-secondary` should stay lighter and quieter, usually white with dark text and the same pill silhouette for secondary actions like “Book demo.” `button-tertiary` is appropriate for subtle CTAs, helper actions, or segmented controls, using the pale blue fill and smaller 29px height seen in the compact UI treatments.

Cards should use `card` styling: soft surface fill, `rounded.xl`, 28px padding, and a restrained shadow. They should present grouped content like the search/demo module without feeling heavy. Inputs should be large, soft, and approachable, with `input` using pale blue backgrounds and generous inner padding to support form-like hero interactions.

Chips and pills should remain minimal and functional. `chip` is suitable for category selectors, tags, and compact filters, with muted text and pill rounding. Navigation links should use `nav-link` styling: clean, low-contrast, and mostly typographic, with emphasis reserved for the current section or hover state. Links and inline technical text may use the monospace tokens for URLs, code snippets, and API identifiers.

## Do's and Don'ts

- Do keep the interface spacious and centered, with large hero breathing room and calm section separation.
- Do use bright blue sparingly for emphasis so it stays meaningful and recognizable.
- Do prefer light-weight headlines with tight negative letter-spacing at large sizes.
- Do keep buttons and pills consistently rounded, especially for primary and secondary actions.
- Don't introduce heavy shadows, gradients, or glassmorphism that compete with the clean SaaS feel.
- Don't use saturated accent colors outside the blue system unless they support status or utility.
- Don't make body text too bold or too condensed; readability is part of the brand.
- Don't mix sharp and highly varied corner radii within the same component family.
