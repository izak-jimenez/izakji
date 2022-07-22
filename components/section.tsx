import { motion } from 'framer-motion'
import { Box, BoxProps } from '@chakra-ui/react'
import { SectionType } from '../lib/types'

/* https://github.com/chakra-ui/chakra-ui/issues/1814 */
const AnimatedDiv = motion<Omit<BoxProps, 'transition'>>(Box)

const Section = ({ children, delay = 0, duration = 0 }: SectionType) => {
  return (
    <AnimatedDiv
      initial={{ y: 20, opacity: 0 }}
      exit={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration, delay }}
      mb={6}
    >
      {children}
    </AnimatedDiv>
  )
}

export default Section
