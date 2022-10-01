import tmi from "tmi.js";
import { useState, useEffect } from "react";
const debug = false;

const useFetchToChat = (targetChannel) => {
  const [chatMessages, setChatMesseges] = useState([]);
  const client = new tmi.Client({
    options: { debug },
    channels: [targetChannel],
    connection: {
      reconnect: false,
      maxReconnectAttempts: 10,
    },
  });
  useEffect(() => {
    client.connect().catch(console.error);
    client.on("message", (channel, tags, message, self) => {
      tags.username = tags["display-name"];

      setChatMesseges((chatMessages) => [
        ...chatMessages,
        { channel, message, tags },
      ]);
    });
    return () => {
      client.removeAllListeners();
      client.disconnect();
    };
  }, []);

  return chatMessages;
};

export default useFetchToChat;
