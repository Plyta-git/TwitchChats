export const filtrEmotes = (channelEmotes, globalEmotes, chatboxSetting) => {
  let mergedBttv = new Map([]);
  let mergedFfz = new Map([]);
  let mergedseventv = new Map([]);
  const mergedttv = new Map([...globalEmotes.ttvGlobalEmotes]);

  if (chatboxSetting.bttvEmotes) {
    mergedBttv = new Map([
      ...globalEmotes.bttvGlobalEmotes,
      ...channelEmotes.bttvChannelEmotes,
    ]);
  } else mergedBttv = new Map([]);

  if (chatboxSetting.ffzEmotes) {
    mergedFfz = new Map([
      ...globalEmotes.ffzGlobalEmotes,
      ...channelEmotes.ffzChannelEmotes,
    ]);
  } else mergedFfz = new Map([]);

  if (chatboxSetting.seventvEmotes) {
    mergedseventv = new Map([
      ...globalEmotes.seventvGlobalEmotes,
      ...channelEmotes.seventvChannelEmotes,
    ]);
  } else mergedseventv = new Map([]);

  const emoteMapSet = new Map([
    ...mergedBttv,
    ...mergedFfz,
    ...mergedseventv,
    ...mergedttv,
  ]);
  return emoteMapSet;

  // let tmpEmotes = [channelEmotes.ttvChannelEmotes];
  // if (!channelEmotes) {
  //   return;
  // }
  // if (chatboxSetting.bttvEmotes)
  //   console.log(
  //     channelEmotes.bttvChannelEmotes,
  //     globalEmotes.bttvChannelEmotes
  //   );
  // if (chatboxSetting.seventvEmotes)
  //   tmpEmotes.push(channelEmotes.seventvChannelEmotes);
  // if (chatboxSetting.ffzEmotes)
  //   tmpEmotes.push(channelEmotes.ffzChannelEmotes);
  // setEmotes(
  //   new Map([
  //     ...tmpEmotes[0],
  //     ...tmpEmotes[1],
  //     ...tmpEmotes[2],
  //     ...tmpEmotes[3],
  //   ])
  // );
};
