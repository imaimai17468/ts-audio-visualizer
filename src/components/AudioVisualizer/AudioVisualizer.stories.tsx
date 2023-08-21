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
  }
}
export default meta
type Story = StoryObj<typeof AudioVisualizer>

export const Default: Story = {
  args: {
    bgColor: '#fff',
    barColor: '#000'
  },
  render: ({bgColor, barColor}) => (
    <div className={styles['story-container-full']}>
      <AudioVisualizer bgColor={bgColor} barColor={barColor} />
    </div>
  ),
}

export const FixedWidth: Story = {
  args: {},
  render: ({ bgColor, barColor }) => (
    <div className={styles['story-container']}>
      <AudioVisualizer bgColor={bgColor} barColor={barColor} />
    </div>
  ),
}
