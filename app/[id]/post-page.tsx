'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Suspense } from 'react';
import { BlogHeader } from '../_components/BlogHeader';
import { FooterInfo } from '../_components/FooterInfo';
import { SeparateLine } from '../_components/SeparateLine';
import { Post } from '../_lib/blog-client';
import { formatUtcDateTimeToJstDate } from '../_lib/date-util';

// Dynamic import for syntax highlighting - loaded only when needed
const SyntaxHighlighter = dynamic(
  () => import('../_components/SyntaxHighlighter'),
  {
    ssr: false,
    loading: () => <div className="animate-pulse bg-gray-200 h-4 rounded" />,
  },
);

interface Props {
  post: Post;
}

export default function PostPage({ post }: Props) {
  return (
    <>
      <BlogHeader />
      <main className="my-8 mx-10">
        <article>
          <h1 className="text-dark text-6xl font-bold mb-4">{post.title}</h1>
          <p className="text-right text-dark mb-4">
            {formatUtcDateTimeToJstDate(post.publishedAt)}
          </p>
          <div className="w-1/2 h-80 relative text-center mb-8 mx-auto">
            <Image
              src={`${post.image.url}?fm=webp&fit=scale&w=800&h=600`}
              alt={
                post.title
                  ? `${post.title}の記事画像`
                  : 'ブログ記事のメイン画像'
              }
              className="rounded-md object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSorjUdEUraGpNH1xvyiWBhWVMUABgMbBX5CRfnzpFGk+S3MnTzepKE+oWHr/aVa9LzR0GK5wDfUMFLBqgkBfUfAHKHJE7/2Fj7VQG4u0kbkPjP8JpN5w+wBF7fM91AZBtFINZ4wLlXNlwWfEwgvfD1qe9w5h5v4n+T/ABWVJLfF4YeQf8KN2dYR5nfgAGzOGY="
            />
          </div>
          <Suspense
            fallback={
              <div className="animate-pulse bg-gray-200 h-32 rounded" />
            }
          >
            <SyntaxHighlighter content={post.body} />
          </Suspense>
        </article>
        <div className="mt-4">
          <SeparateLine />
        </div>
      </main>
      <footer className="flex justify-center">
        <FooterInfo />
      </footer>
    </>
  );
}
