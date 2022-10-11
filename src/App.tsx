import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AppThemeProvider } from './contexts/AppThemeContext'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppThemeProvider>
        <BrowserRouter>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
        </BrowserRouter>

        <GlobalStyle />
      </AppThemeProvider>
    </ThemeProvider>
  )
}
