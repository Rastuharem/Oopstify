import React from "react";
import "../styles/LinkBar.css";
import { Link, Router } from "react-router-dom";

const LinkBar = () => {
  return (
    <>
      <div className="container">
        <div className="linkbar">
          <Link to="/main" className="link">
            Главная
          </Link>
          <Link to="/playlist" className="link">
              Плейлист
          </Link>
          {
            //<button className="link">Главная</button>
          }
          {
            //<button className="link">Плейлист</button>
          }
        </div>
      </div>
    </>
  );
};

export default LinkBar;