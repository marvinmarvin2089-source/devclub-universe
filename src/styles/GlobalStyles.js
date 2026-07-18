import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html{
    scroll-behavior:smooth;
  }

  body{
    background:${({ theme }) => theme.colors.background};
    color:${({ theme }) => theme.colors.white};
    font-family:Arial, Helvetica, sans-serif;
    overflow-x:hidden;
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  button{
    cursor:pointer;
    border:none;
    background:none;
  }

`;

export default GlobalStyles;