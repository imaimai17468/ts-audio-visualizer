import React from "react"
import AudioVisualizer from "./AudioVisualizer"
import styles from "./AudioVisualizer.module.css"

export const AudioVisualizerSample = () => {
return (
  <div className={styles.sample}>
    <AudioVisualizer
      mode="bars"
      height="100px"
      width="50%"
      bgColor="#252525"
      barColor="#efefef"
    />
    <AudioVisualizer
      mode="grid"
      height="100px"
      width="50%"
      bgColor="#efdddd"
      barColor="#ddefef"
    />
    <AudioVisualizer
      mode="wave"
      height="100px"
      width="50%"
      bgColor="#ddefdd"
      barColor="#ddddef"
    />
  </div>
)
}
