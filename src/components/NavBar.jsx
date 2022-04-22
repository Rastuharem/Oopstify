import React from "react";
import "../styles/NavBar.css";
import metadata from "../data/metadata.json";
import {OopstifySvg} from "../svg/index.js";
import LinkBar from "./LinkBar";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <LinkBar/>
                <div className="head">
                <div className="fa-oopstify">
                    <Link to="/">
                    {OopstifySvg}
                    </Link>
                </div>
                <div className="app-header">{metadata.appName}</div>
                </div>
                <div className="nav-links">
                    <a
                        href="https://www.github.com/Rastuharem/Oopstify"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </>
    );
};

export default NavBar;
