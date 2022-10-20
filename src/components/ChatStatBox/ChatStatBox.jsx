import { Wrapper, SwitchBox } from "./Styled";

const ChatStatBox = ({
  ChatStats: {
    bans,
    to,
    subs,
    messages,
    subGift,
    resub,
    chatters,
    topSpamer,
    topSpamerMessages,
    streamerMention,
  },
  setChatboxSettings,
}) => {
  return (
    <Wrapper>
      <div>messages: {messages}</div>
      <div>Timeouts: {to}</div>
      <div>Bans: {bans}</div>
      <div>Subs: {subs}</div>
      <div>subGift: {subGift}</div>
      <div>resub: {resub}</div>
      <div>chatters: {chatters}</div>
      <div>topSpamer: {topSpamer}</div>
      <div>topSpamerMessages: {topSpamerMessages}</div>
      <div>streamerMention: {streamerMention}</div>
    </Wrapper>
  );
};

export default ChatStatBox;
