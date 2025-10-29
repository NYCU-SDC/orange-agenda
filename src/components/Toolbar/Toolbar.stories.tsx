import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toolbar, ToolbarButton, ToolbarSeparator } from './Toolbar';

const meta: Meta<typeof Toolbar> = {
  title: 'Components/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {
  render: () => (
    <Toolbar>
      <ToolbarButton>Cut</ToolbarButton>
      <ToolbarButton>Copy</ToolbarButton>
      <ToolbarButton>Paste</ToolbarButton>
      <ToolbarSeparator />
      <ToolbarButton>Undo</ToolbarButton>
      <ToolbarButton>Redo</ToolbarButton>
    </Toolbar>
  ),
};
