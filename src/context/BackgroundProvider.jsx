import { createContext, useContext, useState } from 'react'
const BackgroundContext = createContext()

export function BackgroundProvider({ children }) {
  const [background, setBackground] = useState(getRadialGradient('weapon'))

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      <div
        style={{
          background,
          height: '100vh',
          width: '100vw',
          transition: 'background 0.5s ease-in-out',
        }}
      >
        {children}
      </div>
    </BackgroundContext.Provider>
  )
}

export function useBackground() {
  return useContext(BackgroundContext)
}

export function getRadialGradient(category) {
  const gradients = {
    weapon: `radial-gradient(
    circle,
    rgba(29, 17, 5, 1) 0%,
    rgba(121, 57, 9, 1) 0%,
    rgba(98, 57, 4, 1) 18%,
    rgba(0, 0, 0, 1) 87%
  )`,
    vitality: `radial-gradient(circle, rgba(29,17,5,1) 0%, rgba(44,121,9,1) 0%, rgba(4,98,20,1) 18%, rgba(0,0,0,1) 87%)`,
    spirit: `radial-gradient(circle, rgba(29,17,5,1) 0%, rgba(62,9,121,1) 0%, rgba(82,4,98,1) 18%, rgba(0,0,0,1) 87%)`,
  }
  return gradients[category] || gradients.weapon
}
