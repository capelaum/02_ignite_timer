import styled from 'styled-components'
import { AppTheme } from '../../../../contexts/AppThemeContext'

export const FormContainer = styled.div<{ appTheme: AppTheme }>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  color: ${(props) =>
    props.appTheme === 'light'
      ? props.theme['gray-900']
      : props.theme['gray-100']};

  font-weight: bold;
  font-size: 1.125rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const BaseInput = styled.input<{ appTheme: AppTheme }>`
  background: transparent;
  height: 2.5rem;
  padding: 0 0.5rem;

  border: none;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  color: ${(props) =>
    props.appTheme === 'light'
      ? props.theme['gray-600']
      : props.theme['gray-100']};

  font-weight: bold;
  font-size: 1.125rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
