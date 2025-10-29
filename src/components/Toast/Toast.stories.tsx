import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toast, ToastProvider, ToastViewport } from './Toast';
import { Button } from '../Button/Button';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ToastProvider>
        <Story />
        <ToastViewport />
      </ToastProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Show Toast</Button>
        <Toast
          open={open}
          onOpenChange={setOpen}
          title="Success!"
          description="Your changes have been saved."
        />
      </>
    );
  },
};
