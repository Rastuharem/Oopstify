import { useEffect, useState } from "react";
import "../styles/SongList.css";
import SongItem from "./SongItem";
import SongListHeader from "./SongListHeader";

const SongList = (
  {
    songs = [],
    changePlaylist
  }
  ) => {
  const [songFilt, setSongFilt] = useState([...songs]);

  let songTags = songFilt.map((song, index) => {
    return <SongItem song={song} key={index} index={index} />;
  });

  const songListChange = (newSongFilt) => {
    setSongFilt(newSongFilt);
  };

  useEffect(()=> {
    changePlaylist(songFilt)
  }, [songFilt, changePlaylist])

  return (
    <>
      {songs.length !== 0 ? (
        <>
          <SongListHeader songs={songs} setNewSongList={songListChange} />
          <div id="song-list">{songTags}</div>
        </>
      ) : (
        <div className="empty-list">
          <h1>Ваш плейлист пустует :(</h1>
          <h2>
            Но не волнуйтесь, вы всегда можете загрузить свою музыку в разделе
            "редактирование"!
          </h2>
        </div>
      )}
    </>
  );
};

export default SongList;