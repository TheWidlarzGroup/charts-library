import styled from 'styled-components/native'

export const ChartContainer = styled.View`
  margin-vertical: ${({ theme }) => theme.spacing.xl}px;
  padding-horizontal: ${({ theme }) => theme.spacing.s}px;
`

interface LineProps {
  width: number
}

export const AxisXLine = styled.View<LineProps>`
  height: 1px;
  width: ${(props) => props.width}px;
  position: absolute;
  left: 0;
  bottom: 22px;
  background-color: lightgrey;
`

export const Arrow = styled.View`
  height: 5px;
  width: 5px;
  position: absolute;
  right: 0;
  bottom: 20px;
  border-left-width: 1px;
  border-left-color: grey;
  border-top-width: 1px;
  border-top-color: grey;
  transform: rotate(135deg);
`
