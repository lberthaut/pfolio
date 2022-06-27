import { createGlobalStyle } from "styled-components";

const Usercontentstyle = createGlobalStyle`
${'' /* .usercontent_container, .informations_container{
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */}

.usercontent_container{
    margin-left: 30%;
    margin-top: 1%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

 .profilepic_container{
        width: 13vw;
        height: 13vw;
        border: solid 1px #a2a2a2;
        overflow: hidden;
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        animation: 26s linear Infinite rotation;
        border-radius: 5px;
    }

    @keyframes rotation{
        0%{
            clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
        16.67%{
            clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%, 25% 0%);
        }
        33.33%{
            clip-path: polygon(100% 50%, 75% 100%, 25% 100%, 0% 50%, 25% 0%, 75% 0%);
        }
        49.9%{
            clip-path: polygon(75% 100%, 25% 100%, 0% 50%, 25% 0%, 75% 0%, 100% 50%);
        }
        66.54%{
            clip-path: polygon(25% 100%, 0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%);
        }
        83.13%{
            clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%);
        }
        100%{
            clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
    }

    .profilepic{
        width: 110%;
        transform: translate(-20px, -62Px);
    }

    .informations_container{
        margin: 2%;
        display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  height: 20vh;
  width: 80%;
    }

    .names, .age, .city, .job{
        margin-top: 1%;
        margin-bottom: 1%;
    }

    .cv_link{
        text-align: center;
        padding: 1% 0% 1% 0%;
        width: 20%;
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

export default Usercontentstyle;