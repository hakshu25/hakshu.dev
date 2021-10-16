import { List, Divider } from '@mui/material';
import { Post } from '../lib/blog-client';
import { BlogPostLink } from './blog-post-link';

type Props = { posts: Post[] };

export const BlogPostList = ({ posts }: Props) => {
  return (
    <List>
      {posts.map((post) => (
        <li key={post.id}>
          <BlogPostLink post={post} />
          <Divider />
        </li>
      ))}
    </List>
  );
};
