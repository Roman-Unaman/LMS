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
import TimelinePage from "./pages/TimelinePage";
import TestContentPage from "./pages/TestContentPage";

const App = () => {

  return (
    <>
      <LoginPage/>
      <Divider />
      <TestPage/>
      <Divider />
      <MainPage/>
      <Divider />
      <TimelinePage/>
      <Divider />
      <TestContentPage/>
    </>
  );
};

ReactDOM.render(<App />, mountNode);