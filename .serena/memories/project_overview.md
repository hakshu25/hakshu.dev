# Project Overview

## Purpose

Personal blog site for "hakshu" - a Next.js-based blog application using microCMS as a headless CMS.

## Tech Stack

- **Framework**: Next.js 15 with App Router and React 19
- **Styling**: Tailwind CSS 4.x with PostCSS
- **CMS**: microCMS for content management
- **TypeScript**: Strict configuration with ES2022 target
- **Testing**: Vitest with jsdom environment and React Testing Library
- **Component Development**: Storybook for component isolation
- **Package Manager**: pnpm (enforced via preinstall script)

## Key Features

- Server-side rendering with ISR (Incremental Static Regeneration)
- RSS feed generation
- Syntax highlighting for code blocks
- Responsive design with Tailwind CSS
- Type-safe API integration with microCMS
- Component-driven development with Storybook
- Bundle analysis with @next/bundle-analyzer

## Architecture

- App Router structure with TypeScript
- Component-based architecture with reusable UI components
- Content fetching from microCMS API
- Static generation with 60-second revalidation
- SEO optimized with metadata generation
