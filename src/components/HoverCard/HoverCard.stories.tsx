import type { Meta, StoryObj } from '@storybook/react-vite';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './HoverCard';

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#ff6b35', textDecoration: 'underline' }}
        >
          @username
        </a>
      </HoverCardTrigger>
      <HoverCardContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h4 style={{ margin: 0, fontWeight: 600 }}>Username</h4>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
            This is some additional information that appears on hover.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
