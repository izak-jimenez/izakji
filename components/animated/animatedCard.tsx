import { Box, Center, Text, SimpleGrid, Icon, BoxProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { AnimatedCardType } from '../../lib/types'

/* https://github.com/chakra-ui/chakra-ui/issues/1814 */
const BoxWithMotion = motion<Omit<BoxProps, 'transition'>>(Box)

const AnimatedCard = ({
  cardId,
  cardText,
  cardIcon,
  cardIconColor,
  cardAction,
  isMini,
}: AnimatedCardType) => {
  return (
    <BoxWithMotion
      key={cardId}
      width='100%'
      bg='white'
      p='5'
      textAlign='center'
      borderRadius={8}
      boxShadow='lg'
      _hover={{
        cursor: 'pointer',
      }}
      onClick={cardAction}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Center>
        <SimpleGrid>
          <Center>
            <Icon as={cardIcon} fontSize={isMini ? '3xl' : 'xl'} color={cardIconColor} />
          </Center>
          {!isMini ? (
            <Text fontSize='2xl' fontWeight={600} color='black'>
              {cardText}
            </Text>
          ) : null}
        </SimpleGrid>
      </Center>
    </BoxWithMotion>
  )
}

export default AnimatedCard
