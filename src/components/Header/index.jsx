import styled from "styled-components"

const HeaderStyles = styled.header`
    width: 100vw;
    max-width: 100%;

    background-color: transparent;

    img {
        display: block;
        margin: auto;
        height: 75px;
        width: 75px;
    }
`

const Header = () => {
    return (
        <HeaderStyles>
            <img src="/images/barbermanager-logo.png" alt="logo" />
        </HeaderStyles>
    )
}

export default Header