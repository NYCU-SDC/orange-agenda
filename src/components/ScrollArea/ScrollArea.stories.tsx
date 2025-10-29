import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollArea } from './ScrollArea';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => (
    <ScrollArea
      style={{ height: '200px', width: '300px', border: '1px solid #e5e5e5', borderRadius: '8px' }}
    >
      <div style={{ padding: '16px' }}>
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} style={{ margin: '8px 0' }}>
            This is line {i + 1} of scrollable content
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
};
