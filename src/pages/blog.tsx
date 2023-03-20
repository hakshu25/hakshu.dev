import { GetStaticProps, NextPage } from 'next';
import { BlogHeader } from '../components/BlogHeader';
import { BlogPostList } from '../components/BlogPostList';
import { FooterInfo } from '../components/FooterInfo';
import { Ogp } from '../components/Ogp';
import { SeparateLine } from '../components/SeparateLine';
import { blogClient, Post } from '../lib/blog-client';
import { revalidateSeconds } from '../lib/isr-settings';

type Props = { posts: Post[] };

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Ogp pageType="blog" />
      <BlogHeader />
      <main className="mt-10 mb-4 mx-8">
        <BlogPostList posts={posts} />
        <div className="mt-4">
          <SeparateLine />
        </div>
      </main>
      <footer className="flex justify-center">
        <FooterInfo />
      </footer>
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
