import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuStore = ({ children }) => {
  const [menuState, setMenuState] = useState(false)

  return (
    <MenuContext.Provider value={{menuState, setMenuState}}>
      {children}
    </MenuContext.Provider>
  )
}