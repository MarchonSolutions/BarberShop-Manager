import styled from "styled-components";
import { IoMdHome, IoIosSettings } from "react-icons/io";
import { TbHistoryToggle } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const NavStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  
  ul {
    display: flex;
  }

  li {
    list-style: none;
    margin: 0 12px;
    cursor: pointer;

    .home-button {
        position: relative;
        bottom: 30px;
    }
  }

`;

const NavFooter = ({access, setAccess}) => {
  const location = useLocation()

  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/settings">
            <IoIosSettings
              size={55}
              color={`${location.pathname === '/settings' ? '#FDCB19' : '#fff'}`}
              onClick={() => {
                setAccess(false)
              }}
            />
          </Link>
        </li>
        <li>          
          <Link to="/">
            <IoMdHome
              className="home-button"
              size={85}
              color={`${location.pathname === '/' ? '#FDCB19' : '#fff'}`}
              onClick={() => {
                setAccess(false)
              }}
            />
          </Link>
        </li>
        <li>
          <Link to="/history">
            <TbHistoryToggle
              size={55}
              color={`${location.pathname === '/history' ? '#FDCB19' : '#fff'}`}
              onClick={() => {
                setAccess(false)
              }}
            />
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
};

export default NavFooter;
