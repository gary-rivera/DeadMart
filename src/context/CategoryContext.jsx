import { createContext, useState, useContext } from 'react'

const CategoryContext = createContext()

const DEFAULT_ITEM_TYPE = 'weapon'

export function CategoryProvider({ children }) {
  const [currentCategory, setCurrentCategory] = useState(DEFAULT_ITEM_TYPE)

  const themeClassMap = {
    weapon: 'themeWeapon',
    spirit: 'themeSpirit',
    vitality: 'themeVitality',
  }

  return (
    <CategoryContext.Provider
      value={{ currentCategory, setCurrentCategory, themeClassMap }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export function useCategoryContext() {
  return useContext(CategoryContext)
}
