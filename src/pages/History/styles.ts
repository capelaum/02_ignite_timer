import styled from 'styled-components'
import { AppTheme } from '../../contexts/AppThemeContext'

export const HistoryContainer = styled.main<{ appTheme: AppTheme }>`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-self: stretch;

  h1 {
    font-size: 1.5rem;

    color: ${(props) =>
      props.appTheme === 'light'
        ? props.theme['gray-900']
        : props.theme['gray-100']};
  }
`
export const HistoryList = styled.div<{ appTheme: AppTheme }>`
  overflow: auto;
  margin-top: 2rem;
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      color: ${(props) =>
        props.appTheme === 'light'
          ? props.theme['gray-900']
          : props.theme['gray-100']};

      background-color: ${(props) =>
        props.appTheme === 'light'
          ? props.theme['green-300']
          : props.theme['gray-600']};

      padding: 1rem;
      text-align: left;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      color: ${(props) =>
        props.appTheme === 'light'
          ? props.theme['gray-900']
          : props.theme['gray-100']};

      background-color: ${(props) =>
        props.appTheme === 'light'
          ? props.theme['gray-100']
          : props.theme['gray-700']};

      border-top: 4px solid
        ${(props) =>
          props.appTheme === 'light'
            ? props.theme.white
            : props.theme['gray-800']};

      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 40%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

export const DataStart = styled.td`
  min-width: 200px;
`

export const DataDuration = styled.td`
  min-width: 120px;
`

export const DataStatus = styled.td`
  min-width: 180px;
`

interface StatusProps {
  statusColor: 'green' | 'red' | 'yellow'
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme[`${props.statusColor}-500`]};
  }
`
