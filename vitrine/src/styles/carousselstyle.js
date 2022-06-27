import { createGlobalStyle } from "styled-components";

const Carousselstyle = createGlobalStyle`
.caroussel_container{
    margin-left: 10%;
    margin-right: 10%;
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
    background: linear-gradient(#691266, #b60932);
    border-radius: 5px;
    text-decoration: none;
    color: #FFFFFF;
    font-weight: bold;
    border: none;
    box-shadow: 0.5px 0.5px 2px #000;
    transition: all 200ms;
    outline: none;
    cursor: pointer;
        &:hover{
            background: linear-gradient(#b60932, #691266);
            opacity: 0.8;
            box-shadow: 9px 9px 33px -16px rgba(0,0,0,0.75);
        }

}
`

export default Carousselstyle;