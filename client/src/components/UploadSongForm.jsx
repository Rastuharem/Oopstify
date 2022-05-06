import React, { useEffect, useState } from "react";
import "../styles/UploadSongForm.css";
import { UploadSvg } from "../svg";

const UploadSongForm = () => {
  const [UploadedFile, setUploadedFile] = useState(null);

  const [NewSongTitle, setNewSongTitle] = useState("");
  const [NewSongAuthor, setNewSongAuthor] = useState("");
  const [NewSongAuthorImg, setNewSongAuthorImg] = useState("");
  const [NewSongAlbumImg, setNewSongAlbumImg] = useState("");

  useEffect(()=>{
    console.log(UploadedFile)
  }, [UploadedFile]);

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

  // const submitNewSong = (e) => {
  //   e.preventDefault();
  //   axios.post("http://localhost:3001/api/upload", {
  //     songFile: UploadedFile,
  //     songTitle: NewSongTitle,
  //     songAuthor: NewSongAuthor,
  //     songAuthorImg: NewSongAuthorImg,
  //     songAlbumImg: NewSongAlbumImg,
  //   }).then(()=> {
  //     alert("success!");
  //   })
  // }

  return (
    <form
      action="http://localhost:3001/api/upload"
      method="post"
      encType="multipart/form-data"
      className="musicForm"
    >
      <div className="input__wrapper">
        <input
          name="filedata"
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
                  name="songTitle"
                  type="text"
                  id="SongTitle"
                  className="fieldInput"
                  value={NewSongTitle}
                  onChange={(e) => setNewSongTitle(e.target.value)}
                  placeholder="Required"
                />
              </div>
              <div className="inputContainer">
                <label id="SongAuthorLabel">Type author here: </label>
                <input
                  name="songAuthor"
                  type="text"
                  id="SongAuthor"
                  className="fieldInput"
                  value={NewSongAuthor}
                  onChange={(e) => setNewSongAuthor(e.target.value)}
                  placeholder="Required"
                />
              </div>
              <div className="inputContainer">
                <label id="SongAuthorImgLabel">
                  Type link to author img here:{" "}
                </label>
                <input
                  name="songAuthorImg"
                  type="text"
                  id="SongAuthorImg"
                  className="fieldInput"
                  value={NewSongAuthorImg}
                  onChange={(e) => setNewSongAuthorImg(e.target.value)}
                  placeholder="Can be empty"
                />
              </div>
              <div className="inputContainer">
                <label id="SongAlbumImgLabel">
                  Type link to album img here:{" "}
                </label>
                <input
                  name="songAlbumImg"
                  type="text"
                  id="SongAlbumImg"
                  className="fieldInput"
                  value={NewSongAlbumImg}
                  onChange={(e) => setNewSongAlbumImg(e.target.value)}
                  placeholder="Can be empty"
                />
              </div>
            </>
          ) : (
            <></>
          )}

        </div>
        <div className="senderContainer">
          <button type="submit" id="SendBtn" >Upload song</button>
        </div>
      </div>
    </form>
  );
};

export default UploadSongForm;