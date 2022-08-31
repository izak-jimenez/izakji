import { Box, Container, Center, SimpleGrid, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FaUser, FaGamepad, FaNewspaper, FaLaptopCode, FaUserAlt } from 'react-icons/fa'
import { Card, MiniCard, Section } from '../../components'
import { ROUTES } from '../../lib/config/constants'
import { ActiveCardValues, Sections } from '../../lib/types'
import { AnimatedCard } from '../animated'
import { useNavContext } from '../context/navContext'
import Socials from './socials'

const AppBar = () => {
  const { navState, activeCard, updateActiveCard, updateNavState } = useNavContext()
  const router = useRouter()

  useEffect(() => {
    if (updateNavState) {
      const value = localStorage.getItem('navState')
      if (value) {
        updateNavState(parseInt(value))
      }
    }
  }, [])

  const routeProcessor = (activeCardValue: Sections) => {
    switch (activeCardValue) {
      case 'aboutMe':
        router.push(ROUTES.aboutMe)
        return
      case 'work':
        router.push(ROUTES.work)
        return
      case 'blog':
        router.push(ROUTES.blog)
        return
      case 'gaming':
        router.push(ROUTES.gaming)
        return
      default:
        router.push(ROUTES.home)
        return
    }
  }

  const cardActionHandler = (activeCardValue: Sections) => {
    if (updateNavState && updateActiveCard) {
      if (navState === 1 && (activeCard === activeCardValue || activeCard === 'none')) {
        updateNavState(0)
        localStorage.setItem('navState', '0')
        updateActiveCard(activeCardValue)
        routeProcessor('none')
      } else {
        updateNavState(1)
        localStorage.setItem('navState', '1')
        updateActiveCard(activeCardValue)
        routeProcessor(activeCardValue)
      }
    }
  }

  const cards = [
    {
      id: 0,
      text: 'About Me',
      icon: FaUserAlt,
      iconColor: '#FFC300',
      action: () => cardActionHandler('aboutMe'),
    },
    {
      id: 1,
      text: 'Work',
      icon: FaLaptopCode,
      iconColor: '#B780E7',
      action: () => cardActionHandler('work'),
    },
    {
      id: 2,
      text: 'Blog',
      icon: FaNewspaper,
      iconColor: '#E34F23',
      action: () => cardActionHandler('blog'),
    },
    {
      id: 3,
      text: 'Gaming',
      icon: FaGamepad,
      iconColor: '#76CF31',
      action: () => cardActionHandler('gaming'),
    },
  ]

  const header = () => (
    <Center>
      <SimpleGrid columns={[1, 1, 1]} spacing={4}>
        <Text textAlign='center' fontSize='3xl' fontWeight={600}>
          [ isaac jimenez ]
        </Text>
        <Text textAlign='center' fontSize='xl' fontWeight={600}>
          software engineer | cloud engineer
        </Text>
        <Socials size={24} />
      </SimpleGrid>
    </Center>
  )

  const renderWebAppBar = () => {
    return (
      <SimpleGrid columns={[1, 1, 2]} spacing={4}>
        {cards.map((card, index) => {
          return (
            <AnimatedCard
              key={index}
              cardId={card.id}
              cardText={card.text}
              cardIcon={card.icon}
              cardIconColor={card.iconColor}
              cardAction={card.action}
              isMini={false}
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
            <AnimatedCard
              key={index}
              cardId={card.id}
              cardIcon={card.icon}
              cardIconColor={card.iconColor}
              cardAction={card.action}
              isMini={true}
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
            <AnimatedCard
              key={index}
              cardId={card.id}
              cardText={card.text}
              cardIcon={card.icon}
              cardIconColor={card.iconColor}
              cardAction={card.action}
              isMini={false}
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
    <Section duration={0.8} delay={0.2}>
      <Box paddingTop={[4, 6, 12, 24]}>
        {header()}
        <Container paddingTop={[4, 6, 12, 24]}>{navRenderer(navState)}</Container>
      </Box>
    </Section>
  )
}

export default AppBar
