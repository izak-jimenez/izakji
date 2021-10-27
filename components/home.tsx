import {
  Box,
  Container,
  Center,
  Flex,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import { FaUser, FaGamepad, FaNewspaper, FaLaptopCode } from 'react-icons/fa'
import Card from '../components/card'
import Section from '../components/section'

const cards = [
  { id: 0, text: 'About Me', icon: FaUser, iconColor: '#D7C635' },
  { id: 1, text: 'Work', icon: FaLaptopCode, iconColor: '#B780E7' },
  { id: 2, text: 'Blog', icon: FaNewspaper, iconColor: '#E34F23' },
  { id: 3, text: 'Gaming', icon: FaGamepad, iconColor: '#76CF31' }
]

const HomeComponent = () => {
  return <></>
}

export default HomeComponent
