import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.mainBg};
  overflow: visible;
`

export const ChartsContainer = styled.ScrollView`
  padding-horizontal: ${({ theme }) => theme.spacing.m}px;
  overflow: visible;
`

export const ChartContainer = styled.SafeAreaView`
  margin-top: ${({ theme }) => theme.spacing['3xl']}px;
  margin-left: ${({ theme }) => theme.spacing.s}px;
  height: 300px;
  width: 350px;
  overflow: visible;
`

export const CustomChart = styled.View`
  background-color: ${({ theme }) => theme.colors.transparent};
  height: 270px;
  width: 330px;
  position: relative;
`
