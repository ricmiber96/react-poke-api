import React from 'react'

export default function Backgroud ({ colors }) {
  const constrainValue = (value, min, max) => {
    return Math.min(Math.max(value, min), max)
  }
  const gradientColor = !colors
    ? ''
    : `linear-gradient(45deg,hsl(${constrainValue(colors[0] + 25, 0, 360)}deg ${constrainValue(colors[1] + 50, 0, 100
      )}% ${constrainValue(colors[2] - 10, 0, 100)}%) 0%,hsl(${constrainValue(colors[0] - 25, 0, 360)}deg ${constrainValue(colors[1] + 25, 0, 100)}% ${constrainValue(colors[2] + 10, 0, 100)}%) 100%)`

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          zIndex: -10,
          backgroundImage: gradientColor,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          opacity: 0.5,
          transition: 'background-image 0.5s ease'
        }}
      />
      <div
        style={{
          position: 'fixed',
          zIndex: -8,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          opacity: 0.3
        }}
      />
    </div>
  )
}
