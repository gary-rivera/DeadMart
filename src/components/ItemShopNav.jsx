import { useCategoryContext } from '../context/CategoryContext'
import { useItemsContext } from '../context/ItemsContext'
import styles from '../styles/ItemShop.module.css'

function ItemShopNav({ handleCategoryChange }) {
  const { currentCategory, themeClassMap } = useCategoryContext()
  const { icons } = useItemsContext()

  return (
    <div className={styles.itemContainerSlotNav}>
      <div
        className={`${styles.navTab} ${styles[themeClassMap['weapon']]} ${currentCategory === 'weapon' ? styles.active : ''}`}
        onClick={handleCategoryChange}
      >
        <img className={styles.categoryIcon} src={icons.weapon} />
        <span>Weapon</span>
      </div>
      <div
        className={`${styles.navTab} ${styles[themeClassMap['vitality']]} ${currentCategory === 'vitality' ? styles.active : ''}`}
        onClick={handleCategoryChange}
      >
        <img className={styles.categoryIcon} src={icons.vitality} />
        <span>Vitality</span>
      </div>
      <div
        className={`${styles.navTab} ${styles[themeClassMap['spirit']]} ${currentCategory === 'spirit' ? styles.active : ''}`}
        onClick={handleCategoryChange}
      >
        <img className={styles.categoryIcon} src={icons.spirit} />
        <span>Spirit</span>
      </div>
    </div>
  )
}

export default ItemShopNav
