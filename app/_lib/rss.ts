import { Feed } from 'feed';
import { Post } from './blog-client';

export function generateRssXml(posts: Post[], siteUrl: string) {
  const feed = new Feed({
    title: 'タイトル',
    description: '説明',
    id: siteUrl,
    link: siteUrl,
    language: 'ja',
    favicon: `${siteUrl}/favicon.ico`,
    copyright: '© 2022 hakshu',
    author: {
      name: 'hakshu',
      link: siteUrl,
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${siteUrl}/${post.id}`,
      link: `${siteUrl}/${post.id}`,
      description: post.title,
      content: post.contents,
      date: new Date(post.publishedAt),
      image: post.image.url,
    });
  });

  return feed.rss2();
}
