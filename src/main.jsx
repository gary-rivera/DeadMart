import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RuioContext from 'ruio'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RuioContext>
      <App />
    </RuioContext>
  </StrictMode>
)
