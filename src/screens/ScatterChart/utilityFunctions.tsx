import React from 'react'
import { Path } from 'react-native-svg'

const CIRCLE_RADIUS = 3

export const drawCircle = (
  x: number,
  y: number,
  radius: number,
  componentWidth: number,
  componentHeight: number
): string => {
  const xProportion = componentWidth / 100
  const yProportion = componentHeight / 100

  return `M ${(x - radius / xProportion) * xProportion + xProportion}, ${
    componentHeight - y * yProportion + yProportion
  } a ${radius},${radius} 0 1,1 ${2 * radius},0 a ${radius},${radius} 0 1,1 -${2 * radius},0`
}

export const renderCirclesSvg = (
  data: {
    x: number
    y: number
  }[],
  componentWidth: number,
  componentHeight: number
) => {
  const pathViolet = data
    .filter((_, index) => index % 2 === 0)
    .map((item) => {
      return drawCircle(item.x, item.y, CIRCLE_RADIUS, componentWidth, componentHeight)
    })
    .join()

  const pathOrange = data
    .filter((_, index) => index % 3 === 0)
    .map((item) => {
      return drawCircle(item.x, item.y, CIRCLE_RADIUS, componentWidth, componentHeight)
    })
    .join()

  const pathRed = data
    .filter((_, index) => index % 5 === 0)
    .map((item) => {
      return drawCircle(item.x, item.y, CIRCLE_RADIUS, componentWidth, componentHeight)
    })
    .join()

  const pathGreen = data
    .filter((_, index) => index % 7 === 0)
    .map((item) => {
      return drawCircle(item.x, item.y, CIRCLE_RADIUS, componentWidth, componentHeight)
    })
    .join()

  return (
    <>
      <Path d={pathViolet} fill={'violet'} />
      <Path d={pathOrange} fill={'orange'} />
      <Path d={pathRed} fill={'red'} />
      <Path d={pathGreen} fill={'green'} />
    </>
  )
}

export const generateData = (dotsNumber: number) => {
  const min = 0
  const max = 100
  const arrayOfDots = Array(dotsNumber).fill('')

  return arrayOfDots.map(() => {
    return {
      x: Math.floor(Math.random() * (max - min + 1)) + min,
      y: Math.floor(Math.random() * (max - min + 1)) + min,
    }
  })
}
