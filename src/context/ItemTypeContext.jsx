import { createContext, useState, useContext } from 'react'
import styles from '../styles/ItemShop.module.css'

const ItemTypeContext = createContext()

const DEFAULT_ITEM_TYPE = 'weapon'

export function ItemTypeProvider({ children }) {
  const [currentCategory, setCurrentCategory] = useState(DEFAULT_ITEM_TYPE)

  const themeClassMap = {
    weapon: 'themeWeapon',
    spirit: 'themeSpirit',
    vitality: 'themeVitality',
  }

  return (
    <ItemTypeContext.Provider
      value={{ currentCategory, setCurrentCategory, themeClassMap }}
    >
      {children}
    </ItemTypeContext.Provider>
  )
}

export function useItemType() {
  return useContext(ItemTypeContext)
}
