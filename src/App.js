import React from "react";
import "./App.css";
import { Feed } from "./Components/Feed";
import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="appbody">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
