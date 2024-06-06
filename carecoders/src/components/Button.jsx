import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.outlined ? "transparent" : props.color || "#007BFF"};
  color: ${(props) => (props.outlined ? props.color || "#007BFF" : "#fff")};
  border: ${(props) =>
    props.outlined ? `2px solid ${props.color || "#007BFF"}` : "none"};
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.outlined
        ? "rgba(0, 123, 255, 0.1)"
        : props.hoverColor || "#0056b3"};
  }
`;

const Button = ({
  children,
  color,
  hoverColor,
  icon: Icon,
  label,
  onClick,
  outlined,
}) => (
  <StyledButton
    color={color}
    hoverColor={hoverColor}
    onClick={onClick}
    outlined={outlined}
  >
    {Icon && <Icon />}
    {label}
    {children}
  </StyledButton>
);

export default Button;
