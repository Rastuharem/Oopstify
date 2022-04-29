import React from "react";
import "../styles/UploadSongForm.css"
import { UploadSvg } from "../svg";
import songs from "../data/songs.json"



const UploadSongForm = () => {

    const newSong = Object.assign({}, songs[0]);
    for(let keys in newSong) {
        newSong[keys] = "";
    }

    let SongFields = [];

    const showUploadedFile = () => {
        const input = document.getElementById("input__file");
        const label = document.getElementById("FilePath");
        if (input.files.length !== 1) {
            alert("You can upload only one file at a time!");
        } else {
            const file = input.files[0];
            console.log(file);
            label.innerText = file.name;
            showSongOption();
        }
    }

    const showSongOption = () => {
        for (let key in newSong) {
            SongFields.push([key, newSong[key]]);
        }
        console.log(SongFields[SongFields.length-1]);
    }

    //const [authorImg, albumImg] = [SongFields["links"]["images"][0], SongFields["links"]["images"][1]]

    //const FieldsInputs = SongFields.map
      
    return(
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
                  <div className="svgContainer">
                {UploadSvg}
                </div>
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
                    {SongFields}
                </div>
            </div>
          <div className="senderContainer">
            <input type="submit" value="Upload" id="SendBtn" hidden={false} />
            </div>
        </form>
    );
};

export default UploadSongForm;