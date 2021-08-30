import React from 'react'
import { HomeHeader } from '@/components/HomeHeader/HomeHeader'
import { Container } from './Home.styled'
import { ChartsList } from '@/components/ChartsList/ChartsList'

export const Home = () => {
  return (
    <Container>
      <HomeHeader />
      <ChartsList />
    </Container>
  )
}
