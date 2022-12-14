import Head from 'next/head';
import { siteUrl } from '../lib/site-url';

export const CommonMeta = () => {
  return (
    <Head>
      <meta property="og:image" content={`${siteUrl}/api/og`} />
    </Head>
  );
};
