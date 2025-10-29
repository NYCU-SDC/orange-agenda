import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select, SelectItem } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select placeholder="Select a fruit...">
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
      <SelectItem value="grape">Grape</SelectItem>
      <SelectItem value="mango">Mango</SelectItem>
    </Select>
  ),
};
