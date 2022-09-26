import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #0e0e0e;
  width: 400px;
  height: 600px;
  overflow: auto;
  border: 2px solid white;
  border-radius: 10px;
  font-size: 14px;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: noen;
  }

  &::-webkit-scrollbar {
    margin: 5px;
    width: 10px;
    background-color: noen;
  }

  &::-webkit-scrollbar-thumb {
    width: 2px;
    border-radius: 5px;
    background-color: #383838;
  }
`;

export const ChannelName = styled.div`
  background-color: #000000cd;
  padding: 10px;
  position: sticky;
  top: 0;
`;
