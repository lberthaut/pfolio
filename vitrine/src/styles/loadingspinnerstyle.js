import { createGlobalStyle } from "styled-components";

const Loadingspinnerstyle = createGlobalStyle`

.loadingspinner{
    height: 100vh;
    width: 100vw;
    background-color: white;
    -webkit-animation: endingloading 5s forwards ease-in;
    animation: endingloading 5s forwards ease-in;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
}

.dotbars_loadingspinner {
  width: 40px;
  height: 26px;
  --c: linear-gradient(currentColor 0 0);
  background:
    var(--c) 0    100%,
    var(--c) 50%  100%,
    var(--c) 100% 100%;
  background-size:8px calc(100% - 4px);
  background-repeat: no-repeat;
  position: relative;
}
.dotbars_loadingspinner:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background:currentColor;
  left:0;
  top:0;
  animation: 
    db-1 1.5s  linear infinite alternate,
    db-2 0.75s cubic-bezier(0,200,.8,200) infinite,
    endingloading 3s 0;
}


@keyframes db-1 {
  100% {left:calc(100% - 8px)}
}

@keyframes db-2 {
  100% {top:-0.1px}
}

@keyframes endingloading{
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
        z-index: -100;
    }
}


`

export default Loadingspinnerstyle;