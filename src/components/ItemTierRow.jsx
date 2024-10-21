import Item from './Item'
import styles from '../styles/ItemShop.module.css'
import { useCategoryContext } from '../context/CategoryContext'

function TierRow({ title, items, className }) {
  const { currentCategory } = useCategoryContext()
  // tl;dr -- filter out activated items and append to end of list
  const activatedItems = []
  const sorted = items.filter((item) => {
    if (item.active) activatedItems.push(item)
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
          sorted.map((item) => (
            <Item key={item.id} data={item} className={className} />
          ))
        ) : (
          <div>No items available</div>
        )}
      </div>
    </div>
  )
}

export default TierRow
