#!/bin/bash

set -e

# Colors
BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}   MS-Promtathon Setup${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━���━━━━━━━━━━━━━━━${NC}"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}❌ Node.js is not installed${NC}"
    echo "Please install Node.js from https://nodejs.org/ (version 20.x or 22.x)"
    exit 1
fi
echo -e "${GREEN}✓${NC} Node.js $(node -v) found"

# Install pnpm
echo -e "${YELLOW}→${NC} Installing pnpm..."
npm install -g pnpm@10.14.0 > /dev/null 2>&1
echo -e "${GREEN}✓${NC} pnpm $(pnpm -v) ready"

# Install dependencies
echo -e "${YELLOW}→${NC} Installing project dependencies..."
pnpm install > /dev/null 2>&1
echo -e "${GREEN}✓${NC} Dependencies installed"

# Create .env.local
if [ ! -f .env.local ]; then
    echo -e "${YELLOW}→${NC} Creating .env.local..."
    cp .env.example .env.local
    echo -e "${GREEN}✓${NC} .env.local created"
fi

# Type check
echo -e "${YELLOW}→${NC} Checking TypeScript..."
pnpm typecheck > /dev/null 2>&1
echo -e "${GREEN}✓${NC} TypeScript OK"

# Tests
echo -e "${YELLOW}→${NC} Running tests..."
pnpm test > /dev/null 2>&1
echo -e "${GREEN}✓${NC} Tests passed"

# Build
echo -e "${YELLOW}→${NC} Building project..."
pnpm build > /dev/null 2>&1
echo -e "${GREEN}✓${NC} Build complete"

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✨ Setup Complete!${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "Next: Start the development server"
echo ""
echo -e "${YELLOW}Run this command:${NC}"
echo -e "  ${GREEN}pnpm dev${NC}"
echo ""
echo "Then visit: ${GREEN}http://localhost:8080${NC}"
echo ""
