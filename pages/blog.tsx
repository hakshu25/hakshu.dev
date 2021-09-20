import { makeStyles } from '@material-ui/core';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { HeaderBar } from '../components/header-bar'
import { blogClient, Post } from '../lib/blog-client';

const useStyles = makeStyles(() => ({
}));

type Props = { posts: Post[] };

const Blog: NextPage<Props> = ({ posts }) => {
  const styles = useStyles();

  return (
    <>
      <HeaderBar />
      <main>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { contents } = await blogClient.get({ endpoint: 'posts' });

  return {
    props: {
      posts: contents,
    }
  }
}

export default Blog;
