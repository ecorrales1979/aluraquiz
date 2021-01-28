import React from 'react'
import { createGlobalStyle, ThemeProvider, ThemeProps } from 'styled-components'
import Head from 'next/head'

import db from '../db.json'
import { Theme } from '../src/dtos/ThemeDTO'

interface AppProps {
  Component: new() => React.Component
  pageProps: never
}

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
    color: ${({ theme }: ThemeProps<Theme>): string =>
      theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  body, input, button {
    text-shadow: 1px 1px 2px ${({ theme }: ThemeProps<Theme>): string =>
      theme.colors.shadowText};
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{db.title}</title>
        <meta property="og:title" content={db.title} />
        <meta property="og:description" content={db.description} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content={db.bg} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          // eslint-disable-next-line max-len
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={db.theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
