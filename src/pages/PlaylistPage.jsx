import React from "react";
import NavBar from "../components/NavBar";
import "../styles/PlaylistPage.css";

const PlaylistPage = () => {
    return(
        <>
            <NavBar />
            <div className="textContainer">
                <h1>Edit your own playlist!</h1>
                </div>
                <div className="formContainer">
                <h2>Upload your music:</h2>
                <form action="/upload" method="post" encType="multipart/form-data" className="musicForm">
                    <div className="fileChooser">
                    <input type="file" name="filedata" className="fileInput"></input>
                    </div>
                    <div className="fileSender">
                    <input type="submit" value="Send" />
                    </div>
                    </form>
                </div>
        </>
    );
};

export default PlaylistPage;