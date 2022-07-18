import { Center, Box, SimpleGrid, Link } from '@chakra-ui/react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SOCIAL_LINKS } from '../../lib/config/constants'
import { SocialsPropTypes } from '../../lib/types'

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

const Socials = ({ size }: SocialsPropTypes) => {
  return (
    <Center>
      <SimpleGrid columns={[3]} spacing={5}>
        <Link href={SOCIAL_LINKS.github}>
          <FaGithub className='custom-icon' size={size} />
        </Link>
        <Link href={SOCIAL_LINKS.instagram}>
          <FaInstagram className='custom-icon' size={size} />
        </Link>
        <Link href={SOCIAL_LINKS.linkedIn}>
          <FaLinkedin className='custom-icon' size={size} />
        </Link>
      </SimpleGrid>
    </Center>
  )
}

export default Socials
