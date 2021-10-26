import {
  Box,
  Container,
  Center,
  Text,
  SimpleGrid,
  Icon
} from '@chakra-ui/react'
import { CardType } from '../lib/types'

const Card = ({ cardId, cardText, cardIcon }: CardType) => {
  return (
    <Box
      key={cardId}
      width="100%"
      bg="#74B1EA"
      p="5"
      textAlign="center"
      borderRadius={8}
      boxShadow="lg"
      _hover={{
        transition: 'all .2s ease-in-out',
        transform: 'scale(1.025)',
        cursor: 'pointer'
      }}
    >
      <Center>
        <SimpleGrid>
          <Center>
            <Icon as={cardIcon} fontSize="xl" />
          </Center>
          <Text fontSize="2xl" fontWeight={600}>
            {cardText}
          </Text>
        </SimpleGrid>
      </Center>
    </Box>
  )
}

export default Card
