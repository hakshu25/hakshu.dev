import { GetServerSidePropsContext } from 'next';
import { blogClient } from '../lib/blog-client';
import { generateRssXml } from '../lib/rss';
import { siteUrl } from '../lib/site-info';

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const { contents } = await blogClient.get({ endpoint: 'posts' });
  const xml = generateRssXml(contents, siteUrl);

  res.statusCode = 200;
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // 24 時間キャッシュ
  res.setHeader('Content-Type', 'text/xml');
  res.end(xml);

  return {
    props: {},
  };
};

const Page = () => null;
export default Page;
