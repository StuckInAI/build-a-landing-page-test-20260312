import type { Metadata } from 'next';
import './globals.css';

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'MyLandingPage';

export const metadata: Metadata = {
  title: `${siteName} - Transform Your Business`,
  description:
    'The all-in-one platform that helps you build, launch, and scale your business faster than ever before.',
  keywords: 'landing page, saas, business, platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
