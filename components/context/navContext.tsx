import React, { useState, FC, useContext } from 'react'
import { INavContextContext, NavContextProviderType } from '../../lib/types'

const defaultState = {
  navState: 0
}

const NavContext = React.createContext<INavContextContext>(defaultState)

const NavContextProvider: FC = ({ children }) => {
  const [navState, setNavState] = useState<number>(0)

  const updateNavState = (newValue: number) => {
    setNavState(newValue)
  }

  return (
    <NavContext.Provider value={{ navState, updateNavState }}>
      {children}
    </NavContext.Provider>
  )
}

export default NavContext

export { NavContextProvider }

export const useNavContext = () => useContext(NavContext)
