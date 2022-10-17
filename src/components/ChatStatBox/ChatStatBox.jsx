import { Wrapper } from "./Styled";

const ChatStatBox = ({ ChatStats: { bans, to, subs }, setChatboxSettings }) => {
  return (
    <Wrapper>
      <div>Bans: {bans}</div>
      <div>Timeouts: {to}</div>
      <div>Subs: {subs}</div>
    </Wrapper>
  );
};

export default ChatStatBox;
