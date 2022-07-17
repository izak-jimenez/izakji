import '@fontsource/nunito/400.css'
import '@fontsource/nunito/600.css'
import '@fontsource/nunito/700.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import MainLayout from '../components/layouts/mainLayout'
import theme from '../lib/config/theme'
import HomeComponent from '../components/home'

function Homepage({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <HomeComponent />
      </MainLayout>
    </ChakraProvider>
  )
}
export default Homepage
