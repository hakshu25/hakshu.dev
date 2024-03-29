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
              src={post.image.url}
              alt="Picture of article"
              className="rounded-md"
              fill
              sizes="100%"
              priority
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
