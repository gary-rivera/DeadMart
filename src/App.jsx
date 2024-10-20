import ItemShop from './components/ItemShop'
import { ItemTypeProvider } from './context/ItemTypeContext'
import './App.css'

function App() {
  return (
    <ItemTypeProvider>
      <div className="app">
        <h1>Ded</h1>
        <ItemShop />
      </div>
    </ItemTypeProvider>
  )
}

export default App
