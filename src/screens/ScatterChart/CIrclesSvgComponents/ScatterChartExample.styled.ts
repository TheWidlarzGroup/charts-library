import styled from 'styled-components/native'

export const ChartContainer = styled.SafeAreaView`
  margin-vertical: ${({ theme }) => theme.spacing['4xl']}px;
  margin-left: ${({ theme }) => theme.spacing.s}px;
  height: 300px;
  width: 350px;
`

export const CustomChart = styled.View`
  background-color: ${({ theme }) => theme.colors.transparent};
  height: 270px;
  width: 330px;
  position: relative;
`
