import { act } from 'react'
import styles from '../styles/ItemContainer.module.css'
import Item from './Item'

function TierRow({ title, items, className }) {
  // tl;dr -- filter out activated items and append to end of list
  const activatedItems = []
  const sorted = items.filter((item) => {
    if (item.activation !== 'passive') activatedItems.push(item)
    else return item
  })
  sorted.push(...activatedItems)

  return (
    <div className={`${className} ${styles.tierRow}`}>
      <div className={styles.sidebar}>
        <span>{title}</span>
      </div>
      <div className={styles.itemsListContainer}>
        {sorted.length ? (
          sorted.map((item) => <Item key={item.id} data={item} />)
        ) : (
          <div>No items available</div>
        )}
      </div>
    </div>
  )
}

export default TierRow