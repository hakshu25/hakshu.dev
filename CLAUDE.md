# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm test` - Run tests with Vitest
- `pnpm test:coverage` - Run tests with coverage report
- `pnpm test -- specific-test-file` - Run specific test file
- `pnpm lint` - Run oxlint (faster alternative to ESLint)
- `pnpm prettier` - Check code formatting
- `pnpm prettier:fix` - Fix code formatting
- `pnpm stylelint` - Check CSS/styling with Tailwind CSS support
- `pnpm stylelint:fix` - Fix CSS/styling issues
- `pnpm storybook` - Run Storybook development server on port 6006
- `pnpm build-storybook` - Build Storybook for production
- `pnpm analyze` - Analyze bundle size with interactive visualization
- `pnpm analyze:server` - Analyze server-side bundle only
- `pnpm analyze:browser` - Analyze client-side bundle only

This project strictly uses pnpm as the package manager (enforced via preinstall script).

## Architecture

This is a Next.js 15 blog application with the following structure:

- **Framework**: Next.js 15 with App Router and React 19
- **Content Management**: microCMS as headless CMS with typed API client
- **Styling**: Tailwind CSS 4.x with custom theme configuration and PostCSS
- **Testing**: Vitest with jsdom environment and React Testing Library
- **Component Development**: Storybook for component isolation and documentation
- **Type Safety**: TypeScript with strict configuration
- **Performance**: Incremental Static Regeneration (ISR) with 60-second revalidation
- **Quality**: oxlint + Prettier + Stylelint with pre-commit hooks (Husky)

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
3. Individual post pages use dynamic routing with `[id]` parameter and ISR caching
4. RSS feed is generated at `/rss` route using the `feed` library
5. All content is cached with 60-second revalidation for optimal performance

### Key Technical Details

- **Tailwind CSS 4.x**: Uses `@theme` directive for custom configuration in CSS files
- **oxlint**: Replaces ESLint for faster linting with TypeScript, React, and Next.js plugins
- **ISR Strategy**: Pages revalidate every 60 seconds, with 1-year client-side cache
- **Component Architecture**: Storybook stories co-located with components for documentation
- **Pre-commit Hooks**: Automatic linting and formatting via Husky and lint-staged

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

- **oxlint**: Fast JavaScript/TypeScript linting with import, React, and Next.js plugins
- **Prettier**: Code formatting with single quotes and standard configuration
- **Stylelint**: CSS linting with Tailwind CSS compatibility
- **Pre-commit Hooks**: Husky + lint-staged for automatic linting and formatting
- **Dependency Management**: Renovate bot for automated dependency updates
- **Bundle Analysis**: @next/bundle-analyzer for performance monitoring and optimization

### Development Workflow

1. **Local Development**: Use `pnpm dev` with Turbopack for fast hot reloading
2. **Component Development**: Use Storybook (`pnpm storybook`) for isolated component development
3. **Testing**: Run `pnpm test` or `pnpm test:coverage` for comprehensive testing
4. **Quality Checks**: Pre-commit hooks automatically run linting and formatting
5. **Performance Analysis**: Use `pnpm analyze` to monitor bundle size and optimize
6. **Build Verification**: Always run `pnpm build` before deployment to catch issues

### Bundle Analysis

Use `@next/bundle-analyzer` to monitor and optimize application performance:

```bash
pnpm analyze              # Full bundle analysis
pnpm analyze:browser      # Client-side only
pnpm analyze:server       # Server-side only
```

Key metrics to monitor:

- **First Load JS**: Should stay under 110KB
- **Page-specific bundles**: Additional JS should be minimal
- **Shared chunks**: Monitor for unnecessary duplication
