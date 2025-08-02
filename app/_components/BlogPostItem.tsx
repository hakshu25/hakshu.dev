import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../_lib/blog-client';
import { formatUtcDateTimeToJstDate } from '../_lib/date-util';

interface Props {
  post: Post;
}

export const BlogPostItem = ({
  post,
  priority = false,
}: Props & { priority?: boolean }) => {
  const imageSize = {
    width: 370,
    height: 224,
  };

  return (
    <Link href={`/${post.id}`} prefetch={false}>
      <div className="hover:cursor-pointer">
        <Image
          src={`${post.image.url}?fit=scale&w=${imageSize.width}&h=${imageSize.height}&fm=webp`}
          alt={post.title ? `${post.title}の記事画像` : 'ブログ記事の画像'}
          width={imageSize.width}
          height={imageSize.height}
          className="rounded-md"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 370px"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSorjUdEUraGpNH1xvyiWBhWVMUABgMbBX5CRfnzpFGk+S3MnTzepKE+oWHr/aVa9LzR0GK5wDfUMFLBqgkBfUfAHKHJE7/2Fj7VQG4u0kbkPjP8JpN5w+wBF7fM91AZBtFINZ4wLlXNlwWfEwgvfD1qe9w5h5v4n+T/ABWVJLfF4YeQf8KN2dYR5nfgAGzOGY="
        ></Image>
        <div className="mt-2 mb-2 text-xl text-dark">
          {post.category.join(' ')}
        </div>
        <div className="mb-2 text-2xl text-dark font-bold">{post.title}</div>
        <div className="text-darkgray">
          {formatUtcDateTimeToJstDate(post.publishedAt)}
        </div>
      </div>
    </Link>
  );
};
