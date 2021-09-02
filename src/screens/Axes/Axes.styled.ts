import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.mainBg};
`

export const ChartsContainer = styled.ScrollView`
  padding-horizontal: ${({ theme }) => theme.spacing.m}px;
`

export const ChartContainer = styled.View`
  margin-vertical: ${({ theme }) => theme.spacing.xl}px;
  padding-right: ${({ theme }) => theme.spacing['3xl']}px;
`
