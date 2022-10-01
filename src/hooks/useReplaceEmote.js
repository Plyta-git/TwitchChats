const useReplaceEmote = (message, emotes) => {
  message = message.split(" ");
  for (const i in message) {
    if (emotes.has(message[i])) {
      message[i] = (
        <img key={i} src={emotes.get(message[i])[0].url} alt={message[i]} />
      );
    } else message[i] += " ";
  }
  return message;
};

export default useReplaceEmote;
