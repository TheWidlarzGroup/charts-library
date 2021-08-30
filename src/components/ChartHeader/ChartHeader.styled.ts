import styled from 'styled-components/native'
import closeIcon from '@/assets/closeIcon.png'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.mainBg};
  padding-horizontal: ${({ theme }) => theme.spacing.m}px;
  padding-left: ${({ theme }) => theme.spacing.m}px;
  padding-right: ${({ theme }) => theme.spacing.l}px;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize['3xl']}px;
  letter-spacing: 2px;
`

export const CloseIcon = styled.Image.attrs({
  source: closeIcon,
})`
  height: 26px;
  width: 26px;
`
