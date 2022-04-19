import React from "react";
import WelcomePage from "./WelcomePage"
import MainPage from "./MainPage";
import PlaylistPage from "./PlaylistPage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/welcome" element={<WelcomePage/>}/>
        <Route exact path="/playlist" element={<PlaylistPage/>}/>
      </Routes>
      </BrowserRouter>
  );
};

export default App;