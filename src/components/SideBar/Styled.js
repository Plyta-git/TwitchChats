import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  color: black;
  right: 0;
  background: #f8f8f8;
  width: 8%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  position: relative;
  font-size: 35px;
  right: 10px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  position: relative;
  top: -240px;
  left: 4px;
  width: 20px;
  height: 20px;
  &:before,
  &:after {
    position: absolute;
    content: " ";
    height: 10px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;