import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

interface ThemeContextDataProps {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

interface ThemeContextProvidersProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextDataProps)

export function ThemeContextProvider({ children }: ThemeContextProvidersProps) {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
