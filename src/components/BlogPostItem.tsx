import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../lib/blog-client';
import { formatUtcDateTimeToJstDate } from '../lib/date-util';

type Props = {
  post: Post;
};

export const BlogPostItem = ({ post }: Props) => {
  const imageSize = {
    width: 370,
    height: 224,
  };

  return (
    <Link href={`/blog/${post.id}`} passHref={true} prefetch={false}>
      <div className="hover:cursor-pointer">
        <Image
          src={`${post.image.url}?fit=scale&w=${imageSize.width}&h=${imageSize.height}`}
          alt="Picture of article"
          width={imageSize.width}
          height={imageSize.height}
          className="rounded-md"
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
