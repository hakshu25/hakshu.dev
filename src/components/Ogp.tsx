import { NextPage } from 'next';
import Head from 'next/head';
import { siteTitle } from '../lib/site-info';
import { siteUrl } from '../lib/site-info';

export type PageType = 'website' | 'blog' | 'article';
interface Props {
  pageType: PageType;
  title?: string;
  description?: string;
  imageUrl?: string;
}

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
        content={title ?? siteTitle}
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
