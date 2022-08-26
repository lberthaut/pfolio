import { createGlobalStyle } from "styled-components";

const Carousselstyle = createGlobalStyle`

.caroussel_title{
text-align: center;
margin: 4% 0% 1% 0%;
font-size: 2.3vw;
}

.caroussel_container{
    margin: 2% 10% 2% 10%;
}

.site_card {
    width: 80%;
    height: 99%;
    margin: 0 auto;
    text-align: center;
    box-shadow: 7px 6px 19px -13px rgba(0,0,0,0.75);
    border: 1px solid #b0adac;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
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
    margin-bottom: 3%;
}

.site_technos{
    font-size: 12px;
    margin: 1% 0% 1% 0%;
}

.site_description_container{
    margin: 2% 2% 1% 2%;
    background-color: #F1F1F1;
    height: 40%;
    text-align: center;
    display: table;
}

.site_description{
    font-size: 14px;
    vertical-align:middle;
    display: table-cell;
}

.links_container{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 2%;
}

.site_link, .repo_link{
    padding: 1.5% 4% 1.5% 4%;
    background: linear-gradient(180deg, rgba(177,177,177,1) 3%, rgba(74,74,74,1) 69%);
    text-decoration: none;
    color: #FFFFFF;
    font-weight: bold;
    border: none;
    transition: all 400ms;
    outline: none;
    cursor: pointer;
        &:hover{
            background: linear-gradient((360deg, rgba(74,74,74,1) 3%, rgba(177,177,177,1) 69%));
            opacity: 0.8;
            box-shadow: 9px 9px 33px -16px rgba(0,0,0,0.75);
        }

}
`

export default Carousselstyle;