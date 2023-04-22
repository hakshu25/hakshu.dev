import type { Meta, StoryObj } from '@storybook/react';
import { SeparateLine } from './SeparateLine';

const meta: Meta<typeof SeparateLine> = {
  title: 'Example/SeparateLine',
  component: SeparateLine,
};

export default meta;
type Story = StoryObj<typeof SeparateLine>;

export const Default: Story = {};
