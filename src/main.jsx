import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BackgroundProvider } from './context/BackgroundProvider'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackgroundProvider>
      <App />
    </BackgroundProvider>
  </StrictMode>
)
