import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({
  fonts: {
    body: 'Nunito',
  },
  config,
  colors: {
    primary: '#3583BC',
    secondary: '#35BCAA',
    white: '#FFFFFF',
    black: '#000000',
  }
})
export default theme
