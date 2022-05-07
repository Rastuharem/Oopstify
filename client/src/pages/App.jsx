import React, { useCallback, useState, useEffect } from "react";
import MainPage from "./MainPage";
import PlaylistPage from "./PlaylistPage";
import LoadingScreen from "../components/LoadingScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

const App = () => {
  const getSongs = useCallback(()=>{
    let buf = [];
    axios.get("http://localhost:3001/api/get").then((responce) => {
      setSongs(responce.data);
      setIsLoading(false);
    });
    return buf;
  }, []);

  const [IsLoading, setIsLoading] = useState(true);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs();
  }, [getSongs]);

  return (
    <>
      {IsLoading ? (
          <LoadingScreen />
      ) : (
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<MainPage songs={songs} />} />
              <Route exact path="/playlist" element={<PlaylistPage />} />
            </Routes>
          </BrowserRouter>
      )}
    </>
  );
};

export default App;