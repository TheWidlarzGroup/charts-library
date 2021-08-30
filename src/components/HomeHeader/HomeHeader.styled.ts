import styled from 'styled-components/native'

export const Container = styled.View`
  height: 60px;
  border-radius: 10px;
  padding-horizontal: ${({ theme }) => theme.spacing.l}px;
  justify-content: center;
`

export const HeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize['3xl']}px;
`
