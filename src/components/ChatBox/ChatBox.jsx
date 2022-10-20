import { useEffect, useRef, useState } from "react";
import Message from "../Message/Message";
import useFetchToChat from "../../hooks/useFetchToChat";
import { ChannelName, Wrapper, MessageWrapper } from "./Styled";
import { defaultChatBoxSetting } from "../../config/config";
import useFetchToChannelEmotes from "../../hooks/useFetchToChannelEmotes";
import { filtrEmotes } from "./filtrEmotes";
import SideBar from "../SideBar/SideBar";
import ChatStatBox from "../ChatStatBox/ChatStatBox";

const ChatBox = ({ globalbadges, targetChannel, globalEmotes, removeCard }) => {
  //auto scroll
  const bottomRef = useRef(null);
  const [isAutoScrolling, setAutoScrlling] = useState(true);
  //settings - not working yet - to do later
  const [chatboxSetting, setChatboxSettings] = useState(defaultChatBoxSetting);
  //Channel emotes and badges
  const [badgesSet, setBadges] = useState([]);
  const [emotes, setEmotes] = useState([]);
  const channelEmotes = useFetchToChannelEmotes(targetChannel);
  //Stats box
  const [isStatsBoxOpen, setisStatsBoxOpen] = useState(false);
  //connect to chat
  const [ChatMessages, ChatStats, loadingState] = useFetchToChat(targetChannel);

  //Channel emotes
  useEffect(() => {
    setBadges(globalbadges);
  }, [globalbadges]);

  //auto scroll
  useEffect(() => {
    setAutoScrlling(true);
  }, [isStatsBoxOpen]);

  useEffect(() => {
    setEmotes(filtrEmotes(channelEmotes, globalEmotes, chatboxSetting));
  }, [channelEmotes, globalEmotes, chatboxSetting]);
  const onWheel = (e) => {
    if (e.nativeEvent.wheelDelta > 0) {
      setAutoScrlling(false);
    } else if (
      bottomRef.current.scrollTop / bottomRef.current.scrollHeight >
      0.5
    ) {
      setAutoScrlling(true);
    }
  };

  useEffect(() => {
    if (ChatMessages.length > chatboxSetting.maxMessages)
      ChatMessages.splice(0, 1);
    if (!isStatsBoxOpen && isAutoScrolling && loadingState == "connected")
      bottomRef.current.scrollTop = bottomRef.current?.scrollHeight;
  }, [ChatMessages]);

  if (loadingState == "loading")
    return (
      <Wrapper>
        <MessageWrapper onWheel={onWheel} ref={bottomRef}>
          Loading {targetChannel} channel
        </MessageWrapper>
        <ChannelName targetChannel={targetChannel} />
        <SideBar
          removeCard={removeCard}
          targetChannel={targetChannel}
          setisStatsBoxOpen={setisStatsBoxOpen}
          isStatsBoxOpen={isStatsBoxOpen}
        />
      </Wrapper>
    );
  if (loadingState == "disconnected")
    return (
      <Wrapper>
        <MessageWrapper onWheel={onWheel} ref={bottomRef}>
          Disconnected
        </MessageWrapper>
        <ChannelName targetChannel={targetChannel} />
        <SideBar
          removeCard={removeCard}
          targetChannel={targetChannel}
          setisStatsBoxOpen={setisStatsBoxOpen}
          isStatsBoxOpen={isStatsBoxOpen}
        />
      </Wrapper>
    );
  if (!isStatsBoxOpen)
    return (
      <Wrapper>
        <ChannelName targetChannel={targetChannel} />
        <MessageWrapper onWheel={onWheel} ref={bottomRef}>
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
        </MessageWrapper>
        <SideBar
          removeCard={removeCard}
          targetChannel={targetChannel}
          setisStatsBoxOpen={setisStatsBoxOpen}
          isStatsBoxOpen={isStatsBoxOpen}
        />
      </Wrapper>
    );
  else
    return (
      <Wrapper>
        <ChannelName targetChannel={targetChannel} />

        <ChatStatBox
          ChatStats={ChatStats}
          setChatboxSettings={setChatboxSettings}
        />
        <SideBar
          setisStatsBoxOpen={setisStatsBoxOpen}
          isStatsBoxOpen={isStatsBoxOpen}
        />
      </Wrapper>
    );
};

export default ChatBox;
