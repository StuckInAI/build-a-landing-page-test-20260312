# MyLandingPage

A modern, fully responsive landing page built with Next.js 14, TypeScript, TypeORM, SQLite, and Tailwind CSS.

## Features

- 🚀 **Next.js 14** with App Router
- 💎 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for responsive styling
- 🗄️ **TypeORM + SQLite** for persistent email subscriptions
- 📱 **Fully responsive** design (mobile, tablet, desktop)
- 🔒 **Form validation** (client-side and server-side)
- 🐳 **Docker ready** with multi-stage build

## Sections

- **Navbar** – Responsive navigation with scroll effects
- **Hero** – Eye-catching hero with CTA buttons
- **Features** – 6 feature cards with icons
- **Testimonials** – Customer reviews with star ratings and stats
- **Call to Action** – Email subscription form with API integration
- **Footer** – Links, social media, and copyright

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd my-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm i
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Docker

### Using Docker Compose (Recommended)

```bash
docker-compose up -d
```

The app will be available at [http://localhost:3000](http://localhost:3000).

The SQLite database is persisted in a named Docker volume (`sqlite_data`).

### Using Docker Directly

```bash
# Build the image
docker build -t my-landing-page .

# Run the container
docker run -p 3000:3000 -v $(pwd)/data:/app/data my-landing-page
```

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `DATABASE_PATH` | `./data/database.sqlite` | Path to the SQLite database file |
| `NEXT_PUBLIC_SITE_NAME` | `MyLandingPage` | Site name displayed in the UI |

## API Endpoints

### `POST /api/subscribers`

Subscribe an email address.

**Request Body:**
```json
{ "email": "user@example.com" }
```

**Success Response (201):**
```json
{
  "message": "Successfully subscribed! Welcome aboard.",
  "subscriber": {
    "id": 1,
    "email": "user@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Responses:**
- `400` – Validation error (missing/invalid email)
- `409` – Email already subscribed
- `500` – Internal server error

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles
│   │   └── api/
│   │       └── subscribers/
│   │           └── route.ts     # Subscription API
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CallToAction.tsx
│   │   └── Footer.tsx
│   ├── entities/
│   │   └── Subscriber.ts        # TypeORM entity
│   └── lib/
│       └── database.ts          # Database connection
├── public/
├── .env
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## Deployment on Coolify

1. Create a new service in Coolify
2. Point it to this repository
3. Set build pack to **Dockerfile** or **Docker Compose**
4. Add the environment variables
5. Deploy!

The `docker-compose.yml` is pre-configured for Coolify with proper volume mounts for SQLite persistence.
