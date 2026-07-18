import { createContext } from 'react'

// Exposes the current palette mode and a toggle. Consumed by the header switch.
export const ColorModeContext = createContext({
  mode: 'light',
  toggleColorMode: () => {},
})

export const STORAGE_KEY = 'color-mode'
