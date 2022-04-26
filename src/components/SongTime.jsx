import { connect } from "react-redux";
import React from "react";
import "../styles/SongTime.css";

const SongTime = ({ currentLocation, duration, audio }) => {

  const changeSongTime = (e) => {
    const musicTimer = document.getElementById('music-timer')
    const offset = musicTimer.getBoundingClientRect();
    let mouseClickCoords = Math.floor(((e.screenX - offset.left) / offset.width * 10000)-250) / 100;
    if (mouseClickCoords < 1) {
      mouseClickCoords = 0
    }
    if (mouseClickCoords > 99) {
      mouseClickCoords = 100
    }
    audio.current.currentTime = (mouseClickCoords * duration) / 100;
  };

  return (
    <div id="music-timer" onClick={changeSongTime}>
      <div
        className="completed"
        style={{
          width: `${(currentLocation / duration) * 100}%`,
        }}
      ></div>
      <span
      tabIndex={0}
      className="divider"
      style={{
        left: `${(currentLocation / duration) * 100}%`,
      }} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    duration: state.duration,
    currentLocation: state.currentLocation,
    selectedSongId: state.selectedSongId,
  };
};

export default connect(mapStateToProps)(SongTime);