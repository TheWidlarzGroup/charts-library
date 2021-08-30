import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  padding-vertical: ${({ theme }) => theme.spacing.s}px;
`

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize['2xl']}px;
`
