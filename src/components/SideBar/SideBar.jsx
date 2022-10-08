import { Wrapper, CloseButton } from "./Styled.js";

const SideBar = ({ setisStatsBoxOpen, isStatsBoxOpen }) => {
  return (
    <Wrapper>
      <button onClick={() => setisStatsBoxOpen(!isStatsBoxOpen)}>
        &#8249;
      </button>
    </Wrapper>
  );
};

export default SideBar;
