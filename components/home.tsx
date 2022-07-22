import { Box, Center, Text } from '@chakra-ui/react'
import { FaUser, FaGamepad, FaNewspaper, FaLaptopCode } from 'react-icons/fa'
import Section from '../components/section'
import { TEXTS } from '../lib/config/constants'
import { useNavContext } from './context/navContext'

const cards = [
  {
    id: 0,
    text: TEXTS.information.aboutMe,
    icon: FaUser,
    iconColor: '#D7C635',
  },
  { id: 1, text: TEXTS.information.work, icon: FaLaptopCode, iconColor: '#B780E7' },
  { id: 2, text: TEXTS.information.blog, icon: FaNewspaper, iconColor: '#E34F23' },
  { id: 3, text: TEXTS.information.gaming, icon: FaGamepad, iconColor: '#76CF31' },
]

const HomeComponent = () => {
  const { activeCard } = useNavContext()
  return (
    <Center>
      <Box>
        {/* <Section duration={0.4} delay={0.2} visible={activeCard < 99}>
          <Text key={cards[activeCard]?.id} textAlign={'justify'}>
            {activeCard < 99 ? cards[activeCard].text : ''}
          </Text>
        </Section> */}
      </Box>
    </Center>
  )
}

export default HomeComponent
