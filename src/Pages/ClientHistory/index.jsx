import styled from "styled-components";
import EachClient from "../ClientList/EachClient";
import FinishedClient from "./FinishedClient";
import { useEffect, useState } from "react";
import EnterPassword from "../../components/EnterPassword";

const HistoryStyles = styled.div`
  width: 90%;
  height: 400px;
  padding: 16px;
  border-radius: 10px;
  background-color: #fdcb19;

  ul {
    height: 83%;
    overflow-y: scroll;
  }

  ul::-webkit-scrollbar {
    width: 0;
  }

  h1,
  h2 {
    text-align: center;
  }

  h2 {
    margin: 8px 0;
  }
`;

const ClientHistory = ({
  finishedClients,
  onDeleteFinished,
  prices,
  access,
  setAccess,
  mainPassword,
  setShowFinishedDay
}) => {
  const [totalPrice, setTotalPrice] = useState([]);

  useEffect(() => {
    const totalPriceUpdate = prices.reduce((ac, value) => {
      return ac + value;
    }, 0);
    setTotalPrice(totalPriceUpdate.toFixed(2).replace(".", ","));
  }, [prices]);

  return (
    <HistoryStyles>
      <h1>Histórico de Clientes</h1>
      <ul>
        {finishedClients.map((client) => {
          return (
            <FinishedClient
              key={client.id}
              id={client.id}
              name={client.name}
              service={client.service}
              price={client.price}
              onDeleteFinished={onDeleteFinished}
            />
          );
        })}
      </ul>
      <h2>{`Total: R$${totalPrice}`}</h2>
      {!access && mainPassword && (
        <EnterPassword
          mainPassword={mainPassword}
          access={access}
          setAccess={setAccess}
          setShowFinishedDay={setShowFinishedDay}
        />
      )}
    </HistoryStyles>
  );
};

export default ClientHistory;
