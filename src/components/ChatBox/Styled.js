import styled from "styled-components";

export const MessageWrapper = styled.div`
  width: 100%;

  font-size: 14px;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: noen;
  }

  &::-webkit-scrollbar {
    margin: 5px;
    width: 6px;
    background-color: #0a0a0a;
  }

  &::-webkit-scrollbar-thumb {
    width: 2px;
    border-radius: 5px;
    background-color: #4d4949;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 340px;
  height: 500px;
  background-color: #18181b;
  border: 2px solid white;
  overflow: auto;
  border-radius: 5px;
`;

export const ChannelName = styled.div`
  background-color: #000000cd;
  position: sticky;
  top: 0;
`;

