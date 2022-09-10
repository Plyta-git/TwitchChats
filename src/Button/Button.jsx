import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 2rem;
  box-shadow: 9px 9px 6px 0px rgba(0, 0, 0, 0.3);
  border-radius: 45px;
  grid-column: ${(props) => (props.wide ? "span 2" : "")};
  border: none;
  background-color: ${({ color }) =>
    color === "func"
      ? "#d47216f2"
      : color === "operation"
      ? "#E1DDDDf2"
      : "#707070f2"};
  color: ${({ color }) =>
    color === "func"
      ? "#ffffff"
      : color === "operation"
      ? "#0f0f0f"
      : "#ffffff"};
  &:hover {
    background-color: ${({ color }) =>
      color === "func"
        ? "#ee831e"
        : color === "operation"
        ? "#f7f7f7"
        : "#868686"};
  }
  &:active {
    box-shadow: inset 9px 9px 6px 0px rgba(0, 0, 0, 0.3);
    background-color: ${({ color }) =>
      color === "func"
        ? "#b36114"
        : color === "operation"
        ? "#cac6c6"
        : "#535353"};
  }
`;

const Button = ({ digit, color, wide, dispatch, type }) => {
  return (
    <StyledButton
      color={color}
      wide={wide}
      onClick={() => dispatch({ type, payload: { digit: digit } })}
    >
      {digit}
    </StyledButton>
  );
};

export default Button;
