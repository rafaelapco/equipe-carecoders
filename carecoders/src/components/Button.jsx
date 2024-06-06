import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || "#007BFF"};
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#0056b3"};
  }
`;

const Button = ({
  children,
  color,
  hoverColor,
  icon: Icon,
  label,
  onClick,
}) => (
  <StyledButton color={color} hoverColor={hoverColor} onClick={onClick}>
    {Icon && <Icon />}
    {label}
    {children}
  </StyledButton>
);

export default Button;
