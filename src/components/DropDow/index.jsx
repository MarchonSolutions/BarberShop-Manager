import styled from "styled-components";

const DropDownStyles = styled.div`
    width: 100%;
    margin-bottom: 12px;

    select {
        display: block;
        margin: auto;
        padding: 6px;

        border: none;
        border-radius: 10px;

        background-color: #000;
        color: #fff;
        
        cursor: pointer;
    }

    option {
        background-color: #fff;
        color: #000;
        cursor: pointer;
    }
`;

const DropDown = ({ allServices, value, onChange }) => {

  return (
    <DropDownStyles>
      <select
        onChange={ e => onChange(e.target.value)}
        value={value}
      >
        <option> {"Selecione o Serviço"} </option>
        {allServices.map( service => 
          <option
            key={service.name}
          >
            {service.name}
          </option>
        )}
      </select>
    </DropDownStyles>
  );
};

export default DropDown;
