import Tippy, { tippy } from '@tippyjs/react'
import { useCategoryContext } from '../context/CategoryContext'
import styles from '../styles/Item.module.css'

function Item({ data }) {
  const { currentCategory, themeClassMap } = useCategoryContext()
  const theme = `theme${currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}`
  // debugger
  return (
    // <Tippy
    //   content={<pre>{JSON.stringify(data, null, 4)}</pre>}
    //   className={styles.tooltip}
    //   interactive={true} // Allows interaction inside the tooltip
    //   hideOnClick={false} // Prevents tooltip from hiding on click
    // >
    <div
      id={data.id}
      key={data.id}
      className={`${styles.itemCard} ${styles[themeClassMap[currentCategory]]}`}
    >
      <div className={`${styles.topHalf} ${styles[theme]}`}>
        {data.image && (
          <img
            src={data.image}
            style={{
              filter: 'invert(1)',
            }}
            className={styles.itemImage}
          />
        )}
      </div>
      <div className={`${styles.bottomHalf} ${styles[theme]}`}>
        <span className={`${styles.itemTitle} ${styles[theme]}`}>
          {data.name}
        </span>
      </div>
      {data.active && (
        <div className={styles.activeItemBadge}>
          <span>ACTIVE</span>
        </div>
      )}
    </div>
    // </Tippy>
  )
}

export default Item
