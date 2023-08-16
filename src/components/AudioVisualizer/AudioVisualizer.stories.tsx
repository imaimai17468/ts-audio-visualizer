import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AudioVisualizer from './AudioVisualizer'
import styles from './AudioVisualizer.module.css'

export default {
  title: 'components/AudioVisualizer',
  component: AudioVisualizer,
  argTypes: {},
} as ComponentMeta<typeof AudioVisualizer>

const Template: ComponentStory<typeof AudioVisualizer> = () => (
  <div className={styles['story-container']}>
    <AudioVisualizer />
  </div>
)

export const Default = Template.bind({})
