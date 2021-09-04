import styled from 'styled-components/native'
import footballPitch from '@/assets/footballPitch.png'

export const Container = styled.View`
  margin-vertical: ${({ theme }) => theme.spacing['4xl']}px;
  margin-left: ${({ theme }) => theme.spacing.xs}px;
  height: 488px;
`

export const FootballPitchContainer = styled.View`
  justify-content: center;
  align-items: center;
  position: relative;
  width: 355px;
  height: 488px;
`

export const FootballPitchImage = styled.Image.attrs({
  source: footballPitch,
})`
  resize-mode: contain;
`
