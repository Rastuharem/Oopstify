import { connect } from "react-redux";
import React from "react";
import "../styles/SongTime.css";

const SongTime = ({ currentLocation, duration }) => {

  const changeSongLocation = (e) => {
    const ProgressBar = document.getElementById("completed");
    const Divider = document.getElementById("divider");
    Divider.style.left = `${e.screenX}%`;
    console.log("click");
  };

  return (
    <div id="music-timer" onClick={changeSongLocation}>
      <div
        id="completed"
        style={{
          width: `${(currentLocation / duration) * 100}%`,
        }}
      ></div>
      <span
        id="divider"
        tabIndex={0}
        style={{
          left: `${(currentLocation / duration) * 100}%`,
        }}
      ></span>
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