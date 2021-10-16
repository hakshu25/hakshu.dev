import { List, ListItem, ListItemText, Divider } from '@mui/material';
import Link from 'next/link';
import { Post } from '../lib/blog-client';
import { formatUtcDateTimeToJst } from '../lib/date-util';

type Props = { posts: Post[] };

export const BlogPostList = ({ posts }: Props) => {
  return (
    <List>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`} passHref={true} prefetch={false}>
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
  );
};
