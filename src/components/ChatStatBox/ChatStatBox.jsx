import { Wrapper } from "./Styled";

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
}) => {
  return (
    <Wrapper>
      <div>Messages: {messages}</div>
      <div>Timeouts: {to}</div>
      <div>Bans: {bans}</div>
      <div>Subs: {subs}</div>
      <div>SubGifts: {subGift}</div>
      <div>ReSubs: {resub}</div>
      <div>Chatters: {chatters}</div>
      <div>Top spamer: {topSpamer}</div>
      <div>Top spamer messages: {topSpamerMessages}</div>
      <div>Streamer mention: {streamerMention}</div>
    </Wrapper>
  );
};

export default ChatStatBox;
