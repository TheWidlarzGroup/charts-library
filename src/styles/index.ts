import { colors } from './colors'
import { themeBase } from './themeBase'

export const theme = {
  colors,
  ...themeBase,
}

export type Theme = typeof theme
