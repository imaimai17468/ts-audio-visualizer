import type { Meta, StoryObj } from '@storybook/react'
import AudioVisualizer from './AudioVisualizer'
import styles from './AudioVisualizer.module.css'

const meta: Meta<typeof AudioVisualizer> = {
  title: 'components/AudioVisualizer',
  component: AudioVisualizer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AudioVisualizer>

export const Default: Story = {
  args: {},
  render: () => (
    <div className={styles['story-container']}>
      <AudioVisualizer />
    </div>
  ),
}
