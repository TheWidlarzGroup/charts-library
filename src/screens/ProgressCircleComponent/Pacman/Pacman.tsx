import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'

export const Pacman = () => {
  return (
    <>
      <ProgressCircle
        style={{ height: 200 }}
        progress={0.79}
        strokeWidth={100}
        cornerRadius={0}
        backgroundColor={'white'}
        progressColor={'#ffe737'}
        startAngle={-Math.PI * 1.3}
        endAngle={Math.PI * 0.7}
      />
    </>
  )
}
