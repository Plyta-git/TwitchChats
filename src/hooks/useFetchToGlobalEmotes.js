import { useState, useEffect } from "react";

const useFetchToGlobalEmotes = () => {
  const [ttvGlobalEmotes, setGlobalTtvEmotes] = useState(new Map());
  const [seventvGlobalEmotes, setGlobalSeventvEmotes] = useState(new Map());
  const [bttvGlobalEmotes, setGlobalBttvEmotes] = useState(new Map());
  const [ffzGlobalEmotes, setGlobalFfzEmotes] = useState(new Map());

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
    setGlobalTtvEmotes(ttv);
    setGlobalBttvEmotes(bttv);
    setGlobalSeventvEmotes(sevenTV);
    setGlobalFfzEmotes(ffz);
  };
  useEffect(() => {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(
      "https://emotes.adamcy.pl/v1/global/emotes/7tv.bttv.ffz.twitch",
      options
    )
      .then((response) => response.json())
      .then((response) => setEmotesToStates(response))
      .catch((err) => console.error(err));
  }, []);

  return {
    ttvGlobalEmotes,
    bttvGlobalEmotes,
    seventvGlobalEmotes,
    ffzGlobalEmotes,
  };
};

export default useFetchToGlobalEmotes;
