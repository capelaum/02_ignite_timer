import GithubCorner from 'react-github-corner'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />

      <GithubCorner
        href="https://github.com/capelaum/02_ignite_timer"
        bannerColor="#7465d4"
        octoColor="#121214"
        size={60}
        direction="left"
        target="_blank"
        title="Capelaum's Ignite Timer Github"
      />
    </ThemeProvider>
  )
}
