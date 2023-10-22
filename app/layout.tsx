import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { SITE_URL } from './_config';

export const metadata: Metadata = {
  title: "Hakshu's Blog",
  description: 'Webエンジニアhakshuのブログ',
  metadataBase: new URL(SITE_URL),
  viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
  icons: {
    icon: '/img/icon.webp',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: "Hakshu's Blog",
    description: 'Webエンジニアhakshuのブログ',
    siteName: "Hakshu's Blog",
  },
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={roboto.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
