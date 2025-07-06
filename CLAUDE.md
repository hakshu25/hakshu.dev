# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm test` - Run tests with Vitest
- `pnpm test:coverage` - Run tests with coverage report
- `pnpm lint` - Run oxlint
- `pnpm prettier` - Check code formatting
- `pnpm prettier:fix` - Fix code formatting
- `pnpm stylelint` - Check CSS/styling
- `pnpm stylelint:fix` - Fix CSS/styling issues
- `pnpm storybook` - Run Storybook development server on port 6006
- `pnpm build-storybook` - Build Storybook for production

This project uses pnpm as the package manager.

## Architecture

This is a Next.js 15 blog application with the following structure:

- **Content Management**: Uses microCMS as a headless CMS for blog posts
- **Styling**: Tailwind CSS 4.x with custom PostCSS configuration
- **Testing**: Vitest with jsdom environment and React Testing Library
- **Component Development**: Storybook for component isolation and documentation
- **Type Safety**: TypeScript with strict configuration

### Key Directories

- `app/` - Next.js App Router pages and components
  - `_components/` - Reusable UI components with Storybook stories
  - `_lib/` - Utility functions and API clients
  - `_config/` - Environment and configuration management
  - `[id]/` - Dynamic blog post pages
- `__tests__/` - Test files matching the app structure
- `public/` - Static assets

### Data Flow

1. Blog posts are fetched from microCMS API via `blogClient` in `app/_lib/blog-client.ts`
2. The main page (`app/page.tsx`) fetches posts and passes them to `HomePage` component
3. Individual post pages use dynamic routing with `[id]` parameter
4. RSS feed is generated at `/rss` route using the `feed` library

### Environment Variables

Required environment variables (see `app/types/env.d.ts`):

- `CMS_API_KEY` - microCMS API key
- `NEXT_PUBLIC_VERCEL_URL` - Site URL for metadata and RSS generation
- `NODE_ENV` - Environment (development/production/test)

### Testing Strategy

- Component tests use React Testing Library with jsdom
- Storybook stories serve as component documentation and visual testing
- Test setup in `__tests__/setup.ts` configures testing environment
- Coverage includes all `app/` files except Storybook stories

### Code Quality

- oxlint for fast JavaScript/TypeScript linting
- Prettier for code formatting
- Stylelint for CSS linting
- Pre-commit hooks via husky and lint-staged with automatic fixes
