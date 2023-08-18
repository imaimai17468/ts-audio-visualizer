import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import AudioVisualizer from './AudioVisualizer'
import styles from './AudioVisualizer.module.css'

const meta: Meta<typeof AudioVisualizer> = {
  title: 'common/AudioVisualizer',
  component: AudioVisualizer,
  tags: ['autodocs'],
  argTypes: {},
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
  args: {},
  render: () => (
    <div className={styles['story-container']}>
      <AudioVisualizer />
    </div>
  ),
}
