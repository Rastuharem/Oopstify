import React, { useEffect, useState } from "react";
import "../styles/UploadSongForm.css";
import { UploadSvg } from "../svg";
import axios from "axios";

const UploadSongForm = () => {
  //const newSong = Object.assign({}, songs[0]);

  const [UploadedFile, setUploadedFile] = useState(null);

  const [NewSongTitle, setNewSongTitle] = useState("");
  const [NewSongAuthor, setNewSongAuthor] = useState("");
  const [NewSongAuthorImg, setNewSongAuthorImg] = useState("");
  const [NewSongAlbumImg, setNewSongAlbumImg] = useState("");

  // useEffect(() => {
  //   newSong.name = "";
  //   newSong.author = "";
  //   newSong.id = 0;
  //   newSong.url = "";
  //   newSong.links.images[0] = "";
  //   newSong.links.images[1] = "";
  // }, []);

  const showUploadedFile = () => {
    const input = document.getElementById("input__file");
    if (input.files.length !== 1) {
      alert("You can upload only one file at a time!");
    } else {
      setUploadedFile(input.files[0]);
      document.getElementById("FilePath").innerText = input.files[0].name;
      document.getElementById("SendBtn").style.display='inline';
    }
  };

  const submitNewSong = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/upload", {
      songTitle: NewSongTitle,
      songAuthor: NewSongAuthor,
      songAuthorImg: NewSongAuthorImg,
      songAlbumImg: NewSongAlbumImg,
    }).then(()=> {
      alert("success!");
    })

    // if (NewSongTitle==="" || NewSongAuthor==="") {
    //   alert("Please, fill required inputs!")
    // } else {
    //   newSong.name = NewSongTitle;
    //   newSong.author = NewSongAuthor;
    //   newSong.id = songs[songs.length-1]["id"] + 1;
    //   newSong.links.images[0] = NewSongAuthorImg;
    //   newSong.links.images[1] = NewSongAlbumImg;
    //   newSong.url = "";
    //   console.log(newSong);
    // }
  }

  return (
    <form
      action="/upload"
      method="post"
      encType="multipart/form-data"
      className="musicForm"
    >
      <div className="input__wrapper">
        <input
          name="file"
          type="file"
          id="input__file"
          className="input input__file"
          multiple
          onChange={showUploadedFile}
        />
        <label htmlFor="input__file" className="input__file-button">
          <span className="input__file-icon-wrapper">
            <div className="svgContainer">{UploadSvg}</div>
          </span>
          <span className="input__file-button-text">Choose file</span>
        </label>
      </div>
      <div className="songInfoContainer">
        <div className="filePathContainer">
          <h1>Selected file: </h1>
          <label id="FilePath"></label>
        </div>
        <div className="songFieldsContainer">

          {UploadedFile !== null ? (
            <>
              <div className="inputContainer">
                <label id="SongTitleLabel">Type title here: </label>
                <input
                  type="text"
                  id="SongTitle"
                  className="fieldInput"
                  value={NewSongTitle}
                  onChange={(event) => setNewSongTitle(event.target.value)}
                  placeholder="Required"
                />
              </div>
              <div className="inputContainer">
                <label id="SongAuthorLabel">Type author here: </label>
                <input
                  type="text"
                  id="SongAuthor"
                  className="fieldInput"
                  value={NewSongAuthor}
                  onChange={(event) => setNewSongAuthor(event.target.value)}
                  placeholder="Required"
                />
              </div>
              <div className="inputContainer">
                <label id="SongAuthorImgLabel">
                  Type link to author img here:{" "}
                </label>
                <input
                  type="text"
                  id="SongAuthorImg"
                  className="fieldInput"
                  value={NewSongAuthorImg}
                  onChange={(event) => setNewSongAuthorImg(event.target.value)}
                  placeholder="Can be empty"
                />
              </div>
              <div className="inputContainer">
                <label id="SongAlbumImgLabel">
                  Type link to album img here:{" "}
                </label>
                <input
                  type="text"
                  id="SongAlbumImg"
                  className="fieldInput"
                  value={NewSongAlbumImg}
                  onChange={(event) => setNewSongAlbumImg(event.target.value)}
                  placeholder="Can be empty"
                />
              </div>
            </>
          ) : (
            <></>
          )}

        </div>
        <div className="senderContainer">
          <button type="submit" id="SendBtn" onClick={submitNewSong}>Upload song</button>
        </div>
      </div>
    </form>
  );
};

export default UploadSongForm;