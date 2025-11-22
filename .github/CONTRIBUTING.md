# Contributing to MS-Promtathon

Thanks for your interest in contributing! Please follow these guidelines.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/ms-promtathon.git`
3. Add upstream: `git remote add upstream https://github.com/ORIGINAL-OWNER/ms-promtathon.git`
4. Create a branch: `git checkout -b feature/your-feature-name`

## Setup

```bash
# Install dependencies
pnpm install

# Copy environment template
cp .env.example .env.local

# Start development server
pnpm dev
```

## Development Workflow

1. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/my-feature
   ```

2. **Make your changes** and test locally:
   ```bash
   pnpm dev      # Development server
   pnpm test     # Run tests
   pnpm typecheck # Check types
   ```

3. **Format your code**:
   ```bash
   pnpm format.fix
   ```

4. **Commit with a clear message**:
   ```bash
   git commit -m "feat: add new feature"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/my-feature
   ```

6. **Create a Pull Request** on GitHub
   - Reference any related issues: `Fixes #123`
   - Describe your changes clearly

## Commit Message Format

Follow conventional commits:

```
type(scope): subject

body

footer
```

Types:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style (no logic change)
- `refactor:` Code refactor
- `perf:` Performance improvement
- `test:` Test additions/changes
- `chore:` Build/dependency changes

Examples:
```bash
git commit -m "feat(api): add user registration endpoint"
git commit -m "fix(ui): correct button styling on mobile"
git commit -m "docs: update deployment guide"
```

## Code Standards

- **TypeScript**: All code must be properly typed
- **Testing**: Add tests for new features
- **Formatting**: Run `pnpm format.fix`
- **Linting**: Types check passes: `pnpm typecheck`

## Testing

Before submitting:

```bash
# Run all tests
pnpm test

# Type check
pnpm typecheck

# Full build test
pnpm build

# Start locally
pnpm dev
```

## Pull Request Process

1. Update documentation if needed
2. Add tests for new functionality
3. Ensure all checks pass:
   - Tests pass: `pnpm test`
   - Types valid: `pnpm typecheck`
   - Builds successfully: `pnpm build`
4. Request review from maintainers
5. Address feedback
6. Merge when approved!

## File Structure

When adding features:

- **New page**: Add to `client/pages/`
- **New API endpoint**: Add to `server/routes/` and register in `server/index.ts`
- **New component**: Add to `client/components/`
- **Shared types**: Add to `shared/api.ts`
- **Tests**: Add `*.spec.ts` next to the file being tested

## Questions?

- Open an issue for bugs
- Open a discussion for questions
- Check existing issues before asking

## Code of Conduct

Be respectful, inclusive, and professional. We welcome contributions from everyone!

Happy coding! 🚀
