import {styled} from 'styled-components';

const NoClientsStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90%;
    padding: 12px;

    img {
        width: 100%;
        height: 100%;
    }

    @media screen and (min-width: 600px){
        img {
            width: 398px;
            height: 398px;
        }
    }   
`

const NoClients = () => {
    return (
        <NoClientsStyles>
            <img src="/images/noclients-warning.png" alt="imagem de nenhum cliente adicionado" />
        </NoClientsStyles>
    )
}

export default NoClients