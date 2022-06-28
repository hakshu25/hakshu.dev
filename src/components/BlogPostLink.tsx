import { ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';
import { Post } from '../lib/blog-client';
import { formatUtcDateTimeToJstDate } from '../lib/date-util';

type Props = {
  post: Post;
};

export const BlogPostLink = ({ post }: Props) => {
  return (
    <Link href={`/blog/${post.id}`} passHref={true} prefetch={false}>
      <ListItem button component="a">
        <ListItemText
          primary={post.title}
          secondary={formatUtcDateTimeToJstDate(post.publishedAt)}
        />
      </ListItem>
    </Link>
  );
};
