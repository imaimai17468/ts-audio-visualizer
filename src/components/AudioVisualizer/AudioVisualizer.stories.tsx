import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import AudioVisualizer from './AudioVisualizer'
import { AudioVisualizerSample } from './_sample'

const meta: Meta<typeof AudioVisualizer> = {
  title: 'common/AudioVisualizer',
  component: AudioVisualizer,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      description: 'Mode of the visualizer',
      options: ['bars', 'grid', 'wave'],
      control: {
        type: 'select',
      },
    },
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
  },
}
export default meta
type Story = StoryObj<typeof AudioVisualizer>

export const Default: Story = {
  args: {
    mode: 'bars',
    height: '100px',
    width: '100%',
  },
}

export const Sample: Story = {
  render: () => (
    <AudioVisualizerSample />
  ),
}
