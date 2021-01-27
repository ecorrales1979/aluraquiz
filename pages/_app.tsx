import { createGlobalStyle, ThemeProvider, ThemeProps } from 'styled-components'
import { theme } from '../db.json'

import { Theme } from '../src/dtos/ThemeDTO'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }: ThemeProps<Theme>): string => theme.colors.contrastText};
    text-shadow: 1px 1px 2px ${({ theme }: ThemeProps<Theme>): string => theme.colors.shadowText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
