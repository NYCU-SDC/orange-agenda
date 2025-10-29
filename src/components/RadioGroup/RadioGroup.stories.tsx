import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup, RadioGroupItem } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <RadioGroupItem value="option1" id="r1" />
        <label htmlFor="r1">Option 1</label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <RadioGroupItem value="option2" id="r2" />
        <label htmlFor="r2">Option 2</label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <RadioGroupItem value="option3" id="r3" />
        <label htmlFor="r3">Option 3</label>
      </div>
    </RadioGroup>
  ),
};
