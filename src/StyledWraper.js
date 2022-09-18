import styled from "styled-components";

const StyledNicknameWrapper = styled.div`
  color: ${({ color }) => (color ? color : "white")};
`;

const StyledNickname = ({ color, children }) => {
  return (
    <StyledNicknameWrapper color={color}>{children}</StyledNicknameWrapper>
  );
};

export default StyledNickname;
