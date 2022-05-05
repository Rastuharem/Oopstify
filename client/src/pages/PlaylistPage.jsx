import React from "react";
import NavBar from "../components/NavBar";
import "../styles/PlaylistPage.css";
import UploadSongForm from "../components/UploadSongForm";

const PlaylistPage = () => {
  return (
    <>
      <NavBar />
      
      <div className="textContainer">
        <h1>Edit your own playlist!</h1>
      </div>

      <div className="formContainer">
        <h2>Upload your music:</h2>
        <UploadSongForm />
      </div>
    </>
  );
};

export default PlaylistPage;