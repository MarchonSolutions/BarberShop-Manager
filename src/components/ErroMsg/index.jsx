import styled from 'styled-components';
const ErrorStyles = styled.span`
    display: flex;
    justify-content: center;
    margin: -10px;
    font-size: 12px;
`

const ErroMsg = ({children}) => {
    return <ErrorStyles>{children}</ErrorStyles>
}

export default ErroMsg