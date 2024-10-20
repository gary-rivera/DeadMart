import { useState, useEffect } from 'react'
import ItemTierRow from './ItemTierRow'
import styles from '../styles/ItemShop.module.css'
import { useItemType } from '../context/ItemTypeContext'

function ItemTiersContainer({ category, items, active }) {
  const { currentCategory, themeClassMap } = useItemType()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (currentCategory === category) setIsActive(true)
    else setIsActive(false)
  }, [currentCategory])

  const tieredItems = items
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    .reduce(
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

  return (
    <div
      className={`${styles.itemsContainer} ${isActive ? styles.active : styles.inactive} ${styles[themeClassMap[currentCategory]]}`}
    >
      {[
        { title: '$500', tier: 1 },
        { title: '$1250', tier: 2 },
        { title: '$3000', tier: 3 },
        { title: '$6200', tier: 4 },
      ].map((e, i) => {
        const classVariants = [styles.tierVariant1, styles.tierVariant2]
        return (
          <ItemTierRow
            key={`tier${e.tier}`}
            title={e.title}
            items={tieredItems[e.tier]}
            className={`${classVariants[i % 2]} ${styles[themeClassMap[currentCategory]]}`}
          />
        )
      })}
    </div>
  )
}

export default ItemTiersContainer
