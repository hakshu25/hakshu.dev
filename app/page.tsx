import { blogClient } from './_lib/blog-client';
import HomePage from './home-page';

async function getPosts() {
  const { contents } = await blogClient.get({
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
    endpoint: 'posts',
  });
  return contents;
}

export default async function Page() {
  const posts = await getPosts();
  return <HomePage posts={posts} />;
}
