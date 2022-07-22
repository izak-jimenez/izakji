import '@fontsource/nunito/400.css'
import '@fontsource/nunito/600.css'
import '@fontsource/nunito/700.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import MainLayout from '../components/layouts/mainLayout'
import theme from '../lib/config/theme'
import { AnimatePresence } from 'framer-motion'

function Homepage({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  )
}
export default Homepage
