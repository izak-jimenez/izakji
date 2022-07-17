import { AnimatePresence, motion } from 'framer-motion'
import { Box, BoxProps } from '@chakra-ui/react'
import { SectionType } from '../lib/types'

const AnimatedDiv = motion<Omit<BoxProps, 'transition'>>(Box)

const Section = ({ children, delay = 0 }: SectionType) => (
  <AnimatePresence>
    <AnimatedDiv
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      mb={6}
    >
      {children}
    </AnimatedDiv>
  </AnimatePresence>
)

export default Section
