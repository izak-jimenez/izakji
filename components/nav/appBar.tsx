import { Box, Container, Center, SimpleGrid, Text } from '@chakra-ui/react'
import { FaUser, FaGamepad, FaNewspaper, FaLaptopCode } from 'react-icons/fa'
import { Card, MiniCard, Section } from '../../components'
import { ActiveCardValues } from '../../lib/types'
import { useNavContext } from '../context/navContext'

const AppBar = () => {
  const { navState, activeCard, updateActiveCard, updateNavState } = useNavContext()

  const cardActionHandler = (activeCardValue: ActiveCardValues) => {
    if (updateNavState && updateActiveCard) {
      if (navState === 1 && activeCard === activeCardValue) {
        updateNavState(0)
        updateActiveCard(99)
      } else {
        updateNavState(1)
        updateActiveCard(activeCardValue)
      }
    }
  }

  const cards = [
    {
      id: 0,
      text: 'About Me',
      icon: FaUser,
      iconColor: '#D7C635',
      action: () => cardActionHandler(ActiveCardValues.ABOUT_ME),
    },
    {
      id: 1,
      text: 'Work',
      icon: FaLaptopCode,
      iconColor: '#B780E7',
      action: () => cardActionHandler(ActiveCardValues.WORK),
    },
    {
      id: 2,
      text: 'Blog',
      icon: FaNewspaper,
      iconColor: '#E34F23',
      action: () => cardActionHandler(ActiveCardValues.BLOG),
    },
    {
      id: 3,
      text: 'Gaming',
      icon: FaGamepad,
      iconColor: '#76CF31',
      action: () => cardActionHandler(ActiveCardValues.GAMING),
    },
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
              cardAction={card.action}
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
              cardAction={card.action}
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
              cardAction={card.action}
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

  return (
    <Section delay={0.2}>
      <Box paddingTop={[4, 6, 12, 24]}>
        <Center>
          <SimpleGrid columns={[1, 1, 1]} spacing={4}>
            <Text textAlign='center' fontSize='3xl' fontWeight={600}>
              [ isaac jimenez ]
            </Text>
            <Text textAlign='center' fontSize='xl' fontWeight={600}>
              software engineer | cloud engineer
            </Text>
          </SimpleGrid>
        </Center>
        <Container paddingTop={[4, 6, 12, 24]}>{navRenderer(navState)}</Container>
      </Box>
    </Section>
  )
}

export default AppBar
