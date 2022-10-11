import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    color: ${(props) => props.theme['gray-300']};
    background: ${(props) => props.theme['gray-900']};

    -webkit-font-smoothing: antialiased;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
  }

  body,
  input,
  textarea,
  button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    border: none;
  }

  [disabled] {
    cursor: not-allowed;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }
`
