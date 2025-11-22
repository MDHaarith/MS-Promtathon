FROM node:22-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm@10.14.0

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm@10.14.0

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --production

COPY --from=builder /app/dist ./dist

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "dist/server/node-build.mjs"]
