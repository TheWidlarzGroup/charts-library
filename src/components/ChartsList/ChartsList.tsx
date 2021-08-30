import React from 'react'
import { FlatList } from 'react-native'
import { chartsListArray } from '@/components/ChartsList/chartsListArray'
import { ChartsListItem } from '@/components/ChartsList/ChartsListItem/ChartsListItem'
import { Container } from '@/components/ChartsList/ChartsList.styled'

export const ChartsList = () => {
  const chartsListItem = ({ item }: { item: { title: string; link: string } }) => {
    return <ChartsListItem title={item.title} link={item.link} />
  }

  return (
    <Container>
      <FlatList
        data={chartsListArray}
        renderItem={chartsListItem}
        keyExtractor={(item, index) => item.link + index}
      />
    </Container>
  )
}
