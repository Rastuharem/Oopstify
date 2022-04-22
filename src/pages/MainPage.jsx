import React, { useEffect, useState } from "react";
import "../styles/MainPage.css";
import NavBar from "../components/NavBar";
import Player from "../components/Player";
import SongList from "../components/SongList";
import songs from "../data/songs.json";
import SongDetail from "../components/SongDetail";

const MainPage = () => {
  const [Playlist, setPlaylist] = useState([...songs]);

  useEffect(() => {
    for (let index = 0; index < songs.length; index++) {
      const song = Playlist[index];
      song.id = index;
      console.log(song);
    }
    console.log(Playlist)
  }, [Playlist]);

  const changePlaylistCauseFilter = (newPlaylist) => {
    setPlaylist(newPlaylist);
  };

  return (
    <>
      <NavBar />
      <SongDetail songs={Playlist}/>
      <SongList songs={Playlist} changePlaylist={changePlaylistCauseFilter} />
      <Player songs={Playlist} />
      <a href="#focused" id="focus-link" hidden>
        Go to playing element
      </a>
    </>
  );
};

export default MainPage;