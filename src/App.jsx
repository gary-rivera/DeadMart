import './App.css';
import BaseItemContainer from './components/BaseItemContainer';
import {ALL_ITEMS} from 'deadlock-content';


function App() {
	// console.log('items', ALL_ITEMS)
	// const { weaponItems, vitalityItems, spiritItems } = ALL_ITEMS.reduce((acc, curr) => {
	// 	const key = `${curr.type}Items`

	// 	if (acc[key])
	// 		acc[key].push(curr)

	// 	return acc
	// }, { weaponItems: [], vitalityItems: [], spiritItems: [] })

	// console.log('items acc', {
	// 	weaponItems, vitalityItems, spiritItems
	// })
	return (
		<>

			<BaseItemContainer/>
			{/* <BaseItemContainer/>
			<BaseItemContainer/>  */}

		</>
	)
}

export default App
