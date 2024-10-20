import ItemShop from './components/ItemShop'
import { CategoryProvider } from './context/CategoryContext'
import './App.css'

function App() {
  return (
    <CategoryProvider>
      <div className="app">
        <h1>Ded the Builder</h1>
        <ItemShop />
      </div>
    </CategoryProvider>
  )
}

export default App
