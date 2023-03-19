import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

import { StateProvider } from "./components/StateProvider";
import reducer, { initialState } from "./components/reducer";
// import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Form from "./pages/Form";

ReactDOM.render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="form" element={<Form />} />
        <Route path="post" element={<Post />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </StateProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
