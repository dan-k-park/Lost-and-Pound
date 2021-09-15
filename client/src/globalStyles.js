import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
*,*::before,*::after{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: Helvetica
}

body: {
  margin:0;
  padding:0;
  border: 0;
  outline: 0;
  overflow-x: hidden;
  background: #e1e8ed
}
`;
