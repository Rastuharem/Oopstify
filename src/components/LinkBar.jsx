import React from "react";
import "../styles/LinkBar.css";
import { Link } from "react-router-dom";

const LinkBar = () => {
  return (
    <>
      <div className="container">
        <div className="linkbar">
          <Link to="/" className="link">
            Homepage
          </Link>
          <Link to="/playlist" className="link edit">
              Edit
          </Link>
        </div>
      </div>
    </>
  );
};

export default LinkBar;