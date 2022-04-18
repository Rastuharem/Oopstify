import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import MainPage from "./pages/MainPage";
import PlaylistPage from "./pages/PlaylistPage"
import reducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const rooty = () => {
  return (
    <Provider
      store={createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/playlist" element={<PlaylistPage/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(rooty(), document.getElementById("root"));