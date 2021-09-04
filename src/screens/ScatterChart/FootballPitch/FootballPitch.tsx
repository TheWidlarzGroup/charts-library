import React, { useState } from 'react'
import {
  Container,
  FootballPitchContainer,
  FootballPitchImage,
} from '@/screens/ScatterChart/FootballPitch/FootballPitch.styled'
import { firstTeamCoordinates, secondTeamCoordinates } from '@/data/data'
import { renderFootballCirclesSvg } from '@/screens/ScatterChart/utilityFunctions'
import Svg from 'react-native-svg'
import { PlayersMap } from '@/screens/ScatterChart/FootballPitch/PlayersMap/PlayersMap'

export const FootballPitch = () => {
  const [componentWidth, setComponentWidth] = useState(0)
  const [componentHeight, setComponentHeight] = useState(0)

  return (
    <>
      <Container>
        <FootballPitchContainer
          onLayout={(event) => {
            const { width, height } = event.nativeEvent.layout
            setComponentHeight(height)
            setComponentWidth(width)
          }}>
          <FootballPitchImage />
          <Svg key="svg" style={{ position: 'absolute' }}>
            {renderFootballCirclesSvg(
              componentWidth,
              componentHeight,
              firstTeamCoordinates,
              secondTeamCoordinates
            )}
          </Svg>
        </FootballPitchContainer>
      </Container>
      <Container>
        <FootballPitchContainer>
          <FootballPitchImage />
          <PlayersMap
            playersWhite={firstTeamCoordinates}
            playersBlack={secondTeamCoordinates}
            componentWidth={componentWidth}
            componentHeight={componentHeight}
          />
        </FootballPitchContainer>
      </Container>
    </>
  )
}
