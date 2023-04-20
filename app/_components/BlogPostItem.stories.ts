import type { Meta, StoryObj } from '@storybook/react';
import { BlogPostItem } from './BlogPostItem';

const meta: Meta<typeof BlogPostItem> = {
  title: 'Example/BlogPostItem',
  component: BlogPostItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BlogPostItem>;

export const Item: Story = {
  args: {
    post: {
      id: 'blog-post-id',
      title: 'ブログのタイトル',
      body: 'ブログの本文',
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
    },
  },
};
