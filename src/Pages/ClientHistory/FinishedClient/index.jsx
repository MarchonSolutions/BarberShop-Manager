import styled from "styled-components";
import { MdDelete } from "react-icons/md";

const FinishedStyles = styled.li`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  margin: 12px 0;
  padding: 8px;
  background-color: #000;
  color: #ffff;
  border-radius: 8px;
  overflow: hidden;

  span {
    display: flex;

    .btn-li {
      margin: 0 6px;
      cursor: pointer;
    }
  }
`;

const FinishedClient = ({
  id,
  name,
  service,
  price,
  onDeleteFinished
}) => {

  return (
    <FinishedStyles>
      <p>{name}</p>
      <p>{service}</p>
      <p>{`R$${price.toFixed(2).replace('.', ',')}`}</p>
      <span>
        <MdDelete className="btn-li" onClick={() => onDeleteFinished(id)} />
      </span>
    </FinishedStyles>
  );
};

export default FinishedClient;