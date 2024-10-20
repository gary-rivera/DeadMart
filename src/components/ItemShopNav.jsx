import { useItemType } from '../context/ItemTypeContext'
import styles from '../styles/ItemShop.module.css'

function ItemShopNav({ handleCategoryChange }) {
  const { currentCategory, themeClassMap } = useItemType()

  return (
    <div className={styles.itemContainerSlotNav}>
      <div
        className={`${styles.navTab} ${styles[themeClassMap['weapon']]} ${currentCategory === 'weapon' ? styles.active : ''}`}
        onClick={handleCategoryChange}
      >
        Weapon
      </div>
      <div
        className={`${styles.navTab} ${styles[themeClassMap['vitality']]} ${currentCategory === 'vitality' ? styles.active : ''}`}
        onClick={handleCategoryChange}
      >
        Vitality
      </div>
      <div
        className={`${styles.navTab} ${styles[themeClassMap['spirit']]} ${currentCategory === 'spirit' ? styles.active : ''}`}
        onClick={handleCategoryChange}
      >
        Spirit
      </div>
    </div>
  )
}

export default ItemShopNav
