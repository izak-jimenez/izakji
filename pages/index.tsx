import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useNavContext } from '../components/context/navContext'
import HomeComponent from '../components/home'

const Home: NextPage = () => {
  return <HomeComponent />
}

export default Home
