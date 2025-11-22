#!/bin/bash

set -e

echo "🚀 Setting up MS-Promtathon in GitHub Codespaces..."

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Copy environment file
if [ ! -f .env.local ]; then
  echo "��� Creating .env.local..."
  cp .env.example .env.local
fi

# Type check
echo "✓ TypeScript check..."
pnpm typecheck

# Run tests
echo "✓ Running tests..."
pnpm test

# Build
echo "🔨 Building for development..."
pnpm build

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start the development server, run:"
echo "  pnpm dev"
echo ""
echo "Your app will be available at: http://localhost:8080"
