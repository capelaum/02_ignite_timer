import GithubCorner from 'react-github-corner'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { useAppTheme } from '../../contexts/AppThemeContext'
import { AppContainer, LayoutContainer } from './styles'

export function DefaultLayout() {
  const { appTheme } = useAppTheme()

  return (
    <AppContainer appTheme={appTheme}>
      <LayoutContainer appTheme={appTheme}>
        <Header />
        <Outlet />
      </LayoutContainer>

      <GithubCorner
        href="https://github.com/capelaum/02_ignite_timer"
        bannerColor={appTheme === 'light' ? '#FFF' : '#00B37E'}
        octoColor={appTheme === 'light' ? '#00B37E' : '#121214'}
        size={60}
        direction="left"
        target="_blank"
        title="Capelaum's Ignite Timer Github"
      />
    </AppContainer>
  )
}
