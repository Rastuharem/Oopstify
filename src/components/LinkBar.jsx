import React from "react";
import "../styles/LinkBar.css";

const LinkBar = () => {
    return (
        <>
        <div className="container">
            <div className="linkbar">
                <button className="link">Главная</button>
                <button className="link">Плейлист</button>
            </div>
            </div>
        </>
    )
}

export default LinkBar;