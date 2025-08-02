import type { Meta, StoryObj } from '@storybook/react';
import { BlogPostList } from './BlogPostList';

const meta: Meta<typeof BlogPostList> = {
  title: 'Example/BlogPostList',
  component: BlogPostList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BlogPostList>;

const posts = [];
for (let i = 0; i < 10; i++) {
  posts.push({
    id: 'blog-post-id',
    title: 'ブログのタイトル',
    contents: 'ブログの本文',
    image: {
      url: 'https://placehold.jp/3d4070/ffffff/600x600.png?text=sample',
      width: 100,
      height: 100,
    },
    category: ['Tech', 'Memo'],
    publishedAt: '2021-01-01T00:00:00.000Z',
    revisedAt: '2021-01-01T00:00:00.000Z',
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-01T00:00:00.000Z',
  });
}

export const List: Story = {
  args: {
    posts,
  },
};
