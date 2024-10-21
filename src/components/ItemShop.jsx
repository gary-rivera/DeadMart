import { useState, useEffect } from 'react'
import { useCategoryContext } from '../context/CategoryContext'
import { useItemsContext } from '../context/ItemsContext'

import ItemShopNav from './ItemShopNav'
import ItemTiersContainer from './ItemTiersContainer'
import {
  ALL_WEAPON_ITEMS,
  ALL_VITALITY_ITEMS,
  ALL_SPIRIT_ITEMS,
  itemSort,
} from 'deadlock-content'

import styles from '../styles/ItemShop.module.css'

function itemContainer() {
  const { currentCategory, setCurrentCategory } = useCategoryContext()
  const { weaponItems, spiritItems, vitalityItems } = useItemsContext()

  function handleCategoryChange(evt) {
    const category = evt.target.innerText.toLowerCase()
    setCurrentCategory(category)
  }

  return (
    <div>
      <ItemShopNav handleCategoryChange={handleCategoryChange} />
      <div className={styles.itemShop}>
        <ItemTiersContainer category={'weapon'} items={weaponItems} />
        <ItemTiersContainer category={'vitality'} items={vitalityItems} />
        <ItemTiersContainer category={'spirit'} items={spiritItems} />
      </div>
    </div>
  )
}

export default itemContainer
