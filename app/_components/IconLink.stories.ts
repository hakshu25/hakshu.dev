import type { Meta, StoryObj } from '@storybook/react';
import { IconLink } from './IconLink';

const meta: Meta<typeof IconLink> = {
  title: 'Example/IconLink',
  component: IconLink,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: 'select',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconLink>;

export const GitHub: Story = {
  args: {
    iconName: 'github',
  },
};

export const Twitter: Story = {
  args: {
    iconName: 'twitter',
  },
};
