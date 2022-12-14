import { GetStaticProps, NextPage } from 'next';
import { BlogPostList } from '../components/BlogPostList';
import { CommonMeta } from '../components/CommonMeta';
import { FooterInfo } from '../components/FooterInfo';
import { HeaderBar, headerTitles } from '../components/HeaderBar';
import { SeparateLine } from '../components/SeparateLine';
import { blogClient, Post } from '../lib/blog-client';
import { revalidateSeconds } from '../lib/isr-settings';

type Props = { posts: Post[] };

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <CommonMeta />
      <HeaderBar headerTitle={headerTitles.blog} />
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
