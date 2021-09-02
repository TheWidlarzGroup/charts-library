import styled from 'styled-components/native'

export const ChartContainer = styled.View`
  flex-direction: row;
  margin-vertical: ${({ theme }) => theme.spacing.xl}px;
  position: relative;
`

export const AxisYLine = styled.View`
  height: 243px;
  width: 1px;
  position: absolute;
  left: 42px;
  bottom: 32px;
  background-color: lightgrey;
`

export const Arrow = styled.View`
  height: 5px;
  width: 5px;
  position: absolute;
  left: 40px;
  top: 23px;
  border-left-width: 1px;
  border-left-color: grey;
  border-top-width: 1px;
  border-top-color: grey;
  transform: rotate(45deg);
`
