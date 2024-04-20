import styled from "styled-components";
import { Overlay } from "../GlobalStyles";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const DayFinishedStyles = styled.div`
  height: 40%;
  width: 90%;
  border-radius: 10px;
  background-color: #fff;
  background-image: url(/images/barber-pattern.png);
  background-repeat: repeat;

  .close {
    display: block;
    float: right;
    margin: 8px;
    font-size: 25px;
    cursor: pointer;
    color: #d20101;
  }

  h1,
  .day {
    text-align: center;
  }

  h1 {
    margin-top: 12px;
  }

  .day {
    margin-bottom: 16px;
    font-size: 14px;
  }

  .ul-list {
    margin: 32px auto;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;

      li {
        list-style: none;
        margin-top: 8px;
        font-size: 24px;
      }
    }
  }

  button {
    display: block;
    margin: 12px auto;
    padding: 8px;
    background-color: #d20101;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
  }
`;

const DayFinished = ({
  totalClients,
  prices,
  setAccessFinished,
  setShowFinishedDay,
  setAllClients,
  setFinishedClients,
}) => {
  const [totalPrice, setTotalPrice] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const totalPriceUpdate = prices.reduce((ac, value) => {
      return ac + value;
    }, 0);
    setTotalPrice(totalPriceUpdate.toFixed(2).replace(".", ","));
  }, [prices]);

  useEffect(() => {
    const currentDateObj = new Date();
    const formattedMonth =
      currentDateObj.getMonth() + 1 > 9
        ? `${currentDateObj.getMonth()}`
        : `0${currentDateObj.getMonth() + 1}`;
    const formattedDate = `${currentDateObj.getDate()}/${formattedMonth}/${currentDateObj.getFullYear()}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <Overlay>
      <DayFinishedStyles>
        <IoMdClose
          className="close"
          onClick={() => {
            setAccessFinished(false);
            setShowFinishedDay(false);
          }}
        />
        <h1>Fim de Expediente</h1>
        <p className="day">{currentDate}</p>
        <div className="ul-list">
          <ul>
            <li>Clientes atendidos: {totalClients}</li>
            <li>Faturamento: R${totalPrice}</li>
          </ul>
        </div>
        <button
          onClick={() => {
            setAllClients([]);
            setFinishedClients([]);
            setAccessFinished(false);
            setShowFinishedDay(false);
          }}
        >
          Encerrar
        </button>
      </DayFinishedStyles>
    </Overlay>
  );
};

export default DayFinished;
