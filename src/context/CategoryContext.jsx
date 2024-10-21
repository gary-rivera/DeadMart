import { createContext, useState, useContext, useMemo } from 'react'

const CategoryContext = createContext()

const DEFAULT_ITEM_TYPE = 'weapon'

export function CategoryProvider({ children }) {
  const [currentCategory, setCurrentCategory] = useState(DEFAULT_ITEM_TYPE)

  const themeClassMap = {
    weapon: 'themeWeapon',
    spirit: 'themeSpirit',
    vitality: 'themeVitality',
  }

  const value = useMemo(
    () => ({
      currentCategory,
      setCurrentCategory,
      themeClassMap,
    }),
    [currentCategory]
  )

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  )
}

export function useCategoryContext() {
  return useContext(CategoryContext)
}
