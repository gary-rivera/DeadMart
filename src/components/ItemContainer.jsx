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

import styles from '../styles/ItemContainer.module.css'

function ItemContainer() {
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
      <ItemTiersContainer
        category={currentCategory}
        items={items[currentCategory]}
      />
      {/* <div className={styles.itemsContainer}>
        <ItemTierRow
          title="$500"
          items={tieredItems[1]}
          className={styles.tierOne}
        />
        <ItemTierRow
          title="$1250"
          items={tieredItems[2]}
          className={styles.tierTwo}
        />
        <ItemTierRow
          title="$3000"
          items={tieredItems[3]}
          className={styles.tierThree}
        />
        <ItemTierRow
          title="$6200"
          items={tieredItems[4]}
          className={styles.tierFour}
        />
      </div> */}
    </div>
  )
}

export default ItemContainer
