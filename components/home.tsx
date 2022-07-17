import {
  Box,
  Center,
  Text
} from '@chakra-ui/react'
import { FaUser, FaGamepad, FaNewspaper, FaLaptopCode } from 'react-icons/fa'
import Section from '../components/section'
import { useNavContext } from './context/navContext'

const cards = [
  { id: 0, text: 'Hi! My name is Isaac Jimenez and I am a software engineer currently based in The Netherlands', icon: FaUser, iconColor: '#D7C635' },
  { id: 1, text: 'This is my work description', icon: FaLaptopCode, iconColor: '#B780E7' },
  { id: 2, text: 'Blog', icon: FaNewspaper, iconColor: '#E34F23' },
  { id: 3, text: 'Gaming', icon: FaGamepad, iconColor: '#76CF31' }
]

const HomeComponent = () => {
  const { activeCard } = useNavContext()
  return (
    <Section delay={0.2}>
      <Center>
        <Box>
          <Text>{activeCard < 99 ? cards[activeCard].text : ''}</Text> 
        </Box>
      </Center>
    </Section>
  )
}

export default HomeComponent
