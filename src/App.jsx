import { useState, useEffect } from 'react'
import ItemShop from './components/ItemShop'
import { CategoryProvider } from './context/CategoryContext'
import { ItemsProvider } from './context/ItemsContext'
import './App.css'

function App() {
  return (
    <ItemsProvider>
      <CategoryProvider>
        <div className="app">
          <h1>DingleLock</h1>
          <ItemShop />
        </div>
      </CategoryProvider>
    </ItemsProvider>
  )
}

export default App
