# Code Style and Conventions

## TypeScript Configuration

- Strict TypeScript configuration with ES2022 target
- Path aliases: `@/*` maps to `./app/*`
- JSX preserve mode for Next.js optimization

## Code Formatting

- **Prettier**: Single quotes enforced (`"singleQuote": true`)
- **oxlint**: Replaces ESLint for faster linting
  - TypeScript, React, Next.js, and import plugins enabled
  - Unused variables treated as errors
  - Correctness errors, suspicious warnings, style warnings

## Naming Conventions

- React components: PascalCase (e.g., `BlogHeader`, `FooterInfo`)
- Files: kebab-case for pages, PascalCase for components
- Directories: kebab-case with underscores for private folders (`_components`, `_lib`)

## Component Architecture

- Components in `app/_components/` with co-located Storybook stories
- Reusable UI components with TypeScript interfaces
- Props interface naming: `Props` for component props

## File Organization

- `app/` - Next.js App Router structure
- `app/_components/` - Reusable UI components
- `app/_lib/` - Utility functions and API clients
- `app/_config/` - Configuration files
- `__tests__/` - Test files matching app structure

## Pre-commit Hooks

- Automatic linting with oxlint
- Automatic formatting with Prettier
- CSS linting with Stylelint
