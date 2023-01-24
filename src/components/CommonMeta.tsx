import Head from 'next/head';
import { siteUrl } from '../lib/site-url';

export const CommonMeta = () => {
  return (
    <Head>
      <meta property="og:url" content={`${siteUrl}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Hakshu's Portfolio" />
      <meta
        property="og:description"
        content="Webエンジニアhakshuのポートフォリオ"
      />
      <meta property="og:image" content={`${siteUrl}/api/og`} />
    </Head>
  );
};
