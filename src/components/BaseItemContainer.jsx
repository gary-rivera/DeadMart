import styles from '../styles/BaseItemContainer.module.css'

// TODO: create tier sections
// TODO: split passed down items into tiers
// TODO: render items to respective tier sections
function BaseItemContainer() {
	return(
		<div className={styles.BaseItemContainer}>
			<div className={`${styles.tierOptionA} ${styles.tierRow}`}>
				<div className={styles.sidebar}>tier 1</div>
			</div>
			<div className={`${styles.tierOptionB} ${styles.tierRow}`}>
				<div>tier 2</div>
			</div>
			<div className={`${styles.tierOptionA} ${styles.tierRow}`}>
				<div>tier 3</div>
			</div>
			<div className={`${styles.tierOptionB} ${styles.tierRow}`}>
				<div>tier 4</div>
			</div>
		</div>
	)
}

export default BaseItemContainer
