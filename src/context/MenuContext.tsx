import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode
}

interface ContextProps {
  showMenu: boolean
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
  handleMenu: () => void
}

export const MenuContext = createContext<ContextProps | null >(null)

export default function MenuProvider({children} : Props) {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => setShowMenu((prevState) => !prevState);

  return (
    <MenuContext.Provider value={{
      showMenu,
      setShowMenu,
      handleMenu
    }}>
      {children}
    </MenuContext.Provider>
  )
}
