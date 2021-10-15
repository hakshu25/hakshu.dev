import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { HeaderBar } from '../components/header-bar';
import { blogClient, Post } from '../lib/blog-client';
import { formatUtcDateTimeToJst } from '../lib/date-util';

type Props = { posts: Post[] };

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <HeaderBar />
      <main>
        <List>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`} passHref={true}>
                <ListItem button component="a">
                  <ListItemText
                    primary={post.title}
                    secondary={formatUtcDateTimeToJst(post.publishedAt)}
                  />
                </ListItem>
              </Link>
              <Divider />
            </li>
          ))}
        </List>
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
    revalidate: 60,
  };
};

export default Blog;
