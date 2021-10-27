import {
  Box,
  Container,
  Center,
  Text,
  SimpleGrid,
  Icon
} from '@chakra-ui/react'
import { IMiniCard } from '../lib/types'
import { useNavContext } from './context/navContext'

const MiniCard = ({
  cardId,
  cardIcon,
  cardIconColor,
  cardAction
}: IMiniCard) => {
  const { updateNavState } = useNavContext()

  const handleClick = (action: Function) => {
    if (updateNavState) {
      updateNavState(1)
    }
  }

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
        transition: 'all .3s ease-in-out',
        transform: 'scale(1.025)',
        cursor: 'pointer'
      }}
      onClick={() => handleClick(cardAction)}
    >
      <Center>
        <SimpleGrid>
          <Center>
            <Icon as={cardIcon} fontSize="3xl" color={cardIconColor} />
          </Center>
        </SimpleGrid>
      </Center>
    </Box>
  )
}

export default MiniCard
