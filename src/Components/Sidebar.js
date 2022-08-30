import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css"

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1612355524117-22e2ff8c3f6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Mitesh Sharma</h2>
        <h4>ms00110011@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2543</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">1343</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
};
