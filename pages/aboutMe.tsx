import { Box, Center, Image, Link, Text } from '@chakra-ui/react'
import { Section } from '../components'
import { useNavContext } from '../components/context/navContext'
import { TEXTS } from '../lib/config/constants'
import { Sections } from '../lib/types'

const AboutMe = () => {
  return (
    <Center>
      <Box>
        <Section duration={0.4} delay={0}>
          <Center>
          <Image marginTop={10} width='50%' borderRadius='full' boxSize='250px' objectFit='cover' src='/assets/img/isaac-profile-img.jpeg' alt='Isaac Jimenez' />
          </Center>
          <Text marginTop={10} fontSize='lg' textAlign={'justify'}>{TEXTS.information.aboutMe}</Text>
        </Section>
      </Box>
    </Center>
  )
}

export default AboutMe