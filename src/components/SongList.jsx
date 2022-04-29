import { useEffect, useState } from "react";
import "../styles/SongList.css";
import PaginationBtns from "./PaginationBtns";
import SongItem from "./SongItem";
import SongListHeader from "./SongListHeader";

const SongList = ({ songs = [], changePlaylist, originalPlaylist }) => {

  const disablePages = songs.length;
  const contentPerPage = disablePages;

  const [songTags, setSongTags] = useState();
  const [firstContentIndex, setFirstContentIndex] = useState(0);
  const [lastContentIndex, setLastContentIndex] = useState(contentPerPage)

  const getFirstContentIndex = (newFirstContentIndex) => {
    setFirstContentIndex(newFirstContentIndex);
  }
  
  const getLastContentIndex = (newLastContentIndex) => {
    setLastContentIndex(newLastContentIndex);
  }

  const songListChange = (newSongFilt) => {
    changePlaylist(newSongFilt);
  };

  useEffect(() => {
    setSongTags(songs
    .slice(firstContentIndex, lastContentIndex)
    .map((song, index) => {
      return <SongItem song={song} key={index} index={index} />;
    }))
  }, [firstContentIndex, lastContentIndex, songs])

  return (
    <>
      {songs.length !== 0 ? (
        <>
          <SongListHeader songs={[...songs]} setNewSongList={songListChange} originalPlaylist={originalPlaylist}
          />
          <div id="song-list">
            {songTags}
            {/*Pagination
            <PaginationBtns contentPerPage={contentPerPage} length={songs.length} setFirstIndex={getFirstContentIndex} setLastIndex={getLastContentIndex} />*/}
          </div>
        </>
      ) : (
        <div className="empty-list">
          <h1>Your playlist is empty :(</h1>
          <h2>
            But don't worry! You can always add songs in "edit" section :D
          </h2>
        </div>
      )}
    </>
  );
};

export default SongList;