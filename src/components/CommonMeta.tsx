import { NextPage } from 'next';
import Head from 'next/head';
import { siteUrl } from '../lib/site-url';

type PageType = 'website' | 'blog' | 'article';
interface Props {
  pageType: PageType;
  title?: string;
  description?: string;
  imageUrl?: string;
}

const defaultTitle = "Hakshu's Portfolio";
const defaultDescription = 'Webエンジニアhakshuのポートフォリオ';
const defaultImageUrl = `${siteUrl}/api/og`;

export const CommonMeta: NextPage<Props> = ({
  pageType,
  title,
  description,
  imageUrl,
}) => {
  return (
    <Head>
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={title ?? defaultTitle} />
      <meta
        property="og:description"
        content={description ?? defaultDescription}
      />
      <meta property="og:image" content={imageUrl ?? defaultImageUrl} />
    </Head>
  );
};
