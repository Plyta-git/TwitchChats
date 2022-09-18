import { useEffect, useState } from "react";
import connectToChat from "./connectToChat";
import StyledNickname from "./StyledWraper";

let globalIcons;

async function getGlobabIcons() {
  const globalIconsURL = "https://badges.twitch.tv/v1/badges/global/display";
  const request = new Request(globalIconsURL);
  const response = await fetch(request);
  globalIcons = await response.json();
  const testEmote = globalIcons.badge_sets.partner.versions[1].image_url_1x;
}

const App = () => {
  const [chatMessages, setChatMesseges] = useState([]);
  useEffect(() => {
    getGlobabIcons();
    connectToChat("xqc", setChatMesseges);
  }, []);

  return (
    <div>
      {chatMessages.map(({ message, tags }) => (
        <>
          <StyledNickname color={tags.color}>
            {tags.badges
              ? Object.keys(tags.badges).map(function (key) {
                  return (
                    <img
                      alt={globalIcons.badge_sets[key].versions[1].description}
                      src={globalIcons.badge_sets[key].versions[1].image_url_1x}
                    />
                  );
                })
              : null}

            {`${tags["display-name"]}: `}
          </StyledNickname>
          <div>{message}</div>
        </>
      ))}
    </div>
  );
};

export default App;
