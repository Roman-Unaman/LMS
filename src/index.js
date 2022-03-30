import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {
  Divider,
} from "antd";
import LoginPage from "./pages/LoginPage";
import TestPage from "./pages/TestPage";
import MainPage from "./pages/MainPage";

const App = () => {

  return (
    <>
      <LoginPage/>
      <Divider />
      <TestPage/>
      <Divider />
      <MainPage/>
    </>
  );
};

ReactDOM.render(<App />, mountNode);