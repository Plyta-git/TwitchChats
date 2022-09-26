import React from "react";
import useReplaceEmote from "../../hooks/useReplaceEmote";
import { Wrapper, Icon, ColorMessage } from "./Styled";

const Message = ({
  tags: { badges, color, username },
  message,
  badgesSet: { badge_sets },
  emotes,
}) => {
  message = useReplaceEmote(message, emotes);
  return (
    <Wrapper color={color}>
      {badges
        ? Object.keys(badges).map(function (key) {
            if (key === "predictions") {
              const badge = badge_sets[key].versions[badges.predictions];
              return (
                <Icon
                  key={badge.description}
                  alt={badge.description}
                  src={badge.image_url_1x}
                />
              );
            }

            const badge = badge_sets[key].versions[1];
            return (
              <Icon
                key={badge.description}
                alt={badge.description}
                src={badge.image_url_1x}
              />
            );
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
