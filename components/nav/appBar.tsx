import {
  Box,
  Container,
  Center,
  Flex,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import { FaUser, FaGamepad, FaNewspaper, FaLaptopCode } from 'react-icons/fa'
import { Card, MiniCard, Section } from '../../components'
import { useNavContext } from '../context/navContext'

const aboutMeAction = () => {}

const workAction = () => {}

const blogAction = () => {}

const gamingAction = () => {}

const cards = [
  {
    id: 0,
    text: 'About Me',
    icon: FaUser,
    iconColor: '#D7C635',
    action: aboutMeAction
  },
  {
    id: 1,
    text: 'Work',
    icon: FaLaptopCode,
    iconColor: '#B780E7',
    action: workAction
  },
  {
    id: 2,
    text: 'Blog',
    icon: FaNewspaper,
    iconColor: '#E34F23',
    action: blogAction
  },
  {
    id: 3,
    text: 'Gaming',
    icon: FaGamepad,
    iconColor: '#76CF31',
    action: gamingAction
  }
]

const renderWebAppBar = () => {
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={4}>
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            cardId={card.id}
            cardText={card.text}
            cardIcon={card.icon}
            cardIconColor={card.iconColor}
            cardAction={() => {}}
          />
        )
      })}
    </SimpleGrid>
  )
}

const renderMinimizedAppBar = () => {
  return (
    <SimpleGrid columns={[4, 4, 4]} spacing={4}>
      {cards.map((card, index) => {
        return (
          <MiniCard
            key={index}
            cardId={card.id}
            cardIcon={card.icon}
            cardIconColor={card.iconColor}
            cardAction={() => {}}
          />
        )
      })}
    </SimpleGrid>
  )
}

const renderMobileAppBar = () => {
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={4}>
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            cardId={card.id}
            cardText={card.text}
            cardIcon={card.icon}
            cardIconColor={card.iconColor}
            cardAction={() => {}}
          />
        )
      })}
    </SimpleGrid>
  )
}

const navRenderer = (state: number) => {
  switch (state) {
    case 0:
      return renderWebAppBar()
    case 1:
      return renderMinimizedAppBar()
    case 2:
      return renderMobileAppBar()
    default:
      return renderWebAppBar()
  }
}

const AppBar = () => {
  const { navState } = useNavContext()
  return (
    <Section delay={0.2}>
      <Box paddingTop={[4, 6, 12, 24]}>
        <Center>
          <SimpleGrid columns={[1, 1, 1]} spacing={4}>
            <Text textAlign="center" fontSize="3xl" fontWeight={600}>
              [ isaac jimenez ]
            </Text>
            <Text textAlign="center" fontSize="xl" fontWeight={600}>
              software engineer | cloud engineer
            </Text>
          </SimpleGrid>
        </Center>
        <Container paddingTop={[4, 6, 12, 24]}>
          {navRenderer(navState)}
        </Container>
      </Box>
    </Section>
  )
}

export default AppBar
