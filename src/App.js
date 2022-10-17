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
  height: 100vh;
`;

const App = () => {
  const [globalbadges, globalBadgesError, globalBadgesLoading] =
    useFetchToEmotes();
  const [channels, setChannels] = useState(["h2p_gucio", "xqc", "xnzq"]);

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
      <AddUser />
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
