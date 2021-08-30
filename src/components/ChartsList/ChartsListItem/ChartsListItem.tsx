import React, { VFC } from 'react'
import { Button, ButtonText } from './ChartsListItem.styled'
import { useNavigation } from '@react-navigation/native'

interface Props {
  title: string
  link: string
}

export const ChartsListItem: VFC<Props> = ({ title, link }) => {
  const { navigate } = useNavigation()

  const onPressOpenTab = () => {
    navigate(link)
  }

  return (
    <Button onPress={onPressOpenTab}>
      <ButtonText> {title} </ButtonText>
    </Button>
  )
}
