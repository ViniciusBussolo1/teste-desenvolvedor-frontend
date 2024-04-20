import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    /* box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']}; */
  }

  body {
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-200']};
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;

    font-size: 1rem;
    font-weight: 400;
  }

  a {text-decoration: none}

  ::-webkit-scrollbar {
  width: 10px;
  border: none
  
}

/* Track */
::-webkit-scrollbar-track {
  margin: .5rem .5rem;
  
  background: ${(props) => props.theme['gray-700']};
  border-radius: 10px;

}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme['gray-400']};
  border-radius: 10px;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${(props) => props.theme['gray-500']};
}
`
