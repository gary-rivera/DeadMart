import ItemShop from './components/ItemShop'
import { CategoryProvider } from './context/CategoryContext'
import { ItemsProvider } from './context/ItemsContext'
import logo from './assets/DeadMart-original.png'
import './App.css'

function App() {
  return (
    <div className="app">
      <ItemsProvider>
        <CategoryProvider>
          <div className="header">
            <img className="logo" src={logo} />
            <h1>DeadMart</h1>
          </div>
          <ItemShop />
        </CategoryProvider>
      </ItemsProvider>
    </div>
  )
}

export default App
