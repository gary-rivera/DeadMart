import ItemTierRow from './ItemTierRow'
import styles from '../styles/ItemContainer.module.css'
import styles from '../styles/ItemShop.module.css'
import { useItemType } from '../context/ItemTypeContext'

function ItemTiersContainer({ category, items }) {
  const { categoryClassMap } = useItemType()

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
    <div className={`${styles.itemsContainer} ${categoryClassMap[category]}`}>
      <ItemTierRow
        title="$500"
        items={tieredItems[1]}
        className={`${styles.tierVariant1} ${categoryClassMap[category]}`}
      />
      <ItemTierRow
        title="$1250"
        items={tieredItems[2]}
        className={`${styles.tierVariant2} ${categoryClassMap[category]}`}
      />
      <ItemTierRow
        title="$3000"
        items={tieredItems[3]}
        className={`${styles.tierVariant1} ${categoryClassMap[category]}`}
      />
      <ItemTierRow
        title="$6200"
        items={tieredItems[4]}
        className={`${styles.tierVariant2} ${categoryClassMap[category]}`}
      />
    </div>
  )
}

export default ItemTiersContainer
