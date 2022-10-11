import styled from 'styled-components'
import { AppTheme } from '../../contexts/AppThemeContext'

export const AppContainer = styled.div<{ appTheme: AppTheme }>`
  color: ${(props) => props.theme['gray-300']};
  background: ${(props) =>
    props.appTheme === 'light'
      ? props.theme['green-300']
      : props.theme['gray-900']};

  -webkit-font-smoothing: antialiased;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  min-height: 100vh;
`

export const LayoutContainer = styled.div<{ appTheme: AppTheme }>`
  max-width: 74rem;
  margin: 7.5rem 0;
  padding: 2.5rem 10rem;
  border-radius: 8px;

  background-color: ${(props) =>
    props.appTheme === 'light' ? props.theme.white : props.theme['gray-800']};

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 2.5rem 1.4rem;

    width: 90vw;
  }
`
