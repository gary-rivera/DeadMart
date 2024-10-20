import ItemContainer from './components/ItemContainer'
import { ItemTypeProvider } from './context/ItemTypeContext'
import './App.css'

function App() {
  return (
    <ItemTypeProvider>
      <div className="app">
        <h1>Ded</h1>
        <ItemContainer />
      </div>
    </ItemTypeProvider>
  )
}

export default App
