import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Post, blogClient } from '../_lib/blog-client';
import PostPage from './post-page';

interface Params {
  id: string;
}

interface Props {
  params: Params;
}

const revalidateSeconds = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
  const { contents }: { contents: Post[] } = await blogClient.get({
    customRequestInit: {
      next: {
        revalidate: revalidateSeconds,
      },
    },
    endpoint: 'posts',
  });

  const paths = contents.map((content) => `/${content.id}`);
  return paths;
}

async function getPost(params: Params): Promise<Post> {
  try {
    const id = params.id;
    const post = await blogClient.get<Post>({
      customRequestInit: {
        next: {
          revalidate: revalidateSeconds,
        },
      },
      endpoint: 'posts',
      contentId: id,
    });
    return post;
  } catch (error) {
    notFound();
  }
}

export default async function Page({ params }: Props) {
  const post = await getPost(params);
  return <PostPage post={post} />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params);
  const title = post.title;
  const description = post.body
    .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
    .slice(0, 100);
  const imageUrl = post.image.url;

  return {
    title,
    openGraph: {
      type: 'article',
      url: `/${post.id}`,
      title,
      description,
      images: [
        {
          url: imageUrl,
        },
      ],
    },
  };
}
