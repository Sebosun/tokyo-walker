import React from "react";
import VolumeControl from "../ui/VolumeControl";
import classes from "./MusicMenu.module.css";
import music from "../../data/music.json";
import Card from "../ui/Card";
import { useDispatch, useSelector } from "react-redux";
import { musicActions } from "../../store/redux/audio-slice";
import { selectRandomSong } from "../../store/redux/audio-slice";

const MusicMenu = () => {
  const volume = useSelector((state) => state.audio.volume);
  const songName = useSelector((state) => state.audio.name);
  const dispatch = useDispatch();

  const onVolumeChange = (e) => {
    dispatch(musicActions.changeVolume(e.target.value));
  };

  const musicTypesGen = () => {
    let content = [];
    for (let genre in music) {
      content.push(
        <Card
          onClick={() => dispatch(selectRandomSong(genre))}
          key={genre}
          role="button"
        >
          {genre}
        </Card>
      );
    }
    return content;
  };

  return (
    <div>
      <Card className={classes.name}>{songName}</Card>
      <VolumeControl onVolumeChange={onVolumeChange} volume={volume} />
      <p className={classes.type}>select music genre:</p>
      <div className={classes.wrapper}>{musicTypesGen()}</div>
    </div>
  );
};

export default MusicMenu;
