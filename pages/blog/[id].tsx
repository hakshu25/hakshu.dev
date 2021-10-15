import { Container } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { HeaderBar } from '../../components/header-bar';
import { blogClient, Post } from '../../lib/blog-client';
import { formatUtcDateTimeToJst } from '../../lib/date-util';
import styles from '../../styles/Blog.module.scss';
import Custom404 from '../404';

type Props = { post: Post };

const BlogId: NextPage<Props> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.id) {
    return <Custom404 />;
  }

  return (
    <>
      <HeaderBar />
      <Container maxWidth="xl">
        <main className={styles.main}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles['published-at']}>
            {formatUtcDateTimeToJst(post.publishedAt)}
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

const revalidate = 60;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  try {
    const post = await blogClient.get({ endpoint: 'posts', contentId: id });

    return {
      props: {
        post,
      },
      revalidate,
    };
  } catch (e) {
    console.error(e);
    return {
      props: {},
      revalidate,
    };
  }
};

export default BlogId;
