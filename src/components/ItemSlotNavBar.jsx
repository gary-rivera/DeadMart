import styles from '../styles/ItemContainer.module.css'

function ItemSlotNavBar() {
  return (
    <div className={styles.itemContainerSlotNav}>
      <div>Weapon</div>
      <div>Vitality</div>
      <div>Spirit</div>
    </div>
  )
}

export default ItemSlotNavBar
