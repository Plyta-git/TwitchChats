import tmi from "tmi.js";
import { useState, useEffect } from "react";
const debug = false;

const useFetchToChat = (targetChannel) => {
  const [chatStats, setChatStats] = useState({
    bans: 0,
    to: 0,
    subs: 0,
    messages: 0,
    subGift: 0,
    resub: 0,
    mods: 0,
    vips: 0,
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

      setChatStats({ ...chatStats, messages: chatStats.messages + 2 });

      setChatMesseges((chatMessages) => [
        ...chatMessages,
        { channel, message, tags },
      ]);
    });

    client.on("ban", (channel, username, reason, userstate) => {
      setChatStats({ ...chatStats, bans: chatStats.bans + 1 });
    });

    client.on("timeout", (channel, username, reason, duration, userstate) => {
      setChatStats({ ...chatStats, to: chatStats.to + 1 });
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
        setChatStats({ ...chatStats, subs: chatStats.subs + 1 });
      }
    );

    client.on(
      "subgift",
      (channel, username, streakMonths, recipient, methods, userstate) => {
        setChatStats({ ...chatStats, subGift: chatStats.subGift + 1 });
      }
    );

    client.on(
      "resub",
      (channel, username, months, message, userstate, methods) => {
        // Do your stuff.
        setChatStats({ ...chatStats, resub: chatStats.resub + 1 });
      }
    );

    client.on("mods", (channel, mods) => {
      setChatStats({ ...chatStats, mods: mods.length });
    });

    client.on("vips", (channel, vips) => {
      setChatStats({ ...chatStats, vips: vips.length });
    });

    return () => {
      client.removeAllListeners();
      client.disconnect();
    };
  }, []);

  return [chatMessages, chatStats, loadingState];
};

export default useFetchToChat;
