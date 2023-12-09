import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
     * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
      font-family: 'Poppins', sans-serif;
      line-height: 1.5;
      font-weight: 500;

      color: #242424;


      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    button{
      cursor: pointer;
      font-size : 1.4rem;
      border: none;
      background: transparent;
      transition: border-color 0.25s;
      border-radius: 4px;
      };
    
`;
