import { Container } from '@mui/material';
import hljs from 'highlight.js';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { HeaderBar, headerTitles } from '../../components/HeaderBar';
import { blogClient, Post } from '../../lib/blog-client';
import { formatUtcDateTimeToJstDate } from '../../lib/date-util';
import { revalidateSeconds } from '../../lib/isr-settings';
import styles from '../../styles/Blog.module.scss';
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

  return (
    <>
      <HeaderBar headerTitle={headerTitles.blog} />
      <Container maxWidth="xl" className="mt-4">
        <main className={styles.main}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles['published-at']}>
            {formatUtcDateTimeToJstDate(post.publishedAt)}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: `${post.body}`,
            }}
            className={styles.post}
          />
        </main>
      </Container>
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
