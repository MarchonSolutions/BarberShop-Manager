import styled from "styled-components";
import { Overlay } from "../../components/GlobalStyles";
import EachService from "./EachService";
import { useState } from "react";
import TextArea from "../../components/TextArea";
import { v4 as uuidv4 } from "uuid";
import ErroMsg from "../../components/ErroMsg";
import EnterPassword from "../../components/EnterPassword";

const SettingsStyles = styled.div`
  width: 90%;
  height: 400px;
  padding: 16px;
  border-radius: 10px;
  background-color: #fdcb19;

  h1 {
    text-align: center;
  }

  form {
    display: block;
    margin: 0 auto;

    .btn-form {
      display: flex;
      justify-content: center;
    }
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

  .service {
    display: block;
    margin: 16px auto;
    border: none;
    border-bottom: 2px solid #000;
    background-color: transparent;
    padding: 4px;
    text-align: center;
  }

  .service::placeholder {
    color: #000000;
    text-align: center;
    font-weight: 700;
  }

  .set-password {
    margin-top: 8px;
    
    button {
      display: block;
      margin: auto;
    }
  }
`;

const MyServices = styled.div`
  display: block;
  margin: auto;
  height: 400px;
  width: 90%;
  background-color: #fff;
  border-radius: 10px;
  border: none;

  ul {
    height: 79%;
    overflow-y: scroll;
    margin: 2px;
  }

  ul::-webkit-scrollbar {
    width: 0;
  }

  button {
    display: block;
    margin: auto;
    background-color: #d20101;
  }

  h2 {
    text-align: center;
    margin: 8px 0;
  }
`;

const BarberSettings = ({
  mainPassword,
  addServices,
  addPassword,
  allServices,
  onDeleteService,
  access,
  setAccess
}) => {
  const [showServicesOverlay, setShowServicesOverlay] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [validService, setValidService] = useState(true);
  const [validPrice, setValidPrice] = useState(true);
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  
  return (
    <SettingsStyles>
      <h1>CONFIGURE SEUS SERVIÇOS</h1>
      <form>
        <TextArea
          type="text"
          placeholder="Adicionar Serviço"
          className="service"
          value={name}
          onChange={(value) => setName(value)}
        />
        {!validService && <ErroMsg>*Serviço não pode estar vazio*</ErroMsg>}
        <TextArea
          type="number"
          placeholder="Adicionar Preço"
          className="service"
          value={price}
          onChange={(value) => setPrice(value)}
        />
        {!validPrice && <ErroMsg>*Preço não pode estar vazio*</ErroMsg>}
        <div className="btn-form">
          <button
            style={{ backgroundColor: "#005700" }}
            onClick={(e) => {
              e.preventDefault();
              if(!name) {
                setValidService(false)
                return
              } else {
                setValidService(true)
              }
              if(!price) {
                setValidPrice(false)
                return
              } else {
                setValidPrice(true)
              }
              addServices({
                id: uuidv4(),
                name: name,
                price: price,
              });
              setName("");
              setPrice("");
              setValidService(true)
            }}
          >
            Registrar
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowServicesOverlay(true);
            }}
          >
            Meus Serviços
          </button>
        </div>
      </form>
      {!mainPassword ? (
        <div className="set-password">
          <h1>REGISTRE UMA SENHA</h1>
          <TextArea
            type="password"
            placeholder="Nova Senha"
            className="service"
            value={newPassword}
            onChange={newPassword => setNewPassword(newPassword)}
          />
          <TextArea
            type="password"
            placeholder="Confirmar Senha"
            className="service"
            value={confirmPassword}
            onChange={confirmPassword => setConfirmPassword(confirmPassword)}
          />
          <button
            onClick={() => {
              if(newPassword && newPassword === confirmPassword) {
                addPassword(newPassword)
                setNewPassword('')
                setConfirmPassword('')
              } else {
                return
              }
            }}
          >
            Salvar
          </button>
        </div>
      ) : (
        <div className="set-password">
          <h1>REDEFINIR SENHA</h1>
          <TextArea
            type="password"
            placeholder="Senha atual"
            className="service"
            value={enteredPassword}
            onChange={enteredPassword => setEnteredPassword(enteredPassword)}
          />
          <TextArea
            type="password"
            placeholder="Nova Senha"
            className="service"
            value={newPassword}
            onChange={newPassword => setNewPassword(newPassword)}
          />
          <button
            onClick={() => {
              if(enteredPassword === mainPassword) {
                addPassword(newPassword)
                setNewPassword('')
                setEnteredPassword('')
              } else {
                return
              }
            }}
          >
            Redefinir
          </button>
        </div>
      )}
      {showServicesOverlay && (
        <Overlay>
          <MyServices>
            <h2>Meus Serviços</h2>
            <ul>
              {allServices.map((service) => (
                <EachService
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  price={service.price}
                  onDeleteService={onDeleteService}
                />
              ))}
            </ul>
            <button onClick={() => setShowServicesOverlay(false)}>
              Fechar
            </button>
          </MyServices>
        </Overlay>
      )}
      {!access && mainPassword &&
        <EnterPassword
          mainPassword={mainPassword}
          access={access}
          setAccess={setAccess}
        />
      }
    </SettingsStyles>
  );
};

export default BarberSettings;
