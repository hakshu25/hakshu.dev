import { blogClient } from '../_lib/blog-client';
import { generateRssXml } from '../_lib/rss';
import { siteUrl } from '../_lib/site-info';

export async function GET() {
  const { contents } = await blogClient.get({ endpoint: 'posts' });
  const xml = generateRssXml(contents, siteUrl);
  return new Response(xml, {
    status: 200,
    headers: {
      'Cache-Control': 's-maxage=86400, stale-while-revalidate', // 24 時間キャッシュ
      'Content-Type': 'text/xml',
    },
  });
}
