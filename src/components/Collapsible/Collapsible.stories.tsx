import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './Collapsible';
import { Button } from '../Button/Button';

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <Button>{open ? 'Hide' : 'Show'} Content</Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div
            style={{
              padding: '16px',
              background: '#f5f5f5',
              marginTop: '8px',
              borderRadius: '6px',
            }}
          >
            <p>This is the collapsible content that can be hidden or shown.</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};
