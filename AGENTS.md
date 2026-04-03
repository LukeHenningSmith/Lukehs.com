# Agent Guidelines for personal-website-v4

This is a React 19 + TypeScript + Vite personal portfolio website using Tailwind CSS v4 and Radix UI.

## Build / Lint / Test Commands

| Command           | Description                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start dev server with HMR at localhost:5173    |
| `npm run build`   | Type-check with `tsc -b` then build to `dist/` |
| `npm run lint`    | Run ESLint on all `.ts` / `.tsx` files         |
| `npm run preview` | Preview the production build locally           |

No test framework is currently configured. Before adding tests, check the project for an existing test setup (Vitest, Playwright, etc.).

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer, FadeUp, ScrollTopButton
│   ├── sections/     # Intro, Projects, Experience, Education, Skiing, Title
│   ├── theme/         # ThemeProvider, ModeToggle
│   ├── ui/            # Shadcn-style primitives (button, kbd, tooltip)
│   └── utility/
│       └── skills/    # SkillButton, SkillsContainer, constants
├── hooks/
│   └── hooks.ts
├── lib/
│   └── utils.ts       # cn() utility
├── App.tsx
├── constants.ts
├── main.tsx
└── types.ts
```

## TypeScript Conventions

- Use explicit `type` exports for public types (e.g., `export type SkillItem = {...}`)
- Use `type` imports for type-only imports: `import type { FC } from "react"`
- Avoid `any`; use `unknown` when the type is genuinely unknown
- Component prop types are defined inline or via interfaces above the component

## Component Conventions

- **Naming**: PascalCase for components, camelCase for functions/hooks
- **Export**: Use named exports for section components (`export function Intro()`) and default exports for the root App
- **Props**: Destructuring with defaults; spread `...props` for forwarding
- **Compound components**: Use `data-slot` attributes for Radix slots

## Imports

- Use `@/` path alias for internal imports: `import { cn } from "@/lib/utils"`
- Order: React imports → external libraries → internal packages → relative imports
- Use `import * as React from "react"` in `.tsx` files; named imports in `.ts`

## Styling

- Tailwind CSS v4 (utility-first); no CSS modules
- Use `cn()` from `@/lib/utils` for conditional class merging
- Use `class-variance-authority` (CVA) for component variants (see `button.tsx`)
- Avoid inline styles except for dynamic values

## Animations

- Framer Motion for animations (see `FadeUp.tsx`, section components)
- Use `ANIMATION_GAP` from `src/constants.ts` for staggered delays
- `tw-animate-css` for CSS animation utilities

## Error Handling

- Wrap potentially throwing code in `try/catch` with empty catch blocks for expected failures (e.g., localStorage access)
- Custom hooks should throw descriptive errors when used outside their provider

## File Patterns

- One component per file; filename matches component name (PascalCase)
- UI primitives live in `src/components/ui/`
- Page-level sections live in `src/components/sections/`
- Shared utilities go in `src/lib/` or `src/hooks/`

## Linting

- ESLint with TypeScript-ESLint, React Hooks, and React Refresh plugins
- Configured in `eslint.config.js`
- Run `npm run lint` before committing
