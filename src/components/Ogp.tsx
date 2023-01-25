import { NextPage } from 'next';
import Head from 'next/head';
import { siteUrl } from '../lib/site-url';

export type PageType = 'website' | 'blog' | 'article';
interface Props {
  pageType: PageType;
  title?: string;
  description?: string;
  imageUrl?: string;
}

const defaultTitle = "Hakshu's Portfolio";
const defaultDescription = 'Webエンジニアhakshuのポートフォリオ';
const defaultImageUrl = `${siteUrl}/api/og`;

export const Ogp: NextPage<Props> = ({
  pageType,
  title,
  description,
  imageUrl,
}) => {
  return (
    <Head>
      <meta property="og:url" content={siteUrl} data-testid="og-url" />
      <meta property="og:type" content={pageType} data-testid="og-type" />
      <meta
        property="og:title"
        content={title ?? defaultTitle}
        data-testid="og-title"
      />
      <meta
        property="og:description"
        content={description ?? defaultDescription}
        data-testid="og-description"
      />
      <meta
        property="og:image"
        content={imageUrl ?? defaultImageUrl}
        data-testid="og-image"
      />
    </Head>
  );
};
