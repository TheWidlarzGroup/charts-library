import React, { VFC } from 'react'
import { Container } from './PlayersMap.styled'
import { renderFootballPlayers } from '@/screens/ScatterChart/utilityFunctions'

interface Props {
  componentWidth: number
  componentHeight: number
  playersWhite: {
    x: number
    y: number
  }[]
  playersBlack: {
    x: number
    y: number
  }[]
}

export const PlayersMap: VFC<Props> = ({
  componentHeight,
  componentWidth,
  playersBlack,
  playersWhite,
}) => {
  return (
    <Container>
      {renderFootballPlayers(componentWidth, componentHeight, 25, playersWhite, playersBlack)}
    </Container>
  )
}
