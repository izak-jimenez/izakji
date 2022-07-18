import { AnimatePresence, motion } from 'framer-motion'
import { Box, BoxProps } from '@chakra-ui/react'
import { SectionType } from '../lib/types'

/* https://github.com/chakra-ui/chakra-ui/issues/1814 */
const AnimatedDiv = motion<Omit<BoxProps, 'transition'>>(Box)

const Section = ({ children, delay = 0, duration = 0, visible }: SectionType) => {
  const variants = {
    enabled: { y: 0, opacity: 1, transition: { duration, delay } },
    disabled: { y: -20, opacity: 0, transition: { duration, delay } },
  }
  return (
    <AnimatedDiv
      initial={{ y: 20, opacity: 0 }}
      animate={visible ? 'enabled' : 'disabled'}
      variants={variants}
      mb={6}
    >
      {children}
    </AnimatedDiv>
  )
}

export default Section
