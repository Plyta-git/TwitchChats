import tmi from "tmi.js";

const connectToChat = (connectToChannel, setChatMesseges) => {
  const client = new tmi.Client({
    options: { debug: true },
    channels: [connectToChannel],
  });

  client.connect().catch(console.error);

  client.on("message", (channel, tags, message, self) => {
    setChatMesseges((chatMessages) => [
      { chanel: channel, message: message, tags: tags },
      ...chatMessages,
    ]);
  });
};

export default connectToChat;
