import styled from "styled-components";
import { MdDelete } from "react-icons/md";

const ServiceStyles = styled.li`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  margin: 8px;
  padding: 6px;
  background-color: #000;
  color: #ffff;
  border-radius: 8px;
  text-align: center;

  p {
    width: 46%;
  }

  span {
    .btn-li {
      margin-left: 8px;
      cursor: pointer;
    }
  }
`;

const EachService = ({id, name, price, onDeleteService }) => {

  price = typeof 'string' ? parseFloat(price) : price

  return (
    <ServiceStyles>
      <p>{name}</p>
      <p>{`R$${price.toFixed(2).replace('.', ',')}`}</p>
      <span>
        <MdDelete 
          className="btn-li"
          onClick={() => onDeleteService(id)} 
        />
      </span>
    </ServiceStyles>
  );
};

export default EachService;
