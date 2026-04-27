---
name: Productive Flow
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#424656'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#727687'
  outline-variant: '#c2c6d8'
  surface-tint: '#0054d7'
  primary: '#004fcb'
  on-primary: '#ffffff'
  primary-container: '#0065ff'
  on-primary-container: '#f7f6ff'
  inverse-primary: '#b3c5ff'
  secondary: '#4c5e85'
  on-secondary: '#ffffff'
  secondary-container: '#bfd1ff'
  on-secondary-container: '#485980'
  tertiary: '#485c5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#617578'
  on-tertiary-container: '#e5fbfe'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#00184a'
  on-primary-fixed-variant: '#003fa5'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#b4c6f3'
  on-secondary-fixed: '#051a3e'
  on-secondary-fixed-variant: '#35466c'
  tertiary-fixed: '#d1e7e9'
  tertiary-fixed-dim: '#b5cacd'
  on-tertiary-fixed: '#0a1e21'
  on-tertiary-fixed-variant: '#364a4d'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 12px
  container-padding: 20px
---

## Brand & Style

This design system is built for high-performance collaboration and project management. It balances the rigor of a professional enterprise tool with the approachable clarity of a modern SaaS application. The brand personality is dependable, organized, and focused.

The visual style follows a **Corporate / Modern** aesthetic, utilizing clean lines, intentional whitespace, and a sophisticated blue-dominant palette. It avoids unnecessary decoration, instead prioritizing the user's content (tasks, cards, and lists) through a structured hierarchy that reduces cognitive load. The emotional response should be one of "calm control"—the feeling that everything is in its right place.

## Colors

The palette is anchored by a deep primary blue, used for primary actions and brand presence. The secondary color is a rich, dark navy, reserved for high-contrast text and critical navigation elements to ensure maximum readability.

- **Primary Blue (#0065FF):** Used for primary buttons, active states, and focus indicators.
- **Secondary Navy (#091E42):** Used for primary headings and top-tier navigation.
- **Surface Neutrals (#FFFFFF, #F7F8F9):** Pure white is reserved for high-priority interactive elements like cards and input fields. The off-white neutral is used for the board background to create a subtle separation from the cards.
- **Subtle Tertiary (#E6FCFF):** Used for "ghost" button backgrounds, selection highlights, or informational banners to provide a soft contrast without the weight of the primary blue.

## Typography

The design system utilizes **Inter** for its exceptional legibility and systematic weight distribution, echoing the functional nature of professional interfaces. 

- **Headlines:** Use a tighter letter spacing and heavier weights to command attention in navigation and board titles.
- **Body:** The default size is 14px for density without sacrificing readability. 16px is used for long-form descriptions or onboarding content.
- **Labels:** Uppercase labels are used for micro-copy and metadata (like card tags or status badges) to create visual distinction from body text.

## Layout & Spacing

This design system uses a **Fluid Grid** approach for the board view, allowing lists to scroll horizontally while content within lists expands vertically. 

The spacing rhythm is built on a 4px base unit. 
- **Card Spacing:** Cards within a list use an 8px gap (`sm`).
- **List Spacing:** Lists are separated by 12px (`gutter`) to maintain a sense of grouping while allowing high density.
- **Padding:** Lists use 12px horizontal padding and 8px vertical padding. Cards use 12px internal padding for a "tight but airy" professional feel.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and precise **Ambient Shadows**.

1.  **Level 0 (Background):** The board canvas uses the neutral background (`#F7F8F9`).
2.  **Level 1 (Containers):** Lists have a slightly darker or transparent-grey background to group cards together.
3.  **Level 2 (Cards):** Cards are pure white with a subtle 1px border or a very soft, low-blur shadow (y-offset: 1px, blur: 3px, 5% opacity). This makes them feel "lifted" and interactive.
4.  **Level 3 (Dragging/Modals):** When an element is picked up or a modal is opened, it gains a deep, diffused shadow to indicate significant elevation above the rest of the interface.

## Shapes

The design system adopts a **Soft** shape language. 

- **Cards & Lists:** Use a 4px (0.25rem) corner radius. This provides a modern feel while maintaining a structured, efficient layout that fits well together.
- **Buttons:** Primary action buttons use a 4px radius to match cards.
- **Badges/Chips:** Use a fully pill-shaped (rounded-full) radius to distinguish them from interactive containers and labels.
- **Inputs:** Text inputs follow the 4px standard for consistency.

## Components

### Navigation Bars
The top navigation should be high-contrast, either using the secondary navy (`#091E42`) or a clean white with a bottom border. Links should use `label-sm` or `body-md` with bold weights for the active state.

### Cards
Cards are the primary unit of information. They must have a white background and a subtle shadow. Content should be padded by `sm` to `md` spacing. Indicators (icons for descriptions, attachments, or comments) should be placed at the bottom in `label-sm` typography using a medium-gray color.

### Lists
Lists act as columns. They should have a fixed width (typically 272px to 300px) and a background color that provides a soft contrast against the main board area. They include a header for the list title and a "Add a card" button at the footer.

### Buttons
- **Primary:** Solid `#0065FF` with white text.
- **Secondary/Ghost:** Transparent background with a light grey hover state or `#E6FCFF` background.
- **Action Icons:** Small, subtle icons that appear on hover for card editing or list management.

### Inputs
Standard inputs should have a 1px border in a light neutral tone, turning to a 2px primary blue border on focus. Placeholders should be a light grey to ensure the user's actual input is high contrast.