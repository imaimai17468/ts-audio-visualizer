import { Meta, StoryObj } from '@storybook/react'
import AudioVisualizer from './AudioVisualizer'

const meta: Meta<typeof AudioVisualizer> = {
  title: 'common/AudioVisualizer',
  component: AudioVisualizer,
  tags: ['autodocs'],
  argTypes: {
    bgColor: {
      description: 'Background color of the container',
      control: 'color',
    },
    barColor: {
      description: 'Color of the bars',
      control: 'color',
    },
    width: {
      description: 'Width of the container',
      control: 'text',
    },
    height: {
      description: 'Height of the container',
      control: 'text',
    },
    barAlign: {
      description: 'Align the bars to the top, center, or bottom of the container (default: bottom)',
      defaultValue: 'bottom',
      options: ['top', 'center', 'bottom'],
      control: { type: 'radio' },
    },
  },
}
export default meta
type Story = StoryObj<typeof AudioVisualizer>

export const Default: Story = {
  args: {
    height: '100px',
    width: '100%',
    barAlign: 'bottom',
  },
}
