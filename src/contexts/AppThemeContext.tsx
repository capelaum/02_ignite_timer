import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

interface AppThemeProviderProps {
  children: ReactNode
}

export type AppTheme = 'light' | 'dark'

interface AppThemeContextData {
  appTheme: AppTheme
  switchTheme: () => void
}

const AppThemeContext = createContext({} as AppThemeContextData)

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const [appTheme, setAppTheme] = useState<AppTheme>('light')

  useEffect(() => {
    const theme = localStorage.getItem('@ignite-timer:theme')

    if (theme) {
      setAppTheme(theme as AppTheme)
    }
  }, [])

  function switchTheme() {
    const newTheme = appTheme === 'light' ? 'dark' : 'light'

    setAppTheme(newTheme)

    localStorage.setItem('@ignite-timer:theme', newTheme)
  }

  return (
    <AppThemeContext.Provider value={{ appTheme, switchTheme }}>
      {children}
    </AppThemeContext.Provider>
  )
}

export const useAppTheme = (): AppThemeContextData =>
  useContext(AppThemeContext)
