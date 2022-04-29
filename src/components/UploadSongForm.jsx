import React from "react";
import "../styles/UploadSongForm.css"
import { UploadSvg } from "../svg";

const UploadSongForm = () => {

    //   let inputs = document.querySelectorAll(".input__file");
    //   Array.prototype.forEach.call(inputs, ((input) => {
    //     let label = input.nextElementSibling,
    //       labelVal = label.querySelector(".input__file-button-text").innerText;
    //     input.addEventListener("change", ((e) => {
    //       let countFiles = "";
    //       if (this.files && this.files.length >= 1)
    //         countFiles = this.files.length;
    //       if (countFiles)
    //         label.querySelector(".input__file-button-text").innerText = "Выбрано файлов: " + countFiles;
    //       else
    //         label.querySelector(".input__file-button-text").innerText = labelVal;
    //     }))}));

    const showUploadedFile = () => {
        const input = document.getElementById("input__file");
        const label = document.getElementById("FilePath");
        const countFiles = input.value;
        label.innerText = "Chosen file: " + countFiles;
    }
      



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
                <label id="FilePath"></label>
                </div>

            </div>
          <div className="senderContainer">
            <input type="submit" value="Upload" id="SendBtn"/>
            </div>
        </form>
    );
};

export default UploadSongForm;