import Head from 'next/head'
import React from 'react'
import { Box, Container } from '@chakra-ui/react'

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
      <Container>{children}</Container>
    </Box>
  )
}

export default MainLayout
