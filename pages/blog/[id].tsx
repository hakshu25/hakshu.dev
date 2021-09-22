import { Container } from '@material-ui/core';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { HeaderBar } from '../../components/header-bar';
import { blogClient, Post } from '../../lib/blog-client';
import { formatDateTime } from '../../lib/date-util';
import styles from '../../styles/Blog.module.scss';

type Props = { post: Post };

const BlogId: NextPage<Props> = ({ post }) => {
  return (
    <>
      <HeaderBar />
      <Container maxWidth="xl">
        <main className={styles.main}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles['published-at']}>
            {formatDateTime(post.publishedAt)}
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
  const { contents }: { contents: Post[] } = await blogClient.get({
    endpoint: 'posts',
  });

  const paths = contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const post = await blogClient.get({ endpoint: 'posts', contentId: id });

  return {
    props: {
      post,
    },
  };
};

export default BlogId;
