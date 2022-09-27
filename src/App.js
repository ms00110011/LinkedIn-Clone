import React from "react";
import "./App.css";
import { Feed } from "./Components/Feed";
import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import { Login } from "./Components/Login";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="appbody">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
