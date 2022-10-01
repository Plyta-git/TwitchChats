import { useState, useEffect, useMemo } from "react";

const useFetchToChannelEmotes = (chnannel) => {
  const [ttvChannelEmotes, setChannelTtvEmotes] = useState(new Map());
  const [seventvChannelEmotes, setChannelSeventvEmotes] = useState(new Map());
  const [bttvChannelEmotes, setChannelBttvEmotes] = useState(new Map());
  const [ffzChannelEmotes, setChannelFfzEmotes] = useState(new Map());
  const setEmotesToStates = (response) => {
    const ttv = new Map();
    const sevenTV = new Map();
    const bttv = new Map();
    const ffz = new Map();
    response.forEach((el) => {
      switch (el.provider) {
        case 0:
          ttv.set(el.code, el.urls);
          break;
        case 1:
          sevenTV.set(el.code, el.urls);
          break;
        case 2:
          bttv.set(el.code, el.urls);
          break;
        case 3:
          ffz.set(el.code, el.urls);
          break;
        default:
          break;
      }
    });
    setChannelTtvEmotes(ttv);
    setChannelBttvEmotes(bttv);
    setChannelSeventvEmotes(sevenTV);
    setChannelFfzEmotes(ffz);
  };
  useEffect(() => {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(
      `https://emotes.adamcy.pl/v1/channel/${chnannel}/emotes/7tv.bttv.ffz.twitch`,
      options
    )
      .then((response) => response.json())
      .then((response) => setEmotesToStates(response))
      .catch((err) => console.error(err));
  }, []);

  return useMemo(() => {
    return {
      ttvChannelEmotes,
      bttvChannelEmotes,
      seventvChannelEmotes,
      ffzChannelEmotes,
    };
  }, [
    ttvChannelEmotes,
    bttvChannelEmotes,
    seventvChannelEmotes,
    ffzChannelEmotes,
  ]);
};

export default useFetchToChannelEmotes;
