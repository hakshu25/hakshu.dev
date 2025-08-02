# Codebase Structure

## Root Directory

- `package.json` - Project dependencies and scripts
- `next.config.ts` - Next.js configuration with TypeScript
- `tsconfig.json` - TypeScript configuration
- `vitest.config.mts` - Vitest testing configuration
- `postcss.config.js` - PostCSS configuration for Tailwind CSS
- `CLAUDE.md` - AI assistant instructions

## App Directory (Next.js App Router)

- `app/layout.tsx` - Root layout with global styles
- `app/page.tsx` - Homepage component
- `app/[id]/` - Dynamic blog post pages
- `app/rss/` - RSS feed generation route

### Components (`app/_components/`)

- Reusable UI components with co-located Storybook stories
- Examples: `BlogHeader`, `BlogPostList`, `FooterInfo`, `IconLink`
- SVG icons in `svgs/` subdirectory

### Libraries (`app/_lib/`)

- `blog-client.ts` - microCMS API client
- `date-util.ts` - Date formatting utilities
- `rss.ts` - RSS feed generation
- `site-info.ts` - Site metadata

### Configuration (`app/_config/`)

- Environment configuration and constants

### Types (`app/types/`)

- TypeScript type definitions including environment variables

## Testing (`__tests__/`)

- Vitest test files matching app structure
- `setup.ts` - Test environment configuration

## Development Tools

- `.storybook/` - Storybook configuration
- `.husky/` - Git hooks configuration
- `oxlintrc.json` - oxlint linting rules
- `.prettierrc.json` - Prettier formatting rules
- `.stylelintrc.json` - Stylelint CSS rules
