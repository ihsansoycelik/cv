# Ihsan Soycelik | Product Designer

A responsive résumé and portfolio landing page for Ihsan Soycelik, built with TanStack Start, React, TypeScript, Tailwind CSS, and free UIArc components. The page includes an introduction, seven detailed experience entries, education, direct email/phone/LinkedIn links, section navigation, and a persistent light/dark theme toggle. TanStack Start file routing, server rendering, and metadata remain in place.

## Development

```sh
bun install
bun run dev
```

## UIArc components

UIArc components are installed from the shadcn registry. The `@uiarc` registry is configured in `components.json`; the app imports Arc foundation tokens once from `src/styles.css` (the stylesheet linked by `src/routes/__root.tsx`), and uses the installed free Arc Button and ThemeSwitch components. Contact actions are semantic `mailto:` and `tel:` links.

To add another free Arc component, first read its documentation at `https://uiarc.dev/components/<component-id>/markdown`, then install the foundation only if it is not already present and add the component:

```sh
bunx --bun shadcn@latest add @uiarc/<component-id>
```

Use documented component props and ensure added components use Arc foundation variables and preserve keyboard, reduced-motion, light/dark, and responsive behavior.

## Stack

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Tailwind CSS 4
- UIArc foundation, free Button, and ThemeSwitch components
- Vite
