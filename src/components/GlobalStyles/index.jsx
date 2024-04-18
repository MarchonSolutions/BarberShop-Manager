import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        outline: none;
    }
`

export const MainContent = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 74vh;
`

export const Overlay = styled.div`
    display: grid;
    place-items: center;
    background-color: rgba(0, 0, 0, 0.91);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;
    place-items: center;
    z-index: 1;
`

export default GlobalStyles