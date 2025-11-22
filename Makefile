.PHONY: help install dev build start test type-check format clean lint setup docker-build docker-run

help:
	@echo "MS-Promtathon - Available Commands"
	@echo ""
	@echo "Setup & Installation:"
	@echo "  make setup          - Complete setup (install deps, env, tests)"
	@echo "  make install        - Install dependencies"
	@echo ""
	@echo "Development:"
	@echo "  make dev            - Start development server"
	@echo "  make build          - Build for production (client + server)"
	@echo "  make build-client   - Build only frontend"
	@echo "  make build-server   - Build only backend"
	@echo ""
	@echo "Validation:"
	@echo "  make test           - Run tests"
	@echo "  make type-check     - TypeScript type checking"
	@echo "  make lint           - Lint code"
	@echo "  make format         - Format code"
	@echo ""
	@echo "Production:"
	@echo "  make start          - Run production server"
	@echo "  make docker-build   - Build Docker image"
	@echo "  make docker-run     - Run Docker container"
	@echo ""
	@echo "Cleanup:"
	@echo "  make clean          - Remove build artifacts"
	@echo ""

setup:
	@if [ -f setup.sh ]; then chmod +x setup.sh && ./setup.sh; else echo "setup.sh not found"; fi

install:
	pnpm install

dev:
	pnpm dev

build: build-client build-server

build-client:
	pnpm build:client

build-server:
	pnpm build:server

start: build
	pnpm start

test:
	pnpm test

type-check:
	pnpm typecheck

lint: type-check

format:
	pnpm format.fix

clean:
	rm -rf dist/
	rm -rf node_modules/.vite
	rm -rf coverage/

docker-build:
	docker build -t ms-promtathon:latest .

docker-run: docker-build
	docker run -p 3000:3000 ms-promtathon:latest

.DEFAULT_GOAL := help
