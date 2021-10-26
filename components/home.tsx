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

const cards = [
  { id: 0, text: 'About Me', icon: FaUser },
  { id: 1, text: 'Work', icon: FaLaptopCode },
  { id: 2, text: 'Blog', icon: FaNewspaper },
  { id: 3, text: 'Gaming', icon: FaGamepad }
]

const HomeComponent = () => {
  return (
    <Box paddingTop={[4, 6, 12, 24]}>
      <Center>
        <Text fontSize="3xl" fontWeight={600}>
          [ isaac jimenez ]
        </Text>
      </Center>
      <Container paddingTop={[4, 6, 12, 24]}>
        <SimpleGrid columns={[1, 1, 2]} spacing={4}>
          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                cardId={card.id}
                cardText={card.text}
                cardIcon={card.icon}
              />
            )
          })}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default HomeComponent
