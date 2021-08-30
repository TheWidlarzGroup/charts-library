import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles'
import { RootNavigation } from '@/navigation'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RootNavigation />
    </ThemeProvider>
  )
}

export default App
