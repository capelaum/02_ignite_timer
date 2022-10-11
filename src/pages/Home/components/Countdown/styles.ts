import styled from 'styled-components'
import { AppTheme } from '../../../../contexts/AppThemeContext'

export const CountdownContainer = styled.div<{ appTheme: AppTheme }>`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;

  color: ${(props) =>
    props.appTheme === 'light'
      ? props.theme['gray-600']
      : props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) =>
      props.appTheme === 'light'
        ? props.theme['gray-100']
        : props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    font-size: 6rem;
    line-height: 4rem;
    gap: 0.75rem;
  }

  @media (max-width: 576px) {
    font-size: 4rem;
    line-height: 2rem;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    font-size: 2.25rem;
    line-height: 1rem;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  overflow: hidden;

  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 6rem;
    width: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 4.25rem;
    width: 1rem;
  }
`
