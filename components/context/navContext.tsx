import React, { useState, FC, useContext } from 'react'
import { INavContextContext, NavContextProviderType, Sections } from '../../lib/types'

const defaultState: { navState: number; activeCard: Sections } = {
  navState: 0,
  activeCard: 'none',
}

const NavContext = React.createContext<INavContextContext>(defaultState)

const NavContextProvider: FC = ({ children }) => {
  const [navState, setNavState] = useState<number>(0)
  const [activeCard, setActiveCard] = useState<Sections>('none')

  const updateNavState = (newValue: number) => {
    setNavState(newValue)
  }

  const updateActiveCard = (newValue: Sections) => {
    setActiveCard(newValue)
  }

  return (
    <NavContext.Provider value={{ navState, updateNavState, activeCard, updateActiveCard }}>
      {children}
    </NavContext.Provider>
  )
}

export default NavContext

export { NavContextProvider }

export const useNavContext = () => useContext(NavContext)
