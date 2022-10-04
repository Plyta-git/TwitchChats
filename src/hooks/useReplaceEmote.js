const useReplaceEmote = (message, emotes, ttvEmotes) => {
  message = message.split(" ");
  let partMessageLength = 0;

  for (const i in message) {
    if (ttvEmotes) {
      for (const [key, value] of Object.entries(ttvEmotes)) {
        const start = Number(value[0].split("-")[0]);
        if (partMessageLength == start) {
          message[i] = (
            <img
              key={i}
              src={`https://static-cdn.jtvnw.net/emoticons/v2/${key}/default/dark/1.0`}
              alt={message[i]}
            />
          );
        } else message[i] += " ";
      }
    } else if (emotes.has(message[i])) {
      message[i] = (
        <img key={i} src={emotes.get(message[i])[0].url} alt={message[i]} />
      );
    } else message[i] += " ";

    partMessageLength += message[i].length + 1;
  }
  return message;
};
export default useReplaceEmote;
// if (ttvEmotes) {
//   for (const [key, value] of Object.entries(ttvEmotes)) {
//     const start = Number(value[0].split("-")[0]);
//     const leng = Number(value[0].split("-")[1]) + start + 1;
//     console.log(start, leng, value);
//message = message.split("");
// message.splice(
//   start,
//   leng,
//   <img src={`https://static-cdn.jtvnw.net/emoticons/v1/${value}/1.0`} />
// );
//message = message.join("");
//   }
// }
