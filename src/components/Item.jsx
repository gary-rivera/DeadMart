import Tippy, { tippy } from '@tippyjs/react'
import { useItemType } from '../context/ItemTypeContext'
import styles from '../styles/Item.module.css'

function Item({ data }) {
  const { currentCategory, categoryClassMap } = useItemType()

  return (
    <Tippy
      content={<pre>{JSON.stringify(data, null, 4)}</pre>}
      className={styles.tooltip}
      interactive={true} // Allows interaction inside the tooltip
      hideOnClick={false} // Prevents tooltip from hiding on click
    >
      <div
        id={data.id}
        key={data.id}
        className={`${styles.itemCard} ${categoryClassMap[currentCategory]}`}
      >
        <div
          className={`${styles.topHalf} ${categoryClassMap[currentCategory]}`}
        >
          {/* <img src={data.image} className={styles.itemImage} /> */}
        </div>
        <div
          className={`${styles.bottomHalf} ${categoryClassMap[currentCategory]}`}
        >
          <span
            className={`${styles.itemTitle} ${categoryClassMap[currentCategory]}`}
          >
            {data.name}
          </span>
        </div>
        {data.active && (
          <div className={styles.activeItemBadge}>
            <span>ACTIVE</span>
          </div>
        )}
      </div>
    </Tippy>
  )
}

export default Item
