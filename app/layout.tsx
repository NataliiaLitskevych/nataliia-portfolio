import type { Metadata } from 'next';
import { IBM_Plex_Mono, Sora } from 'next/font/google';
import './globals.css';

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Nataliia Litskevych | Frontend Developer',
  description:
    'Portfolio website for Nataliia Litskevych, a Frontend Developer focused on React, responsive development, design-to-code execution, and polished user interfaces.',
  openGraph: {
    title: 'Nataliia Litskevych | Frontend Developer',
    description:
      'Frontend and React portfolio featuring responsive UI work, practical projects, and recruiter-friendly presentation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nataliia Litskevych | Frontend Developer',
    description:
      'Frontend and React portfolio featuring responsive UI work and polished project presentation.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${plexMono.variable}`}>{children}</body>
    </html>
  );
}
