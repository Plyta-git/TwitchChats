const useReplaceEmote = (message, emotes) => {
  let parts = message;
  for (const el of message.split(" ")) {
    for (const emote of emotes) {
      if (el == emote["code"]) {
        parts = message.split(el);
        for (var i = 1; i < parts.length; i += 2) {
          parts[i] = <img key={i} src={emote.urls[0].url} alt={el} />;
        }
      }
    }
  }
  return parts;
};

export default useReplaceEmote;
