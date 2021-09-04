import React from 'react'
import { Path } from 'react-native-svg'
import {
  BlackShirt,
  WhiteShirt,
} from '@/screens/ScatterChart/FootballPitch/PlayersMap/PlayersMap.styled'

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

const PLAYER_RADIUS = 5

export const drawPlayerCircle = (x: number, y: number, radius: number): string => {
  return `M ${x}, ${y} a ${radius},${radius} 0 1,1 ${2 * radius},0 a ${radius},${radius} 0 1,1 -${
    2 * radius
  },0`
}

export const renderFootballCirclesSvg = (
  componentWidth: number,
  componentHeight: number,
  firstTeam?: {
    x: number
    y: number
  }[],
  secondTeam?: {
    x: number
    y: number
  }[]
) => {
  //makes 1 points in X scale equal to 1% of the image width
  const xProportion = componentWidth / 100
  //scale size of our working area from image size, to court size - thanks to that, X coordinate value in scale 1-100 will be always placed on the court
  const xDiffProportion = 0.792
  //move our working area from the left edge of the image, exactly to the left line of the court
  const xDiff = xProportion * 10.4 - PLAYER_RADIUS
  //makes 1 points in X scale equal to 1% of the image width
  const yProportion = componentHeight / 100
  //scale size of our working area from image size, to court size - thanks to that, Y coordinate value in scale 1-100 will be always placed on the court
  const yDiffProportion = 0.889
  //move our working area from the top edge of the image, exactly to the left line of the court
  const yDiff = yProportion * 5.5

  const pathWhite =
    firstTeam &&
    firstTeam
      .map((item) => {
        const x = item.x * xDiffProportion * xProportion + xDiff
        const y = item.y * yDiffProportion * yProportion + yDiff
        return drawPlayerCircle(x, y, PLAYER_RADIUS)
      })
      .join()

  const pathBlack =
    secondTeam &&
    secondTeam
      .map((item) => {
        const x = item.x * xDiffProportion * xProportion + xDiff
        const y = item.y * yDiffProportion * yProportion + yDiff
        return drawPlayerCircle(x, y, PLAYER_RADIUS)
      })
      .join()

  return (
    <>
      <Path d={pathWhite} fill={'white'} />
      <Path d={pathBlack} fill={'black'} />
    </>
  )
}

export const renderFootballPlayers = (
  componentWidth: number,
  componentHeight: number,
  iconWidth: number,
  firstTeam?: {
    x: number
    y: number
  }[],
  secondTeam?: {
    x: number
    y: number
  }[]
) => {
  //makes 1 points in X scale equal to 1% of the image width
  const xProportion = componentWidth / 100
  //scale size of our working area from image size, to court size - thanks to that, X coordinate value in scale 1-100 will be always placed on the court
  const xDiffProportion = 0.792
  //move our working area from the left edge of the image, exactly to the left line of the court
  const xDiff = xProportion * 10.4 - iconWidth / 2
  //makes 1 points in X scale equal to 1% of the image width
  const yProportion = componentHeight / 100
  //scale size of our working area from image size, to court size - thanks to that, Y coordinate value in scale 1-100 will be always placed on the court
  const yDiffProportion = 0.889
  //move our working area from the top edge of the image, exactly to the left line of the court
  const yDiff = yProportion * 5.5 - iconWidth / 2

  return (
    <>
      {firstTeam &&
        firstTeam.map((item) => {
          const x = item.x * xDiffProportion * xProportion + xDiff
          const y = item.y * yDiffProportion * yProportion + yDiff

          return <WhiteShirt left={x} top={y} />
        })}
      {secondTeam &&
        secondTeam.map((item) => {
          const x = item.x * xDiffProportion * xProportion + xDiff
          const y = item.y * yDiffProportion * yProportion + yDiff

          return <BlackShirt left={x} top={y} />
        })}
    </>
  )
}
