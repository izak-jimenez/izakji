import { Box, Center, Text, SimpleGrid, Icon } from '@chakra-ui/react'
import { CardType } from '../lib/types'

const activeStyle = {
  '.custom-icon:hover::before &': {
    transition: 'all .3s ease-in-out',
    transform: 'scale(1.1)',
    boxShadow: '0 0 15px #ffee10',
  },
  '.custom-icon:hover &': {
    color: '#ffee10',
    boxShadow: '0 0 5px #ffee10',
    textShadow: '0 0 5px #ffee10',
  },
}

const Card = ({ cardId, cardText, cardIcon, cardIconColor, cardAction }: CardType) => {
  return (
    <Box
      key={cardId}
      width='100%'
      bg='white'
      p='5'
      textAlign='center'
      borderRadius={8}
      boxShadow='lg'
      _hover={{
        transition: 'all .3s ease-in-out',
        transform: 'scale(1.025)',
        cursor: 'pointer',
      }}
      sx={activeStyle}
      onClick={cardAction}
    >
      <Center>
        <SimpleGrid>
          <Center>
            <Icon sx={activeStyle} as={cardIcon} fontSize='xl' color={cardIconColor} />
          </Center>
          <Text fontSize='2xl' fontWeight={600} color='black'>
            {cardText}
          </Text>
        </SimpleGrid>
      </Center>
    </Box>
  )
}

export default Card
