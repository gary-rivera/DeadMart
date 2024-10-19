import styles from '../styles/ItemContainer.module.css'
import { fetchItemsBySlotType } from '../utils/api'
import ItemTierRow from './ItemTierRow'

function ItemContainer() {
  const { data: items, error } = fetchItemsBySlotType('weapon')

  if (error) return <div>Error loading items</div>
  if (!items || !items.length) return <div>Loading...</div>
  const tiered = items
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    .reduce(
      (acc, curr) => {
        if (curr.shopable && acc[curr.item_tier]) {
          acc[curr.item_tier].push(curr)
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
    <div className={styles.itemsContainer}>
      <ItemTierRow
        title="$500"
        items={tiered[1]}
        className={styles.tierOptionA}
      />
      <ItemTierRow
        title="$1250"
        items={tiered[2]}
        className={styles.tierOptionB}
      />
      <ItemTierRow
        title="$3000"
        items={tiered[3]}
        className={styles.tierOptionA}
      />
      <ItemTierRow
        title="$6200"
        items={tiered[4]}
        className={styles.tierOptionB}
      />
    </div>
  )
}

export default ItemContainer
