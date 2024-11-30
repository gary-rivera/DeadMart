import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { getItemsBySlotType, useSWRItemsBySlotType } from '../utils/api'
import {
  ALL_WEAPON_ITEMS,
  ALL_VITALITY_ITEMS,
  ALL_SPIRIT_ITEMS,
} from 'deadlock-content'

const ItemsContext = createContext()

export function ItemsProvider({ children }) {
  const [weaponItems, setWeaponItems] = useState(ALL_WEAPON_ITEMS)
  const [vitalityItems, setVitalityItems] = useState(ALL_VITALITY_ITEMS)
  const [spiritItems, setSpiritItems] = useState(ALL_SPIRIT_ITEMS)
  const [isLoading, setIsLoading] = useState(false) // Not used as of now..
  const [icons, setIcons] = useState({
    rejuvenator: 'https://assets.deadlock-api.com/icons/rejuvenator.svg',
    spirit: 'https://assets.deadlock-api.com/icons/icon_spirit.svg',
    vitality: 'https://assets.deadlock-api.com/icons/icon_fortitude.svg',
    weapon: 'https://assets.deadlock-api.com/icons/icon_courage.svg',
  })

  useEffect(() => {
    const storedIcons = localStorage.getItem('icons')
    if (storedIcons) {
      setIcons(JSON.parse(storedIcons))
    }
  }, [])

  useEffect(() => {
    const fetchWeapons = async () => {
      setIsLoading(true)
      try {
        const apiWeaponItems = await getItemsBySlotType('weapon')
        const mergedWeaponItems = mergeLibraryWithAPI(
          weaponItems,
          apiWeaponItems
        )
        setWeaponItems(mergedWeaponItems)
      } catch (error) {
        console.error('Error fetching weapon items:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchWeapons()
  }, [])

  // Background fetching for Spirit and Vitality in parallel
  useEffect(() => {
    const fetchSpiritAndVitality = async () => {
      try {
        const [apiSpiritItems, apiVitalityItems] = await Promise.all([
          getItemsBySlotType('spirit'),
          getItemsBySlotType('vitality'),
        ])

        const mergedSpiritItems = mergeLibraryWithAPI(
          spiritItems,
          apiSpiritItems
        )
        const mergedVitalityItems = mergeLibraryWithAPI(
          vitalityItems,
          apiVitalityItems
        )

        setSpiritItems(mergedSpiritItems)
        setVitalityItems(mergedVitalityItems)
      } catch (error) {
        console.error('Error fetching spirit or vitality items:', error)
      }
    }

    // Trigger background fetching after weapons load
    if (!isLoading) {
      fetchSpiritAndVitality()
    }
  }, [isLoading])

  const value = useMemo(
    () => ({
      icons,
      weaponItems,
      spiritItems,
      vitalityItems,
      isLoading,
    }),
    [weaponItems, spiritItems, vitalityItems, isLoading]
  )

  return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
}

const mergeLibraryWithAPI = (libraryItems, apiItems) => {
  return libraryItems.map((libItem) => {
    // debugger
    const apiItem = apiItems.find((api) => api.id === libItem.id)
    return apiItem ? { ...libItem, image: apiItem.image } : libItem
  })
}

export function useItemsContext() {
  return useContext(ItemsContext)
}
