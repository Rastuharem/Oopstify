import React from "react";
import "../styles/WelcomePage.css";
import NavBar from "../components/NavBar";

const WelcomePage = () => {
    return(
        <>
        <NavBar/>
        <div className="board">
            <div className="giant-icon">
                <img src="../../public/Oopstify.png" alt="" />
            </div>
        </div>
        </>
    );
};

export default WelcomePage;