import { blogClient } from '../src/lib/blog-client';
import HomePage from './home-page';

export const revalidate = 60;

async function getPosts() {
  const { contents } = await blogClient.get({ endpoint: 'posts' });
  return contents;
}

export default async function Page() {
  const posts = await getPosts();
  return <HomePage posts={posts} />;
}
