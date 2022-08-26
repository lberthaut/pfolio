import { createGlobalStyle } from "styled-components";

const Indexstyle = createGlobalStyle`
body {
  margin: 0;
  font-family: Calibri, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    opacity: 0.99;
    background-color: #8f8f8f;
    position: relative;
}

.background{
  background-color: white;
  position: fixed;
  z-index: -10;
  height: 100vh;
  width: 70vw;
  border-left: 1px solid #b0adac;
  border-right: 1px solid #b0adac;
  right: 50%; left: 50%; top: 0%;
  transform: translate(-50%);
  box-shadow: 7px 6px 19px 4px rgba(0,0,0,0.75);
}
`

export default Indexstyle