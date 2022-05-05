import "../styles/SongListHeader.css";
import { useEffect, useState } from "react";
import { ArrowSvg } from "../svg";

const SongListHeader = ({ songs, setNewSongList, originalPlaylist}) => {
  const [filteredSongs, setFilteredSongs] = useState([...songs]);
  const [SelectedSort, setSelectedSort] = useState("index");
  const [Direction, setDirection] = useState("down");

  useEffect(() => {
    setNewSongList(filteredSongs);
  }, [filteredSongs, setNewSongList]);

  useEffect(() => {
    let bufSongs = [];
    switch (SelectedSort) {
      case "index":
        bufSongs = [...originalPlaylist].sort((a, b) =>
          toString(a["id"]).localeCompare(toString(b["id"]))
        );
        break;
      case "title":
        bufSongs = [...filteredSongs].sort((a, b) =>
          a["name"].localeCompare(b["name"])
        );
        break;
      case "author":
        bufSongs = [...filteredSongs].sort((a, b) =>
          a["author"].localeCompare(b["author"])
        );
        break;
      default:
        break;
    }
    if (Direction === "up") {
      bufSongs.reverse();
    }
    setFilteredSongs(bufSongs);
  }, [SelectedSort, Direction]);

  const indexClick = () => {
    setSelectedSort("index");
  };

  const titleClick = () => {
    setSelectedSort("title");
  };

  const authorClick = () => {
    setSelectedSort("author");
  };

  const selectorClick = () => {
    Direction === "down" ? setDirection("up") : setDirection("down");
  };

  return (
    <div className="song-item header">
      <button onClick={indexClick} className="btn index">
        #
      </button>
      <button onClick={titleClick} className="btn title">
        Title
      </button>
      <button onClick={authorClick} className="btn author">
        Author
      </button>
      <button onClick={selectorClick} className="btn selector">
        {ArrowSvg}
      </button>
    </div>
  );
};

export default SongListHeader;