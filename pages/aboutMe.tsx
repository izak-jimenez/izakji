import { Box, Center, Link, Text } from '@chakra-ui/react'
import { Section } from '../components'
import { useNavContext } from '../components/context/navContext'
import { TEXTS } from '../lib/config/constants'
import { Sections } from '../lib/types'

const AboutMe = () => {
  return (
    <Center>
      <Box>
        <Section duration={0.4} delay={0}>
          <Text textAlign={'justify'}>{TEXTS.information.aboutMe}</Text>
        </Section>
      </Box>
    </Center>
  )
}

export default AboutMe
