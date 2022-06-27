import { createGlobalStyle } from "styled-components";

const Carousselstyle = createGlobalStyle`
.caroussel_container{
    margin: 10%;
}

.site_card {
    width: 70%;
    height: 90%;
    margin: 0 auto;
    text-align: center;
    box-shadow: 7px 6px 19px -13px rgba(0,0,0,0.75);
    border: 1px solid #b0adac;
    border-radius: 5px
}

.logo_container{
  width: 100%;
  height: 12vh;
display: flex;
}

.site_logo{
  min-width: 60%;
  max-width: 61%;
  object-fit: cover;
  margin: auto;
}

.site_title{
    margin-top: 4%;
}

`

export default Carousselstyle;