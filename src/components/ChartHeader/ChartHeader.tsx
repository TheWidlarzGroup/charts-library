import React, { VFC } from 'react'
import { CloseIcon, Container, Title } from '@/components/ChartHeader/ChartHeader.styled'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { ChartsTitles } from '@/components/ChartHeader/types'

interface Props {
  title: ChartsTitles
}

export const ChartHeader: VFC<Props> = ({ title }) => {
  const { navigate } = useNavigation()

  const closeCurrentScreen = () => {
    navigate('Home')
  }

  return (
    <Container>
      <Title> {title} </Title>
      <TouchableOpacity onPress={closeCurrentScreen}>
        <CloseIcon />
      </TouchableOpacity>
    </Container>
  )
}
