import { Post } from '../_lib/blog-client';
import { BlogPostItem } from './BlogPostItem';

type Props = { posts: Post[] };

export const BlogPostList = ({ posts }: Props) => {
  return (
    <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-10 gap-x-6">
      {posts.map((post) => (
        <li key={post.id}>
          <BlogPostItem post={post} />
        </li>
      ))}
    </ul>
  );
};
