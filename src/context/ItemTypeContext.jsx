import { createContext, useState, useContext } from 'react'
import styles from '../styles/ItemContainer.module.css'
import styles from '../styles/ItemShop.module.css'

const ItemTypeContext = createContext()

const DEFAULT_ITEM_TYPE = 'weapon'

export function ItemTypeProvider({ children }) {
  const [currentCategory, setCurrentCategory] = useState(DEFAULT_ITEM_TYPE)

  const categoryClassMap = {
    weapon: styles.themeWeapon,
    spirit: styles.themeSpirit,
    vitality: styles.themeVitality,
  }

  return (
    <ItemTypeContext.Provider
      value={{ currentCategory, setCurrentCategory, categoryClassMap }}
    >
      {children}
    </ItemTypeContext.Provider>
  )
}

export function useItemType() {
  return useContext(ItemTypeContext)
}
