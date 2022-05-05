import React, { useEffect, useState } from "react";
import "../styles/MainPage.css";
import NavBar from "../components/NavBar";
import Player from "../components/Player";
import SongList from "../components/SongList";
import SongDetail from "../components/SongDetail";

const MainPage = ({songs}) => {
  const [Playlist, setPlaylist] = useState([...songs]);

  useEffect(() => {
    for (let index = 0; index < songs.length; index++) {
      const song = Playlist[index];
      song.id = index;
    }
  }, [Playlist]);

  const changePlaylistCauseFilter = (newPlaylist) => {
    setPlaylist(newPlaylist);
  };

  return (
    <>
      <NavBar />
      <SongDetail songs={Playlist}/>
      <SongList songs={Playlist} changePlaylist={changePlaylistCauseFilter} originalPlaylist={[...songs]} />
      <Player songs={Playlist} />
      
      <a href = "#focused" id = "focus-link" hidden>
        Go to playing element
      </a>
    </>
  );
};

export default MainPage;