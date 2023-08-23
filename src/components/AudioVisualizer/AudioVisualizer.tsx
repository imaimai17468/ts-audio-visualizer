import React, { useEffect, useRef } from 'react'
import styles from './AudioVisualizer.module.css'
import { AudioVisualizerProps } from './AudioVisualizer.types'

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({
  mode = 'bars',
  bgColor = '#fff',
  barColor = '#000',
  width = '100%',
  height = '100%',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (containerRef.current && canvasRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (canvasRef.current) {
            canvasRef.current.width = entry.contentRect.width
            canvasRef.current.height = entry.contentRect.height
          }
        }
      })

      resizeObserver.observe(containerRef.current)

      return () => resizeObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then((stream) => {
        const audioContext = new AudioContext()
        const source = audioContext.createMediaStreamSource(stream)
        const analyser = audioContext.createAnalyser()
        source.connect(analyser)
        draw(analyser)
      })
      .catch((err) => console.log('The following error occurred: ' + err))
  }, [mode, bgColor, barColor])

  const draw = (analyser: AnalyserNode) => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      if (ctx) {
        const frequencyData = new Uint8Array(analyser.frequencyBinCount / 15)
        analyser.getByteFrequencyData(frequencyData)

        const width = canvas.width
        const height = canvas.height

        ctx.fillStyle = bgColor
        ctx.fillRect(0, 0, width, height)

        const barWidth = width / frequencyData.length
        let barHeight
        let x = 0

        for (let i = 0; i < frequencyData.length; i++) {
          barHeight = (frequencyData[i] / 255) * height

          ctx.fillStyle = barColor

          if (mode === 'bars') {
            ctx.fillRect(x, height - barHeight, barWidth, barHeight)
          } else if (mode === 'grid') {
            const gridHeight = 10
            for (let j = 0; j < barHeight / gridHeight; j++) {
              ctx.fillRect(x, height - gridHeight * (j + 1), barWidth, gridHeight)
              ctx.strokeStyle = bgColor
              ctx.beginPath()
              ctx.moveTo(x, height - gridHeight * (j + 1))
              ctx.lineTo(x + barWidth, height - gridHeight * (j + 1))
              ctx.stroke()
            }
          }
          x += barWidth
        }

        requestAnimationFrame(() => draw(analyser))
      }
    }
  }

  return (
    <div ref={containerRef} className={styles.root} style={{ width, height }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default AudioVisualizer
