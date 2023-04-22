import type { Meta, StoryObj } from '@storybook/react';
import { FooterInfo } from './FooterInfo';

const meta: Meta<typeof FooterInfo> = {
  title: 'Example/FooterInfo',
  component: FooterInfo,
};

export default meta;
type Story = StoryObj<typeof FooterInfo>;

export const Default: Story = {};
