import { MoonStars, Scroll, Sun, Timer } from 'phosphor-react'
import { HeaderContainer, HeaderLeftSide } from './styles'

import { NavLink } from 'react-router-dom'
import igniteLogo from '../../assets/ignite_logo.svg'
import { useAppTheme } from '../../contexts/AppThemeContext'

export function Header() {
  const { appTheme, switchTheme } = useAppTheme()

  return (
    <HeaderContainer appTheme={appTheme}>
      <HeaderLeftSide appTheme={appTheme}>
        <img src={igniteLogo} alt="" />

        <button
          title={appTheme === 'light' ? 'Dark mode' : 'Light mode'}
          onClick={switchTheme}
        >
          {appTheme === 'light' ? <MoonStars size={24} /> : <Sun size={24} />}
        </button>
      </HeaderLeftSide>

      <nav>
        <NavLink to="/" end title="Timer">
          <Timer size={24} />
        </NavLink>

        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
