import { Post } from '../_lib/blog-client';
import { BlogPostItem } from './BlogPostItem';

interface Props {
  posts: Post[];
}

export const BlogPostList = ({ posts }: Props) => {
  return (
    <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-10 gap-x-6">
      {posts.map((post, index) => (
        <li key={post.id}>
          <BlogPostItem
            post={post}
            priority={index < 4} // 上位4記事の画像を優先読み込み
          />
        </li>
      ))}
    </ul>
  );
};
