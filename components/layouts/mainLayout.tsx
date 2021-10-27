import Head from 'next/head'
import React from 'react'
import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import { AppBar } from '../../components/nav'
import { NavContextProvider } from '../context/navContext'

interface Props {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <Box as="main">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Isaac Jimenez - Homepage</title>
      </Head>
      <Container>
        <NavContextProvider>
          <SimpleGrid columns={[1, 1, 1]} spacing={4}>
            <Box>
              <AppBar />
            </Box>
            <Box>{children}</Box>
          </SimpleGrid>
        </NavContextProvider>
      </Container>
    </Box>
  )
}

export default MainLayout
