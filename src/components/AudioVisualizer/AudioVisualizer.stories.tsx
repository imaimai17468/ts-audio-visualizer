import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import AudioVisualizer from './AudioVisualizer'
import styles from './AudioVisualizer.module.css'

const meta: Meta<typeof AudioVisualizer> = {
  title: 'common/AudioVisualizer',
  component: AudioVisualizer,
  tags: ['autodocs'],
  argTypes: {
    bgColor: {
      control: 'color',
    },
    barColor: {
      control: 'color',
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
  }
}
export default meta
type Story = StoryObj<typeof AudioVisualizer>

export const Default: Story = {
  args: {},
  render: () => (
    <div className={styles['story-container-full']}>
      <AudioVisualizer />
    </div>
  ),
}

export const FixedWidth: Story = {
  args: {
    width: '500px',
    height: '200px',
  },
}

export const ChangeColor: Story = {
  args: {
    bgColor: '#eeeeee',
    barColor: '#aaeeaa',
  },
  render: ({ bgColor, barColor }) => (
    <div className={styles['story-container-full']}>
      <AudioVisualizer bgColor={bgColor} barColor={barColor} />
    </div>
  ),
}
