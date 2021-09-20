import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { blogClient, Post } from '../../lib/blog-client';

type Props = { post: Post };

const BlogId: NextPage<Props> = ({ post }) => {
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${post.body}`,
        }}
      />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { contents }: { contents: Post[] } = await blogClient.get({ endpoint: "posts" });

  const paths = contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const post = await blogClient.get({ endpoint: "posts", contentId: id });

  return {
    props: {
      post,
    },
  };
};

export default BlogId;
