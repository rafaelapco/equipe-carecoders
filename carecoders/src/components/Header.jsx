import styled from "styled-components";
import logo from "../images/logo.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #e5edf2;
  padding: 1rem 2rem;
  color: white;
`;

const Logo = styled.img`
  height: 60px;
  margin-right: 1rem;
`;

const NavItem = styled.a`
  color: #09090a;
  text-decoration: none;
  margin: 0 1rem;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #547fb9;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 3px;
      background-color: white;
      background-color: #547fb9;
    }
  }
`;

const Select = styled.select`
  color: #09090a;
  text-decoration: none;
  margin: 0 1rem;
  cursor: pointer;
  position: relative;
  border: none;
  font-size: 16px;
  background: none;

  &:hover {
    color: #547fb9;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 3px;
      background-color: white;
      background-color: #547fb9;
    }
  }
`;

function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <NavItem href="/">Inicio</NavItem>
      <NavItem>Sobre</NavItem>
      <NavItem>
        <Select name="" id="">
          <option value="">Portal do paciente</option>
          <option value="">Consultas</option>
          <option value="">Histórico médico</option>
        </Select>
      </NavItem>
      <NavItem href="/servicos">Serviços</NavItem>
      <NavItem href="/contato">Contato</NavItem>
      <Button label="Login" color="#1E1E1E" onClick={handleLoginClick} />
    </HeaderContainer>
  );
}

export default Header;
