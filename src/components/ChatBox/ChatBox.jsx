import { useEffect, useRef, useState } from "react";
import Message from "../Message/Message";
import useFetchToChat from "../../hooks/useFetchToChat";
import { ChannelName, Wrapper } from "./Styled";
import { defaultChatBoxSetting } from "../../config/config";
import useFetchToChannelEmotes from "../../hooks/useFetchToChannelEmotes";

const ChatBox = ({ globalbadges, targetChannel, globalEmotes }) => {
  const bottomRef = useRef(null);
  const [chatboxSetting, setChatboxSettings] = useState(defaultChatBoxSetting);
  const [isAutoScrolling, setAutoScrlling] = useState(true);
  const [emotes, setEmotes] = useState([]);
  const [badgesSet, setBadges] = useState([]);
  const ChatMessages = useFetchToChat(targetChannel);
  const channelEmotes = useFetchToChannelEmotes(targetChannel);

  useEffect(() => {
    setEmotes(Object.values(globalEmotes).flat());
    console.log(channelEmotes);
  }, [globalEmotes]);

  useEffect(() => {
    setBadges(globalbadges);
  }, [globalbadges]);

  const onWheel = (e) => {
    if (e.nativeEvent.wheelDelta > 0) {
      setAutoScrlling(false);
    } else if (
      bottomRef.current.scrollTop / bottomRef.current.scrollHeight >
      0.6
    ) {
      setAutoScrlling(true);
    }
  };

  useEffect(() => {
    if (ChatMessages.length > chatboxSetting.maxMessages)
      ChatMessages.splice(0, 1);
    if (isAutoScrolling)
      bottomRef.current.scrollTop = bottomRef.current?.scrollHeight;
  }, [ChatMessages]);

  return (
    <Wrapper onWheel={onWheel} ref={bottomRef}>
      <ChannelName>Kanał: {targetChannel}</ChannelName>
      {ChatMessages.map(({ message, tags, username }) => {
        return (
          <Message
            key={tags.id}
            badgesSet={badgesSet}
            emotes={emotes}
            tags={tags}
            username={username}
            message={message}
          />
        );
      })}
    </Wrapper>
  );
};

export default ChatBox;
