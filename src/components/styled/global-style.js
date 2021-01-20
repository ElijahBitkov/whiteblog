import { createGlobalStyle } from 'styled-components'

const Globalstyle = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

    html {
        font-size: min(32px, 4vw);
    }
    body {
        font-family: 'IBM Plex Sans', sans-serif;
    }
    .wrapper {
        width: min(1280px, 96%);
        min-height: 100vh;
        margin: 0 auto;
        display: grid;
        grid-template-areas: "head" "main" "foot";
        grid-template-rows: max-content auto max-content;
    }

    .header__wrapper {
        grid-area: head;
    }
    .header {
        background-color: black;
        color: white;
    }
    .dc {
        font-size: .8rem;
        padding: 1rem .5rem;
    }
    
    .sidebar__wrapper {
        grid-area: side;
    }
    .not-work0000 {
        color: inherit;
        font-size: .8em;
        text-decoration: none;
        grid-row: 1/3;
        grid-column: 1/4;
    }
    
    .db {
        box-sizing: border-box;
        border: 1px solid black;
    }
    
    .title__header {
        font-size: 1rem;
        text-transform: uppercase;
    }

    .another-section {
        font-size: 1em;
        padding: 1em .5em;
    }
    .title__another-section {
        font-weight: 600;
        font-size: .6
    }
    .facedash {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: .5rem;
        grid-auto-rows: minmax(8rem, max-content);
        @media (max-width: 900px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 500px) {
            grid-template-columns: 1fr;
        }
    }
    .mt-d5rem {
        margin-top: .5rem;
    }
    .next {
        border: none;
        background-color: inherit;
        font-size; .8rem;
        align-self: start;
        width: 100%;
        cursor: pointer;
        background-color: rgb(150, 150, 255);
        padding: .5rem 0;
    }
    .post {
        width: min(680px, 96%);
        margin: 0 auto;
        display: grid;
        min-height: 100%;
        grid-template-rows: max-content auto max-content;
    }
    .footer {
        background-color: black;
        color: white;
    }
    .footer__wrapper {
        grid-area: foot;
    }
    p {
        font-size: .6em;
        padding: 1.2em 0;
        text-indent: 1.2em;
        line-height: 1.2em;
    }
    
`

export default Globalstyle