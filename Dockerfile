FROM node:20-alpine AS base

# Install dependencies for better-sqlite3
RUN apk add --no-cache python3 make g++ sqlite

WORKDIR /app

# Copy package files
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm i

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production image
FROM node:20-alpine AS runner

RUN apk add --no-cache sqlite

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Create data directory
RUN mkdir -p /app/data

# Copy standalone output
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static
COPY --from=base /app/public ./public

# Copy native modules needed for better-sqlite3
COPY --from=base /app/node_modules/better-sqlite3 ./node_modules/better-sqlite3
COPY --from=base /app/node_modules/bindings ./node_modules/bindings
COPY --from=base /app/node_modules/file-uri-to-path ./node_modules/file-uri-to-path

EXPOSE 3000

CMD ["node", "server.js"]
