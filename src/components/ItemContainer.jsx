import { useState, useEffect } from 'react'
import styles from '../styles/ItemContainer.module.css'
import ItemTierRow from './ItemTierRow'
import { useItemsBySlotType } from '../utils/api'
import {
  ALL_WEAPON_ITEMS,
  ALL_VITALITY_ITEMS,
  ALL_SPIRIT_ITEMS,
} from 'deadlock-content'

function ItemContainer() {
  const [currentCategory, setCurrentCategory] = useState('weapon')
  const [items, setItems] = useState({ weapon: [], vitality: [], spirit: [] })

  const {
    data: weaponItems,
    error: weaponError,
    isValidating: weaponIsLoading,
  } = useItemsBySlotType('weapon')
  const { data: vitalityItems, error: vitalityError } =
    useItemsBySlotType('vitality')
  const { data: spiritItems, error: spiritError } = useItemsBySlotType('spirit')

  useEffect(() => {
    setItems((prevItems) => ({
      weapon: weaponItems || prevItems.weapon,
      vitality: vitalityItems || prevItems.vitality,
      spirit: spiritItems || prevItems.spirit,
    }))
  }, [weaponItems, vitalityItems, spiritItems])

  const tiered = ALL_WEAPON_ITEMS.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  ).reduce(
    (acc, curr) => {
      // debugger
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
          items={tiered[1]}
          className={styles.tierOne}
        />
        <ItemTierRow
          title="$1250"
          items={tiered[2]}
          className={styles.tierTwo}
        />
        <ItemTierRow
          title="$3000"
          items={tiered[3]}
          className={styles.tierThree}
        />
        <ItemTierRow
          title="$6200"
          items={tiered[4]}
          className={styles.tierFour}
        />
      </div>
    </div>
  )
}

export default ItemContainer
