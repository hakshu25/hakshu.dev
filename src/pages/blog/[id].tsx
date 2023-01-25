import hljs from 'highlight.js';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { useEffect } from 'react';
import { CommonMeta } from '../../components/CommonMeta';
import { FooterInfo } from '../../components/FooterInfo';
import { HeaderBar, headerTitles } from '../../components/HeaderBar';
import { SeparateLine } from '../../components/SeparateLine';
import { blogClient, Post } from '../../lib/blog-client';
import { formatUtcDateTimeToJstDate } from '../../lib/date-util';
import { revalidateSeconds } from '../../lib/isr-settings';
import Custom404 from '../404';

type Props = { post: Post };

const BlogId: NextPage<Props> = ({ post }) => {
  useEffect(() => {
    hljs.configure({ languages: ['bash', 'js', 'ts', 'html', 'css', 'scss'] });
    hljs.highlightAll();
  });

  const router = useRouter();
  if (!router.isFallback && !post?.id) {
    return <Custom404 />;
  }

  const ogDescription = post.body
    .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
    .slice(0, 100);

  return (
    <>
      <CommonMeta
        pageType="article"
        title={post.title}
        description={ogDescription}
        imageUrl={post.image.url}
      />
      <HeaderBar headerTitle={headerTitles.blog} />
      <main className="my-8 mx-10">
        <article>
          <h1 className="text-dark text-6xl font-bold mb-4">{post.title}</h1>
          <p className="text-right text-dark mb-4">
            {formatUtcDateTimeToJstDate(post.publishedAt)}
          </p>
          <div className="w-1/2 h-80 relative text-center mb-8 mx-auto">
            <Image
              src={post.image.url}
              alt="Picture of article"
              className="rounded-md"
              layout="fill"
            ></Image>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: `${post.body}`,
            }}
            className="post"
          />
        </article>
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

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { contents }: { contents: Post[] } = await blogClient.get({
      endpoint: 'posts',
    });

    const paths = contents.map((content) => `/blog/${content.id}`);
    return { paths, fallback: 'blocking' };
  } catch (e) {
    console.error(e);
    return { paths: ['/404'], fallback: false };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  try {
    const post = await blogClient.get({ endpoint: 'posts', contentId: id });

    return {
      props: {
        post,
      },
      revalidate: revalidateSeconds,
    };
  } catch (e) {
    console.error(e);
    return {
      props: {},
      revalidate: revalidateSeconds,
    };
  }
};

export default BlogId;
