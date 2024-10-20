import styles from '../styles/Item.module.css'
import Tippy, { tippy } from '@tippyjs/react'

function Item({ data }) {
  return (
    <Tippy
      content={<pre>{JSON.stringify(data, null, 4)}</pre>}
      className={styles.tooltip}
      interactive={true} // Allows interaction inside the tooltip
      hideOnClick={false} // Prevents tooltip from hiding on click
    >
      <div id={data.id} key={data.id} className={styles.itemCard}>
        <div className={styles.topHalf}>
          {/* <img src={data.image} className={styles.itemImage} /> */}
        </div>
        <div className={styles.bottomHalf}>
          <span className={styles.itemTitle}>{data.name}</span>
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
