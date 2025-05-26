import React, { createContext } from 'react'
import { doctors } from '../assets/assets'

export const AppContext=createContext(null)
const AppContextProvider = (props) => {
    const value={
        doctors,
    }

  return (
   
  <AppContext.Provider value={value}>
    {props.children}
  </AppContext.Provider>
  )
}

export default AppContextProvider