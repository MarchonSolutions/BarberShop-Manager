import styled from "styled-components"
import { Overlay } from "../GlobalStyles"
import TextArea from "../TextArea"
import { Link } from "react-router-dom"
import { useState } from "react"

const PasswordStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30%;
    width: 90%;
    background-color: #fff;
    border-radius: 10px;
    padding: 12px;

    span {
        font-size: 1.5em;
        margin-bottom: 16px;
    }

    .enter-password {
        width: 80%;
        padding: 8px;
        border: 1px solid black;
        text-align: center;
        border-radius: 10px;
    }

    .buttons-area {
        margin-top: 12px;
    }

    button {
    margin: 12px;
    padding: 8px;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`

const EnterPassword = ({access, setAccess, mainPassword}) => {

    const [enteredPassword, setEnteredPassword] = useState('')

    return (
       <Overlay>
        <PasswordStyles>
            <span>Acesso Privado</span>
            <TextArea
                type='password'
                placeholder='Digite sua senha de acesso...'
                className='enter-password'
                value={enteredPassword}
                onChange={enteredPassword => setEnteredPassword(enteredPassword)}
            />
            <div className="buttons-area">
                <button 
                    style={{ backgroundColor: "#005700" }}
                    onClick={() => {
                        if(enteredPassword === mainPassword) {
                            setAccess(true)
                        }
                    }}
                >
                    Entrar
                </button>
                <Link to={'/'}>
                    <button
                        style={{ backgroundColor: "#ff0000" }}
                    >
                        Cancelar
                    </button>
                </Link>
            </div>
        </PasswordStyles>
       </Overlay>
    )
}

export default EnterPassword