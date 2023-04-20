import './globals.css';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { siteUrl } from '../src/lib/site-info';

export const metadata: Metadata = {
  title: "Hakshu's Blog",
  description: 'Webエンジニアhakshuのブログ',
  viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
  icons: {
    icon: '/img/icon.webp',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: "Hakshu's Blog",
    description: 'Webエンジニアhakshuのブログ',
    siteName: "Hakshu's Blog",
    images: [{ url: `${siteUrl}/api/og` }],
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
      <body>{children}</body>
    </html>
  );
}
