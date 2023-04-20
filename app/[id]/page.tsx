import { Metadata } from 'next';
import { Post, blogClient } from '../_lib/blog-client';
import PostPage from './post-page';

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const { contents }: { contents: Post[] } = await blogClient.get({
    endpoint: 'posts',
  });

  const paths = contents.map((content) => `/${content.id}`);
  return paths;
}

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

async function getPost(params: Params) {
  const id = params.id;
  const post = await blogClient.get({ endpoint: 'posts', contentId: id });
  return post;
}

export async function generateMetaData({ params }: Props): Promise<Metadata> {
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

export default async function Page({ params }: Props) {
  const post = await getPost(params);
  return <PostPage post={post} />;
}
