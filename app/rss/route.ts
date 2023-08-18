import { SITE_URL } from '../_config';
import { Contents, blogClient } from '../_lib/blog-client';
import { generateRssXml } from '../_lib/rss';

export async function GET() {
  const { contents } = await blogClient.get<Contents>({ endpoint: 'posts' });
  const xml = generateRssXml(contents, SITE_URL);
  return new Response(xml, {
    status: 200,
    headers: {
      'Cache-Control': 's-maxage=86400, stale-while-revalidate', // 24 時間キャッシュ
      'Content-Type': 'text/xml',
    },
  });
}
