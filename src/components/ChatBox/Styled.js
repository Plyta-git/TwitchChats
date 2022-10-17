import styled from "styled-components";

export const MessageWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
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
  position: absolute;
  &:before {
    font-size: 20px;
    padding: 5px 12px;
    border-radius: 25px;
    left: -15px;
    top: -15px;
    height: 20px;
    background-color: white;
    color: black;
    position: relative;
    content: "${(props) => props.targetChannel}";
  }

  /* &:after {
    content: url(https://static-cdn.jtvnw.net/jtv_user_pictures/6ac9f43f-9b74-4050-8432-9c3b9970f8bf-profile_image-70x70.png);
    content: url(https://static-cdn.jtvnw.net/jtv_user_pictures/xqc-profile_image-9298dca608632101-70x70.jpeg);
    overflow: hidden;
    border: 5px solid white;
    top: -25px;
    left: -25px;
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50px;
  } */
`;

