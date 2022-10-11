import styled from 'styled-components'
import { AppTheme } from '../../contexts/AppThemeContext'

export const HeaderContainer = styled.header<{ appTheme: AppTheme }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 45rem;

  margin-bottom: 3.5rem;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) =>
        props.appTheme === 'light'
          ? props.theme['gray-900']
          : props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      transition: all 0.2s ease;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }

  @media (max-width: 1200px) {
    min-width: 100%;
  }
`

export const HeaderLeftSide = styled.div<{ appTheme: AppTheme }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;

  button {
    width: 3rem;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;

    color: ${(props) =>
      props.appTheme === 'light'
        ? props.theme['gray-900']
        : props.theme['gray-100']};

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    transition: all 0.2s ease;

    &:hover {
      color: ${(props) => props.theme['green-500']};
    }
  }
`
