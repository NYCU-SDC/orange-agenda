import type { Meta, StoryObj } from '@storybook/react-vite';
import { AspectRatio } from './AspectRatio';

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Landscape"
          style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '8px' }}
        />
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  render: () => (
    <div style={{ width: '200px' }}>
      <AspectRatio ratio={1}>
        <div
          style={{
            background: 'linear-gradient(135deg, #ff6b35 0%, #f59e0b 100%)',
            width: '100%',
            height: '100%',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 600,
          }}
        >
          1:1 Square
        </div>
      </AspectRatio>
    </div>
  ),
};
