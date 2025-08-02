'use client';

import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/atom-one-dark.css';
import hlbash from 'highlight.js/lib/languages/bash';
import hlcss from 'highlight.js/lib/languages/css';
import hljavascript from 'highlight.js/lib/languages/javascript';
import hltypescript from 'highlight.js/lib/languages/typescript';
import hlhtml from 'highlight.js/lib/languages/xml';
import Image from 'next/image';
import { useEffect } from 'react';
import { BlogHeader } from '../_components/BlogHeader';
import { FooterInfo } from '../_components/FooterInfo';
import { SeparateLine } from '../_components/SeparateLine';
import { Post } from '../_lib/blog-client';
import { formatUtcDateTimeToJstDate } from '../_lib/date-util';

interface Props {
  post: Post;
}

export default function PostPage({ post }: Props) {
  useEffect(() => {
    hljs.registerLanguage('bash', hlbash);
    hljs.registerLanguage('js', hljavascript);
    hljs.registerLanguage('ts', hltypescript);
    hljs.registerLanguage('html', hlhtml);
    hljs.registerLanguage('css', hlcss);
    hljs.highlightAll();
  }, [post.id, post.body]);

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
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSorjUdEUraGpNH1xvyiWBhWVMUABgMbBX5CRfnzpFGk+S3MnTzepKE+oWHr/aVa9LzR0GK5wDfUMFLBqgkBfUfAHKHJE7/2Fj7VQG4u0kbkPjP8JpN5w+wBF7fM91AZBtFINZ4wLlXNlwWfEwgvfD1qe9w5h5v4n+T/ABWVJLfF4YeQf8KN2dYR5nfgAGzOGY="
            ></Image>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: `${post.body}`,
            }}
            className="post"
          />
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
