import styled from 'styled-components/native'
import whiteShirt from '@/assets/whiteShirt.png'
import blackShirt from '@/assets/blackShirt.png'

export const Container = styled.SafeAreaView`
  flex: 1;
  position: absolute;
  left: 0;
  top: 0;
`

interface ImageProps {
  left: number
  top: number
}

export const WhiteShirt = styled.Image.attrs({
  source: whiteShirt,
})<ImageProps>`
  resize-mode: contain;
  height: 25px;
  width: 25px;
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  z-index: 100;
`

export const BlackShirt = styled.Image.attrs({
  source: blackShirt,
})<ImageProps>`
  resize-mode: contain;
  height: 25px;
  width: 25px;
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  z-index: 100;
`
