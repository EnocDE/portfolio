import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

export default function useMenu() {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("MenuContext must be used within MenuContext Provider");
  }

  const { showMenu, setShowMenu, handleMenu: changeShowMenu } = context;

  return {
    showMenu,
    setShowMenu,
    changeShowMenu,
  };
}
