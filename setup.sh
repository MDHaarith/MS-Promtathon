#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}MS-Promtathon Setup Script${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Check if Node.js is installed
echo -e "${YELLOW}Checking Node.js installation...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}✗ Node.js is not installed${NC}"
    echo "Please install Node.js 20.x or later from https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v)
echo -e "${GREEN}✓ Node.js ${NODE_VERSION} found${NC}"

# Check if npm is installed
echo -e "${YELLOW}Checking npm installation...${NC}"
if ! command -v npm &> /dev/null; then
    echo -e "${RED}✗ npm is not installed${NC}"
    exit 1
fi

echo -e "${GREEN}✓ npm found${NC}"

# Install pnpm globally
echo ""
echo -e "${YELLOW}Installing pnpm 10.14.0...${NC}"
npm install -g pnpm@10.14.0

PNPM_VERSION=$(pnpm -v)
echo -e "${GREEN}✓ pnpm ${PNPM_VERSION} installed${NC}"

# Install dependencies
echo ""
echo -e "${YELLOW}Installing project dependencies...${NC}"
pnpm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Dependencies installed successfully${NC}"
else
    echo -e "${RED}✗ Failed to install dependencies${NC}"
    exit 1
fi

# Create .env.local if it doesn't exist
echo ""
echo -e "${YELLOW}Setting up environment variables...${NC}"
if [ ! -f .env.local ]; then
    cp .env.example .env.local
    echo -e "${GREEN}✓ Created .env.local from .env.example${NC}"
    echo -e "${YELLOW}  Edit .env.local to customize your configuration${NC}"
else
    echo -e "${GREEN}✓ .env.local already exists${NC}"
fi

# Run type check
echo ""
echo -e "${YELLOW}Running TypeScript type check...${NC}"
pnpm typecheck

if [ $? -ne 0 ]; then
    echo -e "${RED}✗ TypeScript type check failed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Type check passed${NC}"

# Run tests
echo ""
echo -e "${YELLOW}Running tests...${NC}"
pnpm test

if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Tests failed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ All tests passed${NC}"

# Summary
echo ""
echo -e "${BLUE}========================================${NC}"
echo -e "${GREEN}Setup Complete! 🎉${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Edit .env.local with your configuration"
echo "2. Start development: ${BLUE}pnpm dev${NC}"
echo "3. Open http://localhost:8080 in your browser"
echo ""
echo -e "${YELLOW}Available commands:${NC}"
echo "  ${BLUE}pnpm dev${NC}        - Start development server"
echo "  ${BLUE}pnpm build${NC}      - Build for production"
echo "  ${BLUE}pnpm start${NC}      - Run production server"
echo "  ${BLUE}pnpm test${NC}       - Run tests"
echo "  ${BLUE}pnpm typecheck${NC}  - Check TypeScript types"
echo ""
echo -e "${YELLOW}Documentation:${NC}"
echo "  README.md - Project overview"
echo "  DEPLOYMENT_GUIDE.md - Deployment instructions"
echo "  .github/CONTRIBUTING.md - Contributing guidelines"
echo ""
echo -e "${BLUE}Happy coding! 🚀${NC}"
