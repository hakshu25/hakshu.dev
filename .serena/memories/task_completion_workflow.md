# Task Completion Workflow

## Required Commands After Task Completion

1. **Linting**: `pnpm lint`
   - Run oxlint with TypeScript, React, Next.js, and import plugins
   - Fix any linting errors before committing

2. **Formatting**: `pnpm prettier:fix`
   - Ensure consistent code formatting
   - Single quotes enforced

3. **CSS Linting**: `pnpm stylelint:fix` (if CSS changes were made)
   - Fix any CSS/styling issues

4. **Testing**: `pnpm test`
   - Run Vitest tests to ensure no regressions
   - Ensure all tests pass before committing

5. **Build Verification**: `pnpm build`
   - Verify that the application builds successfully
   - Catch any production build issues

## Pre-commit Hooks (Automatic)

The following commands run automatically via Husky and lint-staged:

- oxlint for TypeScript/React files
- stylelint for CSS files
- prettier for all files

## Optional Performance Checks

- `pnpm analyze` - Check bundle size impact of changes
- `pnpm test:coverage` - Verify test coverage

## Git Workflow

1. Make changes
2. Run the required commands above
3. Stage and commit changes
4. Create PR if needed
