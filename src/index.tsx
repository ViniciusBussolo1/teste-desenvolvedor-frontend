import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
