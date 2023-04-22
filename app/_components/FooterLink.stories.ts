import type { Meta, StoryObj } from '@storybook/react';
import { FooterLink } from './FooterLink';

const meta: Meta<typeof FooterLink> = {
  title: 'Example/FooterLink',
  component: FooterLink,
};

export default meta;
type Story = StoryObj<typeof FooterLink>;

export const Default: Story = {};
