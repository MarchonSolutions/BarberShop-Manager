import styled from "styled-components";
import EachClient from "./EachClient";
import { Overlay } from "../../components/GlobalStyles";
import TextArea from "../../components/TextArea";
import DropDown from "../../components/DropDow";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NoClients from "./NoClients";
import ErroMsg from "../../components/ErroMsg";

const ClientListStyles = styled.div`
  width: 90%;
  height: 400px;
  padding: 16px;
  border-radius: 10px;
  background-color: #fdcb19;

  ul {
    height: 90%;
    overflow-y: scroll;
  }

  ul::-webkit-scrollbar {
    width: 0;
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    button {
      margin: 0 12px;
      padding: 8px;
      background-color: #000;
      border: none;
      border-radius: 5px;
      font-weight: 700;
      color: #fff;
      cursor: pointer;
    }

    h3 {
      text-align: center;
      font-size: 20px;
      font-family: monospace;
      color: #000000;
      text-shadow: 2px 2px 10px #0000009d;
      position: relative;
      right: 100px;
    }

    .add {
      background-color: #005700;
    }

    .finish {
      background-color: #d20101;
    }
  }
`;

const MyClients = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  width: 90%;
  background-color: #fff;
  border-radius: 10px;
  border: none;

  button {
    margin: 0 12px;
    padding: 8px;
    background-color: #000;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
  }

  .buttons {
    margin-top: 64px;
  }

  .add {
    background-color: #005700;
  }

  .finish {
    background-color: #d20101;
  }

  h2 {
    text-align: center;
    margin: 8px 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 55%;
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

  .erro {
    margin: 20px;
    color: #ff0000;
  }
`;

const ClientList = ({
  allServices,
  allClients,
  addClients,
  editClient,
  updateEditClient,
  onDeleteClient,
  addFinishedClients,
}) => {
  const [showAddClient, setShowAddClient] = useState(false);
  const [showEditClient, setShowEditClient] = useState(false);
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const [validName, setValidName] = useState(true);

  useEffect(() => {
    const findPrice = () => {
      for (let serviceObj of allServices) {
        if (serviceObj.name === service) {
          return Number(serviceObj.price);
        }
      }
      return 0;
    };
    setPrice(findPrice());
  }, [service, allServices]);

  const onEditClient = (client) => {
    updateEditClient(client);
    setShowEditClient(true);
  };

  return (
    <ClientListStyles>
      {allClients.length > 0 ? (
        <ul>
          {allClients.map((client) => {
            return (
              <EachClient
                key={client.id}
                id={client.id}
                name={client.name}
                service={client.service}
                price={client.price}
                onEditClient={onEditClient}
                onDeleteClient={onDeleteClient}
                addFinishedClients={addFinishedClients}
              />
            );
          })}
        </ul>
      ) : (
        <NoClients />
      )}
      <footer>
        <h3>{allClients.length}</h3>
        <button className="add" onClick={() => setShowAddClient(true)}>
          Adicionar
        </button>
        <button className="finish">Encerrar</button>
      </footer>
      {showAddClient && (
        <Overlay>
          <MyClients>
            <h2>Adicionar Cliente</h2>
            <div className="content">
              <TextArea
                type="text"
                placeholder="Nome"
                className="service"
                value={name}
                onChange={(value) => setName(value)}
              />
              <DropDown
                allServices={allServices}
                value={service}
                onChange={(value) => setService(value)}
              />
              {!validName && <ErroMsg className="erro">*Nome não pode estar vazio*</ErroMsg>}
            </div>
            <div className="buttons">
              <button
                className="add"
                onClick={() => {
                  if (!name) {
                    setValidName(false);
                    return;
                  } else {
                    setValidName(true);
                  }
                  if (service === "Selecione o Serviço" || service === "")
                    return;

                  addClients({
                    id: uuidv4(),
                    name: name,
                    service: service,
                    price: price,
                  });

                  setName("");
                  setService("");
                  setPrice("");
                  setShowAddClient(false);
                }}
              >
                Adicionar
              </button>
              <button
                className="finish"
                onClick={() => {
                  setName("");
                  setService("");
                  setPrice("");
                  setValidName(true)
                  setShowAddClient(false);
                }}
              >
                Cancelar
              </button>
            </div>
          </MyClients>
        </Overlay>
      )}
      {showEditClient && (
        <Overlay>
          <MyClients>
            <h2>Editar Cliente</h2>
            <div className="content">
              <TextArea
                type="text"
                placeholder="Novo Nome"
                className="service"
                value={name}
                onChange={(value) => setName(value)}
              />
              <DropDown
                allServices={allServices}
                value={service}
                onChange={(value) => setService(value)}
              />
              {!validName && <ErroMsg className="erro">*Novo nome não pode estar vazio*</ErroMsg>}
            </div>
            <div className="buttons">
              <button
                className="add"
                onClick={() => {
                  if (!name) {
                    setValidName(false);
                    return;
                  } else {
                    setValidName(true);
                  }
                  if (service === "Selecione o Serviço" || service === "")
                    return;

                  addClients({
                    id: uuidv4(),
                    name: name,
                    service: service,
                    price: price,
                  });

                  setName("");
                  setService("");
                  setPrice("");
                  updateEditClient(null);
                  setShowEditClient(false);
                }}
              >
                Salvar
              </button>
              <button
                className="finish"
                onClick={() => {
                  setName("");
                  setService("");
                  setPrice("");
                  updateEditClient(null);
                  setValidName(true)
                  setShowEditClient(false);
                }}
              >
                Cancelar
              </button>
            </div>
          </MyClients>
        </Overlay>
      )}
    </ClientListStyles>
  );
};

export default ClientList;
