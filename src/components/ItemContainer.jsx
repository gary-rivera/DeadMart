import { useState, useEffect } from 'react'
import styles from '../styles/ItemContainer.module.css'
import ItemTierRow from './ItemTierRow'
import { useItemsBySlotType } from '../utils/api'
import {
  ALL_WEAPON_ITEMS,
  ALL_VITALITY_ITEMS,
  ALL_SPIRIT_ITEMS,
  itemSort,
} from 'deadlock-content'

const DEFAULT_ITEM_TYPE = 'weapon'

function ItemContainer() {
  const [currentCategory, setCurrentCategory] = useState(DEFAULT_ITEM_TYPE)

  const items = {
    weapon: ALL_WEAPON_ITEMS,
    vitality: ALL_VITALITY_ITEMS,
    spirit: ALL_SPIRIT_ITEMS,
  }

  const tieredItems = items[currentCategory].sort(itemSort).reduce(
    (acc, curr) => {
      if (acc[curr.tier.level]) {
        acc[curr.tier.level].push(curr)
      }
      return acc
    },
    {
      1: [],
      2: [],
      3: [],
      4: [],
    }
  )

  function handleCategoryChange(evt) {
    const category = evt.target.innerText.toLowerCase()
    setCurrentCategory(category)
  }

  return (
    <div>
      <div className={styles.itemContainerSlotNav}>
        <div className={styles.itemSlotNavTab} onClick={handleCategoryChange}>
          Weapon
        </div>
        <div className={styles.itemSlotNavTab} onClick={handleCategoryChange}>
          Vitality
        </div>
        <div className={styles.itemSlotNavTab} onClick={handleCategoryChange}>
          Spirit
        </div>
      </div>
      <div className={styles.itemsContainer}>
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
      </div>
    </div>
  )
}

export default ItemContainer
