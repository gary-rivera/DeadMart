import { useState, useEffect } from 'react'
import { useItemType } from '../context/ItemTypeContext'

import ItemTiersContainer from './ItemTiersContainer'
import ItemTierRow from './ItemTierRow'
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
      <div className={styles.itemContainerSlotNav}>
        <div className={styles.navTab} onClick={handleCategoryChange}>
          Weapon
        </div>
        <div className={styles.navTab} onClick={handleCategoryChange}>
          Vitality
        </div>
        <div className={styles.navTab} onClick={handleCategoryChange}>
          Spirit
        </div>
      </div>
      <div className={styles.itemShop}>
        <ItemTiersContainer category={'weapon'} items={items.weapon} />
        <ItemTiersContainer category={'vitality'} items={items.vitality} />
        <ItemTiersContainer category={'spirit'} items={items.spirit} />
      </div>
    </div>
  )
}

export default itemContainer
