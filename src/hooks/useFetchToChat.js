import tmi from "tmi.js";
import { useState, useEffect } from "react";
const debug = false;

const useFetchToChat = (targetChannel) => {
  const spamers = new Map();
  const [chatStats, setChatStats] = useState({
    bans: 0,
    to: 0,
    subs: 0,
    messages: 0,
    subGift: 0,
    resub: 0,
    streamerMentions: 0,
    topSpamer: "",
    topSpamerMessages: 0,
    chatters: 0,
    streamerMention: 0,
  });
  const [loadingState, setLoadingState] = useState("loading");
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
      if (spamers.has(tags["display-name"]))
        spamers.set(
          tags["display-name"],
          spamers.get(tags["display-name"]) + 1
        );
      else spamers.set(tags["display-name"], 1);

      let maxMessagesNum = 0;
      let maxUserName = "";
      for (let [key, value] of spamers.entries()) {
        if (value > maxMessagesNum) {
          maxMessagesNum = value;
          maxUserName = key;
        }
      }

      if (message.toLowerCase().includes(`@${targetChannel}`)) {
        setChatStats((chatStats) => ({
          ...chatStats,
          streamerMention: chatStats.streamerMention + 1,
        }));
      }

      setChatStats((chatStats) => ({
        ...chatStats,
        messages: chatStats.messages + 1,
      }));

      setChatStats((chatStats) => ({
        ...chatStats,
        chatters: spamers.size,
      }));

      setChatStats((chatStats) => ({
        ...chatStats,
        topSpamer: maxUserName,
      }));

      setChatStats((chatStats) => ({
        ...chatStats,
        topSpamerMessages: maxMessagesNum,
      }));

      setChatMesseges((chatMessages) => [
        ...chatMessages,
        { channel, message, tags },
      ]);
    });

    client.on("ban", (channel, username, reason, userstate) => {
      setChatStats((chatStats) => ({
        ...chatStats,
        bans: chatStats.bans + 1,
      }));
    });

    client.on("timeout", (channel, username, reason, duration, userstate) => {
      setChatStats((chatStats) => ({
        ...chatStats,
        to: chatStats.to + 1,
      }));
    });

    client.on("connected", (address, port) => {
      setLoadingState("connected");
    });

    client.on("connecting", (address, port) => {
      setLoadingState("loading");
    });

    client.on("disconnected", (reason) => {
      setLoadingState("disconnected");
    });

    client.on("reconnect", () => {
      setLoadingState("loading");
    });

    client.on(
      "subscription",
      (channel, username, method, message, userstate) => {
        setChatStats((chatStats) => ({
          ...chatStats,
          subs: chatStats.subs + 1,
        }));
      }
    );

    client.on(
      "subgift",
      (channel, username, streakMonths, recipient, methods, userstate) => {
        setChatStats((chatStats) => ({
          ...chatStats,
          subGift: chatStats.subGift + 1,
        }));
      }
    );

    client.on(
      "resub",
      (channel, username, months, message, userstate, methods) => {
        // Do your stuff.
        setChatStats((chatStats) => ({
          ...chatStats,
          resub: chatStats.resub + 1,
        }));
      }
    );

    return () => {
      client.removeAllListeners();
      client.disconnect();
    };
  }, []);

  return [chatMessages, chatStats, loadingState];
};

export default useFetchToChat;
