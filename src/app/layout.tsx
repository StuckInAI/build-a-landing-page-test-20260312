import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE || 'My Landing Page',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Welcome to our amazing product',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
