import { useState, useEffect } from 'react'
import { useItemType } from '../context/ItemTypeContext'

import ItemShopNav from './ItemShopNav'
import ItemTiersContainer from './ItemTiersContainer'
import { useItemsBySlotType } from '../utils/api'
import {
  ALL_WEAPON_ITEMS,
  ALL_VITALITY_ITEMS,
  ALL_SPIRIT_ITEMS,
  itemSort,
} from 'deadlock-content'

import styles from '../styles/ItemShop.module.css'

function itemContainer() {
  const { currentCategory, setCurrentCategory } = useItemType()

  // TODO: move to context to avoid prop drilling as much?
  const items = {
    weapon: ALL_WEAPON_ITEMS,
    vitality: ALL_VITALITY_ITEMS,
    spirit: ALL_SPIRIT_ITEMS,
  }

  function handleCategoryChange(evt) {
    const category = evt.target.innerText.toLowerCase()
    setCurrentCategory(category)
  }

  return (
    <div>
      <ItemShopNav handleCategoryChange={handleCategoryChange} />
      <div className={styles.itemShop}>
        <ItemTiersContainer category={'weapon'} items={items.weapon} />
        <ItemTiersContainer category={'vitality'} items={items.vitality} />
        <ItemTiersContainer category={'spirit'} items={items.spirit} />
      </div>
    </div>
  )
}

export default itemContainer
