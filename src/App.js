import useFetchToEmotes from "./hooks/useFetchToBadges";
import ChatBox from "./components/ChatBox/ChatBox";
import styled from "styled-components";
import { useState } from "react";
import useFetchToGlobalEmotes from "./hooks/useFetchToGlobalEmotes";
import AddUser from "./components/AddUser";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
  padding-top: 100px;
`;

const App = () => {
  //load global badges
  const [globalbadges, globalBadgesError, globalBadgesLoading] =
    useFetchToEmotes();
  //set 2 deafult channels
  const [channels, setChannels] = useState(["sodapoppin", "xqc"]);
  const [newChannel, setNewChannel] = useState("");

  //creating new boxchat
  async function handleSubmit(e) {
    e.preventDefault();
    if (channels.some((channel) => channel === newChannel)) {
      alert("This channel exist");
    } else {
      setChannels([...channels, newChannel]);
    }
    setNewChannel("");
  }

  function handleTextareaChange(e) {
    setNewChannel(e.target.value.toLowerCase());
  }

  //Remove chat box
  const removeCard = (id) => {
    const newChannels = channels.filter((name) => {
      return name != id;
    });
    setChannels(newChannels);
  };

  const globalEmotes = useFetchToGlobalEmotes();

  if (globalBadgesError) return <Wrapper>Error</Wrapper>;
  if (globalBadgesLoading) return <Wrapper>loading...</Wrapper>;
  return (
    <Wrapper>
      <AddUser
        handleSubmit={handleSubmit}
        newChannel={newChannel}
        handleTextareaChange={handleTextareaChange}
      />
      {channels.map((channel) => (
        <ChatBox
          removeCard={removeCard}
          key={channel}
          targetChannel={channel}
          globalbadges={globalbadges}
          globalEmotes={globalEmotes}
        ></ChatBox>
      ))}
    </Wrapper>
  );
};

export default App;
