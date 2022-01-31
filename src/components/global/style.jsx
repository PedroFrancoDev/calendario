import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    html, body {
        height: 100vh;
        font-family: roboto;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
    }
`;