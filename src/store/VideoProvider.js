import React from "react";
import { useState } from "react";
import VideoContext from "./video-context";

const VideoProvider = (props) => {
  const [videoState, setVideoState] = useState({
    name: "Shibuya Walking",
    url: "0nTO4zSEpOs",
    start: "0",
  });
  const [isMuted, setIsMuted] = useState(true);

  const changeVideoHandler = (item) => {
    setVideoState(item);
  };
  const muteHandler = () => {
    setIsMuted((prev) => !prev);
  };

  const videoContext = {
    name: videoState.name,
    url: videoState.url,
    start: videoState.start,
    muted: isMuted,
    addVideo: changeVideoHandler,
    changeMute: muteHandler,
  };

  return (
    <VideoContext.Provider value={videoContext}>
      {props.children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
