import "../styles/SongList.css";
import PaginationBtns from "./PaginationBtns";
import SongItem from "./SongItem";
import SongListHeader from "./SongListHeader";
import usePagination from "../hooks/usePagination";

const SongList = ({ songs = [], changePlaylist, originalPlaylist }) => {
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 50,
    length: songs.length,
  });

  let songTags = songs
    .slice(firstContentIndex, lastContentIndex)
    .map((song, index) => {
      return <SongItem song={song} key={index} index={index} />;
    });

  const songListChange = (newSongFilt) => {
    changePlaylist(newSongFilt);
  };

  return (
    <>
      {songs.length !== 0 ? (
        <>
          <SongListHeader
            songs={[...songs]}
            setNewSongList={songListChange}
            originalPlaylist={originalPlaylist}
          />
          <div id="song-list">
            {songTags}
            <PaginationBtns page={page} totalPages={totalPages} prevPage={prevPage} nextPage={nextPage} setPage={setPage} />
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