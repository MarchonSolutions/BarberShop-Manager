import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

const ClientStyles = styled.li`
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

const EachClient = ({
  id,
  name,
  service,
  price,
  onDeleteClient,
  onEditClient,
  addFinishedClients,
}) => {
  return (
    <ClientStyles>
      <p>{name}</p>
      <p>{service}</p>
      <span>
        <FaEdit className="btn-li" 
          onClick={() => onEditClient({
            id: id,
            name: name,
            service:service,
            price: price
          })}
        />
        <MdDelete className="btn-li" onClick={() => onDeleteClient(id)} />
        <GiConfirmed
          className="btn-li"
          onClick={() => {
            {
              addFinishedClients({
                id: id,
                name: name,
                service: service,
                price: price,
              });
            }
            onDeleteClient(id);
          }}
        />
      </span>
    </ClientStyles>
  );
};

export default EachClient;
