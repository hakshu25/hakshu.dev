import { GetStaticProps, NextPage } from 'next';
import { BlogPostList } from '../components/BlogPostList';
import { HeaderBar } from '../components/HeaderBar';
import { blogClient, Post } from '../lib/blog-client';
import { revalidateSeconds } from '../lib/isr-settings';

type Props = { posts: Post[] };

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <HeaderBar />
      <main>
        <BlogPostList posts={posts} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { contents } = await blogClient.get({ endpoint: 'posts' });

  return {
    props: {
      posts: contents,
    },
    revalidate: revalidateSeconds,
  };
};

export default Blog;
