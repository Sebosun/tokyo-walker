import { React, useContext } from "react";

import VideoContext from "../../store/video-context";
import AudioContext from "../../store/audio-context";
import VideoList from "../menu/VideoList";
import MusicMenu from "../menu/MusicMenu";
import Button from "../ui/Button";
import Github from "../Wrappers/Github";
import Buttons from "../Wrappers/Buttons";

import classes from "./Menu.module.css";

const Menu = () => {
  const videoCtx = useContext(VideoContext);
  const audioCtx = useContext(AudioContext);

  return (
    <div className={classes.menu}>
      <VideoList />
      <Buttons
        changeMute={videoCtx.changeMute}
        muted={videoCtx.muted}
        setPlayStatus={audioCtx.setPlayStatus}
        playing={audioCtx.playing}
      />

      <MusicMenu />
      <Github />
    </div>
  );
};

export default Menu;
