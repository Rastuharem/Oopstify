import { useState } from "react";
import "../styles/SongItem.css";
import { connect, useDispatch } from "react-redux";
import { selectSong } from "../actions";
import { DownloadSvg } from "../svg";

const SongItem = ({ song, index, selectSong, selectedSongId, playerState }) => {

    const [, setHovered] = useState(false);
    const dispatch = useDispatch();

    const selector = () => {
        return (
            <a draggable="false" href={song.url}>
                {DownloadSvg}
            </a>
        );
    };

    // Set song as active
    const now_selected = selectedSongId === song.id ? "active" : "";

    // set the gif
    const phaser = () => {
        if (selectedSongId === song.id && playerState) {
            return (
                <div className="index">
                    <img
                        alt=""
                        src="/playing.gif"
                        id="focused"
                        className="small-icon"
                    />
                </div>
            );
        } else {
            return <div className="index">{index + 1}</div>;
        }
    };
    return (
        <div
            className={`song-item`}
            id={now_selected}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => {
                selectSong(song);
                dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
            }}
        >
            {phaser()}
            <div className="name">{song.name}</div>
            <div className="author">{song.author}</div>
            <div className="selector">{selector()}</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedSongId: state.selectedSongId,
        playerState: state.playerState,
    };
};

export default connect(mapStateToProps, { selectSong })(SongItem);