import { Wrapper, CloseButton, Button } from "./Styled.js";

const SideBar = ({
  setisStatsBoxOpen,
  isStatsBoxOpen,
  removeCard,
  targetChannel,
}) => {
  return (
    <Wrapper>
      <CloseButton onClick={() => removeCard(targetChannel)} />
      <Button onClick={() => setisStatsBoxOpen(!isStatsBoxOpen)}>
        &#8249;
      </Button>
    </Wrapper>
  );
};

export default SideBar;
