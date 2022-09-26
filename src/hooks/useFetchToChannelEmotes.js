import { useState, useEffect, useMemo } from "react";

const useFetchToChannelEmotes = (chnannel) => {
  const [ttvChannelEmotes, setChannelTtvEmotes] = useState([]);
  const [seventvChannelEmotes, setChannelSeventvEmotes] = useState([]);
  const [bttvChannelEmotes, setChannelBttvEmotes] = useState([]);
  const [ffzChannelEmotes, setChannelFfzEmotes] = useState([]);
  const setEmotesToStates = (response) => {
    const ttv = [];
    const sevenTV = [];
    const bttv = [];
    const ffz = [];
    response.forEach((el) => {
      switch (el.provider) {
        case 0:
          ttv.push(el);
          break;
        case 1:
          sevenTV.push(el);
          break;
        case 2:
          bttv.push(el);
          break;
        case 3:
          ffz.push(el);
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
