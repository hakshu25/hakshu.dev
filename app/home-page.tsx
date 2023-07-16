'use client';

import { Post } from '../app/_lib/blog-client';
import { BlogHeader } from './_components/BlogHeader';
import { BlogPostList } from './_components/BlogPostList';
import { FooterInfo } from './_components/FooterInfo';
import { FooterLink } from './_components/FooterLink';
import { SeparateLine } from './_components/SeparateLine';

interface Props {
  posts: Post[];
}

export default function HomePage({ posts }: Props) {
  return (
    <>
      <BlogHeader />
      <main className="mt-10 mb-4 mx-8">
        <BlogPostList posts={posts} />
        <div className="mt-4">
          <SeparateLine />
        </div>
      </main>
      <footer className="mydu-8 w-80 mx-auto">
        <FooterLink />
        <div className="mt-6 flex justify-center">
          <FooterInfo />
        </div>
      </footer>
    </>
  );
}
