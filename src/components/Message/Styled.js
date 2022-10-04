import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 10px;
  color: ${({ color }) => color || "white"};
`;

export const Icon = styled.img`
  margin-right: 5px;
`;

export const ColorMessage = styled.span`
  color: white;
`;
