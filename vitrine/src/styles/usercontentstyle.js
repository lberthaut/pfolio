import { createGlobalStyle } from "styled-components";

const Usercontentstyle = createGlobalStyle`


.usercontent_container{
    margin-left: 13vw;
    padding-top: 5vh;
  width: 60%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}

 .profilepic_container{
        width: 16vw;
        height: 16vw;
        border: solid 1px #a2a2a2;
        overflow: hidden;
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        animation: 26s linear Infinite rotation;
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
        transform: translate(-8%, -15%);
    }

    .user_infos{
        text-align: center;
        width: 30%;
    }

.age, .city, .job{
        margin: 0 auto;
        width: 50%;
        line-height: 35px;
    }

    .names{
        font-size: 38px;
        font-weight: bold;
        margin: 0 auto;
        width: 80%;
    }

    .cv_link{
        text-align: center;
        padding: 3% 5% 3% 5%;
        width: 20%;
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

    .modal_renovations{
        margin: 0 auto;
        background-color: red;
        border-radius: 5px;
        box-shadow: 18px 18px 50px 15px rgba(0,0,0,0.75);
        z-index: 10;
        width: 40vw;
        text-align: center;
    }
`

export default Usercontentstyle;