# Landing Page

A modern, full-stack landing page built with Next.js 14, TypeScript, Tailwind CSS, TypeORM, and SQLite.

## Features

- 🚀 Next.js 14 App Router
- 💎 TypeScript
- 🎨 Tailwind CSS
- 🗄️ SQLite database via TypeORM
- 📧 Contact form with database persistence
- 🐳 Docker ready
- 📱 Fully responsive

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production with Docker

```bash
# Build and run with Docker Compose
docker-compose up --build
```

## Environment Variables

Copy `.env` and customize:

```env
DATABASE_PATH=./data/database.sqlite
NEXT_PUBLIC_SITE_TITLE=My Landing Page
NEXT_PUBLIC_SITE_DESCRIPTION=Welcome to our amazing product
```

## API Routes

### POST /api/contact

Submit a contact form message.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been received!",
  "id": 1
}
```

## Project Structure

```
src/
├── app/           # Next.js App Router
├── components/    # React components
├── entities/      # TypeORM entities
└── lib/           # Database utilities
```
