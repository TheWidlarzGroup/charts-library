import styled from 'styled-components/native'

export const ChartContainer = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
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
  bottom: 27px;
  background-color: lightgrey;
`

export const HorizontalArrow = styled.View`
  height: 5px;
  width: 5px;
  position: absolute;
  right: -5px;
  bottom: 25px;
  border-left-width: 1px;
  border-left-color: grey;
  border-top-width: 1px;
  border-top-color: grey;
  transform: rotate(135deg);
`

export const AxisYLine = styled.View`
  height: 297px;
  width: 1px;
  position: absolute;
  left: 7.5px;
  bottom: 18px;
  background-color: lightgrey;
`

export const VerticalArrow = styled.View`
  height: 5px;
  width: 5px;
  position: absolute;
  left: 5.5px;
  top: 7px;
  border-left-width: 1px;
  border-left-color: grey;
  border-top-width: 1px;
  border-top-color: grey;
  transform: rotate(45deg);
`
