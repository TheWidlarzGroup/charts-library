import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.mainBg};
`

export const ChartsContainer = styled.ScrollView`
  padding-horizontal: ${({ theme }) => theme.spacing.m}px;
`

export const ChartContainer = styled.SafeAreaView``
