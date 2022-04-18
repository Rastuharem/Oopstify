import React from "react";
import "../styles/MainPage.css";
import NavBar from "../components/NavBar";
import Player from "../components/Player";
import SongList from "../components/SongList";
import songs from "../data/songs.json";
import SongDetail from "../components/SongDetail";
import SongListHeader from "../components/SongListHeader";

for (let index = 0; index < songs.length; index++) {
    const song = songs[index];
    song.id = index;
}

const MainPage = () => {
    return (
        <>
            <NavBar />
            <SongListHeader />
            <SongDetail />
            <SongList songs={songs} />
            <Player />
            <a href="#focused" id="focus-link" hidden>
                Go to playing element
            </a>
        </>
    );
};

export default MainPage;