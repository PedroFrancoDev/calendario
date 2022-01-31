import styled from 'styled-components';
import fundo from '../img/sn-dark web.png';
import globalFundo from '../img/fundo.jpg';

export const Container = styled.section`
    height: 100vh;
    background: url(${globalFundo});
    background-size: cover;
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    

    section {
        border: 1px solid rgba(0, 0, 0, .4);
        width: 350px;
        border-radius: 0px 0px 4px 4px;
        background: rgba(0, 0, 0, .4);
        border-top: none;
    }
`;

export const Header = styled.header`
    background: url("${fundo}");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 4px 4px 0px 0px;
    
    div#fundo-cor {
        background: rgba(0, 5, 20, .5);
        width: 100%;
        height: 100%;
        padding: 25px 20px;
        border-radius: 4px 4px 0px 0px;
    }

    nav {
        display: flex;
        justify-content: space-between;
    }

    div#img {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 25px;
    }

    img {
       border-radius: 50%;
       object-fit: cover;
       height: 100px;
       width: 100px;
       margin: 30px;
   }

   div#mes {
       display: flex;
       align-items: center;
       justify-content: space-between;
   }

   svg {
       font-size: 18px;
       color: #e2e2e2;
   }

   h1 {
       font-size: 22px;
       color: #e2e2e2;
   }

   h2 {
       color: #e2e2e2;
       font-size: 18px;
   }
`;

export const Section = styled.section`
    padding: 20px;

    ul {
       display: flex;
       align-items: center;
       justify-content: center;

       li {
           margin: 10px;
           width: 100%;
           font-weight: bold;
           color: #707070;
       }
    }
    
    ul#dias {
        display: flex;
        align-items: center;
        justify-content: center;

        li {
            color: #999;
        }

        li#circlo {
            background: #c2c2c2;
            border-radius: 50%;
            color: #3f3f3f;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    > div {
        display: flex;
        align-items: center;

        border-top: 1px solid  rgba(0, 0, 0, .4);
        padding: 10px;
    }

    footer {
        display: flex;
        flex-direction: column;
    }

    img {
        border-radius: 50%;
        height: 40px;
        width: 40px;
        object-fit: cover;
        margin-right: 15px;
    }

    strong {
        font-size: 16px;
        color: #acacac;
    }

    span {
        font-size: 14px;
        margin-top: 5px;
        color: #999;
    }
`;