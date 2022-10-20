import React from "react";
import useReplaceEmote from "../../hooks/useReplaceEmote";
import { Wrapper, Icon, ColorMessage } from "./Styled";

const Message = ({
  tags: { badges, color, username, emotes: ttvEmotes },
  message,
  badgesSet: { badge_sets },
  emotes,
}) => {
  //text to emotes
  message = useReplaceEmote(message, emotes, ttvEmotes);

  return (
    <Wrapper color={color}>
      {badges
        ? Object.keys(badges).map(function (key) {
            let badge;
            if (key === "predictions") {
              badge = badge_sets[key].versions[badges.predictions];
            } else badge = badge_sets[key].versions[1];
            if (badge) {
              return (
                <Icon
                  key={badge.title}
                  alt={badge.title}
                  src={badge.image_url_1x}
                />
              );
            } else {
              return "";
            }
          })
        : null}
      {`${username}`}
      <ColorMessage>
        {`: `}
        {message}
      </ColorMessage>
    </Wrapper>
  );
};

export default React.memo(Message);
