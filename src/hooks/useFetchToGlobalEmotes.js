import { useState, useEffect } from "react";

const useFetchToGlobalEmotes = () => {
  const [ttvGlobalEmotes, setGlobalTtvEmotes] = useState([]);
  const [seventvGlobalEmotes, setGlobalSeventvEmotes] = useState([]);
  const [bttvGlobalEmotes, setGlobalBttvEmotes] = useState();
  const [ffzGlobalEmotes, setGlobalFfzEmotes] = useState();

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
