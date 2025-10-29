import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './Separator';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <div>Above the separator</div>
      <Separator style={{ margin: '16px 0' }} />
      <div>Below the separator</div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '50px', alignItems: 'center', gap: '16px' }}>
      <div>Left side</div>
      <Separator orientation="vertical" />
      <div>Right side</div>
    </div>
  ),
};
