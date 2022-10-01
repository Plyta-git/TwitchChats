import useFetchToEmotes from "./hooks/useFetchToBadges";
import ChatBox from "./components/ChatBox/ChatBox";
import styled from "styled-components";
import { useState } from "react";
import useFetchToGlobalEmotes from "./hooks/useFetchToGlobalEmotes";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const App = () => {
  const [globalbadges, globalBadgesError, globalBadgesLoading] =
    useFetchToEmotes();
  const [channels, setChannels] = useState(["plyta__", "veibae"]);

  const globalEmotes = useFetchToGlobalEmotes();

  if (globalBadgesError) return <Wrapper>Error</Wrapper>;
  if (globalBadgesLoading) return <Wrapper>loading...</Wrapper>;
  return (
    <Wrapper>
      {channels.map((channel) => (
        <ChatBox
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
