import type { Meta, StoryObj } from '@storybook/react';
import { HeaderBar } from './HeaderBar';

const meta: Meta<typeof HeaderBar> = {
  title: 'Example/HeaderBar',
  component: HeaderBar,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderBar>;

export const Blog: Story = {
  args: {
    type: 'blog',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
  },
};
