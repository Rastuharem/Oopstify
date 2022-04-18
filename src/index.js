import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import MainPage from "./pages/MainPage";
import PlaylistPage from "./pages/PlaylistPage"
import reducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";


const rooty = () => {
  return (
    <Provider
      store={createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <Navigate replace to="/welcome"></Navigate>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/welcome" element={<WelcomePage/>}/>
        <Route exact path="/playlist" element={<PlaylistPage/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(rooty(), document.getElementById("root"));